var t = getApp(), e = t.requirejs("core"), s = !1;

Page({
    data: {
        show: !1,
        status: 1,
        first_count: 0,
        second_count: 0,
        third_count: 0,
        list: [],
        loaded: !1,
        page: 1
    },
    onLoad: function(s) {
        e.ReName(s.title), this.setData({
            share_setting: t.getCache("shareSetting")
        }), this.getlist();
    },
    getlist: function() {
        if (!s) {
            s = !0;
            var a = this, i = a.data.page;
            e.get("Distribe/myteam", {
                page: i,
                uid: t.getCache("userinfo").uid,
                status: a.data.status
            }, function(t) {
                s = !1, 0 == t.code ? a.setData({
                    list: a.data.list.concat(t.info.list),
                    first_count: t.info.first,
                    second_count: t.info.second,
                    third_count: t.info.third,
                    page: 0 == t.info.list.length ? a.data.page : a.data.page + 1,
                    loaded: t.info.list.length < 10,
                    show: !0
                }) : e.alert(t.msg);
            });
        }
    },
    select: function(t) {
        var s = e.pdata(t).status;
        this.setData({
            page: 1,
            list: [],
            loaded: !1,
            status: s
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