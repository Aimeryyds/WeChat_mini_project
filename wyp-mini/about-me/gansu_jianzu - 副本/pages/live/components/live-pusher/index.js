var t = require("../../../../network/api.js");

Component({
    properties: {
        live: {
            type: Object
        }
    },
    data: {
        showStart: !0,
        status: void 0,
        beauty: 0,
        whiteness: 0,
        camera: 0,
        countDown: 3,
        showCover: !1
    },
    ready: function(t) {
        this.liveCtx = wx.createLivePusherContext("livePusher", this);
    },
    detached: function() {
        wx.setKeepScreenOn({
            keepScreenOn: !1
        }), this.tick && (clearInterval(this.tick), this.tick = void 0);
    },
    methods: {
        statechange: function(e) {
            var s = this, a = this.data.live, i = e.detail.code;
            switch (console.log(i), i) {
              case 1002:
                (0, t.startPush)({
                    id: a.id
                }).then(function(t) {
                    s.setData({
                        "live.status": 2
                    });
                }), wx.setKeepScreenOn({
                    keepScreenOn: !0
                });
                break;

              case -1307:
                this.showTips("直播服务器连接失败，请稍后重试"), wx.setKeepScreenOn({
                    keepScreenOn: !1
                });
            }
        },
        showTips: function(t) {
            this.setData({
                showStart: !0,
                showTips: !0,
                tips: t
            });
        },
        handleStopPush: function() {
            var e = this.data.live, s = this;
            2 == e.status && wx.showModal({
                title: "提示",
                content: "确定要结束直播活动吗？",
                success: function(a) {
                    a.confirm && (s.liveCtx.stop(), (0, t.stopPush)({
                        id: e.id
                    }).then(function(t) {
                        s.setData({
                            "live.status": 3
                        });
                    }), wx.setKeepScreenOn({
                        keepScreenOn: !1
                    }), s.setData({
                        showStart: !1,
                        showTips: !0,
                        tips: "直播已结束"
                    }), s.triggerEvent("onpushstop"));
                }
            });
        },
        handleToggleCamera: function(t) {
            var e = this.data.camera;
            this.setData({
                camera: 0 == e ? 1 : 0
            }), this.liveCtx.switchCamera();
        },
        handleToggleBeauty: function(t) {
            var e = this.data.beauty;
            this.setData({
                beauty: 0 == e ? 5 : 0
            });
        },
        handleToggleWhiteness: function(t) {
            var e = this.data.whiteness;
            this.setData({
                whiteness: 0 == e ? 5 : 0
            });
        },
        handleStart: function() {
            this.setData({
                showCover: !0,
                showStart: !1,
                showTips: !1
            }), this.countDown();
        },
        countDown: function() {
            var t = this;
            t.setData({
                showAnim: !0
            }), this.tick = setInterval(function() {
                var e = t.data.countDown;
                e -= 1, t.setData({
                    countDown: e
                }), 0 == e && (clearInterval(t.tick), t.liveCtx.start());
            }, 1e3);
        }
    }
});