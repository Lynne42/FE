
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