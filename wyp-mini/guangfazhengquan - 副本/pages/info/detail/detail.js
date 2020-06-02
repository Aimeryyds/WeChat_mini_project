function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a, i = t(require("../../../components/circus/toast/toast.js")), o = t(require("../../../components/http")), n = require("../../../components/bridge"), s = t(require("../../../config")), r = require("../../../components/utils"), d = t(require("../../../components/html-entity-decoder"));

getApp().View({
    beacon: {
        name: "资讯详情",
        canShare: !0,
        shareOptions: {}
    },
    data: (a = {
        info: null,
        loading: !1,
        type: "",
        poster: "",
        name: "",
        author: [],
        src: ""
    }, e(a, "type", ""), e(a, "onoff", !0), e(a, "once", !0), e(a, "process", ""), e(a, "total", ""), 
    e(a, "slider_value", ""), e(a, "slider_max", ""), e(a, "isStop", !0), e(a, "audioList", []), 
    e(a, "currentIndex", 0), a),
    id: null,
    onLoad: function(t) {
        var e = t.id, a = t.type;
        (0, n.setNavigationBarTitle)({
            title: "资讯详情"
        }), this.beacon.shareOptions.path = "/pages/info/detail/detail?id=" + e, this.id = e, 
        this.setData({
            type: a
        }), this.getFetchInfoDetail(this.id), console.log(this.data.type);
    },
    getFetchInfoDetail: function(t) {
        var e = this;
        this.fetchInfoDetail(t).done(function(t) {
            var a = t.data.data;
            a && a.length > 0 && ((a = a[0].data).publishTime = (0, r.formatDate)(new Date(1e3 * a.publishTime), "yyyy-MM-dd hh:mm:ss"), 
            a.content = e.filterHtml(a.content)), "audio" === e.data.type && (e.fetchInfoAudio(), 
            e.data.once && (e.audioManger(a), e.setData({
                once: !1
            }))), e.beacon.shareOptions.title = a && a.title ? a.title : "资讯详情", e.setData({
                info: a
            });
        }).fail(function() {
            i.default.show(e, "出错啦");
        }).always(function() {
            return e.setData({
                loading: !1
            });
        });
    },
    audioManger: function(t) {
        var e = this;
        this.audioCtx = wx.getBackgroundAudioManager(), this.audioCtx.autoplay = !0, console.log(t);
        var a = t.attachments[0];
        if (t.authors) {
            var i = [];
            t.authors.map(function(t) {
                i.push({
                    name: t.name
                });
            }), this.setData({
                author: i,
                name: t.title
            });
        }
        this.audioCtx.title = t.title, this.audioCtx.src = a.url, this.setData({
            src: a.url
        }), console.log("自动播放开始1111111"), this.audioCtx.onTimeUpdate(function() {
            var t = e.audioCtx.currentTime > 0 ? e.audioCtx.currentTime.toFixed(0) : 0, a = e.audioCtx.duration > 0 ? e.audioCtx.duration.toFixed(0) : 0, i = e.audioCtx.currentTime > 0 ? e.formatTime(e.audioCtx.currentTime) : "0:00", o = e.audioCtx.duration > 0 ? e.formatTime(e.audioCtx.duration) : "0:00";
            t === a && a > 0 && e.next(), e.setData({
                process: t,
                total: a,
                slider_value: i,
                slider_max: o
            });
        });
    },
    fetchInfoAudio: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, a = this;
        arguments[2], arguments[3];
        return (0, o.default)({
            url: s.default.SER_URL + "/api/wechat/info/1.0.0/info/speak",
            data: {
                page: t,
                pageSize: e
            }
        }, this, !0).done(function(t) {
            var e = ((t.data || []).data || []).map(function(t, e) {
                return t.mssageType = "audio", t.audioIndex = e, t;
            });
            a.setData({
                audioList: e
            }), console.log(e), a.onoff && (e.map(function(t) {
                t.id == a.id && a.setData({
                    currentIndex: t.audioIndex
                });
            }), a.onoff = !1);
        }).fail(function() {
            i.default.show(a, "出错啦");
        });
    },
    formatTime: function(t) {
        if (t < 60) return "00:" + (t < 10 ? "0" + t.toFixed(0) : t.toFixed(0));
        var e = Math.floor(t / 60), a = (t - 60 * e).toFixed(0);
        return e = e < 10 ? "0" + e : e, a = a < 10 ? "0" + a : a, e + ":" + a;
    },
    sliderChange: function(t) {
        this.audioCtx.seek(t.detail.value);
    },
    sliderChanging: function(t) {
        this.setData({
            slider_value: this.formatTime(t.detail.value)
        });
    },
    next: function() {
        var t = 19 == this.data.currentIndex ? 0 : this.data.currentIndex + 1, e = this.data.audioList[t];
        this.setData({
            currentIndex: t,
            isStop: !0
        }), this.audioManger(e), this.getFetchInfoDetail(e.id), console.log("下一首");
    },
    prev: function() {
        var t = 0 == this.data.currentIndex ? this.data.audioList.length - 1 : this.data.currentIndex - 1, e = this.data.audioList[t];
        this.setData({
            currentIndex: t,
            isStop: !0
        }), this.audioManger(this.data.audioList[t]), this.getFetchInfoDetail(e.id), console.log("上一首");
    },
    stop: function() {
        console.log("暂停"), this.audioCtx.pause(), this.setData({
            isStop: !1
        });
    },
    play: function() {
        console.log("播放"), this.audioCtx.play(), this.setData({
            isStop: !0
        });
    },
    fetchInfoDetail: function(t) {
        return (0, o.default)({
            url: s.default.SER_URL + "/api/wechat/info/1.0.0/info/data/" + t,
            data: {}
        }, this, !0);
    },
    onUnload: function() {
        "audio" === this.data.type && this.audioCtx.stop();
    },
    filterHtml: function(t) {
        return t = t.replace(/&quot/gi, "&apos"), t = (0, d.default)(t).replace(/ height=["|'](\d*(.\d+)*)%*["|']/g, "").replace(/ style="([^\"]*)"/gi, "").replace(/ style='([^\']*)'/gi, "").replace(/<img /gi, '<img style="max-width:100%;" ').replace(/<div /gi, '<div style="padding-top:20px;" ').replace(/<p /gi, '<p style="padding-top:20px;" ').replace(/<div>/gi, '<div style="padding-top:20px;">').replace(/<p>/gi, '<p style="padding-top:20px;">').replace(/&nbsp;/g, "").replace(/>\s+</g, "><").replace(/<br\s?\/>/g, "").replace(/<p><\/p>/g, "").replace(/<font/gi, "<span").replace(/<\/font>/gi, "</span>").replace(/<span><\/span>/g, "").replace(/<\/?article>/g, "").replace(/\n+(\s+)?/g, "<br /><br />");
    }
});