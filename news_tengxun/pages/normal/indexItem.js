var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../services/comment"), o = require("../../store/index"), a = require("../../services/jump"), i = require("../../services/report"), n = require("../../utils/common"), m = t(require("../../utils/logger"));

Component({
    properties: {
        item: {
            type: Object,
            value: {},
            observer: function(t) {
                o.comment.watch("commentCountMap.".concat(t.articleId), this.updateCommentCount), 
                this.updateCommentCount(o.comment.commentCountMap[t.articleId]);
            }
        },
        next: {
            type: Object,
            value: {}
        },
        current: {
            type: Number,
            value: 0,
            observer: function(t, e) {
                var o = this;
                t && t !== e && t === this.data.item.index + 1 && setTimeout(function() {
                    o.setData({
                        showFakePrevious: !0
                    });
                }, 1e3);
            }
        },
        fromPage: String
    },
    data: {
        scrollTop: 0,
        showFakePrevious: !1,
        commentLoading: !0,
        commentList: [],
        commentIsForbidden: !1,
        commentCount: 0,
        commentCountStr: "评论"
    },
    created: function() {
        this.updateCommentCount = this.updateCommentCount.bind(this), this.setData({
            syncId: "syncid_" + Math.random().toString(36).substr(2, 10)
        });
    },
    attached: function() {},
    detached: function() {
        o.comment.unWatch("commentCountMap.".concat(this.data.item.articleId), this.updateCommentCount);
    },
    ready: function() {
        var t = this;
        (0, e.getComment)(this.data.item.articleId).then(function(e) {
            t.setData({
                commentLoading: !1,
                commentList: e.list.slice(0, 2),
                commentIsForbidden: e.isForbidden || !1
            });
            var o = t.createIntersectionObserver();
            o.relativeToViewport().observe(".title", function() {
                (0, i.report)({
                    opType: i.OP_TYPE.hot_comment_exposure,
                    fromPage: t.data.fromPage,
                    articleId: t.data.item.articleId,
                    articleType: t.data.item.atype
                }), o.disconnect();
            });
        }).catch(function(e) {
            m.default.error("获取评论失败：", e), t.setData({
                commentLoading: !1
            });
        });
    },
    methods: {
        tapCommentReply: function(t) {
            this.data.isFromApp || (0, a.navigateTo)(a.PAGE_PATH.COMMENT_DETAIL, t && t.detail);
        },
        tapCommentContent: function(t) {
            this.data.isFromApp || (0, a.navigateTo)(a.PAGE_PATH.COMMENT_DETAIL, t && t.detail);
        },
        tapAllCommentBtn: function() {
            (0, a.navigateTo)(a.PAGE_PATH.COMMENT_NORMAL, {
                id: this.data.item.articleId,
                atype: this.data.item.atype,
                title: this.data.item.title,
                comeFrom: "normal"
            }), (0, i.report)({
                opType: i.OP_TYPE.all_comment_click,
                fromPage: this.data.fromPage,
                articleId: this.data.item.articleId,
                articleType: this.data.item.atype
            });
        },
        updateCommentCount: function(t) {
            t && t !== this.data.commentCount && this.setData({
                commentCount: t,
                commentCountStr: (0, n.formatCount)(t) || "评论"
            });
        }
    }
});