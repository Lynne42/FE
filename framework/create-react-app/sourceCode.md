<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [环境](#%E7%8E%AF%E5%A2%83)
- [流程](#%E6%B5%81%E7%A8%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# 环境
create-react-app  3.4.1
node 10.16.3

# 流程
- 检查当前node版本

- 检测项目名

  - 使用npm检测包名规范： <a href="https://github.com/npm/validate-npm-package-name">validate-npm-package-name</a>

  - 检测项目名是否与要添加的dependencies依赖包重名
    ['react', 'react-dom', 'react-scripts']

  - fs.ensureDirSync(appname) 确保目标目录存在，如果目标目录不存在，则创建目标目录， 如果存在， 则不作为

  - 判断当前创建项目是否是安全的

    如果项目仅包含GH生成的文件，则是安全的。
  此外，如果项目中包含上一次安装的错误日志，现在就删除它们。

- 检测
- 创建package.json文件

