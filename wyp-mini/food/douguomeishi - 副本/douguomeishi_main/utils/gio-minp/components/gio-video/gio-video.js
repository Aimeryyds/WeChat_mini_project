var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = function(t) {
    return t && "object" == (void 0 === t ? "undefined" : e(t)) && "default" in t ? t.default : t;
}(require("../../index"));

Component({
    properties: {
        src: String,
        duration: Number,
        controls: {
            type: Boolean,
            value: !0
        },
        danmuList: Array,
        danmuBtn: {
            type: Boolean,
            value: !1
        },
        danmuDanmu: {
            type: Boolean,
            value: !1
        },
        autoplay: {
            type: Boolean,
            value: !1
        },
        loop: {
            type: Boolean,
            value: !1
        },
        muted: {
            type: Boolean,
            value: !1
        },
        initialTime: Number,
        pageGesture: {
            type: Boolean,
            value: !1
        },
        direction: Number,
        showProgress: {
            type: Boolean,
            value: !0
        },
        showFullScreenBtn: {
            type: Boolean,
            value: !0
        },
        showPlayBtn: {
            type: Boolean,
            value: !0
        },
        showCenterPlayBtn: {
            type: Boolean,
            value: !0
        },
        enableProgressGesture: {
            type: Boolean,
            value: !0
        },
        objectFit: {
            type: String,
            value: "contain"
        },
        poster: String,
        showMuteBtn: {
            type: Boolean,
            value: !1
        },
        title: String,
        playBtnPosition: {
            type: String,
            value: "bottom"
        },
        enablePlayGesture: {
            type: Boolean,
            value: !1
        },
        autoPauseIfNavigate: {
            type: Boolean,
            value: !0
        },
        autoPauseIfOpenNative: {
            type: Boolean,
            value: !0
        },
        eventList: {
            type: Object,
            value: {}
        }
    },
    data: {},
    created: function() {
        this.giovideoTm = {
            currentTime: 0,
            duration: 0
        };
    },
    methods: {
        bindplay: function(e) {
            this.sendVideoData(e), this.properties.eventList.bindplay && this.properties.eventList.bindplay(e);
        },
        bindpause: function(e) {
            this.sendVideoData(e), this.properties.eventList.bindpause && this.properties.eventList.bindpause(e);
        },
        bindended: function(e) {
            this.sendVideoData(e), this.properties.eventList.bindended && this.properties.eventList.bindended(e);
        },
        bindtimeupdate: function(e) {
            this.giovideoTm.currentTime = e.detail.currentTime, this.giovideoTm.duration = e.detail.duration, 
            this.properties.eventList.bindtimeupdate && this.properties.eventList.bindtimeupdate(e);
        },
        bindfullscreenchange: function(e) {
            this.properties.eventList.bindfullscreenchange && this.properties.eventList.bindfullscreenchange(e);
        },
        bindwaiting: function(e) {
            this.sendVideoData(e), this.properties.eventList.bindwaiting && this.properties.eventList.bindwaiting(e);
        },
        binderror: function(e) {
            this.sendVideoData(e), this.properties.eventList.binderror && this.properties.eventList.binderror(e);
        },
        bindprogress: function(e) {
            this.properties.eventList.bindprogress && this.properties.eventList.bindprogress(e);
        },
        sendVideoData: function(e) {
            t("sendVideoCstm", {
                type: e.type,
                var: {
                    src: e.currentTarget.dataset.src,
                    title: e.currentTarget.dataset.title,
                    currentTime: this.giovideoTm.currentTime,
                    duration: this.giovideoTm.duration,
                    errorMsg: "error" === e.type ? e.detail.errMsg : void 0
                }
            });
        }
    }
});