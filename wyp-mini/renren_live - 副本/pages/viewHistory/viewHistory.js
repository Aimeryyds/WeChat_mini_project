var e = require("../../14E98D478A740DDF728FE5401BCCC841.js"), t = getApp();

Page({
    data: {
        navTxtStr: "观看历史",
        navTopBackShow: !0,
        padBottom: 0,
        navHeight: t.globalData.navStatusbarHeight + t.globalData.navTopHeight,
        itemLeft: t.globalData.threeitemLeft,
        hasHistory: 5,
        historyList: [],
        recommendList: [],
        pageHeight: t.globalData.windowHeight - t.globalData.navTopHeight,
        liveVideo: [],
        clickClass: !0,
        timerSet: null
    },
    onLoad: function(e) {
        var i = this;
        t.globalData.isBangPhone && i.setData({
            padBottom: "10"
        });
    },
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {
        t.page = "", t.liveShowClose = "", this.getPlayersWhoUserWatch();
    },
    onHide: function() {},
    onUnload: function() {
        clearTimeout(this.data.timerSet);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    MethodComponent: function() {
        this.myComponent.ClickBack();
    },
    getPlayersWhoUserWatch: function() {
        if (t.currentUser.session_key) {
            var i = Date.parse(new Date()), o = {
                api_key: t.opApiKey,
                v: "1",
                session_key: t.currentUser.session_key,
                call_id: i
            }, a = this;
            wx.showLoading({
                title: "载入中..."
            });
            var n = e.getsign(o);
            o.sig = n, wx.request({
                url: t.apiurl + "whisper/getPlayersWhoUserWatch",
                data: o,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    var t = e.data;
                    if (1 == t.history) {
                        if (t.infoList && t.infoList.length > 0) {
                            for (var i, o = [], n = [ {
                                timeit: 0,
                                list: []
                            } ], l = 0; l < t.infoList.length; l++) i = a.formatDate(t.infoList[l].upTime), 
                            t.infoList[l].timeit = i, o.push(t.infoList[l]);
                            for (var s = 0, l = 0; l < o.length; l++) 0 == s ? (n[0] = {
                                timeit: o[l].timeit,
                                list: [ o[l] ]
                            }, s = n.length) : o[l].timeit == n[s - 1].timeit ? (n[s - 1].list.push(o[l]), s = n.length) : (n.push({
                                timeit: o[l].timeit,
                                list: []
                            }), n[s].list.push(o[l]), s = n.length);
                            a.setData({
                                hasHistory: 1,
                                historyList: n
                            });
                        }
                    } else {
                        var r = [];
                        if (t.roomInfoList && t.roomInfoList.length > 0) {
                            if (t.roomInfoList.length <= 6) r = t.roomInfoList; else for (var d = 0; d < 6; d++) r.push(t.roomInfoList[d]);
                            a.setData({
                                hasHistory: 2,
                                recommendList: r
                            });
                        }
                    }
                    wx.hideLoading();
                },
                fail: function(e) {
                    wx.hideLoading();
                }
            });
        }
    },
    formatDate: function(e) {
        var t = this, i = new Date(e), o = new Date(), a = new Date();
        return a.setDate(a.getDate() - 1), i = t.dateSet(i), o = t.dateSet(o), a = t.dateSet(a), 
        i == o ? "今天" : i == a ? "昨天" : i;
    },
    dateSet: function(e) {
        var t = this, i = new Date(e), o = i.getFullYear(), a = i.getMonth() + 1, n = i.getDate();
        return o + "年" + t.dateAdd0(a) + "月" + t.dateAdd0(n) + "日";
    },
    dateAdd0: function(e) {
        return e = e < 10 ? "0" + e : e;
    },
    toHome: function() {
        wx.switchTab({
            url: "./../home/home"
        });
    },
    toPageRoom: function(i) {
        var o = this, a = i.currentTarget.dataset.str, n = i.currentTarget.dataset.item;
        if (!o.data.clickClass) return !1;
        o.setData({
            clickClass: !1,
            timerSet: setTimeout(function() {
                o.setData({
                    clickClass: !0
                }), clearTimeout(o.data.timerSet);
            }, 600)
        });
        var l;
        "recommend" == a ? l = {
            liveRoomId: n.live_room_id,
            playerId: n.player_id,
            playUrl: n.play_url,
            head_url: n.head_url,
            name: n.name
        } : 0 === n.live_state || 1 == n.living ? (n.liveRoom.play_url = n.liveRoom.play_url.split("?")[0], 
        l = {
            liveRoomId: n.liveRoom.live_room_id,
            playerId: n.playerId,
            playUrl: n.liveRoom.play_url,
            head_url: n.head.tiny_url,
            name: n.name
        }) : l = n;
        if (0 === n.live_state || 1 == n.living) {
            if (t.currentUser.session_key) {
                var s = Date.parse(new Date()), r = {
                    api_key: t.opApiKey,
                    v: "1",
                    client_info: t.client_info,
                    session_key: t.currentUser.session_key,
                    call_id: s,
                    uid: l.playerId,
                    type: "211820270846018",
                    playerId: l.playerId
                };
                r.sig = e.getsign(r), wx.showLoading({
                    title: "载入中..."
                }), wx.request({
                    url: t.apiurl + "profile/getInfo",
                    data: r,
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    success: function(i) {
                        wx.hideLoading();
                        var o, s, i = i.data;
                        o = n && n.liveRoom && n.liveRoom.cover_img_url ? n.liveRoom.cover_img_url : i.large_url, 
                        s = n && n.liveRoom && n.liveRoom.title ? n.liveRoom.title : i.user_name, a = "liveTitle=" + s + "&liveCoverImg=" + o + "&liveRoomId=" + l.liveRoomId + "&playerId=" + l.playerId + "&playUrl=" + l.playUrl + "&hasFollowed=" + i.has_followed + "&isFriend=" + i.is_friend;
                        var r = {
                            api_key: t.opApiKey,
                            v: "1",
                            session_key: t.currentUser.session_key,
                            client_info: t.client_info,
                            call_id: new Date().getTime(),
                            live_room_id: l.liveRoomId,
                            with_viewer_total_count: 1,
                            with_like_total_count: 0,
                            need_like_list: 0
                        };
                        r.sig = e.getsign(r), wx.request({
                            url: t.apiurl + "livevideo/liveRoomGetLiveRoom",
                            data: r,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                            },
                            success: function(o) {
                                if (o.data.result && 0 == o.data.result) wx.showToast({
                                    title: "获取直播间失败",
                                    icon: "none",
                                    image: "",
                                    duration: 2e3
                                }); else {
                                    var n = {
                                        api_key: t.opApiKey,
                                        v: "1.0",
                                        call_id: new Date().getTime(),
                                        session_key: t.currentUser.session_key,
                                        liveRoomId: l.liveRoomId,
                                        need_vip_info: 1
                                    };
                                    n.sig = e.getsign(n), wx.request({
                                        data: n,
                                        url: t.apiurl + "livevideo/getNRoomUserList",
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                                        },
                                        success: function(e) {
                                            var n = [];
                                            t.allVideosList && t.allVideosList.length > 0 && t.allVideosList.forEach(function(e, t) {
                                                l.liveRoomId != e.live_room_id && n.push(e);
                                            }), t.videosList = n, l.viewer_count = e.data.view_count, l.starCount = o.data.starCount, 
                                            l.red_host_flag = i.userRedAndVipInfoResponse.red_host_flag;
                                            var s = JSON.stringify(l);
                                            t.liveShowString = s, wx.navigateTo({
                                                url: "./../liveShow/liveShow?" + a
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    },
                    fail: function() {
                        wx.hideLoading();
                    }
                });
            }
        } else a = "isLive=" + n.living + "&playerId=" + n.playerId, wx.navigateTo({
            url: "./../personalPage/personalPage?" + a
        });
    }
});