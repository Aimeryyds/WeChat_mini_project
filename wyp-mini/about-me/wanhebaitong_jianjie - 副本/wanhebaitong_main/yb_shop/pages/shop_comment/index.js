var t = getApp().requirejs("core");

Page({
    data: {
        page: 1,
        list: [],
        loaded: !1,
        show: !0
    },
    menu_url: function(o) {
        t.menu_url(o, 2);
    },
    onLoad: function(t) {
        this.comment();
    },
    comment: function() {
        var o = this;
        t.get("Catering/CommentList", {
            page: o.data.page
        }, function(t) {
            if (0 == t.code) {
                var n = {
                    sroce: t.info.sroce,
                    count: t.info.count,
                    show: !0
                };
                t.info.info.length < 10 && (n.loaded = !0), 0 < t.info.info.length && (n.page = o.data.page + 1, 
                n.list = o.data.list.concat(t.info.info)), n.list = t.info.info, o.setData(n);
            } else e.alert(t.msg);
        }, !0);
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.comment();
    },
    onReachBottom: function() {
        this.data.loaded || this.comment();
    },
    onShareAppMessage: function() {}
});