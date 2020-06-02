function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _topTips = require("./../../components/Errors/topTips.js"), _topTips2 = _interopRequireDefault(_topTips), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), Inputnumber = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#3F4460",
            backgroundColor: "#3F4460"
        }, r.data = {
            userInfo: {
                phone: "",
                password: "",
                isFocus: !0,
                opacity: .4,
                numDisable: !0
            },
            topSpacing: "0",
            isWrong: !1,
            masgs: ""
        }, r.$repeat = {}, r.$props = {
            tips: {
                "xmlns:v-bind": "",
                "v-bind:isWrong.sync": "isWrong",
                "v-bind:masg.sync": "masgs"
            }
        }, r.$events = {}, r.components = {
            tips: _topTips2.default
        }, r.methods = {
            getCellPhone: function(e) {
                this.clearTips(), this.userInfo.phone = e.detail.value, "" !== this.userInfo.phone.trim() ? "" !== this.userInfo.password.trim() && this.buttonEdit() : this.buttonDefault();
            },
            getpassword: function(e) {
                this.clearTips(), this.userInfo.password = e.detail.value, "" !== this.userInfo.password.trim() ? "" !== this.userInfo.phone.trim() && this.buttonEdit() : this.buttonDefault();
            },
            submitfn: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = _path2.default.login, n = {
                                union_id: wx.getStorageSync("unid"),
                                user_account: this.userInfo.phone,
                                user_password: this.userInfo.password,
                                open_id: wx.getStorageSync("openid")
                            }, !(0, _global.reTextSymbol)(n.user_password)) {
                                e.next = 5;
                                break;
                            }
                            return wx.showToast({
                                title: _wepy2.default.$instance.globalData.tErrorMasg,
                                icon: "none",
                                duration: 2e3
                            }), e.abrupt("return");

                          case 5:
                            (0, _common.axios)({
                                url: t,
                                data: n
                            }).then(function() {
                                var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                    var n, a, o, i, s, u;
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (!(n = t.data) || !n.data || 0 !== n.error_code) {
                                                e.next = 23;
                                                break;
                                            }
                                            if (n.data.saved = !0, r.clearTips(), r.updateStorage(n.data), n.data.bind_phone) {
                                                e.next = 10;
                                                break;
                                            }
                                            return a = n.error_msg || "未完善手机号", r.loginBury(n.error_code, a), wx.navigateTo({
                                                url: "/pages/loginRelevant/bindphone"
                                            }), e.abrupt("return");

                                          case 10:
                                            if (n.data.complete) {
                                                e.next = 15;
                                                break;
                                            }
                                            return o = n.error_msg || "未完善用户信息", r.loginBury(n.error_code, o), wx.navigateTo({
                                                url: "/pages/loginRelevant/cityclass"
                                            }), e.abrupt("return");

                                          case 15:
                                            return i = n.error_msg || "成功", r.loginBury(n.error_code, i), e.next = 19, r.mergeConsumerInfo(n.data);

                                          case 19:
                                            s = e.sent, s && r.goPage(), e.next = 26;
                                            break;

                                          case 23:
                                            u = n.error_msg || "失败", r.loginBury(n.error_code, u), r.clearTips(!0, n.error_msg);

                                          case 26:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e, r);
                                }));
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            }());

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {}
    }, {
        key: "systemPatch",
        value: function() {
            var e = wx.getStorageSync("userAttribute");
            this.topSpacing = "iOS" === e.system ? "120" : "100";
        }
    }, {
        key: "loginBury",
        value: function(e, t) {
            app.sensors.track("login_applet", {
                login_applet_result_id: e,
                login_applet_result_detail: t,
                login_applet_from: "账号密码登录"
            }), app.XesAnalyticsMP.track("132-1194", {
                toast_value: "账号密码登录，" + t
            });
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
    }, {
        key: "getVerCode",
        value: function() {
            wx.navigateTo({
                url: "/pages/loginRelevant/inputphone"
            });
        }
    }, {
        key: "updateStorage",
        value: function(e) {
            var t = {
                complete: e.complete,
                name: e.name,
                grade: e.grade,
                avatar: e.avatar,
                token: e.token,
                is_login: !0,
                state: 2,
                union_id: wx.getStorageSync("unid"),
                bind_phone: e.bind_phone,
                stu_id: e.stu_id,
                stu_number: e.stu_number,
                grade_name: e.grade_name,
                area_code: e.area_code,
                area_name: e.area_name
            };
            wx.setStorageSync("user-token", e.token), wx.setStorageSync("userInfoStatus", e), 
            wx.setStorageSync("weChatExpress", t);
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
                var r = {
                    user_id: e.stu_id,
                    user_name: e.name,
                    city: e.area_name,
                    city_code: e.area_code,
                    grade_id: e.grade,
                    grade: e.grade_name,
                    union_id: e.union_id || wx.getStorageSync("unid")
                };
                app.XesAnalyticsMP.setProfile(r), t(!0);
            });
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
        key: "clearTips",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this.isWrong = e, this.masgs = t, this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Inputnumber, "pages/loginRelevant/numpassword"));