var t = require("../../../@babel/runtime/helpers/interopRequireWildcard"), e = require("../../js/const"), n = t(require("../../js/util"));

Component({
    properties: {
        maxlength: {
            type: Number,
            value: 150
        }
    },
    data: {
        isShow: !1,
        placeholderText: "请输入...",
        enableInputSubmitBtn: !1,
        commentText: "",
        remainCount: 0,
        commentId: "lc-default"
    },
    ready: function() {
        this.setData({
            remainCount: this.properties.maxlength || 150
        });
    },
    methods: {
        showCommentDialog: function() {
            this.setData({
                isShow: !0
            });
        },
        _chkInputSumitBtnDisable: function(t) {
            var e = !(t && t.detail && t.detail.value && t.detail.value.replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
            this.setData({
                enableInputSubmitBtn: !e
            });
        },
        _disappearCommentDialog: function(t) {
            t && "mask" != t.target.dataset.wrap || (this.setData({
                isShow: !1
            }), this.triggerEvent("commentclose", {}, {
                bubbles: !0
            }));
        },
        _bindInputEvent: function(t) {
            var e = t.detail.value;
            if (this.data.remainCount == this.properties.maxlength - 1 || "" != e) {
                var n = this.properties.maxlength - e.replace(/^\s\s*/, "").replace(/\s\s*$/, "").length;
                this.setData({
                    remainCount: n,
                    commentText: e
                }), this._chkInputSumitBtnDisable(t), n <= 0 || this.triggerEvent("commentinput", {
                    len: n,
                    text: e
                }, {
                    bubbles: !0
                });
            }
        },
        _commentEditBlur: function(t) {
            var e = t.detail.value;
            this.setData({
                commentText: e
            }), this.saveContentStorage(e);
        },
        _commentEditConfirm: function(t) {
            this._bindCommentSubmit(t);
        },
        _commentEditFocus: function(t) {
            this._chkInputSumitBtnDisable(t);
        },
        _bindCommentSubmit: function(t) {
            var e = {
                content: this.data.commentText
            };
            if (!this.data.enableInputSubmitBtn) return wx.showToast({
                icon: "none",
                title: "请输入内容"
            }), void this._disappearCommentDialog();
            this.triggerEvent("commentsubmit", e, {
                bubbles: !0
            }), this._disappearCommentDialog();
        },
        saveContentStorage: function(t) {
            var i = n.getStorage(e.STORAGE_LC_COMMENT_CONTENT) || {};
            i[this.data.commentId] = t || "", n.setStorage(e.STORAGE_LC_COMMENT_CONTENT, i);
        },
        getCommentContent: function() {
            return n.getStorage(e.STORAGE_LC_COMMENT_CONTENT)[this.data.commentId] || "";
        },
        clearContentStorage: function(t) {
            var i = n.getStorage(e.STORAGE_LC_COMMENT_CONTENT);
            i && (i[t] = ""), n.setStorage(e.STORAGE_LC_COMMENT_CONTENT, i);
        }
    }
});