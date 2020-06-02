var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        userId: a.globalData.userId,
        hasUserInfo: !1,
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        addXccimg: "../../images/addXccimg.png",
        shareicon: "../../images/rd_w_fx@3x.png",
        showToast: !1,
        toastTitle: "",
        pageNum: 1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        bottomline: !1,
        showAddXcc: !1
    },
    addXcc: function() {
        this.setData({
            showAddXcc: !0
        });
    },
    hideAddXcc: function() {
        this.setData({
            showAddXcc: !1
        });
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
            title: this.data.wenzhangdata.title,
            path: "/pages/index/index?goWenzhang=" + this.data.wenzhangdata.id,
            imageUrl: this.data.forshare_img + "?imageMogr2/gravity/Center/crop/328x262",
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
        var t = this, e = a.duration, n = a.title;
        t.setData({
            showToast: !0,
            toastTitle: n
        }), setTimeout(function() {
            t.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, e);
    },
    onReachBottom: function() {
        this.data.hasNextPage && this.loadMore();
    },
    loadMore: function() {
        var t = this;
        t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/weixin/wenzhang_recommend.php",
            data: {
                format: "json",
                page: t.data.pageNum + 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.data.items.length > 0) {
                    t.setData({
                        tjInfo: t.data.tjInfo.concat(a.data.data.items)
                    });
                    var e = t.data.pageNum + 1;
                    t.setData({
                        pageNum: e
                    }), t.setData({
                        requeseDone: !0
                    });
                } else t.setData({
                    hasNextPage: !1
                }), t.setData({
                    bottomline: !0
                }), t.setData({
                    requeseDone: !0
                });
            }
        });
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(t) {
        var e = this, n = this;
        n.setData({
            option: t
        }), n.setData({
            requeseFail: !1
        }), wx.request({
            url: a.globalData.localhost + "/weixin/wenzhang_detail.php",
            data: {
                format: "json",
                id: t.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                n.setData({
                    wenzhangdata: a.data.data
                }), n.setData({
                    requeseDone: !0
                });
                for (var t in n.data.wenzhangdata.content) if ("img" == n.data.wenzhangdata.content[t].type) {
                    n.setData({
                        forshare_img: n.data.wenzhangdata.content[t].data
                    });
                    break;
                }
            },
            fail: function() {
                n.setData({
                    requeseFail: !0
                });
            }
        }), wx.request({
            url: a.globalData.localhost + "/weixin/wenzhang_recommend.php",
            data: {
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                n.setData({
                    tjInfo: a.data.data.items
                });
            }
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                n.setData({
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
    }
});