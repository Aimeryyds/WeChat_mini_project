function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, s) {
                try {
                    var i = t[r](s), o = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
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
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _sensorsdataMin = require("./common/sensorData/sensorsdata.min.js"), _sensorsdataMin2 = _interopRequireDefault(_sensorsdataMin), _staticData = require("./common/util/staticData.js"), _XesAnalyticsMP = require("./common/xesAnalyticsMp/XesAnalyticsMP.js"), _XesAnalyticsMP2 = _interopRequireDefault(_XesAnalyticsMP), _path = require("./common/axios/path.js"), _path2 = _interopRequireDefault(_path), _index = require("./config/index.js"), _gitUserStatus = require("./common/util/gitUserStatus.js"), _dist = require("./npm/xesEncrypt/dist/index.js"), _dist2 = _interopRequireDefault(_dist), _wx_rsa = require("./common/util/wx_rsa.js"), _wx_rsa2 = _interopRequireDefault(_wx_rsa), ENV = "mini", _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [ "pages/classlist/classlist", "pages/familyAccount/myAccount", "pages/familyAccount/addAccount", "pages/loginRelevant/cityclass", "pages/authorize/index", "pages/getCity/index", "pages/searchgrade/searchgrade", "pages/openCity/openCity", "pages/loginRelevant/inputphone", "pages/loginRelevant/bindphone", "pages/loginRelevant/numpassword", "pages/loginRelevant/verification", "pages/personcenter/personinfo", "pages/internal/qrcode", "pages/classlist/pointclasslist", "pages/classlist/activity", "pages/classlist/classdetail/online", "pages/classlist/classdetail/double", "pages/classlist/classdetail/offline", "pages/personcenter/info", "pages/personcenter/addressmanage", "pages/personcenter/addPage", "pages/courselist/coursepay", "pages/courselist/downloadapp", "pages/wait/waitcoursebuy", "pages/alreadypay/alreadypaylist", "pages/courselist/orderdetail", "pages/alreadypay/userProtocol", "pages/courselist/paydone", "pages/courselist/coupon", "pages/conmmonwebview/index", "pages/banner/banner", "pages/teacherDetails/index", "pages/teacherDetails/virtual", "pages/unionEnroll/index", "pages/classlist/classdetail/curriculuminfo" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarTitleText: "WeChat",
                backgroundColor: "#ffffff",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black"
            },
            permission: {
                "scope.userLocation": {
                    desc: "位置信息用于发现附近的校区"
                }
            },
            debug: !0
        }, e.data = {
            userAccount: "",
            userPassword: "",
            is_send_check: !1,
            getVerify: !1,
            msgText: "获取验证码",
            code: "",
            iv: "",
            encryptedData: "",
            unionid: "",
            timer: 0,
            numDisable: !1,
            loginLoading: !1
        }, e.globalData = {
            ABTestConfig: {
                classDetail: {
                    layerId: "mini" === ENV || "pre" === ENV ? 51 : 55,
                    expId: "mini" === ENV || "pre" === ENV ? "97" : "100",
                    experiment: "mini" === ENV || "pre" === ENV ? "44" : "50",
                    compare: "mini" === ENV || "pre" === ENV ? "45" : "51",
                    groupId: ""
                }
            },
            publicKey: "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDfHXp+/Xaz8tp1cz4XKYCWtKAX1hbXGDOizRIppxIykVIgWaG9tgrInzLCKAkSU5MU4zhaFu7Mh2564gos1VYwgPsBpGEVO6Wf4PhjS621JDwh5GGk5wziFQCnGh/FDWT9ZwzN6dRilUBUlplY3IH9CKP7RreM1SSdO4/IQwtEDwIDAQAB-----END PUBLIC KEY-----",
            RSA: _wx_rsa2.default,
            userInfo: null,
            scene: "",
            orderDetail: {},
            recommendCoupon: [],
            couponChanged: !1,
            orderAddr: {},
            orderAddrChanged: !1,
            classListFilter: "",
            classListFilterObject: {},
            GETURL: _path2.default,
            LoadUserList: !0,
            detailsInfo: {},
            appletInfo: {},
            privateKey: "miniXESAPP",
            serverTimastamp: "",
            ReceivingAddressInfo: null,
            webURl: "",
            RecordTimers: +new Date(),
            tErrorMasg: "输入中包含特殊字符，请重新确认",
            dosaveorders: [],
            couponState: [],
            couponStateActive: [],
            pushJosn: [],
            isiPhoneX: !1,
            usersFunc: function() {},
            again: function() {}
        }, e.use("requestfix"), e.use("promisify"), e.intercept("request", {
            config: function(e) {
                this.interceptArguments(e);
                var t = _index.setbaseurl;
                return e.url = "" + t + e.url, e;
            },
            success: function(e) {
                return e;
            },
            fail: function(e) {
                return this.interceptFail(), e;
            }
        }), e;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "interceptFail",
        value: function() {
            wx.showModal({
                title: "提示",
                content: "服务器出错啦，是否重新加载",
                showCancel: !0,
                success: function(e) {
                    if (e.confirm) {
                        var t = getCurrentPages();
                        t = t.reverse(), wx.redirectTo({
                            url: "/" + t[0].route
                        });
                    } else wx.setStorageSync("breakoff", !0);
                }
            });
        }
    }, {
        key: "setRequestHeaderToken",
        value: function(e) {
            return e.header && e.header.authorization ? e.header.authorization : "";
        }
    }, {
        key: "setRequestHeaderTamp",
        value: function(e) {
            return e.header && e.header.timestamp ? e.header.timestamp : this.globalData.RecordTimers;
        }
    }, {
        key: "setRequestHeaderAccid",
        value: function(e) {
            return e.header && e.header.accessid ? e.header.accessid : "";
        }
    }, {
        key: "setRequestHeaderAcckey",
        value: function(e) {
            return e.header && e.header.accesskey ? e.header.accesskey : "";
        }
    }, {
        key: "setRequestHeaderDevid",
        value: function(e) {
            return e.header && e.header.devid ? e.header.devid : "";
        }
    }, {
        key: "setRequestHeaderClientType",
        value: function(e) {
            return e.header && e.header.client_type ? e.header.client_type : "";
        }
    }, {
        key: "interceptArguments",
        value: function(e) {
            var t = this.setRequestHeaderDevid(e), a = this.setRequestHeaderClientType(e), n = this.setRequestHeaderToken(e) || wx.getStorageSync("user-token") || "", r = this.setRequestHeaderTamp(e), s = this.setRequestHeaderAccid(e), i = this.setRequestHeaderAcckey(e), o = "";
            s && i ? (e.header = {
                algorithm: "HmacSHA1",
                timestamp: r,
                nonce: _dist2.default.nonce(),
                accessid: s,
                client_type: 6
            }, o = i) : (e.header = {
                sign: "",
                timestamp: r,
                nonce: _dist2.default.nonce(),
                version: "1.7.0",
                accessid: "mini",
                authorization: n,
                client_type: a,
                devid: t
            }, o = this.globalData.privateKey), e.header.sign = _dist2.default.sign(e, o), e.header.authorization = n, 
            e.header.version = "1.7.0";
            var u = wx.getStorageSync("scene") || "";
            e.header.scene = u;
        }
    }, {
        key: "onLaunch",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.openWechat(a), this.cleartorages(), this.sensorsInit(), this.globalData.usersFunc = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                            var a, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n && wx.setStorageSync("openid", ""), e.next = 3, t.launchClearsto();

                                  case 3:
                                    return a = e.sent, t.goCityPage(a.comUsers), e.abrupt("return", a);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        })), this.globalData.again = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, _gitUserStatus.reauthorization)();

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            this.goCityPage(), this.getSystemInfo();
        }
    }, {
        key: "sensorsInit",
        value: function() {
            _sensorsdataMin2.default.setPara({
                name: "sensors",
                appid: _index.appId,
                server_url: _index.sensorsdataUrl,
                send_timeout: 1e3,
                max_string_length: 300,
                use_client_time: !1,
                show_log: !1,
                allow_amend_share_path: !1,
                autoTrack: {
                    appLaunch: !0,
                    appShow: !0,
                    appHide: !0,
                    pageShow: !0,
                    pageShare: !0
                },
                is_plugin: !1
            });
        }
    }, {
        key: "goCityPage",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = wx.getStorageSync("weChatExpress") || e;
            e && (t.area_code && t.grade || wx.redirectTo({
                url: "/pages/getCity/index"
            }));
        }
    }, {
        key: "launchClearsto",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a, n, r, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (s = wx.getStorageSync("openid") || s, i = wx.getStorageSync("weChatExpress") || i, 
                        o = wx.getStorageSync("userInfoStatus") || o, s) {
                            e.next = 13;
                            break;
                        }
                        return e.next = 6, (0, _gitUserStatus.getLoginState)();

                      case 6:
                        return t = e.sent, a = t.openid, n = t.baseInfo, r = t.comUsers, e.next = 12, this.launchClearsto(a, n, r);

                      case 12:
                        return e.abrupt("return", e.sent);

                      case 13:
                        return _sensorsdataMin2.default.setOpenid(s), _XesAnalyticsMP2.default.setOpenId(s), 
                        _XesAnalyticsMP2.default.setProfile({
                            app_id: _index.appId
                        }), i && i.stu_id ? this.mergeConsumerInfo(i, o, s) : this.mergeAnonymousInfo(), 
                        _sensorsdataMin2.default.init(), this.initGrade(), this.setPageMap(), _XesAnalyticsMP2.default.init({
                            event_env: "prod",
                            proj_id: "xesMP_officeApplet",
                            show_log: !0,
                            auto_track: !0
                        }), e.abrupt("return", {
                            openid: s,
                            baseInfo: i,
                            comUsers: o
                        });

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "mergeAnonymousInfo",
        value: function() {
            var e = wx.getStorageSync("weChatExpress"), t = {
                city: e.area_name,
                city_code: e.area_code,
                grade_id: e.grade,
                grade: e.grade_name
            };
            _XesAnalyticsMP2.default.setProfile(t);
        }
    }, {
        key: "setPageMap",
        value: function() {
            _XesAnalyticsMP2.default.registerPage(_staticData.PAGE_MAP, "setPagesMap");
        }
    }, {
        key: "mergeConsumerInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments[2], n = {
                applet_user_city: e.area_name,
                applet_user_grade: e.grade_name,
                applet_student_id: e.stu_id,
                applet_user_sex: "男",
                applet_union_id: t.union_id,
                applet_user_name: e.name,
                openid: a
            };
            _sensorsdataMin2.default.login(e.stu_id), _sensorsdataMin2.default.setProfile(n);
            var r = {
                user_id: e.stu_id,
                user_name: e.name,
                city: e.area_name,
                city_code: e.area_code,
                grade_id: e.grade,
                grade: e.grade_name,
                union_id: t.union_id
            };
            _XesAnalyticsMP2.default.setProfile(r);
        }
    }, {
        key: "initGrade",
        value: function() {
            var e = {
                changedGrade: "",
                refreshGrade: ""
            };
            wx.setStorageSync("changeGradeState", e);
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            var e = this, t = {};
            wx.getSystemInfo({
                success: function(a) {
                    t.system = a.system.split(" ")[0], t.winHei = a.windowHeight, t.sdkVersion = a.SDKVersion, 
                    wx.setStorageSync("userAttribute", t), e.globalData.isiPhoneX = -1 !== a.model.search("iPhone X");
                }
            });
        }
    }, {
        key: "cleartorages",
        value: function() {
            wx.setStorageSync("webViewUrl", ""), wx.getStorageSync("user-token") || wx.setStorageSync("user-token", "");
        }
    }, {
        key: "openWechat",
        value: function(e) {
            var t = e.scene.toString(), a = this.setSceneValue(t), n = {
                open_applet: "打开小程序",
                from_id: t,
                from_name: a
            };
            this.globalData.appletInfo = n, _sensorsdataMin2.default.track("open_applet", this.globalData.appletInfo);
        }
    }, {
        key: "setSceneValue",
        value: function(e) {
            return _staticData.SCENE_VALUE[e] ? _staticData.SCENE_VALUE[e] : _staticData.SCENE_VALUE.default;
        }
    } ]), t;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));