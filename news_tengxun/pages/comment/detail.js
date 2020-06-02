var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../utils/logger")), i = e(require("../../utils/mlodash")), n = require("../../services/comment"), r = require("../../store/index"), o = require("../../services/report");

Page({
    data: {
        ready: !1,
        nickName: "",
        avatarUrl: "",
        commentId: "",
        replyId: "",
        parentReplyId: "",
        articleId: "",
        atype: "",
        content: "",
        image: null,
        agreeCount: "",
        pubTime: "",
        isMe: !1,
        hotComment: !1,
        status: 0,
        isDeleted: !1,
        replyList: [],
        fakeList: [],
        fromPage: o.FROM_PAGE.detail_comment_page
    },
    onLoad: function(e) {
        Object.assign(this, {
            bnext: 0,
            lastCoralScore: "",
            requesting: !1
        }), this.setData({
            articleId: e.articleId || e.id || "",
            commentId: e.commentId || "",
            replyId: (e.replyId || "").replace(/^fake/, ""),
            atype: e.atype
        }), this.init();
    },
    onReady: function() {},
    onShow: function(e) {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        this.getReplyData();
    },
    onReply: function(e) {
        var t = this, i = {
            articleId: this.data.articleId,
            commentId: this.data.commentId,
            replyId: this.data.replyId,
            pubType: 2,
            callback: {
                success: function(e) {
                    var a = (0, n.genFakeItem)(e);
                    t.data.fakeList.unshift(a), t.setData({
                        fakeList: t.data.fakeList
                    });
                },
                fail: function(e) {
                    e && a.default.error("评论出错:", e);
                }
            }
        };
        r.article.showInputPanel(i);
    },
    onDelete: function(e) {
        var t = this, r = i.default.get(e, "currentTarget.dataset", {}), o = r.page, l = r.index, s = e && e.detail || {}, d = String(s.replyId), c = {
            comment_id: s.commentId,
            article_id: s.articleId,
            parent_reply_id: s.parentReplyId,
            reply_id: d
        };
        -1 !== d.indexOf("fake") ? (this.delCommentDom(d, l, o), (0, n.delComment)(c)) : (0, 
        n.delComment)(c).then(function(e) {
            t.delCommentDom(d, l, o);
        }).catch(function(e) {
            a.default.error("删除评论出错: ", e), wx.showToast({
                icon: "none",
                title: "删除失败"
            });
        });
    },
    delCommentDom: function(e, a, n) {
        if (wx.showToast({
            title: "删除成功"
        }), this.data.replyId === e) setTimeout(function() {
            wx.navigateBack();
        }, 500); else if (void 0 === n) this.data.fakeList.splice(a, 1), this.setData({
            fakeList: this.data.fakeList
        }); else {
            var r = this.data.replyList[n];
            i.default.isArray(r) && (r.splice(a, 1), this.setData((0, t.default)({}, "replyList[".concat(n, "]"), r)));
        }
    },
    getReplyData: function() {
        var e = this;
        if (!this.requesting && 0 !== this.bnext) {
            this.requesting = !0;
            var i = {
                article_id: this.data.articleId,
                comment_id: this.data.commentId,
                orig_id: this.data.replyId,
                coral_score: this.lastCoralScore
            };
            (0, n.getReply2)(i).then(function(a) {
                e.setData((0, t.default)({}, "replyList[".concat(e.data.replyList.length, "]"), a.replyList)), 
                e.lastCoralScore = a.lastCoralScore, e.bnext = a.bnext, e.requesting = !1;
            }).catch(function(t) {
                e.requesting = !1, a.default.error("拉取评论列表出错: ", t);
            });
        }
    },
    init: function() {
        var e = this, t = {
            article_id: this.data.articleId,
            comment_id: this.data.commentId,
            orig_id: this.data.replyId
        };
        return (0, n.getReply2)(t).then(function(t) {
            e.setData({
                ready: !0,
                parentReplyId: t.parentReplyId,
                nickName: t.nickName,
                avatarUrl: t.avatarUrl,
                coral_uid: t.coral_uid,
                uin: t.uin,
                chlid: t.chlid,
                content: t.content,
                image: t.image,
                agreeCount: t.agreeCount,
                pubTime: t.pubTime,
                count: t.count,
                replyList: [ t.replyList ],
                isMe: t.isMe,
                hotComment: t.hotComment,
                status: t.status,
                isDeleted: t.isDeleted
            }), e.bnext = t.bnext, e.lastCoralScore = t.lastCoralScore, 0 !== t.replyList.length || t.isDeleted || e.onReply();
        }).catch(function(e) {
            a.default.error("拉取评论的回复列表出错: ", e);
        });
    }
});