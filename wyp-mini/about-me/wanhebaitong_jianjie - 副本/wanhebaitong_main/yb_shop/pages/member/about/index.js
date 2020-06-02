var t = getApp(), a = t.requirejs("wxParse/wxParse"), e = t.requirejs("core");

Page({
    data: {
        route: "member_about",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons")
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    calling: function(t) {
        e.phone(t);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.About();
    },
    onPullDownRefresh: function() {
        this.About(), wx.stopPullDownRefresh();
    },
    About: function() {
        var t = this;
        e.get("User/About", {
            user_id: 0
        }, function(n) {
            console.log(n), 0 == n.code ? (n.info.desc && a.wxParse("wxParseData", "html", n.info.desc, t, "0"), 
            t.setData({
                info: n.info,
                show: !0
            })) : e.alert(n.msg);
        });
    },
    navigate: function() {
        var t = this.data.info;
        t.name && t.lat && t.lng ? e.tx_map(t.lat, t.lng, t.name) : e.toast("不能获取到该位置");
    }
});