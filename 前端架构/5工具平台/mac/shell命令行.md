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