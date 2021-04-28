# 安装
```
npm install --save-dev stylelint stylelint-config-standard
```

# 创建配置文件
```
touch .stylelintrc.json
```

# 添加配置
```
{
  "extends": "stylelint-config-standard"
}
```

# 使用
```
npx stylelint "**/*.css"
```

# 与prettier共享
```
npm install --save-dev stylelint-config-prettier

{
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-prettier"
    ]
}
```

# 设置属性排序
```
npm install --save-dev stylelint-order stylelint-config-rational-order
{
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-rational-order",
      "stylelint-config-prettier"
    ],
    "plugins": ["stylelint-order", "stylelint-config-rational-order/plugin"],
    "rules": {
      "comment-empty-line-before": null,
      "no-invalid-double-slash-comments": null,
      "no-descending-specificity": null,
      "declaration-empty-line-before": null,
      "order/properties-order": [],
      "plugin/rational-order": [true, {
        "border-in-box-model": false,
        "empty-line-between-groups": false
      }]
    }
}
```