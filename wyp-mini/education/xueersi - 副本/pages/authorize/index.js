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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), authorize = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: ""
        }, r.methods = {
            getUserInfoFn: function(e) {
                var t = e.detail;
                this.burialData(t), this.authorizeStatus(t);
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getUnionId",
        value: function(e) {
            var t = this, n = wx.getStorageSync("openid");
            return new Promise(function(r) {
                if (!(e && e.iv && e.encryptedData && n)) return !1;
                var a = _path2.default.getUnionid, o = {
                    iv: e.iv,
                    encryptedData: e.encryptedData,
                    open_id: n
                };
                (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                    url: a,
                    data: o
                }).then(function(e) {
                    var n = e.data;
                    n && 0 === n.error_code ? (wx.setStorageSync("unid", n.data && n.data.union_id), 
                    t.$apply(), r(n.data && n.data.union_id)) : (wx.showToast({
                        title: n.error_msg || "获取用户信息失败",
                        icon: "none",
                        duration: 1e3
                    }), t.$apply(), r(!1));
                });
            });
        }
    }, {
        key: "authorizeStatus",
        value: function(e) {
            "encryptedData" in e ? this.authorizeFunc(e) : wx.showModal({
                title: "",
                content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                showCancel: !1,
                confirmText: "我知道了"
            });
        }
    }, {
        key: "authorizeFunc",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.$instance.globalData.again();

                      case 2:
                        return e.next = 4, this.getUnionId(t);

                      case 4:
                        n = e.sent, n && wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "burialData",
        value: function(e) {
            var t = "encryptedData" in e ? "允许授权" : "拒绝授权";
            app.sensors.track("allow_sq", {
                allow_sq: t
            });
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, n = void 0 !== t && t, r = e.url, a = void 0 === r ? "home" : r, o = e.mun, i = void 0 === o ? 0 : o, u = e.implement, c = void 0 !== u && u, l = e.clickName, s = void 0 === l ? "" : l;
            wx.setStorageSync("pagePath", {
                share: n,
                url: a,
                mun: i,
                implement: c,
                clickName: s
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {}
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(authorize, "pages/authorize/index"));