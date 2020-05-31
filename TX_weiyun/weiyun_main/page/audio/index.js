var a = require("../../external/mta_analysis.js"), o = require("../../common/md.js"), i = require("../../external/format.js"), n = i.size, u = i.longTime, d = {};

Page({
    onLoad: function(i) {
        o.log("[audio page]: audio onLoad"), a.Page.init(), i = i || {}, d.audioSrc = decodeURIComponent(i.audio_src), 
        d.audioName = decodeURIComponent(i.audio_name), d.audioSize = parseInt(i.audio_size);
    },
    onReady: function() {
        var a = this;
        o.log("[audio page]: audio onReady"), this.setData({
            audioName: d.audioName,
            audioSize: n(d.audioSize)
        }), this.backgroundAudioManager = wx.getBackgroundAudioManager(), this.backgroundAudioManager.title = d.audioName, 
        this.backgroundAudioManager.src = d.audioSrc, this.backgroundAudioManager.onCanplay(function() {
            o.log("[audio page]: playBackgroundAudio, onCanplay");
        }), this.backgroundAudioManager.onPlay(function() {
            o.log("[audio page]: playBackgroundAudio, onPlay"), a.setData({
                audioPlay: !0
            });
        }), this.backgroundAudioManager.onPause(function() {
            o.log("[audio page]: playBackgroundAudio, onPause"), a.setData({
                audioPlay: !1
            });
        }), this.backgroundAudioManager.onStop(function() {
            o.log("[audio page]: playBackgroundAudio, onStop"), a.setData({
                audioPlay: !1,
                audioTime: "00:00",
                audioProgess: 0
            });
        }), this.backgroundAudioManager.onEnded(function() {
            o.log("[audio page]: playBackgroundAudio, onEnded"), a.setData({
                audioPlay: !1
            });
        }), this.backgroundAudioManager.onTimeUpdate(function() {
            a.setData({
                audioTime: u(a.backgroundAudioManager.currentTime),
                audioDuration: u(a.backgroundAudioManager.duration),
                audioProgess: parseInt(100 * a.backgroundAudioManager.currentTime / a.backgroundAudioManager.duration)
            });
        }), this.backgroundAudioManager.onError(function(a) {
            o.log("[audio page]: playBackgroundAudio, onError: " + JSON.stringify(a)), o.write(), 
            a = a || {};
            var i = {
                10001: "系统错误",
                10002: "网络错误",
                10003: "文件错误",
                10004: "格式错误",
                "-1": "未知错误",
                default: "未知错误"
            };
            wx.showToast({
                title: i[String(a.errCode)] || i.default,
                icon: "none"
            });
        }), this.backgroundAudioManager.onWaiting(function() {});
    },
    onUnload: function() {
        this.backgroundAudioManager.stop();
    },
    bindPlayTap: function() {
        this.backgroundAudioManager.play();
    },
    bindPauseTap: function() {
        this.backgroundAudioManager.pause();
    },
    bindSeek: function(a) {
        var o = parseInt(a.detail.value * this.backgroundAudioManager.duration / 100);
        this.backgroundAudioManager.seek(o);
    },
    onStatusBarInited: function(a) {
        this.setData({
            statusBarHeight: a.detail.height || 64
        });
    },
    data: {
        statusBarHeight: 0,
        audioTime: "00:00",
        audioDuration: "00:00",
        audioProgess: 0,
        audioPlay: !1
    }
});