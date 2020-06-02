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
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), CountDown = function(e) {
    function t() {
        var e, r, i, o;
        _classCallCheck(this, t);
        for (var n = arguments.length, s = Array(n), u = 0; u < n; u++) s[u] = arguments[u];
        return r = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        i.props = {
            time: {
                type: Number,
                default: 0
            }
        }, i.data = {
            subTime: 0,
            hour: "00",
            min: "00",
            sec: "00",
            Timer: null
        }, i.methods = {}, i.watch = {
            time: function() {
                var e = this;
                this.time > 0 ? (this.subTime = this.time, clearTimeout(this.Timer), this.Timer = setTimeout(function() {
                    e.transferTime(e.subTime);
                }, 1e3), this.$apply()) : clearTimeout(this.Timer);
            }
        }, i.events = {}, o = r, _possibleConstructorReturn(i, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "transferTime",
        value: function(e) {
            var t = this;
            this.hour = this.assembelZero(Math.floor(e / 3600)), e %= 3600, this.min = this.assembelZero(Math.floor(e / 60)), 
            this.sec = this.assembelZero(e %= 60), this.subTime <= 0 ? (this.$apply(), this.$emit("countFinishCb")) : (this.subTime = --this.subTime, 
            this.$apply(), clearTimeout(this.Timer), this.Timer = setTimeout(function() {
                t.transferTime(t.subTime);
            }, 1e3));
        }
    }, {
        key: "assembelZero",
        value: function(e) {
            return e < 10 ? "0" + e : e;
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = CountDown;