<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [button按钮点击之后， 取消焦点状态](#button%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%B9%8B%E5%90%8E-%E5%8F%96%E6%B6%88%E7%84%A6%E7%82%B9%E7%8A%B6%E6%80%81)
- [防止button按钮频繁点击](#%E9%98%B2%E6%AD%A2button%E6%8C%89%E9%92%AE%E9%A2%91%E7%B9%81%E7%82%B9%E5%87%BB)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Descript
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2019-10-31 10:39:09
 * @LastEditTime: 2019-11-04 14:58:53
 -->

### button按钮点击之后， 取消焦点状态

- 原因： 
    
    button按钮点击之后，会自动获取焦点， 鼠标点击其他地方后才会取消焦点。在点击之后获取到焦点的情况下， 点击空格键会自动执行点击事件

- 解决： 

    执行点击事件， 取消焦点： e.target.blur();

### 防止button按钮频繁点击

- 设置标记位

    点击时设置flag=true, 执行事件结束后， 设置flag为false. 当重新出发事件时先判断标记位是否为真， 如果是则不执行， 如果不是，则执行

    可用于一些提交操作， 避免多次提交

- 节流函数： 规定在指定时间段内只执行一次函数

    react中节流函数的实现：

        class ArticleBtn extends Component {
            constructor(props) {
                super(props);
                this.callAjax = throttle(this.callback, 400);
            }
            callback = () => {
                this.props.handleClick(); // 执行函数
            }
            onClick = (e) => {
                e.preventDefault();
                e.target.blur(); // 点击之后自动失去焦点
                this.callAjax()
            }
            render() {
                return (
                    <Button
                        onClick={this.onClick}>
                        获取
                    </Button>
                )
            }
        }

    


    
