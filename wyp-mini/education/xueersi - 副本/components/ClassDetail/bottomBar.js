function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(s, r) {
                try {
                    var o = t[s](r), i = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
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
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _index = require("./../DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _confirm = require("./../Commons/confirm.js"), _confirm2 = _interopRequireDefault(_confirm), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), ClassDetailBottomBar = function(e) {
    function t() {
        var e, a, n, s;
        _classCallCheck(this, t);
        for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.props = {
            info: {},
            btnWord: {
                type: String,
                default: "报名"
            },
            registDisabled: {
                type: Boolean,
                default: !1
            },
            isShare: {
                type: Boolean,
                default: !1
            },
            isBtnStatus: {
                type: Boolean,
                default: !1
            },
            areaCode: {}
        }, n.data = {
            timer: null,
            sumRegistresult: 1,
            isDown: !1,
            systemInfo: "",
            changeCourse: !1,
            changeValue: !0,
            willChangeClass: [],
            nowReadClass: [],
            claId: "",
            queryKey: "",
            claCourseId: "",
            teacherList: [],
            regId: "",
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
            tutorDisabled: !0,
            requestTipText: "",
            showConfirm: !1,
            confirmOption: {
                type: "confirm",
                cancelTxt: "取消",
                submitTxt: "确定",
                submitSecTxt: "",
                title: "",
                content: ""
            }
        }, n.watch = {}, n.$repeat = {}, n.$props = {
            taltoast: {
                class: "bom-toast"
            },
            appmask: {
                "xmlns:v-bind": "",
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo"
            },
            confirm: {
                "xmlns:v-bind": "",
                "v-bind:option.sync": "confirmOption",
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            taltoast: _toast2.default,
            appmask: _index2.default,
            confirm: _confirm2.default
        }, n.methods = {
            feedbackFunc: function() {
                this.feedbackDataReport("课程详情");
            },
            getUserInfoFn: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var a, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.registBury(), a = wx.getStorageSync("unid"), n = null, this.loadSetPath({
                                share: this.isShare,
                                url: "detail"
                            }), t.detail.encryptedData) {
                                e.next = 7;
                                break;
                            }
                            return app.sensors.track("refuse_sq", {
                                refuse_sq: "拒绝授权"
                            }), wx.showModal({
                                title: "",
                                content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                                showCancel: !1,
                                confirmText: "我知道了"
                            }), e.abrupt("return");

                          case 7:
                            if (app.sensors.track("allow_sq", {
                                allow_sq: "允许授权"
                            }), !a) {
                                e.next = 12;
                                break;
                            }
                            return console.log("123"), this.userAllowFunc(a), e.abrupt("return");

                          case 12:
                            return console.log("1234"), e.next = 15, _wepy2.default.$instance.globalData.again();

                          case 15:
                            return e.next = 17, this.getUnionId(t);

                          case 17:
                            n = e.sent, console.log("123unids", n), n && this.userAllowFunc(n);

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            regist: function() {
                this.registBury(), this.getuserStatus(), this.typeRegists();
            },
            getChangeClass: function() {
                this.changeValue = !0, this.$invoke("taltoast", "show", {
                    message: "正在转班中...",
                    duration: 2e3
                });
                var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.changeclassverify, n = {
                    area_code: t.area_code,
                    stu_id: t.stu_id,
                    regist_id: this.regId,
                    target_class_id: this.willChangeClass[0].class_id,
                    source_class_id: this.nowReadClass[0].cla_id,
                    change_class_type: "0"
                }, s = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, n, s)) && (0, _common.axios)({
                    url: a,
                    data: n,
                    header: s
                }).then(function(t) {
                    var a = t.data;
                    if (a && 0 === a.error_code) return void e.changeClass();
                    e.$invoke("taltoast", "show", {
                        message: a.error_msg || "转班失败",
                        duration: 2e3
                    });
                });
            }
        }, s = a, _possibleConstructorReturn(n, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "typeRegists",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("this.registDisabled", this.registDisabled), this.registDisabled) {
                            e.next = 16;
                            break;
                        }
                        if (console.log("this.info", this.info), 1 !== this.info.cla_class_type) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 6, this.mergeRegistFunc();

                      case 6:
                        t = e.sent, console.log("state", t), t && (this.$emit("teacherTap"), this.registDisabled = !1, 
                        this.$apply()), e.next = 16;
                        break;

                      case 11:
                        return this.mergeInfo(), e.next = 14, this.mergeRegistFunc();

                      case 14:
                        a = e.sent, a && (this.$invoke("taltoast", "show", {
                            message: "正在报名中...",
                            duration: 2e3
                        }), this.getRegist());

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "computeDate",
        value: function(e) {
            var t = new Date(e.appPreTime.substring(0, 10)).getTime() + e.appPreTime.substring(11, 19).replace(":", "").replace(":", ""), a = new Date(e.appOldRegistTime.substring(0, 10)).getTime() + e.appOldRegistTime.substring(11, 19).replace(":", "").replace(":", ""), n = new Date(e.serverTime.substring(0, 10)).getTime() + e.serverTime.substring(11, 19).replace(":", "").replace(":", ""), s = this, r = !0;
            return Number(t) <= Number(n) && Number(n) < Number(a) && (s.$invoke("taltoast", "hide"), 
            wx.showModal({
                title: "该平台暂不支持预选",
                content: "您可以前往学而思APP完成预选",
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(e) {
                    e.confirm && (s.isDown = !0, s.downAppdataReport("预选"), s.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                    s.$apply());
                }
            }), s.$apply(), r = !1), r;
        }
    }, {
        key: "feedbackDataReport",
        value: function(e) {
            app.sensors.track("feedback", {
                feedback_from: e
            });
        }
    }, {
        key: "mergeRegistFunc",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = null, a = null, n = this.isUserStatus()) {
                            e.next = 6;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 6:
                        if (t = wx.getStorageSync("userInfoStatus"), this.registDisabled = !0, this.$apply(), 
                        t || wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), t.bind_phone) {
                            e.next = 13;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 13:
                        if (t.complete) {
                            e.next = 16;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 16:
                        return e.next = 18, this.preTime();

                      case 18:
                        return a = e.sent, e.abrupt("return", a);

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUnionId",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a, n, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log("1"), a = wx.getStorageSync("openid"), console.log("2", a), t && t.detail.iv && t.detail.encryptedData && a) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 5:
                        return n = _path2.default.getUnionid, s = {
                            iv: t.detail.iv,
                            encryptedData: t.detail.encryptedData,
                            open_id: a
                        }, console.log("3", s), e.abrupt("return", new Promise(function(e, t) {
                            (0, _common.axios)({
                                url: n,
                                data: s
                            }).then(function(t) {
                                console.log("是否进来", t);
                                var a = t.data;
                                0 === a.error_code ? (wx.setStorageSync("unid", a.data.union_id), e(a.data.union_id)) : (wx.showToast({
                                    title: a.error_msg,
                                    icon: "none",
                                    duration: 1e3
                                }), e(!1));
                            });
                        }));

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, a = void 0 !== t && t, n = e.url, s = void 0 === n ? "home" : n, r = e.mun, o = void 0 === r ? 0 : r, i = e.implement, c = void 0 !== i && i, u = e.clickName, l = void 0 === u ? "signup" : u;
            wx.setStorageSync("pagePath", {
                share: a,
                url: s,
                mun: o,
                implement: c,
                clickName: l
            });
        }
    }, {
        key: "mergeInfo",
        value: function() {
            wx.removeStorageSync("isAutoPage"), this.willChangeClass[0] = this.info, this.willChangeClass[0].cla_class_type = Number(this.willChangeClass[0].cla_class_type), 
            this.claId = this.info.class_id || "", this.claCourseId = this.info.courseId || "";
        }
    }, {
        key: "registBury",
        value: function() {
            var e = {
                applet_course_to_sign_up: "立即报名"
            }, t = wx.getStorageSync("storage-details"), a = _extends({}, t, e);
            app.sensors.track("applet_course_to_sign_up", a);
            var n = wx.getStorageSync("storage-details-mp");
            app.XesAnalyticsMP.track("132-1199", n);
        }
    }, {
        key: "preTime",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var a = e, n = wx.getStorageSync("weChatExpress"), s = _path2.default.getregisttimebyclassid, r = {
                    area_code: n.area_code || "",
                    stu_id: n.stu_id,
                    cla_id: e.claId || wx.getStorageSync("storage-details").applet_cla_id
                }, o = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, r, o)) && (0, _common.axios)({
                    url: s,
                    data: r,
                    header: o
                }).then(function(n) {
                    var s = n.data;
                    if (s && s.data && 0 === s.error_code) {
                        var r = e.computeDate(s.data);
                        t(r);
                    } else a.$invoke("taltoast", "show", {
                        message: s.error_msg || "未设置网报时间",
                        duration: 2e3
                    });
                });
            });
        }
    }, {
        key: "getRegist",
        value: function() {
            var e = this, t = _path2.default.regist, a = {
                class_id: this.claId || wx.getStorageSync("storage-details").applet_cla_id
            }, n = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, a, n)) && (this.sumRegistresult = 1, 
            (0, _common.axios)({
                url: t,
                data: a,
                header: n
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code && e.getRegistResult(a.data.request_id);
            }).catch(function(t) {
                e.$invoke("taltoast", "hide"), e.$apply();
            }));
        }
    }, {
        key: "getRegistResult",
        value: function(e) {
            var t = this, a = {
                authorization: wx.getStorageSync("user-token")
            }, n = {
                request_id: e,
                year: this.info.year,
                grade_id: this.info.grade_id,
                grade_name: this.info.grade_name,
                term_id: this.info.term_id,
                term_name: this.info.term_name,
                subject_id: this.info.subject_id,
                subject_name: this.info.subject_name,
                class_type: this.info.cla_class_type
            }, s = _path2.default.registresult, r = {};
            1 !== this.info.cla_class_type && (r = {
                class_level_degree: this.info.degree,
                class_level: this.info.levelId,
                class_id: this.info.class_id
            }), this.sumRegistresult >= 5 || (n = _extends({}, n, r), (0, _global.isHaveObjectValue)(_extends({}, n, a)) && (0, 
            _common.axios)({
                url: s,
                data: n,
                header: a
            }).then(function(a) {
                (a || a.data) && (t.interceptResultType(), t.mergeResultErrorCode(a.data, e), t.commonReasonData(a.data));
            }).catch(function(e) {
                t.$invoke("taltoast", "hide"), e.code = "9999999999", e.message = "请求接口失败", t.getReasonData(e.code, e.message, "失败"), 
                t.$apply();
            }));
        }
    }, {
        key: "interceptResultType",
        value: function() {
            this.sumRegistresult++, this.registDisabled = !1, this.$apply();
        }
    }, {
        key: "mergeResultErrorCode",
        value: function(e, t) {
            var a = this, n = {}, s = this;
            if (n = {
                0: function() {
                    a.$invoke("taltoast", "show", {
                        message: "报名成功",
                        duration: 2e3
                    }), wx.navigateTo({
                        url: "/pages/courselist/coursepay",
                        success: function() {
                            s.$invoke("taltoast", "hide");
                        }
                    });
                },
                10001: function() {
                    clearTimeout(a.timer), a.timer = setTimeout(function() {
                        t && a.getRegistResult(t);
                    }, 2e3);
                },
                50309: function() {
                    a.processDiagnosis(e);
                },
                503090: function() {
                    wx.showModal({
                        title: e.data.popTitle,
                        content: e.data.popContent,
                        cancelText: "关闭",
                        confirmText: "联系客服",
                        showCancel: !0,
                        success: function(t) {
                            t.confirm && wx.makePhoneCall({
                                phoneNumber: e.data.serviceTel
                            });
                        }
                    });
                },
                50305: function() {
                    a.getSameClass();
                },
                50303: function() {
                    a.maskdDtaReport("该班级已满班", "您可以前往学而思APP关注该班级获取名额提醒", "满班");
                },
                50304: function() {
                    a.toChangeGrade();
                },
                50311: function() {
                    a.$invoke("taltoast", "show", {
                        message: "该班级暂不支持报名",
                        duration: 2e3
                    });
                },
                50333: function() {
                    wx.showModal({
                        title: "您已报名该班级",
                        content: "若未缴费，请抓紧时间缴费",
                        cancelText: "我知道了",
                        confirmText: "去查看",
                        showCancel: !0,
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "/pages/personcenter/personinfo"
                            });
                        }
                    });
                },
                20123: function() {
                    a.$invoke("taltoast", "show", {
                        message: e.error_msg,
                        duration: 2e3
                    });
                },
                default: function() {
                    a.$invoke("taltoast", "show", {
                        message: e.error_msg,
                        duration: 2e3
                    });
                }
            }, n[e.error_code] ? n[e.error_code]() : n.default(), 10001 !== e.error_code) {
                var r = wx.getStorageSync("storage-details-mp"), o = {
                    toast_value: e.error_msg || "没有返回任何结果"
                }, i = _extends({}, r, o);
                app.XesAnalyticsMP.track("132-1198", i);
            }
        }
    }, {
        key: "commonReasonData",
        value: function(e) {
            var t = "";
            switch (e.error_code) {
              case 0:
                t = "成功";
                break;

              case 50305:
                t = "转班";
                break;

              default:
                t = "失败";
            }
            this.getReasonData(e.error_code, e.error_msg, t);
        }
    }, {
        key: "alertToTest",
        value: function(e) {
            app.sensors.track("alert_customer", {
                testchoose_mini: e
            });
        }
    }, {
        key: "alertToSelect",
        value: function(e) {
            app.sensors.track("alert_customer", {
                testclasschoose_mini: e
            });
        }
    }, {
        key: "processDiagnosis",
        value: function(e) {
            var t = e.data;
            return t && 0 === t.evaluationCode ? void this.toDetection(t) : t && 1 === t.evaluationCode ? void this.toSelectClass(t) : void wx.showToast({
                title: e.errMsg || "报名失败",
                icon: "none",
                duration: 2e3
            });
        }
    }, {
        key: "toSelectClass",
        value: function(e) {
            var t = this, a = e.classLevelDegree, n = e.classLevelName, s = this.info.area_code, r = this.info.grade_id, o = this.info.grade_name, i = wx.getStorageSync("weChatExpress").area_name || wx.getStorageSync("userInfoStatus").area_name, c = {
                subject: t.info.subject_name || "学科",
                subjectId: t.info.subject_id || "",
                term: t.info.term_name || "学期",
                termId: t.info.term_id || "",
                level: n,
                levelId: a,
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
                fullClass: 0,
                city_code: s,
                grd_id: r,
                grd_name: o,
                city_name: i
            }, u = JSON.stringify(c);
            t.requestTipText = "去选课", wx.showModal({
                title: e.popTitle,
                content: e.popContent,
                cancelText: "取消",
                confirmText: t.requestTipText,
                confirmColor: "#6abcf3",
                success: function(e) {
                    e.confirm ? (wx.navigateTo({
                        url: "/pages/classlist/classlist?filter=" + u + "&toSelect=" + !0
                    }), t.alertToSelect(t.requestTipText)) : e.cancel && t.alertToSelect("关闭");
                }
            });
        }
    }, {
        key: "toDetection",
        value: function(e) {
            var t = this, a = this;
            a.requestTipText = "去诊断";
            var n = e.evaluationUrl;
            if (!n) return void wx.showModal({
                title: "提示",
                content: "服务器出错啦，是否重新加载",
                showCancel: !1
            });
            var s = wx.getStorageSync("user-token") || "";
            s && (0, _common.getUtoken)(s).then(function(s) {
                var r = a.info.degree, o = a.info.class_id, i = a.info.cla_class_type, c = "", u = {
                    utoken: s,
                    url: n,
                    levelId: r,
                    classId: o
                };
                c = t.setwebviewurl(u, i), wx.showModal({
                    title: e.popTitle,
                    content: e.popContent,
                    cancelText: "取消",
                    confirmText: a.requestTipText,
                    confirmColor: "#6abcf3",
                    success: function(e) {
                        if (e.confirm) return wx.setStorage({
                            key: "webViewUrl",
                            data: c,
                            success: function(e) {
                                wx.navigateTo({
                                    url: "/pages/banner/banner"
                                });
                            }
                        }), void a.alertToTest(a.requestTipText);
                        e.cancel && a.alertToTest("关闭");
                    }
                });
            });
        }
    }, {
        key: "setwebviewurl",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = e.utoken && -1 !== e.url.indexOf("?") ? "&" : "?", n = t ? "&detailtype=" + t : "";
            return "" + e.url + a + "utoken=" + e.utoken + "&levelid=" + e.levelId + "&classid=" + e.classId + "&wechat=wx" + n;
        }
    }, {
        key: "toChangeGrade",
        value: function() {
            var e = this, t = wx.getStorageSync("weChatExpress").name;
            t.length > 10 && (t = t.substring(0, 10) + "...");
            var a = "当前学员" + t + "，该学员年级与课程年级不符，请修改后报名";
            this.confirmOption = {
                type: "thirdConfirm",
                cancelTxt: "取消",
                submitTxt: "修改年级",
                submitSecTxt: "切换学员",
                title: "报名失败",
                content: a
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function(t) {
                "1" === t && e.jumpChangeGrade(), "2" === t && e.jumpChangeAccount(), e.showConfirm = !1, 
                e.$apply();
            }, function() {
                e.showConfirm = !1, e.$apply();
            });
        }
    }, {
        key: "jumpChangeGrade",
        value: function() {
            var e = {
                city_code: wx.getStorageSync("userInfoStatus").area_code,
                city_name: wx.getStorageSync("userInfoStatus").area_name,
                default: "classDetail"
            };
            e = JSON.stringify(e), wx.navigateTo({
                url: "/pages/searchgrade/searchgrade?cityInfo=" + e,
                success: function() {
                    app.sensors.track("changeGrade", {
                        from: "报名页面"
                    });
                }
            });
        }
    }, {
        key: "jumpChangeAccount",
        value: function() {
            _wepy2.default.$instance.globalData.accountNeedBack = !0, wx.navigateTo({
                url: "/pages/familyAccount/myAccount"
            });
        }
    }, {
        key: "maskdDtaReport",
        value: function(e, t, a) {
            var n = this;
            wx.showModal({
                title: e,
                content: t,
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(e) {
                    e.confirm && (n.isDown = !0, n.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                    n.downAppdataReport(a), n.$apply());
                }
            });
        }
    }, {
        key: "downAppdataReport",
        value: function(e) {
            app.sensors.track("downloadapp", {
                downloadapp_from: e
            });
        }
    }, {
        key: "getReasonData",
        value: function(e, t, a) {
            var n = wx.getStorageSync("storage-details"), s = {
                applet_course_sign_up_result: "报名" === a ? "未知" : "" === a ? "失败" : a,
                applet_course_sign_up_result_id: e,
                applet_course_sign_up_result_detail: t || "报名成功"
            }, r = _extends({}, n, s);
            app.sensors.track("applet_course_sign_up_result", r);
        }
    }, {
        key: "getSameClass",
        value: function() {
            var e = this, t = this, a = wx.getStorageSync("userInfoStatus"), n = _path2.default.getsamecontinueclass, s = {}, r = {
                area_code: a.area_code,
                stu_id: a.stu_id,
                cla_id: this.claId
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, r, o)) && (0, _common.axios)({
                url: n,
                data: r,
                header: o
            }).then(function(a) {
                var n = a.data;
                if (n && 0 === n.error_code) {
                    var r = n.data && n.data.classInfo;
                    if (r && r.length) {
                        if (t.nowReadClass = r, t.regId = t.nowReadClass[0].reg_id, "2" === t.nowReadClass[0].cla_class_type) t.nowReadClass[0].cla_class_type = 2; else if ("4" === t.nowReadClass[0].cla_class_type) {
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
                        e.changeValue = !1, s = {
                            now: e.nowReadClass,
                            will: e.willChangeClass,
                            boolean: e.changeValue,
                            regId: e.regId,
                            type: t.nowReadClass[0].cla_class_type
                        }, e.$emit("get-change-calss-data", s);
                    }
                    t.$apply();
                } else t.$invoke("taltoast", "show", {
                    message: n.error_msg || "系统错误",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "isUserUniond",
        value: function() {
            return !!wx.getStorageSync("unid");
        }
    }, {
        key: "isUserStatus",
        value: function() {
            return !!wx.getStorageSync("user-token");
        }
    }, {
        key: "getConsumerInfo",
        value: function(e) {
            return new Promise(function(e, t) {
                var a = wx.getStorageSync("weChatExpress");
                if (console.log("新数据缓存", a), a) return wx.getStorageSync("userInfoStatus") || (a.saved = !0, 
                console.log("新数据缓存后", a), wx.setStorageSync("userInfoStatus", a)), wx.setStorageSync("user-token", a.token), 
                void e(a);
                e("");
            });
        }
    }, {
        key: "userAllowFunc",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("111111111"), a = null, e.next = 4, this.getConsumerInfo(t);

                      case 4:
                        if (a = e.sent, a.token) {
                            e.next = 8;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 8:
                        if (a.bind_phone) {
                            e.next = 11;
                            break;
                        }
                        return wx.redirectTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 11:
                        if (a.complete) {
                            e.next = 14;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/cityclass?page=cityclass"
                        }), e.abrupt("return");

                      case 14:
                        if (1 !== this.info.cla_class_type) {
                            e.next = 17;
                            break;
                        }
                        return this.$emit("teacherTap"), e.abrupt("return");

                      case 17:
                        this.mergeConsumerInfo(a), this.$invoke("taltoast", "show", {
                            message: "正在报名中..."
                        }), this.getRegist();

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getuserStatus",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus");
            e || e.complete || e.bind_phone || this.loadSetPath({
                share: this.isShare,
                url: "detail"
            });
        }
    }, {
        key: "mergeConsumerInfo",
        value: function(e) {
            var t = {
                applet_user_city: e.area_name,
                applet_user_grade: e.grade_name,
                applet_student_id: e.stu_id,
                applet_user_sex: "男",
                applet_union_id: wx.getStorageSync("unid"),
                applet_user_name: e.name,
                openid: wx.getStorageSync("openid")
            };
            app.sensors.login(e.stu_id), app.sensors.setProfile(t);
            var a = {
                user_id: e.stu_id,
                user_name: e.name,
                city: e.area_name,
                city_code: e.area_code,
                grade_id: e.grade,
                grade: e.grade_name,
                union_id: e.union_id || wx.getStorageSync("unid")
            };
            app.XesAnalyticsMP.setProfile(a);
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = ClassDetailBottomBar;