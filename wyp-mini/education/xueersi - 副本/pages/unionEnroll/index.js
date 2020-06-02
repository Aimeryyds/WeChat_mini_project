function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function s(n, o) {
                try {
                    var r = t[n](o), i = r.value;
                } catch (e) {
                    return void a(e);
                }
                if (!r.done) return Promise.resolve(i).then(function(e) {
                    s("next", e);
                }, function(e) {
                    s("throw", e);
                });
                e(i);
            }
            return s("next");
        });
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

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
    }
    return e;
}, _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _filterNav = require("./../../components/unionEnroll/filterNav.js"), _filterNav2 = _interopRequireDefault(_filterNav), _bottomCart = require("./../../components/unionEnroll/bottomCart.js"), _bottomCart2 = _interopRequireDefault(_bottomCart), _countDown = require("./../../components/unionEnroll/countDown.js"), _countDown2 = _interopRequireDefault(_countDown), _login = require("./../../components/Commons/login.js"), _login2 = _interopRequireDefault(_login), _specialState = require("./../../components/unionEnroll/specialState.js"), _specialState2 = _interopRequireDefault(_specialState), _courseInfo = require("./../../components/Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _index = require("./../../components/DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _global = require("./../../common/util/global.js"), _turn = require("./../../components/TurnAway/turn.js"), _turn2 = _interopRequireDefault(_turn), _acSheet = require("./../../components/Commons/acSheet.js"), _acSheet2 = _interopRequireDefault(_acSheet), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), app = getApp(), unionEnroll = function(e) {
    function t() {
        var e, a, s, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, r = Array(o), i = 0; i < o; i++) r[i] = arguments[i];
        return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        s.data = {
            initFlag: !1,
            scene: "",
            navFixed: !1,
            stuInfo: {
                area_code: "",
                stu_id: ""
            },
            curCourseIndex: 0,
            course: {},
            headImgError: !1,
            hasHeadImg: !0,
            activityStatus: "",
            activityInfo: null,
            countDown: 0,
            cityMatch: !0,
            isFinished: !1,
            queryParams: {
                areaCode: "",
                pageIndex: 1,
                pageSize: 10,
                activityId: ""
            },
            hasMore: !0,
            noList: !1,
            courseList: [],
            splitCourseList: [],
            navInfo: {},
            priceInfo: {},
            cartList: [],
            isLogin: !1,
            classTypeObj: {
                4: "面授",
                2: "双师",
                1: "在线"
            },
            isDown: !1,
            systemInfo: "",
            sumRegistresult: 1,
            claId: "",
            willChangeClass: [],
            nowReadClass: [],
            changeValue: !0,
            regId: "",
            changeCourse: !1,
            queryKey: "",
            tutorDisable: !0,
            registInfo: {},
            teacherList: [],
            describeValue: ""
        }, s.$repeat = {
            courseList: {
                com: "Login",
                props: "courseInfo.sync"
            }
        }, s.$props = {
            CourseInfo: {
                "v-bind:courseInfo.sync": {
                    value: "item",
                    type: "item",
                    for: "courseList",
                    item: "item",
                    index: "index",
                    key: "item.classId"
                }
            },
            Login: {
                "v-bind:isShow.sync": {
                    value: "isLogin",
                    for: "courseList",
                    item: "item",
                    index: "index",
                    key: "item.classId"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "courseList",
                    item: "item",
                    index: "index",
                    key: "item.classId"
                }
            },
            FilterNav: {
                "xmlns:v-bind": "",
                "v-bind:navInfo.sync": "navInfo",
                "v-bind:navFixed.sync": "navFixed",
                "v-bind:hasHeadImg.sync": "hasHeadImg",
                "v-bind:courseCount.sync": "courseCount",
                bindgetSubjectAndType: "getSubjectAndType",
                bindfilterCourseList: "filterCourseList"
            },
            BottomCart: {
                "v-bind:priceInfo.sync": "priceInfo",
                "v-bind:cartList.sync": "cartList",
                "v-bind:isLogin.sync": "isLogin"
            },
            CountDown: {
                bindcountFinishCb: "countFinishCb",
                "v-bind:time.sync": "countDown"
            },
            SpecialState: {
                "v-bind:describe.sync": "describeValue"
            },
            appmask: {
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo"
            },
            turnclass: {
                "v-bind:visible.sync": "changeValue",
                "v-bind:old_data.sync": "nowReadClass",
                "v-bind:new_data.sync": "willChangeClass",
                "v-bind:change_course.sync": "changeCourse"
            },
            TalAcSheet: {
                class: "action-sheet",
                "v-bind:teacherList.sync": "teacherList",
                "v-bind:tutorDisable.sync": "tutorDisable"
            }
        }, s.$events = {
            Login: {
                "v-on:loginCallback": "loginCallback"
            },
            turnclass: {
                "v-on:submitFn": "getChangeClass"
            },
            TalAcSheet: {
                "v-on:chooseTutorEV": "chooseTutorEV"
            }
        }, s.components = {
            CourseInfo: _courseInfo2.default,
            FilterNav: _filterNav2.default,
            BottomCart: _bottomCart2.default,
            CountDown: _countDown2.default,
            SpecialState: _specialState2.default,
            Login: _login2.default,
            appmask: _index2.default,
            turnclass: _turn2.default,
            taltoast: _toast2.default,
            TalAcSheet: _acSheet2.default
        }, s.computed = {
            courseCount: function() {
                return this.courseList.length;
            },
            describeValue: function() {
                var e = "";
                return this.isFinished ? e = "抱歉来晚一步，活动已结束" : this.cityMatch || (e = "抱歉您所在的城市暂未开通该活动"), 
                e;
            }
        }, s.events = {
            filterCourseList: function(e) {
                this.courseList = [], this.queryParams.pageIndex = 1, this.queryParams = Object.assign(this.queryParams, e), 
                this.getCourseList();
            },
            getSubjectAndType: function(e, t) {
                var a = this, s = _path2.default.subjectAndType, n = Object.assign(e, {
                    scene: this.scene
                });
                return wx.showLoading({
                    mask: !0
                }), new Promise(function(e) {
                    (0, _common.axios)({
                        url: s,
                        data: n
                    }).then(function(s) {
                        var n = s.data, o = n.data;
                        n && o && 0 === n.error_code ? (o.class_type = o.class_type.map(function(e) {
                            return {
                                text: a.classTypeObj[e],
                                classType: e
                            };
                        }), 0 === t && (a.navInfo.subject = o.subject, a.navInfo.class_type = o.class_type), 
                        1 === t && (a.navInfo.class_type = o.class_type), a.$apply(), a.$broadcast("getCourseList", t), 
                        e(!0)) : (wx.showToast({
                            title: "" + n.error_msg,
                            icon: "none",
                            duration: 1e3
                        }), e(!1)), wx.hideLoading();
                    });
                });
            },
            countFinishCb: function() {
                this.countDown = 0, this.loadData();
            }
        }, s.methods = {
            chooseTutorEV: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.$invoke("TalAcSheet", "hideLayer"), this.registClassInfo(this.course), 
                            this.willChangeClass[0] = this.registInfo, this.claId = t, e.next = 6, this.preTime();

                          case 6:
                            a = e.sent, a && this.getRegist();

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            getChangeClass: function() {
                this.changeValue = !0, this.$invoke("taltoast", "show", {
                    message: "正在转班中...",
                    duration: 2e3
                });
                var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclassverify, s = {
                    area_code: t.area_code,
                    stu_id: t.stu_id,
                    regist_id: this.regId,
                    target_class_id: this.willChangeClass[0].cla_id || this.willChangeClass[0].class_id,
                    source_class_id: this.nowReadClass[0].cla_id,
                    change_class_type: "0"
                }, n = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, s, n)) && (0, _common.axios)({
                    url: a,
                    data: s,
                    header: n
                }).then(function(t) {
                    var a = t.data;
                    if (a && 0 === a.error_code) return void e.changeClass();
                    e.$invoke("taltoast", "show", {
                        message: a.error_msg || "转班失败",
                        duration: 2e3
                    });
                });
            },
            addToCart: function() {
                function e(e, a) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
                    var s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (console.log(this, "//////////"), 1 !== t.registered && 0 !== t.surplusPersons) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            if (s = wx.getStorageSync("user-token")) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", this.methods.loginCallback());

                          case 6:
                            return this.course = t, this.curCourseIndex = a, e.next = 10, this.register();

                          case 10:
                            return e.next = 12, this.getCartList();

                          case 12:
                            app.sensors.track("dkact_button", {
                                button_name: "加入购课单（报名）",
                                cla_id: t.classId,
                                event_name: "打开活动---多科联报活动"
                            });

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            onPageScroll: function(e) {
                this.hasHeadImg && (e.scrollTop >= 189 ? this.navFixed = !0 : this.navFixed = !1, 
                this.$apply());
            },
            handleImgLoadError: function() {
                this.headImgError = !0;
            },
            goClassInfo: function(e) {
                app.sensors.track("dkact_button", {
                    button_name: "课程卡片",
                    cla_id: e.classId,
                    event_name: "打开活动---多科联报活动"
                });
                var t = this.stuInfo.area_code, a = "";
                "1" === e.classType ? a = "/pages/classlist/classdetail/online?classId=" + e.classId + "&courseId=" + e.courseId + "&areaCode=" + t + "&route=classlist" : "4" === e.classType ? a = "/pages/classlist/classdetail/offline?classId=" + e.classId + "&areaCode=" + t + "&route=classlist" : "2" === e.classType && (a = "/pages/classlist/classdetail/double?classId=" + e.classId + "&areaCode=" + t + "&route=classlist"), 
                wx.navigateTo({
                    url: a
                });
            },
            loginCallback: function() {
                var e = wx.getStorageSync("user-token");
                if (console.log("........>>>>>>", e, "hhh"), !e) return wx.setStorageSync("pagePath", {
                    share: !1,
                    url: "unionEnroll"
                }), void wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone",
                    success: function() {}
                });
                wx.getStorageSync("userInfoStatus").area_code !== this.activityInfo.area_code && wx.navigateTo({
                    url: "/pages/classlist/classlist?filter=" + JSON.stringify({
                        area_code: this.activityInfo.area_code
                    }) + "&toSelect=" + !0
                });
            }
        }, n = a, _possibleConstructorReturn(s, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "registClassInfo",
        value: function(e) {
            var t = this.registInfo;
            t.cla_id = e.classId, t.cla_name = e.className, t.cla_start_date = e.startDate, 
            t.cla_end_date = e.endDate, t.cla_classtime_names = e.classtimeNames, t.cla_area_name = e.areaName, 
            t.cla_venue_name = e.venueName, t.cla_teacher_names = e.teachers && e.teachers[0].teacherName || "待定", 
            t.cla_tutor_real_name = e.tutors && e.tutors[0].tutorSysName || "待定", t.cla_class_type = Number(e.classType), 
            this.$apply();
        }
    }, {
        key: "getTutor",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, n = this, o = _path2.default.getonlineidresult, r = {
                area_code: this.stuInfo.area_code || wx.getStorageSync("userInfoStatus").area_code,
                course_id: this.course.courseId
            }, i = {
                timestamp: s || ""
            };
            (0, _global.isHaveObjectValue)(r) && (0, _common.axios)({
                url: o,
                data: r,
                header: i
            }).then(function(t) {
                var a = t.data, s = t.header || {};
                if (a && a.data && 0 === a.error_code) {
                    var o = a.data;
                    return o = o.map(function(e) {
                        return _extends({}, e, {
                            checked: !1
                        });
                    }), e.teacherList = o || [], e.$invoke("TalAcSheet", "showLayer"), e.$invoke("taltoast", "hide"), 
                    void e.$apply();
                }
                wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: a.error_msg,
                    success: function(e) {
                        e.cancel && n.getTutor({
                            timestamp: s.timestamp || ""
                        });
                    }
                });
            });
        }
    }, {
        key: "onShow",
        value: function(e) {
            this.initFlag || this.loadData();
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, s, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("optoptionion", t), "scene" in t && (_wepy2.default.$instance.globalData.scene = t.scene), 
                        console.log("option", _wepy2.default.$instance.globalData), this.initFlag = !0, 
                        this.scene = t.scene || _wepy2.default.$instance.globalData.scene, e.next = 7, this.init();

                      case 7:
                        a = wx.getStorageSync("userInfoStatus"), s = a.stu_id, n = a.area_code, this.stuInfo = {
                            stu_id: s,
                            area_code: n
                        }, this.loadData(), this.initFlag = !1;

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("1"), e.next = 3, this.getPromotionInfo();

                      case 3:
                        if (t = e.sent, console.log("2", t), !t) {
                            e.next = 12;
                            break;
                        }
                        if (this.queryParams.areaCode = this.activityInfo.area_code, this.queryParams.activityId = this.activityInfo.promotion_id, 
                        this.getGradeList(), !wx.getStorageSync("user-token")) {
                            e.next = 12;
                            break;
                        }
                        return e.next = 12, this.getCartList();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "init",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.$instance.globalData.usersFunc();

                      case 2:
                        t = e.sent, console.log(t), a = wx.getStorageSync("unid"), a || (this.isLogin = !0, 
                        this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "pageViewLog",
        value: function(e) {
            app.sensors.track("dkact_page", {
                page_name: e,
                event_name: "打开活动---多科联报活动"
            });
        }
    }, {
        key: "getPromotionInfo",
        value: function() {
            var e = this;
            wx.showLoading({
                mask: !0
            });
            var t = _path2.default.promotionInfo, a = {
                scene: this.scene
            };
            return new Promise(function(s) {
                (0, _common.axios)({
                    url: t,
                    data: a
                }).then(function(t) {
                    var a = t.data;
                    wx.hideLoading(), a && a.data && 0 === a.error_code ? (e.activityStatus = a.data.promotion_status, 
                    e.activityInfo = a.data.promotion_info, wx.setNavigationBarTitle({
                        title: e.activityInfo.promotion_name
                    }), 2 === e.activityStatus ? (e.countDown = e.activityInfo.countdown, e.activityInfo.activity_image_url || (e.hasHeadImg = !1, 
                    e.navFixed = !0), e.isFinished = !1, e.countDown > 0 ? (e.pageViewLog("活动倒计时页"), 
                    s(!1)) : (e.pageViewLog("活动主页"), s(!0))) : 1 === e.activityStatus ? (e.isFinished = !1, 
                    s(!1)) : 3 !== e.activityStatus && 4 !== e.activityStatus || (e.isFinished = !0, 
                    e.pageViewLog(3 === e.activityStatus ? "暂未开通活动页面" : "活动已结束页"), s(!1)), e.$apply()) : (wx.showToast({
                        title: "" + a.error_msg,
                        icon: "none",
                        duration: 1e3
                    }), s(!1));
                });
            });
        }
    }, {
        key: "getGradeList",
        value: function() {
            var e = this;
            this.navInfo = {}, this.navFixed = !1, wx.showLoading({
                mask: !0
            });
            var t = _path2.default.gradeList, a = {
                area_code: this.queryParams.areaCode,
                activity_id: this.activityInfo.promotion_id
            };
            (0, _common.axios)({
                url: t,
                data: a
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? (e.navInfo.gradeList = a.data, delete e.navInfo.subject, 
                delete e.navInfo.class_type, e.$apply()) : wx.showToast({
                    title: "" + a.error_msg,
                    icon: "none",
                    duration: 1e3
                }), wx.hideLoading();
            });
        }
    }, {
        key: "viewMoreCourse",
        value: function() {
            this.hasMore ? (this.queryParams.pageIndex++, this.getCourseList(), app.sensors.track("dkact_other_button", {
                button_name: "更多课程",
                event_name: "其他按钮点击—活动主页"
            })) : (app.sensors.track("dkact_other_button", {
                button_name: "查看全部课程",
                event_name: "其他按钮点击—活动主页"
            }), wx.navigateTo({
                url: "/pages/classlist/classlist"
            }));
        }
    }, {
        key: "getCourseList",
        value: function() {
            var e = this;
            wx.showLoading({
                mask: !0
            });
            var t = this.queryParams;
            this.loaded = !1;
            var a = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _common.axios)({
                url: _path2.default.courseList,
                data: t,
                header: a
            }).then(function(a) {
                var s = a.data;
                s && s.data && 0 === s.error_code ? (s.data.rows.forEach(function(t) {
                    t.courseType = e.classTypeObj[t.classType], t.classTime = t.classtimeNames, t.timeArea = t.startDate + " - " + t.endDate, 
                    t.address = "" + t.areaName + t.districtName + t.venueName + "-" + t.classroomName;
                }), 1 === t.pageIndex ? (e.courseList = s.data.rows.splice(0, t.pageSize / 2), e.splitCourseList = s.data.rows) : (e.courseList = e.courseList.concat(e.splitCourseList).concat(s.data.rows), 
                e.splitCourseList = []), e.hasMore = t.pageIndex * t.pageSize < s.data.totalCount || 2 === t.pageIndex, 
                e.courseList.length ? e.noList = !1 : e.noList = !0) : "20125" === s.error_code ? (e.cityMatch = !1, 
                e.pageViewLog("暂未开通活动页面")) : (wx.showToast({
                    title: "" + s.error_msg,
                    icon: "none",
                    duration: 1e3
                }), e.noList = !0), e.$apply(), wx.hideLoading();
            });
        }
    }, {
        key: "getCartPrice",
        value: function() {
            var e = this, t = {
                class_list: this.cartList
            }, a = _path2.default.coursePrice, s = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _common.axios)({
                url: a,
                data: t,
                header: s
            }).then(function(t) {
                var a = t.data, s = a.data;
                a && s && 0 === a.error_code ? (e.priceInfo = s, e.$apply()) : wx.showToast({
                    title: "" + s.error_msg,
                    icon: "none",
                    duration: 1e3
                });
            });
        }
    }, {
        key: "getCartList",
        value: function() {
            var e = this, t = {
                activity_id: this.activityInfo.promotion_id
            }, a = _path2.default.activityCartList, s = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _common.axios)({
                url: a,
                data: t,
                header: s
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? (e.cartList = a.data.list.map(function(e) {
                    return {
                        classId: e.classId,
                        stageNum: e.stagesNum,
                        isAllCourse: e.isAllCourse,
                        registId: e.registId,
                        registStagesId: e.registStagesId
                    };
                }), e.cardCount = a.data.count, e.getCartPrice(), e.$apply()) : wx.showToast({
                    title: "" + info.error_msg,
                    icon: "none",
                    duration: 1e3
                });
            });
        }
    }, {
        key: "register",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("registerregisterregisterregister"), t = this.course, "1" !== t.classType) {
                            e.next = 6;
                            break;
                        }
                        this.getTutor(), e.next = 12;
                        break;

                      case 6:
                        return this.mergeInfo(), console.log("registerregisterregisterregister else"), e.next = 10, 
                        this.preTime();

                      case 10:
                        a = e.sent, a && (this.$invoke("taltoast", "show", {
                            message: "正在报名中...",
                            duration: 2e3
                        }), this.getRegist(t));

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "mergeInfo",
        value: function() {
            wx.removeStorageSync("isAutoPage"), this.registClassInfo(this.course), this.willChangeClass[0] = this.registInfo, 
            this.claId = this.course.classId || "", this.claCourseId = this.course.courseId || "";
        }
    }, {
        key: "getRegist",
        value: function() {
            var e = this, t = this.course, a = _path2.default.regist, s = "1" === t.classType ? this.claId : t.classId, n = {
                class_id: s || wx.getStorageSync("storage-details").applet_cla_id
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, o)) && (this.sumRegistresult = 1, 
            (0, _common.axios)({
                url: a,
                data: n,
                header: o
            }).then(function(t) {
                var a = t.data;
                a && 0 === a.error_code && e.getRegistResult(a.data.request_id);
            }).catch(function(t) {
                e.$invoke("taltoast", "hide"), e.$apply();
            }));
        }
    }, {
        key: "getRegistResult",
        value: function(e) {
            var t = this, a = this.course, s = {
                authorization: wx.getStorageSync("user-token")
            }, n = {
                request_id: e,
                year: a.year,
                grade_id: a.gradeId || "0",
                grade_name: a.gradeName,
                term_id: a.termId || "0",
                term_name: a.termName,
                subject_id: a.subjects[0].subjectId,
                subject_name: a.subjects[0].subjectName,
                class_type: a.classType
            }, o = _path2.default.registresult, r = {};
            this.sumRegistresult >= 5 || (n = _extends({}, n, r), (0, _global.isHaveObjectValue)(_extends({}, n, s)) && (0, 
            _common.axios)({
                url: o,
                data: n,
                header: s
            }).then(function(a) {
                t.interceptResultType(), t.mergeResultErrorCode(a.data, e);
            }).catch(function(e) {
                t.$invoke("taltoast", "hide"), e.code = "9999999999", e.message = "请求接口失败", t.$apply();
            }));
        }
    }, {
        key: "interceptResultType",
        value: function() {
            this.sumRegistresult++, this.$apply();
        }
    }, {
        key: "mergeResultErrorCode",
        value: function() {
            function e(e, a) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
                var s, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return s = {}, s = {
                            0: function() {
                                n.$invoke("taltoast", "show", {
                                    message: "报名成功",
                                    duration: 2e3
                                }), n.courseList[n.curCourseIndex].registered = 1, n.getCartList();
                            },
                            10001: function() {
                                clearTimeout(n.timer), n.timer = setTimeout(function() {
                                    a && n.getRegistResult(a);
                                }, 2e3);
                            },
                            50309: function() {
                                n.processDiagnosis(t);
                            },
                            50305: function() {
                                n.getSameClass();
                            },
                            50303: function() {
                                n.maskdDtaReport("该班级已满班", "您可以前往学而思APP关注该班级获取名额提醒", "满班");
                            },
                            50304: function() {
                                n.$invoke("taltoast", "show", {
                                    message: "年级不匹配",
                                    duration: 2e3
                                }), setTimeout(function() {
                                    wx.navigateTo({
                                        url: "/pages/classlist/classlist"
                                    });
                                }, 1e3);
                            },
                            50311: function() {
                                n.$invoke("taltoast", "show", {
                                    message: "该班级暂不支持报名",
                                    duration: 2e3
                                });
                            },
                            50333: function() {
                                n.$invoke("taltoast", "show", {
                                    message: "学员已报此班级!",
                                    duration: 2e3
                                });
                            },
                            20123: function() {
                                n.$invoke("taltoast", "show", {
                                    message: t.error_msg,
                                    duration: 2e3
                                });
                            },
                            default: function() {
                                n.$invoke("taltoast", "show", {
                                    message: t.error_msg,
                                    duration: 2e3
                                });
                            }
                        }, e.abrupt("return", s[t.error_code] ? s[t.error_code]() : s.default());

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "processDiagnosis",
        value: function(e) {
            var t = e.data;
            t && 0 === t.evaluationCode || 1 !== t.evaluationCode && wx.showToast({
                title: e.errMsg || "报名失败",
                icon: "none",
                duration: 2e3
            });
        }
    }, {
        key: "getSameClass",
        value: function() {
            var e = this, t = this, a = wx.getStorageSync("userInfoStatus"), s = _path2.default.getsamecontinueclass, n = {
                area_code: a.area_code,
                stu_id: a.stu_id,
                cla_id: this.claId
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, o)) && (0, _common.axios)({
                url: s,
                data: n,
                header: o
            }).then(function(a) {
                var s = a.data;
                if (s && s.data && 0 === s.error_code) {
                    var n = s.data.classInfo;
                    if (n.length) {
                        if (t.nowReadClass = n, t.regId = t.nowReadClass[0].reg_id, "2" === t.nowReadClass[0].cla_class_type) t.nowReadClass[0].cla_class_type = 2; else if ("4" === t.nowReadClass[0].cla_class_type) {
                            t.nowReadClass[0].cla_class_type = 4, t.nowReadClass[0].show_teacher_list = [];
                            var o = t.nowReadClass[0].tea_teacher_list;
                            o.forEach(function(e) {
                                t.nowReadClass[0].show_teacher_list.push({
                                    id: e.tea_id,
                                    name: e.tea_teacher_name,
                                    url: e.tea_picture_url
                                });
                            });
                        }
                        e.changeValue = !1, e.nowReadClass = e.nowReadClass, e.$invoke("turnclass", "show");
                    }
                    t.$apply();
                } else t.$invoke("taltoast", "show", {
                    message: s.error_msg || "系统错误",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "changeClass",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclass, s = {
                area_code: t.area_code,
                stu_id: t.stu_id,
                regist_id: this.regId,
                target_class_id: this.willChangeClass[0].cla_id || this.willChangeClass[0].class_id,
                source_class_id: this.nowReadClass[0].cla_id,
                change_type: "ios" === wx.getStorageSync("platform") ? 4 : 3
            }, n = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, s, n)) && (0, _common.axios)({
                url: a,
                data: s,
                header: n
            }).then(function(t) {
                var a = t.data;
                if (a && a.data && 0 === a.error_code) return e.queryKey = a.data.queryKey, e.$apply(), 
                void e.changeClassResult();
                e.$invoke("taltoast", "show", {
                    message: a.data.message || "转班失败",
                    duration: 2e3
                }), e.$apply();
            });
        }
    }, {
        key: "changeClassResult",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclassresult, s = null, n = {
                area_code: t.area_code,
                query_key: this.queryKey,
                regist_id: this.regId
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, o)) && (0, _common.axios)({
                url: a,
                data: n,
                header: o
            }).then(function(t) {
                var a = t.data;
                return a && 0 === a.error_code ? (e.courseList.forEach(function(t, a) {
                    t.classId === e.willChangeClass[0].cla_id && (t.registered = 1), t.classId === e.nowReadClass[0].cla_id && (t.registered = 0);
                }), e.$apply(), void e.$invoke("taltoast", "show", {
                    message: a.data.message || "转班成功",
                    duration: 2e3
                })) : 179999 === a.error_code ? (clearTimeout(s), void (s = setTimeout(function() {
                    e.changeClassResult();
                }, 2e3))) : (e.$invoke("taltoast", "show", {
                    message: a.error_msg || "转班失败，请稍后重试",
                    duration: 2e3
                }), void e.$apply());
            });
        }
    }, {
        key: "preTime",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var a = e, s = wx.getStorageSync("userInfoStatus"), n = _path2.default.getregisttimebyclassid, o = {
                    area_code: s.area_code || "",
                    stu_id: s.stu_id,
                    cla_id: e.claId || wx.getStorageSync("storage-details").applet_cla_id
                }, r = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, o, r)) && (0, _common.axios)({
                    url: n,
                    data: o,
                    header: r
                }).then(function(s) {
                    var n = s.data;
                    if (n && n.data && 0 === n.error_code) {
                        var o = e.computeDate(n.data);
                        t(o);
                    } else a.$invoke("taltoast", "show", {
                        message: n.error_msg || "未设置网报时间",
                        duration: 2e3
                    });
                });
            });
        }
    }, {
        key: "computeDate",
        value: function(e) {
            var t = new Date(e.appPreTime.substring(0, 10)).getTime() + e.appPreTime.substring(11, 19).replace(":", "").replace(":", ""), a = new Date(e.appOldRegistTime.substring(0, 10)).getTime() + e.appOldRegistTime.substring(11, 19).replace(":", "").replace(":", ""), s = new Date(e.serverTime.substring(0, 10)).getTime() + e.serverTime.substring(11, 19).replace(":", "").replace(":", ""), n = this, o = !0;
            return Number(t) <= Number(s) && Number(s) < Number(a) && (n.$invoke("taltoast", "hide"), 
            wx.showModal({
                title: "该平台暂不支持预选",
                content: "您可以前往学而思APP完成预选",
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(e) {
                    e.confirm && (n.isDown = !0, n.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                    n.$apply());
                }
            }), n.$apply(), o = !1), o;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(unionEnroll, "pages/unionEnroll/index"));