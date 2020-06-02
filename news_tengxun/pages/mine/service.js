var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserInfo = function() {
    return r.request.login().post(r.URL.getCommentUserInfo, {
        type: "main"
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var t = e.userinfo || {};
        return n.userInfo.coral_uid = String(t.coral_uid), n.userInfo.uin = String(t.uin), 
        {
            pubNum: parseInt(e.pubnum) || 0,
            followNum: parseInt(e.follownum) || 0,
            fansNum: parseInt(e.fansNum) || 0,
            likeNum: parseInt(e.upnum) || 0,
            isMyFans: 1 === parseInt(e.isFans),
            isMyFollow: 1 === parseInt(e.isFollow),
            avatarUrl: t.head_url,
            nickName: t.nick,
            coral_uid: t.coral_uid,
            uin: t.uin
        };
    });
}, exports.getUpList = function(e) {
    var i = {
        rawData: n.userInfo.rawData
    };
    e && (i.pub_time = e);
    return r.request.login().post(r.URL.getUpList, i).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        e = e && e.uplist || {};
        var r = t.default.reduce(e.list, function(e, r) {
            if (r = r[0] || {}, !t.default.isEmpty(r)) {
                var n = t.default.map(r.userlist, function(e) {
                    return {
                        nickName: e.nick || "",
                        avatarUrl: e.head_url || "",
                        uin: e.uin || "",
                        coral_uid: e.coral_uid || e.uid || ""
                    };
                }).slice(0, 5);
                e.push({
                    _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                    pubTimeTs: parseInt(r.tipstime || r.pub_time),
                    article: {
                        title: r.article_title,
                        type: parseInt(r.article_type) || 0,
                        id: r.article_id,
                        commentId: r.commentid,
                        img: r.article_imgurl || "",
                        nickName: r.article_nick || ""
                    },
                    comment: {
                        id: r.reply_id,
                        content: r.commentContent || "",
                        nickName: r.commentNick || "腾讯网友"
                    },
                    like: {
                        count: Number(r.upnum) || 0,
                        userList: n,
                        hasAvatar: !!n[0],
                        type: Number(r.tipstype)
                    }
                });
            }
            return e;
        }, []);
        return {
            list: r,
            bnext: Number(e.bnext),
            pubTime: r.length && r[r.length - 1].pubTime || 0
        };
    });
}, exports.getSharingHistory = function(e) {
    var u = e.reqTimestamp, a = e.offset, s = void 0 === a ? 0 : a, o = e.dateList, m = void 0 === o ? {} : o;
    return r.request.post(r.URL.getSharingHistory, {
        user: n.userInfo.openid,
        offset: s,
        size: 20,
        requestTimestamp: u
    }).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var r = [];
        return e = e.data, t.default.forEach(e.page, function(t) {
            var n = i(t.createdDate), u = {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                articleId: "",
                img: "",
                title: "",
                atype: 0,
                shareInfo: {
                    read: t.readCount,
                    thanks: t.apprCount,
                    comment: t.cmntCount,
                    openGId: t.grpid
                }
            }, a = e.newslist[t.newsid];
            a && Object.assign(u, {
                articleId: t.newsid,
                img: a.img_small || a.icon,
                title: a.title,
                atype: Number(a.atype)
            }), m[n] ? r.push(u) : (m[n] = {
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                isDate: !0,
                date: n,
                read: t.readCount,
                thanks: t.apprCount,
                comment: t.cmntCount
            }, r.push(m[n]), r.push(u));
        }), t.default.forEach(e.stats, function(e, t) {
            var r = i(t);
            Object.assign(m[r], {
                date: r,
                read: e.readCount,
                thanks: e.apprCount,
                comment: e.cmntCount
            });
        }), {
            list: r,
            offset: e.nextOffset
        };
    });
};

var t = e(require("../../utils/mlodash")), r = (e(require("../../utils/logger")), 
require("../../network/index")), n = require("../../store/index");

function i(e) {
    var t = new Date(1e3 * e), r = t.getMonth() + 1, n = t.getDate();
    return "".concat(r, "月").concat(n, "日");
}