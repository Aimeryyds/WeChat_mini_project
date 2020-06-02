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
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), banner = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "学而思",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 100,
            backgroundTextStyle: "dark"
        }, r.data = {
            isLoad: !1,
            path: "",
            platfromUrl: "",
            material_url: ""
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "userModes",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.$instance.globalData.usersFunc();

                      case 2:
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
            this.isLoad || this.onShowJudge();
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.isLoad = !0, e.next = 3, this.userModes();

                      case 3:
                        this.onloadJudge(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            this.isLoad = !1;
        }
    }, {
        key: "onShowJudge",
        value: function() {
            var e = this, t = wx.getStorageSync("user-token"), n = wx.getStorageSync("webViewUrl"), r = _wepy2.default.$instance.globalData.webURl, a = this;
            t && (0, _common.getUtoken)(t).then(function(t) {
                if (n && -1 === n.indexOf("?") && -1 !== n.indexOf("evaluation")) {
                    r = r || n;
                    var o = e.ifHaveArges(r), i = r + (o ? "&" : "?") + "utoken=" + t;
                    wx.setStorage({
                        key: "webViewUrl",
                        data: i,
                        success: function() {
                            a.addPageIndex(i);
                        },
                        fail: function(e) {
                            console.error("报错了~" + e);
                        }
                    });
                }
            });
        }
    }, {
        key: "onloadJudge",
        value: function(e) {
            return e && e.scene ? void this.getRequestScene(e.scene) : e && e.path ? void this.getOtherPath(e) : void this.toWebView();
        }
    }, {
        key: "getOtherPath",
        value: function(e) {
            var t = this;
            this.path = e.path;
            var n = this, r = wx.getStorageSync("user-token"), a = wx.getStorageSync("webViewUrl"), o = _wepy2.default.$instance.globalData.webURl;
            r && (0, _common.getUtoken)(r).then(function(e) {
                o = o || a;
                var r = t.ifHaveArges(o), i = o + (r ? "&" : "?") + "utoken=" + e;
                wx.setStorage({
                    key: "webViewUrl",
                    data: i,
                    success: function() {
                        n.addPageIndex(i);
                    },
                    fail: function(e) {
                        console.error("报错了~" + e);
                    }
                });
            });
        }
    }, {
        key: "productQrcode",
        value: function() {
            var e = _path2.default.wxacodeunlimit, t = {
                page: "pages/banner/banner",
                params: {
                    entry: "evaluation"
                }
            };
            (0, _global.isHaveObjectValue)(t) && (0, _common.axios)({
                url: e,
                data: t
            }).then(function(e) {});
        }
    }, {
        key: "toWebView",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = wx.getStorageSync("webViewUrl"), this.material_url = t, this.$apply();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getRequestScene",
        value: function(e) {
            var t = this;
            wx.setStorageSync("scene", e);
            var n = _path2.default.getfilters, r = {
                scene: e
            }, a = void 0;
            (0, _global.isHaveObjectValue)(r) && (0, _common.axios)({
                url: n,
                data: r
            }).then(function(e) {
                if ((a = e.data) && 0 === a.error_code) return void t.loadSceneFunc(a);
                wx.showToast({
                    title: r.error_msg || "请求接口失败",
                    icon: "none",
                    duration: 2e3
                });
            }).catch(function(e) {
                console.error("哎呀报错了~" + e);
            });
        }
    }, {
        key: "loadSceneFunc",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, a, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = wx.getStorageSync("user-token"), r = null, a = "", o = "?", i = null, !(t.data && t.data.params && t.data.params.entry)) {
                            e.next = 14;
                            break;
                        }
                        if (_wepy2.default.$instance.globalData.webURl = t.data.params.platfromUrl, o = -1 !== _wepy2.default.$instance.globalData.webURl.lastIndexOf("&") ? "&" : "?", 
                        !(i = this.openApplet(t.data)) || !n) {
                            e.next = 13;
                            break;
                        }
                        return e.next = 8, (0, _common.getUtoken)(n);

                      case 8:
                        return r = e.sent, a = "" + _wepy2.default.$instance.globalData.webURl + o + "utoken=" + r, 
                        wx.setStorageSync("webViewUrl", a), this.addPageIndex(a), e.abrupt("return");

                      case 13:
                        this.getIdentityStatus();

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "openApplet",
        value: function(e) {
            return !!e.qr_id && (app.sensors.track("open_applet", {
                QR_id: "入学诊断"
            }), !0);
        }
    }, {
        key: "getIdentityStatus",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = wx.getStorageSync("weChatExpress"), this.mergeIdentityStatus(t);

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isCompleteUserInfo",
        value: function(e) {
            return !(e.token && !e.is_new);
        }
    }, {
        key: "mergeIdentityStatus",
        value: function(e) {
            if (e.state > 0) return void this.isUserStatus(e);
            this.newTouristInfo();
        }
    }, {
        key: "newTouristInfo",
        value: function() {
            this.loadSetPath({
                url: "webview"
            }), wx.redirectTo({
                url: "/pages/authorize/index?from=webview"
            });
        }
    }, {
        key: "isUserStatus",
        value: function(e) {
            e.is_login ? this.userInfo() : this.usedTouristInfo(e);
        }
    }, {
        key: "userInfo",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus");
            this.mergeUserInfo(e);
        }
    }, {
        key: "mergeUserInfo",
        value: function(e) {
            this.getResult(e) ? this.completeUser(e) : this.notCompleteUser(e);
        }
    }, {
        key: "completeUser",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = this;
            wx.setStorage({
                key: "userInfoStatus",
                data: e,
                success: function() {
                    t ? n.mergeNotCompleteUser() : n.mergeUrlInfo();
                },
                fail: function(e) {
                    console.error("报错了~" + e);
                }
            });
        }
    }, {
        key: "mergeUrlInfo",
        value: function() {
            var e = this, t = _wepy2.default.$instance.globalData.webURl, n = wx.getStorageSync("user-token");
            n && (0, _common.getUtoken)(n).then(function(n) {
                var r = t + "?utoken=" + n;
                wx.setStorage({
                    key: "webViewUrl",
                    data: r,
                    success: function() {
                        e.addPageIndex(r);
                    },
                    fail: function(e) {
                        console.error("报错了~" + e);
                    }
                });
            });
        }
    }, {
        key: "addPageIndex",
        value: function(e) {
            var t = this;
            e && (this.loadSetPath({
                url: "webview"
            }), wx.redirectTo({
                url: "/pages/classlist/classlist?pageone=webview",
                success: function() {
                    t.material_url = e, t.$apply();
                }
            }));
        }
    }, {
        key: "mergeNotCompleteUser",
        value: function() {
            this.loadSetPath({
                url: "webview"
            }), wx.navigateTo({
                url: "/pages/loginRelevant/cityclass?page=cityclass"
            });
        }
    }, {
        key: "notCompleteUser",
        value: function(e) {
            this.completeUser(e, "not");
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, n = void 0 !== t && t, r = e.url, a = void 0 === r ? "home" : r, o = e.mun, i = void 0 === o ? 0 : o, u = e.implement, s = void 0 !== u && u, c = e.clickName, l = void 0 === c ? "" : c;
            wx.setStorageSync("pagePath", {
                share: n,
                url: a,
                mun: i,
                implement: s,
                clickName: l
            });
        }
    }, {
        key: "getResult",
        value: function(e) {
            for (var t in e) return !!e[t];
        }
    }, {
        key: "usedTouristInfo",
        value: function(e) {
            this.newTouristInfo();
        }
    }, {
        key: "ifHaveArges",
        value: function(e) {
            if (e) return e.indexOf("?") > -1;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(banner, "pages/banner/banner"));