## 什么是跨域
跨域是由浏览器的同源策略造成的，会阻止一个域的js脚本和另一个不同域的内容进行交互


## 为什么会有跨域
浏览器的同源策略限制了不同域的访问

同源策略限制:
- 无法获取非同源网页的cookie, localStoragy, indexDB， 
- 无法操作非同源网页的DOM和js对象

- 非同源网页下AJAX请求被阻止

同源指的是，一个请求的 协议，域名，端口必须与当前页面的url的协议，域名端口相同， 任意一个不相同就会造成跨域

当前页面url	|被请求页面url	|是否跨域	|原因
---|:--:|---:|:--:
http://www.test.com/ |	http://www.test.com/index.html |	否 |	同源（协议、域名、端口号相同）
http://www.test.com/ |	https://www.test.com/index.html	| 跨域	| 协议不同（http/https）
http://www.test.com/ |	http://www.baidu.com/ |	跨域 |	主域名不同（test/baidu）
http://www.test.com/ |	http://blog.test.com/ |	跨域 |	子域名不同（www/blog）
http://www.test.com:8080/ |	http://www.test.com:7001/ |	跨域 |	端口号不同（8080/7001）
http://www.test.com/ | http://192.168.4.10/ | 跨域 | 域名和域名对应的ip


## 跨域如何解决

1. [通过jsonp跨域](#jsonp)

    - 因为使用script加载的原理，只能实现get请求
  
2. [document.domain + iframe跨域](#domain)

    - 只适用于主域相同，子域不同的跨域场景

3. [location.hash + iframe 跨域](#hash)
4. [window.name + iframe 跨域](#name)
5. [postMessage跨域](#postMessage)
   - 当前页面和其他的打开的新窗口的数据传递
   - 多窗口之间消息传递
   - 页面与嵌套的iframe之间的消息传递
   - 上面三个场景的跨域数据传递
  
1. [跨域资源共享CORS](#cors)
2. [nginx代理](#nginx)
3. [nodejs中间件代理](#nodejs)
4.  [webSocket协议跨域](#websocket)


### <a id="jsonp">通过jsonp跨域</a>
---
`原理`： 通常link,img,script标签请求资源是不受同源策略限制的，因此可以动态创建script标签，请求一个带参地址实现跨域通信

- 原生实现

        <script>
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'http://www.dm2.com/get?id=1&callback=handleCallback';
            document.head.appendChild(script);
            function handleCallback(data) {
                console.log(data);
                document.head.removeChild(script);
            }
        </script>

- JQ ajax
  
        $.ajax({
            url: '',
            type: 'get',
            dataType: 'jsonp',
            jsonpCallback: 'handleCallback',
            data: {},
        })

### <a id="domain">document.domain + iframe跨域</a>
---

**只适用于主域相同，子域不同的跨域场景**

**`原理`： 浏览器是通过document.domain来判断是否同域的，所以同时设置两个页面的document.domain为基础主域，就实现了同域**

- 父窗口（a.qq.com）
  
        <iframe id="iframe" src="http://b.qq.com/b.html"></iframe>
        <script>
            document.domain = 'qq.com';
            // ...
        </script>
- iframe(b.qq.com)

        <script>
            document.domain = 'qq.com';
            // ...
        </script>


### <a id="hash">location.hash + iframe 跨域</a>
---
`原理`：a预与b跨域相互通信， 通过中间页面c来实现。三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信


### <a id="name">window.name + iframe 跨域</a>
---
### <a id="postMessage">postMessage跨域</a>
---
作用：
- 当前页面和其他的打开的新窗口的数据传递
- 多窗口之间消息传递
- 页面与嵌套的iframe之间的消息传递
- 上面三个场景的跨域数据传递

        postMessage(JSON.stringify(obj), '目标域：协议+主机+端口')

    例：
    a.html(www.domain1.com)

        <iframe id="iframe" src="http://www.domain2.com/b.html"></iframe>
        <script>
            const iframe = document.getElementById('iframe');
            iframe.onload = function() {
                var data = {
                    name: 'domain'
                }
                iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com')
            }
            window.addEventListener('message', function(e) {
                console.log(e.data)
            })
        </script>

    b.html(www.domain2.com)

        <script>
            window.addEventListener('message', function(e) {
                console.log(e.data)
                const data = JSON.parse(e.data);
                if(data) {
                    data.age = 1;
                }
                window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com')
            })
        </script>

### <a id="cors">跨域资源共享CORS</a>
---

普通的跨域请求： 只服务端设置Access-Control-Allow-Origin: ''即可， 前端无需设置，若要带cookie请求，前后端都需要设置

- 原生实现
    
        var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容

        // 前端设置是否带cookie
        xhr.withCredentials = true;

        xhr.open('post', 'http://www.domain2.com:8080/login', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('user=admin');

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };

- JQ ajax
    
        $.ajax({
            ...
           xhrFields: {
               withCredentials: true    
                // 前端设置是否带cookie
           },
           crossDomain: true,   
            // 会让请求头中包含跨域的额外信息，但不会含cookie
            ...
        });

- axios
  
        axios.defaults.withCredentials = true;

服务端设置：

        'Access-Control-Allow-Credentials': 'true',     
        // 后端允许发送Cookie
        'Access-Control-Allow-Origin': 'http://www.domain1.com',    
        // 允许访问的域（协议+域名+端口）
                    
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly' 

### <a id="nginx">nginx代理</a>
---

**`原理`： 通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。**

#proxy服务器

    server {
        listen       81;
        server_name  www.domain1.com;

        location / {
            proxy_pass   http://www.domain2.com:8080;  #反向代理
            proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
            index  index.html index.htm;

            # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
            add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
            add_header Access-Control-Allow-Credentials true;
        }
    }

### <a id="nodejs">nodejs中间件代理</a>
---

**`原理：`node中间件实现跨域代理，原理大致与nginx相同，都是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。**

中间件服务器：

    var express = require('express');
    var proxy = require('http-proxy-middleware');
    var app = express();

    app.use('/', proxy({
        // 代理跨域目标接口
        target: 'http://www.domain2.com:8080',
        changeOrigin: true,

        // 修改响应头信息，实现跨域并允许带cookie
        onProxyRes: function(proxyRes, req, res) {
            res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
            res.header('Access-Control-Allow-Credentials', 'true');
        },

        // 修改响应信息中的cookie域名
        cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
    }));

    app.listen(3000);
    console.log('Proxy server is listen at port 3000...');
### <a id="websocket">webSocket协议跨域</a>
---
