function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = require("../../lib/es6-promise").Promise, n = {
    requestUrl: t.globalData.baseUrl + "api/channel/v6/news.go?",
    getQrCodeDataUrl: t.globalData.baseUrl + "api/applet/share/getShareContent.go"
}, r = null, o = {
    scroll2Top: function(e) {
        setTimeout(function() {
            return wx.pageScrollTo({
                scrollTop: 0
            });
        }, e);
    },
    updateNewsDown: function(e, t) {
        if (!(e.length <= 0)) {
            var a = r, n = e.concat(t);
            a.setData({
                newsList: n
            });
        }
    },
    updateNewsUp: function(t, a) {
        if (!(t.length <= 0 || a.length <= 0)) for (var n = r, o = 0; o < a.length; o += 2) {
            var s = "newsList[" + (t.length + o) + "]", l = "newsList[" + (t.length + o + 1) + "]";
            if (o < a.length - 1) {
                var i;
                n.setData((i = {}, e(i, s, a[o]), e(i, l, a[o + 1]), i));
            } else n.setData(e({}, s, a[o]));
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
            },
            82: {
                name: "流内视频模板",
                templateTypes: {
                    37: "视频",
                    38: "视频"
                }
            }
        }[e];
    }
}, s = {
    buildNewsListParams: function(e, a, n) {
        var o = r;
        return {
            openId: t.globalData.usrKey.openid || "",
            cdma_lat: t.globalData.usrLoc.latitude || "",
            cdma_lng: t.globalData.usrLoc.longitude || "",
            accuracy: t.globalData.usrLoc.accuracy || "",
            gbcode: t.globalData.usrLoc.gbcode || "",
            page: o.data.curPage.toString(),
            u: t.globalData.u,
            p1: "",
            pid: -1,
            channelId: 1,
            num: n,
            imgTag: 1,
            showPic: 1,
            picScale: 5,
            rt: "json",
            net: t.globalData.nettype,
            from: "channel",
            apiVersion: 41,
            isMixStream: 0,
            t: new Date().getTime(),
            forceRefresh: 0,
            times: 1,
            action: e,
            mode: a,
            mainFocalId: 0,
            focusPosition: 1,
            rr: 1,
            version: t.globalData.version
        };
    }
}, l = {
    getQrCodeData: function(e) {
        return new a(function(t, a) {
            wx.request({
                url: n.getQrCodeDataUrl,
                data: {
                    shareId: e
                },
                success: function(e) {
                    if (console.log(e), 3114e4 !== (e = e.data).statusCode) return a(new Error(e.statusMsg));
                    t(e.data);
                },
                fail: function(e) {
                    a(new Error("获取正文信息出错, 请检查网络"));
                }
            });
        });
    },
    getNewsListData: function(e, t, a) {
        var o = r;
        wx.request({
            url: n.requestUrl,
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
                a(e);
            },
            complete: function() {
                setTimeout(function() {
                    o.setData({
                        tipspush: !0
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
    util: o,
    param: s,
    req: l
};