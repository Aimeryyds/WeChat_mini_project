function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/notification.js")), e = t(require("../../../utils/const.js")), o = t(require("../../../network/api"));

Page({
    data: {
        startDate: 0,
        endDate: 0
    },
    onLoad: function(t) {
        var a = this, e = t.limitDays, n = void 0 === e ? 7 : e, s = t.limitMonths, i = void 0 === s ? 6 : s, l = t.startDate, r = void 0 === l ? 0 : l, d = t.endDate, D = void 0 === d ? 0 : d;
        if (console.log("----startDate------", r), console.log("----endDate------", r), 
        0 == r && 0 == D) {
            var c = Date.parse(new Date(new Date().setHours(0, 0, 0, 0)));
            r = c, D = c + 864e5;
        }
        console.log("----startDate------", r), console.log("----endDate------", r), o.default.queryComHotelSetting({}).then(function(t) {
            console.log(t, "++++");
            var e = new Date(), o = e.getMonth(), s = e.getFullYear(), l = [];
            t.data.acceptMonths > 0 && (i = t.data.acceptMonths + 1), t.data.lastDays > 0 && (n = t.data.lastDays + 1);
            for (var d = 0; d < i; d++) {
                var c = parseInt((o + d) / 12) + s, u = (o + d) % 12;
                console.log("=========isEndMonth: i == limitMonths-1 =========", d == i - 1), l.push({
                    year: c,
                    month: u,
                    isEndMonth: d == i - 1
                });
            }
            a.setData({
                calendars: l,
                limitDays: n,
                limitMonths: i,
                startDate: r,
                endDate: D
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    handleSubmitDate: function(t) {
        var o = t.detail, n = o.startDate, s = o.endDate;
        a.default.post(e.default.action.HOTEL_DATE_CHANGED, {
            startDate: n,
            endDate: s
        }), wx.navigateBack();
    }
});