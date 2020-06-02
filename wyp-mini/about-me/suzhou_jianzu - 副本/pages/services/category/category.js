function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../../utils/server"), r = (wx.getStorageSync("utoken"), 1);

Page({
    data: t({
        topCategories: [],
        subCategories: [],
        highlight: [ "highlight", "", "", "", "", "", "", "", "", "", "", "" ],
        banner: "",
        index: 0,
        height: 1.5 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1,
        input: ""
    }, "refresh", !1),
    onLoad: function() {
        var t = this;
        console.log(t.data.height), t.leftDate();
    },
    leftDate: function() {
        var t = this, e = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=wxapp.shop.takingOrder.serviceCatergory",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    topCategories: e.data.result.data.parent,
                    objectId: e.data.result.data.parent[0].id
                }), t.rightData(e.data.result.data.parent[0].id);
            }
        });
    },
    rightData: function(t) {
        var e = this, r = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=wxapp.shop.takingOrder.getServiceGoodsList",
            data: {
                category_id: t,
                page: 1,
                utoken: r
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    subCategorListG: t.data.result.goods.list
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
            url: "../search/search"
        });
    },
    formSubmit: function(t) {
        console.log(t.detail.value), wx.navigateTo({
            url: "../search/search?keywords=" + t.detail.value
        });
    },
    tapTopCategory: function(t) {
        var e = this, a = t.currentTarget.dataset.id, r = parseInt(t.currentTarget.dataset.index);
        t.currentTarget.dataset.level;
        e.setHighlight(r), e.setData({
            index: r,
            id: a,
            objectId: a
        }), e.rightData(a);
    },
    setHighlight: function(t) {
        for (var e = [], a = 0; a < this.data.topCategories; a++) e[a] = "";
        e[t] = "highlight", this.setData({
            highlight: e
        });
    },
    avatarTap: function(t) {
        e = t.currentTarget.dataset.objectId, wx.navigateTo({
            url: "../list/index?categoryId=" + e
        });
    },
    avatarDetail: function(t) {
        var e = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../detail/index?objectId=" + e
        });
    },
    bottom: function(e) {
        var s = this;
        if (!s.data.refresh) {
            s.setData({
                refresh: !0
            }), console.log(s.data.objectId), r += 1;
            var i = wx.getStorageSync("utoken");
            a.sendRequest({
                url: "?r=wxapp.shop.takingOrder.getServiceGoodsList",
                data: t({
                    category_id: s.data.objectId,
                    page: r,
                    utoken: i
                }, "page", r),
                method: "GET",
                success: function(t) {
                    var e = [];
                    for (var a in s.data.subCategorListG) e.push(s.data.subCategorListG[a]);
                    if (t.data.result.goods.list) {
                        for (var i in t.data.result.goods.list) e.push(t.data.result.goods.list[i]);
                        s.setData({
                            subCategorListG: e,
                            refresh: !1
                        });
                    } else r -= 1;
                }
            });
        }
    }
});