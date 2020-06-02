function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
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
}), exports.default = void 0;

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), IndexList = function(t) {
    function e() {
        var t, n, r, i;
        _classCallCheck(this, e);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
        r.props = {
            indexData: {
                type: Object
            }
        }, r.data = {
            city: [],
            title: [],
            height: [],
            scrolltop: 0
        }, r.methods = {
            radioChange: function(t, e, n) {
                var r = this, i = t[e];
                this.title.forEach(function(t) {
                    r.indexData[t].forEach(function(t) {
                        t.checked = !1;
                    });
                }), this.indexData[i][n].checked = !0, this.$emit("select", this.indexData[i][n]);
            },
            go: function(t) {
                this.scrolltop = this.height[t];
            }
        }, r.watch = {
            indexData: function() {
                this.height = [], this.changeData();
            }
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "changeData",
        value: function() {
            var t = this, e = Object.keys(this.indexData);
            this.title = e;
            var n = 0;
            e.forEach(function(e, r) {
                var i = t.indexData[e].length;
                n = n + 51 * i + 22, t.height.push(n);
            }), this.height.unshift(0), this.$apply();
        }
    } ]), e;
}(_wepy2.default.component);

exports.default = IndexList;