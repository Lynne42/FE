<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [下载iTerm2: http://www.iterm2.com/downloads.html](#%E4%B8%8B%E8%BD%BDiterm2-httpwwwiterm2comdownloadshtml)
- [安装Oh My Bash](#%E5%AE%89%E8%A3%85oh-my-bash)
- [使用solarized配色方案](#%E4%BD%BF%E7%94%A8solarized%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 下载iTerm2: http://www.iterm2.com/downloads.html

https://www.jianshu.com/p/ba08713c2b19

### 安装Oh My Bash

- 通过 cat /etc/shells 命令可以查看当前系统可以使用哪些shell
- 通过 echo $SHELL 命令可以查看我们当前正在使用的shell
- 如果当前的shell不是zsh，我们可以通过chsh -s /bin/zsh命令可以将shell切换为shell之zsh，终端重启之后即可生效。

- **安装Oh My ZSH**

        sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    
- **Oh My Zsh配置主题**

    - 查看主题： https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
    - 打开配置文件

        open .zshrc
    
    - 修改主题为agnoster

        1. 设置ZSH_THEME="agnoster"
        2. 安装字体 <a href="https://github.com/powerline/fonts">fonts from Vim-Powerline</a>

                # clone
                git clone https://github.com/powerline/fonts.git --depth=1
                
                # install
                cd fonts
                ./install.sh
                
                # clean-up a bit
                cd ..
                rm -rf fonts
        3. 修改默认字体

            进入：iTerm2 > Profiles > Text > Font，修改字体为：Meslo LG S DZ Regular for Powerline。
        4. 设置打开iTerm偏好设置

            iTerm2 > preferences > keys > Hotkey
            设置自定义快捷键
        
- **安装 autojump**

    autojump 是一个十分便捷的小工具，可以很方便的让我们进入某个目录，而不再输入完整的目录

        brew update

        brew install autojump

- **配置autojump**

    1. 打开配置文件

            open .zshrc
    2. 设置plugins

            plugins=(git autojump)
    3. 在.zshrc中新开一行, 输入

            [[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
    4. 保存, 退出.zshrc

    5. 使用(只有你进入过的目录它才会记录)

        比如你进入过 /home/luwnto/work/blog, 可以使用下面命令再次进入

            j blog
            j bl
            j b



### 使用solarized配色方案
   
两种下载方式：
1. <a href="https://ethanschoonover.com/solarized">直接下载</a>
2. git命令下载

        # 下载Solarized
        git clone git://github.com/altercation/solarized.git

        # 进入文件夹
        cd solarized/vim-colors-solarized/colors

        #下面可能要管理员权限
        sudo mkdir -p ~/.vim/colors
        sudo cp solarized.vim ~/.vim/colors/

        # 创建.vimrc文件
        sudo vim ~/.vimrc

        # 复制以下命令
        syntax enable
        set background=dark
        colorscheme solarized

        # 保存并退出
        :wq

3. 应用配色

    iTerm2 > perferences > profiles > colors > 选择solarized颜色



    