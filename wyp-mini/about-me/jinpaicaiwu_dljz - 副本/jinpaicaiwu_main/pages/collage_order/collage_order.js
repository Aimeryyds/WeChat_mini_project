var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, t = getApp();

Page({
    data: {
        carts: [],
        total_price: 0,
        deliverys: [],
        delivery_mode: [],
        delivery_index: "",
        delivery_date: [],
        delivery_time: [],
        delivery_money: 0,
        message: "",
        address: {
            name: "",
            phone: "",
            detail: ""
        },
        dis_key: !1,
        ifee: 0,
        group_id: "",
        weight: 0,
        price: 0
    },
    deal_des_cash: function(e) {
        var t = this.data.address, a = this.data.dis_plus_cash || [], i = this.data.dis_plus_area || [];
        if (!a || !i) return !1;
        var d = a[e], r = "", s = t.dist_id, o = t.city_id, n = t.prov_id;
        for (var l in i) i[l].area_id == n && (r = i[l].distribution_ext_id), i[l].area_id == o && (r = i[l].distribution_ext_id), 
        i[l].area_id == s && (r = i[l].distribution_ext_id);
        return !(!r || !d[r]) && d[r];
    },
    dealTotalPrice: function() {
        var t = this.data.total_price, a = this.data.deliverys[this.data.delivery_index], i = parseFloat(this.data.weight), d = e({}, a);
        if (d.id) {
            var r = this.deal_des_cash(d.id);
            r ? (d.f_fee = r.f_fee, d.f_weight = r.f_weight, d.r_fee = r.r_fee, d.r_weight = r.r_weight) : d = a;
        }
        a = d;
        var s = this.data.ifee || 0, o = s, n = t - s, l = parseFloat(this.data.payInfo.unity_set);
        d.key > 1 && (!d.free_fee || n < d.free_fee) ? (t += (s = l && "1" == l ? parseFloat(this.data.payInfo.unity_fee) : 0 == i ? 0 : i < d.f_weight ? parseFloat(d.f_fee) : 0 == parseFloat(d.r_weight) ? parseFloat(d.f_fee) : parseFloat(d.f_fee) + (i - parseFloat(d.f_weight)) / parseFloat(d.r_weight) * parseFloat(d.r_fee)) - o, 
        n += s) : s = 0, t = this.parsePrice(t), this.setData({
            total_price: t,
            ifee: s
        });
    },
    open_style: function() {
        var e = this.data.deliverys, t = this.data.delivery_mode, a = this;
        wx.showActionSheet({
            itemList: t,
            success: function(t) {
                var i = t.tapIndex || t.index;
                if (!t.cancel) {
                    var d = e[i].key;
                    a.setData({
                        delivery_index: i,
                        dis_key: d
                    }), a.dealTotalPrice();
                }
            }
        });
    },
    bindModeChange: function(e) {
        var t = this.data.deliverys, a = (this.data.delivery_mode, this), i = t[e.detail.value].key;
        a.setData({
            delivery_index: e.detail.value,
            dis_key: i
        }), a.dealTotalPrice();
    },
    bindDateChange: function(e) {
        this.setData({
            delivery_date: e.detail.value
        });
    },
    bindTimeChange: function(e) {
        this.setData({
            delivery_time: e.detail.value
        });
    },
    parsePrice: function(e) {
        var t = parseFloat(e);
        return (t += 1e-7) ? parseFloat(t.toFixed(2)) : 0;
    },
    getnowdate: function(e) {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate() + e);
    },
    onLoad: function(e) {
        var a = t.globalData.ccarts, i = wx.getStorageSync("openid"), d = e.ctype, r = e.group_id || 0, s = 0;
        /^[1-9]\d*$/.test(e.product_id || 0) && (s = e.product_id), i && t.getSignIn(i), 
        t.globalData.userInfo || wx.navigateTo({
            url: "../login/login"
        });
        var o = this.getnowdate(0), n = this.getnowdate(10);
        this.setData({
            carts: a,
            ctype: d,
            start_date: o,
            end_date: n,
            group_id: r,
            product_id: s
        }), this.showOrderInterface(a);
    },
    showOrderInterface: function(e) {
        var a = this, i = a.data.product_id, d = a.data.ctype;
        wx.canIUse("alert") && (e || []).length && (e = JSON.stringify(e)), t.apiRequest("collage_order", "showOrderInterface", {
            data: {
                carts: e,
                product_id: i,
                ctype: d
            },
            success: function(e) {
                if ("OK" == e.data.result) {
                    var t = e.data.total_price, i = e.data.disresult, d = e.data.payInfo, r = i, s = [], o = e.data.weight, n = e.data.dis_plus.area, l = e.data.dis_plus.disresultxz_area;
                    if (i) for (var _ = 0; _ < i.length; _++) s.push(i[_].title);
                    a.setData({
                        total_price: t,
                        delivery_mode: s,
                        deliverys: r,
                        weight: o,
                        payInfo: d,
                        dis_plus_cash: n,
                        dis_plus_area: l,
                        price: t
                    });
                }
            }
        });
    },
    addAddr: function() {
        (!this.data.dis_key || this.data.dis_key > 1) && wx.navigateTo({
            url: "../address-list/address-list"
        });
    },
    binkMessageConfirm: function(e) {
        this.setData({
            message: e.detail.value
        });
    },
    submitOrder: function(e) {
        wx.showLoading({
            title: "请求中",
            mask: !0
        });
        var a = wx.getStorageSync("openid"), i = this.data.delivery_addr, d = this.data.group_id, r = e.detail.formId, s = this.data.dis_key;
        if (!s) return wx.showToast({
            title: "请选择配送方式"
        }), !1;
        if (s > 1 && !i) return wx.showToast({
            title: "请先添加收货人信息"
        }), !1;
        this.data.delivery_mode;
        var o = this.data.deliverys, n = this.data.delivery_index, l = o[n].id, _ = {
            delivery_date: this.data.delivery_date,
            delivery_time: this.data.delivery_time,
            address: this.data.address,
            message: this.data.message,
            price: this.data.price,
            total_price: this.data.total_price,
            delivery_id: l,
            ifee: this.data.ifee,
            ctype: this.data.ctype,
            amount: 1,
            dis_key: s,
            openid: a,
            group_id: d,
            form_id: r
        }, c = this.data.carts;
        t.apiRequest("collage_order", "createOrder", {
            data: {
                cart: JSON.stringify(c),
                order_data: JSON.stringify(_)
            },
            success: function(e) {
                if (wx.hideLoading(), "OK" == e.data.result) {
                    var a = e.data.oid, i = (o[n].key, e.data);
                    i.paySign || i.trade_no ? wx.requestPayment({
                        timeStamp: i.timeStamp,
                        nonceStr: i.nonceStr,
                        package: i.package,
                        signType: i.signType,
                        paySign: i.paySign,
                        tradeNO: i.trade_no || "",
                        success: function(e) {
                            var a = "../collage_detail/collage_detail?group_id=" + i.group_id + "&oid=" + i.oid;
                            2 == i.ctype && (a = "../collage_order_detail/collage_order_detail?oid=" + i.oid), 
                            t.navigateTo({
                                url: a
                            });
                        },
                        fail: function(e) {
                            var t = e.errMsg;
                            "requestPayment:fail cancel" == t && (t = "用户取消"), wx.showModal({
                                title: t,
                                content: "",
                                showCancel: !1
                            });
                        }
                    }) : wx.showModal({
                        title: "prepay_id error",
                        content: "",
                        showCancel: !1,
                        complete: function() {
                            wx.navigateTo({
                                url: "../collage_order_detail/collage_order_detail?oid=" + a
                            });
                        }
                    });
                } else "2" == e.data.errmsg ? (wx.showToast({
                    title: "请先登录"
                }), wx.navigateTo({
                    url: "../login/login"
                })) : wx.showToast({
                    title: e.data.errmsg
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.getStorage({
            key: "address",
            success: function(t) {
                t.data ? (e.setData({
                    delivery_addr: !0,
                    address: t.data
                }), "" != e.data.delivery_index && e.dealTotalPrice()) : e.setData({
                    delivery_addr: !1
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});