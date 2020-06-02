function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp();

Page({
    data: (a = {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        bgStyle: "background:#fff url(https://st-cn.meishij.net/p2/20200210/20200210153944_163.png) center top no-repeat;background-size:100% auto;",
        userId: e.globalData.userId,
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        favbtnicon: "../../images/favbtnicon_red.png",
        showtopbar: !1,
        showToast: !1,
        toastTitle: "",
        current_page: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scSvwShow: "",
        searchInputing: !1,
        siStatClass: "",
        nowords: ""
    }, t(a, "showtopbar", !1), t(a, "noUserInfo", !0), t(a, "wfdata_left", []), t(a, "wfdata_right", []), 
    t(a, "wfheight_left", 1e5), t(a, "wfheight_right", 1e5), t(a, "currenttab", 0), 
    t(a, "tab_scleft", 0), a),
    isEmptyObject: function(t) {
        var a;
        for (a in t) return !1;
        return !0;
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pxToRpx: function(t) {
        return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(t) {
        return (t = parseInt(t)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
    },
    onPullDownRefresh: function() {
        this.data.option.currenttab = this.data.currenttab, console.log(this.data.option.currenttab), 
        this.onLoad(this.data.option);
    },
    onShow: function() {},
    showToastss: function(t) {
        var a = this, e = t.duration, o = t.title;
        a.setData({
            showToast: !0,
            toastTitle: o
        }), setTimeout(function() {
            a.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    getInfo: function(t) {
        var a = this, o = t;
        "getUserInfo:fail auth deny" == t.detail.errMsg || wx.request({
            url: e.globalData.localhost + "/v9/winxin_auth.php",
            data: {
                source: "微信小程序",
                format: "json",
                site: "weixin",
                code: e.globalData.userCode
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
                    url: e.globalData.newlocalhost + "/user/weixin_login/",
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
                        }), e.globalData.userNickName = t.data.data.user_name, e.globalData.userAvatar = t.data.data.avatar, 
                        e.globalData.userId = t.data.data.user_id, e.globalData.token = t.data.data.access_token, 
                        e.globalData.tokenRefresh = t.data.data.refresh_token, a.setData({
                            noUserInfo: !1
                        }), wx.navigateTo({
                            url: "/pages/showzp/showzp"
                        });
                    },
                    fail: function() {}
                });
            },
            fail: function() {}
        });
    },
    doWfdata: function(t) {
        var a = this;
        for (var e in t.data.data.items) {
            if (1 == t.data.data.items[e].type || 7 == t.data.data.items[e].type || 8 == t.data.data.items[e].type || 9 == t.data.data.items[e].type) {
                var o = 0;
                o += parseFloat(t.data.data.items[e].wh_ratio), 1 == t.data.data.items[e].type && ((o += parseFloat(.07388 * Math.floor(t.data.data.items[e].recipe.title.length / 8))) >= .295522 && (o = .295522), 
                t.data.data.items[e].recipe.label && (o += .067164189)), 7 == t.data.data.items[e].type && ((o += parseFloat(.07388 * Math.floor(t.data.data.items[e].video_recipe.title.length / 8))) >= .295522 && (o = .295522), 
                t.data.data.items[e].video_recipe.label && (o += .067164189)), 8 == t.data.data.items[e].type && ((o += parseFloat(.07388 * Math.floor(t.data.data.items[e].video_article.title.length / 8))) >= .295522 && (o = .295522), 
                t.data.data.items[e].video_article.label && (o += .067164189)), 9 == t.data.data.items[e].type && ((o += parseFloat(.07388 * Math.floor(t.data.data.items[e].works.content.length / 8))) >= .295522 && (o = .295522), 
                t.data.data.items[e].works.topic_info && (o += .067164189));
            }
            a.data.wfheight_left >= a.data.wfheight_right ? (a.setData({
                wfdata_left: a.data.wfdata_left.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type && 9 != t.data.data.items[e].type || a.setData({
                wfheight_left: a.data.wfheight_left - o - .207272727
            })) : (a.setData({
                wfdata_right: a.data.wfdata_right.concat(t.data.data.items[e])
            }), 1 != t.data.data.items[e].type && 7 != t.data.data.items[e].type && 8 != t.data.data.items[e].type && 9 != t.data.data.items[e].type || a.setData({
                wfheight_right: a.data.wfheight_right - o - .207272727
            }));
        }
    },
    onReachBottom: function() {
        var t = this;
        t.data.current_page < t.data.total_page && this.loadMore();
    },
    onScvReachBottom: function() {
        var t = this;
        t.data.current_page < t.data.total_page && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        console.log("current_page:" + t.data.current_page), console.log("total_page:" + t.data.total_page), 
        t.data.current_page < t.data.total_page && (t.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.newlocalhost + "/Foodshow/foodshow_index",
            data: {
                format: "json",
                page: parseInt(t.data.current_page) + 1,
                id: t.data.currentTopicid,
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), a.data.data && a.data.data.items && a.data.data.items.length > 0 ? (t.setData({
                    requeseDone: !0,
                    current_page: parseInt(t.data.current_page) + 1
                }), t.doWfdata(a)) : (t.setData({
                    bottomline: !0
                }), t.setData({
                    requeseDone: !0
                })), wx.stopPullDownRefresh();
            }
        }));
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    switchtopic: function(t) {
        console.log(t);
        var a = this.rpxTopx(168 * t.currentTarget.dataset.index + 101 + 20 - 375);
        this.setData({
            tab_scleft: a,
            currenttab: t.currentTarget.dataset.index,
            currentTopicid: t.currentTarget.dataset.id,
            bottomline: !1
        }), this.data.option.currenttab = t.currentTarget.dataset.index, this.loadWf();
    },
    switchtopic1: function(t) {
        var a = this;
        console.log(t);
        var e = this.rpxTopx(168 * t.detail.current + 101 + 20 - 375);
        this.setData({
            tab_scleft: e,
            currenttab: t.detail.current,
            currentTopicid: a.data.toptabs.item[t.detail.current].topic_id,
            bottomline: !1
        }), this.data.option.currenttab = t.detail.current, this.loadWf();
    },
    loadWf: function() {
        var t = this, a = t.data.currentTopicid;
        console.log("loadWf:"), console.log(a), t.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.newlocalhost + "/Foodshow/foodshow_index",
            data: {
                format: "json",
                page: 1,
                id: a,
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("data:"), console.log(a), t.setData({
                    fsdata: a.data.data,
                    wfdata_left: [],
                    wfdata_right: [],
                    wfheight_left: 1e5,
                    wfheight_right: 1e5,
                    current_page: 1
                }), a.data.data.total_page ? t.setData({
                    total_page: a.data.data.total_page
                }) : t.setData({
                    total_page: 1
                }), a.data.data.total_page && a.data.data.total_page > 1 ? t.setData({
                    bottomline: !1
                }) : t.setData({
                    bottomline: !0
                }), t.doWfdata(a), console.log(t.data.wfdata_left), console.log(t.data.wfdata_right), 
                console.log(t.data.wfheight_left), console.log(t.data.wfheight_right), setTimeout(function() {
                    t.setData({
                        requeseDone: !0
                    });
                }, 300);
            },
            fail: function() {
                t.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onLoad: function(t) {
        var a = this, o = this;
        o.setData({
            option: t
        }), wx.getSystemInfo({
            success: function(t) {
                var a = t.windowHeight, e = t.windowWidth, s = t.statusBarHeight, n = 750 / e;
                console.log(a);
                var r = a - 44 - s - 148 / n, i = s + 44 + 148 / n;
                o.setData({
                    contentHeight: r,
                    contentTop: i
                });
            }
        }), o.setData({
            requeseFail: !1
        }), "" != e.globalData.userId && void 0 != e.globalData.userId && o.setData({
            noUserInfo: !1
        }), wx.request({
            url: e.globalData.newlocalhost + "/Foodshow/foodshow_tab",
            data: {
                format: "json",
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                o.setData({
                    toptabs: a.data.data
                }), console.log("tabs:"), console.log(a), "" == t.currenttab || void 0 == t.currenttab ? o.setData({
                    currenttab: 0,
                    currentTopicid: ""
                }) : o.setData({
                    currenttab: t.currenttab,
                    currentTopicid: a.data.data.item[t.currenttab].topic_id
                }), wx.stopPullDownRefresh(), o.loadWf();
            }
        }), wx.getStorage({
            key: "userId",
            success: function(t) {
                o.setData({
                    userId: t.data
                });
            }
        }), e.globalData.userInfo ? this.setData({
            userInfo: e.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? e.userInfoReadyCallback = function(t) {
            a.setData({
                userInfo: t.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(t) {
                e.globalData.userInfo = t.userInfo, a.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                });
            },
            fail: function() {}
        });
    },
    getUserInfo: function(t) {
        "getUserInfo:ok" == t.detail.errMsg && (e.globalData.userInfo = t.detail.userInfo, 
        this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        }), wx.getUserInfo({
            success: function(t) {
                wx.request({
                    url: e.globalData.localhost + "/v9/vendor_callback_xcx.php",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        code: e.globalData.userCode
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        wx.setStorage({
                            key: "userId",
                            data: t.data.user_id
                        }), e.globalData.userId = t.data.user_id, wx.navigateTo({
                            url: "../myfav/myfav?uid=" + e.globalData.userId
                        });
                    }
                });
            }
        }));
    }
});