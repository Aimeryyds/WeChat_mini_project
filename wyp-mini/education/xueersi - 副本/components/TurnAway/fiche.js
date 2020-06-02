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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), fiches = function(e) {
    function t() {
        var e, o, r, s;
        _classCallCheck(this, t);
        for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
        return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.props = {
            cardInfo: {}
        }, r.data = {
            tip: {
                1: "剩余1",
                2: "剩余2",
                3: "剩余3",
                4: "剩余4",
                5: "剩余5"
            },
            tipColor: {
                1: "case-last",
                2: "case-last",
                3: "case-last",
                4: "case-last",
                5: "case-last",
                "增开": "case-more",
                "热报": "case-hot",
                "已满": "case-full"
            },
            cardData: [],
            classType: {
                2: "双师",
                4: "面授",
                1: "在线"
            },
            area: {
                1: !0,
                2: !1,
                4: !1
            },
            status: {
                able: !1,
                disable: !0
            }
        }, r.methods = {
            goClassInfo: function(e) {
                this.$emit("classInfo", e);
            },
            regist: function(e, t) {
                this.cardInfo[t].regButton = "处理中", this.$emit("regist", e, t), this.$emit("registIndex", t);
            }
        }, s = o, _possibleConstructorReturn(r, s);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = fiches;