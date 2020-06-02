var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), i = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), r = t(require("../../services/txVideo")), a = require("../../store/index"), n = require("./service");

function s(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, r);
    }
    return i;
}

function o(t) {
    for (var i = 1; i < arguments.length; i++) {
        var r = null != arguments[i] ? arguments[i] : {};
        i % 2 ? s(Object(r), !0).forEach(function(i) {
            (0, e.default)(t, i, r[i]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
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
                t && a.video.instanceMap.set(this.data._uid, this);
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
                t && (this.getUrlList = (0, r.default)(this.data.vid).then(function(t) {
                    return e.urlList = t.url, e.urlList;
                }).catch(function(t) {
                    e.getVideoUrlError = t, t.raw || i.default.error("获取视频地址发生错误", t);
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
                t !== e && this.setData((0, n.formatDuration)(t));
            }
        },
        controls: Boolean,
        autoplay: Boolean,
        initialTime: Number,
        direction: Number,
        poster: String,
        showFullscreenBtn: Boolean,
        showCenterPlayBtn: Boolean,
        autoPauseOther: Boolean
    },
    data: {
        duration: 0,
        fullScreen: !1,
        showCover: !0,
        showRetryTips: !1,
        showErrorTips: !1
    },
    created: function() {
        Object.assign(this, {
            urlList: [],
            urlIndex: 0,
            currentTime: 0,
            canTriggerLast3SecEvent: !1,
            playContinue: !1,
            playing: !1,
            replayInitialTime: 0,
            retryCountWhenError: 0,
            getVideoUrlError: null,
            getUrlList: Promise.resolve()
        }), this.onPauseAll = this.onPauseAll.bind(this), a.video.on(a.video.event.pauseAll, this.onPauseAll);
    },
    attached: function() {
        "ios" !== a.systemInfo.platform && this.setData({
            poster: this.data.snapshot
        });
    },
    ready: function() {},
    detached: function() {
        a.video.instanceMap.delete(this.data._uid), a.video.off(a.video.event.pauseAll, this.onPauseAll);
    },
    methods: {
        tapCover: function(t) {
            this.play(), this.triggerEvent("tapVideo");
        },
        tapVideo: function() {
            this.data.showCover && this.play(), this.triggerEvent("tapVideo");
        },
        onShowConfirm: function() {
            this.data.autoPauseOther && a.video.pauseOther(this.data._uid);
        },
        onPlay: function(t) {
            i.default.info("触发播放事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex])), 
            this.playing = !0, this.data.autoPauseOther && a.video.pauseOther(this.data._uid);
            var e = o({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("play", e);
        },
        onPause: function(t) {
            i.default.info("触发暂停事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex])), 
            this.playing = !1, a.video.pauseSelf(this.data._uid);
            var e = o({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("pause", e);
        },
        onEnded: function(t) {
            i.default.info("触发结束事件vid=".concat(this.data.vid, ", title=").concat(this.data.title, ", url=").concat(this.urlList[this.urlIndex]));
            this.setData({
                showCover: !0,
                src: "",
                autoplay: !1
            }), this.playing = !1, this.currentTime = 0, a.video.pauseSelf(this.data._uid);
            var e = o({}, t.detail, {
                vid: this.data.vid,
                _uid: this.data._uid
            });
            this.triggerEvent("ended", e);
        },
        onError: function(t) {
            var e = this;
            i.default.error("视频播放出错: ", t, this.currentTime), this.data.src = "", this.data.autoplay = !1, 
            this.retryCountWhenError > this.urlList.length || 0 === this.urlList.length ? this.pause({
                showRetryTips: !0
            }) : (this.urlIndex = (this.urlIndex + 1) % this.urlList.length, this.retryCountWhenError += 1, 
            this.playing && setTimeout(function() {
                var t = {};
                e.currentTime && (t.replayInitialTime = e.currentTime), i.default.error("尝试重新播放视频: ", e.urlList, e.urlIndex), 
                e.setVideoSrc(t);
            }, 1e3));
        },
        onTimeUpdate: function(t) {
            if (this.playing = !0, this.data.fullScreen) this.canTriggerLast3SecEvent = !0; else {
                var e = t && t.detail || {}, i = e.duration, r = e.currentTime;
                this.currentTime = r, i - r < 3 ? this.canTriggerLast3SecEvent && (this.canTriggerLast3SecEvent = !1, 
                this.triggerEvent("next")) : this.canTriggerLast3SecEvent = !0;
            }
        },
        onFullscreenChange: function(t) {
            var e = t && t.detail || {}, i = e.fullScreen;
            this.data.fullScreen !== i && this.setData({
                fullScreen: i
            }), this.triggerEvent("fullscreenchange", e);
        },
        onPauseAll: function(t) {
            t !== this.data._uid && this.pause();
        },
        play: function() {
            var t = this;
            if (this.getVideoUrlError) return i.default.error("视频不存在", this.getVideoUrlError), 
            void this.setData({
                showCover: !0,
                showErrorTips: !0,
                autoplay: !1,
                src: ""
            });
            i.default.info("被动触发播放"), this.playing && !1 === this.data.showCover || (i.default.info("vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
            this.setData({
                showCover: !1
            }, function() {
                t.data.autoPauseOther && a.video.pauseOther(t.data._uid);
                var e = {};
                t.currentTime && (e.replayInitialTime = t.currentTime), t.setVideoSrc(e);
            }));
        },
        pause: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !1 === this.playing && this.data.showCover || (i.default.info("被动触发暂停: vid=".concat(this.data.vid, ", title=").concat(this.data.title)), 
            t.showCover = !0, t.src = "", t.autoplay = !1, this.setData(t), this.playing = !1, 
            a.video.pauseSelf(this.data._uid));
        },
        setVideoSrc: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.autoplay = !0, this.getUrlList.then(function(r) {
                if (t.getVideoUrlError || 0 === r.length) i.default.error("视频不存在", t.getVideoUrlError, r), 
                t.pause({
                    showErrorTips: !0
                }); else {
                    e.src = r[t.urlIndex], t.setData(e), t.playing = !0;
                    var a = t.data, n = a.vid, s = a.title, o = a.src;
                    i.default.info("开始播放视频：vid=".concat(n, ", title=").concat(s, ", src=").concat(o, ", urlIndex=").concat(t.urlIndex));
                }
            });
        }
    }
});