var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/logger")), 
t(require("../../utils/mlodash"))), a = require("../../store/index"), o = require("../../services/jump"), i = require("../../utils/common"), n = require("../../services/report");

Component({
    properties: {
        articleId: {
            type: String,
            observer: function(t) {
                t && (this.updateCommentCount(a.comment.commentCountMap[t]), a.comment.watch("commentCountMap.".concat(t), this.updateCommentCount));
            }
        },
        title: String,
        atype: Number,
        posterShareImage: String,
        isVideo: Boolean
    },
    data: {
        commentCountStr: "",
        fromPage: n.FROM_PAGE.news_page,
        pageArea: n.PAGE_AREA.cell,
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
        tapComment: function() {
            (0, o.navigateTo)((0, o.atypeToCommentUrl)(this.data.atype, {
                id: this.data.articleId,
                title: this.data.title
            })), (0, n.report)({
                opType: n.OP_TYPE.comment_icon_click,
                fromPage: n.FROM_PAGE.news_page,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                commentCount: this.commentCount
            });
        },
        tapPoster: function(t) {
            var e = {
                articleId: this.data.articleId,
                atype: this.data.atype,
                imgUrl: this.data.posterShareImage,
                isVideo: this.data.isVideo,
                title: this.data.title
            };
            a.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
        },
        updateCommentCount: function(t) {
            this.commentCount = t || 0;
            var e = (0, i.formatCount)(t);
            this.setData({
                commentCountStr: e
            });
        }
    }
});