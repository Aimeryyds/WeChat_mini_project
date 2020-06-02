var t = getApp();

Page({
    data: {
        title: "",
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
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    height: t.windowHeight
                });
            }
        }), e.setData({
            id: a.id
        }), a.title && e.setData({
            title: a.title
        });
        var i = "ingredient_getIngredientInfo", n = {
            id: a.id
        }, d = t.getParam(i, n);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: d
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[i].error && ("" == e.data.title && t.data[i].data.name && (wx.setNavigationBarTitle({
                    title: t.data[i].data.name
                }), e.setData({
                    title: t.data[i].data.name
                })), e.setData({
                    info: t.data[i].data
                }));
            },
            complete: function() {
                e.loadMore();
            }
        });
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var a = this, e = a.data.tag, i = a.data.view[e], n = a.data.page[e], d = a.data.loading_end;
        if (!d[e] && a.data.status) {
            d[e] = !1, a.setData({
                loading: !0,
                loading_end: d,
                loading_fail: !1,
                status: !1
            });
            var o = "recipe_getIngredientRecipeList", s = {
                id: a.data.id,
                show: i,
                pageindex: n
            }, l = t.getParam(o, s);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: l
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(t) {
                    if (0 == t.data[o].error) {
                        var i = a.data.list, n = a.data.page;
                        i[e] = i[e].concat(t.data[o].data), n[e] = n[e] + 1, a.setData({
                            list: i,
                            loading: !1,
                            page: n
                        });
                    } else t.data[o].error < 0 ? (d[e] = !0, a.setData({
                        loading: !1,
                        loading_end: d
                    })) : a.setData({
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
                    }), a.switch_v();
                }
            });
        }
    },
    tagtag_info: function(t) {
        this.setData({
            tag: t.currentTarget.dataset.n
        }), 1 == this.data.page[t.currentTarget.dataset.n] && this.loadMore();
    },
    swiper_list_change: function(t) {
        this.setData({
            tag: t.detail.current
        }), 1 == this.data.page[t.detail.current] && this.loadMore();
    },
    onReady: function() {
        this.data.title && wx.setNavigationBarTitle({
            title: this.data.title
        });
    },
    shareSubmit: function(a) {
        t.save_formid(a.detail.formId);
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title + "的做法大全",
            desc: "食材 | 美食天下",
            path: "/pages/index/index?type=ingredient_info&id=" + this.data.id + "&title=" + this.data.title + "&inviteuid=" + t.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: t.globalData.open_v
        });
    }
});