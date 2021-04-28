Referrer-Policy更改方法
可以有以下5种方法：

1. 通过Referrer-Policy HTTP header设置：
    ```
    Referrer-Policy: origin复制代码
    ```
2. 通过meta元素改变Referrer Policy，直接修改名为referrer的内容
    ```
    <meta name="referrer" content="origin">
    ```
3. 给 a, area, img, iframe, 或者link元素设置referrerpolicy属性
    ```
    <a href="http://example.com" referrerpolicy="origin">
    ```
4. 如需设置不显示referrer信息时，也可以给 a, area, link元素设置rel的链接关系。
    ```
    <a href="http://example.com" rel="noreferrer">
    ```