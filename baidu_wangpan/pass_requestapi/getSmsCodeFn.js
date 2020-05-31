Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../pass_utils/apiAjax"), a = require("../pass_utils/toastFn"), t = function(e, t) {
    var s = e.data, o = t.data.notRegist ? t.data.notRegist : "", n = s.data.vcodestr ? s.data.vcodestr : "", d = s.data.vcodesign ? s.data.vcodesign : "";
    t.setData({
        vcodestr: n,
        vcodesign: d,
        errno: s.errInfo.no ? s.errInfo.no : ""
    }), "50021" == s.errInfo.no || "50020" == s.errInfo.no ? wx.navigateTo({
        url: "/pages/pass_checkcode/checkcode?notRegist=" + o + "&vcodesign=" + d + "&vcodestr=" + n + "&telnum=" + t.data.telnum + "&vcodesign=" + t.data.vcodesign
    }) : 0 != s.errInfo.no || t.reget ? 0 != s.errInfo.no && (t.setData({
        sendDisabled: !1
    }), a.toastFn(t, s.errInfo.msg)) : wx.redirectTo({
        url: "/pages/pass_smscheck/smscheck?telnum=" + t.data.telnum + "&notRegist=" + o + "&vcodestr=" + n + "&vcodesign=" + d
    });
};

exports.getSmsCodeFn = function(a) {
    var s = a.data.telnum.replace(/[ ]/g, ""), o = a.data.vcodestr, n = a.data.vcodesign ? a.data.vcodesign : "";
    a.vcode && "1" == a.vcode && (s = a.data.telnum.replace(/[ ]/g, ""));
    var d = {
        username: s,
        clientfrom: "wap",
        is_voice_sms: "0",
        wechat: 1,
        vcodestr: a.data.inputValue && o ? o : "",
        vcodesign: a.data.inputValue && n ? n : "",
        dialogVerifyCode: a.data.inputValue ? a.data.inputValue : ""
    };
    e.apiAjax("wp/api/login/sms", d, "POST", t, a);
};