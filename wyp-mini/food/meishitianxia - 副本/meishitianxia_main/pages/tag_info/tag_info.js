var t = getApp();

Page({
    data: {
        type: 4,
        tid: 0,
        title: "",
        tag: 0,
        view: [ "elite", "hot" ],
        page: [ 1, 1 ],
        loading: !0,
        loading_end: [ !1, !1 ],
        loading_fail: !1,
        list: [ [], [] ],
        status: !0
    },
    onLoad: function(t) {
        var a = this, e = t.type ? t.type : 4, i = t.title ? t.title : "";
        wx.setNavigationBarTitle({
            title: i
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: t.windowHeight
                });
            }
        }), a.setData({
            tid: t.tid,
            title: i,
            type: e
        }), "" == i && a.getTaginfo(), a.loadMore();
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function(a) {
        var e = this, i = e.data.tag, n = e.data.view[i], a = e.data.page[i], d = e.data.loading_end;
        if (!d[i] && e.data.status) {
            d[i] = !1, e.setData({
                loading: !0,
                loading_end: d,
                loading_fail: !1,
                status: !1
            });
            var o = "recipe_getTagRecipeList", s = {
                tid: e.data.tid,
                pageindex: a,
                show: n
            };
            6 == e.data.type ? (o = "recipe_getOtherTagRecipeList", s.view = "cuisine") : 7 == e.data.type ? (o = "recipe_getOtherTagRecipeList", 
            s.view = "technics") : 8 == e.data.type ? (o = "recipe_getOtherTagRecipeList", s.view = "during") : 9 == e.data.type && (o = "recipe_getOtherTagRecipeList", 
            s.view = "level");
            var l = t.getParam(o, s);
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
                        var a = e.data.list, n = e.data.page;
                        a[i] = a[i].concat(t.data[o].data), n[i] = n[i] + 1, e.setData({
                            list: a,
                            loading: !1,
                            page: n
                        });
                    } else t.data[o].error < 0 ? (d[i] = !0, e.setData({
                        loading: !1,
                        loading_end: d
                    })) : e.setData({
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
                        status: !0
                    }), e.switch_v();
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
    getTaginfo: function() {
        var a = this, e = "category_getTagInfo", i = {
            id: a.data.tid
        }, n = t.getParam(e, i);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[e].error && (wx.setNavigationBarTitle({
                    title: t.data[e].data.title
                }), a.setData({
                    title: t.data[e].data.title
                }));
            }
        });
    },
    onReady: function() {},
    shareSubmit: function(a) {
        t.save_formid(a.detail.formId);
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/index/index?type=tag_info&tid=" + this.data.tid + "&title=" + this.data.title + "&t=" + this.data.type + "&inviteuid=" + t.globalData.uid
        };
    },
    switch_v: function() {
        this.setData({
            open_v: t.globalData.open_v
        });
    }
});