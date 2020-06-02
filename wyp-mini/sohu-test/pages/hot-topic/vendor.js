function e(e) {
    this.pageContext = e;
}

var t = getApp(), n = require("../../lib/es6-promise").Promise, a = {
    requestUrl: t.globalData.baseUrl + "api/channel/v5/news.go?"
}, r = function(e, n) {
    return {
        openId: t.globalData.usrKey.openid || "",
        cdma_lat: t.globalData.usrLoc.latitude || "",
        cdma_lng: t.globalData.usrLoc.longitude || "",
        accuracy: t.globalData.usrLoc.accuracy || "",
        page: "1",
        u: t.globalData.u,
        p1: t.globalData.reqParam.p1,
        pid: -1,
        imgTag: 1,
        showPic: 1,
        picScale: 18,
        rt: "json",
        net: t.globalData.nettype,
        from: "channel",
        apiVersion: 41,
        isMixStream: 0,
        t: new Date().getTime(),
        mainFocalId: 0,
        focusPosition: 1,
        version: "6.2.9",
        channelId: 2063,
        appliteReqTime: n
    };
}, o = {
    getHotArticles: function(e, t) {
        var o = r(0, t);
        return new n(function(e, t) {
            wx.request({
                url: a.requestUrl,
                data: o,
                method: "GET",
                success: function(t) {
                    console.log("获取热点新闻列表成功: ", t), e(t);
                },
                fail: function(e) {
                    t(new Error(e.errMsg));
                }
            });
        });
    }
}, i = {
    fixLen: function(e) {
        return 1 == (e + "").length && (e = "0" + e), e;
    },
    checkSameDay: function(e, t) {
        return e.getYear() == t.getYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate();
    },
    getDateFormat: function(e) {
        return e.getFullYear() + " - " + i.fixLen(e.getMonth() + 1) + " - " + i.fixLen(e.getDate());
    },
    getDateNumber: function(e) {
        return i.fixLen(e.getDate());
    },
    getDate4Poster: function(e) {
        return e.getFullYear() + "/" + i.fixLen(e.getMonth() + 1) + "/" + i.fixLen(e.getDate()) + " " + i.fixLen(e.getHours()) + ":" + i.fixLen(e.getMinutes());
    },
    getWeek: function(e) {
        return [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ][e.getDay()];
    },
    getHour: function(e) {
        var t = new Date(e);
        return i.fixLen(t.getHours()) + ":" + i.fixLen(t.getMinutes());
    },
    scroll2Top: function(e) {
        setTimeout(function() {
            return wx.pageScrollTo({
                scrollTop: 0
            });
        }, e);
    },
    getDatePickerList: function(e) {
        for (var t = [], n = 0; n < 7; ++n) {
            var a = new Date(e.getTime() - 24 * n * 60 * 60 * 1e3);
            t.push({
                timestamp: a.getTime(),
                dateFormat: i.fixLen(a.getMonth() + 1) + "-" + i.fixLen(a.getDate()),
                active: 0 === n,
                month: a.getMonth() + 1 + "月",
                date: i.fixLen(a.getDate()),
                day: 0 == n ? "今天" : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ][a.getDay()]
            });
        }
        return t;
    }
};

e.prototype.util = i, e.prototype.req = o, module.exports = e;