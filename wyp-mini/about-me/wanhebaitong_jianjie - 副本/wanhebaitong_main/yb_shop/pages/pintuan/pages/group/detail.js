function t(t, o, e) {
    return o in t ? Object.defineProperty(t, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = e, t;
}

var o = getApp(), e = o.requirejs("core");

Page({
    data: {
        num: 1,
        show: !1,
        display: !1
    },
    onGotUserInfo: function(t) {
        var e = this.id, a = this, i = o.getCache("userinfo");
        a.setData({
            display: !1
        }), i || o.getUserInfo(t.detail.userInfo, function(t) {
            1e3 != t ? a.getDetail(e) : a.setData({
                display: !0
            });
        });
    },
    onLoad: function(t) {
        this.id = t.id;
    },
    onShow: function() {
        var t = this.id;
        o.getCache("userinfo") ? (this.getDetail(t), this.setData({
            display: !1
        })) : this.setData({
            display: !0
        });
    },
    getDetail: function(o) {
        var a = this;
        e.get("Pintuan/ptGroupDetail", {
            id: o,
            uid: getApp().getCache("userinfo").uid
        }, function(i) {
            if (console.log(i), 0 == i.code) {
                var n, s = "";
                if (0 < i.info.leftTime) {
                    var r = --i.info.leftTime, u = Math.floor(r / 60 / 60), f = Math.floor((r - 60 * u * 60) / 60), p = r % 60;
                    u < 10 && (u = "0" + u), f < 10 && (f = "0" + f), p < 10 && (p = "0" + p), s = u + ":" + f + ":" + p, 
                    console.log("a:" + s), a.setTimeData(i.info.leftTime, o);
                }
                for (var g = [], d = i.info.goods.groupNum - 1; 0 <= d; d--) i.info.groupMember[d] ? g[d] = i.info.groupMember[d] : g[d] = {};
                a.setData((t(n = {
                    groupMember: g
                }, "groupMember", g), t(n, "groupInfo", i.info), t(n, "leftTime", s), t(n, "leftnum", i.info.goods.groupNum - i.info.leftNum), 
                t(n, "show", !0), n));
            } else e.alert(i.msg);
        }, !0);
    },
    setTimeData: function(t, o) {
        var a = this;
        o = o, setInterval(function() {
            var i = --t, n = Math.floor(i / 60 / 60), s = Math.floor((i - 60 * n * 60) / 60), r = i % 60;
            n < 10 && (n = "0" + n), s < 10 && (s = "0" + s), r < 10 && (r = "0" + r);
            var u = n + ":" + s + ":" + r;
            0 == n && 0 == s && 0 == r && e.get("Pintuan/ptGroupDetail", {
                id: o
            }, function(t) {
                for (var o = [], e = t.info.goods.groupNum - 1; 0 <= e; e--) t.info.groupMember[e] ? o[e] = t.info.groupMember[e] : o[e] = {};
                a.setData({
                    groupMember: o,
                    groupInfo: t.info
                });
            }), a.setData({
                leftTime: u
            });
        }, 1e3);
    },
    onShareAppMessage: function(t) {
        console.log(t);
        var o = "/yb_shop/pages/pintuan/pages/group/detail?id=" + this.data.groupInfo.id;
        return {
            title: this.data.groupInfo.goods.name,
            path: o,
            success: function(t) {
                console.log(o), console.log(t);
            }
        };
    },
    goToHome: function() {
        e.jump("/yb_shop/pages/index/index", 2);
    },
    showGoodsDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        o.redirect("goods/detail", "gid=" + e);
    },
    goToBuy: function() {
        var t = this.data.groupInfo.goods;
        t.num = this.data.num, t.goodsPrice = this.data.groupInfo.goods.gprice, t.buyType = 1, 
        t.groupPid = this.data.groupInfo.id, o.goodsInfo = t, o.redirect("goods/payfor");
    },
    selectProp: function(t) {
        var o = t.currentTarget.dataset, e = o.pid, a = o.pname, i = o.name, n = this.propValue ? this.propValue : [];
        n[e] = {
            pname: a,
            name: i
        }, this.propValue = n, this.setData({
            propValue: n
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
        var e = "open" == t.currentTarget.dataset.statu;
        o.showModal(this), this.setData({
            showModalStatus: e
        });
    }
});