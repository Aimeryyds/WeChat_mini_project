var a = getApp();

Page({
    data: {
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        elist: [],
        status: !0
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var t = this;
        if (t.data.status) {
            var e = t.data.page;
            t.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var n = "event_getEventShowAllList", i = {
                pageindex: e
            }, o = a.getParam(n, i);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[n].error) if (a.data[n].data) {
                        var e, i = a.data[n].data;
                        for (e = 0; e < a.data[n].data.length; e++) i[e].starttime = t.formatDate(a.data[n].data[e].starttime), 
                        i[e].endtime = t.formatDate(a.data[n].data[e].endtime);
                        t.setData({
                            elist: t.data.elist.concat(i),
                            loading: !1,
                            page: t.data.page + 1
                        });
                    } else t.setData({
                        loading: !1,
                        loading_end: !0
                    }); else t.setData({
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
    formatDate: function(a) {
        var t = new Date(1e3 * a), e = new Date().getFullYear();
        return (t.getFullYear() == e ? "" : t.getFullYear() + "年") + (t.getMonth() + 1) + "月" + t.getDate() + "日";
    },
    onShareAppMessage: function() {
        return {
            title: "活动",
            path: "/pages/index/index?type=event&inviteuid=" + a.globalData.uid
        };
    }
});