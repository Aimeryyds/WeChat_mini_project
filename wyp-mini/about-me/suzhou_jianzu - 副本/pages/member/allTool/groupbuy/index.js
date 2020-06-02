var t = require("../../../../utils/server"), e = 1, a = "";

Page({
    tabClick: function(t) {
        var r = t.currentTarget.dataset.index, s = [ "", "1", "2", "3", "4" ], o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[r] = "text-select", this.setData({
            tabClasss: o,
            tab: r,
            currIndex: r
        }), e = 1, a = s[r], this.data.orders = [], this.getOrderLists(s[r], e);
    },
    pay: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        if (this.data.orders[a].teamid) var r = e.data.orders[a].teamid;
        var s = e.data.orders[a].id;
        this.data.orders[a];
        wx.navigateTo({
            url: "../../../groupbuy/cashier/index?orderid=" + s + "&teamid=" + r
        });
    },
    cancel: function(r) {
        var s = r.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(r) {
                if (r.confirm) {
                    var s = wx.getStorageSync("utoken");
                    t.sendRequest({
                        url: "?r=wxapp.groups.orders.cancel",
                        data: {
                            utoken: s,
                            id: o.id
                        },
                        method: "GET",
                        success: function(t) {
                            wx.showToast({
                                title: t.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), e = 1, i.data.orders = [], i.getOrderLists(a, 1);
                        }
                    });
                }
            }
        });
    },
    confirm: function(r) {
        var s = r.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定已收货吗？",
            success: function(r) {
                if (r.confirm) {
                    var s = wx.getStorageSync("utoken");
                    t.sendRequest({
                        url: "?r=wxapp.groups.orders.finish",
                        data: {
                            utoken: s,
                            id: o.id
                        },
                        method: "GET",
                        success: function(t) {
                            wx.showToast({
                                title: t.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), e = 1, i.data.orders = [], i.getOrderLists(a, 1);
                        }
                    });
                }
            }
        });
    },
    details: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        if (e.data.orders[a].teamid) var r = e.data.orders[a].teamid;
        var s = e.data.orders[a].id;
        e.data.orders[a];
        wx.navigateTo({
            url: "../details/index?orderid=" + s + "&teamid=" + r
        });
    },
    onReachBottom: function() {
        var t = this;
        if (t.data.refresh) return !1;
        t.data.refresh = !0, t.getOrderLists(a, ++e), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        e = 1, this.data.orders = [], this.getOrderLists(a, 1);
    },
    data: {
        loading: !0,
        orders: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ],
        refresh: !1
    },
    getOrderLists: function(e, a, r) {
        var s = this, r = r, o = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.groups.orders.get_list",
            showToast: r,
            data: {
                utoken: o,
                status: e,
                page: a
            },
            method: "GET",
            success: function(t) {
                if (t.data.result) {
                    var e = t.data.result.list, a = s.data.orders;
                    for (var r in e) a.push(e[r]);
                    wx.stopPullDownRefresh(), s.setData({
                        loading: !1,
                        orders: a
                    });
                }
                "" != t.data.result.list && s.setData({
                    refresh: !1
                });
            }
        });
    },
    evaluation: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.orders[e];
        wx.navigateTo({
            url: "../pinjia/index?order_id=" + a.id
        });
    },
    onShow: function(t) {
        console.log(111), e = 1;
        this.data.orders = [], this.getOrderLists(this.data.indexCurr, e, !1), this.setData({});
        a = this.data.indexCurr;
    },
    onLoad: function(t) {
        var e = t.id, a = parseInt(t.id) - 1, r = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        r[e] = "text-select", this.setData({
            tabClasss: r,
            tab: e,
            indexCurr: a
        });
    }
});