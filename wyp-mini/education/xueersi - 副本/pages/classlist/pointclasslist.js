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
            var o = t[a];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, a, o) {
        return a && e(t.prototype, a), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _card = require("./../../components/CourseCard/card.js"), _card2 = _interopRequireDefault(_card), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), choose = function(e) {
    function t() {
        var e, a, o, s;
        _classCallCheck(this, t);
        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
        return a = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(n))), 
        o.config = {
            navigationBarTitleText: "精选课",
            navigationBarTextStyle: "black",
            navigationBarBackgroundColor: "#fff",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 100,
            backgroundColor: "#eee"
        }, o.$repeat = {}, o.$props = {
            card: {
                "xmlns:v-bind": "",
                "v-bind:cardInfo.sync": "cardInfo",
                bottomLine: "true",
                opSource: "selective_course",
                "xmlns:v-on": ""
            },
            taltoast: {
                class: "toast"
            },
            gohomeview: {
                "xmlns:wx": ""
            }
        }, o.$events = {
            card: {
                "v-on:classInfo": "goClassInfo"
            }
        }, o.components = {
            card: _card2.default,
            taltoast: _toast2.default,
            gohomeview: _gohome2.default
        }, o.data = {
            transparentMask: !0,
            teacherList: [],
            cardInfo: [],
            loadingWord: "已经到底啦",
            filter: {
                subject: "学科",
                subjectId: "",
                term: "学期",
                termId: "",
                level: "班次",
                levelId: "",
                classType: "",
                classTypeId: "",
                classTime: "",
                classTimeId: "",
                classArea: "不限",
                classAreaId: "",
                teacher: "不限",
                teacherId: "",
                tutor: "不限",
                tutorId: "",
                fullClass: 0
            },
            tutorDisabled: !0,
            page: "1",
            bottomLoadShow: !1,
            areaCode: "",
            isShare: !1,
            gradeName: "",
            scene: ""
        }, o.watch = {
            teacherList: function() {
                var e = this;
                this.teacherList.forEach(function(t) {
                    !0 === t.checked && (e.tutorDisabled = !1);
                });
            }
        }, o.methods = {
            goClassInfo: function(e) {
                var t = this.isShare ? this.areaCode : wx.getStorageSync("weChatExpress").area_code;
                "1" == e.classType ? wx.navigateTo({
                    url: "classdetail/online?classId=" + e.classId + "&areaCode=" + t + "&route=pointclasslist"
                }) : "4" == e.classType ? wx.navigateTo({
                    url: "classdetail/offline?classId=" + e.classId + "&areaCode=" + t + "&route=pointclasslist"
                }) : "2" == e.classType && wx.navigateTo({
                    url: "classdetail/double?classId=" + e.classId + "&areaCode=" + t + "&route=pointclasslist"
                });
            }
        }, s = a, _possibleConstructorReturn(o, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShareAppMessage",
        value: function() {
            return {
                path: "pages/classlist/pointclasslist?scene=" + this.scene
            };
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.bottomLoadShow = !0, this.getClassList("more");
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.gradeId && this.getClassList();
        }
    }, {
        key: "getClassList",
        value: function(e) {
            var t = this;
            this.transparentMask = !1, this.loadingWord = "正在加载", e ? this.page++ : this.page = 1;
            var a = _path2.default.selectionclass, o = {
                classIdList: this.filter.classIdList,
                areaCode: this.areaCode,
                page: this.page
            }, s = {
                authorization: wx.getStorageSync("user-token") || ""
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: a,
                data: o,
                header: s
            }).then(function(e) {
                wx.stopPullDownRefresh(), t.transparentMask = !0, t.bottomLoadShow = !1;
                var a = e.data;
                if (0 === a.error_code) {
                    var o = a.data ? a.data : [];
                    o.length < 5 && (t.loadingWord = "已经到底啦", t.$apply()), 1 === t.page && (t.cardInfo = []), 
                    o.forEach(function(e, a) {
                        "已满" === e.cla_quota_num ? e.regButton = "已满" : e.regButton = "报名", t.cardInfo.push(e);
                    });
                }
                t.$apply();
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
    }, {
        key: "scanScene",
        value: function(e) {
            var t = this;
            if (wx.setStorageSync("scene", e.scene), e.scene) {
                this.isShare = !0, this.scene = e.scene;
                var a = _path2.default.getfilters, o = {
                    scene: e.scene
                };
                if (!(0, _global.isHaveObjectValue)(o)) return;
                (0, _common.axios)({
                    url: a,
                    data: o
                }).then(function(e) {
                    if (e && e.data && e.data.data && e.data.data.params) {
                        var a = e.data.data.params;
                        t.areaCode = a.areaCode, t.gradeId = a.gradeId, t.gradeName = a.gradeName, t.filter = a.filter, 
                        t.getClassList();
                    }
                });
            } else wx.stopPullDownRefresh();
        }
    }, {
        key: "onLoad",
        value: function(e) {
            wx.startPullDownRefresh(), this.scanScene(e);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(choose, "pages/classlist/pointclasslist"));