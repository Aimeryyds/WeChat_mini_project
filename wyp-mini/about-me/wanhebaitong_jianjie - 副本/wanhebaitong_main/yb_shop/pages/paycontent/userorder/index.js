var n = getApp(), t = (n.requirejs("api/index"), n.requirejs("core"));

Page({
    data: {
        list: [],
        page: 1,
        end: !1
    },
    onLoad: function(e) {
        var o = this, a = {};
        t.get("paycontent/order", {
            uid: n.getCache("userinfo").uid
        }, function(n) {
            1 == n.code ? 0 < n.info.length ? (1 == o.data.page ? a.list = n.info : a.list = o.data.list.concat(n.info), 
            a.page = o.data.page + 1, o.setData(a)) : o.setData({
                end: !0
            }) : t.alert(n.msg);
        }, !0);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.data.end || this.onLoad(null);
    },
    onShareAppMessage: function() {}
});