var a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), e = require("../../../utils/aesKey.js"), t = require("../../../utils/channel.js"), i = require("../../../utils/share.js"), n = require("../../../utils/mBuriedPoint.js"), o = getApp(), s = require("../../../utils/util.js"), r = require("../../../utils/dateUtils.js"), l = require("../../../utils/aes.js");

Page({
    data: {
        sc: "",
        channelKey: "dz7GfkjArI2vI0qf",
        openId: wx.getStorageSync("openId") || "",
        applyDate: s.formatTime(new Date()),
        requestId: "WXXCX_" + new Date().getTime(),
        applicant: {
            birthday: "",
            sex: "",
            idno: "",
            idType: "1",
            name: "",
            contactInfo: {
                email: "",
                mobile: ""
            }
        },
        beibaoren: {
            seqno: "1",
            socialSecurity: "",
            idno: "",
            idType: "1",
            sex: "",
            birthday: "",
            name: "",
            relationshipWithApplicant: "",
            relationshipWithPrimaryInsurant: "1",
            coverages: [ {
                period: "12",
                periodDay: "0",
                paymentPeriod: "12",
                paymentPeriodDay: "0",
                planType: "0",
                actualPrem: "0.00",
                benLevel: "",
                sumInsured: ""
            } ],
            healthNotes: [ {
                questionId: "P16000001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        },
        socialSecurity: "N",
        relationshipWithApplicant: "1",
        coverages: {
            period: "12",
            periodDay: "0",
            paymentPeriod: "12",
            paymentPeriodDay: "0",
            planType: "0",
            actualPrem: "0.00",
            benLevel: "01",
            sumInsured: "2200000"
        },
        totalPremium: "0",
        insurants: [ {
            seqno: "1",
            socialSecurity: "",
            idno: "",
            idType: "1",
            sex: "",
            birthday: "",
            name: "",
            relationshipWithApplicant: "1",
            relationshipWithPrimaryInsurant: "1",
            coverages: [ {
                period: "12",
                periodDay: "0",
                paymentPeriod: "12",
                paymentPeriodDay: "0",
                planType: "0",
                actualPrem: "0.00",
                benLevel: "",
                sumInsured: ""
            } ],
            healthNotes: [ {
                questionId: "P16000001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: s.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "1",
            productId: "A100000023",
            insurants: [ {
                seqno: "1",
                hasSocialSecurity: "",
                sex: "",
                birthday: "",
                coverages: [ {
                    period: "12",
                    periodDay: "0",
                    benLevel: "",
                    sumInsured: ""
                } ]
            } ]
        },
        validateData: {
            applyDate: s.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            totalPremium: "0.00",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            productId: "A100000023",
            effDate: s.formatTime(s.dateAdd(new Date().getTime(), 1)),
            applicant: {
                birthday: "",
                sex: "M",
                idno: "",
                idType: "1",
                name: "",
                contactInfo: {
                    email: "",
                    mobile: ""
                }
            },
            insurants: [ {
                seqno: "1",
                socialSecurity: "",
                idno: "",
                idType: "1",
                sex: "M",
                birthday: "",
                name: "tf",
                relationshipWithApplicant: "2",
                relationshipWithPrimaryInsurant: "1",
                coverages: [ {
                    period: "12",
                    periodDay: "0",
                    paymentPeriod: "12",
                    paymentPeriodDay: "0",
                    planType: "0",
                    actualPrem: "0.00",
                    benLevel: "01",
                    sumInsured: ""
                } ],
                healthNotes: [ {
                    questionId: "P16000001",
                    answer: "Y",
                    healthNoteSeq: "1"
                } ]
            } ],
            serviceAgreementInfo: {
                premType: "1"
            },
            authInfo: {
                initialChargeMode: "9"
            }
        },
        order: {
            planCode: "P160",
            applicant: {
                idType: "1",
                sex: "M",
                name: "",
                engName: "",
                idNo: "",
                birthday: "",
                mobile: "",
                email: ""
            },
            insurants: [ {
                socialSecurity: "Y",
                premium: "",
                relationWithApplicant: "1",
                idType: "1",
                birthday: "1",
                sex: "M",
                name: "",
                engName: "",
                idNo: ""
            } ],
            totalPremium: 0,
            noticeFlag: "Y",
            goodsId: "A100000023",
            salesCode: "",
            channel: "WXXCX",
            source: "",
            salesmanName: "",
            effDate: "",
            planLevel: "01",
            coverage: "",
            extra: {
                appColumn: "",
                eid: "",
                mcid: "",
                customerNo: "",
                recordingNo: ""
            },
            healthNotes: [ {
                questionId: "P15600001",
                answer: "Y",
                healthNoteSeq: 1,
                description: ""
            } ],
            umCode: ""
        },
        imgurl: {
            topImgUrl: o.globalData.wm1Url + "/wxresource/P160/img/top.jpg",
            cpxq: o.globalData.wm1Url + "/wxresource/P160/img/detial_01.png",
            cpxq2: o.globalData.wm1Url + "/wxresource/P160/img/detial_02.png",
            cpxq3: o.globalData.wm1Url + "/wxresource/P160/img/detial_03.png",
            cpxq4: o.globalData.wm1Url + "/wxresource/P160/img/detial_04.png",
            cpxq5: o.globalData.wm1Url + "/wxresource/P160/img/detial_05.png",
            cjwt1: o.globalData.wm1Url + "/wxresource/P160/img/cjwt_01.png",
            cjwt2: o.globalData.wm1Url + "/wxresource/P160/img/cjwt_02.png",
            cjwt3: o.globalData.wm1Url + "/wxresource/P160/img/cjwt_03.png",
            share: o.globalData.wm1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: o.globalData.wm1Url + "/wxresource/P005_01/img/sy.png",
            icon2: o.globalData.wm1Url + "/wxresource/P005_01/img/kf.png",
            copyRightUrl: o.globalData.wm1Url + "/image/publicLogo/esb2017bottom.png"
        },
        tabplan: 908,
        imgModeWidthFix: "widthFix",
        navmenuTop: 0,
        navmenuHight: 0,
        screenHeight: 300,
        cpxqTop: 0,
        cjwtTop: 0,
        wytbTop: 0,
        menuFixed: !1,
        yby: !1,
        exz: !1,
        nmp: !1,
        scrollTop: 0,
        navselect: "cpxq",
        relations: [ {
            name: "本人",
            value: "1",
            checked: !0
        }, {
            name: "父母",
            value: "I"
        }, {
            name: "配偶",
            value: "2"
        }, {
            name: "子女",
            value: "J"
        } ],
        plans: [ {
            name: "220万",
            sumInsured: "2200000",
            benLevel: "01",
            checked: !0,
            indexT: "09"
        }, {
            name: "320万",
            sumInsured: "3200000",
            benLevel: "02",
            indexT: "10"
        }, {
            name: "370万",
            sumInsured: "3700000",
            benLevel: "03",
            indexT: "11"
        }, {
            name: "460.5万",
            sumInsured: "4605000",
            benLevel: "04",
            indexT: "12"
        }, {
            name: "470万",
            sumInsured: "4700000",
            benLevel: "05",
            indexT: "13"
        }, {
            name: "565.5万",
            sumInsured: "5655000",
            benLevel: "06",
            indexT: "14"
        }, {
            name: "610.5万",
            sumInsured: "6105000",
            benLevel: "07",
            indexT: "15"
        }, {
            name: "710.5万",
            sumInsured: "7105000",
            benLevel: "08",
            indexT: "16"
        } ],
        socialSecuritys: [ {
            name: "有",
            value: "Y"
        }, {
            name: "无",
            value: "N",
            checked: !0
        } ],
        agreeItems: [ {
            name: "agree",
            value: !0
        } ],
        agree: [],
        totalPrem: "908元/年起",
        price: "908元/年起",
        referrerInfo: o.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ],
        insuredAreasData: [ {
            name: "恶性肿瘤及原位癌医疗保险金",
            value: "200万元"
        }, {
            name: "意外医疗保险金",
            value: "20万元"
        }, {
            name: "年免赔额",
            value: "无免赔额"
        }, {
            name: "就医绿通",
            value: "1次"
        }, {
            name: "门诊陪诊",
            value: "1次"
        }, {
            name: "恶性肿瘤二诊",
            value: "1次"
        }, {
            name: "家庭医生",
            value: "不限次"
        }, {
            name: "家庭护理",
            value: "普通换药、外科拆线、拔管、灌肠护理各一次"
        }, {
            name: "保障区域",
            value: "中国大陆(不含港澳台)"
        } ],
        showDes_01: !1,
        showAsia: !1,
        plan_01: !1,
        plan_02: !1,
        plan_03: !1
    },
    calcPremium: function() {
        var a = this, e = {
            applyDate: s.formatTime(new Date()),
            paymentModeCode: "1",
            insurants: [ {
                seqno: "1",
                birthDate: "",
                genderCode: "",
                socialSecurity: this.data.socialSecurity,
                coverages: [ {
                    productCode: "P160",
                    coverageAmount: this.data.coverages.sumInsured,
                    coverageLevel: this.data.coverages.benLevel,
                    coverageUnits: 1,
                    periodMonth: 12,
                    periodDay: 0
                } ]
            } ]
        };
        if (1 == this.data.relationshipWithApplicant ? (e.insurants[0].birthDate = this.data.applicant.birthday, 
        e.insurants[0].genderCode = this.data.applicant.sex) : (e.insurants[0].birthDate = this.data.beibaoren.birthday, 
        e.insurants[0].genderCode = this.data.beibaoren.sex), e.insurants[0].birthDate && e.insurants[0].genderCode) return this.ages(e.insurants[0].birthDate) < 45 ? (wx.showModal({
            content: "被保人年龄不能少于45岁"
        }), !1) : this.ages(e.insurants[0].birthDate) > 70 ? (wx.showModal({
            content: "被保人年龄不能大于70岁"
        }), !1) : this.data.plan_02 && this.ages(e.insurants[0].birthDate) > 60 ? (wx.showModal({
            content: "恶性肿瘤特药附加包被保人年龄不能大于60岁"
        }), !1) : void wx.request({
            url: o.globalData.wm1Url + "/calc/pCalculateSumPremium.do",
            method: "POST",
            data: {
                calcJson: JSON.stringify(e),
                c: "WXXCX",
                goodsId: "A100000023"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            success: function(e) {
                if (console.log(e.data), "00" == e.data.status) {
                    var t = e.data, i = a.data.coverages;
                    i.actualPrem = t.totalPrem;
                    var n = a.data.validateData;
                    n.totalPremium = t.totalPrem, a.setData({
                        totalPrem: t.totalPrem,
                        validateData: n,
                        coverages: i
                    });
                }
            }
        });
        this.setData({
            totalPrem: this.data.price
        });
    },
    buy: function() {
        var a = this;
        (0, n.mBuriedPoint)("WX_Ins_Product_insure", "A100000023_i康保.老年医疗(三高版)", "立即投保", "click", "P160/index/index", "index"), 
        wx.getStorageSync("accessToken") ? this.data.agree.length ? this.checkForm() ? (wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), setTimeout(function() {
            a.validate(), a.requestSaveInfo();
        }, 3e3)) : this.getNavIndex(2) : wx.showModal({
            content: "请阅读并了解相关文件后投保"
        }) : wx.showModal({
            content: "登录超时，请重新登录",
            showCancel: !1,
            success: function(a) {
                a.confirm ? wx.navigateTo({
                    url: "../../login/login"
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    requestSaveInfo: function() {
        var a = this.saveInfo();
        console.log(a);
        var e = wx.getStorageSync("accessToken");
        console.log(e), wx.request({
            url: o.globalData.test2Url + "/miniapp/saveInfo",
            data: {
                accessToken: e,
                data: a
            },
            method: "POST",
            success: function(a) {},
            fail: function() {},
            complete: function() {}
        });
    },
    saveInfo: function() {
        var a = [], e = new Object();
        if (e.name = this.data.applicant.name, e.idNo = this.data.applicant.idno, e.idType = "1", 
        e.birthday = s.getBirthDateFromIdCard(this.data.applicant.idno), e.sex = s.maleOrFeByIdCard(this.data.applicant.idno), 
        "1" == this.data.relationshipWithApplicant) e.identity = "01", a[0] = e; else {
            e.identity = "02";
            var t = new Object();
            t.name = this.data.beibaoren.name, t.idNo = this.data.beibaoren.idno, t.idType = "1", 
            t.birthday = s.getBirthDateFromIdCard(this.data.beibaoren.idno), t.sex = s.maleOrFeByIdCard(this.data.beibaoren.idno), 
            t.identity = "03", a[0] = e, a[1] = t;
        }
        return JSON.stringify(a);
    },
    checkForm: function() {
        return 0 == s.isLegalName(this.data.applicant.name) ? (wx.showModal({
            content: "投保人本人姓名有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == s.isLegalName(this.data.beibaoren.name) ? (wx.showModal({
            content: "家属姓名有误"
        }), !1) : 0 == s.isLegalId(this.data.applicant.idno) ? (wx.showModal({
            content: "投保人本人身份证号有误"
        }), !1) : this.data.plan_01 && (this.ages(this.data.beibaoren.birthday) > 70 && "1" != this.data.relationshipWithApplicant || this.ages(this.data.applicant.birthday) > 70 && "1" == this.data.relationshipWithApplicant) ? (wx.showModal({
            content: "加购质子重离子附加包被保人年龄不能大于70岁"
        }), !1) : this.data.plan_02 && (this.ages(this.data.beibaoren.birthday) > 60 && "1" != this.data.relationshipWithApplicant || this.ages(this.data.applicant.birthday) > 60 && "1" == this.data.relationshipWithApplicant) ? (wx.showModal({
            content: "加购恶性肿瘤特药附加包被保人年龄不能大于60岁"
        }), !1) : this.data.plan_02 && (this.ages(this.data.beibaoren.birthday) > 70 && "1" != this.data.relationshipWithApplicant || this.ages(this.data.applicant.birthday) > 70 && "1" == this.data.relationshipWithApplicant) ? (wx.showModal({
            content: "加购意外伤害附加包被保人年龄不能大于70岁"
        }), !1) : this.ages(this.data.beibaoren.birthday) > 70 && "1" != this.data.relationshipWithApplicant ? (wx.showModal({
            content: "被保人年龄不能大于70岁"
        }), !1) : r.dateDiffInDays(this.data.beibaoren.birthday, new Date()) < 45 || "1" == this.data.relationshipWithApplicant && this.ages(this.data.applicant.birthday) < 45 ? (wx.showModal({
            content: "被保人年龄不能小于45岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == s.isLegalId(this.data.beibaoren.idno) ? (wx.showModal({
            content: "家属身份证号有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && this.data.beibaoren.idno == this.data.applicant.idno ? (wx.showModal({
            content: "投被保人身份证号不能相同"
        }), !1) : 0 == s.isLegalMobile(this.data.applicant.contactInfo.mobile) ? (wx.showModal({
            content: "手机号有误"
        }), !1) : "2" != this.data.relationshipWithApplicant || this.data.beibaoren.sex != this.data.applicant.sex || (wx.showModal({
            content: "配偶性别和投保人相同"
        }), !1);
    },
    validate: function() {
        var a = this.data.validateData;
        a.applicant = this.data.applicant;
        var i = {};
        (i = 1 == this.data.relationshipWithApplicant ? this.data.applicant : this.data.beibaoren).socialSecurity = this.data.socialSecurity, 
        a.insurants[0] = Object.assign({}, a.insurants[0], i), a.insurants[0].coverages = [], 
        a.insurants[0].coverages[0] = this.data.coverages, a.insurants[0].relationshipWithApplicant = this.data.relationshipWithApplicant, 
        a.insurants[0].relationshipWithPrimaryInsurant = "1", delete a.applicant.coverages, 
        delete a.applicant.hasSocialSecurity, delete a.insurants[0].hasSocialSecurity, console.log(JSON.stringify(a)), 
        console.log(a);
        var n = this, s = (0, e.getChannelKey)(), r = (0, t.getFromChannel)();
        wx.request({
            url: o.globalData.test2Url + "/outChannel/applicationValidate.do?c=" + r,
            data: {
                data: l.encrypt(JSON.stringify(a), s)
            },
            method: "POST",
            success: function(a) {
                if (console.log(a), "00" == a.data.returnCode) {
                    var e = l.getData(a.data.data, s);
                    wx.removeStorageSync("orderId"), wx.setStorageSync("orderId", e.orderId), console.log(e.orderId), 
                    wx.hideToast(), n.onSave(), wx.navigateTo({
                        url: "../health/health?orderId=" + e.orderId
                    });
                } else wx.hideToast(), wx.showModal({
                    content: a.data.returnMsg
                });
            },
            fail: function() {
                wx.hideToast();
            },
            complete: function() {}
        });
    },
    showModal: function(e) {
        var t = e.target.dataset.qst;
        this.setData((0, a.default)({}, t, !0));
    },
    closeModal: function() {
        this.setData({
            showDes_01: !1,
            showDes_02: !1,
            showDes_03: !1
        });
    },
    tabPlan: function(a) {
        var e = a.target.dataset.plan, t = e + "元/年起";
        this.setData({
            tabplan: e,
            price: t
        }), this.onChange();
    },
    bindAname: function(a) {
        var e = this.data.applicant;
        e.name = a.detail.value.trim(), this.setData({
            applicant: e
        });
    },
    checkEffDate: function(a) {
        var e = s.formatTime(new Date());
        return a.substring(5, 10) == e.substring(5, 10);
    },
    bindAidno: function(a) {
        var e = this.data.applicant;
        e.idno = a.detail.value.trim(), e.sex = s.maleOrFeByIdCard(e.idno), e.birthday = s.getBirthDateFromIdCard(e.idno), 
        this.setData({
            applicant: e
        }), 0 != s.isLegalId(e.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    bindAmobile: function(a) {
        var e = this.data.applicant;
        e.contactInfo.mobile = a.detail.value.trim(), this.setData({
            applicant: e
        }), console.log(this.data.applicant);
    },
    bindBname: function(a) {
        var e = this.data.beibaoren;
        e.name = a.detail.value.trim(), this.setData({
            beibaoren: e
        });
    },
    bindBidno: function(a) {
        var e = this.data.beibaoren;
        e.idno = a.detail.value.trim(), e.sex = s.maleOrFeByIdCard(e.idno), e.birthday = s.getBirthDateFromIdCard(e.idno), 
        this.setData({
            beibaoren: e
        }), 0 != s.isLegalId(e.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    seePlan: function() {
        wx.navigateTo({
            url: "../xiangqing/index"
        });
    },
    selectNav: function(a) {
        var e = a.target.dataset.navselect;
        this.data.navmenuHeight;
        console.log(e), this.setData({
            navselect: e
        }), wx.pageScrollTo({
            scrollTop: this.data[e + "Top"]
        });
    },
    toggle: function(e) {
        var t = e.target.dataset.qst;
        this.setData((0, a.default)({}, t, !this.data[t]));
    },
    relationChange: function(a) {
        var e = a.detail.value;
        console.log(e);
        var t = this.data.relations;
        for (var i in t) t[i].value == e ? t[i].checked = !0 : t[i].checked = !1;
        this.setData({
            relations: t,
            relationshipWithApplicant: e
        });
        var n = {
            name: "",
            idno: "",
            relationshipWithApplicant: e,
            relationshipWithPrimaryInsurant: "1"
        };
        if (1 == e) {
            var o = this.data.applicant;
            n.name = o.name, n.idno = o.idno;
        }
        var s = this.data.beibaoren, r = Object.assign({}, s, n);
        this.setData({
            beibaoren: r
        }), this.calcPremium();
    },
    planChange: function(a) {
        var e = a, t = {}, i = this.data.plans;
        for (var n in i) i[n].sumInsured == e ? (i[n].checked = !0, Object.assign(t, i[n], {
            benLevel: 908 !== parseInt(this.data.tabplan) ? i[n].indexT : i[n].benLevel
        }), delete t.name, delete t.checked) : i[n].checked = !1;
        var o = this.data.coverages;
        Object.assign(o, t), this.setData({
            plans: i,
            coverages: o
        }), console.log(this.data.coverages), this.calcPremium();
    },
    socialSecuritysChange: function(a) {
        var e = a.detail.value;
        console.log(e);
        var t = this.data.socialSecuritys;
        for (var i in t) t[i].value == e ? t[i].checked = !0 : t[i].checked = !1;
        this.setData({
            socialSecuritys: t,
            socialSecurity: e
        }), console.log(this.data.socialSecuritys), this.calcPremium();
    },
    onUnload: function() {
        this.onQuery();
    },
    onSet: function() {
        wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A100000023").set({
            data: {
                applicant: this.data.applicant,
                beibaoren: this.data.beibaoren,
                socialSecuritys: this.data.socialSecuritys,
                socialSecurity: this.data.socialSecurity,
                plans: this.data.plans,
                coverages: this.data.coverages,
                relations: this.data.relations,
                relationshipWithApplicant: this.data.relationshipWithApplicant,
                totalPremium: this.data.totalPremium,
                insurants: this.data.insurants,
                plan_01: this.data.plan_01,
                plan_02: this.data.plan_02,
                plan_03: this.data.plan_03,
                tabplan: this.data.tabplan,
                price: this.data.price,
                addTime: new Date()
            },
            success: function(a) {
                console.log(a);
            }
        });
    },
    onSave: function() {
        var a = this.data.applicant, e = this.data.beibaoren, t = {
            A100000023: {
                applicant: a,
                insurants: [ {
                    name: e.name,
                    idno: e.idno,
                    idType: e.idType,
                    sex: e.sex,
                    birthday: e.birthday,
                    relationshipWithApplicant: e.relationshipWithApplicant
                } ],
                addTime: new Date()
            }
        };
        wx.cloud.database().collection("userInfo").doc(this.data.openId).update({
            data: t,
            success: function(a) {
                console.log(a);
            }
        });
    },
    initReferrerInfo: function() {
        var a = this;
        wx.cloud.database().collection("userInfo").where({
            _openid: this.data.openId
        }).get({
            success: function(e) {
                console.log(e);
                var t = e.data[0].referrerInfo || {};
                o.globalData.referrerInfo;
                o.globalData.referrerInfo.appId && (t.appId || a.setData({
                    referrerInfo: t
                }));
            },
            fail: function(a) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", a);
            },
            complete: function(a) {
                console.log(a);
            }
        });
    },
    ages: function(a) {
        var e = new Date(), t = r.stringToDate(a), i = e.getFullYear() - t.getFullYear();
        return e.getMonth() < t.getMonth() ? i -= 1 : e.getMonth() == t.getMonth() && e.getDate() < t.getDate() && (i -= 1), 
        i;
    },
    onQuery: function() {
        var a = this;
        console.log("onQuery"), wx.cloud.database().collection("userInfoCache").where({
            _openid: this.data.openId
        }).get({
            success: function(e) {
                console.log(e), a.onSet(), console.log("[数据库] [查询记录] 成功: ", e);
            },
            fail: function(a) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", a);
            },
            complete: function(e) {
                console.log(e), 0 == e.data.length && a.onAdd();
            }
        });
    },
    onInit: function() {
        var a = this;
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A100000023"
        }).get({
            success: function(e) {
                console.log(e);
                var t = e.data[0];
                a.setData({
                    applicant: t.applicant,
                    beibaoren: t.beibaoren,
                    socialSecuritys: t.socialSecuritys,
                    socialSecurity: t.socialSecurity,
                    plans: t.plans,
                    coverages: t.coverages,
                    relations: t.relations,
                    relationshipWithApplicant: t.relationshipWithApplicant,
                    totalPremium: t.totalPremium,
                    insurants: t.insurants,
                    plan_01: t.plan_01 || !1,
                    plan_02: t.plan_02 || !1,
                    plan_03: t.plan_03 || !1,
                    tabplan: t.tabplan,
                    price: t.price
                }), a.calcPremium(), a.onChange(), console.log("[数据库] [查询记录] 成功: ", e);
            },
            fail: function(a) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", a);
            },
            complete: function(e) {
                console.log(e), 0 == e.data.length && a.onAdd();
            }
        });
    },
    onShow: function() {
        this.data.openId || this.setData({
            openId: wx.getStorageSync("openId") || ""
        });
    },
    changeFun: function(a) {
        this.setData({
            current: a.detail.current
        });
    },
    getNavIndex: function(a) {
        var e = -1;
        if (e = "number" == typeof a ? a : a.currentTarget.dataset.index, this.data.navcur == e) return !1;
        this.setData({
            navcur: e,
            curNodes: this.data.tops[e].top - 55
        });
    },
    getScrollTop: function(a) {
        var e = a.detail.current.detail.scrollTop, t = parseInt(this.data.navcur), i = this.data.tops[t].top;
        (this.data.tops[t + 1] ? this.data.tops[t + 1].top : this.data.tops[t].top) - 56 < e && t < this.data.tops.length - 1 ? t++ : i - 56 > e && t > 0 && t--, 
        this.setData({
            navcur: t
        });
    },
    onReady: function() {
        var a = this;
        setTimeout(function() {
            s.getNodesInfo(a, ".paNodes");
        }, 3e3);
    },
    onLoad: function(a) {
        var e = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 4e3), this.calcPremium(), wx.getSystemInfo({
            success: function(a) {
                console.log(a.screenHeight), e.setData({
                    screenHeight: a.screenHeight
                });
            },
            fail: function(a) {}
        }), this.onInit();
    },
    getViewInfo: function() {},
    toIndex: function() {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    openPdf: function(a) {
        var e = o.globalData.baseUrl + a.target.dataset.pdfurl;
        s.getStaticPage(e);
    },
    toKefu: function() {
        wx.navigateTo({
            url: "../../webview/index"
        });
    },
    initClientRect: function() {
        var e = this;
        wx.createSelectorQuery().selectAll("#navmenu,#cpxq,#cpxq1,#cjwt,#wytb").boundingClientRect(function(t) {
            e.setData({
                navmenuHeight: t[0].height
            });
            for (var i = 0; i < t.length; i++) console.log(t), e.setData((0, a.default)({}, t[i].id + "Top", Math.floor(t[i].top)));
        }).exec();
    },
    agreeChange: function(a) {
        console.log(a.detail.value, this.data.agreeItems), this.setData({
            agree: a.detail.value
        });
    },
    onChange: function(e) {
        if (e) {
            var t = e.target.id;
            this.setData((0, a.default)({}, t, !this.data[t]));
        }
        this.data.plan_01 ? this.data.plan_02 ? this.data.plan_03 ? this.planChange("7105000") : this.planChange("4700000") : this.data.plan_03 ? this.planChange("5655000") : this.planChange("3200000") : this.data.plan_02 ? this.data.plan_03 ? this.planChange("6105000") : this.planChange("3700000") : this.data.plan_03 ? this.planChange("4605000") : this.planChange("2200000");
    },
    throttle: function(a, e) {
        clearTimeout(a.tId), a.tId = setTimeout(function() {
            a.call(e);
        }, 200);
    },
    scrollEvent: function(a) {
        var e = this.data.navmenuHeight;
        this.setData({
            menuFixed: a.scrollTop - this.data.navmenuTop >= 0
        }), a.scrollTop > this.data.cpxqTop - 2 * e && a.scrollTop < this.data.cjwtTop - 2 * e ? this.setData({
            navselect: "cpxq"
        }) : a.scrollTop > this.data.cjwtTop - 2 * e && a.scrollTop < this.data.wytbTop - 2 * e ? this.setData({
            navselect: "cjwt"
        }) : a.scrollTop > this.data.wytbTop - 2 * e && this.setData({
            navselect: "wytb"
        });
    },
    debounce: function(a, e) {
        return function() {
            var e = this, t = arguments;
            a.apply(e, t);
        };
    },
    onPageScroll: function(a) {
        this.debounce(this.scrollEvent(a), 100);
    },
    onShareAppMessage: function(a) {
        return "button" === a.from && console.log(a.target), {
            title: "i康保.老年医疗(三高版)",
            path: "/pages/P160/index/index" + (0, i.setShareUrl)()
        };
    }
});