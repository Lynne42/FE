<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [工作区](#%E5%B7%A5%E4%BD%9C%E5%8C%BA)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Description:
 * @Author: qiaolingniu
 * @Date: 2020-08-18 16:53:29
 * @LastEditors: qiaolingniu
 * @LastEditTime: 2020-08-18 16:57:25
 * @FilePath: /Learning/框架:库.../yarn/index.md
-->
## [工作区](https://classic.yarnpkg.com/zh-Hans/docs/workspaces/)

- 使用

  package.json

      {
        "private": true,
        "workspaces": ["workspace-a", "workspace-b", "src/*"]
      }
  即在src下个文件中使用自己的package配置