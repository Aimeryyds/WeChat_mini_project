function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../14E98D478A740DDF728FE5401BCCC841.js");

Component({
    properties: {},
    data: {
        titleString: "",
        subTitleString: "",
        cancelTitleString: "",
        okTitleString: "",
        actionTag: 0,
        alertStatus: "open",
        showModalStatus: !1,
        hasCancelBtn: !0,
        hasSubTitle: !0,
        showCloseBtn: !0,
        wxcode: null
    },
    methods: (e = {
        showAlertView: function(t, e, a, o, i, n, s) {
            console.log("bindMobileAlertModule showAlertView");
            var r = e.length > 0, l = a.length > 0;
            this.setData({
                titleString: t,
                subTitleString: e,
                cancelTitleString: a,
                okTitleString: o,
                hasCancelBtn: l,
                hasSubTitle: r,
                actionTag: i,
                showCloseBtn: n,
                wxcode: s
            }), this.showAlert(this.data.alertStatus), this.data.alertStatus = "close";
        },
        showAlert: function(t) {
            "close" == t ? this.setData({
                showModalStatus: !1
            }) : this.setData({
                showModalStatus: !0
            });
        },
        getPhoneNumber: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", this.triggerEvent("alertViewOkAction", this.data.actionTag);
        },
        btnCloseAction: function() {
            this.data.showCloseBtn && (this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", 
            this.triggerEvent("alertViewCloseAction", this.data.actionTag));
        },
        btnCancelAction: function() {
            this.showAlert(this.data.alertStatus), this.data.alertStatus = "open", this.triggerEvent("alertViewCancelAction", this.data.actionTag);
        }
    }, t(e, "getPhoneNumber", function(t) {
        console.log("getPhoneNumber", t);
        var e = t.detail.encryptedData, a = t.detail.iv;
        this.uploadMobilePhone(this.data.wxcode, e, a);
    }), t(e, "uploadMobilePhone", function(t, e, o) {
        var i = getApp();
        if (console.log("uploadMobilePhone openid", i.wxpersonInfo.openid), i.currentUser.session_key) {
            var n = Date.parse(new Date()), s = {
                api_key: i.opApiKey,
                v: "1",
                client_info: i.client_info,
                session_key: i.currentUser.session_key,
                call_id: n,
                user: i.wxpersonInfo.openid,
                third_type: "6",
                third_code: t,
                encryptedData: e,
                iv: o
            }, r = this, l = a.getsign(s);
            s.sig = l, wx.request({
                url: i.apiurl + "user/bindThirdPartyMobile",
                data: s,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(t) {
                    if (console.log("bindThirdPartyMobile", t), 1 === t.data.result) {
                        try {
                            wx.setStorageSync("isBindData", "1");
                        } catch (t) {
                            console.log("bindThirdPartyMobile storage fail", t);
                        }
                        wx.showToast({
                            title: "绑定成功",
                            icon: "none",
                            duration: 2e3
                        });
                    } else 10142 === t.data.error_code ? wx.showToast({
                        title: "手机号格式错误",
                        icon: "none",
                        duration: 2e3
                    }) : 10141 === t.data.error_code || 10143 === t.data.error_code || 10144 === t.data.error_code ? wx.showToast({
                        title: "绑定手机号出错",
                        icon: "none",
                        duration: 2e3
                    }) : 10145 === t.data.error_code || 10146 === t.data.error_code || 10147 === t.data.error_code ? wx.showToast({
                        title: "该手机号已被绑定",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
                        title: "绑定失败",
                        icon: "none",
                        duration: 2e3
                    });
                    r.showAlert(r.data.alertStatus), r.data.alertStatus = "open", r.triggerEvent("alertViewOKBindMobileAction", r.data.actionTag);
                },
                fail: function(t) {
                    console.log("---------", t), wx.hideLoading();
                }
            });
        }
    }), e)
});