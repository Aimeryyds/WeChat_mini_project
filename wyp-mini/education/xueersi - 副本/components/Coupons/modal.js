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
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, i, o) {
        return i && e(t.prototype, i), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), CommonCompModal = function(e) {
    function t() {
        var e, i, o, n;
        _classCallCheck(this, t);
        for (var r = arguments.length, a = Array(r), u = 0; u < r; u++) a[u] = arguments[u];
        return i = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.props = {
            modalTitle: {
                type: String,
                default: "标题"
            },
            errorMessage: {
                type: String,
                default: "错误信息",
                twoWay: !0
            },
            btnText: {
                type: String,
                default: "确认"
            },
            btnLoading: {
                type: Boolean,
                default: !1
            }
        }, o.data = {
            visible: !1,
            animationData: {},
            showTimer: {},
            hideTimer: {},
            inputValue: ""
        }, o.methods = {
            hideModal: function() {
                this.hide();
            },
            submit: function() {
                this.$emit("couponSubmit", this.inputValue.trim());
            },
            inputUpdate: function(e) {
                this.inputValue = e.detail.value, this.$apply();
            }
        }, n = i, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "show",
        value: function() {
            var e = this;
            this.visible = !0, this.showTimer && clearTimeout(this.showTimer), this.showTimer = setTimeout(function() {
                var t = wx.createAnimation({
                    duration: 300
                });
                t.opacity(1).step(), e.animationData = t.export(), e.$apply();
            }, 10), this.$apply();
        }
    }, {
        key: "hide",
        value: function() {
            var e = this, t = wx.createAnimation({
                duration: 300
            });
            t.opacity(0).step(), this.animationData = t.export(), this.hideTimer && clearTimeout(this.hideTimer), 
            this.hideTimer = setTimeout(function() {
                e.visible = !1, e.inputValue = "", e.errorMessage = "", e.btnLoading = !1, e.$apply();
            }, 400), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = CommonCompModal;