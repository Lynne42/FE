/*
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors  : qiaolingniu
 * @Date: 2019-08-06 17:17:54
 * @LastEditTime : 2020-01-07 13:06:23
 */
import axios from 'axios';

const CancelToken = axios.CancelToken;

// 设置超时时间
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// 存储请求数据
const pending = {};

/**
 * config: 请求数据
 * //isRequest: 请求拦截器中 config.url = '/users', 响应拦截器中 config.url = 'http://localhost:3000/users'，所以加上一个标识来计算请求的全路径
 */
const getRequestIdentify = (config, isRequest = false) => {
  let url = config.url;
  if (isRequest) {
    //url = config.baseURL + config.url.substring(1, config.url.length)
  }

  let data = null;
  if(config.method === 'get') {
    data = config.params
  } else {
    data = config.data
  }
  return encodeURIComponent(url + JSON.stringify(data || ''))
}

/**
 * @description: 取消重复请求
 * @param {type} 
 * @return: 
 */
// key: 请求标识；isRequest 完成请求后也需要执行删除记录，所以添加此参数避免执行无用操作
const removePending = (key, isRequest = false) => {

  if (pending[key] && isRequest) {
    pending[key]('取消重复请求')
  }
  
  delete pending[key] // 把这条记录从 pending 中移除

}

/**
 * @description: 请求拦截器
 * @param {type} 
 * @return: 
 */
axios.interceptors.request.use(request => {

  // 拦截重复请求
  let requestData = getRequestIdentify(request, true);

  removePending(requestData, true)

  request.cancelToken = new CancelToken((c) => {
    pending[requestData] = c
  })
  
  if (request.method === 'post') {
    //判断是否上传文件
    if (Object.prototype.toString.call(request.data) !== '[object FormData]') {
      let tmpBody = '';
      Object.keys(request.data).forEach(item => {
        let value = request.data[item];
        tmpBody +=
          `${item}=` +
          encodeURIComponent(
            typeof value === 'object' ? JSON.stringify(value) : value
          ) + '&';
      });
      request.data = tmpBody.slice(0, -1);
    }
  }
  return request;
}, error => {
  return Promise.reject(error)
});


/**
 * @description: 响应拦截器
 * @param {type} 
 * @return: 
 */
axios.interceptors.response.use(response => {
  // 把已经完成的请求从 pending 中移除

  let requestData = getRequestIdentify(response.config)
  removePending(requestData)

  if(response.data.errCode === 0 || response.data.code === 0) {
    return response.data
  } else {
    if (response.request && response.request.responseURL.match(/login/)) {
      window.location = response.request.responseURL;
    }
    return Promise.reject(response.data)
  }
  
}, err => {
  return Promise.reject(err)
})