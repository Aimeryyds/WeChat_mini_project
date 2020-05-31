var t = require("../../netdiisk_requestapi/streaming.js"), e = require("../../netdisk_utils/common.js"), a = require("../../netdisk_utils/shareFn.js"), i = require("../../netdisk_utils/mediaMixin"), s = require("../../netdisk_utils/logicUtils"), o = require("../../netdisk_utils/wxApiToPromise.js"), r = getApp(), n = !0, d = "bdnetdisk://n/action.MYPLAY?m_n_v=8.3.0";

Page({
    data: {
        systemInfo: r.globalData.systemInfo,
        path: null,
        fileName: null,
        thumbs: null,
        playSrc: null,
        networkStatus: null,
        streamingStatus: !1,
        videoStatus: null,
        retryTimes: 0,
        lock: !1,
        mobileplaysrc: null,
        from: "",
        appParameter: d,
        fromNa: r.globalData.fromNA,
        enterTime: "",
        height: 0,
        showButton: !0,
        saved: 0,
        fromType: "",
        isVideo: !0,
        videoMode: "landscape",
        isPause: !1,
        isEnd: !1,
        ispc: !1
    },
    onLoad: function(t) {
        this.pageType = "previewVideo", this.data.from = t.from;
        var a = t.path && decodeURIComponent(t.path), i = t.filename && decodeURIComponent(t.filename), s = t.thumbs && decodeURIComponent(t.thumbs);
        this.data.userUk = (0, e.getUk)();
        t.md5;
        var o = t.size;
        t.fid;
        this.surl = t.surl || "";
        var n = "share" === t.from ? r.globalData.shareInfo.uk : "", l = wx.getStorageSync("uk"), h = "share" === t.from ? n === l ? 1 : +t.saved : 1;
        +t.saved && !a.includes("/我的资源/") && (a = "/我的资源/" + i), this.setData({
            size: o,
            path: a,
            fileName: i,
            thumbs: s,
            appParameter: d + "&uk=" + this.data.userUk + "&path=" + encodeURIComponent(a) + "&origin=1",
            height: r.globalData.navHeight,
            category: t.category,
            isdir: t.isdir,
            fs_id: t.fid,
            barheight: r.globalData.statusBarHeight + r.globalData.totalHeight + 18,
            imagetype: t.imagetype || -1,
            fromType: t.from,
            isOwner: n === l,
            showButton: "sharedir" === t.from,
            shareid: t.shareid || "",
            shareUk: t.shareuk || "",
            surl: t.surl || "",
            fromNa: r.globalData.fromNA,
            saved: h,
            pwd: t.pwd || ""
        }), this.init(), this.Navbar = this.selectComponent("#Navbar"), this.toast = this.selectComponent("#toast"), 
        this.showDialog = this.selectComponent("#showDialog"), this.Navbar.setTitle(this.data.fileName), 
        e.DETAIL_SHARE || wx.hideShareMenu(), r.globalData.shareDirData.currentDirData.publicMeta.shareinfo && r.globalData.shareDirData.currentDirData.publicMeta.shareinfo.uk + "" != wx.getStorageSync("uk") + "" && this.setData({
            showButton: !1
        }), "share" === this.data.fromType && this.setData({
            showShareView: !0
        }), this.initGlobalData();
    },
    init: function() {
        var t = this;
        this.setData({
            videoStatus: "loading"
        }), t.getVideoSrc(!1), t.getVideoMode(this.data.thumbs);
    },
    getVideoMode: function(t) {
        var e = this;
        t = (t || "").replace(/http:\/\//, "https://");
        var a = function() {
            wx.log.file.videoPreviewMode.send({
                from: e.data.videoMode
            });
        };
        (0, o.getImageInfo)(t).then(function(t) {
            var i = t.width, s = t.height;
            i && s && s / i > 1 && e.setData({
                videoMode: "portrait"
            }), a();
        }, function(t) {
            console.log(t), a();
        });
    },
    setTimer: function() {
        var t = this, e = setInterval(function() {
            "loading" !== t.data.videoStatus && "ready" !== t.data.videoStatus || (t.handleNetworkAndStreamingStatus("errorRetry"), 
            t.setData({
                lock: !0
            })), clearInterval(e);
        }, 2e4);
    },
    getNetworkType: function() {
        var t = this;
        wx.getNetworkType({
            complete: function(e) {
                t.data.networkStatus = e.networkType, t.data.streamingStatus && t.handleNetworkAndStreamingStatus();
            }
        });
    },
    handleResult: function(t) {
        var e = this;
        return !this.data.lock && (t ? t.errno && 0 !== t.errno ? (e.handleNetworkAndStreamingStatus("errorRetry"), 
        !1) : !t.error_code || ("manualTranscode" === e.data.videoStatus && wx.wetoast({
            content: "视频后台处理中，请稍后",
            duration: 2e3
        }), 31347 === t.error_code ? (e.handleNetworkAndStreamingStatus("errorNotSupport"), 
        !1) : 31341 === t.error_code ? (e.handleNetworkAndStreamingStatus("transcode"), 
        !1) : (e.handleNetworkAndStreamingStatus("errorRetry"), !1)) : (e.handleNetworkAndStreamingStatus("errorRetry"), 
        !1));
    },
    getVideoSrc: function(e) {
        var a = this, i = this, s = this.data, o = this.data.from, d = "";
        "share" === o && (d = r.globalData.shareInfo.uk), this.setTimer(), s.networkStatus || i.getNetworkType(), 
        this.setData({
            enterTime: ""
        }), (0, t.videocheck)(this, encodeURIComponent(s.path), d).then(function(e) {
            var s = e.data;
            return n = !0, i.handleResult(s) ? (a.setData({
                videoStatus: "ready"
            }), (0, t.streamingAPI)(a, s.audiotoken)) : Promise.reject();
        }).then(function(a) {
            var r = a.data;
            if (i.handleResult(r)) {
                i.setData({
                    streamingStatus: !0,
                    enterTime: new Date().getTime()
                });
                var n = (0, t.getStreaming)();
                i.setData({
                    mobileplaysrc: n
                }), s.networkStatus && !e && i.handleNetworkAndStreamingStatus(), "playing" === s.videoStatus && (i.setData({
                    playSrc: n
                }), "sharedir" === o ? wx.log.file.shareVideoPreviewSuccess.send() : "share" === o ? wx.log.file.sharePageVideoPreviewSuccess.send() : wx.log.file.normalVideoPreviewSuccess.send());
            }
        }).catch(function(t) {
            console.warn(t);
        });
    },
    retryPlayVideo: function(t) {
        !1 !== n && (t || (this.data.retryTimes = this.data.retryTimes + 1), n = !1, this.setData({
            lock: !1
        }), this.getVideoSrc());
    },
    playVideoBy4G: function() {
        var t = this.data.mobileplaysrc;
        this.setData({
            playSrc: t,
            videoStatus: "playing"
        }), wx.log.file.flowPreview.send();
    },
    playError: function(t) {
        wx.wetoast({
            content: "视频暂时无法加载，请重试",
            duration: 3e3
        }), this.setData({
            videoStatus: "manualRetry"
        });
    },
    handleNetworkAndStreamingStatus: function(t) {
        var e = this, a = this, i = this.data.networkStatus, s = t || this.data.videoStatus, o = this.data.streamingStatus;
        if (!this.data.lock) switch (s) {
          case "transcode":
            a.data.retryTimes > 3 ? (this.setData({
                videoStatus: "manualTranscode"
            }), wx.log.file.videoTranscodeFail.send()) : (this.setData({
                videoStatus: "transcode"
            }), setTimeout(function() {
                e.retryPlayVideo();
            }, 2e3));
            break;

          case "errorRetry":
            a.data.retryTimes > 3 ? (this.setData({
                videoStatus: "manualRetry"
            }), wx.log.file.videoTranscodeFail.send()) : (this.setData({
                videoStatus: "errorRetry"
            }), setTimeout(function() {
                e.retryPlayVideo();
            }, 2e3));
            break;

          case "errorNotSupport":
            this.setData({
                videoStatus: "errorNotSupport"
            }), wx.log.file.videoNotSupport.send();
            break;

          case "ready":
            o && "wifi" !== i ? (console.log("wifi"), this.setData({
                videoStatus: "mobileDataTip"
            }), wx.log.file.flowBtnShow.send()) : (console.log("playing"), this.setData({
                videoStatus: "playing"
            }));
            break;

          default:
            this.setData({
                videoStatus: "errorRetry"
            });
        }
    },
    launchCal: function(t) {
        console.log("launch", t), wx.log.sharepage.video.send();
    },
    play: function() {
        this.videoCtx || (this.videoCtx = wx.createVideoContext("videoComp", this)), this.videoCtx.play();
    },
    pause: function() {
        this.videoCtx || (this.videoCtx = wx.createVideoContext("videoComp", this)), this.videoCtx.pause();
    },
    onPause: function() {
        console.log("pause"), this.setData({
            isPause: !0,
            isEnd: !1
        });
    },
    onEnd: function() {
        this.setData({
            isPause: !1,
            isEnd: !0
        });
    },
    starPlay: function() {
        this.setData({
            isPause: !1,
            isEnd: !1
        });
        var t = new Date().getTime() - this.data.enterTime, e = getApp().mtj;
        e && e.trackEvent("video_tj1", {
            geted_to_play: t,
            video_url: this.data.playSrc,
            time: new Date().getTime()
        });
    },
    share: function() {
        var t = {
            path: this.data.path,
            server_filename: this.data.fileName,
            isdir: this.data.isdir - 0,
            category: this.data.category,
            fs_id: this.data.fs_id,
            thumbs: this.data.thumbs,
            isOneImg: !0
        };
        wx.log.file.VideoPreviewShare.send(), r.globalData.preShareData.list = [ t ];
        var e = {
            from: "video",
            surl: this.surl || "",
            imagetype: this.data.imagetype
        };
        (0, a.jumpToShareSnap)(t, e);
    },
    saveSucc: function() {
        this.setData({
            saved: 1,
            appParameter: d + "&uk=" + this.data.userUk + "&path=" + encodeURIComponent("/我的资源/" + this.data.fileName) + "&origin=1"
        });
    },
    pCode: function() {
        (0, i.pCode)(this.data);
    },
    initGlobalData: function() {
        (0, s.systemInfoSync)(), this.setData({
            ispc: r.globalData.systemInfo.ispc
        });
    }
});