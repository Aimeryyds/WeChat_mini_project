var e = require("../../../utils/server"), t = wx.getStorageSync("utoken"), a = "";

Page({
    data: {
        description: "",
        money: "",
        id: "",
        cardList: "",
        loading: !0
    },
    onLoad: function(r) {
        t = wx.getStorageSync("utoken"), a = this, e.sendRequest({
            url: "?r=wxapp.member.vipcard.getlist",
            showToast: !1,
            data: {
                utoken: t
            },
            method: "GET",
            success: function(e) {
                a.setData({
                    loading: !1,
                    cardList: e.data.result
                });
            }
        });
    },
    activateCardSilver: function(e) {
        var t = this;
        wx.navigateTo({
            url: "../../member/membership/cardOpen/cardOpen?money=" + t.data.cardList[e.currentTarget.dataset.index].money + "&id=" + t.data.cardList[e.currentTarget.dataset.index].id
        });
    }
});