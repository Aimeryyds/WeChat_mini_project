function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    a.default.requestAnimationFrame(t), i.default.update(e);
}

var n, o, i = e(require("../../287BA2A48A740DDF4E1DCAA3EF2DC841.js")), a = e(require("../../B54465E28A740DDFD3220DE5DAFCC841.js")), s = require("../../14E98D478A740DDF728FE5401BCCC841.js"), r = require("../../436428478A740DDF250240407F3DC841.js"), l = getApp(), u = !1, c = !1, g = 0, d = l.globalData.windowWidth / 4, f = void 0, h = void 0, p = !1;

Page({
    data: {
        navTopBackShow: !1,
        navTxtStr: "个人中心",
        navHeight: l.globalData.navStatusbarHeight + l.globalData.navTopHeight,
        userHead: "./../../images/default_header.png",
        userName: "hi,欢迎您",
        platForm: l.globalData.platform,
        userId: "",
        level: 0,
        totalExp: "",
        progressPercent: 0,
        iconUrl: "./../../images/live/live_grade_stars.png",
        backgroundcolor: "#FB9700",
        signCanShow: !1,
        electAnchor: [],
        showCon: "",
        isLogin: !1,
        dingyueNum: 0
    },
    onLoad: function(e) {
        h = this.selectComponent("#login");
    },
    getSetting: function() {
        wx.getSetting({
            success: function(e) {
                console.log("getSetting==success==", e);
            },
            fail: function(e) {
                console.log("getSetting==fail==", e);
            },
            complete: function(e) {
                console.log("getSetting==complete\t==", e);
            }
        });
    },
    getAuthor: function(e) {
        var t = this;
        t.setData({
            isLogin: !0
        }), t.getInfo(), p = !0, t.signCanShowIs(), t.freshVideo(), t.getTokensAccount(), 
        t.wechatQuerySubscription(), f = setTimeout(function() {
            t.setData({
                showCon: "toTop"
            }), clearTimeout(f);
        }, 1e3);
    },
    freshVideo: function() {
        var e = this, t = [];
        if ((t = r.getElectAnchor(l.globalData.homelist)) && t.length > 4) t = t.slice(0, 4); else if (!l.globalData.homelist || l.globalData.homelist.length <= 4) t = l.globalData.homelist; else {
            l.globalData.homelist && l.globalData.homelist.length;
            t = t.concat(l.globalData.homelist), t = (t = e.dealrepeat(t)).slice(0, 4);
        }
        e.setData({
            electAnchor: t
        });
    },
    dealrepeat: function(e) {
        var t = {};
        return e = e.reduce(function(e, n) {
            return t[n.player_id] || (t[n.player_id] = e.push(n)), e;
        }, []);
    },
    onReady: function() {
        this.signInCon = this.selectComponent("#signInCon"), a.default.requestAnimationFrame(t);
    },
    onShow: function() {
        var e = this;
        return n = wx.getStorageSync("wxGetUserInfoAuth"), o = wx.getStorageSync("wxPhoneAuth"), 
        e.signInCon || (e.signInCon = e.selectComponent("#signInCon")), n && o ? (e.setData({
            isLogin: !0
        }), p ? (e.getTokensAccount(), e.getInfo(), e.wechatQuerySubscription()) : (p = !0, 
        e.getInfo(), e.getTokensAccount(), e.signCanShow(), e.freshVideo(), e.wechatQuerySubscription(), 
        f = setTimeout(function() {
            e.setData({
                showCon: "toTop"
            }), clearTimeout(f);
        }, 1e3)), void (u && (u = !1, e.signInCon.onSign()))) : (e.setData({
            isLogin: !1
        }), !1);
    },
    onHide: function() {},
    onUnload: function() {
        clearTimeout(f);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        var t = l.globalData.qudao;
        return console.log("mine=share=success=", t), {
            title: s.randomShareTitle(),
            path: "/pages/home/home?userName=" + l.currentUser.uid + "&channelid=" + t,
            imageUrl: s.randomShareImage(),
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        };
    },
    signCanShowIs: function() {
        var e = this;
        s.canSmallGainSignGift(), s.canSmallGainSignGiftCallBack = function(t) {
            1 == t.data.result ? (l.globalData.canSign = !1, e.setData({
                signCanShow: !1
            })) : (l.globalData.canSign = !0, e.setData({
                signCanShow: !0
            }), s.isReceiveGiftToday(), s.isReceiveGiftTodayCallBack = function(t) {
                1 != t.data.result && e.signInCon.showSign(t);
            });
        };
    },
    signCanShow: function() {
        var e = this;
        if (l.globalData.canSign) {
            e.setData({
                signCanShow: !0
            });
            var t = r.formateTime(new Date());
            wx.getStorageSync("closeSignTime") != t && (s.isReceiveGiftToday(), s.isReceiveGiftTodayCallBack = function(t) {
                1 != t.data.result && e.signInCon.showSign(t);
            });
        } else e.setData({
            signCanShow: !1
        });
    },
    oncloseSign: function(e) {
        if (e.detail.signCloseClick) {
            var t = r.formateTime(new Date());
            wx.setStorageSync("closeSignTime", t);
        }
    },
    onSignShow: function() {
        this.signInCon.onSignShow();
    },
    onSignShare: function(e) {
        u = e.detail.signShareClick;
    },
    getTokensAccount: function() {
        var e = this, t = Date.parse(new Date()), n = {
            api_key: l.opApiKey,
            v: "1",
            call_id: t,
            session_key: l.currentUser.session_key,
            client_info: l.client_info
        }, o = s.getsign(n);
        n.sig = o, wx.request({
            url: l.apiurl + "token/getTokensAccount",
            data: n,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                if (t.data.TokensAccountResponse) {
                    var n = parseInt(t.data.TokensAccountResponse.tokensAmount);
                    e.setData({
                        tokensAmount: n
                    });
                }
            }
        });
    },
    getInfo: function() {
        var e = this, t = {};
        if (l.currentUser.session_key) {
            var n = Date.parse(new Date()), t = {
                api_key: l.opApiKey,
                v: "1",
                client_info: l.client_info,
                session_key: l.currentUser.session_key,
                call_id: n,
                uid: l.currentUser.uid,
                type: "17179869184"
            }, o = s.getsign(t);
            t.sig = o, wx.request({
                url: l.apiurl + "profile/getInfo",
                data: t,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(t) {
                    e.setData({
                        userHead: t.data.head_url,
                        userName: t.data.user_name,
                        userId: t.data.user_id
                    }), e.getUserLevel(t);
                },
                fail: function(e) {}
            });
        }
    },
    getUserLevel: function(e) {
        var t = this, n = e.data.userStarLevelInfoMessage, o = (n.step, n.level), i = n.totalExp, a = [ 0, 60, 120, 180, 300, 450, 650, 950, 1350, 1850, 2500, 3300, 4300, 5500, 6900, 8500, 10300, 12300, 14550, 17050, 20050, 23400, 27100, 31200, 35700, 40600, 46e3, 51950, 58500, 65700, 73600, 82300, 91900, 102450, 114050, 126850, 140900, 156350, 173350, 192050, 212550, 235150, 260050, 287450, 317550, 350650, 387100, 427200, 471300, 519800, 573150, 631850, 696450, 767450, 845550, 931450, 1025950, 1129950, 1244350, 1370150, 1508550, 1660800, 1828300, 2012500, 2215100, 2438e3, 2683200, 2952900, 3249600, 3575950, 3934950, 4329950, 4764350, 5242150, 5767750, 6345850 ], s = a[o] - a[o - 1], l = i - a[o - 1];
        t.setData({
            level: o,
            totalExp: l + "/" + s,
            progressPercent: l / s * 100
        });
        var u = r.getLevelMsg(t.data.level);
        t.setData({
            iconUrl: u.iconUrl,
            backgroundcolor: u.backgroundcolor
        });
    },
    toPayment: function() {
        if (!this.onLogin()) return !1;
        l.aldstat.sendEvent("个人中心点击充值", "充值"), wx.navigateTo({
            url: "./../payment/payment"
        });
    },
    toViewHistory: function() {
        if (!this.onLogin()) return !1;
        l.aldstat.sendEvent("个人中心点击观看历史", "点击观看历史"), wx.navigateTo({
            url: "./../viewHistory/viewHistory"
        });
    },
    toKefu: function() {
        if (!this.onLogin()) return !1;
        l.aldstat.sendEvent("个人中心点击联系客服", "点击联系客服");
    },
    toMyBill: function() {
        var e = this;
        return !!e.onLogin() && (void 0 !== e.data.tokensAmount && (l.aldstat.sendEvent("个人中心点击我的账单", "点击我的账单"), 
        void wx.navigateTo({
            url: "./../myBill/myBill?amountNum=" + this.data.tokensAmount
        })));
    },
    toMyInterest: function() {
        if (!this.onLogin()) return !1;
        l.aldstat.sendEvent("个人中心点击我关注的主播", "点击我关注的主播"), wx.navigateTo({
            url: "../focus/focus"
        });
    },
    onLike: function() {
        var e = this, t = l.globalData.windowWidth;
        new i.default.Tween({
            x: t
        }).to({
            x: 0
        }, 300).easing(i.default.Easing.Quadratic.Out).onUpdate(function() {
            e.setData({
                likeLeft: this.x
            });
        }).onComplete(function() {
            e.setData({
                likeLeft: 0
            });
        }).start();
    },
    onLikeTouchStart: function(e) {
        if (!e || !e.changedTouches[0]) return !1;
        g = e.changedTouches[0].clientX, c = !0;
    },
    onLikeTouchEnd: function(e) {
        var t = this;
        if (!e || !e.changedTouches[0]) return !1;
        var n = e.changedTouches[0].clientX;
        if (c && n - g > d) {
            c = !1;
            var o = l.globalData.windowWidth;
            new i.default.Tween({
                x: 0
            }).to({
                x: o
            }, 300).easing(i.default.Easing.Quadratic.Out).onUpdate(function() {
                t.setData({
                    likeLeft: this.x
                });
            }).onComplete(function() {
                t.setData({
                    likeLeft: l.globalData.windowWidth
                });
            }).start();
        }
    },
    onLikeTouchMove: function(e) {},
    toLiveRoomFun: function(e) {
        var t, n = e.currentTarget.dataset.item;
        if (l.currentUser.session_key) {
            var o = Date.parse(new Date()), i = {
                api_key: l.opApiKey,
                v: "1",
                client_info: l.client_info,
                session_key: l.currentUser.session_key,
                call_id: o,
                uid: n.player_id,
                type: "211820270846018",
                playerId: n.player_id
            }, a = s.getsign(i);
            i.sig = a, wx.request({
                url: l.apiurl + "profile/getInfo",
                data: i,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    var o, i, e = e.data;
                    o = n.cover_img_url ? n.cover_img_url : e.large_url, i = n.title ? n.title : e.user_name, 
                    t = "liveTitle=" + i + "&liveCoverImg=" + o + "&liveRoomId=" + n.live_room_id + "&playerId=" + n.player_id + "&hasFollowed=" + e.has_followed + "&isFriend=" + e.is_friend + "&playUrl=" + n.play_url, 
                    e.userRedAndVipInfoResponse ? n.red_host_flag = e.userRedAndVipInfoResponse.red_host_flag : n.red_host_flag = 0;
                    var a = JSON.stringify(n);
                    l.liveShowString = a;
                    var s = [];
                    l.allVideosList.length > 0 && l.allVideosList.forEach(function(e, t) {
                        n.live_room_id != e.live_room_id && s.push(e);
                    }), l.videosList = s, 0 === n.live_state ? wx.navigateTo({
                        url: "./../liveShow/liveShow?" + t
                    }) : wx.showToast({
                        title: "主播已下线",
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function() {}
            });
        }
    },
    onasignsuccess: function(e) {
        var t = this;
        "EXP" == e.detail.name && t.getInfo();
    },
    onLogin: function() {
        var e = this;
        return n = wx.getStorageSync("wxGetUserInfoAuth"), o = wx.getStorageSync("wxPhoneAuth"), 
        n ? !!o || (e.setData({
            isLogin: !1
        }), h.showPhone(), !1) : (e.setData({
            isLogin: !1
        }), h.showDenglu(), !1);
    },
    dingyue: function(e) {
        var t = this;
        if (!t.onLogin()) return !1;
        s.wechatSingleSubscription("个人中心"), s.wechatSingleSubscriptionCallBack = function(e) {
            t.setData({
                dingyueNum: e.data.num
            });
        };
    },
    wechatQuerySubscription: function() {
        var e = this, t = Date.parse(new Date()), n = {
            api_key: l.opApiKey,
            v: "1",
            client_info: l.client_info,
            session_key: l.currentUser.session_key,
            call_id: t,
            openId: l.wxpersonInfo.openid
        }, o = s.getsign(n);
        n.sig = o, wx.request({
            url: l.apiurl + "livevideoext/wechatQuerySubscription",
            data: n,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                e.setData({
                    dingyueNum: t.data.num
                });
            },
            fail: function() {}
        });
    }
});