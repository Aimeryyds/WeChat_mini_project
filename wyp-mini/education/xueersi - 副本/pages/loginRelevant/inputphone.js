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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _global = require("./../../common/util/global.js"), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), Inputphone = function(e) {
    function t() {
        var e, o, n, a;
        _classCallCheck(this, t);
        for (var r = arguments.length, i = Array(r), u = 0; u < r; u++) i[u] = arguments[u];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#3F4460"
        }, n.$repeat = {}, n.$props = {
            taltoast: {
                class: "toast"
            }
        }, n.$events = {}, n.components = {
            taltoast: _toast2.default
        }, n.data = {
            phoneText: "手机号",
            getCodeText: "获取验证码",
            userAccount: "",
            numDisable: !0,
            opacity: .4,
            phoneNumber: "",
            topSpacing: "0",
            inputNumMes: "请输入手机号",
            navigateMes: "账号密码登录"
        }, n.methods = {
            userValue: function(e) {
                this.userAccount = e.detail.value, 11 === this.userAccount.length ? (this.numDisable = !1, 
                this.opacity = 1) : (this.numDisable = !0, this.opacity = .4);
            },
            jumpPage: function() {
                (0, _global.validePhone)(this.userAccount) ? this.getVerCode().then(function(e) {
                    e && wx.navigateTo({
                        url: "verification?phoneNumber=" + e
                    });
                }) : wx.showToast({
                    title: "手机号格式不对",
                    icon: "none",
                    duration: 1200
                });
            },
            toLogin: function() {
                wx.navigateTo({
                    url: "/pages/loginRelevant/numpassword"
                });
            }
        }, a = o, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getVerCode",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                var o = {
                    phone: e.userAccount,
                    type: "activateCode"
                }, n = _path2.default.sendCode;
                (0, _common.axios)({
                    url: n,
                    data: o
                }).then(function(n) {
                    console.log("21");
                    var a = n.data;
                    0 === a.error_code ? (console.log("22"), t(o.phone)) : (console.log("23"), wx.showToast({
                        title: a.error_msg,
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
    }, {
        key: "systemPatch",
        value: function() {
            var e = wx.getStorageSync("userAttribute");
            this.topSpacing = "iOS" === e.system ? "0" : "170";
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Inputphone, "pages/loginRelevant/inputphone"));