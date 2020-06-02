var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger")), t = require("../../store/index"), a = require("../../services/report");

Component({
    properties: {
        useCustomProgressBar: Boolean,
        autoPauseOther: Boolean,
        _uid: String,
        articleId: String,
        atype: Number,
        chlid: String,
        showType: Number,
        source: String,
        showPlayCount: {
            type: Boolean,
            value: !0
        },
        playCount: {
            type: Number,
            value: 0
        },
        snapshot: String,
        vid: {
            type: String,
            value: ""
        },
        width: {
            type: String,
            value: "750rpx"
        },
        height: {
            type: String,
            value: "422rpx"
        },
        borderRadius: {
            type: String,
            value: "0"
        },
        title: String,
        showCoverTitle: Boolean,
        src: String,
        durationStr: String,
        controls: {
            type: Boolean,
            value: !0
        },
        autoplay: Boolean,
        loop: Boolean,
        initialTime: {
            type: Number,
            value: 0
        },
        direction: {
            type: Number,
            value: 90
        },
        objectFit: {
            type: String,
            value: "contain"
        },
        poster: {
            type: String,
            value: "http://mat1.gtimg.com/www/js/news/loading_bg.png"
        },
        enableDanmu: Boolean,
        danmuList: Array,
        danmuBtn: Boolean,
        muted: Boolean,
        showMuteBtn: Boolean,
        showProgress: {
            type: Boolean,
            value: !0
        },
        showFullscreenBtn: {
            type: Boolean,
            value: !1
        },
        showPlayBtn: {
            type: Boolean,
            value: !0
        },
        showCenterPlayBtn: {
            type: Boolean,
            value: !1
        },
        playBtnPosition: {
            type: String,
            value: "bottom"
        },
        enableProgressGesture: {
            type: Boolean,
            value: !0
        },
        enablePlayGesture: Boolean,
        vslideGesture: Boolean,
        vslideGestureInFullscreen: {
            type: Boolean,
            value: !0
        },
        autoPauseIfNavigate: {
            type: Boolean,
            value: !0
        },
        autoPauseIfOpenNative: {
            type: Boolean,
            value: !0
        },
        showTopTitle: Boolean,
        fromPage: String
    },
    data: {},
    created: function() {},
    attached: function() {
        this.data._uid || e.default.error("视频组件的_uid是必填参数，并且初始化时必须有值，否则创建videoContext会失败，导致不能从外部控制视频状态"), 
        this.data.useCustomProgressBar && this.setData({
            controls: !1
        });
    },
    ready: function() {
        var a = this;
        this.$obQuery = this.createIntersectionObserver(), this.$obQuery.relativeToViewport().observe("#" + this.data._uid, function(i) {
            if (i.intersectionRect.height < 5) {
                var o = t.video.instanceMap.get(a.data._uid);
                o && (e.default.info("视频滚动出屏幕被停止播放：", a.data._uid, a.data.vid, a.data.title), o.pause({
                    showCover: !0
                }));
            }
        });
    },
    detached: function() {},
    methods: {
        onPlay: function(e) {
            (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.play_start,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                vid: this.data.vid
            }), this.triggerEvent("play", e.detail);
        },
        onPause: function(e) {
            (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.play_stop,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                vid: this.data.vid
            }), this.triggerEvent("pause", e.detail);
        },
        onEnded: function(e) {
            (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.play_end,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                vid: this.data.vid
            }), this.triggerEvent("ended", e.detail);
        },
        onTapPlay: function(e) {
            this.triggerEvent("tapplay", e.detail);
        },
        onNext: function(e) {
            (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.play_next,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                vid: this.data.vid
            }), this.triggerEvent("next", e.detail);
        },
        onFullscreenChange: function(e) {
            (e && e.detail || {}).fullScreen && (0, a.report)({
                fromPage: this.data.fromPage,
                opType: a.OP_TYPE.video_full_screen,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                vid: this.data.vid
            });
        },
        onTapVideo: function() {
            this.triggerEvent("tapVideo");
        }
    }
});