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