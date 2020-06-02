function a() {
    return c || (c = wx.getSystemInfoSync());
}

function e() {
    var e = a();
    return /iphone|ios/i.test(e.platform);
}

function t(a, t, n) {
    var r = a + "-" + t + "-" + n;
    return e() && (r = a + "/" + t + "/" + n), new Date(r);
}

function n(a) {
    var e = this.data.gesture, t = e.startX, n = e.startY;
    if (this.slideLock) {
        var r = a.touches[0], o = r.clientX - t, s = r.clientY - n;
        return o < -60 && s < 20 && s > -20 && (this.slideLock = !1, !0);
    }
}

function r(a) {
    var e = this.data.gesture, t = e.startX, n = e.startY;
    if (this.slideLock) {
        var r = a.touches[0], o = r.clientX - t, s = r.clientY - n;
        return o > 60 && s < 20 && s > -20 && (this.slideLock = !1, !0);
    }
}

function o() {
    var a = {}, e = [];
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
        a[e.year + "-" + e.month + "-" + e.day] = e;
    });
    for (var t in a) e.push(a[t]);
    return e;
}

function s() {
    var a = getCurrentPages();
    return a[a.length - 1];
}

function i(a) {
    var e = this;
    a && a.length && a.forEach(function(a) {
        e[a] = l[a].bind(e);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isIos = e, exports.isUpSlide = function(a) {
    var e = this.data.gesture, t = e.startX, n = e.startY;
    if (this.slideLock) {
        var r = a.touches[0], o = r.clientX - t;
        return r.clientY - n < -60 && o < 20 && o > -20 && (this.slideLock = !1, !0);
    }
}, exports.isDownSlide = function(a) {
    var e = this.data.gesture, t = e.startX, n = e.startY;
    if (this.slideLock) {
        var r = a.touches[0], o = r.clientX - t;
        return r.clientY - n > 60 && o < 20 && o > -20 && (this.slideLock = !1, !0);
    }
}, exports.isLeftSlide = n, exports.isRightSlide = r;

var c = void 0, l = {
    getThisMonthDays: function(a, e) {
        return new Date(a, e, 0).getDate();
    },
    getFirstDayOfWeek: function(a, e) {
        return new Date(Date.UTC(a, e - 1, 1)).getDay();
    },
    getDayOfWeek: function(a, e, t) {
        return new Date(Date.UTC(a, e - 1, t)).getDay();
    },
    renderCalendar: function(a, e, t) {
        l.calculateEmptyGrids.call(this, a, e), l.calculateDays.call(this, a, e, t);
        var n = (this.data.calendar || {}).todoLabels, r = this.config.afterCalendarRender;
        n && n instanceof Array && l.setTodoLabels.call(this), r && "function" == typeof r && !this.firstRender && (r(), 
        this.firstRender = !0);
    },
    calculateEmptyGrids: function(a, e) {
        l.calculatePrevMonthGrids.call(this, a, e), l.calculateNextMonthGrids.call(this, a, e);
    },
    calculatePrevMonthGrids: function(a, e) {
        for (var t = [], n = l.getThisMonthDays(a, e - 1), r = n - l.getFirstDayOfWeek(a, e), o = n; o > r; o--) t.push(o);
        this.setData({
            "calendar.empytGrids": t.reverse()
        });
    },
    calculateNextMonthGrids: function(a, e) {
        var n = [], r = l.getThisMonthDays(a, e), o = t(a, e, r).getDay(), s = 42 - this.data.calendar.empytGrids.length - r, i = 7 - (o + 1);
        s > i && (i = s);
        for (var c = 1; c <= i; c++) n.push(c);
        this.setData({
            "calendar.lastEmptyGrids": n
        });
    },
    calculateDays: function(a, e, n) {
        for (var r = this, o = [], s = this.data.calendar.todayTimestamp, i = l.getThisMonthDays(a, e), c = n ? [ {
            day: n,
            choosed: !0,
            year: a,
            month: e
        } ] : this.data.calendar.selectedDay, d = 1; d <= i; d++) o.push({
            day: d,
            choosed: !1,
            year: a,
            month: e
        });
        var h = this.config.disableDays, u = void 0 === h ? [] : h, y = this.config.enableDays, f = void 0 === y ? [] : y, v = u.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        }), D = f.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        }), m = c.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        });
        o.map(function(a) {
            var e = a.year + "-" + a.month + "-" + a.day;
            -1 !== m.indexOf(e) && (a.choosed = !0);
            var n = t(a.year, a.month, a.day).getTime();
            -1 !== v.indexOf(e) && (a.disable = !0), r.config.disableAll && (a.disable = !0);
            var o = t(a.year, a.month, a.day).getDay();
            !r.config.disableWeekend || 0 != o && 6 != o || a.disable || (a.disable = !0), r.config.disableWeekend || 0 != o && 6 != o || (a.disable = !1), 
            r.config.disablePastDay && n - s < 0 && !a.disable && (a.disable = !0), -1 !== D.indexOf(e) && (a.disable = !1);
        });
        var p = c[0].year + "-" + c[0].month + "-" + c[0].day, g = t(c[0].year, c[0].month, c[0].day).getTime();
        -1 !== v.indexOf(p) && (c[0].disable = !0), this.config.disablePastDay && g - s < 0 && (c[0].disable = !0);
        var b = t(c[0].year, c[0].month, c[0].day).getDay();
        !this.config.disableWeekend || 0 != b && 6 != b || (c[0].disable = !0), this.config.disableAll && -1 == D.indexOf(p) && (c[0].disable = !0);
        var T = {
            "calendar.days": o
        };
        n && (T["calendar.selectedDay"] = c), this.setData(T);
    },
    choosePrevMonth: function() {
        var a = this.data.calendar, e = a.curYear, t = e, n = a.curMonth - 1;
        n < 1 && (t = e - 1, n = 12), t < 1920 || (l.renderCalendar.call(this, t, n), this.setData({
            "calendar.curYear": t,
            "calendar.curMonth": n
        }));
    },
    chooseNextMonth: function() {
        var a = this.data.calendar.curYear, e = this.data.calendar.curMonth + 1, t = a;
        e > 12 && (t = a + 1, e = 1), t > 2050 || (l.renderCalendar.call(this, t, e), this.setData({
            "calendar.curYear": t,
            "calendar.curMonth": e
        }));
    },
    chooseMonth: function(a) {
        var e = a.detail.value.split("-"), t = 1 * e[0], n = 1 * e[1];
        l.renderCalendar.call(this, t, n), this.setData({
            "calendar.curYear": t,
            "calendar.curMonth": n
        });
    },
    closeCalendar: function(a) {
        l.setCalendarStatus.call(this, !1);
    },
    tapDayItem: function(a) {
        var e = a.currentTarget.dataset, t = e.idx;
        if (!e.disable) {
            var n = {}, r = this.data.calendar || [], o = r.days, s = r.selectedDay, i = this.config, c = i.multi, d = {
                e: a,
                idx: t,
                onTapDay: i.onTapDay,
                currentSelected: n,
                selectedDays: s,
                days: o.slice()
            };
            c ? l.whenMulitSelect.call(this, d) : l.whenSingleSelect.call(this, d);
        }
    },
    comfirmDay: function(a) {
        var e = {}, t = this.config, n = (t.multi, t.comfirmDay);
        if (!(e = this.data.calendar.selectedDay[0]).disable) return l.setCalendarStatus.call(this, !1), 
        n && "function" == typeof n ? this.config.comfirmDay(e, a) : void 0;
        wx.showModal({
            content: "当前日期不可选！请选择其他日期！",
            showCancel: !1,
            success: function(a) {
                a.confirm;
            }
        });
    },
    afterTapDay: function(a, e) {
        var t = this.config, n = t.multi, r = t.afterTapDay;
        r && "function" == typeof r && (n ? t.afterTapDay(a, e) : t.afterTapDay(a));
    },
    whenMulitSelect: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = a.currentSelected, t = a.selectedDays, n = a.days, r = a.idx, o = a.onTapDay, s = a.e;
        if (n[r].choosed = !n[r].choosed, n[r].choosed ? (e = n[r], t.push(e)) : (n[r].cancel = !0, 
        e = n[r], t = t.filter(function(a) {
            return a.day !== n[r].day;
        })), o && "function" == typeof o) return this.config.onTapDay(e, s);
        this.setData({
            "calendar.days": n,
            "calendar.selectedDay": t
        }), l.afterTapDay.call(this, e, t);
    },
    whenSingleSelect: function() {
        var a = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.currentSelected, n = e.selectedDays, r = [], o = e.days, s = e.idx, i = e.onTapDay, c = e.e, d = n[0], h = d.month, u = d.year, y = o[0], f = y.month, v = y.year, D = this.data.calendar, m = void 0 === D ? {} : D;
        if (h !== f || u !== v || this.weekMode || (o[n[0].day - 1].choosed = !1), this.weekMode && o.map(function(a, e) {
            a.day === n[0].day && (o[e].choosed = !1);
        }), m.todoLabels && (r = m.todoLabels.filter(function(a) {
            return +a.year === v && +a.month === f;
        })), r.forEach(function(e) {
            a.weekMode ? o.map(function(a, t) {
                +a.day == +e.day && (o[t].hasTodo = !0, +n[0].day == +e.day && (o[t].showTodoLabel = !0));
            }) : (o[e.day - 1].hasTodo = !0, +n[0].day == +e.day && (o[n[0].day - 1].showTodoLabel = !0));
        }), o[s].showTodoLabel && (o[s].showTodoLabel = !1), o[s].choosed = !0, t = o[s], 
        i && "function" == typeof i) return this.config.onTapDay(t, c);
        this.setData({
            "calendar.days": o,
            "calendar.selectedDay": [ t ]
        }), l.afterTapDay.call(this, t);
    },
    setTodoLabels: function() {
        var a = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.data.calendar;
        if (!t || !t.days) return console.error("请等待日历初始化完成后再调用该方法");
        var n = t.days.slice(), r = t.curYear, s = t.curMonth, i = e.days, c = void 0 === i ? [] : i, l = e.pos, d = void 0 === l ? "bottom" : l, h = e.dotColor, u = void 0 === h ? "" : h, y = t.todoLabels, f = void 0 === y ? [] : y, v = t.todoLabelPos, D = t.todoLabelColor, m = c.filter(function(a) {
            return +a.year === r && +a.month === s;
        });
        if (m && m.length || f.length) {
            var p = f.filter(function(a) {
                return +a.year === r && +a.month === s;
            });
            m.concat(p).forEach(function(e) {
                var t = {};
                (t = a.weekMode ? n.find(function(a) {
                    return +a.day == +e.day;
                }) : n[e.day - 1]) && (t.showTodoLabel = !t.choosed);
            });
            var g = {
                "calendar.days": n,
                "calendar.todoLabels": o(c.concat(f))
            };
            d && d !== v && (g["calendar.todoLabelPos"] = d), u && u !== D && (g["calendar.todoLabelColor"] = u), 
            this.setData(g);
        }
    },
    filterTodos: function(a) {
        var e = this.data.calendar.todoLabels, t = a.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        });
        return e.filter(function(a) {
            return -1 === t.indexOf(a.year + "-" + a.month + "-" + a.day);
        });
    },
    deleteTodoLabels: function(a) {
        if (a instanceof Array && a.length) {
            var e = l.filterTodos.call(this, a), t = this.data.calendar, n = t.days, r = t.curYear, o = t.curMonth, s = e.filter(function(a) {
                return r === +a.year && o === +a.month;
            });
            n.map(function(a) {
                a.showTodoLabel = !1;
            }), s.forEach(function(a) {
                n[a.day - 1].showTodoLabel = !n[a.day - 1].choosed;
            }), this.setData({
                "calendar.days": n,
                "calendar.todoLabels": e
            });
        }
    },
    clearTodoLabels: function() {
        var a = this.data.calendar.days, e = void 0 === a ? [] : a, t = [].concat(e);
        t.map(function(a) {
            a.showTodoLabel = !1;
        }), this.setData({
            "calendar.days": t,
            "calendar.todoLabels": []
        });
    },
    jumpToToday: function() {
        var a = new Date(), e = a.getFullYear(), n = a.getMonth() + 1, r = a.getDate(), o = t(e, n, r).getTime();
        this.setData({
            "calendar.curYear": e,
            "calendar.curMonth": n,
            "calendar.selectedDay": [ {
                day: r,
                choosed: !0,
                year: e,
                month: n
            } ],
            "calendar.todayTimestamp": o
        }), l.renderCalendar.call(this, e, n, r);
    },
    calendarTouchstart: function(a) {
        var e = a.touches[0], t = e.clientX, n = e.clientY;
        this.slideLock = !0, this.setData({
            "gesture.startX": t,
            "gesture.startY": n
        });
    },
    calendarTouchmove: function(a) {
        if (n.call(this, a)) {
            if (this.weekMode) return l.calculateNextWeekDays.call(this);
            l.chooseNextMonth.call(this);
        }
        if (r.call(this, a)) {
            if (this.weekMode) return l.calculatePrevWeekDays.call(this);
            l.choosePrevMonth.call(this);
        }
    },
    updateCurrYearAndMonth: function(a) {
        var e = this.data.calendar, t = e.days, n = e.curYear, r = e.curMonth, o = n, s = r, i = t[0], c = i.month, d = i.year, h = t[t.length - 1], u = h.month, y = h.year;
        c !== u && ("prev" === a ? (n = d, s = c) : (n = y, s = u));
        var f = l.getThisMonthDays(n, r), v = t[t.length - 1], D = t[0];
        return (f === +v.day || v.day + 7 > f) && "next" === a ? (s += 1) > 12 && (o += 1, 
        s = 12) : +D.day <= 7 && "prev" === a && (s -= 1) <= 0 && (o -= 1, s = 12), {
            Uyear: o,
            Umonth: s
        };
    },
    calculateLastDay: function() {
        var a = this.data.calendar, e = a.days, t = a.curYear, n = a.curMonth;
        return {
            lastDayInThisWeek: e[e.length - 1].day,
            lastDayInThisMonth: l.getThisMonthDays(t, n)
        };
    },
    calculateFirstDay: function() {
        return {
            firstDayInThisWeek: this.data.calendar.days[0].day
        };
    },
    firstWeekInMonth: function(a, e) {
        var t = [ 1, 6 - l.getDayOfWeek(a, e, 1) + 1 ];
        return this.data.calendar.days.slice(t[0] - 1, t[1]);
    },
    lastWeekInMonth: function(a, e) {
        var t = l.getThisMonthDays(a, e), n = [ t - l.getDayOfWeek(a, e, t), t ];
        return this.data.calendar.days.slice(n[0] - 1, n[1]);
    },
    initSelectedDay: function(a) {
        var e = a.slice(), t = this.data.calendar, n = t.selectedDay, r = void 0 === n ? [] : n, o = t.todoLabels, s = void 0 === o ? [] : o, i = r.map(function(a) {
            return a.year + "+" + a.month + "+" + a.day;
        }), c = s.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        });
        return e.map(function(a) {
            -1 !== i.indexOf(a.year + "+" + a.month + "+" + a.day) ? a.choosed = !0 : a.choosed = !1, 
            -1 !== c.indexOf(a.year + "-" + a.month + "-" + a.day) && (a.showTodoLabel = !a.choosed);
        }), e;
    },
    calculateNextWeekDays: function() {
        var a = l.calculateLastDay.call(this), e = a.lastDayInThisWeek, t = a.lastDayInThisMonth, n = this.data.calendar, r = n.curYear, o = n.curMonth, s = [];
        if (t - e >= 7) {
            var i = l.updateCurrYearAndMonth.call(this, "next");
            r = i.Uyear, o = i.Umonth;
            for (var c = e + 1; c <= e + 7; c++) s.push({
                year: r,
                month: o,
                day: c
            });
        } else {
            for (var d = e + 1; d <= t; d++) s.push({
                year: r,
                month: o,
                day: d
            });
            var h = l.updateCurrYearAndMonth.call(this, "next");
            r = h.Uyear, o = h.Umonth;
            for (var u = 1; u <= 7 - (t - e); u++) s.push({
                year: r,
                month: o,
                day: u
            });
        }
        s = l.initSelectedDay.call(this, s), this.setData({
            "calendar.curYear": r,
            "calendar.curMonth": o,
            "calendar.days": s
        });
    },
    calculatePrevWeekDays: function() {
        var a = l.calculateFirstDay.call(this).firstDayInThisWeek, e = this.data.calendar, t = e.curYear, n = e.curMonth, r = [];
        if (a - 7 > 0) {
            var o = l.updateCurrYearAndMonth.call(this, "prev");
            t = o.Uyear, n = o.Umonth;
            for (var s = a - 7; s < a; s++) r.push({
                year: t,
                month: n,
                day: s
            });
        } else {
            for (var i = [], c = 1; c < a; c++) i.push({
                year: t,
                month: n,
                day: c
            });
            var d = l.updateCurrYearAndMonth.call(this, "prev");
            t = d.Uyear, n = d.Umonth;
            for (var h = l.getThisMonthDays(t, n), u = h - Math.abs(a - 7); u <= h; u++) r.push({
                year: t,
                month: n,
                day: u
            });
            r = r.concat(i);
        }
        r = l.initSelectedDay.call(this, r), this.setData({
            "calendar.curYear": t,
            "calendar.curMonth": n,
            "calendar.days": r
        });
    },
    selectedDayWeekAllDays: function(a) {
        var e = this.data.calendar, t = e.days, n = e.curYear, r = e.curMonth, o = a.year, s = a.month, i = a.day, c = l.lastWeekInMonth.call(this, o, s), d = [], h = [], u = l.firstWeekInMonth.call(this, o, s);
        if (n === o && r === s || (i = 1), n !== o && (o = n), r !== s && (s = r), u.find(function(a) {
            return a.day === i;
        })) {
            var y = [], f = l.getThisMonthDays(o, s - 1), v = l.updateCurrYearAndMonth.call(this, "prev");
            n = v.Uyear, r = v.Umonth;
            for (var D = f - (7 - u.length) + 1; D <= f; D++) y.push({
                year: n,
                month: r,
                day: D
            });
            t = y.concat(u);
        } else if (c.find(function(a) {
            return a.day === i;
        })) {
            var m = [];
            if (c && c.length < 7) {
                var p = l.updateCurrYearAndMonth.call(this, "next");
                n = p.Uyear, r = p.Umonth;
                for (var g = 1, b = 7 - c.length; g <= b; g++) m.push({
                    year: n,
                    month: r,
                    day: g
                });
            }
            t = c.concat(m);
        } else {
            var T = l.getDayOfWeek(o, s, i), M = [ i - T, i + (6 - T) ];
            t = t.slice(M[0] - 1, M[1]);
        }
        t = l.initSelectedDay.call(this, t), this.setData({
            "calendar.days": t,
            "calendar.empytGrids": d,
            "calendar.lastEmptyGrids": h
        });
    },
    switchWeek: function(a) {
        if (this.config.multi) return console.error("多选模式不能切换周月视图");
        var e = this.data.calendar, t = e.selectedDay, n = void 0 === t ? [] : t, r = e.curYear, o = e.curMonth;
        if (n.length) {
            var s = n[0];
            if ("week" === a) {
                if (this.weekMode) return;
                this.weekMode = !0, l.selectedDayWeekAllDays.call(this, s);
            } else {
                this.weekMode = !1;
                var i = s.year, c = s.month, d = s.day;
                r === i && o === c || (d = 1), l.renderCalendar.call(this, r, o, d);
            }
        }
    },
    disableDays: function(a) {
        var e = this.data.calendar, t = e.disableDays, n = void 0 === t ? [] : t, r = e.days;
        if ("[object Array]" !== Object.prototype.toString.call(a)) return console.error("disableDays 参数为数组");
        var o = a.concat(n), s = o.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        });
        r.map(function(a) {
            var e = a.year + "-" + a.month + "-" + a.day;
            -1 !== s.indexOf(e) && (a.disable = !0);
        }), this.setData({
            "calendar.days": r,
            "calendar.disableDays": o
        });
    },
    enableDays: function(a) {
        var e = this.data.calendar, t = e.enableDays, n = void 0 === t ? [] : t, r = e.days;
        if ("[object Array]" !== Object.prototype.toString.call(a)) return console.error("enableDays 参数为数组");
        var o = a.concat(n), s = o.map(function(a) {
            return a.year + "-" + a.month + "-" + a.day;
        });
        r.map(function(a) {
            var e = a.year + "-" + a.month + "-" + a.day;
            -1 !== s.indexOf(e) && (a.disable = !1);
        }), this.setData({
            "calendar.days": r,
            "calendar.enableDays": o
        });
    },
    setCalendarStatus: function(a) {
        this.setData({
            "calendar.show": a
        });
    },
    catchTouch: function() {}
}, d = (exports.getSelectedDay = function() {
    return s().data.calendar.selectedDay;
}, exports.jump = function(a, e, n) {
    var r = s(), o = new Date(), i = t(o.getFullYear(), o.getMonth() + 1, o.getDate()).getTime();
    r.setData({
        "calendar.todayTimestamp": i
    });
    var c = r.data.calendar.selectedDay;
    if (!c || +c[0].year != +a || +c[0].month != +e || +c[0].day != +n) if (a && e) {
        if ("number" != typeof +a || "number" != typeof +e) return console.error("jump 函数年月日参数必须为数字");
        var d = {
            "calendar.curYear": a,
            "calendar.curMonth": e
        };
        r.setData(d, function() {
            if ("number" == typeof +n) return l.renderCalendar.call(r, a, e, n);
            l.renderCalendar.call(r, a, e);
        });
    } else l.jumpToToday.call(r);
});

exports.setTodoLabels = function(a) {
    var e = s();
    l.setTodoLabels.call(e, a);
}, exports.deleteTodoLabels = function(a) {
    var e = s();
    l.deleteTodoLabels.call(e, a);
}, exports.clearTodoLabels = function() {
    var a = s();
    l.clearTodoLabels.call(a);
}, exports.switchView = function(a) {
    var e = s();
    l.switchWeek.call(e, a);
}, exports.disableDay = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = s();
    l.disableDays.call(e, a);
}, exports.enableDay = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = s();
    l.enableDays.call(e, a);
};

exports.default = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = [ "日", "一", "二", "三", "四", "五", "六" ], t = [ "tapDayItem", "comfirmDay", "choosePrevMonth", "chooseNextMonth", "calendarTouchstart", "calendarTouchmove", "catchTouch", "chooseMonth", "closeCalendar" ], n = s();
    if (n.config = a, l.setCalendarStatus.call(n, !0), n.setData({
        "calendar.weeksCh": e
    }), a.defaultDay && "string" == typeof a.defaultDay) {
        var r = a.defaultDay.split(" "), o = (r[1], r[0].split("-"));
        if (o.length < 3) return console.error("配置 jumpTo 格式应为: 2018-4-2 或 2018-04-02");
        d(+o[0], +o[1], +o[2]);
    } else l.jumpToToday.call(n);
    i.call(n, t);
};