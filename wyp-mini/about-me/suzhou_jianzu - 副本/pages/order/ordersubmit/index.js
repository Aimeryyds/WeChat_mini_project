var a = require("../../../utils/server"), t = wx.getStorageSync("utoken"), e = require("../../../wxParse/wxParse"), r = void 0, d = void 0, o = void 0, i = void 0, s = void 0, c = void 0, n = void 0, u = void 0, p = void 0, l = void 0, m = void 0, g = void 0, h = 1, D = void 0, f = getApp(), x = {}, w = void 0, v = void 0, _ = void 0;

Page({
    data: {
        loading: !0,
        use_money: 0,
        use_point: 0,
        createInfo: [],
        check: [ "true", "" ],
        coupon: [],
        cv: "请选择优惠劵",
        cpos: -1,
        couponCode: "",
        Data: "",
        orderid: "",
        coupon_paper: 0,
        Height: Math.ceil(wx.getSystemInfoSync().screenHeight),
        select_coupon: "x",
        coupon_name: "",
        coupon_num: "",
        coupon_price: "",
        coupon_id: "",
        coupon_backstr: "",
        ID: "",
        goodsPrice: "",
        couponprice: "",
        sub_couponprice: "",
        credit3: "",
        active: "1",
        checkbox: 0,
        false: !1,
        array: [ "08 - 10 时", "10 - 12 时", "12 - 15 时", "15 - 17 时", "17 - 19 时", "19 - 21 时", "21 - 24 时" ],
        arrayValue: "",
        customerserver: "",
        myList: "",
        cartIds: ""
    },
    onLoad: function(a) {
        var e = this;
        if (t = wx.getStorageSync("utoken"), m = "", w = "", v = "", x = {}, o = "", i = "", 
        s = "", c = "", n = "", u = "", p = "", "myList" == a.myList && e.setData({
            myList: !0
        }), wx.getStorageSync("customerserver") && e.setData({
            customerserver: wx.getStorageSync("customerserver")
        }), (a.id || a.optionid && a.total) && (m = a.id, w = a.optionid, v = a.total), 
        a.cartIds && e.setData({
            cartIds: a.cartIds
        }), a.id && e.setData({
            id: a.id
        }), a.id && a.mid && e.setData({
            mid: a.mid,
            bargainid: a.id
        }), a.time && a.cartIds) {
            D = a.time, e.setData({
                active: 2,
                Data: {
                    amount: a.amount,
                    cartIds: a.cartIds,
                    time: a.time,
                    title: a.title,
                    price: a.price,
                    img: a.img,
                    tabindex: 1,
                    store: a.store
                },
                totalPrice: {
                    realprice: a.price
                }
            }), f.globalData.store && e.setData({
                storeid: f.globalData.store.id,
                carrierData: f.globalData.store
            });
            var r = e.data.Data.price * e.data.Data.amount;
            e.setData({
                couponprice: r
            }), e.timeloadingdata();
        }
        "undefined" != a.mid && !a.id && a.cartIds && e.setData({
            mid: a.mid,
            cartIds: a.cartIds
        }), a && a.active && e.setData({
            active: a.active
        }), D ? e.timeloadingdata() : this.getCarts(e.data.cartIds);
    },
    onShow: function(e) {
        var r = this;
        if (t = wx.getStorageSync("utoken"), h = 1, a.globalData.cartIds) {
            var d = a.globalData.cartIds;
            this.setData({
                cartIds: d
            });
        }
        if (wx.getStorageSync("carrierData")) {
            var o = wx.getStorageSync("carrierData");
            r.setData({
                carrierData: o,
                active: o.active
            }), wx.getStorageSync("carrierData") && wx.removeStorageSync("carrierData");
        } else if (wx.getStorageSync("addrdata")) {
            var i = r.data.address;
            i ? i.province && i.city && i.area ? wx.getStorageSync("addrdata") && r.to_get_addr() : wx.getStorageSync("addrdata") ? r.to_get_addr() : r.to_add_addr("省市区请填写完整") : wx.getStorageSync("addrdata") ? r.to_get_addr() : r.to_add_addr("请添加新的地址"), 
            wx.getStorageSync("addrdata") && wx.removeStorageSync("addrdata");
        } else D ? r.timeloadingdata() : this.getCarts(r.data.cartIds);
    },
    bindinput: function(a) {},
    checkboxChange: function(a) {
        var t = this;
        a.detail.value[0] ? t.setData({
            checkbox: 1
        }) : t.setData({
            checkbox: 0
        }), console.log(t.data.checkbox);
    },
    bindTimeChange: function(a) {
        var t = this;
        t.setData({
            arrayValue: t.data.array[a.detail.value]
        });
    },
    getCoupons: function() {
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.sale.coupon.util.query1111",
            showToast: !1,
            data: {
                money: r,
                type: 0,
                utoken: t
            },
            success: function(a) {
                e.setData({
                    coupons: a.data.result
                });
            }
        });
    },
    timeloadingdata: function() {
        var e = this;
        a.sendRequest({
            url: "?r=services.order.address",
            showToast: !1,
            data: {
                utoken: t
            },
            success: function(a) {
                var t = a.data.result.province + " " + a.data.result.area + " " + a.data.result.city;
                e.setData({
                    address: {
                        realname: a.data.result.realname,
                        address: t
                    },
                    addressid: a.data.result.id,
                    loading: !1
                });
            }
        });
    },
    addressSelect: function() {
        wx.navigateTo({
            url: "../../address/select/index"
        });
    },
    active: function(a) {
        var t = this;
        t.setData({
            checkbox: 0
        }), "1" == h ? t.data.active != a.currentTarget.dataset.index && t.setData({
            active: a.currentTarget.dataset.index
        }) : "2" == a.currentTarget.dataset.index && wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "请选择同一店铺商品自提",
            success: function(a) {
                a.confirm;
            }
        }), "2" == t.data.active ? (p = parseFloat(t.data.couponprice) - parseFloat(t.data.dispatch_price), 
        p = p.toFixed(2), t.setData({
            couponprice: p
        })) : (p = parseFloat(t.data.couponprice) + parseFloat(t.data.dispatch_price), p = p.toFixed(2), 
        t.setData({
            couponprice: p
        }));
    },
    Tocoupon: function() {
        this.setData({
            coupon_paper: 1
        });
    },
    getunCoupon: function() {
        this.setData({
            coupon_paper: 0
        });
    },
    getCoupon: function(a) {
        var t = this;
        if ("2" == t.data.active ? (p = _ - t.data.dispatch_price, t.setData({
            couponprice: p
        })) : (p = _, t.setData({
            couponprice: _
        })), "no" == a.currentTarget.dataset.index) t.setData({
            coupon_name: "",
            coupon_price: "",
            coupon_id: "",
            coupon_backstr: "",
            ID: "",
            select_coupon: "x"
        }), t.setData({
            coupon_paper: 0
        }); else {
            "" == o && wx.showModal({
                title: "提示",
                content: "您还未选择优惠卷",
                showCancel: !1,
                success: function(a) {}
            }), t.setData({
                coupon_name: o,
                coupon_price: s,
                coupon_id: c,
                coupon_backstr: n,
                ID: u
            }), t.setData({
                coupon_paper: 0
            }), t.data.Data.time ? ("立减" == t.data.coupon_backstr ? (l = t.data.coupon_price, 
            t.setData({
                sub_couponprice: l
            })) : "返现" == t.data.coupon_backstr ? (l = t.data.coupon_price, t.setData({
                sub_couponprice: 0
            })) : "折" == t.data.coupon_backstr ? (l = t.data.totalPrice.realprice - t.data.totalPrice.realprice * t.data.coupon_price * .1, 
            t.setData({
                sub_couponprice: l
            })) : (l = 0, t.setData({
                sub_couponprice: l
            })), "立减" == t.data.coupon_backstr ? (p = t.data.Data.price * t.data.Data.amount - t.data.coupon_price, 
            t.setData({
                couponprice: p
            })) : "返现" == t.data.coupon_backstr ? (p = t.data.Data.price, t.setData({
                couponprice: p
            })) : "折" == t.data.coupon_backstr ? (p = t.data.Data.price * t.data.coupon_price * .1 * t.data.Data.amount, 
            t.setData({
                couponprice: p
            })) : (p = t.data.Data.price * t.data.Data.amount, t.setData({
                couponprice: p
            }))) : ("立减" == t.data.coupon_backstr ? t.data.totalPrice.total_fee <= t.data.coupon_price ? (l = t.data.totalPrice.total_fee, 
            t.setData({
                sub_couponprice: l
            })) : (l = t.data.coupon_price, t.setData({
                sub_couponprice: l
            })) : "返现" == t.data.coupon_backstr ? (l = t.data.coupon_price, t.setData({
                sub_couponprice: 0
            })) : "折" == t.data.coupon_backstr ? (l = t.data.totalPrice.total_fee - t.data.totalPrice.total_fee * t.data.coupon_price * .1, 
            t.setData({
                sub_couponprice: l
            })) : (l = 0, t.setData({
                sub_couponprice: l
            })), "立减" == t.data.coupon_backstr ? t.data.totalPrice.total_fee <= t.data.coupon_price ? "0" != t.data.dispatch_price ? (p = parseFloat(t.data.dispatch_price), 
            t.setData({
                couponprice: p
            })) : (p = 0, t.setData({
                couponprice: p
            })) : (p -= parseFloat(t.data.coupon_price), t.setData({
                couponprice: p
            })) : "返现" == t.data.coupon_backstr ? (p = parseFloat(t.data.totalPrice.realprice), 
            t.setData({
                couponprice: p
            })) : "折" == t.data.coupon_backstr ? (p = t.data.dispatch_price ? parseFloat(.1 * t.data.totalPrice.total_fee * t.data.coupon_price) + parseFloat(t.data.dispatch_price) : parseFloat(t.data.totalPrice.total_fee * t.data.coupon_price * .1), 
            p = p.toFixed(2), t.setData({
                couponprice: p
            })) : (p = t.data.totalPrice.realprice, t.setData({
                couponprice: p
            })), p = parseFloat(p), t.data.credit3 && p && (t.data.credit3 < p ? (p -= t.data.credit3, 
            t.setData({
                couponprice: p
            })) : t.data.credit3 >= p && t.setData({
                couponprice: 0
            })));
            var e = l.toString();
            e.indexOf(".");
            if (e = Number(e), l = e.toFixed(2), t.setData({
                sub_couponprice: l
            }), (e = p.toString()).indexOf(".") > 0) {
                e.indexOf(".");
                e = Number(e), p = e.toFixed(2), t.setData({
                    couponprice: p
                });
            }
        }
    },
    Select: function(a) {
        var t = a.currentTarget.dataset.index, e = this;
        e.data.select_coupon == t ? (s = "", o = "", c = "", n = "", u = "", e.setData({
            select_coupon: "x"
        })) : ("立减" == a.currentTarget.dataset.backstr ? s = a.currentTarget.dataset.price : "返现" == a.currentTarget.dataset.backstr ? s = a.currentTarget.dataset.price : "折" == a.currentTarget.dataset.backstr && (s = parseFloat(a.currentTarget.dataset.price)), 
        s = s, o = a.currentTarget.dataset.name, c = a.currentTarget.dataset.id, n = a.currentTarget.dataset.backstr, 
        u = a.currentTarget.dataset.id, e.setData({
            select_coupon: t
        }));
    },
    tomendian: function() {
        void 0 != g ? wx.navigateTo({
            url: "../mendian/index?merchid=" + g + "&men=1&id=" + m + "&optionid=" + w + "&total=" + v
        }) : wx.navigateTo({
            url: "../mendian/index?men=1&id=" + m + "&optionid=" + w + "&total=" + v + "&merchid=0"
        });
    },
    formSubmit: function(r) {
        wx.showLoading({
            title: "提交中",
            mask: !0
        }), t = wx.getStorageSync("utoken");
        var d = this, o = r.detail.formId, i = (d.data.use_money, d.data.use_point, d.data.check[0], 
        void 0);
        d.setData({
            formId: o
        }), -1 != this.data.cpos && this.data.couponList[this.data.cpos].id, i = "" != r.detail.value.beizhu ? r.detail.value.beihzu : "";
        var s = d.data.createInfo, c = (d.data.couponCode, void 0);
        if (c = d.data.merch ? d.data.merch.id : 0, "1" == d.data.active) if (d.data.Data.time) {
            if (f.globalData.store) n = f.globalData.store.id; else n = "";
            "1" == d.data.Data.store ? a.sendRequest({
                url: "?r=wxapp.services.order.pay",
                method: "POST",
                data: {
                    amount: d.data.Data.amount,
                    cartIds: d.data.Data.cartIds,
                    time: d.data.Data.time,
                    goods: d.data.Data.title,
                    storeid: n,
                    utoken: t,
                    remark: i,
                    deduct: d.data.checkbox,
                    couponid: d.data.coupon_id
                },
                showToast: !1,
                success: function(a) {
                    wx.hideLoading();
                    try {
                        d.setData({
                            orderid: a.data.result[0].orderid
                        }), wx.navigateTo({
                            url: "../orderpay/payment?order_id=" + a.data.result[0].orderid + "&tabindex=" + d.data.Data.tabindex + "&formId=" + d.data.formId
                        });
                    } catch (a) {
                        setTimeout(function() {
                            wx.showToast({
                                title: "已经下架",
                                icon: "success",
                                duration: 3e3
                            });
                        }, 200);
                    }
                }
            }) : a.sendRequest({
                url: "?r=wxapp.services.order.pay",
                method: "POST",
                showToast: !1,
                data: {
                    amount: d.data.Data.amount,
                    cartIds: d.data.Data.cartIds,
                    time: d.data.Data.time,
                    goods: d.data.Data.title,
                    storeid: n,
                    utoken: t,
                    remark: i,
                    deduct: d.data.checkbox,
                    ptime: d.data.arrayValue,
                    addressid: d.data.address.id,
                    couponid: d.data.coupon_id
                },
                success: function(a) {
                    wx.hideLoading();
                    try {
                        d.setData({
                            orderid: a.data.result[0].orderid
                        }), wx.navigateTo({
                            url: "../orderpay/payment?order_id=" + a.data.result[0].orderid + "&tabindex=" + d.data.Data.tabindex + "&formId=" + d.data.formId
                        });
                    } catch (a) {
                        setTimeout(function() {
                            wx.showToast({
                                title: "已经下架",
                                icon: "success",
                                duration: 3e3
                            });
                        }, 200);
                    }
                }
            });
        } else d.data.bargainid ? a.sendRequest({
            url: "?r=wxapp.order.create.submit",
            data: {
                utoken: t,
                orderid: 0,
                id: s.id,
                goods: s.goods,
                gdid: s.id,
                diydata: "",
                dispatchtype: 0,
                fromcart: s.fromcart,
                carrierid: c,
                addressid: d.data.address.id,
                carriers: "",
                deduct2: 0,
                couponprice: d.data.couponprice,
                couponid: d.data.ID,
                bargainid: d.data.bargainid,
                mid: d.data.mid,
                remark: i,
                deduct: d.data.checkbox
            },
            showToast: !1,
            method: "POST",
            success: function(a) {
                if (wx.hideLoading(), -1 == a.data.status && (e.wxParse("article", "html", a.data.msg, d, 5), 
                d.setData({
                    noorder: !0
                })), 10 == a.data.status) return wx.showToast({
                    title: a.data.msg,
                    duration: 1e3
                }), void wx.switchTab({
                    url: "../../member/index/index"
                });
                var t = a.data.result.orderid;
                1 == a.data.status && d.get_order(t, o);
            }
        }) : d.data.mid ? a.sendRequest({
            url: "?r=wxapp.order.create.submit",
            showToast: !1,
            data: {
                utoken: t,
                orderid: 0,
                id: s.id,
                goods: s.goods,
                gdid: s.id,
                diydata: "",
                dispatchtype: 0,
                fromcart: s.fromcart,
                carrierid: c,
                addressid: d.data.address.id,
                carriers: "",
                deduct2: 0,
                couponid: 0,
                mid: d.data.mid,
                remark: i,
                deduct: d.data.checkbox
            },
            method: "POST",
            success: function(a) {
                if (wx.hideLoading(), -1 == a.data.status && (e.wxParse("article", "html", a.data.msg, d, 5), 
                d.setData({
                    noorder: !0
                })), 10 == a.data.status) return wx.showToast({
                    title: a.data.msg,
                    duration: 1e3
                }), void wx.switchTab({
                    url: "../../member/index/index"
                });
                var t = a.data.result.orderid;
                1 == a.data.status && d.get_order(t, o);
            }
        }) : a.sendRequest({
            url: "?r=wxapp.order.create.submit",
            showToast: !1,
            data: {
                utoken: t,
                orderid: 0,
                id: s.id,
                goods: s.goods,
                gdid: s.id,
                diydata: "",
                dispatchtype: 0,
                fromcart: s.fromcart,
                carrierid: c,
                addressid: d.data.address.id,
                carriers: "",
                deduct2: 0,
                couponprice: d.data.couponprice,
                couponid: d.data.ID,
                remark: i,
                deduct: d.data.checkbox
            },
            method: "POST",
            success: function(a) {
                if (wx.hideLoading(), -1 == a.data.status && (e.wxParse("article", "html", a.data.msg, d, 5), 
                d.setData({
                    noorder: !0
                })), 10 == a.data.status) return wx.showToast({
                    title: a.data.msg,
                    duration: 1e3
                }), void wx.switchTab({
                    url: "../../member/index/index"
                });
                var t = a.data.result.orderid;
                1 == a.data.status && d.get_order(t, o);
            }
        }); else if ("2" == d.data.active) {
            if ("" == r.detail.value.person) return void wx.showToast({
                icon: "loading",
                title: "联系人不能为空",
                duration: 2e3
            });
            if ("" == r.detail.value.phone) return void wx.showToast({
                icon: "loading",
                title: "联系电话不能为空",
                duration: 2e3
            });
            if ("1" == d.data.Data.store) {
                if (f.globalData.store) n = f.globalData.store.id;
                if (d.data.carrierData.carrierid) var n = d.data.carrierData.carrierid;
                a.sendRequest({
                    url: "?r=wxapp.services.order.pay",
                    method: "POST",
                    data: {
                        amount: d.data.Data.amount,
                        cartIds: d.data.Data.cartIds,
                        time: d.data.Data.time,
                        goods: d.data.Data.title,
                        storeid: n,
                        utoken: t,
                        remark: i,
                        ptime: d.data.arrayValue,
                        deduct: d.data.checkbox,
                        couponid: d.data.coupon_id
                    },
                    showToast: !1,
                    success: function(a) {
                        wx.hideLoading();
                        try {
                            d.setData({
                                orderid: a.data.result[0].orderid
                            }), wx.navigateTo({
                                url: "../orderpay/payment?order_id=" + a.data.result[0].orderid + "&tabindex=" + d.data.Data.tabindex + "&formId=" + d.data.formId
                            });
                        } catch (a) {
                            setTimeout(function() {
                                wx.showToast({
                                    title: "已经下架",
                                    icon: "success",
                                    duration: 3e3
                                });
                            }, 200);
                        }
                    }
                });
            } else if (d.data.carrierData) {
                u = {
                    carrier_realname: r.detail.value.person,
                    carrier_mobile: r.detail.value.phone,
                    realname: d.data.carrierData.realname,
                    mobile: d.data.carrierData.mobile,
                    storename: d.data.carrierData.storename,
                    address: d.data.carrierData.address
                };
                a.sendRequest({
                    url: "?r=wxapp.order.create.submit",
                    showToast: !1,
                    data: {
                        utoken: t,
                        orderid: 0,
                        id: s.id,
                        goods: s.goods,
                        gdid: s.id,
                        diydata: "",
                        dispatchtype: 0,
                        fromcart: s.fromcart,
                        carrierid: d.data.carrierData.carrierid,
                        addressid: 0,
                        carriers: u,
                        remark: i,
                        deduct2: 0,
                        couponprice: d.data.couponprice,
                        couponid: d.data.ID,
                        deduct: d.data.checkbox
                    },
                    method: "POST",
                    success: function(a) {
                        if (wx.hideLoading(), -1 == a.data.status && (e.wxParse("article", "html", a.data.msg, d, 5), 
                        d.setData({
                            noorder: !0
                        })), 10 == a.data.status) return wx.showToast({
                            title: a.data.msg,
                            duration: 1e3
                        }), void wx.switchTab({
                            url: "../../member/index/index"
                        });
                        var t = a.data.result.orderid;
                        1 == a.data.status && d.get_order(t, o);
                    }
                });
            } else if (d.data && d.data.carrier && d.data.carrier[0] && d.data.carrier[0].id) {
                var u = {
                    carrier_realname: r.detail.value.person,
                    carrier_mobile: r.detail.value.phone,
                    realname: d.data.carrier[0].realname,
                    mobile: d.data.carrier[0].mobile,
                    storename: d.data.carrier[0].storename,
                    address: d.data.carrier[0].address
                };
                a.sendRequest({
                    url: "?r=wxapp.order.create.submit",
                    showToast: !1,
                    data: {
                        utoken: t,
                        orderid: 0,
                        id: s.id,
                        goods: s.goods,
                        gdid: s.id,
                        diydata: "",
                        dispatchtype: 0,
                        fromcart: s.fromcart,
                        carrierid: c,
                        addressid: 0,
                        carriers: u,
                        remark: i,
                        deduct2: 0,
                        couponprice: d.data.couponprice,
                        couponid: d.data.ID,
                        deduct: d.data.checkbox
                    },
                    method: "POST",
                    success: function(a) {
                        if (console.log(a), wx.hideLoading(), -1 == a.data.status && (e.wxParse("article", "html", a.data.msg, d, 5), 
                        d.setData({
                            noorder: !0
                        })), 10 == a.data.status) return wx.showToast({
                            title: a.data.msg,
                            duration: 1e3
                        }), void wx.switchTab({
                            url: "../../member/index/index"
                        });
                        var t = a.data.result.orderid;
                        1 == a.data.status && d.get_order(t, o);
                    }
                });
            } else wx.showToast({
                icon: "loading",
                title: "该店铺暂时没有门店",
                duration: 2e3
            });
        }
    },
    get_order: function(e, r) {
        var d = this;
        t = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=wxapp.order.pay",
            data: {
                utoken: t,
                id: e,
                formId: r
            },
            method: "GET",
            success: function(t) {
                if (1 != t.data.status) return t.data.status, wx.showToast({
                    title: t.data.msg,
                    icon: "success",
                    duration: 2e3
                }), void wx.switchTab({
                    url: "../../member/index/index"
                });
                a.globalData.wxdata = t.data.result.data, a.globalData.order = t.data.result.order, 
                d.setData({
                    paydata: t.data.result.data,
                    order: t.data.result.order
                });
                var o = a.globalData.wxdata;
                o.timeStamp;
                o.timeStamp && t.data.result.order && "1" != t.data.result.order.creditpay ? d.pay() : wx.navigateTo({
                    url: "../orderpay/payment?order_id=" + e + "&formId=" + r
                });
            }
        });
    },
    pay: function() {
        var e = this, r = a.globalData.wxdata, d = r.timeStamp + "", o = r.nonceStr + "", i = r.package, s = r.sign;
        wx.requestPayment({
            nonceStr: o,
            package: i,
            signType: "MD5",
            timeStamp: d,
            paySign: s,
            success: function(e) {
                console.log(e), D && a.sendRequest({
                    url: "?r=wxapp.services.order.updateStatus",
                    data: {
                        utoken: t,
                        orderid: orderId
                    },
                    method: "GET",
                    success: function(a) {}
                }), wx.navigateTo({
                    url: "../success/index"
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "支付失败",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1e3
                }), e.data.myList ? setTimeout(function() {
                    wx.redirectTo({
                        delta: 1
                    });
                }, 1e3) : setTimeout(function() {
                    wx.reLaunch({
                        url: "../../member/index/index"
                    });
                }, 1e3);
            }
        });
    },
    isOK: function() {
        this.setData({
            noorder: !1
        });
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    getCarts: function(t) {
        var e = this, o = wx.getStorageSync("utoken");
        e.data.bargainid ? a.sendRequest({
            url: "?r=wxapp.order.create",
            showToast: !1,
            data: {
                utoken: o,
                mid: e.data.mid,
                bargainid: e.data.bargainid
            },
            method: "GET",
            success: function(t) {
                if (e.setData({
                    loading: !1
                }), 1 != t.data.status) return wx.showModal({
                    title: "提示",
                    content: t.data.msg,
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                }), !1;
                var o = a.globalData.userInfo;
                a.globalData.userInfo = o;
                var i = t.data.result.addressList, s = t.data.result.cartList, c = t.data.result.userInfo, n = t.data.result.totalPrice;
                if (c.credit3) u = c.credit3; else var u = 0;
                e.setData({
                    credit3: u,
                    discountprice: t.data.result.totalPrice.discountprice,
                    createInfo: t.data.result.createInfo
                });
                var l = n.dispatch_price, m = l.toString();
                if (m.indexOf(".") > 0) {
                    var h = m.indexOf(".") + 3;
                    l = m.substr(0, h);
                }
                e.setData({
                    dispatch_price: l
                }), e.data.createInfo = t.data.result.createInfo, r = n.total_fee, e.getCoupons(), 
                d = t.data.result.points, e.setData({
                    address: i,
                    cartList: s,
                    userInfo: c,
                    totalPrice: n
                }), t.data.result.merch && e.setData({
                    merch: t.data.result.merch
                }), t.data.result.carrier_list && e.setData({
                    carrier: t.data.result.carrier_list
                }), s[0] && s[0].merchid && (g = s[0].merchid), e.data.totalPrice.realprice && (p = e.data.totalPrice.realprice), 
                u ? (u >= p ? e.setData({
                    couponprice: p
                }) : p -= u, e.setData({
                    couponprice: p
                })) : e.setData({
                    couponprice: p
                }), _ = e.data.couponprice;
                var D = t.data.result.couponList, f = e.data.coupon;
                for (var x in D) f.push(D[x].name);
                e.setData({
                    coupon: f,
                    couponList: D,
                    result: t.data.result,
                    loading: !1
                });
            }
        }) : e.data.id ? ("" != m || "" != w && "" != v || (m = 0, w = 0, v = 0), a.sendRequest({
            url: "?r=wxapp.order.create",
            showToast: !1,
            data: {
                utoken: o,
                id: m,
                optionid: w,
                total: v
            },
            method: "GET",
            success: function(t) {
                if (e.setData({
                    loading: !1
                }), 1 != t.data.status) return wx.showModal({
                    title: "提示",
                    content: t.data.msg,
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                }), !1;
                var o = a.globalData.userInfo;
                a.globalData.userInfo = o;
                var i = t.data.result.addressList, s = t.data.result.cartList, c = t.data.result.userInfo, n = t.data.result.totalPrice;
                if (c.credit3) u = c.credit3; else var u = 0;
                e.setData({
                    credit3: u,
                    discountprice: t.data.result.totalPrice.discountprice,
                    createInfo: t.data.result.createInfo
                });
                var l = n.dispatch_price, m = l.toString();
                if (m.indexOf(".") > 0) {
                    var h = m.indexOf(".") + 3;
                    m.substr(0, h);
                }
                e.setData({
                    dispatch_price: l
                }), e.data.createInfo = t.data.result.createInfo, r = n.total_fee, e.getCoupons(), 
                d = t.data.result.points, e.setData({
                    address: i,
                    cartList: s,
                    userInfo: c,
                    totalPrice: n
                }), t.data.result.merch && e.setData({
                    merch: t.data.result.merch
                }), t.data.result.carrier_list && e.setData({
                    carrier: t.data.result.carrier_list
                }), s[0] && s[0].merchid && (g = s[0].merchid), p = e.data.totalPrice.realprice, 
                u ? u >= p ? e.setData({
                    couponprice: p
                }) : (p -= u, e.setData({
                    couponprice: p
                })) : e.setData({
                    couponprice: p
                }), _ = e.data.couponprice;
                var D = t.data.result.couponList, f = e.data.coupon;
                for (var x in D) f.push(D[x].name);
                e.setData({
                    coupon: f,
                    couponList: D,
                    result: t.data.result,
                    loading: !1
                });
            }
        })) : ("" != m || "" != w && "" != v || (m = 0, w = 0, v = 0), a.sendRequest({
            url: "?r=wxapp.order.create",
            showToast: !1,
            data: {
                utoken: o,
                id: m,
                optionid: w,
                total: v
            },
            method: "GET",
            success: function(t) {
                if (e.setData({
                    loading: !1
                }), "-1" == t.data.status) ; else {
                    var o = a.globalData.userInfo;
                    a.globalData.userInfo = o;
                    var i = t.data.result.addressList, s = t.data.result.cartList, c = t.data.result.userInfo, n = t.data.result.totalPrice;
                    t.data.result.merch && e.setData({
                        merch: t.data.result.merch
                    }), t.data.result.carrier_list && e.setData({
                        carrier: t.data.result.carrier_list
                    }), s[0] && s[0].merchid && (g = s[0].merchid);
                    for (var u in s) g != s[u].merchid && (h = 2);
                    if (c.credit3) l = c.credit3; else var l = 0;
                    e.setData({
                        credit3: l,
                        discountprice: t.data.result.totalPrice.discountprice,
                        createInfo: t.data.result.createInfo
                    });
                    var m = n.dispatch_price, D = m.toString();
                    if (D.indexOf(".") > 0) {
                        u = D.indexOf(".") + 3;
                        m = D.substr(0, u);
                    }
                    e.setData({
                        dispatch_price: m
                    }), e.data.createInfo = t.data.result.createInfo, r = n.total_fee, e.getCoupons(), 
                    d = t.data.result.points, e.setData({
                        address: i,
                        cartList: s,
                        userInfo: c,
                        totalPrice: n
                    }), t.data.result.carrier_list && e.setData({
                        carrier: t.data.result.carrier_list
                    }), t.data.result.cartList[0] && "2" == t.data.result.cartList[0].isverify && "" != e.data.carrier && e.setData({
                        active: 1
                    }), p = e.data.totalPrice.realprice, l ? l >= p ? e.setData({
                        couponprice: p
                    }) : (p -= l, e.setData({
                        couponprice: p
                    })) : e.setData({
                        couponprice: p
                    });
                    var f = t.data.result.couponList, x = e.data.coupon;
                    for (var w in f) x.push(f[w].name);
                    e.setData({
                        coupon: x,
                        couponList: f,
                        result: t.data.result
                    }), _ = e.data.couponprice;
                }
                e.setData({
                    loading: !1
                });
            }
        }));
    },
    to_add_addr: function(a) {
        wx.showModal({
            title: "提示",
            showCancel: !1,
            content: a,
            success: function(a) {
                a.confirm && wx.navigateTo({
                    url: "../../address/select/index?addr=addr"
                });
            }
        });
    },
    to_get_addr: function() {
        var e = this, r = wx.getStorageSync("addrdata");
        a.sendRequest({
            url: "?r=wxapp.member.address.getaddress",
            method: "GET",
            data: {
                id: r.id,
                utoken: t
            },
            success: function(r) {
                var d = r.data.result, o = e.data.createInfo;
                o.addressid = d.id, e.data.createInfo.isverify && a.sendRequest({
                    url: "?r=wxapp.order.create.getChangeMerch",
                    method: "GET",
                    data: {
                        addressid: d.id,
                        utoken: t
                    },
                    success: function(a) {
                        a.data.result.merch && e.setData({
                            merch: a.data.result.merch
                        });
                    }
                }), e.setData({
                    address: d,
                    createInfo: o
                }), wx.getStorageSync("addrdata") && wx.removeStorageSync("addrdata"), d.province && d.city && d.area || (wx.getStorageSync("addrdata") ? e.to_get_addr() : e.to_add_addr("省市区请填写完整"));
            }
        });
    },
    check1: function() {
        this.setData({
            check: [ "true", "" ]
        });
    },
    check2: function() {
        this.setData({
            check: [ "", "true" ]
        });
    }
});