function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, i = require("../../wxParse/common.js");

Page({
    data: (a = {
        detail: {},
        currentState: !1,
        group_id: "",
        carts: []
    }, t(a, "group_id", ""), t(a, "qrurl", ""), t(a, "error_show", !1), t(a, "product_id", 0), 
    t(a, "lefttime", 0), t(a, "attr_data", []), t(a, "apptype", "wechat"), t(a, "had_full", !1), 
    a),
    onLoad: function(t) {
        var a = getApp(), e = t.group_id, i = decodeURIComponent(t.scene), r = this.data.lefttime, d = "";
        t.oid && (d = t.oid), t.lefttime && (r = t.lefttime), /^wx_[0-9]+$/.test(i) && (e = t.scene.split("wx_")[1]), 
        e || (wx.showModal({
            title: "请求错误",
            content: "",
            showCancel: !1
        }), a.goToHome());
        var o = this, l = 0;
        /^[1-9]\d*$/.test(t.product_id || 0) && (l = t.product_id), this.setData({
            detail: {},
            carts: [],
            currentState: !1,
            group_id: e,
            product_id: l,
            oid: d,
            lefttime: r
        }), a.apiRequest("wxcollage_detail", "index", {
            data: {
                product_id: l,
                group_id: e
            },
            success: function(t) {
                var a = t.data.data || {};
                if ("ERROR" == t.data.result) return o.setData({
                    detail: {
                        errmsg: t.data.errmsg
                    }
                }), wx.hideLoading(), !1;
                var e = {
                    hour: "00",
                    minute: "00",
                    second: "00",
                    collage_status_num: a.collage_status_num
                };
                a._setuptime = new Date().getTime();
                var i = t.data.order, r = !1;
                i && "0" == i.num && (r = !0), o.setData({
                    detail: a,
                    detail_price: a.price,
                    propertys: t.data.newsku,
                    skulist: t.data.skulist,
                    product_id: a.id,
                    loopday: e,
                    order: i,
                    had_full: r
                }), o.getListIng(), wx.hideLoading(), o.qrcodeurl();
            },
            complete: function() {
                wx.hideLoading();
            },
            fail: function() {
                o.setData({
                    detail: {
                        errmsg: "未找到匹配数据"
                    }
                });
            }
        });
    },
    onUnload: function() {
        this.data.collageUnload = 1, this.data.collagetimer && clearTimeout(this.data.collagetimer);
    },
    onShow: function() {
        this.setData({
            apptype: wx.canIUse("alert") ? "alipay" : "wechat"
        }), this.data.collageUnload && (this.data.collageUnload = 0, this.data.collagedata.detail.id != this.data.detail.id && this.setData(e({}, this.data.collagedata)), 
        this.getListIng());
    },
    toConfirm: function(t) {
        var a = this, e = a.data.detail, r = a.data.skulist, d = a.data.attr_data, o = this.data.currentState, l = this.data.group_id, s = this.data.product_id, n = !0, c = this.data.propertys, n = !0, u = getApp();
        if (d && 0 != d.length) for (var p = 0; p < d.length; p++) {
            if ("" == d[p] || void 0 == d[p] || d.length < c.length) {
                n = !1;
                break;
            }
            n = !0;
        } else n = !1;
        if (r && Object.keys(r).length > 0 && !n) o ? wx.showToast({
            title: "请选择商品规格"
        }) : a.setData({
            currentState: !a.data.currentState
        }); else {
            wx.showLoading({
                title: "请求中",
                mask: !0
            });
            var g = e.price, h = [ {
                cid: e.id,
                title: e.title,
                image: e.feature_img,
                price: g,
                sum: 1 * g,
                selected: !0,
                skuid: e.skuid,
                skuchecked: e.skuchecked || ""
            } ];
            i.get_cuser({
                success: function(t) {
                    0 == t ? (wx.hideLoading(), wx.showToast({
                        title: "请先登录"
                    }), wx.navigateTo({
                        url: "../login/login"
                    })) : (u.globalData.ccarts = h, wx.hideLoading(), wx.navigateTo({
                        url: "../collage_order/collage_order?ctype=1&group_id=" + l + "&product_id=" + s
                    }));
                }
            });
        }
    },
    getListIng: function() {
        var t = this, a = t.data.loopday, e = (t.data.detail.id, t.data.detail.lefttime), i = t.data.lefttime;
        i > 0 && (e = i);
        var r = t.data.detail._setuptime, d = new Date().getTime(), o = e - parseInt((d - r) / 1e3);
        if (!(o < 1)) {
            var l = a, s = 1e3 * o - 1e3, n = Math.floor(s / 864e5), c = Math.floor(s / 36e5) % 24, u = Math.floor(s / 6e4) % 60, p = Math.floor(s / 1e3) % 60, g = "00";
            if (n > 0 && (n > 99 && (n = 99), n < 10 && (n = "0" + n), g = n), c < 10 && (c = "0" + c), 
            u < 10 && (u = "0" + u), p < 10 && (p = "0" + p), 0 == s) {
                l.day = g, l.hour = c, l.minute = u, l.second = p, l.collage_status_num = 3;
                t.data.layerid;
                t.setData({
                    loopday: l
                });
            } else {
                l.day = g, l.hour = c, l.minute = u, l.second = p, o--;
                t.data.layerid;
                if (t.setData({
                    loopday: l
                }), !t.data.collageUnload) {
                    var h = setTimeout(function() {
                        t.getListIng();
                    }, 200);
                    t.data.collagetimer = h;
                }
            }
        }
    },
    changState: function() {
        this.initData(), this.setData({
            currentState: !this.data.currentState
        });
    },
    initData: function() {
        this.data.id;
        var t = this.data.propertys, a = this.data.detail, e = this.data.detail_price;
        a.price = e, t && t.length > 0 && t.forEach(function(t) {
            t.details.forEach(function(t) {
                t.detail_state = "";
            });
        }), this.setData({
            propertys: t,
            detail: a,
            attr_data: []
        });
    },
    qrcodeurl: function() {
        var t = this.data.group_id, a = this, e = getApp(), i = this.data.apptype;
        e.apiRequest("wxcollage_detail", "getUserQrCode", {
            data: {
                apptype: i,
                group_id: t,
                is_ajax: "1"
            },
            success: function(e) {
                var r = "";
                if ("haserror" == e.data) r = a.data.qrc_error, a.setData({
                    error_show: !0
                }); else {
                    var d = getApp().globalData.config.domain || "", o = getApp().globalData.config.checkcode || "", l = getApp().globalData.APISESSID || "";
                    r = d + "/wxappapi/wxcollage_detail/getUserQrCode?group_id=" + t + "&APISESSID=" + l + "&apitoken=" + o, 
                    "alipay" == i && (r = e.data);
                }
                if (a.setData({
                    qrurl: r
                }), "ERROR" == e.data.result) return console.log("ERROR"), !1;
            },
            complete: function() {},
            fail: function() {
                console.error("请求失败");
            }
        });
    },
    toOrderDetail: function() {
        var t = this.data.oid;
        if (t) {
            var a = "../collage_order_detail/collage_order_detail?oid=" + t;
            getApp().navigateTo({
                url: a
            });
        }
    },
    switchDetState: function(t) {
        var a = this.data.propertys, e = parseInt(t.currentTarget.dataset.index), i = parseInt(t.currentTarget.dataset.id), r = parseInt(t.currentTarget.dataset.pid), d = parseInt(t.currentTarget.dataset.did), o = this.data.attr_data, l = this.data.skulist, s = this.data.detail;
        if ("disable" != a[i].details[e].detail_state && "active" != a[i].details[e].detail_state && (a[i].details.forEach(function(t) {
            "active" == t.detail_state && (t.detail_state = "");
        }), a[i].details[e].detail_state = "active"), o[i] = r + ":" + d, o.length > 0 && o.length == a.length) {
            var n = l[o.join(";")];
            if (n) {
                var c = "", u = n.properties_name.split(";");
                for (var p in u) {
                    var g = u[p].split(":"), h = g.length;
                    g[h - 1] && (c += g[h - 1] + " ");
                }
                s.price = n.price, s.num = n.quantity, s.skuid = n.id, s.skuchecked = c;
            }
        }
        this.setData({
            propertys: a,
            attr_data: o,
            detail: s,
            pindex: e
        });
    },
    onShareAppMessage: function() {
        var t = this.data.detail;
        return {
            title: "快来" + t.price + "元拼 " + t.title,
            path: "/pages/collage_detail/collage_detail?group_id=" + this.data.group_id
        };
    },
    goToHome: function() {
        getApp().goToHome();
    }
});