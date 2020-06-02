var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        offset_rowid: "",
        favData: {},
        noData: !1,
        hasMore: !0,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        noDataTips_caipu: "您还没有收藏过菜谱哦~",
        noDataTips_wenzhang: "您还没有收藏过文章哦~",
        noDataTips_foodshow: "您还没有收藏过食秀哦~",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        noUserInfo: !1,
        tab: 1,
        hasNextPage_foodshow: !0
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
    onLoad: function(t) {
        var e = this;
        this.setData({
            option: t
        }), wx.setNavigationBarTitle({
            title: "我的收藏"
        }), "" != a.globalData.userId && void 0 != a.globalData.userId ? (wx.request({
            url: a.globalData.newlocalhost + "/fav/fav_recipe_list_new",
            data: {
                uid: a.globalData.userId,
                token: a.globalData.token,
                source: "微信小程序",
                format: "json",
                offset_rowid: "",
                per_page: "20"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    requeseFail: !1
                }), console.log(a), setTimeout(function() {
                    a.data.data.has_more || e.setData({
                        hasNextPage: !1
                    });
                }, 300);
                var t = a.data.data.items.length - 1;
                a.data.data.items && a.data.data.items.length > 0 ? (e.setData({
                    favData: a.data.data.items,
                    offset_rowid: a.data.data.items[t].rowid,
                    noData: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300)) : e.setData({
                    noData: !0
                }), e.setData({
                    noUserInfo: !1,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.newlocalhost + "/fav/foodbask_fav_list",
            data: {
                source: "微信小程序",
                format: "json",
                offset_rowid: "",
                per_page: "20",
                token: a.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    requeseFail: !1
                }), console.log(a), setTimeout(function() {
                    a.data.data.has_more || e.setData({
                        hasNextPage_foodshow: !1
                    });
                }, 300), a.data.data.items && a.data.data.items.length > 0 ? (e.setData({
                    favData_foodshow: a.data.data.items,
                    offset_rowid_foodshow: a.data.data.items.length - 1,
                    noData_foodshow: !1
                }), setTimeout(function() {
                    e.setData({
                        requeseDone: !0
                    });
                }, 300)) : e.setData({
                    noData_foodshow: !0
                }), e.setData({
                    noUserInfo: !1,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        })) : e.setData({
            noUserInfo: !0,
            requeseDone: !0
        });
    },
    taptab: function(a) {
        var t = a.currentTarget.dataset.type;
        this.setData({
            tab: t
        });
    },
    getInfo: function(t) {
        var e = this, o = t;
        "getUserInfo:fail auth deny" == t.detail.errMsg || wx.request({
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
            success: function(t) {
                var s = t.data.data.wx_sesson, n = o.detail.encryptedData, i = o.detail.iv;
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
                    success: function(t) {
                        console.log("login:"), console.log(t), wx.setStorage({
                            key: "userId",
                            data: t.data.data.user_id
                        }), wx.setStorage({
                            key: "token",
                            data: t.data.data.access_token
                        }), wx.setStorage({
                            key: "token_refresh",
                            data: t.data.data.refresh_token
                        }), wx.setStorage({
                            key: "userAvatar",
                            data: t.data.data.avatar
                        }), wx.setStorage({
                            key: "userNickName",
                            data: t.data.data.user_name
                        }), a.globalData.userNickName = t.data.data.user_name, a.globalData.userAvatar = t.data.data.avatar, 
                        a.globalData.userId = t.data.data.user_id, a.globalData.token = t.data.data.access_token, 
                        a.globalData.tokenRefresh = t.data.data.refresh_token, e.setData({
                            noUserInfo: !1
                        }), e.pageReload();
                    },
                    fail: function() {}
                });
            },
            fail: function() {}
        });
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        1 == t.data.tab || 2 == t.data.tab ? (t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/fav/fav_recipe_list_new",
            data: {
                uid: a.globalData.userId,
                token: a.globalData.token,
                source: "微信小程序",
                format: "json",
                offset_rowid: t.data.offset_rowid,
                per_page: "20"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.data.has_more || t.setData({
                    hasNextPage: !1
                }), a.data.data.items.length > 0) {
                    t.setData({
                        favData: t.data.favData.concat(a.data.data.items)
                    });
                    var e = t.data.favData.length - 1;
                    t.setData({
                        offset_rowid: t.data.favData[e].rowid
                    }), t.setData({
                        requeseDone: !0
                    });
                }
            }
        })) : 3 == t.data.tab && t.data.hasNextPage_foodshow && (t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/fav/foodbask_fav_list",
            data: {
                source: "微信小程序",
                format: "json",
                offset_rowid: t.data.offset_rowid_foodshow,
                per_page: "20",
                token: a.globalData.token
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.data.has_more || t.setData({
                    hasNextPage_foodshow: !1
                }), a.data.data.items.length > 0) {
                    t.setData({
                        favData_foodshow: t.data.favData_foodshow.concat(a.data.data.items)
                    });
                    var e = t.data.favData_foodshow.length - 1;
                    t.setData({
                        offset_rowid_foodshow: t.data.favData_foodshow[e].rowid
                    });
                }
                t.setData({
                    requeseDone: !0
                });
            }
        }));
    }
});