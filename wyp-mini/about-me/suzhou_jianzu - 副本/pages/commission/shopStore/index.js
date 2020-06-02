var t = require("../../../utils/server"), e = wx.getStorageSync("utoken"), a = 1;

Page({
    data: {
        loading: !0,
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1
    },
    onLoad: function(t) {
        e = wx.getStorageSync("utoken");
        var a = this;
        if (t.mid) {
            a.setData({
                mid: t.mid
            });
            wx.setStorageSync("mid", t.mid), wx.getStorageSync("mid");
        }
        wx.setStorageSync("mid", t.mid);
        a.setData({
            mid: t.mid
        });
        wx.setStorageSync("mid", t.mid);
        a.loadData(t);
    },
    loadData: function(a) {
        var s = this;
        t.sendRequest({
            url: "?r=wxapp.commission.myshop&mid=" + s.data.mid + "&utoken=" + e,
            method: "GET",
            showToast: !1,
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return wx.hideToast(), void s.showModal({
                    content: "" + t.errMsg
                });
                s.setData({
                    top: t.data.result
                });
            }
        }), t.sendRequest({
            url: "?r=wxapp.commission.myshop.get_goods&mid=" + s.data.mid + "&utoken=" + e,
            method: "GET",
            showToast: !1,
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return wx.hideToast(), void s.showModal({
                    content: "" + t.errMsg
                });
                s.setData({
                    loading: !1,
                    data: t.data.result.list,
                    total: t.data.result.total
                });
            }
        });
    },
    showToast: function(t) {
        wx.showToast({
            title: t.title,
            icon: t.icon,
            duration: t.duration || 1500,
            success: function(e) {
                "function" == typeof t.success && t.success(e);
            },
            fail: function(e) {
                "function" == typeof t.fail && t.fail(e);
            },
            complete: function(e) {
                "function" == typeof t.complete && t.complete(e);
            }
        });
    },
    QRcode: function() {
        var t = this;
        wx.navigateTo({
            url: "../QRcode/QRcode?mid=" + t.data.mid
        });
    },
    toSell: function(t) {
        var e = this, a = t.currentTarget.dataset.id, s = e.data.mid;
        wx.navigateTo({
            url: "../../goods/detail/detail?&objectId=" + a + "&mid=" + s
        });
    },
    bottom: function(s) {
        var o = this;
        o.data.refresh || (o.setData({
            refresh: !0
        }), a += 1, t.sendRequest({
            url: "?r=wxapp.commission.myshop.get_goods",
            data: {
                mid: o.data.mid,
                utoken: e,
                page: a
            },
            method: "GET",
            success: function(t) {
                var e = [];
                for (var s in o.data.data) e.push(o.data.data[s]);
                if ("" == t.data.result.list) a -= 1; else {
                    for (var i in t.data.result.list) e.push(t.data.result.list[i]);
                    o.setData({
                        data: e
                    }), o.setData({
                        refresh: !1
                    });
                }
                if (t.statusCode && 200 != t.statusCode) return wx.hideToast(), void o.showModal({
                    content: "" + t.errMsg
                });
            }
        }));
    },
    onShareAppMessage: function() {
        return {
            title: "我的小店",
            path: "/pages/commission/shopStore/index?mid=" + this.data.mid
        };
    }
});