<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [render方法返回的类型](#render%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E7%9A%84%E7%B1%BB%E5%9E%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### render方法返回的类型

- render的第一个参数通过babel转为React.createElement，后者根据参数类型的不同调用不同的内部方法来转换为原生dom并生成真实dom插入到容器中.

- 对原生html标签调用ReactDOMComponent的mountComponent方法，将element转化为真实的dom节点， 并插入到对应的container中，返回realDom；
- 对于自定义组件，递归调用ReactCompositeComponentWrapper转化为原生dom标签，然后和上面一样通过ReactDOMComponent的mountComponent方法，生成realDom;
- string和number，调用的是ReactDOMTextComponent；
- null和boolean，调用的是ReactEmptyComponment;