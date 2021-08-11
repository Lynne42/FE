<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [本地开发配置代理](#%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91%E9%85%8D%E7%BD%AE%E4%BB%A3%E7%90%86)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 本地开发配置代理
1. 添加proxy.config.json文件
```
{

  "/api/*": {
    "target": "http://101.201.126.214:31380/jupyter",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug",
    "headers": {
      "Connection": "keep-alive"
    }
  },
  "/notebook/*": {
    "target": "http://101.201.126.214:31380/",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug",
    "headers": {
      "Connection": "keep-alive"
    }
  }
}

```
2. 修改angular.json文件， 添加proxy配置
```
"serve": {
	"builder": "@angular-devkit/build-angular:dev-server",
	"options": {
	"browserTarget": "frontend:build",
	"proxyConfig": "proxy.conf.json"
	},
	...
}
```
