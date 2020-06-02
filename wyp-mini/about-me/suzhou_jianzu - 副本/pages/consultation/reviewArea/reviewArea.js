var t = require("../../../utils/server"), a = require("../../../wxParse/wxParse"), e = wx.getStorageSync("utoken"), r = "";

Page({
    data: {
        news: !1,
        show: !1,
        showReport: !1,
        currArea1: "xa",
        currArea1compare: -1,
        currArea2: 0,
        currArea2compare: -1,
        isgoods: !1,
        talkAlert: !1,
        talkAlert2: !1,
        giveGood: !1,
        isNull: !0,
        isNullS: !0,
        submitShow: !0,
        showExpression: !1,
        showExpressionSec: !1,
        currReport: "",
        aid: "",
        msgTalk: "",
        msgGood: "",
        talkList: [],
        talkListSecond: [],
        content: "",
        contentReply: "",
        rid: "",
        isdisabled: !0,
        getMap: "",
        getMapS: "",
        currLength: "",
        latitude: "",
        longitude: "",
        latitude2: "",
        longitude2: "",
        address: ""
    },
    onLoad: function(s) {
        e = wx.getStorageSync("utoken"), (r = this).setData({
            aid: s.aid
        }), t.sendRequest({
            url: "?r=wxapp.article.report.getlist&utoken=" + e + "&aid=" + r.data.aid,
            method: "GET",
            success: function(t) {
                if (console.log(t), console.log("?r=wxapp.article.report.getlist"), t.data.result.length > 0) {
                    r.setData({
                        news: !0
                    });
                    for (var e = [], s = 0; s < t.data.result.length; s++) e.push(t.data.result[s]);
                    r.setData({
                        talkList: e
                    });
                    for (var i = [], l = 0; l < r.data.talkList.length; l++) i.push(r.data.talkList[l].cons);
                    for (var n = 0; n < i.length; n++) a.wxParse("reply" + n, "html", i[n], r), n === i.length - 1 && a.wxParseTemArray("replyTemArray", "reply", i.length, r);
                    for (var o = [], d = 0; d < r.data.talkList.length; d++) for (var u = 0; u < r.data.talkList[d].child_report.length; u++) o.push(r.data.talkList[d].child_report[u].cons);
                    for (var c = 0; c < o.length; c++) a.wxParse("replyS" + c, "html", o[c], r), c === o.length - 1 && a.wxParseTemArray("replyTemArrayS", "replyS", o.length, r);
                }
            }
        });
    },
    getMap: function(t) {
        wx.chooseLocation({
            type: "gcj02",
            success: function(t) {
                r.setData({
                    latitude: t.latitude,
                    longitude: t.longitude,
                    getMap: t.address
                }), r.data.getMap && r.setData({
                    isNull: !1
                });
            }
        });
    },
    bindTextAreaBlur: function(t) {
        r = this;
        var a = t.detail.value;
        r.setData({
            content: a
        });
    },
    submitReview: function(s) {
        var i = s.detail.value.talkContent;
        t.sendRequest({
            url: "?r=wxapp.article.report&utoken=" + e + "&aid=" + r.data.aid + "&content=" + i + "&lng=" + r.data.longitude + "&lat=" + r.data.latitude,
            method: "POST",
            success: function(s) {
                r.setData({
                    msgTalk: s.data.msg,
                    talkAlert: !0
                }), t.sendRequest({
                    url: "?r=wxapp.article.report.getlist&utoken=" + e + "&aid=" + r.data.aid,
                    method: "GET",
                    success: function(t) {
                        for (var e = [], s = 0; s < t.data.result.length; s++) e.push(t.data.result[s]);
                        r.setData({
                            talkList: e,
                            isNull: !0,
                            longitude: "",
                            latitude: ""
                        });
                        for (var i = [], l = 0; l < r.data.talkList.length; l++) i.push(r.data.talkList[l].cons);
                        for (var n = 0; n < i.length; n++) a.wxParse("reply" + n, "html", i[n], r), n === i.length - 1 && a.wxParseTemArray("replyTemArray", "reply", i.length, r);
                        for (var o = [], d = 0; d < r.data.talkList.length; d++) for (var u = 0; u < r.data.talkList[d].child_report.length; u++) o.push(r.data.talkList[d].child_report[u].cons);
                        for (var c = 0; c < o.length; c++) a.wxParse("replyS" + c, "html", o[c], r), c === o.length - 1 && a.wxParseTemArray("replyTemArrayS", "replyS", o.length, r);
                    }
                });
            }
        });
    },
    getMapSecond: function(t) {
        wx.chooseLocation({
            type: "gcj02",
            success: function(t) {
                r.setData({
                    latitude2: t.latitude,
                    longitude2: t.longitude,
                    getMapS: t.address
                }), r.data.getMapS && r.setData({
                    isNullS: !1
                });
            }
        });
    },
    talkArea1: function(t) {
        r = this;
        var a = t.currentTarget.dataset.index;
        r.data.currArea1 != a ? r.setData({
            currArea1: a
        }) : r.data.currArea1 == a && r.setData({
            currArea1: "xa"
        }), r.data.currArea1 == r.data.currArea1compare ? r.setData({
            currArea1compare: -1
        }) : r.setData({
            currArea1compare: a
        });
    },
    everyReply: function(t) {
        r = this;
        var a = t.detail.value;
        r.setData({
            contentReply: a
        });
    },
    submitTalk: function(s) {
        s.currentTarget.dataset.index;
        t.sendRequest({
            url: "?r=wxapp.article.report.post_content&utoken=" + e + "&aid=" + r.data.aid + "&content=" + r.data.contentReply + "&rid=" + r.data.talkList[s.currentTarget.dataset.index].id + "&lng=" + r.data.longitude2 + "&lat=" + r.data.latitude2,
            method: "POST",
            success: function(s) {
                r.setData({
                    isNullS: !0,
                    currArea1compare: -1,
                    contentReply: ""
                }), t.sendRequest({
                    url: "?r=wxapp.article.report.getlist&utoken=" + e + "&aid=" + r.data.aid,
                    method: "GET",
                    success: function(t) {
                        for (var e = [], s = 0; s < t.data.result.length; s++) e.push(t.data.result[s]);
                        r.setData({
                            talkList: e,
                            longitude2: "",
                            latitude2: ""
                        });
                        for (var i = [], l = 0; l < r.data.talkList.length; l++) i.push(r.data.talkList[l].cons);
                        for (var n = 0; n < i.length; n++) a.wxParse("reply" + n, "html", i[n], r), n === i.length - 1 && a.wxParseTemArray("replyTemArray", "reply", i.length, r);
                        for (var o = [], d = 0; d < r.data.talkList.length; d++) for (var u = 0; u < r.data.talkList[d].child_report.length; u++) o.push(r.data.talkList[d].child_report[u].cons);
                        for (var c = 0; c < o.length; c++) a.wxParse("replyS" + c, "html", o[c], r), c === o.length - 1 && a.wxParseTemArray("replyTemArrayS", "replyS", o.length, r);
                    }
                });
            }
        });
    },
    talkArea2: function(t) {
        r = this;
        var a = t.currentTarget.dataset.index;
        r.setData({
            currArea2: a
        }), r.data.currArea2 == r.data.currArea2compare ? r.setData({
            currArea2compare: -1
        }) : r.setData({
            currArea2compare: a
        });
    },
    returnReview: function() {
        (r = this).data.showReport && r.setData({
            showReport: !1
        });
    },
    returnIndex: function() {
        this.setData({
            talkAlert: !1,
            submitShow: !1
        });
    },
    giveGood: function(a) {
        var r = this;
        a.currentTarget.dataset.index;
        t.sendRequest({
            url: "?r=wxapp.article.report.like&utoken=" + e + "&aid=" + r.data.aid + "&rid=" + r.data.talkList[a.currentTarget.dataset.index].id,
            method: "POST",
            success: function(a) {
                r.setData({}), t.sendRequest({
                    url: "?r=wxapp.article.report.getlist&utoken=" + e + "&aid=" + r.data.aid,
                    method: "GET",
                    success: function(t) {
                        for (var a = [], e = 0; e < t.data.result.length; e++) a.push(t.data.result[e]);
                        r.setData({
                            talkList: a
                        });
                        for (var s = [], e = 0; e < r.data.talkList.length; e++) s = r.data.talkList[e].child_report;
                        r.setData({
                            talkListSecond: s
                        });
                    }
                });
            }
        });
    },
    goodreturnIndex: function() {
        this.setData({
            giveGood: !1
        });
    },
    getBLen: function(t) {
        return null == t ? 0 : ("string" != typeof t && (t += ""), t.replace(/[^\x00-\xff]/g, "ab").length);
    },
    getExpression: function() {
        var t = this;
        t.setData({
            isClick: !t.data.isClick
        }), t.data.showExpression ? t.setData({
            showExpression: !1
        }) : t.setData({
            showExpression: !0
        });
    },
    getExpressionSec: function() {
        var t = this;
        t.setData({
            isClick: !t.data.isClick
        }), t.data.showExpressionSec ? t.setData({
            showExpressionSec: !1
        }) : t.setData({
            showExpressionSec: !0
        });
    },
    wxPreEmojiTap: function(t) {
        var a = this;
        WxEmoji.wxPreEmojiTap(a, t);
    },
    wxPreEmojiTapRevi: function(t) {
        var a = this;
        WxEmoji.wxPreEmojiTapRevi(a, t);
    },
    wxPreEmojiTapReviSec: function(t) {
        var a = this;
        WxEmoji.wxPreEmojiTapReviSec(a, t);
    }
});