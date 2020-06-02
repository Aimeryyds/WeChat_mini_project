function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = require("../../../components/utils"), e = t(require("../../../components/event")), i = t(require("../../../services/quote/quote")), s = t(require("../../../services/stockalert/stockalert")), o = require("../../../components/bridge"), n = t(require("../../../components/circus/toast/toast"));

getApp().View(Object.assign({
    beacon: {
        name: "提醒"
    },
    data: {
        list: [ {
            id: 0,
            title: "rise",
            name: "股价涨到",
            company: "元",
            inputText: "",
            blooean: !1,
            infor: "",
            ptop: "",
            show: !1,
            color: {
                normal: !1
            }
        }, {
            id: 1,
            title: "drop",
            name: "股价跌到",
            company: "元",
            inputText: "",
            blooean: !1,
            infor: "",
            ptop: "",
            show: !1,
            color: {
                normal: !1
            }
        }, {
            id: 2,
            title: "chg",
            name: "日涨跌幅超",
            company: "%",
            inputText: "",
            blooean: !1,
            show: !1,
            infor: "",
            ptop: "",
            color: {
                normal: !1
            }
        } ],
        now: "",
        change: "",
        roc: "",
        name: "",
        visable: "none",
        copyname: "广发证券",
        onoff: !1,
        code: "",
        exchange: "",
        market: "",
        msg: "",
        colors: "",
        fixed: "",
        priceGE: "",
        priceLE: "",
        dayGainGE: "",
        isIphoneX: !1
    },
    events: {},
    handle: function(t) {
        var a = t.detail.value, e = (t.target.dataset.msg, t.currentTarget.id);
        a && Number(a) >= 0 ? this.data.list[e].blooean = !0 : this.data.list[e].blooean = !1, 
        this.data.list[e].inputText = a;
        var i = /^\d{7,}(\.\d{4,})?$/, s = this.data.fixed, o = /^\d{1,}\.\d{3,}$/;
        if (2 == s) n = /^\d{1,}\.\d{3,}$/; else if (3 == s) var n = /^\d{1,}\.\d{4,}$/;
        if (2 == e) {
            if (i.test(a)) {
                var d = a.slice(0, 6);
                this.data.list[e].inputText = d;
            } else if (o.test(a)) {
                var l = a.split("."), r = l[0] + "." + l[1].slice(0, 2);
                this.data.list[e].inputText = r;
            }
        } else if (i.test(a)) {
            var h = a.slice(0, 6);
            this.data.list[e].inputText = h;
        } else if (n.test(a)) {
            var c = a.split("."), u = c[0] + "." + c[1].slice(0, s);
            this.data.list[e].inputText = u;
        }
        var p = this.zPercent(e), f = this.dPercent(e);
        0 == e ? (this.data.priceGE = a, Number(this.data.now) <= Number(a) ? (console.log("较当前价涨" + p), 
        this.data.list[e].ptop = "120rpx", this.data.list[e].show = !0, this.data.list[e].infor = "较当前价涨" + p, 
        this.data.list[e].normal = !1) : (this.data.list[e].normal = !0, this.data.list[e].show = !1)) : 1 == e ? (this.data.priceLE = a, 
        console.log(this.data.list[e].inputText), Number(this.data.now) >= Number(this.data.list[e].inputText) ? Number(a) > 0 ? (this.data.list[e].ptop = "216rpx", 
        this.data.list[e].show = !0, this.data.list[e].infor = "较当前价跌" + f, this.data.list[e].normal = !1) : "" == a ? this.data.list[e].show = !1 : this.data.list[e].normal = !0 : (this.data.list[e].normal = !0, 
        this.data.list[e].show = !1)) : (Number(a) > 0 && Number(a) <= 10 ? this.data.list[e].normal = !1 : this.data.list[e].normal = !0, 
        this.data.dayGainGE = a);
        var m = this.data.priceGE, g = this.data.priceLE, v = this.data.dayGainGE;
        m || g || v ? this.data.onoff = !0 : m || g || v || (this.data.onoff = !1), this.setData({
            list: this.data.list
        }), this.setData({
            onoff: this.data.onoff
        });
    },
    zPercent: function(t) {
        return ((this.data.list[t].inputText - Number(this.data.now)) / Number(this.data.now) * 100).toFixed(2) + "%";
    },
    dPercent: function(t) {
        return ((Number(this.data.now) - this.data.list[t].inputText) / Number(this.data.now) * 100).toFixed(2) + "%";
    },
    blur: function(t) {
        var a = this.data.fixed;
        if (2 == a) e = /^(\d{1,6})?(\.\d{1,2})?$/; else if (3 == a) var e = /^(\d{1,6})?(\.\d{1,3})?$/;
        var i = t.detail.value, s = t.currentTarget.id;
        s < 2 && (this.data.list[s].show = !1), e.test(i) || (this.data.list[s].inputText = ""), 
        this.setData({
            list: this.data.list
        });
    },
    message: function(t) {
        var a = this;
        t.exchange = Number(t.exchange), s.default.getAlert(t, this).then(function(t) {
            t.conditions.length && (t.conditions.map(function(t) {
                "priceGE" == t.type ? (a.data.list[0].inputText = t.value, a.data.list[0].blooean = !a.data.list[0].blooean, 
                a.data.priceGE = t.value) : "priceLE" == t.type ? (a.data.list[1].inputText = t.value, 
                a.data.list[1].blooean = !a.data.list[1].blooean, a.data.priceLE = t.value) : "dayGainGE" == t.type && (a.data.list[2].inputText = t.value, 
                a.data.list[2].blooean = !a.data.list[2].blooean, a.data.dayGainGE = t.value), t.value && (a.data.onoff = !0, 
                a.setData({
                    onoff: a.data.onoff
                }));
            }), a.setData({
                list: a.data.list
            }));
        });
    },
    switchChange: function(t) {
        var a = t.currentTarget.id;
        this.data.list[a].blooean = !this.data.list[a].blooean, this.setData({
            list: this.data.list
        });
    },
    setAlert: function() {
        var t = this, a = [];
        this.data.list.map(function(e) {
            if (0 == e.id && e.blooean) {
                var i = {};
                i.type = "priceGE", i.value = Number(t.data.list[0].inputText), a.push(i);
            } else if (1 == e.id && e.blooean) {
                var s = {};
                s.type = "priceLE", s.value = Number(t.data.list[1].inputText), a.push(s);
            } else if (2 == e.id && e.blooean) {
                var o = {};
                o.type = "dayGainGE", o.value = Number(t.data.list[2].inputText), a.push(o);
            }
        }), s.default.setAlert({
            code: this.data.code,
            exchange: Number(this.data.exchange),
            priceBase: this.data.fixed
        }, a, this).then(function(t) {
            (0, o.navigateBack)(1);
        }).catch(function(a) {
            n.default.show(t, a);
        });
    },
    copyBtn: function(t) {
        var a = this;
        wx.setClipboardData({
            data: a.data.copyname,
            success: function(t) {
                wx.showToast({
                    title: "复制成功"
                });
            }
        });
    },
    setMsg: function(t, a, e) {
        e.data.msg = t, e.setData({
            msg: e.data.msg
        }), a ? e.setData({
            visable: "block"
        }) : e.setData({
            visable: "none"
        });
    },
    formSubmit: function(t) {
        console.log("-------", t);
        var a = this.data.list[0].inputText, e = this.data.list[1].inputText, i = this.data.dayGainGE, s = 0, o = Number(this.data.now);
        this.data.onoff && (this.data.list[0].blooean && "" != a && Number(a) < o && (s++, 
        this.setMsg("上涨目标价低于最新价", !0, this)), this.data.list[1].blooean && (Number(e) > o ? (s++, 
        this.setMsg("下跌目标价高于最新价", !0, this)) : e && 0 == Number(e) && (s++, this.setMsg("目标价输入无效", !0, this))), 
        this.data.list[2].blooean && (Number(i) > 10 || Number(i) <= 0) && i && (s++, this.setMsg("日涨跌幅输入无效", !0, this)), 
        s > 1 && this.setMsg("目标价输入有误", !0, this), a || e || i || this.setMsg("请输入内容", !0, this), 
        0 == s && (a || e || i) && this.setAlert());
    },
    handleWrite: function(t) {
        this.data.msg = "重新输入", this.setData({
            visable: "none"
        });
    },
    quoteMessage: function(t) {
        var e = this;
        this.data.code = t.code, this.data.exchange = t.exchange, this.data.market = (0, 
        a.toMarket)(t.exchange);
        var s = {
            data: {
                market: (0, a.toMarket)(t.exchange),
                code: t.code
            }
        };
        i.default.quote(s).then(function(t) {
            var i = t.data, s = i.quote, o = s.price_base, n = s.info, d = Math.pow(10, o), l = o;
            e.data.fixed = o;
            var r = ((i.quote.data.change || 0) / d).toFixed(l);
            e.setData({
                change: r
            });
            var h = ((i.quote.data.now || 0) / d).toFixed(l);
            e.setData({
                now: h
            });
            var c = "" + (0, a.getSign)(i.change) + (i.quote.data.roc / 100).toFixed(2) + "%";
            e.setData({
                roc: c
            }), e.data.change > 0 ? (e.data.colors = "#fa6262", e.setData({
                colors: e.data.colors
            })) : 0 == e.data.change ? (e.data.colors = "#666", e.setData({
                colors: e.data.colors
            })) : e.data.change < 0 && (e.data.colors = "#388f3c", e.setData({
                colors: e.data.colors
            })), e.setData({
                name: n.name
            });
        });
    },
    allwarn: function() {
        (0, o.navigateTo)({
            url: "/pages/portal/stocklist/stocklist"
        });
    },
    onLoad: function(t) {
        this.device(), (0, o.setNavigationBarTitle)({
            title: "提醒"
        });
        var a = {};
        for (var e in t) a[e] = t[e], "exchange" == e && (a[e] = Number(t[e]));
        this.message(t), this.quoteMessage(t);
    },
    reg: function(t, a) {
        var e = RegExp("" + t);
        e.test(a) && this.setData({
            isIphoneX: !0
        });
    },
    device: function() {
        var t = this, a = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone11" ];
        (0, o.getSystemInfo)().done(function(e) {
            var i = e.model;
            a.map(function(a) {
                t.reg(a, i);
            });
        });
    }
}, e.default));