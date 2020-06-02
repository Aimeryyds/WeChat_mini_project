var e = require("../../../utils/https.js");

e.imgurl;

Page({
    data: {
        myHight: "",
        from: [ {
            name: "申 请 人",
            text: "user_name",
            number: 200,
            placeholder: "请输入已绑定小呗出行账号申请人",
            type: !0
        }, {
            name: "手 机 号",
            text: "mobile",
            number: 11,
            placeholder: "请输入已绑定小呗出行账号的手机号",
            type: !0
        }, {
            name: "身份证号",
            text: "user_idno",
            number: 18,
            placeholder: "请输入已绑定小呗出行账号的身份证号",
            type: !0
        }, {
            name: "银行卡号 ",
            text: "cardno",
            number: 200,
            placeholder: "请输入您本人的银行卡号",
            type: !0
        }, {
            name: "开 户 行",
            text: "bank",
            number: 200,
            placeholder: "请填写具体的开户银行信息，如XX银行XX支行",
            type: !0
        }, {
            name: "退款余额",
            value: " ",
            type: !1
        } ]
    },
    formSubmit: function(n) {
        var t = n.detail.value;
        console.log(t), "" == t.user_name ? wx.showToast({
            title: "请输入已绑定小呗出行账号申请人",
            icon: "none",
            duration: 2e3
        }) : "" == t.mobile ? wx.showToast({
            title: "请输入已绑定小呗出行账号的手机号",
            icon: "none",
            duration: 2e3
        }) : "" == t.user_idno ? wx.showToast({
            title: "请输入已绑定小呗出行账号的身份证号",
            icon: "none",
            duration: 2e3
        }) : "" == t.cardno ? wx.showToast({
            title: "请输入您本人的银行卡号",
            icon: "none",
            duration: 2e3
        }) : "" == t.bank ? wx.showToast({
            title: "请填写具体的开户银行信息，如XX银行XX支行",
            icon: "none",
            duration: 2e3
        }) : wx.showModal({
            title: "提示",
            content: "请核对您的银行卡信息,若银行卡号或开户行信息错误,会导致退款失败。是否确认无误？",
            success: function(t) {
                if (t.confirm) {
                    console.log(n.detail.value);
                    var o = n.detail.value;
                    o.cardtype = 2, e.req11("V2.0/UserWallet/ReturnDeposit", o, function(e, n) {
                        0 == n.data.code ? wx.redirectTo({
                            url: "../returnmon/index"
                        }) : wx.showModal({
                            content: n.data.retmsg,
                            showCancel: !1
                        });
                    });
                } else t.cancel;
            }
        });
    },
    myEventListener: function(e) {
        this.setData({
            myHight: e.detail
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        this.setData({
            "from[5].value": wx.getStorageSync("deposit") + "元"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});