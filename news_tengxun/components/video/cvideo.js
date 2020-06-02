var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), i = t(require("../../utils/mlodash")), r = t(require("../../utils/logger")), a = t(require("../../services/txVideo")), s = require("./service"), n = require("../../store/index");

function o(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, r);
    }
    return i;
}

function h(t) {
    for (var i = 1; i < arguments.length; i++) {
        var r = null != arguments[i] ? arguments[i] : {};
        i % 2 ? o(Object(r), !0).forEach(function(i) {
            (0, e.default)(t, i, r[i]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

Component({
    properties: {
        _uid: {
            type: String,
            observer: function(t) {
                t && n.video.instanceMap.set(this.data._uid, this);
            }
        },
        articleId: String,
        atype: Number,
        playCount: Number,
        snapshot: String,
        vid: {
            type: String,
            value: "",
            observer: function(t) {
                var e = this;
                t && (this.getUrlList = (0, a.default)(this.data.vid).then(function(t) {
                    return e.urlList = t.url, e.urlList;
                }).catch(function(t) {
                    e.getVideoUrlError = t, t.raw || r.default.error("获取视频地址发生错误", t);
                }));
            }
        },
        width: String,
        height: String,
        borderRadius: String,
        title: String,
        src: String,
        durationStr: {
            type: String,
            observer: function(t, e) {
                t !== e && this.setData((0, s.formatDuration)(t));
            }
        },
        controls: Boolean,
        autoplay: Boolean,
        initialTime: Number,
        direction: Number,
        poster: String,
        showFullscreenBtn: Boolean,
        showCenterPlayBtn: Boolean,
        showProgress: Boolean,
        showPlayBtn: Boolean,
        showCoverTitle: Boolean,
        autoPauseOther: Boolean,
        showTopTitle: Boolean
    },
    data: {
        duration: 0,
        titleClass: "title",
        playBtnClass: "play-btn-box",
        fullScreen: !1,
        showCover: !0,
        showRetryTips: !1,
        showErrorTips: !1,
        playCountStr: "",
        progressBarIsShowing: !0,
        playing: !1
    },
    created: function() {
        Object.assign(this, {
            ctx: null,
            urlList: [],
            urlIndex: 0,
            currentTime: 0,
            canTriggerLast3SecEvent: !1,
            playContinue: !1,
            replayInitialTime: 0,
            retryCountWhenError: 0,
            seeking: !1,
            getVideoUrlError: null,
            getUrlList: Promise.resolve()
        }), this.onPauseAll = this.onPauseAll.bind(this), n.video.on(n.video.event.pauseAll, this.onPauseAll);
    },
    attached: function() {},
    ready: function() {},
    detached: function() {
        n.video.instanceMap.delete(this.data._uid), n.video.off(n.video.event.pauseAll, this.onPauseAll);
    },
    methods: {
        tapCover: function() {
            this.play(), this.triggerEvent("tapVideo");
        },
        tapVideo: function() {
            this.data.progressBarIsShowing ? this.hideProgressBar() : this.showProgressBar(), 
            this.data.showCover && this.play(), this.triggerEvent("tapVideo");
        },
        tapProgressBarPlayBtn: function() {
            this.data.playing ? this.pause() : this.play();
        },
        tapProgressBarFullscreenBtn: function() {
            this.data.fullScreen || (this.setData({
                controls: !0,
                fullScreen: !0
            }), this.ctx.requestFullScreen());
        },
        onShowConfirm: function() {
            this.data.autoPauseOther && n.video.pauseOther(this.data._uid);
        },
        onPlay: function(t) {
            var e = this;
            r.default.info("触发播放事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex])), 
            this.data.playing || (this.data.playing = !0, this.setData({
                playing: !0
            })), this.data.autoPauseOther && n.video.pauseOther(this.data._uid), clearTimeout(this.hideProgressBarTimer), 
            this.hideProgressBarTimer = setTimeout(function() {
                e.hideProgressBar();
            }, 5e3);
            var i = h({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("play", i);
        },
        onPause: function(t) {
            r.default.info("触发暂停事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex])), 
            this.data.playing && (this.data.playing = !1, this.setData({
                playing: !1
            })), n.video.pauseSelf(this.data._uid), clearTimeout(this.hideProgressBarTimer);
            var e = h({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("pause", e);
        },
        onEnded: function(t) {
            r.default.info("触发结束事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex]));
            this.setData({
                showCover: !0,
                src: "",
                autoplay: !1,
                playing: !1
            }), this.data.playing = !1, this.currentTime = 0, n.video.pauseSelf(this.data._uid);
            var e = h({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("ended", e);
        },
        onError: function(t) {
            var e = this;
            this.ctx.pause(), r.default.error("视频播放出错: ", t, this.currentTime), this.data.src = "", 
            this.data.autoplay = !1, this.retryCountWhenError > this.urlList.length || 0 === this.urlList.length ? this.pause({
                showRetryTips: !0
            }) : (this.urlIndex = (this.urlIndex + 1) % this.urlList.length, this.retryCountWhenError += 1, 
            this.data.playing && setTimeout(function() {
                var t = {};
                e.currentTime && (t.replayInitialTime = e.currentTime), r.default.error("尝试重新播放视频: ", e.urlList, e.urlIndex), 
                e.setVideoSrc(t);
            }, 1e3));
        },
        onTimeUpdate: function(t) {
            if (this.data.playing || (this.data.playing = !0, this.setData({
                playing: !0
            })), this.data.fullScreen) this.canTriggerLast3SecEvent = !0; else {
                var e = t && t.detail || {}, i = e.duration, r = e.currentTime;
                this.data.progressBarIsShowing && !this.seeking && (n.video.updateCurrentTime(this.data._uid, r), 
                n.video.updateProgressBar(this.data._uid, r)), this.currentTime = r, i - r < 3 ? this.canTriggerLast3SecEvent && (this.canTriggerLast3SecEvent = !1, 
                this.triggerEvent("next")) : this.canTriggerLast3SecEvent = !0;
            }
        },
        onFullscreenChange: function(t) {
            var e = t && t.detail || {}, r = e.fullScreen, a = {};
            this.data.controls !== r && (a.controls = r), this.data.fullScreen !== r && (a.fullScreen = r), 
            i.default.isEmpty(a) || this.setData(a), this.triggerEvent("fullscreenchange", e);
        },
        onProgressBarChange: function(t) {
            var e = this, i = t && t.detail || {};
            this.ctx.seek(i.value), setTimeout(function() {
                e.seeking = !1;
            }, 100), clearTimeout(this.hideProgressBarTimer), this.hideProgressBarTimer = setTimeout(function() {
                e.hideProgressBar();
            }, 5e3);
        },
        onProgressBarChanging: function(t) {
            this.seeking = !0, clearTimeout(this.hideProgressBarTimer);
        },
        onPauseAll: function(t) {
            t !== this.data._uid && this.pause({
                showCover: !0
            });
        },
        hideProgressBar: function() {
            this.data.progressBarIsShowing && !this.seeking && (this.data.progressBarIsShowing = !1, 
            this.setData({
                progressBarIsShowing: !1
            }));
        },
        showProgressBar: function() {
            var t = this;
            n.video.updateCurrentTime(this.data._uid, this.currentTime), this.data.progressBarIsShowing = !0, 
            this.setData({
                progressBarIsShowing: !0
            }), clearTimeout(this.hideProgressBarTimer), this.hideProgressBarTimer = setTimeout(function() {
                t.hideProgressBar();
            }, 5e3);
        },
        play: function() {
            var t = this;
            if (this.getVideoUrlError) return r.default.error("视频不存在", this.getVideoUrlError), 
            void this.setData({
                showCover: !0,
                showErrorTips: !0,
                autoplay: !1,
                src: ""
            });
            if (r.default.info("被动触发播放"), !1 === this.data.showCover) {
                if (this.data.playing) return;
                r.default.info("vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
                this.data.playing = !0, this.setData({
                    playing: !0
                }), this.ctx.play(), this.data.autoPauseOther && n.video.pauseOther(this.data._uid);
            } else r.default.info("vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
            this.setData({
                showCover: !1
            }, function() {
                t.data.autoPauseOther && n.video.pauseOther(t.data._uid);
                var e = {};
                t.currentTime && (e.replayInitialTime = t.currentTime), t.setVideoSrc(e).then(function() {
                    t.ctx = wx.createVideoContext(t.data._uid, t);
                });
            });
        },
        pause: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.data.showCover) return this.data.src = "", this.data.autoplay = !1, this.data.playing && (r.default.info("vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
            t.playing = !1), void (i.default.isEmpty(t) || this.setData(t));
            r.default.info("被动触发暂停: vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
            t.showCover || t.showRetryTips || t.showErrorTips ? (t.src = "", t.autoplay = !1, 
            t.showCover = !0, this.ctx = null) : this.ctx.pause(), this.data.playing && (t.playing = !1, 
            this.data.playing = !1), this.setData(t), n.video.pauseSelf(this.data._uid);
        },
        setVideoSrc: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.data.playing = !0, e.autoplay = !0, this.getUrlList.then(function(i) {
                if (t.getVideoUrlError || 0 === i.length) r.default.error("视频不存在", t.getVideoUrlError, i), 
                t.pause({
                    showErrorTips: !0
                }); else {
                    e.src = i[t.urlIndex], e.playing = !0, t.setData(e);
                    var a = t.data, s = a.vid, n = a.title, o = a.src;
                    r.default.info("开始播放视频：vid=".concat(s, ", title=").concat(n, ", src=").concat(o, ", urlIndex=").concat(t.urlIndex));
                }
            });
        }
    }
});