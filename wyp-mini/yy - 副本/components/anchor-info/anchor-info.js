var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var a = arguments[i];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
}, i = getApp(), a = require("../../utils/hdweapp.js"), s = require("../../utils/paramConfig.js").ParamConfig, e = require("../../utils/request.js"), n = e.RequestGet, o = e.RequestPost, d = e.AddCloudLog, c = [], u = null;

Component({
    properties: {
        sid: {
            type: Number,
            observer: function(t, i) {
                t && t != i && this.init();
            }
        },
        ssid: {
            type: Number
        },
        statusBarHeight: {
            type: Number
        },
        uid: {
            type: Number,
            observer: function(t, i) {
                t && t != i && this.getAnchorInfo(t);
            }
        },
        usercount: {
            type: Number,
            observer: function(t, i) {
                t && t != i && this.setData({
                    "anchorInfo.users": t
                });
            }
        },
        nobleNum: {
            type: Number
        },
        linkMicInfo: {
            type: Object,
            observer: function(t, i) {
                t.uid && t.uid != i.uid && this.checksubscribe(t.uid, "linkmic");
            }
        },
        xModel: {
            type: Boolean
        },
        hidePannel: {
            type: Boolean
        }
    },
    data: {
        hasReady: !1,
        officeData: {
            isOfficial: !1
        },
        isOffice: null,
        showNotice: !1,
        animationData: {},
        followStatus: !1,
        bulletin: "这里是直播公告~",
        anchorInfo: {},
        unLiveReq: !1,
        isFollowed: !1,
        linkMicFollowStatus: !1,
        showInformToast: !1
    },
    methods: {
        checksubscribe: function(i, a) {
            var e = this;
            if (u && u.yyuid && i) {
                var o = s.WECHAT_YY_HOST + "/subscribe/check", c = {
                    udb_oar: u.udb_oar,
                    yyuid: u.yyuid,
                    subuids: i,
                    username: u.username
                };
                n(o, c).then(function(i) {
                    if (0 == i.code) {
                        var s = i.data;
                        "linkmic" == a ? e.setData({
                            linkMicFollowStatus: s[e.data.linkMicInfo.uid]
                        }) : e.setData({
                            followStatus: s[e.data.anchorInfo.uid]
                        });
                    } else 203 == i.code && wx.setStorageSync("udbInfo", {});
                    d(o, t({
                        sid: e.data.sid,
                        ssid: e.data.ssid,
                        uid: e.data.uid
                    }, c), i);
                }).catch(function(i) {
                    d(o, t({
                        sid: e.data.sid,
                        ssid: e.data.ssid,
                        uid: e.data.uid
                    }, c), i);
                });
            }
        },
        fetchbulletin: function(t) {
            var i = this, a = s.YY_COM_HOST + "/yyweb/live/bulletin/" + t + "/" + this.data.sid + "/" + this.data.ssid;
            n(a).then(function(s) {
                0 == s.resultCode && i.setData({
                    bulletin: s.data || "暂无公告~~"
                }), d(a, {
                    sid: i.data.sid,
                    ssid: i.data.ssid,
                    uid: t
                }, s);
            }).catch(function(s) {
                d(a, {
                    sid: i.data.sid,
                    ssid: i.data.ssid,
                    uid: t
                }, s);
            });
        },
        fetchSubscribe: function(i, a, e) {
            var o = this;
            if (u && u.yyuid) {
                var c = s.WECHAT_YY_HOST + "/subscribe", r = {
                    udb_oar: u.udb_oar,
                    yyuid: u.yyuid,
                    subuid: a,
                    username: u.username,
                    type: i
                };
                n(c, r).then(function(i) {
                    0 == i.code ? e && "function" == typeof e && e(i) : wx.showToast({
                        title: i.code + ":" + i.message,
                        icon: "none"
                    }), d(c, t({
                        sid: o.data.sid,
                        ssid: o.data.ssid,
                        uid: o.data.uid
                    }, r), i);
                }).catch(function(i) {
                    e && "function" == typeof e && e(null), d(c, t({
                        sid: o.data.sid,
                        ssid: o.data.ssid,
                        uid: o.data.uid
                    }, r), i);
                });
            }
        },
        getuserinfo: function(t) {
            var a = this, s = t.target.dataset.type, e = t.target.dataset.subscribe, n = t.target.dataset.uid, o = t.target.dataset.notice, d = t.target.dataset.linkmic, c = "follow" == s ? "0005" : "0006";
            this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: c
            }), u && u.yyuid ? this.attention(o, e, n, d) : i.getUdbLogin(t.detail).then(function(t) {
                -100 == t.rcode ? wx.showToast({
                    title: "账号被冻结保护~"
                }) : t && t.yyuid ? (u = t, a.attention(o, e, n, d)) : wx.showToast({
                    title: "关注失败~",
                    icon: "none",
                    duration: 2e3
                });
            }).catch(function(t) {
                wx.showToast({
                    title: t
                });
            });
        },
        attention: function(t, i, a, s) {
            var e = this;
            this.fetchSubscribe(i, a, function(a) {
                0 == a.code ? (s ? e.setData({
                    linkMicFollowStatus: !!i
                }) : e.setData({
                    followStatus: !!i
                }), i ? (e.setData({
                    isFollowed: !0,
                    showInformToast: "unLive" != t
                }), setTimeout(function() {
                    e.setData({
                        isFollowed: !1
                    });
                }, 500)) : e.broadcastNotice(0), wx.showToast({
                    title: a.message,
                    icon: "success",
                    duration: 2e3
                })) : wx.showToast({
                    title: i ? "关注失败" : "取消关注失败",
                    icon: "success",
                    duration: 2e3
                });
            });
        },
        fetchOfficeList: function() {
            var t = this, i = s.WECHAT_YY_HOST + "/offch/list";
            n(i).then(function(a) {
                a && 0 == a.code && (c = a.data, t.getOfficeInfo()), d(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, a);
            }).catch(function(a) {
                d(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, a);
            });
        },
        getOfficeInfo: function() {
            for (var t = c, i = 0, a = t.length; i < a; i++) {
                var s = t[i];
                if (t[i].sid == this.data.sid && t[i].ssid == this.data.ssid) {
                    var e = {
                        isOfficial: !0,
                        img: s.img,
                        name: s.name,
                        logo: s.logo
                    };
                    this.setData({
                        officeData: e
                    });
                    break;
                }
                this.setData({
                    "officeData.isOfficial": !1
                });
            }
        },
        getAnchorInfo: function(t) {
            var i = this;
            if (t) {
                var a = s.WAP_COM_HOST + "/mobileweb/anchor/info/" + t;
                n(a).then(function(s) {
                    if (s && 0 == s.code) {
                        var e = s.data;
                        i.setData({
                            "anchorInfo.avatar": e.avatar,
                            "anchorInfo.nick": e.nick,
                            "anchorInfo.fans": e.fansCount
                        }), i.shareInfoChange();
                    }
                    d(a, {
                        sid: i.data.sid,
                        ssid: i.data.ssid,
                        uid: t
                    }, s);
                }).catch(function(s) {
                    d(a, {
                        sid: i.data.sid,
                        ssid: i.data.ssid,
                        uid: t
                    }, s);
                });
            }
        },
        getChannelInfo: function() {
            var t = this, i = s.MINIAPP_YY_HOST + "/mini/channel/play/" + this.data.sid + "/" + this.data.ssid;
            n(i).then(function(a) {
                if (a && 0 == a.code) {
                    var s = a.data, e = s.liveOn ? s.liveAnchor : s.owAnchor, n = {
                        liveOn: s.liveOn,
                        asid: s.asid,
                        snapshot: s.snapshot,
                        users: s.users,
                        desc: s.desc,
                        title: s.title,
                        avatar: e.avatar,
                        nickName: e.nickName,
                        fans: e.fans,
                        uid: e.uid
                    };
                    t.setData({
                        anchorInfo: n,
                        unLiveReq: !s.liveOn
                    }), t.fetchbulletin(n.uid), t.checksubscribe(n.uid), t.addVisitedStorage(), t.shareInfoChange(), 
                    t.triggerEvent("updateSnapshot", {
                        snapshot: n.snapshot || ""
                    }), t.triggerEvent("updateLiveTitle", {
                        title: n.desc || s.title || "YY直播间"
                    });
                }
                d(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, a);
            }).catch(function(a) {
                d(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, a);
            });
        },
        addVisitedStorage: function() {
            var t = [], i = {
                liveTitle: this.data.anchorInfo.title,
                name: this.data.anchorInfo.desc || "YY直播",
                thumb: this.data.anchorInfo.snapshot,
                users: this.data.anchorInfo.users,
                liveOn: 0,
                asid: this.data.sid,
                sid: this.data.sid,
                ssid: this.data.ssid
            };
            try {
                for (var a = 0, s = (t = this.getVisitedStorage()).length; a < s; a++) if (t[a].sid == this.data.sid && t[a].ssid == this.data.ssid) {
                    t.splice(a, 1);
                    break;
                }
                t.unshift(i), t = t.slice(0, 50), wx.setStorageSync("visited", t);
            } catch (t) {
                console.error(t);
            }
        },
        getVisitedStorage: function() {
            return wx.getStorageSync("visited") || [];
        },
        shareInfoChange: function() {
            var t = this.data.anchorInfo;
            t.sid = this.data.sid, t.ssid = this.data.ssid, this.triggerEvent("shareInfoChange", t);
        },
        keepNotice: function() {
            return !1;
        },
        hideNotice: function() {
            this.hideModal();
        },
        noticeChange: function(t) {
            var i = t.currentTarget.dataset.isoffice;
            this.setData({
                isOffice: i
            }), this.data.showNotice ? this.hideModal() : (this.showModal(), this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: "0001"
            }));
        },
        showModal: function() {
            var t = this;
            t.setData({
                showNotice: !0
            });
            var i = wx.createAnimation({
                duration: 500,
                timingFunction: "ease"
            });
            this.animation = i, setTimeout(function() {
                t.fadeIn();
            }, 200);
        },
        hideModal: function() {
            var t = this, i = wx.createAnimation({
                duration: 800,
                timingFunction: "ease"
            });
            this.animation = i, t.fadeDown(), setTimeout(function() {
                t.setData({
                    showNotice: !1
                });
            }, 720);
        },
        fadeIn: function() {
            this.animation.translateY(0).step(), this.setData({
                animationData: this.animation.export()
            });
        },
        fadeDown: function() {
            this.animation.translateY(300).step(), this.setData({
                animationData: this.animation.export()
            });
        },
        informBtn: function(t) {
            var i = t.currentTarget.dataset.type;
            this.broadcastNotice(i);
        },
        broadcastNotice: function(t) {
            var i = this, a = wx.getStorageSync("HDSDK_openid"), e = wx.getStorageSync("udbInfo"), n = 1 == t ? "0001" : "0002";
            if (this.setData({
                showInformToast: !1
            }), this.HDEvent(n), a && e) {
                var c = "yyuid=" + e.yyuid + "&userName=" + e.username + "&udbOar=" + e.udb_oar + "&openId=" + a + "&anchorUid=" + this.data.anchorInfo.uid, u = s.MINIAPP_YY_HOST + "/mini/notify/broadcast-notice/90920020/" + t + "?" + c;
                o(u).then(function(a) {
                    d(u, {
                        sid: i.data.sid,
                        ssid: i.data.ssid,
                        uid: i.data.uid,
                        type: t,
                        params: c
                    }, a);
                }).catch(function(a) {
                    d(u, {
                        sid: i.data.sid,
                        ssid: i.data.ssid,
                        uid: i.data.uid,
                        type: t,
                        params: c
                    }, a);
                });
            }
        },
        HDEvent: function(t) {
            a.event({
                id: "10104",
                label: t,
                params: {
                    key1: this.data.uid,
                    key2: this.data.sid,
                    key3: this.data.ssid
                }
            });
        },
        goToNoble: function() {
            a.event({
                id: "10101",
                label: "0012"
            }), wx.navigateTo({
                url: "/pages/noble/noble?sid=" + (this.data.sid || 0)
            });
        },
        resetAnchorInfo: function() {
            this.setData({
                isOffice: null,
                showNotice: !1,
                animationData: {},
                followStatus: !1,
                bulletin: "这里是直播公告~",
                anchorInfo: {},
                linkMicFollowStatus: !1,
                unLiveReq: !1,
                isFollowed: !1,
                showInformToast: !1
            });
        },
        openNewRoom: function(t) {
            var i = t.currentTarget.dataset.url;
            t.currentTarget.dataset.sid ? wx.reLaunch({
                url: "/pages/index/index?url=" + encodeURIComponent(i)
            }) : wx.showToast({
                title: "当前为同一直播间连麦，无须跳转~",
                icon: "none"
            });
        },
        init: function() {
            this.resetAnchorInfo(), this.getChannelInfo(), this.getOfficeInfo(), this.getVisitedStorage();
        }
    },
    ready: function() {
        this.hideModal(), this.setData({
            hasReady: !0
        }), u = wx.getStorageSync("udbInfo"), this.fetchOfficeList();
    }
});