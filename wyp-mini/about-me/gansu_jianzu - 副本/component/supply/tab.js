var e = {
    _handlesupplyTabChange: function(e) {
        var a = e.currentTarget.dataset, n = {
            componentId: a.componentId,
            selectedId: a.itemId
        };
        console.info("[supply:tab:change]", n), this.handlesupplyTabChange ? this.handlesupplyTabChange(n) : console.warn("页面缺少 handlesupplyTabChange 回调函数");
    }
};

module.exports = e;