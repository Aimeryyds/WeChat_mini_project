var e = require("../../../network/api.js");

Page({
    data: {
        posterUrl: "",
        countDown: 0,
        keepAlive: 10,
        code: "",
        scene: ""
    },
    onLoad: function(e) {
        var t = getApp().globalData, a = t.userinfo, i = t.scene, n = e.id, o = e.scene || "", s = getCurrentPages().length;
        this.setData({
            id: n,
            userinfo: a,
            code: o,
            scene: i,
            showBackBtn: 1 == s
        }), wx.showLoading({
            title: "请稍后"
        });
    },
    clearTick: function() {
        this.endCountdownTick && clearInterval(this.endCountdownTick), this.heartbeatTick && clearInterval(this.heartbeatTick);
    },
    onShow: function() {
        this.queryLive();
    },
    onUnload: function() {
        this.endCountdownTick && clearInterval(this.endCountdownTick), this.stopHeartbeat();
    },
    onPullDownRefresh: function() {
        this.queryLive();
    },
    onShareAppMessage: function() {
        var t = this.data, a = t.live, i = t.posterUrl;
        return {
            imageUrl: void 0 === i ? "" : i,
            title: a.theme,
            success: function() {
                (0, e.shareLive)({
                    id: a.id
                });
            }
        };
    },
    handleTapBack: function() {
        wx.redirectTo({
            url: "/pages/live/list/index"
        });
    },
    handleShare: function() {
        var t = this, a = this.data, i = a.id, n = a.posterUrl;
        n ? wx.previewImage({
            current: n,
            urls: [ n ]
        }) : (wx.showLoading({
            title: "请稍后"
        }), (0, e.queryPoster)({
            id: i
        }).then(function(e) {
            wx.hideLoading(), n = e.data.posterUrl, t.setData({
                posterUrl: n
            }), wx.previewImage({
                current: n,
                urls: [ n ]
            });
        }).catch(function(e) {
            console.log(e), wx.hideLoading();
        }));
    },
    showToast: function(e) {
        var t = this;
        this.setData({
            toast: {
                title: e,
                show: !0
            }
        }), setTimeout(function() {
            t.setData({
                toast: {
                    show: !1
                }
            });
        }, 1500);
    },
    queryLive: function() {
        var t = this, a = this.data, i = a.id, n = a.code, o = a.scene;
        (0, e.queryLiveDetail)({
            id: i,
            scene: o,
            code: n
        }).then(function(e) {
            wx.hideLoading(), wx.stopPullDownRefresh();
            var a = e.data, i = new Date(a.startTime.replace(/-/g, "/")), n = (new Date(a.endTime.replace(/-/g, "/")) - i) / 1e3;
            t.setData({
                keepAlive: a.keepAlive ? a.keepAlive : 10,
                live: a,
                countdown: a.countDown,
                leftTime: n + a.countDown
            }), t.endCountdownTick && clearInterval(t.endCountdownTick), t.startEndCountdown();
        }).catch(function() {
            wx.stopPullDownRefresh(), wx.hideLoading();
        });
    },
    handleAddFavorite: function(t) {
        var a = this.data.live;
        this.setData({
            "live.isFavorite": 1,
            "live.favoriteUsers": a.favoriteUsers + 1
        });
        var i = new Date(), n = new Date(a.startTime.replace(/-/g, "/"));
        1 == a.status && (n - i) / 6e4 > 6 ? this.showToast("已加入收藏，直播开始前5分钟将收到提醒") : this.showToast("已加入收藏"), 
        (0, e.addLiveFavorite)({
            id: a.id,
            formId: t
        });
    },
    handleRemoveFavorite: function() {
        var t = this.data.live;
        this.setData({
            "live.isFavorite": 0,
            "live.favoriteUsers": t.favoriteUsers - 1
        }), this.showToast("已取消收藏"), (0, e.removeLiveFavorite)({
            id: t.id
        });
    },
    handleFavorite: function(e) {
        var t = e.detail.formId;
        this.data.live.isFavorite ? this.handleRemoveFavorite() : this.handleAddFavorite(t);
    },
    startPush: function() {
        var e = this.data.live;
        getApp().setFlash("live", e), wx.navigateTo({
            url: "/pages/live/push/index"
        });
    },
    onStartCountdown: function() {
        var e = this.data.live;
        this.setData({
            "live.countDown": e.countDown - 1
        });
    },
    startEndCountdown: function() {
        var e = this;
        this.endCountdownTick = setInterval(function() {
            var t = e.data.leftTime;
            e.setData({
                leftTime: t - 1
            });
        }, 1e3);
    },
    handleLiveStart: function() {
        var t = this.data, a = t.live, i = t.scene, n = t.code;
        this.stopHeartbeat(), (0, e.playLive)({
            id: a.id,
            scene: i,
            code: n
        }), this.startHeartbeat();
    },
    handleLiveStop: function() {
        console.log("live end"), this.stopHeartbeat();
    },
    handleVideoPlay: function() {
        var t = this.data, a = t.videoPlayed, i = t.live, n = t.scene, o = t.code;
        a || (this.setData({
            videoPlayed: !0
        }), (0, e.playVideo)({
            id: i.id,
            scene: n,
            code: o
        }));
    },
    postAlive: function() {
        var t = this;
        console.log("i am online");
        var a = this.data.live;
        (0, e.checkAlive)({
            id: a.id
        }).then(function(e) {
            var i = e.data, n = i.status, o = i.totalNum;
            a.status = n, a.totalNum = o, t.setData({
                live: a
            });
        }).catch(function() {});
    },
    startHeartbeat: function() {
        var e = this;
        this.stopHeartbeat(), console.log("heartbeat start");
        var t = this.data.keepAlive;
        this.heartbeatTick = setInterval(function() {
            console.log("heartBeat"), e.postAlive();
        }, 1e3 * t);
    },
    stopHeartbeat: function() {
        if (this.heartbeatTick) {
            console.log("heartbeat stop");
            var t = this.data.live;
            clearInterval(this.heartbeatTick), this.heartbeatTick = void 0, (0, e.stopLive)({
                id: t.id
            });
        }
    }
});