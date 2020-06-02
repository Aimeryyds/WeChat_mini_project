var a = getApp();

Page({
    data: {
        tag: 0,
        view: [ "recommend", "new" ],
        page: [ 1, 1 ],
        loading: !0,
        loading_end: [ !1, !1 ],
        loading_fail: !1,
        list: [ [], [] ],
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
        var t = this, e = t.data.tag, i = t.data.view[e], n = t.data.page[e], o = t.data.loading_end;
        if (!o[e] && t.data.status) {
            o[e] = !1, t.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var d = "collect_getCollectList", s = {
                show: i,
                pageindex: n
            }, l = a.getParam(d, s);
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
                        }), 0 == a.data[d].data.legnth && (o[e] = !0, t.setData({
                            loading: !1,
                            loading_end: o
                        }));
                    } else t.setData({
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
            title: "菜单",
            path: "/pages/index/index?type=collect&inviteuid=" + a.globalData.uid
        };
    }
});