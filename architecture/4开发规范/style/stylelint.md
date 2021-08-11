<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [安装](#%E5%AE%89%E8%A3%85)
- [创建配置文件](#%E5%88%9B%E5%BB%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
- [添加配置](#%E6%B7%BB%E5%8A%A0%E9%85%8D%E7%BD%AE)
- [使用](#%E4%BD%BF%E7%94%A8)
- [与prettier共享](#%E4%B8%8Eprettier%E5%85%B1%E4%BA%AB)
- [设置属性排序](#%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E6%8E%92%E5%BA%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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