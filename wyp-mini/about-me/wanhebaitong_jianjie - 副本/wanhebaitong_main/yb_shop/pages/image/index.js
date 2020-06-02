var t = getApp(), a = t.requirejs("api/index"), e = t.requirejs("core");

Page({
    data: {
        route: "image",
        menu: t.tabBar,
        menu_show: !1,
        loaded: !1,
        show: !1,
        list: [],
        page: 1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), e.setting(), console.log(t), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), t.id ? (this.setData({
            group_id: t.id
        }), this.getlist()) : e.error("未获取相册类别");
    },
    getlist: function() {
        var t = this, e = t.data.group_id, i = t.data.page;
        a.ImageInfo("", i, e, t, function(a) {
            t.setData(a);
        });
    },
    previewImage: function(t) {
        var a = [];
        this.data.list.forEach(function(t, e) {
            a[e] = t.img_cover;
        }), wx.previewImage({
            current: e.pdata(t).url,
            urls: a
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getlist(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.getlist();
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});