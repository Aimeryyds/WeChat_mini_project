var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = (e(require("../../utils/logger")), 
e(require("../../utils/mlodash")), require("../../services/report"));

Page({
    data: {
        fromPage: r.FROM_PAGE.comment_like_people_page,
        commentId: "",
        replyId: "",
        ready: !1
    },
    onLoad: function(e) {},
    onShow: function() {},
    onReady: function() {
        this.setData({
            commentId: this.query.commentId,
            replyId: this.query.replyId,
            ready: !0
        });
    },
    onShareAppMessage: function() {}
});