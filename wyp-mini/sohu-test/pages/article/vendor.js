var e = getApp(), a = require("../../lib/es6-promise").Promise, t = require("../../utils/req").req, o = require("../../utils/ald-stat"), n = {
    getNewsDetailUrl: e.globalData.baseUrl + "api/news/v5/lightApp.go",
    relatedUrl: e.globalData.baseUrl + "api/news/correlationWechat.go",
    conmmentUrl: e.globalData.baseUrl + "api/comment/getCommentListByCursor.go",
    getWechatAppCodeUrl: e.globalData.baseUrl + "api/applet/share/getWechatAppCode.go",
    getShareInfoUrl: e.globalData.baseUrl + "api/news/resource/getPhoto.go"
}, r = null, l = {
    checkLaunchApp: function() {
        var a = r, t = e.globalData.sceneId;
        "1036" == t || "1069" == t ? a.setData({
            ableLaunchApp: !0
        }) : a.setData({
            ableLaunchApp: !1
        });
    },
    queryMultipleNodes: function() {
        var e = wx.createSelectorQuery();
        e.select("#com-block").boundingClientRect(), e.selectViewport().scrollOffset(), 
        e.exec(function(e) {
            console.log(e), wx.pageScrollTo({
                scrollTop: e[0].top
            });
        });
    },
    monitorNetState: function() {
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
            e.isConnected || wx.showToast({
                title: "哎呀，没网络了",
                icon: "success",
                duration: 2e3
            });
        });
    },
    saveGalleryPic2Local: function(e) {
        var a = r;
        wx.getImageInfo({
            src: a.data.imageGallery.imageUrls[e].url.replace("http", "https"),
            success: function(e) {
                if (e.path) {
                    var a = e.path;
                    wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function(e) {
                            wx.saveImageToPhotosAlbum({
                                filePath: a,
                                success: function(e) {
                                    wx.showToast({
                                        title: "保存成功",
                                        icon: "success",
                                        duration: 2e3
                                    });
                                },
                                fail: function(e) {
                                    wx.showToast({
                                        title: "保存失败",
                                        icon: "none",
                                        duration: 2e3
                                    });
                                }
                            });
                        }
                    });
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: "获取图片信息失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
}, s = {
    buildRelatedNewsParams: function(a) {
        return {
            newsId: a,
            p1: e.globalData.reqParam.p1,
            picscale: 16,
            size: 5,
            u: e.globalData.u
        };
    },
    buildCommentParams: function(a) {
        return {
            apiVersion: e.globalData.reqParam.apiVersion,
            channelId: e.globalData.reqParam.channelId,
            gid: e.globalData.reqParam.gid,
            p1: e.globalData.reqParam.p1,
            u: e.globalData.u,
            pid: e.globalData.reqParam.pid,
            size: 10,
            page: 1,
            reqFrom: "h5",
            type: "5",
            id: a,
            busiCode: 2
        };
    },
    buildNewsDetailParams: function(a, t, o) {
        return {
            channelId: 1,
            apiVersion: 37,
            newsId: a,
            p1: e.globalData.reqParam.p1,
            pid: -1,
            newsType: t || e.globalData.shareFromNewsType,
            openId: e.globalData.usrKey.openid || "",
            u: e.globalData.u,
            rt: "json",
            from: e.globalData.from || 2,
            isVisitor: wx.getStorageSync("visitType") || 1,
            shareId: o
        };
    }
}, i = {
    getShareData: function(t) {
        var o = r;
        return new a(function(a, r) {
            var l = o, s = {
                openId: e.globalData.usrKey.openid,
                newsId: t || "",
                u: e.globalData.u
            };
            wx.request({
                url: n.getShareInfoUrl,
                data: s,
                success: function(e) {
                    console.log(e);
                    for (var t = null, o = e.data.photos.length, n = 0; n < o; ++n) {
                        var r = e.data.photos[n].pic;
                        if (-1 === r.toLowerCase().indexOf(".gif")) {
                            t = r;
                            break;
                        }
                    }
                    l.setData({
                        sharePic: t
                    }), l.setData({
                        shareTitle: e.data.title
                    }), a();
                },
                fail: function(e) {
                    console.log("获取分享信息失败");
                }
            });
        });
    },
    getShareMaterial: function(t, o) {
        return new a(function(a, o) {
            wx.downloadFile({
                url: n.getWechatAppCodeUrl + "?openId=" + e.globalData.usrKey.openid + "&latitude=" + e.globalData.usrLoc.latitude + "&longitude=" + e.globalData.usrLoc.longitude + "&newsId=" + t.currentTarget.dataset.newsid + "&newsType=" + t.currentTarget.dataset.newstype + "&u=" + e.globalData.u + "&from=article",
                success: function(e) {
                    a(e.tempFilePath);
                }
            });
        });
    },
    getNewsDetail: function(e, o, l) {
        var i = r;
        return new a(function(a, r) {
            var c = s.buildNewsDetailParams(e, o, l), u = {
                success: function(t) {
                    console.log(t), i.setData({
                        newsdata: t.data
                    }), setTimeout(function() {
                        i.setData({
                            "firstLoading.loadhidden": !0
                        });
                    }, 400);
                    var o = [];
                    i.data.newsdata.content.forEach(function(e, a) {
                        "image" == e.type && o.push({
                            url: e.imageInfo.pic,
                            offsetTop: 0,
                            index: a,
                            invalid: !1
                        });
                    }), i.setData({
                        "imageGallery.imageUrls": o
                    }), a(e);
                }
            }, g = {
                url: n.getNewsDetailUrl,
                data: c,
                callback: u
            };
            t.getData(g);
        });
    },
    getRelatedNews: function(e, l) {
        var i = r;
        return new a(function(a, r) {
            var c = s.buildRelatedNewsParams(e), u = {
                success: function(t) {
                    console.log(t), 200 == t.statusCode ? setTimeout(function() {
                        if (i.setData({
                            recommendNews: t.data.recommendNews
                        }), i.setData({
                            corhidden: !1
                        }), i.data.recommendNews.length) {
                            var a = wx.createIntersectionObserver(i);
                            a.relativeToViewport({
                                bottom: 0
                            }).observe(".art-correlation", function(t) {
                                o.relatedArticleExposure(e, l), a.disconnect();
                            });
                        }
                    }, 500) : i.setData({
                        recommendNews: []
                    }), a(e);
                }
            }, g = {
                url: n.relatedUrl,
                data: c,
                callback: u
            };
            t.getData(g);
        });
    },
    getComment: function(e) {
        var o = r;
        return new a(function(a, r) {
            var l = s.buildCommentParams(e), i = function(e) {
                return (e + "").length <= 1 ? "0" + e : e;
            }, c = {
                success: function(e) {
                    console.log(e), setTimeout(function() {
                        var a = e.data.response.commentList || [];
                        a.forEach(function(e) {
                            var a = new Date(parseInt(e.ctime)), t = new Date().getTime() - a.getTime();
                            e.timeFormat = t <= 36e5 ? Math.round(t / 6e4) + "分钟前" : t <= 864e5 ? Math.round(t / 36e5) + "小时前" : i(a.getHours()) + "-" + i(a.getMinutes());
                        }), o.setData({
                            nearCommentList: a
                        }), o.setData({
                            comhidden: !1
                        });
                    }, 1e3), a();
                }
            }, u = {
                url: n.conmmentUrl,
                data: l,
                callback: c
            };
            t.getData(u);
        });
    },
    getShareInfo: function(e) {
        wx.getShareInfo({
            shareTicket: e,
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log(e);
            }
        });
    }
};

module.exports = {
    init: function(e) {
        r = e;
    },
    req: i,
    util: l
};