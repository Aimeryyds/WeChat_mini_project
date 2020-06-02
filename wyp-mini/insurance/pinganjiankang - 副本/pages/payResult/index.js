var a = require("../../@babel/runtime/helpers/interopRequireDefault"), e = a(require("../vant/toast/toast")), t = (a(require("../vant/dialog/dialog")), 
getApp()), o = require("../../utils/util.js"), d = require("../../utils/dateUtils.js"), r = null;

Page({
    data: {
        test: "",
        holderName: "",
        holderCardNo: "",
        holderCardType: "",
        holderBirthday: "",
        holderGender: "",
        majorBank: "",
        accountId: "",
        telphone: "",
        yzm: "",
        traceNo: "",
        withholdType: "",
        success: "../../images/payResult/success.png",
        auto: "../../images/payResult/auto.png",
        arr_r: "../../images/payResult/arr_r.png",
        ewm: "../../images/payResult/ewm_app.png",
        warn: "../../images/payResult/warn.png",
        show: !1,
        isContract: !1,
        bankArray: [ {
            id: "0",
            name: "请选择开户银行"
        }, {
            id: "102",
            name: "中国工商银行"
        }, {
            id: "103",
            name: "中国农业银行"
        }, {
            id: "104",
            name: "中国银行"
        }, {
            id: "105",
            name: "中国建设银行"
        }, {
            id: "301",
            name: "交通银行"
        }, {
            id: "303",
            name: "中国光大银行"
        }, {
            id: "304",
            name: "华夏银行"
        }, {
            id: "305",
            name: "中国民生银行"
        }, {
            id: "306",
            name: "广发银行"
        }, {
            id: "307",
            name: "平安银行"
        }, {
            id: "308",
            name: "招商银行"
        }, {
            id: "309",
            name: "兴业银行"
        }, {
            id: "999",
            name: "邮政储蓄"
        } ],
        index: 0,
        time: "获取",
        currentTime: 61,
        disabled: !1,
        showYzm: !1,
        asyncClose: !0,
        showConfirmButton: "true",
        checked: !0,
        agreeItems: [ {
            name: "agree",
            value: !0
        } ],
        agree: [],
        hasSign: null
    },
    validateForm: function() {
        return 0 == o.isLegalName(this.data.holderName) ? ((0, e.default)("暂未获取到姓名，请稍后重试"), 
        !1) : 0 == this.data.index ? ((0, e.default)("请选择开户银行"), !1) : /^\d{16,20}$/.test(this.data.accountId) ? !(this.data.showYzm && !/^1\d{10}$/.test(this.data.telphone)) || ((0, 
        e.default)("手机号有误"), !1) : ((0, e.default)("银行账号有误"), !1);
    },
    onClose: function(a) {
        "close" == a.type && this.setData({
            show: !1
        });
    },
    onConfirm: function() {
        if (this.validateForm()) {
            if (this.data.showYzm && !/^\d{6}$/.test(this.data.yzm)) return void (0, e.default)("验证码有误");
            if (!this.data.agree.length) return void (0, e.default)("请阅读相关条款");
            this.confirmSign();
        }
    },
    onCancel: function() {
        this.setData({
            show: !1
        });
    },
    goOrder: function() {
        wx.redirectTo({
            url: "../orderstate/orderstate"
        });
    },
    openPdf: function(a) {
        var e = t.globalData.baseUrl + a.target.dataset.pdfurl;
        o.getStaticPage(e);
    },
    bindPickerChange: function(a) {
        this.setData({
            index: a.detail.value
        }), this.querySignBank(), console.log(this.data.index);
    },
    zdjf: function() {
        this.findOrderIsContract();
    },
    queryNameByOrderId: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.baseUrl + "/miniapp/user/orderDetail",
            method: "POST",
            data: {
                orderId: a || wx.getStorageSync("orderId"),
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(a) {
                var t = a.data.data, o = t.holderName, d = t.holderCardNo, r = t.holderCardType, n = t.holderBirthday, s = t.holderGender;
                console.log(o), e.setData({
                    holderName: o,
                    holderCardNo: d,
                    holderCardType: r,
                    holderBirthday: n,
                    holderGender: s
                });
            }
        });
    },
    findOrderIsContract: function() {
        var a = this;
        wx.request({
            url: t.globalData.baseUrl + "/miniapp/user/findOrderIsContract",
            method: "POST",
            data: {
                orderId: this.data.orderId || wx.getStorageSync("orderId"),
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(t) {
                var o = t.data, d = o.status, r = o.message;
                console.log(d), "00" == d ? a.setData({
                    show: !0
                }) : (0, e.default)(r);
            }
        });
    },
    agreeChange: function(a) {
        console.log(a.detail.value, this.data.agreeItems), this.setData({
            agree: a.detail.value
        });
    },
    onLoad: function(a) {
        console.log(a);
        var e = a.orderId;
        this.setData({
            orderId: e
        }), this.queryNameByOrderId(e), console.log("onLoad");
        var o = this;
        t.getUserInfo(function(a) {
            o.setData({
                userInfo: a
            });
        });
    },
    getCode: function(a) {
        var o = this, n = this, s = n.data.currentTime;
        r = setInterval(function() {
            s--, n.setData({
                time: s + "秒"
            }), s <= 0 && (clearInterval(r), n.setData({
                time: "重发",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3);
        var i = {
            appType: "",
            bankCardNo: this.data.accountId,
            bankCode: this.data.bankArray[this.data.index].id,
            bankName: "",
            birthday: d.timestampToTime(this.data.holderBirthday, "/"),
            customerIdNo: this.data.holderCardNo,
            customerIdType: this.data.holderCardType,
            customerName: this.data.holderName,
            gender: this.data.holderGender,
            merReserved: {
                traceNo: this.data.traceNo,
                verifyCode: this.data.yzm
            },
            posBankInfoID: "",
            strType: "",
            telephone: this.data.telphone,
            type: "03"
        };
        wx.request({
            url: t.globalData.baseUrl + "/common/api/v1/contract.do",
            data: i,
            method: "POST",
            success: function(a) {
                (a = a.data).ok ? ((0, e.default)("发送成功"), o.setData({
                    traceNo: a.data.traceNo
                })) : (0, e.default)(a.message);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    confirmSign: function() {
        var a = this, o = {
            appType: "",
            bankCardNo: this.data.accountId,
            bankCode: this.data.bankArray[this.data.index].id,
            bankName: this.data.bankArray[this.data.index].name,
            birthday: d.timestampToTime(this.data.holderBirthday, "/"),
            customerIdNo: this.data.holderCardNo,
            customerIdType: this.data.holderCardType,
            customerName: this.data.holderName,
            gender: this.data.holderGender,
            merReserved: {
                traceNo: this.data.traceNo,
                verifyCode: this.data.yzm
            },
            posBankInfoID: "",
            strType: "",
            telephone: this.data.telphone,
            type: "03"
        };
        console.log(this.data.hasSign), !0 !== this.data.hasSign && "1" != this.data.withholdType ? (this.data.showYzm || (delete o.telephone, 
        delete o.merReserved), console.log(o), wx.request({
            url: t.globalData.baseUrl + "/common/api/v1/validate.do",
            data: o,
            method: "POST",
            success: function(t) {
                t = t.data;
                console.log(t), t.ok ? a.sign() : 62 == t.code ? ((0, e.default)("Code 62"), a.sign()) : (0, 
                e.default)(t.message);
            },
            fail: function() {},
            complete: function() {}
        })) : this.sign();
    },
    sign: function() {
        var a = this, o = {
            orderId: this.data.orderId || wx.getStorageSync("orderId"),
            accessToken: wx.getStorageSync("accessToken"),
            accountId: this.data.accountId,
            bankId: this.data.bankArray[this.data.index].id,
            bankName: this.data.bankArray[this.data.index].name,
            accountName: this.data.holderName
        };
        wx.request({
            url: t.globalData.baseUrl + "/miniapp/user/saveRenewalInfo.do",
            data: o,
            method: "POST",
            success: function(t) {
                var o = t.data, d = o.status, r = o.message;
                "00" == d ? (0, e.default)("开通成功") : r ? (0, e.default)(r) : (0, e.default)("操作失败，请稍后重试"), 
                setTimeout(function(e) {
                    a.setData({
                        show: !1
                    });
                }, 3e3);
            },
            fail: function() {
                (0, e.default)("操作失败，请稍后重试");
            },
            complete: function() {}
        });
    },
    getVerificationCode: function() {
        var a = this;
        this.data.disabled || this.validateForm() && setTimeout(function() {
            a.getCode(), a.setData({
                disabled: !0
            });
        }, 500);
    },
    queryProctocolByBankInfo: function() {
        var a = this;
        setTimeout(function() {
            if (a.data.accountId && /^[0-9]{16,19}$/.test(a.data.accountId)) {
                var o = {
                    accountNo: a.data.accountId,
                    bankName: a.data.holderName,
                    certificateNo: a.data.holderCardNo,
                    certificateTypeCode: a.data.holderCardType
                };
                "1" != a.data.withholdType ? wx.request({
                    url: t.globalData.baseUrl + "/common/api/v2/queryProctocolByBankInfo.do",
                    method: "POST",
                    data: o,
                    success: function(e) {
                        e = e.data;
                        console.log(e.ok), e.ok ? a.setData({
                            showYzm: !1,
                            hasSign: !0
                        }) : a.setData({
                            showYzm: !0,
                            hasSign: !1
                        });
                    }
                }) : a.setData({
                    showYzm: !1
                });
            } else (0, e.default)("银行账号有误");
        }, 200);
    },
    clear: function() {
        console.log(this.data.yzm), this.setData({
            accountId: "",
            telphone: "",
            yzm: ""
        });
    },
    querySignBank: function() {
        var a = this;
        setTimeout(function() {
            var e = {
                bankNo: a.data.bankArray[a.data.index].id
            };
            a.clear(), wx.request({
                url: t.globalData.baseUrl + "/common/api/v1/querySignBank.do",
                method: "POST",
                data: e,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    if (e.data.data) {
                        var t = e.data.data[0].withholdType;
                        "2" == t ? a.setData({
                            showYzm: !0,
                            withholdType: t
                        }) : a.setData({
                            showYzm: !1,
                            withholdType: t
                        });
                    }
                }
            });
        }, 300);
    },
    accountIdBlur: function(a) {
        this.setData({
            accountId: a.detail.value
        }), this.queryProctocolByBankInfo();
    },
    telphoneBlur: function(a) {
        this.setData({
            telphone: a.detail.value
        });
    },
    yzmBlur: function(a) {
        this.setData({
            yzm: a.detail.value
        });
    }
});