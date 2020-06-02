getApp();

var t = require("../../../utils/server"), a = require("../../../wxParse/wxParse");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        signIn: 12,
        cardAgain: !1,
        cardFirst: !1,
        cardRule: !1,
        showType: !1,
        isCard: !1,
        orderday: "",
        credit1: "",
        sum: "",
        message: "",
        sign_rule: "",
        currYear: "",
        currMonth: "",
        today: "",
        nowYear: "",
        nowMonth: "",
        article: "",
        signed: "",
        yearMonthList: [],
        currMouthDate: [],
        currMouthDay: [],
        listSign: []
    },
    detailRecord: function() {
        wx.navigateTo({
            url: "../../member/sign/detail/detail"
        });
    },
    showMonth: function() {
        console.log("hhhhh"), this.setData({
            showType: !0,
            position: "fixed"
        });
    },
    onLoad: function() {
        var r = this, e = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.sign&utoken=" + e,
            showToast: !1,
            method: "GET",
            success: function(s) {
                s.data.result && (console.log(s), s.data.result.json_arr ? (r.setData({
                    yearMonthList: s.data.result.month,
                    currYear: s.data.result.json_arr.year,
                    currMonth: s.data.result.json_arr.month,
                    today: s.data.result.json_arr.today,
                    orderday: s.data.result.json_arr.signinfo.orderday,
                    credit1: s.data.result.member.credit1,
                    sum: s.data.result.json_arr.signinfo.sum,
                    signed: s.data.result.json_arr.signed,
                    article: s.data.result.sign_rule
                }), r.setData({
                    nowYear: r.data.currYear,
                    nowMonth: r.data.currMonth
                }), a.wxParse("article", "html", r.data.article, r, 5), t.sendRequest({
                    url: "?r=wxapp.sign.getCalendar&date=" + r.data.currYear + "-" + r.data.currMonth + "&utoken=" + e,
                    method: "GET",
                    showToast: !1,
                    success: function(t) {
                        r.setData({
                            currMouthDate: t.data.result
                        });
                        for (var a = [], e = [], s = 0; s < r.data.currMouthDate.length; s++) {
                            for (var n = r.data.currMouthDate[s].length, o = 0; o < n; o++) {
                                var d = {};
                                d.day = r.data.currMouthDate[s][o].day, d.signed = r.data.currMouthDate[s][o].signed, 
                                a.push(d);
                            }
                            r.setData({
                                currMouthDay: a,
                                listSign: e
                            });
                        }
                    }
                })) : r.setData({
                    noCard: s.data.msg,
                    isCard: !0
                }));
            }
        }), t.sendRequest({
            url: "?r=wxapp.sign.getCalendar&utoken=" + e,
            method: "GET",
            showToast: !1,
            success: function(t) {
                r.setData({
                    monthList: t.data.result.month
                });
            }
        });
    },
    cardSign: function() {
        var a = this, r = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.sign.dosign&utoken=" + r,
            data: {
                date: a.data.currYear + "-" + a.data.currMonth + "-" + a.data.today
            },
            method: "POST",
            success: function(e) {
                a.setData({
                    orderday: e.data.result.signorder,
                    credit1: e.data.result.credit,
                    sum: e.data.result.signsum,
                    message: e.data.result.message,
                    cardFirst: !0
                }), t.sendRequest({
                    url: "?r=wxapp.sign&utoken=" + r,
                    method: "GET",
                    success: function(t) {
                        a.setData({
                            yearMonthList: t.data.result.month,
                            currYear: t.data.result.json_arr.year,
                            currMonth: t.data.result.json_arr.month,
                            today: t.data.result.json_arr.today,
                            orderday: t.data.result.json_arr.signinfo.orderday,
                            credit1: t.data.result.member.credit1,
                            sum: t.data.result.json_arr.signinfo.sum,
                            signed: t.data.result.json_arr.signed,
                            sign_rule: t.data.result.sign_rule
                        });
                    }
                });
            }
        });
    },
    returnIndexFirst: function() {
        this.setData({
            cardFirst: !1
        });
    },
    cardSignAgain: function() {
        this.setData({
            cardAgain: !0
        });
    },
    returnIndex: function() {
        this.setData({
            cardAgain: !1
        });
    },
    cardRule: function() {
        this.setData({
            cardRule: !0
        });
    },
    ruleReturnIndex: function() {
        this.setData({
            cardRule: !1
        });
    },
    isCard: function() {
        this.setData({
            isCard: !1
        }), wx.navigateBack({
            delta: 1
        });
    },
    onShow: function() {
        var a = t.globalData.login, r = t.globalData.userInfo, e = this, s = wx.getStorageSync("utoken");
        e.setData({
            login: a,
            userInfo: r
        }), t.sendRequest({
            url: "?r=wxapp.member",
            showToast: !1,
            data: {
                utoken: s
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    loading: !1,
                    is_openmerch: t.data.result.is_openmerch,
                    merchid: t.data.result.merchid,
                    order_0: t.data.result.order_0,
                    order_1: t.data.result.order_1,
                    order_2: t.data.result.order_2
                });
            }
        });
    },
    chooseDate: function(t) {
        var a = this, r = t.currentTarget.dataset.index;
        a.setData({
            showType: !1,
            currYear: a.data.yearMonthList[r].year,
            currMonth: a.data.yearMonthList[r].month
        }), a.getCorrespondingDate();
    },
    getCorrespondingDate: function() {
        var a = this, r = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.sign.getCalendar&date=" + a.data.currYear + "-" + a.data.currMonth + "&utoken=" + r,
            data: {},
            method: "GET",
            success: function(t) {
                a.setData({
                    currMouthDate: t.data.result
                });
                for (var r = [], e = [], s = 0; s < a.data.currMouthDate.length; s++) {
                    for (var n = a.data.currMouthDate[s].length, o = 0; o < n; o++) {
                        var d = {};
                        d.day = a.data.currMouthDate[s][o].day, d.signed = a.data.currMouthDate[s][o].signed, 
                        r.push(d);
                    }
                    a.setData({
                        currMouthDay: r,
                        listSign: e
                    });
                }
            }
        });
    }
});