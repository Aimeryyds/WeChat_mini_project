var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("utils/md5.min.js");

App({
    onLaunch: function() {
        var e = this;
        e.savephone();
        var a = wx.getStorageSync("userInfo");
        if ("object" != (void 0 === a ? "undefined" : t(a))) wx.login({
            success: function(t) {
                t.code && wx.setStorage({
                    key: "code",
                    data: t.code
                });
            }
        }); else {
            var n = "Array" == typeof a ? a.length > 0 : !!a;
            e.globalData.userInfo = n ? a : null;
        }
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
        var i = this, r = i.getSecret();
        wx.request({
            url: i.globalData.haozuBase + "/api/miniapps/getcity/",
            data: {
                currtime: r.currtime,
                sign: r.sign
            },
            success: function(t) {
                200 === t.data.code && (i.globalData.domain = t.data.data.domain);
            },
            fail: function(t) {}
        }), wx.request({
            url: i.globalData.haozuBase + "/api/miniapps/getcitylist/",
            data: {
                currtime: r.currtime,
                sign: r.sign
            },
            success: function(t) {
                200 === t.data.code && (i.globalData.citys = t.data.data);
            },
            fail: function(t) {}
        });
    },
    globalData: {
        domain: "bj",
        citys: [],
        "tel-phone": "",
        userInfo: null,
        haozuBase: "https://www.haozu.com",
        uchaozuBase: "https://uc.haozu.com",
        crmhaozuBase: "https://crm.haozu.com",
        tencentMapKey: "7A6BZ-DAZW6-ELWSU-ENCGS-NJAYS-X5FVC"
    },
    getSecret: function() {
        var t = new Date().getTime() + "", a = [];
        return a.push("currtime=" + t.substr(0, 10)), a.push("Mini-1100-A01h-0000"), {
            currtime: t.substr(0, 10),
            sign: e(encodeURI(a.join("&")))
        };
    },
    getCrmSecret: function(t, a) {
        var n = new Date().getTime() + "";
        n = n.substr(0, 10);
        var o = [], i = [];
        a.timestamp = n, a.valid_time = 30;
        for (var r in a) i.push(r);
        i.sort();
        for (var s in i) o.push(i[s] + "=" + encodeURIComponent(a[i[s]]));
        a.secret_id = "wxapp";
        var c = "crm.haozu.com" + t;
        return a.sign = e("GET" + c + o.join("&") + "KhBh-D9n8-O1Mi"), a;
    },
    extend: function(t) {
        function e(e, a, n, o) {
            return t.apply(this, arguments);
        }
        return e.toString = function() {
            return t.toString();
        }, e;
    }(function(e, a, n, o) {
        if ("object" === (void 0 === e ? "undefined" : t(e)) && "object" === (void 0 === a ? "undefined" : t(a))) for (var i in a) a.hasOwnProperty(i) && (i in e ? n || (o && "object" === t(e[i]) && "object" === t(a[i]) ? extend(e[i], a[i], n, o) : e[i] = a[i]) : e[i] = a[i]);
        return e;
    }),
    saveStorage: function(t, e) {
        var a = this, n = a.getSecret(), o = [ t ], i = wx.getStorageSync("browse") || [], r = wx.getStorageSync("building") || [], s = wx.getStorageSync("space") || [];
        if (null !== a.globalData.userInfo) wx.request({
            url: "https://uc.haozu.com/api/miniapps/view/add",
            data: {
                uid: a.globalData.userInfo.user_id,
                currtime: n.currtime,
                sign: n.sign,
                data: o
            },
            success: function(t) {}
        }); else {
            var c = i.findIndex(function(e) {
                return e.v == t.v;
            });
            if (-1 !== c && i.splice(c, 1), i.unshift(t), wx.setStorageSync("browse", i), 1 == e.type) {
                var u = r.findIndex(function(t) {
                    return t.building_id == e.building_id;
                });
                -1 !== u && r.splice(u, 1), r.unshift(e), wx.setStorageSync("building", r);
            } else {
                var l = s.findIndex(function(t) {
                    return t.id == e.id;
                });
                -1 !== l && s.splice(l, 1), s.unshift(e), wx.setStorageSync("space", s);
            }
        }
    },
    savephone: function() {
        var t = this, e = t.getSecret();
        wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/channelinfo/",
            data: {
                currtime: e.currtime,
                sign: e.sign
            },
            success: function(e) {
                if (200 == e.data.code) {
                    if (t.globalData["tel-phone"]) return !1;
                    t.globalData["tel-phone"] = e.data.data["tel-phone"];
                }
            },
            fail: function(t) {}
        });
    },
    orderlogin: function(t) {
        var e = this;
        if (!t.index) {
            var a = wx.getStorageSync("orderSaveId") || [];
            a.unshift(t), wx.setStorageSync("orderSaveId", a);
        }
        return new Promise(function(a, n) {
            var o = e.getSecret();
            wx.showLoading({
                mask: !0
            });
            var i = e.extend({
                domain: e.globalData.domain,
                name: "小程序预约",
                login: 1,
                from_page: 1,
                currtime: o.currtime,
                sign: o.sign
            }, t);
            wx.request({
                url: e.globalData.haozuBase + "/api/miniapps/intention/",
                data: i,
                success: function(t) {
                    wx.hideLoading(), 200 == t.data.code ? a({
                        code: 200,
                        msg: "success"
                    }) : (n(t.data), wx.showToast({
                        icon: "none",
                        title: t.data.msg,
                        mask: !0
                    }));
                },
                fail: function(t) {
                    wx.showModal({
                        content: "预约失败，请重新预约",
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "/pages/login/index"
                            }) : t.cancel;
                        }
                    }), n(t);
                }
            });
        });
    },
    orderDisabled: function(t, e, a) {
        -1 !== (wx.getStorageSync("orderSaveId") || []).findIndex(function(t) {
            return t[a] == e;
        }) && t.setData({
            isYK: !0
        });
    },
    globalDataLoad: function(t, e, a) {
        var n = this;
        if (a || (a = e), n.globalData[e] && n.globalData[e].length > 0) {
            var o = {};
            o[a] = n.globalData[e], t.setData(o);
        } else {
            var i = setInterval(function() {
                if (n.globalData[e] && n.globalData[e].length > 0) {
                    var o = {};
                    o[a] = n.globalData[e], t.setData(o), clearInterval(i);
                }
            }, 300);
            setTimeout(function() {
                clearInterval(i);
            }, 1e4);
        }
    },
    mapCall: function(t) {
        var e = this.extend({
            latitude: 86.916527,
            longitude: 116.427328,
            scale: 16,
            name: "",
            address: ""
        }, t);
        wx.openLocation(e);
    }
});