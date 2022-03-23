window.pDom = {
    // 创建节点
    createHTML(string) {
        const template = document.createElement("template");
        template.innerHTML = string.trim();
        return template.content.firstChild;
    },
    // 在 node 的后面插入 newNode
    afterNode(node, newNode) {
        // 没有插入后面的方法，所以插入到 node 后面节点的前面
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    // 在 node 的前面插入 newNode
    beforeNode(node, newNode) {
        node.parentNode.insertBefore(node, newNode);
    },
    // 插入一个子结点
    appendNode(parentNode, node) {
        parentNode.appendChild(node);
    },
    // 添加一个父节点
    wrapNode(node, parentNode) {
        pDom.beforeNode(node, parentNode); // 将父节点插入到node的前面
        pDom.appendNode(parentNode, node); // 将 node 当子结点插入 parentNode，这样本来的地方就没有了
    },
    // 删除某节点
    removeNode(node) {
        node.parentNode.removeChild(node); // 让自己的父节点删除自己
        return node;
    },
    // 删除所有子结点
    emptyChildren(node) {
        const nodeArr = [];
        let firstChild = node.firstChild;
        while (firstChild) {
            nodeArr.push(pDom.removeNode(firstChild));
            firstChild = node.firstChild;
        }
        return nodeArr; // 返回所有移除的节点，包括文本节点
    },
    // 设置节点的属性名和属性值以及获取属性名，根据参数变化而变化
    nodeAttr(node, attr, value){
        if (arguments.length === 3){
            node.setAttribute(attr, value);
        }else if (arguments.length === 2){
            return node.getAttribute(attr);
        }else {
            throw "Only tow or three parameters can be used in a nodeAttr(node, attr, value)"
        }
    },
    // 设置节点中的文本
    setText(node, string){
        // innerText ie 上的, textContent Chrome / firefox都兼容
        // 防御性编程
        if ("innerText" in node){
            node.innerText = string;
        } else {
            node.textContent = string;
        }
    },
    // 获取节点中的文本
    getText(node){
        if ("innerText" in node){
            return node.innerText;
        } else {
            return node.textContent;
        }
    },
    // 设置节点中的HTML
    setHTML(node, string){
        node.innerHTML = string;
    },
    // 获取节点中的HTML
    getHTML(node){
        return node.innerHTML;
    },
    // 给节点添加样式
    setStyle(node, object){
        if (object instanceof Object) {
            const keys = Reflect.ownKeys(object);
            for (let i = 0; i < keys.length; i++) {
                // for in 会遍历原型上可枚举的属性，所以这里使用 Reflect
                node.style[keys[i]] = Reflect.get(object, keys[i]);
            }
        } else {
            throw "The second parameter must be an Object"
        }
    },
    // 获取节点的内嵌样式属性
    getStyle(node, ...keys){
        let styleObj = {};
        if (keys && arguments.length >= 2){
            keys.forEach(key => styleObj[key] = node.style[key]);
            return styleObj;
        }else {
            return node.style;
        }
    },
    // class区
    class: {
        // 添加 class
        add(node, className){
            node.classList.add(className);
        },
        // 删除单个class
        remove(node, className){
            node.classList.remove(className);
        },
        // 判断是否含有 class
        has(node, className){
            return node.classList.contains(className);
        }
    }
};
