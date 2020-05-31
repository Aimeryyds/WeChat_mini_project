var t = require("../../pass_config");

Page({
    data: {
        jumpUrl: "",
        backUrl: ""
    },
    onLoad: function(e) {
        this.setData(e.type && "login" === e.type ? {
            jumpUrl: "https://passport.baidu.com/phoenix/account/ssologin?u=" + e.u + "&code=" + e.code + "&encryptedData=" + e.encryptedData + "&iv=" + e.iv + "&signature=" + e.signature + "&appid=" + t.APPID + "&clientfrom=wap&client=wechat&tpl=" + t.tpl + "&wechat=1&type=42&act=sms&display=wap&adapter=3" + (t.isGuideLogin ? "&supportGuestAccount=1" : "") + "&fromlogin=1",
            backUrl: decodeURIComponent(e.backUrl)
        } : e.type && "unbind" === e.type ? {
            jumpUrl: decodeURIComponent(e.jumpUrl),
            backUrl: decodeURIComponent(e.backUrl)
        } : {
            jumpUrl: "https://passport.baidu.com/phoenix/account/guidetouristnormalize?&u=" + e.u + "&ltoken=" + e.ltoken + "&lstr=" + e.lstr + "&clientfrom=wap&client=wechat&tpl=" + t.tpl + "&wechat=1&ostype=42&act=sms&display=wap&adapter=3" + (t.isGuideLogin ? "&supportGuestAccount=1" : ""),
            backUrl: decodeURIComponent(e.backUrl)
        });
    },
    getLoginInfo: function(e) {
        var a = this, n = e.detail.data || [], o = n.length && n[0].bindWechatStatus ? n[0].bindWechatStatus : "", c = n.length && n[0].bduss ? n[0].bduss : "", s = function(t) {
            var e = n.filter(function(e) {
                return e && !!e[t] && e[t];
            }) || [];
            return e.length && e[0][t] ? e[0][t] : "";
        };
        n.length > 1 && !o && (o = s("bindWechatStatus")), n.length > 1 && !c && (c = s("bduss"));
        try {
            wx.setStorageSync("wechatBindStatus", o), this.data.backUrl || wx.navigateBack();
        } catch (e) {
            wx.showToast({
                title: "操作失败！",
                icon: "none"
            }), console.log(e);
        }
        c && function() {
            var e = {
                bduss: n[0].bduss || "",
                stoken: n[0].stoken || "",
                text: n[0].text || "成功！",
                type: n[0].tourist ? "guideAccount" : ""
            };
            e[t.tpl + "_stoken"] = "";
            var o = a.data.backUrl || "";
            (n[0].productStoken || []).forEach(function(a) {
                if (a) {
                    var n = a.split("#") || [];
                    n.length > 1 && n[0] === t.tpl && (e[t.tpl + "_stoken"] = n[1]);
                }
            });
            try {
                wx.setStorageSync("userInfo", e), o ? wx.showToast({
                    title: e.text,
                    icon: "success"
                }) : wx.navigateBack();
            } catch (t) {
                wx.showToast({
                    title: "登录失败！",
                    icon: "none"
                }), console.log(t);
            }
        }();
    }
});