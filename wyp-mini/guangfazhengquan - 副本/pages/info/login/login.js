function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = require("../../../components/utils"), t = e(require("../../../components/circus/toast/toast")), o = e(require("../../../components/http")), n = e(require("../../../config")), i = e(require("../../../components/event")), d = e(require("../../../components/msgstore")), r = require("../../../components/bridge"), l = e(require("../../../services/portal/login")), s = e(require("../../../services/portal/download"));

getApp().View(Object.assign({
    beacon: {
        name: "安全验证"
    },
    data: {
        showModal: !1,
        dialogDesc: "",
        teleNum: "",
        teleCode: "",
        picCode: "",
        getCodeText: "获取验证码",
        canGetCode: !0,
        showLoading: !1,
        captcha: {},
        id: "",
        color: ""
    },
    events: {
        tapCaptcha: {
            name: "获取图形验证码",
            handler: function() {
                this.refreshCaptcha();
            }
        },
        getTeleCode: {
            name: "获取手机验证码",
            handler: function() {
                var e = this;
                (0, a.setData)(this, "showLoading", !0);
                var t = {
                    mobile: this.data.teleNum,
                    captchaId: this.data.captcha.captchaId,
                    captcha: this.data.picCode
                };
                l.default.getTeleCode(t).done(function(a) {
                    var t = 60, o = e, n = setInterval(function() {
                        0 == (t -= 1) ? (clearInterval(n), o.setData({
                            getCodeText: "获取验证码",
                            canGetCode: !0
                        })) : (o.data.getCodeText = "秒)", o.setData({
                            getCodeText: "(" + t + "秒)",
                            canGetCode: !1
                        }));
                    }, 1e3);
                }).fail(function(t) {
                    if (t.data.errcode) {
                        var o = t.data.errmsg;
                        (0, a.setData)(e, "dialogDesc", o);
                        setTimeout(function() {
                            (0, a.setData)(e, "showModal", "");
                        }, 3e3);
                        (0, a.setData)(e, "showModal", !0), e.refreshCaptcha();
                    }
                });
            }
        },
        teleNumInput: {
            name: "",
            handler: function(e) {
                var t = e.detail.value;
                (0, a.setData)(this, "teleNum", t);
            }
        },
        picCodeInput: {
            name: "",
            handler: function(e) {
                var t = e.detail.value;
                (0, a.setData)(this, "picCode", t);
            }
        },
        teleCode: {
            name: "",
            handler: function(e) {
                var t = e.detail.value;
                (0, a.setData)(this, "teleCode", t);
            }
        },
        dialogConfirm: {
            name: "对话框确认",
            handler: function() {
                (0, a.setData)(this, "showModal", !1);
            }
        },
        login: {
            name: "确定",
            handler: function() {
                var e = this, t = {
                    mobile: this.data.teleNum,
                    ticket: this.data.teleCode
                };
                l.default.mobileLogin(t).done(function(e) {
                    (0, r.navigateBack)(), d.default.fire("portal:login", e);
                }).fail(function(t) {
                    if (t.data.errcode) {
                        var o = t.data.errmsg;
                        (0, a.setData)(e, "dialogDesc", o), (0, a.setData)(e, "showModal", !0);
                    }
                });
            }
        },
        goOpenAccount: {
            name: "立即开户",
            handler: function() {
                (0, r.navigateTo)({
                    url: "/pages/portal/download/download?viewId=" + this.data.id + "&navColor=" + this.data.color
                });
            }
        },
        goAgreement: {
            name: "服务协议",
            handler: function() {
                (0, r.navigateTo)({
                    url: "/pages/info/jumppage/jumppage"
                });
            }
        }
    },
    onLoad: function(e) {
        var a = this;
        (0, r.setNavigationBarTitle)({
            title: this.beacon.name
        }), this.refreshCaptcha(), s.default.download().then(function(e) {
            var t = e.data;
            a.data.id = t.data[0]._id, a.data.color = t.data[0].navColor;
        });
    },
    refreshCaptcha: function() {
        var e = this;
        (0, o.default)({
            url: "" + n.default.API_V2_HOST + n.default.API_V2_PREFIX + "user/captcha?theme=light"
        }, this, !1).done(function(t) {
            (0, a.setData)(e, "captcha", (0, a.getProp)(t, "data.data"));
        }).fail(function() {
            t.default.show(e, "出错啦");
        });
    }
}, i.default));