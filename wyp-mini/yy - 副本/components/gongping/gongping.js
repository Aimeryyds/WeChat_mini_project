var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, i = require("./template/gongping-danmu/gongping-danmu.js"), e = require("./template/gongping-combo/gongping-combo.js"), a = require("./lib/h5service/h5service-yy.js"), n = require("./template/sendgift-pannel/sendgift-pannel.js"), s = require("./template/gongping-danmu/giftConfig.js").getFreeFlowerConfig, o = require("../../utils/hdweapp.js"), d = require("../../utils/paramConfig.js").ParamConfig, h = require("../../utils/request.js"), r = h.RequestGet, u = h.AddCloudLog, c = getApp(), l = void 0, g = void 0, f = !1, p = null, m = [], v = null, I = 0, y = !1, w = void 0, S = void 0, C = void 0, b = void 0, k = !1, T = c.globalData.systemInfo, D = "", x = void 0;

Component({
    properties: {
        gongpingHeight: {
            type: Number,
            value: 240
        },
        ratio: {
            type: Number,
            value: 1
        },
        isRatioReady: {
            type: Boolean
        },
        sid: {
            type: Number,
            observer: function(t, i) {
                t && t != i && (this.resetGongping(), e.destory());
            }
        },
        ssid: {
            type: Number
        },
        uid: {
            type: Number
        },
        sharedOid: {
            type: Number
        },
        userUid: {
            type: Number
        },
        roomStatus: {
            type: Boolean
        },
        shareInfo: {
            type: Object
        },
        queryParams: {
            type: Object
        },
        networkStatus: {
            type: Boolean
        },
        isLeavePage: {
            type: Boolean,
            observer: function(t, i) {
                t && t != i && (g.leaveChannel(), e.destory(), u("leaveChannel", {
                    sid: this.data.sid,
                    ssid: this.data.ssid,
                    uid: this.data.uid
                }, t));
            }
        },
        joinChannel: {
            type: Object,
            value: {
                wxAppid: "wx3538e651c432208a",
                appid: "5838",
                appKey: null,
                token: null
            },
            observer: function(t, i) {
                t && t != i || this.setData({
                    joinChannel: i
                });
            }
        },
        submodules: {
            type: Object,
            value: {
                danmu: !0,
                combo: !0,
                chat: !0
            },
            observer: function(t, i) {
                t && t != i || this.setData({
                    submodules: i
                });
            }
        }
    },
    data: {
        hasReady: !1,
        chatFocusStatus: !1,
        gongpingInfo: [],
        gongpingUI: {
            scrollTop: 0,
            scrollEvent: null
        },
        hasAccredit: !1,
        chatInputValue: "",
        isHideChatInput: !0,
        userInfo: null,
        sourceA: null,
        sourceB: null,
        isGiftReady: !1,
        systemType: "",
        showIosGiftAnimation: !1,
        flowerGiftNum: 0,
        showGiftTimer: !1,
        xModel: !1,
        hideService: !0,
        appParameter: "",
        switchAppLaunch: !1,
        activityData: null,
        ishappyFight: !1,
        happyFightInfo: {},
        happyFightRemainTime: 0
    },
    pageLifetimes: {
        show: function() {
            this.resetGongpingcache();
        },
        hide: function() {
            this.resetGongpingcache();
        }
    },
    detached: function() {
        this.resetGongpingcache(), this.removeStorageInfo(), e.destory(), i.resetDanmuInfo(), 
        g.leaveChannel(), w && clearTimeout(w), S && clearInterval(S), C && clearTimeout(C), 
        u("leaveChannel", {
            sid: this.data.sid,
            ssid: this.data.ssid,
            uid: this.data.uid
        }, "detached");
    },
    ready: function() {
        this.setData({
            hasReady: !0
        }), this.getRoomActivity(), this.switchAppLaunch(), this.triggerEvent("roomRecommendShowEvent");
    },
    methods: {
        resetGongping: function() {
            this.setData({
                gongpingInfo: [],
                gongpingUI: {
                    scrollTop: 0,
                    scrollEvent: null
                },
                chatInputValue: "",
                isHideChatInput: !0,
                userInfo: null,
                sourceA: null,
                sourceB: null,
                ishappyFight: !1,
                happyFightInfo: {},
                happyFightRemainTime: 0
            }), y = !1, k = !1, this.triggerEvent("chatInputShowChange", !0), clearTimeout(v), 
            this.resetGongpingcache(), this.removeStorageInfo(), this.init();
        },
        resetGongpingcache: function() {
            m = [], v = null, I = 0, f = !1, p = null;
        },
        removeStorageInfo: function() {
            wx.removeStorageSync("sortedConsumesInfo");
        },
        hideChatInput: function() {
            this.setData({
                isHideChatInput: !0,
                chatInputValue: ""
            }), this.triggerEvent("chatInputShowChange", !0);
        },
        init: function() {
            this.setAppParameter(), this.connectH5Svc(), this.getSystemInfo(), this.getLoginUserinfo(), 
            this.getUdbInfo(), this.initGongpingDanmu(), this.initGongpingCombo(), this.setChannelData();
        },
        setAppParameter: function() {
            var t = "wx3538e651c432208a://pages/room/room?sid=" + this.data.sid + "&ssid=" + this.data.ssid + "&uid=" + this.data.uid;
            t = encodeURIComponent(t);
            var i = {
                source: "wx_minapp",
                uri: "yymobile://Channel/Live/" + this.data.sid + "/" + this.data.ssid + "?urlFrom=" + t
            };
            this.setData({
                appParameter: JSON.stringify(i)
            });
        },
        switchAppLaunch: function() {
            var t = this, i = d.MINIAPP_YY_HOST + "/mini/switch/app-button";
            r(i).then(function(e) {
                var a = !1;
                0 == e.code && e.data && (1036 != c.globalData.scene && 1069 != c.globalData.scene || (t.channelTrack(), 
                a = !0, o.event({
                    id: "10105",
                    label: "0001",
                    params: {
                        key1: t.data.sid,
                        key2: t.data.ssid
                    }
                }))), t.setAppLaunch(a), u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid,
                    scene: c.globalData.scene
                }, e);
            }).catch(function(e) {
                t.setAppLaunch(!1), u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid,
                    scene: c.globalData.scene
                }, e);
            });
        },
        setChannelData: function() {
            var i = /iphone|ipad|ipod/i.test(T.model), e = t({}, this.data.queryParams, {
                sharedOid: this.data.sharedOid || 0,
                userUid: this.data.userUid || 0,
                sid: this.data.sid || 0,
                ssid: this.data.ssid || this.data.ssid || 0
            });
            x = {
                appid: "yymobile",
                os: i ? "ios" : "android",
                height: T.windowHeight,
                width: T.windowWidth,
                devicePixelRatio: T.pixelRatio || 1,
                osVersion: !!/(\d+(?:\.\d+)*)/.test(T.system) && RegExp.$1,
                channelCode: "nearLive",
                extend: JSON.stringify(e)
            };
        },
        channelTrack: function() {
            var t = this, i = d.CHANNEL_TRACK + "/channel/track/token";
            r(i, x).then(function(e) {
                if (0 == e.code) {
                    var a = e.data;
                    D = a.token, t.requestMlog(100);
                }
                u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid,
                    reqbody: x
                }, e);
            }).catch(function(e) {
                u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid,
                    reqbody: x
                }, e);
            });
        },
        setAppLaunch: function(t) {
            this.setData({
                switchAppLaunch: t
            });
        },
        launchAppClick: function() {
            o.event({
                id: "10105",
                label: "0002",
                params: {
                    key1: this.data.sid,
                    key2: this.data.ssid
                }
            }), this.requestMlog(101), this.copyChannelToken();
        },
        copyChannelToken: function() {
            D && wx.setClipboardData({
                data: D,
                success: function() {
                    wx.showToast({
                        title: "打开APP",
                        icon: "none"
                    });
                }
            });
        },
        requestMlog: function(t) {
            try {
                var i = getCurrentPages()[getCurrentPages().length - 1], e = "", a = {
                    appid: x.appid,
                    channel_code: x.channelCode,
                    token: encodeURIComponent(D),
                    height: x.height,
                    width: x.width,
                    device_pixel_ratio: x.devicePixelRatio,
                    os: x.os,
                    osver: x.osVersion,
                    event_type: t,
                    uid: this.data.userInfo && this.data.userInfo.yyuid || 0,
                    sys: 1,
                    time: Math.round(new Date().getTime() / 1e3),
                    source_url: i.route || i.__route__
                };
                for (var n in a) e += "&" + n + "=" + a[n];
                var s = "https://mlog.hiido.com/c.gif?act=webchanneltrack" + e;
                wx.request({
                    url: s,
                    data: "",
                    header: {
                        accept: "image/*"
                    },
                    method: "GET",
                    success: function(t) {
                        console.info("hiido success:" + t.statusCode);
                    },
                    fail: function() {
                        console.info("hiido fail");
                    }
                });
            } catch (t) {
                console.log("error", t);
            }
        },
        launchAppError: function() {
            this.setData({
                hideService: !1
            });
        },
        closeServiceToast: function(t) {
            var i = 0 == t.currentTarget.dataset.type ? "0002" : "0001";
            this.setData({
                hideService: !0
            }), o.event({
                id: "10106",
                label: i,
                params: {
                    key1: this.data.sid,
                    key2: this.data.ssid
                }
            });
        },
        getRoomActivity: function() {
            var t = this, i = d.WECHAT_YY_HOST + "/material/mat_liveAd/35";
            r(i).then(function(e) {
                !e.code && e.data && e.data.length && (t.setData({
                    activityData: e.data[0]
                }), t.triggerEvent("roomActivity", !0), o.event({
                    id: "10102",
                    label: "0001",
                    params: {
                        key1: t.data.uid,
                        key2: t.data.sid,
                        key3: t.data.ssid
                    }
                })), u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, e);
            }).catch(function(e) {
                u(i, {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, e);
            });
        },
        activityLinkClick: function(t) {
            o.event({
                id: "10102",
                label: "0002",
                params: {
                    key1: this.data.uid,
                    key2: this.data.sid,
                    key3: this.data.ssid
                }
            });
            var i = t.currentTarget.dataset;
            i.action && (100 == i.type ? wx.redirectTo({
                url: "/pages/room/room?" + i.action
            }) : wx.navigateTo({
                url: "/pages/webView/webView?url=" + i.action
            }));
        },
        connectH5Svc: function() {
            g || (l = a(), g = new l.NewH5(this.data.joinChannel.appid, this.data.joinChannel.wxAppid, !1), 
            u("创建信令通道", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid,
                appid: this.data.joinChannel.appid,
                wxAppid: this.data.joinChannel.wxAppid
            })), g.joinChannel(this.data.sid, this.data.ssid, this.data.joinChannel.appKey || null, this.data.joinChannel.token || null, !0), 
            g.setLogLevel(d.LogLevel), u("进入频道", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid,
                appKey: this.data.joinChannel.appKey,
                token: this.data.joinChannel.token
            });
        },
        longpressGongPing: function() {
            f = !0;
        },
        touchGongPingStart: function() {
            f = !0;
        },
        touchGongPingMove: function() {
            f = !0;
        },
        touchGongPingEnd: function() {
            p && clearTimeout(p), p = setTimeout(function() {
                f = !1;
            }, 5e3);
        },
        getUdbInfo: function() {
            this.setData({
                userInfo: wx.getStorageSync("udbInfo")
            });
        },
        getSystemInfo: function() {
            var t = this;
            wx.getSystemInfo({
                success: function(i) {
                    var e = "", a = void 0, n = i.model.match(/(iPhone X|iPhone XS|iPhone XR|iPhone XS max)/);
                    e = i.system.indexOf("Android") >= 0 ? "Android" : "iOS", a = !(!n || !n.length), 
                    t.setData({
                        xModel: a,
                        systemType: e
                    });
                }
            });
        },
        getuserinfo: function(t) {
            var i = this;
            if (this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: "0002"
            }), this.data.hasAccredit) return this.udbLogin(), void this.clickChatIcon();
            g ? g.wxReLogin() : this.connectH5Svc(), c.getUdbLogin(t.detail).then(function(t) {
                i.setData({
                    hasAccredit: !0,
                    userInfo: t
                }), i.udbLogin(), i.clickChatIcon(), setTimeout(function() {
                    g && s.init(g, l, d.YY_APPID, 3111, 1);
                }, 4);
            }).catch(function(t) {
                wx.showToast({
                    title: t,
                    icon: "none",
                    duration: 1500
                });
            });
        },
        getuserinfoOnRecommend: function(t) {
            var i = this;
            this.data.hasAccredit && t.detail && t.detail.userInfo ? this.triggerEvent("showRecommendPage") : (g ? g.wxReLogin() : this.connectH5Svc(), 
            c.getUdbLogin(t.detail).then(function(t) {
                i.triggerEvent("getRoomAttentionList"), i.triggerEvent("showRecommendPage"), i.setData({
                    hasAccredit: !0,
                    userInfo: t
                }), setTimeout(function() {
                    g && s.init(g, l, d.YY_APPID, 3111, 1);
                }, 4);
            }).catch(function(t) {
                wx.showToast({
                    title: t,
                    icon: "none",
                    duration: 1500
                });
            }));
        },
        udbLogin: function() {
            g.isGuestLogin() && g.login();
        },
        getuserinfoOnGiftIos: function(t) {
            var i = this;
            if (this.triggerEvent("hiidoEvent", {
                id: "10301",
                label: "0001",
                params: {
                    key1: this.data.sid,
                    key2: this.data.ssid,
                    key3: this.data.shareInfo.uid
                }
            }), !this.data.networkStatus) return wx.showToast({
                title: "网络异常",
                icon: "none"
            });
            this.data.hasAccredit || c.getUdbLogin(t.detail).then(function(t) {
                i.setData({
                    flowerGiftNum: 0
                }), i.setData({
                    hasAccredit: !0,
                    userInfo: t
                }), g && (g.leaveChannel(), g = null, i.connectH5Svc(), i.initGongpingDanmu()), 
                setTimeout(function() {
                    g && s.init(g, l, d.YY_APPID, 3111, 1), i.sendGiftIosBtnClick();
                }, 4), u("getuserinfoOnGiftIos", {
                    sid: i.data.sid,
                    ssid: i.data.ssid,
                    uid: i.data.uid
                }, "");
            });
        },
        sendGiftIosBtnClick: function() {
            if (this.triggerEvent("hiidoEvent", {
                id: "10301",
                label: "0001",
                params: {
                    key1: this.data.sid,
                    key2: this.data.ssid,
                    key3: this.data.shareInfo.uid
                }
            }), !this.data.networkStatus) return wx.showToast({
                title: "网络异常",
                icon: "none"
            });
            var t = this.data.flowerGiftNum;
            this.checksendGift(!0), u("sendGiftIosBtnClick", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid,
                showIosGiftAnimation: this.data.showIosGiftAnimation,
                flowerGiftNum: t,
                roomStatus: this.data.roomStatus
            }, ""), this.data.showIosGiftAnimation || t <= 0 || !this.data.roomStatus || this.sendFlowerHandler();
        },
        hideIosGiftTimer: function() {
            this.setData({
                showGiftTimer: !1
            });
        },
        sendFlowerHandler: function() {
            var i = wx.getStorageSync("udbInfo"), e = {
                sMaxType: 3111,
                sMinType: 3,
                num: 1,
                ssid: this.data.ssid || this.data.sid || "0",
                toId: this.data.shareInfo.uid || "0",
                extendInfo: {
                    MOBSENDFLWSEQ_FROM_NICKNAME: i.partnerNickname || "我",
                    MOBSENDFLWSEQ_TO_NICKNAME: ""
                }
            };
            n.sendFlowerHandler(g, l, 15013, e), u("send_flower", t({
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid
            }, e));
        },
        checksendGift: function(t) {
            this.data.roomStatus || wx.showToast({
                title: t ? "当前未发现主播，无法发送" : "送礼物对象不在首麦喔！",
                icon: "none"
            });
        },
        getLoginUserinfo: function() {
            var t = this;
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function() {
                            t.setData({
                                hasAccredit: !0
                            });
                        },
                        fail: function() {
                            t.setData({
                                hasAccredit: !1
                            });
                        }
                    });
                }
            });
        },
        clickChatIcon: function() {
            var t = this;
            this.setData({
                isHideChatInput: !1
            }), this.triggerEvent("fixChatInput", {
                top: -48
            }), this.triggerEvent("chatInputShowChange", !1), setTimeout(function() {
                t.setData({
                    chatFocusStatus: !0
                });
            }, this.data.ratio >= 1 ? 100 : 200);
        },
        changeDanmuInput: function(t) {
            this.setData({
                chatInputValue: t.detail.value
            });
        },
        touchmove: function() {
            this.setData({
                isHideChatInput: !0
            }), this.triggerEvent("fixChatInput", {
                top: 0
            }), this.triggerEvent("chatInputShowChange", !0);
        },
        clickSendDanmuBtn: function() {
            if (this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: "0007"
            }), this.data.chatInputValue.length <= 0 || !this.data.hasAccredit) return this.setData({
                isHideChatInput: !0,
                chatInputValue: ""
            }), void this.triggerEvent("chatInputShowChange", !0);
            if (k) return wx.showToast({
                title: "暂时被禁言了",
                icon: "none",
                duration: 1500
            }), this.setData({
                isHideChatInput: !0,
                chatInputValue: ""
            }), void this.triggerEvent("chatInputShowChange", !0);
            var t = this.data.userInfo.partnerNickname || this.data.userInfo.nickName, i = {
                response: "chat",
                from_uid: this.data.userInfo.yyuid,
                nick: t || "我",
                myTxt: this.data.chatInputValue
            };
            this.setData({
                gongpingInfo: this.data.gongpingInfo.concat(i),
                gongpingUI: {
                    scrollTop: 2e7 + 100 * Math.random(100),
                    scrollEvent: function(t) {}
                }
            }), g && this.data.userInfo.yyuid && t && (g.sendChatMsg(t, this.data.chatInputValue), 
            u("send_chat_info", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid,
                nickname: t,
                value: this.data.chatInputValue
            })), this.setData({
                isHideChatInput: !0,
                chatInputValue: ""
            }), this.triggerEvent("chatInputShowChange", !0);
        },
        gotoIndex: function() {
            this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: "0004"
            }), wx.switchTab({
                url: "/pages/index/index"
            });
        },
        gotoShare: function() {
            this.triggerEvent("hiidoEvent", {
                id: "10101",
                label: "0003"
            });
        },
        setGongpingInfo: function(t, i) {
            var e = [], a = m.length > t ? t : m.length, n = m.splice(-a), s = this.data.gongpingInfo;
            m = [], (e = (e = s.concat(n)).slice(-i)).map(function(t) {
                t.timer = Date.now();
            }), this.setData({
                gongpingInfo: e,
                gongpingUI: {
                    scrollTop: 2e7 + Math.floor(100 * Math.random(100)),
                    scrollEvent: function(t) {}
                }
            });
        },
        addCacheData: function(t) {
            m = m.concat(t);
        },
        updatedGongPing: function(t, i, e) {
            var a = this, n = Date.now(), s = t - (n - I);
            if (s > 0) return clearTimeout(v), void (v = setTimeout(function() {
                a.updatedGongPing(t, i, e);
            }, s));
            I = n, v && clearTimeout(v), this.setGongpingInfo(i, e);
        },
        initGongpingDanmu: function() {
            var t = this, a = wx.getStorageSync("udbInfo");
            i.init({
                roomStatus: this.data.roomStatus,
                topSid: this.data.sid,
                subSid: this.data.ssid,
                uid: this.data.uid,
                systemType: this.data.systemType,
                userInfo: a,
                joinChannel: this.data.joinChannel,
                h5: g,
                svc: l,
                context: this
            }, function(i) {
                if (i.text.sysInfo || i.text.userInfo) return i = t.data.gongpingInfo.concat(i), 
                void t.setData({
                    gongpingInfo: i,
                    gongpingUI: {
                        scrollTop: 2e7 + Math.floor(100 * Math.random(100)),
                        scrollEvent: function(t) {}
                    }
                });
                if (t.data.ratio >= 1) {
                    if (f && a.yyuid != i.text.uid) return;
                    t.addCacheData(i), t.updatedGongPing(1e3, 3, 50);
                } else t.addCacheData(i), t.updatedGongPing(200, 2, 5);
            }, function(t) {
                e.accept(t);
            }, function(i) {
                t.triggerEvent("uidChange", i), u("轮麦主播变化", {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, i);
            }, function(i) {
                t.triggerEvent("usercountChange", i);
            }, function(i) {
                t.setLinkMicInfo(i), y = !!i.uid;
            }, function(t) {
                console.log("麦序为空是的type:", t);
            }, function(t) {
                k = t;
            }, function(t) {
                wx.showToast({
                    title: t,
                    icon: "none",
                    duration: 1500
                });
            }, function() {}, function(i) {
                t.freeFlowerInfoResp(i);
            }, function(i) {
                t.sendFlowRsp(i);
            }, function(i) {
                t.triggerEvent("updateNobleNum", i), u("updateNobleNum", {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, i);
            }, function(i) {
                t.formatHappyFightInfo(i);
            }, function(i) {
                i && t.triggerEvent("limitChannal", !0), u("limitChannal", {
                    sid: t.data.sid,
                    ssid: t.data.ssid,
                    uid: t.data.uid
                }, i);
            });
        },
        freeFlowerInfoResp: function(t) {
            this.setData({
                isGiftReady: !0,
                flowerGiftNum: t.flwOwnedNums
            }), b = t.flwIncSecs;
            var i = t.flwIncSecs - t.flwRemainSecs;
            t.flwOwnedNums < 3 && this.timerOutGetFlowerNum(i), 0 == t.flwOwnedNums && (this.triggerEvent("showGiftTimerChange", {
                show: !0,
                time: i
            }), this.setData({
                showGiftTimer: !0
            })), u("freeFlowerInfoResp", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid
            }, t);
        },
        sendFlowRsp: function(t) {
            var i = this, e = void 0;
            240007 == t.result || 240008 == t.result ? (e = this.data.flowerGiftNum, e = e ? e - 1 : 0) : (e = t.flwOwnedNums, 
            this.triggerEvent("hiidoEvent", {
                id: "10301",
                label: "0009",
                params: {
                    key1: this.data.sid,
                    key2: this.data.ssid,
                    key3: this.data.shareInfo.uid
                }
            }));
            var a = b - t.flwRemainSecs;
            this.setData({
                flowerGiftNum: e,
                showIosGiftAnimation: !0
            }), setTimeout(function() {
                var t = !1;
                e <= 0 && (t = !0, i.triggerEvent("showGiftTimerChange", {
                    show: !0,
                    time: a
                })), i.setData({
                    showIosGiftAnimation: !1,
                    showGiftTimer: t
                });
            }, 1e3), this.timerOutGetFlowerNum(a), u("send_flower_response", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid
            }, t);
        },
        formatHappyFightInfo: function(t) {
            var i = {}, e = t.extendsInfo;
            clearInterval(S), 1 == t.state && (4 == t.type || 5 == t.type || 6 == t.type) ? (i.leftInfo = {
                uid: t.luid,
                nick: t.lnick,
                head_url: t.lhead_url,
                num: t.lnum,
                blood: this.formatBlood(t.type, t.lnum, t.lnum + t.rnum),
                txt: "我方",
                sid: t.ltopcid,
                ssid: t.lsubcid
            }, i.rightInfo = {
                uid: t.ruid,
                nick: t.rnick,
                head_url: t.rhead_url,
                num: t.rnum,
                blood: this.formatBlood(t.type, t.rnum, t.lnum + t.rnum),
                txt: "对方",
                sid: t.rtopcid,
                ssid: t.rsubcid
            }, i.totalNum = t.lnum + t.rnum, i.lefttime = t.ltime, i.type = t.type, 1 == e.avgMod ? (i.leftInfo.txt = "我方复仇", 
            i.rightInfo.txt = "对方守卫") : 2 == e.avgMod && (i.leftInfo.txt = "我方守卫", i.rightInfo.txt = "对方复仇"), 
            4 == t.type ? i.txt = "准备" : 5 == t.type ? (i.txt = "PK", 1 != e.avgMod && 2 != e.avgMod || (i.txt = "复仇")) : 6 == t.type && (i.txt = "惩罚", 
            i.pkResult = this.effectTypeV2(t)), this.setHappyFightStatus(!0), this.setLinkMicInfo(i.rightInfo), 
            this.happyFightLeftTime(t.ltime), this.setData({
                happyFightInfo: i
            })) : (this.setHappyFightStatus(!1), y || this.setLinkMicInfo({})), u("formatHappyFightInfo", {
                sid: this.data.sid,
                ssid: this.data.ssid,
                uid: this.data.uid
            }, t);
        },
        setLinkMicInfo: function(t) {
            this.triggerEvent("linkMicInfo", t);
        },
        setHappyFightStatus: function(t) {
            this.setData({
                ishappyFight: t
            });
        },
        formatBlood: function(t, i, e) {
            return 4 == t ? 1 : 0 == i && 0 == e ? 50 : i / e * 100;
        },
        happyFightLeftTime: function(t) {
            var i = this;
            S && clearInterval(S), C && clearTimeout(C), this.setData({
                happyFightRemainTime: t
            }), S = setInterval(function() {
                t < 0 ? (clearInterval(S), C = setTimeout(function() {
                    i.setHappyFightStatus(!1);
                }, 6e3)) : i.setData({
                    happyFightRemainTime: t--
                });
            }, 1e3);
        },
        effectTypeV2: function(t) {
            var i, e = {}, a = t.extendsInfo;
            switch (i = t.lnum > t.rnum ? 1 == a.avgMod ? 4 : 2 == a.avgMod ? 6 : 1 : t.lnum == t.rnum ? 1 == a.avgMod ? 8 : 2 == a.avgMod ? 9 : 2 : 1 == a.avgMod ? 5 : 2 == a.avgMod ? 7 : 3, 
            i) {
              case 1:
                e = {
                    leftPng: "win",
                    leftState: "胜利",
                    rightPng: "failed",
                    rightState: "失败"
                };
                break;

              case 2:
                e = {
                    leftPng: "dogfall",
                    leftState: "平局",
                    rightPng: "dogfall",
                    rightState: "平局"
                };
                break;

              case 3:
                e = {
                    leftPng: "failed",
                    leftState: "失败",
                    rightPng: "win",
                    rightState: "胜利"
                };
                break;

              case 4:
                e = {
                    leftPng: "revenge-win",
                    leftState: "复仇胜利",
                    rightPng: "guard-failed",
                    rightState: "守卫失败"
                };
                break;

              case 5:
                e = {
                    leftPng: "revenge-failed",
                    leftState: "复仇失败",
                    rightPng: "guard-win",
                    rightState: "守卫成功"
                };
                break;

              case 6:
                e = {
                    leftPng: "guard-win",
                    leftState: "守卫胜利",
                    rightPng: "revenge-failed",
                    rightState: "复仇失败"
                };
                break;

              case 7:
                e = {
                    leftPng: "guard-failed",
                    leftState: "守卫失败",
                    rightPng: "revenge-win",
                    rightState: "复仇胜利"
                };
                break;

              case 8:
                e = {
                    leftPng: "revenge-failed",
                    leftState: "复仇失败",
                    rightPng: "guard-failed",
                    rightState: "守卫失败"
                };
                break;

              case 9:
                e = {
                    leftPng: "guard-failed",
                    leftState: "守卫失败",
                    rightPng: "revenge-failed",
                    rightState: "复仇失败"
                };
            }
            return e;
        },
        onUpdateEncodedChannel: function(t) {
            this.triggerEvent("updateEncodedChannel", t);
        },
        timerOutGetFlowerNum: function(t) {
            w && clearTimeout(w), w = setTimeout(function() {
                s.init(g, l, d.YY_APPID, 3111, 1);
            }, 1e3 * t);
        },
        initGongpingCombo: function() {
            var t = this, i = null, a = null;
            e.init(function(a) {
                t.setData({
                    sourceA: a
                }), i && clearTimeout(i), i = setTimeout(function() {
                    a.start = !1, a.end = !0, t.setData({
                        sourceA: a
                    }), e.dataA = {}, e.checkShotAgain();
                }, 2e3);
            }, function(i) {
                t.setData({
                    sourceB: i
                }), a && clearTimeout(a), a = setTimeout(function() {
                    i.start = !1, i.end = !0, t.setData({
                        sourceB: i
                    }), e.dataB = {}, e.checkShotAgain();
                }, 2e3);
            });
        }
    }
});