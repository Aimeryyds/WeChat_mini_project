var a = getApp();

Page({
    data: {
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        list: [],
        status: !0
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var t = this;
        if (t.data.status) {
            var i = t.data.page;
            t.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var e = "goods_getTrialList", n = {
                page: i,
                pagesize: 10
            }, o = a.getParam(e, n);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    0 == a.data[e].error ? (t.setData({
                        list: t.data.list.concat(a.data[e].data),
                        loading: !1,
                        page: t.data.page + 1
                    }), a.data[e].data.length < 10 && t.setData({
                        loading: !1,
                        loading_end: !0
                    })) : t.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    t.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    t.setData({
                        status: !0
                    });
                }
            });
        }
    },
    onLoad: function(a) {
        this.loadMore();
    },
    onReady: function() {},
    shareSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    onShareAppMessage: function() {
        return {
            title: "免费试用",
            path: "/pages/index/index?type=trial&inviteuid=" + a.globalData.uid
        };
    }
});