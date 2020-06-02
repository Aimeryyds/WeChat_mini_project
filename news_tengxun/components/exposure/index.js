var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = require("../../services/report");

t(require("../../utils/logger"));

Component((0, e.default)({
    properties: {
        opType: {
            type: String,
            value: a.OP_TYPE.cell_exposure
        },
        fromPage: String,
        avatarUrl: Boolean,
        articleId: String,
        commentId: String,
        atype: Number,
        vid: String,
        replyId: String,
        tabName: String,
        channelId: String,
        picShowType: String,
        reasonFlag: String,
        cell_video: {
            type: String,
            value: "0"
        },
        cell_title: {
            type: String,
            value: "0"
        },
        cell_summary: {
            type: String,
            value: "0"
        },
        cell_pic: {
            type: String,
            value: "0"
        },
        cell_hot_comment: {
            type: String,
            value: "0"
        },
        cell_comment: {
            type: String,
            value: "0"
        },
        cell_om_image: {
            type: String,
            value: "0"
        },
        cell_dislike: {
            type: String,
            value: "0"
        }
    },
    data: {},
    methods: {},
    created: function() {},
    attached: function() {
        this.setData({
            randomClass: "cls_" + Math.random().toString(36).substr(3, 10)
        });
    },
    ready: function() {
        var t = this;
        this.$obQuery = this.createIntersectionObserver(), this.$obQuery.relativeToViewport().observe("." + this.data.randomClass, function(e) {
            (0, a.report)(t.format()), t.$obQuery.disconnect();
        });
    }
}, "methods", {
    format: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = {};
        "0" !== this.data.cell_video && (e.cell_video = this.data.cell_video), "0" !== this.data.cell_title && (e.cell_title = this.data.cell_title), 
        "0" !== this.data.cell_summary && (e.cell_summary = this.data.cell_summary), "0" !== this.data.cell_hot_comment && (e.cell_hot_comment = this.data.cell_hot_comment), 
        "0" !== this.data.cell_comment && (e.cell_comment = this.data.cell_comment), "0" !== this.data.cell_om_image && (e.cell_om_image = this.data.cell_om_image), 
        "0" !== this.data.cell_pic && (e.cell_pic = this.data.cell_pic), "0" !== this.data.cell_dislike && (e.cell_dislike = this.data.cell_dislike);
        var i = {
            fromPage: this.data.fromPage,
            opType: t ? a.OP_TYPE.cell_click : this.data.opType,
            extension: JSON.stringify(e)
        };
        return this.data.articleId && (i.articleId = this.data.articleId), (this.data.atype || 0 === this.data.atype) && (i.atype = this.data.atype), 
        this.data.vid && (i.vid = this.data.vid), this.data.commentId && (i.commentId = this.data.commentId), 
        this.data.replyId && (i.replyId = this.data.replyId), this.data.opType === a.OP_TYPE.share_circle_bar_exposure && (i.hasAvatar = this.data.avatarUrl ? "1" : "0"), 
        this.data.reasonFlag && (i.reasonFlag = this.data.reasonFlag), i;
    },
    onTap: function() {
        (0, a.report)(this.format(!0));
    }
}));