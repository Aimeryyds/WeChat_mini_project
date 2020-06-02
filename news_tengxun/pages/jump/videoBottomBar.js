var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/logger")), 
t(require("../../utils/mlodash"))), a = require("../../store/index"), i = require("../../services/jump"), n = require("../../utils/common"), o = require("../../services/report");

Component({
    properties: {
        articleId: {
            type: String,
            observer: function(t) {
                t && (this.updateCommentCount(a.comment.commentCountMap[t]), a.comment.watch("commentCountMap.".concat(t), this.updateCommentCount));
            }
        },
        atype: Number,
        vid: String,
        _uid: String,
        title: String,
        snapshot: String,
        chlicon: String,
        chlname: String,
        chlid: String,
        posterShareImg: String
    },
    data: {
        commentCountStr: "",
        fromPage: o.FROM_PAGE.video_page,
        pageArea: o.PAGE_AREA.cell,
        shareText: "海报"
    },
    created: function() {
        this.updateCommentCount = this.updateCommentCount.bind(this), this.commentCount = 0;
    },
    attached: function() {
        var t = e.default.get(a.userData, "appConf.share_text");
        t && this.setData({
            shareText: t
        });
    },
    detached: function() {
        a.comment.unWatch("commentCountMap.".concat(this.data.articleId), this.updateCommentCount);
    },
    methods: {
        none: function() {},
        tapMedia: function() {
            (0, i.canJumpToMedia)(this.data.chlid) && (0, i.navigateTo)(i.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            });
        },
        tapComment: function() {
            var t = a.video.instanceMap.get(this.data._uid);
            (0, i.navigateTo)(i.PAGE_PATH.COMMENT_VIDEO, {
                id: this.data.articleId,
                atype: this.data.atype,
                vid: this.data.vid,
                playing: t.playing,
                currentTime: t.currentTime
            }), (0, o.report)({
                opType: o.OP_TYPE.comment_icon_click,
                fromPage: o.FROM_PAGE.video_page,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                commentCount: this.commentCount,
                vid: this.data.vid
            });
        },
        tapPoster: function(t) {
            var e = {
                articleId: this.data.articleId,
                atype: this.data.atype,
                imgUrl: this.data.posterShareImg || this.data.snapshot,
                isVideo: !0,
                title: this.data.title
            };
            a.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
        },
        updateCommentCount: function(t) {
            this.commentCount = t || 0;
            var e = (0, n.formatCount)(t);
            this.setData({
                commentCountStr: e
            });
        }
    }
});