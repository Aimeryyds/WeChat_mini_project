var e = require("../../58268180480303CF3E40E9872402F6C0.js"), a = getApp();

Page({
    data: {
        appliName: "",
        appliCorpPhone: "",
        appliCorpId: "",
        insuredName: "",
        insuredCardType: "",
        insuredCard: "",
        insuredPhone: "",
        distrct: [ "居民身份证", "军官证" ],
        loadModal: !1,
        readModal: !1,
        buyDate: "",
        dealerName: "",
        dealerCorpName: ""
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("userToken"), r = e.formatDate(new Date());
        this.setData({
            userToken: t,
            productionDate: r,
            buyDate: r
        });
    },
    cardTypePickerChange: function(e) {
        var a = e.currentTarget.id, t = this.data.cardTypeValueArray[e.detail.value], r = this.data;
        r[a] = t, r[a + "Index"] = e.detail.value, this.setData(r);
    },
    goDealerHome: function() {
        wx.redirectTo({
            url: "../dealerhome/dealerhome"
        });
    },
    getInputValue: function(e) {
        var a = e.currentTarget.id, t = e.detail.value, r = this.data;
        r[a] = t, this.setData(r);
    },
    chooseLikePolicy: function(e) {
        this.data.likePolicy = !this.data.likePolicy, this.data.likePolicy && this.setData({
            insuredName: this.data.policyName,
            insuredCardType: this.data.policyCardType,
            insuredCard: this.data.policyCard,
            insuredCardTypeIndex: this.data.policyCardTypeIndex
        });
    },
    checkForm: function() {
        if ("" == this.data.insuredName) return e.AlertMsg("被保险人不能为空"), !1;
        if ("" == this.data.insuredCard) return e.AlertMsg("被保险人证件号码不能为空"), !1;
        var a = this.data.insuredCard;
        return e.CheckBirthday(a) ? "" == this.data.insuredPhone ? (e.AlertMsg("被保险人手机号码不能为空"), 
        !1) : "" == this.data.plateNumber ? (e.AlertMsg("车牌号不能为空"), !1) : (this.data.productCode, 
        "苏A" != this.data.plateNumber.substr(0, 2) ? (e.AlertMsg("车牌号必须是苏A开头"), !1) : "" == this.data.modelNumber ? (e.AlertMsg("厂牌型号不能为空"), 
        !1) : "" == this.data.machineryNumber ? (e.AlertMsg("电机号码不能为空"), !1) : "" == this.data.frameNumber ? (e.AlertMsg("车架号不能为空"), 
        !1) : "" == this.data.veichelColor ? (e.AlertMsg("车辆颜色不能为空"), !1) : !!this.data.readFlag || (e.AlertMsg("请阅读投保须知及保险条款"), 
        !1)) : (e.AlertMsg("被保险人证件号码格式有误"), !1);
    },
    submitInsuranceForm: function() {
        var e = this;
        e.checkForm() && wx.showModal({
            title: "系统提示",
            content: "是否确认提交?",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), e.submitForm()) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    submitForm: function() {
        var t = this;
        t.setData({
            loadModal: !0
        });
        var r = this.data;
        console.info(r), e.GetTokenCallBack(function() {
            e.Requests_json(a.globalData.insuranceUrl + "/ebike/register", r).then(function(a) {
                t.setData({
                    loadModal: !1
                }), "0" == a.code ? (e.AlertSuccess("提交成功"), wx.reLaunch({
                    url: "/pages/activate/activate"
                })) : e.AlertError("提交失败");
            });
        });
    }
});