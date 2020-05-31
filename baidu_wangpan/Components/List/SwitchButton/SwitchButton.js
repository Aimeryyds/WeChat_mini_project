var t = "icon-view-grid", e = "icon-view-list", i = 0, r = function() {
    var i = wx.getCurrentViewMode(), r = "";
    return "list" === i ? (i = "grid", r = e) : (i = "list", r = t), {
        icon: r,
        mode: i
    };
}, n = function() {
    var i = wx.getCurrentViewMode(), r = t;
    return "grid" === i && (r = e), r;
};

Component({
    properties: {
        icon: {
            type: String,
            value: e
        }
    },
    ready: function() {
        var i = wx.getCurrentViewMode();
        this.setData({
            icon: "list" === i ? t : e
        });
    },
    methods: {
        switchTap: function() {
            var t = Date.now();
            if (t - i < 1e3) return console.warn("连续点击切换视图按钮"), void this.triggerEvent("lag");
            i = t;
            var e = r(), n = e.mode, o = e.icon;
            wx.setCurrentViewMode(n), this.setData({
                icon: o
            }), this.triggerEvent("switch", {
                mode: n
            });
        },
        refreshIcon: function() {
            var t = n();
            this.setData({
                icon: t
            });
        }
    }
});