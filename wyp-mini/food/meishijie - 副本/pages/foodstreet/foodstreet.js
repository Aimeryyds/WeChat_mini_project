var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight,
        enable: !0,
        barHeight_rpx: function(t) {
            return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
        }(wx.getSystemInfoSync().statusBarHeight),
        userId: t.globalData.userId,
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        favbtnicon: "../../images/favbtnicon_red.png",
        showtopbar: !1,
        showToast: !1,
        toastTitle: "",
        pageNum: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        scSvwShow: "",
        searchInputing: !1,
        siStatClass: "",
        nowords: "",
        wfdata_left: [],
        wfdata_right: [],
        wfheight_left: 1e5,
        wfheight_right: 1e5,
        activeimg: 0
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    isEmptyObject: function(t) {
        var a;
        for (a in t) return !1;
        return !0;
    },
    pxToRpx: function(t) {
        return (t = parseInt(t)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
    },
    rpxTopx: function(t) {
        return (t = parseInt(t)) / 2 * (wx.getSystemInfoSync().windowWidth / 375);
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
    onShow: function() {
        t.globalData.userId && this.setData({
            hasUserInfo: !0,
            userId: t.globalData.userId
        });
    },
    showToastss: function(t) {
        var a = this, e = t.duration, s = t.title;
        a.setData({
            showToast: !0,
            toastTitle: s
        }), setTimeout(function() {
            a.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    doWfdata: function(t) {
        var a = this;
        for (var e in t.data.data.items) {
            var s = 0;
            s += parseFloat(t.data.data.items[e].wh_ratio), s += parseFloat(.06 * Math.floor(t.data.data.items[e].title.length / 8)), 
            a.data.wfheight_left >= a.data.wfheight_right ? (a.setData({
                wfdata_left: a.data.wfdata_left.concat(t.data.data.items[e])
            }), a.setData({
                wfheight_left: a.data.wfheight_left - s
            })) : (a.setData({
                wfdata_right: a.data.wfdata_right.concat(t.data.data.items[e])
            }), a.setData({
                wfheight_right: a.data.wfheight_right - s
            }));
        }
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var a = this;
        a.setData({
            requeseDone: !1
        }), console.log(a.data.pageNum + 1), wx.request({
            url: t.globalData.newlocalhost + "/article/food_street",
            data: {
                format: "json",
                page: a.data.pageNum + 1,
                type: a.data.currentTab
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), t.data.data.items.length > 0 ? (a.setData({
                    requeseDone: !0,
                    pageNum: a.data.pageNum + 1
                }), a.doWfdata(t)) : (a.setData({
                    hasNextPage: !1
                }), a.setData({
                    bottomline: !0
                }), a.setData({
                    requeseDone: !0
                }));
            }
        });
    },
    onPageScroll: function(t) {
        var a = this.rpxTopx(1012);
        t.scrollTop > a ? this.setData({
            showtopbar: !0
        }) : this.setData({
            showtopbar: !1
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    switchtopswiper: function(t) {
        this.setData({
            activeimg: t.detail.current
        }), console.log(t.detail.current);
    },
    switchtab: function(a) {
        var e = this, s = a.currentTarget.dataset.tab;
        e.setData({
            currentTab: s
        }), e.setData({
            requeseFail: !1
        }), e.setData({
            requeseDone: !1
        }), e.setData({
            pageNum: 1,
            hasNextPage: !0,
            bottomline: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/article/food_street",
            data: {
                format: "json",
                page: 1,
                type: e.data.currentTab
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log("瀑布流数据"), console.log(t), e.setData({
                    fsdata: t.data.data,
                    wfdata_left: [],
                    wfdata_right: [],
                    wfheight_left: 1e5,
                    wfheight_right: 1e5
                }), e.doWfdata(t), e.setData({
                    requeseDone: !0
                });
            },
            fail: function() {
                e.setData({
                    requeseFail: !0
                });
            }
        });
    },
    onLoad: function(a) {
        var e = this, s = this;
        s.setData({
            option: a
        }), s.setData({
            requeseFail: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/article/goods_tag_list",
            data: {
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                s.setData({
                    tjtabs: a.data.data
                }), console.log("tabs:"), console.log(a), s.setData({
                    currentTab: a.data.data.items[0].id
                }), wx.request({
                    url: t.globalData.newlocalhost + "/article/food_street",
                    data: {
                        format: "json",
                        page: 1,
                        type: s.data.currentTab
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        console.log("瀑布流数据"), console.log(t), s.setData({
                            fsdata: t.data.data
                        }), s.doWfdata(t), console.log("flag1"), console.log(s.data.wfdata_left), console.log(s.data.wfdata_right), 
                        console.log(s.data.wfheight_left), console.log(s.data.wfheight_right), s.setData({
                            requeseDone: !0
                        });
                    },
                    fail: function() {
                        s.setData({
                            requeseFail: !0
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "userId",
            success: function(t) {
                s.setData({
                    userId: t.data
                });
            }
        }), t.globalData.userInfo ? this.setData({
            userInfo: t.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? t.userInfoReadyCallback = function(t) {
            e.setData({
                userInfo: t.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(a) {
                t.globalData.userInfo = a.userInfo, e.setData({
                    userInfo: a.userInfo,
                    hasUserInfo: !0
                });
            },
            fail: function() {}
        });
    },
    sancanSwitch: function(t) {
        var a = t.currentTarget.dataset.tab;
        this.setData({
            nowTimeSl: a
        });
    },
    sancanChange: function(t) {
        this.setData({
            nowTimeSl: t.detail.current
        });
    },
    getUserInfo: function(a) {
        "getUserInfo:ok" == a.detail.errMsg && (t.globalData.userInfo = a.detail.userInfo, 
        this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        }), wx.getUserInfo({
            success: function(a) {
                wx.request({
                    url: t.globalData.localhost + "/v9/vendor_callback_xcx.php",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        code: t.globalData.userCode
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        wx.setStorage({
                            key: "userId",
                            data: a.data.user_id
                        }), t.globalData.userId = a.data.user_id, wx.navigateTo({
                            url: "../myfav/myfav?uid=" + t.globalData.userId
                        });
                    }
                });
            }
        }));
    }
});