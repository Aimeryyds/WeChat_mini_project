function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../../utils/server"), o = 1;

Page((e = {
    data: {
        loading: !0
    },
    details: function(t) {
        var e = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../../goods/detail/detail?objectId=" + e
        });
    },
    deleteGoods: function(t) {
        var e = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            confirmColor: "#FF6A6A",
            content: "确定删除该收藏吗？",
            success: function(s) {
                if (s.confirm) {
                    var n = t.currentTarget.dataset.goodsId, l = wx.getStorageSync("utoken");
                    a.sendRequest({
                        url: "?r=wxapp.member.favorite.remove",
                        data: {
                            utoken: l,
                            ids: n
                        },
                        method: "GET",
                        success: function(t) {
                            wx.showToast({
                                title: t.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), o = 1, e.data.collects = [], e.getCollectLists(1);
                        }
                    });
                }
            }
        });
    },
    tabClick: function(t) {
        var e = t.currentTarget.dataset.index, a = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        a[e] = "text-select", this.setData({
            tabClasss: a,
            tab: e
        });
    },
    onReachBottom: function() {
        this.data.finishEnd || (o++, this.getCollectLists(o), wx.showToast({
            title: "加载中",
            icon: "loading"
        }));
    },
    onPullDownRefresh: function() {
        o = 1, console.log("onPullDownRefresh"), this.data.collects = [], this.getCollectLists(o);
    }
}, t(e, "data", {
    loading: !0,
    orders: [],
    collects: [],
    tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
}), t(e, "getCollectLists", function(t, e) {
    var o = this;
    if (void 0 == e) e = !0; else var e = e;
    var s = wx.getStorageSync("utoken");
    a.sendRequest({
        url: "?r=wxapp.member.favorite",
        showToast: e,
        data: {
            utoken: s,
            page: t
        },
        method: "GET",
        success: function(e) {
            var a = e.data.result, s = o.data.collects;
            if (a.length > 0) {
                for (var n in a) s.push(a[n]);
                o.setData({
                    collects: s,
                    finishEnd: !1
                });
            } else 1 == t ? o.setData({
                noInfo: !0
            }) : o.setData({
                finishEnd: !0
            });
            o.setData({
                loading: !1
            });
        }
    });
}), t(e, "onLoad", function() {
    o = 1;
    this.getCollectLists(1, !1);
}), e));