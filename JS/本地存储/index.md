
storage存储的只能是字符串

- 记录一些不易改变的数据
  
## sessionStorage

临时的会话存储，只要当前的会话窗口未关闭，存储的信息就不会丢失，即便刷新了页面也不会丢失

## localStorage

永久存储， 不主动清除的话，即便关掉了浏览器， 下次打开还会存在

## cookie

- 记录当前用户账号，存储用心信息
- 
document.cookie = "id=18";

cookie的用法：以键值对的方式来存储数据（key：value形式）,一个域名下能存储的cookie个数是不同的，具体的看浏览器的支持性了

当一个域名下有多个cookie时，输出document.cookie时输出的是当前域名下的所有cookie，cookie之间以分号加空格的形式隔开。

每一个cookie除了有name，value，还有其他四个属性：expires过期时间,path路径，domain域以及secure安全等。


## cookie和storage的区别

- 存储容量不同， cookie最大存储量在4kb, storage存储在5M
- 浏览器兼容性不同，cookie兼容所有的浏览器（本地cookie谷歌不支持），storage不支持IE6~8;
- 过期时间不同， cookie需要设置过期时间，根据所设置的过期时间进行处理。sessionStorage在当前窗口关闭后， 数据会消失。localStorage永久存储，除非手动清除，否则一直存在
