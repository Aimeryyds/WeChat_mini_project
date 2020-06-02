var t = require("../../../@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDataList = function(t, i, c, r) {
    var d = function(t) {
        return c && c(t);
    }, u = function() {
        t.data.isNoMore || t.setData({
            isNoMore: {}
        }), r && (t.data.dataCache = {});
        var c = t.data.dataCache[i.cur_local_feed];
        if (t.data.dataCache[i.cur_local_feed] || (t.data.dataCache[i.cur_local_feed] = []), 
        i.forward === a.forward.first && t.data.dataCache[i.cur_local_feed].length && t.data.dataCache[i.cur_local_feed].length <= 60) return n(t, ""), 
        t.setData({
            showTabLoading: !1,
            dataList: c
        }), void d(!0);
        if (!t.isFetching) {
            if (!i.cachedCount) {
                var u = {};
                u[i.cur_local_feed] = !1, t.setData({
                    isNoMore: u,
                    showTabLoading: !0
                });
            }
            i.forward === a.forward.pullDown && t.setData({
                showTabLoading: !1
            }), t.isFetching = !0;
            var l = {};
            -1 != [ "worthEat", "worthGo" ].indexOf(i.cur_local_feed) && (l["Content-Type"] = "application/json"), 
            e.fetch(a.api[i.cur_local_feed], i, i, "POST", l).then(function(c) {
                wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), t.isFetching = !1, n(t, "");
                var r = function(t) {
                    var e = [];
                    return t.map(function(t) {
                        ("8" != t.showType && "11" != t.showType || "11" == t.showType && -1 != a.ALLOW_ACT_TYPE.indexOf(t.act_type + "")) && e.push(t);
                    }), e;
                }(e.formatFeedList(c.data.newslist || c.data.data) || []);
                if (200 === c.statusCode && r && r.length) {
                    var u = {};
                    if (o.last_time = c.data.timestamp, i.cachedCount) {
                        var l = t.data.dataList.length;
                        r.map(function(t) {
                            u["dataList[".concat(l, "]")] = s([ t ])[0], l += 1;
                        });
                    } else s(r);
                    if (i.cachedCount) {
                        var f = t.data.dataCache[i.cur_local_feed].concat(r);
                        t.data.dataCache[i.cur_local_feed] = f, t.setData(u);
                    } else t.data.dataCache[i.cur_local_feed] = Object.assign([], r), t.setData({
                        dataList: r
                    });
                    if (!i.cachedCount && (t.setData({
                        showTabLoading: !1
                    }), 0 == r.length)) {
                        var h = {};
                        h[i.cur_local_feed] = !0, t.setData({
                            isNoMore: h
                        });
                    }
                    t.data.tabIsFixed && !i.cachedCount && wx.pageScrollTo({
                        scrollTop: t.data.tabRect.top
                    }), c.data.userInfo && (o.comPostInfo.openid = c.data.userInfo.openid);
                    var p = wx.createSelectorQuery();
                    p.select("#".concat(i.cur_local_feed, "-t-pile")).boundingClientRect(), p.select("#".concat(i.cur_local_feed, "-b-pile")).boundingClientRect(), 
                    p.exec(function(a) {
                        if (a[0] && a[1]) {
                            var e = a[1].top - a[0].top;
                            t.setData({
                                swiperHeight: e
                            });
                        }
                    }), d(!0);
                } else {
                    var g = {};
                    if (g[i.cur_local_feed] = !0, t.setData({
                        isNoMore: g
                    }), i.cachedCount || t.setData({
                        showTabLoading: !1,
                        dataList: []
                    }), i.forward === a.forward.pullUp || i.forward === a.forward.pullDown) {
                        if (t.hasToasted && t.hasToasted[i.cur_local_feed]) return;
                        wx.showToast({
                            title: "看累了，休息下",
                            icon: "success",
                            duration: 2e3
                        }), t.hasToasted && (t.hasToasted[i.cur_local_feed] = !0);
                    } else i.forward === a.forward.first && (404 === c.statusCode || 500 === c.statusCode ? wx.showToast({
                        title: "数据拉取出错",
                        icon: "none",
                        duration: 2e3
                    }) : -1 == c.data.code && c.data.info && wx.showToast({
                        title: "暂无数据",
                        icon: "none",
                        duration: 2e3
                    }));
                    d(!1);
                }
            }, function(a) {
                wx.stopPullDownRefresh(), n(t, "");
                var e = {};
                e[i.cur_local_feed] = !0, t.setData({
                    isNoMore: e,
                    showTabLoading: !1
                }), i.cachedCount || t.setData({
                    dataList: []
                }), t.isFetching = !1, d(!1);
            });
        }
    };
    o.comPostInfo.openid ? u() : wx.login({
        success: function(t) {
            i.code = t.code, u();
        }
    });
}, exports.getUrbanMsg = function(t, o) {
    e.fetch(a.api.getUrbanMsg, o, o, "GET").then(function(a) {
        if (200 === a.statusCode) if (0 === (a = a.data).code) {
            var o = a.data;
            "string" == typeof o ? o = {} : o.create_at = e.formatDiffTime(e.parseDate(o.create_at, "yyyy-MM-dd hh:mm:ss").getTime() / 1e3), 
            t.setData({
                urbanMsg: o
            });
        } else wx.showToast({
            icon: "none",
            title: a.msg
        });
    });
}, exports.sendUrbanMsg = function t(o, n) {
    return new Promise(function(s, i) {
        e.postJson(a.api.sendUrbanMsg, null, n).then(function(a) {
            0 === a.data.code ? (wx.showToast({
                title: "已发送"
            }), o.selectComponent("#lcCommentDialog").clearContentStorage("lc-page-sayhi"), 
            s()) : 1000002 === a.data.code ? e.login().then(function() {
                t(o, n);
            }) : (wx.showToast({
                icon: "none",
                title: a.data.msg
            }), i());
        });
    });
}, exports.getGreetList = function(t, o) {
    e.fetch(a.api.getGreetList, o, o, "GET").then(function(a) {
        if (200 === a.statusCode) if (0 === a.data.code) {
            var e = t.data.greetListCurPage;
            a.data.data && a.data.data.length > 0 && (e = a.data.data[a.data.data.length - 1].id), 
            t.setData({
                emoStore: a.data.data || [],
                isFirst: !1,
                greetListCurPage: e
            });
        } else wx.showToast({
            icon: "none",
            title: a.data.msg
        });
    });
}, exports.sendGreet = function t(o, n) {
    return new Promise(function(s, i) {
        e.postJson(a.api.sendGreet, null, n).then(function(a) {
            0 === a.data.code ? a.data.data && s(a.data.data.id) : 1000002 === a.data.code ? e.login().then(function() {
                t(o, n);
            }) : wx.showToast({
                icon: "none",
                title: a.data.msg
            });
        });
    });
}, exports.getTabsCfg = function(t, o) {
    return new Promise(function(t, n) {
        e.fetch(a.api.getTabsCfg, o, null, "GET").then(function(a) {
            a = a.data, t(a);
        }, function(t) {
            n(t);
        });
    });
}, exports.getMyActList = function(t, o) {
    t.page = t.page || 0, o.first && (t.page = 0);
    return new Promise(function(n, s) {
        o = Object.assign({
            size: 10,
            page: t.page || 0
        }, o), e.fetch(a.api.getMyActList, o, null, "GET").then(function(e) {
            (e = e.data).data && e.data.data.map(function(t) {
                return t.status_word = a.ACT_STATUS_WORD[t.status], t.act_expired && (t.status_word = "活动已结束"), 
                t;
            }), e.code || t.page++, n(e);
        }, function(t) {
            s(t);
        });
    });
};

var a = t(require("../const")), e = t(require("../util")), o = getApp().global;

function n(t, a) {
    t.setData({
        showType: a
    });
}

function s(t) {
    return t.forEach(function(t) {
        var a = {}, o = e.formatTimeText5(t.ts_pub_time || new Date(t.pub_time).getTime() / 1e3);
        for (var n in t) {
            var s = t[n];
            a[n] = s, a.publishTime = o;
        }
        t.publishTime = o, t.needItem = a;
    }), t;
}