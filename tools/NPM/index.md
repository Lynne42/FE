
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