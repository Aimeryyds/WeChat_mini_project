function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function i(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), r = t(require("../core/view")), s = t(require("./macd")), a = t(require("./kdj")), u = t(require("./rsi")), l = t(require("./rline")), c = function(t) {
    function c(t) {
        e(this, c);
        var i = n(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, t));
        return i.initialize(), i;
    }
    return i(c, r.default), o(c, [ {
        key: "initialize",
        value: function() {
            this.drawBorder();
        }
    }, {
        key: "onlinestart",
        value: function() {
            this.inst.onlinestart();
        }
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            this.inst.onlinefocus(t, e);
        }
    }, {
        key: "onlineend",
        value: function() {
            this.inst.onlineend();
        }
    }, {
        key: "setData",
        value: function(t) {
            var e = this;
            this.data = t;
            var n = this.options.type;
            this.inst && this.inst.clearMA(), (this.inst = function() {
                var t = {
                    dataCtx: e.options.dataCtx,
                    hintCtx: e.options.hintCtx,
                    labels: e.options.labels,
                    bbox: e.options.bbox
                };
                return n === c.const.type.macd ? new s.default(t) : n === c.const.type.kdj ? new a.default(t) : n === c.const.type.rsi ? new u.default(t) : n === c.const.type.dmi ? new DMI(t) : n === c.const.type.rline ? new l.default(t) : void 0;
            }()).setXAxis(this.options.xaxis).setData(t);
        }
    }, {
        key: "setType",
        value: function(t) {
            this.options.type = t;
        }
    }, {
        key: "getType",
        value: function() {
            return this.options.type;
        }
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    } ]), c;
}();

c.const = {
    type: {
        macd: "macd",
        kdj: "kdj",
        rsi: "rsi",
        dmi: "dmi",
        rline: "rline"
    }
}, exports.default = c;