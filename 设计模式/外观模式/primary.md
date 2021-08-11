<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [外观模式](#%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 外观模式

外观模式就是把多个子系统中复杂逻辑进行抽象，从而提供一个更统一，更简洁，更易用的API。

很多常用的框架库都遵循了外观设计模式，例如， 

JQ将复杂的原生DOM操作进行抽象和封装，消除浏览器之间的兼容性问题，从而提供了一个统一易用的版本


- 设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观Facade.
- 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观Facade可以提供一个简单的接口，减少他们之间的依赖。
- 在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观Facade也是非常合适的，为系系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有的复杂工作。

优点：
- 减少系统相互依赖
- 提高灵活性
- 提高安全性

缺点：
- 不符合开闭原则，如果要改东西会比较麻烦，继承或者重写都不合适