<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [查看系统支持的shell](#%E6%9F%A5%E7%9C%8B%E7%B3%BB%E7%BB%9F%E6%94%AF%E6%8C%81%E7%9A%84shell)
- [查看当前正在使用的shell](#%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E6%AD%A3%E5%9C%A8%E4%BD%BF%E7%94%A8%E7%9A%84shell)
- [切换shell](#%E5%88%87%E6%8D%A2shell)
- [注意](#%E6%B3%A8%E6%84%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 查看系统支持的shell

    cat /etc/shells

### 查看当前正在使用的shell

    echo $SHELL
  
### 切换shell

    sudo chsh -s /bin/zsh
    将当前使用的shell切换为zsh

  如果切换不成功, 提示chsh:no changes made, 则可以运行一下代码:

    dscl . -read /Users/$USER/ UserShell
    
    exec su - $USER

### 注意
  当需要安装需要设置PATH的应用的时候, 需要把PATH设置到当前使用的shell配置文件中