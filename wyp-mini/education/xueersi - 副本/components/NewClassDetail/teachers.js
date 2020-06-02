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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), app = getApp(), teachersNew = function(e) {
    function t() {
        var e, r, a, o;
        _classCallCheck(this, t);
        for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.data = {
            teacherAvator: "http://static-xesapi.speiyou.cn/1524642003100.png"
        }, a.components = {}, a.props = {
            teachersList: {
                type: Array,
                default: []
            },
            teachersTutorList: {
                type: Array,
                default: []
            },
            strengTutor: {
                type: Boolean,
                default: !1
            }
        }, a.watch = {}, a.methods = {
            goDetail: function(e) {
                var t = e.teacher_id, r = e.account_type, a = e.teacher_type;
                !t || 1 !== r && "0" !== a ? wx.navigateTo({
                    url: "/pages/teacherDetails/virtual?id=" + t
                }) : wx.navigateTo({
                    url: "/pages/teacherDetails/index?id=" + t + "&teacherType=" + a + "&opSource=newDetail"
                });
                var o = wx.getStorageSync("currentClassDetail") || {};
                app.XesAnalyticsMP.track("132-1348", {
                    cla_id: o.cla_id || "",
                    subject_name: o.subject_name || "",
                    teacherid: t
                });
            },
            imgError: function(e, t) {
                this.teachersList[e] && ("0" === t ? this.teachersList[e].picture_url = this.teacherAvator : this.teachersTutorList[e].picture_url = this.teacherAvator);
            }
        }, o = r, _possibleConstructorReturn(a, o);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = teachersNew;