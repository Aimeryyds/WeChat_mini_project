function a(a, t, n) {
    return t in a ? Object.defineProperty(a, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = n, a;
}

var t, n = getApp();

Page({
    data: (t = {
        loading: !0,
        page: 1
    }, a(t, "loading", !1), a(t, "loading_end", !1), a(t, "loading_fail", !1), a(t, "mofanglist", []), 
    a(t, "status", !0), t),
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var a = this;
        if (!a.data.loading_end && a.data.status) {
            a.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var t = "mofang_getMofangList", e = {
                pageindex: a.data.page
            }, o = n.getParam(t, e);
            wx.request({
                url: n.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(n) {
                    0 == n.data[t].error ? a.setData({
                        mofanglist: a.data.mofanglist.concat(n.data[t].data),
                        loading: !1,
                        page: a.data.page + 1
                    }) : n.data[t].error < 0 ? a.setData({
                        loading: !1,
                        loading_end: !0
                    }) : a.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    a.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    a.setData({
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
    onShareAppMessage: function() {
        return {
            title: "专题",
            path: "/pages/index/index?type=mofang&inviteuid=" + n.globalData.uid
        };
    }
});