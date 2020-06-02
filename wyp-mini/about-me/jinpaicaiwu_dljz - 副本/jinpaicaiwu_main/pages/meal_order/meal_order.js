var e = getApp();

Page({
    data: {
        detail: [ {
            t: "支付方式：",
            r: "微信支付"
        }, {
            t: "下单时间：",
            r: ""
        } ],
        shop_id: 0,
        getime_type: "立即取单",
        message: "",
        Wheight: 0,
        takeaway: 1,
        delivery_addr: !0,
        takeaway_address: {
            reciever_name: "",
            phone: "",
            detailed_addr: ""
        },
        isAliApp: !1
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    Wheight: e.windowHeight
                });
            }
        }), wx.setNavigationBarTitle({
            title: "提交订单"
        });
        var i = wx.getStorageSync("openid");
        i && e.getSignIn(i), e.globalData.userInfo || wx.navigateTo({
            url: "../login/login"
        });
        var r = wx.getStorageSync("openid") + "_mealshop", s = wx.getStorageSync(r), d = this.data.getime_type;
        "1" == s.gettype && (d = s.gettime);
        var n = this.parsePrice(a.cartsprice), o = a.shop_id, c = a.takeaway;
        if ("2" == c) {
            var l = wx.getStorageSync("mealDelivery") || "";
            "dada" == l.delivery_type && (l.price = 0), l.price > 0 && (n += this.parsePrice(l.price));
            var p = "";
            if (l.duration > 0) {
                var g = new Date().getTime() + 6e4 * parseInt(l.duration);
                p = (g = new Date(g)).getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate() + " " + g.getHours() + ":" + g.getMinutes();
            }
            this.setData({
                mealDelivery: l,
                delivery_time: p
            });
        }
        var _ = this.data.detail;
        t.setData({
            getime_type: d,
            isAliApp: wx.canIUse("alert")
        });
        var h = new Date(), y = h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate();
        _[1].r = y, this.data.isAliApp && (_[0].r = "支付宝支付");
        var u = e.globalData.mealCarts;
        for (var v in u) if (u[v].ingred_id && u[v].ingred_id.length) {
            var w = u[v].ingred_id;
            for (var m in w) {
                var f = u[v].price;
                if (w[m].sel) {
                    var S = u[v].discount_price > 0 ? u[v].discount_price : u[v].price;
                    f = this.parsePrice(S) + this.parsePrice(w[m].price);
                }
                u[v].total_price = this.parsePrice(f);
            }
        } else u[v].total_price = u[v].discount_price > 0 ? u[v].discount_price : u[v].price;
        n = this.parsePrice(n), this.setData({
            cartsprice: n,
            carts: u,
            detail: _,
            shop_id: o,
            takeaway: c
        });
    },
    parsePrice: function(e) {
        var a = parseFloat(e);
        return (a += 1e-7) ? parseFloat(a.toFixed(2)) : 0;
    },
    submitOrder: function(a) {
        var t = this.data.shop_id, i = wx.getStorageSync("openid"), r = this.data.takeaway, s = this.data.takeaway_address, d = {
            getime_type: this.data.getime_type,
            message: this.data.message,
            cartsprice: this.data.cartsprice,
            shop_id: t,
            openid: i,
            carts: this.data.carts,
            takeaway: r
        };
        if ("2" == r) {
            var n = this.data.mealDelivery;
            this.data.delivery_addr;
            if (n.price > 0 && (d.delivery_fee = n.price), !s.detailed_addr) return wx.showModal({
                title: "请选择地址",
                content: "",
                showCancel: !1
            }), !1;
            d.takeaway_address = s;
        }
        e.apiRequest("meal", "submitOrder", {
            data: {
                orders: this.data.isAliApp ? JSON.stringify(d) : d
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    e.globalData.mealCarts = [];
                    var t = a.data, i = t.oid;
                    t.paySign || t.trade_no ? wx.requestPayment({
                        timeStamp: t.timeStamp,
                        nonceStr: t.nonceStr,
                        package: t.package,
                        signType: t.signType,
                        paySign: t.paySign,
                        tradeNO: t.trade_no || "",
                        success: function(a) {
                            var t = "../meal_order_detail/meal_order_detail?oid=" + i;
                            "2" == d.takeaway && (t = "../takeaway_order_detail/takeaway_order_detail?oid=" + i), 
                            e.navigateTo({
                                url: t
                            });
                        },
                        fail: function(e) {
                            var a = e.errMsg;
                            "requestPayment:fail cancel" == a && (a = "已取消订单"), wx.showModal({
                                title: a,
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
                                url: "../meal_order_detail/meal_order_detail?oid=" + i
                            });
                        }
                    });
                } else {
                    var r = a.data.errmsg || "请求失败";
                    "2" == r && (r = "请重新选择地址！"), wx.showModal({
                        title: r,
                        content: "",
                        showCancel: !1
                    });
                }
            }
        });
    },
    binkMessageConfirm: function(e) {
        this.setData({
            message: e.detail.value
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this;
        wx.getStorage({
            key: "takeaway_address",
            success: function(t) {
                if (t.data) {
                    a.setData({
                        delivery_addr: !0,
                        takeaway_address: t.data
                    });
                    var i = a.data.takeaway, r = a.data.mealDelivery;
                    if ("2" == i && "dada" == r.delivery_type) {
                        var s = {
                            shop_no: a.data.shop_id,
                            cargo_price: a.data.cartsprice,
                            reciever_name: t.data.reciever_name,
                            detailed_addr: t.data.detailed_addr,
                            phone: t.data.phone
                        };
                        e.apiRequest("takeaway", "query_deliverfee", {
                            data: {
                                param: s
                            },
                            success: function(e) {
                                if ("OK" == e.data.result) {
                                    var t = a.parsePrice(a.data.cartsprice);
                                    t = a.parsePrice(t - a.parsePrice(r.price) + a.parsePrice(e.data.fee)), r.price = e.data.fee, 
                                    a.setData({
                                        mealDelivery: r,
                                        cartsprice: t
                                    });
                                }
                            }
                        });
                    }
                } else a.setData({
                    delivery_addr: !1
                });
            }
        });
    },
    addAddr: function() {
        e.navigateTo({
            url: "../meal_address/meal_address"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});