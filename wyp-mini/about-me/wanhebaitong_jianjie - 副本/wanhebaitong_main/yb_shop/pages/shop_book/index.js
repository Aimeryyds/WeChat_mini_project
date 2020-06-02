var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "shop_book",
        menu: t.tabBar,
        menu_show: !1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        });
    },
    formBook: function(t) {
        var n = this, o = t.detail.value;
        "" != o.name ? 11 == o.phone.length ? "" != o.booktime ? (o.user_id = 1, e.get("Index/WriteBook", o, function(t) {
            0 == t.code ? (n.setData({
                bookData: {}
            }), e.success("提交成功")) : e.alert(t.msg);
        })) : e.error("预约时间不能为空") : e.error("手机号格式不正确") : e.error("姓名不能为空");
    },
    listenerTime: function(t) {
        this.setData({
            "bookData.book_time": t.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});