var a = require("../../../utils/server"), t = require("../../../wxParse/wxParse.js"), e = wx.getStorageSync("utoken");

Page({
    data: {
        tab: 1,
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        bargain: !1,
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        bargains: 2
    },
    onLoad: function(n) {
        var i = this;
        if (e = wx.getStorageSync("utoken"), i.setData({
            id: n.id,
            mid: n.mid
        }), n.mid) wx.setStorageSync("mid", n.mid), wx.getStorageSync("mid");
        a.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.bargain",
            data: {
                utoken: e,
                mid: i.data.mid,
                id: i.data.id
            },
            success: function(a) {
                if (console.log(a.data.result), console.log(a.data.result.account_set.rule), console.log(a.data.result.res2.content), 
                "" != a.data.result.account_set.rule) {
                    var e = a.data.result.account_set.rule;
                    t.wxParse("rules", "html", e, i, 5), i.setData({
                        rule: e
                    });
                }
                if ("" != a.data.result.res2.content) {
                    var n = a.data.result.res2.content;
                    t.wxParse("contents", "html", n, i, 5), i.setData({
                        content: n
                    });
                }
                i.setData({
                    data: a.data.result
                });
            }
        });
    },
    onShow: function() {
        var t = this;
        e = wx.getStorageSync("utoken"), a.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.bargain",
            data: {
                utoken: e,
                mid: t.data.mid,
                id: t.data.id
            },
            success: function(a) {
                t.setData({
                    data: a.data.result
                });
            }
        });
    },
    kanjia: function() {
        var t = this;
        t.data.bargain ? wx.showModal({
            title: "提示",
            content: "您已经砍价啦",
            showCancel: !1,
            success: function(a) {
                a.confirm && console.log("用户点击确定");
            }
        }) : (t.setData({
            bargain: !0
        }), e = wx.getStorageSync("utoken"), a.sendRequest({
            method: "GET",
            url: "?r=wxapp.activity.bargin.bargain",
            data: {
                utoken: e,
                mid: t.data.mid,
                id: t.data.id,
                ajax: 151
            },
            success: function(n) {
                console.log(n), n.data.status < 0 ? wx.showModal({
                    title: "提示",
                    content: n.data.msg,
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && console.log("用户点击确定");
                    }
                }) : a.sendRequest({
                    method: "GET",
                    url: "?r=wxapp.activity.bargin.bargain",
                    data: {
                        utoken: e,
                        mid: t.data.mid,
                        id: t.data.id
                    },
                    success: function(a) {
                        t.setData({
                            data: a.data.result
                        }), wx.showModal({
                            title: "提示",
                            content: "砍价成功",
                            showCancel: !1,
                            success: function(a) {
                                a.confirm && console.log("用户点击确定");
                            }
                        }), t.setData({
                            bargain: 1
                        });
                    }
                });
            }
        }));
    },
    kanjias: function() {
        var a = this;
        console.log(a.data.bargains), "1" == a.data.bargains ? a.setData({
            bargains: 2
        }) : "2" == a.data.bargains && a.setData({
            bargains: 1
        });
    },
    toorder: function(a) {
        wx.navigateTo({
            url: "/pages/order/details/index?order_id=" + a.currentTarget.id
        });
    },
    toindex: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    tab: function(a) {
        this.setData({
            tab: a.currentTarget.dataset.index
        });
    },
    tosubmitorder: function(a) {
        var t = this;
        if (1 == t.data.data.res2.mode && t.data.data.res.now_price > t.data.data.res2.end_price) return console.log("没到底价-----------"), 
        void wx.showToast({
            title: "还没到底价喔",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 2e3
        });
        console.log("立即购买-----------------"), "222" == t.data.data.swi ? wx.reLaunch({
            url: "../index/index?"
        }) : wx.reLaunch({
            url: "../../order/ordersubmit/index?id=" + t.data.id + "&mid=" + t.data.mid
        });
    },
    onShareAppMessage: function() {
        var a = this, t = "/pages/bargain/bargain/index?id=" + a.data.id + "&mid=" + a.data.mid;
        return {
            title: a.data.data.res2.title,
            path: t
        };
    }
});