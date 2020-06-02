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
        for (var a = 0; a < t.length; a++) {
            var s = t[a];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, a, s) {
        return a && e(t.prototype, a), s && e(t, s), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _courseInfo = require("./../Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _periodItem = require("./../Commons/periodItem.js"), _periodItem2 = _interopRequireDefault(_periodItem), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), ClassDetailCard = function(e) {
    function t() {
        var e, a, s, o;
        _classCallCheck(this, t);
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        s.data = {
            newTeacherList: [],
            entry: !0,
            DefaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png",
            longPressDone: !1,
            pressTimer: null,
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
            isGetMapbtn: !1
        }, s.$repeat = {
            classInfo: {
                com: "PeriodItem",
                props: "periodInfo.sync"
            }
        }, s.$props = {
            PeriodItem: {
                "v-bind:periodInfo.sync": {
                    value: "_item",
                    type: "item",
                    for: "classInfo.stagesInfo",
                    item: "_item",
                    index: "i",
                    key: "_index"
                },
                "v-bind:entry.sync": {
                    value: "entry",
                    for: "classInfo.stagesInfo",
                    item: "_item",
                    index: "i",
                    key: "_index"
                }
            },
            taltoast: {
                class: "toast"
            },
            CourseInfo: {
                "xmlns:v-bind": "",
                "v-bind:courseInfo.sync": "courseInfo"
            },
            newToast: {
                class: "toast1"
            }
        }, s.$events = {}, s.components = {
            taltoast: _toast2.default,
            CourseInfo: _courseInfo2.default,
            PeriodItem: _periodItem2.default,
            newToast: _toast2.default
        }, s.props = {
            isShare: {
                type: Boolean,
                default: !1
            },
            lessonType: String,
            classInfo: {},
            info: {},
            curriculums: {},
            isBtnStatus: {
                type: Boolean,
                default: !1
            },
            isGetMapbtn: {
                type: Boolean
            }
        }, s.watch = {
            teacherList: function(e) {
                this.newTeacherList = e;
            },
            isGetMapbtn: function(e) {
                return 1 === e ? (this.isGetMapbtn = !1, void this.$apply()) : 2 === e && (this.isGetMapbtn = !0, 
                void this.$apply());
            },
            classInfo: function(e) {
                e.origin_price = Number(e.origin_price), e.actual_price = Number(e.actual_price), 
                e.promotion_price && (e.promotionPrice = Number(e.promotion_price)), this.classInfo = e;
            },
            lessonType: function() {},
            curriculums: function(e) {
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
                wx.setStorage({
                    key: "storage-details",
                    data: t
                });
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
                    price: e.price,
                    browse_detail_from: e.applet_browse_detail_from
                };
                wx.setStorage({
                    key: "storage-details-mp",
                    data: s
                });
            }
        }, s.computed = {
            badges: function() {
                var e = null, t = this.lessonType, a = [ {
                    text: "双师",
                    id: "2"
                }, {
                    text: "面授",
                    id: "4"
                }, {
                    text: "在线",
                    id: "1"
                } ];
                switch (t) {
                  case "double":
                    e = a[0];
                    break;

                  case "offline":
                    e = a[1];
                    break;

                  case "online":
                    e = a[2];
                }
                return e;
            },
            states: function() {
                return "number" == typeof this.classInfo.cla_quota_num ? "剩余" + this.classInfo.cla_quota_num : this.classInfo.cla_quota_num;
            },
            remainingClassCount: function() {
                var e = this.classInfo;
                return e.passed_count > 0 ? "剩余" + (e.class_count - e.passed_count) + "节课" : e.class_count + "节课";
            },
            originPrice: function() {
                var e = this.classInfo;
                return e.promotion_price > 0 && Number(e.origin_price) > Number(e.promotion_price) && Number(e.origin_price);
            },
            courseInfo: function() {
                return {
                    className: this.classInfo.cla_name,
                    timeArea: this.classInfo.open_time,
                    classTime: this.classInfo.class_time,
                    courseType: this.classInfo.cla_class_type
                };
            },
            teacherList: function() {
                var e = this;
                if (this.badges) {
                    var t = [], a = [], s = {
                        name: "name",
                        url: "url",
                        type: "主",
                        class: "zhu",
                        id: 1,
                        teacherId: "",
                        accountType: 0,
                        teacherType: 0
                    }, o = {
                        name: "name",
                        url: "url",
                        type: "辅",
                        class: "fu",
                        id: 2,
                        teacherId: "",
                        accountType: 0,
                        teacherType: 0
                    };
                    switch (this.badges.id) {
                      case "4":
                        s = Object.assign(s, {
                            arr: "tea_teacher_names",
                            url: "imgurl",
                            type: "2" === this.classInfo.cla_class_type ? "辅" : "主"
                        });
                        break;

                      case "2":
                        s = Object.assign(s, {
                            arr: "tea_teacher_names",
                            url: "imgurl"
                        }), o = Object.assign(o, {
                            arr: "avatar"
                        });
                        break;

                      case "1":
                        s = Object.assign(s, {
                            arr: "TeacherList",
                            name: "teacherName",
                            url: "teacherUrl"
                        }), o = Object.assign(o, {
                            arr: "Futeachers",
                            name: "teacherName"
                        });
                    }
                    return a = [ s, o ], a.forEach(function(a, s) {
                        if (e.classInfo[a.arr]) {
                            var o = e.classInfo[a.arr].map(function(t) {
                                return {
                                    name: t[a.name] ? t[a.name] : "待定",
                                    url: t[a.url] ? t[a.url] : e.DefaultImg,
                                    type: a.type,
                                    class: a.class,
                                    id: a.id,
                                    accountType: t.accountType,
                                    teacherType: t.teacherType,
                                    teacherId: t.teacherId ? t.teacherId : t.id
                                };
                            });
                            t.push(o);
                        }
                    }), t;
                }
            }
        }, s.methods = {
            goDetail: function(e) {
                var t = e.teacherId, a = e.accountType, s = e.teacherType;
                console.log("点击详情中的老师", e), !t || 1 !== a && "0" !== s ? wx.navigateTo({
                    url: "/pages/teacherDetails/virtual?id=" + t
                }) : wx.navigateTo({
                    url: "/pages/teacherDetails/index?id=" + t + "&teacherType=" + s + "&opSource=detail"
                });
            },
            touchstartHandler: function() {
                var e = this, t = 4, a = this, s = getCurrentPages(), o = s[s.length - 1].route;
                wx.getStorageSync("user-token") && (this.longPressDone = !1, clearTimeout(this.pressTimer), 
                this.longPressDone = !0, this.pressTimer = setInterval(function() {
                    t--, e.$apply(), e.$invoke("taltoast", "show", {
                        message: t,
                        duration: 1e3
                    }), 1 === t && (_wepy2.default.$instance.globalData.detailsInfo.areaCode = e.classInfo.areaCode, 
                    _wepy2.default.$instance.globalData.detailsInfo.classId = e.classInfo.id, _wepy2.default.$instance.globalData.detailsInfo.courseId = e.classInfo.courseId || "", 
                    clearTimeout(e.pressTimer), wx.navigateTo({
                        url: "/pages/internal/qrcode?pages=" + o,
                        success: function() {
                            clearTimeout(a.pressTimer);
                        }
                    }));
                }, 1e3));
            },
            touchendHandler: function() {
                clearTimeout(this.pressTimer);
            },
            getUserInfoFn: function(e) {
                var t = wx.getStorageSync("unid"), a = this;
                this.loadSetPath({
                    share: this.isShare,
                    url: "detail"
                }), e.detail.encryptedData ? (app.sensors.track("allow_sq", {
                    allow_sq: "允许授权"
                }), t ? a.userAllowFunc(t) : this.getUnionId(e).then(function(e) {
                    e && a.userAllowFunc(e);
                })) : (app.sensors.track("refuse_sq", {
                    refuse_sq: "拒绝授权"
                }), wx.showModal({
                    title: "",
                    content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                    showCancel: !1,
                    confirmText: "我知道了"
                }));
            },
            toSetMapPurview: function() {
                var e = this;
                wx.openSetting({
                    success: function(t) {
                        t.authSetting["scope.userLocation"] && (e.isGetMapbtn = !1, e.$apply());
                    }
                });
            },
            teacherTap: function() {
                this.$emit("teacherTap");
            },
            imgError: function(e, t) {
                this.newTeacherList[e][t].url = this.DefaultImg;
            },
            toMap: function() {
                var e = this, t = _path2.default.venueInfo, a = {
                    area_code: this.classInfo.areaCode || "",
                    venue_id: this.classInfo.venue_id || ""
                };
                (0, _global.isHaveObjectValue)(a) && (app.sensors.track("sch_map", {
                    sch_map: "点击教学点"
                }), wx.getLocation({
                    type: "gcj02",
                    success: function(s) {
                        e.isGetMapbtn = !1, (0, _common.axios)({
                            url: t,
                            data: a
                        }).then(function(t) {
                            e.jumpLocalMap(t.data);
                        }), app.XesAnalyticsMP.registerPage({
                            latitude: s.latitude,
                            longitude: s.longitude,
                            allowLocation: !0
                        }, "setLocation");
                    },
                    fail: function(t) {
                        var a = t.errMsg, s = a.indexOf("permission"), o = a.indexOf("auth");
                        -1 !== s && e.$invoke("newToast", "show", {
                            message: "请先前往手机系统设置开启位置权限",
                            duration: 2e3
                        }), -1 !== o && (e.isGetMapbtn = !0, e.$apply());
                    }
                }));
            }
        }, o = a, _possibleConstructorReturn(s, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "detailsSensor",
        value: function() {
            var e = wx.getStorageSync("storage-details");
            e && app.sensors.track("applet_browse_detail", e);
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, a = void 0 !== t && t, s = e.url, o = void 0 === s ? "home" : s, n = e.mun, r = void 0 === n ? 0 : n, i = e.implement, c = void 0 !== i && i, l = e.clickName, u = void 0 === l ? "signup" : l;
            wx.setStorageSync("pagePath", {
                share: a,
                url: o,
                mun: r,
                implement: c,
                clickName: u
            });
        }
    }, {
        key: "getConsumerInfo",
        value: function(e) {
            return new Promise(function(e, t) {
                var a = wx.getStorageSync("weChatExpress");
                if (a) return wx.getStorageSync("userInfoStatus") || (a.saved = !0, console.log("新数据缓存后", a), 
                wx.setStorageSync("userInfoStatus", a)), wx.setStorageSync("user-token", a.token), 
                void e(a);
                e("");
            });
        }
    }, {
        key: "userAllowFunc",
        value: function(e) {
            var t = this;
            this.getConsumerInfo(e).then(function(e) {
                e.token ? e.bind_phone ? e.complete ? t.$emit("teacherTap") : wx.navigateTo({
                    url: "/pages/loginRelevant/cityclass?page=cityclass"
                }) : wx.redirectTo({
                    url: "/pages/loginRelevant/bindphone"
                }) : wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone"
                });
            });
        }
    }, {
        key: "getUnionId",
        value: function(e) {
            return new Promise(function(t, a) {
                var s = wx.getStorageSync("openid");
                if (!(e && e.detail.iv && e.detail.encryptedData && s)) return !1;
                var o = _path2.default.f, n = {
                    iv: e.detail.iv,
                    encryptedData: e.detail.encryptedData,
                    open_id: s
                };
                (0, _common.axios)({
                    url: o,
                    data: n
                }).then(function(e) {
                    var a = e.data;
                    0 === a.error_code ? (wx.setStorageSync("unid", a.data.union_id), t(a.data.union_id)) : (wx.showToast({
                        title: a.error_msg,
                        icon: "none",
                        duration: 1e3
                    }), t(!1));
                });
            });
        }
    }, {
        key: "jumpLocalMap",
        value: function(e) {
            var t = this;
            if (0 === e.error_code) {
                var a = e.data, s = a.latitude, o = a.longitude;
                s && o ? wx.openLocation({
                    latitude: Number(s),
                    longitude: Number(o),
                    name: t.classInfo.class_area,
                    address: "学而思教学点",
                    scale: 18
                }) : t.errorInfo("抱歉，迷路了~");
            } else t.errorInfo(e.error_msg);
        }
    }, {
        key: "errorInfo",
        value: function(e) {
            this.$invoke("newToast", "show", {
                message: e || "系统开小差～",
                duration: 2e3
            });
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = ClassDetailCard;