<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [查看全局安装包](#%E6%9F%A5%E7%9C%8B%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E5%8C%85)
- [查看node, npm安装路径](#%E6%9F%A5%E7%9C%8Bnode-npm%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84)
- [设置镜像](#%E8%AE%BE%E7%BD%AE%E9%95%9C%E5%83%8F)
- [NRM](#nrm)
- [参数](#%E5%8F%82%E6%95%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# 查看全局安装包

```
npm list -g --depth 0
// 删除全局安装包
npm rm -g react
```
# 查看node, npm安装路径
```
which node
````
# 设置镜像
```
npm config set registry https://registry.npm.taobao.org
```

查看npm配置
```
npm config ls

npm config get registry
```

# NRM
通过NRM管理镜像的地址，切换镜像源

查看镜像设置
```
nrm ls
```

切换镜像源
```
nrm use taobao
```

# 参数