var a = getApp(), e = require("../../lib/es6-promise").Promise, t = require("../../utils/req").req, o = {
    getNewsDetailUrl: a.globalData.baseUrl + "api/news/v5/lightApp.go",
    getShareInfoUrl: a.globalData.baseUrl + "api/news/resource/getPhoto.go",
    getViewPointsUrl: a.globalData.baseUrl + "api/news/moment/comment/list.go",
    getEventProgressUrl: a.globalData.baseUrl + "api/news/article/event.go"
}, s = {
    buildNewsDetailParams: function(e, t, o) {
        return {
            channelId: 1,
            apiVersion: 37,
            newsId: e,
            p1: a.globalData.reqParam.p1,
            pid: -1,
            newsType: t || a.globalData.shareFromNewsType,
            openId: a.globalData.usrKey.openid || "",
            u: a.globalData.u,
            rt: "json",
            from: a.globalData.from || 2,
            isVisitor: wx.getStorageSync("visitType") || 1,
            shareId: o
        };
    }
};

module.exports = {
    getNewsDetail: function(a, n) {
        var r = a, l = n.newsId, i = n.newsType, u = n.shareId;
        return new e(function(a, e) {
            var n = s.buildNewsDetailParams(l, i, u), g = {
                success: function(e) {
                    console.log(e), r.setData({
                        newsdata: e.data
                    }), setTimeout(function() {
                        r.setData({
                            "firstLoading.loadhidden": !0
                        });
                    }, 400);
                    var t = [];
                    r.data.newsdata.content.forEach(function(a, e) {
                        "image" == a.type && t.push({
                            url: a.imageInfo.pic,
                            offsetTop: 0,
                            index: e,
                            invalid: !1
                        });
                    }), r.setData({
                        "imageGallery.imageUrls": t
                    }), a(l);
                }
            }, d = {
                url: o.getNewsDetailUrl,
                data: n,
                callback: g
            };
            t.getData(d);
        });
    },
    getShareData: function(t, s) {
        var n = t;
        return new e(function(e, t) {
            var r = n, l = {
                openId: a.globalData.usrKey.openid,
                newsId: s || "",
                u: a.globalData.u
            };
            wx.request({
                url: o.getShareInfoUrl,
                data: l,
                success: function(a) {
                    console.log(a);
                    for (var t = null, o = a.data.photos.length, s = 0; s < o; ++s) {
                        var n = a.data.photos[s].pic;
                        if (-1 === n.toLowerCase().indexOf(".gif")) {
                            t = n;
                            break;
                        }
                    }
                    r.setData({
                        sharePic: t
                    }), r.setData({
                        shareTitle: a.data.title
                    }), e();
                },
                fail: function(a) {
                    console.log("获取分享信息失败");
                }
            });
        });
    },
    getHotPoints: function(t) {
        return new e(function(e, s) {
            wx.request({
                url: o.getViewPointsUrl,
                data: {
                    newsId: t,
                    p1: a.globalData.usrKey.openid,
                    currentPage: 1,
                    pageNum: 1,
                    top: 1,
                    loc: "sohutimesread",
                    u: a.globalData.u,
                    h: a.globalData.h,
                    v: "6.3.1",
                    activeChn: 1181
                },
                success: function(a) {
                    e(a.data.data.datas);
                }
            });
        });
    },
    getEventProgress: function(t) {
        return new e(function(e, s) {
            wx.request({
                url: o.getEventProgressUrl,
                data: {
                    loc: "sohutimesread",
                    newsId: t,
                    p1: a.globalData.usrKey.openid,
                    u: a.globalData.u,
                    h: a.globalData.h,
                    v: "6.4.1"
                },
                success: function(a) {
                    e({
                        list: a.data.data.list,
                        title: a.data.data.sohu_time_reading_title,
                        newsId: a.data.data.news_id
                    });
                }
            });
        });
    }
};