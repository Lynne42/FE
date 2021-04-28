## 设备设置

    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,minimum-scale=1,maximum-scale=1">

## 资源预加载

    - DNS

## h5页面的加载过程
初始化 webview -> 请求页面 -> 下载数据 -> 解析HTML -> 请求 js/css 资源 -> dom 渲染 -> 解析 JS 执行 -> JS 请求数据 -> 解析渲染 -> 下载渲染图片

降低请求量：合并资源，减少 HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。

加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。

缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存 localStorage。

渲染：JS/CSS优化，加载顺序，服务端渲染模板直出。