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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _vercode = require("./../../components/LoginRelated/vercode.js"), _vercode2 = _interopRequireDefault(_vercode), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), inputVercode = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationBarTitleText: "",
            navigationBarTextStyle: "white",
            navigationBarBackgroundColor: "#3F4460"
        }, o.$repeat = {}, o.$props = {
            vercode: {
                "xmlns:v-bind": "",
                "v-bind:pageHide.sync": "pageHide",
                "v-bind:catchfocus.sync": "setfocus",
                "v-bind:userAccount.sync": "phonenumber",
                "v-bind:showwrongmes.sync": "isWrong",
                "v-bind:Route.sync": "pageRoute"
            }
        }, o.$events = {}, o.components = {
            vercode: _vercode2.default
        }, o.data = {
            pageHide: !1,
            phonenumber: "",
            setfocus: !0,
            messageShow: "",
            timer: 0,
            timeStatus: !1,
            masgs: "验证码有误，请重新输入",
            isWrong: !1,
            pageRoute: !1
        }, o.methods = {
            set_focus: function() {
                this.setfocus = !1;
            },
            sendagain: function() {
                this.timeStatus && (this.timeStatus = !1, this.sendCode());
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onHide",
        value: function() {
            this.pageHide = !0;
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.pageRoute = !!e.bindphone, this.phonenumber = e.phoneNumber, this.countDown();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.pageHide = !0, this.timer && clearInterval(this.timer);
        }
    }, {
        key: "countDown",
        value: function() {
            var e = this, t = 59;
            this.messageShow = "等待 59 秒";
            var n = setInterval(function() {
                t--, e.messageShow = "等待 " + t + " 秒", e.$apply(), t < 1 && (clearInterval(n), e.messageShow = "重新发送", 
                e.timeStatus = !0, e.$apply());
            }, 1e3);
            this.timer = n;
        }
    }, {
        key: "sendCode",
        value: function() {
            var e = this, t = _path2.default.sendCode, n = {
                phone: this.phonenumber,
                type: 1
            };
            e.countDown(), (0, _common.axios)({
                url: t,
                data: n
            }).then(function(t) {
                var n = t.data;
                if (n && 0 === n.error_code) return void wx.showToast({
                    title: "验证码已发送",
                    icon: "success",
                    duration: 2e3
                });
                wx.showToast({
                    title: n.error_msg,
                    icon: "none",
                    duration: 2e3
                }), e.isWrong = !0, e.$apply();
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(inputVercode, "pages/loginRelevant/verification"));