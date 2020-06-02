function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _get = function e(t, r, o) {
    null === t && (t = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (void 0 === n) {
        var i = Object.getPrototypeOf(t);
        return null === i ? void 0 : e(i, r, o);
    }
    if ("value" in n) return n.value;
    var a = n.get;
    if (void 0 !== a) return a.call(o);
}, _native = require("./native.js"), _native2 = _interopRequireDefault(_native), _component2 = require("./component.js"), _component3 = _interopRequireDefault(_component2), _util = require("./util.js"), _util2 = _interopRequireDefault(_util), _class = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.$isComponent = !1, o.$preloadData = {}, o.$prefetchData = {}, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "$init",
        value: function(e, r) {
            this.$parent = r, this.$root = this, r.$wxapp || (r.$wxapp = getApp()), this.$wxapp = r.$wxapp, 
            _get(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "$init", this).call(this, e, this);
        }
    }, {
        key: "onLoad",
        value: function() {
            _get(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onLoad", this).call(this);
        }
    }, {
        key: "$preload",
        value: function(e, t) {
            if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
                var r = void 0;
                for (r in e) this.$preload(r, e[r]);
            } else this.$preloadData[e] = t;
        }
    }, {
        key: "$route",
        value: function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof t) {
                var o = t + "?";
                if (r) {
                    var n = void 0;
                    for (n in r) o += n + "=" + r[n] + "&";
                }
                o = o.substring(0, o.length - 1), t = {
                    url: o
                };
            } else r = _util2.default.$getParams(t.url);
            this.$parent.__route__ || (this.$parent.__route__ = getCurrentPages()[0].__route__, 
            this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__);
            var i = "/" !== this.$parent.__route__[0] ? "/" + this.$parent.__route__ : this.$parent.__route__, a = _util2.default.$resolvePath(i, t.url.split("?")[0]), u = this.$parent.$pages[a];
            if (u && u.onPrefetch) {
                var l = this.$parent.__prevPage__, p = {};
                l && Object.keys(l.$preloadData).length > 0 && (p = l.$preloadData), u.$prefetchData = u.onPrefetch(r, {
                    from: this,
                    preload: p
                });
            }
            return _native2.default[e](t);
        }
    }, {
        key: "$redirect",
        value: function(e, t) {
            return this.$route("redirectTo", e, t);
        }
    }, {
        key: "$navigate",
        value: function(e, t) {
            return this.$route("navigateTo", e, t);
        }
    }, {
        key: "$switch",
        value: function(e) {
            return "string" == typeof e && (e = {
                url: e
            }), _native2.default.switchTab(e);
        }
    }, {
        key: "$back",
        value: function(e) {
            var t = e || {};
            return "number" == typeof t && (t = {
                delta: t
            }), t.delta || (t.delta = 1), _native2.default.navigateBack(t);
        }
    } ]), t;
}(_component3.default);

exports.default = _class;