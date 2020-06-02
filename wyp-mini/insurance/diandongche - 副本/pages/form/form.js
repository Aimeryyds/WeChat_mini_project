var a = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        loadModal: !1,
        readFlag: !1,
        modalName: "",
        productPrice: "",
        insureName: "",
        cardTypeArray: [ "居民身份证" ],
        cardTypeValueArray: [ "01" ],
        relationArray: [ "本人", "配偶", "父母", "子女", "兄弟姐妹", "祖父母、外祖父母", "雇佣", "其他" ],
        relationValueArray: [ "0", "1", "2", "3", "5", "6", "7", "9" ],
        relation: "",
        policyName: "",
        policyCardType: "",
        policyCardTypeIndex: "",
        policyCard: "",
        policyPhone: "",
        relationIndex: "",
        insuredName: "",
        insuredCardType: "",
        insuredCardTypeIndex: "",
        insuredCard: "",
        insuredPhone: "",
        plateNumber: "",
        modelNumber: "",
        machineryNumber: "",
        frameNumber: "",
        veichelColor: "",
        productionDate: "",
        buyDate: "",
        instructionsDesc: "",
        insureAgreement: "",
        insureRepay: ""
    },
    onLoad: function(e) {
        a.GetToken();
        var t = JSON.parse(e.paramsData), r = wx.getStorageSync("userToken");
        null != r && "" != r || a.GetUserToken();
        var i = a.formatDate(new Date());
        this.setData({
            userToken: r,
            productionDate: i,
            buyDate: i,
            instructionsDesc: t.instructionsDesc,
            insureAgreement: t.insureAgreement,
            insureRepay: t.insureRepay,
            productPrice: t.price,
            policyName: t.userName,
            policyCard: t.cardId,
            policyPhone: t.telephone,
            insureName: t.insureName
        });
    },
    cardTypePickerChange: function(a) {
        var e = a.currentTarget.id, t = this.data.relationValueArray[a.detail.value], r = this.data;
        r[e] = t, r[e + "Index"] = a.detail.value, this.setData(r);
    },
    modelNumberPickerChange: function(a) {
        var e = a.currentTarget.id, t = this.data.modelNumberValueArray[a.detail.value], r = this.data;
        r[e] = t, r[e + "Index"] = a.detail.value, this.setData(r);
    },
    relationPickerChange: function(a) {
        var e = a.currentTarget.id, t = this.data.relationValueArray[a.detail.value], r = this.data;
        r[e] = t, r[e + "Index"] = a.detail.value, this.setData(r), "0" == a.detail.value && this.setData({
            insuredName: this.data.policyName,
            insuredCardType: this.data.policyCardType,
            insuredCard: this.data.policyCard,
            insuredCardTypeIndex: this.data.policyCardTypeIndex,
            insuredPhone: this.data.policyPhone
        });
    },
    DateChange: function(a) {
        var e = a.currentTarget.id, t = this.data;
        t[e] = a.detail.value, this.setData(t);
    },
    goHome: function() {
        wx.redirectTo({
            url: "/pages/home/home"
        });
    },
    getInputValue: function(a) {
        var e = a.currentTarget.id, t = a.detail.value, r = this.data;
        r[e] = t, this.setData(r);
    },
    chooseLikePolicy: function(a) {
        this.data.likePolicy = !this.data.likePolicy, this.data.likePolicy && this.setData({
            insuredName: this.data.policyName,
            insuredCardType: this.data.policyCardType,
            insuredCard: this.data.policyCard,
            insuredCardTypeIndex: this.data.policyCardTypeIndex
        });
    },
    chooseRead: function(a) {
        this.data.readFlag = !this.data.readFlag;
    },
    readDetail: function(t) {
        var r = this, i = t.currentTarget.dataset.type;
        switch (console.log(i), r.setData({
            loadModal: !0
        }), i) {
          case "notice":
            a.DownloadPdf(e.globalData.productUrl + this.data.instructionsDesc, "投保须知");
            break;

          case "clause":
            a.DownloadPdf(e.globalData.productUrl + this.data.insureAgreement, "保障条款");
            break;

          case "statement":
            a.DownloadPdf(e.globalData.productUrl + this.data.insureRepay, "投保声明");
            break;

          default:
            a.AlertMsg("网络繁忙,请稍后再试");
        }
        r.setData({
            loadModal: !1
        });
    },
    goScan: function() {
        var t = this;
        wx.scanCode({
            success: function(r) {
                t.setData({
                    img: r.result
                });
                var i = t;
                i.setData({
                    loadModal: !0
                });
                var s = {
                    url: r.result
                };
                a.GetTokenCallBack(function() {
                    a.Requests_json(e.globalData.insuranceUrl + "/ebike/getScanVehicleInfo", s).then(function(e) {
                        console.info(e), "0" == e.code ? i.setData({
                            productionDate: e.data.manufacturingDate,
                            veichelColor: e.data.colour,
                            machineryNumber: e.data.electromotorModel,
                            frameNumber: e.data.vehicleCode,
                            modelNumber: e.data.productCode
                        }) : a.AlertMsg(e.msg), i.setData({
                            loadModal: !1
                        });
                    });
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    checkForm: function() {
        var e = /^[\u4E00-\u9FA5]{2,10}$/;
        return e.test(this.data.policyName) ? this.data.policyCard.length < 1 ? (a.AlertMsg("投保人身份证号不正确"), 
        !1) : a.CheckBirthday(this.data.policyCard) ? this.data.policyPhone.length < 1 ? (a.AlertMsg("投保人手机号码不能为空"), 
        !1) : "" == this.data.relation ? (a.AlertMsg("请选择为谁投保"), !1) : e.test(this.data.insuredName) ? this.data.insuredCard.length < 1 ? (a.AlertMsg("被保险人证件号码不正确"), 
        !1) : a.CheckBirthday(this.data.insuredCard) ? this.data.insuredPhone.length < 1 ? (a.AlertMsg("被保险人手机号码不能为空"), 
        !1) : "苏A" != this.data.plateNumber.substr(0, 2) && "南京" != this.data.plateNumber.substr(0, 2) && "江宁" != this.data.plateNumber.substr(0, 2) && "江浦" != this.data.plateNumber.substr(0, 2) && "高淳" != this.data.plateNumber.substr(0, 2) && "溧水" != this.data.plateNumber.substr(0, 2) && "六合" != this.data.plateNumber.substr(0, 2) ? (a.AlertMsg("车牌号不正确"), 
        !1) : "" == this.data.modelNumber ? (a.AlertMsg("厂牌型号不能为空"), !1) : "" == this.data.machineryNumber ? (a.AlertMsg("电机号码不能为空"), 
        !1) : "" == this.data.frameNumber ? (a.AlertMsg("车架号不能为空"), !1) : "" == this.data.veichelColor ? (a.AlertMsg("车辆颜色不能为空"), 
        !1) : !!this.data.readFlag || (a.AlertMsg("请阅读并同意投保须知、保险条款、投保声明"), !1) : (a.AlertMsg("被保险人身份证号不正确"), 
        !1) : (a.AlertMsg("被保险人姓名错误"), !1) : (a.AlertMsg("投保人身份证号不正确"), !1) : (a.AlertMsg("投保人姓名错误"), 
        !1);
    },
    showModal: function(a) {
        this.setData({
            modalName: a.currentTarget.dataset.target
        });
    },
    hideModal: function(a) {
        this.setData({
            modalName: null
        });
    },
    submitInsuranceForm: function(a) {
        var e = this;
        e.checkForm() && wx.showModal({
            title: "系统提示",
            content: "是否确认提交投保单?",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), e.submitForm()) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    submitForm: function(t) {
        var r = this, i = this.data;
        console.log("params===" + JSON.stringify(i)), a.GetTokenCallBack(function() {
            a.Requests_json(e.globalData.insuranceUrl + "/ebike/ebikeOnline", i).then(function(e) {
                r.setData({
                    loadModal: !1
                }), "0" == e.code ? (a.AlertSuccess("提交成功"), wx.redirectTo({
                    url: "../confirm/confirm?orderId=" + e.msg
                })) : a.AlertError("提交失败");
            });
        });
    }
});