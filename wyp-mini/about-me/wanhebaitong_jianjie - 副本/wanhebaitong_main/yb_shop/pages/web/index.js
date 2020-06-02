var e = getApp().requirejs("core");

Page({
    data: {},
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        console.log(t), e.setting(), t.url ? (wx.setNavigationBarTitle({
            title: t.name ? decodeURIComponent(t.name) : "网页"
        }), t.web_url = unescape(t.url), t.show = !0, this.setData(t)) : (e.toast("外链不能为空"), 
        setTimeout(function() {
            e.jump("", 5);
        }, 1e3));
    },
    onShareAppMessage: function(e) {
        var t = this.data;
        return {
            title: t.name,
            path: "/yb_shop/pages/web/index?name=" + t.name + "&url=" + t.url,
            success: function(e) {},
            fail: function(e) {}
        };
    }
});