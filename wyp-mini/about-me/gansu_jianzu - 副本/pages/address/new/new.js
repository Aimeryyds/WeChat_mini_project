function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
}, a = t(require("../../../dist/index")), r = t(require("../../../utils/util")), s = t(require("../../../network/api")), i = {
    data: {
        isShow: !1,
        index: 0,
        item: {},
        isbtn: !0
    }
};

r.default.registComp(i, a.default.Toast, {
    onLoad: function(t) {
        if (t.search) {
            var a = r.default.parse(t.search), s = r.default.parse(t.item);
            this.setData({
                item: e({}, s, {
                    lng: a.location.lng,
                    lat: a.location.lat,
                    title: a.title
                })
            });
        }
        if (t.isAddress && this.setData({
            isAddress: !0
        }), t.order && this.setData({
            order: r.default.parse(t.order),
            formData: r.default.parse(t.formData)
        }), t.scoreorder && (t.ordertype && this.setData({
            ordertype: t.ordertype
        }), this.setData({
            scoreorder: r.default.parse(t.scoreorder),
            formData: r.default.parse(t.formData)
        })), "edit" == t.type) {
            var i = r.default.parse(t.item);
            console.log(i, "POPOPOPOPOPOPOPOPOPOPOPOPOPPPPOOOO"), this.setData({
                item: i
            });
        }
        this.setData({
            type: t.type
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = getApp().getFlash("address"), e = getApp().getFlash("searchAddress");
        console.log(e), t && (this.data.item.city !== t.city.fullName && this.setData({
            "item.title": "",
            "item.lng": "",
            "item.lat": ""
        }), this.setData({
            "item.provinceCode": t.province.code,
            "item.province": t.province.fullName,
            "item.cityCode": t.city.code,
            "item.city": t.city.fullName,
            "item.districtCode": t.district.code || "",
            "item.district": t.district.fullName || ""
        })), e && (console.log(e), this.setData({
            "item.lng": e.location.lng,
            "item.lat": e.location.lat,
            "item.title": e.title
        }));
    },
    formSubmit: function() {
        var t = void 0, a = this.data.item, r = a.province, s = a.city, i = a.district, o = a.title, d = a.address, n = a.name, l = a.phone, c = a.cityCode, f = a.lng, h = a.lat, m = a.districtCode, u = a.provinceCode, g = a.adcode;
        if (s && r ? !this.data.order && !this.data.isAddress || o ? d && 0 != d.trim().length ? n && 0 != n.trim().length ? l && 0 != l.trim().length ? /^1[3|4|5|7|8][0-9]{9}$/.test(l.trim()) || (t = "手机号码格式错误") : t = "请输入手机号码" : t = "请输入姓名" : t = "请输入详细地址" : t = "请选择地址" : t = "请选择收货地区", 
        t) this.showToast(t); else {
            var p = {
                name: n,
                phone: l,
                address: d,
                province: r,
                city: s,
                district: i,
                adcode: c || g,
                provinceCode: u,
                districtCode: m
            };
            o && (p = e({}, p, {
                title: o,
                lng: f,
                lat: h
            }));
            var y = {
                city: s,
                lng: f,
                lat: h
            };
            if ("new" == this.data.type) this.data.order ? (y.goodsId = this.data.order.goodsList[0].id, 
            this.checkAddress(y, p, "new")) : this.createAddress(p, !1); else {
                var D = this.data.item;
                p.id = D.id, this.data.order ? (y.goodsId = this.data.order.goodsList[0].id, this.checkAddress(y, p, "edit")) : (console.log(p, "+++++++++++++++++++++++++++"), 
                this.editAddress(p, !1));
            }
        }
    },
    checkAddress: function(t, e, a) {
        var r = this;
        s.default.isOutRange(t).then(function(t) {
            if (console.log(t, "+++++++++++"), 1 == t.data.isOutRange) {
                var s = r;
                wx.showModal({
                    content: "您的地址已超出商家配送范围",
                    cancelText: "调整地址",
                    confirmText: "仍然保存",
                    success: function(t) {
                        t.confirm && ("edit" == a ? s.editAddress(e, !0) : s.createAddress(e, !0));
                    }
                });
            } else delete e.storeId, "edit" == a ? r.editAddress(e, !1) : r.createAddress(e, !1);
        }).catch(function(t) {
            return console.log(t);
        });
    },
    makesearch: function() {
        if (console.log("+++++"), this.data.item.city) {
            var t = this.data.item.city, e = this.data.item, a = this.data.item.province;
            console.log("+++++"), this.data.order ? this.handleJump("/pages/address/search/search?city=" + t + "&province=" + a + "&order=" + r.default.stringify(this.data.order) + "&item=" + r.default.stringify(e) + "&type=" + this.data.type + "&formData=" + r.default.stringify(this.data.formData)) : this.data.scoreorder ? this.data.ordertype ? this.handleJump("/pages/address/search/search?city=" + t + "&province=" + a + "&scoreorder=" + r.default.stringify(this.data.scoreorder) + "&item=" + r.default.stringify(e) + "&type=" + this.data.type + "&formData=" + r.default.stringify(this.data.formData) + "&ordertype=order") : this.handleJump("/pages/address/search/search?city=" + t + "&province=" + a + "&scoreorder=" + r.default.stringify(this.data.scoreorder) + "&item=" + r.default.stringify(e) + "&type=" + this.data.type + "&formData=" + r.default.stringify(this.data.formData)) : wx.navigateTo({
                url: "/pages/address/search/search?city=" + t + "&province=" + a
            });
        } else this.showToast("请先选择城市");
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    onCommentChange: function(t) {
        var e = this.data.item;
        e[t.target.id] = t.detail.value, this.setData({
            item: e
        });
    },
    createAddress: function(t, e) {
        var a = this;
        console.log(this.data, "this.data.isbtn"), this.data.isbtn && (this.setData({
            isbtn: !1
        }), wx.showLoading({
            title: "请稍后"
        }), s.default.createAddress(t).then(function(t) {
            if (console.log("bingooooooooooooo", t), a.setData({
                isbtn: !0
            }), a.data.order) if (e) a.handleJump("/pages/address/list/list?order=" + r.default.stringify(a.data.order) + "&formData=" + r.default.stringify(a.data.formData)); else {
                var s = a.data.order;
                s.consignee = t.data, a.handleJump("/pages/orders/new/new?from=address&order=" + r.default.stringify(s) + "&formData=" + r.default.stringify(a.data.formData));
            } else if (a.data.scoreorder) {
                var i = a.data.scoreorder;
                i.consignee = t.data, a.data.ordertype ? (console.log(i, "scoreorder"), a.handleJump("/pages/orders/new/new?from=address&order=" + r.default.stringify(i) + "&formData=" + r.default.stringify(a.data.formData))) : a.handleJump("/pages/mine/scores/score_new_order?from=address&scoreorder=" + r.default.stringify(i) + "&formData=" + r.default.stringify(a.data.formData));
            } else wx.navigateBack({
                delta: 1
            });
        }).catch(function(t) {
            console.log(t), a.setData({
                isbtn: !0
            });
        }));
    },
    editAddress: function(t, e) {
        var a = this;
        this.data.isbtn && (this.setData({
            isbtn: !1
        }), wx.showLoading({
            title: "请稍后"
        }), s.default.updataAddress(t).then(function(t) {
            if (wx.stopPullDownRefresh(), wx.hideLoading({
                title: "请稍后"
            }), console.log("bingooooooooooooo", t), a.setData({
                isbtn: !0
            }), a.data.order) if (e) a.handleJump("/pages/address/list/list?order=" + r.default.stringify(a.data.order) + "&formData=" + r.default.stringify(a.data.formData)); else {
                var s = a.data.order;
                s.consignee = t.data, a.handleJump("/pages/orders/new/new?from=address&order=" + r.default.stringify(s) + "&formData=" + r.default.stringify(a.data.formData));
            } else if (a.data.scoreorder) {
                var i = a.data.scoreorder;
                i.consignee = t.data, a.data.ordertype ? (console.log(i, "scoreorder"), a.handleJump("/pages/orders/new/new?from=address&order=" + r.default.stringify(i) + "&formData=" + r.default.stringify(a.data.formData))) : a.handleJump("/pages/mine/scores/score_new_order?from=address&scoreorder=" + r.default.stringify(i) + "&formData=" + r.default.stringify(a.data.formData));
            } else wx.navigateBack({
                delta: 1
            });
        }).catch(function(t) {
            console.log(t), a.setData({
                isbtn: !0
            });
        }));
    },
    handleJump: function(t) {
        wx.redirectTo({
            url: t
        });
    }
}), Page(i);