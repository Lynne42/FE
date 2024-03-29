<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [XSS(Cross-Site Scripting)](#xsscross-site-scripting)
  - [跨站脚本攻击的原理：](#%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB%E7%9A%84%E5%8E%9F%E7%90%86)
  - [例](#%E4%BE%8B)
  - [根据攻击的来源，XSS 攻击可分为反射型、存储型和 DOM 型三种：](#%E6%A0%B9%E6%8D%AE%E6%94%BB%E5%87%BB%E7%9A%84%E6%9D%A5%E6%BA%90xss-%E6%94%BB%E5%87%BB%E5%8F%AF%E5%88%86%E4%B8%BA%E5%8F%8D%E5%B0%84%E5%9E%8B%E5%AD%98%E5%82%A8%E5%9E%8B%E5%92%8C-dom-%E5%9E%8B%E4%B8%89%E7%A7%8D)
  - [防范XSS攻击](#%E9%98%B2%E8%8C%83xss%E6%94%BB%E5%87%BB)
- [CSRF(Cross-site request forgery)](#csrfcross-site-request-forgery)
  - [跨站请求伪装原理是：](#%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E8%A3%85%E5%8E%9F%E7%90%86%E6%98%AF)
  - [例](#%E4%BE%8B-1)
  - [CSRF的特点](#csrf%E7%9A%84%E7%89%B9%E7%82%B9)
  - [CSRF攻击防御：](#csrf%E6%94%BB%E5%87%BB%E9%98%B2%E5%BE%A1)
- [点击劫持攻击](#%E7%82%B9%E5%87%BB%E5%8A%AB%E6%8C%81%E6%94%BB%E5%87%BB)
- [SQL注入防御](#sql%E6%B3%A8%E5%85%A5%E9%98%B2%E5%BE%A1)
- [XST攻击](#xst%E6%94%BB%E5%87%BB)
  - [XST攻击防御](#xst%E6%94%BB%E5%87%BB%E9%98%B2%E5%BE%A1)
  - [JSON 劫持](#json-%E5%8A%AB%E6%8C%81)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

常见的前端安全问题包括：
- XSS攻击(Cross-Site Scripting 跨站脚本攻击)
- CSRF攻击(Cross-site request forgery跨站请求伪造)
- SQL注入攻击
  
    通过Web应用接口注入SQL语法，破坏原有SQL结构，达到攻击行为。 如果网站存在注入漏洞，相当于将数据库直接暴露在攻击者面前 根据注入位置及方式不同分分为POST注入、GET注入、cookie注入、盲注、延时注入、搜索注入、base64注入等
- XST攻击（cross-site tracing）
- JSON 劫持
- 信息泄漏

    Web服务器或应用程序没有正确处理一些特殊请求，泄露 敏感信息，如用户名、密码、源代码、服务器信息、配置信息等

# XSS(Cross-Site Scripting)

## 跨站脚本攻击的原理：

是一种代码注入攻击，利用开发时留下的漏洞，攻击者向页面中注入可执行的JS脚本代码，当页面被渲染时，注入的恶意脚本便会被执行，从而破坏页面结构，泄露cookie数据，页面重定向等

## 例

在一个文章应用中（如微信文章），攻击者在文章编辑后台通过注入 script 标签及 js 代码，后端未加过滤就保存到数据库，前端渲染文章详情的时候也未加过滤，这就会让这段 js 代码执行，引起 XSS 攻击。

## 根据攻击的来源，XSS 攻击可分为反射型、存储型和 DOM 型三种：

- 反射型XSS攻击： 

    常见于用户搜索，跳转等， 
    
    恶意构造url参数，作为输入传送到服务器，引导用户访问该url, 服务器返回带有恶意代码的html,并由浏览器解析执行，此时而一代吗也会被解析执行

- 存储型XSS攻击：

    常见于保存用户输入数据的页面，比如评论，发帖等

    用户将恶意代码提交到目标服务器，用户在浏览页面时，恶意代码跟随数据一起返回的浏览器， 浏览器解析执行恶意代码，可能窃取用户数据或者伪装成用户向目标服务器发送请求

- DOM型XSS攻击：

    常见于浏览器获取url参数， 表单参数等，并将参数作为数据渲染到页面上

## 防范XSS攻击

- 对用户的输入做校验，移除与事件相关的属性，移除script，Iframe节点等
- 避免对url，form中的数据直接获取渲染
- 对展示到页面中的数据进行html转义
- 后端对接收到的参数进行过滤
- React中尽量避免dangerouslySetInnerHTML
- 避免行内事件,避免使用一些直接运行的api
  - location.href
  - onclick、onerror、onload、onmouseover
  
- 启用[内容安全策略](./csp.md)(Content Security Policy)
    - 禁止加载外域代码，防止复杂的攻击逻辑。
    - 禁止外域提交，网站被攻击后，用户的数据不会泄露到外域。
    - 禁止内联脚本执行（规则较严格，目前发现 GitHub 使用）。
    - 禁止未授权的脚本执行（新特性，Google Map 移动版在使用）。
    - 合理使用上报可以及时发现 XSS，利于尽快修复问题。

- 对一些敏感的cookie设置HttpOnly标识，禁止js脚本将读取到cookie信息
- 设置动态验证码等
- 接入安全扫描工具


# CSRF(Cross-site request forgery)

## 跨站请求伪装原理是：

诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

## 例
一个典型的 CSRF 攻击有着如下的流程：

- 受害者登录 a.com，并保留了登录凭证（Cookie）
- 攻击者引诱受害者访问了 b.com
- b.com 向 a.com 发送了一个请求：a.com/act=xx（浏览器会默认携带 a.com 的 Cookie）
- a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求
- a.com 以受害者的名义执行了 act=xx
攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作

## CSRF的特点
攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

## CSRF攻击防御：

- 同源检测（Origin 和 Referer 验证）

    告知服务器请求的原始资源的URI，其用于所有类型的请求，并且包括：协议+域名+查询参数（注意，不包含锚点信息）。

    因为原始的URI中的查询参数可能包含ID或密码等敏感信息，如果写入referer，则可能导致信息泄露。

- Samesite Cookie
  
    SameSite-cookies 是Google起草的一份草案来改进HTTP协议，就是为Set-Cookie响应头新增Samesite属性，用来标明这个Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，
    
    Samesite 有两个属性值，分别是Strict和Lax：

    - Samesite=Strict：严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie，绝无例外
    - Samesite=Lax：宽松模式，允许来自跳转的或者get请求的第三方网站使用cookie

- Token验证 或者 双重Cookie验证 以及配合Samesite Cookie。
- 把 token 隐藏在 http 的 head头中
- 提交时使用动态验证码
- 提交操作使用post方式
- 对文件上传等做类型检测，严格控制上传类型

# 点击劫持攻击

# SQL注入防御

- 数据校验
- 检查数据格式
- 使用数据库特定的敏感字符转义函数把用户提交数据进行转义
- 权限限制
- 日志处理
- 数据库操作失败的时，尽量不将原始错误日志返回，如类型错误、字段不匹配等，把代码里的SQL语句暴露出来，以防止攻击者利用错误信息进行SQL注入

# XST攻击
XST攻击（cross-site tracing）当Web服务器启用TRACE时，提交的请求头会在服务器响应Body中完整返回，其中HTTP头很可能包括Session Token、Cookies或其它认证信息，攻击者可以利用漏洞获取用户信息

## XST攻击防御

- 禁用HTTP TRACE方法

## JSON 劫持
前端构造一个恶意页面，请求 JSONP 接口，收集服务端的敏感信息
解决办法：验证 JSONP 的调用来源（Referer），服务端判断 Referer 是否是白名单，或者部署随机 Token 来防御；避免敏感接口使用 JSONP 方法。

