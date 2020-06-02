var a = {
    _handleZanTabChange: function(a) {
        var n = a.currentTarget.dataset, e = {
            componentId: n.componentId,
            selectedId: n.itemId
        };
        console.info("[zan:tab:change]", e), this.handleZanTabChange ? this.handleZanTabChange(e) : console.warn("页面缺少 handleZanTabChange 回调函数");
    }
};

module.exports = a;