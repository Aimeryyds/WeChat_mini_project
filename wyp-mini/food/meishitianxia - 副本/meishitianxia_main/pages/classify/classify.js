var a = getApp();

Page({
    data: {
        tag: 0,
        classify: [ "recommend", "weekhot", "popular", "hot", "all" ],
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
        var t = this, e = t.data.tag, i = t.data.classify[e], n = t.data.page[e], o = t.data.loading_end;
        if (!o[e] && t.data.status) {
            o[e] = !1, t.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            });
            var s = "recipe_getRecipeList", d = {
                type: i,
                pageindex: n
            }, l = a.getParam(s, d);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: l
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[s].error) {
                        var i = t.data.list, n = t.data.page;
                        i[e] = i[e].concat(a.data[s].data), n[e] = n[e] + 1, t.setData({
                            list: i,
                            loading: !1,
                            page: n
                        });
                    } else a.data[s].error < 0 ? (o[e] = !0, t.setData({
                        loading: !1,
                        loading_end: o
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
                    }), t.switch_v();
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
    shareSubmit: function(t) {
        a.save_formid(t.detail.formId);
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: [ "最新推荐的菜谱排行榜", "一周热门的菜谱排行榜", "高人气的菜谱排行榜", "最受欢迎的菜谱排行榜", "全部菜谱排行榜" ][t.data.tag],
            imageUrl: t.data.list[t.data.tag][0].mpic,
            path: "/pages/index/index?type=classify&id=" + t.data.tag + "&inviteuid=" + a.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    }
});