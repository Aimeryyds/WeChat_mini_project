var t, a, e = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        numid: 0,
        sub: 0,
        isAdvs: "",
        imgUrls: [ "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" ],
        showshopcode: !1
    },
    onLoad: function(t) {
        console.log(t);
        var a = this, e = "";
        if (t.scene) {
            if (console.log("options.scene"), void 0 !== t.scene) {
                for (var o = {}, s = decodeURIComponent(t.scene).split("&"), d = 0; d < s.length; d++) {
                    var r = s[d].split("=");
                    o[r[0]] = r[1];
                }
                e = o.merchid, a.setData({
                    shopId: e
                });
            }
        } else e = t.id, a.setData({
            shopId: e
        });
        a.getShop(a.data.shopId);
    },
    getShop: function(t) {
        var a = this;
        e.sendRequest({
            url: "?r=wxapp.shop",
            showToast: !1,
            data: {
                merchid: t
            },
            method: "GET",
            success: function(t) {
                a.setData({
                    shopinfo: t.data.result.shopinfo,
                    goods: t.data.result.goods,
                    newgoods: t.data.result.newgoods,
                    indexrecommands: t.data.result.indexrecommands,
                    totalsales: t.data.result.totalsales,
                    totalfavor: t.data.result.totalfavor,
                    averscore: Math.round(t.data.result.averscore),
                    totalgoods: t.data.result.totalgoods,
                    totalnewgoods: t.data.result.totalnewgoods,
                    totalrecommands: t.data.result.totalrecommands,
                    loading: !1
                }), t.data.result && (t.data.result.advs[0] ? a.setData({
                    advs: t.data.result.advs,
                    isAdvs: !0
                }) : a.setData({
                    isAdvs: !1
                })), a.setData({
                    averscoreImg: "http://tws.cnweisou.com/images/stars" + a.data.averscore + ".gif"
                });
            }
        });
    },
    getSearch: function(t) {
        var a, o = this;
        a = t || "", e.sendRequest({
            url: "?r=wxapp.shop&merchid=" + o.data.shopId,
            data: {
                keyword: a
            },
            method: "GET",
            success: function(t) {
                console.log(t), o.setData({
                    shopinfo: t.data.result.shopinfo,
                    goods: t.data.result.goods,
                    newgoods: t.data.result.newgoods,
                    indexrecommands: t.data.result.indexrecommands,
                    totalsales: t.data.result.totalsales,
                    totalfavor: t.data.result.totalfavor,
                    averscore: Math.round(t.data.result.averscore),
                    totalgoods: t.data.result.totalgoods,
                    totalnewgoods: t.data.result.totalnewgoods,
                    totalrecommands: t.data.result.totalrecommands
                }), t.data.result && (t.data.result.advs[0] ? o.setData({
                    advs: t.data.result.advs,
                    isAdvs: !0
                }) : o.setData({
                    isAdvs: !1
                })), o.setData({
                    averscoreImg: "http://tws.cnweisou.com/images/stars" + o.data.averscore + ".gif"
                });
            }
        });
    },
    formSubmit: function(a) {
        this.getSearch(t);
    },
    inputchange: function(a) {
        console.log(a.detail.value), t = a.detail.value;
    },
    giveTelePhone: function(t) {
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    sceneCode: function(t) {
        var a = this, o = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=shop.merch_code",
            data: {
                merchid: a.data.shopId,
                utoken: o
            },
            method: "GET",
            success: function(t) {
                var e = t.data.result.url, o = [];
                console.log(t.data.result), o.push(e), a.setData({
                    shopCodeImg: e,
                    showshopcode: !0,
                    arrayShopCode: o
                });
            }
        });
    },
    previewCodeImg: function() {
        var t = this;
        wx.previewImage({
            urls: t.data.arrayShopCode
        });
    },
    closeShopCode: function() {
        this.setData({
            showshopcode: !1
        });
    },
    clickTitle: function(t) {
        var a = this, e = t.currentTarget.dataset.index;
        a.setData({
            sub: e
        });
    },
    tapGoods: function(t) {
        a = this, console.log(t);
        var e = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../detail/detail?objectId=" + e + "&myshop=1"
        });
    },
    joinIndu: function(t) {
        var a = this;
        t.currentTarget.dataset.index;
        a.setData({
            sub: 0
        }), wx.navigateTo({
            url: "introduceShop/introduceShop?id=" + a.data.shopId
        });
    }
});