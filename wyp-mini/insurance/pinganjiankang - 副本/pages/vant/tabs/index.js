var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/slicedToArray")), e = require("../common/component"), n = require("../mixins/touch"), i = require("../common/utils");

(0, e.VantComponent)({
    mixins: [ n.touch ],
    classes: [ "nav-class", "tab-class", "tab-active-class", "line-class" ],
    relation: {
        name: "tab",
        type: "descendant",
        current: "tabs",
        linked: function(t) {
            t.index = this.children.length - 1, this.updateTabs();
        },
        unlinked: function() {
            this.children = this.children.map(function(t, e) {
                return t.index = e, t;
            }), this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: "setLine"
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer: function() {
                var t = this;
                this.children.forEach(function(e, n) {
                    return e.updateRender(n === t.data.currentIndex, t);
                });
            }
        },
        swipeable: Boolean,
        lineWidth: {
            type: [ String, Number ],
            value: -1,
            observer: "setLine"
        },
        lineHeight: {
            type: [ String, Number ],
            value: -1,
            observer: "setLine"
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [ String, Number ],
            value: 0,
            observer: function(t) {
                t !== this.getCurrentName() && this.setCurrentIndexByName(t);
            }
        },
        type: {
            type: String,
            value: "line"
        },
        border: {
            type: Boolean,
            value: !0
        },
        ellipsis: {
            type: Boolean,
            value: !0
        },
        duration: {
            type: Number,
            value: .3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4,
            observer: function(t) {
                this.setData({
                    scrollable: this.children.length > t || !this.data.ellipsis
                });
            }
        },
        offsetTop: {
            type: Number,
            value: 0
        },
        lazyRender: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        tabs: [],
        lineStyle: "",
        scrollLeft: 0,
        scrollable: !1,
        trackStyle: "",
        currentIndex: null,
        container: null
    },
    mounted: function() {
        var t = this;
        wx.nextTick(function() {
            t.setLine(!0), t.scrollIntoView();
        });
    },
    methods: {
        updateContainer: function() {
            var t = this;
            this.setData({
                container: function() {
                    return t.createSelectorQuery().select(".van-tabs");
                }
            });
        },
        updateTabs: function() {
            var t = this.children, e = void 0 === t ? [] : t, n = this.data;
            this.setData({
                tabs: e.map(function(t) {
                    return t.data;
                }),
                scrollable: this.children.length > n.swipeThreshold || !n.ellipsis
            }), this.setCurrentIndexByName(this.getCurrentName() || n.active);
        },
        trigger: function(t, e) {
            var n = this.data.currentIndex, r = e || this.children[n];
            (0, i.isDef)(r) && this.$emit(t, {
                index: r.index,
                name: r.getComputedName(),
                title: r.data.title
            });
        },
        onTap: function(t) {
            var e = this, n = t.currentTarget.dataset.index, i = this.children[n];
            i.data.disabled ? this.trigger("disabled", i) : (this.setCurrentIndex(n), wx.nextTick(function() {
                e.trigger("click");
            }));
        },
        setCurrentIndexByName: function(t) {
            var e = this.children, n = (void 0 === e ? [] : e).filter(function(e) {
                return e.getComputedName() === t;
            });
            n.length && this.setCurrentIndex(n[0].index);
        },
        setCurrentIndex: function(t) {
            var e = this, n = this.data, r = this.children, a = void 0 === r ? [] : r;
            if (!(!(0, i.isDef)(t) || t >= a.length || t < 0) && (a.forEach(function(n, i) {
                var r = i === t;
                r === n.data.active && n.inited || n.updateRender(r, e);
            }), t !== n.currentIndex)) {
                var s = null !== n.currentIndex;
                this.setData({
                    currentIndex: t
                }), wx.nextTick(function() {
                    e.setLine(), e.scrollIntoView(), e.updateContainer(), e.trigger("input"), s && e.trigger("change");
                });
            }
        },
        getCurrentName: function() {
            var t = this.children[this.data.currentIndex];
            if (t) return t.getComputedName();
        },
        setLine: function(t) {
            var e = this;
            if ("line" === this.data.type) {
                var n = this.data, r = n.color, a = n.duration, s = n.currentIndex, o = n.lineWidth, c = n.lineHeight;
                this.getRect(".van-tab", !0).then(function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], l = n[s];
                    if (null != l) {
                        var u = -1 !== o ? o : l.width / 2, d = -1 !== c ? "height: ".concat((0, i.addUnit)(c), "; border-radius: ").concat((0, 
                        i.addUnit)(c), ";") : "", h = n.slice(0, s).reduce(function(t, e) {
                            return t + e.width;
                        }, 0);
                        h += (l.width - u) / 2;
                        var v = t ? "" : "transition-duration: ".concat(a, "s; -webkit-transition-duration: ").concat(a, "s;");
                        e.setData({
                            lineStyle: "\n            ".concat(d, "\n            width: ").concat((0, i.addUnit)(u), ";\n            background-color: ").concat(r, ";\n            -webkit-transform: translateX(").concat(h, "px);\n            transform: translateX(").concat(h, "px);\n            ").concat(v, "\n          ")
                        });
                    }
                });
            }
        },
        scrollIntoView: function() {
            var e = this, n = this.data, i = n.currentIndex;
            n.scrollable && Promise.all([ this.getRect(".van-tab", !0), this.getRect(".van-tabs__nav") ]).then(function(n) {
                var r = (0, t.default)(n, 2), a = r[0], s = r[1], o = a[i], c = a.slice(0, i).reduce(function(t, e) {
                    return t + e.width;
                }, 0);
                e.setData({
                    scrollLeft: c - (s.width - o.width) / 2
                });
            });
        },
        onTouchScroll: function(t) {
            this.$emit("scroll", t.detail);
        },
        onTouchStart: function(t) {
            this.data.swipeable && this.touchStart(t);
        },
        onTouchMove: function(t) {
            this.data.swipeable && this.touchMove(t);
        },
        onTouchEnd: function() {
            if (this.data.swipeable) {
                var t = this.data, e = t.tabs, n = t.currentIndex, i = this.direction, r = this.deltaX, a = this.offsetX;
                "horizontal" === i && a >= 50 && (r > 0 && 0 !== n ? this.setCurrentIndex(n - 1) : r < 0 && n !== e.length - 1 && this.setCurrentIndex(n + 1));
            }
        }
    }
});