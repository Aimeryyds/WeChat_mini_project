var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/toConsumableArray")), a = e(require("../../../@babel/runtime/helpers/slicedToArray")), n = require("../common/component"), i = require("./utils"), o = e(require("../toast/toast"));

(0, n.VantComponent)({
    props: {
        title: {
            type: String,
            value: "日期选择"
        },
        color: String,
        show: {
            type: Boolean,
            observer: function(e) {
                e && (this.initRect(), this.scrollIntoView());
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
            observer: function(e) {
                this.setData({
                    currentDate: e
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
            value: i.ROW_HEIGHT
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
            var e = this;
            null != this.contentObserver && this.contentObserver.disconnect();
            var t = this.createIntersectionObserver({
                thresholds: [ 0, .1, .9, 1 ],
                observeAll: !0
            });
            this.contentObserver = t, t.relativeTo(".van-calendar__body"), t.observe(".month", function(t) {
                t.boundingClientRect.top <= t.relativeRect.top && e.setData({
                    subtitle: (0, i.formatMonthTitle)(t.dataset.date)
                });
            });
        },
        getInitialDate: function() {
            var e = this.data, t = e.type, n = e.defaultDate, o = e.minDate;
            if ("range" === t) {
                var r = n || [], s = (0, a.default)(r, 2);
                return [ s[0] || o, s[1] || (0, i.getNextDay)(new Date(o)).getTime() ];
            }
            return "multiple" === t ? [ n || o ] : n || o;
        },
        scrollIntoView: function() {
            var e = this;
            setTimeout(function() {
                var t = e.data, a = t.currentDate, n = t.type, o = t.show, r = t.poppable, s = t.minDate, l = t.maxDate, c = "single" === n ? a : a[0];
                !c || !o && r || (0, i.getMonths)(s, l).some(function(t, a) {
                    return 0 === (0, i.compareMonth)(t, c) && (e.setData({
                        scrollIntoView: "month".concat(a)
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
            var n = e.detail.date, o = this.data, r = o.type, s = o.currentDate, l = o.allowSameDay;
            if ("range" === r) {
                var c = (0, a.default)(s, 2), u = c[0], h = c[1];
                if (u && !h) {
                    var m = (0, i.compareDay)(n, u);
                    1 === m ? this.select([ u, n ], !0) : -1 === m ? this.select([ n, null ]) : l && this.select([ n, n ]);
                } else this.select([ n, null ]);
            } else if ("multiple" === r) {
                var p;
                if (s.some(function(e, t) {
                    var a = 0 === (0, i.compareDay)(e, n);
                    return a && (p = t), a;
                })) {
                    var f = s.splice(p, 1);
                    this.setData({
                        currentDate: s
                    }), this.unselect(f);
                } else this.select([].concat((0, t.default)(s), [ n ]));
            } else this.select(n, !0);
        },
        unselect: function(e) {
            var t = e[0];
            t && this.$emit("unselect", (0, i.copyDates)(t));
        },
        select: function(e, t) {
            if (t && "range" === this.data.type && !this.checkRange(e)) return void (this.data.showConfirm ? this.emit([ e[0], (0, 
            i.getDayByOffset)(e[0], this.data.maxRange - 1) ]) : this.emit(e));
            this.emit(e), t && !this.data.showConfirm && this.onConfirm();
        },
        emit: function(e) {
            var t = function(e) {
                return e instanceof Date ? e.getTime() : e;
            };
            this.setData({
                currentDate: Array.isArray(e) ? e.map(t) : t(e)
            }), this.$emit("select", (0, i.copyDates)(e));
        },
        checkRange: function(e) {
            var t = this.data, a = t.maxRange, n = t.rangePrompt;
            return !(a && (0, i.calcDateNum)(e) > a) || ((0, o.default)({
                context: this,
                message: n || "选择天数不能超过 ".concat(a, " 天")
            }), !1);
        },
        onConfirm: function() {
            var e = this;
            ("range" !== this.data.type || this.checkRange()) && wx.nextTick(function() {
                e.$emit("confirm", (0, i.copyDates)(e.data.currentDate));
            });
        }
    }
});