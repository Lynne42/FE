- husky 7+改版， 重新整理

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
快速使用：

```
使用 [pretty-quick](https://www.npmjs.com/package/pretty-quick)
```
手动安装：

```
// 安装
npm install --save-dev --save-exact prettier

// 使用
echo {}> .prettierrc.json

// 添加忽略文件
touch .prettierignore

// 与eslint配合使用
npm i --save-dev eslint-config-prettier 

// 添加eslint-config-prettier 到.eslintrc.* 文件extends配置参数的最后
"extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier"
],

```

1. 配置git commit hook
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
