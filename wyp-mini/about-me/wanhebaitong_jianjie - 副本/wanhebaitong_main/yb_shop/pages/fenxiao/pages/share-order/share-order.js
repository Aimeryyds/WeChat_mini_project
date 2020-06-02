var t = getApp(), a = t.requirejs("core"), e = !1;

Page({
    data: {
        show: !1,
        status: -1,
        list: [],
        loaded: !1,
        page: 1,
        hidden: -1
    },
    onLoad: function(t) {
        a.ReName(t.title), this.getlist();
    },
    getlist: function() {
        if (!e) {
            e = !0;
            var s = this, i = s.data.page;
            a.get("Distribe/shareOrder", {
                page: i,
                uid: t.getCache("userinfo").uid,
                status: s.data.status
            }, function(t) {
                console.log(t), e = !1, 0 == t.code ? s.setData({
                    list: s.data.list.concat(t.info),
                    page: 0 == t.info.length ? s.data.page : s.data.page + 1,
                    loaded: t.info.length < 10,
                    show: !0
                }) : a.alert(t.msg);
            }, !0);
        }
    },
    click: function(t) {
        var e = a.pdata(t).index;
        this.setData({
            hidden: e != this.data.hidden ? e : -1
        });
    },
    select: function(t) {
        var e = a.pdata(t).status;
        this.setData({
            page: 1,
            list: [],
            loaded: !1,
            status: e
        }), this.getlist();
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
    }
});