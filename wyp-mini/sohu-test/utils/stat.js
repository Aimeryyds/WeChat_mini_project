var a = getApp();

module.exports = {
    h5: function(o) {
        if (o) {
            var e = "https://pic.k.sohu.com/img8/wb/tj/h5.gif", l = {
                c: a.globalData.usrKey.openid,
                v: a.globalData.version,
                u: a.globalData.u,
                p: "ios" === a.globalData.systemInfo.platform ? "ios" : "a",
                channelid: a.globalData.reqParam.channelId
            };
            o = Object.assign(l, o);
            var t = [];
            for (var n in o) t.push(n + "=" + encodeURIComponent(o[n]));
            e = e + "?" + t.join("&"), console.log(t), console.log(e), wx.request({
                url: e
            });
        }
    },
    a: function(o) {
        if (o) {
            var e = "https://pic.k.sohu.com/img8/wb/tj/a.gif", l = {
                c: a.globalData.usrKey.openid,
                net: a.globalData.nettype,
                p1: a.globalData.reqParam.p1,
                pid: a.globalData.reqParam.pid,
                gbcode: "110000",
                p: "ios" === a.globalData.systemInfo.platform ? "ios" : "a",
                v: a.globalData.version,
                h: a.globalData.h,
                u: a.globalData.u,
                _act: "pv",
                channelid: a.globalData.reqParam.channelId
            };
            o = Object.assign(l, o);
            var t = [];
            for (var n in o) t.push(n + "=" + encodeURIComponent(o[n]));
            e = e + "?" + t.join("&"), console.log(t), console.log(e), wx.request({
                url: e
            });
        }
    },
    videoPlayClk: function(o) {
        if (o) {
            var e = "https://pic.k.sohu.com/img8/wb/tj/a.gif", l = {
                c: a.globalData.usrKey.openid,
                cid: a.globalData.usrKey.openid,
                net: a.globalData.nettype,
                p1: a.globalData.reqParam.p1,
                pid: a.globalData.reqParam.pid,
                gbcode: "110000",
                u: a.globalData.u,
                _act: "vtab_clk_videoplay",
                channelid: a.globalData.reqParam.channelId
            };
            o = Object.assign(l, o);
            var t = [];
            for (var n in o) t.push(n + "=" + encodeURIComponent(o[n]));
            e = e + "?" + t.join("&"), console.log(t), console.log(e), wx.request({
                url: e
            });
        }
    },
    videoExposure: function(o) {
        if (o) {
            var e = "https://pic.k.sohu.com/img8/wb/tj/a.gif", l = {
                c: a.globalData.usrKey.openid,
                cid: a.globalData.usrKey.openid,
                net: a.globalData.nettype,
                p1: a.globalData.reqParam.p1,
                pid: a.globalData.reqParam.pid,
                gbcode: "110000",
                u: a.globalData.u,
                _act: "vtab_page_video",
                channelid: a.globalData.reqParam.channelId
            };
            o = Object.assign(l, o);
            var t = [];
            for (var n in o) t.push(n + "=" + encodeURIComponent(o[n]));
            e = e + "?" + t.join("&"), console.log(t), console.log(e), wx.request({
                url: e
            });
        }
    },
    videoListExposure: function(o) {
        if (o) {
            var e = {
                c: a.globalData.usrKey.openid,
                net: a.globalData.nettype,
                v: a.globalData.version,
                gbcode: "110000",
                u: a.globalData.u,
                h: a.globalData.reqParam.channelId,
                t: new Date().getTime()
            }, l = [];
            for (var t in e) l.push(t + "=" + e[t]);
            var n = l.join("&"), r = [];
            for (var i in o) r.push(i + "-" + o[i]);
            var s = "@show_8_" + a.globalData.reqParam.channelId + "_exps22__" + r.join(",");
            wx.request({
                url: "https://api.k.sohu.com/news/exposure.go",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    act: "exps",
                    baseinfo: n,
                    value: s
                }
            });
        }
    }
};