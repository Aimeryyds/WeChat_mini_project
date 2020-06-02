var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        offset_rowid: "",
        favData: {},
        noData: !1,
        hasMore: !0,
        delicon: "../../images/delicon66.png",
        noDataTips_post: "您还没发布过食秀哦~",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        noUserInfo: !1,
        tab: 1
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
    delmypost: function(t) {
        var e = t.currentTarget.dataset.id, o = (parseInt(t.currentTarget.dataset.index), 
        this);
        wx.showModal({
            title: "提示",
            content: "您确定要删除这条食秀吗？",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), o.setData({
                    requeseDone: !1
                }), wx.request({
                    url: a.globalData.localhost + "/v9/do_news_my_applet.php",
                    data: {
                        user_id: a.globalData.userId,
                        token: a.globalData.token,
                        source: "微信小程序",
                        format: "json",
                        act: "del",
                        cmid: e
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        1 == a.data.code ? (console.log(a), o.pageReload()) : console.log("刪除失敗"), o.setData({
                            requeseFail: !1
                        }), o.setData({
                            requeseDone: !0
                        });
                    },
                    fail: function(a) {
                        o.setData({
                            requeseFail: !0
                        });
                    }
                })) : t.cancel && console.log("用户点击取消");
            }
        });
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
        }), "" != a.globalData.userId && void 0 != a.globalData.userId ? wx.request({
            url: a.globalData.newlocalhost + "/Personal/MyCook/",
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
                }), console.log(a), a.data.data.items && a.data.data.items.length > 0 ? e.setData({
                    mypostdata: a.data.data.items,
                    current_page: a.data.data.current_page,
                    noData: !1,
                    requeseDone: !0
                }) : e.setData({
                    mypostdata: [],
                    noData: !0,
                    requeseDone: !0
                });
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        }) : e.setData({
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
                var s = t.data.data.wx_sesson, n = o.detail.encryptedData, r = o.detail.iv;
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
                        iv: r
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        wx.setStorage({
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
        t.setData({
            requeseDone: !1
        }), 1 == t.data.tab && wx.request({
            url: a.globalData.newlocalhost + "/Personal/MyCook/",
            data: {
                uid: a.globalData.userId,
                token: a.globalData.token,
                page: t.data.current_page + 1,
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                a.data.data.has_more || t.setData({
                    hasNextPage: !1
                }), a.data.data.items.length > 0 && (t.setData({
                    mypostdata: t.data.mypostdata.concat(a.data.data.items)
                }), t.setData({
                    requeseDone: !0
                }));
            }
        });
    }
});