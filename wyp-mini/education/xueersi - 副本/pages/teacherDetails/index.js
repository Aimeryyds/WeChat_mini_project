function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" != typeof a && "function" != typeof a ? e : a;
}

function _inherits(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, a) {
        for (var t = 0; t < a.length; t++) {
            var r = a[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(a, t, r) {
        return t && e(a.prototype, t), r && e(a, r), a;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _selectTab = require("./../../components/Teacher/selectTab.js"), _selectTab2 = _interopRequireDefault(_selectTab), _intro = require("./../../components/Teacher/intro.js"), _intro2 = _interopRequireDefault(_intro), _appraise = require("./../../components/Teacher/appraise.js"), _appraise2 = _interopRequireDefault(_appraise), _course = require("./../../components/Teacher/course.js"), _course2 = _interopRequireDefault(_course), _common = require("./../../common/util/common.js"), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), app = getApp(), teachers = function(e) {
    function a() {
        var e, t, r, o;
        _classCallCheck(this, a);
        for (var s = arguments.length, i = Array(s), n = 0; n < s; n++) i[n] = arguments[n];
        return t = r = _possibleConstructorReturn(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "教师详情"
        }, r.$repeat = {}, r.$props = {
            selecttab: {
                "xmlns:v-on": "",
                class: "{{menuFixed ? 'fixed' : ''}}"
            },
            intro: {},
            appraise: {
                "xmlns:v-bind": "",
                "v-bind:avgScore.sync": "avgScore",
                "v-bind:totalCount.sync": "appraiseTotalCount",
                "v-bind:evaluateTags.sync": "evaluateTags",
                "v-bind:evaluateList.sync": "evaluateList"
            },
            course: {
                "v-bind:teacherType.sync": "teacherType",
                "v-bind:teacherId.sync": "teacherId"
            }
        }, r.$events = {
            selecttab: {
                "v-on:changeTab": "changeTab"
            },
            appraise: {
                "v-on:tagChange": "filterEvaList"
            }
        }, r.components = {
            selecttab: _selectTab2.default,
            intro: _intro2.default,
            appraise: _appraise2.default,
            course: _course2.default
        }, r.data = {
            teacherPicUrl: "",
            teacherName: "",
            teacherSummary: "",
            teacherTags: [],
            currentIndex: 0,
            teacherId: "",
            teacherType: "",
            areaCode: "",
            tagId: "",
            avgScore: 0,
            appraiseTotalCount: 0,
            evaluateTags: [],
            evaluateList: [],
            empNo: "",
            comData: {},
            classData: {},
            classTotalCount: 0,
            page: 1,
            pageSize: 10,
            classPage: 1,
            classPageSize: 10,
            menuFixed: !1,
            noMoreAppraise: !1,
            noMoreClass: !1,
            timer: null,
            tagDefault: [ {
                desc: "全部",
                id: ""
            }, {
                desc: "最新",
                id: "-1"
            } ]
        }, r.methods = {
            changeTab: function(e) {
                console.log("点击tab", e), this.currentIndex = e, this.sendAnalyticsTab(), 1 === Number(e) && 1 === Number(this.page) ? this.getEvaluData() : 2 === Number(e) && 1 === Number(this.classPage) && this.getClassData();
            },
            filterEvaList: function(e) {
                this.page = 1, this.tagId = e.id, this.noMoreAppraise = !1, this.getData(1);
            },
            loadErrorImg: function() {
                this.teacherPicUrl = "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1584958976012.png";
            }
        }, o = t, _possibleConstructorReturn(r, o);
    }
    return _inherits(a, e), _createClass(a, [ {
        key: "onShow",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "onReachBottom",
        value: function() {
            0 !== this.currentIndex && this.getData(this.currentIndex);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            var a = this;
            clearTimeout(this.timer), this.timer = setTimeout(function() {
                e.scrollTop >= 160 && (a.menuFixed = !0, a.$apply());
            }, 500), e.scrollTop < 160 && (this.menuFixed = !1, this.$apply());
        }
    }, {
        key: "sendAnalyticsTab",
        value: function() {
            var e = {
                0: "teacher",
                1: "tutor",
                2: "teacher"
            }, a = e[this.teacherType], t = {
                0: "介绍",
                1: "评价",
                2: "课程"
            };
            app.XesAnalyticsMP.track("132-1168", {
                button_name: t[this.currentIndex],
                type: a,
                teacherid: this.teacherId
            });
        }
    }, {
        key: "formatScore",
        value: function(e) {
            var a = e / 2;
            return a = a.toFixed(1);
        }
    }, {
        key: "getData",
        value: function(e) {
            0 === Number(e) ? this.getIntroData() : 1 === Number(e) ? this.getEvaluData() : this.getClassData();
        }
    }, {
        key: "getIntroData",
        value: function() {
            var e = this, a = {
                areaCode: this.areaCode,
                id: this.teacherId,
                teacherType: this.teacherType
            };
            (0, _common.axios)({
                url: _path2.default.introduction,
                data: a,
                header: {
                    authorization: wx.getStorageSync("user-token")
                }
            }).then(function(a) {
                var t = a.data;
                if (0 === t.error_code) {
                    var r = t.data;
                    r.teacherType = e.teacherType, r.tea_picture_domain && r.tea_picture_url ? e.teacherPicUrl = r.tea_picture_domain + r.tea_picture_url : e.teacherPicUrl = "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1584958976012.png", 
                    e.teacherName = r.tea_teacher_name, e.teacherSummary = r.teacher_summary, e.empNo = r.emp_no, 
                    e.teacherTags = [], r.tea_graduation_school && e.teacherTags.push(r.tea_graduation_school), 
                    r.tea_school_degree && e.teacherTags.push(r.tea_school_degree), r.teach_age && e.teacherTags.push(r.teach_age), 
                    e.comData = r, e.$broadcast("teacherData", e.comData), e.$apply();
                }
            });
        }
    }, {
        key: "getEvaluData",
        value: function() {
            var e = this;
            if (!this.noMoreAppraise) {
                var a = {
                    areaCode: this.areaCode,
                    pageNum: this.page,
                    pageSize: this.pageSize,
                    teacherType: this.teacherType,
                    tagId: this.tagId
                };
                1 === Number(this.teacherType) ? a.tutorEmpNo = this.empNo : a.teacherId = this.teacherId, 
                (0, _common.axios)({
                    url: _path2.default.evaluation,
                    data: a,
                    header: {
                        authorization: wx.getStorageSync("user-token")
                    }
                }).then(function(a) {
                    var t = a.data;
                    if (0 === t.error_code) {
                        var r = t.data;
                        !e.tagId && r.evaluate_tags.length && (e.evaluateTags = e.tagDefault.concat(r.evaluate_tags)), 
                        e.appraiseTotalCount = r.total_count, e.avgScore = e.formatScore(r.avg_score), r = r.evaluate_list, 
                        r.forEach(function(a) {
                            a.star_num = e.formatScore(a.star_num);
                        }), 1 === e.page ? e.evaluateList = r : e.evaluateList = e.evaluateList.concat(r), 
                        e.evaluateList.length >= e.appraiseTotalCount && 0 !== e.appraiseTotalCount && (e.noMoreAppraise = !0), 
                        e.$broadcast("updateList", e.evalauteList), e.page++, e.$apply();
                    }
                });
            }
        }
    }, {
        key: "getClassData",
        value: function() {
            var e = this;
            if (!this.noMoreClass) {
                var a = {
                    page: String(this.classPage),
                    limit: String(this.classPageSize),
                    areaCode: this.areaCode
                };
                1 === Number(this.teacherType) ? a.tutorTeaId = this.teacherId : a.teaId = this.teacherId, 
                (0, _common.axios)({
                    url: _path2.default.classList,
                    data: a,
                    header: {
                        authorization: wx.getStorageSync("user-token")
                    }
                }).then(function(a) {
                    var t = a.data;
                    if (0 === t.error_code) {
                        var r = t.data.data;
                        e.classTotalCount = r.totalCount, r = r.rows, 1 === Number(e.classPage) ? e.classData = r : e.classData = e.classData.concat(r), 
                        e.classTotalCount <= e.classData.length && 0 !== e.classTotalCount && (e.noMoreClass = !0), 
                        e.classPage++, e.$broadcast("classData", e.classData), e.$apply();
                    }
                });
            }
        }
    }, {
        key: "onLoad",
        value: function(e) {
            if (console.log("进入页面", e), e) {
                this.teacherId = e.id, this.teacherType = e.teacherType;
                var a = wx.getStorageSync("userInfoStatus") || {}, t = wx.getStorageSync("weChatExpress") || {};
                this.areaCode = e.areaCode || a.area_code || t.area_code || "", this.sendAnalytics(e), 
                this.$apply();
            }
            this.getIntroData();
        }
    }, {
        key: "sendAnalytics",
        value: function(e) {
            app.XesAnalyticsMP.view("132-1164", {
                teacherid: e.id,
                op_source: e.opSource
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                path: this.getSharePath(),
                title: "向你推荐学而思培优老师"
            };
        }
    }, {
        key: "getSharePath",
        value: function() {
            return console.log("分享的路径", "/pages/teacherDetails/index?id=" + this.teacherId + "&teacherType=" + this.teacherType + "&areaCode=" + this.areaCode + "&opSource=share"), 
            "/pages/teacherDetails/index?id=" + this.teacherId + "&teacherType=" + this.teacherType + "&areaCode=" + this.areaCode + "&opSource=share";
        }
    } ]), a;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(teachers, "pages/teacherDetails/index"));