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
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, i, o) {
        return i && t(e.prototype, i), o && t(e, o), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), animation = wx.createAnimation(), TalToast = function(t) {
    function e() {
        var t, i, o, n;
        _classCallCheck(this, e);
        for (var a = arguments.length, r = Array(a), s = 0; s < a; s++) r[s] = arguments[s];
        return i = o = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(r))), 
        o.props = {
            vertical: {
                type: Number,
                default: 40
            }
        }, o.data = {
            toastVisible: !1,
            toastMessage: "默认提示",
            animationData: {},
            timer: null,
            toastTimer: null
        }, n = i, _possibleConstructorReturn(o, n);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "show",
        value: function(t) {
            var e = this, i = t.message, o = t.duration;
            this.toastMessage = i, this.toastVisible = !0, clearTimeout(this.timer), this.timer = setTimeout(function() {
                animation.opacity(1).step(), e.animationData = animation.export(), e.$apply();
            }), this.toast(o);
        }
    }, {
        key: "toast",
        value: function(t) {
            var e = this;
            t = t || 2e3, clearTimeout(this.toastTimer), this.toastTimer = setTimeout(function() {
                e.hide();
            }, t), this.$apply();
        }
    }, {
        key: "hide",
        value: function() {
            var t = this;
            animation.opacity(0).step(), this.animationData = animation.export(), clearTimeout(this.timer), 
            this.timer = setTimeout(function() {
                t.toastVisible = !1, t.$apply();
            }, 500);
        }
    } ]), e;
}(_wepy2.default.component);

exports.default = TalToast;