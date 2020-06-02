function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e, t = require("../../../../utils/server"), r = wx.getStorageSync("utoken");

Page({
    data: (e = {
        money: "",
        cardid: "",
        goods_name: "",
        user: "",
        ordersn: "",
        price: "",
        orderid: "",
        weixin_app: "",
        weixin_app_paycon: "",
        weixin_app_payimg: "",
        wxdata: "",
        order: ""
    }, a(e, "weixin_app", ""), a(e, "infoList", {}), e),
    onLoad: function(e) {
        r = wx.getStorageSync("utoken");
        var d = this;
        console.log(e), d.setData({
            money: e.money,
            cardid: e.cardid,
            realname: e.realname,
            mobile: e.mobile
        }), console.log(d.data.infoList), t.sendRequest({
            url: "?r=wxapp.member.vipcard.doPay",
            data: {
                utoken: r,
                fee: d.data.money,
                cardid: d.data.cardid
            },
            method: "POST",
            success: function(e) {
                t.globalData.wxdata = e.data.result[0].data, t.globalData.order = e.data.result[0].order, 
                d.setData(a({
                    goods_name: e.data.result.params_data.title,
                    ordersn: e.data.result.params_data.ordersn,
                    price: e.data.result.params_data.fee,
                    user: e.data.result.params_data.user,
                    orderid: e.data.result[0].orderid,
                    paydata: e.data.result.data,
                    order: e.data.result.order,
                    weixin_app: e.data.result[0].data.weixin_app,
                    weixin_app_paycon: e.data.result[0].data.weixin_app_paycon,
                    weixin_app_payimg: e.data.result[0].data.weixin_app_payimg,
                    wxdata: e.data.result[0].data,
                    orderCont: e.data.result[0].order
                }, "weixin_app", e.data.result[1].weixin_app)), wx.setStorageSync("wxdata", d.data.wxdata), 
                console.log("wxdata", d.data.orderid);
            }
        });
    },
    payCard: function() {
        var a = this;
        wx.navigateTo({
            url: "../cardSuccess/cardSuccess?orderid=" + a.data.orderid + "&cardid=" + a.data.cardid + "&weixin_app=" + a.data.weixin_app + "&realname=" + a.data.realname + "&mobile=" + a.data.mobile
        });
    }
});