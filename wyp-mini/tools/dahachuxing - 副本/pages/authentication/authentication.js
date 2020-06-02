var a = getApp(), t = require("../../utils/util");

require("../../utils/config.js").appColor;

Page({
    data: {
        mainColor: "",
        textColor: ""
    },
    onLoad: function() {
        this.setData({
            mainColor: a.globalData.mainColor,
            textColor: a.globalData.textColor
        });
    },
    toAgreement: function() {
        wx.navigateTo({
            url: "../agreement/agreement"
        });
    },
    formSubmit: function(o) {
        var e = this, n = o.detail.value.name, l = o.detail.value.idNO, i = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        0 == (n = n.replace(/\s+/g, "")).length || 0 == l.length ? wx.showToast({
            title: "您还有必选项没有输入",
            icon: "none"
        }) : i.test(l) ? (console.log("格式正确"), wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), a.checkToken(function(o) {
            if (o.length > 0) {
                var i = a.globalData.baseUrl + "user/nameAuth.do", s = {
                    token: o,
                    name: n,
                    idNO: l
                };
                t.request(i, s, function(t) {
                    t.ret && ("scan" == a.globalData.autoAction && (a.globalData.autoAction = "auto"), 
                    e.refreshInfo(function() {
                        wx.hideToast(), a.globalData.userInfo.nameAuth = !0, wx.showModal({
                            title: "温馨提示",
                            content: "认证成功！",
                            showCancel: !1,
                            success: function(a) {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    }));
                });
            }
        })) : wx.showToast({
            title: "请输入正确的身份证号码",
            icon: "none"
        });
    },
    refreshInfo: function(o) {
        a.checkToken(function(e) {
            if (e.length > 0) {
                var n = a.globalData.baseUrl + "user/getByUserId.do", l = {
                    token: e
                };
                a.globalData.adAccountId && "" != a.globalData.adAccountId && (l.adAccountId = a.globalData.adAccountId), 
                t.request(n, l, function(t) {
                    console.log("用户信息:" + JSON.stringify(t)), void 0 !== t.data && (a.globalData.userInfo = t.data, 
                    o && o());
                });
            } else wx.hideToast(), a.globalData.userInfo = null, o && o();
        });
    }
});