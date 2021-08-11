<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [删除node](#%E5%88%A0%E9%99%A4node)
  - [查看当前镜像](#%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E9%95%9C%E5%83%8F)
  - [还原npm配置](#%E8%BF%98%E5%8E%9Fnpm%E9%85%8D%E7%BD%AE)
  - [查看全局安装的npm包](#%E6%9F%A5%E7%9C%8B%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E7%9A%84npm%E5%8C%85)
  - [删除全局安装的包](#%E5%88%A0%E9%99%A4%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E7%9A%84%E5%8C%85)
  - [发布一个稳定的版本](#%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E7%A8%B3%E5%AE%9A%E7%9A%84%E7%89%88%E6%9C%AC)
- [查看npm包的所有版本](#%E6%9F%A5%E7%9C%8Bnpm%E5%8C%85%E7%9A%84%E6%89%80%E6%9C%89%E7%89%88%E6%9C%AC)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2019-01-24 15:01:33
 * @LastEditTime: 2019-10-31 10:50:22
 -->
### 删除node

        brew uninstall node        
### 查看当前镜像

        yarn config get registry  // 查看yarn当前镜像源
        yarn config get registry  // 查看yarn当前镜像源

### 还原npm配置

        npm config edit

### 查看全局安装的npm包

        npm list -g --depth 0
    
### 删除全局安装的包

        npm uninstall -g <包名>

### 发布一个稳定的版本

  1.更新版本号（major | minor | patch | premajor | preminor | prepatch | prerelease）

        # 大版本并且不向下兼容时，使用 major
        # 有新功能且向下兼容时，使用 major
        # 修复一些问题、优化等，使用 patch
   例：
        下面比如更新一个 patch 小版本号

        $ npm version patch
        $ npm publish


  2. 预发布版本

很多时候一些新改动，并不能直接发布到稳定版本上（稳定版本的意思就是使用 npm install demo 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。

        发布一个 prelease 版本，tag=beta
        $ npm version prerelease
        $ npm publish --tag beta
        比如原来的版本号是 1.0.1，那么以上发布后的版本是 1.0.1-0，用户可以通过 npm install demo@beta 或者 npm install demo@1.0.1-0 来安装。

  3. 当 prerelease 版本稳定之后，可以把它设置为稳定版本

    首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本

        $ npm dist-tag ls

        设置 1.0.1-1 版本为稳定版本
        $ npm dist-tag add demo@1.0.1-1 latest

        或者通过 tag 来设置
        $ npm dist-tag add demo@beta latest
        当发现 BUG，也可以通过 npm dist-tag 命令回退。

        这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install demo 即可安装该版本。

## 查看npm包的所有版本
```
npm view [react] versions
```