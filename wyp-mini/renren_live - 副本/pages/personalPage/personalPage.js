var e = require("../../14E98D478A740DDF728FE5401BCCC841.js"), t = require("../../436428478A740DDF250240407F3DC841.js"), a = (require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), 
getApp()), i = 1, o = !0, s = !0, n = void 0;

Page({
    data: {
        navTxtStr: "",
        navTopBackShow: !0,
        backgroundColor: "rgba(0,0,0,0)",
        navHeight: a.globalData.navStatusbarHeight + a.globalData.navTopHeight,
        borderBottom: "none",
        navBackUrl: "./../../images/navigation_back_white.png",
        isLive: 0,
        userMsg: {},
        uid: 0,
        tagList: [],
        isFocused: !1,
        level: 1,
        levelUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_stars.png",
        levelbgcolor: "#FB9700",
        wealthLevel: 1,
        wealthUrl: "http://s.xnimg.cn/wap/mobile/wxMiniApp/zhiboNewWxMiniApp/images/live/live_grade_stars.png",
        wealthbgcolor: "#FB9700",
        hasVideo: !1,
        videoList: [],
        videoLeft: 0,
        canChatCss: "noChat",
        isChat: a.isChat
    },
    onLoad: function(e) {
        var t = this;
        0 == e.isLive && this.setData({
            isLive: 0
        });
        var r = 4 / 750 * a.globalData.windowWidth;
        t.setData({
            uid: e.playerId,
            videoLeft: r
        }), n = e.playerId, i = 1, o = !0, s = !0, t.getPlayerShortVideoList();
    },
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {
        this.getInfo(n), i = 1, o = !0, s = !0;
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    MethodComponent: function() {
        this.myComponent.ClickBack();
    },
    getInfo: function(i) {
        var o = this;
        if (a.currentUser.session_key) {
            var s = Date.parse(new Date()), n = {
                api_key: a.opApiKey,
                v: "1",
                client_info: a.client_info,
                session_key: a.currentUser.session_key,
                call_id: s,
                uid: i,
                type: "211820270846018",
                playerId: i
            }, r = e.getsign(n);
            n.sig = r, wx.showLoading({
                title: "载入中..."
            }), wx.request({
                url: a.apiurl + "profile/getInfo",
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    var a = [];
                    if ((e = e.data).whisperProfileInfo && e.whisperProfileInfo.tagList && e.whisperProfileInfo.tagList.length >= 0) for (var i, s = e.whisperProfileInfo.tagList.length, n = {}, r = 0; r < s; r++) i = t.randomColor(), 
                    n = {
                        txt: e.whisperProfileInfo.tagList[r],
                        colorLeft: i.colorLeft,
                        colorRight: i.colorRight
                    }, a.push(n);
                    1 == e.has_followed || 1 == e.is_friend ? o.setData({
                        isFocused: !0
                    }) : o.setData({
                        isFocused: !1
                    }), e.userStarLevelInfoMessage || (e.userStarLevelInfoMessage.level = 1), e.userWealthLevelMessage || (e.userWealthLevelMessage.wealthLevel = 1), 
                    e.userRedAndVipInfoResponse || (e.userRedAndVipInfoResponse.red_host_flag = 111);
                    var l = t.getLevelMsg(e.userStarLevelInfoMessage.level), d = t.getwealthLevelMsg(e.userWealthLevelMessage.wealthLevel), u = e.userRedAndVipInfoResponse.red_host_flag;
                    o.setData({
                        userMsg: e,
                        tagList: a,
                        level: e.userStarLevelInfoMessage.level,
                        levelUrl: l.iconUrl,
                        levelbgcolor: l.backgroundcolor,
                        wealthLevel: e.userWealthLevelMessage.wealthLevel,
                        wealthUrl: e.userWealthLevelMessage.url,
                        wealthbgcolor: d.backgroundcolor,
                        canChatCss: 6 == u ? "" : "noChat"
                    }), wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        }
    },
    clickOnFocused: function() {
        a.aldstat.sendEvent("个人主页点击“关注”按钮", "点击关注"), this.modifyRelation("follow/modifyRelation", this.data.userMsg.user_id);
    },
    modifyRelation: function(t, a) {
        var i = getApp();
        if (i.wxpersonInfo.openid) {
            var o = Date.parse(new Date()), s = {
                api_key: i.opApiKey,
                v: "1",
                session_key: i.currentUser.session_key,
                client_info: i.client_info,
                call_id: o,
                p_id: a,
                flag: 1,
                addfollowfrom: "3G_IPHONE_WHISPERMINIPRO"
            }, n = this, r = e.getsign(s);
            s.sig = r, wx.request({
                url: i.apiurl + t,
                data: s,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    1 == e.data.result ? (n.setData({
                        isFocused: !0
                    }), n.updateLiveShowPageFocuseState(n.data.isFocused), wx.showToast({
                        title: "关注成功",
                        icon: "none",
                        duration: 2e3
                    })) : 30018 == e.data.error_code ? n.addFriend("friends/request", a, "我是" + i.currentUser.user_name + ",想关注你") : wx.showToast({
                        title: "关注失败，请重试",
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    addFriend: function(t, a, i) {
        var o = getApp();
        if (o.wxpersonInfo.openid) {
            var s = Date.parse(new Date()), n = {
                api_key: o.opApiKey,
                v: "1",
                session_key: o.currentUser.session_key,
                client_info: o.client_info,
                call_id: s,
                uid: a,
                content: i,
                addfriendfrom: "3G_ANDROID_VISITORPAGE"
            }, r = e.getsign(n);
            n.sig = r, wx.request({
                url: o.apiurl + t,
                data: n,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    wx.showToast({
                        title: "好友申请已发送",
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    clickCancelFocused: function() {
        a.aldstat.sendEvent("个人主页点击“取消关注”按钮", "点击取消关注"), this.cancelFollow("follow/modifyRelation", this.data.userMsg.user_id);
    },
    cancelFollow: function(t, a) {
        var i = getApp();
        if (i.wxpersonInfo.openid) {
            var o = Date.parse(new Date()), s = {
                api_key: i.opApiKey,
                v: "1",
                session_key: i.currentUser.session_key,
                client_info: i.client_info,
                call_id: o,
                p_id: a,
                flag: 0,
                addfollowfrom: "3G_IPHONE_WHISPERMINIPRO"
            }, n = this, r = e.getsign(s);
            s.sig = r, wx.request({
                url: i.apiurl + t,
                data: s,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    1 == e.data.result ? (n.setData({
                        isFocused: !1
                    }), n.updateLiveShowPageFocuseState(n.data.isFocused), wx.showToast({
                        title: "已取消关注",
                        icon: "none",
                        duration: 2e3
                    })) : wx.showToast({
                        title: "取消关注失败，请重试",
                        icon: "none",
                        duration: 2e3
                    });
                }
            });
        }
    },
    updateLiveShowPageFocuseState: function() {
        if (this.data.isFromLiveShowPage) {
            var e = getCurrentPages();
            console.log("pages===============", e);
        }
    },
    getPlayerShortVideoList: function() {
        var t = this;
        if (!o) return !1;
        var s = {
            api_key: a.opApiKey,
            v: "1.0",
            call_id: new Date().getTime(),
            session_key: a.currentUser.session_key,
            playerId: t.data.uid,
            page: i,
            page_size: 20
        };
        s.sig = e.getsign(s), wx.request({
            url: a.apiurl + "shortvideo/getPlayerShortVideoList",
            data: s,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var s = e.data.play_short_video_list;
                !s || s.length <= 0 ? (1 == i && t.setData({
                    hasVideo: !1
                }), o = !1) : (s.forEach(function(e, t) {
                    if (e.viewerCount > 1e3) {
                        var a = parseInt(e.viewerCount / 1e3), i = e.viewerCount % 1e3 / 1e3;
                        i = Number(i.toFixed(1)), e.viewerCount = a + i + "K";
                    }
                }), s = t.data.videoList.concat(s), t.setData({
                    hasVideo: !0,
                    videoList: s
                }), a.allShortVideo = JSON.stringify(s), i++, o = !0);
            },
            fail: function() {}
        });
    },
    onReachBottom: function() {
        var e = this;
        o && e.getPlayerShortVideoList();
    },
    toShortRoom: function(e) {
        if (!s) return !1;
        a.aldstat.sendEvent("个人主页点击短视频列表进入短视频页面", "个人主页进入短视频页面"), s = !1;
        var t = "vid=" + e.currentTarget.dataset.item.id + "&prePage=personalPage";
        wx.navigateTo({
            url: "./../miniVideo/miniVideo?" + t
        });
    },
    toChatPage: function() {
        if (0 == a.isChat) return wx.showToast({
            title: "功能正在升级，敬请期待...",
            icon: "none",
            duration: 2e3
        }), !1;
        var e = this;
        if (e.data.userMsg && e.data.userMsg.userRedAndVipInfoResponse && 6 != e.data.userMsg.userRedAndVipInfoResponse.red_host_flag) return !1;
        var t = {
            player_id: e.data.uid,
            name: e.data.userMsg.user_name,
            head_url: e.data.userMsg.head_url
        };
        return wx.navigateTo({
            url: "../chatDetail/chatDetail?id=" + t.player_id + "&name=" + t.name + "&headUrl=" + t.head_url + "&from=chat"
        }), !1;
    }
});