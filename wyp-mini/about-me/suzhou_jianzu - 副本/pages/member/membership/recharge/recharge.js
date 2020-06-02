function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e = require("../../../../utils/server"), t = (wx.getStorageSync("utoken"), getApp());

Page({
    data: {
        dataMoney: [],
        cardN: "",
        title: "",
        orderid: "",
        weixin_app: "",
        weixin_app_paycon: "",
        weixin_app_payimg: "",
        wxdata: ""
    },
    onLoad: function() {
        console.log("app", t);
        var a = this;
        console.log("that", a), console.log("that1", a.options.cardN);
        var r = wx.getStorageSync("utoken");
        console.log("utoken", r), e.sendRequest({
            url: "?r=wxapp.member.vipcard.getlist",
            showToast: !1,
            data: {
                utoken: r
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e.data.result);
                var t = e.data.result;
                a.setData({
                    dataMoney: t
                });
            }
        }), a.setData({
            cardN: a.options.cardN,
            title: a.options.title
        });
    },
    merberCZ: function(t) {
        var r = this;
        console.log("merberIndex", t, r);
        var d = void 0, o = r.data.dataMoney[t.currentTarget.dataset.index].id, n = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.member.vipcard.doPay",
            data: {
                utoken: n,
                fee: r.data.dataMoney[t.currentTarget.dataset.index].money,
                cardid: o
            },
            method: "POST",
            success: function(s) {
                console.log("info", s.data.result), e.globalData.wxdata = s.data.result[0].data, 
                e.globalData.order = s.data.result[0].order, d = s.data.result[0].orderid, r.setData(a({
                    goods_name: s.data.result.params_data.title,
                    ordersn: s.data.result.params_data.ordersn,
                    price: s.data.result.params_data.fee,
                    user: s.data.result.params_data.user,
                    orderid: s.data.result[0].orderid,
                    order: s.data.result[0].order,
                    weixin_app: s.data.result[0].data.weixin_app,
                    weixin_app_paycon: s.data.result[0].data.weixin_app_paycon,
                    weixin_app_payimg: s.data.result[0].data.weixin_app_payimg,
                    wxdata: s.data.result[0].data,
                    orderCont: s.data.result[0].order
                }, "weixin_app", s.data.result[1].weixin_app)), wx.setStorageSync("wxdata", r.data.wxdata), 
                1 == r.data.weixin_app ? e.sendRequest({
                    url: "?r=wxapp.member.vipcard.paymain",
                    data: {
                        utoken: n,
                        id: d
                    },
                    method: "GET",
                    success: function(a) {
                        if (1 != a.data.status) return a.data.status, void wx.showToast({
                            title: a.data.msg,
                            icon: "success",
                            duration: 2e3
                        });
                        r.setData({
                            paydata: a.data.result.data,
                            order: a.data.result.order
                        });
                        var o = new Date(), s = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + (o.getDate() + 1);
                        r.setData({
                            now: s
                        }), console.log(d), r.setData({
                            weixin_app_payimg: r.data.weixin_app_payimg
                        });
                        var i = wx.getStorageSync("wxdata").timeStamp.toString(), c = wx.getStorageSync("wxdata").nonceStr, u = wx.getStorageSync("wxdata").package, p = wx.getStorageSync("wxdata").sign;
                        console.log("hhhh", i, c, u, p), wx.requestPayment({
                            nonceStr: c,
                            package: u,
                            signType: "MD5",
                            timeStamp: i,
                            paySign: p,
                            success: function(a) {
                                e.sendRequest({
                                    url: "?r=wxapp.member.vipcard.card",
                                    data: {
                                        utoken: n,
                                        orderid: r.data.orderid,
                                        cardid: r.data.dataMoney[t.currentTarget.dataset.index].id,
                                        type: "charge"
                                    },
                                    method: "POST",
                                    success: function(a) {
                                        var t = a.data.result;
                                        console.log("paysussce", t, a), e.sendRequest({
                                            url: "?r=wxapp.member.vipcard.updateStatus&cardid=" + t + "&utoken=" + n,
                                            data: {},
                                            method: "POST",
                                            success: function(a) {
                                                wx.navigateBack({
                                                    delta: 1
                                                });
                                            }
                                        });
                                    }
                                }), wx.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    duration: 2e3
                                });
                            },
                            fail: function(a) {
                                wx.showToast({
                                    title: "支付失败",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                }) : (wx.navigateTo({
                    url: "../../membership/cardSuccess/cardSuccess?orderid=" + d + "&cardid=" + o + "&weixin_app=" + r.data.weixin_app + "recharge=recharge"
                }), console.log(111));
            }
        });
    },
    merberCZ_two: function(a) {
        var e = this;
        console.log("that", e), wx.navigateTo({
            url: "../../membership/cardInfo/cardInfo?money=" + e.data.dataMoney[a.currentTarget.dataset.index].money + "&cardid=" + e.data.cardN
        });
    }
});