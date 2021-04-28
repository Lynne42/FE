"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CancelToken = _axios["default"].CancelToken; // 设置超时时间

_axios["default"].defaults.timeout = 5000;
_axios["default"].defaults.withCredentials = true;
_axios["default"].defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
_axios["default"].defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // 存储请求数据

var pending = {};
/**
 * config: 请求数据
 * //isRequest: 请求拦截器中 config.url = '/users', 响应拦截器中 config.url = 'http://localhost:3000/users'，所以加上一个标识来计算请求的全路径
 */

var getRequestIdentify = function getRequestIdentify(config) {
  var isRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var url = config.url;

  if (isRequest) {//url = config.baseURL + config.url.substring(1, config.url.length)
  }

  var data = null;

  if (config.method === 'get') {
    data = config.params;
  } else {
    data = config.data;
  }

  return encodeURIComponent(url + JSON.stringify(data || ''));
};
/**
 * @description: 取消重复请求
 * @param {type} 
 * @return: 
 */
// key: 请求标识；isRequest 完成请求后也需要执行删除记录，所以添加此参数避免执行无用操作


var removePending = function removePending(key) {
  var isRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (pending[key] && isRequest) {
    pending[key]('取消重复请求');
  }

  delete pending[key]; // 把这条记录从 pending 中移除
};
/**
 * @description: 请求拦截器
 * @param {type} 
 * @return: 
 */


_axios["default"].interceptors.request.use(function (request) {
  // 拦截重复请求
  var requestData = getRequestIdentify(request, true);
  removePending(requestData, true);
  request.cancelToken = new CancelToken(function (c) {
    pending[requestData] = c;
  });

  if (request.method === 'post') {
    //判断是否上传文件
    if (Object.prototype.toString.call(request.data) !== '[object FormData]') {
      var tmpBody = '';
      Object.keys(request.data).forEach(function (item) {
        var value = request.data[item];
        tmpBody += "".concat(item, "=") + encodeURIComponent(_typeof(value) === 'object' ? JSON.stringify(value) : value) + '&';
      });
      request.data = tmpBody.slice(0, -1);
    }
  }

  return request;
}, function (error) {
  return Promise.reject(error);
});
/**
 * @description: 响应拦截器
 * @param {type} 
 * @return: 
 */


_axios["default"].interceptors.response.use(function (response) {
  // 把已经完成的请求从 pending 中移除
  var requestData = getRequestIdentify(response.config);
  removePending(requestData);

  if (response.data.errCode === 0 || response.data.code === 0) {
    return response.data;
  } else {
    if (response.request && response.request.responseURL.match(/login/)) {
      window.location = response.request.responseURL;
    }

    return Promise.reject(response.data);
  }
}, function (err) {
  return Promise.reject(err);
});