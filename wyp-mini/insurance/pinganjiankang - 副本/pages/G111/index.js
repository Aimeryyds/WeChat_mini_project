var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/defineProperty")), a = getApp();

Page({
    data: {
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
            goodsId: "A000000042",
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
            topImgUrl: a.globalData.baseUrl + "/wxresource/P005_01/img/top.jpg",
            cpxq1: a.globalData.baseUrl + "/P005_01/img/1111111_01.png",
            checkedImg: a.globalData.baseUrl + "/H704/img/esb_question.png",
            icon1: a.globalData.baseUrl + "/H704/img/esb_question.png",
            icon2: a.globalData.baseUrl + "/H704/img/esb_question.png"
        },
        imgModeWidthFix: "widthFix",
        navmenuTop: 0,
        navmenuHight: 0,
        cpxqTop: 0,
        cjwtTop: 0,
        wytbTop: 0,
        menuFixed: !1,
        yby: !1,
        exz: !1,
        nmp: !1,
        navselect: "cpxq",
        relations: [ {
            name: "本人",
            value: "1"
        }, {
            name: "父母",
            value: "2",
            checked: !0
        }, {
            name: "配偶",
            value: "3"
        }, {
            name: "子女",
            value: "4"
        } ],
        plans: [ {
            name: "100万",
            value: "100"
        }, {
            name: "300万",
            value: "300",
            checked: !0
        } ],
        agreeItems: [ {
            name: "agree",
            value: "agree"
        } ],
        price: "174元/年起"
    },
    kefu: function() {
        wx.navigateTo({
            url: "../webview/index"
        });
    },
    selectNav: function(e) {
        var a = e.target.dataset.navselect;
        this.data.navmenuHeight;
        console.log(a), this.setData({
            navselect: a
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
        for (var n in t) t[n].value == a ? t[n].checked = !0 : t[n].checked = !1;
        this.setData({
            relations: t
        });
    },
    planChange: function(e) {
        var a = e.detail.value;
        console.log(a);
        var t = this.data.plans;
        for (var n in t) t[n].value == a ? t[n].checked = !0 : t[n].checked = !1;
        this.setData({
            plans: t
        });
    },
    onLoad: function() {
        var e = this;
        setTimeout(function() {
            e.initClientRect();
        }, 300);
    },
    getViewInfo: function() {},
    initClientRect: function() {
        var a = this;
        wx.createSelectorQuery().in(this).selectAll("#navmenu,#cpxq,#cpxq1,#cjwt,#wytb").boundingClientRect(function(t) {
            console.log(t), a.setData({
                navmenuHeight: t[0].height
            });
            for (var n = 0; n < t.length; n++) console.log(t), a.setData((0, e.default)({}, t[n].id + "Top", t[n].top));
        }).exec();
    },
    agreeChange: function(e) {
        console.log(e.detail.value, this.data.agreeItems);
    },
    onPageScroll: function(e) {
        var a = this.data.navmenuHeight;
        console.log(a, e, this.data.cpxqTop, this.data.cjwtTop, this.data.wytbTop), this.setData({
            menuFixed: e.scrollTop - this.data.navmenuTop >= 0
        }), e.scrollTop + a > this.data.cpxqTop && e.scrollTop + a < this.data.cjwtTop ? this.setData({
            navselect: "cpxq"
        }) : e.scrollTop + a > this.data.cjwtTop && e.scrollTop + a < this.data.wytbTop ? this.setData({
            navselect: "cjwt"
        }) : e.scrollTop + a > this.data.wytbTop && this.setData({
            navselect: "wytb"
        });
    }
});