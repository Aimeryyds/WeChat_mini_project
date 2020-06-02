var t = require("../../../@babel/runtime/helpers/interopRequireWildcard")(require("../../js/store/lc-comment")), e = require("../../js/lc-common"), i = require("../../js/login_manager.js"), n = require("../../js/authorize");

Component({
    properties: {
        isShowBottomBtn: {
            type: Boolean,
            value: !0
        },
        isCommentDetail: {
            type: Boolean,
            value: !1
        },
        articleId: {
            type: String
        },
        commentId: {
            type: String
        },
        commentMaxLength: {
            type: Number,
            value: 500
        },
        replyId: {
            type: String
        }
    },
    data: {
        commentDetail: {},
        comment_new: [],
        lastReplyId: !1,
        isArriveBottom: !1,
        isLoadError: !1,
        replyObj: {},
        showType: 0
    },
    ready: function() {
        this._chkArId() && (this.queryData = {}, this.queryData.comment_id = this.properties.commentId, 
        this.properties.isCommentDetail ? this.getReplies() : this.getComments());
    },
    methods: {
        _handleRetryloadComment: function() {
            this._chkArId() && (this.properties.isCommentDetail ? this.getReplies() : this.getComments());
        },
        _handleShareShow: function(t) {
            this.triggerEvent("handleshare", t, {
                bubble: !0
            });
        },
        _handlePraise: function(e) {
            if (!this.praiseMutex) {
                var n = {
                    comment_id: e.currentTarget.dataset.commentid,
                    rid: e.currentTarget.dataset.replyid,
                    index: e.currentTarget.dataset.index
                };
                this.praiseMutex = !0, i.checkLogin("", this, function() {
                    var e = this;
                    t.doPraise(this, n).then(function() {
                        setTimeout(function() {
                            e.praiseMutex = !1;
                        }, 200);
                    }, function() {
                        e.praiseMutex = !1;
                    });
                }.bind(this));
            }
        },
        getComments: function() {
            t.getComments(this, this.queryData);
        },
        getMoreComments: function() {
            this.setData({
                isArriveBottom: !0
            }), this.data.lastReplyId && (this.queryData.reply_id = this.data.lastReplyId, t.getComments(this, this.queryData));
        },
        getReplies: function(e, i) {
            var n = {
                id: this.data.articleId,
                comment_id: this.data.commentId,
                orig_id: this.data.replyId
            };
            e && (n.coral_score = e), i && (n.showtype = i), t.getCommentsDetail(this, n);
        },
        getMoreReplies: function() {
            this.setData({
                isArriveBottom: !0
            }), this.data.lastReplyId && this.getReplies(this.data.lastReplyId);
        },
        _chkArId: function() {
            return this.properties.articleId ? this.properties.isCommentDetail && !this.properties.commentId ? (this._showError("请传入文章对应的评论id"), 
            !1) : !(this.properties.isCommentDetail && !this.properties.replyId) || (this._showError("请传入回复id"), 
            !1) : (this._showError("请传入文章id"), !1);
        },
        _showError: function(t) {
            wx.showToast({
                icon: "none",
                title: t,
                duration: 2e3
            });
        },
        _handleDel: function(e) {
            var n = e.currentTarget.dataset, o = {
                comment_id: n.commentid,
                reply_id: n.replyid,
                index: n.index,
                subIndex: n.subindex,
                self: "1"
            };
            i.checkLogin("", this, function() {
                t.delComment(this, o);
            }.bind(this));
        },
        _handleWriteComment: function(n) {
            var o = n.currentTarget.dataset;
            o.commentid || (o.commentid = this.data.commentId), this.setData({
                replyObj: o
            });
            var r = "请写下您的评论", a = this.data.commentId;
            o.nick && (r = "回复 " + o.nick), o.replyid && (a = t.setCommentPraiseId(o.commentid, o.replyid)), 
            i.checkLogin("", this, function() {
                (0, e.showCommentDialog)(this, r, a);
            }.bind(this));
        },
        _handleGotoDetail: function(t) {
            var e = t.currentTarget.dataset, i = this.data.comment_new[e.index], n = "".concat("/module-local/pages/commentDetail/commentDetail", "?rid=").concat(i.comment.reply_id, "&cid=").concat(i.comment.commentid, "&aid=").concat(this.data.articleId);
            wx.navigateTo({
                url: n,
                complete: function(t) {}
            });
        },
        _handleGetThirdComment: function(e) {
            var i = e.currentTarget.dataset, n = this.data.comment_new[i.index], o = n.comment.reply_list.length, r = {
                index: i.index,
                orig_id: n.comment.reply_id,
                comment_id: n.comment.commentid,
                reply_id: n.comment.reply_list[o - 1][0].reply_id
            };
            t.getThirdComment(this, r);
        },
        handleCommentSubmit: function(e) {
            var n = this.data.replyObj;
            n.content = e.detail.content, i.checkLogin("", this, function() {
                t.addComment(this, n);
            }.bind(this));
        },
        refreshReloadModel: function() {
            this.getReplies(null, 3);
        },
        onAuthOkBtnTap: function(t) {
            n.onAuthOkBtnTap(this, t);
        },
        onAuthCancelBtnTap: function(t) {
            n.onAuthCancelBtnTap(this, t);
        },
        onAuthDialogOutTap: function(t) {
            n.onAuthDialogOutTap(this, t);
        },
        bindAuthGetUserInfo: function(t) {
            n.bindAuthGetUserInfo(this, t);
        },
        launchUserInfoAuthDialog: function(t, e) {
            n.launchUserInfoAuthDialog(this, t, e);
        }
    }
});