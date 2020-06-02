var t = require("../../../../../wxParse/wxParse.js"), e = [], a = require("../../../../../utils/server"), s = wx.getStorageSync("utoken"), r = 1;

Page({
    data: {
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1
    },
    onLoad: function(r) {
        s = wx.getStorageSync("utoken");
        var i = this;
        i.setData({
            bid: r.bid
        }), a.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: i.data.bid,
                isbest: 1,
                utoken: s
            },
            method: "GET",
            success: function(a) {
                if (console.log(a.data.result.list), "" != a.data.result.list) {
                    for (var s in a.data.result.list) s = a.data.result.list[s].content, e.push(s);
                    for (var r = 0; r < e.length; r++) t.wxParse("reply" + r, "html", e[r], i), r === e.length - 1 && t.wxParseTemArray("replyTemArray", "reply", e.length, i);
                    i.setData({
                        list: a.data.result.list
                    });
                }
            }
        });
    },
    toTopic: function(t) {
        wx.navigateTo({
            url: "../../topic/index?pid=" + t.currentTarget.dataset.pid + "&bid=" + t.currentTarget.dataset.bid
        });
    },
    toPerson: function(t) {
        wx.navigateTo({
            url: "../../person/center?id=" + t.currentTarget.dataset.id
        });
    },
    bottom: function() {
        var t = this;
        t.data.refresh || (t.setData({
            refresh: !0
        }), r += 1, a.sendRequest({
            url: "?r=wxapp.sns.board.getlist",
            data: {
                bid: t.data.bid,
                isbest: 1,
                page: r,
                utoken: s
            },
            method: "GET",
            success: function(e) {
                console.log(e.data.result.list);
                var a = [];
                for (var s in t.data.list) a.push(t.data.list[s]);
                if ("" == e.data.result.list) r -= 1; else {
                    for (var i in e.data.result.list) a.push(e.data.result.list[i]);
                    t.setData({
                        refresh: !1
                    });
                }
                t.setData({
                    list: a
                });
            }
        }));
    }
});