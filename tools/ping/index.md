<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Mac 下查看网络连接](#mac-%E4%B8%8B%E6%9F%A5%E7%9C%8B%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5)
- [Windows 下查看网络连接](#windows-%E4%B8%8B%E6%9F%A5%E7%9C%8B%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5)
- [Linux 下查看网络连接](#linux-%E4%B8%8B%E6%9F%A5%E7%9C%8B%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2020-03-16 17:34:53
 * @LastEditTime: 2020-03-16 17:48:32
 -->

## Mac 下查看网络连接

- ping 域名
    
        ping www.baidu.com
        ping 192.168.0.91

- ping 端口
    
        nc -vz -w 2 www.baidu.com 8080
        nc -vz -w 2 192.168.0.91 8080


## Windows 下查看网络连接

- ping 域名
    
        ping www.baidu.com
        ping 192.168.0.91

- ping 端口

    1.首先安装tcping命令,可以去官网：http://www.elifulkerson.com/projects/tcping.php下载

    2.将下载的文件放在C:\WINDOWS\system32  目录(其实就是与cmd.exe同级)下，就可以直接使用了（其实tcping.exe的使用原理就是，在与它同级处打开cmd命令便可以使用tcping命令，放在桌面都可以）。

    3.测试：win+R打开cmd窗口

        tcping 192.168.0.190(ip地址或域名)

        tcping 192.168.0.190 8080

## Linux 下查看网络连接


- ping 域名
    
        ping www.baidu.com
        ping 192.168.0.91

- ping 端口
    
        telnet www.baidu.com 8080
        telnet 192.168.0.91 8080
        
