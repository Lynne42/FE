
# 提交规范

## 制定规范
  首先统一团队提交规范， 制定统一的标准。 当前使用广泛的是Angular提交规范

### Angular Commit message 格式 提交规范
    <type>(<scope>): <subject>
    <空行>
    <body>
    <空行>
    <footer>

### Header（第一部分）

  Header部分只有一行，包括三个字段：type （必需)、scope(可选)、subject（必需）

  - type:

        feat:     增加新功能
        fix:      修复bug

        docs:     只改动了文档相关的内容document
        style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        build:    构造工具的或者外部依赖的改动，例如webpack，npm
        refactor: 代码重构
        revert:   执行git revert回撤commit

        test:     添加测试或者修改现有测试
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

### Body（第二部分）

    commit 的详细描述

### Footer(第三部分)

    - 不兼容变动
    如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

    - 关闭Issue
    如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue。

## 生成标准

  生成规范提示，统一提交模板（命令行问答式提交）

### 使用工具，生成规范提示

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

    "husky": {
      "hooks": {
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
      }
    },


## 检验提交规范

  规范制定后， 还需要检验提交内容是否符合指定的规范

### 校验Commit message 是否符合规范

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
    
    
# 不校验commit msg

    git commit -m "message info" --no-verify


# 总结

1. 配置提交规范
```

npm i --save-dev commitizen cz-conventional-changelog

// package.json add script
"scripts": {
  "commit": "npx git-cz"
},

// package.json add config
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

2. 配置git commit 检查
```
npm i --save-dev @commitlint/{config-conventional,cli}
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

3. 代码格式化工具 [prettier](https://prettier.io/docs/en/install.html)
```
// 安装
npm install --save-dev --save-exact prettier

// 使用
echo {}> .prettierrc.json

// 添加忽略文件
touch .prettierignore

// 与eslint配合使用
npm i --save-dev eslint-config-prettier 
```

4. 配置git commit hook
```
npm i --save-dev husky lint-staged
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "*.js": [
    "./node_modules/.bin/eslint --fix",
    "git add ."
  ]
},
```

5. 添加版本控制
```
npm i --save-dev standard-version
"scripts": {
    "release": "standard-version"
},
"standard-version": {
  "skip": {
    "commit": true
  }
}
```

```
使用  release-it
```