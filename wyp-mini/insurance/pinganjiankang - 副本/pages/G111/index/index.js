var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../../@babel/runtime/helpers/slicedToArray")), n = require("../../../utils/aesKey.js"), o = require("../../../utils/share.js"), i = require("../../../utils/channel.js"), s = getApp(), r = require("../../../utils/util.js"), l = require("../../../utils/dateUtils.js"), c = require("../../../utils/aes.js");

Page({
    data: {
        sc: "",
        channelKey: "dz7GfkjArI2vI0qf",
        openId: wx.getStorageSync("openId") || "",
        applyDate: r.formatTime(new Date()),
        requestId: "WXXCX_" + new Date().getTime(),
        xxmz: !1,
        xsmz: !1,
        mzzrjtgx: !1,
        yygh: !1,
        jxtx: !1,
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
        toubaoren: {
            name: "",
            idType: "1",
            idno: "",
            hasSocialSecurity: "N",
            contactInfo: {
                email: "",
                mobile: ""
            },
            socialSecuritys: [ {
                name: "有",
                value: "Y"
            }, {
                name: "无",
                value: "N",
                checked: !0
            } ]
        },
        jsList: [ {
            name: "",
            idType: "1",
            idno: "",
            hasSocialSecurity: "N",
            relationshipWithApplicant: "J",
            relations: [ {
                name: "父母",
                value: "I"
            }, {
                name: "配偶",
                value: "2"
            }, {
                name: "子女",
                value: "J",
                checked: !0
            } ],
            socialSecuritys: [ {
                name: "有",
                value: "Y"
            }, {
                name: "无",
                value: "N",
                checked: !0
            } ]
        }, {
            name: "",
            idType: "1",
            idno: "",
            hasSocialSecurity: "N",
            relationshipWithApplicant: "J",
            relations: [ {
                name: "父母",
                value: "I"
            }, {
                name: "配偶",
                value: "2"
            }, {
                name: "子女",
                value: "J",
                checked: !0
            } ],
            socialSecuritys: [ {
                name: "有",
                value: "Y"
            }, {
                name: "无",
                value: "N",
                checked: !0
            } ]
        } ],
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
                questionId: "P00500001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        },
        socialSecurity: "N",
        relationshipWithApplicant: "I",
        coverages: {
            period: "12",
            periodDay: "0",
            paymentPeriod: "12",
            paymentPeriodDay: "0",
            planType: "0",
            actualPrem: "0.00",
            benLevel: "04",
            sumInsured: "3000000"
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
                questionId: "P00500001",
                answer: "Y",
                healthNoteSeq: "1"
            } ]
        } ],
        calcData: {
            applyDate: r.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "5",
            productId: "A000000051",
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
            applyDate: r.formatTime(new Date()),
            requestId: "WXXCX_" + new Date().getTime(),
            totalPremium: "0.00",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            productId: "A000000051",
            effDate: r.formatTime(r.dateAdd(new Date().getTime(), 1)),
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
                    questionId: "P00500001",
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
            planCode: "P005_01",
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
            goodsId: "A000000051",
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
                questionId: "P005_0100001",
                answer: "Y",
                healthNoteSeq: 1,
                description: ""
            } ],
            umCode: ""
        },
        imgurl: {
            topImgUrl: s.globalData.test1Url + "/wxresource/G111/img/top.jpg",
            cpxq1: s.globalData.test1Url + "/wxresource/G111/img/cpxq_01.jpg",
            cpxq2: s.globalData.test1Url + "/wxresource/G111/img/cpxq_02.jpg",
            cpxq3: s.globalData.test1Url + "/wxresource/G111/img/cpxq_03.jpg",
            cpxq4: s.globalData.test1Url + "/wxresource/G111/img/cpxq_04.jpg",
            cpxq5: s.globalData.test1Url + "/wxresource/G111/img/cpxq_05.jpg",
            cjwt: s.globalData.test1Url + "/wxresource/G111/img/cjwt.jpg",
            share: s.globalData.test1Url + "/wxresource/home/share.png",
            checkedImg: "../../../images/triangle.png",
            icon1: s.globalData.test1Url + "/wxresource/P005_01/img/sy.png",
            icon2: s.globalData.test1Url + "/wxresource/P005_01/img/kf.png",
            copyRightUrl: s.globalData.test1Url + "/image/publicLogo/esb2017bottom.png"
        },
        tabplanValue: 100,
        tabplan: 100,
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
            name: "父母",
            value: "I",
            checked: !0
        }, {
            name: "配偶",
            value: "2"
        }, {
            name: "子女",
            value: "J"
        } ],
        benLevel: "04",
        sumInsured: "3000000",
        plans: [ {
            name: "住院100万",
            sumInsured: "1000000",
            benLevel: "03"
        }, {
            name: "住院300万",
            sumInsured: "3000000",
            benLevel: "04",
            checked: !0
        }, {
            name: "住院300万+门诊",
            sumInsured: "5000000",
            benLevel: "05"
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
        totalPrem: "130元/年起",
        price: "130元/年起",
        baofeiList: [],
        referrerInfo: s.globalData.referrerInfo,
        current: 0,
        navcur: 0,
        curNodes: 0,
        navlist: [ "产品详情", "常见问题", "我要投保" ]
    },
    calcPremium: function() {
        var e = this, t = this.data.toubaoren, n = this.data.jsList, o = [];
        o[0] = {
            hasSocialSecurity: t.hasSocialSecurity,
            planCode: "G111",
            seqno: 1,
            benLevel: this.data.benLevel,
            birthday: t.birthday
        };
        var i = [], r = !0, l = !1, c = void 0;
        try {
            for (var d, u = n.entries()[Symbol.iterator](); !(r = (d = u.next()).done); r = !0) {
                var h = (0, a.default)(d.value, 2), p = h[0], m = h[1];
                o[p + 1] = {
                    hasSocialSecurity: m.hasSocialSecurity,
                    planCode: "G111",
                    seqno: p + 2,
                    benLevel: this.data.benLevel,
                    birthday: m.birthday
                }, m.birthday || i.push(1);
            }
        } catch (e) {
            l = !0, c = e;
        } finally {
            try {
                r || null == u.return || u.return();
            } finally {
                if (l) throw c;
            }
        }
        console.log(!t.birthday, i.length), t.birthday && !i.length && (console.log("ins" + JSON.stringify(o)), 
        wx.request({
            url: s.globalData.baseUrl + "/rest/premiumCalulation.do",
            data: {
                isShareCoverage: "N",
                insurants: JSON.stringify(o),
                c: "WXXCX"
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                "00" == t.data["ins-status"] && e.setData({
                    totalPrem: t.data["kj-data"].data.totalPrem,
                    baofeiList: t.data["kj-data"].data.insurants
                });
            },
            fail: function() {},
            complete: function() {}
        }));
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
        var t = wx.getStorageSync("accessToken");
        console.log(t), wx.request({
            url: s.globalData.test2Url + "/miniapp/saveInfo",
            data: {
                accessToken: t,
                data: e
            },
            method: "POST",
            success: function(e) {},
            fail: function() {},
            complete: function() {}
        });
    },
    saveInfo: function() {
        if (this.checkForm()) {
            var e = [ {
                identity: "01",
                name: this.data.toubaoren.name,
                idType: "1",
                idNo: this.data.toubaoren.idno,
                sex: this.data.toubaoren.sex,
                birthday: this.data.toubaoren.birthday
            } ], t = this.data.jsList, n = !0, o = !1, i = void 0;
            try {
                for (var s, r = t.entries()[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                    var l = (0, a.default)(s.value, 2), c = (l[0], l[1]);
                    e.push({
                        identity: "03",
                        name: c.name,
                        idType: "1",
                        idNo: c.idno,
                        sex: c.sex,
                        birthday: c.birthday
                    });
                }
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    n || null == r.return || r.return();
                } finally {
                    if (o) throw i;
                }
            }
            return JSON.stringify(e);
        }
    },
    checkForm: function() {
        var e = this.data.jsList.concat();
        if (e.unshift(this.data.toubaoren), e.length < 3) return wx.showModal({
            content: "最少三人投保"
        }), !1;
        console.log(e);
        for (var t = 0, a = 0; a < e.length; a++) {
            if (0 == r.isLegalName(e[a].name)) return wx.showModal({
                content: "第".concat(a + 1, "个人姓名有误")
            }), !1;
            if (0 == r.isLegalId(e[a].idno)) return wx.showModal({
                content: "第".concat(a + 1, "个人身份证号有误")
            }), !1;
            if (l.ages(e[a].birthday) > 60) return wx.showModal({
                content: "第".concat(a + 1, "个人年龄不能大于60岁")
            }), !1;
            if (0 == a && l.ages(e[a].birthday) < 16) return wx.showModal({
                content: "投保人年龄不能小于16岁"
            }), !1;
            if (a > 0 && l.dateDiffInDays(e[a].birthday, new Date()) < 28) return wx.showModal({
                content: "第".concat(a + 1, "个人年龄不能小于28天")
            }), !1;
            if (a > 0 && "2" == e[a].relationshipWithApplicant && (t++, e[0].sex == e[a].sex)) return wx.showModal({
                content: "第".concat(a + 1, "个人的关系为配偶时，性别不能和投保人相同")
            }), !1;
            if (0 == a && 0 == r.isLegalMobile(e[0].contactInfo.mobile)) return wx.showModal({
                content: "手机号有误"
            }), !1;
        }
        return !(t > 1) || (wx.showModal({
            content: "只能有一个配偶"
        }), !1);
    },
    validate: function() {
        var e = this.data.jsList, t = [ {
            period: "12",
            periodDay: "0",
            paymentPeriod: "12",
            paymentPeriodDay: "0",
            planType: "0",
            benLevel: this.data.benLevel,
            sumInsured: this.data.sumInsured,
            actualPrem: "0"
        } ], o = [ {
            questionId: "EG111",
            answer: "Y",
            healthNoteSeq: "1"
        } ], l = [], d = !0, u = !1, h = void 0;
        try {
            for (var p, m = e.entries()[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                var g = (0, a.default)(p.value, 2), f = g[0], v = g[1], y = Object.assign({}, t[0]);
                y.actualPrem = Number(this.data.baofeiList[f + 1].insurantPrem).toFixed(2), console.log(y), 
                l.push({
                    seqno: f + 2,
                    name: v.name,
                    idno: v.idno,
                    socialSecurity: v.hasSocialSecurity,
                    sex: v.sex,
                    idType: "1",
                    birthday: v.birthday,
                    relationshipWithApplicant: v.relationshipWithApplicant,
                    relationshipWithPrimaryInsurant: this.getRelationshipWithPrimaryInsurant(v.relationshipWithApplicant),
                    coverages: [ y ],
                    healthNotes: o
                }), console.log(l);
            }
        } catch (e) {
            u = !0, h = e;
        } finally {
            try {
                d || null == m.return || m.return();
            } finally {
                if (u) throw h;
            }
        }
        var b = [ {
            seqno: 1,
            name: this.data.toubaoren.name,
            idno: this.data.toubaoren.idno,
            socialSecurity: this.data.toubaoren.hasSocialSecurity,
            sex: this.data.toubaoren.sex,
            idType: "1",
            birthday: this.data.toubaoren.birthday,
            relationshipWithApplicant: "1",
            relationshipWithPrimaryInsurant: "1",
            coverages: t,
            healthNotes: o
        } ];
        b[0].coverages[0].actualPrem = Number(this.data.baofeiList[0].insurantPrem).toFixed(2), 
        b = b.concat(l);
        var x = {
            applyDate: r.formatTime(new Date()),
            effDate: r.formatTime(r.dateAdd(new Date().getTime(), 1)),
            requestId: "WXXCX_" + new Date().getTime(),
            premType: "5",
            productId: "A000000051",
            outChannelOrderId: "WXXCX_" + new Date().getTime(),
            isShareCoverage: "N",
            isNoticeConfirm: "Y",
            serviceAgreementInfo: {
                premType: "5"
            },
            authInfo: {
                initialChargeMode: "9"
            },
            applicant: {
                birthday: this.data.toubaoren.birthday,
                sex: this.data.toubaoren.sex,
                idno: this.data.toubaoren.idno,
                idType: "1",
                name: this.data.toubaoren.name,
                contactInfo: {
                    email: "",
                    mobile: this.data.toubaoren.contactInfo.mobile
                }
            },
            insurants: b,
            totalPremium: Number(this.data.totalPrem).toFixed(2)
        };
        console.log(JSON.stringify(x));
        var w = this, I = (0, n.getChannelKey)();
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: s.globalData.test2Url + "/outChannel/validate.do?c=" + (0, i.getFromChannel)(),
            data: {
                data: c.encrypt(JSON.stringify(x), I)
            },
            method: "POST",
            success: function(e) {
                if (console.log(e), "00" == e.data.returnCode) {
                    var t = c.getData(e.data.data, I);
                    wx.removeStorageSync("orderId"), wx.setStorageSync("orderId", t.orderId), console.log(t.orderId), 
                    wx.hideToast(), w.onSave(), wx.navigateTo({
                        url: "../../health/health?orderId=" + t.orderId
                    });
                } else wx.hideToast(), wx.showModal({
                    content: e.data.returnMsg
                });
                wx.hideLoading();
            },
            fail: function() {
                wx.hideToast();
            },
            complete: function() {}
        });
    },
    tabPlan: function(e) {
        var t = e.target.dataset.plan, a = "", n = !1, o = "300";
        "100" == t ? (a = "130元/年起", o = "100") : "300" == t ? a = "202元/年起" : n = !0, this.setData({
            tabplan: t,
            price: a,
            mzzrjtgx: n,
            tabplanValue: o
        });
    },
    addjs: function() {
        var e = this.data.jsList;
        e.length >= 6 ? wx.showModal({
            content: "最多七人投保"
        }) : (e.push({
            name: "",
            idType: "1",
            idno: "",
            hasSocialSecurity: "N",
            relationshipWithApplicant: "J",
            relations: [ {
                name: "父母",
                value: "I"
            }, {
                name: "配偶",
                value: "2"
            }, {
                name: "子女",
                value: "J",
                checked: !0
            } ],
            socialSecuritys: [ {
                name: "有",
                value: "Y"
            }, {
                name: "无",
                value: "N",
                checked: !0
            } ]
        }), this.setData({
            jsList: e
        }));
    },
    removejs: function(e) {
        var t = e.target.dataset.index;
        console.log(t);
        var a = this.data.jsList;
        a.length <= 2 ? wx.showModal({
            content: "最少三人投保"
        }) : (a.splice(t, 1), this.setData({
            jsList: a
        }), this.calcPremium());
    },
    bindAname: function(e) {
        var t = this.data.toubaoren;
        t.name = e.detail.value.trim(), this.setData({
            toubaoren: t
        });
    },
    bindAidno: function(e) {
        var t = this.data.toubaoren;
        t.idno = e.detail.value.trim(), t.sex = r.maleOrFeByIdCard(t.idno), t.birthday = r.getBirthDateFromIdCard(t.idno), 
        this.setData({
            toubaoren: t
        }), 0 != r.isLegalId(t.idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    bindAmobile: function(e) {
        var t = this.data.toubaoren;
        t.contactInfo.mobile = e.detail.value.trim(), this.setData({
            toubaoren: t
        }), console.log(this.data.toubaoren);
    },
    bindBname: function(e) {
        var t = this.data.jsList;
        t[e.target.dataset.index].name = e.detail.value.trim(), this.setData({
            jsList: t
        });
    },
    bindBidno: function(e) {
        var t = this.data.jsList, a = e.target.dataset.index;
        console.log(a), t[a].idno = e.detail.value.trim(), t[a].sex = r.maleOrFeByIdCard(t[a].idno), 
        t[a].birthday = r.getBirthDateFromIdCard(t[a].idno), this.setData({
            jsList: t
        }), 0 != r.isLegalId(t[a].idno) ? this.calcPremium() : wx.showModal({
            content: "身份证号有误"
        });
    },
    seePlan: function() {
        wx.navigateTo({
            url: "../xiangqing/index"
        });
    },
    selectNav: function(e) {
        var t = e.target.dataset.navselect, a = this.data.navmenuHeight;
        console.log(t), this.setData({
            navselect: t
        }), wx.pageScrollTo({
            scrollTop: this.data[t + "Top"] - 2 * a + 4
        });
    },
    toggle: function(e) {
        var a = e.target.dataset.qst;
        this.setData((0, t.default)({}, a, !this.data[a]));
    },
    getRelationshipWithPrimaryInsurant: function(e) {
        switch (e) {
          case "J":
            return 3;

          case "I":
            return 4;

          case 9:
            return 6;

          default:
            return e;
        }
    },
    relationChange: function(e) {
        var t = e.detail.value, a = e.target.dataset.index, n = this.data.jsList;
        console.log(t);
        var o = n[a].relations;
        for (var i in o) o[i].value == t ? o[i].checked = !0 : o[i].checked = !1;
        n[a].relations = o, n[a].relationshipWithApplicant = t, this.setData({
            jsList: n
        });
    },
    planChange: function(e) {
        var t = e.detail.value, a = {}, n = this.data.plans;
        for (var o in n) n[o].benLevel == t ? (n[o].checked = !0, this.setData({
            sumInsured: n[o].sumInsured
        }), Object.assign(a, n[o]), delete a.name, delete a.checked) : n[o].checked = !1;
        var i = this.data.coverages;
        Object.assign(i, a), this.setData({
            plans: n,
            coverages: i,
            benLevel: t
        }), console.log(this.data.coverages), this.calcPremium();
    },
    socialSecuritysChange: function(e) {
        var t = e.detail.value, a = e.target.dataset.index;
        if ("toubaoren" == a) {
            var n = this.data.toubaoren, o = n.socialSecuritys;
            for (var i in o) o[i].value == t ? o[i].checked = !0 : o[i].checked = !1;
            n.socialSecuritys = o, n.hasSocialSecurity = t, this.setData({
                toubaoren: n
            });
        } else {
            var s = this.data.jsList, r = s[a].socialSecuritys;
            for (var l in r) r[l].value == t ? r[l].checked = !0 : r[l].checked = !1;
            s[a].socialSecuritys = r, s[a].hasSocialSecurity = t, this.setData({
                jsList: s
            });
        }
        console.log(t, a), console.log(this.data.socialSecuritys), this.calcPremium();
    },
    onUnload: function() {
        this.onQuery();
    },
    onSet: function() {
        wx.cloud.database().collection("userInfoCache").doc(this.data.openId + "_userInfoCache_A000000051").set({
            data: {
                applicant: this.data.toubaoren,
                beibaoren: this.data.jsList,
                plans: this.data.plans,
                benLevel: this.data.benLevel,
                sumInsured: this.data.sumInsured,
                totalPremium: this.data.totalPremium,
                addTime: new Date()
            },
            success: function(e) {
                console.log(e);
            }
        });
    },
    onSave: function() {
        var e = {
            A000000051: {
                applicant: this.data.toubaoren,
                insurants: this.data.jsList,
                benLevel: this.data.benLevel,
                sumInsured: this.data.sumInsured,
                addTime: new Date(),
                sc: this.data.sc
            }
        };
        wx.showLoading({
            title: "加载中"
        }), wx.cloud.database().collection("userInfo").doc(this.data.openId).update({
            data: e,
            success: function(e) {
                console.log(e), wx.hideLoading();
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    initReferrerInfo: function() {
        var e = this;
        wx.cloud.database().collection("userInfo").where({
            _openid: this.data.openId
        }).get({
            success: function(t) {
                console.log(t);
                var a = t.data[0].referrerInfo || {};
                s.globalData.referrerInfo;
                s.globalData.referrerInfo.appId && (a.appId || e.setData({
                    referrerInfo: a
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
            success: function(t) {
                console.log(t), e.onSet(), console.log("[数据库] [查询记录] 成功: ", t);
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e);
            },
            complete: function(t) {
                console.log(t), 0 == t.data.length && e.onAdd();
            }
        });
    },
    onInit: function() {
        var e = this;
        (console.log("onQuery"), this.data.openId) && wx.cloud.database().collection("userInfoCache").where({
            _id: this.data.openId + "_userInfoCache_A000000051"
        }).get({
            success: function(t) {
                console.log(t);
                var a = t.data[0];
                console.log("sjflsf", a), e.setData({
                    toubaoren: a.applicant,
                    plans: a.plans,
                    totalPremium: a.totalPremium,
                    jsList: a.beibaoren,
                    sumInsured: a.sumInsured,
                    benLevel: a.benLevel
                }), e.calcPremium(), console.log("[数据库] [查询记录] 成功: ", t);
            },
            fail: function(e) {
                console.log("没查到"), console.error("[数据库] [查询记录] 失败：", e);
            },
            complete: function(t) {
                console.log(t), 0 == t.data.length && e.onAdd();
            }
        });
    },
    imgLoad: function(e) {
        console.log(e + "图片加载成功");
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
        var t = -1;
        if (t = "number" == typeof e ? e : e.currentTarget.dataset.index, this.data.navcur == t) return !1;
        this.setData({
            navcur: t,
            curNodes: this.data.tops[t].top - 55
        });
    },
    getScrollTop: function(e) {
        var t = e.detail.current.detail.scrollTop, a = parseInt(this.data.navcur), n = this.data.tops[a].top;
        (this.data.tops[a + 1] ? this.data.tops[a + 1].top : this.data.tops[a].top) - 56 < t && a < this.data.tops.length - 1 ? a++ : n - 56 > t && a > 0 && a--, 
        this.setData({
            navcur: a
        });
    },
    onReady: function() {
        r.getNodesInfo(this, ".paNodes");
    },
    onLoad: function(e) {
        var t = this;
        this.calcPremium(), console.log(this.data.openId), wx.getSystemInfo({
            success: function(a) {
                console.log(a.screenHeight), t.setData({
                    screenHeight: a.screenHeight,
                    sc: e.sc || ""
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
        var t = s.globalData.baseUrl + e.target.dataset.pdfurl;
        r.getStaticPage(t);
    },
    toKefu: function() {
        wx.navigateTo({
            url: "../../webview/index"
        });
    },
    initClientRect: function() {
        var e = this;
        wx.createSelectorQuery().selectAll("#navmenu,#cpxq,#cjwt,#wytb").boundingClientRect(function(a) {
            e.setData({
                navmenuHeight: a[0].height
            });
            for (var n = 0; n < a.length; n++) console.log(a), e.setData((0, t.default)({}, a[n].id + "Top", Math.floor(a[n].top)));
        }).exec(), console.log(this.data.cpxqTop, this.data.cjwtTop, this.data.wytbTop);
    },
    agreeChange: function(e) {
        console.log(e.detail.value, this.data.agreeItems), this.setData({
            agree: e.detail.value
        });
    },
    throttle: function(e, t) {
        clearTimeout(e.tId), e.tId = setTimeout(function() {
            e.call(t);
        }, 200);
    },
    scrollEvent: function(e) {
        var t = this.data.navmenuHeight;
        this.setData({
            menuFixed: e.scrollTop - this.data.navmenuTop >= 0
        }), e.scrollTop > this.data.cpxqTop - 2 * t && e.scrollTop < this.data.cjwtTop - 2 * t ? this.setData({
            navselect: "cpxq"
        }) : e.scrollTop > this.data.cjwtTop - 2 * t && e.scrollTop < this.data.wytbTop - 2 * t ? this.setData({
            navselect: "cjwt"
        }) : e.scrollTop > this.data.wytbTop - 2 * t && this.setData({
            navselect: "wytb"
        });
    },
    onPullDownRefresh: function() {
        wx.startPullDownRefresh();
    },
    debounce: function(e, t) {
        var a = null;
        return function() {
            var n = this, o = arguments;
            clearTimeout(a), a = setTimeout(function() {
                e.apply(n, o);
            }, t);
        };
    },
    onPageScroll: function(e) {
        this.debounce(this.scrollEvent(e), 100);
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "平安e家保（2018）",
            path: "/pages/G111/index/index" + (0, o.setShareUrl)()
        };
    }
});