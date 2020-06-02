var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/defineProperty")), r = e(require("../utils/mlodash")), n = (e(require("../utils/logger")), 
require("../network/index")), i = require("../utils/time"), a = require("../store/index");

function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function u(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? o(Object(n), !0).forEach(function(r) {
            (0, t.default)(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function l(e, t) {
    return r.default.map(e, function(e) {
        e = (r.default.isArray(e) ? e[0] : e) || {};
        var n = null, o = r.default.get(e, "pic[0]", {});
        o.url && (n = {
            url: o.url,
            height: o.height,
            width: o.width,
            origUrl: o.origUrl
        });
        var u = l(e.reply_list, t).slice(0, 2), c = parseInt(e.agree_count) || 0, m = a.comment.likeCountMap[e.reply_id] || 0;
        m > c && (c = m), a.comment.likeCountMap[e.reply_id] = c;
        var p = parseInt(e.reply_num) || 0;
        a.comment.commentCountMap[e.reply_id] = p;
        var s = Number(e.status);
        return {
            articleId: t,
            commentId: e.commentid,
            replyId: e.reply_id,
            parentReplyId: e.parentid || e.rootid,
            content: e.reply_content,
            image: n,
            agreeCount: c,
            replyList: u,
            replyNum: p,
            nickName: e.nick,
            avatarUrl: e.head_url,
            uin: e.uin || "",
            coral_uid: e.coral_uid || "",
            chlid: e.chlid || e.mediaid || "",
            pubTime: (0, i.distanceInWords)(e.pub_time),
            parentNickName: r.default.get(e, "parent_userinfo.nick", ""),
            isMe: 1 === parseInt(e.isMine),
            hotComment: Boolean(e.hotComment),
            coralScore: e.coral_score,
            status: s,
            isDeleted: 1 === s && "该内容被隐藏" === e.reply_content
        };
    });
}

function c(e) {
    var t = -1;
    return (r.default.has(e, "article_type") || r.default.has(e, "articletype")) && (t = parseInt(e.article_type) || parseInt(e.articletype) || 0), 
    {
        _uid: "uid_" + Math.random().toString(36).substr(2, 10),
        pubTimeTs: Number(e.pub_time),
        article: {
            id: e.article_id,
            commentId: e.commentid,
            title: e.article_title || "",
            img: e.article_imgurl || "",
            type: t,
            nickName: e.article_nick || ""
        },
        reply: {
            id: e.reply_id,
            content: e.reply_content || "",
            parentId: e.parentid,
            status: Number(e.status),
            nickName: e.nick || "",
            avatarUrl: e.head_url,
            coral_uid: e.coral_uid || e.uid || "",
            uin: e.uin || "",
            mediaId: e.mediaid || "",
            hotComment: Number(e.hotComment)
        },
        comment: {}
    };
}

exports = module.exports = {
    getComment: function(e, t) {
        var i = {
            article_id: e
        };
        return t && (i.reply_id = t), n.request.post(n.URL.getQQNewsComment, i).then(function(t) {
            if (t && -1 === t.ret) return {
                list: [],
                bnext: 0,
                lastReplyId: "",
                isForbidden: !0
            };
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var n = t.comments || {};
            a.comment.commentCountMap[e] = parseInt(n.count) || 0;
            var i = l(n.new, e);
            return {
                list: i,
                bnext: parseInt(t.bnext) || 0,
                lastReplyId: r.default.get(i, "[".concat(i.length - 1, "].replyId"), ""),
                isForbidden: !1
            };
        });
    },
    getReply2: function(e) {
        return n.request.post(n.URL.getQQNewsOrigReplyComment, e).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var n = t.comments || {}, i = {};
            r.default.has(t, "coral_score") || Object.assign(i, l([ n.orig ], e.article_id)[0]), 
            i.count = parseInt(n.count) || 0, i.bnext = parseInt(n.bnext) || 0;
            var a = l(n.reply_list, e.article_id);
            return i.lastCoralScore = r.default.get(a, "[".concat(a.length - 1, "].coralScore"), ""), 
            i.replyList = a, i;
        });
    },
    getReply3: function(e) {
        return n.request.post(n.URL.getQQNewsCommentThird, e).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var n = t.comments || {}, i = {};
            i.count = parseInt(n.count) || 0, i.bnext = parseInt(n.bnext) || 0;
            var a = l(n.reply_list, e.article_id);
            return i.lastReplyId = r.default.get(a, "[".concat(a.length - 1, "].replyId"), ""), 
            i.replyList = a, i;
        });
    },
    getShareComment: function(e, t, r) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        r = r || Date.now();
        var a = {
            newsid: e,
            offset: i,
            size: 20,
            grpid: t,
            requestTimestamp: r
        };
        return n.request.post(n.URL.getShareGrpComment, a).then(function(t) {
            return t && -1 === t.ret ? {
                list: [],
                bnext: 0,
                lastReplyId: "",
                isForbidden: !0
            } : t && 0 === t.ret ? {
                list: l(t.data, e),
                bnext: -1 !== t.nextOffset && t.data.length ? 1 : 0,
                lastReplyId: t.nextOffset,
                isForbidden: !1
            } : Promise.reject(t);
        });
    },
    postComment: function(e) {
        return (e = u({
            rawData: a.userInfo.rawData
        }, e)).rid && (e.rid = e.rid.replace(/^fake/, "")), n.request.login().post(n.URL.shareQQNewsMulti, e).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var n = a.comment.commentCountMap[e.rid] || 0;
            a.comment.commentCountMap[e.rid] = n + 1;
            var i = a.comment.commentCountMap[e.article_id] || 0;
            return a.comment.commentCountMap[e.article_id] = i + 1, a.comment.emit(a.comment.event.updateCommentCount, e.article_id), 
            r.default.get(t, "comment.reply_id");
        });
    },
    delComment: function(e) {
        return (e = u({
            rawData: a.userInfo.rawData
        }, e)).reply_id && (e.reply_id = e.reply_id.replace(/^fake/, "")), n.request.login().post(n.URL.delComment, e).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var r = (a.comment.commentCountMap[e.parent_reply_id] || 0) - 1;
            a.comment.commentCountMap[e.parent_reply_id] = r >= 0 ? r : 0;
            var n = (a.comment.commentCountMap[e.article_id] || 0) - 1;
            return a.comment.commentCountMap[e.article_id] = n >= 0 ? n : 0, a.comment.emit(a.comment.event.updateCommentCount, e.article_id), 
            t;
        });
    },
    postLike: function(e) {
        return e = u({
            rawData: a.userInfo.rawData
        }, e), n.request.post(n.URL.supportQQNewsComment, e).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            a.comment.hasLikedMap[e.rid] = !0;
            var r = a.comment.likeCountMap[e.rid] || 0;
            return a.comment.likeCountMap[e.rid] = r + 1, t;
        });
    },
    genFakeItem: function(e) {
        return {
            articleId: e.articleId,
            commentId: e.commentId,
            replyId: "fake" + e.replyId,
            parentReplyId: e.parentReplyId,
            content: e.content,
            image: null,
            agreeCount: 0,
            replyList: [],
            replyNum: 0,
            nickName: a.userInfo.nickName,
            avatarUrl: a.userInfo.avatarUrl,
            coral_uid: a.userInfo.coral_uid,
            uin: a.userInfo.uin,
            pubTime: "已发送",
            parentNickName: "",
            isMe: !0
        };
    },
    getMyComments: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {
            type: e.type,
            reply_id: e.last
        };
        return "master" !== e.type && (t.uin = e.uin, t.coral_uid = e.coral_uid), n.request.post(n.URL.getMyComments, t).then(function(t) {
            if (!t || 0 !== t.ret) return Promise.reject(t);
            var n = r.default.reduce(r.default.get(t, "comments.new"), function(t, n, i) {
                var o, u = r.default.reduce(n, function(t, r) {
                    var n = c(r);
                    return e.coral_uid === String(r.coral_uid) && (o = n), t[r.reply_id] = n, t;
                }, {});
                if (o) {
                    var l = u[o.reply.parentId];
                    l && l.reply.id !== o.reply.id && Object.assign(o.comment, l.reply), "master" === e.type && o.reply && (o.reply.avatarUrl = a.userInfo.avatarUrl, 
                    o.reply.nickName = a.userInfo.nickName), t.push(o);
                }
                return t;
            }, []);
            return {
                list: n,
                bnext: parseInt(t.bnext),
                last: n.length && n[n.length - 1].reply.id
            };
        });
    },
    getMyReply: function(e) {
        var t = {
            rawData: a.userInfo.rawData
        };
        return e && (t.pub_time = e), n.request.login().post(n.URL.getReplyList, t).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            e = e && e.replyMsg || {};
            var t = r.default.reduce(e.list, function(e, t, n) {
                var i, a = r.default.reduce(t, function(e, t) {
                    var r = c(t);
                    return 0 === Number(t.isMine) && (i = r), e[t.reply_id] = r, e;
                }, {});
                if (i) {
                    var o = a[i.reply.parentId] || {};
                    o.reply && o.reply.id !== i.reply.id && Object.assign(i.comment, o.reply), e.push(i);
                }
                return e;
            }, []);
            return {
                list: t,
                bnext: Number(e.bnext),
                pubTime: t.length && t[t.length - 1].pubTimeTs || 0
            };
        });
    },
    REPLY_STATUS: {
        0: "审核通过",
        1: "审核不通过",
        2: "审核中"
    }
};