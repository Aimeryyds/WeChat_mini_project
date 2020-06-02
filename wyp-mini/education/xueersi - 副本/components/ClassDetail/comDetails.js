function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function s(i, n) {
                try {
                    var r = t[i](n), o = r.value;
                } catch (e) {
                    return void a(e);
                }
                if (!r.done) return Promise.resolve(o).then(function(e) {
                    s("next", e);
                }, function(e) {
                    s("throw", e);
                });
                e(o);
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
}), exports.default = void 0;

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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), _index = require("./../Loading/index.js"), _index2 = _interopRequireDefault(_index), _turn = require("./../TurnAway/turn.js"), _turn2 = _interopRequireDefault(_turn), _card = require("./card.js"), _card2 = _interopRequireDefault(_card), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _bottomBar = require("./bottomBar.js"), _bottomBar2 = _interopRequireDefault(_bottomBar), _actionSheet = require("./actionSheet.js"), _actionSheet2 = _interopRequireDefault(_actionSheet), _index3 = require("./../DetailsModule/index.js"), _index4 = _interopRequireDefault(_index3), _gohome = require("./../GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), app = getApp(), comDetails = function(e) {
    function t() {
        var e, a, s, i, n = this;
        _classCallCheck(this, t);
        for (var r = arguments.length, o = Array(r), c = 0; c < r; c++) o[c] = arguments[c];
        return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        s.data = {
            showScore: !0,
            size: "m",
            myScore: 3,
            isBtnStatus: !0,
            pageType: "",
            tea_teacher_name: null,
            teacher: {
                picUrl: "",
                name: ""
            },
            tutor: {
                picUrl: "",
                name: "",
                left: 0
            },
            queryKey: "",
            btnWord: "报名",
            changeCourse: !1,
            tutorDisable: !0,
            teacherList: [],
            isAddCls: !1,
            getDetailsInfo: {},
            imgTestInfo: {},
            isLoading: !1,
            getEvaluationInfo: {},
            tabs: [ "课程表", "课程大纲" ],
            classId: "",
            classInfo: {
                cla_name: "",
                open_time: "",
                class_time: "",
                class_area: "",
                TeacherList: [],
                Futeachers: []
            },
            activity: [],
            detailsType: 1,
            info: {},
            claId: "",
            registId: "",
            regId: "",
            registDisabled: !1,
            areaCode: "",
            isShare: !1,
            curriculums: {},
            changeValue: !0,
            nowReadClass: [],
            willChangeClass: [],
            claCourseId: "",
            registInfo: {},
            mapStatus: ""
        }, s.$repeat = {}, s.$props = {
            DetailCard: {
                "xmlns:v-bind": "",
                "v-bind:lessonType.sync": "pageType",
                "v-bind:classInfo.sync": "classInfo",
                "v-bind:info.sync": "registInfo",
                "v-bind:curriculums.sync": "curriculums",
                "v-bind:isGetMapbtn.sync": "mapStatus",
                "v-bind:isShare.sync": "isShare",
                "v-bind:isBtnStatus.sync": "isBtnStatus",
                "xmlns:v-on": ""
            },
            BottomBar: {
                class: "bottom-bar",
                "v-bind:price.sync": "price",
                "v-bind:info.sync": "registInfo",
                "v-bind:isShare.sync": "isShare",
                "v-bind:isBtnStatus.sync": "isBtnStatus",
                "v-bind:btnWord.sync": "btnWord",
                "v-bind:registDisabled.sync": "registDisabled",
                "v-bind:areaCode.sync": "areaCode"
            },
            GoHomeView: {
                "xmlns:wx": ""
            },
            LoadingView: {
                "v-bind:isLoading.sync": "isLoading"
            },
            actionsheet: {
                class: "action-sheet",
                "v-bind:teacherList.sync": "teacherList",
                "v-bind:willChangeClass.sync": "willChangeClass",
                "v-bind:tutorDisable.sync": "tutorDisable",
                "v-bind:info.sync": "registInfo"
            },
            DetailsModule: {
                "v-bind:activity.sync": "activity",
                "v-bind:imgTestInfo.sync": "imgTestInfo",
                "v-bind:isShare.sync": "isShare",
                "v-bind:detailsType.sync": "detailsType",
                "v-bind:detailsInfo.sync": "getDetailsInfo",
                "v-bind:areaCode.sync": "areaCode",
                "v-bind:evaluationInfo.sync": "getEvaluationInfo"
            },
            turnclass: {
                "v-bind:visible.sync": "changeValue",
                "v-bind:old_data.sync": "nowReadClass",
                "v-bind:new_data.sync": "willChangeClass",
                "v-bind:change_course.sync": "changeCourse"
            }
        }, s.$events = {
            DetailCard: {
                "v-on:teacherTap": "showTeacherAction"
            },
            BottomBar: {
                "v-on:teacherTap": "showTeacherAction"
            },
            turnclass: {
                "v-on:submitFn": "getChangeClass"
            }
        }, s.components = {
            DetailCard: _card2.default,
            BottomBar: _bottomBar2.default,
            GoHomeView: _gohome2.default,
            LoadingView: _index2.default,
            actionsheet: _actionSheet2.default,
            DetailsModule: _index4.default,
            turnclass: _turn2.default,
            taltoast: _toast2.default
        }, s.methods = {
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
                }, i = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, s, i)) && (0, _common.axios)({
                    url: a,
                    data: s,
                    header: i
                }).then(function(t) {
                    var a = t.data;
                    if (a && 0 === a.error_code) return void e.changeClass();
                    e.$invoke("taltoast", "show", {
                        message: a.error_msg || "转班失败",
                        duration: 2e3
                    });
                });
            },
            showTeacherAction: function() {
                var e = wx.getStorageSync("user-token"), t = this;
                if (!e) return void wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone",
                    success: function() {
                        t.loadSetPath({
                            share: t.isShare,
                            url: "detail",
                            clickName: "signup"
                        });
                    }
                });
                this.willChangeClass[0] = this.registInfo, this.getTutor();
            }
        }, s.computed = {}, s.events = {
            "drop-down": function(e) {
                if (e) return void s.getOnlineClassInfo();
                s.getClassInfo();
            },
            "onload-event": function() {
                function e(e, a) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            s.loadStatus(!1), s.normalSats(), s.getDetailType(a), s.mergeCurriculumScene(t), 
                            s.loadSceneInfo(t, a), s.mergeOnlineCurriculumScene(t);

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, n);
                }));
                return e;
            }(),
            "onshow-event": function(e) {
                s.loadStatus(!1), s.getDetailType(e), s.onAutoJump(), s.clearWebViewUrl(), s.decideGradeStatus(), 
                s.cleanPath(), s.perfectUserInfo(e), s.checkMapStatus();
            },
            "admission-diagnosis": function() {
                var e = s;
                s.getClassInfo().then(function(t) {
                    var a = t.data;
                    if (a.evaluation && a.evaluation.url) {
                        var s = a.evaluation.url, i = a.base.clazz.id, n = a.base.classLevel.degree;
                        e.jumpWebView(s, n, i);
                    }
                });
            },
            "video-addClas": function() {
                s.isAddCls = !0;
            },
            "video-removeClas": function() {
                s.isAddCls = !1;
            },
            "get-change-calss-data": function(e) {
                var t = e.now, a = e.will, i = e.boolean, n = e.regId;
                1 !== e.type && (s.willChangeClass = a), s.nowReadClass = t, s.changeValue = i, 
                s.regId = n, s.$invoke("turnclass", "show");
            },
            "get-target-class-id": function(e) {
                s.willChangeClass[0].cla_id = e;
            }
        }, i = a, _possibleConstructorReturn(s, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "changeClass",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclass, s = {
                area_code: t.area_code,
                stu_id: t.stu_id,
                regist_id: this.regId,
                target_class_id: this.willChangeClass[0].cla_id || this.willChangeClass[0].class_id,
                source_class_id: this.nowReadClass[0].cla_id,
                change_type: "ios" === wx.getStorageSync("platform") ? 4 : 3
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, s, i)) && (0, _common.axios)({
                url: a,
                data: s,
                header: i
            }).then(function(t) {
                var a = t.data;
                if (a && 0 === a.error_code) return e.queryKey = a.data && a.data.queryKey, e.$apply(), 
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
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = "", s = _path2.default.changeclassresult, i = null, n = {
                area_code: t.area_code,
                query_key: this.queryKey,
                regist_id: this.regId
            }, r = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, r)) && (0, _common.axios)({
                url: s,
                data: n,
                header: r
            }).then(function(t) {
                var s = t.data;
                return s && 0 === s.error_code ? (e.$invoke("taltoast", "show", {
                    message: s.data.message || "转班成功",
                    duration: 2e3
                }), a = "成功", void wx.navigateTo({
                    url: "/pages/courselist/coursepay"
                })) : 179999 === s.error_code ? (clearTimeout(i), void (i = setTimeout(function() {
                    e.changeClassResult();
                }, 2e3))) : (e.$invoke("taltoast", "show", {
                    message: s.error_msg || "转班失败，请稍后重试",
                    duration: 2e3
                }), a = "失败", e.getReasonData(s.error_code, s.error_msge, a), void e.$apply());
            });
        }
    }, {
        key: "getReasonData",
        value: function(e, t, a) {
            var s = wx.getStorageSync("storage-details"), i = {
                applet_course_sign_up_result: "报名" === a ? "未知" : a,
                applet_course_sign_up_result_id: e,
                applet_course_sign_up_result_detail: t || "报名成功"
            }, n = _extends({}, s, i);
            app.sensors.track("applet_course_sign_up_result", n);
        }
    }, {
        key: "getTutor",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, i = this, n = this.teacherList, r = _path2.default.getonlineidresult, o = {
                area_code: this.registInfo.city_id || this.areaCode || wx.getStorageSync("userInfoStatus").area_code,
                course_id: this.claCourseId
            }, c = {
                timestamp: s || ""
            };
            if (n && n.length) return this.$invoke("actionsheet", "showLayer"), void this.$invoke("taltoast", "hide");
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: r,
                data: o,
                header: c
            }).then(function(t) {
                var a = t.data, s = t.header || {};
                if (a && 0 === a.error_code) {
                    var n = a.data || [];
                    return n = n.map(function(e) {
                        return _extends({}, e, {
                            checked: !1
                        });
                    }), e.teacherList = n || [], e.$invoke("actionsheet", "showLayer"), e.$invoke("taltoast", "hide"), 
                    void e.$apply();
                }
                wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: a.error_msg,
                    success: function(e) {
                        e.cancel && i.getTutor({
                            timestamp: s.timestamp || ""
                        });
                    }
                });
            });
        }
    }, {
        key: "getDetailType",
        value: function(e) {
            this.pageType = e;
        }
    }, {
        key: "loadSceneInfo",
        value: function(e, t) {
            if (e && "classlist" === e.route) return this.areaCode = e.areaCode, this.classId = e.classId, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "share" === e.route) return this.isShare = !0, this.classId = e.classId, 
            this.areaCode = e.areaCode, this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "coursepay" === e.route) return this.classId = e.classId, this.areaCode = e.areaCode, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "pointclasslist" === e.route) return this.classId = e.classId, this.areaCode = e.areaCode, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "activity" === e.route) return this.classId = e.classId, this.areaCode = e.areaCode, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "order" === e.route) return this.classId = e.classId, this.areaCode = e.areaCode, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && "alreadypaylist" === e.route) return this.classId = e.classId, this.areaCode = e.areaCode, 
            this.claCourseId = e.courseId, void this.gettypeLoading(t);
            if (e && e.wechat) return this.isShare = !0, this.areaCode = e.areaCode, this.classId = e.classId, 
            void this.gettypeLoading(t);
            if (e && e.scene) return void this.scanningScene(e, t);
            if (e && e.url) {
                var a = JSON.parse(e.options);
                this.areaCode = a.areaCode, this.classId = a.classId, this.gettypeLoading(t);
            }
        }
    }, {
        key: "gettypeLoading",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (t) {
                if (e && "online" === e) return this.detailsType = 1, void this.getOnlineClassInfo({
                    scene: t
                });
                this.detailsType = 2, this.getClassInfo({
                    scene: t
                });
            } else {
                if (e && "online" === e) return this.detailsType = 1, void this.getOnlineClassInfo();
                this.detailsType = 2, this.getClassInfo();
            }
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, a = void 0 !== t && t, s = e.url, i = void 0 === s ? "home" : s, n = e.mun, r = void 0 === n ? 0 : n, o = e.implement, c = void 0 !== o && o, l = e.clickName, u = void 0 === l ? "" : l;
            wx.setStorageSync("pagePath", {
                share: a,
                url: i,
                mun: r,
                implement: c,
                clickName: u
            });
        }
    }, {
        key: "buryXkdetail",
        value: function(e) {
            var t = 1 === e ? "去登录" : 2 === e ? "开始诊断" : "已有诊断推荐选择班级", a = {
                result: t
            };
            app.sensors.track("xkdetail_test_mini", a);
        }
    }, {
        key: "jumpWebView",
        value: function(e, t, a) {
            var s = this, i = wx.getStorageSync("user-token") || "";
            this.buryXkdetail(2), i && (0, _common.getUtoken)(i).then(function(i) {
                var n = getCurrentPages(), r = n[n.length - 1], o = r.route, c = i && -1 !== e.indexOf("?") ? e + "&utoken=" + i : e + "?utoken=" + i;
                -1 !== c.indexOf("instruction") && (c = i && -1 !== e.indexOf("?") ? e + "&utoken=" + i + "&levelid=" + t + "&classid=" + a + "&h5url=" + o + "&wechat=wx" : e + "?utoken=" + i + "&levelid=" + t + "&classid=" + a + "&h5url=" + o + "&wechat=wx"), 
                wx.setStorage({
                    key: "webViewUrl",
                    data: c,
                    success: function() {
                        s.loadSetPath({
                            share: s.isShare,
                            clickName: ""
                        }), wx.navigateTo({
                            url: "/pages/banner/banner"
                        });
                    }
                });
            });
        }
    }, {
        key: "perfectUserInfo",
        value: function(e) {
            if (e && "online" === e) return void this.getOnlineClassInfo();
            this.getClassInfo();
        }
    }, {
        key: "cleanGradeStatus",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            e.changedGrade = "", wx.setStorageSync("changeGradeState", e);
        }
    }, {
        key: "getMapStatus",
        value: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    var a = t.authSetting["scope.userLocation"];
                    return !0 === a ? (e.mapStatus = 1, void e.$apply()) : !1 === a ? (e.mapStatus = 2, 
                    void e.$apply()) : (e.mapStatus = 0, void e.$apply());
                }
            });
        }
    }, {
        key: "cleanPath",
        value: function() {
            "classDetail" === wx.getStorageSync("entry") && wx.setStorageSync("entry", "");
        }
    }, {
        key: "changeGradeSuccess",
        value: function() {
            var e = this;
            wx.showToast({
                title: "修改成功",
                icon: "success",
                duration: 2e3,
                success: function(t) {
                    e.cleanGradeStatus();
                }
            });
        }
    }, {
        key: "changeGradeFail",
        value: function() {
            var e = this;
            wx.showModal({
                title: "请联系客服电话10108899修改",
                content: "抱歉，您已达到年级修改次数的上限",
                showCancel: !1,
                confirmText: "知道了",
                success: function(t) {
                    t.confirm && e.cleanGradeStatus();
                }
            });
        }
    }, {
        key: "decideGradeStatus",
        value: function() {
            var e = this, t = wx.getStorageSync("changeGradeState");
            if (t.changedGrade && 1 === t.changedGrade) return void e.changeGradeSuccess();
            t.changedGrade && 2 === t.changedGrade && e.changeGradeFail();
        }
    }, {
        key: "clearWebViewUrl",
        value: function() {
            wx.setStorageSync("webViewUrl", "");
        }
    }, {
        key: "onAutoJump",
        value: function() {
            var e = wx.getStorageSync("pagePath");
            if (this.pathInfosFunc(e), e.implement && "signup" === e.clickName) return this.$invoke("BottomBar", "regist"), 
            e.clickName = "", void wx.setStorageSync("pagePath", e);
            e.implement && "tips" === e.clickName && this.$invoke("DetailsModule", "userStatus");
        }
    }, {
        key: "pathInfosFunc",
        value: function(e) {
            var t = getCurrentPages();
            t.length && t.some(function(e) {
                return e && e.route && -1 !== e.route.indexOf("loginRelevant");
            }) && this.isbuttonSats(e.implement);
        }
    }, {
        key: "detailsSensor",
        value: function(e) {
            var t = {
                applet_course_type: e.type,
                applet_cla_id: e.id,
                applet_course_semester: e.termName,
                applet_course_class: e.classLevel,
                applet_course_subject: e.subjectNames,
                applet_course_name: e.className,
                applet_course_price: e.price,
                applet_course_kk_time: e.time,
                applet_course_sk_time: e.attendClassTime,
                applet_course_place: e.attendClassRegion,
                applet_course_teacher: e.mainTeacher,
                applet_course_table: e.tabs,
                applet_browse_detail_from: e.applet_browse_detail_from
            };
            app.sensors.track("applet_browse_detail", t);
            var a = {
                1: "在线",
                2: "双师",
                4: "面授"
            }, s = {
                course_type: a[e.type],
                cla_id: e.id,
                term_name: e.termName,
                term_id: e.termId,
                level_name: e.classLevel,
                level_id: e.levelId,
                subject_name: e.subjectNames,
                subject_id: e.subjectIds,
                label: e.tabs,
                from: e.applet_browse_detail_from
            };
            app.XesAnalyticsMP.view("132-1180", s);
        }
    }, {
        key: "normalSats",
        value: function() {
            var e = wx.getStorageSync("unid");
            this.isBtnStatus = !!e, this.$apply(), this.loadStatus();
        }
    }, {
        key: "isbuttonSats",
        value: function(e) {
            this.isBtnStatus = e;
        }
    }, {
        key: "getClassInfo",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.scene, s = void 0 === a ? "" : a, i = t.timestamp, n = void 0 === i ? "" : i, r = _path2.default.detail, o = {
                area_code: this.areaCode || wx.getStorageSync("userInfoStatus").area_code,
                class_id: this.classId || "",
                stu_id: wx.getStorageSync("userInfoStatus").stu_id || ""
            }, c = {
                authorization: wx.getStorageSync("user-token"),
                timestamp: n || +new Date()
            };
            (0, _global.isHaveObjectValue)(o, "token", "stu_id") && (0, _common.axios)({
                url: r,
                data: o,
                header: c
            }).then(function(t) {
                var a = t.data, i = t.header;
                if (a && 0 === a.error_code) {
                    var n = a.data, r = n.base, o = r.clazz, c = r.serviceCenter, l = r.classLevel, u = r.stageList, d = n.promotion, h = n.imgDetail, m = n.teacher, g = n.evaluation, p = n.tutor, f = n.recrument;
                    e.mergeClassInfo(o, u, m, p, c), e.mergeImgTestInfo(o, h, g, f), e.registClassInfo(o, l), 
                    e.setWebViewUrl(g), e.scanningReportData(s, o.name), e.mergeCurriculums(o, c, m), 
                    e.setDiscountInfo(d), e.setDetailsInfo(o, g, l), e.loadStatus(!0), wx.stopPullDownRefresh();
                } else e.anomalous(a, i);
            });
        }
    }, {
        key: "anomalous",
        value: function(e, t) {
            var a = this;
            wx.showModal({
                title: "提示",
                content: e.error_msg || "请求接口错误",
                cancelText: "确定",
                confirmText: "重试",
                success: function(e) {
                    if (e.confirm) return void a.getClassInfo({
                        timestamp: t.timestamp
                    });
                    e.cancel && wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }
    }, {
        key: "onlineAnomalous",
        value: function(e, t) {
            var a = this;
            wx.showModal({
                title: "提示",
                content: e.error_msg || "请求接口错误",
                cancelText: "确定",
                confirmText: "重试",
                success: function(e) {
                    if (e.confirm) return void a.getOnlineClassInfo({
                        timestamp: t.timestamp
                    });
                    e.cancel && wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }
    }, {
        key: "loadStatus",
        value: function(e) {
            this.isLoading = e, this.$apply();
        }
    }, {
        key: "mergeCurriculums",
        value: function(e, t, a) {
            this.curriculums.type = e.classType, this.curriculums.id = e.id, this.curriculums.termName = e.termName, 
            this.curriculums.classLevel = e.levelName, this.curriculums.subjectNames = e.subjectNames, 
            this.curriculums.className = e.name, this.curriculums.price = e.price, this.curriculums.time = e.classdateName, 
            this.curriculums.attendClassTime = e.classtimeNames, this.curriculums.attendClassRegion = "" + t.districtName + e.venueName, 
            this.curriculums.mainTeacher = a[0].name, this.curriculums.tabs = e.remain, this.curriculums.levelId = e.levelId, 
            this.curriculums.termId = e.termId, this.curriculums.subjectIds = e.subjectIds, 
            this.detailsSensor(this.curriculums), this.$apply();
        }
    }, {
        key: "mergeClassInfo",
        value: function(e, t, a, s, i) {
            wx.stopPullDownRefresh(), this.mergeClazz(e, t, i), this.mergeTeacher(a), this.mergeTutor(s), 
            this.$apply();
        }
    }, {
        key: "mergeTeacher",
        value: function(e) {
            var t = e;
            t.forEach(function(e) {
                e.imgurl = e.pictureUrl;
            }), this.classInfo.tea_teacher_names = t;
        }
    }, {
        key: "mergeTutor",
        value: function(e) {
            this.classInfo.avatar = [ e ], this.classInfo.avatar[0].name = e.name, this.classInfo.avatar[0].url = e.pictureUrl, 
            this.$apply();
        }
    }, {
        key: "mergeImgTestInfo",
        value: function(e, t, a, s) {
            this.imgTestInfo.recrument = s || {}, this.imgTestInfo.detailType = e.classType, 
            this.imgTestInfo.termId = e.termId, this.imgTestInfo.imgDetail = t, this.imgTestInfo.evaluation = a, 
            this.$apply();
        }
    }, {
        key: "registClassInfo",
        value: function(e, t) {
            var a = this.registInfo;
            a.area_code = this.areaCode ? this.areaCode : wx.getStorageSync("userInfoStatus").area_code, 
            a.class_id = e.id, a.stu_id = wx.getStorageSync("userInfoStatus").stu_id, a.token = wx.getStorageSync("user-token") || "", 
            a.request_id = "", a.year = e.year, a.grade_id = e.gradeId, a.grade_name = e.gradeName, 
            a.term_id = e.termId, a.term_name = e.termName, a.subject_id = e.subjectIds, a.subject_name = e.subjectNames, 
            a.cla_class_type = e.classType, a.courseId = e.courseId, a.cla_name = e.name, a.cla_start_date = e.startDate, 
            a.cla_end_date = e.endDate, a.cla_classtime_names = e.classtimeNames, a.cla_area_name = e.areaName, 
            a.cla_venue_name = e.venueName, a.cla_teacher_names = e.teacherNames, a.cla_tutor_real_name = e.tutorRealName, 
            a.degree = t.degree, a.levelId = e.levelId, this.$apply();
        }
    }, {
        key: "setWebViewUrl",
        value: function(e) {
            wx.setStorageSync("webViewUrl", e.url);
        }
    }, {
        key: "scanningReportData",
        value: function(e, t) {
            if (e) {
                var a = _wepy2.default.$instance.globalData.appletInfo;
                a.QR_id = "" + t + e, app.sensors.track("open_applet", a);
            }
        }
    }, {
        key: "mergeCurriculumScene",
        value: function(e) {
            this.curriculums = this.mergeLoadScene(e);
        }
    }, {
        key: "mergeLoadScene",
        value: function(e) {
            var t = {}, a = {
                classlist: "课程列表",
                coursepay: "购课单",
                activity: "更多课程",
                pointclasslist: "精选课",
                share: "转发"
            };
            return t.applet_browse_detail_from = e.route ? t.applet_browse_detail_from = a[e.route] : t.applet_browse_detail_from = "其他", 
            t;
        }
    }, {
        key: "setDiscountInfo",
        value: function(e) {
            this.activity = e, this.$apply();
        }
    }, {
        key: "setDetailsInfo",
        value: function(e, t, a) {
            this.getDetailsInfo = e, this.getDetailsInfo.degree = a.degree, this.getEvaluationInfo = t;
            var s = t.status;
            this.btnWord = s && 2 === s ? "诊断后报名" : "报名", this.$apply();
        }
    }, {
        key: "mergeClazz",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            arguments[2];
            this.classInfo.strengTutor = e.strengTutor, this.classInfo.id = e.id, this.classInfo.cla_quota_num = e.remain, 
            this.classInfo.areaCode = this.areaCode ? this.areaCode : wx.getStorageSync("userInfoStatus").area_code, 
            this.classInfo.cla_name = e.name, this.classInfo.open_time = e.startDate + " 至 " + e.endDate, 
            this.classInfo.class_time = e.classtimeNames, this.classInfo.cla_class_type = e.classType, 
            this.classInfo.cla_price = e.price, this.classInfo.class_area = "" + e.areaName + e.servicecenterName + e.venueName, 
            this.classInfo.venue_id = e.venueId, this.classInfo.class_count = e.classCount, 
            this.classInfo.passed_count = e.passedCount, this.classInfo.actual_price = e.actualPrice, 
            this.classInfo.origin_price = e.originPrice, this.classInfo.promotion_price = e.promotionPrice, 
            this.classInfo.stagesInfo = t.map(function(e) {
                var t = e.stagesName, a = e.stageActualPrice, s = e.startDate, i = e.endDate, n = e.status;
                return {
                    stagesName: t,
                    price: Number(a),
                    startDate: s,
                    disabled: 2 === Number(n),
                    endDate: i
                };
            }), this.$apply();
        }
    }, {
        key: "scanningScene",
        value: function(e, t) {
            var a = this, s = _path2.default.getfilters, i = {
                scene: e.scene
            };
            wx.setStorageSync("scene", e.scene), (0, _global.isHaveObjectValue)(i) && (0, _common.axios)({
                url: s,
                data: i
            }).then(function(s) {
                var i = s.data;
                if (i && i.data && 0 === i.error_code) return a.areaCode = i.data.params.areaCode, 
                a.classId = i.data.params.classId, a.claCourseId = i.data.params.courseId, a.isShare = !0, 
                a.$apply(), void a.gettypeLoading(t, e.scene);
                wx.showToast({
                    title: i.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getOnlineClassInfo",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.scene, s = void 0 === a ? "" : a, i = t.timestamp, n = void 0 === i ? "" : i, r = _path2.default.onlineclass, o = {
                cla_id: this.classId,
                area_code: this.areaCode || wx.getStorageSync("userInfoStatus").area_code
            }, c = {
                authorization: wx.getStorageSync("user-token"),
                timestamp: n || +new Date()
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: r,
                data: o,
                header: c
            }).then(function(t) {
                var a = t.data, i = t.header;
                if (a && 0 === a.error_code) {
                    var n = a.data;
                    return e.mergeOnlineImgTestInfo(a), e.mergeOnlineClassInfo(n), e.mergeOnlineCurriculums(n), 
                    e.mergeOnlineCoupon(a), e.mergeOnlineInfo(n), e.mergeOnlineTutors(n), e.scanningReportData(s, n.classInfoForAppDTO.name), 
                    wx.stopPullDownRefresh(), void e.loadStatus(!0);
                }
                e.onlineAnomalous(a, i);
            });
        }
    }, {
        key: "mergeOnlineImgTestInfo",
        value: function(e) {
            var t = e.data, a = t.classInfoForAppDTO, s = t.onlineCourseForAppDTO, i = t.courseInfo, n = t.recrument, r = {};
            r.courseImgDesc = s.courseImgDescList, this.imgTestInfo.detailType = 1, this.imgTestInfo.termId = a.termId, 
            this.imgTestInfo.courseInfo = i, this.imgTestInfo.moreCourseDetail = r, this.imgTestInfo.recrument = n || {}, 
            this.$apply();
        }
    }, {
        key: "mergeOnlineCurriculums",
        value: function(e) {
            var t = e.classInfoForAppDTO;
            this.curriculums.type = 1, this.curriculums.id = t.id, this.curriculums.termName = t.termName, 
            this.curriculums.classLevel = this.getline(t), this.curriculums.subjectNames = t.subjectNames, 
            this.curriculums.className = t.name, this.curriculums.price = t.price, this.curriculums.time = t.classdateName, 
            this.curriculums.attendClassTime = t.classtimeNames, this.curriculums.attendClassRegion = "", 
            this.curriculums.mainTeacher = t.teacherNames, this.curriculums.tabs = this.getDifference(t), 
            this.curriculums.levelId = t.levelId, this.curriculums.termId = t.termId, this.curriculums.subjectIds = t.subjectIds, 
            this.detailsSensor(this.curriculums), this.$apply();
        }
    }, {
        key: "mergeOnlineClassInfo",
        value: function(e) {
            var t = e.classInfoForAppDTO, a = e.stagesInfo, s = e.teacherForAppDTOList, i = s.majorTeacher, n = s.tutorTeacher, r = wx.getStorageSync("userInfoStatus");
            a = a || [], this.claCourseId = t.courseId, this.classInfo.cla_price = t.price, 
            this.classInfo.cla_class_type = t.classType, this.classInfo.areaCode = this.areaCode || r.area_code, 
            this.classInfo.id = t.id, this.classInfo.courseId = t.courseId, this.classInfo.cla_name = t.name, 
            this.classInfo.open_time = t.startDateStr + " 至 " + t.endDateStr, this.classInfo.class_time = t.classtimeNames, 
            this.classInfo.TeacherList = i, this.classInfo.Futeachers = n, this.classInfo.class_count = t.classCount, 
            this.classInfo.passed_count = t.passedCount, this.classInfo.actual_price = t.actualPrice, 
            this.classInfo.origin_price = t.originPrice, this.classInfo.promotion_price = t.promotionPrice, 
            this.classInfo.stagesInfo = a.map(function(e) {
                var t = e.stagesName, a = e.stageActualPrice, s = e.startDate, i = e.endDate, n = e.status;
                return {
                    stagesName: t,
                    price: Number(a),
                    disabled: 2 === Number(n),
                    startDate: s,
                    endDate: i
                };
            }), this.$apply();
        }
    }, {
        key: "mergeOnlineCurriculumScene",
        value: function(e) {
            this.curriculums = this.mergeLoadScene(e);
        }
    }, {
        key: "mergeOnlineCoupon",
        value: function(e) {
            var t = e.data, a = t.activity;
            this.activity = a, this.$apply();
        }
    }, {
        key: "mergeOnlineInfo",
        value: function(e) {
            var t = e.classInfoForAppDTO, a = e.onlineCourseForAppDTO;
            this.registInfo.cla_name = t.name, this.registInfo.cla_price = t.price, this.registInfo.cla_classtime_names = t.classtimeNames, 
            this.registInfo.cla_class_type = 1, this.registInfo.course_regist_count = a.registCount, 
            this.registInfo.show_teacher_list = [], this.registInfo.show_teacher_list[0] = this.teacher, 
            this.registInfo.cla_start_date = t.startDateStr, this.registInfo.cla_end_date = t.endDateStr, 
            this.registInfo.year = t.year, this.registInfo.grade_id = t.gradeId, this.registInfo.grade_name = t.gradeName, 
            this.registInfo.term_id = t.termId, this.registInfo.term_name = t.termName, this.registInfo.subject_id = t.subjectIds, 
            this.registInfo.subject_name = t.subjectNames, this.registInfo.stu_id = wx.getStorageSync("userInfoStatus").stu_id, 
            this.registInfo.course_id = t.courseId, this.registInfo.city_id = t.cityId, this.registInfo.businessType = t.businessType, 
            this.$apply();
        }
    }, {
        key: "mergeOnlineTutors",
        value: function(e) {
            var t = e.teacherForAppDTOList, a = t.majorTeacher, s = t.tutorTeacher;
            this.tea_teacher_name = a[0].teacherName, this.teacher.name = a[0].teacherName, 
            this.teacher.picUrl = a[0].teacherUrl, this.tutor.name = s[0].teacherName, this.tutor.picUrl = s[0].teacherUrl || "", 
            this.$apply();
        }
    }, {
        key: "getDifference",
        value: function(e) {
            var t = null;
            return 1 === e.cla_class_type ? t : t = e.cla_quota_num && "number" == typeof e.cla_quota_num ? "剩余" + e.cla_quota_num : e.cla_quota_num || "";
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
        key: "getline",
        value: function(e) {
            var t = "";
            return -1 !== e.name.indexOf("年级") ? t = e.name.split("年级")[1].slice(2) : -1 !== e.name.indexOf("组") ? t = e.name.split("组")[1].slice(2) : t;
        }
    }, {
        key: "checkMapStatus",
        value: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    var a = t.authSetting["scope.userLocation"];
                    if ("false" === (a = String(a))) return e.mapStatus = 2, void e.$apply();
                    e.mapStatus = 1, e.$apply();
                }
            });
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = comDetails;