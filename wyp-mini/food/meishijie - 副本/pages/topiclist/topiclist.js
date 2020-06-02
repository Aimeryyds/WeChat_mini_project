var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        userId: a.globalData.userId,
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        favbtnicon: "../../images/favbtnicon_red.png",
        backiconUrl: "../../images/nav_icon_black.png",
        showTopbar: !1,
        showToast: !1,
        toastTitle: "",
        pageNum: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        wfdata_left: [],
        wfdata_right: [],
        wfheight_left: 1e5,
        wfheight_right: 1e5,
        activeimg: 0,
        currenttab: 0
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    isEmptyObject: function(a) {
        var t;
        for (t in a) return !1;
        return !0;
    },
    pxToRpx: function(a) {
        return (a = parseInt(a)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(a) {
        return (a = parseInt(a)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(a) {},
            fail: function(a) {}
        };
    },
    onShow: function() {
        a.globalData.userId && this.setData({
            hasUserInfo: !0,
            userId: a.globalData.userId
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
    doWfdata: function(a) {
        var t = this;
        for (var e in a.data.data.items) {
            if (1 == a.data.data.items[e].type || 7 == a.data.data.items[e].type || 8 == a.data.data.items[e].type || 9 == a.data.data.items[e].type) {
                var o = 0;
                o += parseFloat(a.data.data.items[e].wh_ratio), 1 == a.data.data.items[e].type && ((o += parseFloat(.06 * Math.floor(a.data.data.items[e].recipe.title.length / 8))) >= .24 && (o = .24), 
                a.data.data.items[e].recipe.label && (o += .06)), 7 == a.data.data.items[e].type && ((o += parseFloat(.06 * Math.floor(a.data.data.items[e].video_recipe.title.length / 8))) >= .24 && (o = .24), 
                a.data.data.items[e].video_recipe.label && (o += .06)), 8 == a.data.data.items[e].type && ((o += parseFloat(.06 * Math.floor(a.data.data.items[e].video_article.title.length / 8))) >= .24 && (o = .24), 
                a.data.data.items[e].video_article.label && (o += .06)), 9 == a.data.data.items[e].type && ((o += parseFloat(.06 * Math.floor(a.data.data.items[e].works.content.length / 8))) >= .24 && (o = .24), 
                a.data.data.items[e].works.topic_info && (o += .06));
            }
            t.data.wfheight_left >= t.data.wfheight_right ? (t.setData({
                wfdata_left: t.data.wfdata_left.concat(a.data.data.items[e])
            }), 1 != a.data.data.items[e].type && 7 != a.data.data.items[e].type && 8 != a.data.data.items[e].type && 9 != a.data.data.items[e].type || t.setData({
                wfheight_left: t.data.wfheight_left - o
            })) : (t.setData({
                wfdata_right: t.data.wfdata_right.concat(a.data.data.items[e])
            }), 1 != a.data.data.items[e].type && 7 != a.data.data.items[e].type && 8 != a.data.data.items[e].type && 9 != a.data.data.items[e].type || t.setData({
                wfheight_right: t.data.wfheight_right - o
            }));
        }
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Foodshow/foodshow_index",
            data: {
                format: "json",
                page: t.data.pageNum + 1,
                id: t.data.option.id,
                type: 2
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), a.data.data && a.data.data.items && a.data.data.items.length > 0 ? (t.setData({
                    requeseDone: !0,
                    pageNum: t.data.pageNum + 1
                }), t.doWfdata(a)) : (t.setData({
                    hasNextPage: !1
                }), t.setData({
                    bottomline: !0
                }), t.setData({
                    requeseDone: !0
                }));
            }
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onPageScroll: function(a) {
        a.scrollTop > this.rpxTopx(422) ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    onLoad: function(t) {
        var e = this, o = this;
        o.setData({
            option: t
        }), o.setData({
            requeseFail: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/Foodshow/foodshow_index",
            data: {
                format: "json",
                page: 1,
                per_page: 10,
                id: o.data.option.id,
                type: 2
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("data:"), console.log(a), o.setData({
                    fsdata: a.data.data
                }), o.doWfdata(a), console.log(o.data.wfdata_left), console.log(o.data.wfdata_right), 
                console.log(o.data.wfheight_left), console.log(o.data.wfheight_right), o.setData({
                    requeseDone: !0
                });
            },
            fail: function() {
                o.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.newlocalhost + "/topic/topic_detail",
            data: {
                format: "json",
                topic_id: o.data.option.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                o.setData({
                    topicinfo: a.data.data
                }), console.log("topic:"), console.log(a);
            }
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                o.setData({
                    userId: a.data
                });
            }
        }), a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(a) {
            e.setData({
                userInfo: a.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(t) {
                a.globalData.userInfo = t.userInfo, e.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                });
            },
            fail: function() {}
        });
    },
    sancanSwitch: function(a) {
        var t = a.currentTarget.dataset.tab;
        this.setData({
            nowTimeSl: t
        });
    },
    sancanChange: function(a) {
        this.setData({
            nowTimeSl: a.detail.current
        });
    },
    getUserInfo: function(t) {
        "getUserInfo:ok" == t.detail.errMsg && (a.globalData.userInfo = t.detail.userInfo, 
        this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        }), wx.getUserInfo({
            success: function(t) {
                wx.request({
                    url: a.globalData.localhost + "/v9/vendor_callback_xcx.php",
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
                        wx.setStorage({
                            key: "userId",
                            data: t.data.user_id
                        }), a.globalData.userId = t.data.user_id, wx.navigateTo({
                            url: "../myfav/myfav?uid=" + a.globalData.userId
                        });
                    }
                });
            }
        }));
    }
});