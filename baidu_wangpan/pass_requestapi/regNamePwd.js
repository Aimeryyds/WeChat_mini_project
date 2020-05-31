Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../pass_config"), s = require("../pass_utils/toastFn"), t = require("../pass_utils/apiAjax"), a = require("../dep/RSA"), r = function(t, a) {
    var r = t.data, o = wx.getStorageSync("userInfo");
    if (140001 == r.ppErrorInfo.errNo) {
        var n = {
            bduss: r.ppUser.bduss,
            stoken: r.ppUser.stoken,
            encryptInfo: r.ppUser.encryptInfo || ""
        };
        n[e.tpl + "_stoken"] = r.ppUser[e.tpl + "_stoken"] || "", wx.setStorage({
            key: "userInfo",
            data: n,
            success: function() {
                var s = null, t = getCurrentPages();
                try {
                    s = wx.getStorageSync("pageStackLength"), e.isWebview ? wx.navigateTo({
                        url: "/pages/pass_jump/jump?delta=" + (t.length - s + 2) + "&encryptInfo=" + (r.ppUser.encryptInfo || "")
                    }) : s && wx.navigateBack({
                        delta: t.length - s + 1
                    });
                } catch (e) {
                    console.log(e);
                }
            },
            fail: function() {
                console.log("setStorage fail");
            }
        });
    } else if (0 == r.ppErrorInfo.errNo) {
        var p = void 0, i = getCurrentPages();
        try {
            p = wx.getStorageSync("pageStackLength"), e.isWebview ? wx.navigateTo({
                url: "/pages/pass_jump/jump?delta=" + (i.length - p + 2) + "&encryptInfo=" + (o.encryptInfo || "")
            }) : p && wx.navigateBack({
                delta: i.length - p + 1
            });
        } catch (e) {
            console.log(e);
        }
    } else s.toastFn(a, r.ppErrorInfo.msg);
};

exports.regNamePwd = function(s) {
    var o = s.data || {}, n = o.telnum && o.telnum.replace(/[ ]/g, ""), p = void 0, i = void 0, g = void 0, c = void 0, u = void 0, l = void 0, d = void 0, v = {
        tpl: e.tpl,
        action: "login",
        sms: 1,
        smsverify: 1,
        clientfrom: "wap",
        is_voice_sms: "0",
        wechat: 1
    };
    try {
        var E = wx.getStorageSync("userInfo");
        E && (c = E.stoken, u = E.bduss, l = E.authsid, d = E.bdstoken);
    } catch (e) {
        console.log(e);
    }
    try {
        a.setMaxDigits(131), i = new a.RSAKeyPair("10001", "", "B3C61EBBA4659C4CE3639287EE871F1F48F7930EA977991C7AFE3CC442FEA49643212E7D570C853F368065CC57A2014666DA8AE7D493FD47D171C0D894EEE3ED7F99F6798B7FFD7B5873227038AD23E3197631A8CB642213B9F27D4901AB0D92BFA27542AE890855396ED92775255C977F5C302F1E7ED4B1E369C12CB6B1822F"), 
        g = a.encryptedString(i, o.password);
    } catch (e) {
        console.log(e);
    }
    1 == o.notRegist ? (p = "wp/api/login", s.setData({
        respErrno: 140001
    }), v.setuname = o.user_name ? o.user_name : "", v.setpwd = g || "", v.BDUSS = u || "", 
    v.STOKEN = c || "", v.username = n || "", v.password = o.smsCode ? o.smsCode : "") : 400412 == o.errNo ? (p = "v3/getpass/api/showsetpwdusername/?v=" + new Date().getTime(), 
    s.setData({
        respErrno: 0
    }), v.password = g || "", v.username = o.user_name ? o.user_name : "", v.bdstoken = d || "", 
    v.authsid = l || "", v.BDUSS = u || "", v.STOKEN = c || "") : 400410 == o.errNo && (p = "/v3/getpass/api/setpwd/?v=" + new Date().getTime(), 
    s.setData({
        respErrno: 0
    }), v.password = g || "", v.bdstoken = d || "", v.authsid = l || "", v.BDUSS = u || "", 
    v.STOKEN = c || ""), t.apiAjax(p, v, "POST", r, s);
};