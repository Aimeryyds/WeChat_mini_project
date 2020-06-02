var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
};

Component({
    properties: {
        liveData: {
            type: Object,
            observer: "renderLive"
        }
    },
    data: {
        showTips: !0,
        showControls: !1,
        fullScreen: !1,
        state: "waiting"
    },
    ready: function(t) {
        var e = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        this.animation = e, this.liveCtx = wx.createLivePlayerContext("livePlayer", this);
    },
    detached: function() {
        this.clearTick();
    },
    methods: {
        renderLive: function(e, i) {
            var a = t({}, e);
            a.tip = 1 == a.status ? "直播尚未开始，请耐心等待" : "直播进行中", this.setData({
                live: a
            });
        },
        statechange: function(t) {
            var e = t.detail.code;
            this.data.live;
            switch (console.log(e), e) {
              case 2001:
                this.setData({
                    state: "pending",
                    showTips: !0,
                    "live.tip": "连接服务器成功"
                });
                break;

              case 2002:
                this.setData({
                    "live.tip": "加载直播内容"
                });
                break;

              case 2007:
                this.setData({
                    "live.tip": "启动播放器"
                });
                break;

              case 2004:
                this.setData({
                    state: "playing",
                    "live.tip": "开始播放直播内容"
                });
                break;

              case 2008:
                this.setData({
                    "live.tip": "启动解码器"
                });
                break;

              case 2003:
                this.setData({
                    showTips: !1
                }), this.triggerEvent("onlivestart");
                break;

              case 2006:
                this.setData({
                    state: "pause"
                });
                break;

              case 3005:
                this.setData({
                    "live.tip": "获取视频流失败"
                });
                break;

              case 2103:
                this.setData({
                    "live.tip": "正在重试连接"
                });
                break;

              case -2301:
                this.setData({
                    state: "error",
                    showTips: !0,
                    "live.tip": "直播开小差去啦，请稍后重试"
                });
            }
        },
        error: function(t) {
            console.error("live-player error:", t.detail.errMsg);
        },
        startLive: function() {
            if (2 == this.data.live.status) {
                var t = this;
                this.clearTick(), this.setData({
                    state: "pending",
                    "live.tip": "连接到直播服务器"
                }), this.liveCtx.play(), this.tick = setTimeout(function() {
                    t.hideControls();
                }, 3e3);
            }
        },
        stopLive: function() {
            this.triggerEvent("onlivestop"), this.clearTick(), this.setData({
                state: "pause"
            }), this.liveCtx.stop();
        },
        toggleFullScreen: function(t) {
            this.clearTick();
            var e = this;
            this.data.fullScreen ? (this.liveCtx.exitFullScreen(), e.setData({
                fullScreen: !1
            })) : (this.liveCtx.requestFullScreen({
                direction: 0
            }), e.setData({
                fullScreen: !0
            })), this.tick = setTimeout(function() {
                e.hideControls();
            }, 3e3);
        },
        handleTapPlayer: function() {
            this.data.showControls ? this.hideControls() : this.showControls(!0);
        },
        showControls: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this;
            this.clearTick(), this.animation.opacity(1).step(), this.setData({
                showControls: !0,
                animationData: this.animation.export()
            }), t && (e.tick = setTimeout(function() {
                e.hideControls();
            }, 3e3));
        },
        hideControls: function() {
            this.animation.opacity(0).step(), this.setData({
                showControls: !1,
                animationData: this.animation.export()
            });
        },
        clearTick: function() {
            this.tick && clearTimeout(this.tick);
        }
    }
});