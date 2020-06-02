function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e, r = "", s = require("../../../utils/server"), a = wx.getStorageSync("utoken"), n = 1;

Page((e = {
    data: {
        list: [ "退/换货", "我的订单" ],
        sub: 0,
        orders: [],
        refresh: !1
    },
    onLoad: function(t) {
        r = this, a = wx.getStorageSync("utoken");
    },
    onShow: function(t) {
        n = 1, (r = this).getOrderLists1(n);
    },
    onPullDownRefresh: function() {
        n = 1, (r = this).getOrderLists1(n), wx.stopPullDownRefresh();
    },
    clickTitle: function(t) {
        r = this;
        var e = t.currentTarget.dataset.index;
        r.setData({
            sub: e
        }), 1 == r.data.sub && (wx.navigateTo({
            url: "../list/list?id=1"
        }), r.setData({
            sub: 0
        }));
    },
    details: function(t) {
        var e = this, r = t.currentTarget.dataset.index;
        this.data.orders[r];
        wx.navigateTo({
            url: "../details/index?order_id=" + e.data.orders[r].id + "&currIndex=" + e.data.orders[r].status
        });
    },
    onReachBottom: function() {
        var t = this;
        if (t.data.refresh) return !1;
        t.data.refresh = !0, t.getOrderLists(++n), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    }
}, t(e, "onPullDownRefresh", function() {
    n = 1, this.getOrderLists1(1);
}), t(e, "getOrderLists", function(t) {
    var e = this, r = wx.getStorageSync("utoken");
    s.sendRequest({
        url: "?r=wxapp.order&utoken=" + r + "&status=4&page=" + t,
        data: {},
        method: "GET",
        success: function(t) {
            if (console.log(t), t.data.result) {
                var r = [];
                r = t.data.result.concat(e.data.orders), e.setData({
                    orders: r
                }), wx.stopPullDownRefresh();
            }
            "" != t.data.result && e.setData({
                refresh: !1
            });
        }
    });
}), t(e, "getOrderLists1", function(t) {
    var e = this;
    s.sendRequest({
        url: "?r=wxapp.order&utoken=" + a + "&status=4&page=1",
        data: {},
        method: "GET",
        success: function(t) {
            t.data.result[0] && e.setData({
                orders: t.data.result
            });
        }
    });
}), e));