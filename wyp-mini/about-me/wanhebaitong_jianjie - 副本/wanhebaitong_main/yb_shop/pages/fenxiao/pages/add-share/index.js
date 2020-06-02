var e = getApp(), a = e.requirejs("core"), t = !1;

Page({
    data: {
        form: {
            name: "",
            mobile: ""
        },
        show: !1,
        img: "../../images/img-share-un.png",
        agree: 0
    },
    onLoad: function(t) {
        a.ReName(t.title), this.setData({
            share_setting: e.getCache("shareSetting")
        }), this.getInfo();
    },
    getInfo: function() {
        var t = this;
        a.get("Distribe/userinfo", {
            uid: e.getCache("userinfo").uid
        }, function(e) {
            0 == e.code ? t.setData({
                user_info: e.info,
                show: !0
            }) : a.alert(e.msg, function() {
                a.jump("", 5);
            });
        }, !0);
    },
    formSubmit: function(i) {
        if (!t) {
            var n = this;
            if (n.data.form = i.detail.value, null != n.data.form.name && "" != n.data.form.name) if (null != n.data.form.mobile && "" != n.data.form.mobile) {
                var o = i.detail.value;
                t = !0, o.form_id = i.detail.formId, 0 != n.data.agree ? (console.log(n.data.agree), 
                a.loading("正在提交"), o.user_id = e.getCache("userinfo").uid, a.get("Distribe/join", o, function(e) {
                    a.hideLoading(), t = !1, 0 == e.code ? (a.success("申请成功"), 1 == e.share_condition ? setTimeout(function() {
                        n.getInfo();
                    }, 1e3) : a.jump("../index/index", 2)) : a.alert(e.msg, function() {
                        n.getInfo();
                    });
                })) : a.warning("请先阅读并确认分销申请协议！！");
            } else a.warning("请填写联系方式！"); else a.warning("请填写姓名！");
        }
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    agreement: function() {
        wx.showModal({
            title: "分销协议",
            content: this.data.share_setting.agree,
            showCancel: !1,
            confirmText: "我已阅读",
            confirmColor: "#ff4544",
            success: function(e) {
                e.confirm && console.log("用户点击确定");
            }
        });
    },
    agree: function() {
        var e = this, a = e.data.agree;
        0 == a ? (a = 1, e.setData({
            img: "../../images/img-share-agree.png",
            agree: a
        })) : 1 == a && (a = 0, e.setData({
            img: "../../images/img-share-un.png",
            agree: a
        }));
    }
});