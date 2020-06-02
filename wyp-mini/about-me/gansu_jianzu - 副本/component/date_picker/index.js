var t = function() {
    function t(t, e) {
        var a = [], r = !0, n = !1, i = void 0;
        try {
            for (var s, l = t[Symbol.iterator](); !(r = (s = l.next()).done) && (a.push(s.value), 
            !e || a.length !== e); r = !0) ;
        } catch (t) {
            n = !0, i = t;
        } finally {
            try {
                !r && l.return && l.return();
            } finally {
                if (n) throw i;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = require("../../utils/util"), a = new Date(), r = [ {
    value: "周日",
    class: "weekend"
}, {
    value: "周一",
    class: ""
}, {
    value: "周二",
    class: ""
}, {
    value: "周三",
    class: ""
}, {
    value: "周四",
    class: ""
}, {
    value: "周五",
    class: ""
}, {
    value: "周六",
    class: "weekend"
} ];

Component({
    behaviors: [],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        enableTime: {
            type: Boolean,
            value: !1
        },
        date: {
            type: String,
            value: "",
            observer: "init"
        }
    },
    data: {},
    ready: function() {
        this.init();
    },
    methods: {
        isDate: function(t) {
            return null != t && void 0 != t && new Date(t).getDate() == t.substring(t.length - 2);
        },
        isLeapYear: function(t) {
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0;
        },
        isToday: function(t, e, r) {
            return t == a.getFullYear() && e == a.getMonth() + 1 && r == a.getDate();
        },
        isWeekend: function(t, e) {
            return (t + e) % 7 == 0 || (t + e - 1) % 7 == 0;
        },
        calEmptyGrid: function(t, e) {
            return new Date(t + "/" + e + "/01 00:00:00").getUTCDay() + 1 || "";
        },
        calDaysInMonth: function(t, e) {
            var a = this.isLeapYear(t);
            return 2 == e && a ? 29 : 2 != e || a ? [ 4, 6, 9, 11 ].includes(e) ? 30 : 31 : 28;
        },
        calWeekDay: function(t, e, a) {
            return new Date(t + "/" + e + "/" + a + " 00:00:00").getUTCDay() || "";
        },
        calDays: function(t, e) {
            for (var a = this.data.selected, r = this.calEmptyGrid(t, e), n = [], i = 1; i <= 31; i++) {
                var s = this.isToday(t, e, i), l = a[0] == t && a[1] == e && a[2] == i, c = s ? "today" : "", h = l ? "selected" : "", u = {
                    value: i,
                    class: "date-bg " + (this.isWeekend(r, i) ? "weekend" : "") + " " + c + " " + h + " " + (s && l ? "today-selected" : "")
                };
                n.push(u);
            }
            return n.slice(0, this.calDaysInMonth(t, e));
        },
        changeMonth: function(t) {
            var e = t.currentTarget.dataset.id, a = this.data.currYear, r = this.data.currMonth;
            r = "prev" == e ? r - 1 : r + 1, "prev" == e && r < 1 && (a -= 1, r = 12), "next" == e && r > 12 && (a += 1, 
            r = 1);
            var n = this.calEmptyGrid(a, r), i = this.calDays(a, r);
            this.setData({
                currYear: a,
                currMonth: r,
                emptyGrids: n,
                days: i
            });
        },
        handleSelectDate: function(t) {
            var e = t.target.dataset.selected, a = [ e[0], e[1], e[2] ];
            this.setData({
                selected: a
            });
            var r = this.calDays(e[0], e[1]);
            this.setData({
                currYear: e[0],
                currMonth: e[1],
                days: r
            });
        },
        handleDatePickerChange: function(e) {
            var a = e.detail.value.split("-"), r = t(a, 2), n = r[0], i = r[1];
            n = parseInt(n), i = parseInt(i), this.setData({
                currYear: n,
                currMonth: i
            });
            var s = this.calEmptyGrid(n, i), l = this.calDays(n, i);
            this.setData({
                emptyGrids: s,
                days: l
            });
        },
        handleTimePickerChange: function(t) {
            var e = t.detail.value;
            this.setData({
                time: e
            });
        },
        handleReset: function(t) {
            this.setData({
                selected: [],
                time: ""
            });
            var e = this.calDays(this.data.currYear, this.data.currMonth);
            this.setData({
                days: e
            }), this.triggerEvent("onselectdate", {});
        },
        init: function() {
            var t = this.data.date, n = this.isDate(t) ? new Date(t) : a, i = n.getFullYear(), s = n.getMonth() + 1, l = n.getDate(), c = n.getDay(), h = (0, 
            e.formatTime)(n, "hh:mm"), u = [ i, s, l ];
            this.setData({
                currYear: i,
                currMonth: s,
                dayInWeek: c,
                dayInMonth: l,
                week: r,
                time: h,
                selected: u
            });
            var d = this.calEmptyGrid(i, s), o = this.calDays(i, s);
            this.setData({
                emptyGrids: d,
                days: o
            });
        },
        handleChooseToday: function() {
            this.setData({
                date: a.toString()
            }), this.init();
        },
        handleConfirm: function(t) {
            var a = this.data, r = a.selected, n = a.enableTime;
            if (r && r.length > 0) {
                var i = r.join("/") + " " + this.data.time, s = (0, e.formatTime)(new Date(i), n ? "yyyy-MM-dd hh:mm" : "yyyy-MM-dd");
                this.triggerEvent("onselectdate", {
                    date: s
                });
            }
        }
    }
});