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