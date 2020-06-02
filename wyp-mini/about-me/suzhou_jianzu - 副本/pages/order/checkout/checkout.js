var t, a = require("../../../utils/server"), e = null;

Page({
    data: {
        amount: 0,
        carts: [],
        addressList: [],
        addressIndex: 0,
        height: 0
    },
    addressObjects: [],
    doHandler: function() {
        a.globalData.login && wx.switchTab({
            url: "/pages/member/index/index"
        });
    },
    onShow: function() {
        t && wx.navigateBack({
            delta: 1,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    onLoad: function(i) {
        t = !1;
        var r = this, d = i.cartIds, s = i.amount;
        if (i.mid && r.setData({
            mid: i.mid
        }), i.time) var n = i.time;
        var o = wx.getStorageSync("utoken");
        a.globalData.cartIds = d, a.globalData.amount = s, this.setData({
            cartIds: d,
            amount: s,
            time: n
        }), e = setTimeout(function() {
            a.globalData.login ? a.sendRequest({
                url: "?r=wxapp.member.address.selector",
                data: {
                    utoken: o
                },
                method: "GET",
                success: function(a) {
                    var e = a.data;
                    t = !0, "没有数据" == e.msg ? r.data.mid ? wx.navigateTo({
                        url: "../../../../../../address/add/add?cartIds=" + d + "&mid=" + r.data.mid + "&returnTo=1"
                    }) : n ? wx.reLaunch({
                        url: "../../address/add/add?cartIds=" + d + "&amount=" + s + "&title=" + i.title + "&time=" + i.time + "&price=" + i.price + "&img=" + i.img + "&returnTo=1"
                    }) : wx.navigateTo({
                        url: "../../address/add/add?returnTo=1"
                    }) : n ? wx.reLaunch({
                        url: "../ordersubmit/index?cartIds=" + d + "&amount=" + s + "&title=" + i.title + "&time=" + i.time + "&price=" + i.price + "&img=" + i.img + "&store=" + i.store
                    }) : r.data.mid ? wx.navigateTo({
                        url: "../ordersubmit/index?cartIds=" + d + "&mid=" + r.data.mid
                    }) : wx.navigateTo({
                        url: "../ordersubmit/index"
                    });
                }
            }) : (t = !0, wx.switchTab({
                url: "/pages/member/index/index"
            }));
        }, 500), wx.getSystemInfo({
            success: function(t) {
                r.setData({
                    height: t.windowHeight
                });
            }
        });
    },
    readCarts: function(t) {
        var a = parseInt(t.amount);
        this.setData({
            amount: a
        });
        for (var e = t.cartIds.split(","), i = [], r = 0; r < e.length; r++) {
            var d = new AV.Query("Cart");
            d.include("goods"), d.get(e[r]).then(function(t) {
                i.push(t);
            }, function(t) {});
        }
        this.setData({
            carts: i
        });
    }
});