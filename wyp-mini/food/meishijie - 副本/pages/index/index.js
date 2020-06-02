var a = getApp();

Page({
    data: {
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        barHeight_rpx: function(a) {
            return (a = parseInt(a)) * (375 / wx.getSystemInfoSync().windowWidth) * 2;
        }(wx.getSystemInfoSync().statusBarHeight + 44),
        searchPlh: "美食杰什么菜都有",
        userId: a.globalData.userId,
        userInfo: {},
        searchTips: {},
        sancanInfo: {},
        tjInfo: {},
        tjItems: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        favbtnicon: "../../images/favbtnicon_red.png",
        searchicon: "../../images/searchicon.png",
        addbtn_img: "../../images/addd.png",
        addbtns_1: "../../images/btns_1.png",
        addbtns_2: "../../images/btns_2.png",
        addbtns_3: "../../images/btns_3.png",
        showAddbtnsCover: !1,
        searchedWords: [],
        hideSearchedWords: !0,
        noSearchedWords: !0,
        showToast: !1,
        toastTitle: "",
        searchRequesting: !1,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        pageNum: 1,
        scSvwShow: "",
        searchInputing: !1,
        siStatClass: "",
        nowords: "",
        bottomline: !1,
        wfdata_left: [],
        wfdata_right: [],
        wfheight_left: 0,
        wfheight_right: 0,
        tab_type: "200",
        showdlbox: !1,
        dlsuccesstip: ""
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
        var t = this, e = a.duration, s = a.title;
        t.setData({
            showToast: !0,
            toastTitle: s
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
            if (1 == a.data.data.items[e].type || 7 == a.data.data.items[e].type || 8 == a.data.data.items[e].type) {
                var s = 0;
                if ("0.75" == a.data.data.items[e].wh_ratio) {
                    var n = .4 * Math.random() + .5625;
                    a.data.data.items[e].wh_ratio = n;
                }
                s += 335 / parseFloat(a.data.data.items[e].wh_ratio), s += 30;
            }
            t.data.wfheight_left <= t.data.wfheight_right ? (t.setData({
                wfdata_left: t.data.wfdata_left.concat(a.data.data.items[e])
            }), 1 != a.data.data.items[e].type && 7 != a.data.data.items[e].type && 8 != a.data.data.items[e].type || t.setData({
                wfheight_left: t.data.wfheight_left + s
            })) : (t.setData({
                wfdata_right: t.data.wfdata_right.concat(a.data.data.items[e])
            }), 1 != a.data.data.items[e].type && 7 != a.data.data.items[e].type && 8 != a.data.data.items[e].type || t.setData({
                wfheight_right: t.data.wfheight_right + s
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
            url: a.globalData.newlocalhost + "/index/home_feeds_applet",
            data: {
                format: "json",
                page: t.data.pageNum + 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), a.data.data.total_page == a.data.data.current_page && t.setData({
                    hasNextPage: !1
                }), a.data.data.items && a.data.data.items.length > 0 ? (t.setData({
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
    onLoad: function(t) {
        var e = this, s = this;
        t.goContent > 0 && setTimeout(function() {
            wx.navigateTo({
                url: "/pages/content/content?id=" + t.goContent
            });
        }, 500), t.goWenzhang > 0 && setTimeout(function() {
            wx.navigateTo({
                url: "/pages/wenzhang/wenzhang?id=" + t.goWenzhang
            });
        }, 500), t.goArticle > 0 && setTimeout(function() {
            wx.navigateTo({
                url: "/pages/article/article?id=" + t.goArticle
            });
        }, 500), t.goZt && wx.navigateTo({
            url: "/pages/zt/zt?url=" + t.goZt
        }), t.goSearch && wx.navigateTo({
            url: "/pages/searchRecipe/searchRecipe?keyword=" + t.goSearch
        }), t.goCd_cid && wx.navigateTo({
            url: "/pages/cd_content/cd_content?cid=" + t.goCd_cid + "&&title=" + t.goCd_title
        }), t.goSancan && wx.navigateTo({
            url: "/pages/sancan/sancan"
        }), t.goSmart && wx.navigateTo({
            url: "/pages/smart/smart"
        }), t.goNewyear2019 && wx.navigateTo({
            url: "/pages/newyear2019/newyear2019"
        }), t.goFscontent && wx.navigateTo({
            url: "/pages/foodshow_content/foodshow_content?id=" + t.goFscontent
        }), s.setData({
            option: t
        }), s.setData({
            requeseFail: !1
        }), wx.request({
            url: a.globalData.newlocalhost + "/index/home_recommend_6_9_1",
            data: {
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("接口數據："), console.log(a), s.setData({
                    maindata: a.data
                }), s.setData({
                    sancanInfo: a.data.data[3].sancan
                }), console.log(s.data.sancanInfo), s.setData({
                    requeseDone: !0
                });
                var t = new Date().getHours();
                t < 4 ? s.setData({
                    nowTimeSl: 4
                }) : t > 3 && t < 10 ? s.setData({
                    nowTimeSl: 0
                }) : t > 9 && t < 14 ? s.setData({
                    nowTimeSl: 1
                }) : t > 13 && t < 16 ? s.setData({
                    nowTimeSl: 2
                }) : t > 15 && t < 22 ? s.setData({
                    nowTimeSl: 3
                }) : s.setData({
                    nowTimeSl: 4
                }), setTimeout(function() {
                    s.setData({
                        scSvwShow: "sc_svw_show"
                    });
                }, 500);
            },
            fail: function() {
                s.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.newlocalhost + "/index/home_feeds_applet",
            data: {
                format: "json",
                page: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("瀑布流数据"), console.log(a), s.doWfdata(a), console.log(s.data.wfdata_left), 
                console.log(s.data.wfdata_right), console.log(s.data.wfheight_left), console.log(s.data.wfheight_right);
            },
            fail: function() {
                s.setData({
                    requeseFail: !0
                });
            }
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                s.setData({
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