<!--
 * @Description: 
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2019-12-11 10:41:30
 * @LastEditTime: 2019-12-11 10:50:23
 -->
1. 压缩指定文件， 不包含文件夹

    需要压缩的文件 a/c/file1   a/b/index.js   a/b/file2
    
    压缩到的目录   a/
    
        tar -zcf app.tgz -C c file1 -C ../b index.js file2

    解析：
    
    - -C 改变工作目录， 知道遇到下一个-C为止
    - 第一个-C切换工作目录到a/c 
    - 第二个-C切换工作目录到a/b, 因为上一个是在相对目录c下， 所以需要回到上一级目录再进入b目录

    
