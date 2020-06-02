function t() {
    return wx.getStorageSync("token");
}

function e(t) {
    wx.login({
        success: function(e) {
            e.code ? o("V2.0/UserLogin/UserOtherLogin", {
                code: e.code,
                client_type: 3
            }, function(e, o) {
                0 == o.data.code ? (wx.setStorageSync("uid", o.data.data.uid), wx.setStorageSync("vid", o.data.data.vid), 
                wx.setStorageSync("account", o.data.data.account), wx.setStorageSync("token", o.data.data.token), 
                wx.setStorageSync("ip", o.data.data.ip), wx.setStorageSync("port", o.data.data.port), 
                wx.setStorageSync("depositstate", o.data.data.deposit), wx.setStorageSync("certify", o.data.data.certify), 
                wx.setStorageSync("hasridingcard", o.data.data.hasridingcard), wx.setStorageSync("zhimacreditstate", o.data.data.zhimacreditstate), 
                wx.setStorageSync("wxpayscorestate", o.data.data.wxpayscorestate), t(!0)) : t(!1);
            }) : wx.showToast({
                icon: "none",
                title: "登录失败！" + e.errMsg,
                mask: !0
            });
        }
    });
}

function o(o, n, c, i, s) {
    wx.request({
        url: r + o,
        data: n,
        method: "post",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
            token: t(),
            version: 1.1
        },
        success: function(t) {
            if (-2 != t.data.code) c(null, t); else {
                if ("MenberUser/UserInfo" == o) {
                    if (a.globalData.exitlogin) return;
                    return void e(function(e) {
                        console.log(e), e ? (a.globalData.exitlogin = !1, s(!0)) : wx.showModal({
                            title: "提示",
                            content: t.data.retmsg,
                            success: function(t) {
                                t.confirm ? wx.reLaunch({
                                    url: "/pages/login/phoneLogin"
                                }) : t.cancel;
                            }
                        });
                    });
                }
                wx.showModal({
                    title: "提示",
                    content: t.data.retmsg,
                    success: function(t) {
                        t.confirm ? wx.reLaunch({
                            url: "/pages/login/phoneLogin"
                        }) : t.cancel;
                    }
                });
            }
        },
        fail: function(t) {
            console.log(t);
        }
    });
}

var a = getApp(), n = (require("tripledes.js"), require("vehsocket.js")), c = "https://api.51gtdc.com/api/", r = "https://api.51gtdc.com/app/";

module.exports = {
    req: function(o, n, r, i, s) {
        wx.request({
            url: c + o,
            data: n,
            method: "post",
            header: {
                "Content-Type": "application/json",
                token: t(),
                version: 1.1
            },
            success: function(t) {
                if (-2 == t.data.code) {
                    if (a.globalData.exitlogin) return;
                    e(function(e) {
                        console.log(e), e ? (a.globalData.exitlogin = !1, "Veh/CalculateCost" == o && s(!0)) : wx.showModal({
                            title: "提示",
                            content: t.data.retmsg,
                            success: function(t) {
                                t.confirm ? wx.reLaunch({
                                    url: "/pages/login/phoneLogin"
                                }) : t.cancel;
                            }
                        });
                    });
                }
                r(null, t);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    req11: o,
    arrive_timer_format: function(t) {
        var e, o;
        return t > -1 && (e = Math.floor(t / 60) % 60 + "分", (o = t % 60) < 10 && (e += "0"), 
        e += o + "秒"), e;
    },
    wsCmd: function(t, e, o, a, c) {
        var r = {
            ip: wx.getStorageSync("ip"),
            port: wx.getStorageSync("port"),
            uid: wx.getStorageSync("uid")
        };
        console.log("连接信息" + JSON.stringify(r));
        var i = n.mysocket(r, function(t) {
            console.log("开锁" + t), a(t);
        }, function(t) {
            console.log("关锁" + t), c(t);
        });
        setTimeout(function() {
            "unlock" == t ? (console.log("发起开锁: " + e), i.send(i.sendParm("APPE501", e, o))) : "lock" == t && (console.log("发起关锁: " + e), 
            i.send(i.sendParm("APPE301", e, o)));
        }, 2e3);
    },
    onShareAppMessage: function() {
        return {
            title: "好友邀请你一起骑葛天",
            path: "/pages/share/index"
        };
    },
    imgurl: "/Content/images/",
    rootDocment: c,
    getTimeLeft: function(t) {
        var e = new Date(t).getTime() - new Date().getTime(), o = (parseInt(e / 864e5), 
        parseInt(e % 864e5 / 36e5), parseInt(e % 36e5 / 6e4));
        o < 10 && (o = "0" + o);
        var a = parseInt(e % 6e4 / 1e3);
        return a < 10 && (a = "0" + a), o + ":" + a;
    },
    imgurlOne: "https://res.51gtdc.com"
};