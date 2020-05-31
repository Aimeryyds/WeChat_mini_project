Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../pass_config"), t = require("../pass_utils/toastFn"), a = require("../pass_utils/apiAjax"), s = function(t, a) {
    var s = {
        bduss: t.ppUser.bduss,
        stoken: t.ppUser.stoken,
        bdstoken: t.ppData.bdstoken,
        authsid: t.ppData.authsid,
        encryptInfo: t.ppUser.encryptInfo || ""
    };
    s[e.tpl + "_stoken"] = t.ppUser[e.tpl + "_stoken"] || "", wx.setStorage({
        key: "userInfo",
        data: s,
        success: function() {
            var s = void 0, r = getCurrentPages();
            if (a && 140001 == a) try {
                s = wx.getStorageSync("pageStackLength"), e.isWebview ? wx.navigateTo({
                    url: "/pages/pass_jump/jump?delta=" + (r.length - s + 2) + "&encryptInfo=" + (t.ppUser.encryptInfo || "")
                }) : s && wx.navigateBack({
                    delta: r.length - s + 1
                });
            } catch (e) {
                console.log(e);
            }
        },
        fail: function() {
            console.log("setStorage fail");
        }
    });
}, r = function(e, a) {
    var r = e.data;
    140001 == r.ppErrorInfo.errNo ? (a.setData({
        errno: r.ppErrorInfo.errNo
    }), s(r, "140001")) : 400410 == r.ppErrorInfo.errNo ? (s(r, "400410"), wx.navigateTo({
        url: "/pages/pass_setpassword/setpassword?errNo=400410&showIgnoreBtn=true&notRegist=" + a.data.notRegist + "&smsCode=" + a.data.inputValue + "&telnum=" + a.data.telnum
    })) : 400412 == r.ppErrorInfo.errNo ? (s(r, "400412"), wx.navigateTo({
        url: "/pages/pass_userinfo/userinfo?errNo=400412&showIgnoreBtn=true&notRegist=" + a.data.notRegist + "&smsCode=" + a.data.inputValue + "&telnum=" + a.data.telnum
    })) : t.toastFn(a, r.ppErrorInfo.msg);
};

exports.getLoginInfo = function(t) {
    var s = {
        username: t.data.telnum.replace(/[ ]/g, ""),
        password: t.data.inputValue,
        action: "login",
        sms: 1,
        smsverify: 1,
        clientfrom: "wap",
        is_voice_sms: "0",
        wechat: 1,
        tpl: e.tpl
    };
    a.apiAjax("wp/api/login", s, "POST", r, t);
};