var a = getApp(), t = require("../../utils/util.js"), e = require("../../utils/data.js");

Page({
    data: {
        lists: [ [], [], [], [], [], [], [] ],
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
        showAd: !1,
        text: "",
        pageList: [ 0, 0, 0, 0, 0, 0 ],
        pageNum: 10,
        hadLastPage: !1,
        arr: [ "推荐", "要闻", "滚动", "机会", "公司", "大盘", "其他" ],
        loading: !1,
        videoList: [],
        from: "",
        pageNums: 10,
        ten: !1,
        Blist: [],
        lastid: 0,
        animationData: {},
        scrollTop: 0,
        showSupplyModal: !1,
        adsInfo: {
            show: !1
        }
    },
    onLoad: function(n) {
        this.setData({
            videoList: e
        });
        var s = this;
        t.loadAd(function(a) {
            s.setData({
                showAd: a
            });
        }), a.aldstat.sendEvent("123"), 1 == this.data.currentTab ? (this.data.text = "要闻", 
        this.loadList(0, this.data.text)) : 2 == this.data.currentTab ? (this.data.text = "滚动", 
        this.loadList(0, this.data.text)) : 3 == this.data.currentTab ? (this.data.text = "机会", 
        this.loadList(0, this.data.text)) : 4 == this.data.currentTab ? (this.data.text = "公司", 
        this.loadList(0, this.data.text)) : 5 == this.data.currentTab ? (this.data.text = "大盘", 
        this.loadList(0, this.data.text)) : 6 == this.data.currentTab && (this.data.text = "其他", 
        this.loadList(0, this.data.text)), wx.getSystemInfo({
            success: function(a) {
                s.setData({
                    winWidth: a.windowWidth,
                    winHeight: a.windowHeight
                });
            }
        }), this.tuijianFn(), this.banner();
        var o = this;
        setTimeout(function() {
            o.checkAds(), o.checkSupplyed();
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
            success: function(t) {
                console.log(t.data), a.setData({
                    ban: t.data
                });
            },
            fail: function(a) {}
        });
    },
    videoBtn: function(a) {
        var t = a.currentTarget.dataset.item;
        wx.navigateTo({
            url: "../video/video?item=" + JSON.stringify(t)
        });
    },
    bindChange: function(a) {
        var t = this;
        if (t.setData({
            currentTab: a.detail.current,
            text: this.data.arr[a.detail.current]
        }), t.data.pageList[t.data.currentTab] > 0) return !0;
        this.loadList(t.data.currentTab, this.data.text);
    },
    swichNav: function(a) {
        console.log("exec swichNav");
        var t = this;
        if (this.data.currentTab === a.target.dataset.current) return !1;
        t.setData({
            currentTab: a.target.dataset.current,
            text: this.data.arr[a.target.dataset.current]
        });
    },
    images: function(a) {
        var t = a.currentTarget.dataset.url;
        wx.navigateTo({
            url: "../webview/webview?url=" + t
        });
    },
    moreBtn: function() {
        var a = this;
        console.log(123), wx.navigateToMiniProgram({
            appId: "wx81dacf7d77359d1d",
            path: "pages/index/index?from=" + a.data.from,
            envVersion: "release"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            from: t.getFrom() || t.getRefferAppId()
        });
        var a = this;
        t.loadAd(function(t) {
            a.setData({
                showAd: t
            });
        });
    },
    tuijianFn: function() {
        var a = this;
        wx.request({
            url: "https://api.tgw360.com/recommender/news",
            method: "POST",
            data: {
                hotNum: 6,
                backVersion: 0,
                platform: 0,
                appVersion: "5.3.0",
                openVP: !1,
                appType: 3,
                num: a.data.pageNums
            },
            header: {
                "content-type": "application/json",
                Accept: "application/vnd.51gsl.v6+json"
            },
            success: function(t) {
                t.data.data.recommend.length;
                a.setData({
                    recommend: t.data.data.recommend,
                    hot: t.data.data.hot,
                    top: t.data.data.top
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            },
            fail: function(a) {}
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var a = this;
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 500
        }), 0 == this.data.currentTab ? (this.setData({
            ten: !0,
            scrollTop: 0
        }), setInterval(function() {
            a.setData({
                ten: !1
            });
        }, 3e3)) : (wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.newsFn()), this.tuijianFn(), wx.showNavigationBarLoading();
    },
    newsFn: function() {
        var a = this;
        wx.request({
            url: "https://www.tgw360.com/tgwapi/myapp/Htgw/searchNews?recordCount=10&beginIndex=0&Column=" + a.data.text,
            method: "GET",
            header: {
                "content-type": "application/text"
            },
            success: function(t) {
                var e = t.data.data.info;
                for (var n in e) e[n].ym = e[n].publishtime.substr(5, 5), e[n].hs = e[n].publishtime.substr(11, 5);
                var s = a.data.lists;
                s[a.data.currentTab] = t.data.data.info, a.setData({
                    lists: s
                }), a.data.loading = !1, wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            },
            fail: function() {
                return a.data.loading = !1, wx.hideLoading(), !1;
            }
        });
    },
    onReachBottom: function() {
        this.loadList(this.data.currentTab, this.data.text), this.tuijFn();
    },
    tuijFn: function() {
        var a = this, t = this.data.lastid;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.request({
            url: "https://api.tgw360.com/recommender/history",
            method: "POST",
            data: {
                backVersion: 0,
                platform: 0,
                appVersion: "5.3.0",
                openVP: !1,
                appType: 3,
                num: a.data.pageNums,
                user: "0",
                newsId: t
            },
            header: {
                "content-type": "application/json",
                Accept: "application/vnd.51gsl.v6+json"
            },
            success: function(t) {
                for (var e = t.data.data.recommend.length - 1, n = a.data.Blist, s = 0; s < t.data.data.recommend.length; s++) n = n.concat(t.data.data.recommend[s]);
                a.setData({
                    Blist: n,
                    pageNum: a.data.pageNum + 10,
                    lastid: t.data.data.recommend[e].newsId
                }), wx.hideLoading();
            },
            fail: function(a) {}
        });
    },
    loadList: function(a, t) {
        if (!this.data.loading) {
            if (this.data.loading = !0, wx.showLoading({
                title: "加载中",
                mask: !0
            }), 0 == this.data.hadLastPage) {
                var e = this;
                return wx.request({
                    url: "https://www.tgw360.com/tgwapi/myapp/Htgw/searchNews?recordCount=10",
                    method: "GET",
                    data: {
                        beginIndex: e.data.pageList[a] * e.data.pageNum,
                        Column: t
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        var n = t.data.data.info;
                        for (var s in n) n[s].ym = n[s].publishtime.substr(5, 5), n[s].hs = n[s].publishtime.substr(11, 5);
                        var o = e.data.lists;
                        o[a] = o[a].concat(t.data.data.info);
                        var i = e.data.pageList;
                        i[a] = e.data.pageList[a] + 1, e.setData({
                            lists: o,
                            pageList: i
                        }), e.data.loading = !1, wx.hideLoading();
                    },
                    fail: function() {
                        return e.data.loading = !1, wx.hideLoading(), !1;
                    }
                }), !0;
            }
            wx.showToast({
                title: "到底了"
            });
        }
    },
    onShareAppMessage: function(a) {
        return {
            title: this.data.text,
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
    jump: function(a) {
        var t = a.currentTarget.dataset.url, e = a.currentTarget.dataset.txt, n = a.currentTarget.dataset.cur;
        if (t = JSON.stringify(t), wx.navigateTo({
            url: "../content/content?url=" + t + "&Column=" + e + "&cur=" + n
        }), !t) return !1;
    },
    jump2: function(a) {
        var t = a.currentTarget.dataset.newsid, e = a.currentTarget.dataset.cur;
        wx.navigateTo({
            url: "../content/content?newsid=" + t + "&cur=" + e
        });
    },
    closeSupplyModalClick: function() {
        this.setData({
            showSupplyModal: !1
        });
    },
    checkSupplyed: function() {
        var a = this, t = wx.getAccountInfoSync().miniProgram.appId;
        wx.request({
            url: "https://api.huaxun66.cn/common/sget/mp:app:" + t,
            method: "GET",
            header: {
                "content-type": "application/json",
                token: "e35755230782476ad195a23eae107751"
            },
            data: {},
            success: function(t) {
                if (null != t && null != t.data && "" != t.data && t.data.hasOwnProperty("supplyCache")) {
                    console.log("ok");
                    var e = t.data, n = wx.getStorageSync("supplyCache") || null, s = !1;
                    null != n && n != e.supplyCache && (s = !0);
                    var o = wx.getStorageSync("checkSupplyedTime") || null, i = !0;
                    if (null != o) {
                        r = new Date().getTime();
                        parseInt(o.toString()) + 6048e5 > r && (i = !1);
                    }
                    if (e.showSupply && (null == n || s) && i) {
                        var r = new Date().getTime();
                        wx.setStorageSync("checkSupplyedTime", r), wx.setStorageSync("supplyCache", e.supplyCache), 
                        a.setData({
                            showSupplyModal: !0
                        });
                    }
                }
            }
        });
    },
    checkAds: function() {
        var t = a.globalData.adsInfo;
        if (null != t) if (t.hasOwnProperty("adsId")) {
            if (!(wx.getStorageSync(t.adsId) || !1)) {
                t.show = !0, t.hasOwnProperty("adsBoxStyle") || (t.adsBoxStyle = ""), t.hasOwnProperty("adsInnerStyle") || (t.adsInnerStyle = ""), 
                t.hasOwnProperty("adsImageStyle") || (t.adsImageStyle = ""), t.hasOwnProperty("showAdsPath") || (t.showAdsPath = []), 
                t.hasOwnProperty("showClose") || (t.showClose = !0), t.hasOwnProperty("imageMode") || (t.imageMode = "widthFix");
                s = (n = (e = getCurrentPages())[e.length - 1]).route;
                t.showAdsPath.length > 0 && t.showAdsPath.indexOf(s) < 0 && (t.show = !1), this.setData({
                    adsInfo: t
                });
            }
        } else {
            t.show = !0, t.hasOwnProperty("adsBoxStyle") || (t.adsBoxStyle = ""), t.hasOwnProperty("adsInnerStyle") || (t.adsInnerStyle = ""), 
            t.hasOwnProperty("adsImageStyle") || (t.adsImageStyle = ""), t.hasOwnProperty("showAdsPath") || (t.showAdsPath = []), 
            t.hasOwnProperty("showClose") || (t.showClose = !0), t.hasOwnProperty("imageMode") || (t.imageMode = "widthFix");
            var e = getCurrentPages(), n = e[e.length - 1], s = n.route;
            t.showAdsPath.length > 0 && t.showAdsPath.indexOf(s) < 0 && (t.show = !1), this.setData({
                adsInfo: t
            });
        }
    },
    openAds: function(a) {
        if (a = a.currentTarget.dataset.ads, a.show = !1, this.setData({
            adsInfo: a
        }), a.hasOwnProperty("adsId") && wx.setStorageSync(a.adsId, !0), "link" == a.type && null != a.url && "" != a.url && wx.navigateTo({
            url: "../webview/index?options=" + JSON.stringify(a)
        }), "miniapp" == a.type && null != a.appId && "" != a.appId) {
            var t = "";
            null != a.appPath && (t = a.appPath);
            var e = {};
            null != a.appParam && "" !== a.appParam && (e = a.appParam), wx.navigateToMiniProgram({
                appId: a.appId,
                path: t,
                extraData: e,
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
    getPhoneNumber: function(t) {
        var e = this.data.adsInfo;
        e.show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0), "getPhoneNumber:ok" === t.detail.errMsg && wx.login({
            success: function(e) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/savePhoneNumber",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: a.globalData.appid,
                        openid: a.globalData.userInfo.openid,
                        unionid: a.globalData.userInfo.unionid,
                        bannerid: "",
                        encryptedData: t.detail.encryptedData,
                        iv: t.detail.iv,
                        code: e.code
                    },
                    success: function(t) {
                        console.log(t), 0 === t.data.errCode && (a.globalData.userInfo.mobile = t.data.data.mobile, 
                        wx.setStorage({
                            key: "userInfo",
                            data: a.globalData.userInfo,
                            success: function(a) {
                                console.log("========userInfo local save success========");
                            }
                        }));
                    }
                });
            }
        });
    },
    getUserInfo: function(t) {
        console.log(t);
        var e = this.data.adsInfo;
        e.show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0), "getUserInfo:ok" === t.detail.errMsg && (a.globalData.userInfo.nickname = t.detail.userInfo.nickName, 
        a.globalData.userInfo.sex = t.detail.userInfo.gender, a.globalData.userInfo.headimgurl = t.detail.userInfo.avatarUrl, 
        a.globalData.userInfo.country = t.detail.userInfo.country, a.globalData.userInfo.province = t.detail.userInfo.province, 
        a.globalData.userInfo.city = t.detail.userInfo.city, wx.setStorage({
            key: "userInfo",
            data: a.globalData.userInfo,
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
                        appid: a.globalData.appid,
                        code: e.code
                    },
                    success: function(e) {
                        if (0 == e.data.errCode) {
                            a.globalData.userInfo.openid = e.data.data.openid, a.globalData.userInfo.unionid = e.data.data.unionid;
                            var n = {
                                appid: a.globalData.appid,
                                openid: a.globalData.userInfo.openid,
                                unionid: a.globalData.userInfo.unionid,
                                nickname: a.globalData.userInfo.nickname,
                                headimgurl: a.globalData.userInfo.headimgurl,
                                sex: a.globalData.userInfo.sex,
                                country: a.globalData.userInfo.country,
                                city: a.globalData.userInfo.city,
                                province: a.globalData.userInfo.province,
                                userid: e.data.data.userid,
                                appname: a.globalData.appname,
                                apptype: "小程序",
                                session_key: e.data.data.session_key,
                                encryptedData: t.detail.encryptedData,
                                iv: t.detail.iv
                            };
                            wx.request({
                                url: "https://api.huaxun66.cn/mp/user/addUser",
                                method: "POST",
                                header: {
                                    "content-type": "application/json",
                                    token: "e35755230782476ad195a23eae107751"
                                },
                                data: n,
                                success: function(t) {
                                    0 == t.data.errCode && (null != t.data.data.unionid && (a.globalData.userInfo.unionid = t.data.data.unionid), 
                                    wx.setStorage({
                                        key: "userInfo",
                                        data: a.globalData.userInfo,
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