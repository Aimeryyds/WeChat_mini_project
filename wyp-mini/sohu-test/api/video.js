var a = getApp(), e = require("../lib/es6-promise").Promise, t = require("../utils/req").req, o = require("../utils/calculator"), r = {
    getNewsDetailUrl: a.globalData.baseUrl + "api/videotab/videoInfo.go",
    relatedUrl: a.globalData.baseUrl + "api/videotab/getRelevanceListWechat.go",
    conmmentUrl: a.globalData.baseUrl + "api/comment/getCommentListByCursor.go",
    getShareInfoUrl: a.globalData.baseUrl + "api/news/resource/getPhoto.go"
}, l = {
    buildRelatedVideosParams: function(e, t) {
        return {
            vid: e.data.videodata.vid,
            site: e.data.videodata.site,
            newsId: t,
            p1: a.globalData.reqParam.p1,
            openId: a.globalData.usrKey.openid || "",
            picscale: 16,
            size: 20,
            u: a.globalData.u,
            carrier: "",
            from: 3,
            net: a.globalData.newsType
        };
    },
    buildCommentParams: function(e) {
        return {
            apiVersion: a.globalData.reqParam.apiVersion,
            channelId: a.globalData.reqParam.channelId,
            gid: a.globalData.reqParam.gid,
            p1: a.globalData.reqParam.p1,
            u: a.globalData.u,
            pid: a.globalData.reqParam.pid,
            size: 10,
            page: 1,
            reqFrom: "h5",
            type: "5",
            id: e,
            busiCode: 2
        };
    },
    buildVideoDetailParams: function(e, t, o) {
        return {
            channelId: 30001,
            apiVersion: 37,
            newsId: e,
            newsType: t || a.globalData.shareFromNewsType,
            openId: a.globalData.usrKey.openid || "",
            u: a.globalData.u,
            from: 2,
            net: a.globalData.newsType,
            carrier: ""
        };
    }
}, i = {
    getShareData: function(t, o) {
        return new e(function(e, l) {
            var i = {
                openId: a.globalData.usrKey.openid,
                newsId: o || "",
                u: a.globalData.u
            };
            wx.request({
                url: r.getShareInfoUrl,
                data: i,
                success: function(a) {
                    console.log(a);
                    for (var o = null, r = a.data.photos.length, l = 0; l < r; ++l) {
                        var i = a.data.photos[l].pic;
                        if (-1 === i.toLowerCase().indexOf(".gif")) {
                            o = i;
                            break;
                        }
                    }
                    t.setData({
                        sharePic: o
                    }), t.setData({
                        shareTitle: a.data.title
                    }), e();
                },
                fail: function(a) {
                    console.log("获取分享信息失败");
                }
            });
        });
    },
    getVideoDetail: function(a, i, n, s) {
        return new e(function(e, d) {
            var u = l.buildVideoDetailParams(i, n, s), c = {
                success: function(t) {
                    console.log(t), t.data.data.playNum = o.convertBigNumber(t.data.data.playNum), a.setData({
                        videodata: t.data.data
                    }), a.setData({
                        isPageLoading: !0
                    }), e(i);
                }
            }, g = {
                url: r.getNewsDetailUrl,
                data: u,
                callback: c
            };
            t.getData(g);
        });
    },
    getRelatedVideos: function(a, i) {
        return new e(function(e, n) {
            var s = l.buildRelatedVideosParams(a, i), d = {
                success: function(t) {
                    console.log(t), 200 == t.statusCode ? (t.data.data.videoList.forEach(function(a, e) {
                        a.playNum = o.convertBigNumber(a.playNum);
                    }), setTimeout(function() {
                        a.setData({
                            recommendVideos: t.data.data.videoList
                        }), a.setData({
                            corhidden: !1
                        });
                    }, 500)) : a.setData({
                        recommendVideos: []
                    }), e(i);
                }
            }, u = {
                url: r.relatedUrl,
                data: s,
                callback: d
            };
            t.getData(u);
        });
    },
    getComment: function(a, o) {
        return new e(function(e, i) {
            var n = l.buildCommentParams(o), s = {
                success: function(t) {
                    console.log(t), setTimeout(function() {
                        a.setData({
                            nearCommentList: t.data.response.commentList || ""
                        }), a.setData({
                            comhidden: !1
                        });
                    }, 1e3), e();
                }
            }, d = {
                url: r.conmmentUrl,
                data: n,
                callback: s
            };
            t.getData(d);
        });
    }
};

module.exports = i;