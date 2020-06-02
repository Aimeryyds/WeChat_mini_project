var n = getApp(), t = (n.requirejs("api/index"), n.requirejs("core"));

Page({
    data: {
        list: [],
        page: 1,
        end: !1
    },
    onLoad: function(e) {
        var a = this, o = {};
        t.get("paycontent/likes", {
            uid: n.getCache("userinfo").uid
        }, function(n) {
            1 == n.code ? 0 < n.info.length ? (1 == a.data.page ? o.list = n.info : o.list = a.data.list.concat(n.info), 
            o.page = a.data.page + 1, a.setData(o)) : a.setData({
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