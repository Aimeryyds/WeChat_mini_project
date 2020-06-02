function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
                try {
                    var s = t[r](i), o = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
            }
            return a("next");
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
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _confirm = require("./../Commons/confirm.js"), _confirm2 = _interopRequireDefault(_confirm), _index = require("./../DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), detailFixBar = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.data = {
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
            tutorDisabled: !0,
            requestTipText: "",
            confirmOption: {
                type: "confirm",
                cancelTxt: "取消",
                submitTxt: "确定",
                submitSecTxt: "",
                title: "",
                content: ""
            },
            showConfirm: !1
        }, a.$repeat = {}, a.$props = {
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
        }, a.$events = {}, a.components = {
            taltoast: _toast2.default,
            appmask: _index2.default,
            confirm: _confirm2.default
        }, a.props = {
            info: {},
            count: {
                type: Number,
                default: 0
            },
            btnWord: {
                type: String,
                default: ""
            },
            registDisabled: {
                type: Boolean,
                default: !1
            },
            isBtnStatus: {
                type: Boolean,
                default: !1
            },
            isShare: {
                type: Boolean,
                default: !1
            },
            areaCode: {
                type: String,
                default: ""
            }
        }, a.watch = {}, a.computed = {
            isiPhoneX: function(e) {
                return _wepy2.default.$instance.globalData.isiPhoneX;
            }
        }, a.methods = {
            goOrder: function() {
                wx.navigateTo({
                    url: "/pages/courselist/coursepay"
                });
                var e = {
                    1: "在线",
                    2: "双师",
                    4: "面授"
                }, t = wx.getStorageSync("currentClassDetail") || {}, n = t.cla_id, a = t.term_name, r = t.term_id, i = t.level_id, s = t.level_name, o = t.label, c = e[t.class_type];
                app.XesAnalyticsMP.track("132-1352", {
                    cla_id: n,
                    term_id: r,
                    term_name: a,
                    level_id: i,
                    level_name: s,
                    label: o || "",
                    course_type: c
                });
            },
            checkGoOrder: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n, a = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n = wx.getStorageSync("unid"), this.loadSetPath({
                                share: this.isShare,
                                url: "detail"
                            }), t.detail.encryptedData) {
                                e.next = 8;
                                break;
                            }
                            return this.confirmOption = {
                                type: "alert",
                                cancelTxt: "",
                                submitTxt: "我知道了",
                                title: "",
                                content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息"
                            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                                a.showConfirm = !1, a.$apply();
                            }), e.abrupt("return");

                          case 8:
                            if (this.isBtnStatus = !1, this.$apply(), n) {
                                e.next = 16;
                                break;
                            }
                            return e.next = 13, _wepy2.default.$instance.globalData.again();

                          case 13:
                            return e.next = 15, this.getUnionId(t);

                          case 15:
                            n = e.sent;

                          case 16:
                            return e.next = 18, this.loginCheck(n);

                          case 18:
                            this.methods.goOrder();

                          case 19:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            feedbackFunc: function() {
                app.XesAnalyticsMP.track("132-1351", {
                    cla_id: this.info.class_id,
                    subject_name: this.info.subject_name
                });
            },
            getUserInfoFn: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n, a, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.registBury(), n = wx.getStorageSync("unid"), a = null, this.loadSetPath({
                                share: this.isShare,
                                url: "detail"
                            }), t.detail.encryptedData) {
                                e.next = 9;
                                break;
                            }
                            return this.confirmOption = {
                                type: "alert",
                                cancelTxt: "",
                                submitTxt: "我知道了",
                                title: "",
                                content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息"
                            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                                r.showConfirm = !1, r.$apply();
                            }), e.abrupt("return");

                          case 9:
                            if (this.isBtnStatus = !1, this.$apply(), !n) {
                                e.next = 14;
                                break;
                            }
                            return this.userAllowFunc(n), e.abrupt("return");

                          case 14:
                            return e.next = 16, _wepy2.default.$instance.globalData.again();

                          case 16:
                            return e.next = 18, this.getUnionId(t);

                          case 18:
                            a = e.sent, a && this.userAllowFunc(a);

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
                var e = this, t = wx.getStorageSync("userInfoStatus"), n = _path2.default.changeclassverify, a = {
                    area_code: t.area_code,
                    stu_id: t.stu_id,
                    regist_id: this.regId,
                    target_class_id: this.willChangeClass[0].class_id,
                    source_class_id: this.nowReadClass[0].cla_id,
                    change_class_type: "0"
                }, r = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, a, r)) && (0, _common.axios)({
                    url: n,
                    data: a,
                    header: r
                }).then(function(t) {
                    var n = t.data;
                    if (n && 0 === n.error_code) return void e.changeClass();
                    e.$invoke("taltoast", "show", {
                        message: n.error_msg || "转班失败",
                        duration: 2e3
                    });
                });
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "checkUser",
        value: function(e) {
            var t = this;
            if (this.loadSetPath({
                share: this.isShare,
                url: "detail"
            }), !e.detail.encryptedData) return this.confirmOption = {
                type: "alert",
                cancelTxt: "",
                submitTxt: "我知道了",
                title: "",
                content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息"
            }, this.showConfirm = !0, this.$apply(), void this.$invoke("confirm", "show").then(function() {
                t.showConfirm = !1, t.$apply();
            });
            this.isBtnStatus = !1, this.$apply();
        }
    }, {
        key: "typeRegists",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.registDisabled) {
                            e.next = 13;
                            break;
                        }
                        if (1 !== this.info.cla_class_type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, this.mergeRegistFunc();

                      case 4:
                        t = e.sent, t && (this.$emit("teacherTapNew"), this.registDisabled = !1, this.$apply()), 
                        e.next = 13;
                        break;

                      case 8:
                        return this.mergeInfo(), e.next = 11, this.mergeRegistFunc();

                      case 11:
                        n = e.sent, n && (this.$invoke("taltoast", "show", {
                            message: "正在报名中...",
                            duration: 2e3
                        }), this.getRegist());

                      case 13:
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
            var t = this, n = new Date(e.appPreTime.substring(0, 10)).getTime() + e.appPreTime.substring(11, 19).replace(":", "").replace(":", ""), a = new Date(e.appOldRegistTime.substring(0, 10)).getTime() + e.appOldRegistTime.substring(11, 19).replace(":", "").replace(":", ""), r = new Date(e.serverTime.substring(0, 10)).getTime() + e.serverTime.substring(11, 19).replace(":", "").replace(":", ""), i = !0;
            return Number(n) <= Number(r) && Number(r) < Number(a) && (this.$invoke("taltoast", "hide"), 
            this.confirmOption = {
                type: "confirm",
                cancelTxt: "知道了",
                submitTxt: "下载APP",
                title: "该平台暂不支持预选",
                content: "您可以前往学而思APP完成预选"
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                t.showConfirm = !1, t.isDown = !0, t.downAppdataReport("预选"), t.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                t.$apply();
            }, function() {
                t.showConfirm = !1, t.$apply();
            }), i = !1), i;
        }
    }, {
        key: "mergeRegistFunc",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = null, n = null, a = this.isUserStatus()) {
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
                        return n = e.sent, e.abrupt("return", n);

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
                var n, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = wx.getStorageSync("openid"), t && t.detail.iv && t.detail.encryptedData && n) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 3:
                        return a = _path2.default.getUnionid, r = {
                            iv: t.detail.iv,
                            encryptedData: t.detail.encryptedData,
                            open_id: n
                        }, e.abrupt("return", new Promise(function(e, t) {
                            (0, _common.axios)({
                                url: a,
                                data: r
                            }).then(function(t) {
                                var n = t.data;
                                0 === n.error_code ? (wx.setStorageSync("unid", n.data.union_id), e(n.data.union_id)) : (wx.showToast({
                                    title: n.error_msg,
                                    icon: "none",
                                    duration: 1e3
                                }), e(!1));
                            });
                        }));

                      case 6:
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
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, n = void 0 !== t && t, a = e.url, r = void 0 === a ? "home" : a, i = e.mun, s = void 0 === i ? 0 : i, o = e.implement, c = void 0 !== o && o, u = e.clickName, l = void 0 === u ? "signup" : u;
            wx.setStorageSync("pagePath", {
                share: n,
                url: r,
                mun: s,
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
                1: "在线",
                2: "双师",
                4: "面授"
            }, t = wx.getStorageSync("currentClassDetail") || {}, n = t.cla_id, a = t.subject_id, r = t.subject_name, i = t.term_id, s = t.term_name, o = t.level_id, c = t.level_name, u = t.label, l = e[t.class_type];
            app.XesAnalyticsMP.track("132-1350", {
                cla_id: n,
                subject_id: a,
                subject_name: r,
                term_id: i,
                term_name: s,
                level_id: o,
                level_name: c,
                label: u || "",
                course_type: l
            });
        }
    }, {
        key: "preTime",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var n = e, a = wx.getStorageSync("userInfoStatus") || {}, r = _path2.default.getregisttimebyclassid, i = {
                    area_code: a.area_code || "",
                    stu_id: a.stu_id,
                    cla_id: e.claId || e.info.class_id || wx.getStorageSync("currentClassDetail").cla_id
                }, s = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, i, s)) && (0, _common.axios)({
                    url: r,
                    data: i,
                    header: s
                }).then(function(a) {
                    a = a || {};
                    var r = a.data;
                    if (r && r.data && 0 === r.error_code) {
                        var i = e.computeDate(r.data);
                        t(i);
                    } else n.$invoke("taltoast", "show", {
                        message: r.error_msg || "未设置网报时间",
                        duration: 2e3
                    });
                });
            });
        }
    }, {
        key: "getRegist",
        value: function() {
            var e = this, t = _path2.default.regist, n = {
                class_id: this.claId || this.info.class_id || wx.getStorageSync("currentClassDetail").cla_id
            }, a = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, n, a)) && (this.sumRegistresult = 1, 
            (0, _common.axios)({
                url: t,
                data: n,
                header: a
            }).then(function(t) {
                t = t || {};
                var n = t.data;
                n && n.data && 0 === n.error_code && e.getRegistResult(n.data.request_id);
            }).catch(function(t) {
                e.$invoke("taltoast", "hide"), e.$apply();
            }));
        }
    }, {
        key: "getRegistResult",
        value: function(e) {
            var t = this, n = {
                authorization: wx.getStorageSync("user-token")
            }, a = {
                request_id: e,
                year: this.info.year,
                grade_id: this.info.grade_id,
                grade_name: this.info.grade_name,
                term_id: this.info.term_id,
                term_name: this.info.term_name,
                subject_id: this.info.subject_id,
                subject_name: this.info.subject_name,
                class_type: this.info.cla_class_type
            }, r = _path2.default.registresult, i = {};
            1 !== this.info.cla_class_type && (i = {
                class_level_degree: this.info.degree,
                class_level: this.info.levelId,
                class_id: this.info.class_id
            }), this.sumRegistresult >= 5 || (a = _extends({}, a, i), (0, _global.isHaveObjectValue)(_extends({}, a, n)) && (0, 
            _common.axios)({
                url: r,
                data: a,
                header: n
            }).then(function(n) {
                (n || n.data) && (t.interceptResultType(), t.mergeResultErrorCode(n.data, e), t.commonReasonData(n.data));
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
            var n = this, a = {}, r = this;
            if (a = {
                0: function() {
                    n.$invoke("taltoast", "show", {
                        message: "报名成功",
                        duration: 2e3
                    }), wx.navigateTo({
                        url: "/pages/courselist/coursepay",
                        success: function() {
                            r.$invoke("taltoast", "hide");
                        }
                    });
                },
                10001: function() {
                    clearTimeout(n.timer), n.timer = setTimeout(function() {
                        t && n.getRegistResult(t);
                    }, 2e3);
                },
                50309: function() {
                    n.processDiagnosis(e);
                },
                503090: function() {
                    n.confirmOption = {
                        type: "confirm",
                        cancelTxt: "关闭",
                        submitTxt: "联系客服",
                        title: e.data.popTitle,
                        content: e.data.popContent
                    }, n.showConfirm = !0, n.$apply(), n.$invoke("confirm", "show").then(function() {
                        n.showConfirm = !1, wx.makePhoneCall({
                            phoneNumber: e.data.serviceTel
                        }), n.$apply();
                    }, function() {
                        n.showConfirm = !1, n.$apply();
                    });
                },
                50305: function() {
                    n.getSameClass();
                },
                50303: function() {
                    n.maskdDtaReport("该班级已满班", "您可以前往学而思APP关注该班级获取名额提醒", "满班");
                },
                50304: function() {
                    n.toChangeGrade();
                },
                50311: function() {
                    n.$invoke("taltoast", "show", {
                        message: "该班级暂不支持报名",
                        duration: 2e3
                    });
                },
                50333: function() {
                    n.confirmOption = {
                        type: "confirm",
                        cancelTxt: "我知道了",
                        submitTxt: "去查看",
                        title: "您已报名该班级",
                        content: "若未缴费，请抓紧时间缴费"
                    }, n.showConfirm = !0, n.$apply(), n.$invoke("confirm", "show").then(function() {
                        n.showConfirm = !1, wx.navigateTo({
                            url: "/pages/personcenter/personinfo"
                        }), n.$apply();
                    }, function() {
                        n.showConfirm = !1, n.$apply();
                    });
                },
                20123: function() {
                    n.$invoke("taltoast", "show", {
                        message: e.error_msg,
                        duration: 2e3
                    });
                },
                default: function() {
                    n.$invoke("taltoast", "show", {
                        message: e.error_msg,
                        duration: 2e3
                    });
                }
            }, a[e.error_code] ? a[e.error_code]() : a.default(), 10001 !== e.error_code) {
                var i = wx.getStorageSync("storage-details-mp"), s = {
                    toast_value: e.error_msg || "没有返回任何结果"
                }, o = _extends({}, i, s);
                app.XesAnalyticsMP.track("132-1198", o);
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
        value: function(e) {}
    }, {
        key: "alertToSelect",
        value: function(e) {}
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
            var t = this, n = this, a = e.classLevelDegree, r = e.classLevelName, i = this.info.area_code, s = this.info.grade_id, o = this.info.grade_name, c = wx.getStorageSync("weChatExpress").area_name || wx.getStorageSync("userInfoStatus").area_name, u = {
                subject: n.info.subject_name || "学科",
                subjectId: n.info.subject_id || "",
                term: n.info.term_name || "学期",
                termId: n.info.term_id || "",
                level: r,
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
                city_code: i,
                grd_id: s,
                grd_name: o,
                city_name: c
            }, l = JSON.stringify(u);
            n.requestTipText = "去选课", this.confirmOption = {
                type: "confirm",
                cancelTxt: "取消",
                submitTxt: "去选课",
                title: e.popTitle,
                content: e.popContent
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                t.showConfirm = !1, wx.navigateTo({
                    url: "/pages/classlist/classlist?filter=" + l + "&toSelect=" + !0
                }), t.$apply();
            }, function() {
                t.showConfirm = !1, t.$apply();
            });
        }
    }, {
        key: "toDetection",
        value: function(e) {
            var t = this, n = this;
            n.requestTipText = "去诊断";
            var a = e.evaluationUrl;
            if (!a) return void wx.showModal({
                title: "提示",
                content: "服务器出错啦，是否重新加载",
                showCancel: !1
            });
            var r = wx.getStorageSync("user-token") || "";
            r && (0, _common.getUtoken)(r).then(function(r) {
                var i = n.info.degree, s = n.info.class_id, o = n.info.cla_class_type, c = "", u = {
                    utoken: r,
                    url: a,
                    levelId: i,
                    classId: s
                };
                c = t.setwebviewurl(u, o), t.confirmOption = {
                    type: "confirm",
                    cancelTxt: "取消",
                    submitTxt: "去诊断",
                    title: e.popTitle,
                    content: e.popContent
                }, t.showConfirm = !0, t.$apply(), t.$invoke("confirm", "show").then(function() {
                    wx.setStorage({
                        key: "webViewUrl",
                        data: c,
                        success: function(e) {
                            t.showConfirm = !1, wx.navigateTo({
                                url: "/pages/banner/banner"
                            }), t.$apply();
                        }
                    });
                }, function() {
                    t.showConfirm = !1, t.$apply();
                });
            });
        }
    }, {
        key: "setwebviewurl",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = e.utoken && -1 !== e.url.indexOf("?") ? "&" : "?", a = t ? "&detailtype=" + t : "";
            return "" + e.url + n + "utoken=" + e.utoken + "&levelid=" + e.levelId + "&classid=" + e.classId + "&wechat=wx" + a;
        }
    }, {
        key: "toChangeGrade",
        value: function() {
            var e = this, t = wx.getStorageSync("weChatExpress").name;
            t.length > 10 && (t = t.substring(0, 10) + "...");
            var n = "当前学员" + t + "，该学员年级与课程年级不符，请修改后报名";
            this.confirmOption = {
                type: "thirdConfirm",
                cancelTxt: "取消",
                submitTxt: "修改年级",
                submitSecTxt: "切换学员",
                title: "报名失败",
                content: n
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
                url: "/pages/searchgrade/searchgrade?cityInfo=" + e
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
        value: function(e, t, n) {
            var a = this;
            this.confirmOption = {
                type: "confirm",
                cancelTxt: "知道了",
                submitTxt: "下载APP",
                title: e,
                content: t
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                a.isDown = !0, a.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                a.downAppdataReport(n), a.showConfirm = !1, a.$apply();
            }, function() {
                a.showConfirm = !1, a.$apply();
            });
        }
    }, {
        key: "downAppdataReport",
        value: function(e) {}
    }, {
        key: "getReasonData",
        value: function(e, t, n) {}
    }, {
        key: "getSameClass",
        value: function() {
            var e = this, t = this, n = wx.getStorageSync("userInfoStatus"), a = _path2.default.getsamecontinueclass, r = {}, i = {
                area_code: n.area_code,
                stu_id: n.stu_id,
                cla_id: this.claId
            }, s = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, i, s)) && (0, _common.axios)({
                url: a,
                data: i,
                header: s
            }).then(function(n) {
                var a = n.data;
                if (a && 0 === a.error_code) {
                    var i = a.data && a.data.classInfo;
                    if (i && i.length) {
                        if (t.nowReadClass = i, t.regId = t.nowReadClass[0].reg_id, "2" === t.nowReadClass[0].cla_class_type) t.nowReadClass[0].cla_class_type = 2; else if ("4" === t.nowReadClass[0].cla_class_type) {
                            t.nowReadClass[0].cla_class_type = 4, t.nowReadClass[0].show_teacher_list = [];
                            var s = t.nowReadClass[0].tea_teacher_list;
                            s.forEach(function(e) {
                                t.nowReadClass[0].show_teacher_list.push({
                                    id: e.tea_id,
                                    name: e.tea_teacher_name,
                                    url: e.tea_picture_url
                                });
                            });
                        }
                        e.changeValue = !1, r = {
                            now: e.nowReadClass,
                            will: e.willChangeClass,
                            boolean: e.changeValue,
                            regId: e.regId,
                            type: t.nowReadClass[0].cla_class_type
                        }, e.$emit("get-change-calss-data", r);
                    }
                    t.$apply();
                } else t.$invoke("taltoast", "show", {
                    message: a.error_msg || "系统错误",
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
                var n = wx.getStorageSync("weChatExpress");
                if (n) return wx.getStorageSync("userInfoStatus") || (n.saved = !0, console.log("新数据缓存后", n), 
                wx.setStorageSync("userInfoStatus", n)), wx.setStorageSync("user-token", n.token), 
                void e(n);
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
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.loginCheck(t);

                      case 2:
                        this.$invoke("taltoast", "show", {
                            message: "正在报名中..."
                        }), this.getRegist();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loginCheck",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = null, e.next = 3, this.getConsumerInfo(t);

                      case 3:
                        if (n = e.sent, n.token) {
                            e.next = 7;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 7:
                        if (n.bind_phone) {
                            e.next = 10;
                            break;
                        }
                        return wx.redirectTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 10:
                        if (n.complete) {
                            e.next = 13;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/cityclass?page=cityclass"
                        }), e.abrupt("return");

                      case 13:
                        if (1 !== this.info.cla_class_type) {
                            e.next = 16;
                            break;
                        }
                        return this.$emit("teacherTapNew"), e.abrupt("return");

                      case 16:
                        this.mergeConsumerInfo(n);

                      case 17:
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
                user_id: e.stu_id,
                user_name: e.name,
                city: e.area_name,
                city_code: e.area_code,
                grade_id: e.grade,
                grade: e.grade_name,
                union_id: e.union_id || wx.getStorageSync("unid")
            };
            app.XesAnalyticsMP.setProfile(t);
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = detailFixBar;