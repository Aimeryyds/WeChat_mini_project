function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = e.requirejs("core"), o = e.requirejs("wxParse/wxParse");

Page({
    data: {
        scrollTop: 0,
        num: 1,
        show: !1
    },
    onLoad: function(i) {
        var s = this, r = this.gid = i.gid ? i.gid : i.id;
        console.log(r);
        var n = wx.getSystemInfoSync();
        a.get("Pintuan/ptGoodsDetail", {
            gid: r,
            uid: e.getCache("userinfo").uid
        }, function(e) {
            if (console.log(e), 0 == e.code) {
                var i;
                e.info.intro && o.wxParse("wxParseData", "html", e.info.intro, s, "0"), s.setData({
                    windowHeight: n.windowHeight,
                    goodsDetail: e.info
                });
                var r = e.info.groupList;
                if (0 < r.length) {
                    for (var u = 0; u < r.length; u++) {
                        e = --r[u].leftTime;
                        var d = Math.floor(e / 60 / 60), g = Math.floor((e - 60 * d * 60) / 60), l = e % 60;
                        d < 10 && (d = "0" + d), g < 10 && (g = "0" + g), l < 10 && (l = "0" + l), r[u].leftTimeStr = d + ":" + g + ":" + l;
                    }
                    s.setTimeData(r);
                }
                s.setData((t(i = {
                    groupList: r
                }, "groupList", r), t(i, "show", !0), i));
            } else a.alert(e.msg);
        }, !0);
    },
    onShareAppMessage: function(t) {
        return {
            title: this.goodsDetail.name,
            path: "/yb_shop/pages/pintuan/pages/goods/detail?gid=" + this.goodsDetail.id,
            success: function(t) {
                console.log(t);
            }
        };
    },
    setTimeData: function(t) {
        var e = this, a = t;
        setInterval(function() {
            for (var t = 0; t < a.length; t++) {
                var o = --a[t].leftTime, i = Math.floor(o / 60 / 60), s = Math.floor((o - 60 * i * 60) / 60), r = o % 60;
                i < 10 && (i = "0" + i), s < 10 && (s = "0" + s), r < 10 && (r = "0" + r), a[t].leftTimeStr = i + ":" + s + ":" + r;
            }
            e.setData({
                groupList: a
            });
        }, 1e3);
    },
    joinGroup: function(t) {
        var a = t.currentTarget.dataset.id;
        e.redirect("group/detail", "id=" + a);
    },
    goHome: function() {
        a.jump("/yb_shop/pages/pintuan/pages/index/index", 2);
    },
    goToBuy: function() {
        var t = this.data.goodsDetail;
        t.num = this.data.num, t.goodsPrice = this.data.goodsPrice, t.buyType = this.data.buyType, 
        t.groupPid = 0, e.goodsInfo = t, e.redirect("goods/payfor");
    },
    selectProp: function(t) {
        var e = t.currentTarget.dataset, a = e.pid, o = e.pname, i = e.name, s = this.propValue ? this.propValue : [];
        s[a] = {
            pname: o,
            name: i
        }, this.propValue = s, this.setData({
            propValue: s
        });
    },
    minus: function() {
        var t = 1 < this.data.num ? --this.data.num : 1;
        this.setData({
            num: t
        });
    },
    plus: function() {
        var t = ++this.data.num;
        this.setData({
            num: t
        });
    },
    showModal: function(t) {
        var a = t.currentTarget.dataset.type, o = "open" == t.currentTarget.dataset.statu, i = "group" == a ? this.data.goodsDetail.gprice : this.data.goodsDetail.price, s = "group" == a ? 1 : 0;
        e.showModal(this), this.setData({
            showModalStatus: o,
            goodsPrice: i,
            buyType: s
        });
    },
    scrolltolower: function() {},
    showServer: function(t) {}
});