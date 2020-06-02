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
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _index = require("./../../components/DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _courseInfo = require("./../../components/Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), _getTimes = require("./../../common/util/getTimes.js"), _getTimes2 = _interopRequireDefault(_getTimes), _periodItem = require("./../../components/Commons/periodItem.js"), _periodItem2 = _interopRequireDefault(_periodItem), app = getApp(), ClassCard = function(e) {
    function t() {
        var e, r, a, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, n = Array(s), i = 0; i < s; i++) n[i] = arguments[i];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(n))), 
        a.config = {
            navigationBarTitleText: "待付款",
            enablePullDownRefresh: !0,
            backgroundTextStyle: "dark"
        }, a.$repeat = {}, a.$props = {
            appmask: {
                "xmlns:v-bind": "",
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo",
                "v-bind:pageUrl.sync": "pageUrl"
            },
            gohomeview: {
                "xmlns:wx": ""
            },
            courseInfo: {
                "xmlns:v-bind": "",
                "v-bind:courseInfo.once": "_item"
            },
            PeriodItem: {
                "v-bind:periodInfo.sync": "period_item"
            }
        }, a.$events = {}, a.components = {
            "tal-toast": _toast2.default,
            appmask: _index2.default,
            gohomeview: _gohome2.default,
            courseInfo: _courseInfo2.default,
            PeriodItem: _periodItem2.default
        }, a.data = {
            systemInfo: "",
            pageUrl: "",
            isDown: !1,
            list: [],
            second: 60,
            ishow: !1,
            timer: [],
            isShare: !1,
            periodInfo: {
                classTime: "2019.08.20",
                startPayTime: "2019.08.20",
                periodName: "春季班上",
                price: 500,
                disabled: !0
            }
        }, a.methods = {
            cancelOrder: function(e) {
                var t = this;
                wx.showModal({
                    title: "",
                    content: "取消订单会为您保留名额，您可以在购课单中查看该班级，确认取消？",
                    confirmText: "确认",
                    cancelText: "再想想",
                    success: function(r) {
                        r.confirm && t._cancelOrder(e);
                    }
                });
            },
            goToDetail: function(e) {
                var t = Number(e.courseType);
                console.log(e.courseType);
                var r = wx.getStorageSync("userInfoStatus");
                1 === t ? wx.navigateTo({
                    url: "/pages/classlist/classdetail/online?route=order&classId=" + e.classId + "&courseId=" + e.courseId + "&areaCode=" + r.area_code
                }) : 2 === t ? wx.navigateTo({
                    url: "/pages/classlist/classdetail/double?route=order&classId=" + e.classId + "&areaCode=" + r.area_code
                }) : 4 === t && wx.navigateTo({
                    url: "/pages/classlist/classdetail/offline?route=order&classId=" + e.classId + "&areaCode=" + r.area_code
                });
            },
            goPay: function(e) {
                this.requestPay(e);
            }
        }, o = r, _possibleConstructorReturn(a, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            wx.stopPullDownRefresh(), this.getInfo();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.clearTimer();
        }
    }, {
        key: "getInfo",
        value: function() {
            wx.getStorageSync("userInfoStatus") && this.refresh();
        }
    }, {
        key: "requestPay",
        value: function(e) {
            var t = this, r = wx.getStorageSync("userInfoStatus"), a = _path2.default.reshowunpayorder, o = {
                area_code: r.area_code || "",
                order_no: e.orderNo
            }, s = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(s) && (0, _common.axios)({
                url: a,
                data: o,
                header: s
            }).then(function(e) {
                var r = e.data;
                r && r.data && 0 === r.error_code ? (t.$parent.globalData.orderDetail = r.data, 
                wx.redirectTo({
                    url: "/pages/courselist/orderdetail?wait=true"
                })) : wx.showModal({
                    title: "请前往学而思APP完成付款",
                    content: "抱歉，小程序暂不支持该课程的支付，麻烦您前往学而思APP的待付款完成支付",
                    cancelText: "知道了",
                    confirmText: "下载APP",
                    success: function(e) {
                        e.confirm && (t.isDown = !0, t.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                        t.downAppdataReport(), t.$apply());
                    }
                });
            });
        }
    }, {
        key: "mergeClassInfo",
        value: function(e) {
            var t = [];
            console.log(e), e.classInfos.forEach(function(e) {
                t.push({
                    registerId: e.registerId,
                    classId: e.classId,
                    coupons: [],
                    doBundCoupons: 0
                });
            });
        }
    }, {
        key: "downAppdataReport",
        value: function() {
            app.sensors.track("downloadapp", {
                downloadapp_from: "待付款"
            });
        }
    }, {
        key: "countdown",
        value: function(e, t, r) {
            var a = this, o = setInterval(function() {
                if (e--, a.list.forEach(function(t, o) {
                    var s = parseInt(e), n = 0, i = 0;
                    s > 60 && (n = parseInt(s / 60), s = parseInt(s % 60), n > 60 && (i = parseInt(n / 60), 
                    n = parseInt(n % 60)));
                    var u = a.setDouble(s) + "秒";
                    n > 0 && (u = parseInt(n) + "分" + u), i > 0 && (u = parseInt(i) + "小时" + u), t.orderId === r.orderId && (t._expireTime = u);
                }), a.$apply(), e <= 0) return clearInterval(o), a._cancelOrder(r.orderId), a.$apply(), 
                !1;
            }, 1e3);
            this.timer.push(o), this.$apply();
        }
    }, {
        key: "setDouble",
        value: function(e) {
            return e = parseInt(e), e > 9 ? e : "0" + e;
        }
    }, {
        key: "clearTimer",
        value: function() {
            this.timer.forEach(function(e) {
                clearInterval(e);
            });
        }
    }, {
        key: "filterCourseInfo",
        value: function(e) {
            var t = this;
            e.forEach(function(e, r) {
                var a = Date.parse(t._convertTime(e.orderCreateTime)), o = Date.parse(t._convertTime(e.createTime)), s = 60 * e.expireTime * 1e3, n = a + s - o - 3e4;
                t.countdown(n / 1e3, r, e);
            });
            var r = e.map(function(e) {
                var t = e.classInfos.map(function(e) {
                    var t = e.stageInfo.map(function(e) {
                        return {
                            startDate: e.startCurriculumTime,
                            endDate: e.endCurriculumTime,
                            price: e.stageActualPrice,
                            stagesName: e.stagesName
                        };
                    });
                    return {
                        strengTutor: e.strengTutor,
                        className: e.className,
                        courseType: e.classType,
                        classId: e.classId,
                        address: e.areaName + e.servicecenterName + e.venueName,
                        timeArea: e.classDateName,
                        classTime: e.classTimeNames,
                        teacherList: e.teachers,
                        tutorList: e.tutorRealName ? [ {
                            name: e.tutorRealName
                        } ] : "",
                        stageStartTime: (0, _getTimes2.default)(e.stageStartTime),
                        stageEndTime: (0, _getTimes2.default)(e.stageEndTime),
                        coupons: e.coupons,
                        stageInfo: t
                    };
                });
                return {
                    expireTime: e.expireTime,
                    orderCreateTime: e.orderCreateTime,
                    orderId: e.orderId,
                    orderNo: e.orderNo,
                    spend: e.spend,
                    areaCode: e.areaCode,
                    createTime: e.createTime,
                    classInfos: t
                };
            });
            e.forEach(function(e) {
                e.classInfos.forEach(function(e) {
                    e.courseType = e.classType, e.address = e.areaName + e.servicecenterName + e.venueName, 
                    e.timeArea = e.classDateName, e.classTime = e.classTimeNames, e.teacherList = e.teachers, 
                    e.tutorList = [ {
                        name: e.tutorRealName
                    } ], e.stageStartTime = (0, _getTimes2.default)(e.stageStartTime), e.stageEndTime = (0, 
                    _getTimes2.default)(e.stageEndTime);
                });
            }), this.list = r, this.$apply();
        }
    }, {
        key: "refresh",
        value: function() {
            var e = this;
            this.clearTimer();
            var t = wx.getStorageSync("userInfoStatus"), r = _path2.default.getunpaidorder, a = {
                area_code: t.area_code || ""
            }, o = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: r,
                data: a,
                header: o
            }).then(function(t) {
                var r = t.data;
                if (r && r.data && 0 === r.error_code) return wx.stopPullDownRefresh(), void e.filterCourseInfo(r.data);
                e.$invoke("tal-toast", "show", {
                    message: r.error_msg || "获取待付款列表失败，请重试"
                });
            });
        }
    }, {
        key: "_cancelOrder",
        value: function(e) {
            var t = this, r = wx.getStorageSync("userInfoStatus"), a = _path2.default.cancelorder, o = {
                area_code: r.area_code || "",
                order_ids: e
            }, s = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(s) && (0, _common.axios)({
                url: a,
                data: o,
                header: s
            }).then(function(e) {
                var r = e.data;
                r && 0 === r.error_code ? (t.$invoke("tal-toast", "show", {
                    message: "订单已取消"
                }), t.refresh()) : t.$invoke("tal-toast", "show", {
                    message: r.error_msg || "取消订单失败，请重试"
                });
            });
        }
    }, {
        key: "_convertTime",
        value: function(e) {
            return e.replace(/-/g, "/");
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            wx.getStorageSync("userInfoStatus").area_code && wx.getStorageSync("userInfoStatus").stu_id ? this.refresh() : wx.stopPullDownRefresh();
        }
    }, {
        key: "getString",
        value: function(e) {
            var t = /^(http|https)/;
            if (e) {
                if (t.test(e)) return "";
                return e.split(",")[0];
            }
            return "";
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ClassCard, "pages/wait/waitcoursebuy"));