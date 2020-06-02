var n = getApp(), t = n.requirejs("core");

Page({
    data: {
        route: "contact",
        menu: n.tabBar,
        menu_show: !1,
        info: [],
        show: !1,
        config: n.config
    },
    menu_url: function(n) {
        t.menu_url(n, 2);
    },
    onLoad: function(n) {
        null != n && null != n && this.setData({
            tabbar_index: n.tabbar_index ? n.tabbar_index : -1
        }), t.setting(), this.setData({
            menu: getApp().tabBar,
            config: getApp().config
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getinfo();
    },
    getinfo: function() {
        var n = this;
        t.get("user/About", {
            user_id: 0
        }, function(a) {
            0 == a.code ? n.setData({
                info: a.info,
                show: !0
            }) : t.alert(a.msg);
        }, !0);
    },
    onReady: function() {},
    onShow: function() {},
    navigate: function() {
        var n = this.data.info;
        n.name && n.lat && n.lng && t.tx_map(n.lat, n.lng, n.name);
    },
    calling: function(n) {
        t.phone(n);
    },
    onPullDownRefresh: function() {
        this.getinfo(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        t.onShareAppMessage("pages/contact/index", "联系我们");
    }
});