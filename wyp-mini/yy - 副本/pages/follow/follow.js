var t = getApp(), a = require("../../utils/hdweapp.js"), e = require("../../utils/paramConfig.js").ParamConfig, o = require("../../utils/request.js"), i = o.RequestGet, n = o.RequestPost, s = {
    lastPage: !1,
    page: 2,
    pageCount: 20
}, r = {
    lastPage: !1,
    page: 1,
    pageCount: 20
}, l = null;

Page({
    data: {
        hasPullReq: !1,
        formId: null,
        navList: [ "正在直播", "关注列表" ],
        list: [],
        followList: [],
        liveNoData: !1,
        followNoData: !1,
        statusBar: {
            title: "YY直播",
            height: t.globalData.systemInfo.statusBarHeight
        },
        currentIdx: 0,
        showModal: !1,
        animationData: "",
        currentActionIdx: 0,
        subuid: 0,
        hasLogin: !1,
        gotoUrl: !1
    },
    onRefreshData: function() {
        r = {
            page: 1,
            lastPage: !1
        }, this.fetchLiveList(), this.fetchFollowList();
    },
    onPageScroll: function(a) {
        t.globalData.pullScrollTop = a.scrollTop;
    },
    fetchLoginInfo: function() {
        (l = wx.getStorageSync("udbInfo")) && l.yyuid && (this.setData({
            hasLogin: !0,
            list: [],
            followList: []
        }), s = {
            page: 2,
            pageCount: 20
        }, r = {
            page: 1,
            pageCount: 20
        }, this.fetchLiveList(), this.fetchFollowList());
    },
    fetchLiveList: function() {
        var t = this, a = e.WECHAT_YY_HOST + "/nav/subscribe/live", o = {
            wxAppid: "wx3538e651c432208a",
            udb_oar: l.udb_oar,
            yyuid: l.yyuid
        };
        i(a, o).then(function(a) {
            if (0 == a.code) {
                var e = [];
                a.data.map(function(t) {
                    2019 == t.type && (e = e.concat(t.data), s = {
                        id: t.id,
                        lastPage: t.lastPage
                    });
                }), t.setData({
                    list: e,
                    liveNoData: !e.length
                });
            }
            t.setData({
                hasPullReq: !1
            });
        });
    },
    fetchLiveMore: function() {
        var t = this;
        if (s.id) {
            var a = e.WECHAT_YY_HOST + "/nav/subscribe/live/" + s.id, o = {
                wxAppid: "wx3538e651c432208a",
                udb_oar: l.udb_oar,
                yyuid: l.yyuid,
                username: l.username,
                page: s.page,
                pageCount: s.pageCount
            };
            i(a, o).then(function(a) {
                if (203 == a.code) t.setData({
                    hasLogin: !1
                }); else if (0 == a.code && a.data.length) {
                    var e = a.data, o = t.data.list;
                    o = o.concat(e), t.setData({
                        list: o
                    }), s = {
                        lastPage: e.lastPage,
                        page: s.page + 1
                    };
                } else t.setData({
                    liveNoData: !0
                });
            });
        }
    },
    fetchFollowList: function() {
        var t = this, a = wx.getStorageSync("HDSDK_openid"), o = e.WECHAT_YY_HOST + "/nav/subscribe/list", n = {
            openId: a,
            udb_oar: l.udb_oar,
            yyuid: l.yyuid,
            page: r.page,
            username: l.username,
            pageCount: r.pageCount
        };
        i(o, n).then(function(a) {
            if (203 == a.code) t.setData({
                hasLogin: !1
            }); else if (0 == a.code) {
                var e = a.data, o = 1 == r.page ? [] : t.data.followList;
                e.length ? (o = o.concat(e), t.setData({
                    followList: o
                }), r = {
                    page: r.page + 1
                }) : (t.setData({
                    followNoData: !0
                }), r = {
                    lastPage: !0
                });
            } else t.setData({
                followNoData: !0
            }), r = {
                lastPage: !0
            };
            t.setData({
                hasPullReq: !1
            });
        });
    },
    arrFormate: function(t) {
        return t.length > 2 && t.length % 2 != 0 && (t = t.slice(0, t.length - 1)), t;
    },
    changeCurrentIdx: function(t) {
        this.setData({
            currentIdx: t.target.dataset.index
        }), wx.setStorageSync("followTab", this.data.currentIdx);
    },
    attentionClick: function() {},
    getuserinfo: function(a) {
        var e = a.target.dataset.url;
        this.data.gotoUrl || (this.setData({
            gotoUrl: !0
        }), t.collector(e, this.data.formId));
    },
    submitForm: function(t) {
        this.setData({
            formId: t.detail.formId
        });
    },
    submitFollowForm: function(a) {
        var e = a.target.dataset.attention, o = a.target.dataset.subuid, i = a.target.dataset.index;
        this.setData({
            formId: a.detail.formId,
            subuid: o,
            currentActionIdx: i
        }), "1" == e ? this.showModal() : (this.attention(), this.HDEvent("0001", o)), t.collector(null, this.data.formId);
    },
    fetchSubscribe: function(t, a) {
        var o = e.WECHAT_YY_HOST + "/subscribe", n = {
            udb_oar: l.udb_oar,
            yyuid: l.yyuid,
            subuid: this.data.subuid,
            username: l.username,
            type: t
        };
        i(o, n).then(function(t) {
            0 == t.code && a && "function" == typeof a && a(t);
        }).catch(function() {
            a && "function" == typeof a && a(null);
        });
    },
    attention: function() {
        var a = this;
        this.fetchSubscribe(1, function(e) {
            if (0 == e.code) {
                var o = a.data.followList, i = a.data.currentActionIdx;
                o[i].state = 1, o[i].notify = 1, a.setData({
                    followList: o
                }), a.broadcastNotice(1), t.collector(null, a.data.formId), wx.showToast({
                    title: "已关注",
                    icon: "success",
                    duration: 3e3
                });
            } else wx.showToast({
                title: "关注失败",
                icon: "success",
                duration: 2e3
            });
        });
    },
    broadcastBtn: function(t) {
        var a = t.currentTarget.dataset.index, e = t.currentTarget.dataset.notify, o = t.currentTarget.dataset.subuid, i = this.data.followList;
        e = 1 == e ? 0 : 1, i[a].notify = e, this.setData({
            subuid: o,
            followList: i
        }), wx.showToast({
            title: 1 == e ? "设置开播提醒成功" : "关闭开播提醒成功",
            icon: "none"
        });
        var n = 0 == e ? "0004" : "0003";
        this.HDEvent(n, o), this.broadcastNotice(e);
    },
    broadcastNotice: function(t) {
        var a = wx.getStorageSync("HDSDK_openid");
        if (l = wx.getStorageSync("udbInfo"), this.setData({
            showInformToast: !1
        }), a && l) {
            var o = "yyuid=" + l.yyuid + "&userName=" + l.username + "&udbOar=" + l.udb_oar + "&openId=" + a + "&anchorUid=" + this.data.subuid, i = e.MINIAPP_YY_HOST + "/mini/notify/broadcast-notice/" + e.MINIAPP_APPID + "/" + t + "?" + o;
            n(i);
        }
    },
    HDEvent: function(t, e) {
        a.event({
            id: "10401",
            label: t,
            params: {
                key1: e
            }
        });
    },
    cancelAttention: function() {
        var t = this;
        this.fetchSubscribe(0, function(a) {
            if (a) {
                var e = t.data.currentActionIdx, o = t.data.followList;
                o[e].state = 0, o[e].notify = 3, t.setData({
                    followList: o
                }), t.broadcastNotice(0);
            } else wx.showToast({
                title: "取消关注失败",
                icon: "success",
                duration: 2e3
            });
            t.hideModal();
        }), this.HDEvent("0002", this.data.subuid);
    },
    showModal: function() {
        var t = this, a = wx.createAnimation({
            duration: 50,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, a.translateY(300).step(), this.setData({
            animationData: a.export(),
            showModal: !0
        }), setTimeout(function() {
            a.translateY(0).step(), t.setData({
                animationData: a.export()
            });
        }, 50);
    },
    hideModal: function() {
        var t = this, a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, a.translateY(300).step(), this.setData({
            animationData: a.export()
        }), setTimeout(function() {
            a.translateY(0).step(), t.setData({
                animationData: a.export(),
                showModal: !1
            });
        }, 200);
    },
    getuserinfoLogin: function(a) {
        wx.showLoading({
            title: "加载中..."
        });
        var e = this;
        l && l.yyuid ? e.setData({
            hasLogin: !0,
            udbInfo: l
        }) : t.getUdbLogin(a.detail).then(function(t) {
            wx.hideLoading(), -100 == t.rcode ? wx.showToast({
                title: "账号被冻结保护~"
            }) : 100 == t.rcode ? wx.showToast({
                title: "用户封禁"
            }) : 1 == t.rcode && t && t.yyuid ? (e.setData({
                hasLogin: !0
            }), l = t, e.fetchLiveList(), e.fetchFollowList()) : wx.showToast({
                title: "登录失败~",
                icon: "none",
                duration: 2e3
            });
        }).catch(function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                duration: 2e3
            });
        });
    },
    onReachBottom: function() {
        0 != this.data.currentIdx || s.lastPage || this.fetchLiveMore(), 1 != this.data.currentIdx || r.lastPage || this.fetchFollowList();
    },
    setGotoUrlDisable: function() {
        this.setData({
            gotoUrl: !0
        });
    },
    onLoad: function(e) {
        a.Page.init(), e.currentIdx && this.setData({
            currentIdx: e.currentIdx
        }), t.reportChnInfo(e);
    },
    onReady: function() {},
    onShareAppMessage: function() {
        return {
            title: "YY直播",
            path: "/pages/follow/follow?father_openId=" + (wx.getStorageSync("HDSDK_openid") || "") + "&origin_channel=" + (wx.getStorageSync("origin_channel") || "wx_miniapp")
        };
    },
    onShow: function() {
        t.getOpenId(), this.fetchLoginInfo(), this.setData({
            currentIdx: wx.getStorageSync("followTab") || "0",
            gotoUrl: !1,
            showModal: !1
        });
    },
    onHide: function() {
        s = {
            lastPage: !1,
            page: 2,
            pageCount: 20
        }, r = {
            lastPage: !1,
            page: 1,
            pageCount: 20
        }, this.setData({
            liveNoData: !1,
            followNoData: !1,
            list: [],
            followList: []
        });
    },
    onTabItemTap: function() {
        a.event({
            id: "10003",
            label: "0002"
        });
    },
    onUnload: function() {}
});