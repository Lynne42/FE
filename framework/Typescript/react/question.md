<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [组件定义](#%E7%BB%84%E4%BB%B6%E5%AE%9A%E4%B9%89)
  - [定义函数式组件](#%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)
  - [定义类组件](#%E5%AE%9A%E4%B9%89%E7%B1%BB%E7%BB%84%E4%BB%B6)
  - [使用useRef](#%E4%BD%BF%E7%94%A8useref)
  - [使用useState](#%E4%BD%BF%E7%94%A8usestate)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 组件定义
## 定义函数式组件
```
type Props = {
	title: string,
};
  
const CommonTitle: React.FunctionComponent<Props> = props => {
	const { title } = props;
	return <h2>{title}</h2>;
};
```
## 定义类组件

## 使用useRef
```
const contentRef = useRef<HTMLInputElement>(null);
```

## 使用useState
```
interface resizeData {
	screenWidth: number,
	screenHeight: number,
	ratiowh: number,
	ratiohw: number,
	rect: any,
}
let [
	  { screenWidth, screenHeight, ratiowh, ratiohw, rect },
	  setState
	] = useState<resizeData>({
	  screenWidth: 0,
	  screenHeight: 0,
	  ratiowh: 0,
	  ratiohw: 0,
	  rect: undefined
	});
```