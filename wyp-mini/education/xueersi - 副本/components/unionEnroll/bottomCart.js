function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, o, n) {
        return o && t(e.prototype, o), n && t(e, n), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _login = require("./../Commons/login.js"), _login2 = _interopRequireDefault(_login), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), app = getApp(), bottomCart = function(t) {
    function e() {
        var t, o, n, a;
        _classCallCheck(this, e);
        for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        n.props = {
            priceInfo: {
                type: Object
            },
            cartList: {
                type: Array,
                default: []
            },
            isLogin: {
                type: Boolean,
                default: !1
            }
        }, n.data = {
            textAnimation: null,
            animatioObj: {}
        }, n.$repeat = {}, n.$props = {
            Login: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "isLogin",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            Login: {
                "v-on:loginCallback": "loginCallback"
            }
        }, n.components = {
            Login: _login2.default,
            taltoast: _toast2.default
        }, n.watch = {
            cartList: function() {
                var t = this;
                this.animatioObj.scale(1.5).step(), this.textAnimation = this.animatioObj.export(), 
                setTimeout(function() {
                    t.animatioObj.scale(1).step(), t.textAnimation = t.animatioObj.export(), t.$apply();
                }, 300);
            }
        }, n.computed = {
            count: function() {
                var t = this.cartList.length;
                return t > 99 ? 99 : t;
            },
            numClass: function() {
                return this.cartList.length > 99 ? "max-num" : this.cartList.length >= 10 ? "double-num" : "";
            }
        }, n.methods = {
            toOrderDetail: function() {
                this.cartList.length && (this.createOrder(), app.sensors.track("dkact_button", {
                    button_name: "立即购买",
                    event_name: "打开活动---多科联报活动"
                }));
            },
            toCoursePay: function() {
                app.sensors.track("dkact_other_button", {
                    button_name: "购课单",
                    event_name: "其他按钮点击—活动主页"
                }), wx.navigateTo({
                    url: "/pages/courselist/coursepay"
                });
            },
            loginCallback: function() {
                wx.getStorageSync("user-token") ? wx.navigateTo({
                    url: "/pages/courselist/coursepay"
                }) : wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone",
                    success: function() {}
                });
            }
        }, a = o, _possibleConstructorReturn(n, a);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            this.animatioObj = wx.createAnimation({
                duration: 300,
                timingFunction: "ease",
                delay: 0
            });
        }
    }, {
        key: "createOrder",
        value: function() {
            var t = this, e = this.cartList.map(function(t) {
                return {
                    registerId: t.registId,
                    classId: t.classId,
                    coupons: [],
                    goodsType: 2,
                    stockId: t.registStagesId,
                    doBundCoupons: 0
                };
            }), o = _path2.default.createorder, n = this, a = wx.getStorageSync("userInfoStatus"), r = {
                classPromotions: e,
                studentId: a.stu_id,
                orderNo: "",
                area: a.area_code
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _common.axios)({
                url: o,
                data: r,
                header: i
            }).then(function(o) {
                var a = o.data;
                return 0 === a.error_code ? (_wepy2.default.$instance.globalData.orderDetail = a.data, 
                _wepy2.default.$instance.globalData.dosaveorders = e, void wx.navigateTo({
                    url: "/pages/courselist/orderdetail"
                })) : 32010 === a.error_code ? void n.addUnchecked() : void t.$invoke("taltoast", "show", {
                    message: a.error_msg || "结算失败，请稍后重试",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "addUnchecked",
        value: function() {
            var t = this;
            t.addShowModal("请前往学而思APP完成付款", "抱歉，小程序暂不支持支付该班级，请您前往学而思APP的购课单完成支付", function() {
                t.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, t.downAppdataReport("春季班结算"), 
                t.$apply();
            });
        }
    }, {
        key: "downAppdataReport",
        value: function(t) {
            app.sensors.track("downloadapp", {
                downloadapp_from: t
            });
        }
    }, {
        key: "addShowModal",
        value: function(t, e, o) {
            wx.showModal({
                title: t,
                content: e,
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(t) {
                    t.confirm && o();
                }
            });
        }
    } ]), e;
}(_wepy2.default.component);

exports.default = bottomCart;