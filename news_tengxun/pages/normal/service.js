var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), r = e(require("../../utils/logger")), n = require("../../network/index.js"), a = require("../../utils/time"), i = require("../../store/index"), o = (require("../../services/jump"), 
require("../../services/article")), s = require("../../services/comment");

exports = module.exports = {
    getContent: o.getNormal,
    getRecommend: function(e, s) {
        return n.request.post(n.URL.getSubNewsRelate, {
            id: e,
            chlid: s
        }).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            var n = {};
            if (t.default.forEach(t.default.get(e, "changeInfo.subIdComments"), function(e) {
                n[e.id] = parseInt(e.comments);
            }), e.relateNewslist) {
                var s = (0, o.getHasReadArticle)();
                return t.default.map(e.relateNewslist, function(e) {
                    var r = n[e.id] || 0;
                    return i.comment.commentCountMap[e.id] = r, {
                        id: e.id,
                        atype: parseInt(e.articletype) || 0,
                        tpId: e.topic_id,
                        title: e.title,
                        chlname: e.chlname || e.source,
                        picShowType: e.picShowType,
                        comments: r,
                        img: t.default.get(e, "thumbnails_qqnews[0]"),
                        publishTime: (0, a.distanceInWords)(e.timestamp),
                        hasRead: s.has(e.id)
                    };
                });
            }
            return r.default.error("API未返回relateNewslist", e), Promise.reject(e);
        });
    },
    getShareRecommend: o.getShareRecommend,
    getOpenGid: n.getOpenGid,
    getShareInfo: function(e, a, o) {
        var s = {
            newsid: e,
            grpid: a,
            user: i.userInfo.openid
        };
        return o ? (r.default.info("从分享历史过来，拉取分享圈数据, articleId=".concat(e, ", openGId=").concat(a)), 
        s.owner = i.userInfo.openid, s.sharedFrom = "wxapp") : (s.owner = i.shareInfo.uid, 
        s.sharedFrom = i.shareInfo.source || "wxapp"), n.request.post(n.URL.enterShareGrp, s).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            (e = e.data).owner && "wxapp" !== i.shareInfo.source && (i.shareInfo.uid = e.owner);
            var r = e.userInfos || {}, n = r[e.owner] || {}, a = n.nickName || "群友", o = n.avatar, s = !1, u = t.default.map(e.apprList, function(e) {
                var t = r[e] || {};
                return e === i.userInfo.openid && (s = !0), {
                    nickName: t.nickName || "群友",
                    avatarUrl: t.avatar || "",
                    type: "thanks"
                };
            }).slice(0, 20), c = t.default.map(e.comments, function(e) {
                var t = r[e.userid] || {};
                return {
                    replyId: e.cmntid,
                    text: e.content,
                    avatarUrl: t.avatar || "",
                    type: "comment"
                };
            }).concat(u);
            return {
                nickName: a,
                avatarUrl: o,
                hasThanked: s,
                commentCount: parseInt(e.cmntCount),
                thanksCount: parseInt(e.apprCount),
                readCount: parseInt(e.readCount),
                commentAndThanksList: c,
                thanksList: u
            };
        });
    },
    appreciateSharing: function(e, t) {
        var r = {
            newsid: e,
            appr: !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            grpid: t,
            owner: i.shareInfo.uid,
            user: i.userInfo.openid
        };
        return n.request.post(n.URL.appreciateSharing, r).then(function(e) {
            return e && 0 === e.ret ? e : Promise.reject(e);
        });
    },
    getShareComment: s.getShareComment,
    getRelatedTopic: function(e) {
        return n.request.post(n.URL.articleTopicModel, {
            tpid: e
        }).then(function(e) {
            return e && 0 === e.err_no ? e.article_topic_model || {} : Promise.reject(e);
        });
    }
};