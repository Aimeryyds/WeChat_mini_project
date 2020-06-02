var e = require("../../utils/share.js"), t = getApp();

Page({
    data: {
        pictures: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        jscode: "",
        imgurl: {
            top: t.globalData.test1Url + "/wxresource/index/img/index-top.jpg",
            esbplus: t.globalData.test1Url + "/wxresource/index/img/index-esbplus.jpg",
            ejb2018: t.globalData.wm1Url + "/wxresource/index/img/index-ejb2018.jpg",
            kaws2018: t.globalData.test1Url + "/wxresource/index/img/index-kaws2018.jpg",
            esk: t.globalData.test1Url + "/wxresource/index/img/index-esk.jpg",
            sepq: t.globalData.test1Url + "/wxresource/index/img/index_sepq.jpg",
            ikbzhyw: t.globalData.test1Url + "/wxresource/index/img/index-ikbzhyw.jpg",
            esb2020: t.globalData.test1Url + "/wxresource/index/img/index-esb2020.jpg",
            kaws2020: t.globalData.test1Url + "/wxresource/index/img/index-kaws.jpg",
            esbbzxb: t.globalData.wm1Url + "/wxresource/index/img/index-bzxb.jpg",
            more: t.globalData.test1Url + "/wxresource/index/img/index-more.jpg",
            lnylsgb: t.globalData.wm1Url + "/wxresource/index/img/index-lnylsgb.jpg",
            bwylmbb: t.globalData.wm1Url + "/wxresource/index/img/index-bwylmbb.jpg",
            show: !0
        }
    },
    toProduct: function(e) {
        var t = e.currentTarget.dataset.product;
        console.log(t), wx.navigateTo({
            url: "../".concat(t, "/index/index")
        });
    },
    switch: function() {
        return new Promise(function(e, a) {
            wx.request({
                url: t.globalData.baseUrl + "/bannerImg/switch.do",
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
                    console.log(e), a(e);
                }
            });
        });
    },
    scrollPictureChannels: function() {
        var e = this;
        this.switch().then(function(a) {
            a && wx.request({
                url: t.globalData.hlUrl + "/bannerImgScroll/scrollPictureChannels.mvc",
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
        var a = encodeURIComponent(e.encryptedData), o = e.iv;
        wx.request({
            url: t.globalData.baseUrl + "/miniapp/oauth2/getWxUserInfo?encryptedData=" + a + "&iv=" + o + "&jscode=" + this.data.jscode,
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
        wx.request({
            url: t.globalData.baseUrl + "/miniapp/getAllHeadImg.do",
            data: {
                channel: "WXXCX",
                type: "5"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(e) {
                var t = e.data.sort(function(e, t) {
                    return e.sort - t.sort;
                });
                console.log(t);
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
        });
    },
    onPullDownRefresh: function() {
        wx.startPullDownRefresh();
    },
    onLoad: function() {
        this.scrollPictureChannels(), this.getAllHeadImg();
    }
});