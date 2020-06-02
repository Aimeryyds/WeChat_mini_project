var t, a, e = require("../../utils/server"), s = [];

Page({
    data: {
        loading: !0,
        carts: [],
        goodsList: [],
        empty: !0,
        minusStatuses: [ "disabled", "disabled", "normal", "normal", "disabled" ],
        selectedAllStatus: !0,
        total: ""
    },
    onLoad: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                var e = (e = t.windowHeight) - e / 750 * 60;
                a.setData({
                    height: e
                });
            }
        });
    },
    toIndex: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    onPullDownRefresh: function() {
        this.getCarts(), wx.stopPullDownRefresh();
    },
    getToPage: function(t) {
        wx.switchTab({
            url: "../index/index"
        });
    },
    joinDetail: function(t) {
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + t.currentTarget.dataset.goodsid
        });
    },
    bindMinus: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts[e][a].total;
        s > 1 && s--;
        var r = s <= 1 ? "disabled" : "normal", n = this.data.carts;
        n[e][a].total = s;
        var i = this.data.minusStatuses;
        i[a] = r, this.setData({
            carts: n,
            minusStatuses: i
        });
    },
    bindPlus: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts[e][a].total, r = ++s <= 1 ? "disabled" : "normal", n = this.data.carts;
        n[e][a].total = s;
        var i = this.data.minusStatuses;
        i[a] = r, this.setData({
            carts: n,
            minusStatuses: i
        });
    },
    bindManual: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts, r = t.detail.value;
        s[e][a].total = r, this.setData({
            carts: s
        });
    },
    SaveEditNum: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts;
        s[e][a].showEdit = !1, this.setData({
            carts: s
        }), this.saveNum(s[e][a].id, s[e][a].total), this.sum(), this.right();
    },
    editNum: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts;
        s[e][a].showEdit = !0, this.setData({
            carts: s
        }), this.left();
    },
    bindCheckbox: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = parseInt(t.currentTarget.dataset.merchid), s = this.data.carts[e][a].selected, r = this.data.carts;
        r[e][a].selected = !s, this.setData({
            carts: r
        }), this.updataSelect(r[e][a].id, r[e][a].selected), this.sum();
    },
    bindSelectAll: function() {
        var t = this.data.selectedAllStatus;
        t = !t;
        var a = this.data.carts;
        for (var e in a) for (var s in a[e]) a[e][s].selected = t;
        this.setData({
            selectedAllStatus: t,
            carts: a
        }), this.sum(), this.updateAllSelect("all", t);
    },
    bindCheckout: function() {
        var t = this.data.carts, a = [];
        for (var e in t) for (var s in t[e]) this.data.carts[e][s].selected && a.push(this.data.carts[e][s].id);
        a.length <= 0 ? wx.showToast({
            title: "请勾选商品",
            icon: "success",
            duration: 1e3
        }) : (a = a.join(","), wx.navigateTo({
            url: "../order/ordersubmit/index"
        }));
    },
    getCarts: function(t) {
        var t = t || !0, a = [], r = this, n = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.member.cart.getNewCart",
            showToast: t,
            data: {
                utoken: n
            },
            method: "GET",
            success: function(t) {
                if (wx.stopPullDownRefresh(), t && t.data) {
                    var e = t.data.result;
                    console.log(e), e && (0 != e.length ? r.setData({
                        empty: !1
                    }) : r.setData({
                        empty: !0
                    }));
                    var n = !0;
                    for (var i in e) {
                        s[i] = [];
                        for (var c in e[i]) s[i].push(0), 1 == e[i][c].selected ? e[i][c].selected = !0 : (e[i][c].selected = !1, 
                        n = !1), a[c] = 1;
                    }
                    r.setData({
                        loading: !1,
                        carts: e,
                        selectedAllStatus: n,
                        minusStatuses: a
                    }), r.sum();
                } else r.setData({
                    empty: !0
                }), r.setData({
                    carts: "",
                    total: 0
                });
            }
        });
    },
    onShow: function() {
        return void this.getCarts(!1);
    },
    sum: function() {
        var t = this.data.carts, a = 0;
        for (var e in t) for (var s in t[e]) t[e][s].selected && (a += t[e][s].total * t[e][s].marketprice);
        var r = parseInt(100 * a);
        a = parseFloat(r / 100).toFixed(2), this.setData({
            carts: t,
            total: a
        });
    },
    deleteCart: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), s = parseInt(t.currentTarget.dataset.merchid), r = this.data.carts[s][a].id, n = this, i = wx.getStorageSync("utoken");
        n.right(), wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定删除吗？",
            success: function(t) {
                t.confirm && e.sendRequest({
                    url: "?r=wxapp.member.cart.remove",
                    data: {
                        utoken: i,
                        id: r
                    },
                    method: "GET",
                    success: function(t) {
                        n.getCarts();
                    }
                });
            }
        });
    },
    saveNum: function(t, a, s) {
        var r = this, n = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.member.cart.update",
            data: {
                utoken: n,
                id: t,
                total: a,
                optionid: s
            },
            method: "GET",
            success: function(t) {
                r.getCarts();
            }
        });
    },
    updataSelect: function(t, a) {
        var s = this;
        a = a ? 1 : 0;
        var r = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.member.cart.select",
            data: {
                utoken: r,
                id: t,
                selected: a
            },
            method: "GET",
            success: function(t) {
                var a = s.data.carts, e = !0;
                for (var r in a) for (var n in a[r]) 1 == a[r][n].selected ? a[r][n].selected = !0 : (a[r][n].selected = !1, 
                e = !1);
                s.setData({
                    selectedAllStatus: e
                }), s.sum();
            }
        });
    },
    updateAllSelect: function(t, a) {
        a = a ? 1 : 0;
        var s = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.member.cart.select",
            data: {
                utoken: s,
                id: t,
                selected: a
            },
            method: "GET",
            success: function(t) {}
        });
    },
    buttonStart: function(e) {
        t = e.touches[0], a = e.currentTarget.dataset.index;
        var r = e.currentTarget.dataset.i;
        for (var n in s) for (var i in s[r]) s[n][i] = 0;
        s[r][a] = 1, this.setData({
            move_arr: s
        });
    },
    buttonEnd: function(a) {
        var e = this, s = a.changedTouches[0];
        t.clientX - s.clientX > 50 ? e.left() : s.clientX - t.clientX > 50 && e.right();
    },
    right: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        });
        this.animation = t, t.translateX(0).step(), this.setData({
            animationData: t.export()
        });
    },
    left: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease"
        });
        this.animation = t, t.translateX(-60).step(), this.setData({
            animationData: t.export()
        });
    }
});