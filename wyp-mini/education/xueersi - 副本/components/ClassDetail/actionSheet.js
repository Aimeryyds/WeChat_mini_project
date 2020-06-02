function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(o, i) {
                try {
                    var s = t[o](i), r = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(r).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(r);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _confirm = require("./../Commons/confirm.js"), _confirm2 = _interopRequireDefault(_confirm), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), TalActionSheet = function(e) {
    function t() {
        var e, a, n, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.data = {
            sumRegistresult: 1,
            imgList: {
                defaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png",
                checkType: "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1583745911669.png",
                notCheckType: "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1583745944000.png"
            },
            visible: !1,
            changeValue: !0,
            nowReadClass: [],
            aniMain: {},
            aniMask: {},
            timer: null,
            aniConfig: {
                duration: 300,
                timingFunction: "ease"
            },
            confirmOption: {
                type: "confirm",
                cancelTxt: "",
                submitTxt: "",
                title: "",
                content: ""
            },
            showConfirm: !1
        }, n.$repeat = {}, n.$props = {
            confirm: {
                "xmlns:v-bind": "",
                "v-bind:option.sync": "confirmOption",
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            taltoast: _toast2.default,
            confirm: _confirm2.default
        }, n.props = {
            info: {},
            tutorDisable: {
                type: Boolean,
                default: !0
            },
            willChangeClass: [],
            teacherList: {}
        }, n.watch = {
            teacherList: function(e) {
                var t = this;
                e.forEach(function(e) {
                    e.checked && (t.tutorDisable = !e.checked);
                });
            }
        }, n.computed = {
            isiPhoneX: function(e) {
                return _wepy2.default.$instance.globalData.isiPhoneX;
            }
        }, n.methods = {
            goDetail: function(e) {
                var t = e.tutorId, a = e.accountType;
                t && 1 === a ? wx.navigateTo({
                    url: "/pages/teacherDetails/index?id=" + t + "&teacherType=1&opSource=choose_tutor"
                }) : wx.navigateTo({
                    url: "/pages/teacherDetails/virtual?id=" + t
                });
            },
            closes: function() {
                this.hideLayer();
            },
            concealFrame: function() {
                this.hideLayer();
            },
            loadErrorImg: function(e) {
                this.teacherList[e].picture_url = this.imgList.defaultImg;
            },
            selectChange: function(e, t) {
                var a = this, n = e.detail.value;
                this.teacherList.forEach(function(e, t) {
                    return String(n) !== String(t) ? void (e.checked = !1) : e.left ? (e.checked = !0, 
                    a.claId = e.class_id, a.$emit("get-target-class-id", e.class_id), void a.$apply()) : void (e.checked = !1);
                });
            },
            tutorDone: function() {
                this.proUserResult(), this.getUserResult();
            }
        }, o = a, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "proUserResult",
        value: function() {
            var e = wx.getStorageSync("unid"), t = this.isUserStatus();
            if (!this.tutorDisable) {
                if (!e) return void (this.isGetbtn = !0);
                if (!t) return this.$invoke("taltoast", "hide"), void wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone"
                });
                this.$invoke("taltoast", "show", {
                    message: "正在报名中...",
                    duration: 2e3
                }), this.hideLayer();
            }
        }
    }, {
        key: "getUserResult",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = null, a = null, a = wx.getStorageSync("userInfoStatus")) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        if (a.bind_phone) {
                            e.next = 7;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 7:
                        return a.complete || wx.navigateTo({
                            url: "/pages/loginRelevant/cityclass?page=cityclass"
                        }), e.next = 10, this.preTime();

                      case 10:
                        t = e.sent, t && this.getRegist();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "preTime",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var a = wx.getStorageSync("userInfoStatus"), n = _path2.default.getregisttimebyclassid, o = {
                    area_code: e.areaCode || a.area_code,
                    stu_id: a.stu_id,
                    cla_id: e.claId || wx.getStorageSync("storage-details").applet_cla_id
                }, i = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, o, i)) && (0, _common.axios)({
                    url: n,
                    data: o,
                    header: i
                }).then(function(a) {
                    var n = a.data;
                    if (n && 0 === n.error_code) {
                        var o = e.computeDate(n.data);
                        return void t(o);
                    }
                    e.$invoke("taltoast", "show", {
                        message: n.error_msg || "未设置网报时间",
                        duration: 2e3
                    });
                });
            });
        }
    }, {
        key: "getRegist",
        value: function() {
            var e = this, t = _path2.default.regist, a = {
                class_id: this.claId || wx.getStorageSync("currentClassDetail").cla_id,
                course_id: this.info.course_id,
                business_type: this.info.businessType
            }, n = {
                authorization: wx.getStorageSync("user-token")
            };
            this.sumRegistresult = 1, console.log("getRegist========在线a", _extends({}, a, n)), 
            (0, _common.axios)({
                url: t,
                data: a,
                header: n
            }).then(function(t) {
                var a = t.data;
                a && 0 === a.error_code ? e.getRegistResult(a.data.request_id) : a && 20124 === a.error_code && e.$invoke("taltoast", "show", {
                    message: a.error_msg || "系统错误",
                    duration: 2e3
                });
            }).catch(function(t) {
                e.$invoke("taltoast", "hide");
            });
        }
    }, {
        key: "interceptResultType",
        value: function() {
            this.sumRegistresult++, this.$apply();
        }
    }, {
        key: "mergeResultErrorCode",
        value: function(e, t) {
            var a = this, n = {}, o = this;
            if (n = {
                0: function() {
                    a.$invoke("taltoast", "show", {
                        message: "报名成功",
                        duration: 2e3
                    }), wx.navigateTo({
                        url: "/pages/courselist/coursepay",
                        success: function() {
                            o.$invoke("taltoast", "hide");
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
                    a.confirmOption = {
                        type: "confirm",
                        cancelTxt: "关闭",
                        submitTxt: "联系客服",
                        title: e.data.popTitle,
                        content: e.data.popContent
                    }, a.showConfirm = !0, a.$apply(), a.$invoke("confirm", "show").then(function() {
                        a.showConfirm = !1, wx.makePhoneCall({
                            phoneNumber: e.data.serviceTel
                        }), a.$apply();
                    }, function() {
                        a.showConfirm = !1, a.$apply();
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
                    a.confirmOption = {
                        type: "confirm",
                        cancelTxt: "我知道了",
                        submitTxt: "去查看",
                        title: "您已报名该班级",
                        content: "若未缴费，请抓紧时间缴费"
                    }, a.showConfirm = !0, a.$apply(), a.$invoke("confirm", "show").then(function() {
                        a.showConfirm = !1, wx.navigateTo({
                            url: "/pages/personcenter/personinfo"
                        }), a.$apply();
                    }, function() {
                        a.showConfirm = !1, a.$apply();
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
                var i = wx.getStorageSync("storage-details-mp"), s = {
                    toast_value: e.error_msg || "没有返回任何结果"
                }, r = _extends({}, i, s);
                app.XesAnalyticsMP.track("132-1198", r);
            }
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
        key: "toDetection",
        value: function(e) {
            var t = this, a = e.evaluationUrl;
            if (!a) return void wx.showModal({
                title: "提示",
                content: "服务器出错啦，是否重新加载",
                showCancel: !1
            });
            var n = wx.getStorageSync("user-token") || "";
            n && (0, _common.getUtoken)(n).then(function(n) {
                var o = t.info.degree, i = t.info.class_id, s = t.info.cla_class_type, r = "", c = {
                    utoken: n,
                    url: a,
                    levelId: o,
                    classId: i
                };
                r = t.setwebviewurl(c, s), t.confirmOption = {
                    type: "confirm",
                    cancelTxt: "取消",
                    submitTxt: "去诊断",
                    title: e.popTitle,
                    content: e.popContent
                }, t.showConfirm = !0, t.$apply(), t.$invoke("confirm", "show").then(function() {
                    t.showConfirm = !1, wx.setStorage({
                        key: "webViewUrl",
                        data: r,
                        success: function(e) {
                            wx.navigateTo({
                                url: "/pages/banner/banner"
                            });
                        }
                    }), t.$apply();
                }, function() {
                    t.showConfirm = !1, t.$apply();
                });
            });
        }
    }, {
        key: "toSelectClass",
        value: function(e) {
            var t = this, a = e.classLevelDegree, n = e.classLevelName, o = this.info.area_code, i = this.info.grade_id, s = this.info.grade_name, r = wx.getStorageSync("weChatExpress").area_name || wx.getStorageSync("userInfoStatus").area_name, c = {
                subject: this.info.subject_name || "学科",
                subjectId: this.info.subject_id || "",
                term: this.info.term_name || "学期",
                termId: this.info.term_id || "",
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
                city_code: o,
                grd_id: i,
                grd_name: s,
                city_name: r
            }, u = JSON.stringify(c);
            this.confirmOption = {
                type: "confirm",
                cancelTxt: "取消",
                submitTxt: "去选课",
                title: e.popTitle,
                content: e.popContent
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                t.showConfirm = !1, wx.navigateTo({
                    url: "/pages/classlist/classlist?filter=" + u + "&toSelect=" + !0
                }), t.$apply();
            }, function() {
                t.showConfirm = !1, t.$apply();
            });
        }
    }, {
        key: "setwebviewurl",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = e.utoken && -1 !== e.url.indexOf("?") ? "&" : "?", n = t ? "&detailtype=" + t : "";
            return "" + e.url + a + "utoken=" + e.utoken + "&levelid=" + e.levelId + "&classid=" + e.classId + "&wechat=wx" + n;
        }
    }, {
        key: "commonReasonData",
        value: function(e) {
            if (e) {
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
        }
    }, {
        key: "getRegistResult",
        value: function(e) {
            var t = this, a = {
                area_code: this.info.area_code || wx.getStorageSync("userInfoStatus").area_code,
                request_id: e,
                year: this.info.year,
                grade_id: this.info.grade_id,
                grade_name: this.info.grade_name,
                term_id: this.info.term_id,
                term_name: this.info.term_name,
                subject_id: this.info.subject_id,
                subject_name: this.info.subject_name,
                class_type: this.info.cla_class_type
            }, n = {
                authorization: wx.getStorageSync("user-token")
            }, o = _path2.default.registresult, i = {};
            1 !== this.info.cla_class_type && (i = {
                class_level_degree: this.info.degree,
                class_level: this.info.levelId,
                class_id: this.info.class_id || wx.getStorageSync("currentClassDetail").cla_id
            }), this.sumRegistresult >= 5 || (a = _extends({}, a, i), (0, _global.isHaveObjectValue)(_extends({}, a, n)) && (0, 
            _common.axios)({
                url: o,
                data: a,
                header: n
            }).then(function(a) {
                a && (t.interceptResultType(), t.mergeResultErrorCode(a.data, e), t.commonReasonData(a.data));
            }).catch(function(e) {
                t.$invoke("taltoast", "hide"), e.code = "9999999999", e.message = "请求接口失败", t.getReasonData(e.code, e.message, "失败"), 
                t.$apply();
            }));
        }
    }, {
        key: "maskdDtaReport",
        value: function(e, t, a) {
            var n = this;
            this.confirmOption = {
                type: "confirm",
                cancelTxt: "知道了",
                submitTxt: "下载APP",
                title: e,
                content: t
            }, this.showConfirm = !0, this.$apply(), this.$invoke("confirm", "show").then(function() {
                n.isDown = !0, n.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                n.downAppdataReport(a), n.showConfirm = !1, n.$apply();
            }, function() {
                n.showConfirm = !1, n.$apply();
            });
        }
    }, {
        key: "getSameClass",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), a = _path2.default.getsamecontinueclass, n = {}, o = {
                area_code: t.area_code,
                stu_id: t.stu_id,
                cla_id: this.claId
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, o, i)) && (0, _common.axios)({
                url: a,
                data: o,
                header: i
            }).then(function(t) {
                var a = t.data;
                if (a && 0 === a.error_code) {
                    var o = a.data.classInfo;
                    if (o.length && (e.nowReadClass = o, e.regId = e.nowReadClass[0].reg_id, 1 === e.nowReadClass[0].cla_class_type)) {
                        e.nowReadClass[0].cla_class_type = 1, e.nowReadClass[0].show_teacher_list = [];
                        e.nowReadClass[0].tea_teacher_list.forEach(function(t) {
                            e.nowReadClass[0].show_teacher_list.push({
                                id: t.tea_id,
                                name: t.tea_teacher_name,
                                url: t.tea_picture_url
                            });
                        }), e.changeValue = !1, n = {
                            now: e.nowReadClass,
                            will: "",
                            boolean: e.changeValue,
                            regId: e.regId,
                            type: e.nowReadClass[0].cla_class_type
                        }, e.$emit("get-change-calss-data", n);
                    }
                    e.$apply();
                } else e.$invoke("taltoast", "show", {
                    message: a.error_msg || "系统错误",
                    duration: 2e3
                });
            });
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
        key: "computeDate",
        value: function(e) {
            var t = this;
            if (e) {
                var a = new Date(e.appPreTime.substring(0, 10)).getTime() + e.appPreTime.substring(11, 19).replace(":", "").replace(":", ""), n = new Date(e.appOldRegistTime.substring(0, 10)).getTime() + e.appOldRegistTime.substring(11, 19).replace(":", "").replace(":", ""), o = new Date(e.serverTime.substring(0, 10)).getTime() + e.serverTime.substring(11, 19).replace(":", "").replace(":", ""), i = !0;
                return Number(a) <= Number(o) && Number(o) < Number(n) && (this.$invoke("taltoast", "hide"), 
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
            var n = wx.getStorageSync("storage-details"), o = {
                applet_course_sign_up_result: "报名" === a ? "未知" : a,
                applet_course_sign_up_result_id: e,
                applet_course_sign_up_result_detail: t || "报名成功"
            }, i = _extends({}, n, o);
            app.sensors.track("applet_course_sign_up_result", i);
        }
    }, {
        key: "isUserStatus",
        value: function() {
            return !!wx.getStorageSync("user-token");
        }
    }, {
        key: "hideLayer",
        value: function() {
            var e = this, t = wx.createAnimation(this.aniConfig).bottom("-100%").step();
            this.aniMain = t.export();
            var a = wx.createAnimation(this.aniConfig).opacity(0).step();
            this.aniMask = a.export(), this.$apply(), clearTimeout(this.timer), this.timer = setTimeout(function() {
                e.visible = !1, e.$apply();
            }, 300);
        }
    }, {
        key: "showLayer",
        value: function() {
            this.teacherList.forEach(function(e) {
                e.checked && (e.checked = !e.checked);
            }), this.visible = !0, this.tutorDisable = !0;
            var e = wx.createAnimation(this.aniConfig).bottom(0).step();
            this.aniMain = e.export();
            var t = wx.createAnimation(this.aniConfig).opacity(1).step();
            this.aniMask = t.export(), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = TalActionSheet;