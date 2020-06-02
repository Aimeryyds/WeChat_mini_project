var e = require("../../../utils/server"), t = require("../../../wxParse/wxParse.js");

Page({
    data: {
        detail: [],
        article: "",
        numberPhone: ""
    },
    onLoad: function(e) {
        var t = this;
        console.log(e);
        var a = e.objectId;
        if (t.setData({
            objectId: e.objectId
        }), e.merichid) {
            var i = e.merichid;
            t.setData({
                merichid: e.merichid
            }), t.getShopTitle(a, i);
        } else t.getDetail(a);
    },
    getDetail: function(a) {
        var i = this, r = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxarticle&aid=" + a + "&utoken=" + r,
            method: "GET",
            success: function(e) {
                i.data.detail = e.data.result;
                var a = i.data.detail.article_content;
                t.wxParse("article", "html", a, i, 5), i.setData({
                    detail: i.data.detail
                }), e.data.result.article_tel && i.setData({
                    numberPhone: e.data.result.article_tel
                });
            }
        });
    },
    getShopTitle: function(a, i) {
        var r = this, d = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxarticle.index.getmerchaticle&aid=" + a + "&utoken=" + d + "&merichid" + i,
            method: "GET",
            success: function(e) {
                r.data.detail = e.data.result;
                var a = r.data.detail.article_content;
                t.wxParse("article", "html", a, r, 5), r.setData({
                    detail: r.data.detail
                });
            }
        });
    },
    onShareAppMessage: function(e) {
        console.log("onShareAppMessage");
        var t, a = this;
        return console.log(a.data.merichid), t = a.data.merichid ? "/pages/article/detail/detail?objectId=" + a.data.objectId + "&merichid=" + a.data.merichid : "/pages/article/detail/detail?objectId=" + a.data.objectId, 
        {
            title: a.data.detail.article_title,
            path: t
        };
    },
    artPhone: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.numberPhone
        });
    }
});