
# 浏览器兼容性
- 支持大部分现代浏览器
- -支持IE9,10,11需要polyfills： [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)
- 支持js feature
- [browserslist](https://github.com/browserslist/browserslist)配置支持的浏览器


# 文件结构
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

- 仅src下的文件能被webpack处理，其他目录下的文件不能被webpack处理
- 可以创建其他顶层文件， 他们不会被包含到production build中，用于存放文档等内容
- *css, img, font在js中导入， 这样资源会被webpack处理*

## public文件
- public文件夹中的内容不会被后处理或者合并缩小处理
- 缺失文件不会被编译器检测出来，会导致线上404错误
- build结果文件不会被添加内容hash

## 合适使用publish文件
- manifest文件
- html文件
- 如果有大量的图片，并且图片需要动态循环导入展示，可以把图片放到public中
- 在bundle之外需要导入其他的本地js,可以将js放在public中


# 版本升级
查看迁移说明[changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)

# 编辑器配置
代码高亮babel

# 代码格式化
husky lint-staged prettier

# 开发环境完善
- Storybook
在开发环境， 可以查看不同组件的状态
```
npx -p @storybook/cli sb init
```

- [react-styleguidist](https://create-react-app.dev/docs/developing-components-in-isolation)

# 分析build包大小
[Source map explorer](https://create-react-app.dev/docs/analyzing-the-bundle-size)

# css引入
cli默认已设置css module, sass,  Autoprefixer前缀

# 添加img, font, file

# 代码分离
- 动态导入， import()
- 根据路由分离代码


# 静态文件缓存

# moment瘦身
减少moment语言环境