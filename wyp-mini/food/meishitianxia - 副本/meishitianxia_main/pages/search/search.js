var a = getApp();

Page({
    data: {
        top_ingredient: null,
        top_mofang: null,
        tag: 0,
        page: [ 1, 1 ],
        op: [ "searchallhot", "searchallnew" ],
        loading: !0,
        loading_end: [ !1, !1 ],
        loading_fail: !1,
        list: [ [], [] ],
        status: !0,
        sq: [],
        sq_show: !1,
        show_noq: !1
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function(t) {
        var e = this, i = e.data.tag, t = (e.data.op[i], e.data.page[i]), s = e.data.loading_end;
        if (!s[i] && e.data.status && e.data.q) {
            s[i] = !1, e.setData({
                loading: !0,
                loading_end: s,
                loading_fail: !1,
                status: !1
            });
            var n = "search_mobileHotSearch", o = {
                keyword: e.data.q,
                pageindex: t,
                pagesize: 20,
                type: "recipe"
            }, d = a.getParam(n, o);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: d
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    var t = e.data.list, o = e.data.page;
                    if (0 == a.data[n].error) {
                        if (1 == o[i] && "" == a.data[n].data) return e.setData({
                            loading: !1,
                            loading_none: !0,
                            q_none: e.data.q
                        }), !1;
                        a.data[n].data.length < 20 && (s[i] = !0, e.setData({
                            loading: !1,
                            loading_end: s
                        })), a.data[n].data && (t[i] = t[i].concat(a.data[n].data)), o[i] = o[i] + 1, e.setData({
                            list: t,
                            loading: !1,
                            page: o
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
                        status: !0
                    }), e.switch_v();
                }
            });
        }
    },
    onLoad: function(t) {
        var e = this, i = t.tag > 0 ? t.tag : 0;
        if (wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    height: a.windowHeight
                });
            }
        }), e.setData({
            tag: i,
            q: t.q
        }), t.sq && e.setData({
            sq: t.sq.split("+"),
            sq_show: !0
        }), !t.q) return e.setData({
            loading: !1,
            iffocus: !0,
            show_noq: !0
        }), e.getHotKey(), !1;
        var s = "search_searchMofangIngredientView", n = {
            keyword: t.q
        }, o = a.getParam(s, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                e.setData({
                    top_ingredient: a.data[s].data.ingredient,
                    top_mofang: a.data[s].data.mofang
                });
            },
            complete: function() {
                e.loadMore();
            }
        });
    },
    bindKeyInput: function(a) {
        this.setData({
            q: a.detail.value
        });
    },
    do_search: function(a) {
        "" != this.data.q && wx.redirectTo({
            url: "../search/search?q=" + this.data.q + "&tag=" + this.data.tag
        });
    },
    formSubmit: function(t) {
        a.save_formid(t.detail.formId), "" != this.data.q && wx.redirectTo({
            url: "../search/search?q=" + this.data.q + "&tag=" + this.data.tag
        });
    },
    onReady: function() {
        this.data.q && wx.setNavigationBarTitle({
            title: "搜索：" + this.data.q
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.list[0].length > 0 ? this.data.q : "搜索",
            path: this.data.list[0].length > 0 ? "/pages/search/search?q=" + this.data.q : "/pages/search/search"
        };
    },
    getHotKey: function() {
        var a = this;
        wx.request({
            url: "https://static.meishichina.com/app/api/hotsearchword.json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                a.setData({
                    hotkey: t.data.search_getHotWord.data
                });
            }
        });
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    }
});