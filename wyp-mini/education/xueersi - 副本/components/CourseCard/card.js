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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), cards = function(e) {
    function t() {
        var e, r, o, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, n = Array(s), c = 0; c < s; c++) n[c] = arguments[c];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(n))), 
        o.props = {
            opSource: {},
            cardInfo: {},
            bottomLine: {},
            teacherListNew: {
                type: Array,
                default: null,
                twoWay: !0
            }
        }, o.watch = {
            cardInfo: function(e) {
                e.forEach(function(e, t) {
                    e.originPrice = Number(e.originPrice), e.actualPrice = Number(e.actualPrice), e.promotionPrice && (e.promotionPrice = Number(e.promotionPrice));
                }), this.cardInfo = e;
            }
        }, o.data = {
            isError: "yyyyyyyy",
            DefaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png",
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
                2: {
                    test: "双师",
                    class: "sh-box"
                },
                4: {
                    test: "面授",
                    class: "ms-box"
                },
                1: {
                    test: "在线",
                    class: "zx-box"
                }
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
        }, o.methods = {
            goClassInfo: function(e) {
                this.$emit("classInfo", e);
            },
            ImgError: function(e) {
                this.cardInfo[e] && (this.cardInfo[e].tutors[0].tutorPictureUrl = this.DefaultImg);
            },
            minImgError: function(e, t) {
                this.cardInfo[e] && (this.cardInfo[e].teachers[t].teacherPictureUrl = this.DefaultImg);
            },
            goDetail: function(e, t) {
                var r = e[t].teacherId || e[t].tutorId, o = e[t].accountType, a = e[t].teacherType, s = this.opSource || "list";
                !r || 1 !== o && "0" !== a ? wx.navigateTo({
                    url: "/pages/teacherDetails/virtual?id=" + r
                }) : wx.navigateTo({
                    url: "/pages/teacherDetails/index?id=" + r + "&teacherType=" + a + "&opSource=" + s
                });
            }
        }, a = r, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = cards;