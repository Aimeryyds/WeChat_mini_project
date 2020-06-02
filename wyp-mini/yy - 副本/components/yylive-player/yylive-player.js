var e = require("./lib/hiidoReport.js").webentchndo, t = require("../../utils/paramConfig.js").ParamConfig, i = require("../../utils/request.js"), a = i.RequestGet, s = i.AddCloudLog, n = require("../../utils/hdweapp.js"), d = !1, r = null, h = null, l = !1, o = null, c = null, p = 0, g = 0, u = null, y = !1, f = !1, v = {
    mark: function(e) {
        var t = Date.now();
        this.hasOwnProperty(e) || (this[e] = {
            start: null,
            end: null,
            duration: null
        }), this[e].start ? this[e].end ? console.warn("Duplicated to mark data in '" + e + "' !!!") : (this[e].end = t, 
        this[e].duration = this[e].end - this[e].start) : this[e].start = t;
    },
    getResult: function(e) {
        if (this[e] && this[e].duration) return this[e].duration;
        console.error("No data of '" + e + "'!!!");
    },
    reset: function() {
        Object.keys(v).forEach(function(e) {
            /^mark|getResult|reset$/.test(e) || delete v[e];
        });
    }
};

Component({
    name: "yylive-player",
    properties: {
        sid: {
            type: Number,
            observer: function(e, t) {
                e && e != t && this.resetPlayer();
            }
        },
        ssid: {
            type: Number
        },
        snapshot: {
            type: String,
            observer: function(e, t) {
                e && e != t && this.setData({
                    snapshot: e
                });
            }
        },
        slideInfo: {
            type: Object
        },
        fixedWidth: {
            type: Number
        },
        fixedHeight: {
            type: Number
        },
        pageLoading: {
            type: Boolean
        },
        isEncodedChannel: {
            type: Boolean,
            observer: function(e, t) {
                e != t && 0 == e && 1 == t && this.init();
            }
        },
        limitChannal: {
            type: Boolean,
            observer: function(e, t) {
                e != t && 1 == e && 0 == t && this.startPlayOtherLeaveTimer();
            }
        }
    },
    data: {
        liveUrl: "",
        isHidden: !0,
        isLoading: !0,
        playEndMessage: "",
        playerWidth: "100%",
        playerHeight: "240px",
        ratio: 1,
        isFixedSize: !1,
        tipsWidth: 0,
        tipsHeight: 0,
        playOtherLeaveTime: 8,
        endSymbol: "",
        recommendList: []
    },
    created: function() {
        v.reset(), v.mark("pageInit");
    },
    methods: {
        resetPlayer: function() {
            this.setData({
                liveUrl: "",
                isHidden: !0,
                isLoading: !0,
                playEndMessage: "",
                playerWidth: "100%",
                playerHeight: "240px",
                ratio: 1,
                isFixedSize: !1
            }), f = !1, y = !1, p = 0, g = 0, v.reset(), this.checkEncodedChannel(), this.joinChannel();
        },
        checkEncodedChannel: function() {
            var e = this;
            h && clearTimeout(h), h = setTimeout(function() {
                e.triggerEvent("hidePageLoading");
            }, 3e3);
            var i = t.MINIAPP_YY_HOST + "/mini/channel/passwd/" + this.data.sid + "/" + this.data.ssid;
            a(i).then(function(t) {
                t.data ? e.triggerEvent("updateEncodedChannel", !0) : (e.triggerEvent("updateEncodedChannel", !1), 
                e.init()), s(i, {
                    sid: e.data.sid,
                    ssid: e.data.ssid
                }, t), wx.getLogManager(1).log("加密频道结果", t.data, "加密的频道sid: ", e.data.sid, " ssid：", e.data.ssid);
            }).catch(function(t) {
                e.init(), s(i, {
                    sid: e.data.sid,
                    ssid: e.data.ssid
                }, t);
            });
        },
        init: function() {
            var e = this, t = this.data.sid || 0, i = this.data.ssid || 0, a = 0;
            r && clearTimeout(r), r = setTimeout(function() {
                !f && c.platform.indexOf("windows") < 0 && c.platform.indexOf("macOS") < 0 && e.playEndHandler("end", 2);
            }, 1e4), this.data.fixedWidth && this.data.fixedWidth > 0 && (this.setData({
                playerWidth: this.data.fixedWidth + "px"
            }), a++), this.data.fixedHeight && this.data.fixedHeight > 0 && (this.setData({
                playerHeight: this.data.fixedHeight + "px"
            }), a++), 2 === a && (this.setData({
                isFixedSize: !0
            }), this.triggerEvent("playerRectChange", {
                playerWidth: this.data.playerWidth,
                playerHeight: this.data.playerHeight
            }, {})), this.getNewVideoUrl(t, i);
        },
        getSystemInfo: function() {
            wx.getSystemInfo({
                success: function(e) {
                    c = e;
                }
            });
        },
        imageOnLoad: function(e) {
            this.setData({
                tipsWidth: e.detail.width,
                tipsHeight: e.detail.height
            });
        },
        getNewVideoUrl: function(e, i) {
            var a = this;
            v.mark("newVideoUrl");
            var d = t.INTERFACE_YY_COM_HOST + "/hls/new/get/" + e + "/" + i + "/1200?source=wx_yy", r = {
                type: "flv",
                callback: "getUrl"
            }, h = Date.now();
            wx.request({
                url: d,
                method: "GET",
                data: r,
                success: function(t) {
                    var r = t.data;
                    if (v.mark("newVideoUrl"), !(r = JSON.parse(r.split("getUrl(")[1].split(")")[0])).hls) return a.playEndHandler("end", 1);
                    if (!r.video && r.audio) return a.playEndHandler("end", 3);
                    var l = {
                        scode: "50209",
                        ver: "1.0.0",
                        uri: "接口/hls_new_get",
                        timeSpent: Date.now() - h,
                        code: r.code
                    };
                    n.Metrics.serviceReport(l), a.setData({
                        liveUrl: r.hls,
                        isLoading: !1
                    }), a.calcVideoAreaRect(r.width, r.height), s(d, {
                        sid: e,
                        ssid: i
                    }, r);
                },
                fail: function(t) {
                    v.mark("newVideoUrl"), s(d, {
                        sid: e,
                        ssid: i
                    }, t);
                }
            });
        },
        playEndHandler: function(e, t) {
            if (!this.data.playEndMessage || !this.data.isLoading) {
                var i = "end";
                "error" === e ? i = "您当前的网络环境较差，请刷新重试~" : "reLoad" === e ? i = "end" : "connectFail" === e ? i = "end" : "decodeFail" === e ? i = "视频帧解码失败，请刷新重试~" : "timeOut" == e && (i = "您当前网络环境有点差，请稍等~"), 
                this.setData({
                    playEndMessage: i,
                    isHidden: !0,
                    isLoading: !0
                }), "end" === i ? (this.startPlayOtherLeaveTimer(), this.setData({
                    endSymbol: t || ""
                })) : this.setData({
                    endSymbol: ""
                }), this.leaveChannel(), s("playEndHandler", {
                    sid: this.data.sid,
                    ssid: this.data.ssid
                }, t);
            }
        },
        startPlayOtherLeaveTimer: function() {
            var e = this;
            this.data.limitChannal ? clearInterval(o) : !o && this.data.playOtherLeaveTime > 0 && (o = setInterval(function() {
                e.data.playOtherLeaveTime > 0 ? e.setData({
                    playOtherLeaveTime: e.data.playOtherLeaveTime - 1
                }) : (e.stopPlayOtherLeaveTimer(), e.triggerEvent("playNextVideo"));
            }, 1e3));
        },
        stopPlayOtherLeaveTimer: function() {
            o && clearInterval(o), this.setData({
                playOtherLeaveTime: 8,
                playEndMessage: ""
            }), o = null;
        },
        leaveChannel: function() {
            l && (l = !1, e.onLeaveChannel());
        },
        joinChannel: function() {
            l = !0, e.onJoinChannel(this.data.sid, this.data.ssid || this.data.sid);
        },
        statechange: function(e) {
            var t = parseInt(e.detail.code);
            switch (clearTimeout(r), r = null, t) {
              case 2001:
              case 2002:
                break;

              case 2003:
              case 2004:
                this.triggerEvent("hidePageLoading"), this.setData({
                    playEndMessage: "",
                    isHidden: !1,
                    isLoading: !1
                }), f || (f = !0), d || (this.checkNetwork(), d = !0), this.stopPlayOtherLeaveTimer();
                break;

              case 2006:
                this.playEndHandler("end", 2006);

              case -2301:
                this.playEndHandler("reLoad", -2301);
                break;

              case 3001:
              case 3002:
              case 3003:
              case 3005:
                this.playEndHandler("connectFail", 3005);
                break;

              case -2302:
              case 2101:
                this.playEndHandler("decodeFail", 2101);
                break;

              case 2102:
                this.playEndHandler("decodeFail", 2102);
            }
            s("live_statechange", {
                sid: this.data.sid,
                ssid: this.data.ssid
            }, e);
        },
        netstatus: function(e) {
            y || (y = !0);
            var t = e.detail.info.videoWidth, i = e.detail.info.videoHeight;
            0 !== t & 0 !== i && (g === i && p === t || this.calcVideoAreaRect(t, i));
        },
        playVideo: function() {
            this.setData({
                isHidden: !1
            }), u.play();
        },
        calcVideoAreaRect: function(e, t) {
            var i = this, a = parseInt(e, 10), n = parseInt(t, 10), d = a / n, r = this.data.fixedWidth || c.windowWidth, h = this.data.fixedHeight || c.windowHeight, l = "";
            if (i.setData({
                ratio: d
            }), p = a, g = n, this.triggerEvent("setRatio", {
                ratio: d
            }), !i.data.isFixedSize) {
                var o = function(e) {
                    var t = r / e;
                    t = e >= 1 ? t : c.windowHeight, i.setData({
                        playerWidth: r + "px",
                        playerHeight: Math.ceil(t) + "px"
                    });
                };
                i.data.fixedHeight ? (l = h * d + "px", i.setData({
                    playerWidth: l,
                    playerHeight: i.data.fixedHeight
                })) : d ? o(d >= 1 ? d : a / n) : (a = r, o(4 / 3)), this.triggerEvent("playerRectChange", {
                    playerWidth: i.data.playerWidth,
                    playerHeight: i.data.playerHeight
                }, {}), s("calcVideoAreaRect", {
                    sid: this.data.sid,
                    ssid: this.data.ssid
                }, {
                    w: e,
                    h: t,
                    playerWidth: i.data.playerWidth,
                    playerHeight: i.data.playerHeight,
                    ratio: d
                });
            }
        },
        checkNetwork: function() {
            var e = this;
            wx.getNetworkType({
                success: function(t) {
                    "wifi" != t.networkType ? wx.showToast({
                        title: "正在非wifi环境"
                    }) : e.setData({
                        isLoading: !1
                    });
                }
            });
        }
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                isHidden: !1
            }), wx.getStorageSync("HDSDK_openid") || this.triggerEvent("getOpenId");
        },
        hide: function() {
            this.leaveChannel();
        }
    },
    detached: function() {
        this.stopPlayOtherLeaveTimer(), this.leaveChannel();
    },
    ready: function() {
        v.mark("pageInit"), this.setData({
            isHidden: !1
        }), u = wx.createLivePlayerContext("myLivePlayer", this), this.getSystemInfo();
    }
});