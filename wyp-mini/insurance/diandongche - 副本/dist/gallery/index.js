function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    for (var e = 1; e < arguments.length; e++) if (e % 2) {
        var n = null != arguments[e] ? arguments[e] : {}, o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), o.forEach(function(e) {
            i(t, e, n[e]);
        });
    } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
    return t;
}

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : r(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
    })(t);
}

function i(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, s = t(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), c = (t(require("../../E4EFCB17480303CF8289A3108C01F6C0.js")), 
require("../../90A799B4480303CFF6C1F1B3A571F6C0.js")), a = (i(o = {
    prefixCls: "wux-gallery",
    classNames: "wux-animate--slideInRight",
    indicatorDots: !1,
    indicatorColor: "rgba(0, 0, 0, .3)",
    indicatorActiveColor: "#000000",
    autoplay: !1,
    interval: 5e3,
    duration: 500,
    circular: !1,
    vertical: !1,
    icon: "",
    showDelete: !0,
    allowScale: !0,
    current: 0,
    urls: []
}, "delete", function() {}), i(o, "cancel", function() {}), i(o, "onChange", function() {}), 
i(o, "onTap", function() {
    return !0;
}), o), u = {
    scale: 1,
    offset: [ .5, 3 ]
}, l = function(t) {
    return (0 < arguments.length && void 0 !== t ? t : []).map(function(t) {
        return "object" !== n(t) ? {
            image: t,
            remark: "",
            touch: e({}, u)
        } : e({}, t, {
            touch: e({}, u)
        });
    });
};

(0, s.default)({
    useFunc: !0,
    data: a,
    computed: {
        classes: [ "prefixCls", function(t) {
            return {
                swiper: "".concat(t, "__swiper"),
                item: "".concat(t, "__item"),
                img: "".concat(t, "__img"),
                remark: "".concat(t, "__remark"),
                opr: "".concat(t, "__opr"),
                del: "".concat(t, "__del"),
                icon: "".concat(t, "__icon")
            };
        } ]
    },
    methods: {
        hide: function() {
            this.$$setData({
                in: !1
            }), "function" == typeof this.fns.cancel && this.fns.cancel();
        },
        show: function(t) {
            var n = 0 < arguments.length && void 0 !== t ? t : {}, i = this.$$mergeOptionsAndBindMethods(Object.assign({}, a, n, {
                images: l(n.urls)
            }));
            this.$$setData(e({
                in: !0
            }, i));
        },
        onTap: function(t) {
            if (this.allowItemClick) {
                var e = t.currentTarget.dataset.index;
                !0 === this.fns.onTap(e, this.data.urls) && this.hide();
            }
        },
        onTouchStart: function(t) {
            if (this.allowItemClick = !0, !this.data.allowScale || 1 === (0, c.getPointsNumber)(t) || this.touching) return !1;
            var e = (0, c.getTouchPoints)(t), n = (0, c.getTouchPoints)(t, 1), i = (0, c.getPointsDistance)(e, n);
            this.touching = !1, this.prevDistance = i, this.$$setData({
                transition: "none"
            });
        },
        onTouchMove: function(t) {
            var e = this;
            if (!this.data.allowScale || 1 === (0, c.getPointsNumber)(t) || this.isRendered) return !1;
            var n = (0, c.getTouchPoints)(t), o = (0, c.getTouchPoints)(t, 1), r = (0, c.getPointsDistance)(n, o), s = t.currentTarget.dataset, a = s.touch, u = s.index, l = r - this.prevDistance, f = a.scale + .005 * l;
            if (u !== this.data.current) return !1;
            f <= 1 * a.offset[0] ? f = 1 * a.offset[0] : f >= 1.2 * a.offset[1] && (f = 1.2 * a.offset[1]);
            var h = i({}, "images[".concat(u, "].touch.scale"), f);
            this.touching || (this.touching = !0), this.prevDistance = r, this.allowItemClick = !1, 
            this.isRendered = !0, this.$$setData(h).then(function() {
                return e.isRendered = !1;
            });
        },
        onTouchEnd: function(t) {
            var e, n = this;
            if (!this.data.allowScale || !this.touching) return !1;
            var o = t.currentTarget.dataset, r = o.touch, s = o.index, c = r.scale;
            c <= 1 ? c = 1 : c >= 1.2 * r.offset[1] && (c = r.offset[1]);
            var a = (i(e = {}, "images[".concat(s, "].touch.scale"), c), i(e, "transition", "transform .3s"), 
            e);
            this.touching = !1, this.$$setData(a).then(function() {
                setTimeout(function() {
                    return n.allowItemClick = !0;
                }, 400);
            });
        },
        onDelete: function(t) {
            "function" == typeof this.fns.delete && !0 === this.fns.delete(this.data.current, this.data.urls) && this.hide();
        },
        onChange: function(t) {
            this.$$setData({
                current: t.detail.current
            }), "function" == typeof this.fns.onChange && this.fns.onChange.call(this, t);
        },
        slideTo: function(t, e) {
            var n = this, i = 0 < arguments.length && void 0 !== t ? t : 0, o = 1 < arguments.length && void 0 !== e ? e : 0, r = this.data, s = r.urls, c = r.circular, a = s.length - 1;
            return i < 0 ? i = c ? a : 0 : a < i && (i = c ? 0 : a), 0 < o ? this.$$requestAnimationFrame(function() {
                return n.$$setData({
                    current: i
                });
            }, o) : this.$$setData({
                current: i
            });
        },
        slideNext: function(t) {
            return this.slideTo(this.data.current + 1, t);
        },
        slidePrev: function(t) {
            return this.slideTo(this.data.current - 1, t);
        }
    }
});