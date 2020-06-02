var t = {}, e = getApp(), n = e.globalData.haozuBase, a = 0;

Page({
    data: {
        keyword: "",
        domain: "bj",
        showSorry: !1,
        seachFlag: !1,
        seachList: [],
        historyList: [],
        commonList: []
    },
    ceshi: function(t) {
        return t;
    },
    inputFun: function(t) {
        var e = this, n = t.detail.value.trim();
        clearTimeout(a), n.length > 0 ? (e.setData({
            seachFlag: !0
        }), a = setTimeout(function() {
            i(n, e.data.domain).then(function(t) {
                var a = t.data.building || [];
                e.setData({
                    keyword: n,
                    showSorry: 0 === a.length,
                    seachList: a
                });
            });
        }, 300)) : e.setData({
            keyword: n,
            seachFlag: !1,
            showSorry: !1
        });
    },
    goSearch: function(t) {
        var e = t.detail.value.trim();
        if (0 === e.length) return !1;
        s(e, ""), wx.navigateTo({
            url: "/pages/list/list?keyword=" + e
        });
    },
    setOne: function(t) {
        var e = {}, n = t.target.dataset;
        e[n.key] = "true" === n.val, this.setData(e);
    },
    callPhone: function() {
        wx.makePhoneCall({
            phoneNumber: e.globalData["tel-phone"]
        });
    },
    saveLocal: function(t) {
        var e = t.currentTarget.dataset.val, n = t.currentTarget.dataset.sid || "";
        return s(e, n), !1;
    },
    deleLocal: function() {
        for (var t = this.data.historyList, e = 0; e < t.length; e++) {
            var n = t[e];
            u(decodeURIComponent(n.p), n.k);
        }
        var a = c();
        this.setData({
            historyList: a
        });
    },
    onLoad: function(t) {
        var a = this, r = e.getSecret();
        a.setData({
            domain: e.globalData.domain
        }), wx.request({
            url: n + "/api/miniapps/keyword/",
            data: {
                domain: e.globalData.domain,
                currtime: r.currtime,
                sign: r.sign
            },
            success: function(t) {
                a.setData({
                    commonList: t.data.data
                });
            }
        }), a.setData({
            historyList: c()
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            historyList: c()
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var r = function(e, n) {
    var a = -1;
    void 0 === t[n] && (t[n] = []);
    for (var r = t[n], o = 0; o < r.length; o++) r[o].ns === e && (a = o);
    return a;
}, o = function(t, a) {
    return new Promise(function(r, o) {
        var i = e.getSecret();
        wx.request({
            url: n + "/api/miniapps/suggestion/",
            data: {
                domain: a,
                keyword: t.trim(),
                currtime: i.currtime,
                sign: i.sign
            },
            success: function(t) {
                r(t.data);
            },
            fail: function(t) {
                o(t);
            }
        });
    });
}, i = function(e, n) {
    return new Promise(function(a, i) {
        var s = r(e, n);
        s > -1 ? setTimeout(function() {
            a(JSON.parse(t[n][s].ru));
        }, 100) : o(e, n).then(function(r) {
            t[n].push({
                ns: e,
                ru: JSON.stringify(r)
            }), t[n].length > 100 && t[n].splice(0, 1), a(r);
        });
    });
}, s = function(t, e) {
    var n = encodeURIComponent(t), a = new Date().getTime(), r = wx.getStorageSync("ht");
    "" === r && (r = "[]");
    for (var o = JSON.parse(r); o.length > 30; ) o.shift();
    for (var i = 0; i < o.length; i++) o[i].p === n && o.splice(i, 1);
    return o.push({
        p: n,
        t: a,
        k: e
    }), wx.setStorage({
        key: "ht",
        data: JSON.stringify(o)
    }), !0;
}, u = function(t, e) {
    var n = encodeURIComponent(t), a = wx.getStorageSync("ht");
    "" === a && (a = "[]");
    for (var r = JSON.parse(a), o = 0; o < r.length; o++) r[o].p === n && r[o].k === e && r.splice(o, 1);
    return wx.setStorageSync("ht", JSON.stringify(r)), !0;
}, c = function() {
    var t = [], e = wx.getStorageSync("ht");
    if ("" === e && (e = "[]"), (t = JSON.parse(e)).length > 0) {
        var n = t.length > 5 ? t.length - 5 : 0;
        return t.slice(n, t.length);
    }
    return [];
};