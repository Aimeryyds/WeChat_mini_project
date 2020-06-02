var e = require("../../@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showCommentDialog = function(e, t, o) {
    var n = e.selectComponent("#lcCommentDialog");
    n.setData({
        placeholderText: t,
        commentId: o
    });
    var r = n.getCommentContent(), a = n.properties.maxlength;
    n.setData({
        commentText: r,
        remainCount: a - r.length
    }), n.showCommentDialog();
}, exports.showShareDialog = function(e) {
    e.selectComponent("#lcShare").setData({
        isShareDialogShow: !0
    });
}, exports.doPoster = function(e) {
    e.selectComponent("#lcShare")._doGeneratePoster();
}, exports.handleComment = function(e, t) {
    e.selectComponent("#lcComment")._handleWriteComment(t);
};

e(require("./const")), e(require("./util"));