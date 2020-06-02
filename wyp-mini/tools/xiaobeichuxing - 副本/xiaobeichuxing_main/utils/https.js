function e() {
    return wx.getStorageSync("token");
}

function t(e) {
    wx.login({
        success: function(t) {
            t.code ? o("V2.0/UserLogin/UserOtherLogin", {
                code: t.code,
                client_type: 3
            }, function(t, o) {
                0 == o.data.code ? (wx.setStorageSync("uid", o.data.data.uid), wx.setStorageSync("vid", o.data.data.vid), 
                wx.setStorageSync("account", o.data.data.account), wx.setStorageSync("token", o.data.data.token), 
                wx.setStorageSync("ip", o.data.data.ip), wx.setStorageSync("port", o.data.data.port), 
                wx.setStorageSync("depositstate", o.data.data.deposit), wx.setStorageSync("certify", o.data.data.certify), 
                wx.setStorageSync("hasridingcard", o.data.data.hasridingcard), wx.setStorageSync("zhimacreditstate", o.data.data.zhimacreditstate), 
                wx.setStorageSync("wxpayscorestate", o.data.data.wxpayscorestate), e(!0)) : e(!1);
            }) : wx.showToast({
                icon: "none",
                title: "登录失败！" + t.errMsg,
                mask: !0
            });
        }
    });
}

function o(o, n, i, r, s) {
    wx.request({
        url: c + o,
        data: n,
        method: "post",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
            token: e(),
            version: 1.1
        },
        success: function(e) {
            if (-2 != e.data.code) i(null, e); else {
                if ("MenberUser/UserInfo" == o) {
                    if (a.globalData.exitlogin) return;
                    return void t(function(t) {
                        console.log(t), t ? (a.globalData.exitlogin = !1, s(!0)) : wx.showModal({
                            title: "提示",
                            content: e.data.retmsg,
                            success: function(e) {
                                e.confirm ? wx.reLaunch({
                                    url: "/pages/login/phoneLogin"
                                }) : e.cancel;
                            }
                        });
                    });
                }
                wx.showModal({
                    title: "提示",
                    content: e.data.retmsg,
                    success: function(e) {
                        e.confirm ? wx.reLaunch({
                            url: "/pages/login/phoneLogin"
                        }) : e.cancel;
                    }
                });
            }
        },
        fail: function(e) {
            console.log(e);
        }
    });
}

var a = getApp(), n = (require("tripledes.js"), require("vehsocket.js")), i = "https://api.xiaobeibike.com/api/", c = "https://api.xiaobeibike.com/app/";

module.exports = {
    req: function(o, n, c, r, s) {
        wx.request({
            url: i + o,
            data: n,
            method: "post",
            header: {
                "Content-Type": "application/json",
                token: e(),
                version: 1.1
            },
            success: function(e) {
                if (-2 == e.data.code) {
                    if (a.globalData.exitlogin) return;
                    t(function(t) {
                        console.log(t), t ? (a.globalData.exitlogin = !1, "Veh/CalculateCost" == o && s(!0)) : wx.showModal({
                            title: "提示",
                            content: e.data.retmsg,
                            success: function(e) {
                                e.confirm ? wx.reLaunch({
                                    url: "/pages/login/phoneLogin"
                                }) : e.cancel;
                            }
                        });
                    });
                }
                c(null, e);
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    req11: o,
    arrive_timer_format: function(e) {
        var t, o;
        return e > -1 && (t = Math.floor(e / 60) % 60 + "分", (o = e % 60) < 10 && (t += "0"), 
        t += o + "秒"), t;
    },
    wsCmd: function(e, t, o, a, i) {
        var c = {
            ip: wx.getStorageSync("ip"),
            port: wx.getStorageSync("port"),
            uid: wx.getStorageSync("uid")
        };
        console.log("连接信息" + JSON.stringify(c));
        var r = n.mysocket(c, function(e) {
            console.log("开锁" + e), a(e);
        }, function(e) {
            console.log("关锁" + e), i(e);
        });
        setTimeout(function() {
            "unlock" == e ? (console.log("发起开锁: " + t), r.send(r.sendParm("APPE501", t, o))) : "lock" == e && (console.log("发起关锁: " + t), 
            r.send(r.sendParm("APPE301", t, o)));
        }, 2e3);
    },
    onShareAppMessage: function() {
        return {
            title: "好友邀请你一起骑小呗",
            path: "/pages/share/index"
        };
    },
    imgurl: "/Content/images/",
    rootDocment: i,
    getTimeLeft: function(e) {
        var t = new Date(e).getTime() - new Date().getTime(), o = (parseInt(t / 864e5), 
        parseInt(t % 864e5 / 36e5), parseInt(t % 36e5 / 6e4));
        o < 10 && (o = "0" + o);
        var a = parseInt(t % 6e4 / 1e3);
        return a < 10 && (a = "0" + a), o + ":" + a;
    },
    imgurlOne: "https://res.xiaobeibike.com"
};