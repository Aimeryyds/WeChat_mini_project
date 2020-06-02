Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../api/fetch"), e = require("../../models/author"), a = require("../../config/feed-config"), i = require("../../config/index"), r = require("../../utils/utils"), s = require("../../utils/number"), o = require("../../api/sh"), n = require("../../api/index"), d = require("../../utils/utils"), u = require("../../utils/spm/index"), c = require("../../api/ad/ad-core"), h = getApp();

Page({
    data: {
        _authorId: "",
        _pageNumber: 1,
        newsList: [],
        itemListHeight: 0,
        authorName: "",
        authorAvatar: "",
        articleCount: "--",
        totalPV: "--",
        description: "",
        needBreak: !1,
        breakStatus: !1,
        _loadingPage: 0,
        isFinished: !1,
        isError: !1,
        _maxPageNumber: 15,
        isFristLoad: !0,
        pvId: d.getPvId(),
        aCode: u.default.Config.spmCode.spma,
        bCode: u.default.Config.spmCode.spmb.author,
        referPage: {
            spm: "",
            scm: "",
            info: null
        },
        spmParams: {}
    },
    onLoad: function(t) {
        var e = t.authorId;
        this.setData({
            _authorId: e
        }), this.fetchAuthorData(e), this.fetchArticleData(e), this.setCurrentPage(t);
    },
    onShow: function() {
        this.data.isFristLoad || (this.setCurrentPage(), this.setData({
            isFristLoad: !1
        }));
    },
    onHide: function() {
        u.default.sendPv(this.data.spmParams);
    },
    onUnload: function() {
        u.default.sendPv(this.data.spmParams);
    },
    fetchAuthorData: function(a) {
        var i = this;
        t.fetch({
            url: n.default.getAuthorInfo(a),
            parseObject: e.AuthorInfoModel
        }).then(function(t) {
            var e = t.data.data;
            i.setData({
                authorName: e.name,
                authorAvatar: r.URLPrefix(e.logo),
                articleCount: s.format(e.articleCount),
                totalPV: s.format(e.totalPv),
                description: e.description
            }, function() {
                var t = o.sh.isBaidu ? 300 : 0;
                setTimeout(function() {
                    o.sh.createSelectorQuery().select(".description").boundingClientRect(function(t) {
                        var e = t.height / 20 > 1;
                        i.setData({
                            needBreak: e,
                            breakStatus: e
                        });
                    }).exec();
                }, t);
            });
        }).catch(function(t) {
            "request:ok" == t.errMsg && o.sh.showToast({
                icon: "none",
                title: "作者不存在",
                complete: function() {
                    o.sh.navigateBack();
                }
            });
        });
    },
    fetchArticleData: function(r, s) {
        var o = this;
        void 0 === s && (s = 1), this.data._loadingPage != s && (s >= this.data._maxPageNumber ? this.setData({
            isFinished: !0
        }) : (this.setData({
            isFinished: !1,
            isError: !1
        }), this.setData({
            _loadingPage: s
        }), t.fetch({
            url: n.default.getAuthorArticles(r),
            data: {
                pNo: s
            },
            parseObject: e.AuthorArticleModel
        }).then(function(e) {
            var r = e.data.data.wapArticleVOS.map(function(t) {
                var e = "";
                t.videoInfo && t.videoInfo.sofaInfo instanceof Array && t.videoInfo.sofaInfo.length > 0 && (e = t.videoInfo.sofaInfo[0].videoUrl);
                var r = i.urlMap[t.type] ? i.urlMap[t.type].url : i.urlMap[1].url;
                return {
                    id: t.id,
                    title: t.title,
                    viewType: a.ViewType.textImage,
                    publicTime: t.publicTime,
                    articlePv: 0,
                    images: t.images,
                    cover: t.cover,
                    path: r + "?authorId=" + t.userId + "&articleId=" + t.id,
                    videoSrc: e,
                    authorPic: t.authorPic
                };
            }), d = r.map(function(t) {
                return t.id;
            });
            return 1 == s && (r = c.formatFeedAdData(r, o.data.bCode, "fd-t")), o.setData({
                _pageNumber: ++s,
                _loadingPage: 0,
                newsList: o.data.newsList.concat(r),
                isFinished: 0 == r.length
            }), t.fetch({
                url: n.default.getArticlePv,
                data: {
                    articleIds: d.join(",")
                }
            });
        }, function(t) {
            o.setData({
                isError: !0,
                isFinished: !1
            });
        }).then(function(t) {
            if (t) {
                var e = t.data;
                if (0 == e.status) {
                    var a = {};
                    for (var i in e.data) !function(t) {
                        if (e.data.hasOwnProperty(t)) {
                            var i = e.data[t], r = o.data.newsList.findIndex(function(e) {
                                return e.id == t;
                            });
                            -1 != r && (a["newsList[" + r + "].articlePv"] = i);
                        }
                    }(i);
                    o.setData(a);
                }
            }
        })));
    },
    onReachBottom: function() {
        this.data.isFinished || this.fetchArticleData(this.data._authorId, this.data._pageNumber);
    },
    toggleDescription: function() {
        this.setData({
            breakStatus: !this.data.breakStatus
        });
    },
    setCurrentPage: function(t) {
        void 0 === t && (t = {});
        var e = h.globalData.currentPage;
        this.setData({
            referPage: e,
            spmParams: {
                bCode: this.data.bCode,
                pvId: this.data.pvId,
                scm_pre: t.scm || e.scm,
                spm_pre: t.spm || e.spm || "",
                page_info: {
                    page_type_id: d.getPageType(this.data.bCode)
                },
                refer_page_info: e.info
            }
        }), h.setCurrentPage({
            bCode: this.data.bCode,
            pvId: this.data.pvId
        });
    }
});