function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, o) {
                try {
                    var i = t[r](o), s = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
});

var _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _topTips = require("./../../components/Errors/topTips.js"), _topTips2 = _interopRequireDefault(_topTips), _common = require("./../../common/util/common.js"), _newCommon = require("./../../common/util/newCommon.js"), _global = require("./../../common/util/global.js"), _gradeSelect = require("./../../components/Commons/gradeSelect.js"), _gradeSelect2 = _interopRequireDefault(_gradeSelect), _citySelect = require("./../../components/Commons/citySelect.js"), _citySelect2 = _interopRequireDefault(_citySelect), _form = require("./../../components/familyAccount/form.js"), _form2 = _interopRequireDefault(_form), app = getApp(), cityClass = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "完善信息",
            navigationBarTextStyle: "black",
            navigationBarBackgroundColor: "#fff",
            backgroundColor: "#fff"
        }, n.$repeat = {}, n.$props = {
            gradeSelect: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showGradeSelect",
                "v-bind:currentGradeId.sync": "gradeId",
                "v-bind:gradeList.sync": "gradeList",
                "xmlns:v-on": ""
            },
            citySelect: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showCitySelect",
                "v-bind:currentCityInfo.sync": "cityInfo",
                "v-bind:cityList.sync": "cityList",
                "xmlns:v-on": ""
            },
            chooseForm: {
                "xmlns:v-bind": "",
                "v-bind:name.sync": "userName",
                "v-bind:city.sync": "city",
                "v-bind:grade.sync": "grade",
                "v-bind:isMan.sync": "sex",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            gradeSelect: {
                "v-on:submit": "getGrade"
            },
            citySelect: {
                "v-on:submit": "getCity"
            },
            chooseForm: {
                "v-on:selectCity": "getCity",
                "v-on:selectGrade": "getGrade",
                "v-on:nameChange": "getUserName",
                "v-on:sexChange": "getSex"
            }
        }, n.components = {
            tips: _topTips2.default,
            gradeSelect: _gradeSelect2.default,
            citySelect: _citySelect2.default,
            chooseForm: _form2.default
        }, n.data = {
            show: !0,
            editInfo: {
                isName: !0
            },
            userInfo: {
                numDisable: !0,
                opacity: .4
            },
            cityInfo: {
                city_code: "",
                city_name: "请选择城市",
                default: "cityclass"
            },
            gradeInfo: {
                gradeId: "",
                gradeName: "请选择年级"
            },
            topSpacing: "",
            isWrong: !1,
            masgs: "",
            URL: "cityclass",
            userName: "",
            city: "",
            cityCode: "",
            grade: "",
            gradeId: "",
            sex: null,
            showGradeSelect: !1,
            showCitySelect: !1,
            gradeList: [],
            cityList: [],
            token: ""
        }, n.methods = {
            getCity: function(e) {
                if (e) {
                    var t = e.name, a = e.local_city;
                    this.cityCode = a, this.city = t, this.gradeId = "", this.grade = "", this.getGradeList();
                }
                this.showCitySelect = !this.showCitySelect, this.$apply();
            },
            getGrade: function(e) {
                if (console.log("info", e), e) {
                    var t = e.id, a = e.name;
                    this.gradeId = t, this.grade = a;
                }
                this.showGradeSelect = !this.showGradeSelect, this.$apply();
            },
            getUserName: function(e) {
                var t = this;
                this.userName = e;
                var a = setTimeout(function() {
                    clearTimeout(a), t.$apply();
                }, 100);
            },
            getSex: function(e) {
                this.sex = e, this.$apply();
            },
            submission: function() {
                var e = this, t = this, a = _path2.default.complete, n = wx.getStorageSync("userInfoStatus"), r = {
                    union_id: wx.getStorageSync("unid") || "",
                    name: this.userName || "",
                    grade: this.gradeId || "",
                    area_code: this.cityCode || "",
                    sex: this.sex + "",
                    open_id: wx.getStorageSync("openid") || ""
                }, o = {
                    authorization: this.token
                };
                if ((0, _global.reTextSymbol)(r.name)) return void wx.showToast({
                    title: _wepy2.default.$instance.globalData.tErrorMasg,
                    icon: "none",
                    duration: 2e3
                });
                (0, _global.isHaveObjectValue)(r) && (app.XesAnalyticsMP.track("132-1796"), wx.showLoading({
                    mask: !0
                }), (0, _common.axios)({
                    url: a,
                    data: r,
                    header: o
                }).then(function() {
                    var a = _asyncToGenerator(regeneratorRuntime.mark(function a(r) {
                        var o, i;
                        return regeneratorRuntime.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (o = r.data, wx.hideLoading(), !o || !o.data || 0 !== o.error_code) {
                                    a.next = 13;
                                    break;
                                }
                                if (app.sensors.track("register_applet", {
                                    register_applet: "注册确认提交"
                                }), !o.data) {
                                    a.next = 11;
                                    break;
                                }
                                return a.next = 7, _wepy2.default.$instance.globalData.usersFunc(!0);

                              case 7:
                                return a.next = 9, e.mergeConsumerInfo(n);

                              case 9:
                                i = a.sent, i && t.goPage();

                              case 11:
                                a.next = 14;
                                break;

                              case 13:
                                20119 === o.error_code ? wx.navigateTo({
                                    url: "/pages/loginRelevant/bindphone"
                                }) : wx.showToast({
                                    title: o.error_msg,
                                    icon: "none",
                                    duration: 1e3
                                });

                              case 14:
                              case "end":
                                return a.stop();
                            }
                        }, a, e);
                    }));
                    return function(e) {
                        return a.apply(this, arguments);
                    };
                }()));
            }
        }, n.computed = {
            canSubmit: function() {
                return this.userName && this.gradeId && this.cityCode && this.sex;
            }
        }, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getGradeList",
        value: function() {
            var e = this, t = _path2.default.new_gradelists, a = {
                area_code: this.cityCode,
                data_format: 1
            };
            a.area_code && (0, _common.axios)({
                url: t,
                data: a
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? a.data.rlt.length ? (e.gradeList = a.data.rlt, 
                e.$apply()) : wx.showToast({
                    title: "没有找到城市对应的年级",
                    icon: "none",
                    duration: 1e3
                }) : wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getCityList",
        value: function() {
            var e = this, t = _path2.default.getCityOfSecond;
            (0, _newCommon.newAxios)({
                url: t,
                method: "GET"
            }).then(function(t) {
                t = t || {};
                var a = t.data;
                a && 0 === t.status ? e.cityList = a : wx.showToast({
                    title: a.msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getConsumerInfo",
        value: function() {
            var e = this;
            return new Promise(function(t, a) {
                var n = _path2.default.baseinfo, r = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(r) && (0, _common.axios)({
                    url: n,
                    header: r
                }).then(function(a) {
                    var n = a.data;
                    n && n.data && 0 === n.error_code ? (n.data.saved = !0, wx.setStorageSync("userInfoStatus", n.data), 
                    e.mergeConsumerInfo(n.data), t(n.data)) : wx.showToast({
                        title: n.error_msg,
                        icon: "none",
                        duration: 1e3
                    });
                });
            });
        }
    }, {
        key: "mergeConsumerInfo",
        value: function(e) {
            return new Promise(function(t) {
                var a = {
                    applet_user_city: e.area_name,
                    applet_user_grade: e.grade_name,
                    applet_student_id: e.stu_id,
                    applet_user_sex: "男",
                    applet_union_id: wx.getStorageSync("unid"),
                    applet_user_name: e.name,
                    openid: wx.getStorageSync("openid")
                };
                app.sensors.login(e.stu_id), app.sensors.setProfile(a);
                var n = {
                    user_id: e.stu_id,
                    user_name: e.name,
                    city: e.area_name,
                    city_code: e.area_code,
                    grade_id: e.grade,
                    grade: e.grade_name,
                    union_id: e.union_id || wx.getStorageSync("unid")
                };
                app.XesAnalyticsMP.setProfile(n), t(!0);
            });
        }
    }, {
        key: "verUserName",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var a = e.userName, n = /^[\u4E00-\u9FA5]{1,5}$/;
                a && !n.test(a) ? (e.clearTips(!0, "学生姓名不合法"), e.userName = "", t(!1)) : t(!0);
            });
        }
    }, {
        key: "setInfo",
        value: function(e) {
            this.cityCode = e.area_code || "010", this.city = e.area_name || "北京", this.gradeId = e.grade, 
            this.grade = e.grade_name;
        }
    }, {
        key: "defaultLoad",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || null;
            e ? this.setInfo(e) : wx.setStorageSync("weChatExpress", ""), this.getCityList(), 
            this.getGradeList();
        }
    }, {
        key: "defaultShow",
        value: function() {
            var e = wx.getStorageSync("weChatExpress"), t = wx.getStorageSync("entry");
            t && "cityclass" === t && e && this.setInfo(e);
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.defaultLoad(), this.token = e.stuToken || wx.getStorageSync("user-token");
        }
    }, {
        key: "onShow",
        value: function() {
            this.systemPatch(), this.defaultShow();
        }
    }, {
        key: "systemPatch",
        value: function() {
            var e = wx.getStorageSync("userAttribute");
            this.topSpacing = "iOS" === e.system ? "250" : "0";
        }
    }, {
        key: "goPage",
        value: function() {
            var e = wx.getStorageSync("pagePath"), t = getCurrentPages(), a = t.length;
            if (-1 !== t[0].route.indexOf("inputphone")) return void wx.reLaunch({
                url: "/pages/classlist/classlist"
            });
            e && e.share ? ("detail" === e.url && (e.implement = !0, wx.setStorageSync("pagePath", e), 
            wx.navigateBack({
                delta: a
            })), "personinfo" === e.url && (e.implement = !0, wx.setStorageSync("pagePath", e), 
            wx.navigateBack({
                delta: a
            })), "index" === e.url && (wx.setStorageSync("pagePath", e), wx.navigateBack({
                delta: a
            })), "home" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                url: "/pages/classlist/classlist"
            }))) : ("detail" === e.url && (e.implement = !0, wx.setStorageSync("pagePath", e), 
            wx.navigateBack({
                delta: a - 2
            })), "personinfo" === e.url && (e.implement = !0, wx.setStorageSync("pagePath", e), 
            wx.navigateBack({
                delta: a
            })), "index" === e.url && (wx.setStorageSync("pagePath", e), wx.navigateBack({
                delta: a
            })), "home" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                url: "/pages/classlist/classlist"
            })), "webview" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                url: "/pages/banner/banner?path=webview"
            })), "account" === e.url && (wx.setStorageSync("pagePath", e), wx.navigateBack({
                delta: 1
            })), "unionEnroll" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                url: "/pages/unionEnroll/index"
            })));
        }
    }, {
        key: "clearTips",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this.isWrong = e, this.masgs = t, this.$apply();
        }
    }, {
        key: "buttonDefault",
        value: function() {
            this.userInfo.opacity = .4, this.userInfo.numDisable = !0;
        }
    }, {
        key: "buttonEdit",
        value: function() {
            this.userInfo.opacity = 1, this.userInfo.numDisable = !1;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(cityClass, "pages/loginRelevant/cityclass"));