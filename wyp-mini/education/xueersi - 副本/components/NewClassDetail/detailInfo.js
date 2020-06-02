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
        for (var a = 0; a < t.length; a++) {
            var o = t[a];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, a, o) {
        return a && e(t.prototype, a), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), app = getApp(), detailInfo = function(e) {
    function t() {
        var e, a, o, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
        return a = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.data = {
            showPay: !1,
            showService: !1,
            aniConfig: {
                duration: 300,
                timingFunction: "ease"
            },
            classType: {
                1: "在线",
                2: "双师",
                4: "面授"
            },
            showGetLocationBtn: !1,
            pressTimer: null,
            longPressDone: !1
        }, o.$repeat = {}, o.$props = {
            taltoast: {
                class: "toast"
            },
            newToast: {
                class: "toast1"
            }
        }, o.$events = {}, o.components = {
            taltoast: _toast2.default,
            newToast: _toast2.default
        }, o.props = {
            detailInfo: {
                type: Object,
                default: {}
            },
            areaCode: String,
            featureService: Array,
            isGetMapbtn: {
                type: Boolean,
                default: !1
            },
            samePrice: {
                type: Boolean,
                default: !0
            }
        }, o.watch = {
            isGetMapbtn: function(e) {
                this.showGetLocationBtn = e;
            }
        }, o.methods = {
            checkPay: function() {
                this.showPay = !this.showPay;
            },
            checkService: function() {
                this.showService = !this.showService, this.showService && app.XesAnalyticsMP.track("132-1342", {
                    cla_id: this.detailInfo.cla_id,
                    subject_name: this.detailInfo.subject_name
                });
            },
            goActivity: function(e) {
                var t = this.detailInfo.promotions[e], a = "/pages/classlist/activity?activityId=" + t.activity_id + "&activityName=" + t.promotion_name + "&activityContent=" + t.promotion_title + "&areaCode=" + this.areaCode;
                wx.navigateTo({
                    url: a
                }), app.XesAnalyticsMP.track("132-1340", {
                    cla_id: this.detailInfo.cla_id,
                    activity_name: t.promotion_name
                });
            },
            toMap: function() {
                var e = this;
                app.sensors.track("sch_map", {
                    sch_map: "点击教学点"
                }), wx.getLocation({
                    type: "gcj02",
                    success: function(t) {
                        e.showGetLocationBtn = !1, e.jumpLocalMap(), app.XesAnalyticsMP.registerPage({
                            latitude: t.latitude,
                            longitude: t.longitude,
                            allowLocation: !0
                        }, "setLocation");
                    },
                    fail: function(t) {
                        var a = t.errMsg, o = a.indexOf("permission"), n = a.indexOf("auth");
                        -1 !== o && e.$invoke("newToast", "show", {
                            message: "请先前往手机系统设置开启位置权限",
                            duration: 2e3
                        }), -1 !== n && (e.showGetLocationBtn = !0, e.$apply());
                    }
                });
            },
            toSetMapPurview: function() {
                var e = this;
                wx.openSetting({
                    success: function(t) {
                        t.authSetting["scope.userLocation"] && (e.showGetLocationBtn = !1, e.$apply());
                    }
                });
            },
            touchstartHandler: function() {
                var e = this, t = 4, a = getCurrentPages(), o = a[a.length - 1].route;
                wx.getStorageSync("user-token") && (clearTimeout(this.pressTimer), this.pressTimer = setInterval(function() {
                    t--, e.$apply(), e.$invoke("taltoast", "show", {
                        message: t,
                        duration: 1e3
                    }), 1 === t && (_wepy2.default.$instance.globalData.detailsInfo.areaCode = e.areaCode, 
                    _wepy2.default.$instance.globalData.detailsInfo.classId = e.detailInfo.cla_id, _wepy2.default.$instance.globalData.detailsInfo.courseId = e.detailInfo.course_id || "", 
                    clearTimeout(e.pressTimer), wx.navigateTo({
                        url: "/pages/internal/qrcode?pages=" + o,
                        success: function() {
                            clearTimeout(e.pressTimer);
                        }
                    }));
                }, 1e3));
            },
            touchendHandler: function() {
                clearTimeout(this.pressTimer);
            }
        }, n = a, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "jumpLocalMap",
        value: function() {
            var e = this.detailInfo, t = e.latitude, a = e.longitude, o = e.cla_venue_name;
            t && a ? wx.openLocation({
                latitude: Number(t),
                longitude: Number(a),
                name: o,
                address: "学而思教学点",
                scale: 18
            }) : this.errorInfo("抱歉，迷路了~");
        }
    }, {
        key: "errorInfo",
        value: function(e) {
            this.$invoke("newToast", "show", {
                message: e || "系统开小差～",
                duration: 2e3
            });
        }
    }, {
        key: "hideLayer",
        value: function(e) {
            var t = this, a = {
                pay: function() {
                    t.showPay = !1;
                },
                ser: function() {
                    t.showService = !1;
                }
            };
            ({
                pay: function() {
                    var e = wx.createAnimation(t.aniConfig).bottom("-100%").step();
                    t.aniMain1 = e.export();
                    var a = wx.createAnimation(t.aniConfig).opacity(0).step();
                    t.aniMask1 = a.export();
                },
                ser: function() {
                    var e = wx.createAnimation(t.aniConfig).bottom("-100%").step();
                    t.aniMain2 = e.export();
                    var a = wx.createAnimation(t.aniConfig).opacity(0).step();
                    t.aniMask2 = a.export();
                }
            })[e](), clearTimeout(this.timer), this.timer = setTimeout(function() {
                a[e](), t.$apply();
            }, 300);
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = detailInfo;