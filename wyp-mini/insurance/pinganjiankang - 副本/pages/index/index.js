var e = require("../../utils/share.js"), t = require("../../utils/productList.js"), o = getApp(), a = require("../../utils/util.js"), n = require("../../utils/mpSDK.js");

Page({
    data: {
        pictures: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        indexImgList: [],
        jscode: "",
        imgurl: {
            top: o.globalData.test1Url + "/wxresource/index/img/index-top.jpg",
            esbplus: o.globalData.test1Url + "/wxresource/index/img/index-esbplus.jpg",
            ejb2018: o.globalData.wm1Url + "/wxresource/index/img/index-ejb2018.jpg",
            kaws2018: o.globalData.test1Url + "/wxresource/index/img/index-kaws2018.jpg",
            esk: o.globalData.test1Url + "/wxresource/index/img/index-esk.jpg",
            sepq: o.globalData.test1Url + "/wxresource/index/img/index_sepq.jpg",
            ikbzhyw: o.globalData.test1Url + "/wxresource/index/img/index-ikbzhyw.jpg",
            esb2020: o.globalData.test1Url + "/wxresource/index/img/index-esb2020.jpg",
            kaws2020: o.globalData.test1Url + "/wxresource/index/img/index-kaws.jpg",
            esbbzxb: o.globalData.wm1Url + "/wxresource/index/img/index-bzxb.jpg",
            more: o.globalData.test1Url + "/wxresource/index/img/index-more.jpg",
            lnylsgb: o.globalData.wm1Url + "/wxresource/index/img/index-lnylsgb.jpg",
            bwylmbb: o.globalData.wm1Url + "/wxresource/index/img/index-bwylmbb.jpg",
            show: !0
        }
    },
    toProduct: function(e) {
        var t = e.currentTarget.dataset.product;
        console.log(t), wx.navigateTo({
            url: "../".concat(t, "/index/index")
        });
    },
    jumpImgUrl: function(e) {
        var o = e.target.dataset, r = o.canclick, s = o.clickurltype, i = o.clickurl, l = o.productid;
        if ("0" != r) {
            console.log(t.productList);
            var c = !0, d = !1, u = void 0;
            try {
                for (var g, x = t.productList[Symbol.iterator](); !(c = (g = x.next()).done); c = !0) {
                    var p = g.value;
                    console.log(p), p.productId === l && n.onEvent(p.eventId, p.eventId);
                }
            } catch (e) {
                d = !0, u = e;
            } finally {
                try {
                    c || null == x.return || x.return();
                } finally {
                    if (d) throw u;
                }
            }
            a.jumpImgUrl(s, i);
        }
    },
    switch: function() {
        return new Promise(function(e, t) {
            wx.request({
                url: o.globalData.baseUrl + "/bannerImg/switch.do",
                data: {
                    channel: "0"
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(t) {
                    console.log(t), "0" === t.data.minProIndexSwitch && e(!0);
                },
                fail: function(e) {
                    console.log(e), t(e);
                }
            });
        });
    },
    scrollPictureChannels: function() {
        var e = this;
        this.switch().then(function(t) {
            t && wx.request({
                url: o.globalData.hlUrl + "/bannerImgScroll/scrollPictureChannels.mvc",
                data: {
                    channel: 0
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(t) {
                    console.log("res", t), "00" === t.data.status && e.setData({
                        pictures: t.data.pictures
                    });
                },
                fail: function(e) {
                    console.log(e), reject(e);
                }
            });
        });
    },
    bindGetUserInfo: function(e) {
        e = e.detail;
        var t = encodeURIComponent(e.encryptedData), a = e.iv;
        wx.request({
            url: o.globalData.baseUrl + "/miniapp/oauth2/getWxUserInfo?encryptedData=" + t + "&iv=" + a + "&jscode=" + this.data.jscode,
            method: "GET",
            success: function(e) {
                console.log(e.datta), 1102 == e.data.status ? wx.showToast({
                    title: "登录失败，请稍候再试",
                    icon: "loading",
                    duration: 1e3
                }) : "0000" == e.data.status && (console.log(e.data.data.accessToken), wx.setStorageSync("accessToken", e.data.data.accessToken), 
                wx.setStorageSync("unionId", e.data.data.unionId), wx.setStorageSync("openId", e.data.data.openId), 
                wx.hideToast(), wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 2e3
                }));
            }
        });
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: "平安健康保险，您身边的健康管家！",
            path: "pages/index/index" + (0, e.setShareUrl)()
        };
    },
    bindToMiniProgram: function() {
        wx.navigateToMiniProgram({
            appId: "wx18792702155c772e",
            envVersion: "trial",
            success: function(e) {}
        });
    },
    getAllHeadImg: function() {
        var e = this;
        wx.request({
            url: o.globalData.baseUrl + "/miniapp/getAllHeadImg.do",
            data: {
                channel: "WXXCX",
                type: "5"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                var o = t.data.sort(function(e, t) {
                    return e.sort - t.sort;
                });
                e.setData({
                    indexImgList: o
                });
            },
            error: function(e) {
                console.log(e);
            }
        });
    },
    onShow: function() {
        var e = this;
        wx.login({
            success: function(t) {
                t.code && e.setData({
                    jscode: t.code
                });
            }
        }), n.onShow();
    },
    onHide: function() {
        n.onHide();
    },
    onPullDownRefresh: function() {
        wx.startPullDownRefresh();
    },
    onTabItemTap: function(e) {
        console.log(e.index), console.log(e.pagePath), console.log(e.text);
    },
    onLoad: function() {
        this.scrollPictureChannels(), this.getAllHeadImg();
    }
});