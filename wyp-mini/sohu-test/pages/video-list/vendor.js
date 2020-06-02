var e = getApp(), t = require("../../lib/es6-promise").Promise, a = {
    requestUrl: e.globalData.baseUrl + "api/videotab/getVideoListWechat.go",
    getQrCodeDataUrl: e.globalData.baseUrl + "api/applet/share/getShareContent.go"
}, r = null, n = {
    scroll2Top: function(e) {
        setTimeout(function() {
            return wx.pageScrollTo({
                scrollTop: 0
            });
        }, e);
    },
    updateNews: function(e, t, a) {
        if (!(e.length <= 0)) {
            var n = r;
            if (t) {
                n.setData({
                    "refreshTips.count": a || 0
                });
                var o = e.concat(t);
                n.setData({
                    videosList: o
                });
            } else n.setData({
                videosList: e
            });
        }
    },
    checkNewsType: function(e) {
        return {
            3: {
                name: "图文模板",
                templateTypes: {
                    1: "图文",
                    42: "大图"
                }
            },
            4: {
                name: "组图模板",
                templateTypes: {
                    2: "组图"
                }
            },
            64: {
                name: "流内视频模板",
                templateTypes: {
                    37: "视频",
                    38: "视频"
                }
            }
        }[e];
    },
    fixTimeSeconds: function(e) {
        if (!e) return 0;
        for (var t = function(e) {
            return 1 == (e + "").length ? "0" + e : e;
        }, a = e, r = "", n = 0; a > 60; ) r += t(Math.floor(a / 60)) + ":", a %= 60, n++;
        return 0 == n ? "00:" + r + t(a) : r + t(a);
    }
}, o = {
    buildVideoListParams: function(t) {
        var a = r;
        return {
            openId: e.globalData.usrKey.openid || "",
            u: e.globalData.u,
            channelId: 30001,
            carrier: "",
            net: e.globalData.nettype,
            lc: a.data.curPage.toString(),
            rc: 1,
            recomtype: t,
            mainFocalId: 0,
            focusPosition: 1,
            rr: 1
        };
    }
}, s = {
    getQrCodeData: function(e) {
        return new t(function(t, r) {
            wx.request({
                url: a.getQrCodeDataUrl,
                data: {
                    shareId: e
                },
                success: function(e) {
                    if (console.log(e), 3114e4 !== (e = e.data).statusCode) return r(new Error(e.statusMsg));
                    t(e.data);
                },
                fail: function(e) {
                    r(new Error("获取正文信息出错, 请检查网络"));
                }
            });
        });
    },
    getVideoListData: function(e, t, n) {
        var o = r;
        wx.request({
            url: a.requestUrl,
            data: e,
            method: "GET",
            success: function(e) {
                t(e);
                var a = o.data.curPage + 1;
                o.setData({
                    curPage: a
                });
            },
            fail: function(e) {
                n(e);
            },
            complete: function() {
                setTimeout(function() {
                    o.setData({
                        "refreshTips.refreshResultHidden": !0
                    });
                }, 2e3);
            }
        });
    }
};

module.exports = {
    init: function(e) {
        r = e;
    },
    util: n,
    param: o,
    req: s
};