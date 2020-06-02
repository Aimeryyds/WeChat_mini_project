var a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), e = require("../../../utils/aesKey.js"), t = require("../../../utils/channel.js"), i = require("../../../utils/share.js"), n = getApp(), o = require("../../../utils/util.js"), s = require("../../../utils/dateUtils.js"), r = require("../../../utils/aes.js");

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
                benLevel: "05",
                sumInsured: ""
            } ],
            healthNotes: [ {
                questionId: "P10800001",
                answer: "N",
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
            benLevel: "05",
            sumInsured: "500000"
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
                benLevel: "05",
                sumInsured: ""
            } ],
            healthNotes: [ {
                questionId: "P10800001",
                answer: "N",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: o.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "1",
            productId: "A000000077",
            insurants: [ {
                seqno: "1",
                hasSocialSecurity: "",
                sex: "",
                birthday: "",
                coverages: [ {
                    period: "12",
                    periodDay: "0",
                    benLevel: "05",
                    sumInsured: ""
                } ]
            } ]
        },
        validateData: {
            applyDate: o.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            totalPremium: "0.00",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            productId: "A000000077",
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
                    benLevel: "05",
                    sumInsured: "3000000"
                } ],
                healthNotes: [ {
                    questionId: "P10800001",
                    answer: "N",
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
            planCode: "P108",
            applicant: {
                idType: "1",
                sex: "M",
                name: "风格",
                engName: "",
                idNo: "140802198903020015",
                birthday: "1989-03-02",
                mobile: "13333333333",
                email: "dd@126.com"
            },
            insurants: [ {
                socialSecurity: "Y",
                premium: "33500",
                relationWithApplicant: "1",
                idType: "1",
                birthday: "1989-03-02",
                sex: "M",
                name: "风格",
                engName: "",
                idNo: "140802198903020015"
            } ],
            totalPremium: 33500,
            noticeFlag: "Y",
            goodsId: "A000000077",
            salesCode: "",
            channel: "WI",
            source: "",
            salesmanName: "",
            effDate: "2018-10-03",
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
                questionId: "P10800001",
                answer: "N",
                healthNoteSeq: 1,
                description: ""
            } ],
            umCode: ""
        },
        imgurl: {
            topImgUrl: n.globalData.test1Url + "/wxresource/P108/img/top.jpg",
            cpxq1: n.globalData.test1Url + "/wxresource/P108/img/cpxq_01.jpg",
            cpxq2: n.globalData.test1Url + "/wxresource/P108/img/cpxq_02.jpg",
            cpxq4: n.globalData.test1Url + "/wxresource/P108/img/cpxq_04.jpg",
            cjwt: n.globalData.test1Url + "/wxresource/P108/img/cjwt.jpg",
            share: n.globalData.test1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: n.globalData.test1Url + "/wxresource/P005_01/img/sy.png",
            icon2: n.globalData.test1Url + "/wxresource/P005_01/img/kf.png",
            copyRightUrl: n.globalData.test1Url + "/image/publicLogo/esb2017bottom.png"
        },
        tabplan: 30,
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
            name: "30万",
            sumInsured: "300000",
            benLevel: "05"
        }, {
            name: "50万",
            sumInsured: "500000",
            benLevel: "05",
            checked: !0
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
        totalPrem: "144元/年起",
        price: "144元/年起",
        referrerInfo: n.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ]
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
                    productCode: "P108",
                    coverageAmount: this.data.coverages.sumInsured,
                    coverageLevel: "05",
                    coverageUnits: this.data.coverages.sumInsured.substring(0, 3),
                    periodMonth: 12,
                    periodDay: 0
                } ]
            } ]
        };
        1 == this.data.relationshipWithApplicant ? (e.insurants[0].birthDate = this.data.applicant.birthday, 
        e.insurants[0].genderCode = this.data.applicant.sex) : (e.insurants[0].birthDate = this.data.beibaoren.birthday, 
        e.insurants[0].genderCode = this.data.beibaoren.sex), e.insurants[0].birthDate && e.insurants[0].genderCode && wx.request({
            url: n.globalData.baseUrl + "/calc/pCalculateSumPremium.do",
            method: "POST",
            data: {
                calcJson: JSON.stringify(e),
                c: "WXXCX",
                goodsId: "A000000077"
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
        wx.getStorageSync("accessToken") ? this.data.agree.length ? this.checkForm() ? (wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), this.requestSaveInfo(), this.validate()) : this.getNavIndex(2) : wx.showModal({
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
            url: n.globalData.test2Url + "/miniapp/saveInfo",
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
        }), !1) : "1" != this.data.relationshipWithApplicant && s.ages(this.data.applicant.birthday) < 16 ? (wx.showModal({
            content: "投保人年龄不能小于16岁"
        }), !1) : "1" == this.data.relationshipWithApplicant && s.ages(this.data.applicant.birthday) < 18 ? (wx.showModal({
            content: "投保人为本人时年龄不能小于18岁"
        }), !1) : "1" == this.data.relationshipWithApplicant && s.ages(this.data.beibaoren.birthday) > 65 ? (wx.showModal({
            content: "被保人年龄不能大于65岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && s.ages(this.data.beibaoren.birthday) > 65 ? (wx.showModal({
            content: "被保人年龄不能大于65岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && s.ages(this.data.beibaoren.birthday) < 18 ? (wx.showModal({
            content: "被保人年龄不能小于18岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == o.isLegalId(this.data.beibaoren.idno) ? (wx.showModal({
            content: "家属身份证号有误"
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
        a.insurants[0].coverages[0] = this.data.coverages, a.insurants[0].coverages[0].coverageUnits = this.data.coverages.sumInsured.substring(0, 3), 
        a.insurants[0].relationshipWithApplicant = this.data.relationshipWithApplicant, 
        a.insurants[0].relationshipWithPrimaryInsurant = "1", delete a.applicant.coverages, 
        delete a.applicant.hasSocialSecurity, delete a.insurants[0].hasSocialSecurity, console.log(JSON.stringify(a)), 
        console.log(a);
        var o = this, s = (0, e.getChannelKey)(), l = (0, t.getFromChannel)();
        wx.request({
            url: n.globalData.test2Url + "/outChannel/applicationValidate.do?c=" + l,
            data: {
                data: r.encrypt(JSON.stringify(a), s)
            },
            method: "POST",
            success: function(a) {
                if (console.log(a), "00" == a.data.returnCode) {
                    var e = r.getData(a.data.data, s);
                    console.log(e), wx.removeStorageSync("orderId"), wx.setStorageSync("orderId", e.orderId), 
                    console.log(e.orderId), wx.hideToast(), o.onSave(), wx.navigateTo({
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
    tabPlan: function(a) {
        var e = a.target.dataset.plan, t = "";
        "30" == e ? t = "144元/年起" : "50" == e && (t = "240元/年起"), this.setData({
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
            var o = this.data.applicant;
            n.name = o.name, n.idno = o.idno;
        }
        var s = this.data.beibaoren, r = Object.assign({}, s, n);
        this.setData({
            beibaoren: r
        }), this.calcPremium();
    },
    planChange: function(a) {
        var e = a.detail.value;
        console.log(e);
        var t = {}, i = this.data.plans;
        for (var n in i) i[n].sumInsured == e ? (i[n].checked = !0, i[n].benLevel = "05", 
        Object.assign(t, i[n]), delete t.name, delete t.checked) : (i[n].checked = !1, i[n].benLevel = "05");
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
        wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A000000077").set({
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
                addTime: new Date()
            },
            success: function(a) {
                console.log(a);
            }
        });
    },
    onSave: function() {
        var a = this.data.applicant, e = this.data.beibaoren, t = {
            A000000077: {
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
                n.globalData.referrerInfo;
                n.globalData.referrerInfo.appId && (t.appId || a.setData({
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
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A000000077"
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
                    insurants: t.insurants
                }), a.calcPremium(), console.log("[数据库] [查询记录] 成功: ", e);
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
        o.getNodesInfo(this, ".paNodes");
    },
    onLoad: function(a) {
        var e = this;
        this.calcPremium(), console.log(this.data.openId), wx.getSystemInfo({
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
        var e = n.globalData.baseUrl + a.target.dataset.pdfurl;
        (a.target.dataset.pdfurl.includes("http://") || a.target.dataset.pdfurl.includes("https://")) && (e = a.target.dataset.pdfurl), 
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
            title: "i康保·综合意外",
            path: "/pages/P108/index/index" + (0, i.setShareUrl)()
        };
    }
});