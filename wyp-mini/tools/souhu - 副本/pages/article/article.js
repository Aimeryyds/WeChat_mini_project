var t = function(t, e, a, i) {
    function s(t) {
        return t instanceof a ? t : new a(function(e) {
            e(t);
        });
    }
    return new (a || (a = Promise))(function(a, n) {
        function r(t) {
            try {
                d(i.next(t));
            } catch (t) {
                n(t);
            }
        }
        function o(t) {
            try {
                d(i.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function d(t) {
            t.done ? a(t.value) : s(t.value).then(r, o);
        }
        d((i = i.apply(t, e || [])).next());
    });
}, e = function(t, e) {
    function a(t) {
        return function(e) {
            return i([ t, e ]);
        };
    }
    function i(a) {
        if (s) throw new TypeError("Generator is already executing.");
        for (;d; ) try {
            if (s = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 
            0) : n.next) && !(r = r.call(n, a[1])).done) return r;
            switch (n = 0, r && (a = [ 2 & a[0], r.value ]), a[0]) {
              case 0:
              case 1:
                r = a;
                break;

              case 4:
                return d.label++, {
                    value: a[1],
                    done: !1
                };

              case 5:
                d.label++, n = a[1], a = [ 0 ];
                continue;

              case 7:
                a = d.ops.pop(), d.trys.pop();
                continue;

              default:
                if (r = d.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    d = 0;
                    continue;
                }
                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                    d.label = a[1];
                    break;
                }
                if (6 === a[0] && d.label < r[1]) {
                    d.label = r[1], r = a;
                    break;
                }
                if (r && d.label < r[2]) {
                    d.label = r[2], d.ops.push(a);
                    break;
                }
                r[2] && d.ops.pop(), d.trys.pop();
                continue;
            }
            a = e.call(t, d);
        } catch (t) {
            a = [ 6, t ], n = 0;
        } finally {
            s = r = 0;
        }
        if (5 & a[0]) throw a[1];
        return {
            value: a[0] ? a[1] : void 0,
            done: !0
        };
    }
    var s, n, r, o, d = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("../../utils/spm/index"), i = require("../../api/fetch"), s = require("../../api/index"), n = require("../../utils/utils"), r = require("../../api/sh"), o = require("../../utils/systemInfo"), d = require("../../utils/spm/exposure"), c = require("../../config/ad-config"), l = require("../../config/url-config"), h = require("../../config/base-config"), u = require("./custom-feed"), g = require("../../config/feed-config"), f = getApp(), p = null;

Page({
    data: {
        ViewType: g.ViewType,
        isFristLoad: !0,
        aCode: a.default.Config.spmCode.spma,
        bCode: a.default.Config.spmCode.spmb.article,
        pvId: n.getPvId(),
        articleId: "",
        authorId: "",
        spmParams: {},
        referPage: {
            spm: "",
            scm: "",
            info: null
        },
        dataOptions: {
            hasAuthor: !0
        },
        imageUrls: [],
        articleData: {},
        dateFormat: "",
        contentFormatDisplay: "",
        contentFormatHidden: "",
        pageHeight: 0,
        hasFirstScroll: !1,
        hasHalfScroll: !1,
        hasEndScroll: !1,
        showHidden: !1,
        middleAd: c.adConfig[a.default.Config.spmCode.spmb.article].middleInsert,
        pageConfig: h.articlePageConfig,
        shareInfo: {},
        openType: "navigate",
        isNeedAd: !1,
        customFeedList: [],
        tabBarList: [ {
            src: "/images/ic_logo.png",
            text: "阅读更多",
            detail: {
                func: "readMore",
                url: "/pages/index/index"
            }
        }, {
            src: "/images/ic_share.png",
            text: "分享",
            detail: {
                func: "share"
            }
        } ],
        tabBarCode: "footer",
        viewMoreCode: "yl-home",
        backHome: "/pages/index/index",
        isIphoneX: !1,
        hideBarSceneList: [ "063013" ],
        isShowTabBar: !0
    },
    onLoad: function(t) {
        if (!t.authorId && t.articleId && -1 != t.articleId.indexOf("_")) {
            var e = t.articleId.split("_");
            this.data.articleId = e[0], this.data.authorId = e[1];
        } else this.data.articleId = t.articleId || "", this.data.authorId = t.authorId || "";
        this.setCurrentPage(t), this.getArticleData(), getCurrentPages().length >= 10 && this.setData({
            openType: "redirect"
        });
        var a = this.data.backHome + "?spm=" + this.data.aCode + "." + this.data.bCode + ".yl-home";
        if (this.setData({
            backHome: a
        }), this.setData({
            isIphoneX: f.globalData.isIphoneX
        }), r.sh.getLaunchOptionsSync) {
            var i = r.sh.getLaunchOptionsSync().scene.toString();
            this.data.hideBarSceneList.indexOf(i) >= 0 && this.setData({
                isShowTabBar: !1
            });
        }
    },
    onShow: function() {
        this.sendAction(8725), !this.data.isFristLoad && this.setCurrentPage(), this.data.isFristLoad = !1, 
        this.data.pageConfig.isShowAllText && !this.data.isShowTabBar && this.sketchHidden();
    },
    onHide: function() {
        this.sendPagePv(), clearInterval(p), p = null;
    },
    onUnload: function() {
        this.sendPagePv(), clearInterval(p), p = null;
    },
    initPage: function() {
        var t = this.data.articleData && this.data.articleData.fulltext, e = t && t.tkd;
        r.sh.setPageInfo && r.sh.setPageInfo({
            title: e && e.title || "手机搜狐网",
            keywords: e && e.keywords ? e.keywords.join("，") : "手机搜狐网，懂手机，更懂你！手机搜狐是国内最大的移动门户之一，利用搜狐门户矩阵资源，内容覆盖新闻、财经、体育、娱乐、汽车、房产、图库、视频等资讯，为10亿手机用户打造随时随地的掌上资讯生活。手机搜狐网，手机搜狐触屏版- m.sohu.com",
            description: e && e.description || "手机搜狐,手机搜狐网,搜狐手机版,搜狐新闻,搜狐,搜狐网,资讯,娱乐,体育,财经,汽车,房产,NBA,自媒体,视频,直播,小说",
            releaseDate: t && t.publishDateTime || "2019-05-08 12:01:30",
            image: t && t.images || [],
            success: function() {
                console.log("文章页基础信息设置完成");
            }
        });
    },
    onShareAppMessage: function() {
        var t = this.data.articleData.fulltext.images && this.data.articleData.fulltext.images[0] ? this.picHandle(this.data.articleData.fulltext.images[0]) : "https://zmt.itc.cn/static/images/pic/sohu-logo/logo-144.png", e = "/pages/article/article?articleId=" + this.data.articleId + "&authorId=" + this.data.authorId + "&spm=" + this.data.aCode + "." + this.data.bCode + ".share.0." + this.data.pvId;
        return {
            title: this.data.articleData.fulltext.title + "__搜狐网",
            path: e,
            imageUrl: t,
            templateId: "227ga12dg322156nh0"
        };
    },
    picHandle: function(t) {
        return n.cutPicUrl(t, 375, 210);
    },
    setCurrentPage: function(t) {
        void 0 === t && (t = {}), this.data.referPage = f.globalData.currentPage, this.data.spmParams = {
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            scm_pre: t.scm || this.data.referPage.scm,
            spm_pre: t.spm || this.data.referPage.spm || "",
            page_info: {
                page_type_id: n.getPageType(this.data.bCode),
                content_id: this.data.articleId,
                author_id: this.data.authorId
            },
            refer_page_info: this.data.referPage.info
        }, f.setCurrentPage({
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            articleId: this.data.articleId,
            authorId: this.data.authorId
        });
    },
    getArticleData: function() {
        var t = this;
        this.data.articleId && i.fetch({
            url: s.default.getArticleData(this.data.articleId + "_" + this.data.authorId),
            usePrefetchCache: !0
        }).then(function(e) {
            var a = e.data.data;
            a && a.data && a.data.fulltext && (a.data.author.logo = n.URLPrefix(a.data.author.logo), 
            t.setData({
                articleData: a.data,
                shareInfo: {
                    url: l.default.createArticleUrl(t.data.articleId + "_" + t.data.authorId) + "?spm=" + t.data.aCode + "." + t.data.bCode + "." + t.data.tabBarCode + ".0." + t.data.pvId + "&_trans_=" + t.data.pageConfig.shareTrans,
                    title: a.data.fulltext.title || ""
                }
            }, function() {
                t.setDate(), t.setContent(), t.initPage();
            }), t.data.pageConfig.isCustom && t.getCumsterFeed());
        }).catch(function() {
            f.jump404();
        });
    },
    getCumsterFeed: function() {
        return t(this, void 0, void 0, function() {
            var t;
            return e(this, function(e) {
                switch (e.label) {
                  case 0:
                    return t = this.data, [ 4, u.getCustomFeed(this.data.pageConfig.recommend.id, {
                        size: 16,
                        page: 1,
                        pvId: this.data.pvId,
                        suv: a.default.SUV,
                        requestId: a.default.SUV + new Date().getTime(),
                        picWidth: 248,
                        picHeight: 175,
                        mpId: this.data.articleId
                    }) ];

                  case 1:
                    return t.customFeedList = e.sent(), this.setData({
                        customFeedList: this.data.customFeedList
                    }), [ 2 ];
                }
            });
        });
    },
    setDate: function() {
        this.setData({
            dateFormat: this.data.articleData.fulltext.publicTime
        });
    },
    setContent: function() {
        var t = function(t) {
            return t && t.replace(/\<img /gi, '<img style="max-width:100%;height:auto" ').replace(/\<h1/gi, '<h1 style="font-size: 1.067rem; margin: 0.867rem 0;"').replace(/src="\/\//gi, 'src="https://').replace(/data-src/gi, "src");
        }, e = this.addClass(this.data.articleData.fulltext.displayContent || this.data.articleData.fulltext.content, "pClass"), a = this.addClass(this.data.articleData.fulltext.hiddenContent, "hidden-PClass");
        this.setData({
            contentFormatDisplay: t(e),
            contentFormatHidden: t(a)
        }, function() {
            f.reportPerformance(), f.setSnapShot();
        });
    },
    addClass: function(t, e) {
        if (!t) return t;
        var a = t;
        return a = a.replace(/\<p class="/g, '<p class="' + e + " "), a = a.replace(/\<p(?!\sclass)/g, '<p class="' + e + '"');
    },
    getPageHeight: function() {
        var t = this;
        this.data.pageHeight || n.myQuery(".article-page-wrapper").boundingClientRect(function(e) {
            e.length && 1 == e.length && t.setData({
                pageHeight: e[0].height
            });
        }).exec();
    },
    sketchHidden: function() {
        this.setData({
            showHidden: !0
        });
    },
    onPageScroll: function(t) {
        var e = this, i = this, s = t;
        n.throttle(function() {
            if (i.data.pageHeight) {
                var t = {
                    contentId: i.data.articleId
                };
                i.data.hasFirstScroll || (i.sendAction(a.default.Config.spmCode.acode.firstSlide, t), 
                i.setData({
                    hasFirstScroll: !0
                })), !i.data.hasHalfScroll && s.scrollTop >= i.data.pageHeight / 2 - o.deviceSize.windowHeight && (i.sendAction(a.default.Config.spmCode.acode.halfView, t), 
                i.setData({
                    hasHalfScroll: !0
                })), !i.data.hasEndScroll && s.scrollTop >= i.data.pageHeight - o.deviceSize.windowHeight && (i.sendAction(a.default.Config.spmCode.acode.endView, t), 
                i.setData({
                    hasEndScroll: !0
                }));
            } else i.getPageHeight();
        }, 500)(), this.data.isShowTabBar && !p && (p = setInterval(function() {
            e.checkRec();
        }, 300));
    },
    sendPagePv: function() {
        a.default.sendPv(this.data.spmParams);
    },
    expoCheck: function() {
        var t = this;
        d.exposureCheck(function(e) {
            a.default.sendEv(Object.assign(t.data.spmParams, {
                spm_cnt: e.spm || "",
                scm_cnt: e.scm || "",
                ev_page_info: e.ev_page_info
            }));
        });
    },
    sendAction: function(t, e) {
        a.default.sendAction(Object.assign({}, this.data.spmParams, {
            actionCode: t,
            clkParam: e
        }));
    },
    onRichTextTap: function(t) {
        var e = this, a = t.changedTouches[0], i = r.sh.createSelectorQuery();
        i.selectAll("img").boundingClientRect(), i.exec(function(t) {
            if (t.length > 0) {
                var i = t[0].findIndex(function(t) {
                    return a.clientX >= t.left && a.clientX <= t.right && a.clientY >= t.top && a.clientY <= t.bottom;
                });
                e.viewImageDetail(i);
            }
        });
    },
    onAuthorTap: function() {
        getCurrentPages().length >= 10 ? r.sh.redirectTo({
            url: "/pages/author/author?authorId=" + this.data.authorId + "?spm=" + this.data.aCode + "." + this.data.bCode + ".0.0." + this.data.pvId
        }) : r.sh.navigateTo({
            url: "/pages/author/author?authorId=" + this.data.authorId + "?spm=" + this.data.aCode + "." + this.data.bCode + ".0.0." + this.data.pvId
        });
    },
    viewImageDetail: function(t) {
        if (-1 != t) {
            if (0 == this.data.imageUrls.length) {
                var e = this.data.articleData.fulltext.content;
                this.data.imageUrls = n.imageUrlsArray(e);
            }
            var a = this.data.imageUrls[t];
            a && r.sh.previewImage({
                current: a,
                urls: this.data.imageUrls
            });
        }
    },
    handleLoadAd: function(t) {
        this.sendAction(a.default.Config.spmCode.acode.adLoad, t), this.setData({
            isNeedAd: !0
        });
    },
    handleErrorAd: function(t) {
        this.sendAction(a.default.Config.spmCode.acode.adError, t.detail);
    },
    clickShare: function() {
        this.sendAction(a.default.Config.spmCode.acode.clickShare);
    },
    checkRec: function() {
        var t = this, e = r.sh.getSystemInfoSync().windowHeight;
        r.sh.createSelectorQuery().select(".checkShare").boundingClientRect(function(a) {
            var i, s;
            if (a.top < e && a.top + a.height > 0) {
                t.selectComponent("#custom-tab-bar").addEmphasizeSare();
                n = "tabBarList[1].src";
                t.setData((i = {}, i[n] = "/images/ic_share_y.png", i));
            } else {
                t.selectComponent("#custom-tab-bar").removeEmphasizeSare();
                var n = "tabBarList[1].src";
                t.setData((s = {}, s[n] = "/images/ic_share.png", s));
            }
        }).exec();
    }
});