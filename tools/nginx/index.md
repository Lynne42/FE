<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [查看nginx路径](#%E6%9F%A5%E7%9C%8Bnginx%E8%B7%AF%E5%BE%84)
- [查看nginx配置文件路径](#%E6%9F%A5%E7%9C%8Bnginx%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84)
- [重新加载](#%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD)
- [](#)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 查看nginx路径
```
ps aux|grep nginx
```

# 查看nginx配置文件路径
```
// 查看nginx路径
ps aux|grep nginx // 例： /usr/sbin/nginx
// 查看配置文件路径

/usr/sbin/nginx -t  // -t 测试nginx配置是否成功， 会显示配置文件路径

```

# 重新加载
```
/usr/sbin/nginx -s reload
```

#