function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, r, o = require("../../utils/server"), s = (wx.getStorageSync("utoken"), 
1);

Page({
    data: (e = {
        loading: !0,
        topCategories: [],
        subCategories: [],
        highlight: [ "highlight", "", "", "", "", "", "", "", "", "", "", "" ],
        highlight4: [ "highlight4", "", "", "", "", "", "", "", "", "", "", "" ],
        banner: "",
        index: 0,
        refresh: !1,
        input: "",
        height: 1.5 * Math.ceil(wx.getSystemInfoSync().screenHeight)
    }, t(e, "refresh", !1), t(e, "noMoreData", !1), t(e, "diymenu", ""), e),
    onLoad: function() {
        var t = this;
        t.leftDate(), wx.getSystemInfo({
            success: function(e) {
                console.log(e.windowHeight), t.setData({
                    windowHeight: e.windowHeight - 100
                });
            }
        });
    },
    leftDate: function() {
        var t = this, e = wx.getStorageSync("utoken");
        wx.getStorageSync("diymenu") && t.setData({
            diymenu: wx.getStorageSync("diymenu")
        }), o.sendRequest({
            url: "?r=wxapp.shop.takingOrder.getCategory",
            showToast: !1,
            data: {
                utoken: e
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    loading: !1
                }), a = e.data.result.level;
                var r, o;
                e.data.result.data.parent && (r = e.data.result.data.parent, e.data.result.data.parent[0] && (o = e.data.result.data.parent[0].id)), 
                t.setData({
                    topCategories: r,
                    level: a,
                    id: o
                }), t.rightData(o);
            }
        });
    },
    rightData: function(t) {
        var e = this, r = wx.getStorageSync("utoken");
        o.sendRequest({
            url: "?r=wxapp.shop.takingOrder.getCategoryGoodsList",
            data: {
                category_id: t,
                page: 1,
                utoken: r
            },
            method: "GET",
            success: function(t) {
                1 == a || 4 == a ? (t.data.result.goods, e.setData({
                    subCategorListG: t.data.result.goods
                })) : 2 == a && e.setData({
                    subCategorListC: t.data.result.children
                });
            }
        });
    },
    onShow: function() {
        this.setData({
            input: ""
        });
    },
    search: function(t) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    formSubmit: function(t) {
        wx.navigateTo({
            url: "/pages/goods/list/list?keywords=" + t.detail.value
        });
    },
    tapTopCategory: function(t) {
        var e = this;
        r = t.currentTarget.dataset.id;
        var a = parseInt(t.currentTarget.dataset.index);
        t.currentTarget.dataset.level;
        e.setHighlight(a), e.setData({
            index: a,
            id: r,
            refresh: !1,
            noMoreData: !1
        }), s = 1, e.rightData(r);
    },
    setHighlight: function(t) {
        for (var e = [], a = [], r = 0; r < this.data.topCategories; r++) e[r] = "", a[r] = "";
        e[t] = "highlight", a[t] = "highlight4", this.setData({
            highlight: e,
            highlight4: a
        });
    },
    avatarTap: function(t) {
        r = t.currentTarget.dataset.objectId, wx.navigateTo({
            url: "../goods/list/list?categoryId=" + r
        });
    },
    avatarDetail: function(t) {
        var e = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "/pages/goods/detail/detail?objectId=" + e
        });
    },
    bottom: function(e) {
        var r = this;
        if (!r.data.refresh) {
            r.setData({
                refresh: !0,
                noMoreData: !1
            }), s += 1;
            var i = wx.getStorageSync("utoken");
            o.sendRequest({
                url: "?r=wxapp.shop.takingOrder.getCategoryGoodsList",
                data: t({
                    category_id: r.data.id,
                    page: 1,
                    utoken: i
                }, "page", s),
                method: "GET",
                success: function(t) {
                    var e = [];
                    if (1 == a || 4 == a) {
                        for (var o in r.data.subCategorListG) e.push(r.data.subCategorListG[o]);
                        if (t.data.result.goods) {
                            for (var i in t.data.result.goods) e.push(t.data.result.goods[i]);
                            r.setData({
                                subCategorListG: e,
                                refresh: !1
                            });
                        } else s -= 1, r.setData({
                            noMoreData: !0
                        });
                    } else {
                        for (var n in r.data.subCategorListC) e.push(r.data.subCategorListC[n]);
                        if (t.data.result.goods) {
                            for (var g in t.data.result.goods) e.push(t.data.result.goods[g]);
                            r.setData({
                                subCategorListC: e,
                                refresh: !1
                            });
                        } else s -= 1, r.setData({
                            noMoreData: !0
                        });
                    }
                }
            });
        }
    },
    diy_phone: function() {
        wx.makePhoneCall({
            phoneNumber: wx.getStorageSync("tel")
        });
    },
    diy_index: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});