查看或生成SSH公钥
- 查看
1.通过命令窗口
```

a. 打开你的 git bash 窗口

b. 进入 .ssh 目录：cd ~/.ssh

c. 找到 id_rsa.pub 文件：ls

d. 查看公钥：cat id_rsa.pub 或者 vim id_rsa.pub
```

- 生成

```
ssh-keygen
```