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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), ClassDetailCoupon = function(t) {
    function e() {
        var t, o, i, n;
        _classCallCheck(this, e);
        for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return o = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
        i.props = {
            detailsType: {
                type: Number,
                default: 2
            },
            activity: {},
            areaCode: String
        }, i.watch = {}, i.computed = {
            isOnline: function() {
                return 1 !== this.detailsType;
            },
            isDiscount: function() {
                return !!this.activity.length;
            }
        }, i.methods = {
            goActivity: function(t) {
                var e = {
                    activityId: t.promotionId,
                    activityName: t.promotionTypeName,
                    activityContent: t.promotionName,
                    areaCode: this.areaCode
                }, o = "/pages/classlist/activity?activityId=" + e.activityId + "&activityName=" + e.activityName + "&activityContent=" + e.activityContent + "&areaCode=" + e.areaCode;
                wx.navigateTo({
                    url: o
                });
            }
        }, n = o, _possibleConstructorReturn(i, n);
    }
    return _inherits(e, t), e;
}(_wepy2.default.component);

exports.default = ClassDetailCoupon;