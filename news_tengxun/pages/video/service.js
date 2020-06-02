var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), r = e(require("../../utils/mlodash")), i = e(require("../../utils/logger")), n = require("../../network/index.js"), o = require("../../store/index"), c = require("../../services/article"), a = require("../../services/appScheme"), u = require("../../services/report");

function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}

var l = {
    COLLECTION: "101"
};

function d(e, t, i) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return n.id = n.id || "id", n.title = n.title || "title", n.img = n.img || "img_small", 
    r.default.map(t, function(e) {
        return {
            title: r.default.get(e, n.title, ""),
            img: r.default.get(e, n.img, ""),
            appParameter: (0, a.getScheme)({
                fromPage: i,
                bossName: "bottom",
                options: {
                    nm: r.default.get(e, n.id, "")
                }
            })
        };
    });
}

exports = module.exports = {
    ARTICLE_TYPE: l,
    getCollection: function(e, c) {
        return n.request.post(n.URL.getSpecialVideoListItems, {
            id: e
        }).then(function(n) {
            if (!n || 0 !== n.ret) return Promise.reject(n);
            r.default.forEach(r.default.get(n, "changeInfo.subIdComments"), function(e) {
                e.id && (o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0);
            });
            var a = new Map(), l = r.default.get(n, "kankaninfo.recVideos", []);
            r.default.forEach(l, function(e) {
                e.id && a.set(e.id, {
                    title: e.title,
                    playCount: e.playcount,
                    vid: e.id,
                    snapshot: e.imageurl,
                    durationStr: e.timeDesc
                });
            });
            var m = r.default.reduce(n.newslist, function(e, n) {
                var o = r.default.get(n, "video_channel.video.vid"), u = a.get(o);
                if (u) {
                    var l = {
                        articleId: n.id,
                        atype: n.articletype,
                        posterShareImg: n.poster_share_image || ""
                    };
                    r.default.isObject(n.card) ? (l.chlid = n.card.chlid, l.chlicon = n.card.icon, l.chlname = n.card.chlname || n.source || "") : (l.chlid = n.chlid || "", 
                    l.chlicon = n.chlicon || n.chlsicon || "", l.chlname = n.chlname || n.source || ""), 
                    n = function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var i = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? s(Object(i), !0).forEach(function(r) {
                                (0, t.default)(e, r, i[r]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                            });
                        }
                        return e;
                    }({}, l, {}, u, {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        isMore: !0,
                        isCollection: !0
                    }), c && c === o ? (i.default.info("命中专辑内视频, vid=".concat(o)), e.unshift(n)) : e.push(n);
                }
                return e;
            }, []), f = d(e, n.fixlist, u.FROM_PAGE.videotopic_share_detail_page, {
                img: "thumbnails[0]"
            }), p = m.splice(0, 2);
            return p[0] && (p[0].isMore = !1), p[1] && (p[1].isMore = !1, p[1].showMoreBtn = !!m.length), 
            {
                list: p,
                moreList: m,
                fixList: f
            };
        });
    },
    getSingle: function(e) {
        return (0, c.getVideo)(e).then(function(e) {
            return {
                list: [ e ],
                moreList: []
            };
        });
    },
    getRecommend: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], c = e.id, a = e.atype, s = e.fromApp, m = n.URL.getVideoRecommend, f = {};
        return s && a !== l.COLLECTION && (m = n.URL.getNewRelateRecommVideo, f.id = c), 
        n.request.post(m, f).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            var i = r.default.map(e.newslist, function(e) {
                o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0;
                var t = r.default.get(e, "video_info", {});
                return {
                    chlid: e.chlid,
                    chlname: e.chlname || e.source,
                    chlicon: e.icon,
                    articleId: e.id,
                    atype: e.atype,
                    title: e.title,
                    snapshot: e.img_big,
                    posterShareImg: e.poster_share_image || "",
                    vid: t.vid,
                    playCount: t.playcount,
                    durationStr: t.duration,
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10)
                };
            }), n = d(c, e.fixlist, u.FROM_PAGE.video_share_detail_page);
            return !0 === t && (i[0].showRecommendText = !0), {
                recommendList: i,
                fixList: n
            };
        }).catch(function(e) {
            return i.default.error("视频个性化推荐API请求发生错误：", e), Promise.reject(e);
        });
    }
};