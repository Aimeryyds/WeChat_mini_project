function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

var e = getApp();

Page({
    data: {
        lists: [],
        total: 0,
        page_id: 0,
        star: "/common/s.png",
        nostar: "/common/s1.png"
    },
    onLoad: function(t) {
        this.parameters = Object.assign({}, t);
    },
    onShow: function() {
        var t = Object.assign({}, this.parameters);
        Object.keys(t).length > 0 ? this.getCommentsInfo(t) : wx.showModal({
            title: "非法请求",
            content: "",
            showCancel: !1,
            complete: function() {
                wx.navigateBack();
            }
        });
    },
    getCommentsInfo: function(a) {
        var n = this;
        e.apiRequest("appointment_detail", "comments", {
            data: {
                product_id: a.product_id,
                page_id: n.data.page_id,
                type: a.type
            },
            method: "POST",
            success: function(e) {
                var s = e.data || {};
                if ("OK" == s.result) {
                    var r = (s.data || {}).list || [];
                    if (Array.isArray(r) && !r.length) return wx.showModal({
                        title: "非法请求",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    }), !1;
                    var o = a.pullDownRefresh ? [] : n.data.lists;
                    o.push.apply(o, t(r));
                    for (var i in o) {
                        var c = o[i], l = parseInt(c.score || "0");
                        o[i].stars = new Array(l), o[i].nostars = new Array(5 - l), o[i].create_time = n.parseTime(o[i].create_time, "yyyy-MM-dd hh:mm:ss");
                    }
                    n.setData({
                        total: s.data.total,
                        lists: o
                    });
                } else {
                    var g = s.errmsg;
                    wx.showModal({
                        title: g || "请求失败",
                        content: "",
                        showCancel: !1,
                        complete: function() {
                            wx.navigateBack();
                        }
                    });
                }
            }
        });
    },
    loadMore: function() {
        var t = parseInt(this.data.page_id);
        if (isNaN(t)) return !1;
        this.setData({
            page_id: t + 1
        });
        var e = Object.assign({}, this.parameters);
        Object.keys(e).length > 0 ? this.getCommentsInfo(e) : wx.showModal({
            title: "非法请求",
            content: "",
            showCancel: !1,
            complete: function() {
                wx.navigateBack();
            }
        });
    },
    parseTime: function(t, e) {
        if (isNaN(parseInt(t))) return t;
        var a = new Date(parseInt(t + "000")), n = {
            "M+": a.getMonth() + 1,
            "d+": a.getDate(),
            "h+": a.getHours(),
            "m+": a.getMinutes(),
            "s+": a.getSeconds()
        };
        if (/(y+)/i.test(e)) {
            var s = (a.getFullYear() + "").substr(4 - RegExp.$1.length);
            e = e.replace(RegExp.$1, s);
        }
        for (var r in n) if (new RegExp("(" + r + ")", "i").test(e)) {
            var o = n[r], i = 1 == RegExp.$1.length ? o : ("00" + o).substr(("" + o).length);
            e = e.replace(RegExp.$1, i);
        }
        return e;
    },
    onPullDownRefresh: function() {
        var t = Object.assign({}, this.parameters);
        Object.keys(t).length > 0 && (t.pullDownRefresh = !0, this.getCommentsInfo(t)), 
        wx.stopPullDownRefresh();
    }
});