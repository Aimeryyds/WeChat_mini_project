var t = require("../../utils/server"), a = wx.getStorageSync("utoken"), e = "";

Page({
    data: {
        numid: 0,
        sub: 0,
        list: [],
        cateid: "",
        cateId: [],
        articleId: [],
        currarticleId: "",
        getcurrid: "",
        getid: 299
    },
    onLoad: function(a) {
        var e = this, i = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.article.list&utoken=" + i,
            method: "GET",
            success: function(a) {
                if (a.data.result && a.data.result[0]) {
                    for (var r = a.data.result, s = [], d = [], u = 0; u < r.length; u++) s.push(u), 
                    r[u].numid = s[u], d.push(r[u].id);
                    e.setData({
                        list: a.data.result,
                        cateId: d,
                        cateid: a.data.result[0].id
                    }), t.sendRequest({
                        url: "?r=wxapp.article.list.getlist&utoken=" + i + "&cateid=" + e.data.cateId[e.data.sub],
                        method: "GET",
                        success: function(t) {
                            for (var a = t.data.result, i = [], r = 0; r < a.length; r++) i.push(a[r].id);
                            e.setData({
                                allNews: t.data.result,
                                articleId: i
                            });
                        }
                    });
                }
            }
        });
    },
    onShow: function() {
        var e = this;
        "" != e.data.cateId && t.sendRequest({
            url: "?r=wxapp.article.list.getlist&utoken=" + a + "&cateid=" + e.data.cateId[e.data.sub],
            method: "GET",
            success: function(t) {
                for (var a = t.data.result, i = [], r = 0; r < a.length; r++) i.push(a[r].id);
                e.setData({
                    allNews: t.data.result,
                    articleId: i
                });
            }
        });
    },
    clickTitle: function(e) {
        var i = this, r = e.currentTarget.dataset.index, s = e.currentTarget.dataset.id;
        i.setData({
            sub: r,
            numid: r,
            getcurrid: s
        }), t.sendRequest({
            url: "?r=wxapp.article.list.getlist&cateid=" + i.data.getcurrid + "utoken=" + a,
            method: "GET",
            success: function(t) {
                for (var a = t.data.result, e = [], r = 0; r < a.length; r++) e.push(a[r].id);
                i.setData({
                    allNews: t.data.result,
                    articleId: e
                });
            }
        }), wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            wx.hideLoading();
        }, 1e3);
    },
    joinDetail: function(t) {
        e = this;
        var a = t.currentTarget.dataset.index;
        e.setData({
            currarticleId: a
        }), wx.navigateTo({
            url: "consultationDetail/consultationDetail?aid=" + e.data.articleId[e.data.currarticleId]
        });
    }
});