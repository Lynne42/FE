<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [设备设置](#%E8%AE%BE%E5%A4%87%E8%AE%BE%E7%BD%AE)
- [资源预加载](#%E8%B5%84%E6%BA%90%E9%A2%84%E5%8A%A0%E8%BD%BD)
- [h5页面的加载过程](#h5%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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