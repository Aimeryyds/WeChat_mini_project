var n = {
    _handleZanSwitchChange: function(n) {
        var e = n.currentTarget.dataset, a = !e.checked, c = e.loading, h = e.disabled, t = e.componentId;
        c || h || (console.info("[zan:switch:change]", {
            checked: a,
            componentId: t
        }), this.handleZanSwitchChange ? this.handleZanSwitchChange({
            checked: a,
            componentId: t
        }) : console.warn("页面缺少 handleZanSwitchChange 回调函数"));
    }
};

module.exports = n;