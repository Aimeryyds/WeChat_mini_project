var a = getApp();

Page({
    data: {
        tag: 0,
        page: [ 1, 1, 1, 1 ],
        loading: !0,
        loading_nodata: [ !1, !1, !1, !1 ],
        loading_end: [ !1, !1, !1, !1 ],
        loading_fail: !1,
        list: [ [], [], [], [] ],
        status: !0,
        refresh: !1,
        lastY: 0
    },
    onLoad: function(a) {
        wx.hideShareMenu();
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
        var t, e = this, i = e.data.tag, n = e.data.page[i], o = e.data.loading_end;
        if (!o[i] && !e.data.loading_nodata[i] && e.data.status) {
            o[i] = !1, 0 == i ? t = "fav_getUserFavRecipeList" : 1 == i ? t = "fav_getUserFavMofangList" : 2 == i ? t = "fav_getUserFavCollectList" : 3 == i && (t = "fav_getUserFavPaiList");
            var d = {
                uid: a.globalData.uid,
                pageindex: n
            }, s = a.getParam(t, d);
            e.setData({
                loading: !0,
                loading_end: o,
                loading_fail: !1,
                status: !1
            }), wx.request({
                url: a.globalData.murl5,
                data: {
                    p: s
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(n) {
                    if (0 == n.data[t].error) {
                        var d, s = e.data.list, l = e.data.page, g = n.data[t].data;
                        if (3 == i) for (d = 0; d < g.length; d++) g[d].vip = a.showstaruser(g[d].uid), 
                        g[d].photo[0] && (g[d].photo[0].pic = g[d].photo[0].pic.replace("p500GIF", "c320"));
                        if (s[i] = s[i].concat(g), l[i] = l[i] + 1, e.setData({
                            list: s,
                            loading: !1,
                            page: l
                        }), 0 == g.length) if (2 == l[i]) {
                            var r = e.data.loading_nodata;
                            r[i] = !0, e.setData({
                                loading: !1,
                                loading_nodata: r
                            });
                        } else o[i] = !0, e.setData({
                            loading: !1,
                            loading_end: o
                        });
                    } else e.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    e.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    e.setData({
                        status: !0,
                        refresh: !1
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
    handletouchend: function(a) {
        var t = this, e = t.data.tag;
        if (a.changedTouches[0].pageY - this.data.lastY > 100 && 0 == t.data.top) {
            var i = t.data.page, n = t.data.list, o = t.data.loading_end, d = t.data.loading_nodata;
            i[e] = 1, n[e] = [], o[e] = !1, d[e] = !1, t.setData({
                refresh: !0,
                page: i,
                loading_end: o,
                loading_nodata: d,
                list: n
            }), t.loadMore();
        }
    },
    handletouchtart: function(a) {
        var t = this, e = t.data.tag;
        wx.createSelectorQuery().selectAll(".infos").boundingClientRect(function(i) {
            t.setData({
                top: i[e].top,
                lastY: a.changedTouches[0].pageY
            });
        }).exec();
    }
});