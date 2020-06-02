var a = getApp();

Page({
    data: {
        tag: 0,
        classid: [ 0, 17, 18, 19, 20 ],
        page: [ 1, 1, 1, 1, 1 ],
        loading: !0,
        loading_end: [ !1, !1, !1, !1, !1 ],
        loading_fail: !1,
        list: [ [], [], [], [], [] ],
        status: !0
    },
    onLoad: function(a) {
        var t = this, e = a.id > 0 ? a.id : 0;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
        }), t.setData({
            tag: e
        }, function() {
            t.loadMore();
        });
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var t = this, e = t.data.tag, i = t.data.classid[e], n = t.data.page[e], s = t.data.loading_end;
        if (!s[e] && t.data.status) {
            s[e] = !1, t.setData({
                loading: !0,
                loading_end: s,
                loading_fail: !1,
                status: !1
            });
            var d = "article_getArticleList", o = {
                classid: i,
                pageindex: n,
                pagesize: 10
            }, l = a.getParam(d, o);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: l
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[d].error) {
                        var i = t.data.list, n = t.data.page;
                        i[e] = i[e].concat(a.data[d].data), n[e] = n[e] + 1, t.setData({
                            list: i,
                            loading: !1,
                            page: n
                        });
                    } else a.data[d].error < 0 ? (s[e] = !0, t.setData({
                        loading: !1,
                        loading_end: s
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
    tagtag_info: function(a) {
        this.setData({
            tag: a.currentTarget.dataset.n
        }), 1 == this.data.page[a.currentTarget.dataset.n] && this.loadMore();
    },
    swiper_list_change: function(a) {
        this.setData({
            tag: a.detail.current
        }), 1 == this.data.page[a.detail.current] && this.loadMore();
    },
    onReady: function() {},
    onShareAppMessage: function() {
        return {
            title: "饮食健康：养生掌中宝",
            path: "/pages/index/index?type=health_index&inviteuid=" + a.globalData.uid
        };
    }
});