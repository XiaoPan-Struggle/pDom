该项目未严格检查，仅用于学习，如果有帮助，欢迎 ⭐！

### pDom 介绍

🍔：这是一款对 `原生dom` 实施二次封装的一个 `dom`库

🍔：这个库对于新人来说是一个很好的`dom`学习的地方

❗❗：这个库是我在学习 `原生dom` 操作的时候，出于 `dom` 操作写的代码太多，所以对其二次封装

❗❗：**不建议使用到开发，只适合学习食用~**

### 下载使用

#### 下载

```bash
git clone https://github.com/XiaoPan-Struggle/pDom.git
```

#### 使用

```html
<script src="pDom.js"></script>
```

引用之后将会有一个 `pDom` 对象挂载到全局 `window` 下

### API 使用文档

#### createHTML(string)

```javascript
// 创建元素，传递字符串
const div = pDom.createHTML("<div>Hello pDom</div>");
console.log(div);

// 如下，这样也只会返回第一个 div
const div = pDom.createHTML("<div>Hello pDom</div><div>Hello pDom</div>");
```

#### afterNode(node, newNode)

```javascript
// 在 node 节点后面插入 newNode
const div = pDom.createHTML("<div>Hello pDom</div>");
pDom.afterNode(node, div);
```

#### beforeNode(node, newNode)

```javascript
// 在 node 节点前面插入 newNode
const div = pDom.createHTML("<div>Hello pDom</div>");
pDom.beforeNode(node, div);
```

#### appendNode(parentNode, node)

```javascript
// 在 parentNode 插入一个子结点 node
const div = pDom.createHTML("<div>Hello pDom</div>");
pDom.appendNode(parentNode, div);
```

#### wrapNode(node, parentNode)

```javascript
// 在 node 节点上包裹一个 parentNode 父节点
const div = pDom.createHTML("<div>Hello pDom</div>");
pDom.wrapNode(node, div);
```

#### removeNode(node)

```javascript
// 删除 node 节点
pDom.removeNode(node);
```

#### emptyChildren(node)

```javascript
// 清空 node 下的子结点
pDom.emptyChildren(node);
```

#### nodeAttr(node, attr, value)

```javascript
// 当传入 3 个属性时，在 node 节点设置 data-x 属性，值为 hahaha
pDom.nodeAttr(node, "data-x", "hahaha");
// 当传入 2 个属性时，获取 node 节点的 data-x 属性的值
let info = pDom.nodeAttr(node, "data-x");
```

#### setText(node, string)

```javascript
// 设置 node 的文本
pDom.setText(node, "Hello pDom");
```

#### getText(node)

```javascript
// 获取 node 的文本信息
let info = pDom.getText(node);
```

#### setHTML(node, string)

```javascript
// 设置 node 的HTML
pDom.setHTML(node, "<div>Hello pDom</div>");
```

#### getHTML(node)

```javascript
// 获取 node 的HTML
let info = pDom.getHTML(node);
```

#### setStyle(node, object)

```javascript
// 给 node 设置样式
pDom.setStyle(node, {width: "100px", height: "100px", backgroundColor: "red", color: "#fff"});
```

#### getStyle(node, key1, key2...)

```javascript
// 传入一个参数时，获取node节点的行内样式对象
let info = pDom.getStyle(node);
// 传入两个参数时，获取 node 节点的"backgroundColor", "color" 属性值
let info = pDom.getStyle(aaa, "backgroundColor", "color");
```

#### class.add(node, className)

```javascript
// 给 node 添加 className 类
pDom.class.add(node, "pDom");
```

#### class.remove(node, className)

```javascript
// 给 node 删除 className 类
pDom.class.remove(node, "pDom");
```

#### class.has(node, className)

```javascript
// 判断 node 的 class 是否含有 className ，返回 bool;
let bool = pDom.class.has(node, "pDom");
```

#### on(node, eventName, fn, isBubble)

```javascript
// 绑定事件， isBubble(是否冒泡) 默认为 false
const fn = () => {
    console.log("点击了");
}
pDom.on(node, 'click', fn);
```

#### off(node, eventName, fn)

```javascript
// 清除事件绑定
pDom.off(node, 'click', fn);
```

#### findParent(node)

```javascript
// 返回 node 的父元素
pDom.findParent(node);
```

#### findChildren(node)

```javascript
// 返回 node 的所有子元素
pDom.findChildren(node);
```

#### findSiblings(node)

```javascript
// 返回 node 的所有兄弟元素
pDom.findSiblings(node);
```

#### next(node)

```javascript
// 返回 node 的下一个兄弟元素
pDom.next(node);
```

#### previous(node)

```javascript
// 返回 node 的上一个兄弟元素
pDom.previous(node);
```

#### eachNode(nodeList, fn)

```javascript
// 遍历 nodeList
pDom.eachNode(pDom.findChildren(rrr), (item) => pDom.setStyle(item, {color: 'red'}))
```

#### nodeIndex(node)

```javascript
// 获取 node 在兄弟中的位置
pDom.nodeIndex(node); 返回 index ，从 0 开始
```

### 结束

🚩：以上就是这个库的全部内容，很值得学习哟！！！