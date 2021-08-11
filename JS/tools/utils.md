<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [首字母大写](#%E9%A6%96%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%86%99)
- [数据根据指定长度分组](#%E6%95%B0%E6%8D%AE%E6%A0%B9%E6%8D%AE%E6%8C%87%E5%AE%9A%E9%95%BF%E5%BA%A6%E5%88%86%E7%BB%84)
- [判断元素是不是html元素, 获取指定class名的父元素](#%E5%88%A4%E6%96%AD%E5%85%83%E7%B4%A0%E6%98%AF%E4%B8%8D%E6%98%AFhtml%E5%85%83%E7%B4%A0-%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9Aclass%E5%90%8D%E7%9A%84%E7%88%B6%E5%85%83%E7%B4%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 首字母大写
```
export function firstUpperCase(str: string) :string {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
```

## 数据根据指定长度分组
```
export function arrSliceGroup(array, subGroupLength) {
  let index = 0;
  let newArray = [];
  while(index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength));
  }
  return newArray;
}
```

## 判断元素是不是html元素, 获取指定class名的父元素
```
export function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement :
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

export function getParents(element, className) {
  let returnParentElement = null;

  function getParentNode(element, className) {
      if(isElement(element)) {
          if(element && element.classList.contains(className) && element.tagName.toLowerCase() != "body") {
              returnParentElement = element;
          } else {
              getParentNode(element.parentElement, className);
          }
      }
  }
  getParentNode(element, className);

  return returnParentElement;
}
```