function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, r = e(require("../../../network/api")), i = e(require("../../../utils/notification.js")), s = e(require("../../../utils/const.js")), o = (e(require("../../../utils/util")), 
require("../../../dist/index"));

Page(Object.assign({}, o.TopTips, {
    data: {
        loadSuccess: !1,
        storeId: 0,
        service: {},
        staff: {},
        arrivedTime: {},
        customer: {},
        arrivedNum: {
            quantity: 1,
            min: 1,
            max: 9999
        },
        showDialog: !1,
        arrivedDate: {},
        dateList: [],
        from: "store",
        payWay: [],
        payType: "payStore",
        actionList: [],
        serviceList: [],
        showSpecModal: !1,
        showPhoneModal: !1,
        serviceIndex: 0,
        options: {
            customer: {},
            serviceProject: {},
            img: {},
            storeInfo: {},
            staff: {},
            arrivedTime: {},
            arrivedNum: {}
        },
        total: 0
    },
    onLoad: function(e) {
        var t = this, a = getApp().getFlash("service"), r = getApp().getFlash("staff");
        a ? (getApp().setFlash("service", null), this.setData({
            storeId: a.storeId,
            service: a,
            from: "project"
        })) : r ? (getApp().setFlash("staff", null), this.setData({
            storeId: r.storeId,
            staff: r,
            from: "staff"
        })) : this.setData({
            storeId: e.storeId,
            from: "store"
        }), this.querySetting(), i.default.register(s.default.action.YUYUE_STAFF, this, function(e) {
            t.setData({
                staff: e.data
            }), t.querySetting();
        });
    },
    onShow: function() {
        var e = getApp().getFlash("textarea_obj");
        e && (this.setData({
            textareaObj: e
        }), getApp().setFlash("textarea_obj", null));
    },
    onUnload: function() {
        i.default.remove(s.default.action.YUYUE_STAFF, this);
    },
    querySetting: function(e) {
        var t = this;
        wx.showLoading({
            title: "请稍候"
        });
        var i = this.data, s = i.storeId, o = i.from, n = i.service, d = i.serviceList, c = i.staff, u = i.arrivedNum, l = i.arrivedDate, p = {
            storeId: s,
            from: o,
            staffId: c.id,
            num: u.quantity,
            arrivedYear: l.arrivedYear,
            arrivedMonth: l.arrivedMonth,
            arrivedDay: l.arrivedDay,
            arrivedTime: l.arrivedTime
        };
        "project" === o ? p.projectItems = [ {
            projectId: n.id,
            propertiesId: n.selectedSku.id,
            propertiesValue: n.selectedSku.properties
        } ] : "staff" === o && (p.projectItems = d.filter(function(e) {
            return e.cheked;
        }).map(function(e) {
            return {
                projectId: e.id,
                propertiesId: e.selectSku.id,
                propertiesValue: e.selectSku.properties
            };
        })), r.default.queryBookSetting(p).then(function(r) {
            var i = {};
            r.data.booking.forEach(function(e) {
                i["" + e.optionName] = e.data;
            });
            var s = r.data.payWay.length > 0 ? r.data.payWay[0] : t.data.payType, o = (e ? t.data.serviceList : r.data.serviceList).map(function(e) {
                return a({}, e, {
                    specs: e.item,
                    selectedSku: e.selectSku,
                    selectedSpec: e.selectSku.id ? e.selectSku.propertiesName.split(";").filter(function(e) {
                        return e;
                    }) : [],
                    selectedSpecValue: e.selectSku.id ? e.selectSku.properties.split(";").filter(function(e) {
                        return e;
                    }) : []
                });
            }), n = t.data.arrivedNum.quantity > r.data.remainNum ? r.data.remainNum : t.data.arrivedNum.quantity;
            console.log("quantity", n), t.setData({
                isRelationProject: r.data.isRelationProject,
                isRelationStaff: r.data.isRelationStaff,
                loadSuccess: !0,
                form: r.data.customLinkman,
                options: i,
                payWay: r.data.payWay,
                payType: s,
                actionList: r.data.actionList,
                total: r.data.total,
                serviceList: o,
                "arrivedNum.max": r.data.remainNum < 0 ? 9999 : r.data.remainNum,
                "arrivedNum.quantity": n < 0 ? t.data.arrivedNum.quantity : n
            }), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), console.log("-----------", e);
        });
    },
    handleZanQuantityChange: function(e) {
        this.setData({
            "arrivedNum.quantity": e.detail.number
        }), this.querySetting(!0);
    },
    showTimeDialog: function() {
        var e = this, t = this.data, a = t.storeId, i = t.staff;
        t.from;
        r.default.queryLoadTime({
            storeId: a,
            staffId: i.id || ""
        }).then(function(t) {
            e.setData({
                dateList: t.data,
                showDialog: !0
            });
        }).catch(function(e) {
            console.log("queryLoadTime error", e);
        });
    },
    hideTimeDialog: function() {
        this.setData({
            showDialog: !1
        });
    },
    handleUpdateDateTime: function(e) {
        var t = e.detail.arrivedDate;
        this.setData({
            arrivedDate: t,
            showDialog: !1
        }), this.querySetting(!0);
    },
    handleSelectStaff: function() {
        var e = this.data, t = e.storeId, a = e.service, r = e.staff;
        wx.navigateTo({
            url: "/pages/services/select_worker/index?storeId=" + t + "&serviceId=" + (a.id || "") + "&staffId=" + (r.id || "")
        });
    },
    queryArrivedDateTime: function(e, t) {
        var a = this;
        r.default.queryLoadTime({
            storeId: e,
            staffId: t
        }).then(function(e) {
            a.setData({
                dateList: e.data
            });
        }).catch(function(e) {
            console.log("queryLoadTime error", e);
        });
    },
    createOrder: function() {
        if (wx.getStorageSync("userinfo").mobile) {
            var e = this.data, t = e.from, a = e.storeId, i = e.options, s = e.service, o = e.staff, n = (e.arrivedTime, 
            e.customer, e.serviceList), d = e.arrivedDate, c = e.arrivedNum, u = (e.payWay, 
            e.payType), l = e.actionList, p = e.imgUrl;
            e.genderIndex;
            if (console.log("aaa-bbb", 0 == n.filter(function(e) {
                return e.cheked;
            }).length, !s.id), i.serviceProject.required && ("staff" == t && 0 == n.filter(function(e) {
                return e.cheked;
            }).length || "project" == t && !s.id)) this.showZanTopTips("请先选择服务项目"); else if (!i.staff.required || o.id) if (!i.arrivedTime.required || d.arrivedYear) {
                var f = this.selectComponent("#customer_form");
                if (console.log("customerForm", f), f) {
                    var h = f.validate();
                    if (console.log("errs", h), h && h.length) return void this.showZanTopTips(h[0]);
                }
                var v = f.getBookerInfo(), g = f.getCellPhone(), m = [];
                "staff" === t ? m = n.filter(function(e) {
                    return e.cheked;
                }).map(function(e) {
                    return {
                        projectId: e.id,
                        propertiesId: e.selectSku.id,
                        propertiesValue: e.selectSku.properties
                    };
                }) : "project" === t && (m = [ {
                    projectId: s.id,
                    propertiesId: s.selectedSku.id,
                    propertiesValue: s.selectedSku.properties
                } ]);
                var y = {
                    projectItems: m,
                    imgUrl: p,
                    orderType: "payStore" === u ? "payStore" : l.indexOf("payPreBtn") > -1 ? "payPre" : "payOnline",
                    storeId: parseInt(a),
                    staffId: parseInt(o.id),
                    arrivedYear: d.arrivedYear,
                    arrivedMonth: d.arrivedMonth,
                    arrivedDay: d.arrivedDay,
                    arrivedTime: d.arrivedTime,
                    num: c.quantity,
                    bookerInfo: v,
                    mobile: g
                };
                wx.showLoading({
                    title: "请稍候"
                }), r.default.commitBookOrder(y).then(function(e) {
                    "payStore" === u ? (getApp().setFlash("service_create_orderdata", e.data), wx.redirectTo({
                        url: "/pages/services/order_result/index?result=1"
                    }), wx.hideLoading()) : r.default.seviceToPay({
                        orderId: e.data.id
                    }).then(function(t) {
                        0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                            timeStamp: t.data.timeStamp + "",
                            nonceStr: t.data.nonceStr,
                            package: t.data.package,
                            signType: t.data.signType,
                            paySign: t.data.paySign,
                            success: function(t) {
                                wx.hideLoading(), getApp().setFlash("service_create_orderdata", e.data), wx.redirectTo({
                                    url: "/pages/services/order_result/index?result=1"
                                });
                            },
                            fail: function(t) {
                                wx.hideLoading(), getApp().setFlash("service_create_orderdata", e.data), wx.redirectTo({
                                    url: "/pages/services/order_result/index?result=0"
                                });
                            }
                        });
                    }).catch(function(e) {
                        wx.hideLoading(), that.setData({
                            isPaying: !1
                        }), that.showTopTips(r.default.errors(e.error) || "支付失败");
                    });
                }).catch(function(e) {
                    wx.hideLoading();
                });
            } else this.showZanTopTips("请先选择到店时间"); else this.showZanTopTips("请先选择服务人员");
        } else this.setData({
            showPhoneModal: !0,
            url: "/pages/login/login"
        });
    },
    handleUpdatePayType: function(e) {
        var t = e.currentTarget.dataset.paytype;
        this.setData({
            payType: t
        });
    },
    showSpecDialog: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            showSpecModal: !0,
            serviceIndex: t
        });
    },
    hideSpecDialog: function(e) {
        var a = this.data.serviceIndex, r = e.detail.service;
        r.selectSku = r.selectedSku, this.setData(t({
            showSpecModal: !1
        }, "serviceList[" + a + "]", r));
    },
    handleSpecDialogOk: function(e) {
        var a = this.data.serviceIndex, r = e.detail.service;
        r.selectSku = r.selectedSku, this.setData(t({
            showSpecModal: !1
        }, "serviceList[" + a + "]", r));
    },
    toogleCheckbox: function(e) {
        var t = e.currentTarget.dataset.index;
        if (this.data.serviceList[t].skus.length > 0 && !this.data.serviceList[t].selectSku.id) this.showZanTopTips("请先选择规格"); else {
            var a = this.data.serviceList.map(function(e, a) {
                return a === t && (e.cheked = !e.cheked), e;
            });
            this.setData({
                serviceList: a
            }), this.querySetting(!0);
        }
    }
}));