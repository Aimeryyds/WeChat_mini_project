var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function n(e) {
        if (o[e]) return o[e].exports;
        var r = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    var o = {};
    return n.m = t, n.c = o, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(t, o) {
        if (1 & o && (t = n(t)), 8 & o) return t;
        if (4 & o && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & o && "string" != typeof t) for (var a in t) n.d(r, a, function(e) {
            return t[e];
        }.bind(null, a));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 1);
}([ , function(e, t, n) {
    Component({
        options: {
            multipleSlots: !0,
            addGlobalClass: !0
        },
        properties: {
            title: {
                type: String,
                value: ""
            },
            showCancel: {
                type: Boolean,
                value: !0
            },
            cancelText: {
                type: String,
                value: "取消"
            },
            maskClass: {
                type: String,
                value: ""
            },
            extClass: {
                type: String,
                value: ""
            },
            maskClosable: {
                type: Boolean,
                value: !0
            },
            mask: {
                type: Boolean,
                value: !0
            },
            show: {
                type: Boolean,
                value: !1
            },
            actions: {
                type: Array,
                value: [],
                observer: "_groupChange"
            }
        },
        methods: {
            _groupChange: function(e) {
                e.length > 0 && "string" != typeof e[0] && !(e[0] instanceof Array) && this.setData({
                    actions: [ this.data.actions ]
                });
            },
            buttonTap: function(e) {
                var t = e.currentTarget.dataset, n = t.value, o = t.groupindex, r = t.index;
                this.triggerEvent("actiontap", {
                    value: n,
                    groupindex: o,
                    index: r
                });
            },
            closeActionSheet: function(e) {
                var t = e.currentTarget.dataset.type;
                (this.data.maskClosable || t) && (this.setData({
                    show: !1
                }), this.triggerEvent("close"));
            }
        }
    });
} ]);