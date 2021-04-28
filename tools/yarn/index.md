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