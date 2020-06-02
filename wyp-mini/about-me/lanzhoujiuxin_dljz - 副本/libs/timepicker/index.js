function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function t() {
    return c || (c = wx.getSystemInfoSync());
}

function i() {
    var e = t();
    return /iphone|ios/i.test(e.platform);
}

function a(e, t, a) {
    var r = e + "-" + t + "-" + a;
    return i() && (r = e + "/" + t + "/" + a), new Date(r);
}

function r() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function n(e) {
    var t = this;
    e && e.length && e.forEach(function(e) {
        t[e] = o[e].bind(t);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s;

exports.isIos = i;

var c = void 0, o = (s = {
    renderDays: function(e, t, i) {
        for (var r = this, n = [], s = 5, c = o.getThisMonthDays(e, t), l = c - i + 1, m = i; m <= c && 0 != s; m++) n.push({
            day: m,
            choosed: !1,
            disable: !1,
            year: e,
            month: t
        }), s--;
        if (l < 5) for (var d = 1 * t + 1 > 12 ? 1 : 1 * t + 1, f = 1 * t + 1 > 12 ? 1 * e + 1 : e, h = 1; h < 5 - l; h++) n.push({
            day: h,
            choosed: !1,
            disable: !1,
            year: f,
            month: d
        });
        var y = [], u = (i ? [ {
            day: i,
            choosed: !0,
            year: e,
            month: t
        } ] : this.data.timepicker.selectedDay).map(function(e) {
            return e.year + "-" + e.month + "-" + e.day;
        }), p = this.config.enableDays, T = (void 0 === p ? [] : p).map(function(e) {
            return e.year + "-" + e.month + "-" + e.day;
        }), v = [ "日", "一", "二", "三", "四", "五", "六" ];
        n.map(function(e) {
            var t = e.year + "-" + e.month + "-" + e.day;
            -1 !== u.indexOf(t) && (e.choosed = !0), r.config.disableAll && (e.disable = !0);
            var i = a(e.year, e.month, e.day).getDay();
            !r.config.disableWeekend || 0 != i && 6 != i || (e.disable = !0), r.config.disableWeekend || 0 != i && 6 != i || (e.disable = !1), 
            -1 !== T.indexOf(t) && (e.disable = !1), y.push({
                weeks: v[i],
                choosed: e.choosed,
                disable: e.disable,
                year: e.year,
                month: e.month,
                day: e.day,
                date: e.month + "/" + e.day
            });
        }), this.setData({
            "timepicker.lastFiveDaysList": y
        });
    },
    jumpToToday: function() {
        var e = new Date(), t = e.getFullYear(), i = e.getMonth() + 1, r = e.getDate(), n = a(t, i, r).getTime();
        this.setData({
            "timepicker.curYear": t,
            "timepicker.curMonth": i,
            "timepicker.curDate": r,
            "timepicker.selectedDay": [ {
                day: r,
                choosed: !0,
                year: t,
                month: i
            } ],
            "timepicker.todayTimestamp": n
        }), o.renderDays.call(this, t, i, r), o.renderTimepicker.call(this, t, i, r);
    },
    renderTimepicker: function(e, t, i) {
        o.calculateDays.call(this, e, t, i);
    },
    calculateDays: function(e, t, i) {
        var a = i ? [ {
            day: i,
            choosed: !0,
            year: e,
            month: t
        } ] : this.data.timepicker.selectedDay, r = a.map(function(e) {
            return e.year + "-" + e.month + "-" + e.day;
        }), n = (this.data.timepicker || []).lastFiveDaysList;
        n.map(function(e) {
            var t = e.year + "-" + e.month + "-" + e.day;
            -1 !== r.indexOf(t) ? e.choosed = !0 : e.choosed = !1;
        });
        var s = {
            "timepicker.lastFiveDaysList": n
        };
        i && (s["timepicker.selectedDay"] = a);
        var c = this.data.timepicker || [], o = c.allTimeList, l = c.selectedTime;
        if (l) {
            var m = !1;
            a[0].year == l.year && a[0].month == l.month && a[0].day == l.day && (m = !0), o.map(function(e) {
                e.choosed = !1, m && l.time == e.time && (e.choosed = !0);
            }), s["timepicker.allTimeList"] = o;
        }
        this.setData(s);
    },
    getThisMonthDays: function(e, t) {
        return new Date(e, t, 0).getDate();
    },
    getThisDayTime: function(e) {
        for (var t = [], i = 0; i < 24; i++) -1 == e.indexOf(i) && t.push({
            time: i + ":00",
            choosed: !1,
            disable: !1
        });
        return t;
    },
    getDayOfWeek: function(e, t, i) {
        return new Date(Date.UTC(e, t - 1, i)).getDay();
    },
    tapTimeItem: function(e) {
        var t = e.currentTarget.dataset, i = (t.idx, t.forbidden), a = (t.disable, t.time);
        if (i) wx.showModal({
            content: "该时间不可选！",
            showCancel: !1,
            success: function(e) {
                e.confirm;
            }
        }); else {
            var r = this.data.timepicker.selectedDay[0], n = r.year, s = r.month, c = r.day;
            return void o.selectTime.call(this, n, s, c, a);
        }
    },
    comfirmTime: function(e) {
        var t = this.config.comfirmTime, i = this.data.timepicker, a = i.selectedTime;
        if (i.selectedDay[0].disable) wx.showModal({
            content: "当日时间不可选！！",
            showCancel: !1,
            success: function(e) {
                e.confirm;
            }
        }); else {
            if (a && a.time) return o.setTimepickerStatus.call(this, !1), t && "function" == typeof t ? this.config.comfirmTime(a, e) : void 0;
            wx.showModal({
                content: "请选择对应的时间！",
                showCancel: !1,
                success: function(e) {
                    e.confirm;
                }
            });
        }
    },
    disableTime: function(e) {
        var t = this.data.timepicker.allTimeList;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("disableTime 参数为数组");
        var i = e;
        t.map(function(e) {
            var t = 1 * e.time.split(":")[0];
            -1 !== i.indexOf(t) && (e.disable = !0);
        }), this.setData({
            "timepicker.allTimeList": t,
            "timepicker.disableTimeList": i
        });
    },
    disableTimepickerDays: function(e) {
        var t = this.data.timepicker.selectedDay, i = this.data.timepicker, a = i.disableDays, r = void 0 === a ? [] : a, n = i.lastFiveDaysList;
        if ("[object Array]" !== Object.prototype.toString.call(e)) return console.error("disableDays 参数为数组");
        var s = e.concat(r), c = s.map(function(e) {
            return e.year + "-" + e.month + "-" + e.day;
        });
        n.map(function(e) {
            var i = e.year + "-" + e.month + "-" + e.day;
            -1 !== c.indexOf(i) && (e.disable = !0);
            var a = t.map(function(e) {
                return e.year + "-" + e.month + "-" + e.day;
            });
            -1 !== a.indexOf(i) && -1 !== c.indexOf(i) && (t[a.indexOf(i)].disable = !0);
        });
        var o = (this.data.timepicker || []).allTimeList, l = t[0].year + "-" + t[0].month + "-" + t[0].day;
        -1 !== c.indexOf(l) && o.map(function(e) {
            e.forbidden = !0;
        }), this.config.disableAll && o.map(function(e) {
            e.forbidden = !0;
        }), this.setData({
            "timepicker.lastFiveDaysList": n,
            "timepicker.disableDays": s,
            "timepicker.selectedDay": t,
            "timepicker.allTimeList": o
        });
    },
    tapDayItem: function(e) {
        var t = e.currentTarget.dataset, i = (t.idx, t.year), a = t.month, r = t.day;
        if (!t.disable) {
            return void l(i, a, r);
        }
    },
    selectTime: function(e, t, i, a) {
        var r = this.data.timepicker || [], n = r.allTimeList, s = (this.config, n);
        s.map(function(e) {
            a == e.time ? e.choosed = !0 : e.choosed = !1;
        });
        var c = {
            year: e,
            month: t,
            day: i,
            time: a
        };
        this.setData({
            "timepicker.allTimeList": s,
            "timepicker.selectedTime": c
        });
    },
    setTimepickerStatus: function(e) {
        this.setData({
            "timepicker.show": e
        });
    }
}, e(s, "selectTime", function(e, t, i, a) {
    var r = this.data.timepicker || [], n = r.allTimeList, s = (this.config, n);
    s.map(function(e) {
        a == e.time ? e.choosed = !0 : e.choosed = !1;
    });
    var c = {
        year: e,
        month: t,
        day: i,
        time: a
    };
    this.setData({
        "timepicker.allTimeList": s,
        "timepicker.selectedTime": c
    });
}), e(s, "initCalendarDay", function(e) {
    var t = {};
    this.data.timepicker.selectedDay[0];
    var i = this.data.timepicker.selectedDay[0], a = i.year, r = i.month, n = i.day, s = void 0, c = void 0, l = void 0;
    if ("prev" == e.currentTarget.dataset.type) {
        var m = o.getThisMonthDays(a, r - 1);
        l = --n > 0 ? n : m, c = n > 0 ? r : --r > 0 ? r : 12, s = r > 0 ? a : --a;
    } else {
        var d = o.getThisMonthDays(a, r);
        l = ++n > d ? 1 : n, c = n > d && ++r > 12 ? 1 : r, s = r > 12 ? ++a : a;
    }
    t.year = s, t.month = c, t.day = l, o.setTimepickerStatus.call(this, !1);
    var f = this.config.initCalendarDay;
    if (f && "function" == typeof f) return this.config.initCalendarDay(t);
}), e(s, "catchTouch", function() {}), e(s, "closeTimepicker", function() {
    o.setTimepickerStatus.call(this, !1);
}), s), l = (exports.disableTime = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = r();
    o.disableTime.call(t, e);
}, exports.disableTimepickerDays = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = r();
    o.disableTimepickerDays.call(t, e);
}, exports.jumpTo = function(e, t, i) {
    var a = r(), n = a.data.timepicker.selectedDay;
    if (!n || +n[0].year != +e || +n[0].month != +t || +n[0].day != +i) if (e && t) {
        if ("number" != typeof +e || "number" != typeof +t) return console.error("jump 函数年月日参数必须为数字");
        var s = a.data.timepicker.allTimeList;
        s.map(function(e) {
            e.forbidden = !1;
        });
        var c = {
            "timepicker.curYear": e,
            "timepicker.curMonth": t,
            "timepicker.allTimeList": s
        };
        a.setData(c, function() {
            if ("number" == typeof +i) return o.renderTimepicker.call(a, e, t, i);
            o.renderTimepicker.call(a, e, t);
        });
    } else o.jumpToToday.call(a);
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = [ "tapTimeItem", "comfirmTime", "tapDayItem", "initCalendarDay", "catchTouch", "closeTimepicker" ], i = r();
    if (o.setTimepickerStatus.call(i, !0), i.config = e, i.setData({
        "timepicker.allTimeList": o.getThisDayTime(e.disableTime)
    }), e.defaultDay && "string" == typeof e.defaultDay) {
        var a = e.defaultDay.split(" "), s = a[1], c = a[0].split("-");
        if (c.length < 3) return console.error("配置 jumpTo 格式应为: 2018-4-2 或 2018-04-02");
        o.renderDays.call(i, c[0], c[1], c[2]), l(+c[0], +c[1], +c[2]), o.selectTime.call(i, c[0], c[1], c[2], s);
    } else o.jumpToToday.call(i);
    n.call(i, t);
};