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
});

var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var s = t[a];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, a, s) {
        return a && e(t.prototype, a), s && e(t, s), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _courseInfo = require("./../../components/Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _getTimes = require("./../../common/util/getTimes.js"), _getTimes2 = _interopRequireDefault(_getTimes), alreadypaylist = function(e) {
    function t() {
        var e, a, s, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
        return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(n))), 
        s.config = {
            navigationBarTitleText: "已付款",
            enablePullDownRefresh: !1,
            backgroundTextStyle: "dark"
        }, s.$repeat = {}, s.$props = {
            gohomeview: {
                "xmlns:wx": ""
            },
            courseInfo: {
                "xmlns:v-bind": "",
                "v-bind:courseInfo.sync": "item"
            }
        }, s.$events = {}, s.components = {
            "tal-toast": _toast2.default,
            gohomeview: _gohome2.default,
            courseInfo: _courseInfo2.default
        }, s.data = {
            imgDefault: "http://static-xesapi.speiyou.cn/1524642003100.png",
            paidList: [],
            isShare: !1,
            periodInfo: {
                classTime: "2019.08.20",
                startPayTime: "2019.08.20",
                periodName: "春季班上",
                price: 500
            }
        }, s.methods = {
            moreDetail: function(e) {
                var t = this.paidList[e], a = t.classType, s = {
                    1: "/pages/classlist/classdetail/online?classId=" + t.classId + "&courseId=" + t.courseId + "&route=alreadypaylist",
                    4: "/pages/classlist/classdetail/offline?classId=" + t.classId + "&route=alreadypaylist",
                    default: "/pages/classlist/classdetail/double?classId=" + t.classId + "&route=alreadypaylist"
                }, r = s[a] || s.default;
                wx.navigateTo({
                    url: r
                });
            },
            hoveToClass: function() {
                wx.setStorage({
                    key: "webViewUrl",
                    data: "https://mp.weixin.qq.com/s/BQabvuHL9KyoqcPoDmfdAw",
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/banner/banner"
                        });
                    }
                });
            }
        }, r = a, _possibleConstructorReturn(s, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.refresh();
        }
    }, {
        key: "refresh",
        value: function() {
            var e = this, t = _path2.default.paid, a = {
                authorization: wx.getStorageSync("user-token")
            }, s = {
                area_code: wx.getStorageSync("userInfoStatus").area_code || "",
                stu_id: wx.getStorageSync("userInfoStatus").stu_id || "",
                page: "1",
                page_size: "10"
            }, r = null, o = null;
            (0, _common.axios)({
                url: t,
                data: s,
                header: a
            }).then(function(t) {
                if (r = t.data, o = r && r.data && r.data.rows, r && 0 === r.error_code) return e.paidList = o.map(function(e) {
                    return {
                        courseType: e.classType,
                        className: e.className,
                        timeArea: e.startDate + "至" + e.endDate,
                        classTime: e.classTimeNames,
                        address: e.classAreaName + e.classVenueName,
                        teacherList: e.classTeacherNames ? [ {
                            name: e.classTeacherNames
                        } ] : [],
                        tutorList: e.classTutorRealName ? [ {
                            name: e.classTutorRealName
                        } ] : [],
                        lastPayTime: e.lastPayTime,
                        claPrice: e.claPrice,
                        registStagesList: e.registStagesList && e.registStagesList.map(function(e) {
                            return e.endCurriculumTime = (0, _getTimes2.default)(e.endCurriculumTime), e.startCurriculumTime = (0, 
                            _getTimes2.default)(e.startCurriculumTime), e;
                        }),
                        classId: e.classId,
                        courseId: e.courseId,
                        classType: e.classType,
                        strengTutor: e.strengTutor
                    };
                }), e._convertLabel(o), void e.$apply();
                e.$invoke("tal-toast", "show", {
                    message: r.error_msg
                });
            });
        }
    }, {
        key: "_convertLabel",
        value: function(e) {
            e.forEach(function(e) {
                1 === Number(e.classType) ? e.classtypesrc = "https://cdninsight.speiyou.com/1513587561918_course_tab_zaixian.png" : 2 === Number(e.classType) ? e.classtypesrc = "https://cdninsight.speiyou.com/course_tab_double.png" : 4 === Number(e.classType) && (e.classtypesrc = "https://cdninsight.speiyou.com/course_tab_face_to_face.png");
            });
        }
    }, {
        key: "getString",
        value: function(e) {
            var t = /^(http|https)/;
            if (e) {
                if (t.test(e)) return "";
                return e.split(",")[0];
            }
            return "";
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(alreadypaylist, "pages/alreadypay/alreadypaylist"));