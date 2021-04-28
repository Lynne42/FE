# 安装Homebrew软件包管理工具
1. 确认安装ruby
```
which ruby
ruby --version
```
2. 官网
https://brew.sh/index_zh-cn

3. 下载新Homebrew安装脚本(需要翻墙)
```
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install >> brew_install

```
4. 编辑brew_install文件，设置镜像源(ustc源是中国科学技术大学)
```
open brew_install
BREW_REPO = "git://mirrors.ustc.edu.cn/brew.git".freeze
```


# 安装NVM
nvm全名node.js version management，是一个nodejs的版本管理工具, 通过它可以安装和切换不同版本的nodejs

如果已安装了node, 建议先卸载node, 安装nvm成功后， 通过nvm安装node

```
// 运行shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash

// 添加配置下列配置到 ~/.zshrc

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

```

# 安装node
使用nvm安装指定node版本
```
nvm install node // 安装最新版可用的node

nvm install 12.0.0 // 安装指定node版本
```

使用指定node版本
```
nvm use 12.0.0
```

卸载指定node
```
nvm uninstall 12.0.0
```

使用HomeBrew安装node
```
brew install node
```

