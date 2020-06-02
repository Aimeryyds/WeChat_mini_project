var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), a = require("../../../utils/aesKey.js"), t = require("../../../utils/share.js"), i = require("../../../utils/channel.js"), n = getApp(), o = require("../../../utils/util.js"), s = require("../../../utils/dateUtils.js"), r = require("../../../utils/aes.js");

Page({
    data: {
        showNav: !1,
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
                questionId: "P01500001",
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
            sumInsured: "2000000"
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
                questionId: "P01500001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: o.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "5",
            productId: "A000000053",
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
            productId: "A000000053",
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
                    benLevel: "01",
                    sumInsured: "2000000"
                } ],
                healthNotes: [ {
                    questionId: "P01500001",
                    answer: "Y",
                    healthNoteSeq: "1"
                } ]
            } ],
            serviceAgreementInfo: {
                premType: "5"
            },
            authInfo: {
                initialChargeMode: "9"
            }
        },
        order: {
            planCode: "P015",
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
            goodsId: "A000000053",
            salesCode: "",
            channel: "WI",
            source: "",
            salesmanName: "",
            effDate: "2018-10-03",
            planLevel: "01",
            coverage: "200000000",
            extra: {
                appColumn: "",
                eid: "",
                mcid: "",
                customerNo: "",
                recordingNo: ""
            },
            healthNotes: [ {
                questionId: "P015_0100001",
                answer: "Y",
                healthNoteSeq: 1,
                description: ""
            } ],
            umCode: ""
        },
        imgurl: {
            topImgUrl: n.globalData.test1Url + "/wxresource/P015/img/top.jpg",
            cpxq1: n.globalData.test1Url + "/wxresource/P015/img/cpxq_01.jpg",
            cpxq2: n.globalData.test1Url + "/wxresource/P015/img/cpxq_02.jpg",
            cpxq3: n.globalData.test1Url + "/wxresource/P015/img/cpxq_03.jpg",
            cpxq4: n.globalData.test1Url + "/wxresource/P015/img/cpxq_04.jpg",
            cpxq5: n.globalData.test1Url + "/wxresource/P015/img/cpxq_05.jpg",
            cjwt: n.globalData.test1Url + "/wxresource/P015/img/cjwt.jpg",
            share: n.globalData.test1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: n.globalData.test1Url + "/wxresource/P005_01/img/sy.png",
            icon2: n.globalData.test1Url + "/wxresource/P005_01/img/kf.png",
            plan_01: n.globalData.test1Url + "/wxresource/P015/img/plan_01.jpg",
            plan_02: n.globalData.test1Url + "/wxresource/P015/img/plan_02.jpg",
            plan_03: n.globalData.test1Url + "/wxresource/P015/img/plan_03.jpg",
            copyRightUrl: n.globalData.test1Url + "/image/publicLogo/esb2017bottom.png"
        },
        tabplan: "1",
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
        toView: "cpxq",
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
            name: "计划一",
            sumInsured: "2000000",
            benLevel: "01",
            checked: !0
        }, {
            name: "计划二",
            sumInsured: "2000000",
            benLevel: "02"
        }, {
            name: "计划三",
            sumInsured: "2000000",
            benLevel: "03"
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
        totalPrem: "134元/年起",
        price: "134元/年起",
        referrerInfo: n.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ]
    },
    calcPremium: function() {
        var e = this, a = {
            applyDate: o.formatTime(new Date()),
            paymentModeCode: "5",
            insurants: [ {
                seqno: "1",
                birthDate: "",
                genderCode: "",
                socialSecurity: this.data.socialSecurity,
                coverages: [ {
                    productCode: "P015",
                    coverageAmount: this.data.coverages.sumInsured,
                    coverageLevel: this.data.coverages.benLevel,
                    coverageUnits: 1,
                    periodMonth: 12,
                    periodDay: 0
                } ]
            } ]
        };
        1 == this.data.relationshipWithApplicant ? (a.insurants[0].birthDate = this.data.applicant.birthday, 
        a.insurants[0].genderCode = this.data.applicant.sex) : (a.insurants[0].birthDate = this.data.beibaoren.birthday, 
        a.insurants[0].genderCode = this.data.beibaoren.sex), a.insurants[0].birthDate && a.insurants[0].genderCode && wx.request({
            url: n.globalData.baseUrl + "/calc/pCalculateSumPremium.do",
            method: "POST",
            data: {
                calcJson: JSON.stringify(a),
                c: "WI",
                goodsId: "A000000053"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            success: function(a) {
                if (console.log(a.data), "00" == a.data.status) {
                    var t = a.data, i = e.data.coverages;
                    i.actualPrem = t.totalPrem;
                    var n = e.data.validateData;
                    n.totalPremium = t.totalPrem, e.setData({
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
        }), this.validate(), this.requestSaveInfo()) : this.getNavIndex(2) : wx.showModal({
            content: "请阅读并了解相关文件后投保"
        }) : wx.showModal({
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
            url: n.globalData.test2Url + "/miniapp/saveInfo",
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
        a.birthday = o.getBirthDateFromIdCard(this.data.applicant.idno), a.sex = o.maleOrFeByIdCard(this.data.applicant.idno), 
        "1" == this.data.relationshipWithApplicant) a.identity = "01", e[0] = a; else {
            a.identity = "02";
            var t = new Object();
            t.name = this.data.beibaoren.name, t.idNo = this.data.beibaoren.idno, t.idType = "1", 
            t.birthday = o.getBirthDateFromIdCard(this.data.beibaoren.idno), t.sex = o.maleOrFeByIdCard(this.data.beibaoren.idno), 
            t.identity = "03", e[0] = a, e[1] = t;
        }
        return JSON.stringify(e);
    },
    checkForm: function() {
        return 0 == o.isLegalName(this.data.applicant.name) ? (wx.showModal({
            content: "投保人本人姓名有误"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == o.isLegalName(this.data.beibaoren.name) ? (wx.showModal({
            content: "家属姓名有误"
        }), !1) : 0 == o.isLegalId(this.data.applicant.idno) ? (wx.showModal({
            content: "投保人本人身份证号有误"
        }), !1) : s.ages(this.data.applicant.birthday) > 70 ? (wx.showModal({
            content: "投保人年龄不能大于70周岁"
        }), !1) : s.ages(this.data.applicant.birthday) < 16 ? (wx.showModal({
            content: "投保人年龄不能小于16周岁"
        }), !1) : "1" != this.data.relationshipWithApplicant && s.ages(this.data.beibaoren.birthday) > 70 ? (wx.showModal({
            content: "被保人年龄不能大于70周岁"
        }), !1) : s.dateDiffInDays(this.data.beibaoren.birthday, new Date()) < 28 ? (wx.showModal({
            content: "被保人年龄不能小于28天"
        }), !1) : "1" != this.data.relationshipWithApplicant && 0 == o.isLegalId(this.data.beibaoren.idno) ? (wx.showModal({
            content: "家属身份证号有误"
        }), !1) : 0 == o.isLegalMobile(this.data.applicant.contactInfo.mobile) ? (wx.showModal({
            content: "手机号有误"
        }), !1) : "2" != this.data.relationshipWithApplicant || this.data.beibaoren.sex != this.data.applicant.sex || (wx.showModal({
            content: "配偶性别和投保人相同"
        }), !1);
    },
    validate: function() {
        var e = this.data.validateData;
        e.applicant = this.data.applicant;
        var t = {};
        (t = 1 == this.data.relationshipWithApplicant ? this.data.applicant : this.data.beibaoren).socialSecurity = this.data.socialSecurity, 
        e.insurants[0] = Object.assign({}, e.insurants[0], t), e.insurants[0].coverages = [], 
        e.insurants[0].coverages[0] = this.data.coverages, e.insurants[0].relationshipWithApplicant = this.data.relationshipWithApplicant, 
        e.insurants[0].relationshipWithPrimaryInsurant = "1", delete e.applicant.coverages, 
        delete e.applicant.hasSocialSecurity, delete e.insurants[0].hasSocialSecurity;
        var s = e.insurants[0].birthday;
        this.checkEffDate(s) ? e.effDate = o.formatTime(new Date()) : e.effDate = o.formatTime(o.dateAdd(new Date().getTime(), 1));
        var l = (0, a.getChannelKey)(), c = this, d = (0, i.getFromChannel)();
        wx.request({
            url: n.globalData.test2Url + "/outChannel/validate.do?c=" + d,
            data: {
                data: r.encrypt(JSON.stringify(e), l)
            },
            method: "POST",
            success: function(e) {
                if (console.log(e), "00" == e.data.returnCode) {
                    var a = r.getData(e.data.data, l);
                    wx.removeStorageSync("orderId"), wx.setStorageSync("orderId", a.orderId), console.log(a.orderId), 
                    wx.hideToast(), c.onSave(), wx.navigateTo({
                        url: "../health/health?orderId=" + a.orderId
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
    tabPlan: function(e) {
        var a = e.target.dataset.plan, t = "";
        t = "1" == a ? "134元/年起" : "2" == a ? "152元/年起" : "478元/年起", this.setData({
            tabplan: a,
            price: t
        });
    },
    bindAname: function(e) {
        var a = this.data.applicant;
        a.name = e.detail.value.trim(), this.setData({
            applicant: a
        });
    },
    bindAidno: function(e) {
        var a = this.data.applicant;
        a.idno = e.detail.value.trim(), a.sex = o.maleOrFeByIdCard(a.idno), a.birthday = o.getBirthDateFromIdCard(a.idno), 
        this.setData({
            applicant: a
        }), 0 != o.isLegalId(a.idno) ? this.calcPremium() : wx.showModal({
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
        a.idno = e.detail.value.trim(), a.sex = o.maleOrFeByIdCard(a.idno), a.birthday = o.getBirthDateFromIdCard(a.idno), 
        this.setData({
            beibaoren: a
        }), 0 != o.isLegalId(a.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    checkEffDate: function(e) {
        var a = o.formatTime(new Date());
        return e.substring(5, 10) == a.substring(5, 10);
    },
    seePlan: function() {
        wx.navigateTo({
            url: "../xiangqing/index"
        });
    },
    selectNav: function(e) {
        var a = e.target.dataset.navselect, t = this.data.navmenuHeight;
        console.log(a), this.setData({
            navselect: a,
            toView: a
        }), wx.pageScrollTo({
            scrollTop: this.data[a + "Top"] - 2 * t + 4
        });
    },
    toggle: function(a) {
        var t = a.target.dataset.qst;
        this.setData((0, e.default)({}, t, !this.data[t]));
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
            relationshipWithPrimaryInsurant: "1"
        };
        if (1 == a) {
            var o = this.data.applicant;
            n.name = o.name, n.idno = o.idno;
        }
        var s = this.data.beibaoren, r = Object.assign({}, s, n);
        this.setData({
            beibaoren: r
        }), this.calcPremium();
    },
    planChange: function(e) {
        console.log(e);
        var a = e.detail.value, t = {}, i = this.data.plans;
        for (var n in i) i[n].benLevel == a ? (i[n].checked = !0, Object.assign(t, i[n]), 
        delete t.name, delete t.checked) : i[n].checked = !1;
        var o = this.data.coverages;
        Object.assign(o, t), this.setData({
            plans: i,
            coverages: o
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
    onUnload: function() {
        this.onQuery();
    },
    onSet: function() {
        wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A000000053").set({
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
            success: function(e) {
                console.log(e);
            }
        });
    },
    onSave: function() {
        var e = this.data.applicant, a = this.data.beibaoren, t = {
            A000000053: {
                applicant: e,
                insurants: [ {
                    name: a.name,
                    idno: a.idno,
                    idType: a.idType,
                    sex: a.sex,
                    birthday: a.birthday,
                    relationshipWithApplicant: a.relationshipWithApplicant
                } ],
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
                n.globalData.referrerInfo;
                n.globalData.referrerInfo.appId && (t.appId || e.setData({
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
        console.log("onQuery"), wx.cloud.database().collection("userInfoCache").where({
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
    scrollV: function(e) {
        console.log(e);
    },
    onInit: function() {
        var e = this;
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A000000053"
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
                    insurants: t.insurants
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
        o.getNodesInfo(this, ".paNodes");
    },
    onLoad: function(e) {
        var a = this;
        this.calcPremium(), console.log(this.data.openId), wx.getSystemInfo({
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
        var a = n.globalData.wm1Url + e.target.dataset.pdfurl;
        o.getStaticPage(a);
    },
    toKefu: function() {
        wx.navigateTo({
            url: "../../webview/index"
        });
    },
    initClientRect: function() {
        var a = this;
        wx.createSelectorQuery().selectAll("#navmenu,#cpxq,#cpxq1,#cjwt,#wytb").boundingClientRect(function(t) {
            a.setData({
                navmenuHeight: t[0].height
            });
            for (var i = 0; i < t.length; i++) console.log(t), a.setData((0, e.default)({}, t[i].id + "Top", Math.floor(t[i].top)));
        }).exec();
    },
    agreeChange: function(e) {
        console.log(e.detail.value, this.data.agreeItems), this.setData({
            agree: e.detail.value
        });
    },
    upper: function(e) {
        console.log(e);
    },
    scroll: function(e) {},
    debounce: function(e, a) {
        var t = null;
        return function() {
            var i = this, n = arguments;
            clearTimeout(t), t = setTimeout(function() {
                e.apply(i, n);
            }, a);
        };
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
    onPageScroll: function(e) {
        this.debounce(this.scrollEvent(e), 100);
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "平安抗癌卫士2018",
            path: "/pages/P015/index/index" + (0, t.setShareUrl)()
        };
    }
});