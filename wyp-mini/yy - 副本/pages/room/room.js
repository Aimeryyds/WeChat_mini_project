var t, e, a, i = getApp(), s = require("../../utils/hdweapp.js"), n = require("../../utils/md5.js"), o = require("../../utils/paramConfig.js").ParamConfig, d = require("../../utils/request.js"), h = d.RequestGet, r = d.AddCloudLog, c = "", u = 0, l = [], g = null, f = 360, m = 300, p = void 0;

Page({
    data: {
        statusBarHeight: 0,
        sid: 0,
        ssid: 0,
        uid: 0,
        sharedOid: 0,
        userUid: 0,
        usercount: 0,
        gongpingHeight: 0,
        fixedChatPosition: 0,
        ratio: 1,
        fixedPlayerPosition: "-56rpx",
        snapshot: "",
        systemInfo: null,
        isLeavePage: !1,
        shareInfo: {},
        queryParams: {},
        statusBar: {
            title: "YY直播",
            isRoom: !0
        },
        slideInfo: {
            isSlide: !0
        },
        changePlayerBg: "",
        playerHeight: "240px",
        isLoading: !0,
        prevPlayer: !1,
        xModel: null,
        portraiSlideBottom: 260,
        nextPlayer: !1,
        recommendList: [],
        isResetPlayer: !1,
        hasReady: !1,
        iosGiftTime: "",
        roomStatus: !1,
        showIosGiftTimer: !1,
        isHideChatInput: !0,
        isRatioReady: !1,
        isEncodedChannel: !1,
        channelPasswd: "",
        isFirstEnterRoom: !1,
        roomRecommendTipsTxt: "",
        networkStatus: !0,
        nobleNum: 0,
        linkMicInfo: {},
        isAndroid: !1,
        hideRoomRecommendTipsTxt: !1,
        showInvite: !1,
        limitChannal: !1
    },
    gotoOtherPrograme: function() {
        wx.setStorageSync("pushed", !0), wx.setStorageSync("clicked", !0), wx.navigateToMiniProgram({
            appId: "wxd0c69d4a2e2fb8ee"
        });
    },
    checkRoomStatus: function(t, e) {
        var a = this, i = o.WAP_COM_HOST + "/mobileweb/play/checkChannelOnline?sid=" + t + "&ssid=" + e;
        return h(i).then(function(t) {
            if (0 == t.code) {
                var e = t.data[0];
                a.setData({
                    roomStatus: !!e
                });
            } else a.setData({
                roomStatus: !1
            });
            return r(i, {
                sid: t.data[0].topCid,
                ssid: t.data[0].subCid,
                uid: t.data[0].uid
            }, t.code), t.data[0];
        }).catch(function(s) {
            a.setData({
                roomStatus: !1
            }), r(i, {
                sid: t,
                ssid: e
            }, s);
        });
    },
    hiidoRoomInfo: function(t) {
        s.event({
            id: "10101",
            label: t,
            params: {
                key2: this.data.sid || "",
                key3: this.data.ssid || "",
                key4: this.data.uid || ""
            }
        });
    },
    onGoToback: function() {
        this.hiidoRoomInfo("0008");
    },
    onGoToIndex: function() {
        this.hiidoRoomInfo("0009");
    },
    setPageLoading: function() {
        var t = this;
        g && clearTimeout(g), g = setTimeout(function() {
            t.setData({
                isEncodedChannel: !1
            }), t.updatePageLoading();
        }, 3e3);
    },
    onHidePageLoading: function() {
        g && clearTimeout(g), this.updatePageLoading();
    },
    updatePageLoading: function() {
        var t = this;
        this.getRect(), this.setData({
            isLoading: !!this.data.isEncodedChannel,
            snapshot: ""
        }), this.judgeIsFirstEnter() && setTimeout(function() {
            wx.setStorageSync("isFirstEnterRoom", 1), t.setData({
                isFirstEnterRoom: !1
            });
        }, 3e3);
    },
    onUpdateEncodedChannel: function(t) {
        g && clearTimeout(g), this.setData({
            isEncodedChannel: t.detail
        });
    },
    inputPasswd: function(t) {
        this.setData({
            channelPasswd: t.detail.value
        });
    },
    cancleCheck: function() {
        var t = getCurrentPages().length;
        t && t >= 2 ? wx.navigateBack({
            delta: 1,
            fail: function() {
                wx.getLogManager(1).warn("返回上一层的接口调用失败");
            }
        }) : wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    checkPasswd: function() {
        if (this.data.channelPasswd) {
            var t = n(this.data.channelPasswd);
            this.requestPasswd(t);
        } else wx.showToast({
            title: "请输入密码" + this.data.channelPasswd,
            icon: "none"
        });
    },
    requestPasswd: function(t) {
        var e = this, a = o.MINIAPP_YY_HOST + "/mini/channel/check-passwd/" + this.data.sid + "/" + this.data.ssid + "?password=" + t;
        h(a).then(function(i) {
            i.data ? e.setData({
                channelPasswd: "",
                isEncodedChannel: !1,
                isLoading: !1
            }) : wx.showToast({
                title: "密码错误请重新输入",
                icon: "none"
            }), r(a, {
                sid: e.data.sid,
                ssid: e.data.ssid,
                uid: e.data.uid,
                passwd: t
            }, i.data), wx.getLogManager(1).log("room.requestPasswd 查询密码结果：", i.data, "sid:", e.data.sid, "ssid:", e.data.ssid);
        }).catch(function(i) {
            wx.showToast({
                title: "密码查询出错，请重新操作",
                icon: "none"
            }), wx.getLogManager(1).log("room.requestPasswd 查询密码失败err：", i, "sid:", e.data.sid, "ssid:", e.data.ssid), 
            r(a, {
                sid: e.data.sid,
                ssid: e.data.ssid,
                uid: e.data.uid,
                passwd: t
            }, i);
        });
    },
    animations: function(t, e, a) {
        var i = wx.createAnimation({
            duration: e,
            timingFunction: "ease-in-out"
        });
        this.animation = i, this.fadeDown(t, a);
    },
    fadeDown: function(t, e) {
        this.animation.top(t + "rpx").step(), this.setData({
            animationData: this.animation.export()
        });
    },
    touchstart: function(i) {
        e = i.timeStamp, t = i.changedTouches.length && i.changedTouches[0].pageY, a = i.changedTouches.length && i.changedTouches[0].pageX;
    },
    touchmove: function(e) {
        var i = e.changedTouches[0].pageY - t, s = e.changedTouches[0].pageX - a, n = !1;
        s <= 0 && Math.abs(s) > Math.abs(i) && (n = !0), i > 0 && !n && (!this.data.nextPlayer && this.animations(f, m, "top"), 
        i > 30 && !this.data.prevPlayer && !this.data.nextPlayer && this.setData({
            prevPlayer: !0,
            nextPlayer: !1
        })), i < 0 && !n && (i < -30 && !this.data.nextPlayer && !this.data.prevPlayer && this.setData({
            nextPlayer: !0,
            prevPlayer: !1
        }), !this.data.prevPlayer && this.animations(-f, m, "bottom"));
    },
    touchend: function(i) {
        var s = i.timeStamp - e, n = i.changedTouches[0].pageX - a, o = Math.abs(i.changedTouches[0].pageY - t);
        if (n <= 0 && Math.abs(n) > Math.abs(o)) return this.showRecommendPage();
        if (this.animations(0, 10, "top"), this.hiidoRoomInfo("0010"), s < 2e3 && o > 30 && !this.data.isLoading) {
            this.hiidoRoomInfo("0011"), this.setData({
                isLoading: !0,
                prevPlayer: !1,
                nextPlayer: !1
            }), this.setPageLoading();
            var d = this.selectComponent("#yylivePlayer");
            d && d.stopPlayOtherLeaveTimer(), i.changedTouches[0].pageY - t > 0 ? this.prevLive() : this.nextLive();
        }
    },
    prevLive: function() {
        var t = this.data.sid;
        this.changeLive(t, "prev");
    },
    nextLive: function() {
        var t = this.data.sid;
        this.changeLive(t, "next");
    },
    changeLive: function(t, e) {
        var a = this;
        u = u || 0, (u = "prev" == e ? u - 1 : u + 1) < 0 || u > l.length - 1 ? this.data.recommendList.length ? this.setRecommendList(e) : this.reqShakeList(function() {
            a.setRecommendList(e);
        }) : this.resetVideoInfo(u, l);
    },
    reqShakeList: function(t) {
        var e = this, a = o.WECHAT_YY_HOST + "/shake/index/idx";
        h(a).then(function(i) {
            if (0 == i.code && i.data.length) {
                var s = i.data;
                e.setData({
                    recommendList: s || []
                }), r(a, {
                    sid: e.data.sid,
                    ssid: e.data.ssid,
                    uid: e.data.uid
                }, i.data.length);
            } else r(a, {
                sid: e.data.sid,
                ssid: e.data.ssid,
                uid: e.data.uid
            }, i);
            t && "function" == typeof t && t();
        }).catch(function(t) {
            r(a, {
                sid: e.data.sid,
                ssid: e.data.ssid,
                uid: e.data.uid,
                passwd: passwd
            }, t);
        });
    },
    showRecommendPage: function() {
        var t = this.data.shareInfo, e = this.data.changePlayerBg;
        wx.navigateTo({
            url: "/pages/room-recommend/room-recommend?sid=" + t.sid + "&ssid=" + t.ssid + "&uid=" + t.uid + "&snapshot=" + e
        });
    },
    setRecommendList: function(t) {
        var e = this.data.recommendList, a = void 0;
        if ((u < 0 || u > l.length - 1) && (a = u < 0 ? u + 1 == 0 ? 0 : -(u + 1) : e.length - 1 - (u - l.length)), 
        a > e.length - 1 || a < 0) return wx.showToast({
            title: "没有更多数据了~"
        }), void (u = "prev" == t ? u + 1 : u - 1);
        this.resetVideoInfo(a, e);
    },
    resetVideoInfo: function(t, e) {
        var a = this, i = e[t];
        this.checkRoomStatus(i.sid, +i.ssid || i.sid).then(function(t) {
            if (t) {
                var e = t.uid, s = t.topCid, n = t.subCid, o = {
                    sid: s || "",
                    ssid: n || s || "",
                    snapshot: i.img || "",
                    changePlayerBg: i.img || "",
                    uid: i.uid || e || ""
                };
                a.updateVideoInfo(o);
            } else {
                var d = {
                    sid: i.sid || "",
                    ssid: +i.ssid || i.sid || "",
                    snapshot: i.img || "",
                    changePlayerBg: i.img || "",
                    uid: i.uid || ""
                };
                a.updateVideoInfo(d);
            }
        }).catch(function(t) {
            var e = {
                sid: i.sid || "",
                ssid: +i.ssid || i.sid || "",
                snapshot: i.img || "",
                changePlayerBg: i.img || "",
                uid: i.uid || ""
            };
            a.updateVideoInfo(e);
        });
        var s = this.selectComponent("#yylivePlayer");
        s && s.stopPlayOtherLeaveTimer();
    },
    updateVideoInfo: function(t) {
        this.setData({
            isLeavePage: !0,
            sid: t.sid || 0,
            ssid: t.ssid || 0,
            uid: t.uid || 0,
            changePlayerBg: t.changePlayerBg,
            snapshot: t.snapshot || "",
            nobleNum: 0,
            linkMicInfo: {}
        });
    },
    onLimitChannal: function() {
        this.setData({
            limitChannal: !0
        });
    },
    onHiidoEvent: function(t) {
        var e = t.detail;
        s.event(e);
    },
    onHiidoSetUid: function(t) {
        s.setUid(t.detail);
    },
    onFixChatInput: function(t) {
        var e = t.detail.top;
        this.data.ratio < 1 && this.setData({
            fixedChatPosition: e
        });
    },
    onRoomActivity: function(t) {
        var e = this.data.xModel ? 260 : 210;
        t.detail && (e += 300), this.setData({
            portraiSlideBottom: e
        });
    },
    onLinkMicInfo: function(t) {
        this.setData({
            linkMicInfo: t.detail
        });
    },
    onUpdateSnapshot: function(t) {},
    onUpdateLiveTitle: function(t) {
        var e = this.data.statusBar, a = {
            title: t.detail.title,
            isRoom: e.isRoom
        };
        this.setData({
            statusBar: a
        });
    },
    onSetRatio: function(t) {
        this.setData({
            ratio: t.detail.ratio,
            fixedPlayerPosition: t.detail.ratio >= 1 ? "-56rpx" : "0rpx",
            isRatioReady: !0
        });
    },
    onUidChange: function(t) {
        this.setData({
            uid: t.detail
        });
    },
    onUsercountChange: function(t) {
        this.setData({
            usercount: t.detail
        });
    },
    onShareInfoChange: function(t) {
        this.setData({
            shareInfo: t.detail,
            uid: t.detail.uid || ""
        });
    },
    onUpdateNobleNum: function(t) {
        this.setData({
            nobleNum: t.detail
        });
    },
    onPlayerRectChange: function(t) {
        var e = t.detail.playerHeight;
        this.setData({
            playerHeight: e
        }), this.getRect();
    },
    getRect: function() {
        var t = this;
        try {
            wx.createSelectorQuery().select("#yylivePlayer").boundingClientRect(function(e) {
                t.setData({
                    gongpingHeight: e && e.bottom ? t.data.systemInfo.windowHeight - e.bottom : 240
                });
            }).exec();
        } catch (t) {
            this.setData({
                gongpingHeight: 240
            });
        }
    },
    getSystemInfo: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = void 0, i = e.model.match(/(iPhone X|iPhone XS|iPhone XR|iPhone XS max)/), s = e.system.indexOf("Android") >= 0;
                a = !(!i || !i.length), t.setData({
                    systemInfo: e,
                    xModel: a,
                    isAndroid: s,
                    statusBarHeight: e.statusBarHeight || 0
                });
            }
        });
    },
    onSetSlideInfo: function(t) {
        var e = t.topCid, a = t.subCid, s = t.snapshot, n = {
            sid: e || "",
            ssid: a || e || "",
            snapshot: s || ""
        };
        u = i.globalData.changeIndex ? i.globalData.changeIndex : 0, l = null !== i.globalData.changeIndex && void 0 !== i.globalData.changeIndex && i.globalData.changeList ? i.globalData.changeList : [ n ];
    },
    onGetOpenId: function() {
        i.getOpenId();
    },
    onRestSlideInfo: function() {
        i.globalData.changeIndex = null;
    },
    judgeIsFirstEnter: function() {
        return 1 != wx.getStorageSync("isFirstEnterRoom");
    },
    getRecommendTips: function() {
        var t = this, e = void 0;
        e = this.judgeIsFirstEnter();
        var a = o.WECHAT_YY_HOST + "/recommend/tips";
        h(a).then(function(i) {
            !i.code && i.data && (t.setData({
                roomRecommendTipsTxt: i.data,
                isFirstEnterRoom: e
            }), i.data && e && s.event({
                id: "10103",
                label: "0002",
                params: {
                    key1: t.data.shareInfo ? t.data.shareInfo.uid : "",
                    key2: t.data.sid,
                    key3: t.data.ssid
                }
            })), r(a, {
                sid: t.data.sid,
                ssid: t.data.ssid,
                uid: t.data.uid
            }, i);
        }).catch(function(i) {
            t.setData({
                isFirstEnterRoom: e
            }), r(a, {
                sid: t.data.sid,
                ssid: t.data.ssid,
                uid: t.data.uid
            }, i);
        });
    },
    roomRecommendShowEvent: function() {
        s.event({
            id: "10103",
            label: "0001",
            params: {
                key1: this.data.shareInfo ? this.data.shareInfo.uid : "",
                key2: this.data.sid,
                key3: this.data.ssid
            }
        });
    },
    activityLinkClick: function(t) {
        s.event({
            id: "10102",
            label: "0002",
            params: {
                key1: this.data.shareInfo ? this.data.shareInfo.uid : "",
                key2: this.data.sid,
                key3: this.data.ssid
            }
        });
        var e = t.currentTarget.dataset;
        e.action && (100 == e.type ? wx.redirectTo({
            url: "/pages/room/room?" + e.action
        }) : wx.navigateTo({
            url: "/pages/webView/webView?url=" + e.action
        }));
    },
    onLoad: function(t) {
        var e = this;
        c = t.ref;
        var a = "";
        if (t.snapshot && (a = decodeURIComponent(t.snapshot)), this.setData({
            queryParams: t,
            sharedOid: t.sharedOid || 0,
            userUid: t.userUid || 0
        }), t.sid) this.checkRoomStatus(t.sid, +t.ssid || t.sid).then(function(i) {
            if (i) {
                var s = i.uid, n = i.topCid, o = i.subCid;
                e.setData({
                    sid: n || "",
                    ssid: o || n || "",
                    uid: s || ""
                }), e.onSetSlideInfo({
                    topCid: n,
                    subCid: o,
                    snapshot: a
                });
            } else e.setData({
                sid: t.sid || "",
                ssid: +t.ssid || t.sid || "",
                uid: t.uid || ""
            }), e.onSetSlideInfo({
                topCid: t.sid,
                subCid: +t.ssid || t.sid,
                snapshot: a
            });
        }).catch(function(i) {
            e.setData({
                sid: t.sid || "",
                ssid: +t.ssid || t.sid || "",
                uid: t.uid || ""
            }), e.onSetSlideInfo({
                topCid: t.sid,
                subCid: +t.ssid || t.sid,
                snapshot: a
            });
        }); else {
            var n = this.selectComponent("#yylivePlayer");
            n && n.playEndHandler("end", 4);
        }
        this.setPageLoading(), this.getSystemInfo(), this.getRecommendTips(), this.setData({
            changePlayerBg: a,
            snapshot: a
        }), s.Page.init(), i.reportChnInfo(t), c && s.event({
            id: "10201",
            label: "0001",
            params: {
                key1: t.sid || "",
                key2: t.ssid || "",
                key3: this.data.uid || "",
                key4: c
            }
        }), wx.setKeepScreenOn({
            keepScreenOn: !0
        }), wx.onMemoryWarning(function() {
            wx.getLogManager(1).log("room wx.onMemoryWarning 内存不足");
        });
    },
    onReady: function() {
        this.setData({
            hasReady: !0
        });
    },
    beginCanvasTimer: function(t) {
        var e = this, a = t;
        t = t || 300;
        var i = 1;
        this.setData({
            iosGiftTime: t
        }), t--, p && clearInterval(p), p = setInterval(function() {
            e.drawCanvas(a, i), e.setData({
                iosGiftTime: t
            }), i++, --t < 0 && (i = 1, clearInterval(p), e.closeIosGiftTimer(), e.setData({
                showIosGiftTimer: !1
            }));
        }, 1e3);
    },
    drawCanvas: function(t, e) {
        var a = 2 * (300 - t + e) / 300, i = wx.createCanvasContext("iosGiftCanvas");
        i.arc(20, 20, 18, -.5 * Math.PI, (a - .5) * Math.PI, !1), i.setFillStyle("transparent"), 
        i.setLineWidth(2), i.setLineCap("round"), i.setStrokeStyle("#fd0"), i.fill(), i.stroke(), 
        i.draw();
    },
    onGiftTimerChange: function(t) {
        this.setData({
            showIosGiftTimer: t.detail.show
        }), t.detail.show && this.beginCanvasTimer(t.detail.time);
    },
    onChatInputShowChange: function(t) {
        this.setData({
            isHideChatInput: t.detail
        });
    },
    showNoFlowerTips: function() {
        wx.showToast({
            title: "鲜花积累中，请稍后",
            icon: "none"
        });
    },
    closeIosGiftTimer: function() {
        var t = this.selectComponent("#gongping");
        t && t.hideIosGiftTimer();
    },
    onShow: function() {
        wx.getStorageSync("clicked") ? this.setData({
            showInvite: !1
        }) : wx.getStorageSync("showpush") && this.setData({
            showInvite: !0
        }), i.getOpenId(), this.setPageLoading(), wx.onNetworkStatusChange(this.netWorkStatusChange);
    },
    onHide: function() {},
    resetInfo: function() {
        u = 0, l = [], f = 360, m = 300;
    },
    onUnload: function() {
        this.resetInfo(), this.setData({
            isLeavePage: !0
        }), this.onRestSlideInfo(), p && clearInterval(p), g && clearInterval(g);
    },
    netWorkStatusChange: function(t) {
        this.setData({
            networkStatus: t.isConnected
        });
    },
    onShareAppMessage: function() {
        var t = wx.getStorageSync("HDSDK_openid") || "", e = wx.getStorageSync("origin_channel") || "wx_miniapp", a = this.data.shareInfo, i = encodeURIComponent("/pages/room/room?father_openId=" + t + "&origin_channel=" + e + "&sid=" + a.sid + "&uid=" + a.uid + "&ssid=" + a.ssid + "&snapshot=" + encodeURIComponent(a.snapshot));
        return {
            title: a.liveDesc || "YY直播",
            path: "/pages/index/index?father_openId=" + t + "&origin_channel=" + e + "&url=" + i,
            imageUrl: a.snapshot
        };
    }
});