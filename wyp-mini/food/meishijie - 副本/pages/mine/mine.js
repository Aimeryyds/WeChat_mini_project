var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        bgStyle: "background:#fff url(https://st-cn.meishij.net/p2/20200210/20200210153944_191.png) center top no-repeat;background-size:100% auto;",
        offset_rowid: "",
        favData: {},
        noData: !1,
        hasMore: !0,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        noDataTips: "您还没有收藏过菜谱哦~",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        noUserInfo: !1,
        wd_scicon_img: "../../images/wd_scicon.png",
        wd_fbicon_img: "../../images/wd_fbicon.png",
        wdtitle: "",
        pageNum: 1
    },
    onPageScroll: function(a) {
        a.scrollTop < 44 ? this.setData({
            wdtitle: ""
        }) : a.scrollTop < 300 && a.scrollTop >= 44 ? this.setData({
            wdtitle: "我的"
        }) : this.setData({
            wdtitle: "我的足迹"
        });
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "/images/xccshare.jpg",
            success: function(a) {},
            fail: function(a) {}
        };
    },
    onShow: function() {
        this.setData({
            requeseDone: !1,
            hasNextPage: !0
        }), this.onLoad(this.data.option);
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            option: e
        }), wx.setNavigationBarTitle({
            title: "我的收藏"
        }), "" != a.globalData.userId && void 0 != a.globalData.userId ? (console.log(a.globalData.token), 
        wx.request({
            url: a.globalData.newlocalhost + "/Personal/myHome",
            data: {
                source: "微信小程序",
                format: "json",
                token: a.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                t.setData({
                    requeseFail: !1
                }), console.log(a), t.setData({
                    userData: a.data.data
                }), setTimeout(function() {
                    t.setData({
                        requeseDone: !0
                    });
                }, 300), t.setData({
                    noUserInfo: !1,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                t.setData({
                    requeseFail: !0
                });
            }
        }), a.globalData.token, wx.request({
            url: a.globalData.newlocalhost + "/Recent/recent_list/",
            data: {
                source: "微信小程序",
                format: "json",
                token: a.globalData.token,
                page: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                t.setData({
                    requeseFail: !1
                }), console.log(a), t.setData({
                    zujiData: a.data.data.items
                }), setTimeout(function() {
                    t.setData({
                        requeseDone: !0
                    });
                }, 300), t.setData({
                    noUserInfo: !1,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                t.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.localhost + "/v7/fav_recipe_list.php",
            data: {
                uid: a.globalData.userId,
                for_create_fav: "1",
                source: "微信小程序",
                format: "json",
                offset_rowid: "",
                per_page: "20"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                t.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.data.data.has_more || t.setData({
                        hasNextPage: !1
                    });
                }, 300), a.data.data.items && a.data.data.items.length > 0 ? (t.setData({
                    favData: a.data.data.items,
                    offset_rowid: 19,
                    noData: !1
                }), setTimeout(function() {
                    t.setData({
                        requeseDone: !0
                    });
                }, 300)) : t.setData({
                    noData: !0
                }), t.setData({
                    noUserInfo: !1,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                t.setData({
                    requeseFail: !0
                });
            }
        })) : t.setData({
            noUserInfo: !0,
            requeseDone: !0
        });
    },
    onReachBottom: function() {
        this.data.hasNextPage && a.globalData.token && this.loadMore();
    },
    loadMore: function() {
        var e = this;
        e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Recent/recent_list/",
            data: {
                format: "json",
                page: e.data.pageNum + 1,
                token: a.globalData.token,
                source: "微信小程序"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a), a.data.data.items.length > 0) {
                    e.setData({
                        zujiData: e.data.zujiData.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum + 1;
                    e.setData({
                        pageNum: t
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    hasNextPage: !1
                }), e.setData({
                    bottomline: !0
                }), e.setData({
                    requeseDone: !0
                });
            }
        });
    },
    getInfo: function(e) {
        var t = this, o = e;
        "getUserInfo:fail auth deny" == e.detail.errMsg || wx.request({
            url: a.globalData.localhost + "/v9/winxin_auth.php",
            data: {
                source: "微信小程序",
                format: "json",
                site: "weixin",
                code: a.globalData.userCode
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                var s = e.data.data.wx_sesson, n = o.detail.encryptedData, i = o.detail.iv;
                wx.setStorage({
                    key: "wx_sesson",
                    data: s
                }), wx.request({
                    url: a.globalData.newlocalhost + "/user/weixin_login/",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        wx_sesson: s,
                        epd: n,
                        iv: i
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        console.log("login:"), console.log(e), wx.setStorage({
                            key: "userId",
                            data: e.data.data.user_id
                        }), wx.setStorage({
                            key: "token",
                            data: e.data.data.access_token
                        }), wx.setStorage({
                            key: "token_refresh",
                            data: e.data.data.refresh_token
                        }), wx.setStorage({
                            key: "userAvatar",
                            data: e.data.data.avatar
                        }), wx.setStorage({
                            key: "userNickName",
                            data: e.data.data.user_name
                        }), a.globalData.userNickName = e.data.data.user_name, console.log(a.globalData.userNickName), 
                        a.globalData.userAvatar = e.data.data.avatar, a.globalData.userId = e.data.data.user_id, 
                        a.globalData.token = e.data.data.access_token, a.globalData.tokenRefresh = e.data.data.refresh_token, 
                        t.setData({
                            noUserInfo: !1
                        }), t.pageReload();
                    },
                    fail: function() {}
                });
            },
            fail: function() {}
        });
    }
});