<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [安装tree命令](#%E5%AE%89%E8%A3%85tree%E5%91%BD%E4%BB%A4)
- [命令](#%E5%91%BD%E4%BB%A4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 安装tree命令
```
brew install tree
```
## 命令

    -a 显示所有文件和目录。
    -A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
    -C 在文件和目录清单加上色彩，便于区分各种类型。
    -d 显示目录名称而非内容。
    -D 列出文件或目录的更改时间。
    -f 在每个文件或目录之前，显示完整的相对路径名称。
    -F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上”*”,”/”,”=”,”@”,”|”号。
    -g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
    -i 不以阶梯状列出文件或目录名称。
    -I 忽略目录或者项目名称

            tree -I "node_modules"
            tree -I "node_modules|cache|test_*"
    -L level 显示几级项目结构

            tree -L 2 显示两级项目目录

    -l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
    -n 不在文件和目录清单加上色彩。
    -N 直接列出文件和目录名称，包括控制字符。
    -p 列出权限标示。
    -P <范本样式> 只显示符合范本样式的文件或目录名称。
    -q 用”?”号取代控制字符，列出文件和目录名称。
    -s 列出文件或目录大小。
    -t 用文件和目录的更改时间排序。
    -u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
    -x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。



事例：

        tree -I 'node_modules'  -L 2 -N  > README.md
        忽略node_modules文件， 显示2级目录结构，正确显示中文， 在README.md 中生成结构

