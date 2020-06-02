var t, e, a = require("../../../../wxParse/wxParse.js"), s = [], r = [], o = require("../../../../utils/server"), n = wx.getStorageSync("utoken"), d = 1, i = {};

Page({
    data: {
        isgood: 0,
        showImage: !1,
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        currIndex: 1
    },
    onLoad: function(d) {
        s = [], r = [], n = wx.getStorageSync("utoken"), console.log(d);
        var u = this;
        d.pid && u.setData({
            xpid: d.pid
        }), d.bid && u.setData({
            xbid: d.bid
        }), e = u.data.xpid, o.sendRequest({
            url: "?r=wxapp.sns.post",
            data: {
                id: u.data.xpid,
                utoken: n
            },
            method: "GET",
            success: function(d) {
                console.log(d.data.result.post.bid), u.setData({
                    data: d.data.result
                }), "1" == d.data.result.isgood ? u.setData({
                    check: 1
                }) : u.setData({
                    check: 0
                }), u.setData({
                    isgood: parseInt(d.data.result.isgood),
                    xbid: d.data.result.post.bid
                }), t = d.data.result.post.bid, a.wxParse("article", "html", u.data.data.post.content, u, 5);
                var l = new Date(1e3 * parseFloat(u.data.data.post.replytime)), g = l.getFullYear() + "-" + (l.getMonth() + 1 > 10 ? l.getMonth() + 1 : "0" + (l.getMonth() + 1)) + "-" + (l.getDate() > 10 ? l.getDate() : "0" + l.getDate()) + " " + (l.getHours() > 10 ? l.getHours() : "0" + l.getHours()) + ":" + (l.getMinutes() > 10 ? l.getMinutes() : "0" + l.getMinutes()) + ":" + (l.getSeconds() > 10 ? l.getSeconds() : "0" + l.getSeconds());
                u.setData({
                    times: g
                }), o.sendRequest({
                    url: "?r=wxapp.sns.post.getlist",
                    data: {
                        bid: t,
                        pid: e,
                        utoken: n
                    },
                    method: "GET",
                    success: function(t) {
                        for (var e in t.data.result.list) i[e] = t.data.result.list[e].isgood;
                        if (u.setData({
                            pin: i
                        }), "" != t.data.result.list) {
                            u.setData({
                                comment: t.data.result.list
                            });
                            for (var o in u.data.comment) {
                                r.push(t.data.result.list[o].parent.content), o = t.data.result.list[o].content, 
                                s.push(o);
                            }
                            for (var n = 0; n < s.length; n++) a.wxParse("reply" + n, "html", s[n], u), n === s.length - 1 && a.wxParseTemArray("replyTemArray", "reply", s.length, u);
                            for (var d = 0; d < r.length; d++) a.wxParse("subArr" + d, "html", r[d], u), d === r.length - 1 && a.wxParseTemArray("subtempArr", "subArr", r.length, u);
                        }
                    }
                });
            }
        });
    },
    bottom: function() {
        var a = this;
        a.data.refresh || (s = [], r = [], a.setData({
            refresh: !0
        }), d += 1, o.sendRequest({
            url: "?r=wxapp.sns.post.getlist",
            data: {
                bid: t,
                pid: e,
                page: d,
                utoken: n
            },
            method: "GET",
            success: function(t) {
                console.log(t);
                var e = [];
                for (var s in a.data.comment) e.push(a.data.comment[s]);
                if ("" == t.data.result.list) d -= 1, a.setData({
                    refresh: !0
                }); else {
                    for (var r in t.data.result.list) i[r] = t.data.result.list[r].isgood;
                    a.setData({
                        pin: i
                    });
                    for (var o in t.data.result.list) e.push(t.data.result.list[o]);
                    console.log(e), a.setData({
                        comment: e
                    }), a.setData({
                        refresh: !1
                    });
                }
            }
        }));
    },
    onPullDownRefresh: function() {
        s = [], r = [], o.sendRequest({
            url: "?r=wxapp.sns.post.getlist",
            data: {
                bid: t,
                pid: e,
                utoken: n
            },
            method: "GET",
            success: function(t) {
                for (var e in t.data.result.list) i[e] = t.data.result.list[e].isgood;
                if (that.setData({
                    pin: i
                }), "" != t.data.result.list) {
                    that.setData({
                        comment: t.data.result.list
                    });
                    for (var o in that.data.comment) {
                        r.push(t.data.result.list[o].parent.content), o = t.data.result.list[o].content, 
                        s.push(o);
                    }
                    console.log(r);
                    for (var n = 0; n < s.length; n++) a.wxParse("reply" + n, "html", s[n], that), n === s.length - 1 && a.wxParseTemArray("replyTemArray", "reply", s.length, that);
                    for (var d = 0; d < r.length; d++) a.wxParse("subArr" + d, "html", r[d], that), 
                    d === r.length - 1 && a.wxParseTemArray("subtempArr", "subArr", r.length, that);
                }
            }
        });
    },
    onShow: function() {
        console.log(this.data.pid), s = [], r = [];
        var t = this;
        t.setData({
            refresh: !1
        }), o.sendRequest({
            url: "?r=wxapp.sns.post",
            data: {
                id: t.data.xpid,
                utoken: n
            },
            method: "GET",
            success: function(d) {
                t.setData({
                    data: d.data.result
                }), "" != t.data.data.post.images_arr && t.setData({
                    imgUrls: t.data.data.post.images_arr,
                    imgLength: t.data.data.post.images_arr.length
                }), "1" == d.data.result.isgood ? t.setData({
                    check: 1
                }) : t.setData({
                    check: 0
                }), t.setData({
                    isgood: parseInt(d.data.result.isgood),
                    xbid: d.data.result.post.bid
                });
                var u = d.data.result.post.bid;
                a.wxParse("article", "html", t.data.data.post.content, t, 5);
                var l = new Date(1e3 * parseFloat(t.data.data.post.replytime)), g = l.getFullYear() + "-" + (l.getMonth() + 1 > 10 ? l.getMonth() + 1 : "0" + (l.getMonth() + 1)) + "-" + (l.getDate() > 10 ? l.getDate() : "0" + l.getDate()) + " " + (l.getHours() > 10 ? l.getHours() : "0" + l.getHours()) + ":" + (l.getMinutes() > 10 ? l.getMinutes() : "0" + l.getMinutes()) + ":" + (l.getSeconds() > 10 ? l.getSeconds() : "0" + l.getSeconds());
                t.setData({
                    times: g
                }), o.sendRequest({
                    url: "?r=wxapp.sns.post.getlist",
                    data: {
                        bid: u,
                        pid: e,
                        utoken: n
                    },
                    method: "GET",
                    success: function(e) {
                        for (var o in e.data.result.list) i[o] = e.data.result.list[o].isgood;
                        if (t.setData({
                            pin: i
                        }), "" != e.data.result.list) {
                            t.setData({
                                comment: e.data.result.list
                            });
                            for (var n in t.data.comment) {
                                r.push(e.data.result.list[n].parent.content), n = e.data.result.list[n].content, 
                                s.push(n);
                            }
                            console.log(r);
                            for (var d = 0; d < s.length; d++) a.wxParse("reply" + d, "html", s[d], t), d === s.length - 1 && a.wxParseTemArray("replyTemArray", "reply", s.length, t);
                            for (var u = 0; u < r.length; u++) a.wxParse("subArr" + u, "html", r[u], t), u === r.length - 1 && a.wxParseTemArray("subtempArr", "subArr", r.length, t);
                        }
                    }
                });
            }
        });
    },
    currChange: function(t) {
        this.setData({
            currImage: t.detail.current,
            currIndex: t.detail.current + 1
        });
    },
    joinImage: function() {
        var t = this;
        t.data.showImage || t.setData({
            showImage: !0
        });
    },
    showImages: function() {
        this.setData({
            showImage: !1
        });
    },
    toPerson: function(t) {
        wx.navigateTo({
            url: "../person/center?pid=" + t.currentTarget.dataset.pid + "&bid=" + t.currentTarget.dataset.bid
        });
    },
    to_topic: function(t) {
        wx.navigateTo({
            url: "../p_topic/index?pid=" + t.currentTarget.dataset.pid + "&bid=" + t.currentTarget.dataset.bid + "&rid=" + t.currentTarget.dataset.rid
        });
    },
    complaints: function(t) {
        wx.navigateTo({
            url: "../complaints/index?id=" + t.currentTarget.dataset.id
        });
    },
    X: function(t) {
        wx.navigateTo({
            url: "../p_topic/index?pid=" + t.currentTarget.dataset.pid + "&bid=" + t.currentTarget.dataset.bid
        });
    },
    zan: function(t) {
        var e = this;
        o.sendRequest({
            url: "?r=sns.post.like",
            data: {
                bid: t.currentTarget.dataset.bid,
                pid: t.currentTarget.dataset.pid,
                isgood: e.data.isgood,
                utoken: n
            },
            method: "GET",
            success: function(t) {
                "1" == t.data.result.isgood ? e.setData({
                    check: 1,
                    isgood: parseInt(e.data.isgood) + 1
                }) : 0 != e.data.isgood ? e.setData({
                    check: 0,
                    isgood: parseInt(e.data.isgood) - 1
                }) : e.setData({
                    check: 0,
                    isgood: parseInt(e.data.isgood)
                });
            }
        });
    },
    isGood: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.isgood, s = this;
        o.sendRequest({
            url: "?r=sns.post.like",
            data: {
                bid: t.currentTarget.dataset.bid,
                pid: t.currentTarget.dataset.pid,
                isgood: t.currentTarget.dataset.isgood,
                utoken: n
            },
            method: "GET",
            success: function(t) {
                if ("1" == t.data.result.isgood) {
                    r = parseInt(a) + 1;
                    i[e] = r;
                } else {
                    if (0 != a) r = parseInt(a) - 1; else var r = parseInt(a);
                    i[e] = r;
                }
                s.setData({
                    pin: i
                });
            }
        });
    },
    onShareAppMessage: function() {
        var t = this, e = "/pages/community/topic/index?pid=" + t.data.xpid;
        return {
            title: t.data.data.post.title,
            path: e
        };
    }
});