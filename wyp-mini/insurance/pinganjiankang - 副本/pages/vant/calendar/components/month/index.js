var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/helpers/slicedToArray")), t = require("../../../common/component"), a = require("../../utils");

(0, t.VantComponent)({
    props: {
        date: {
            type: null,
            observer: "setDays"
        },
        type: {
            type: String,
            observer: "setDays"
        },
        color: String,
        minDate: {
            type: null,
            observer: "setDays"
        },
        maxDate: {
            type: null,
            observer: "setDays"
        },
        showMark: Boolean,
        rowHeight: [ Number, String ],
        formatter: {
            type: null,
            observer: "setDays"
        },
        currentDate: {
            type: [ null, Array ],
            observer: "setDays"
        },
        allowSameDay: Boolean,
        showSubtitle: Boolean,
        showMonthTitle: Boolean
    },
    data: {
        visible: !0,
        days: []
    },
    methods: {
        onClick: function(e) {
            var t = e.currentTarget.dataset.index, a = this.data.days[t];
            "disabled" !== a.type && this.$emit("click", a);
        },
        setDays: function() {
            for (var e = [], t = new Date(this.data.date), r = t.getFullYear(), n = t.getMonth(), i = (0, 
            a.getMonthEndDay)(t.getFullYear(), t.getMonth() + 1), o = 1; o <= i; o++) {
                var s = new Date(r, n, o), l = this.getDayType(s), u = {
                    date: s,
                    type: l,
                    text: o,
                    bottomInfo: this.getBottomInfo(l)
                };
                this.data.formatter && (u = this.data.formatter(u)), e.push(u);
            }
            this.setData({
                days: e
            });
        },
        getMultipleDayType: function(e) {
            var t = this.data.currentDate;
            if (!Array.isArray(t)) return "";
            var r = function(e) {
                return t.some(function(t) {
                    return 0 === (0, a.compareDay)(t, e);
                });
            };
            if (r(e)) {
                var n = (0, a.getPrevDay)(e), i = (0, a.getNextDay)(e), o = r(n), s = r(i);
                return o && s ? "multiple-middle" : o ? "end" : s ? "start" : "multiple-selected";
            }
            return "";
        },
        getRangeDayType: function(t) {
            var r = this.data, n = r.currentDate, i = r.allowSameDay;
            if (Array.isArray(n)) {
                var o = (0, e.default)(n, 2), s = o[0], l = o[1];
                if (s) {
                    var u = (0, a.compareDay)(t, s);
                    if (!l) return 0 === u ? "start" : "";
                    var y = (0, a.compareDay)(t, l);
                    return 0 === u && 0 === y && i ? "start-end" : 0 === u ? "start" : 0 === y ? "end" : u > 0 && y < 0 ? "middle" : void 0;
                }
            }
        },
        getDayType: function(e) {
            var t = this.data, r = t.type, n = t.minDate, i = t.maxDate, o = t.currentDate;
            return (0, a.compareDay)(e, n) < 0 || (0, a.compareDay)(e, i) > 0 ? "disabled" : "single" === r ? 0 === (0, 
            a.compareDay)(e, o) ? "selected" : "" : "multiple" === r ? this.getMultipleDayType(e) : "range" === r ? this.getRangeDayType(e) : void 0;
        },
        getBottomInfo: function(e) {
            if ("range" === this.data.type) {
                if ("start" === e) return "开始";
                if ("end" === e) return "结束";
                if ("start-end" === e) return "开始/结束";
            }
        }
    }
});