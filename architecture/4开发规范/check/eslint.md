<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [安装和使用](#%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8)
  - [配置react相关规范](#%E9%85%8D%E7%BD%AEreact%E7%9B%B8%E5%85%B3%E8%A7%84%E8%8C%83)
  - [](#)
- [规范](#%E8%A7%84%E8%8C%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 安装和使用

    npm i eslint --save-dev

    // 设置配置文件

    npx eslint --init
    ./node_modules/.bin/eslint --init

    // 使用
    npx eslint a.js
    ./node_modules/.bin/eslint a.js

## 配置react相关规范
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks -D
```

## 
命令行
```
"eslint": "eslint --ext .ts,.tsx,.jsx,.js src/",
```

# 规范
- [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy)