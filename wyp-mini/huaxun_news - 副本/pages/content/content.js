var a = require("../../wxParse/wxParse.js"), e = require("../../utils/util.js"), t = getApp();

Page({
    data: {
        list: [],
        showAd: !1,
        nodes: [],
        adsInfo: {
            show: !1
        }
    },
    onLoad: function(t) {
        var n = this, o = t.cur;
        if (this.setData({
            cur: o
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        }), 0 != o) {
            var s = JSON.parse(t.url), i = t.Column;
            wx.request({
                url: "https://api.51gsl.com/tgw/getInfoByUrl?url=" + s,
                data: {},
                header: {
                    "content-type": "application/json",
                    Accept: "application/vnd.51gsl.v1.1+json"
                },
                success: function(e) {
                    console.log(e), n.setData({
                        list: [ e.data.data ],
                        nodes: e.data.data.content
                    }), a.wxParse("article", "html", n.data.nodes, n, 5), wx.setNavigationBarTitle({
                        title: i
                    }), wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        } else this.setData({
            newsid: t.newsid
        }), this.contentFn(), wx.hideLoading();
        e.loadAd(function(a) {
            n.setData({
                showAd: a
            });
        }), this.banner();
        var r = this;
        setTimeout(function() {
            r.checkAds();
        }, 5e3);
    },
    banner: function() {
        var a = this;
        wx.request({
            url: "https://oauth.cf8.cn/MiniPro/m/web/?r=wechat/spread/config",
            method: "POST",
            data: {
                appid: "wx379225f6e8e77376"
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                a.setData({
                    ban: e.data
                });
            },
            fail: function(a) {}
        });
    },
    contentFn: function() {
        var e = this, t = {
            url: "www.tgw360.com/tgwapi/myapp/News/getNewsDetail",
            types: "POST",
            userid: 0,
            newsid: this.data.newsid
        };
        wx.request({
            url: "https://api.51gsl.com/tgwapi",
            data: t,
            header: {
                "content-type": "application/json",
                Accept: "application/vnd.51gsl.v6+json"
            },
            method: "POST",
            success: function(t) {
                0 == t.data.data.info.length && e.setData({
                    delet: "该文章已删除"
                });
                var n = t.data.data.info[0].News_Content;
                n = n.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(a, e) {
                    return "http" == e.substring(0, 4) ? "" : a.replace(e, "https://www.tgw360.com" + e);
                }), e.setData({
                    mainList: t.data.data.info,
                    nodes: n,
                    ifpraise: t.data.data.info[0].ifpraise
                }), a.wxParse("article", "html", e.data.nodes, e, 5);
            },
            fail: function(a) {}
        });
    },
    images: function(a) {
        var e = a.currentTarget.dataset.url;
        wx.navigateTo({
            url: "../webview/webview?url=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "pages/index/index",
            success: function(a) {
                wx.showShareMenu({
                    withShareTicket: !0
                });
            },
            fail: function(a) {
                console.log(a);
            }
        };
    },
    checkAds: function() {
        var a = t.globalData.adsInfo;
        if (null != a) if (a.hasOwnProperty("adsId")) {
            if (!(wx.getStorageSync(a.adsId) || !1)) {
                a.show = !0, a.hasOwnProperty("adsBoxStyle") || (a.adsBoxStyle = ""), a.hasOwnProperty("adsInnerStyle") || (a.adsInnerStyle = ""), 
                a.hasOwnProperty("adsImageStyle") || (a.adsImageStyle = ""), a.hasOwnProperty("showAdsPath") || (a.showAdsPath = []), 
                a.hasOwnProperty("showClose") || (a.showClose = !0), a.hasOwnProperty("imageMode") || (a.imageMode = "widthFix");
                o = (n = (e = getCurrentPages())[e.length - 1]).route;
                a.showAdsPath.length > 0 && a.showAdsPath.indexOf(o) < 0 && (a.show = !1), this.setData({
                    adsInfo: a
                });
            }
        } else {
            a.show = !0, a.hasOwnProperty("adsBoxStyle") || (a.adsBoxStyle = ""), a.hasOwnProperty("adsInnerStyle") || (a.adsInnerStyle = ""), 
            a.hasOwnProperty("adsImageStyle") || (a.adsImageStyle = ""), a.hasOwnProperty("showAdsPath") || (a.showAdsPath = []), 
            a.hasOwnProperty("showClose") || (a.showClose = !0), a.hasOwnProperty("imageMode") || (a.imageMode = "widthFix");
            var e = getCurrentPages(), n = e[e.length - 1], o = n.route;
            a.showAdsPath.length > 0 && a.showAdsPath.indexOf(o) < 0 && (a.show = !1), this.setData({
                adsInfo: a
            });
        }
    },
    openAds: function(a) {
        if (a = a.currentTarget.dataset.ads, a.show = !1, this.setData({
            adsInfo: a
        }), a.hasOwnProperty("adsId") && wx.setStorageSync(a.adsId, !0), "link" == a.type && null != a.url && "" != a.url && wx.navigateTo({
            url: "../webview/index?options=" + JSON.stringify(a)
        }), "miniapp" == a.type && null != a.appId && "" != a.appId) {
            var e = "";
            null != a.appPath && (e = a.appPath);
            var t = {};
            null != a.appParam && "" !== a.appParam && (t = a.appParam), wx.navigateToMiniProgram({
                appId: a.appId,
                path: e,
                extraData: t,
                envVersion: "release",
                success: function(a) {
                    console.log("open mini success");
                },
                fail: function() {
                    console.log("open mini error");
                }
            });
        }
    },
    closeAdsClick: function(a) {
        (a = a.currentTarget.dataset.ads).show = !1, this.setData({
            adsInfo: a
        }), a.hasOwnProperty("adsId") && wx.setStorageSync(a.adsId, !0);
    },
    getPhoneNumber: function(a) {
        var e = this.data.adsInfo;
        e.show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0), "getPhoneNumber:ok" === a.detail.errMsg && wx.login({
            success: function(e) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/savePhoneNumber",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: t.globalData.appid,
                        openid: t.globalData.userInfo.openid,
                        unionid: t.globalData.userInfo.unionid,
                        bannerid: "",
                        encryptedData: a.detail.encryptedData,
                        iv: a.detail.iv,
                        code: e.code
                    },
                    success: function(a) {
                        console.log(a), 0 === a.data.errCode && (t.globalData.userInfo.mobile = a.data.data.mobile, 
                        wx.setStorage({
                            key: "userInfo",
                            data: t.globalData.userInfo,
                            success: function(a) {
                                console.log("========userInfo local save success========");
                            }
                        }));
                    }
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a);
        var e = this.data.adsInfo;
        e.show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0), "getUserInfo:ok" === a.detail.errMsg && (t.globalData.userInfo.nickname = a.detail.userInfo.nickName, 
        t.globalData.userInfo.sex = a.detail.userInfo.gender, t.globalData.userInfo.headimgurl = a.detail.userInfo.avatarUrl, 
        t.globalData.userInfo.country = a.detail.userInfo.country, t.globalData.userInfo.province = a.detail.userInfo.province, 
        t.globalData.userInfo.city = a.detail.userInfo.city, wx.setStorage({
            key: "userInfo",
            data: t.globalData.userInfo,
            success: function(a) {
                console.log("========userInfo local save success========");
            }
        }), wx.login({
            success: function(e) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/getLoginInfo",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: t.globalData.appid,
                        code: e.code
                    },
                    success: function(e) {
                        if (0 == e.data.errCode) {
                            t.globalData.userInfo.openid = e.data.data.openid, t.globalData.userInfo.unionid = e.data.data.unionid;
                            var n = {
                                appid: t.globalData.appid,
                                openid: t.globalData.userInfo.openid,
                                unionid: t.globalData.userInfo.unionid,
                                nickname: t.globalData.userInfo.nickname,
                                headimgurl: t.globalData.userInfo.headimgurl,
                                sex: t.globalData.userInfo.sex,
                                country: t.globalData.userInfo.country,
                                city: t.globalData.userInfo.city,
                                province: t.globalData.userInfo.province,
                                userid: e.data.data.userid,
                                appname: t.globalData.appname,
                                apptype: "小程序",
                                session_key: e.data.data.session_key,
                                encryptedData: a.detail.encryptedData,
                                iv: a.detail.iv
                            };
                            wx.request({
                                url: "https://api.huaxun66.cn/mp/user/addUser",
                                method: "POST",
                                header: {
                                    "content-type": "application/json",
                                    token: "e35755230782476ad195a23eae107751"
                                },
                                data: n,
                                success: function(a) {
                                    0 == a.data.errCode && (null != a.data.data.unionid && (t.globalData.userInfo.unionid = a.data.data.unionid), 
                                    wx.setStorage({
                                        key: "userInfo",
                                        data: t.globalData.userInfo,
                                        success: function(a) {
                                            console.log("========userInfo local save success========");
                                        }
                                    }));
                                }
                            });
                        }
                    }
                });
            }
        }));
    }
});