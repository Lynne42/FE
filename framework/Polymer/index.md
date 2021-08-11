<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [覆盖@polymer组件样式](#%E8%A6%86%E7%9B%96polymer%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F)
- [动态设置class名](#%E5%8A%A8%E6%80%81%E8%AE%BE%E7%BD%AEclass%E5%90%8D)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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