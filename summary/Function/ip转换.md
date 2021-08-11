<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [IP转成整型](#ip%E8%BD%AC%E6%88%90%E6%95%B4%E5%9E%8B)
- [整型解析为IP地址](#%E6%95%B4%E5%9E%8B%E8%A7%A3%E6%9E%90%E4%B8%BAip%E5%9C%B0%E5%9D%80)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### IP转成整型


    function ip2int(ip){  
      var num = 0;  
      ip = ip.split(".");  
      num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);  
      num = num >>> 0;  
      return num;  
    }  

### 整型解析为IP地址  


    function int2iP(num){  
      var str;  
      var tt = new Array();  
      tt[0] = (num >>> 24) >>> 0;  
      tt[1] = ((num << 8) >>> 24) >>> 0;  
      tt[2] = (num << 16) >>> 24;  
      tt[3] = (num << 24) >>> 24;  
      str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);  
      return str;  
    }  