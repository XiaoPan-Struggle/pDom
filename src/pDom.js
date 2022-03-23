window.pDom = {
    // 创建节点
    createHTML(string){
        const template = document.createElement("template");
        template.innerHTML = string.trim();
        return template.content.firstChild;
    },
    // 在 node 的后面插入 newNode
    afterNode(node, newNode){
        // 没有插入后面的方法，所以插入到 node 后面节点的前面
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    // 在 node 的前面插入 newNode
    beforeNode(node, newNode){
        node.parentNode.insertBefore(node, newNode);
    },
    // 插入一个子结点
    appendNode(parentNode, node){
        parentNode.appendChild(node);
    },
    // 添加一个父节点
    wrapNode(node, parent){
        pDom.beforeNode(node, parent); // 将父节点插入到node的前面
        pDom.appendNode(parent, node); // 将 node 当子结点插入 parent，这样本来的地方就没有了
    },
    // 删除某节点
    removeNode(node){
        node.parentNode.removeChild(node); // 让自己的父节点删除自己
        return node;
    },
    //

}
