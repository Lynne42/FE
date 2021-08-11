<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [max-len](#max-len)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# max-len
[link](https://www.dongwm.com/post/pep8-max-line-length/)
```
2020 年的现在，长度定在多少最合适呢？为了确定这个我特意找了一些知名开源项目看他们怎么规定的:

black。默认的阈值是 88
requests。适当的可以达到 100 个字符，有必要可以超过 100
flask (Pocoo)。有必要可以扩展到 84
django。如果代码行看起来丑陋或难以阅读可以扩展到 119
阈值各不相同，但 79 显然不是一个企业开发中值得鼓励和坚持的长度阈值，我在日常工作中一般不超过 90 即可
```