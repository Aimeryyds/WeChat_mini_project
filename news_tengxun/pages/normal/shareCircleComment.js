var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/slicedToArray")), r = (e(require("../../utils/mlodash")), 
e(require("../../utils/logger"))), n = require("../../services/comment"), i = require("../../services/report"), o = require("../../store/index");

Component({
    properties: {
        show: Boolean,
        articleId: String,
        commentId: {
            type: String,
            observer: function(e, t) {
                e && e !== t && this.init();
            }
        },
        atype: Number,
        title: String,
        posterShareImg: String,
        isForbidden: Boolean,
        inputPlaceholder: String,
        fromPage: String,
        syncId: String,
        thanksList: Array,
        thanksCount: Number,
        hasThanked: Boolean,
        readCount: Number,
        nickName: String,
        avatarUrl: String,
        openGId: String,
        lang: {
            type: String,
            value: "zh_CN"
        },
        replyId: String
    },
    data: {
        commentList: [],
        commentBnext: 0,
        commentIsForbidden: !1,
        commentLastReplyId: "",
        commentLoading: !0,
        isIphoneX: !1,
        reqTimestamp: Date.now(),
        scrollViewStyle: ""
    },
    created: function() {},
    attached: function() {},
    detached: function() {
        this.observer && this.observer.disconnect();
    },
    ready: function() {
        var e = this;
        this.observer = this.createIntersectionObserver(), this.observer && this.observer.relativeToViewport().observe(".socail-comment-wrapper", function() {
            e.data.show && (0, i.report)({
                opType: i.OP_TYPE.share_circle_comment_exposure,
                fromPage: e.data.fromPage
            });
        });
    },
    methods: {
        tapClose: function() {
            this.triggerEvent("close");
        },
        tapThankBtn: function(e) {
            this.triggerEvent("tapThankBtn", e && e.detail);
        },
        init: function() {
            var e = this, t = Date.now();
            (0, n.getShareComment)(this.data.articleId, this.data.openGId, t).then(function(r) {
                e.setData({
                    commentList: r.list,
                    commentIsForbidden: r.isForbidden || !1,
                    commentBnext: r.bnext,
                    commentLastReplyId: r.lastReplyId,
                    commentLoading: !1,
                    isIphoneX: o.systemInfo.isIphoneX,
                    reqTimestamp: t
                }), e.calcRect();
            }).catch(function(t) {
                r.default.error("拉取评论列表出错: ", t), e.setData({
                    commentLoading: !1
                });
            });
        },
        calcRect: function() {
            var e = this;
            this.$domQuery = this.createSelectorQuery().select(".head-wrapper").boundingClientRect().select(".comment-bar").boundingClientRect(), 
            this.$domQuery.exec(function(r) {
                var n = (0, t.default)(r, 2), i = n[0], o = n[1], a = i.height + o.height;
                e.setData({
                    scrollViewStyle: "height: calc(100% - ".concat(a, "px)")
                });
            });
        }
    }
});