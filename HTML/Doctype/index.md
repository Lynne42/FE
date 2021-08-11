<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [DOCTYPE有什么作用，还有哪些doctype文档类型](#doctype%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%E8%BF%98%E6%9C%89%E5%93%AA%E4%BA%9Bdoctype%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# DOCTYPE有什么作用，还有哪些doctype文档类型

DOCTYPE用来声明文档类型， 告诉浏览器应该使用哪种html规范来解析文档, 在html5中它用来告诉浏览器启用标准模式解析文档

文档类型：
- html5

        <!DOCTYPE html>

- html4.01 trict

    DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

- html4.0.1 transitional

    该 DTD 包含所有 HTML 元素和属性,包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">

- html4.0.1 Frameset

    该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）, 允许框架集 Frameset

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">


