var e = require("../../pass_requestapi/regNamePwd"), t = require("../../pass_utils/toastFn"), n = require("../../pass_config");

Page({
    data: {
        inputType: "password",
        openEye: !1,
        eyeIcon: "none",
        eyeStateInit: !1,
        password: ""
    },
    onLoad: function(e) {
        this.setData({
            telnum: e.telnum,
            smsCode: e.smsCode,
            notRegist: e.notRegist,
            ignoreBtn: e.showIgnoreBtn ? "block" : "none",
            errNo: e.errNo ? e.errNo : ""
        });
    },
    passwordInput: function(e) {
        var t = e.detail.value;
        return t.length > 0 && this.setData({
            eyeIcon: "block",
            btnColor: "#fff",
            showType: !1,
            password: t
        }), 0 == t.length && this.setData({
            eyeIcon: "none",
            btnColor: "",
            showType: t
        }), t.substring(0, 14);
    },
    eyeShowEvent: function() {
        var e = !this.data.eyeStateInit;
        this.setData({
            openEye: e,
            inputType: e ? "text" : "password",
            eyeStateInit: e
        });
    },
    submitPassWord: function() {
        var n = /^.{6,14}$/.test(this.data.password);
        this.data.password.length > 0 && (n ? (console.log(this), e.regNamePwd(this)) : t.toastFn(this, "密码为6-14位英文、数字和下划线"));
    },
    ignoreSetinfo: function() {
        var e = void 0, t = getCurrentPages();
        try {
            e = wx.getStorageSync("pageStackLength");
            var s = wx.getStorageSync("userInfo");
            n.isWebview ? wx.navigateTo({
                url: "/pages/pass_jump/jump?delta=" + (t.length - e + 2) + "&encryptInfo=" + (s.encryptInfo || "")
            }) : e && wx.navigateBack({
                delta: t.length - e + 1
            });
        } catch (e) {
            console.log(e);
        }
    }
});