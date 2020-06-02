var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserInfo = function(e) {
    var t = r.request;
    "master" === e.type && (t = r.request.login());
    return t.post(r.URL.getCommentUserInfo, e).then(function(t) {
        if (!t || 0 !== t.ret) return Promise.reject(t);
        var r = t.userinfo || {}, n = t.tabs || {}, s = [];
        return 1 === Number(n.showCommmentTab) && s.push("评论"), 1 === Number(n.showWeiboTab) && s.push("动态"), 
        "master" === e.type && (r.head_url = i.userInfo.avatarUrl || r.head_url, r.nick = i.userInfo.nickName || r.nick, 
        i.userInfo.coral_uid = String(r.coral_uid), i.userInfo.uin = String(r.uin)), {
            pubNum: parseInt(t.pubnum) || 0,
            followNum: parseInt(t.follownum) || 0,
            fansNum: parseInt(t.fansNum) || 0,
            likeNum: parseInt(t.upnum) || 0,
            isMyFans: 1 === parseInt(t.isFans),
            isMyFollow: 1 === parseInt(t.isFollow),
            tabNames: s,
            avatarUrl: r.head_url,
            nickName: r.nick,
            userDesc: r.user_desc || "",
            coral_uid: String(r.coral_uid),
            uin: String(r.uin)
        };
    });
}, exports.getSubItem = function(e) {
    return r.request.post(r.URL.getSubItem, e).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = e.channelInfo || {}, i = t.default.get(r, "tab_config.tab_list"), n = [];
        return t.default.forEach([ "图文", "视频", "动态" ], function(e) {
            t.default.find(i, {
                tabName: e
            }) && n.push(e);
        }), {
            pubNum: parseInt(r.pubCount) || 0,
            fansNum: parseInt(r.subCount) || 0,
            likeNum: parseInt(r.upCount) || 0,
            isMyFans: !1,
            isMyFollow: 1 === parseInt(r.isFollow),
            tabNames: n,
            avatarUrl: r.icon,
            nickName: r.chlname,
            userDesc: r.desc || ""
        };
    });
}, exports.getUserWeiboList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r.request.post(r.URL.getUserWeiboList, {
        coral_uid: e.coral_uid,
        uin: e.uin,
        mediaid: e.mediaId,
        page_time: e.last
    }).then(function(r) {
        if (!r || 0 !== r.ret) return Promise.reject(r);
        var s = t.default.map(r.weibolist, function(t) {
            var r = (0, n.formatWeibo)(t);
            return "master" === e.type && r && r.card && (r.card.chlname = i.userInfo.nickName, 
            r.card.chlicon = i.userInfo.avatarUrl), r;
        });
        return {
            list: s,
            bnext: parseInt(r.next),
            last: s.length && s[s.length - 1].timestamp
        };
    });
}, exports.getUserVideoList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r.request.post(r.URL.getUserVideoList, {
        chlid: e.mediaId,
        last_time: e.last,
        type: "om"
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = (0, n.getHasReadArticle)(), i = t.default.map(e.newslist, function(e) {
            return s(e, r);
        });
        return {
            list: i,
            bnext: parseInt(e.next),
            last: e.last_time
        };
    });
}, exports.getSubNewsIndex = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r.request.post(r.URL.getSubNewsIndex, {
        chlid: e.mediaId
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = new Set(), i = [], u = (0, n.getHasReadArticle)(), a = t.default.map(e.newslist, function(e) {
            return r.add(e.id), i.push(e.id), s(e, u);
        }), o = 0, l = t.default.reduce(e.ids, function(e, t) {
            return r.has(t.id) || (10 !== e[o].length && 0 !== o || (e[o += 1] = []), e[o].push(t.id)), 
            e;
        }, [ i ]), d = l[1] && l[1].length ? 1 : 0;
        return {
            list: a,
            pages: l,
            last: 1,
            bnext: d
        };
    });
}, exports.getSubNewsListItems = function(e) {
    return r.request.post(r.URL.getSubNewsListItems, {
        chlid: e.mediaId,
        ids: e.pages[e.last]
    }).then(function(r) {
        if (!r || 0 !== r.ret) return Promise.reject(r);
        var i = (0, n.getHasReadArticle)(), u = t.default.map(r.newslist, function(e) {
            return s(e, i);
        }), a = e.last + 1, o = e.pages[a] && e.pages[a].length ? 1 : 0;
        return {
            list: u,
            last: a,
            bnext: o
        };
    });
}, exports.UserFansMsgList = function(e) {
    return r.request.login().post(r.URL.UserFansMsgList, {
        page: e.page,
        rawData: i.userInfo.rawData
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = u((e = e && e.data || {}).userList);
        return {
            list: t,
            bnext: Number(e.hasMore)
        };
    });
}, exports.getUpUserList = function(e) {
    return r.request.post(r.URL.getUpUserList, {
        cid: e.commentId,
        reply_id: e.replyId,
        last: e.last,
        tipstype: 4
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = u((e = e && e.userlist || {}).list);
        return {
            list: t,
            bnext: Number(e.bnext),
            last: e.last
        };
    });
}, exports.getUserFansList = function(e) {
    return r.request.post(r.URL.getUserFansList, {
        uin: e.uin,
        coral_uid: e.coral_uid,
        mediaid: e.mediaId,
        page: e.page,
        lastSubTime: e.last,
        rawData: i.userInfo.rawData
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = u(e.userList);
        return {
            list: t,
            bnext: Number(e.hasMore),
            last: t.length && e.userList[t.length - 1].sub_time
        };
    });
}, exports.getUserSubList = function(e) {
    return r.request.post(r.URL.getUserSubList, {
        uin: e.uin,
        coral_uid: e.coral_uid,
        mediaid: e.mediaId,
        page: e.page,
        lastSubTime: e.last,
        rawData: i.userInfo.rawData
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = u(e.userList);
        return {
            list: t,
            bnext: Number(e.hasMore),
            last: t.length && e.userList[t.length - 1].sub_time
        };
    });
}, exports.getUserSubTopicList = function(e) {
    return r.request.post(r.URL.getUserSubTopicList, {
        uin: e.uin,
        coral_uid: e.coral_uid,
        page: e.page,
        lastSubTime: e.last,
        rawData: i.userInfo.rawData
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = t.default.map(e.topicList, function(e) {
            return i.topic.joinCountMap[e.tpid] = parseInt(e.tpjoincount) || 0, {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                topicId: e.tpid,
                name: e.tpname,
                icon: e.icon,
                readCount: e.readNum,
                isMyFollow: 1 === Number(e.isMyFollow),
                type: "topic"
            };
        });
        return {
            list: r,
            bnext: Number(e.hasMore)
        };
    });
};

var t = e(require("../../utils/mlodash")), r = (e(require("../../utils/logger")), 
require("../../network/index")), i = (require("../../utils/time"), require("../../store/index")), n = require("../../services/article");

function s(e, r) {
    var i = t.default.get(e, "video_channel.video", {});
    return {
        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
        articleId: e.id,
        atype: e.articletype || e.atype,
        picShowType: e.picShowType,
        title: e.title,
        source: e.chlname || e.source,
        time: e.timestamp,
        imageBig: t.default.get(e, "thumbnails_qqnews_photo[0]", "") || t.default.get(e, "thumbnails_qqnews[0]", ""),
        imageSmall: t.default.get(e, "thumbnails_qqnews[0]", t.default.get(e, "thumbnails[0]", "")),
        commentCount: Number(e.comments),
        vid: i.vid,
        duration: i.duration,
        playCount: Number(i.playcount),
        hasRead: r.has(e.id),
        isFisOriginal: e.isFisOriginal
    };
}

function u(e) {
    return t.default.map(e, function(e) {
        return {
            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
            icon: e.head_url,
            name: e.nick,
            coral_uid: e.coral_uid || e.uid,
            uin: e.uin,
            mediaId: e.mediaid,
            isMyFans: 1 === Number(e.isMyFans),
            isMyFollow: 1 === Number(e.isMyFollow),
            description: e.vip_desc,
            type: 1 === Number(e.home_page_type) ? "media" : "user"
        };
    });
}