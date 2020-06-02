var n = getApp(), o = n.requirejs("core"), e = (n.getCache("userinfo"), n.requirejs("wxParse/wxParse"));

module.exports = {
    BarIndex: function(n) {
        var e = {};
        o.get("Bargain/BarIndex", {}, function(t) {
            console.log(t), 0 == t.code ? (e.cate_info = t.info.cate_info, e.carousel = t.info.carousel, 
            "function" == typeof n && n(e)) : o.alert(t.msg);
        });
    },
    kj_list: function(n, e, t, i, a) {
        var r = {};
        o.get("Bargain/Bargain", {
            type: e,
            class_id: n,
            page: t
        }, function(n) {
            console.log(n), 0 == n.code ? (n.info.forEach(function(n) {
                var o = n.star_time - Date.parse(new Date()) / 1e3;
                n.goods_type = 0 < o ? 1 : 2, n.user_num = n.user.length;
            }), 0 < n.info.length && (r.page = t + 1, r.list = i.data.list.concat(n.info), n.info.length < 10 && (r.loaded = !0)), 
            0 == n.info.length && (r.loaded = !0), r.show = !0, a(r)) : o.alert(n.msg, function() {});
        }, !0);
    },
    kj_detail: function(n, t, i) {
        var a = {};
        o.get("Bargain/GoodsInfo", {
            id: n
        }, function(n) {
            console.log(n), 0 == n.code && null != n.info ? (e.wxParse("wxParseData", "html", n.info.bargain_info.activity_rules, t, "0"), 
            a.bargain_info = n.info.bargain_info, a.about_info = n.info.about_info, a.show = !0, 
            "function" == typeof i && i(a)) : o.alert(n.msg);
        }, !0);
    },
    kj_info: function(n, t, i, a) {
        var r = {};
        o.get("Bargain/BargainInfo", {
            id: n,
            user_id: t
        }, function(n) {
            0 == n.code && null != n.info ? (e.wxParse("wxParseData", "html", n.info.bargain_info.activity_rules, i, "0"), 
            r.bargain_info = n.info.bargain_info, r.bargain_info.cons_time = o.time_format(n.info.bargain_info.consumption_time), 
            r.user_info = n.info.user_info, r.show = !0, Date.parse(new Date()) / 1e3 > n.info.bargain_info.consumption_time ? r.overtime = 1 : r.overtime = 2, 
            wx.setNavigationBarTitle({
                title: n.info.bargain_info.bargain_name || "砍价详情"
            }), "function" == typeof a && a(r)) : (o.alert(n.msg), setTimeout(function() {
                wx.navigateBack();
            }, 1e3));
        }, !0);
    },
    BargainCreate: function(n, e, t) {
        o.get("Bargain/BargainCreate", {
            bargain_id: n,
            user_id: getApp().getCache("userinfo").uid
        }, function(n) {
            console.log(n), 0 == n.code ? n.popup = !0 : t || o.alert(n.msg), "function" == typeof e && e(n);
        });
    },
    BargainHelp: function(n, e, t) {
        o.get("Bargain/BargainHelp", {
            iInitiated_id: n,
            user_id: getApp().getCache("userinfo").uid,
            uid: e
        }, function(n) {
            0 == n.code ? (n.popup = !0, "function" == typeof t && t(n)) : o.alert(n.msg);
        });
    },
    BargainRecord: function(n, e) {
        var t = {};
        o.get("Bargain/BargainRecord", {
            iInitiated_id: n
        }, function(n) {
            0 == n.code ? (n.info.forEach(function(n) {
                n.create_time = o.time_format(n.create_time), n.user_id == getApp().getCache("userinfo").uid && (n.nick_name = "系统", 
                n.user_headimg = "/yb_shop/static/images/icon/kj_info.png");
            }), t.list = n.info, t.show = !0, "function" == typeof e && e(t)) : o.alert(n.msg);
        }, !0);
    },
    MyBargain: function(n, e, t) {
        var i = {};
        o.get("Bargain/MyBargain", {
            page: n,
            user_id: getApp().getCache("userinfo").uid
        }, function(a) {
            0 == a.code ? (a.info.forEach(function(n) {
                var o = Date.parse(new Date()) / 1e3;
                o > n.consumption_time ? n.overtime = 1 : n.overtime = 2, n.end_time > o ? n.goods_type = 1 : n.goods_type = 2, 
                n.current_price - n.lowest_price <= 0 ? n.kj_type = 1 : n.kj_type = 2;
            }), 0 < a.info.length && (i.page = n + 1, i.list = e.data.list.concat(a.info), a.info.length < 10 && (i.loaded = !0)), 
            0 == a.info.length && (i.loaded = !0), i.show = !0, "function" == typeof t && t(i)) : o.alert(a.msg);
        }, !0);
    },
    Countdown: function(n, o) {
        var e = {}, t = n - Date.parse(new Date()) / 1e3;
        t <= 0 && (e.show_time = !1, o(e));
        var i = setInterval(function() {
            var n = t, a = Math.floor(n / 3600 / 24), r = a.toString();
            1 == r.length && (r = "0" + r);
            var f = Math.floor((n - 3600 * a * 24) / 3600), c = f.toString();
            1 == c.length && (c = "0" + c);
            var g = Math.floor((n - 3600 * a * 24 - 3600 * f) / 60), u = g.toString();
            1 == u.length && (u = "0" + u);
            var s = (n - 3600 * a * 24 - 3600 * f - 60 * g).toString();
            1 == s.length && (s = "0" + s), e.countDownDay = r, e.countDownHour = c, e.countDownMinute = u, 
            e.countDownSecond = s, "function" == typeof o && o(e), --t < 0 && (clearInterval(i), 
            wx.showToast({
                title: "活动已结束"
            }), e.countDownDay = "0", e.countDownHour = "0", e.countDownMinute = "0", e.countDownSecond = "0", 
            e.show_time = !1, "function" == typeof o && o(e));
        }.bind(this), 1e3);
    },
    removeByValue: function(n, o, e) {
        for (var t = -1, i = 0; i < n.length; i++) if (console.log(n[i]), n[i] == o) {
            t = i;
            break;
        }
        n.splice(t, 1), "function" == typeof e && e(n);
    }
};