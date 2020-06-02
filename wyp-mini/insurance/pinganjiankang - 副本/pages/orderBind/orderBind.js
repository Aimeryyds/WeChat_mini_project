var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../vant/toast/toast")), t = getApp(), a = require("../../utils/util.js"), n = null;

Page({
    data: {
        checked: !0,
        disabled: !1,
        date: "请选择日期",
        fun_id: 2,
        reg_agreement: t.globalData.test1Url + "/wxresource/staticPage/reg_agreement.pdf",
        time: "获取验证码",
        currentTime: 61,
        name: "",
        idNo: "",
        phone: "",
        code: "",
        unionId: "",
        openId: ""
    },
    bindPartyNo: function() {
        var a = {
            unionId: wx.getStorageSync("unionId"),
            openId: wx.getStorageSync("openId"),
            name: this.data.name,
            idNo: this.data.idNo,
            phone: this.data.phone,
            code: this.data.code
        };
        a.openId ? (wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: t.globalData.baseUrl + "/miniapp/bindPartyNo.do",
            data: a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                wx.hideLoading();
                var a = t.data["ins-status"];
                "00" == a ? wx.showModal({
                    content: t.data.message,
                    showCancel: !1,
                    confirmText: "确定",
                    confirmColor: "#ff6600",
                    success: function(e) {
                        e.confirm ? wx.navigateTo({
                            url: "../myPolicy/myPolicy"
                        }) : e.cancel && console.log("用户点击取消");
                    }
                }) : "01" == a ? (0, e.default)(t.data.message) : "02" == a ? wx.showModal({
                    content: t.data.message,
                    showCancel: !1,
                    confirmText: "去购买",
                    confirmColor: "#ff6600",
                    success: function(e) {
                        e.confirm ? wx.navigateTo({
                            url: "../index/index"
                        }) : e.cancel && console.log("用户点击取消");
                    }
                }) : t.data.message && (0, e.default)(t.data.message);
            },
            fail: function() {
                wx.hideLoading();
            },
            complete: function() {}
        })) : wx.navigateTo({
            url: "../login/login"
        });
    },
    onChange: function(e) {
        console.log(e), this.setData({
            checked: !this.data.checked
        });
    },
    nameBlur: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    idnoBlur: function(e) {
        this.setData({
            idNo: e.detail.value
        });
    },
    phoneBlur: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    codeBlur: function(e) {
        this.setData({
            code: e.detail.value
        });
    },
    xieyi: function(e) {
        console.log(e);
    },
    bind: function() {
        var t = this;
        console.log(this.data.name), setTimeout(function() {
            0 != a.isLegalName(t.data.name) ? 0 != a.isLegalId(t.data.idNo) ? 0 != a.isLegalMobile(t.data.phone) ? 0 != a.isSixNumber(t.data.code) ? 0 != t.data.checked ? t.bindPartyNo() : (0, 
            e.default)("请阅读并勾选相关条款") : (0, e.default)("验证码有误") : (0, e.default)("手机号有误") : (0, 
            e.default)("身份证号有误") : (0, e.default)("姓名有误");
        }, 500);
    },
    getCode: function(a) {
        var o = this, i = o.data.currentTime;
        n = setInterval(function() {
            i--, o.setData({
                time: i + "秒"
            }), i <= 0 && (clearInterval(n), o.setData({
                time: "重新发送",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3), wx.showLoading({
            title: "发送中"
        }), wx.request({
            url: t.globalData.baseUrl + "/AppRegister/sendVcode.do",
            data: {
                phone: this.data.phone
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log("res,,", t), wx.hideLoading();
                var a = t.data;
                "00" == a.result ? (0, e.default)("发送成功") : (0, e.default)(a.msg);
            },
            fail: function() {
                wx.hideLoading();
            },
            complete: function() {}
        });
    },
    getVerificationCode: function() {
        var t = this;
        this.data.disabled || setTimeout(function() {
            /^1\d{10}$/.test(t.data.phone) ? (t.getCode(), t.setData({
                disabled: !0
            })) : (0, e.default)("手机号有误");
        }, 500);
    },
    openPdf: function(e) {
        var n = t.globalData.baseUrl + e.target.dataset.pdfurl;
        console.log(n), a.getStaticPage(n);
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});