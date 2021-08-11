<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [查看所有标签](#%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E6%A0%87%E7%AD%BE)
- [查看指定标签信息](#%E6%9F%A5%E7%9C%8B%E6%8C%87%E5%AE%9A%E6%A0%87%E7%AD%BE%E4%BF%A1%E6%81%AF)
- [创建标签](#%E5%88%9B%E5%BB%BA%E6%A0%87%E7%AD%BE)
- [创建带注释的标签](#%E5%88%9B%E5%BB%BA%E5%B8%A6%E6%B3%A8%E9%87%8A%E7%9A%84%E6%A0%87%E7%AD%BE)
- [推送标签到远程](#%E6%8E%A8%E9%80%81%E6%A0%87%E7%AD%BE%E5%88%B0%E8%BF%9C%E7%A8%8B)
- [推送所有标签到远程](#%E6%8E%A8%E9%80%81%E6%89%80%E6%9C%89%E6%A0%87%E7%AD%BE%E5%88%B0%E8%BF%9C%E7%A8%8B)
- [根据标签恢复代码](#%E6%A0%B9%E6%8D%AE%E6%A0%87%E7%AD%BE%E6%81%A2%E5%A4%8D%E4%BB%A3%E7%A0%81)
- [](#)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



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