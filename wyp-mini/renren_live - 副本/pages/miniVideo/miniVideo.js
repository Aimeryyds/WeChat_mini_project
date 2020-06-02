function e(e, t) {
    var o = [ "火星", "地球", "未知星球" ], i = L.mFindIndex(function(e) {
        return e.id == S;
    }), n = {
        userName: e,
        userTitle: t = i >= 0 ? L[i].title : o[3 * Math.random() >> 0]
    };
    v.setData({
        message: n
    });
}

function t() {
    0 == O && (O = 368, M = 642);
    var e = 0, t = 0, o = 0, i = 0;
    O > M ? (e = p, o = .5 * (g - (t = p * M / O)), i = 0) : (t = g, o = 0, i = .5 * (p - (e = g * O / M)));
    var n = {
        liveWidth: e,
        liveHeight: t,
        liveTop: o,
        liveLeft: i
    };
    v.setData({
        live: n
    });
}

function o() {
    v.setData({
        focus: 1,
        fInfo: T[1]
    });
}

function i(e) {
    var t, o, i = [];
    if (i[t] instanceof Array == !1) return e;
    for (t = 0, o = e.length; t < o; t++) i[t] instanceof Array ? i[t] = deepcopy(e[t]) : i[t] = e[t];
    return a;
}

function n(o) {
    if (void 0 == o) return !1;
    var i = f.apiurl + "shortvideo/getPlayShortVideoInfo", n = {
        api_key: f.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: f.currentUser.session_key,
        uniq_key: f.currentUser.uniq_key,
        uid: f.currentUser.uid,
        videoId: o
    };
    n.sig = u.default.getsign(n), wx.request({
        data: n,
        url: i,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(i) {
            console.log(i), O = i.data.playShortVideoInfo.width, M = i.data.playShortVideoInfo.height, 
            k = i.data.playShortVideoInfo.title, D = i.data.playShortVideoInfo.city, m = i.data.playShortVideoInfo.name, 
            y = i.data.playShortVideoInfo.headUrl, _ = i.data.playShortVideoInfo.userId, 6 == i.data.userRedAndVipInfoResponse.red_host_flag && 1 == f.isChat && (v.setData({
                alphaMsg: 1
            }), C = 1), I = P + String(o), x = i.data.playShortVideoInfo.coverUrl, q = i.data.roomId, 
            2 == i.data.relationship ? (V = 1, U = 1) : 3 == i.data.relationship && (A = 1, 
            U = 1), 1 == H && v.setData({
                liveVideoUrl: I
            }), 1 == V || 1 == A ? (U = 1, v.setData({
                focus: 1,
                fInfo: T[1]
            })) : (U = 0, v.setData({
                focus: 0,
                fInfo: T[0]
            })), void 0 != y && null != y ? y.indexOf("hdn.xnimg.cn") >= 0 && (y = y.replace(/http:\/\/hdn.xnimg.cn/, "https://ssl.hdn.xnimg.cn")) : y = "../../images/default_header.png", 
            v.setData({
                headUrl: y,
                showFocus: 1
            }), e(m, D), t(), console.log("isLive:", q), q > 0 && (R = "liveRoomId=" + q + "&playerId=" + _ + "&hasFollowed=" + V + "&isFriend=" + A, 
            r(q)), H = 0;
        }
    });
}

function r(e) {
    if (f.wxpersonInfo.openid) {
        var t = {
            api_key: f.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: f.currentUser.session_key,
            live_room_id: e,
            with_like_total_count: 0,
            with_viewer_total_count: 0
        }, o = u.default.getsign(t);
        t.sig = o, wx.request({
            url: f.apiurl + "livevideo/liveRoomGetLiveRoom",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (H = 0, void 0 != e.data.error_msg || null != e.data.error_msg) return !1;
                var t = e.data.cover_img_url, o = e.data.title, i = e.data.play_url.split("?")[0];
                R += "&playUrl=" + i + "&liveCoverImg=" + t + "&liveTitle=" + o, console.log(R), 
                v.setData({
                    liveShow: !0
                });
            }
        });
    }
}

function s() {
    if (f.wxpersonInfo.openid) {
        var e = {
            api_key: f.opApiKey,
            v: "1",
            client_info: f.client_info,
            session_key: f.currentUser.session_key,
            call_id: new Date().getTime(),
            uid: _,
            type: "211820270846018",
            playerId: _
        }, t = u.default.getsign(e);
        e.sig = t, wx.request({
            url: f.apiurl + "profile/getInfo",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var e = e.data;
                f.videosList = i(f.allVideosList), f.liveShowString = JSON.stringify(e), f.globalData.liveRoomId = q, 
                K = 0, wx.redirectTo({
                    url: "./../liveShow/liveShow?" + R
                });
            },
            fail: function(e) {
                K = 0;
            }
        });
    }
}

function l(e) {
    var t = f.apiurl + "shortvideo/getPlayShortVideoInfo", o = {
        api_key: f.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: f.currentUser.session_key,
        uniq_key: f.currentUser.uniq_key,
        uid: f.currentUser.uid,
        videoId: e
    };
    o.sig = u.default.getsign(o), wx.request({
        data: o,
        url: t,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            2 == e.data.relationship ? (V = 1, U = 1) : 3 == e.data.relationship ? (A = 1, U = 1) : V = A = 0, 
            1 == V || 1 == A ? (U = 1, v.setData({
                focus: 1,
                fInfo: T[1]
            })) : (U = 0, v.setData({
                focus: 0,
                fInfo: T[0]
            }));
        }
    });
}

function d() {
    if (1 == U) return !1;
    if (f.wxpersonInfo.openid) {
        var e = f.apiurl + "follow/modifyRelation", t = {
            api_key: f.opApiKey,
            v: "1.0",
            session_key: f.currentUser.session_key,
            client_info: f.client_info,
            call_id: new Date().getTime(),
            p_id: _,
            flag: 1,
            addfollowfrom: "3G_IPHONE_WHISPERMINIPRO"
        };
        t.sig = u.default.getsign(t), wx.request({
            data: t,
            url: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                console.log("关注主播==>" + JSON.stringify(e)), 1 == e.data.result ? (V = 1, U = 1, 
                o(), setTimeout(function() {
                    wx.showToast({
                        title: "关注成功",
                        icon: "none",
                        duration: 2e3
                    });
                }.bind(this), 150)) : 30018 == e.data.error_code ? v.addFriend("friends/request", _, "我是" + f.currentUser.user_name + ",想关注你") : wx.showToast({
                    title: "关注失败，请稍后再试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
}

var u = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../14E98D478A740DDF728FE5401BCCC841.js")), c = require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), f = getApp(), h = wx.getSystemInfoSync(), p = h.windowWidth, g = h.screenHeight, v = void 0, w = void 0, m = void 0, y = void 0, _ = void 0, I = void 0, x = void 0, S = void 0, D = void 0, k = void 0, T = [ "+", "✓" ], A = 0, U = 0, V = 0, P = "https://ks3-cn-beijing.ksyun.com/renren-sv/", q = 0, R = void 0, H = 0, O = void 0, M = void 0, F = 0, b = -1, N = null, C = 0, L = null, E = 0, W = 1, K = 0;

Page({
    data: {
        fInfo: T[0],
        liveShow: !1,
        playInfo: !1,
        alphaMsg: 0,
        alphaNext: .3,
        showFocus: 0,
        live: {
            liveWidth: p,
            liveHeight: g,
            liveTop: 0,
            liveLeft: 0
        }
    },
    onLoad: function(e) {
        v = this, C = 0, this.setData({
            tabHeight: f.globalData.navStatusbarHeight + f.globalData.navTopHeight,
            navigationBarHeight: h.statusBarHeight
        }), L = null, void 0 != e.prePage && "personalPage" == e.prePage ? (L = JSON.parse(f.allShortVideo)).length > 1 && v.setData({
            alphaNext: 1
        }) : (L = f.shortAll, v.setData({
            alphaNext: 1
        })), S = e.vid;
    },
    onReady: function() {
        W = 1, v.setData({
            liveVideoUrl: P + String(S)
        }, function() {
            w = wx.createVideoContext("myVideo"), n(S);
        });
    },
    onShow: function() {
        E = 0, K = 0, l(S);
    },
    onHide: function() {},
    onUnload: function() {
        C = 0, E = 1, L = null, f.shortIndex = 0, w.stop();
    },
    onPullDownRefresh: function() {
        v.nextAction();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e = f.globalData.qudao;
        return f.aldstat.sendEvent("用户分享", String(h.platform) + "端用户启动短视频分享"), {
            title: m,
            path: "/pages/home/home?vid=" + S + "&channelid=" + e,
            imageUrl: x,
            success: function(e) {
                "shareAppMessage:ok" == res.errMsg && wx.showToast({
                    title: "转发成功~",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                "shareAppMessage:fail cancel" == e.errMsg || e.errMsg;
            },
            complete: function(e) {}
        };
    },
    videoPlay: function(e) {},
    videoError: function(e) {
        console.error("video error:", e), n(S);
    },
    videoEnd: function(e) {
        console.log("video end"), this.setData({
            playInfo: !0
        });
    },
    bindClose: function() {
        f.page = "miniVideo", f.liveShowClose = 0, wx.navigateBack({
            changed: !0
        });
    },
    liveHomeAction: function() {
        wx.navigateTo({
            url: "./../personalPage/personalPage?playerId=" + _
        });
    },
    focusAction: function() {
        console.log("isFollow:", U), 0 == U ? d() : v.liveHomeAction();
    },
    liveAction: function() {
        0 == K && (K = 1, s());
    },
    msgAction: function() {
        if (0 == f.isChat) return !1;
        if (0 == C) return !1;
        var e = m;
        null != y && void 0 != y && "" != y && void 0 != e && "" != e && null != e ? (console.log("name:", e), 
        f.aldstat.sendEvent("激活私聊", String(h.platform) + "端用户激活私聊"), F = 0, b = -1, v.getWpsid()) : setTimeout(function() {
            v.msgAction();
        }.bind(this), 100);
    },
    nextAction: function() {
        return !(L.length <= 1) && (0 == H && (H = 1, U = A = V = 0, this.setData({
            playInfo: !1,
            focus: 0,
            fInfo: T[0],
            showFocus: 0
        }), f.shortIndex = L.mFindIndex(function(e) {
            return e.id == S;
        }), f.shortIndex + 1 < L.length ? f.shortIndex++ : f.shortIndex = 0, void n(S = L[f.shortIndex].id)));
    },
    getWpsid: function() {
        if (-1 == b || void 0 == b) {
            var e = wx.getStorageSync("cookiesdata"), t = {
                ins: "",
                mid: F,
                r: 65535 * Math.random()
            };
            F++, N = c.getRequest("https://wpi.renren.com/comet_get", e, t, function(e) {
                if (200 == e.statusCode) {
                    for (var t = e.header["Set-Cookie"].split("; "), o = 0; o < t.length; o++) -1 != t[o].indexOf("wpsid") && (b = t[o].split("=")[1]);
                    console.log("拉消息=wpsid=>wpsid：" + b), wx.navigateTo({
                        url: "../chatDetail/chatDetail?id=" + _ + "&name=" + m + "&headUrl=" + y + "&from=chat&link=1&wpsid=" + b
                    });
                }
            }, function(e) {
                console.log("拉消息=wpsid=>" + JSON.stringify(e));
            });
        } else wx.navigateTo({
            url: "../chatDetail/chatDetail?id=" + _ + "&name=" + m + "&headUrl=" + y + "&from=chat&link=1&wpsid=" + b
        });
    },
    playVideo: function() {
        0 == W ? (W = 1, w.play()) : (W = 0, w.pause());
    }
});

wx.createAnimation({
    duration: 200,
    timingFunctionL: "ease"
});

Array.prototype.mFindIndex = function(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length, i = t; i < o; i++) if (e.call(this, this[i], i, this)) return i;
    return -1;
};