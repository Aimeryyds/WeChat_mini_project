var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        noData: !1,
        hasMore: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        isfocus: !0
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
                comment_id: e.data.option.cid,
                content_text: t.detail.value.content,
                class: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("提交评论："), console.log(a), 1 == a.data.code ? (e.showToastss({
                    title: a.data.msg,
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack(1);
                }, 1e3)) : e.showToastss({
                    title: a.data.msg,
                    duration: 2e3
                });
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
    onLoad: function(t) {
        var e = this;
        this.setData({
            option: t
        }), console.log(t), a.globalData.token ? e.setData({
            is_login: !0
        }) : e.setData({
            is_login: !1
        });
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
                    var i = t.data.data.wx_sesson, d = n.detail.encryptedData, l = n.detail.iv;
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
                            epd: d,
                            iv: l
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
                            }), a.globalData.userId = t.data.data.user_id, a.globalData.token = t.data.data.access_token, 
                            a.globalData.tokenRefresh = t.data.data.refresh_token, wx.setStorage({
                                key: "userAvatar",
                                data: t.data.data.avatar
                            }), wx.setStorage({
                                key: "userNickName",
                                data: t.data.data.user_name
                            }), a.globalData.userNickName = t.data.data.user_name, a.globalData.userAvatar = t.data.data.avatar, 
                            "dofav" == s ? e.doFAv("add", o) : "dozan" == s ? e.doZan("zan", o) : "dopl" == s && (a.globalData.token ? e.setData({
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
    }
});