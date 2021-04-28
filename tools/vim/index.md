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