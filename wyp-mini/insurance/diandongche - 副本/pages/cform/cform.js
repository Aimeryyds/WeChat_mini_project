var e = require("../../58268180480303CF3E40E9872402F6C0.js"), a = getApp();

Page({
    data: {
        loadModal: !1,
        readModal: !1,
        readFlag: !1,
        orderId: "",
        appliName: "",
        companyName: "",
        appliCorpPhone: "",
        appliCorpId: "",
        insuredName: "",
        insuredCardType: "",
        insuredCard: "",
        insuredPhone: "",
        plateNumber: "",
        modelNumber: "",
        machineryNumber: "",
        frameNumber: "",
        veichelColor: "",
        productionDate: "",
        buyDate: "",
        policyCardTypeIndex: "",
        insuredCardTypeIndex: "",
        modelNumberIndex: "",
        insrCorpName: "",
        productCode: "",
        cardNumber: "",
        passwd: "",
        notice: "",
        clause: "",
        statement: ""
    },
    onLoad: function(t) {
        var r = JSON.parse(t.paramsData);
        if (void 0 == r.orderId) console.info("获取卡片传递过来的值"), console.info(r), this.setData({
            orderId: "",
            insrCorpName: r.insureName,
            productCode: r.productCode,
            appliName: r.departmentName,
            companyName: r.companyName,
            appliCorpId: r.departmentCode,
            appliCorpPhone: r.mobile,
            insuredName: r.userName,
            insuredCard: r.cardId,
            insuredPhone: r.telephone,
            cardNumber: r.qrcode,
            passwd: r.cardpasswd,
            notice: r.notice,
            clause: r.clause,
            statement: r.statement
        }); else {
            var o = r.orderId, s = this;
            if (console.info("获取再次激活的订单ID" + o), null != o && "" != o) {
                var n = {
                    orderId: o
                };
                console.info("params==========" + JSON.stringify(n)), e.GetTokenCallBack(function() {
                    e.Requests_json(a.globalData.insuranceUrl + "/api/order/findFormByOrder", n).then(function(a) {
                        s.setData({
                            loadModal: !1
                        }), console.info(a), "0" == a.code ? (console.info("set"), s.setData({
                            orderId: o,
                            insrCorpName: a.result.insrCorpName,
                            productCode: a.result.productCode,
                            appliName: a.result.appliName,
                            companyName: a.result.companyName,
                            appliCorpId: a.result.appliCorpId,
                            appliCorpPhone: a.result.appliCorpPhone,
                            insuredName: a.result.insuredName,
                            insuredCard: a.result.insuredCard,
                            insuredPhone: a.result.insuredPhone,
                            cardNumber: a.result.cardNumber,
                            passwd: a.result.passwd,
                            notice: a.result.notice,
                            clause: a.result.clause,
                            statement: a.result.statement,
                            productionDate: a.result.productionDate,
                            veichelColor: a.result.veichelColor,
                            machineryNumber: a.result.machineryNumber,
                            frameNumber: a.result.frameNumber,
                            modelNumber: a.result.modelNumber,
                            plateNumber: a.result.plateNumber
                        })) : e.AlertMsg(a.msg);
                    });
                });
            }
        }
        var l = wx.getStorageSync("userToken"), d = e.formatDate(new Date());
        this.setData({
            userToken: l,
            productionDate: d,
            buyDate: d
        });
    },
    DateChange: function(e) {
        var a = e.currentTarget.id, t = this.data;
        t[a] = e.detail.value, this.setData(t);
    },
    goHome: function() {
        wx.redirectTo({
            url: "/pages/home/home"
        });
    },
    getInputValue: function(e) {
        var a = e.currentTarget.id, t = e.detail.value, r = this.data;
        r[a] = t, this.setData(r);
    },
    chooseRead: function(e) {
        this.data.readFlag = !this.data.readFlag;
    },
    goScan: function() {
        var t = this;
        wx.scanCode({
            success: function(r) {
                t.setData({
                    img: r.result
                });
                var o = t;
                o.setData({
                    readModal: !0
                });
                var s = {
                    url: r.result
                };
                e.GetTokenCallBack(function() {
                    e.Requests_json(a.globalData.insuranceUrl + "/ebike/getScanVehicleInfo", s).then(function(a) {
                        console.info(a), "0" == a.code ? o.setData({
                            productionDate: a.data.manufacturingDate,
                            veichelColor: a.data.colour,
                            machineryNumber: a.data.electromotorModel,
                            frameNumber: a.data.vehicleCode,
                            modelNumber: a.data.productCode
                        }) : e.AlertMsg(a.msg), o.setData({
                            readModal: !1
                        });
                    });
                });
            },
            fail: function(e) {
                console.log(e);
            }
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
    readDetail: function(t) {
        var r = this, o = t.currentTarget.dataset.type;
        switch (console.log(o), r.setData({
            loadModal: !0
        }), o) {
          case "notice":
            e.DownloadPdf(a.globalData.productUrl + this.data.notice, "投保须知");
            break;

          case "clause":
            e.DownloadPdf(a.globalData.productUrl + this.data.clause, "保障条款");
            break;

          case "statement":
            e.DownloadPdf(a.globalData.productUrl + this.data.statement, "投保声明");
            break;

          default:
            e.AlertMsg("网络繁忙,请稍后再试");
        }
        r.setData({
            loadModal: !1
        });
    },
    submitInsuranceForm: function() {
        var e = this;
        e.checkForm() && wx.showModal({
            title: "系统提示",
            content: "是否确认激活?",
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