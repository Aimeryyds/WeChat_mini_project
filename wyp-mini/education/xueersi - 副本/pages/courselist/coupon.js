function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var o = t.apply(this, arguments);
        return new Promise(function(t, e) {
            function s(n, a) {
                try {
                    var r = o[n](a), i = r.value;
                } catch (t) {
                    return void e(t);
                }
                if (!r.done) return Promise.resolve(i).then(function(t) {
                    s("next", t);
                }, function(t) {
                    s("throw", t);
                });
                t(i);
            }
            return s("next");
        });
    };
}

function _classCallCheck(t, o) {
    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, o) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? t : o;
}

function _inherits(t, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    t.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var e = arguments[o];
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
}, _createClass = function() {
    function t(t, o) {
        for (var e = 0; e < o.length; e++) {
            var s = o[e];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(o, e, s) {
        return e && t(o.prototype, e), s && t(o, s), o;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _modal = require("./../../components/Coupons/modal.js"), _modal2 = _interopRequireDefault(_modal), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), ARROW_WHITE = "https://cdninsight.speiyou.com/1513677741392_course_icon_arrow_down.png", ARROW_GRAY = "https://cdninsight.speiyou.com/1513677668665_screen_icon_arrow_down.png", OrderDetailCoupon = function(t) {
    function o() {
        var t, e, s, n;
        _classCallCheck(this, o);
        for (var a = arguments.length, r = Array(a), i = 0; i < a; i++) r[i] = arguments[i];
        return e = s = _possibleConstructorReturn(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [ this ].concat(r))), 
        s.config = {
            navigationBarTitleText: "优惠券",
            enablePullDownRefresh: !1,
            backgroundTextStyle: "dark"
        }, s.$repeat = {}, s.$props = {
            "coupon-modal": {
                "xmlns:v-bind": "",
                "v-bind:modalTitle.once": "modalTitle",
                "v-bind:errorMessage.sync": "modalErrorMessage",
                "v-bind:btnText.once": "modalBtnText",
                "v-bind:btnLoading.sync": "modalBtnLoading",
                "xmlns:v-on": ""
            },
            "tal-toast": {
                "xmlns:v-bind": "",
                "v-bind:vertical.sync": "toastVertical"
            }
        }, s.$events = {
            "coupon-modal": {
                "v-on:couponSubmit": "validateCoupon"
            }
        }, s.components = {
            "coupon-modal": _modal2.default,
            "tal-toast": _toast2.default
        }, s.data = {
            classId: "",
            userInfo: {},
            orderIndex: "",
            classPromotions: [],
            arrow: {
                white: ARROW_WHITE,
                gray: ARROW_GRAY
            },
            toastVertical: 50,
            tabs: [ "未使用", "已使用" ],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            modalTitle: "请输入您的优惠券码",
            modalErrorMessage: "",
            modalBtnText: "确认绑定",
            modalBtnLoading: !1,
            animDataArrow: {},
            noCoupon: {
                used: !0,
                unused: !0
            },
            couponListUnused: [],
            couponListUsed: [],
            couponListArr: [],
            selectCount: 0,
            selectMoney: 0,
            pageNumber: 1,
            morePage: !1,
            classPrice: 0,
            selectObj: {},
            sortIndex: 0,
            couponInfo: {},
            typeName: {
                1: "满减券",
                2: "立减券",
                3: "折扣券",
                4: "满折券",
                6: "兑换码"
            },
            loadingStatus: !0
        }, s.computed = {}, s.methods = {
            handleClickDetail: function(t) {
                this.couponListArr[t].show = !this.couponListArr[t].show;
            },
            handleConfirm: function() {
                this.updateCoupon();
            },
            handleClickSelect: function(t) {
                this.couponListStatus(t, 1);
            },
            showModal: function() {
                this.$invoke("coupon-modal", "show");
            },
            validateCoupon: function(t) {
                if (!t) return void (this.modalErrorMessage = "请输入优惠码");
                var o = this, e = wx.getStorageSync("userInfoStatus"), s = _path2.default.bindcoupon, n = {
                    stu_id: this.userInfo.stuId || e.stu_id,
                    class_id: this.classId,
                    passwords: t,
                    area_code: this.userInfo.areaCode || e.area_code
                }, a = {
                    authorization: wx.getStorageSync("user-token")
                };
                if (this.modalBtnLoading = !0, this.modalErrorMessage = "", (0, _global.reTextSymbol)(n.passwords)) return wx.showToast({
                    title: _wepy2.default.$instance.globalData.tErrorMasg,
                    icon: "none",
                    duration: 2e3
                }), void (this.modalBtnLoading = !1);
                (0, _global.isHaveObjectValue)(_extends({}, n, a)) && (0, _common.axios)({
                    url: s,
                    data: n,
                    header: a
                }).then(function(t) {
                    var e = t.data;
                    if (e && 0 === e.error_code) {
                        o.modalBtnLoading = !1;
                        var s = e.data.coupon[0].status, n = {
                            13: "兑换成功，但优惠券已过期",
                            16: "优惠券已被使用",
                            18: "兑换成功，但此优惠券不适用此班级",
                            19: "此优惠券不能在微信小程序使用",
                            20: "同类优惠券不能用作同一个班",
                            22: "优惠券已被其它人绑定",
                            23: "已绑定过此优惠券",
                            24: "优惠券尚未审核通过",
                            default: ""
                        };
                        n[s] ? o.modalErrorMessage = n[s] : o.couponSuccess(), o.$apply();
                    } else o.modalBtnLoading = !1, o.modalErrorMessage = e.error_msg, o.$apply();
                });
            }
        }, n = e, _possibleConstructorReturn(s, n);
    }
    return _inherits(o, t), _createClass(o, [ {
        key: "couponListStatus",
        value: function(t, o) {
            var e = this, s = this.couponListArr[t];
            if (1 === o) {
                if (!s.status) return;
                s.select ? (this.selectCount--, this.selectMoney -= s.discount) : (this.selectCount++, 
                this.selectMoney += s.discount), this.couponListArr[t].select = !this.couponListArr[t].select, 
                this.selectObj[s.coupon_id] = {
                    status: s.select,
                    money: s.discount,
                    classId: this.classId,
                    sortIndex: s.sortIndex,
                    isVirtual: s.is_virtual_coupon,
                    coupon_code: s.coupon_code,
                    localStatus: s.select
                };
            } else {
                var n = s.coupon_id;
                Object.keys(this.selectObj).length && this.selectObj[n] && (!0 === this.selectObj[n].status && this.selectObj[n].classId === this.classId && (this.couponListArr[t].select = !0, 
                this.couponListArr[t].localStatus = !0), !0 !== this.selectObj[n].status || this.selectObj[n].classId === this.classId || this.selectObj[n].isVirtual || (this.couponListArr[t].status = !1, 
                this.couponListArr[t].localStatus = !0));
            }
            if (!(t < this.couponListArr.length - 1 && 1 !== o)) {
                var a = wx.getStorageSync("couponInfo");
                if (1 === o) if (s.is_virtual_coupon) {
                    if (1 === s.use_condition_flag) return void this.couponListArr.map(function(t, o) {
                        t.coupon_id !== s.coupon_id && s.select ? e.couponListArr[o].status = !1 : 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || (e.couponListArr[o].status = !0);
                    });
                    if (this.selectCount >= 100 || this.selectMoney >= this.classPrice) return void this.couponListArr.map(function(t, o) {
                        t.select || (e.couponListArr[o].status = !1);
                    });
                    this.couponListArr.map(function(t, o) {
                        t.is_virtual_coupon && 1 !== t.use_condition_flag ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || !t.is_virtual_coupon || (e.couponListArr[o].status = !0) : 0 === e.selectCount ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || (e.couponListArr[o].status = !0) : e.couponListArr[o].status = !1;
                    });
                } else this.couponListArr.map(function(t, o) {
                    t.coupon_id !== s.coupon_id && s.select ? e.couponListArr[o].status = !1 : 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || t.localStatus || (e.couponListArr[o].status = !0);
                }); else if (Object.keys(a).length && a[this.classId]) {
                    console.log("回显");
                    var r = !1, i = 0, u = Object.values(this.selectObj);
                    if (u.map(function(t) {
                        !t.isVirtual && t.status && t.classId == e.classId && (r = !0, i = t.sortIndex);
                    }), this.couponListArr.map(function(t, o) {
                        1 != t.select || t.is_virtual_coupon && 1 !== t.use_condition_flag || (r = !0, i = o);
                    }), r) this.couponListArr.map(function(t, o) {
                        e.couponListArr[o].status = i == o;
                    }); else {
                        if (this.couponListArr.map(function(t, o) {
                            t.is_virtual_coupon || (e.couponListArr[o].status = !1);
                        }), this.selectCount >= 100 || this.selectMoney >= this.classPrice) return void this.couponListArr.map(function(t, o) {
                            t.select || (e.couponListArr[o].status = !1);
                        });
                        this.couponListArr.map(function(t, o) {
                            t.is_virtual_coupon && 1 !== t.use_condition_flag ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || !t.is_virtual_coupon || (e.couponListArr[o].status = !0) : 0 === e.selectCount ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || (e.couponListArr[o].status = !0) : e.couponListArr[o].status = !1;
                        });
                    }
                    var c = [];
                    for (var l in this.selectObj) !this.selectObj[l].isVirtual && this.selectObj[l].status && c.push(l);
                    c.map(function(t) {
                        e.couponListArr.map(function(o, s) {
                            t === o.coupon_id && e.selectObj[t].classId != e.classId && (e.couponListArr[s].status = !1);
                        });
                    });
                } else {
                    console.log("uuuuuu");
                    var p = !1, d = 0, h = (Object.values(this.selectObj), []);
                    for (var _ in this.selectObj) !this.selectObj[_].isVirtual && this.selectObj[_].status && h.push(_);
                    if (this.couponListArr.map(function(t, o) {
                        1 != t.select || t.is_virtual_coupon && 1 !== t.use_condition_flag || (p = !0, d = o);
                    }), p) this.couponListArr.map(function(t, o) {
                        e.couponListArr[o].status = d == o;
                    }); else {
                        if (this.selectCount >= 100 || this.selectMoney >= this.classPrice) return void this.couponListArr.map(function(t, o) {
                            t.select || (e.couponListArr[o].status = !1);
                        });
                        this.couponListArr.map(function(t, o) {
                            t.is_virtual_coupon && 1 !== t.use_condition_flag ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || !t.is_virtual_coupon || (e.couponListArr[o].status = !0) : 0 === e.selectCount ? 1 !== t.py_coupon_status && 6 !== t.py_coupon_status || (e.couponListArr[o].status = !0) : e.couponListArr[o].status = !1;
                        }), h.map(function(t) {
                            e.couponListArr.map(function(o, s) {
                                t === o.coupon_id && (e.couponListArr[s].status = !1);
                            });
                        });
                    }
                }
            }
        }
    }, {
        key: "getCouponList",
        value: function() {
            function t(t) {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function t(o) {
                var e, s, n, a, r, i, u, c = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return 1 !== o && (this.couponListArr = [], this.loadingStatus = !0), e = this.$parent.globalData.recommendCoupon[this.orderIndex], 
                        s = {
                            usedPromotion: e.havePromotion,
                            promotionId: e.promotionId,
                            page: this.pageNumber,
                            pageSize: 30,
                            classId: this.classId
                        }, n = {
                            authorization: wx.getStorageSync("user-token")
                        }, a = _path2.default.couponList, r = "get", t.next = 8, (0, _common.axios)({
                            url: a,
                            data: s,
                            method: r,
                            header: n
                        });

                      case 8:
                        i = t.sent, this.morePage = i.data.data.have_more_page, this.classPrice = i.data.data.class_price, 
                        u = i.data.data.coupon, this.loadingStatus = !1, u.map(function(t, o) {
                            var e = _extends({
                                select: !1,
                                show: !1,
                                sortIndex: c.sortIndex++,
                                typeName: c.typeName[t.type],
                                coupon_code: t.coupon_code,
                                localStatus: !1,
                                classId: c.classId,
                                status: 1 === t.py_coupon_status || 6 === t.py_coupon_status
                            }, t);
                            c.couponListArr.push(e);
                        }), this.couponListArr.map(function(t, o) {
                            c.couponListStatus(o);
                        }), this.$apply();

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "updateCoupon",
        value: function() {
            function t() {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var o, e, s, n, a, r, i, u, c = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        o = [];
                        for (e in this.selectObj) this.selectObj[e].status && this.selectObj[e].classId === this.classId && o.push({
                            couponNum: this.selectObj[e].coupon_code
                        });
                        return this.classPromotions.forEach(function(t) {
                            t.classId === c.classId && (t.coupons = o);
                        }), s = _path2.default.createorder, n = this.$parent.globalData.orderDetail, a = wx.getStorageSync("userInfoStatus"), 
                        r = {
                            classPromotions: this.classPromotions,
                            studentId: a.stu_id,
                            orderNo: n.orderNo,
                            area: a.area_code
                        }, i = {
                            authorization: wx.getStorageSync("user-token")
                        }, t.next = 6, (0, _common.axios)({
                            url: s,
                            data: r,
                            header: i
                        });

                      case 6:
                        if (u = t.sent, 0 === u.data.error_code) {
                            t.next = 10;
                            break;
                        }
                        return this.$invoke("tal-toast", "show", {
                            message: u.data.error_msg
                        }), t.abrupt("return");

                      case 10:
                        0 === u.data.error_code && (this.$parent.globalData.orderDetail = u.data.data, this.$parent.globalData.couponChanged = !0, 
                        this.couponInfo = wx.getStorageSync("couponInfo"), this.couponInfo[this.classId] = {
                            money: this.selectMoney,
                            count: this.selectCount
                        }, 0 == this.selectCount && delete this.couponInfo[this.classId], wx.setStorageSync("selectObj", this.selectObj), 
                        wx.setStorageSync("couponInfo", this.couponInfo), this.$apply(), wx.navigateBack({
                            delta: 1
                        }));

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "onLoad",
        value: function(t) {
            this.defaultGive(t), this.getUserInfo(), this.selectObj = wx.getStorageSync("selectObj") || {}, 
            this.getCouponList();
            var o = wx.getStorageSync("couponInfo");
            Object.keys(o).length && o[this.classId] && (this.selectCount = o[this.classId].count, 
            this.selectMoney = o[this.classId].money);
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.morePage && (this.pageNumber++, this.getCouponList(1));
        }
    }, {
        key: "defaultGive",
        value: function(t) {
            this.classId = t.class_id, this.orderIndex = t.index, this.classPromotions = this.$parent.globalData.dosaveorders;
        }
    }, {
        key: "getUserInfo",
        value: function() {
            this.userInfo = {
                stuId: wx.getStorageSync("userInfoStatus").stu_id,
                areaCode: wx.getStorageSync("userInfoStatus").city_code
            };
        }
    }, {
        key: "couponSuccess",
        value: function() {
            this.$invoke("coupon-modal", "hide"), this.$invoke("tal-toast", "show", {
                message: "优惠券兑换成功"
            }), this.getCouponList(), this.$apply();
        }
    }, {
        key: "updateCouponNum",
        value: function() {
            var t = this.orderIndex, o = this.$parent.globalData.orderDetail.promotGroups, e = [];
            return o.forEach(function(o, s) {
                s !== parseInt(t) && e.push(o.classes[0].coupons);
            }), e;
        }
    }, {
        key: "updateOrder",
        value: function(t) {
            var o = this;
            return new Promise(function(e, s) {
                var n = o.$parent.globalData.orderDetail;
                o.classPromotions.forEach(function(e) {
                    e.classId === o.classId && (e.coupons = [ {
                        couponNum: t
                    } ]);
                });
                var a = _path2.default.createorder, r = o, i = wx.getStorageSync("userInfoStatus"), u = {
                    classPromotions: o.classPromotions,
                    studentId: i.stu_id,
                    orderNo: n.orderNo,
                    area: i.area_code
                }, c = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, u, c)) && (0, _common.axios)({
                    url: a,
                    data: u,
                    header: c
                }).then(function(t) {
                    var o = t.data;
                    o && o.data && 0 === o.error_code ? (r.$parent.globalData.orderDetail = o.data, 
                    r.$parent.globalData.couponChanged = !0, r.$apply(), e(!0)) : r.$invoke("tal-toast", "show", {
                        message: o.error_msg || "结算失败，请稍后重试",
                        duration: 2e3
                    });
                });
            });
        }
    } ]), o;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetailCoupon, "pages/courselist/coupon"));