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
});

var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), banner = function(e) {
    function t() {
        var e, o, n, a;
        _classCallCheck(this, t);
        for (var r = arguments.length, i = Array(r), u = 0; u < r; u++) i[u] = arguments[u];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "学而思",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 100,
            backgroundTextStyle: "dark"
        }, n.data = {
            platfromUrl: "",
            material_url: ""
        }, a = o, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.onloadJudge(e);
        }
    }, {
        key: "onloadJudge",
        value: function(e) {
            e && e.scene ? this.getRequestScene(e.scene) : this.toWebView();
        }
    }, {
        key: "toWebView",
        value: function() {
            var e = wx.getStorageSync("webViewUrl");
            this.material_url = e;
        }
    }, {
        key: "getRequestScene",
        value: function(e) {
            wx.setStorageSync("scene", e);
            var t = this, o = _path2.default.getfilters, n = {
                scene: e
            };
            _wepy2.default.request({
                url: o,
                data: n,
                method: "POST"
            }).then(function(e) {
                var o = e.data;
                0 === o.error_code ? (o && o.data && o.data.params && o.data.params.entry && t.getIdentityStatus(), 
                t.platfromUrl = o.data.params.platfromUrl, t.$apply()) : wx.showToast({
                    title: o.error_msg || "请求接口失败",
                    icon: "none",
                    duration: 2e3
                });
            }).catch(function(e) {
                console.error("哎呀报错了~" + e);
            });
        }
    }, {
        key: "productQrcode",
        value: function(e) {
            var t = _path2.default.wxacodeunlimit, o = {
                page: "pages/banner/banner",
                params: {
                    entry: "evaluation"
                }
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: t,
                data: o
            }).then(function(e) {});
        }
    }, {
        key: "getIdentityStatus",
        value: function() {
            var e = this, t = wx.getStorageSync("openid"), o = _path2.default.getinfo, n = {
                open_id: t
            };
            (0, _common.axios)({
                url: o,
                data: n
            }).then(function(t) {
                var o = t.data;
                o && 0 === o.error_code ? e.mergeIdentityStatus(o) : wx.showToast({
                    title: o.error_msg || "请求接口失败",
                    icon: "none",
                    duration: 2e3
                });
            }).catch(function(e) {
                console.error("哎呀报错了~" + e);
            });
        }
    }, {
        key: "mergeIdentityStatus",
        value: function(e) {
            var t = e.data;
            t.is_new ? this.newTouristInfo(t) : this.isUserStatus(t);
        }
    }, {
        key: "newTouristInfo",
        value: function(e) {
            var t = this, o = {
                grd_id: e.grade_id,
                grd_name: e.grade_name,
                cla_gt_name: "",
                cla_gt_id: "",
                city_code: e.area_code,
                city_name: e.area_name,
                is_new: e.is_new
            };
            wx.setStorage({
                key: "anonymous",
                data: o,
                success: function() {
                    t.setTouristInfo(), wx.navigateTo({
                        url: "/pages/authorize/index?from=webview"
                    });
                },
                fail: function(e) {
                    console.error("报错了~" + e);
                }
            });
        }
    }, {
        key: "isUserStatus",
        value: function(e) {
            e.token ? this.userInfo(e) : this.usedTouristInfo(e);
        }
    }, {
        key: "userInfo",
        value: function(e) {
            var t = e.token;
            wx.setStorageSync("user-token", t);
            var o = this, n = _path2.default.baseinfo, a = {
                authorization: t
            };
            (0, _global.isHaveObjectValue)(a) && (0, _common.axios)({
                url: n,
                header: a
            }).then(function(e) {
                var t = e.data;
                t && 0 === t.error_code ? o.mergeUserInfo(t) : wx.showToast({
                    title: t.error_msg || "请求接口失败",
                    icon: "none",
                    duration: 2e3
                });
            }).catch(function(e) {
                console.error("哎呀报错了~" + e);
            });
        }
    }, {
        key: "mergeUserInfo",
        value: function(e) {
            var t = e.data;
            this.getResult(t) ? this.completeUser(t) : this.notCompleteUser(t);
        }
    }, {
        key: "completeUser",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = this;
            wx.setStorage({
                key: "userInfoStatus",
                data: e,
                success: function() {
                    t ? o.mergeNotCompleteUser() : o.mergeUrlInfo();
                },
                fail: function(e) {
                    console.error("报错了~" + e);
                }
            });
        }
    }, {
        key: "mergeUrlInfo",
        value: function() {
            var e = this, t = wx.getStorageSync("user-token");
            t && (0, _common.getUtoken)(t).then(function(t) {
                var o = e.platfromUrl + "?utoken=" + t;
                wx.setStorage({
                    key: "webViewUrl",
                    data: o,
                    success: function() {
                        e.material_url = o, e.$apply();
                    },
                    fail: function(e) {
                        console.error("报错了~" + e);
                    }
                });
            });
        }
    }, {
        key: "mergeNotCompleteUser",
        value: function() {
            this.loadSetPath({
                url: "detail"
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
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, o = void 0 !== t && t, n = e.url, a = void 0 === n ? "home" : n, r = e.mun, i = void 0 === r ? 0 : r, u = e.implement, s = void 0 !== u && u, l = e.clickName, c = void 0 === l ? "signup" : l;
            wx.setStorageSync("pagePath", {
                share: o,
                url: a,
                mun: i,
                implement: s,
                clickName: c
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
            this.newTouristInfo(e);
        }
    }, {
        key: "setTouristInfo",
        value: function() {
            var e = wx.getStorageSync("anonymous"), t = wx.getStorageSync("openid"), o = _path2.default.setinfo, n = {
                open_id: t,
                grade_id: e.grd_id,
                grade_name: e.grd_name,
                area_code: e.city_code,
                area_name: e.city_name
            };
            (0, _global.isHaveObjectValue)(n) && (0, _common.axios)({
                url: o,
                data: n
            }).then(function(e) {
                var t = e.data;
                if (t && t.data && 0 === t.error_code) {
                    var o = t.data.set_result ? "游客模式设置成功" : "游客模式设置失败";
                    wx.setStorageSync("TouristStatus", o);
                } else wx.showToast({
                    title: t.error_msg || "请求接口失败",
                    icon: "none",
                    duration: 1e3
                });
            }).catch(function(e) {
                console.error("哎呀报错了~" + e);
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(banner, "pages/conmmonwebview/index"));