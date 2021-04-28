
- 配置proxy
创建proxy.conf.json文件
```
{

  "/api/*": {
    "target": "http://******",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug",
    "headers": {
      "Connection": "keep-alive"
    }
  }
}

```

为angular.json server 添加proxy配置
```
"options": {
	"browserTarget": "frontend:build",
	"proxyConfig": "proxy.conf.json"
},
```

- angular scss设置全局变量， 无需每个组件动态引入
```
// 创建一个全局配置文件 
:root
{
  --title-color: #f40;
}

// 在其他组件样式中使用
color: var(--title-color)

// 在angular配置文件中引入这个样式文件
"stylePreprocessorOptions": {
  "includePaths": [
    "src/app/global-style"
  ]
},
"styles": [
  "src/styles.scss",
  "src/app/global-style/index.scss"
],

```

- input 双向绑定及事件绑定
```
<input placeholder={{placeholder}} [value]= "value" (input)="value = $event.target.value" class="input" (keydown.enter)="onHandleKeydown($event)" />
```

- 向组件传递事件
```
<app-search placeholder="Search Workspaces" [onSearch]="onHandleSearch"></app-search>

onHandleSearch(value) {
  console.log(111, value)
}
```

- 自定义指令