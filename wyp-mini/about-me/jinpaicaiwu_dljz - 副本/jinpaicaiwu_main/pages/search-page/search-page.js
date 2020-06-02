function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

Page({
    data: {
        type: "article",
        products: [],
        articles: [],
        pagerid: 1,
        styles: "",
        inputstyle: "",
        isWritting: !1,
        searchTitle: [],
        searchBar: [ {
            type: "default",
            value: "asc",
            alias: "综合"
        }, {
            type: "sales",
            value: "asc",
            alias: "销量"
        }, {
            type: "totalprice",
            value: "asc",
            alias: "价格"
        }, {
            type: "review",
            value: "asc",
            alias: "评价"
        } ],
        sortby: {
            type: "default",
            value: "desc"
        }
    },
    onLoad: function(t) {
        var a = getApp().globalData.config.searchConfig, e = a.style;
        for (var r in e) {
            var i = "", s = "", o = "", n = e[r] || "";
            if (void 0 !== r && "" != n && "width" != r) {
                if ("number" == typeof n && (n = getApp().px2rpx(n)), -1 !== [ "height", "background", "color", "border-radius" ].indexOf(r)) if ("height" == r) {
                    s += r + ": " + getApp().px2rpx(e[r] - 2) + ";";
                    var d = parseInt(n) - 24 + "rpx";
                    o = "width:" + d + ";height:" + d + ";", this.setData({
                        imgstyle: o
                    });
                } else s += r + ": " + n + ";";
                if ((i += r + ": " + n + ";").length > 0 || s.length > 0) {
                    var c = this.data.styles || "", l = this.data.inputstyle || "";
                    c += i, l += s, this.setData({
                        styles: c,
                        inputstyle: l
                    });
                }
            }
        }
        var u = a.hotSearch, h = [];
        u && (u.indexOf(",") > 0 ? h = u.split(",") : u.indexOf("，") > 0 && (h = u.split("，")));
        var p = a.dataSource || "article";
        this.setData({
            type: p,
            config: a,
            hotSearchArr: h
        });
    },
    subSearch: function(t) {
        var a = this.data.keywords, e = this.data.type;
        if (this.setData({
            isWritting: !1,
            searchTitle: []
        }), !a) return !1;
        var r = {
            keywords: a
        };
        if ("article" == e) this.loadArticle(r); else {
            if ("product" != e) return !1;
            this.loadProducts(r);
        }
    },
    subHotSearch: function(t) {
        var a = this.data.type, e = this.data.hotSearchArr, r = t.currentTarget.dataset.index;
        if (!e[r]) return !1;
        var i = e[r];
        this.setData({
            keywords: i
        });
        var s = {
            keywords: i
        };
        "article" == a ? this.loadArticle(s) : "product" == a && this.loadProducts(s);
    },
    inputSearch: function(t) {
        var a = t.detail.value, e = this.data.type;
        if (a ? this.setData({
            keywords: a,
            isWritting: !0
        }) : this.setData({
            keywords: a,
            isWritting: !1,
            searchTitle: []
        }), !a) return !1;
        var r = {
            keywords: a,
            fr: "input"
        };
        if ("article" == e) this.loadArticle(r); else {
            if ("product" != e) return !1;
            this.loadProducts(r);
        }
    },
    keyDownSearch: function(t) {
        var a = this.data.type, e = this.data.searchTitle, r = t.currentTarget.dataset.index;
        if (this.setData({
            isWritting: !1,
            searchTitle: []
        }), !e[r]) return !1;
        var i = {
            keywords: e[r].title
        };
        "article" == a ? this.loadArticle(i) : "product" == a && this.loadProducts(i);
    },
    navigateToDetail: function(t) {
        var a = this.data.config.detailLink, e = this.data.type, r = "";
        if ("article" == e) r = "article_id"; else {
            if ("product" != e) return !1;
            r = "product_id";
        }
        if (/^[1-9]\d*$/.test(a)) {
            var i = t.currentTarget.dataset.aid, s = "/pages/page" + a + "/page" + a;
            console.log(s + "?" + r + "=" + i), wx.navigateTo({
                url: s + "?" + r + "=" + i
            });
        }
    },
    loadArticle: function(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = getApp(), i = this, s = r.globalData.config, o = {};
        o.keywords = a.keywords, o.list_num = 100, "input" == a.fr && (o.search_type = "title"), 
        o = Object.assign(o, e), this.setData({
            keywords: a.keywords
        });
        var n = !!/^[1-9]{1}\d*$/.test(e.page || 0);
        r.apiRequest("article_list", "index", {
            data: o,
            method: "POST",
            success: function(e) {
                if ("input" == a.fr) {
                    var o = e.data.data;
                    return i.setData({
                        searchTitle: o
                    }), !1;
                }
                var d = e.data.data || [];
                if (0 == d.length) {
                    wx.showToast({
                        title: "无相关文章",
                        image: "/static/icons/warning.png"
                    });
                }
                if ("ERROR" == e.data.result) return i.setData({
                    errmsg: e.data.errmsg
                }), !1;
                d.forEach(function(t, a) {
                    t.publish_time = r.toLocalTime(t.publish_time), t.title = t.title.slice(0, 20), 
                    t.intro = t.intro.slice(0, 20), 0 == t.doc_image.length && (t.doc_image = s.domain + "/template/default/images/effect1.png");
                });
                if (n) {
                    var c;
                    (c = i.data.articles).push.apply(c, t(d)), i.setData({
                        articles: i.data.articles
                    }), i.setData({
                        pagerid: i.data.pagerid + 1
                    });
                } else i.setData({
                    articles: d
                });
                i.setData({
                    pagerShow: !(d.length < 20)
                });
            },
            fail: function() {
                console.error("请求失败");
            }
        });
    },
    loadProducts: function(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = getApp(), r = this, i = e.globalData.config, s = {};
        s.sortby = JSON.stringify(this.data.sortby), t.keywords ? s.keywords = t.keywords : s.keywords = this.data.keywords, 
        "input" == t.fr && (s.search_type = "title");
        s = Object.assign(s, a);
        var o = !!/^[1-9]{1}\d*$/.test(a.page || 0);
        e.apiRequest("product_list", "index", {
            data: s,
            method: "POST",
            success: function(a) {
                if ("input" == t.fr) {
                    var e = a.data.data;
                    return r.setData({
                        searchTitle: e
                    }), !1;
                }
                var s = a.data.data || [];
                if (0 == s.length) {
                    wx.showToast({
                        title: "无相关产品",
                        image: "/static/icons/warning.png"
                    });
                }
                if ("ERROR" == a.data.result) return r.setData({
                    errmsg: a.data.errmsg
                }), !1;
                o && (s = r.data.products.concat(s));
                var n = s.length;
                s.forEach(function(t, a) {
                    0 == t.doc_image.length && (t.doc_image = i.domain + "/template/default/images/effect1.png"), 
                    0 == t.intro.replace(/(^s*)|(s*$)/g, "").length && (t.intro = "WxParsePlaceHolder");
                });
                o ? (r.setData({
                    products: s
                }), r.setData({
                    pagerid: r.data.pagerid + 1
                })) : r.setData({
                    products: s
                }), r.setData({
                    pagerShow: !(n < 20)
                });
            },
            fail: function() {
                console.error("请求失败");
            }
        });
    },
    resortBy: function(t) {
        var a = t.target.dataset.sortidx, e = this.data.searchBar[a], r = e.type, i = e.value;
        this.setData({
            barIdx: r
        }), "default" != r && (i = "asc" == i ? "desc" : "asc"), this.data.searchBar.forEach(function(t, e) {
            if (e == a) return t.value = i, !0;
            t.value = "asc";
        }), this.setData({
            searchBar: this.data.searchBar
        }), this.loadProducts({}, {
            orderby: r,
            ordertype: i
        });
    },
    loadMore: function() {
        var t = this.data.pagerid + 1, a = this.data.type;
        "article" == a ? this.loadArticles({}, {
            page: t
        }) : "product" == a && this.loadProducts({}, {
            page: t
        });
    },
    blur: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});