- @important

    导入其他CSS样式文件
- @font-fase

    设置自定义字体
    ```
    @font-face {
        font-family: 'MyWebFont';
        src:  url('myfont.woff2') format('woff2'),
            url('myfont.woff') format('woff');
    }
    ```

- @keyframes

    CSS3 animation动画关键帧
    ```
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    ```

- @media

    媒体查询
    ```
    @media all and (min-width: 1280px) {
        /* 宽度大于1280干嘛干嘛嘞... */ 
    }
    @media 
    (-webkit-min-device-pixel-ratio: 1.5), 
    (min-resolution: 2dppx) { 
        /* Retina屏幕干嘛干嘛嘞... */ 
    }
    @media print {
        /* 闪开闪开，我要打印啦！ */ 
    }
    @media \0screen\,screen\9 {
        /* IE7,IE8干嘛干嘛嘞... */ 
    }
    @media screen\9 {
        /* IE7干嘛干嘛嘞... */ 
    }
    ```

- @page

    当打印文档的时候设置一些属性

    @page的伪类包括：:blank, :first, :left, :right。

    ```
    @page :first {
        margin: 1in;
    }
  
    ```
- @supports

    检查是否支持某css属性

    ```
    /* 检查是否支持CSS声明 */ 
    @supports (display: flex) {
        .module { display: flex; }
    }

    /* 检查多个条件 */ 
    @supports (display: flex) and (-webkit-appearance: checkbox) {
        .module { display: flex; }
    }
    ```