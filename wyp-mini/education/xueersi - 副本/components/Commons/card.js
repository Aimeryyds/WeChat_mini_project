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
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Card = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.props = {
            cardInfo: {},
            bottomLine: {}
        }, n.data = {
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
                2: "https://cdninsight.speiyou.com/1512539172115_class_shuangshi.png",
                4: "https://cdninsight.speiyou.com/1512539165194_class_mianshou.png",
                1: "https://cdninsight.speiyou.com/1512539182005_class_zaixian.png"
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
        }, n.watch = {}, n.methods = {
            goDetail: function(e) {
                var t = e.tutorId, r = e.teacherId, n = e.accountType, o = e.teacherType, a = t || r;
                !a || 1 !== n && "0" !== o ? wx.navigateTo({
                    url: "/pages/teacherDetails/virtual?id=" + a
                }) : wx.navigateTo({
                    url: "/pages/teacherDetails/index?id=" + a + "&teacherType=" + o + "&opSource=activity_list"
                });
            },
            goClassInfo: function(e) {
                console.log(e), this.$emit("classInfo", e);
            },
            regist: function(e, t) {
                this.cardInfo[t].regButton = "处理中", this.$emit("regist", e, t), this.$emit("registIndex", t);
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getString",
        value: function(e) {
            return e.split(",")[0];
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Card;