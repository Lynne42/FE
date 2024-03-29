<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [常用的正则表达式](#%E5%B8%B8%E7%94%A8%E7%9A%84%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)
- [检测html空标签](#%E6%A3%80%E6%B5%8Bhtml%E7%A9%BA%E6%A0%87%E7%AD%BE)
- [匹配前后空格](#%E5%8C%B9%E9%85%8D%E5%89%8D%E5%90%8E%E7%A9%BA%E6%A0%BC)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 常用的正则表达式

    1）匹配 16 进制颜色值
    var color = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

    2）匹配日期，如 yyyy-mm-dd 格式
    var date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    3）匹配 qq 号
    var qq = /^[1-9][0-9]{4,10}$/g;

    4）手机号码正则
    var phone = /^1[34578]\d{9}$/g;

    5）用户名正则
    var username = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

    6）Email正则
    var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    7）身份证号（18位）正则
    var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    8）URL正则
    var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    // (9)ipv4地址正则
    var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    // (10)//车牌号正则
    var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

    // (11)强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：var pwd = /^(?=.\d)(?=.[a-z])(?=.[A-Z]).{8,10}$/


### 检测html空标签

    const reg = /<(?![img|iframe])([^ >]+)[^>]*>([[:space:]]|&nbsp;|[\s])*<\/\1>/g

### 匹配前后空格
```
const reTrim = /^\s+|\s+$/g

/*
 * 用于检测错误的带符号16进制字符串值
*/
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/*
 * 用于检测二进制字符串
*/
const reIsBinary = /^0b[01]+$/i

/*
 * 用于检测8进制字符串
*/
const reIsOctal = /^0o[0-7]+$/i
```
