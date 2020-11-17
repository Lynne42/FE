### ``Ajax 是什么? 如何创建一个 Ajax``

AJAX是一种异步通信方式， 用来实现客户端和服务器端的异步通信，实现页面的局部刷新。

创建AJAX的步骤：

Ajax的原理简单来说就是通过XmlHttpRequest向服务器发送异步请求，从服务器获得数据， 再使用js操作DOM从而更新页面

- 创建XMLHttpRequest对象，即创建一个异步调用对象
- 创建一个新的HTTP请求，并指定HTTP请求的方式，URL, 及验证信息
- 设置响应HTTP状态变化的函数
- 发送HTTP请求
- 监听请求，获取异步调用返回的数据
- 使用JS操作DOM更新页面数据

#### 原生实现

    // 创建AJAX对象
    // ActiveXObject兼容IE6及以下
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    
    // 设置异步监听
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText)
        }
    }
    // 设置错误监听函数
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };

    // 设置响应的数据类型
    xhr.responseType = "json";

    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");


    // 配置请求参数
    xhr.open('get', '/getData', true);

    // 发送请求
    xhr.send(null);

xhr.readyState有5中状态：

- 0未初始化
- 1载入/正在发送请求
- 2载入完成/数据接收
- 3交互/解析数据
- 4接收数据完成
    

#### JQ实现

    $.ajax({
        type: 'get',
        url: '',
        data: {},
        dataType: 'jsonp',
        success: function(data) {

        },
        erroe: function(error) {

        }
    })

#### fetch

#### axios