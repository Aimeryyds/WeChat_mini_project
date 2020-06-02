var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/mlodash")), e = require("../../services/report.js"), a = require("../../store/index"), i = require("../../services/jump"), o = require("../../utils/common");

Component({
    properties: {
        articleId: {
            type: String,
            observer: function(t) {
                t && (this.updateCommentCount(a.comment.commentCountMap[t]), a.comment.watch("commentCountMap.".concat(t), this.updateCommentCount));
            }
        },
        atype: Number,
        topicId: String,
        vid: String,
        title: String,
        posterShareImage: String
    },
    data: {
        commentCountStr: "",
        shareText: "海报"
    },
    created: function() {
        this.commentCount = 0, this.updateCommentCount = this.updateCommentCount.bind(this);
    },
    attached: function() {
        var e = t.default.get(a.userData, "appConf.share_text");
        e && this.setData({
            shareText: e
        });
    },
    detached: function() {
        a.comment.unWatch("commentCountMap.".concat(this.data.articleId), this.updateCommentCount);
    },
    methods: {
        tapComment: function(t) {
            (0, e.report)({
                opType: e.OP_TYPE.comment_icon_click,
                fromPage: e.FROM_PAGE.speed_page,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                commentCount: this.commentCount
            });
            var a = {
                id: this.data.articleId
            };
            this.data.vid && (a.vid = this.data.vid), 114 === this.data.atype && this.data.topicId || (0, 
            i.navigateTo)((0, i.atypeToCommentUrl)(this.data.atype, a));
        },
        tapPoster: function() {
            var t = this.data.atype, i = {
                articleId: this.data.articleId,
                atype: this.data.atype,
                imgUrl: this.data.posterShareImage,
                isVideo: 101 === t || 4 === t || 56 === t || 118 === t,
                title: this.data.title
            };
            114 === t && this.data.topicId && (i.qrType = 8, i.title = "大家正在讨论".concat(this.data.title)), 
            a.poster.genPoster(e.FROM_PAGE.speed_page, e.PAGE_AREA.cell, i);
        },
        updateCommentCount: function(t) {
            this.commentCount = t || 0;
            var e = (0, o.formatCount)(t);
            this.setData({
                commentCountStr: e
            });
        }
    }
});