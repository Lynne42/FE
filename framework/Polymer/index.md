## 覆盖@polymer组件样式
```
可直接选择外层标签，并重定义内部变量值
paper-menu-button {
	height: 100%;
	background-color: #2A69CF4C;
	padding: 0;
	--paper-menu-button: {
		font-size: 14px;
		color: #fff;
	}
}
#dropdown-trigger iron-icon:first-child {
	padding-right: 0.5em;
	--iron-icon-fill-color: var(--primary-background-color);
	--iron-icon-height: 20px;
	--iron-icon-width: 20px;
}
```

## 动态设置class名
```
this.$.asidePage.classList.add('classa')
this.$.asidePage.classList.remove('classa')
```

[devops](https://www.iresearch.com.cn/Detail/report?id=3702&isfree=0)

https://www.jianshu.com/p/11bfeb0a83e7