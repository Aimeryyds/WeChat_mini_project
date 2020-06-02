var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHotWords = function() {
    return i.request.post(i.URL.searchPage, {
        rawData: a.userInfo.rawData
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = t.default.get(e, "topWords.alternate", []).map(function(e) {
            return e && e.word;
        });
        return a.search.hotList = t.default.map(t.default.get(e, "showInfo", []).slice(0, 20), function(e) {
            return {
                id: e.id,
                desc: e.desc,
                tag: e.tag
            };
        }), {
            alternate: r,
            hotList: a.search.hotList
        };
    });
}, exports.searchSug = function(e) {
    var t = {
        rawData: a.userInfo.rawData,
        query: e,
        page: 1,
        count: 10
    };
    return i.request.post(i.URL.searchSug, t).then(function(e) {
        return e && 0 === e.ret ? e.queryList || [] : Promise.reject(e);
    });
}, exports.getSearch = function(e) {
    var t = {
        rawData: a.userInfo.rawData,
        query: e,
        queryid: ""
    };
    return i.request.post(i.URL.search, t).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = new Set(), r = s(e.secList, t);
        return {
            list: r,
            queryid: e.queryid,
            hasMore: e.hasMore,
            articleSet: t
        };
    });
}, exports.searchMore = function(e, t) {
    return Object.assign(e, {
        rawData: a.userInfo.rawData,
        count: 20,
        type: 0
    }), i.request.post(i.URL.searchMore, e).then(function(e) {
        return e && 0 === e.ret ? {
            list: s(e.secList, t),
            hasMore: e.hasMore
        } : Promise.reject(e);
    });
};

var t = e(require("../../utils/mlodash")), r = e(require("../../utils/logger")), i = require("../../network/index"), a = require("../../store/index"), u = require("../../services/article");

function s(e, i) {
    var a = [], s = (0, u.getHasReadArticle)();
    return t.default.forEach(e, function(e) {
        var u;
        "SEC_TYPE_NEWS" === e.secType ? u = t.default.get(e, "newsList", []) : "SEC_TYPE_ZT" === e.secType ? u = t.default.get(e, "ztList", []) : "SEC_TYPE_HOT_WORD" === e.secType && (u = t.default.get(e, "hotList[0].newslist", [])), 
        t.default.forEach(u, function(e) {
            e && e.id && (i.has(e.id) ? r.default.info("重复内容".concat(e.id)) : (i.add(e.id), 
            a.push(function(e, r) {
                var i = e.video_info || t.default.get(e, "video_channel.video") || {}, a = t.default.get(e, "topicInfo", {});
                return {
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    showType: e.showType,
                    picShowType: e.picShowType,
                    id: e.id,
                    atype: Number(e.atype || e.articletype) || 0,
                    title: e.title,
                    source: e.chlname || e.source,
                    comments: Number(e.comments || e.comment) || 0,
                    time: e.timestamp || e.time,
                    img_big: e.img_big || t.default.get(e, "thumbnails_qqnews_photo[0]", t.default.get(e, "thumbnails[0]", "")),
                    img_small: e.img_small || t.default.get(e, "thumbnails[0]", ""),
                    img_three: e.img_three || t.default.get(e, "thumbnails_qqnews", []).slice(1, 4),
                    img_count: Number(e.img_count || e.imagecount) || 0,
                    isFisOriginal: e.isFisOriginal,
                    vid: i.vid,
                    playCount: i.playCount,
                    duration: i.duration,
                    tpid: a.tpid || e.topic_id || e.tpid,
                    joinCount: a.tpjoincount,
                    readNum: a.readNum,
                    hasRead: r.has(e.id)
                };
            }(e, s))));
        });
    }), a;
}