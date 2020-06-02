var t = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        cardsn: "",
        credit1: "",
        credit2: "",
        title: "",
        backurl: "",
        record: ""
    },
    onLoad: function(a) {
        var e = this, r = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member&utoken=" + r,
            method: "GET",
            showToast: !1,
            success: function(t) {
                e.setData({
                    credit2: t.data.result.credit3,
                    credit1: t.data.result.credit1,
                    cardsn: t.data.result.cardsn
                }), t.data.result.cardset && t.data.result.cardset.background.backurl && e.setData({
                    backurl: t.data.result.cardset.background.backurl,
                    logoUrl: t.data.result.cardset.logo
                }), console.log(e.data.logoUrl), t.data.result.cardset && t.data.result.cardset.title && e.setData({
                    title: t.data.result.cardset.title,
                    id: t.data.result.cardset.id
                });
            }
        });
    },
    onShow: function() {
        var a = this, e = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member&utoken=" + e,
            method: "GET",
            showToast: !1,
            success: function(t) {
                a.setData({
                    loading: !1,
                    credit2: t.data.result.credit3,
                    credit1: t.data.result.credit1,
                    cardsn: t.data.result.cardsn
                }), t.data.result.cardset && t.data.result.cardset.background.backurl && a.setData({
                    backurl: t.data.result.cardset.background.backurl
                }), t.data.result.cardset && t.data.result.cardset.title && a.setData({
                    title: t.data.result.cardset.title
                }), console.log("data", a.data);
            }
        });
    },
    joinCardIndex: function() {
        wx.navigateTo({
            url: "../../member/membership/index"
        });
    },
    joinconsumption: function() {
        wx.navigateTo({
            url: "consumption/consumption"
        });
    },
    recharge: function() {
        wx.navigateTo({
            url: "../membership/recharge/recharge?cardN=" + this.data.cardsn + "&title=" + this.data.title
        });
    }
});