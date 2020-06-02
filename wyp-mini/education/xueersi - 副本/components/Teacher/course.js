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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _card = require("./../CourseCard/card.js"), _card2 = _interopRequireDefault(_card), app = getApp(), course = function(e) {
    function t() {
        var e, r, a, s;
        _classCallCheck(this, t);
        for (var o = arguments.length, n = Array(o), c = 0; c < o; c++) n[c] = arguments[c];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(n))), 
        a.props = {
            teacherId: {},
            teacherType: {}
        }, a.$repeat = {}, a.$props = {
            card: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:teacherListNew.sync": "teacherListNew",
                "v-bind:cardInfo.sync": "cardInfo",
                bottomLine: "true",
                "xmlns:v-on": ""
            }
        }, a.$events = {
            card: {
                "v-on:classInfo": "goClassInfo",
                "v-on:registIndex": "registIndex"
            }
        }, a.components = {
            card: _card2.default
        }, a.data = {
            cardInfo: [],
            isShare: !1,
            isGetbtn: !1,
            areaCode: ""
        }, a.events = {
            classData: function(e) {
                this.cardInfo = e;
            }
        }, a.methods = {
            goClassInfo: function(e) {
                var t = this.getAreaCode();
                "1" === String(e.classType) ? wx.navigateTo({
                    url: "/pages/classlist/classdetail/online?classId=" + e.classId + "&courseId=" + e.courseId + "&areaCode=" + t + "&route=classlist"
                }) : "4" === String(e.classType) ? wx.navigateTo({
                    url: "/pages/classlist/classdetail/offline?classId=" + e.classId + "&areaCode=" + t + "&route=classlist"
                }) : "2" === String(e.classType) && wx.navigateTo({
                    url: "/pages/classlist/classdetail/double?classId=" + e.classId + "&areaCode=" + t + "&route=classlist"
                });
                var r = {
                    0: "teacher",
                    1: "tutor",
                    2: "teacher"
                }, a = r[this.teacherType];
                app.XesAnalyticsMP.track("132-1166", {
                    cla_id: e.classId,
                    teacherid: this.teacherId,
                    type: a
                });
            }
        }, s = r, _possibleConstructorReturn(a, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getAreaCode",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus") || {}, t = wx.getStorageSync("weChatExpress") || {};
            return e.area_code || t.area_code || "";
        }
    }, {
        key: "onLoad",
        value: function(e) {
            e && (this.areaCode = e.areaCode, this.$apply());
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = course;