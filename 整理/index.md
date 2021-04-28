# 根据antd space实现自己的space组件
# react children循环
# new URL
# 在useState中保存new Set数据

## 现有create-react-app项目从js迁移到ts
1. 安装typescript及相关@types
```
npm install --save typescript
npm i --save-dev @types/node @types/react @types/react-dom @types/jest @types/react-router-dom 
```

2. 添加tsconfig.json配置文件
```
{
	"compilerOptions": {
	  "target": "es5",
	  "lib": ["dom", "dom.iterable", "es2015.promise", "esnext"],
	  "allowJs": true,
	  "checkJs": true,
	  "skipLibCheck": true,
	  "esModuleInterop": true,
	  "allowSyntheticDefaultImports": true,
	  "strict": true,
	  "forceConsistentCasingInFileNames": true,
	  "module": "esnext",
	  "moduleResolution": "node",
	  "resolveJsonModule": true,
	  "isolatedModules": true,
	  "noEmit": true,
	  "jsx": "react",
	  "strictFunctionTypes": false,
	  "downlevelIteration": true,
	  "noFallthroughCasesInSwitch": true,
	  "baseUrl": "./src",
	},
	"include": ["src", "**/*.ts", "**/*.tsx"],
	"exclude": [
		"./node_modules",
		"**/*.js",
		"**/*.jsx",
	]
}
```
现有项目中， 暂时排除js，jsx文件的检查

## 数组平铺
```
export const flattenRoutes = arr =>
  arr.reduce(function(prev, item) {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.routes) ? flattenRoutes(item.routes) : []
    );
}, []);
```
## 面包屑