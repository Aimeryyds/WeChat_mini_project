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

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _index = require("./../../components/DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), weui = function(e) {
    function t() {
        var e, n, a, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, r = Array(s), i = 0; i < s; i++) r[i] = arguments[i];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        a.config = {
            navigationBarBackgroundColor: "#1F3F64",
            navigationBarTitleText: "我的",
            navigationBarTextStyle: "white",
            backgroundColor: "#1F3F64"
        }, a.data = {
            isDown: !1,
            systemInfo: "",
            userInfoNum: {
                buycoursecount: 0,
                unpaidcount: 0
            },
            studentInfo: {
                pic: "http://static-xesapi.speiyou.cn/1524642003100.png",
                studentName: "",
                studentNum: ""
            },
            isShare: !1,
            defaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png",
            userUnid: ""
        }, a.$repeat = {}, a.$props = {
            gohomeview: {
                "xmlns:wx": ""
            },
            appmask: {
                "xmlns:v-bind": "",
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo"
            }
        }, a.$events = {}, a.components = {
            taltoast: _toast2.default,
            gohomeview: _gohome2.default,
            appmask: _index2.default
        }, a.methods = {
            feedbackFunc: function() {
                this.feedbackDataReport("我的");
            },
            getMask: function() {
                this.isDown = !0, this.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                this.downAppdataReport("我的"), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "更多学而思服务"
                }), this.$apply();
            },
            errorImg: function(e) {
                this.studentInfo.pic = this.defaultImg;
            },
            sharefunc: function() {
                app.sensors.track("applet_share", {
                    applet_share: "分享给朋友"
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "分享给朋友"
                });
            },
            goInfo: function() {
                app.XesAnalyticsMP.track("132-1800"), wx.navigateTo({
                    url: "/pages/familyAccount/myAccount"
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "学员信息"
                });
            },
            goHome: function() {
                wx.reLaunch({
                    url: "/pages/classlist/classlist"
                });
            },
            buyCouse: function() {
                wx.navigateTo({
                    url: "../courselist/coursepay?count=" + this.studentInfo.buycoursecount
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "购课单"
                });
            },
            toUnpaid: function() {
                wx.navigateTo({
                    url: "/pages/wait/waitcoursebuy"
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "待付款"
                });
            },
            toPaid: function() {
                wx.navigateTo({
                    url: "/pages/alreadypay/alreadypaylist"
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "已付款"
                });
            },
            quit: function() {
                this.loadSetPath(this.isShare, "index"), wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone"
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "切换账号"
                });
            },
            refund: function() {
                var e = this;
                wx.showModal({
                    title: "请前往学而思APP退款",
                    content: "抱歉，小程序的退款功能还在开发中",
                    cancelText: "知道了",
                    confirmText: "下载APP",
                    success: function(t) {
                        t.confirm && (e.isDown = !0, e.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                        e.downAppdataReport("退款"), e.$apply());
                    }
                }), app.XesAnalyticsMP.track("132-1181", {
                    button_name: "退款"
                });
            }
        }, o = n, _possibleConstructorReturn(a, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "feedbackDataReport",
        value: function(e) {
            app.sensors.track("feedback", {
                feedback_from: e
            }), app.XesAnalyticsMP.track("132-1181", {
                button_name: "意见反馈"
            });
        }
    }, {
        key: "downAppdataReport",
        value: function(e) {
            app.sensors.track("downloadapp", {
                downloadapp_from: e
            });
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            wx.setStorageSync("pagePath", {
                share: e,
                url: t,
                mun: n,
                implement: a
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                path: "/pages/classlist/classlist",
                imageUrl: "http://static-xesapi.speiyou.cn/1527846818989.png",
                title: "学而思选课报班官方通道",
                success: function() {
                    app.sensors.track("applet_share_succeed", {
                        applet_share_succeed: "分享成功"
                    });
                },
                fail: function() {
                    app.sensors.track("applet_share_cancel", {
                        applet_share_cancel: "分享失败"
                    });
                }
            };
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.isShare = "share" === e.from, this.userUnid = e.unid || "";
        }
    }, {
        key: "onShow",
        value: function() {
            wx.removeStorageSync("isAutoPage"), this.getPath(), this.renderingLod();
        }
    }, {
        key: "renderingLod",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus"), t = wx.getStorageSync("weChatExpress");
            (t.stu_id || e.stu_id) && (this.studentInfo.studentName = e.name || t.name, this.studentInfo.studentNum = e.stu_number || t.stu_number, 
            this.studentInfo.pic = e.head_img || t.avatar, this.getSelectedClassListCount(e), 
            this.getRegistListcount(), this.$apply());
        }
    }, {
        key: "getRegistListcount",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.timestamp, n = void 0 === t ? "" : t, a = wx.getStorageSync("userInfoStatus") || "", o = wx.getStorageSync("weChatExpress") || "", s = this, r = _path2.default.getPurchaseNumber, i = null, u = null, c = {
                area_code: a.area_code || o.area_code,
                stu_id: a.stu_id || o.area_name
            }, p = null, l = {
                authorization: wx.getStorageSync("user-token"),
                timestamp: n || ""
            };
            l.authorization && (0, _common.axios)({
                url: r,
                data: c,
                header: l
            }).then(function(e) {
                if (u = e.data, p = e.header, u && u.data && 0 === u.error_code) return i = u.data.count, 
                s.userInfoNum.buycoursecount = i, void s.$apply();
                wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: u.error_msg || "出错了，请稍后再试",
                    success: function(e) {
                        e.cancel && s.getRegistListcount({
                            timestamp: p.timestamp
                        });
                    }
                });
            });
        }
    }, {
        key: "getPath",
        value: function() {
            var e = wx.getStorageSync("pagePath");
            "personinfo" === e.url && (e.implement = !1, wx.setStorageSync("pagePath", e));
        }
    }, {
        key: "getSelectedClassListCount",
        value: function(e) {
            var t = this, n = _path2.default.getunpaidordernum, a = {
                area_code: e.area_code
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, a, o)) && (0, _common.axios)({
                url: n,
                data: a,
                header: o
            }).then(function(n) {
                var a = n.data;
                a && a.data && 0 === a.error_code ? t.userInfoNum.unpaidcount = a.data.count : wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: a.error_msg || "出错了，请稍后再试",
                    success: function(n) {
                        n.cancel && e && t.getSelectedClassListCount(e);
                    }
                });
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(weui, "pages/personcenter/personinfo"));