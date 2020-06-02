var t, a, e, i = require("../../../utils/server"), n = require("../../../wxParse/wxParse.js"), d = wx.getStorageSync("utoken");

Page({
    data: {
        indicatorDots: !1
    },
    onLoad: function(a) {
        d = wx.getStorageSync("utoken"), (e = this).setData({
            mid: a.mid,
            id: a.id
        });
        var e = this;
        i.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.detail",
            data: {
                utoken: d,
                mid: e.data.mid,
                id: e.data.id
            },
            success: function(a) {
                if ("" != a.data.result.res.content) {
                    var i = a.data.result.res.content;
                    n.wxParse("contain", "html", i, e, 5);
                }
                new Date(a.data.result.res.start_time);
                t = new Date(a.data.result.res.end_time.replace(/-/g, "/")), e.setData({
                    data: a.data.result
                });
            }
        });
    },
    checkTime: function(t) {
        return t < 10 && (t = "0" + t), t;
    },
    onShow: function(n) {
        var r = this;
        d = wx.getStorageSync("utoken"), i.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.detail",
            data: {
                utoken: d,
                mid: r.data.mid,
                id: r.data.id
            },
            success: function(i) {
                t = new Date(i.data.result.res.end_time.replace(/-/g, "/")), r.setData({
                    data: i.data.result
                }), a = setInterval(function() {
                    if (e < "0") r.setData({
                        time: "活动已结束"
                    }), clearInterval(a); else {
                        var i = t - new Date(), n = parseInt(i / 1e3 / 60 / 60 / 24, 10), d = parseInt(i / 1e3 / 60 / 60 % 24, 10), s = parseInt(i / 1e3 / 60 % 60, 10);
                        e = parseInt(i / 1e3 % 60, 10);
                        var o = "剩余:" + n.toString() + "天" + d.toString() + "时" + s.toString() + "分" + e.toString() + "秒";
                        r.setData({
                            time: o
                        });
                    }
                }, 1e3);
            }
        });
    },
    onUnload: function(t) {
        clearInterval(a);
    },
    tosubmitorder: function(t) {
        wx.navigateTo({
            url: "../../order/ordersubmit/index?id=" + t.currentTarget.dataset.id
        });
    },
    tobargain: function(t) {
        d = wx.getStorageSync("utoken");
        var a = this;
        a.data.data.act_swi && a.data.data.act_swi.id ? wx.showModal({
            title: "砍价提示",
            content: "您已经发起过一次本商品的砍价活动,是否立即查看？",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../bargain/index?id=" + a.data.data.act_swi.id + "&mid=" + a.data.mid
                });
            }
        }) : i.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.join",
            data: {
                utoken: d,
                mid: a.data.mid,
                goods: a.data.id
            },
            success: function(t) {
                console.log(t), t.data.status > 0 ? wx.navigateTo({
                    url: "../bargain/index?id=" + t.data.result.id + "&mid=" + a.data.mid
                }) : t.data.status < 0 && console.log(错误);
            }
        });
    },
    tolist: function() {
        wx.reLaunch({
            url: "../../member/index/index"
        });
    },
    toback: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});