<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [去掉chrome inout autofill 的样式](#%E5%8E%BB%E6%8E%89chrome-inout-autofill-%E7%9A%84%E6%A0%B7%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 去掉chrome inout autofill 的样式
```
input:-internal-autofill-selected,
input:-internal-autofill-selected:hover, 
input:-internal-autofill-selected:focus, 
input:-internal-autofill-selected:active  {
  background-color: rgba(76, 87, 116, 0.3)!important;
  color: #fff!important;
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: 0 0 0px 40px rgba(76, 87, 116, 0) inset!important;
  -webkit-text-fill-color: #fff !important;
}
```