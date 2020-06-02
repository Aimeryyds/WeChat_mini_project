var a = getApp();

Page({
    data: {
        type: 4,
        tid: 0,
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        recipelist: [],
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
            var i = "recipe_getRecipeList", n = {
                type: "video",
                pageindex: e
            }, o = a.getParam(i, n);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: o
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    0 == a.data[i].error ? t.setData({
                        recipelist: t.data.recipelist.concat(a.data[i].data),
                        loading: !1,
                        page: t.data.page + 1
                    }) : a.data[i].error < 0 ? t.setData({
                        loading: !1,
                        loading_end: !0
                    }) : t.setData({
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
            title: "视频菜谱",
            path: "/pages/index/index?type=videorecipe&inviteuid=" + a.globalData.uid
        };
    }
});