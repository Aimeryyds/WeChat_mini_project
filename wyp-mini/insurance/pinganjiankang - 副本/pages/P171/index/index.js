var e, a = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = a(require("../../../@babel/runtime/regenerator")), i = a(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = a(require("../../../@babel/runtime/helpers/defineProperty")), s = require("../../../utils/aesKey.js"), o = require("../../../utils/channel.js"), r = require("../../../utils/share.js"), l = require("../../../utils/mBuriedPoint.js"), d = a(require("../../vant/toast/toast")), c = (a(require("../../vant/dialog/dialog")), 
getApp()), h = require("../../../utils/util.js"), u = require("../../../utils/dateUtils.js"), p = require("../../../utils/aes.js");

Page({
    data: (e = {
        switchAll: !1,
        sc: "",
        channelKey: "dz7GfkjArI2vI0qf",
        openId: wx.getStorageSync("openId") || "",
        applyDate: h.formatTime(new Date()),
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
                questionId: "P17100001",
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
                questionId: "P17100001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: h.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "1",
            productId: "A100000037",
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
            applyDate: h.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            totalPremium: "0.00",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            productId: "A100000037",
            effDate: h.formatTime(h.dateAdd(new Date().getTime(), 1)),
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
                    questionId: "P17100001",
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
            planCode: "P171",
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
            goodsId: "A100000037",
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
                questionId: "P17100001",
                answer: "Y",
                healthNoteSeq: 1,
                description: ""
            } ],
            umCode: ""
        },
        imgList: {
            shareImgList: {
                title: "i康保·百万医疗(慢病版)",
                path: "/pages/P171/index/index"
            }
        },
        imgurl: {
            topImgUrl: c.globalData.wm1Url + "/wxresource/P171/img/top.jpg",
            cpxq_01: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_01.jpg",
            cpxq_02: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_02.jpg",
            cpxq_03: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_03.jpg",
            cpxq_04: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_04.jpg",
            cpxq_05: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_05.jpg",
            cpxq_06: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_06.jpg",
            cpxq_07: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_07.jpg",
            cpxq_08: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_08.jpg",
            cpxq_09: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_09.jpg",
            cpxq_10: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_10.jpg",
            cpxq_11: c.globalData.wm1Url + "/wxresource/P171/img/cpxq_11.jpg",
            cjwt_01: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_01.jpg",
            cjwt_02: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_02.jpg",
            cjwt_03: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_03.jpg",
            cjwt_04: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_04.jpg",
            cjwt_05: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_05.jpg",
            cjwt_06: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_06.jpg",
            cjwt_07: c.globalData.wm1Url + "/wxresource/P171/img/cjwt_07.jpg",
            share: c.globalData.test1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: c.globalData.test1Url + "/wxresource/P005_01/img/sy.png",
            icon2: c.globalData.test1Url + "/wxresource/P005_01/img/kf.png",
            copyRightUrl: c.globalData.test1Url + "/image/publicLogo/esb2017bottom.png"
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
            name: "糖尿病版",
            sumInsured: "4000000",
            benLevel: "01",
            checked: !0
        }, {
            name: "高血压版",
            sumInsured: "4000000",
            benLevel: "05"
        }, {
            name: "甲状腺结节版",
            sumInsured: "4000000",
            benLevel: "09"
        }, {
            name: "其他慢病版",
            sumInsured: "4000000",
            benLevel: "13"
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
        totalPrem: "291.65元/年起",
        totalDiscountPrem: "291.65元/年起",
        price: "291.65元/年起",
        referrerInfo: c.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ],
        showDes: !1,
        showAsia: !1,
        insuredAreasData: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "年免赔额",
            value: "2万元"
        }, {
            name: "住院绿通",
            value: "1次"
        }, {
            name: "恶性肿瘤二诊",
            value: "1次"
        }, {
            name: "家庭护理",
            value: "打针、普通换药、外科拆线、雾化、吸痰各一次"
        }, {
            name: "私人健康顾问",
            value: "体检报告解读+运动/饮食/用药指导+视频医生问诊+送药上门（药费自理），不限次"
        }, {
            name: "保障区域",
            value: "中国大陆（不含港澳台）"
        }, {
            name: "医院范围",
            value: "二级以上（含二级）公立医院普通部"
        } ],
        insuredAreas: [ {
            name: "一般医疗保险金",
            value: "200万元"
        }, {
            name: "特定疾病医疗保险金",
            value: "200万元"
        }, {
            name: "就医安排保险金",
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
            name: "就医安排保险金",
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
            name: "就医安排保险金",
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
            name: "就医安排保险金",
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
        asiaCheck: !1,
        discount: "1",
        showBind: !1,
        switch1Checked: !1,
        premTypes: [ {
            name: "年缴",
            value: "1",
            checked: !0
        }, {
            name: "月缴",
            value: "2"
        } ],
        premType: "1",
        holderName: "",
        holderCardNo: "",
        holderCardType: "",
        holderBirthday: "",
        holderGender: "",
        majorBank: "",
        accountId: "",
        telephone: "",
        yzm: "",
        traceNo: "",
        withholdType: "",
        show: !0,
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
        showYzm: !0,
        asyncClose: !0,
        showConfirmButton: "true",
        checked: !0
    }, (0, n.default)(e, "agreeItems", [ {
        name: "agree",
        value: !0
    } ]), (0, n.default)(e, "agree", []), (0, n.default)(e, "hasSign", null), e),
    calcPremium: function() {
        var e = (0, i.default)(t.default.mark(function e() {
            var a, i, n, s = this;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = {
                        applyDate: h.formatTime(new Date()),
                        paymentModeCode: this.data.premType,
                        insurants: [ {
                            seqno: "1",
                            birthDate: "",
                            genderCode: "",
                            socialSecurity: this.data.socialSecurity,
                            coverages: [ {
                                productCode: "P171",
                                coverageAmount: this.data.coverages.sumInsured,
                                coverageLevel: this.data.coverages.benLevel,
                                coverageUnits: 1,
                                periodMonth: 12,
                                periodDay: 0
                            } ]
                        } ]
                    }, 1 == this.data.relationshipWithApplicant ? (a.insurants[0].birthDate = this.data.applicant.birthday, 
                    a.insurants[0].genderCode = this.data.applicant.sex) : (a.insurants[0].birthDate = this.data.beibaoren.birthday, 
                    a.insurants[0].genderCode = this.data.beibaoren.sex), a.insurants[0].birthDate && a.insurants[0].genderCode) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return e.next = 6, this.healthCredit();

                  case 6:
                    i = e.sent, n = this.data.discount, i && i.data && i.data.discount && (n = i.data.discount, 
                    this.setData({
                        discount: n
                    })), a.discount = n, wx.showLoading({
                        title: "加载中",
                        mask: !0
                    }), wx.request({
                        url: c.globalData.baseUrl + "/calc/pCalculateSumPremium.do",
                        method: "POST",
                        data: {
                            calcJson: JSON.stringify(a),
                            c: "WXXCX",
                            goodsId: "A100000037"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        success: function(e) {
                            if (console.log(e.data), "00" == e.data.status) {
                                var a = e.data, t = s.data.coverages;
                                t.actualPrem = a.totalDiscountPrem;
                                var i = s.data.validateData;
                                i.totalPremium = a.totalDiscountPrem, s.setData({
                                    totalPrem: a.totalPrem,
                                    totalDiscountPrem: a.totalDiscountPrem,
                                    validateData: i,
                                    coverages: t
                                });
                            }
                            wx.hideLoading();
                        },
                        fail: function() {
                            wx.hideLoading();
                        },
                        complete: function() {}
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    healthCredit: function() {
        var e = {};
        return 1 == this.data.relationshipWithApplicant ? (e.realName = this.data.applicant.name, 
        e.idCardNo = this.data.applicant.idno, e.dateYMD = h.formatTime(new Date()), e.birthday = this.data.applicant.birthday, 
        e.sex = "M" === this.data.applicant.sex ? 1 : 2) : (e.realName = this.data.beibaoren.name, 
        e.idCardNo = this.data.beibaoren.idno, e.dateYMD = h.formatTime(new Date()), e.birthday = this.data.beibaoren.birthday, 
        e.sex = "M" === this.data.beibaoren.sex ? 1 : 2), e.idType = 1, e.insuranceCode = "P171", 
        e.purchaseType = 1, e.payMode = 5, new Promise(function(a, t) {
            wx.request({
                url: c.globalData.test2Url + "/miniapp/healthCredit.do",
                data: e,
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                method: "POST",
                success: function(e) {
                    a(e);
                },
                fail: function(e) {
                    t(e);
                },
                complete: function() {}
            });
        });
    },
    buy: function() {
        var e = this;
        if ((0, l.mBuriedPoint)("WX_Ins_Product_insure", "A100000037_i康保·百万医疗（慢病版）", "立即投保", "click", "P171/index/index", "index"), 
        wx.getStorageSync("accessToken")) if (this.data.agree.length) if (this.checkForm()) {
            if (this.data.showBind && this.data.switch1Checked) if (this.validateForm()) {
                if (this.data.showYzm && !/^\d{6}$/.test(this.data.yzm)) return (0, d.default)("验证码有误"), 
                void this.getNavIndex(2);
            } else this.getNavIndex(2);
            wx.showToast({
                title: "加载中",
                icon: "loading",
                mask: !0,
                duration: 1e4
            }), setTimeout(function() {
                e.validate(), e.requestSaveInfo();
            }, 3e3);
        } else this.getNavIndex(2); else wx.showModal({
            content: "请阅读并了解相关文件后投保"
        }); else wx.showModal({
            content: "登录超时，请重新登录",
            showCancel: !1,
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "../../login/login"
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    requestSaveInfo: function() {
        var e = this.saveInfo();
        console.log(e);
        var a = wx.getStorageSync("accessToken");
        console.log(a), wx.request({
            url: c.globalData.test2Url + "/miniapp/saveInfo",
            data: {
                accessToken: a,
                data: e
            },
            method: "POST",
            success: function(e) {},
            fail: function() {},
            complete: function() {}
        });
    },
    saveInfo: function() {
        var e = [], a = new Object();
        if (a.name = this.data.applicant.name, a.idNo = this.data.applicant.idno, a.idType = "1", 
        a.birthday = h.getBirthDateFromIdCard(this.data.applicant.idno), a.sex = h.maleOrFeByIdCard(this.data.applicant.idno), 
        "1" == this.data.relationshipWithApplicant) a.identity = "01", e[0] = a; else {
            a.identity = "02";
            var t = new Object();
            t.name = this.data.beibaoren.name, t.idNo = this.data.beibaoren.idno, t.idType = "1", 
            t.birthday = h.getBirthDateFromIdCard(this.data.beibaoren.idno), t.sex = h.maleOrFeByIdCard(this.data.beibaoren.idno), 
            t.identity = "03", e[0] = a, e[1] = t;
        }
        return JSON.stringify(e);
    },
    ages: function(e) {
        var a = new Date(), t = u.stringToDate(e), i = a.getFullYear() - t.getFullYear();
        return a.getMonth() < t.getMonth() ? i -= 1 : a.getMonth() == t.getMonth() && a.getDate() < t.getDate() && (i -= 1), 
        i;
    },
    checkForm: function() {
        return 0 == h.isLegalName(this.data.applicant.name) ? (wx.showModal({
            content: "投保人本人姓名有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == h.isLegalName(this.data.beibaoren.name) ? (wx.showModal({
            content: "家属姓名有误"
        }), !1) : 0 == h.isLegalId(this.data.applicant.idno) ? (wx.showModal({
            content: "投保人本人身份证号有误"
        }), !1) : this.ages(this.data.applicant.birthday) < 18 ? (wx.showModal({
            content: "投保人年龄不能小于18岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && this.ages(this.data.beibaoren.birthday) > 55 ? (wx.showModal({
            content: "被保人年龄不能大于55岁"
        }), !1) : "1" == this.data.relationshipWithApplicant && this.ages(this.data.applicant.birthday) > 55 ? (wx.showModal({
            content: "被保人年龄不能大于55岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == h.isLegalId(this.data.beibaoren.idno) ? (wx.showModal({
            content: "家属身份证号有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && this.data.beibaoren.idno == this.data.applicant.idno ? (wx.showModal({
            content: "投被保人身份证号不能相同"
        }), !1) : 0 == h.isLegalMobile(this.data.applicant.contactInfo.mobile) ? (wx.showModal({
            content: "手机号有误"
        }), !1) : "2" != this.data.relationshipWithApplicant || this.data.beibaoren.sex != this.data.applicant.sex || (wx.showModal({
            content: "配偶性别和投保人相同"
        }), !1);
    },
    validate: function() {
        var e = this.data.validateData;
        e.applicant = this.data.applicant;
        var a = {};
        (a = 1 == this.data.relationshipWithApplicant ? this.data.applicant : this.data.beibaoren).socialSecurity = this.data.socialSecurity, 
        e.insurants[0] = Object.assign({}, e.insurants[0], a), e.insurants[0].coverages = [], 
        e.insurants[0].coverages[0] = this.data.coverages, e.insurants[0].relationshipWithApplicant = this.data.relationshipWithApplicant, 
        e.insurants[0].relationshipWithPrimaryInsurant = "1", delete e.applicant.coverages, 
        delete e.applicant.hasSocialSecurity, delete e.insurants[0].hasSocialSecurity;
        var t = this.data.plans, i = "01";
        for (var n in t) t[n].checked && (i = t[n].benLevel);
        var r = "P17100001";
        switch (i) {
          case "01":
            r = "P17100001";
            break;

          case "05":
            r = "P17100002";
            break;

          case "09":
            r = "P17100003";
            break;

          case "13":
            r = "P17100004";
        }
        e.insurants[0].healthNotes = [ {
            questionId: r,
            answer: "Y",
            healthNoteSeq: "1"
        } ], e.serviceAgreementInfo = {
            premType: this.data.premType
        };
        var l = this, d = (0, s.getChannelKey)(), h = (0, o.getFromChannel)();
        wx.setStorageSync("questionId", r), e.discount = this.data.discount, console.log(JSON.stringify(e)), 
        wx.request({
            url: c.globalData.test2Url + "/outChannel/applicationValidate.do?c=" + h,
            data: {
                data: p.encrypt(JSON.stringify(e), d)
            },
            method: "POST",
            success: function(e) {
                if (console.log(e), "00" == e.data.returnCode) {
                    var a = p.getData(e.data.data, d);
                    wx.removeStorageSync("orderId"), wx.setStorageSync("orderId", a.orderId), console.log(a.orderId), 
                    wx.hideToast(), l.onSave(), l.data.showBind && l.data.switch1Checked ? l.confirmSign() : wx.navigateTo({
                        url: "../health/health?orderId=" + wx.getStorageSync("orderId")
                    });
                } else wx.hideToast(), wx.showModal({
                    content: e.data.returnMsg
                });
            },
            fail: function() {
                wx.hideToast();
            },
            complete: function() {}
        });
    },
    showModal: function(e) {
        "showAsia" == e.target.dataset.qst ? this.setData({
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
    tabPlan: function(e) {
        var a = e.target.dataset.plan, t = "";
        "100" == a ? t = "291.65元/年起" : "200" == a ? t = "291.65元/年起" : "300" == a ? t = "291.65元/年起" : "400" == a && (t = "291.65元/年起"), 
        this.setData({
            tabplan: a,
            price: t
        });
    },
    bindfocus: function(e) {
        console.log(e);
    },
    bindAname: function(e) {
        console.log(e);
        var a = this.data.applicant;
        a.name = e.detail.value.trim(), this.setData({
            applicant: a,
            holderName: a.name
        });
    },
    checkEffDate: function(e) {
        var a = h.formatTime(new Date());
        return e.substring(5, 10) == a.substring(5, 10);
    },
    bindAidno: function(e) {
        var a = this.data.applicant;
        a.idno = e.detail.value.trim(), a.sex = h.maleOrFeByIdCard(a.idno), a.birthday = h.getBirthDateFromIdCard(a.idno), 
        this.setData({
            applicant: a
        }), 0 != h.isLegalId(a.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    bindAmobile: function(e) {
        var a = this.data.applicant;
        a.contactInfo.mobile = e.detail.value.trim(), this.setData({
            applicant: a
        }), console.log(this.data.applicant);
    },
    bindBname: function(e) {
        var a = this.data.beibaoren;
        a.name = e.detail.value.trim(), this.setData({
            beibaoren: a
        });
    },
    bindBidno: function(e) {
        var a = this.data.beibaoren;
        a.idno = e.detail.value.trim(), a.sex = h.maleOrFeByIdCard(a.idno), a.birthday = h.getBirthDateFromIdCard(a.idno), 
        this.setData({
            beibaoren: a
        }), 0 != h.isLegalId(a.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    seePlan: function() {
        wx.navigateTo({
            url: "../xiangqing/index"
        });
    },
    selectNav: function(e) {
        var a = e.target.dataset.navselect;
        this.data.navmenuHeight;
        console.log(a), this.setData({
            navselect: a
        }), wx.pageScrollTo({
            scrollTop: this.data[a + "Top"]
        });
    },
    toggle: function(e) {
        var a = e.target.dataset.qst;
        this.setData((0, n.default)({}, a, !this.data[a]));
    },
    relationChange: function(e) {
        var a = e.detail.value;
        console.log(a);
        var t = this.data.relations;
        for (var i in t) t[i].value == a ? t[i].checked = !0 : t[i].checked = !1;
        this.setData({
            relations: t,
            relationshipWithApplicant: a
        });
        var n = {
            name: "",
            idno: "",
            relationshipWithApplicant: a,
            relationshipWithPrimaryInsurant: "1",
            birthday: ""
        };
        if (1 == a) {
            var s = this.data.applicant;
            n.name = s.name, n.idno = s.idno;
        }
        var o = this.data.beibaoren, r = Object.assign({}, o, n);
        this.setData({
            beibaoren: r
        }), this.calcPremium();
    },
    planChange: function(e) {
        var a = e.detail.value, t = {}, i = this.data.plans, n = this.data, s = n.illnessCheck, o = n.asiaCheck;
        for (var r in i) if (i[r].benLevel == a) {
            i[r].checked = !0;
        } else i[r].checked = !1;
        var l = {};
        if (s) if (o) switch (a) {
          case "01":
            l = {
                benLevel: "04",
                sumInsured: "650000"
            };
            break;

          case "05":
            l = {
                benLevel: "08",
                sumInsured: "650000"
            };
            break;

          case "09":
            l = {
                benLevel: "12",
                sumInsured: "650000"
            };
            break;

          case "13":
            l = {
                benLevel: "16",
                sumInsured: "650000"
            };
        } else switch (a) {
          case "01":
            l = {
                benLevel: "02",
                sumInsured: "500000"
            };
            break;

          case "05":
            l = {
                benLevel: "06",
                sumInsured: "500000"
            };
            break;

          case "09":
            l = {
                benLevel: "10",
                sumInsured: "500000"
            };
            break;

          case "13":
            l = {
                benLevel: "14",
                sumInsured: "500000"
            };
        } else if (o) switch (a) {
          case "01":
            l = {
                benLevel: "03",
                sumInsured: "550000"
            };
            break;

          case "05":
            l = {
                benLevel: "07",
                sumInsured: "550000"
            };
            break;

          case "09":
            l = {
                benLevel: "11",
                sumInsured: "550000"
            };
            break;

          case "13":
            l = {
                benLevel: "15",
                sumInsured: "550000"
            };
        } else l = {
            benLevel: a,
            sumInsured: "400000"
        };
        var d = this.data.coverages;
        Object.assign(d, l), delete t.name, delete t.checked, console.log(t), this.setData({
            plans: i,
            coverages: d
        }), console.log(this.data.coverages), this.calcPremium();
    },
    socialSecuritysChange: function(e) {
        var a = e.detail.value;
        console.log(a);
        var t = this.data.socialSecuritys;
        for (var i in t) t[i].value == a ? t[i].checked = !0 : t[i].checked = !1;
        this.setData({
            socialSecuritys: t,
            socialSecurity: a
        }), console.log(this.data.socialSecuritys), this.calcPremium();
    },
    premTypeChange: function(e) {
        var a = e.detail.value;
        console.log(a);
        var t = this.data.premTypes;
        for (var i in t) t[i].value == a ? t[i].checked = !0 : t[i].checked = !1;
        this.setData({
            premTypes: t,
            premType: a
        }), this.calcPremium();
    },
    onUnload: function() {
        this.onQuery();
    },
    onSet: function() {
        this.data.openId && wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A100000037").set({
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
                accountId: this.data.accountId,
                index: this.data.index,
                telephone: this.data.telephone,
                showYzm: this.data.showYzm,
                premType: this.data.premType,
                premTypes: this.data.premTypes,
                addTime: new Date()
            },
            success: function(e) {
                console.log(e);
            }
        });
    },
    onSave: function() {
        var e = this.data.applicant, a = this.data.beibaoren, t = {
            A100000037: {
                applicant: e,
                insurants: [ {
                    name: a.name,
                    idno: a.idno,
                    idType: a.idType,
                    sex: a.sex,
                    birthday: a.birthday,
                    relationshipWithApplicant: a.relationshipWithApplicant
                } ],
                accountId: this.data.accountId,
                index: this.data.index,
                telephone: this.data.telephone,
                showYzm: this.data.showYzm,
                premType: this.data.premType,
                premTypes: this.data.premTypes,
                addTime: new Date()
            }
        };
        wx.cloud.database().collection("userInfo").doc(this.data.openId).update({
            data: t,
            success: function(e) {
                console.log(e);
            }
        });
    },
    initReferrerInfo: function() {
        var e = this;
        wx.cloud.database().collection("userInfo").where({
            _openid: this.data.openId
        }).get({
            success: function(a) {
                console.log(a);
                var t = a.data[0].referrerInfo || {};
                c.globalData.referrerInfo;
                c.globalData.referrerInfo.appId && (t.appId || e.setData({
                    referrerInfo: t
                }));
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e);
            },
            complete: function(e) {
                console.log(e);
            }
        });
    },
    onQuery: function() {
        var e = this;
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _openid: this.data.openId
        }).get({
            success: function(a) {
                console.log(a), e.onSet(), console.log("[数据库] [查询记录] 成功: ", a);
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e);
            },
            complete: function(a) {
                console.log(a), 0 == a.data.length && e.onAdd();
            }
        });
    },
    onInit: function() {
        var e = this;
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A100000037"
        }).get({
            success: function(a) {
                console.log(a);
                var t = a.data[0];
                e.setData({
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
                    asiaCheck: t.asiaCheck,
                    holderName: t.applicant.name,
                    accountId: t.accountId,
                    index: t.index,
                    telephone: t.telephone,
                    showYzm: t.showYzm,
                    premType: t.premType,
                    premTypes: t.premTypes
                }), e.calcPremium(), console.log("[数据库] [查询记录] 成功: ", a);
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e);
            },
            complete: function(a) {
                console.log(a), 0 == a.data.length && e.onAdd();
            }
        });
    },
    onShow: function() {
        this.data.openId || this.setData({
            openId: wx.getStorageSync("openId") || ""
        });
    },
    changeFun: function(e) {
        this.setData({
            current: e.detail.current
        });
    },
    getNavIndex: function(e) {
        var a = -1;
        if (a = "number" == typeof e ? e : e.currentTarget.dataset.index, this.data.navcur == a) return !1;
        this.setData({
            navcur: a,
            curNodes: this.data.tops[a].top - 55
        });
    },
    getScrollTop: function(e) {
        var a = e.detail.current.detail.scrollTop, t = parseInt(this.data.navcur), i = this.data.tops[t].top;
        (this.data.tops[t + 1] ? this.data.tops[t + 1].top : this.data.tops[t].top) - 56 < a && t < this.data.tops.length - 1 ? t++ : i - 56 > a && t > 0 && t--, 
        this.setData({
            navcur: t
        });
    },
    onReady: function() {
        var e = this;
        setTimeout(function() {
            h.getNodesInfo(e, ".paNodes");
        }, 1500);
    },
    jumpImgUrl: function(e) {
        var a = e.target.dataset, t = a.canclick, i = a.clickurltype, n = a.clickurl;
        "0" != t && h.jumpImgUrl(i, n);
    },
    getAllProductImg: function() {
        var e = this, a = h.getProductImg("P171", "WXXCX", 1), t = h.getProductImg("P171", "WXXCX", 2), i = h.getProductImg("P171", "WXXCX", 4), n = h.getProductImg("P171", "WXXCX", 6);
        Promise.all([ a, t, i, n ]).then(function(a) {
            var t = a[0].data.sort(function(e, a) {
                return e.sort - a.sort;
            }), i = a[1].data.sort(function(e, a) {
                return e.sort - a.sort;
            }), n = a[2].data.sort(function(e, a) {
                return e.sort - a.sort;
            }), s = a[3].data.sort(function(e, a) {
                return e.sort - a.sort;
            });
            e.setData({
                imgList: {
                    topImgList: t,
                    cpxqImgList: i,
                    cjwtImgList: n,
                    shareImgList: s
                }
            });
        }).catch(function(e) {
            console.log(e);
        });
    },
    onLoad: function(e) {
        var a = this;
        this.getAllProductImg(), wx.showLoading({
            title: "加载中",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 4e3), this.calcPremium(), console.log(this.data.openId), wx.getSystemInfo({
            success: function(e) {
                console.log(e.screenHeight), a.setData({
                    screenHeight: e.screenHeight
                });
            },
            fail: function(e) {}
        }), this.onInit();
    },
    getViewInfo: function() {},
    toIndex: function() {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    openPdf: function(e) {
        var a = c.globalData.wm1Url + e.target.dataset.pdfurl;
        h.getStaticPage(a);
    },
    openWebview: function(e) {
        var a = c.globalData.mSiteUrl + e.target.dataset.pdfurl;
        h.openWebview(a);
    },
    toKefu: function() {
        wx.navigateTo({
            url: "../../webview/index"
        });
    },
    initClientRect: function() {
        var e = this;
        wx.createSelectorQuery().selectAll("#navmenu,#cpxq,#cpxq1,#cjwt,#wytb").boundingClientRect(function(a) {
            e.setData({
                navmenuHeight: a[0].height
            });
            for (var t = 0; t < a.length; t++) console.log(a), e.setData((0, n.default)({}, a[t].id + "Top", Math.floor(a[t].top)));
        }).exec();
    },
    agreeChange: function(e) {
        console.log(e.detail.value, this.data.agreeItems), this.setData({
            agree: e.detail.value
        });
    },
    switch1Change: function() {
        this.setData({
            switch1Checked: !this.data.switch1Checked
        });
    },
    onChange: function(e) {
        if (e) {
            var a = e.target.id;
            this.setData((0, n.default)({}, a, !this.data[a]));
        }
        this.data.illnessCheck ? this.data.asiaCheck ? this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasAsiaAndIllness)
        }) : this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasIllness)
        }) : this.data.asiaCheck ? this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreasAsia)
        }) : this.setData({
            insuredAreasData: Object.assign([], this.data.insuredAreas)
        });
        var t = this.data.plans;
        for (var i in t) t[i].checked && this.planChange({
            detail: {
                value: t[i].benLevel
            }
        });
    },
    throttle: function(e, a) {
        clearTimeout(e.tId), e.tId = setTimeout(function() {
            e.call(a);
        }, 200);
    },
    scrollEvent: function(e) {
        var a = this.data.navmenuHeight;
        this.setData({
            menuFixed: e.scrollTop - this.data.navmenuTop >= 0
        }), e.scrollTop > this.data.cpxqTop - 2 * a && e.scrollTop < this.data.cjwtTop - 2 * a ? this.setData({
            navselect: "cpxq"
        }) : e.scrollTop > this.data.cjwtTop - 2 * a && e.scrollTop < this.data.wytbTop - 2 * a ? this.setData({
            navselect: "cjwt"
        }) : e.scrollTop > this.data.wytbTop - 2 * a && this.setData({
            navselect: "wytb"
        });
    },
    debounce: function(e, a) {
        return function() {
            var a = this, t = arguments;
            e.apply(a, t);
        };
    },
    onPageScroll: function(e) {
        this.debounce(this.scrollEvent(e), 100);
    },
    onShareAppMessage: function(e) {
        "button" === e.from && console.log(e.target);
        var a = this.data.imgList.shareImgList[0];
        return console.log(this.data.imgList), {
            title: a.title,
            imageUrl: a.picUrl,
            path: a.clickUrl + (0, r.setShareUrl)()
        };
    },
    validateForm: function() {
        return 0 == h.isLegalName(this.data.holderName) ? ((0, d.default)("暂未获取到姓名，请稍后重试"), 
        !1) : 0 == this.data.index ? ((0, d.default)("请选择开户银行"), !1) : /^\d{16,20}$/.test(this.data.accountId) ? !(this.data.showYzm && !/^1\d{10}$/.test(this.data.telephone)) || ((0, 
        d.default)("手机号有误"), !1) : ((0, d.default)("银行账号有误"), !1);
    },
    onClose: function(e) {
        "close" == e.type && this.setData({
            show: !1
        });
    },
    onConfirm: function() {
        if (this.validateForm()) {
            if (this.data.showYzm && !/^\d{6}$/.test(this.data.yzm)) return void (0, d.default)("验证码有误");
            this.confirmSign();
        }
    },
    onCancel: function() {
        this.setData({
            show: !1
        });
    },
    bindPickerChange: function(e) {
        this.setData({
            index: e.detail.value
        }), this.querySignBank(), console.log(this.data.index);
    },
    zdjf: function() {
        this.findOrderIsContract();
    },
    queryNameByOrderId: function(e) {
        var a = this;
        wx.request({
            url: c.globalData.baseUrl + "/miniapp/user/orderDetail",
            method: "POST",
            data: {
                orderId: e || wx.getStorageSync("orderId"),
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(e) {
                var t = e.data.data, i = t.holderName, n = t.holderCardNo, s = t.holderCardType, o = t.holderBirthday, r = t.holderGender;
                console.log(i), a.setData({
                    holderName: i,
                    holderCardNo: n,
                    holderCardType: s,
                    holderBirthday: o,
                    holderGender: r
                });
            }
        });
    },
    findOrderIsContract: function() {
        var e = this;
        wx.request({
            url: c.globalData.baseUrl + "/miniapp/user/findOrderIsContract",
            method: "POST",
            data: {
                orderId: this.data.orderId || wx.getStorageSync("orderId"),
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(a) {
                var t = a.data, i = t.status, n = t.message;
                console.log(i), "00" == i ? e.setData({
                    show: !0
                }) : (0, d.default)(n);
            }
        });
    },
    getCode: function(e) {
        var a = this, t = this.data.currentTime;
        this.data.interval = setInterval(function() {
            t--, a.setData({
                time: t + "秒"
            }), t <= 0 && (clearInterval(a.data.interval), a.setData({
                time: "重发",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3);
        var i = {
            appType: "",
            bankCardNo: this.data.accountId,
            bankCode: this.data.bankArray[this.data.index].id,
            bankName: this.data.bankArray[this.data.index].name,
            birthday: u.timestampToTime(this.data.applicant.birthday, "/"),
            customerIdNo: this.data.applicant.idno,
            customerIdType: "1",
            customerName: this.data.applicant.name,
            gender: this.data.applicant.sex,
            merReserved: {
                traceNo: this.data.traceNo,
                verifyCode: this.data.yzm
            },
            posBankInfoID: "",
            strType: "",
            telephone: this.data.telephone,
            type: "03"
        };
        wx.request({
            url: c.globalData.baseUrl + "/common/api/v1/contract.do",
            data: i,
            method: "POST",
            success: function(e) {
                (e = e.data).ok ? ((0, d.default)("发送成功"), a.setData({
                    traceNo: e.data.traceNo
                })) : (0, d.default)(e.message);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    confirmSign: function() {
        var e = this, a = {
            appType: "",
            bankCardNo: this.data.accountId,
            bankCode: this.data.bankArray[this.data.index].id,
            bankName: this.data.bankArray[this.data.index].name,
            birthday: u.timestampToTime(this.data.applicant.birthday, "/"),
            customerIdNo: this.data.applicant.idno,
            customerIdType: "1",
            customerName: this.data.applicant.name,
            gender: this.data.applicant.sex,
            merReserved: {
                traceNo: this.data.traceNo,
                verifyCode: this.data.yzm
            },
            posBankInfoID: "",
            strType: "",
            telephone: this.data.telephone,
            type: "03"
        };
        console.log(this.data.hasSign), !0 !== this.data.hasSign && "1" != this.data.withholdType ? (this.data.showYzm || (delete a.telephone, 
        delete a.merReserved), console.log(a), wx.request({
            url: c.globalData.baseUrl + "/common/api/v1/validate.do",
            data: a,
            method: "POST",
            success: function(a) {
                a = a.data;
                console.log(a), a.ok ? e.sign() : 62 == a.code ? ((0, d.default)("Code 62"), e.sign()) : (0, 
                d.default)(a.message);
            },
            fail: function() {},
            complete: function() {}
        })) : this.sign();
    },
    sign: function() {
        var e = this, a = {
            orderId: this.data.orderId || wx.getStorageSync("orderId"),
            accessToken: wx.getStorageSync("accessToken"),
            accountId: this.data.accountId,
            bankId: this.data.bankArray[this.data.index].id,
            bankName: this.data.bankArray[this.data.index].name,
            accountName: this.data.holderName
        };
        wx.request({
            url: c.globalData.baseUrl + "/miniapp/user/saveRenewalInfo.do",
            data: a,
            method: "POST",
            success: function(a) {
                var t = a.data, i = t.status, n = t.message;
                "00" == i ? wx.navigateTo({
                    url: "../health/health?orderId=" + data.orderId
                }) : n ? (0, d.default)(n) : (0, d.default)("操作失败，请稍后重试"), setTimeout(function(a) {
                    e.setData({
                        show: !1
                    });
                }, 3e3);
            },
            fail: function() {
                (0, d.default)("操作失败，请稍后重试");
            },
            complete: function() {}
        });
    },
    getVerificationCode: function() {
        var e = this;
        console.log(this.data.disabled), this.data.disabled || this.validateForm() && setTimeout(function() {
            e.getCode(), e.setData({
                disabled: !0
            });
        }, 500);
    },
    queryProctocolByBankInfo: function() {
        var e = this;
        setTimeout(function() {
            if (e.data.accountId && /^[0-9]{16,19}$/.test(e.data.accountId)) {
                var a = {
                    accountNo: e.data.accountId,
                    bankName: e.data.holderName,
                    certificateNo: e.data.applicant.idno,
                    certificateTypeCode: "1"
                };
                "1" != e.data.withholdType ? wx.request({
                    url: c.globalData.baseUrl + "/common/api/v2/queryProctocolByBankInfo.do",
                    method: "POST",
                    data: a,
                    success: function(a) {
                        a = a.data;
                        console.log(a.ok), a.ok ? e.setData({
                            showYzm: !1,
                            hasSign: !0
                        }) : e.setData({
                            showYzm: !0,
                            hasSign: !1
                        });
                    }
                }) : e.setData({
                    showYzm: !1
                });
            } else (0, d.default)("银行账号有误");
        }, 200);
    },
    clear: function() {
        console.log(this.data.yzm), this.setData({
            accountId: "",
            telephone: "",
            yzm: ""
        });
    },
    querySignBank: function() {
        var e = this;
        setTimeout(function() {
            var a = {
                bankNo: e.data.bankArray[e.data.index].id
            };
            e.clear(), wx.request({
                url: c.globalData.baseUrl + "/common/api/v1/querySignBank.do",
                method: "POST",
                data: a,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(a) {
                    if (a.data.data) {
                        var t = a.data.data[0].withholdType;
                        "2" == t ? e.setData({
                            showYzm: !0,
                            withholdType: t
                        }) : e.setData({
                            showYzm: !1,
                            withholdType: t
                        });
                    }
                }
            });
        }, 300);
    },
    accountIdBlur: function(e) {
        this.setData({
            accountId: e.detail.value
        }), this.queryProctocolByBankInfo();
    },
    telephoneBlur: function(e) {
        this.setData({
            telephone: e.detail.value
        });
    },
    yzmBlur: function(e) {
        this.setData({
            yzm: e.detail.value
        });
    }
});