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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), app = getApp(), Login = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.props = {
            isShow: Boolean
        }, o.data = {}, o.methods = {
            getUserInfoFn: function(e) {
                var t = wx.getStorageSync("unid"), n = this;
                this.loadSetPath({
                    url: "unionEnroll"
                }), e.detail.encryptedData ? (app.sensors.track("allow_sq", {
                    allow_sq: "允许授权"
                }), t ? n.userAllowFunc(t) : this.getUnionId(e).then(function(e) {
                    e && n.userAllowFunc(e);
                })) : (app.sensors.track("refuse_sq", {
                    refuse_sq: "拒绝授权"
                }), wx.showModal({
                    title: "",
                    content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                    showCancel: !1,
                    confirmText: "我知道了"
                }));
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getUnionId",
        value: function(e) {
            return new Promise(function(t, n) {
                var o = wx.getStorageSync("openid");
                if (!(e && e.detail.iv && e.detail.encryptedData && o)) return !1;
                var r = _path2.default.getUnionid, a = {
                    iv: e.detail.iv,
                    encryptedData: e.detail.encryptedData,
                    open_id: o
                };
                (0, _common.axios)({
                    url: r,
                    data: a
                }).then(function(e) {
                    var n = e.data;
                    0 === n.error_code ? (wx.setStorageSync("unid", n.data.union_id), t(n.data.union_id)) : (wx.showToast({
                        title: n.error_msg,
                        icon: "none",
                        duration: 1e3
                    }), t(!1));
                });
            });
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, n = void 0 !== t && t, o = e.url, r = void 0 === o ? "home" : o, a = e.mun, i = void 0 === a ? 0 : a, u = e.implement, s = void 0 !== u && u, l = e.clickName, c = void 0 === l ? "signup" : l;
            wx.setStorageSync("pagePath", {
                share: n,
                url: r,
                mun: i,
                implement: s,
                clickName: c
            });
        }
    }, {
        key: "userAllowFunc",
        value: function(e) {
            var t = this;
            this.getConsumerInfo(e).then(function(e) {
                e.token ? e.bind_phone ? e.complete ? t.$emit("loginCallback") : wx.navigateTo({
                    url: "/pages/loginRelevant/cityclass?page=cityclass"
                }) : wx.redirectTo({
                    url: "/pages/loginRelevant/bindphone"
                }) : wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone"
                });
            });
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
    } ]), t;
}(_wepy2.default.component);

exports.default = Login;