function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../common.js")), e = t(require("../../../../network/api.js"));

Component({
    behaviors: [ o.default ],
    properties: {
        module: {
            type: Object
        }
    },
    data: {
        comment: {}
    },
    methods: {
        showToast: function(t, o) {
            var e = this;
            this.setData({
                toast: {
                    text: t,
                    icon: o,
                    isShow: !0
                }
            }), setTimeout(function() {
                e.setData({
                    "toast.isShow": !1
                });
            }, 1500);
        },
        onSubmitComment: function(t) {
            var o = this, n = this;
            if (!this.data.isSubmitting) {
                console.log("form发生了submit事件，携带数据为：", t.detail.value);
                var i = void 0, s = this.data.comment;
                s.name && 0 != s.name.trim().length ? s.phone && 0 != s.phone.trim().length ? /^1[3|4|5|7|8][0-9]{9}$/.test(s.phone.trim()) ? s.content && 0 != s.content.trim().length || (i = "请输入留言内容") : i = "手机号码格式错误" : i = "请输入手机号码" : i = "请输入姓名", 
                console.log("errors：", i), i ? n.showToast(i, "no") : (wx.showLoading({
                    title: "请稍后",
                    modal: !0
                }), this.setData({
                    isSubmitting: !0
                }), e.default.saveMessage(s).then(function(t) {
                    console.log(t), wx.hideLoading(), n.showToast("提交成功！", "yes"), console.log("bingooooooooooooo", t), 
                    n.setData({
                        comment: {},
                        isSubmitting: !1
                    });
                }).catch(function(t) {
                    wx.hideLoading(), console.log(t), n.showToast("网络连接错误，请稍后重试！", "no"), o.setData({
                        isSubmitting: !1
                    });
                }));
            }
        },
        onCommentChange: function(t) {
            var o = this.data.comment;
            console.log(t.target.id, "++++++++++++"), o[t.target.id] = t.detail.value, this.setData({
                comment: o
            });
        }
    }
});