function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, o) {
            function n(r, s) {
                try {
                    var a = t[r](s), i = a.value;
                } catch (e) {
                    return void o(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
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

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
}, _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../components/DownAppMask/index.js"), _index2 = _interopRequireDefault(_index), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _gohome = require("./../../components/GoHome/gohome.js"), _gohome2 = _interopRequireDefault(_gohome), _courseInfo = require("./../../components/Commons/courseInfo.js"), _courseInfo2 = _interopRequireDefault(_courseInfo), _periodItem = require("./../../components/Commons/periodItem.js"), _periodItem2 = _interopRequireDefault(_periodItem), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), _index3 = require("./../../components/Loading/index.js"), _index4 = _interopRequireDefault(_index3), app = getApp(), ClassCard = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "购课单",
            enablePullDownRefresh: !0,
            backgroundTextStyle: "dark"
        }, n.$repeat = {
            item: {
                com: "PeriodItem",
                props: ""
            }
        }, n.$props = {
            CourseInfo: {
                "xmlns:v-bind": {
                    value: "",
                    for: "item.items",
                    item: "_item",
                    index: "itemsIndex",
                    key: "_item"
                },
                "v-bind:courseInfo.sync": {
                    value: "_item.classInfo",
                    for: "item.items",
                    item: "_item",
                    index: "itemsIndex",
                    key: "_item"
                }
            },
            PeriodItem: {
                "v-bind:periodInfo.sync": {
                    value: "period_item",
                    for: "item.items",
                    item: "_item",
                    index: "itemsIndex",
                    key: "_item"
                }
            },
            gohome: {
                "xmlns:wx": ""
            },
            appmask: {
                "xmlns:v-bind": "",
                "v-bind:isHide.sync": "isDown",
                "v-bind:SystemInfo.sync": "systemInfo"
            },
            LoadingView: {
                "xmlns:v-bind": "",
                "v-bind:isLoading.sync": "isLoading"
            }
        }, n.$events = {}, n.components = {
            taltoast: _toast2.default,
            gohome: _gohome2.default,
            appmask: _index2.default,
            CourseInfo: _courseInfo2.default,
            PeriodItem: _periodItem2.default,
            LoadingView: _index4.default
        }, n.data = {
            isiPhoneX: _wepy2.default.$instance.globalData.isiPhoneX,
            cardImg: {
                1: "https://cdninsight.speiyou.com/1514289765183_course_tab_zaixian.png",
                2: "https://cdninsight.speiyou.com/1514289860903_course_tab_double.png",
                4: "https://cdninsight.speiyou.com/1514289825435_course_tab_face_to_face.png"
            },
            isTips: !1,
            areaCode: "",
            isDown: !1,
            systemInfo: "",
            courseData: [],
            tempclassId: "",
            registId: "",
            saving: !1,
            ban: !1,
            isShare: !1,
            filterCourses: [],
            classPromotions: [],
            isLoading: !1
        }, n.watch = {}, n.computed = {
            isTips: function() {
                return this.filterCourses.some(function(e) {
                    return e.items.some(function(e) {
                        return e.stageInfo.length > 1;
                    });
                });
            },
            now: function() {
                var e = 0;
                return this.filterCourses.forEach(function(t) {
                    t.items.forEach(function(t) {
                        1 === t.checked && t.stageInfo.forEach(function(t) {
                            t.disabled || e++;
                        });
                    });
                }), this.ban = !e, e;
            },
            totalprice: function() {
                var e = 0;
                return this.filterCourses.forEach(function(t) {
                    t.items.forEach(function(t) {
                        1 === t.checked && t.stageInfo.forEach(function(t) {
                            t.disabled || (e += Number(t.price));
                        });
                    });
                }), e;
            }
        }, n.methods = {
            jointCourse: function(e) {
                wx.navigateTo({
                    url: "/pages/classlist/activity?activityId=" + e.promotionId + "&activityName=" + e.promotionName + "&activityContent=" + e.promotionDescription + "&areaCode=" + this.areaCode
                });
            },
            turnFrom: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var o, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (o = wx.getStorageSync("user-token") || "", n = null, r = null, o) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return");

                          case 3:
                            return e.next = 5, (0, _common.getUtoken)(o);

                          case 5:
                            n = e.sent, r = n && -1 !== t.indexOf("?") ? t + "&utoken=" + n : t + "?utoken=" + n, 
                            wx.setStorage({
                                key: "webViewUrl",
                                data: r,
                                success: function() {
                                    wx.navigateTo({
                                        url: "/pages/banner/banner"
                                    });
                                }
                            });

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            navigate: function(e, t) {
                var o = this.filterCourses[e].items[t], n = o.classInfo.classType, r = wx.getStorageSync("userInfoStatus");
                return 1 === n ? void wx.navigateTo({
                    url: "/pages/classlist/classdetail/online?classId=" + o.classId + "&courseId=" + o.courseId + "&areaCode=" + r.area_code + "&route=coursepay"
                }) : 4 === n ? void wx.navigateTo({
                    url: "/pages/classlist/classdetail/offline?classId=" + o.classId + "&areaCode=" + r.area_code + "&route=coursepay"
                }) : void wx.navigateTo({
                    url: "/pages/classlist/classdetail/double?classId=" + o.classId + "&areaCode=" + r.area_code + "&route=coursepay"
                });
            },
            count: function() {
                this.checkoutStatus(), this.createOrder(), wx.setStorageSync("couponInfo", {});
            },
            chooseClass: function(e, t, o) {
                var n = this.filterCourses, r = n[e] && n[e].items[t] && n[e].items[t].stageInfo[o];
                if (n[e] && n[e].items[t] && n[e].items[t].needRxcs) return wx.showModal({
                    showCancel: !1,
                    content: "请先通过入学诊断后缴费",
                    confirmText: "确定"
                }), void (this.filterCourses[e].items[t].checked = 0);
                if (!r || !r.disabled) {
                    if (!this.addInterimFn(n, e)) return void this.addChooseClass(n, e, t);
                    this.addUnchecked();
                }
            },
            deleteClass: function(e, t) {
                var o = this, n = null, r = this.filterCourses.filter(function(t, o) {
                    return o === e;
                })[0] || [], s = r.items.filter(function(e, o) {
                    return o === t;
                })[0] || [];
                if (clearTimeout(n), this.tempclassId = r.items[t] && r.items[t].classId, this.registId = r.items[t] && r.items[t].registId, 
                s.continueRegist) return void wx.showModal({
                    content: "续报的班级无法删除",
                    showCancel: !1
                });
                wx.showModal({
                    content: "删除将退出该班，你确认删除该班级吗？",
                    confirmText: "确定",
                    cancelText: "取消",
                    success: function(r) {
                        r.confirm && (o.deleteOrder(e, t), n = setTimeout(function() {
                            wx.startPullDownRefresh();
                        }, 1e3));
                    }
                });
            }
        }, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "deleteOrder",
        value: function(e, t) {
            var o = wx.getStorageSync("userInfoStatus"), n = _path2.default.cancelregist, r = this, s = {
                area_code: o.area_code,
                stu_id: o.stu_id,
                cla_id: this.tempclassId
            }, a = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, s, a)) && (0, _common.axios)({
                url: n,
                data: s,
                header: a
            }).then(function(t) {
                var o = t.data;
                if (wx.stopPullDownRefresh(), o && 0 === o.error_code) return r.$invoke("taltoast", "show", {
                    message: "删除成功",
                    duration: 2e3
                }), r.filterCourses.splice(e, 1), void r.$apply();
                r.$invoke("taltoast", "show", {
                    message: o.error_msg || "删除失败，请重试",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "recordSensor",
        value: function(e) {
            var t = e.map(function(e) {
                switch (e) {
                  case 1:
                    return "在线";

                  case 2:
                    return "双师";

                  default:
                    return "面授";
                }
            });
            t = [].concat(_toConsumableArray(new Set(t))), t.forEach(function(e) {
                app.sensors.track("applet_course_to_pay", {
                    applet_course_type: e
                });
            }), wx.setStorageSync("promotGroups", t);
            var o = t.join(","), n = {
                num: this.classPromotions.length,
                course_type: o,
                cla_id: ""
            };
            this.classPromotions.forEach(function(e) {
                n.cla_id = n.cla_id ? n.cla_id + "," + e.classId : e.classId;
            }), app.XesAnalyticsMP.track("132-1197", n);
        }
    }, {
        key: "createOrder",
        value: function() {
            var e = this, t = _path2.default.createorder, o = this, n = null, r = null, s = null, a = wx.getStorageSync("userInfoStatus"), i = {
                classPromotions: this.classPromotions,
                studentId: a.stu_id,
                stockId: "",
                orderNo: "",
                area: a.area_code
            }, c = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(c) && (0, _common.axios)({
                url: t,
                data: i,
                header: c
            }).then(function(t) {
                return o.saving = !1, o.ban = !1, s = t.data, o.$apply(), s && s.data && 0 === s.error_code ? (n = s.data.promotGroups || [], 
                r = n.map(function(e) {
                    return e.classes[0].classType;
                }), o.$parent.globalData.orderDetail = s.data, o.recordSensor(r), e.$parent.globalData.dosaveorders = i.classPromotions, 
                void wx.navigateTo({
                    url: "/pages/courselist/orderdetail"
                })) : 32010 === s.error_code ? void o.addUnchecked() : void e.$invoke("taltoast", "show", {
                    message: s.error_msg || "结算失败，请稍后重试",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "checkoutStatus",
        value: function() {
            this.saving = !0, this.ban = !0;
            var e = this.filterCourses, t = [];
            e.forEach(function(e) {
                if (!Array.isArray(e.items) || !e.items.length) return [];
                e.items.forEach(function(e) {
                    1 === e.checked && e.stageInfo.forEach(function(o) {
                        o.disabled || t.push({
                            goodsType: 2,
                            registerId: e.registId,
                            classId: e.classId,
                            coupons: [],
                            stockId: o.stockId
                        });
                    });
                });
            }), this.classPromotions = t;
        }
    }, {
        key: "onLoad",
        value: function(e) {
            wx.stopPullDownRefresh(), this.areaCode = wx.getStorageSync("userInfoStatus").area_code, 
            this.couponCancel(), wx.setStorageSync("couponInfo", {});
        }
    }, {
        key: "couponCancel",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, o, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            authorization: wx.getStorageSync("user-token")
                        }, o = _path2.default.couponCancel, e.next = 4, (0, _common.axios)({
                            url: o,
                            header: t
                        });

                      case 4:
                        n = e.sent, console.log(n);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "cleanWebViewUrl",
        value: function() {
            wx.setStorageSync("webViewUrl", "");
        }
    }, {
        key: "onShow",
        value: function() {
            this.$parent.globalData.pushJosn = [], this.cleanStorage(), this.getClassList(), 
            wx.setStorageSync("selectObj", {});
        }
    }, {
        key: "cleanStorage",
        value: function() {
            wx.removeStorageSync("isAutoPage"), this.cleanWebViewUrl();
        }
    }, {
        key: "getString",
        value: function(e) {
            var t = /^(http|https)/, o = null;
            return e ? t.test(e) ? "" : (o = e.split(","), o[0]) : "";
        }
    }, {
        key: "entranceInfo",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            e.checked = 0, e.showMes = t;
        }
    }, {
        key: "getClassList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, o, n, r, s, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _path2.default.selectedlist, o = null, n = wx.getStorageSync("userInfoStatus"), 
                        r = {
                            area_code: n.area_code,
                            stu_id: n.stu_id
                        }, s = {
                            authorization: wx.getStorageSync("user-token")
                        }, (0, _global.isHaveObjectValue)(_extends({}, r, s))) {
                            e.next = 4;
                            break;
                        }
                        return this.isLoading = !0, e.abrupt("return");

                      case 4:
                        return e.next = 6, (0, _common.axios)({
                            url: t,
                            data: r,
                            header: s
                        });

                      case 6:
                        if (a = e.sent, i = a.data, this.isLoading = !0, 0 === i.error_code) {
                            e.next = 12;
                            break;
                        }
                        return this.$invoke("taltoast", "show", {
                            message: r.data.error_msg || "信息获取失败，请重试",
                            duration: 2e3
                        }), e.abrupt("return");

                      case 12:
                        o = i.data, this.courseData = o, this.filterCourseData(), this.disposeClassList(), 
                        this.$apply();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "filterCourseData",
        value: function() {
            var e = this.courseData.list, t = e.map(function(e) {
                var t = e.items.map(function(e) {
                    if (e.stageInfo.length) {
                        var t = e.stageInfo.map(function(e, t) {
                            return {
                                startDate: e.startCurriculumTime,
                                endDate: e.endCurriculumTime,
                                startPayTime: e.payTime,
                                price: e.stageActualPrice,
                                stagesName: e.stagesName,
                                stockId: e.stockId,
                                disabled: !e.ablePay
                            };
                        });
                        return {
                            needRxcs: e.needRxcs,
                            evaluationUrl: e.evaluationUrl,
                            serverTime: e.serverTime,
                            checked: 1,
                            registId: e.registId,
                            classId: e.classId,
                            registStagesId: e.registStagesId,
                            classInfo: e.classInfo,
                            continueRegist: e.continueRegist,
                            stageInfo: t
                        };
                    }
                });
                return {
                    havePromotion: e.havePromotion,
                    promotionName: e.promotionName || "",
                    promotionId: e.promotionId || "",
                    promotionDescription: e.promotionDescription || "",
                    items: t
                };
            });
            this.filterCourses = t;
        }
    }, {
        key: "disposeClassList",
        value: function() {
            this.filterCourses.forEach(function(e, t) {
                Array.isArray(e.items) && e.items.forEach(function(e, t) {
                    return e.showMes = "", e.classInfo.timeArea = e.classInfo.classStartDate + "-" + e.classInfo.classEndDate, 
                    e.classInfo.classTime = e.classInfo.classTimeNames, e.classInfo.courseType = e.classInfo.classType, 
                    e.classInfo.address = "" + e.classInfo.areaName + e.classInfo.serviceCenterName + e.classInfo.venueName, 
                    e.continueRegist ? void (e.showMes = "请在规定内完成缴费") : e.needRxcs ? (e.checked = 0, 
                    void (e.showMes = "请先通过入学诊断后缴费")) : void (e.checked = 1);
                });
            });
        }
    }, {
        key: "pottingTime",
        value: function(e) {
            var t = new Date(e);
            return t.getFullYear() + "/" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "/" + t.getDate();
        }
    }, {
        key: "addInterimFn",
        value: function(e, t, o) {
            var n = !1;
            return e[t].items.forEach(function(e) {
                n = "interim" in e;
            }), n;
        }
    }, {
        key: "addChooseClass",
        value: function(e, t, o) {
            var n = null;
            n = e.filter(function(e, o) {
                return t === o;
            })[0], n.items.forEach(function(e, t) {
                o === t && (e.checked = e.checked ? 0 : 1);
            });
        }
    }, {
        key: "addUnchecked",
        value: function() {
            var e = this;
            e.addShowModal("请前往学而思APP完成付款", "抱歉，小程序暂不支持支付该班级，请您前往学而思APP的购课单完成支付", function() {
                e.isDown = !0, e.systemInfo = "iOS" === wx.getStorageSync("userAttribute").system, 
                e.downAppdataReport("春季班结算"), e.$apply();
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
        key: "addShowModal",
        value: function(e, t, o) {
            wx.showModal({
                title: e,
                content: t,
                cancelText: "知道了",
                confirmText: "下载APP",
                success: function(e) {
                    e.confirm && o();
                }
            });
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            wx.stopPullDownRefresh(), (wx.getStorageSync("userInfoStatus") || "") && this.getClassList();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ClassCard, "pages/courselist/coursepay"));