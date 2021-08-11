<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [多应用](#%E5%A4%9A%E5%BA%94%E7%94%A8)
  - [angular multiple application(多应用)](#angular-multiple-application%E5%A4%9A%E5%BA%94%E7%94%A8)
  - [多应用共享component (angular multiple application share component）](#%E5%A4%9A%E5%BA%94%E7%94%A8%E5%85%B1%E4%BA%ABcomponent-angular-multiple-application-share-component)
  - [多应用共享directive](#%E5%A4%9A%E5%BA%94%E7%94%A8%E5%85%B1%E4%BA%ABdirective)
  - [多应用共享css (angular multiple application share style)](#%E5%A4%9A%E5%BA%94%E7%94%A8%E5%85%B1%E4%BA%ABcss-angular-multiple-application-share-style)
- [库](#%E5%BA%93)
  - [库组件样式不生效 (Angular library css not working)](#%E5%BA%93%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E4%B8%8D%E7%94%9F%E6%95%88-angular-library-css-not-working)
  - [库build失败](#%E5%BA%93build%E5%A4%B1%E8%B4%A5)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 多应用
## angular multiple application(多应用)
```
ng generate application app1 --routing
ng generate application app1 --routing

```
## 多应用共享component (angular multiple application share component）	
  - [第三方工具nx](https://nx.dev/latest/angular/getting-started/intro)
  - 自定义library
	```
	ng g library my-library
	```
## 多应用共享directive

在库组件中创建指令
```
ng g directive directive/input-number --project=my-library
```

## 多应用共享css (angular multiple application share style)

在angular.json 相应项目中引入公共样式
```
"styles": [
	"global-style/index.scss",
	"global-style/reset-meterial.scss",
	"projects/notebook-center/src/styles.scss"
],
"stylePreprocessorOptions": {
	"includePaths": [
	"node_modules"
	]
},
```

# 库
## 库组件样式不生效 (Angular library css not working)
在引用库的项目中设置允许处理node_modules内项目中引用的样式
```
"styles": ...,
"stylePreprocessorOptions": {
	"includePaths": [
		"node_modules"
	]
},
"scripts": ...
```
```
// ng-packahe.json

"lib": {
    "styleIncludePaths": ["../../node_modules"],
    "entryFile": "src/public-api.ts"
}
```

## 库build失败
error：
```
src/public_api.ngtypecheck.ts' not found.
src/public_api.ts' not found.
```

解决：
```
将lib 配置从package.json 移动到 ng-package.json
```