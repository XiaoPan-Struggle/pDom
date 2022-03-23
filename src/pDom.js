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

}
