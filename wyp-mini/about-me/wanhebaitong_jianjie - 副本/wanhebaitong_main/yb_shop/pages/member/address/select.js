var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        loaded: !1,
        list: []
    },
    onLoad: function() {
        e.setting(), this.setData({
            config: getApp().config
        });
    },
    onShow: function() {
        this.getList();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    getList: function() {
        var t = this;
        e.get("user/AddressList", {
            uid: getApp().getCache("userinfo").uid
        }, function(e) {
            0 == e.code ? t.setData({
                loaded: !0,
                list: e.info,
                show: !0
            }) : t.setData({
                loaded: !0,
                show: !0
            });
        });
    },
    select: function(s) {
        var i = e.pdata(s).index;
        t.setCache("orderAddress", this.data.list[i], 30), wx.navigateBack();
    }
});