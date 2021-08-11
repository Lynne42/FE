<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [VIM打开文件](#vim%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6)
- [添加文本](#%E6%B7%BB%E5%8A%A0%E6%96%87%E6%9C%AC)
- [VIM编辑文件权限问题:"E45: 'readonly' option is set (add ! to override)"](#vim%E7%BC%96%E8%BE%91%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98e45-readonly-option-is-set-add--to-override)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2019-11-01 11:18:55
 * @LastEditTime: 2019-11-01 11:22:01
 -->
### VIM打开文件

    sudo vi /etc/profile

### 添加文本

    i 在当前光标位置前插入数据

    a 在当前光标位置后插入数据

    I 在当前行开头处插入数据

    A 在当前行末尾处插入数据

    o 在当前行下面出入一行

    O 在当前行上面插入一行
    
### VIM编辑文件权限问题:"E45: 'readonly' option is set (add ! to override)"

    点击Esc键
    输入： :wq!