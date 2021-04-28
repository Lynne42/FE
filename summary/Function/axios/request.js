/*
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2020-01-07 13:07:12
 * @LastEditTime: 2020-01-07 13:07:15
 */
// 错误上报
function handleErrorReport(params) {
    if (process.env.NODE_ENV === 'production') {
        const page = window.location.pathname;
        aegis.defaultErrorReport({
            currentPage: page,
            ...params,
        })
    }
}

function request(data) {

    const { url, method = 'get', params, ...others } = data;

    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            [method === 'get' ? 'params' : 'data']: params,
            ...others
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                if (!err.message || err.message !== '取消重复请求') {
                    reject(err && err.data ? err.data : err);
                    message.error(`接口异常：${(err.msg) || '未知错误'}`);
                    handleErrorReport({
                        url,
                        getParams: params,
                        result: err,
                    });
                }
            });
    });
}

export default request;