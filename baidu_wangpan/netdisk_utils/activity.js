var t = {
    1: "wx_icon",
    2: "wx_activity",
    3: "wx_share_success_activity",
    4: "wx_share_fail_activity",
    14: "wx_share_feed_activity_banner",
    15: "wx_share_feed_activity_icon",
    16: "wx_share_fail_activity_banner",
    17: "wx_img_activity"
}, i = function(i, e) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = t[i.pop_type], c = {
        type: n += e,
        value: "活动埋点",
        from: i.activityid
    }, s = a.msg;
    s && (c.msg = s), wx.log.send(c), {
        _click: !0,
        _success: !0,
        _fail: !0
    }[e] && wx.logBp.send(Object.assign(c));
}, e = function(t) {
    i(t, "_click");
}, a = function(t) {
    i(t, "_success");
}, n = function(t, e) {
    try {
        e = JSON.stringify(e);
    } catch (t) {
        console.warn(t);
    }
    i(t, "_fail", {
        msg: e
    }), wx.wxMonitor.openActivity.send();
};

module.exports = {
    validateActivity: function(t) {
        t.forEach(function(t) {
            var i = !0;
            if (t.start_time && t.end_time) {
                var e = Date.parse(new Date()) / 1e3;
                i = e > t.start_time && e < t.end_time;
            }
            var a = !1;
            1 === t.nav_type ? a = !!t.tourl : 2 === t.nav_type && (a = !!t.appid);
            var n = !!t.showImg, c = !0;
            15 === t.pop_type && (c = !(!t.title && !t.subtitle)), t.isValid = i && a && n && c;
        });
    },
    navActivity: function(t) {
        switch (e(t), t.nav_type) {
          case 1:
            t.tourl && wx.navigateTo({
                url: "/pages/netdisk_h5/index?src=" + encodeURIComponent(t.tourl),
                success: function() {
                    a(t);
                },
                fail: function(i) {
                    n(t, i);
                }
            });
            break;

          case 2:
            t.appid && wx.navigateToMiniProgram({
                appId: t.appid,
                path: t.tourl || "",
                success: function() {
                    a(t);
                },
                fail: function(i) {
                    n(t, i);
                }
            });
        }
    },
    sendActivityLog: i
};