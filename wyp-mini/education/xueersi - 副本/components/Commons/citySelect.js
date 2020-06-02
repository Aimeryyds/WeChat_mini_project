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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), CitySelect = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        n.props = {
            cityList: {
                type: Array,
                default: []
            },
            currentCityInfo: {
                type: Object,
                default: {}
            },
            isShow: {
                type: Boolean,
                default: !1
            },
            currentIndex: {
                type: Number,
                default: 0
            },
            currentAreaCode: {
                type: String,
                default: "010"
            }
        }, n.data = {}, n.methods = {
            submit: function(e, t) {
                var r = this;
                this.currentAreaCode = e.local_city, this.$apply(), setTimeout(function() {
                    r.$emit("submit", e), r.$apply();
                }, 400);
            },
            close: function() {
                this.$emit("submit", null);
            },
            selceCity: function(e) {
                var t = this.currentIndex;
                this.currentIndex = e.currentTarget.dataset.index, t !== this.currentIndex && (this.areaIndex = -1), 
                this.$apply();
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = CitySelect;