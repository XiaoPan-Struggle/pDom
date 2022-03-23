window.pDom = {
    // 创建节点
    createHTML(string){
        const template = document.createElement("template");
        template.innerHTML = string.trim();
        return template.content.firstChild;
    },


}
