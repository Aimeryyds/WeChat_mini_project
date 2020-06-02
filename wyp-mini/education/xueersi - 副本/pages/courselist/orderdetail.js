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
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../components/DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _lessonCard = require("./../../components/OrderDetail/lessonCard.js"), _lessonCard2 = _interopRequireDefault(_lessonCard), _titleCell = require("./../../components/OrderDetail/titleCell.js"), _titleCell2 = _interopRequireDefault(_titleCell), _coupon = require("./../../components/OrderDetail/coupon.js"), _coupon2 = _interopRequireDefault(_coupon), _courseInfo = require("./../../components/Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _activityCell = require("./../../components/OrderDetail/activityCell.js"), _activityCell2 = _interopRequireDefault(_activityCell), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _periodItem = require("./../../components/Commons/periodItem.js"), _periodItem2 = _interopRequireDefault(_periodItem), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), app = getApp(), LABEL_ONLINE = "https://cdninsight.speiyou.com/1513326530508_course_tab_online_course.png", LABEL_OFFLINE = "https://cdninsight.speiyou.com/1512632498580_course_tab_face_to_face.png", LABEL_DOUBLE = "https://cdninsight.speiyou.com/1512539172115_class_shuangshi.png", OrderDetail = function(e) {
    function t() {
        var e, r, o, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), n = 0; n < s; n++) i[n] = arguments[n];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: "订单详情"
        }, o.$repeat = {
            item: {
                com: "coupon",
                props: "couponItem.sync"
            }
        }, o.$props = {
            CourseInfo: {
                "xmlns:v-bind": {
                    value: "",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                },
                "v-bind:courseInfo.sync": {
                    value: "_item",
                    type: "item",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                }
            },
            PeriodItem: {
                "v-bind:periodInfo.sync": {
                    value: "period_item",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                }
            },
            coupon: {
                "v-bind:isDisabled.sync": {
                    value: "isDisabled",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                },
                "v-bind:listIndex.sync": {
                    value: "index",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                },
                "v-bind:couponItem.sync": {
                    value: "_item",
                    type: "item",
                    for: "item.classes",
                    item: "_item",
                    index: "_index",
                    key: "_index"
                }
            },
            appmask: {
                "xmlns:v-bind": "",
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo",
                "v-bind:pageUrl.sync": "pageUrl"
            }
        }, o.$events = {}, o.components = {
            "lesson-card": _lessonCard2.default,
            "title-cell-expense": _titleCell2.default,
            "title-cell-payment": _titleCell2.default,
            "activity-cell": _activityCell2.default,
            "tal-toast": _toast2.default,
            appmask: _index2.default,
            CourseInfo: _courseInfo2.default,
            PeriodItem: _periodItem2.default,
            coupon: _coupon2.default
        }, o.data = {
            isiPhoneX: _wepy2.default.$instance.globalData.isiPhoneX,
            classPromotions: [],
            filterGroups: [],
            pageUrl: "",
            isDown: !1,
            systemInfo: "",
            paymentType: [ {
                id: 0,
                label: "微信支付",
                checked: !0
            } ],
            agreement: [ {
                id: 0,
                checked: !1
            } ],
            orderInfo: [],
            orderList: [],
            orderAddr: {},
            orderPrice: {},
            orderExpense: [],
            payCount: 0,
            saving: !1,
            paying: !1,
            weixinPayParam: {},
            isDisabled: !1,
            system: "",
            Payment: !1,
            periodList: [ {
                classTime: "2019.08.20",
                startPayTime: "2019.08.20",
                periodName: "春季班上1",
                price: 500,
                disabled: !1
            }, {
                classTime: "2019.08.20",
                startPayTime: "2019.08.20",
                periodName: "春季班上2",
                price: 500,
                disabled: !1
            } ]
        }, o.methods = {
            coupon: function(e, t) {
                wx.navigateTo({
                    url: "/pages/courselist/coupon?class_id=" + e.classId + "&index=" + t
                });
            },
            agreementChange: function(e) {
                this.agreement[0].checked = !this.agreement[0].checked, this.$apply();
            },
            pay: function() {
                this.isPay() && (this.sendBusProps("132-1196"), this.saveOrderInfo());
            }
        }, a = r, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "sendBusProps",
        value: function(e, t) {
            var r = wx.getStorageSync("promotGroups") ? wx.getStorageSync("promotGroups").join(",") : "", o = {
                num: this.classPromotions.length,
                course_type: r,
                cla_id: ""
            };
            this.classPromotions.forEach(function(e) {
                o.cla_id = o.cla_id ? o.cla_id + "," + e.classId : e.classId;
            }), t && t.toast_value && (o = _extends({}, o, t)), app.XesAnalyticsMP.track(e, o);
        }
    }, {
        key: "saveOrderInfo",
        value: function() {
            var e = this, t = this, r = null, o = this.orderInfo.orderToken, a = _path2.default.saveorder, s = this.orderInfo.orderNo, i = this.orderAddr, n = wx.getStorageSync("userInfoStatus"), c = {
                orderToken: o,
                area: n.area_code,
                orderNo: s,
                studentId: n.stu_id,
                fusionOrderAddressDto: i,
                classPromotions: this.classPromotions
            }, l = {
                authorization: wx.getStorageSync("user-token")
            };
            if (clearTimeout(r), o) {
                if (!(0, _global.isHaveObjectValue)(_extends({}, c, l))) return;
                return this.saving = !0, void (0, _common.axios)({
                    url: a,
                    data: c,
                    header: l
                }).then(function(o) {
                    e.saving = !1;
                    var a = o.data;
                    return a && 0 === a.error_code ? void t.goPay() : 52009 === a.error_code ? (t.showModal(), 
                    void t.payResult(a.error_code, a.error_msg)) : (t.$invoke("tal-toast", "show", {
                        message: a.error_msg || "支付失败",
                        duration: 2e3
                    }), void (r = setTimeout(function() {
                        wx.redirectTo({
                            url: "/pages/wait/waitcoursebuy"
                        });
                    }, 2e3)));
                });
            }
            this.goPay();
        }
    }, {
        key: "isPay",
        value: function() {
            var e = !0;
            return this.agreement[0].checked || (this.$invoke("tal-toast", "show", {
                message: "请先勾选报名退费协议"
            }), e = !1), this.$parent.globalData.orderDetail.shouldMail && "" === this.orderAddr.detailAddress && (wx.showModal({
                title: "提示",
                content: "请填写收货地址",
                showCancel: !0,
                confirmText: "添加地址",
                success: function(e) {
                    e.confirm && wx.navigateTo({
                        url: "/pages/personcenter/addressmanage?from=order_detail"
                    });
                }
            }), e = !1), e;
        }
    }, {
        key: "payResult",
        value: function(e, t) {
            var r = this;
            wx.getStorageSync("promotGroups").forEach(function(o) {
                r.setPayNow(e, t, o, "支付失败");
            });
        }
    }, {
        key: "showModal",
        value: function() {
            var e = this;
            wx.showModal({
                title: "请前往学而思APP完成付款",
                content: "抱歉，小程序暂不支持该课程的支付，麻烦您前往学而思APP的待付款完成支付",
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(t) {
                    t.confirm ? (e.isDown = !0, e.pageUrl = "/pages/wait/waitcoursebuy", e.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                    e.downAppdataReport(), e.$apply()) : wx.redirectTo({
                        url: "/pages/wait/waitcoursebuy"
                    });
                }
            });
        }
    }, {
        key: "downAppdataReport",
        value: function() {
            app.sensors.track("downloadapp", {
                downloadapp_from: "订单详情"
            });
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            var e = this;
            wx.getSystemInfo({
                success: function(t) {
                    e.system = t.system.split(" ")[0], e.$apply();
                }
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.$parent.globalData.couponState = [], this.isDisabled = !!e.wait, this.refresh(e.wait), 
            this.getSystemInfo(), this.classPromotions = this.$parent.globalData.dosaveorders;
        }
    }, {
        key: "onShow",
        value: function() {
            this.filteractive(), this.filterCardInfos(), this.$parent.globalData.couponChanged && (this.refresh(), 
            this.$parent.globalData.couponChanged = !1), this.$parent.globalData.orderAddrChanged && (this.orderAddr = this.$parent.globalData.orderAddr, 
            this.$parent.globalData.orderAddrChanged = !1), this.$apply();
        }
    }, {
        key: "filteractive",
        value: function() {
            var e = this.$parent.globalData.orderDetail.promotGroups, t = [];
            e.forEach(function(e) {
                e.classes.forEach(function(e) {
                    e.usePreviousStagePromotion && t.push(e.classId);
                });
            }), this.$parent.globalData.couponStateActive = t;
        }
    }, {
        key: "filterCardInfos",
        value: function() {
            var e = this.$parent.globalData.orderDetail.promotGroups, t = e.map(function(e) {
                var t = e.classes.map(function(e) {
                    var t = e.stageInfo.map(function(e) {
                        return {
                            startDate: e.startCurriculumTime,
                            endDate: e.endCurriculumTime,
                            price: e.stageActualPrice,
                            stagesName: e.stagesName
                        };
                    }), r = e.coupons.map(function(e) {
                        return {
                            couponNum: e.couponNum,
                            actualValue: e.actualValue
                        };
                    });
                    return {
                        strengTutor: e.strengTutor,
                        classId: e.classId,
                        classCouponFacePrice: e.classCouponFacePrice,
                        courseType: e.classType,
                        className: e.className,
                        timeArea: e.classDateName,
                        classTime: e.classTimeNames,
                        address: "" + e.areaName + e.servicecenterName + e.venueName,
                        teacherList: e.teachers,
                        tutorList: e.tutorRealName ? [ {
                            name: e.tutorRealName
                        } ] : [],
                        stageInfo: t,
                        registStageId: e.registStageId,
                        registerId: e.registerId,
                        activityId: e.activityId,
                        coupons: r,
                        goodsType: 2
                    };
                });
                return {
                    havePromotion: e.havePromotion,
                    promotionName: e.promotionName,
                    promotionDescription: e.promotionDescription,
                    classes: t
                };
            });
            console.log("...............", t), this.filterGroups = t;
        }
    }, {
        key: "refresh",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = [];
            this.orderInfo = this.$parent.globalData.orderDetail, t && (this.orderInfo.orderToken = "");
            var o = this.orderInfo.promotGroups, a = 0;
            o.forEach(function(t) {
                t.classes.forEach(function(t) {
                    var o = t.coupons.length > 0 ? t.coupons[0].couponNum : "";
                    r.push(o), wx.setStorageSync("couponNum", r), a++, t._labelSrc = e._convertLabel(t), 
                    t.classType = Number(t.classType), t.classCouponFacePrice = Number(t.classCouponFacePrice), 
                    t._tutorSrc = e.getString(t.tutorPictureUrl) ? t.teacherHostName + e.getString(t.tutorPictureUrl) : t.teacherHostName, 
                    t.teachers.forEach(function(r) {
                        r._teacherSrc = e.getString(r.pictureUrl) ? t.teacherHostName + e.getString(r.pictureUrl) : r.pictureUrl;
                    });
                });
            }), this.payCount = a, this.orderList = o, this.orderAddr = this.orderInfo.orderAddress, 
            this.orderPrice = this.orderInfo.priceInfo, this.orderExpense = this.orderInfo.expenseDetails, 
            this.$parent.globalData.recommendCoupon = this.orderInfo.promotGroups, this.$parent.globalData.orderAddr = this.orderAddr, 
            this.$apply();
        }
    }, {
        key: "_convertLabel",
        value: function(e) {
            switch (Number(e.classType)) {
              case 1:
                return LABEL_ONLINE;

              case 2:
                return LABEL_DOUBLE;

              case 4:
                return LABEL_OFFLINE;
            }
        }
    }, {
        key: "goPay",
        value: function() {
            var e = this;
            0 === e.orderPrice.lastPrice ? e.freePayment() : e.addpayment();
        }
    }, {
        key: "freePayment",
        value: function() {
            var e = this, t = wx.getStorageSync("promotGroups"), r = this, o = _path2.default.trades, a = wx.getStorageSync("userInfoStatus"), s = {
                orderNo: this.orderInfo.orderNo,
                orderAmount: r.orderPrice.lastPrice,
                studentId: a.stu_id,
                areaCode: a.area_code,
                spbillCreatIp: "",
                wxTradeType: "JSAPI",
                returnUrl: "",
                wxOpenId: wx.getStorageSync("openid"),
                clientType: "Android" === r.system ? "CS1000" : "CS2000"
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(i) && (0, _common.axios)({
                url: o,
                data: s,
                header: i
            }).then(function(o) {
                var a = o.data;
                a && 0 === a.error_code ? (e.weixinPayParam = {}, t && t.forEach(function(e) {
                    r.setPayNow(a.error_code, a.error_msg, e, "支付成功");
                }), console.log("支付结果========", a), wx.redirectTo({
                    url: "/pages/courselist/paydone"
                })) : 32011 === a.error_code ? (wx.showModal({
                    title: "",
                    content: a.error_msg,
                    confirmText: "知道了",
                    showCancel: !1
                }), e.saving = !1) : (t.forEach(function(e) {
                    r.setPayNow(a.error_code, a.error_msg, e, "支付失败");
                }), e.saving = !1, e.$invoke("tal-toast", "show", {
                    message: a.error_msg || "支付失败，请重试",
                    duration: 4e3
                })), e.sendBusProps("132-1195", {
                    toast_value: "支付成功"
                }), e.$apply();
            });
        }
    }, {
        key: "addpayment",
        value: function() {
            var e = this, t = this, r = wx.getStorageSync("userInfoStatus"), o = wx.getStorageSync("openid"), a = _path2.default.trades, s = {
                orderNo: this.orderInfo.orderNo,
                orderAmount: t.orderPrice.lastPrice,
                studentId: r.stu_id,
                areaCode: r.area_code,
                spbillCreatIp: "",
                wxTradeType: "JSAPI",
                returnUrl: "",
                wxOpenId: o,
                clientType: "Android" === t.system ? "CS1000" : "CS2000"
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(i) && (0, _common.axios)({
                url: a,
                data: s,
                header: i
            }).then(function(r) {
                e.saving = !1;
                var o = r.data;
                if (o && 0 === o.error_code) {
                    var a = o.data.body;
                    t.weixinPayParam.appId = a.appId, t.weixinPayParam.timeStamp = a.timeStamp, t.weixinPayParam.payPackage = a.package, 
                    t.weixinPayParam.signType = a.signType, t.weixinPayParam.nonceStr = a.nonceStr, 
                    t.weixinPayParam.paySign = a.paySign, t.$apply(), t.wechatPay();
                } else 32011 === o.error_code ? (wx.showModal({
                    title: "",
                    content: o.error_msg,
                    confirmText: "知道了",
                    showCancel: !1
                }), t.$apply()) : (t.$apply(), t.$invoke("tal-toast", "show", {
                    message: o.error_msg,
                    duration: 2e3
                }));
            });
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
    }, {
        key: "wechatPay",
        value: function() {
            var e = this;
            clearTimeout(this.timer);
            var t = this, r = wx.getStorageSync("promotGroups");
            wx.requestPayment({
                appId: this.weixinPayParam.appId,
                timeStamp: this.weixinPayParam.timeStamp,
                nonceStr: this.weixinPayParam.nonceStr,
                package: this.weixinPayParam.payPackage,
                signType: this.weixinPayParam.signType,
                paySign: this.weixinPayParam.paySign,
                success: function(o) {
                    r.forEach(function(e) {
                        t.setPayNow(o.code, o.masage, e, "支付成功");
                    }), e.$invoke("tal-toast", "show", {
                        message: "订单处理中...",
                        duration: 2e3
                    }), e.timer = setTimeout(function() {
                        wx.redirectTo({
                            url: "/pages/courselist/paydone"
                        });
                    }, 2e3), e.sendBusProps("132-1195", {
                        toast_value: "支付成功"
                    });
                },
                fail: function(o) {
                    o.code = "999999999", o.masage = "取消支付", r && r.forEach(function(e) {
                        t.setPayNow(o.code, o.masage, e, "支付失败");
                    }), wx.redirectTo({
                        url: "/pages/wait/waitcoursebuy"
                    }), e.sendBusProps("132-1195", {
                        toast_value: "支付失败"
                    });
                }
            });
        }
    }, {
        key: "setPayNow",
        value: function(e, t, r, o) {
            var a = this, s = {
                applet_course_type: r,
                applet_course_result_id: e,
                applet_course_sign_up_result_detail: t || "支付成功",
                applet_course_money: a.orderPrice.lastPrice,
                applet_course_payType: "微信",
                applet_course_result: o
            };
            app.sensors.track("applet_course_to_pay_now", s);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail, "pages/courselist/orderdetail"));