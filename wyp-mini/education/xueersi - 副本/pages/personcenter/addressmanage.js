function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var i = t[n](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), _global = require("./../../common/util/global.js"), testlist = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "收货地址",
            enablePullDownRefresh: !0,
            backgroundTextStyle: "dark"
        }, a.components = {
            taltoast: _toast2.default
        }, a.data = {
            addressList: [],
            chooseIndex: -1,
            riId: "",
            isshow: !0,
            orderAddr: !1
        }, a.methods = {
            change: function(e) {
                this.$invoke("taltoast", "hide");
                var t = this.addressList[e], r = this, a = _path2.default.setdefaultconsignee, n = {
                    address_id: t.riId
                }, o = {
                    authorization: wx.getStorageSync("user-token")
                };
                (0, _global.isHaveObjectValue)(_extends({}, n, o)) && (0, _common.axios)({
                    url: a,
                    data: n,
                    header: o
                }).then(function(t) {
                    var a = t.data;
                    a && 0 === a.error_code ? (r.$invoke("taltoast", "show", {
                        message: "设置成功",
                        duration: 2e3
                    }), r.addressList.forEach(function(t, r) {
                        t.riIsDefault = 0, r === e && (t.riIsDefault = 1);
                    }), r.$apply()) : r.$invoke("taltoast", "show", {
                        message: "设置失败，请重试",
                        duration: 2e3
                    });
                });
            },
            del: function(e) {
                var t = this;
                wx.showModal({
                    title: "",
                    content: "确定要删除地址吗？",
                    confirmText: "确定",
                    cancelText: "取消",
                    success: function(r) {
                        r.confirm && t.deleteOrder(e);
                    }
                });
            },
            edita: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var r, a, n, o, i, s, d, c, u, l, f, p, h, _, m, y, g;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = {
                                recipient_id: this.addressList[t].riId
                            }, a = _path2.default.recipientinfo, n = {}, o = {
                                authorization: wx.getStorageSync("user-token")
                            }, e.next = 6, (0, _common.axios)({
                                url: a,
                                data: r,
                                header: o
                            });

                          case 6:
                            i = e.sent, 0 === i.data.error_code && (s = i.data.data, d = s.id, c = s.name, u = s.tel, 
                            l = s.provinceId, f = s.provinceName, p = s.cityId, h = s.cityName, _ = s.districtId, 
                            m = s.districtName, y = s.address, g = s.isDefault, n = {
                                riId: d,
                                riRecipientName: c,
                                riMobilePhoneNumber: u,
                                riProvinceId: l,
                                riProvinceName: f,
                                riCityId: p,
                                riCityName: h,
                                riCountyId: _,
                                riCountyName: m,
                                riDetailAddress: y,
                                riIsDefault: g
                            }, _wepy2.default.$instance.globalData.ReceivingAddressInfo = n, wx.navigateTo({
                                url: "/pages/personcenter/addPage"
                            }));

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            add: function() {
                this.addLoading = !0, this.$apply(), wx.navigateTo({
                    url: "/pages/personcenter/addPage?add=true"
                });
            },
            select: function(e) {
                this.orderAddr && (this.addressList.forEach(function(t) {
                    t.riId === e.riId ? t._checked = !0 : t._checked = !1;
                }), this.$parent.globalData.orderAddr = this._convertAddr(e), this.$parent.globalData.orderAddrChanged = !0, 
                this.$apply(), wx.navigateBack({
                    delta: 1
                }));
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.orderAddr = "order_detail" === e.from;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getConsigneeAddress();
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.getConsigneeAddress();
        }
    }, {
        key: "getConsigneeAddress",
        value: function() {
            var e = this, t = this, r = wx.getStorageSync("userInfoStatus"), a = _path2.default.addresslist, n = null, o = {
                area_code: r.area_code,
                stu_id: r.stu_id
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, o, i)) && (0, _common.axios)({
                url: a,
                data: o,
                header: i
            }).then(function(r) {
                var a = r.data;
                wx.stopPullDownRefresh(), a && a.data && 0 === a.error_code && (n = a.data, t.addressList = [], 
                n.forEach(function(r) {
                    r.riId === e.$parent.globalData.orderAddr.studentAddressId && (r._checked = !0);
                    var a = {};
                    a.riId = r.id, a.riRecipientName = r.name, a.riMobilePhoneNumber = r.tel, a.riProvinceId = r.provinceId, 
                    a.riProvinceName = r.provinceName, a.riCityId = r.cityId, a.riCityName = r.cityName, 
                    a.riCountyId = r.districtId, a.riCountyName = r.districtName, a.riDetailAddress = r.address, 
                    a.riIsDefault = r.isDefault, t.addressList.push(a);
                }), t.$apply());
            });
        }
    }, {
        key: "deleteOrder",
        value: function(e) {
            var t = this;
            this.addressList.forEach(function(r, a) {
                e === a && (t.riId = r.riId);
            });
            var r = this, a = wx.getStorageSync("userInfoStatus"), n = _path2.default.delconsignee, o = {
                address_id: r.riId,
                area: a.area_code
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, o, i)) && (0, _common.axios)({
                url: n,
                data: o,
                header: i
            }).then(function(e) {
                var t = e.data;
                t && 0 === t.error_code ? (r.$invoke("taltoast", "show", {
                    message: "删除成功",
                    duration: 2e3
                }), r.getConsigneeAddress()) : r.$invoke("taltoast", "show", {
                    message: "删除失败，请重试",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "_convertAddr",
        value: function(e) {
            return {
                provinceId: e.riProvinceId,
                provinceName: e.riProvinceName,
                cityId: e.riCityId,
                cityName: e.riCityName,
                countyId: e.riCountyId,
                countyName: e.riCountyName,
                detailAddress: e.riDetailAddress,
                mobilephoneNumber: e.riMobilePhoneNumber,
                recipientName: e.riRecipientName,
                studentAddressId: e.riId,
                orderAddrAvailable: !0
            };
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(testlist, "pages/personcenter/addressmanage"));