Component({
    behaviors: [],
    relations: {
        index: {
            type: "parent"
        }
    },
    properties: {
        year: Number,
        month: Number,
        limitDays: Number,
        isEndMonth: Boolean
    },
    data: {},
    methods: {
        isDate: function(e) {
            return null != e && void 0 != e && new Date(e).getDate() == e.substring(e.length - 2);
        },
        isLeapYear: function(e) {
            return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
        },
        calDaysInMonth: function(e, t, a) {
            var n = this.isLeapYear(e), r = new Date().getDate();
            return console.log("day-----------\x3e", r, a, t), 1 == t && n ? a && r <= 29 ? r - 1 : 29 : 1 != t || n ? [ 3, 5, 8, 10 ].includes(t) ? a && r <= 30 ? r - 1 : 30 : a && r <= 31 ? r - 1 : 31 : a && r <= 28 ? r - 1 : 28;
        },
        calDays: function(e, t, a, n, r, s) {
            var i = void 0, o = [], l = new Date(), h = new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime(), u = this.calDaysInMonth(e, t, s);
            n && (i = n + 24 * (a - 1) * 3600 * 1e3);
            for (var d = 0; d < u; d++) {
                var c = new Date(e, t, d + 1).getTime(), y = !1, D = !1, g = "";
                n ? (y = c >= h && c <= i, g = n == c ? "入住" : g, r ? (g = r == c ? "离店" : g, D = c >= n && c <= r) : D = c == n) : y = c >= h;
                var m = {
                    value: d + 1,
                    valid: y,
                    tip: g,
                    selected: D,
                    chooseResult: ""
                };
                o.push(m);
            }
            return o;
        },
        handleSelectDate: function(e) {
            var t = e.currentTarget.dataset.day, a = this.data, n = a.year, r = a.month;
            console.log(n, r, t), this.triggerEvent("clickday", {
                year: n,
                month: r,
                day: t
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        render: function(e, t) {
            var a = this.data, n = a.year, r = a.month, s = a.limitDays, i = a.isEndMonth, o = (new Date(n, r).getUTCDay() + 1) % 7, l = this.calDays(n, r, s, e, t, i), h = (7 - (l.length + o) % 7) % 7;
            this.setData({
                emptyGrids: o,
                days: l,
                emptyAfter: h
            });
        }
    }
});