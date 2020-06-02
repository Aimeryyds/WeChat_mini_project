var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../../@babel/runtime/helpers/slicedToArray")), n = require("../common/component"), r = require("../common/utils"), u = require("../picker/shared"), i = new Date().getFullYear();

function o(e, t, a) {
    return Math.min(Math.max(e, t), a);
}

function s(e) {
    return "00".concat(e).slice(-2);
}

function l(e) {
    if (e) {
        for (;isNaN(parseInt(e, 10)); ) e = e.slice(1);
        return parseInt(e, 10);
    }
}

function c(e, t) {
    return 32 - new Date(e, t - 1, 32).getDate();
}

var m = function(e, t) {
    return t;
};

(0, n.VantComponent)({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: Object.assign(Object.assign({}, u.pickerProps), {
        value: {
            type: null,
            observer: "updateValue"
        },
        filter: null,
        type: {
            type: String,
            value: "datetime",
            observer: "updateValue"
        },
        showToolbar: {
            type: Boolean,
            value: !0
        },
        formatter: {
            type: null,
            value: m
        },
        minDate: {
            type: Number,
            value: new Date(i - 10, 0, 1).getTime(),
            observer: "updateValue"
        },
        maxDate: {
            type: Number,
            value: new Date(i + 10, 11, 31).getTime(),
            observer: "updateValue"
        },
        minHour: {
            type: Number,
            value: 0,
            observer: "updateValue"
        },
        maxHour: {
            type: Number,
            value: 23,
            observer: "updateValue"
        },
        minMinute: {
            type: Number,
            value: 0,
            observer: "updateValue"
        },
        maxMinute: {
            type: Number,
            value: 59,
            observer: "updateValue"
        }
    }),
    data: {
        innerValue: Date.now(),
        columns: []
    },
    methods: {
        updateValue: function() {
            var e = this, t = this.data, a = this.correctValue(this.data.value);
            a === t.innerValue ? this.updateColumns() : this.updateColumnValue(a).then(function() {
                e.$emit("input", a);
            });
        },
        getPicker: function() {
            if (null == this.picker) {
                this.picker = this.selectComponent(".van-datetime-picker");
                var e = this.picker, t = e.setColumnValues;
                e.setColumnValues = function() {
                    for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                    return t.apply(e, [].concat(n, [ !1 ]));
                };
            }
            return this.picker;
        },
        updateColumns: function() {
            var e = this.data.formatter, t = void 0 === e ? m : e, a = this.getOriginColumns().map(function(e) {
                return {
                    values: e.values.map(function(a) {
                        return t(e.type, a);
                    })
                };
            });
            return this.set({
                columns: a
            });
        },
        getOriginColumns: function() {
            var e = this.data.filter;
            return this.getRanges().map(function(t) {
                var a = t.type, n = t.range, r = function(e, t) {
                    for (var a = -1, n = Array(e < 0 ? 0 : e); ++a < e; ) n[a] = t(a);
                    return n;
                }(n[1] - n[0] + 1, function(e) {
                    var t = n[0] + e;
                    return t = "year" === a ? "".concat(t) : s(t);
                });
                return e && (r = e(a, r)), {
                    type: a,
                    values: r
                };
            });
        },
        getRanges: function() {
            var e = this.data;
            if ("time" === e.type) return [ {
                type: "hour",
                range: [ e.minHour, e.maxHour ]
            }, {
                type: "minute",
                range: [ e.minMinute, e.maxMinute ]
            } ];
            var t = this.getBoundary("max", e.innerValue), a = t.maxYear, n = t.maxDate, r = t.maxMonth, u = t.maxHour, i = t.maxMinute, o = this.getBoundary("min", e.innerValue), s = o.minYear, l = o.minDate, c = [ {
                type: "year",
                range: [ s, a ]
            }, {
                type: "month",
                range: [ o.minMonth, r ]
            }, {
                type: "day",
                range: [ l, n ]
            }, {
                type: "hour",
                range: [ o.minHour, u ]
            }, {
                type: "minute",
                range: [ o.minMinute, i ]
            } ];
            return "date" === e.type && c.splice(3, 2), "year-month" === e.type && c.splice(2, 3), 
            c;
        },
        correctValue: function(e) {
            var t, n = this.data, u = "time" !== n.type;
            if (u && (t = e, !(0, r.isDef)(t) || isNaN(new Date(t).getTime()))) e = n.minDate; else if (!u && !e) {
                var i = n.minHour;
                e = "".concat(s(i), ":00");
            }
            if (!u) {
                var l = e.split(":"), c = (0, a.default)(l, 2), m = c[0], p = c[1];
                return m = s(o(m, n.minHour, n.maxHour)), p = s(o(p, n.minMinute, n.maxMinute)), 
                "".concat(m, ":").concat(p);
            }
            return e = Math.max(e, n.minDate), e = Math.min(e, n.maxDate);
        },
        getBoundary: function(e, a) {
            var n, r = new Date(a), u = new Date(this.data["".concat(e, "Date")]), i = u.getFullYear(), o = 1, s = 1, l = 0, m = 0;
            return "max" === e && (o = 12, s = c(r.getFullYear(), r.getMonth() + 1), l = 23, 
            m = 59), r.getFullYear() === i && (o = u.getMonth() + 1, r.getMonth() + 1 === o && (s = u.getDate(), 
            r.getDate() === s && (l = u.getHours(), r.getHours() === l && (m = u.getMinutes())))), 
            n = {}, (0, t.default)(n, "".concat(e, "Year"), i), (0, t.default)(n, "".concat(e, "Month"), o), 
            (0, t.default)(n, "".concat(e, "Date"), s), (0, t.default)(n, "".concat(e, "Hour"), l), 
            (0, t.default)(n, "".concat(e, "Minute"), m), n;
        },
        onCancel: function() {
            this.$emit("cancel");
        },
        onConfirm: function() {
            this.$emit("confirm", this.data.innerValue);
        },
        onChange: function() {
            var e, t = this, a = this.data, n = this.getPicker();
            if ("time" === a.type) {
                var r = n.getIndexes();
                e = "".concat(+a.columns[0].values[r[0]], ":").concat(+a.columns[1].values[r[1]]);
            } else {
                var u = n.getValues(), i = l(u[0]), o = l(u[1]), s = c(i, o), m = l(u[2]);
                "year-month" === a.type && (m = 1), m = m > s ? s : m;
                var p = 0, h = 0;
                "datetime" === a.type && (p = l(u[3]), h = l(u[4])), e = new Date(i, o - 1, m, p, h);
            }
            e = this.correctValue(e), this.updateColumnValue(e).then(function() {
                t.$emit("input", e), t.$emit("change", n);
            });
        },
        updateColumnValue: function(e) {
            var t = this, a = [], n = this.data, r = n.type, u = n.formatter, i = void 0 === u ? m : u, o = this.getPicker();
            if ("time" === r) {
                var l = e.split(":");
                a = [ i("hour", l[0]), i("minute", l[1]) ];
            } else {
                var c = new Date(e);
                a = [ i("year", "".concat(c.getFullYear())), i("month", s(c.getMonth() + 1)) ], 
                "date" === r && a.push(i("day", s(c.getDate()))), "datetime" === r && a.push(i("day", s(c.getDate())), i("hour", s(c.getHours())), i("minute", s(c.getMinutes())));
            }
            return this.set({
                innerValue: e
            }).then(function() {
                return t.updateColumns();
            }).then(function() {
                return o.setValues(a);
            });
        }
    },
    created: function() {
        var e = this, t = this.correctValue(this.data.value);
        this.updateColumnValue(t).then(function() {
            e.$emit("input", t);
        });
    }
});