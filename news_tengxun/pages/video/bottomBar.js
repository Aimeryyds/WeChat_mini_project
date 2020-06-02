require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index"), e = require("../../services/jump"), a = require("../../utils/common"), i = require("../../services/report");

Component({
    properties: {
        articleId: {
            type: String,
            observer: function(e) {
                e && (this.updateCommentCount(t.comment.commentCountMap[e]), t.comment.watch("commentCountMap.".concat(e), this.updateCommentCount));
            }
        },
        atype: Number,
        vid: String,
        _uid: String,
        title: String,
        snapshot: String,
        chlicon: {
            type: String,
            value: "http://mat1.gtimg.com/www/js/news/default_avatar.png"
        },
        chlname: String,
        chlid: String,
        posterShareImg: String,
        isCollection: Boolean,
        fromPage: String,
        pageArea: String
    },
    data: {
        commentCountStr: ""
    },
    created: function() {
        this.commentCount = 0, this.updateCommentCount = this.updateCommentCount.bind(this);
    },
    attached: function() {},
    detached: function() {
        t.comment.unWatch("commentCountMap.".concat(this.data.articleId), this.updateCommentCount);
    },
    methods: {
        tapMedia: function() {
            (0, e.canJumpToMedia)(this.data.chlid) && (0, e.navigateTo)(e.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            });
        },
        tapComment: function() {
            var a = t.video.instanceMap.get(this.data._uid);
            (0, e.navigateTo)(e.PAGE_PATH.COMMENT_VIDEO, {
                id: this.data.articleId,
                atype: this.data.atype,
                vid: this.data.vid,
                playing: a.playing,
                currentTime: a.currentTime
            }), (0, i.report)({
                opType: i.OP_TYPE.comment_icon_click,
                fromPage: this.data.fromPage,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                commentCount: this.commentCount,
                vid: this.data.vid
            });
        },
        tapPoster: function() {
            var e = {
                articleId: this.data.articleId,
                imgUrl: this.data.posterShareImg || this.data.snapshot,
                isVideo: !0,
                title: this.data.title
            };
            t.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
        },
        updateCommentCount: function(t) {
            this.commentCount = t;
            var e = (0, a.formatCount)(t);
            this.setData({
                commentCountStr: e
            });
        }
    }
});