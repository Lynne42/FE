<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [约定式提交规范](#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)
- [为什么使用约定式提交规范](#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8%E7%BA%A6%E5%AE%9A%E5%BC%8F%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)
- [提交规范](#%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)
  - [Header（第一部分）](#header%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86)
  - [Body（第二部分）](#body%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%88%86)
  - [Footer(第三部分)](#footer%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86)
- [使用工具，生成规范提示](#%E4%BD%BF%E7%94%A8%E5%B7%A5%E5%85%B7%E7%94%9F%E6%88%90%E8%A7%84%E8%8C%83%E6%8F%90%E7%A4%BA)
- [检验提交规范](#%E6%A3%80%E9%AA%8C%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)
  - [校验Commit message 是否符合规范](#%E6%A0%A1%E9%AA%8Ccommit-message-%E6%98%AF%E5%90%A6%E7%AC%A6%E5%90%88%E8%A7%84%E8%8C%83)
- [添加git hook钩子，在commit阶段自动检测相应规范](#%E6%B7%BB%E5%8A%A0git-hook%E9%92%A9%E5%AD%90%E5%9C%A8commit%E9%98%B6%E6%AE%B5%E8%87%AA%E5%8A%A8%E6%A3%80%E6%B5%8B%E7%9B%B8%E5%BA%94%E8%A7%84%E8%8C%83)
- [不校验commit msg(避免使用)](#%E4%B8%8D%E6%A0%A1%E9%AA%8Ccommit-msg%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8)
- [link](#link)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# 约定式提交规范
约定式提交规范是一种基于提交消息的轻量级约定。 它提供了一组用于创建清晰的提交历史的简单规则； 这使得编写基于规范的自动化工具变得更容易。 这个约定与 SemVer 相吻合， 在提交信息中描述新特性、bug 修复和破坏性变更。

# 为什么使用约定式提交规范
- 自动化生成 CHANGELOG。
- 基于提交的类型，自动决定语义化的版本变更。
- 向同事、公众与其他利益关系者传达变化的性质。
- 触发构建和部署流程。
- 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。

# 提交规范
约定式提交规范受到了 Angular 提交准则的启发，并在很大程度上以其为依据。
```
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```

## Header（第一部分）

  Header部分只有一行，包括三个字段：type （必需)、scope(可选)、subject（必需）

  - type:

        feat:     增加新功能(和语义化版本中的 MINOR 相对应)
        fix:      修复bug(和语义化版本中的 PATCH 相对应)

        docs:     只改动了文档相关的内容document
        style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        build:    构造工具的或者外部依赖的改动，例如webpack，npm
        refactor: 代码重构
        revert:   执行git revert回撤commit

        test:     添加单元测试或者修改现有测试
        perf:     提高性能的改动
        ci:       与CI（持续集成服务）有关的改动
        chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动
  
  - scope

      说明 commit 影响的范围，比如数据层、控制层、视图层等

  - subject

      commit 提交的简短描述，不超过50个字符

        - 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
        - 第一个字母小写
        - 结尾不加句号（.）

## Body（第二部分）

    commit 的详细描述

## Footer(第三部分)

    - 不兼容变动
    如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

    - 关闭Issue
    如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue。


# 使用工具，生成规范提示

    commitizen： 撰写符合规范的commit message 的工具
    
    cz-conventional-changelog: 提供一个约定式提交标准


    npm i --save-dev commitizen
    commitizen init cz-conventional-changelog --save-dev --save-exact

    {
      "scripts": {
        "commit": "git-cz"
      }
    }

    "config": {
      "commitizen": {
        "path": "cz-conventional-changelog"
      }
    }

    // prepare-commit-msg： 使直接使用git commit命令行提交的时候也强制转到 commitizen 的模式
    "husky": {
      "hooks": {
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
      }
    },


# 检验提交规范

  规范制定后， 还需要检验提交内容是否符合指定的规范

## 校验Commit message 是否符合规范

    npm install --save-dev @commitlint/{config-conventional,cli}

    echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

    // 配置检测钩子
    "husky": {
      "hooks": {
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    },


# 添加git hook钩子，在commit阶段自动检测相应规范

  husky 生成git hook配置，在git命令前执行指定命令， 例如执行代码质量检查， 检测commit提交规范

    npm install husky --save-dev
    
    
# 不校验commit msg(避免使用)

    git commit -m "message info" --no-verify


# link
- [约定式提交规范](https://www.conventionalcommits.org/zh-hans)