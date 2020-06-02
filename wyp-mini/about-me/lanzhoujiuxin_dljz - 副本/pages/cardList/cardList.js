var a = getApp(), t = require("../../utils/api");

Page({
    data: {
        globalColor: "",
        cardList: []
    },
    onLoad: function(e) {
        0 == Object.keys(a.globalData.wxappInfo).length ? t.getWXAppInfo(this.setWXAppInfoData) : this.setWXAppInfoData(), 
        t.getCardList(this.setCardList);
    },
    setWXAppInfoData: function() {
        var t = a.globalData.wxappInfo;
        if (0 !== Object.keys(t).length) {
            var e = a.globalData.globalColor, o = t.flag, n = t.isOem, l = t.agentAcct;
            o.footerOpen = !o.cancelSupport, this.setData({
                globalColor: e,
                flag: o,
                isOem: n,
                agentAcct: l
            });
        }
    },
    setCardList: function(a) {
        a instanceof Array && (a.forEach(function(a) {
            a.avatorUrl || (a.avatorUrl = "http://qz.faisys.com/image/wxImage/head.png");
        }), this.setData({
            cardList: a
        }));
    },
    gotoDetail: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/card/card?id=" + t
        });
    },
    callPhone: function(a) {
        var t = a.target.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t.getCardList(this.setCardList);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this.data.title, e = "";
        if (a.globalData.wxappInfo && a.globalData.wxappInfo.wxShare) {
            var o = a.globalData.wxappInfo.wxShare.tle, n = a.globalData.wxappInfo.wxShare.p, l = a.globalData.wxappInfo.wxShare.it, r = a.globalData.wxappInfo.wxShare.tt;
            o && r && (t = o), n && l && (e = n);
        }
        return {
            title: t,
            imageUrl: e
        };
    }
});