CSP作用

- 限制资源获取
- 报告资源获取越权

3.限制方式

default-src限制全局

制定限制类型

资源类型有：connect-src、mainfest-src、img-src、font-src、media-src、style-src、frame-src、script-src


CSP的使用：

（1）在HTTP Header上使用（首选）
```
"Content-Security-Policy:" 策略
"Content-Security-Policy-Report-Only:" 策略
```
（2）在HTML上使用
```
<meta http-equiv="content-security-policy" content="策略">
<meta http-equiv="content-security-policy-report-only" content="策略">
```

```
<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline' my.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' my.com">
```