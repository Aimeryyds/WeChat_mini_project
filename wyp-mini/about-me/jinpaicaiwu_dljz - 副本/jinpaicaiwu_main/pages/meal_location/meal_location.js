var t = function() {
    function t(t, e) {
        var a = [], i = !0, s = !1, n = void 0;
        try {
            for (var r, o = t[Symbol.iterator](); !(i = (r = o.next()).done) && (a.push(r.value), 
            !e || a.length !== e); i = !0) ;
        } catch (t) {
            s = !0, n = t;
        } finally {
            try {
                !i && o.return && o.return();
            } finally {
                if (s) throw n;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = getApp(), a = require("./qqmap-wx-jssdk.js"), i = require("../../static/config.js"), s = void 0;

Page({
    data: {
        shops: [],
        location: "",
        gettime: "now",
        gettype: "0",
        gettypes: [ {
            id: "0",
            checked: !1,
            disabled: !0,
            title: "现在，支付成功后在店内取单"
        }, {
            id: "1",
            checked: !1,
            disabled: !0,
            title: "稍晚，预约稍晚时间到店取单"
        } ],
        stime: "00:00",
        etime: "23:00",
        showtime: !1,
        showOpen: !0,
        selected: !1,
        selected1: !0,
        flag: !0
    },
    _getDistance: function(e) {
        var a = this, i = e.latitude + "_" + e.longitude + "_distance", n = [], r = a.data.shops || [];
        if (0 == r.length) return !1;
        var o = wx.getStorageSync(i) || [];
        if (o.length > 0) {
            var c = o.findIndex(function(t) {
                return 1 == t.selected;
            });
            return a.setData({
                shops: o
            }), a._initMealTime(c), !1;
        }
        r.forEach(function(e) {
            e.selected = !1;
            var a = e.location || "";
            if (!a.length) return !0;
            var i = a.split(","), s = t(i, 2), r = s[0], o = s[1];
            n.push({
                latitude: r,
                longitude: o
            });
        }), s.calculateDistance({
            from: e,
            to: n,
            success: function(t) {
                if (0 != t.status) return !1;
                var e = 0, s = t.result.elements;
                r.forEach(function(t, i) {
                    if (!(t.location || "").length) return !0;
                    t._distance = s[e].distance, t.distance = a._parseDistance(t._distance), e++;
                }), r.sort(function(t, e) {
                    return parseFloat(t._distance || "0") > parseFloat(e._distance || "0");
                }), r[0].selected = !0, a._initMealTime(0), a.setData({
                    shops: r
                }), wx.setStorageSync(i, r);
            }
        });
    },
    _parseDistance: function(t) {
        return t < 1e3 ? t.toFixed(2) + "米" : (t / 1e3).toFixed(2) + "千米";
    },
    _parseTime: function(t) {
        return t < 10 ? "0" + t : t;
    },
    _compareTime: function(t, e) {
        return t = parseInt(t.replace(":", "")), e = parseInt(e.replace(":", "")), t > e ? 1 : t == e ? 0 : -1;
    },
    _getShops: function(t) {
        var a = this;
        e.apiRequest("meal", "shops", {
            data: {},
            method: "POST",
            success: function(e) {
                var i = e.data.shops || [];
                i.length > 0 && a.setData({
                    shops: i
                }), t && t.apply(a);
            }
        });
    },
    _initMealTime: function(t) {
        var e = this.data.shops[t], a = e.getime_type || "";
        if (0 == a.length) return !1;
        var i = a.split(","), s = this.data.gettypes, n = i.length > 1 ? "0" : a;
        s.forEach(function(t) {
            t.checked = n == t.id, t.disabled = !(i.findIndex(function(e) {
                return e == t.id;
            }) > -1);
        }), this.setData({
            gettypes: s
        }), "1" == n ? this.resetGetTime({
            detail: {
                value: "1"
            },
            currentTarget: {
                dataset: {
                    sid: e.id
                }
            }
        }) : this.setData({
            showtime: !1,
            gettype: "0",
            gettime: "now"
        });
    },
    showMask: function() {
        this.setData({
            flag: !1
        });
    },
    closeMask: function() {
        this.setData({
            flag: !0
        });
    },
    _checkMealTime: function(e) {
        var a = this.data.gettype, i = (e || "").split("-"), s = t(i, 2), n = s[0], r = s[1];
        switch (a) {
          case "0":
            if (this.setData({
                gettime: "now"
            }), !n || !r) return !0;
            var o = new Date(), c = this._parseTime(o.getHours());
            return c += ":" + this._parseTime(o.getMinutes()), 1 != this._compareTime(n, c) && -1 != this._compareTime(r, c) || (wx.showModal({
                title: "门店已打烊",
                content: "",
                showCancel: !1
            }), !1);

          case "1":
            return !!/^\d{2}:\d{2}$/.test(this.data.gettime) || (wx.showModal({
                title: "请选择取单时间",
                content: "",
                showCancel: !1
            }), !1);
        }
    },
    checkOpen: function() {
        return 0 != this.data.shops.find(function(t) {
            return 1 == t.selected;
        }).open || (this.showMask(), !1);
    },
    resetGetTime: function(e) {
        var a = e.detail.value, i = e.currentTarget.dataset.sid, s = {
            gettype: a,
            showtime: "0" != a
        };
        if ("1" == a) {
            var n = new Date(), r = (this.data.shops.find(function(t) {
                return i == t.id;
            }).opening_hours || "").split("-"), o = t(r, 2), c = o[0], l = o[1], u = this._parseTime(n.getHours());
            u += ":" + this._parseTime(n.getMinutes()), c = c || "00:00", l = l || "23:00", 
            this._compareTime(u, c) > 0 && (c = u), this._compareTime(u, l) > 0 && (c = l), 
            s = Object.assign(s, {
                gettime: "",
                stime: c,
                etime: l
            });
        }
        this.setData(s);
    },
    resetGetTimeVal: function(t) {
        this.setData({
            gettime: t.detail.value
        });
    },
    tapSearchLoc: function() {
        var t = this;
        t.chooseLoc = !0, wx.chooseLocation({
            success: function(e) {
                var a = e.latitude, i = e.longitude;
                t.setData({
                    location: e.name
                }), t._getDistance({
                    latitude: a,
                    longitude: i
                });
            },
            fail: function() {
                t.setData({
                    location: "定位失败"
                });
            }
        });
    },
    tapSelectShop: function(t) {
        var e = this.data.shops, a = t.currentTarget.dataset.sid;
        e.forEach(function(t) {
            return t.selected = t.id == a;
        }), this._initMealTime(t.currentTarget.dataset.index), this.setData({
            shops: e
        });
    },
    tapMeal: function(t) {
        var e = this.data.shops, a = t.currentTarget.dataset.sid, i = e.find(function(t) {
            return t.id == a;
        }), s = this.data.selected;
        if (!this.checkOpen()) return !1;
        if (!s) {
            var n = this._checkMealTime(i.opening_hours);
            if (0 == n) return n;
        }
        var r = wx.getStorageSync("openid") + "_mealshop";
        wx.setStorageSync(r, Object.assign(i, {
            gettime: this.data.gettime,
            gettype: this.data.gettype
        }));
        var o = 1;
        if (s && (o = 2), "0" == i.delivery_type ? o = 1 : "1" == i.delivery_type && (o = 2), 
        2 == o) {
            var c = this.data.mealDelivery;
            if (c.distance) {
                var l = parseFloat(i._distance || "-1");
                if (l < 0) return wx.showModal({
                    title: "定位失败，请确认是否授权地理位置",
                    showCancel: !1
                }), !1;
                if (l > 1e3 * c.distance) return wx.showModal({
                    title: "超出配送范围,请重新选择",
                    content: "",
                    showCancel: !1
                }), !1;
            }
        }
        wx.redirectTo({
            url: "../meal_list/meal_list?shop_id=" + i.id + "&takeaway=" + o
        });
    },
    onLoad: function(t) {
        var e = i.wxmeal_inner_gstyle.mapkey || "ZNFBZ-KQL6X-HSU4E-7YW3O-WGRIH-EDFT4";
        s = new a({
            key: e
        });
    },
    onShow: function() {
        var t = this;
        if (this.chooseLoc) return this.chooseLoc = !1, !1;
        this._getShops(function() {
            var e = t;
            t.getMealDelivery(), wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    var a = t.latitude, i = t.longitude, n = a + "_" + i, r = wx.getStorageSync(n) || "";
                    if (r.length > 0) return e.setData({
                        location: r
                    }), e._getDistance({
                        latitude: a,
                        longitude: i
                    }), !1;
                    s.reverseGeocoder({
                        location: {
                            latitude: a,
                            longitude: i
                        },
                        success: function(t) {
                            if (0 != t.status) return !1;
                            var s = t.result.address;
                            e.setData({
                                location: s
                            }), wx.setStorageSync(n, s), e._getDistance({
                                latitude: a,
                                longitude: i
                            });
                        },
                        fail: function(t) {
                            console.error(t.message), e.setData({
                                location: "定位失败"
                            });
                        }
                    });
                },
                fail: function(t) {
                    var a = t.errorMessage || "";
                    a.length && wx.showToast({
                        title: a
                    }), e.setData({
                        location: "定位失败"
                    });
                }
            });
        });
    },
    open: function() {
        this.setData({
            showOpen: !0,
            selected1: !0,
            selected: !1
        });
    },
    close: function() {
        this.setData({
            showOpen: !1,
            selected1: !1,
            selected: !0
        });
    },
    getMealDelivery: function() {
        var t = this;
        e.apiRequest("meal", "wxmeal_delivery", {
            data: {},
            method: "POST",
            success: function(e) {
                var a = e.data.data || [];
                t.setData({
                    mealDelivery: a
                }), wx.setStorageSync("mealDelivery", a);
            }
        });
    }
});