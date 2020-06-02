function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function s(n, i) {
                try {
                    var r = t[n](i), o = r.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _swiperBanner = require("./swiperBanner.js"), _swiperBanner2 = _interopRequireDefault(_swiperBanner), _detailInfo2 = require("./detailInfo.js"), _detailInfo3 = _interopRequireDefault(_detailInfo2), _classPackage = require("./classPackage.js"), _classPackage2 = _interopRequireDefault(_classPackage), _detailFixBar = require("./detailFixBar.js"), _detailFixBar2 = _interopRequireDefault(_detailFixBar), _teachers = require("./teachers.js"), _teachers2 = _interopRequireDefault(_teachers), _actionSheet = require("./../ClassDetail/actionSheet.js"), _actionSheet2 = _interopRequireDefault(_actionSheet), _common = require("./../../common/util/common.js"), _newCommon = require("./../../common/util/newCommon.js"), _global = require("./../../common/util/global.js"), _index = require("./../Loading/index.js"), _index2 = _interopRequireDefault(_index), _turn = require("./../TurnAway/turn.js"), _turn2 = _interopRequireDefault(_turn), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), app = getApp(), newDetails = function(e) {
    function t() {
        var e, a, s, n, i = this;
        _classCallCheck(this, t);
        for (var r = arguments.length, o = Array(r), c = 0; c < r; c++) o[c] = arguments[c];
        return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        s.config = {
            navigationBarTitleText: "课程详情",
            backgroundColor: "#F4F5F6",
            enablePullDownRefresh: !1,
            backgroundTextStyle: "dark"
        }, s.$repeat = {}, s.$props = {
            swiperBanner: {
                "xmlns:v-bind": "",
                "v-bind:bannerInfos.sync": "bannerInfos"
            },
            detailInfo: {
                "v-bind:detailInfo.sync": "detailInfo",
                "v-bind:areaCode.sync": "areaCode",
                "v-bind:featureService.sync": "featureService",
                "v-bind:isGetMapbtn.sync": "mapStatus",
                "v-bind:samePrice.sync": "samePrice"
            },
            classPackage: {
                class: "classPackage",
                "v-bind:curriculumInfo.sync": "curriculumInfo"
            },
            detailFixBar: {
                "v-bind:info.sync": "registInfo",
                "v-bind:isShare.sync": "isShare",
                "v-bind:isBtnStatus.sync": "isBtnStatus",
                "v-bind:btnWord.sync": "btnWord",
                "v-bind:registDisabled.sync": "registDisabled",
                "v-bind:areaCode.sync": "areaCode",
                "v-bind:count.sync": "waitcount",
                "xmlns:v-on": ""
            },
            teachers: {
                "v-bind:teachersList.sync": "classTeachersList",
                "v-bind:teachersTutorList.sync": "teachersTutorList",
                "v-bind:strengTutor.sync": "strengTutor"
            },
            actionsheet: {
                class: "action-sheet",
                "xmlns:v-bind": "",
                "v-bind:teacherList.sync": "teacherList",
                "v-bind:willChangeClass.sync": "willChangeClass",
                "v-bind:tutorDisable.sync": "tutorDisable",
                "v-bind:info.sync": "registInfo"
            },
            LoadingView: {
                "xmlns:v-bind": "",
                "v-bind:isLoading.sync": "isFinishLoading"
            },
            turnclass: {
                "xmlns:v-bind": "",
                "v-bind:visible.sync": "changeValue",
                "v-bind:old_data.sync": "nowReadClass",
                "v-bind:new_data.sync": "willChangeClass",
                "v-bind:change_course.sync": "changeCourse",
                "xmlns:v-on": ""
            }
        }, s.$events = {
            detailFixBar: {
                "v-on:teacherTapNew": "showTeacherAction"
            },
            turnclass: {
                "v-on:submitFn": "getChangeClass"
            }
        }, s.components = {
            swiperBanner: _swiperBanner2.default,
            detailInfo: _detailInfo3.default,
            classPackage: _classPackage2.default,
            detailFixBar: _detailFixBar2.default,
            teachers: _teachers2.default,
            actionsheet: _actionSheet2.default,
            taltoast: _toast2.default,
            LoadingView: _index2.default,
            turnclass: _turn2.default
        }, s.data = {
            _observer: null,
            finish1: !1,
            finish2: !1,
            isShare: !1,
            classId: "",
            areaCode: "",
            claCourseId: "",
            userToken: "",
            scene: "",
            tutorDisable: !0,
            isBtnStatus: !0,
            mapStatus: !0,
            detailInfo: {},
            classPackageInfo: {},
            bannerInfos: {},
            classTeachersList: [],
            teachersTutorList: [],
            featureService: [],
            curriculumInfo: {},
            waitcount: 0,
            registInfo: {},
            btnWord: "报名",
            registDisabled: !1,
            teacherList: [],
            changeValue: !0,
            nowReadClass: [],
            willChangeClass: [],
            teacher: {
                picUrl: "",
                name: ""
            },
            regId: "",
            strengTutor: !1,
            samePrice: !0,
            from: ""
        }, s.methods = {
            showTeacherAction: function() {
                var e = this;
                if (!wx.getStorageSync("user-token")) return void wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone",
                    success: function() {
                        e.loadSetPath({
                            share: e.isShare,
                            url: "detail",
                            clickName: "signup"
                        });
                    }
                });
                this.willChangeClass[0] = this.registInfo, this.getTutor();
            },
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
            }
        }, s.events = {
            "onload-event-new": function() {
                function e(e, a) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            s.getClassType(a), s.normalSats(), s.mergeCurriculumScene(t), s.loadSceneInfo(t, a), 
                            s.getDetailInfos(), s.getCarCount();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, i);
                }));
                return e;
            }(),
            "onshow-event-new": function(e) {
                s.onAutoJump(), s.clearWebViewUrl(), s.decideGradeStatus(), s.cleanPath(), s.checkMapStatus(), 
                s.getDetailInfos(), s.getCarCount();
            },
            "get-change-calss-data": function(e) {
                var t = e.now, a = e.will, n = e.boolean, i = e.regId;
                1 !== e.type && (s.willChangeClass = a), s.nowReadClass = t, s.changeValue = n, 
                s.regId = i, s.$invoke("turnclass", "show");
            },
            "get-target-class-id": function(e) {
                s.willChangeClass[0].cla_id = e;
            }
        }, s.computed = {
            isFinishLoading: function() {
                return this.finish1 && this.finish2;
            }
        }, n = a, _possibleConstructorReturn(s, n);
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
            }, n = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, s, n)) && (0, _common.axios)({
                url: a,
                data: s,
                header: n
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
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclassresult, s = null, n = {
                area_code: t.area_code,
                query_key: this.queryKey,
                regist_id: this.regId
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, i)) && (0, _common.axios)({
                url: a,
                data: n,
                header: i
            }).then(function(t) {
                var a = t.data;
                return a && 0 === a.error_code ? (e.$invoke("taltoast", "show", {
                    message: a.data.message || "转班成功",
                    duration: 2e3
                }), void wx.navigateTo({
                    url: "/pages/courselist/coursepay"
                })) : 179999 === a.error_code ? (clearTimeout(s), void (s = setTimeout(function() {
                    e.changeClassResult();
                }, 2e3))) : (e.$invoke("taltoast", "show", {
                    message: a.error_msg || "转班失败，请稍后重试",
                    duration: 2e3
                }), void e.$apply());
            });
        }
    }, {
        key: "getClassType",
        value: function(e) {
            var t = {
                online: "1",
                double: "2",
                offline: "4"
            };
            this.classType = t[e];
        }
    }, {
        key: "normalSats",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = wx.getStorageSync("unid"), this.isBtnStatus = !!t, this.finish1 = !0, this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "mergeCurriculumScene",
        value: function(e) {
            e = e || {};
            var t = {
                classlist: "课程列表",
                coursepay: "购课单",
                activity: "更多课程",
                pointclasslist: "精选课",
                share: "转发"
            };
            this.from = e.route ? t[e.route] : "其他";
        }
    }, {
        key: "loadSceneInfo",
        value: function(e, t) {
            if (e && (this.classId = e.classId, this.areaCode = e.areaCode || this.getStorageAreaCode(), 
            this.claCourseId = e.courseId, ("share" === e.route || e.wechat) && (this.isShare = !0)), 
            e && e.scene && (this.scene = e.scene), e && e.url) {
                var a = JSON.parse(e.options);
                this.areaCode = a.areaCode || this.getStorageAreaCode(), this.classId = a.classId;
            }
        }
    }, {
        key: "onAutoJump",
        value: function() {
            var e = wx.getStorageSync("pagePath");
            this.pathInfosFunc(e), e.implement && "signup" === e.clickName && (this.$invoke("detailFixBar", "regist"), 
            e.clickName = "", wx.setStorageSync("pagePath", e));
        }
    }, {
        key: "pathInfosFunc",
        value: function(e) {
            var t = getCurrentPages();
            t.length && t.some(function(e) {
                return e && e.route && -1 !== e.route.indexOf("loginRelevant");
            }) && (this.isBtnStatus = e.implement);
        }
    }, {
        key: "clearWebViewUrl",
        value: function() {
            wx.setStorageSync("webViewUrl", "");
        }
    }, {
        key: "decideGradeStatus",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            if (e.changedGrade && 1 === e.changedGrade) return void this.changeGradeSuccess();
            e.changedGrade && 2 === e.changedGrade && this.changeGradeFail();
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
        key: "cleanGradeStatus",
        value: function() {
            var e = wx.getStorageSync("changeGradeState");
            e.changedGrade = "", wx.setStorageSync("changeGradeState", e);
        }
    }, {
        key: "cleanPath",
        value: function() {
            "classDetail" === wx.getStorageSync("entry") && wx.setStorageSync("entry", "");
        }
    }, {
        key: "checkMapStatus",
        value: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    var a = t.authSetting["scope.userLocation"];
                    if ("false" === (a = String(a))) return e.mapStatus = !0, void e.$apply();
                    e.mapStatus = !1, e.$apply();
                }
            });
        }
    }, {
        key: "getDetailInfos",
        value: function() {
            if (this.scene) return this.scanningScene();
            this.getData();
        }
    }, {
        key: "getData",
        value: function() {
            var e = this;
            Promise.all([ this.getClassPackage(), this.getDetail() ]).then(function() {
                "1" === e.classPackageInfo.diagnosis_flag && e.getDiagnoseResult(), e.registInfoHandler(), 
                e.xesAnalytics(), e.finish2 = !0, e.$apply();
            });
        }
    }, {
        key: "getDetail",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, n = {
                class_id: this.classId,
                class_type: this.classType,
                city_code: this.areaCode
            }, i = _path2.default.newClassDetail, r = {
                timestamp: s || +new Date()
            };
            return new Promise(function(t, a) {
                (0, _newCommon.newAxios)({
                    url: i,
                    data: n,
                    method: "GET",
                    header: r
                }).then(function(a) {
                    var s = a.header;
                    a && 0 === a.status ? (e.detailInfo = a.data, e.teachersHandler(), wx.setStorageSync("currentClassDetail", e.detailInfo)) : e.anomalous({
                        result: a,
                        headers: s,
                        type: "classDetail"
                    }), t(), e.$apply();
                }, function(t) {
                    e.anomalous({
                        result: res,
                        headers: headers,
                        type: "classDetail"
                    }), a(t);
                });
            });
        }
    }, {
        key: "getStorageAreaCode",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus") || {}, t = wx.getStorageSync("weChatExpress") || {};
            return e.area_code || t.area_code || "";
        }
    }, {
        key: "anomalous",
        value: function(e) {
            var t = this, a = e.result, s = void 0 === a ? {} : a, n = e.headers, i = void 0 === n ? {} : n, r = e.type, o = void 0 === r ? "" : r;
            wx.showModal({
                title: "提示",
                content: s.msg || "请求接口错误",
                cancelText: "关闭",
                confirmText: "重试",
                success: function(e) {
                    if (e.confirm) return void ("classDetail" === o ? t.getDetail({
                        timestamp: i.timestamp
                    }) : "packageDetail" === o ? t.getClassPackage({
                        timestamp: i.timestamp
                    }) : "getDiagnoseResult" === o && t.getDiagnoseResult({
                        timestamp: i.timestamp
                    }));
                    e.cancel && wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }
    }, {
        key: "teachersHandler",
        value: function() {
            this.classTeachersList = this.detailInfo.teacher || [], this.teachersTutorList = this.detailInfo.tutor_teacher || [];
        }
    }, {
        key: "xesAnalytics",
        value: function() {
            this.detailInfo.promotions && this.detailInfo.promotions.length && app.XesAnalyticsMP.view("132-1341", {
                cla_id: this.detailInfo.cla_id,
                subject_name: this.detailInfo.subject_name
            });
            var e = this.detailInfo, t = e.course_id, a = e.cla_id, s = e.subject_id, n = e.subject_name, i = e.term_id, r = e.term_name, o = e.level_id, c = e.level_name, l = e.label;
            app.XesAnalyticsMP.view("132-1344", {
                course_id: t,
                cla_id: a,
                subject_id: s,
                subject_name: n,
                term_id: i,
                term_name: r,
                level_id: o,
                level_name: c,
                label: l || "",
                from: this.from
            }), this.classPackageInfo.desc_images && app.XesAnalyticsMP.view("132-1345", {
                cla_id: a,
                subject_name: n
            }), this.classPackageInfo.features && this.classPackageInfo.features.length && app.XesAnalyticsMP.view("132-1343", {
                cla_id: a,
                subject_name: n,
                level_name: c
            }), this.classPackageInfo.curriculum_client_res_list && this.classPackageInfo.curriculum_client_res_list.length && app.XesAnalyticsMP.view("132-1347", {
                cla_id: a,
                subject_name: n
            }), (this.classTeachersList && this.classTeachersList.length || this.teachersTutorList && this.teachersTutorList.length) && app.XesAnalyticsMP.view("132-1349", {
                cla_id: a,
                subject_name: n
            });
        }
    }, {
        key: "registInfoHandler",
        value: function() {
            var e = {};
            e.class_id = this.detailInfo.cla_id, e.cla_name = this.detailInfo.cla_name, e.cla_class_type = Number(this.detailInfo.class_type), 
            e.course_regist_count = this.detailInfo.register_persons, e.show_teacher_list = [], 
            e.show_teacher_list[0] = this.teacher, e.cla_start_date = this.detailInfo.cla_start_date, 
            e.cla_end_date = this.detailInfo.cla_end_date, e.year = this.detailInfo.year, e.grade_id = this.detailInfo.grade_id, 
            e.grade_name = this.detailInfo.grade_name, e.term_id = this.detailInfo.term_id, 
            e.term_name = this.detailInfo.term_name, e.subject_id = this.detailInfo.subject_id, 
            e.subject_name = this.detailInfo.subject_name, e.course_id = this.detailInfo.course_id, 
            e.area_code = this.areaCode, e.stu_id = wx.getStorageSync("userInfoStatus").stu_id, 
            e.city_id = this.detailInfo.cityId, e.levelId = this.detailInfo.level_id, e.degree = this.classPackageInfo.level_degree_id, 
            e.businessType = this.detailInfo.business_type, this.registInfo = e, this.claCourseId = this.detailInfo.course_id;
        }
    }, {
        key: "getClassPackage",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, n = {
                class_id: this.classId,
                class_type: this.classType,
                area_code: this.areaCode
            }, i = _path2.default.classPackageDetail, r = {
                timestamp: s || +new Date()
            };
            return new Promise(function(t, a) {
                (0, _newCommon.newAxios)({
                    url: i,
                    data: n,
                    header: r
                }).then(function(a) {
                    var s = a.header;
                    a && 0 === a.status ? (e.classPackageInfo = a.data, e.dataHandler()) : e.anomalous({
                        result: a,
                        headers: s,
                        type: "packageDetail"
                    }), t();
                }, function(t) {
                    e.anomalous({
                        result: res,
                        headers: headers,
                        type: "packageDetail"
                    }), a(t);
                });
            });
        }
    }, {
        key: "dataHandler",
        value: function() {
            this.bannerInfos = {
                topImages: this.classPackageInfo.top_images,
                defaultShowVideo: this.classPackageInfo.defaultShowVideo || {},
                lightHouseVideo: {
                    topVideo: this.classPackageInfo.top_video,
                    videoCoverImage: this.classPackageInfo.video_cover_image
                }
            }, this.featureService = this.classPackageInfo.features, this.curriculumInfo = {
                suitable: this.classPackageInfo.suitable,
                goal: this.classPackageInfo.goal,
                curriculumList: this.classPackageInfo.curriculum_client_res_list || [],
                descImages: this.classPackageInfo.desc_images
            }, this.strengTutor = this.classPackageInfo.streng_tutor, this.samePrice = this.classPackageInfo.same_price, 
            this.$apply();
        }
    }, {
        key: "scanningScene",
        value: function() {
            var e = this, t = _path2.default.getfilters, a = {
                scene: this.scene
            };
            wx.setStorageSync("scene", this.scene), (0, _global.isHaveObjectValue)(a) && (0, 
            _common.axios)({
                url: t,
                data: a
            }).then(function(t) {
                t = t || {};
                var a = t.data;
                if (a && a.data && 0 === a.error_code) return e.areaCode = a.data.params.areaCode, 
                e.classId = a.data.params.classId, e.claCourseId = a.data.params.courseId, e.isShare = !0, 
                e.$apply(), void e.getData();
                wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getCarCount",
        value: function() {
            this.userToken = wx.getStorageSync("user-token"), this.userToken && this.getRegistListcount();
        }
    }, {
        key: "getRegistListcount",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.getPurchaseNumber, s = "", n = {
                area_code: t.area_code || "",
                stu_id: t.stu_id || ""
            }, i = {
                authorization: this.userToken
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, i)) && (0, _common.axios)({
                url: a,
                data: n,
                header: i
            }).then(function(t) {
                t = t || {};
                var a = t.data;
                if (!Array.isArray(a) || a.length) return 0 === a.error_code ? (s = a.data.count, 
                e.waitcount = s, void e.$apply()) : void wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: a.error_msg || "服务器错误！",
                    success: function(t) {
                        t.cancel && e.getRegistListcount();
                    }
                });
            });
        }
    }, {
        key: "getTutor",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, n = this.teacherList, i = _path2.default.getonlineidresult, r = {
                area_code: this.areaCode || wx.getStorageSync("userInfoStatus").area_code,
                course_id: this.claCourseId
            }, o = {
                timestamp: s || ""
            };
            if (n && n.length) return this.$invoke("actionsheet", "showLayer"), void this.$invoke("taltoast", "hide");
            (0, _global.isHaveObjectValue)(r) && (0, _common.axios)({
                url: i,
                data: r,
                header: o
            }).then(function(t) {
                t = t || {};
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
                    success: function(t) {
                        t.cancel && e.getTutor({
                            timestamp: s.timestamp || ""
                        });
                    }
                });
            });
        }
    }, {
        key: "getDiagnoseResult",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.timestamp, s = void 0 === a ? "" : a, n = {
                grade_id: this.detailInfo.grade_id,
                subject_id: this.detailInfo.subject_id,
                subject_name: this.detailInfo.subject_name,
                term_id: this.detailInfo.term_id,
                diagnosis_flag: this.classPackageInfo.diagnosis_flag,
                area: this.areaCode
            }, i = _path2.default.diagnoseResult, r = {
                timestamp: s || +new Date()
            };
            (0, _newCommon.newAxios)({
                url: i,
                data: n,
                method: "GET",
                header: r
            }).then(function(t) {
                var a = t.header;
                t && 0 === t.status ? e.btnWord = t.data.is_diagnose ? "报名" : "诊断后报名" : e.anomalous({
                    result: t,
                    headers: a,
                    type: "getDiagnoseResult"
                }), e.$apply();
            }, function() {
                e.anomalous({
                    result: res,
                    headers: headers,
                    type: "getDiagnoseResult"
                });
            });
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = newDetails;