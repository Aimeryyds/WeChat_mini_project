function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, n = require("../../14E98D478A740DDF728FE5401BCCC841.js"), i = getApp(), o = null, s = null, r = !0, l = void 0, c = !1;

Page({
    data: {
        userInfo: i.currentUser,
        defaultImage: "/images/default_header.png",
        requestQueueNumber: 0,
        recents: [],
        mid: 0,
        maxMsgKey: -1,
        navStatusbarHeight: 20,
        windowHeight: 0,
        windowWidth: 0,
        navigationTitleText: "私聊",
        navigationLoading: !1,
        isLogin: !1
    },
    onLoad: function(t) {
        o = this, wx.getSystemInfo({
            success: function(t) {
                o.setData({
                    windowHeight: t.windowHeight,
                    windowWidth: t.windowWidth
                });
            }
        }), o.setData({
            navStatusbarHeight: i.globalData.navStatusbarHeight
        }), l = this.selectComponent("#login");
    },
    initComponent: function() {
        o.hintView = o.selectComponent("#hintView"), o.chatList = o.selectComponent("#chatList"), 
        o.alertView = o.selectComponent("#alertView"), o.hintView.init(o), o.chatList.init(o), 
        o.setData({
            navigationLoading: !0
        }), o.chatList.getRecentChatList(!0), o.onRecentCallback = function(t) {
            var e = t.recents;
            t.hintStatus;
            e && e.length > 0 && (e = o.videoMsg(e)), o.setData({
                recents: e
            }), o.data.recents && o.data.recents.length <= 0 ? o.hintView.setHintView(1) : o.hintView.setHintView(t.hintStatus), 
            setTimeout(function() {
                o.setData({
                    navigationLoading: !1
                });
            }, 500);
        }, o.onMessageCallback = function(t) {
            o.setData({
                recents: t.recents
            });
        }, o.onAgainCallback = function(t) {
            o.chatList.getRecentChatList(!1);
        };
    },
    videoMsg: function(t) {
        for (var e, a, n = 0; n < t.length; n++) {
            (e = t[n]).messageCount && e.messageCount > 0 && (a = !0), e.live_state = 1;
            for (var o = 0; o < i.globalData.homelist.length; o++) i.globalData.homelist[o].player_id === e.id && Object.assign(e, i.globalData.homelist[o]);
            t[n] = e;
        }
        return a ? wx.showTabBarRedDot({
            index: 0
        }) : wx.hideTabBarRedDot({
            index: 0
        }), t;
    },
    onShow: function() {
        return e = wx.getStorageSync("wxGetUserInfoAuth"), a = wx.getStorageSync("wxPhoneAuth"), 
        e ? a ? (o.setData({
            isLogin: !0
        }), c || (c = !0, o.initComponent()), o.startMessageInterval(), void (r = !0)) : (o.setData({
            isLogin: !1
        }), l.showPhone(), !1) : (o.setData({
            isLogin: !1
        }), l.showDenglu(), !1);
    },
    onAll: function() {
        e = wx.getStorageSync("wxGetUserInfoAuth"), a = wx.getStorageSync("wxPhoneAuth"), 
        e ? a || (o.setData({
            isLogin: !1
        }), l.showPhone()) : (o.setData({
            isLogin: !1
        }), l.showDenglu());
    },
    getAuthor: function() {
        o.setData({
            isLogin: !0
        }), o.initComponent(), o.startMessageInterval(), o.signCanShowIs(), r = !0;
    },
    onHide: function() {
        o.stopMessageInterval();
    },
    onPullDownRefresh: function() {
        o.setData({
            navigationLoading: !0
        }), o.chatList.getRecentChatList(!1), o.onRecentCallback = function(t) {
            var e = t.recents;
            t.hintStatus;
            e && e.length > 0 && (e = o.videoMsg(e)), o.setData({
                recents: e
            }), o.data.recents && o.data.recents.length <= 0 ? o.hintView.setHintView(1) : o.hintView.setHintView(t.hintStatus), 
            setTimeout(function() {
                o.setData({
                    navigationLoading: !1
                });
            }, 500);
        };
    },
    onUnload: function() {
        o.stopMessageInterval();
    },
    toLiveShow: function(e) {
        if (!r) return !1;
        r = !1;
        var a = e.currentTarget.dataset.item, s = e.currentTarget.dataset.index, l = {
            api_key: i.opApiKey,
            v: "1.0",
            call_id: new Date().getTime(),
            live_room_id: a.live_room_id,
            owner_id: a.player_id
        };
        l.sig = n.getLoginsign(l), wx.request({
            data: l,
            url: i.apiurl + "livevideo/liveRoomGetRoomCondition",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (0 != e.data.room_state) {
                    wx.showToast({
                        title: "直播间已关闭,请关注其他主播",
                        icon: "none",
                        duration: 2e3
                    });
                    var n = "recents[" + s + "].live_state";
                    o.setData(t({}, n, 1));
                    for (var l = 0; l < i.globalData.homelist.length; l++) {
                        i.globalData.homelist[l].player_id === a.id && (i.globalData.homelist[l].live_state = 1);
                        break;
                    }
                    r = !0;
                } else o.toLiveRoomFun(a);
            }
        });
    },
    toLiveRoomFun: function(t) {
        var e;
        if (i.currentUser.session_key) {
            var a = Date.parse(new Date()), o = {
                api_key: i.opApiKey,
                v: "1",
                client_info: i.client_info,
                session_key: i.currentUser.session_key,
                call_id: a,
                uid: t.player_id,
                type: "211820270846018",
                playerId: t.player_id
            }, s = n.getsign(o);
            o.sig = s, wx.request({
                url: i.apiurl + "profile/getInfo",
                data: o,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(a) {
                    var n, o, a = a.data;
                    n = t.cover_img_url ? t.cover_img_url : a.large_url, o = t.title ? t.title : a.user_name, 
                    e = "liveTitle=" + o + "&liveCoverImg=" + n + "&liveRoomId=" + t.live_room_id + "&playerId=" + t.player_id + "&hasFollowed=" + a.has_followed + "&isFriend=" + a.is_friend + "&playUrl=" + t.play_url, 
                    a.userRedAndVipInfoResponse ? t.red_host_flag = a.userRedAndVipInfoResponse.red_host_flag : t.red_host_flag = 0;
                    var s = JSON.stringify(t);
                    i.liveShowString = s;
                    var l = [];
                    i.allVideosList.length > 0 && i.allVideosList.forEach(function(e, a) {
                        t.live_room_id != e.live_room_id && l.push(e);
                    }), i.videosList = l, 0 === t.live_state ? (wx.navigateTo({
                        url: "./../liveShow/liveShow?" + e
                    }), r = !0) : (wx.showToast({
                        title: "直播间已关闭",
                        icon: "none",
                        duration: 2e3
                    }), r = !0);
                },
                fail: function() {
                    r = !0;
                }
            });
        }
    },
    startMessageInterval: function() {
        o.chatList && o.chatList.getMessageInterval_1();
    },
    stopMessageInterval: function() {
        return e = wx.getStorageSync("wxGetUserInfoAuth"), a = wx.getStorageSync("wxPhoneAuth"), 
        !!e && (!!a && (wx.setStorageSync("chatMessages", o.data.recents), wx.hideNavigationBarLoading(), 
        wx.stopPullDownRefresh(), wx.hideLoading(), void (o.chatList && o.chatList.stopMessageInterval())));
    },
    gotoChatDetail: function(t) {
        var e = t.currentTarget.dataset.item;
        0 == e.left && (i.aldstat.sendEvent("私聊页面点击列表进入聊天详情", "进入聊天详情"), wx.navigateTo({
            url: "../chatDetail/chatDetail?id=" + e.id + "&name=" + e.name + "&headUrl=" + e.tiny_url + "&from=chat"
        }));
    },
    changeData: function(t) {
        o.setData({
            recents: t
        });
    },
    errorFunction: function(t) {
        if ("error" == t.type) {
            var e = t.target.dataset.errorimg, a = o.data.recents;
            a[e].tiny_url = o.data.defaultImage, o.setData({
                recents: a
            });
        }
    },
    touchStart: function(t) {
        var e = i.touches.getClientX(t);
        e && o.setData({
            startX: e
        });
    },
    touchMove: function(t) {
        var e = i.touches.touchM(t, o.data.recents, o.data.startX);
        e && o.setData({
            recents: e
        });
    },
    touchEnd: function(t) {
        var e = i.touches.touchE(t, o.data.recents, o.data.startX, 150);
        e && o.setData({
            recents: e
        });
    },
    itemDelete: function(t) {
        s = t, o.alertView.showAlertView("", "确定删除和TA的聊天记录吗?", "取消", "确定", 100);
    },
    alertViewOkAction: function(t) {
        switch (t.detail) {
          case 100:
            var e = s.currentTarget.dataset.index, a = o.data.recents[e].id;
            o.chatList.deleteTalk(a), o.onDeleteChatCallback = function(t) {
                if (0 == t) {
                    var e = i.touches.deleteItem(s, o.data.recents);
                    e && o.setData({
                        recents: e
                    }), wx.setStorageSync("chatMessages", e), (null == e || e.length <= 0) && o.hintView.setHintView(1), 
                    wx.showToast({
                        title: "删除成功",
                        icon: "none",
                        duration: 2e3
                    });
                } else wx.showToast({
                    title: "删除失败",
                    icon: "none",
                    duration: 2e3
                });
            };
        }
        o.resetItemLeft();
    },
    alertViewCancelAction: function(t) {
        o.resetItemLeft();
    },
    resetItemLeft: function() {
        for (var t = o.data.recents, e = 0; e < t.length; e++) t[e].left = 0;
        o.setData({
            recents: t
        });
    },
    signCanShowIs: function() {
        n.canSmallGainSignGift(), n.canSmallGainSignGiftCallBack = function(t) {
            1 == t.data.result ? i.globalData.canSign = !1 : i.globalData.canSign = !0;
        };
    }
});