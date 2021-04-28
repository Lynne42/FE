

## 查看所有标签

    git tag

## 查看指定标签信息

    git show v1.0

## 创建标签

    git tag v1.0
    git tag v1.1 [对应提交的comment id]   // git  tag v1.1 471fd27

## 创建带注释的标签

    git tag -a v1.0 -m '修改信息' [对应提交的comment id]

        -a 指定标签名
        -m 指定注释信息

## 推送标签到远程

    git push origin tag名称
    
## 推送所有标签到远程

    git push --tags
    或者
    git push origin --tags

## 根据标签恢复代码

    - 查看标签详情，找到打标签的对应提交的comment id

        git tag
        git show v1.0
    
    - 版本回退， 将主干分支回退到某个指定版本

        git reset --hard commentid

    - 将版本回退到最后一次提交的版本

        git reset --hard HEAD

## 