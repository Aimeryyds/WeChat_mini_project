var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRecommendList = function(e) {
    return i.request.post(i.URL.getRecommendList, e).then(function(t) {
        if (!t || 0 !== t.code) return Promise.reject(t);
        var i = [], s = [], u = (0, n.getHasReadArticle)(), c = (0, n.getDislikeArticle)();
        return 2 === e.forward && (o.home.recommendSet.clear(), i = r.default.map(t.toplist, function(e) {
            return e.hasRead = u.has(e.id), function(e) {
                return {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    showType: e.showType,
                    articleId: e.id,
                    atype: e.atype,
                    title: e.title,
                    chlname: e.chlname || e.source,
                    hasRead: e.hasRead,
                    commentCount: parseInt(e.comments) || 0
                };
            }(e);
        })), r.default.forEach(t.newslist, function(t) {
            if (!c.has(t.id)) {
                t.showType = Number(t.showType), t.atype = Number(t.atype), t.hasRead = u.has(t.id), 
                o.comment.commentCountMap[t.id] = parseInt(t.comments) || 0;
                var n = t.showType;
                if (8 === n && 2 === e.forward) i.push(function(e) {
                    var t = {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        showType: e.showType,
                        articleId: e.id,
                        atype: e.atype,
                        title: e.title
                    };
                    return t.articleList = r.default.map(e.newslist, function(e) {
                        o.home.recommendSet.add(e.id), o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0;
                        var i = new Date(1e3 * e.ts_pub_time || e.pub_time), n = {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            showType: Number(e.showType),
                            articleId: e.id,
                            atype: Number(e.atype),
                            title: e.title,
                            imgBig: e.img_big,
                            imgCount: e.img_count || 0,
                            chlname: e.chlname || e.source,
                            publishTime: d(i),
                            tpid: r.default.get(e, "topicInfo.tpid", null),
                            commentCount: parseInt(e.comments) || 0
                        };
                        if (e.zwb_day) {
                            var s;
                            try {
                                s = wx.getStorageSync("TL_ZWB_EXPO");
                            } catch (e) {}
                            t.zwbHasExposured = s === e.zwb_day + e.zwb_type, Object.assign(n, {
                                zwbType: Number(e.zwb_type) || null,
                                zwbDay: e.zwb_day,
                                zwbDate: (0, a.format)(i, "DD"),
                                zwbWeekday: (0, a.format)(i, "dd")
                            });
                        }
                        return n;
                    }), t;
                }(t)); else if (11 === n || "话题" == t.source) r.default.isArray(t.weibolist) && t.weibolist.length && !o.home.recommendSet.has(t.id) && (s.push(function(e) {
                    var t = r.default.map(e.weibolist.slice(0, 5), function(e) {
                        return {
                            id: e.id,
                            desc: e.desc,
                            avatarUrl: r.default.get(e, "cardInfo.icon") || r.default.get(e, "userInfo.head_url")
                        };
                    }), i = e.topicInfo || {};
                    return o.topic.joinCountMap[i.tpid] = parseInt(i.tpjoincount) || 0, {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        showType: e.showType,
                        articleId: e.id,
                        atype: e.atype,
                        title: e.title,
                        commentCount: parseInt(e.comments) || 0,
                        topicId: i.tpid,
                        topicName: i.tpname,
                        voteId: i.voteid,
                        weiboList: t
                    };
                }(t)), o.home.recommendSet.add(t.id)); else if (12 === n) {
                    var m = s[s.length - 1];
                    m && (m.hideSplitLine = !0), s.push(function(e) {
                        return {
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            showType: e.showType,
                            articleId: e.id,
                            atype: e.atype,
                            title: e.title,
                            publishTime: (0, a.format)(new Date(1e3 * e.ts_pub_time || e.pub_time), "HH:mm"),
                            commentCount: parseInt(e.comments) || 0,
                            hideSplitLine: !0
                        };
                    }(t));
                } else 1 !== n && 2 !== n && 3 !== n && 4 !== n && 9 !== n && 10 !== n || o.home.recommendSet.has(t.id) || (s.push(function(e) {
                    var t = {
                        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                        showType: e.showType,
                        articleId: e.id,
                        atype: e.atype,
                        title: e.title,
                        intro: e.intro,
                        imgBig: e.img_big,
                        imgSmall: e.img_small,
                        imgCount: e.img_count || 0,
                        imgThree: e.img_three || [],
                        chlid: e.chlid,
                        chlname: e.chlname || e.source,
                        chlicon: e.chlicon || e.icon,
                        publishTime: d(new Date(1e3 * e.ts_pub_time || e.pub_time)),
                        isExclusive: !!e.isFisOriginal,
                        posterShareImage: e.poster_share_image,
                        hasRead: e.hasRead,
                        commentCount: parseInt(e.comments) || 0,
                        reasonFlag: e.reason_flag || ""
                    }, i = e.hotcomment || {}, n = parseInt(i.agree_count) || 0;
                    if (o.comment.likeCountMap[i.reply_id] = n, t.hotComment = {
                        replyId: i.reply_id || "",
                        commentId: i.commentid || "",
                        agreeCount: n,
                        content: i.reply_content || "",
                        nickName: i.nick || "腾讯网友",
                        imageSrc: r.default.get(i, "pic[0].url", "")
                    }, 9 === e.showType || 10 === e.showType) {
                        var a = r.default.get(e, "video_info", {});
                        Object.assign(t, {
                            isVideo: !0,
                            vid: a.vid,
                            playCount: a.playcount,
                            durationStr: a.duration
                        });
                    }
                    return t;
                }(t)), o.home.recommendSet.add(t.id));
            }
        }), {
            fixedTopList: i,
            list: s,
            loadDataTips: t.recommWording
        };
    });
}, exports.getRecommMedia = function() {
    return i.request.post(i.URL.getRecommMedia, {}).then(function(e) {
        return e && 0 === e.ret ? r.default.map(e.list, function(e) {
            return {
                chlid: e.chlid,
                chlicon: e.icon,
                chlname: e.chlname,
                desc: e.vip_desc || e.mrk,
                follow: e.attention
            };
        }) : Promise.reject(e);
    });
}, exports.postFollowMedia = function(e) {
    return e = m({}, e, {
        sub_type: 1,
        rawData: o.userInfo.rawData
    }), i.request.login().post(i.URL.syncSubCp, e).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
    });
}, exports.getVideoList = function(e) {
    return e = m({}, e, {
        reqType: 2
    }), i.request.post(i.URL.getRecommendList, e).then(function(t) {
        if (!t || 0 !== t.code) return Promise.reject(t);
        var i = [], a = (0, n.getDislikeArticle)();
        return 2 === e.forward && o.home.videoSet.clear(), r.default.forEach(t.newslist, function(e) {
            if (e.showType = Number(e.showType), e.atype = Number(e.atype), !(56 !== e.atype && 4 !== e.atype && 101 !== e.atype && 118 !== e.atype || a.has(e.id) || o.home.videoSet.has(e.id))) {
                o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0;
                var t = {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    articleId: e.id,
                    atype: e.atype,
                    title: e.title,
                    chlid: e.chlid || "",
                    chlname: e.chlname || e.source || "热点视频",
                    chlicon: e.chlicon || e.icon || "",
                    snapshot: e.img_big,
                    posterShareImage: e.poster_share_image,
                    commentCount: parseInt(e.comments) || 0,
                    reasonFlag: e.reason_flag || ""
                }, n = r.default.get(e, "video_info", {});
                Object.assign(t, {
                    vid: n.vid,
                    playCount: Number(n.playcount),
                    durationStr: n.duration
                }), o.home.videoSet.add(e.id), i.push(t);
            }
        }), {
            list: i,
            loadDataTips: t.recommWording
        };
    });
}, exports.report = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = getCurrentPages() || [], r = (t[t.length - 1] || {}).__route__ || "";
    -1 === u.PAGE_PATH.HOME.indexOf(r) && (e.intoQueue = !0);
    (0, s.report)(e);
};

var t = e(require("../../@babel/runtime/helpers/defineProperty")), r = e(require("../../utils/mlodash")), i = (e(require("../../utils/logger")), 
require("../../network/index")), o = require("../../store/index"), n = require("../../services/article"), a = require("../../utils/time"), s = require("../../services/report"), u = require("../../services/jump");

function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}

function m(e) {
    for (var r = 1; r < arguments.length; r++) {
        var i = null != arguments[r] ? arguments[r] : {};
        r % 2 ? c(Object(i), !0).forEach(function(r) {
            (0, t.default)(e, r, i[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

function d(e) {
    var t = e.getTime() / 1e3, r = Date.now() / 1e3;
    if (!e || t > r) return "";
    var i = r - t;
    return i < 60 ? "刚刚" : i < 3600 ? parseInt(i / 60) + "分钟前" : i < 25200 ? parseInt(i / 60 / 60) + "小时前" : "";
}