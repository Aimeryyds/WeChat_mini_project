function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../../../../wxParse/wxParse.js"), s = (require("../../../../../WxEmojiView/WxEmojiView.js"), 
require("../../../../../utils/server")), i = wx.getStorageSync("utoken"), r = 1, o = [], n = [], l = [];

Page({
    data: {
        isfollow: !1,
        scroll_top: 0,
        goTop_show: !1,
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1
    },
    onLoad: function(u) {
        var d;
        l = [], i = wx.getStorageSync("utoken");
        var c = this;
        a.emojisInit("[]", "/WxEmojiView/emojis/", (d = {
            "00": "00.gif",
            "01": "01.gif",
            "02": "02.gif",
            "03": "03.gif",
            "04": "04.gif",
            "05": "05.gif",
            "06": "06.gif",
            "07": "07.gif",
            "08": "08.gif",
            "09": "09.gif"
        }, t(d, "09", "09.gif"), t(d, "10", "10.gif"), t(d, "11", "11.gif"), t(d, "12", "12.gif"), 
        t(d, "13", "13.gif"), t(d, "14", "14.gif"), t(d, "15", "15.gif"), t(d, "16", "16.gif"), 
        t(d, "17", "17.gif"), t(d, "18", "18.gif"), t(d, "19", "19.gif"), d)), e = u.id, 
        r = 1, s.sendRequest({
            url: "?r=wxapp.sns.board",
            data: {
                id: e,
                utoken: i
            },
            method: "GET",
            success: function(t) {
                c.setData({
                    data: t.data.result,
                    isfollow: t.data.result.isfollow,
                    followcount: t.data.result.followcount
                });
            }
        }), s.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: e,
                utoken: i,
                page: r
            },
            method: "GET",
            success: function(t) {
                for (var e in t.data.result.list) {
                    var s = t.data.result.list[e].images;
                    o.push(s), n.push(s.length), e = t.data.result.list[e].content, l.push(e);
                }
                for (var i = 0; i < l.length; i++) a.wxParse("reply" + i, "html", l[i], c), i === l.length - 1 && a.wxParseTemArray("replyTemArray", "reply", l.length, c);
                c.setData({
                    list: t.data.result.list,
                    imageUrl: o,
                    imageLength: n
                });
            }
        });
    },
    onShow: function() {
        var t = this;
        wx.getStorageSync("bid") && (r = 1, l = [], t.setData({
            refresh: !1
        }), s.sendRequest({
            url: "?r=wxapp.sns.board",
            data: {
                id: e,
                utoken: i
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    data: e.data.result,
                    isfollow: e.data.result.isfollow,
                    followcount: e.data.result.followcount
                });
            }
        }), s.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: e,
                utoken: i,
                page: r
            },
            method: "GET",
            success: function(e) {
                for (var s in e.data.result.list) s = e.data.result.list[s].content, l.push(s);
                for (var i = 0; i < l.length; i++) a.wxParse("reply" + i, "html", l[i], t), i === l.length - 1 && a.wxParseTemArray("replyTemArray", "reply", l.length, t);
                t.setData({
                    list: e.data.result.list
                });
            }
        }), wx.removeStorageSync("bid"));
    },
    onPullDownRefresh: function() {
        l = [], s.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: e,
                utoken: i
            },
            method: "GET",
            success: function(t) {
                that.setData({
                    list: t.data.result.list
                });
            }
        });
    },
    follow: function() {
        var t = this;
        s.sendRequest({
            url: "?r=wxapp.sns.board.follow",
            data: {
                bid: e,
                utoken: i
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    isfollow: e.data.result.isfollow
                }), 1 == t.data.isfollow ? t.setData({
                    followcount: 1 + parseInt(t.data.followcount)
                }) : 0 == t.data.followcount ? t.setData({
                    followcount: 0
                }) : t.setData({
                    followcount: t.data.followcount - 1
                });
            }
        });
    },
    toTopic: function(t) {
        wx.navigateTo({
            url: "../../topic/index?pid=" + t.currentTarget.dataset.pid + "&bid=" + t.currentTarget.dataset.bid
        });
    },
    essencearea: function(t) {
        wx.navigateTo({
            url: "../Essencearea/index?bid=" + t.currentTarget.dataset.bid
        });
    },
    relatedsections: function(t) {
        wx.navigateTo({
            url: "../Relatedsections/index?id=" + t.currentTarget.dataset.id
        });
    },
    complaints: function(t) {
        wx.navigateTo({
            url: "../../complaints/index?id=" + t.currentTarget.dataset.id
        });
    },
    todetail: function(t) {
        wx.navigateTo({
            url: "../../topic/index?id=" + t.currentTarget.dataset.id
        });
    },
    to_post: function(t) {
        wx.navigateTo({
            url: "../../p_topic/index?bid=" + t.currentTarget.dataset.id
        });
    },
    to_index: function(t) {
        wx.reLaunch({
            url: "../../../../../pages/index/index"
        });
    },
    onReachBottom: function(t) {
        var a = this;
        a.data.refresh || (a.setData({
            refresh: !0
        }), o = [], n = [], r += 1, s.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: e,
                utoken: i,
                page: r
            },
            method: "GET",
            success: function(t) {
                var e, s = [];
                for (var i in a.data.list) e = a.data.list[i].images, o.push(e), n.push(e.length), 
                s.push(a.data.list[i]);
                if ("" == t.data.result.list) r -= 1; else {
                    for (var l in t.data.result.list) e = t.data.result.list[l].images, o.push(e), n.push(e.length), 
                    s.push(t.data.result.list[l]);
                    a.setData({
                        refresh: !1
                    });
                }
                a.setData({
                    list: s,
                    imageUrl: o,
                    imageLength: n
                });
            }
        }));
    },
    onShareAppMessage: function() {
        var t = "/pages/community/list/index/index?id=" + e;
        return {
            title: this.data.data.board.title,
            path: t
        };
    }
});