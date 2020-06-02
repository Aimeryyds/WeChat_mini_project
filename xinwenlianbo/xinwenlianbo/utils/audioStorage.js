function a(a, t, i) {
    console.log("存缓存isplay=" + i.data.isPlaying), t.audioCurTime = i.data.getCurTime, 
    t.audiotitle = i.data.vTitle, t.audiostate = i.data.isPlaying, console.log("存储缓存that.data.vId=" + i.data.vId), 
    console.log("存储缓存that.data.max=" + i.data.max), t.vId = i.data.vId, t.audioztime = i.data.max;
    var e = wx.getStorageSync(a);
    "undefined" == t.vId && (t.vId = e.vId), "undefined" == t && (t.audioztime = e.audioztime), 
    wx.setStorage({
        key: a,
        data: t,
        success: function() {
            var t = wx.getStorageSync(a);
            console.log("缓存成功，打印storageaudio" + t.vId);
        },
        fail: function() {
            console.log("缓存失败");
        }
    });
}

function t(a) {
    wx.removeStorage({
        key: a,
        success: function(t) {
            console.log("清除缓存成功" + a);
        }
    });
}

function i(a) {
    return a > 3600 ? [ parseInt(a / 60 / 60), parseInt(a / 60 % 60), parseInt(a % 60) ].join(":").replace(/\b(\d)\b/g, "0$1") : [ parseInt(a / 60 % 60), parseInt(a % 60) ].join(":").replace(/\b(\d)\b/g, "0$1");
}

module.exports = {
    readAudio: function(a, t) {
        console.log("读取音频缓存"), wx.getStorage({
            key: a,
            success: function(a) {
                console.log("res.data.audiostate" + a.data.audiostate), console.log("max" + a.data.audioztime + "vTitle=" + a.data.audiotitle), 
                1 == a.data.audiostate ? t.setData({
                    audioIsHide: !1,
                    isAudio: !0,
                    max: a.data.audioztime,
                    isPlaying: a.data.audiostate,
                    vId: a.data.vId,
                    getCurTime: a.data.audioCurTime,
                    vTitle: a.data.audiotitle
                }) : t.setData({
                    audioIsHide: !0,
                    isAudio: !1,
                    max: a.data.audioztime,
                    isPlaying: a.data.audiostate,
                    vId: a.data.vId,
                    getCurTime: a.data.audioCurTime,
                    vTitle: a.data.audiotitle
                });
            },
            fail: function() {
                console.log("读取storageAudio缓存fail，隐藏播放浮窗"), setTimeout(function() {
                    t.setData({
                        audioIsHide: !0,
                        isAudio: !1,
                        max: 0,
                        isPlaying: !1,
                        vId: "",
                        getCurTime: 0,
                        vTitle: ""
                    });
                }, 200), console.log("audioIsHide=" + t.data.audioIsHide), console.log("isAudio=" + t.data.isAudio), 
                console.log("max=" + t.data.max);
            }
        });
    },
    saveAudio: a,
    removeAudio: t,
    secondTransferTime: i,
    songToggle: function(a, i) {
        console.log("进入点击方法"), 0 == a.data.isAudio ? (i.play(), a.setData({
            isAudio: !0,
            isPlaying: !0,
            audioIsHide: !1
        })) : (i.pause(), t("storageAudio"), a.setData({
            audioIsHide: !0,
            isAudio: !1,
            isPlaying: !1
        }));
    },
    seek: function(a, t, e) {
        if (void 0 == e) o = a.wxzxSlider.properties.value; else var o = parseInt(e);
        var d = parseInt(o), s = i(d);
        a.setData({
            pass_time: s,
            getCurTime: d,
            isAudio: !0,
            isPlaying: !0
        }), t.seek(Number(d));
    },
    audioEvent: function(e, o) {
        o.onStop(function() {
            setTimeout(function() {
                e.setData({
                    value: 0,
                    getCurTime: 0,
                    pass_time: "00:00",
                    total_time: i(e.data.max),
                    percent: 0,
                    isAudio: !1,
                    isPlaying: !1,
                    audioIsHide: !0
                }), t("storageAudio");
            }, 200);
        }), o.onPause(function() {
            wx.getSystemInfo({
                success: function(a) {
                    a.system.indexOf("iOS") > -1 || o.stop();
                }
            }), setTimeout(function() {
                e.setData({
                    isAudio: !1,
                    isPlaying: !1,
                    audioIsHide: !0
                }), a("storageAudio", e.data.dataAudio, e);
            }, 500);
        }), o.onPlay(function() {
            e.setData({
                audioIsHide: !1,
                isAudio: !0,
                isPlaying: !0
            }), a("storageAudio", e.data.dataAudio, e);
        }), o.onWaiting(function() {
            wx.showToast({
                title: "音频加载中",
                icon: "loading",
                mask: !0
            });
        }), o.onEnded(function() {
            setTimeout(function() {
                e.setData({
                    value: 0,
                    getCurTime: 0,
                    pass_time: "00:00",
                    total_time: i(e.data.max),
                    percent: 0,
                    isAudio: !1,
                    isPlaying: !1,
                    audioIsHide: !0
                }), console.log("执行onend"), t("storageAudio");
            }, 200);
        }), o.onTimeUpdate(function() {
            if (e.wxzxSlider.properties.isMonitoring) {
                var a = o.currentTime.toFixed(0);
                console.log("currentTime=" + a), console.log("that.data.max=" + e.data.max), 0 == e.data.max && a > 0 && e.setData({
                    max: o.duration
                }), a > e.data.max && (a = e.data.max);
                var t = i(a);
                e.setData({
                    value: a,
                    getCurTime: a,
                    pass_time: t,
                    total_time: i(e.data.max),
                    isAudio: !0,
                    isPlaying: !0,
                    audioIsHide: !1
                }), o.buffered > 0 ? e.setData({
                    percent: o.buffered / e.data.max * 100
                }) : 0 == o.buffered && e.setData({
                    percent: 100
                }), console.log("执行onTimeUpdate currentTime=" + a), console.log("that.data.isplaying=" + e.data.isPlaying);
            }
        });
    }
};