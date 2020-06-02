function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(a, r) {
                try {
                    var s = t[a](r), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(i);
            }
            return o("next");
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

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _topTips = require("./../Errors/topTips.js"), _topTips2 = _interopRequireDefault(_topTips), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), vercode = function(e) {
    function t() {
        var e, n, o, a;
        _classCallCheck(this, t);
        for (var r = arguments.length, s = Array(r), i = 0; i < r; i++) s[i] = arguments[i];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.data = {
            code: [],
            catchfocus: !0,
            userAccount: "",
            showwrongmes: !1,
            masgs: "",
            isWrong: !1,
            topSpacing: "0"
        }, o.props = {
            catchfocus: {
                type: Boolean,
                default: !0,
                twoWay: !0
            },
            userAccount: {
                type: String,
                default: ""
            },
            showwrongmes: {
                type: Boolean,
                default: !1,
                twoWay: !0
            },
            Route: {
                type: Boolean,
                default: !1,
                twoWay: !0
            },
            pageHide: {
                type: Boolean,
                default: !1
            }
        }, o.watch = {
            pageHide: function(e) {
                e && (this.code = [], this.showwrongmes = !1);
            }
        }, o.$repeat = {}, o.$props = {
            tips: {
                "xmlns:v-bind": "",
                "v-bind:isWrong.sync": "isWrong",
                "v-bind:masg.sync": "masgs"
            }
        }, o.$events = {}, o.components = {
            tips: _topTips2.default
        }, o.methods = {
            setFocus: function() {
                this.catchfocus = !this.catchfocus;
            },
            passwordValue: function(e) {
                var t = this;
                this.code = e.detail.value, console.log("==第1步==="), this.setTips("", !1), 6 === this.code.length ? (console.log("==第2步==="), 
                this.catchfocus = !1, this.Route ? (console.log("==第3步==="), t.bindlogin().then(function(e) {
                    e ? (t.code = [], t.showwrongmes = e, t.$apply()) : (t.code = [], t.showwrongmes = !1);
                })) : (console.log("==第4步==="), t.userlogin().then(function(e) {
                    console.log("进方法", e), e ? (console.log("进方法1"), t.code = [], t.showwrongmes = e, 
                    t.$apply()) : (console.log("进方法2"), t.code = [], t.showwrongmes = !1);
                }))) : 0 !== this.code.length && (this.showwrongmes = !1, this.$apply());
            }
        }, a = n, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "systemPatch",
        value: function() {
            var e = wx.getStorageSync("userAttribute");
            e.winHei <= 600 && (this.topSpacing = "iOS" === e.system ? "0" : "500");
        }
    }, {
        key: "onLoad",
        value: function() {
            this.systemPatch();
        }
    }, {
        key: "userlogin",
        value: function() {
            var e = this, t = this, n = wx.getStorageSync("userInfoStatus");
            return new Promise(function(o) {
                var a = {
                    union_id: wx.getStorageSync("unid"),
                    phone: e.userAccount,
                    code: e.code,
                    open_id: wx.getStorageSync("openid")
                }, r = _path2.default.activatelogin;
                (0, _global.isHaveObjectValue)(a) && (0, _common.axios)({
                    url: r,
                    data: a
                }).then(function(a) {
                    var r = a.data;
                    if (r && 0 === r.error_code) {
                        var s = r.data ? r.data : {}, i = r.error_msg || "成功";
                        if (t.loginBury(r.error_code, i), wx.setStorageSync("user-token", s.token), t.recordUserInfo(s), 
                        s.complete) e.mergeConsumerInfo(n).then(function(t) {
                            e.goPage();
                        }); else {
                            var u = r.error_msg || "未完善信息";
                            t.loginBury(r.error_code, u), wx.navigateTo({
                                url: "/pages/loginRelevant/cityclass"
                            });
                        }
                        o(!1);
                    } else {
                        var c = r.error_msg || "失败";
                        t.setTips(r.error_msg), t.loginBury(r.error_code, c), o(!0);
                    }
                });
            });
        }
    }, {
        key: "loginBury",
        value: function(e, t) {
            app.sensors.track("login_applet", {
                login_applet_result_id: e,
                login_applet_result_detail: t,
                login_applet_from: "快捷登录"
            }), app.XesAnalyticsMP.track("132-1194", {
                toast_value: "快捷登录，" + t
            });
        }
    }, {
        key: "bindlogin",
        value: function() {
            var e = this, t = null, n = this, o = wx.getStorageSync("userInfoStatus");
            return new Promise(function(a) {
                var r = {
                    phone: e.userAccount,
                    code: e.code
                }, s = {
                    authorization: wx.getStorageSync("user-token")
                }, i = _path2.default.bindphone;
                (0, _global.isHaveObjectValue)(r) && (0, _common.axios)({
                    url: i,
                    data: r,
                    header: s
                }).then(function() {
                    var r = _asyncToGenerator(regeneratorRuntime.mark(function r(s) {
                        var i;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!(i = s.data) || 0 !== i.error_code) {
                                    e.next = 14;
                                    break;
                                }
                                if (!i.data) {
                                    e.next = 12;
                                    break;
                                }
                                if (o.complete) {
                                    e.next = 7;
                                    break;
                                }
                                wx.navigateTo({
                                    url: "/pages/loginRelevant/cityclass"
                                }), e.next = 12;
                                break;

                              case 7:
                                return e.next = 9, _wepy2.default.$instance.globalData.usersFunc(!0);

                              case 9:
                                clearTimeout(t), t = setTimeout(function() {
                                    n.goPage();
                                }, 1600), a(!1);

                              case 12:
                                e.next = 15;
                                break;

                              case 14:
                                20110 === i.error_code ? (n.setTips(i.error_msg), clearTimeout(t), t = setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 1600), a(!0)) : (n.setTips(i.error_msg), a(!0));

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, r, e);
                    }));
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                }());
            });
        }
    }, {
        key: "mergeConsumerInfo",
        value: function(e) {
            return new Promise(function(t) {
                var n = {
                    applet_user_city: e.area_name,
                    applet_user_grade: e.grade_name,
                    applet_student_id: e.stu_id,
                    applet_user_sex: "男",
                    applet_union_id: wx.getStorageSync("unid"),
                    applet_user_name: e.name,
                    openid: wx.getStorageSync("openid")
                };
                app.sensors.login(e.stu_id), app.sensors.setProfile(n);
                var o = {
                    user_id: e.stu_id,
                    user_name: e.name,
                    city: e.area_name,
                    city_code: e.area_code,
                    grade_id: e.grade,
                    grade: e.grade_name,
                    union_id: e.union_id || wx.getStorageSync("unid")
                };
                app.XesAnalyticsMP.setProfile(o), t(!0);
            });
        }
    }, {
        key: "setTips",
        value: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.masgs = e, this.isWrong = t, this.$apply();
        }
    }, {
        key: "goPage",
        value: function() {
            var e = wx.getStorageSync("pagePath"), t = getCurrentPages(), n = t.length;
            if (-1 !== t[0].route.indexOf("inputphone")) return void wx.reLaunch({
                url: "/pages/classlist/classlist"
            });
            if (e && e.share) {
                if ("detail" === e.url) return e.implement = !0, wx.setStorageSync("pagePath", e), 
                void wx.navigateBack({
                    delta: n
                });
                if ("personinfo" === e.url) return e.implement = !0, wx.setStorageSync("pagePath", e), 
                void wx.navigateBack({
                    delta: n
                });
                if ("index" === e.url) return wx.setStorageSync("pagePath", e), void wx.navigateBack({
                    delta: n
                });
                "home" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                    url: "/pages/classlist/classlist"
                }));
            } else {
                if ("detail" === e.url) return e.implement = !0, wx.setStorageSync("pagePath", e), 
                void wx.navigateBack({
                    delta: n - 2
                });
                if ("personinfo" === e.url) return e.implement = !0, wx.setStorageSync("pagePath", e), 
                void wx.navigateBack({
                    delta: n
                });
                if ("index" === e.url) return wx.setStorageSync("pagePath", e), void wx.navigateBack({
                    delta: n
                });
                if ("home" === e.url) return wx.setStorageSync("pagePath", e), void wx.reLaunch({
                    url: "/pages/classlist/classlist"
                });
                "webview" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                    url: "/pages/banner/banner?path=webview"
                })), "unionEnroll" === e.url && (wx.setStorageSync("pagePath", e), wx.reLaunch({
                    url: "/pages/unionEnroll/index"
                }));
            }
        }
    }, {
        key: "recordUserInfo",
        value: function(e) {
            var t = wx.getStorageSync("weChatExpress") || {}, n = wx.getStorageSync("userInfoStatus") || {};
            t.area_name = e.area_name, t.area_code = e.area_code, t.grade_name = e.grade_name, 
            t.grade = e.grade, t.bind_phone = e.bind_phone, t.complete = e.complete, t.stu_id = e.stu_id, 
            t.token = e.token, t.name = e.name, t.stu_number = e.stu_number, t.is_login = !!e.token, 
            t.state = e.token ? 2 : 1, wx.setStorageSync("weChatExpress", t), n.complete = e.complete, 
            n.bind_phone = e.bind_phone, n.stu_id = e.stu_id, n.name = e.name, n.stu_number = e.stu_number, 
            n.grade = e.grade, n.grade_name = e.grade_name, n.area_code = e.area_code, n.area_name = e.area_name, 
            wx.setStorageSync("userInfoStatus", n);
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = vercode;