var t = function() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
    for (var a = Array(t), i = 0, e = 0; e < n; e++) for (var o = arguments[e], r = 0, s = o.length; r < s; r++, 
    i++) a[i] = o[r];
    return a;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("../common/component"), a = require("./utils"), i = e(require("../toast/toast"));

n.VantComponent({
    props: {
        title: {
            type: String,
            value: "日期选择"
        },
        color: String,
        show: {
            type: Boolean,
            observer: function(t) {
                t && (this.initRect(), this.scrollIntoView());
            }
        },
        formatter: null,
        confirmText: {
            type: String,
            value: "确定"
        },
        rangePrompt: String,
        defaultDate: {
            type: [ Number, Array ],
            observer: function(t) {
                this.setData({
                    currentDate: t
                }), this.scrollIntoView();
            }
        },
        allowSameDay: Boolean,
        confirmDisabledText: String,
        type: {
            type: String,
            value: "single",
            observer: "reset"
        },
        minDate: {
            type: null,
            value: Date.now()
        },
        maxDate: {
            type: null,
            value: new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime()
        },
        position: {
            type: String,
            value: "bottom"
        },
        rowHeight: {
            type: [ Number, String ],
            value: a.ROW_HEIGHT
        },
        round: {
            type: Boolean,
            value: !0
        },
        poppable: {
            type: Boolean,
            value: !0
        },
        showMark: {
            type: Boolean,
            value: !0
        },
        showTitle: {
            type: Boolean,
            value: !0
        },
        showConfirm: {
            type: Boolean,
            value: !0
        },
        showSubtitle: {
            type: Boolean,
            value: !0
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0
        },
        maxRange: {
            type: [ Number, String ],
            value: null
        }
    },
    data: {
        subtitle: "",
        currentDate: null,
        scrollIntoView: ""
    },
    created: function() {
        this.setData({
            currentDate: this.getInitialDate()
        });
    },
    mounted: function() {
        !this.data.show && this.data.poppable || (this.initRect(), this.scrollIntoView());
    },
    methods: {
        reset: function() {
            this.setData({
                currentDate: this.getInitialDate()
            }), this.scrollIntoView();
        },
        initRect: function() {
            var t = this;
            null != this.contentObserver && this.contentObserver.disconnect();
            var e = this.createIntersectionObserver({
                thresholds: [ 0, .1, .9, 1 ],
                observeAll: !0
            });
            this.contentObserver = e, e.relativeTo(".van-calendar__body"), e.observe(".month", function(e) {
                e.boundingClientRect.top <= e.relativeRect.top && t.setData({
                    subtitle: a.formatMonthTitle(e.dataset.date)
                });
            });
        },
        getInitialDate: function() {
            var t = this.data, e = t.type, n = t.defaultDate, i = t.minDate;
            if ("range" === e) {
                var o = n || [], r = o[0], s = o[1];
                return [ r || i, s || a.getNextDay(new Date(i)).getTime() ];
            }
            return "multiple" === e ? [ n || i ] : n || i;
        },
        scrollIntoView: function() {
            var t = this;
            setTimeout(function() {
                var e = t.data, n = e.currentDate, i = e.type, o = e.show, r = e.poppable, s = e.minDate, l = e.maxDate, c = "single" === i ? n : n[0], u = o || !r;
                c && u && a.getMonths(s, l).some(function(e, n) {
                    return 0 === a.compareMonth(e, c) && (t.setData({
                        scrollIntoView: "month" + n
                    }), !0);
                });
            }, 100);
        },
        onOpen: function() {
            this.$emit("open");
        },
        onOpened: function() {
            this.$emit("opened");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClosed: function() {
            this.$emit("closed");
        },
        onClickDay: function(e) {
            var n = e.detail.date, i = this.data, o = i.type, r = i.currentDate, s = i.allowSameDay;
            if ("range" === o) {
                var l = r[0], c = r[1];
                if (l && !c) {
                    var u = a.compareDay(n, l);
                    1 === u ? this.select([ l, n ], !0) : -1 === u ? this.select([ n, null ]) : s && this.select([ n, n ]);
                } else this.select([ n, null ]);
            } else if ("multiple" === o) {
                var h;
                if (r.some(function(t, e) {
                    var i = 0 === a.compareDay(t, n);
                    return i && (h = e), i;
                })) {
                    var m = r.splice(h, 1);
                    this.setData({
                        currentDate: r
                    }), this.unselect(m);
                } else this.select(t(r, [ n ]));
            } else this.select(n, !0);
        },
        unselect: function(t) {
            var e = t[0];
            e && this.$emit("unselect", a.copyDates(e));
        },
        select: function(t, e) {
            !e || "range" !== this.data.type || this.checkRange(t) ? (this.emit(t), e && !this.data.showConfirm && this.onConfirm()) : this.data.showConfirm ? this.emit([ t[0], a.getDayByOffset(t[0], this.data.maxRange - 1) ]) : this.emit(t);
        },
        emit: function(t) {
            var e = function(t) {
                return t instanceof Date ? t.getTime() : t;
            };
            this.setData({
                currentDate: Array.isArray(t) ? t.map(e) : e(t)
            }), this.$emit("select", a.copyDates(t));
        },
        checkRange: function(t) {
            var e = this.data, n = e.maxRange, o = e.rangePrompt;
            return !(n && a.calcDateNum(t) > n) || (i.default({
                context: this,
                message: o || "选择天数不能超过 " + n + " 天"
            }), !1);
        },
        onConfirm: function() {
            var t = this;
            ("range" !== this.data.type || this.checkRange()) && wx.nextTick(function() {
                t.$emit("confirm", a.copyDates(t.data.currentDate));
            });
        }
    }
});