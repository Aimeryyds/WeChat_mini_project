var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        offset_rowid: "",
        noData: !1,
        hasMore: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        noDataTips: "还没有人评论哦~",
        requeseDone: !1,
        hasNextPage: !0,
        noUserInfo: !1,
        currentPage: 1,
        emptystring: ""
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
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    sendPl: function(t) {
        var e = this;
        console.log(t.detail), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/comment_add",
            data: {
                source: "微信小程序",
                format: "json",
                token: a.globalData.token,
                uid: a.globalData.userId,
                article_id: e.data.option.id,
                content_text: t.detail.value,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                if (console.log("提交评论："), console.log(o), 1 == o.data.code) {
                    e.showToastss({
                        title: "评论" + o.data.msg,
                        duration: 2e3
                    });
                    var s = [ {
                        comment_id: "",
                        content: t.detail.value,
                        create_time: "刚刚",
                        user_info: {
                            avatar_url: a.globalData.userAvatar,
                            id: a.globalData.userId,
                            if_v: "",
                            nickname: a.globalData.userNickName
                        }
                    } ];
                    e.setData({
                        pllistDataList: s.concat(e.data.pllistDataList)
                    });
                } else e.showToastss({
                    title: o.data.msg,
                    duration: 2e3
                });
                e.setData({
                    emptystring: ""
                }), e.onLoad(e.data.option);
            },
            fail: function(a) {}
        });
    },
    showToastss: function(a) {
        var t = this, e = a.duration, o = a.title;
        t.setData({
            showToast: !0,
            toastTitle: o
        }), setTimeout(function() {
            t.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    tapFavBtn: function(t) {
        var e = this, o = t.currentTarget.dataset.index, s = t.currentTarget.dataset.type;
        if (console.log("index:"), console.log(o), 1 == e.data.requesting) ; else if (e.setData({
            requesting: 1
        }), "" != a.globalData.userId && void 0 != a.globalData.userId) "dofav" == s ? e.doFAv("", o) : "dozan" == s && e.doZan("", o); else {
            var n = t;
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
                    var i = t.data.data.wx_sesson, l = n.detail.encryptedData, d = n.detail.iv;
                    wx.setStorage({
                        key: "wx_sesson",
                        data: i
                    }), wx.request({
                        url: a.globalData.newlocalhost + "/user/weixin_login/",
                        data: {
                            source: "微信小程序",
                            format: "json",
                            site: "weixin",
                            wx_sesson: i,
                            epd: l,
                            iv: d
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
                            a.globalData.tokenRefresh = t.data.data.refresh_token, "dofav" == s ? e.doFAv("add", o) : "dozan" == s ? e.doZan("zan", o) : "dopl" == s && (a.globalData.token ? e.setData({
                                is_login: !0
                            }) : e.setData({
                                is_login: !1
                            }), e.setData({
                                isfocus: !0
                            }));
                        },
                        fail: function() {
                            e.setData({
                                requesting: 0
                            });
                        }
                    });
                },
                fail: function() {
                    e.setData({
                        requesting: 0
                    });
                }
            });
        }
    },
    onShow: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(t) {
        var e = this;
        this.setData({
            option: t
        }), console.log("option"), console.log(t), a.globalData.token ? e.setData({
            is_login: !0
        }) : e.setData({
            is_login: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/comment",
            data: {
                uid: a.globalData.userId,
                token: a.globalData.token,
                source: "微信小程序",
                format: "json",
                page: e.data.currentPage,
                article_id: t.id,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), a.data.data.items && a.data.data.items.length > 0 ? e.setData({
                    pllistData: a.data.data,
                    pllistDataList: a.data.data.items,
                    noData: !1,
                    requeseDone: !0
                }) : e.setData({
                    noData: !0,
                    requeseDone: !0
                }), a.data.data.current_page == a.data.data.total_page && e.setData({
                    hasNextPage: !1
                });
            }
        });
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Knowledge/comment",
            data: {
                uid: a.globalData.userId,
                token: a.globalData.token,
                source: "微信小程序",
                format: "json",
                page: t.data.currentPage + 1,
                article_id: t.data.option.id,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                a.data.data.items && a.data.data.items.length > 0 ? (t.setData({
                    pllistDataList: t.data.pllistDataList.concat(a.data.data.items)
                }), t.setData({
                    currentPage: a.data.data.current_page,
                    pllistData: a.data.data,
                    requeseDone: !0
                })) : t.setData({
                    hasNextPage: !1,
                    requeseDone: !0
                }), a.data.data.current_page == a.data.data.total_page && t.setData({
                    hasNextPage: !1
                });
            }
        });
    }
});