var a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), e = require("../../../utils/aesKey.js"), t = require("../../../utils/channel.js"), i = require("../../../utils/share.js"), n = require("../../../utils/mBuriedPoint.js"), s = getApp(), o = require("../../../utils/util.js"), r = require("../../../utils/dateUtils.js"), l = require("../../../utils/aes.js"), c = require("../../../utils/mpSDK.js");

Page({
    data: {
        sc: "",
        channelKey: "dz7GfkjArI2vI0qf",
        openId: wx.getStorageSync("openId") || "",
        applyDate: o.formatTime(new Date()),
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
                questionId: "P15600001",
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
            benLevel: "04",
            sumInsured: "4000000"
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
                questionId: "P15600001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: o.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "1",
            productId: "A100000013",
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
            applyDate: o.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            totalPremium: "0.00",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            productId: "A100000013",
            effDate: o.formatTime(o.dateAdd(new Date().getTime(), 1)),
            applicant: {
                birthday: "2000-10-08",
                sex: "M",
                idno: "110101200010080010",
                idType: "1",
                name: "jasdfoji",
                contactInfo: {
                    email: "asfasfd@dd.dd",
                    mobile: "13666666666"
                }
            },
            insurants: [ {
                seqno: "1",
                socialSecurity: "N",
                idno: "110101200010080037",
                idType: "1",
                sex: "M",
                birthday: "2000-10-08",
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
                    benLevel: "04",
                    sumInsured: "3000000"
                } ],
                healthNotes: [ {
                    questionId: "P15600001",
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
            planCode: "P156",
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
            goodsId: "A100000013",
            salesCode: "",
            channel: "WXXCX",
            source: "",
            salesmanName: "",
            effDate: "",
            planLevel: "04",
            coverage: "300000000",
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
            topImgUrl: s.globalData.wm1Url + "/wxresource/P156/img/top.jpg",
            cpxq_01: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_01.png",
            cpxq_02: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_02.png",
            cpxq_03: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_03.png",
            cpxq_04: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_04.png",
            cpxq_05: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_05.png",
            cpxq_06: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_06.png",
            cpxq_07: s.globalData.wm1Url + "/wxresource/P156/img/cpxq_07.jpg",
            cjwt_01: s.globalData.wm1Url + "/wxresource/P156/img/cjwt_01.jpg",
            cjwt_02: s.globalData.wm1Url + "/wxresource/P156/img/cjwt_02.jpg",
            cjwt_03: s.globalData.wm1Url + "/wxresource/P156/img/cjwt_03.jpg",
            share: s.globalData.test1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: s.globalData.test1Url + "/wxresource/P005_01/img/sy.png",
            icon2: s.globalData.test1Url + "/wxresource/P005_01/img/kf.png",
            copyRightUrl: s.globalData.test1Url + "/image/publicLogo/esb2017bottom.png"
        },
        tabplan: 200,
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
            name: "200万",
            sumInsured: "4000000",
            benLevel: "04",
            checked: !0
        }, {
            name: "200万",
            sumInsured: "5000000",
            benLevel: "06"
        }, {
            name: "200万",
            sumInsured: "10000000",
            benLevel: "09"
        }, {
            name: "200万",
            sumInsured: "11000000",
            benLevel: "10"
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
        totalPrem: "200元/年起",
        price: "200元/年起",
        referrerInfo: s.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ],
        showDes: !1,
        showAsia: !1,
        insuredAreasData: [],
        insuredAreas: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "住院就医安排费用保险金",
            value: "1次"
        }, {
            name: "恶性肿瘤第三方诊疗费用保险金",
            value: "1次"
        }, {
            name: "年免赔额",
            value: "1万元"
        }, {
            name: "保障区域",
            value: "中国大陆（不含港澳台）"
        }, {
            name: "医院范围",
            value: "二级以上（含二级）公立医院普通部"
        } ],
        insuredAreasIllness: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "质子重离子医疗保险金",
            value: "100万元"
        }, {
            name: "住院就医安排费用保险金",
            value: "1次"
        }, {
            name: "恶性肿瘤第三方诊疗费用保险金",
            value: "1次"
        }, {
            name: "年免赔额",
            value: "1万元"
        }, {
            name: "保障区域",
            value: "中国大陆（不含港澳台）"
        }, {
            name: "医院范围",
            value: "二级以上（含二级）公立医院普通部；上海质子重离子医院（暨复旦大学附属肿瘤医院质子重离子中心）"
        } ],
        insuredAreasAsia: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "亚洲海外特定医疗保险金",
            value: "最高600万元"
        }, {
            name: "住院就医安排费用保险金",
            value: "1次"
        }, {
            name: "恶性肿瘤第三方诊疗费用保险金",
            value: "1次"
        }, {
            name: "年免赔额",
            value: "1万元"
        }, {
            name: "保障区域",
            value: "中国大陆（不含港澳台）；亚洲海外特定医疗支持除中国（含港澳台）以外的亚洲地区或国家"
        }, {
            name: "医院范围",
            value: "二级以上（含二级）公立医院普通部；特定亚洲地区医疗机构"
        } ],
        insuredAreasAsiaAndIllness: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "质子重离子医疗保险金",
            value: "100万元"
        }, {
            name: "亚洲海外特定医疗保险金",
            value: "最高600万元"
        }, {
            name: "住院就医安排费用保险金",
            value: "1次"
        }, {
            name: "恶性肿瘤第三方诊疗费用保险金",
            value: "1次"
        }, {
            name: "年免赔额",
            value: "1万元"
        }, {
            name: "保障区域",
            value: "中国大陆（不含港澳台）亚洲海外特定医疗支持除中国（含港澳台）以外的亚洲地区或国家"
        }, {
            name: "医院范围",
            value: "二级以上（含二级）公立医院普通部；上海质子重离子医院（暨复旦大学附属肿瘤医院质子重离子中心）；特定亚洲地区医疗机构"
        } ],
        illnessCheck: !1,
        asiaCheck: !1
    },
    calcPremium: function() {
        var a = this, e = {
            applyDate: o.formatTime(new Date()),
            paymentModeCode: "1",
            insurants: [ {
                seqno: "1",
                birthDate: "",
                genderCode: "",
                socialSecurity: this.data.socialSecurity,
                coverages: [ {
                    productCode: "P156",
                    coverageAmount: this.data.coverages.sumInsured,
                    coverageLevel: this.data.coverages.benLevel,
                    coverageUnits: 1,
                    periodMonth: 12,
                    periodDay: 0
                } ]
            } ]
        };
        1 == this.data.relationshipWithApplicant ? (e.insurants[0].birthDate = this.data.applicant.birthday, 
        e.insurants[0].genderCode = this.data.applicant.sex) : (e.insurants[0].birthDate = this.data.beibaoren.birthday, 
        e.insurants[0].genderCode = this.data.beibaoren.sex), e.insurants[0].birthDate && e.insurants[0].genderCode && wx.request({
            url: s.globalData.baseUrl + "/calc/pCalculateSumPremium.do",
            method: "POST",
            data: {
                calcJson: JSON.stringify(e),
                c: "WXXCX",
                goodsId: "A100000013"
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
    },
    buy: function() {
        var a = this;
        c.onEvent("InsuranceMall_InsDetail_insure", "InsuranceMall_InsDetail_insure"), (0, 
        n.mBuriedPoint)("WX_Ins_Product_insure", "A100000013_平安e生保2020", "立即投保", "click", "P156/index/index", "index"), 
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
            url: s.globalData.test2Url + "/miniapp/saveInfo",
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
        e.birthday = o.getBirthDateFromIdCard(this.data.applicant.idno), e.sex = o.maleOrFeByIdCard(this.data.applicant.idno), 
        "1" == this.data.relationshipWithApplicant) e.identity = "01", a[0] = e; else {
            e.identity = "02";
            var t = new Object();
            t.name = this.data.beibaoren.name, t.idNo = this.data.beibaoren.idno, t.idType = "1", 
            t.birthday = o.getBirthDateFromIdCard(this.data.beibaoren.idno), t.sex = o.maleOrFeByIdCard(this.data.beibaoren.idno), 
            t.identity = "03", a[0] = e, a[1] = t;
        }
        return JSON.stringify(a);
    },
    checkForm: function() {
        return 0 == o.isLegalName(this.data.applicant.name) ? (wx.showModal({
            content: "投保人本人姓名有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == o.isLegalName(this.data.beibaoren.name) ? (wx.showModal({
            content: "家属姓名有误"
        }), !1) : 0 == o.isLegalId(this.data.applicant.idno) ? (wx.showModal({
            content: "投保人本人身份证号有误"
        }), !1) : r.ages(this.data.applicant.birthday) > 60 ? (wx.showModal({
            content: "投保人年龄不能大于60岁"
        }), !1) : r.ages(this.data.applicant.birthday) < 16 ? (wx.showModal({
            content: "投保人年龄不能小于16岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && r.ages(this.data.beibaoren.birthday) > 60 ? (wx.showModal({
            content: "被保人年龄不能大于60岁"
        }), !1) : r.dateDiffInDays(this.data.beibaoren.birthday, new Date()) < 28 ? (wx.showModal({
            content: "被保人年龄不能小于28天"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == o.isLegalId(this.data.beibaoren.idno) ? (wx.showModal({
            content: "家属身份证号有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && this.data.beibaoren.idno == this.data.applicant.idno ? (wx.showModal({
            content: "投被保人身份证号不能相同"
        }), !1) : 0 == o.isLegalMobile(this.data.applicant.contactInfo.mobile) ? (wx.showModal({
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
        var n = this, o = (0, e.getChannelKey)(), r = (0, t.getFromChannel)();
        wx.request({
            url: s.globalData.test2Url + "/outChannel/applicationValidate.do?c=" + r,
            data: {
                data: l.encrypt(JSON.stringify(a), o)
            },
            method: "POST",
            success: function(a) {
                if (console.log(a), "00" == a.data.returnCode) {
                    var e = l.getData(a.data.data, o);
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
    showModal: function(a) {
        "showAsia" == a.target.dataset.qst ? this.setData({
            showAsia: !0
        }) : this.setData({
            showDes: !0
        });
    },
    closeModal: function() {
        this.setData({
            showDes: !1,
            showAsia: !1
        });
    },
    tabPlan: function(a) {
        var e = a.target.dataset.plan, t = "";
        "100" == e ? t = "200元/年起" : "300" == e && (t = "202元/年起"), this.setData({
            tabplan: e,
            price: t
        });
    },
    bindAname: function(a) {
        var e = this.data.applicant;
        e.name = a.detail.value.trim(), this.setData({
            applicant: e
        });
    },
    checkEffDate: function(a) {
        var e = o.formatTime(new Date());
        return a.substring(5, 10) == e.substring(5, 10);
    },
    bindAidno: function(a) {
        var e = this.data.applicant;
        e.idno = a.detail.value.trim(), e.sex = o.maleOrFeByIdCard(e.idno), e.birthday = o.getBirthDateFromIdCard(e.idno), 
        this.setData({
            applicant: e
        }), 0 != o.isLegalId(e.idno) ? this.calcPremium() : wx.showModal({
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
        e.idno = a.detail.value.trim(), e.sex = o.maleOrFeByIdCard(e.idno), e.birthday = o.getBirthDateFromIdCard(e.idno), 
        this.setData({
            beibaoren: e
        }), 0 != o.isLegalId(e.idno) ? this.calcPremium() : wx.showModal({
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
            var s = this.data.applicant;
            n.name = s.name, n.idno = s.idno;
        }
        var o = this.data.beibaoren, r = Object.assign({}, o, n);
        this.setData({
            beibaoren: r
        }), this.calcPremium();
    },
    planChange: function(a) {
        var e = a, t = {}, i = this.data.plans;
        for (var n in i) i[n].sumInsured == e ? (i[n].checked = !0, Object.assign(t, i[n]), 
        delete t.name, delete t.checked) : i[n].checked = !1;
        var s = this.data.coverages;
        Object.assign(s, t), this.setData({
            plans: i,
            coverages: s
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
        wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A100000013").set({
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
                illnessCheck: this.data.illnessCheck,
                asiaCheck: this.data.asiaCheck,
                addTime: new Date()
            },
            success: function(a) {
                console.log(a);
            }
        });
    },
    onSave: function() {
        var a = this.data.applicant, e = this.data.beibaoren, t = {
            A100000013: {
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
                s.globalData.referrerInfo;
                s.globalData.referrerInfo.appId && (t.appId || a.setData({
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
        (console.log("onQuery"), this.data.openId) ? wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A100000013"
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
                    illnessCheck: t.illnessCheck,
                    asiaCheck: t.asiaCheck
                }), a.calcPremium(), console.log("[数据库] [查询记录] 成功: ", e), a.onChange();
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e), a.onChange();
            },
            complete: function(e) {
                console.log(e), 0 == e.data.length && a.onAdd();
            }
        }) : this.onChange();
    },
    onShow: function() {
        this.data.openId || this.setData({
            openId: wx.getStorageSync("openId") || ""
        }), c.onShow();
    },
    onHide: function() {
        c.onHide();
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
            o.getNodesInfo(a, ".paNodes");
        }, 3e3);
    },
    onLoad: function(a) {
        var e = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 4e3), this.calcPremium(), console.log(this.data.openId), wx.getSystemInfo({
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
        var e = s.globalData.wm1Url + a.target.dataset.pdfurl;
        o.getStaticPage(e);
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
        this.data.illnessCheck ? this.data.asiaCheck ? (this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasAsiaAndIllness)
        }), this.planChange("11000000")) : (this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasIllness)
        }), this.planChange("5000000")) : this.data.asiaCheck ? (this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasAsia)
        }), this.planChange("10000000")) : (this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreas)
        }), this.planChange("4000000"));
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
            title: "平安e生保2020",
            path: "/pages/P156/index/index" + (0, i.setShareUrl)()
        };
    }
});