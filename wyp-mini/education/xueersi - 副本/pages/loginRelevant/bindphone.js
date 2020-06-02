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
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _global = require("./../../common/util/global.js"), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), Inputphone = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#3F4460"
        }, o.data = {
            phoneText: "手机号",
            getCodeText: "获取验证码",
            userAccount: "",
            numDisable: !0,
            opacity: .4,
            phoneNumber: "",
            inputNumMes: "为享受完整服务，请先绑定手机号"
        }, o.methods = {
            userValue: function(e) {
                this.userAccount = e.detail.value, 11 === this.userAccount.length ? (this.numDisable = !1, 
                this.opacity = 1) : (this.numDisable = !0, this.opacity = .4);
            },
            jumpPage: function() {
                clearTimeout(null), (0, _global.validePhone)(this.userAccount) ? this.getVerCode().then(function(e) {
                    e && (console.log(e), console.log("===="), wx.navigateTo({
                        url: "verification?phoneNumber=" + e + "&bindphone=true"
                    }));
                }) : wx.showToast({
                    title: "手机号格式不对",
                    icon: "none",
                    duration: 1200
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getVerCode",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var n = {
                    phone: e.userAccount,
                    type: "bindCode"
                }, o = _path2.default.sendCode;
                (0, _common.axios)({
                    url: o,
                    data: n
                }).then(function(o) {
                    var r = o.data;
                    0 === r.error_code ? t(n.phone) : (wx.showToast({
                        title: r.error_msg,
                        icon: "none",
                        duration: 2e3
                    }), t("")), e.numDisable = !1, e.$apply();
                }).catch(function(t) {
                    e.numDisable = !0, e.$apply();
                });
            });
        }
    }, {
        key: "init",
        value: function() {
            this.userAccount = "", this.numDisable = !0, this.opacity = .4, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.userAccount && (this.numDisable = !1);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Inputphone, "pages/loginRelevant/bindphone"));