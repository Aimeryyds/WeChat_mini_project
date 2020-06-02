var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/taggedTemplateLiteral")), r = e(require("../utils/mlodash")), n = e(require("../utils/logger")), a = require("../network/index.js"), o = require("../store/index"), c = require("../utils/time"), d = require("../utils/parser");

require("./jump");

function u() {
    var e = (0, t.default)([ "读取storage.", "缓存失败：" ]);
    return u = function() {
        return e;
    }, e;
}

function s(e) {
    var t = new Set();
    try {
        var r = wx.getStorageSync(e) || [];
        t = new Set(r), r.length > 2e3 && r.splice(0, r.length - 2e3), wx.setStorageSync(e, r);
    } catch (t) {
        n.default.error(i(u(), e), t);
    }
    return t;
}

function l(e, t) {
    var i = [];
    try {
        i = wx.getStorageSync(e) || [];
    } catch (t) {
        n.default.error("读取storage.".concat(e, "缓存失败："), t);
    }
    -1 === i.indexOf(t) && (i.push(t), wx.setStorageSync(e, i));
}

function m() {
    return s(o.constant.HAS_READ_NEWSLIST);
}

exports = module.exports = {
    getVideo: function(e, t) {
        var i = {
            id: e
        };
        return t && (i.vid = t), a.request.post(a.URL.getSubNewsContent, i).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0;
            var t = r.default.get(e, "card", {});
            return {
                articleId: e.id,
                commentId: e.commentid,
                atype: e.articletype,
                title: e.title,
                playCount: parseInt(e.playcount),
                vid: e.vid,
                snapshot: e.img,
                durationStr: e.duration,
                posterShareImg: e.poster_share_image || "",
                chlid: t.chlid,
                chlicon: t.icon,
                chlname: t.chlname || e.source || "",
                uin: t.uin || "",
                _uid: "uid_" + Math.random().toString(36).substr(2, 10)
            };
        });
    },
    getNormal: function(e) {
        return a.request.post(a.URL.getSubNewsContent, {
            id: e
        }).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            var t = e.listItem || {}, i = r.default.get(e, "ext.action", {}), n = r.default.get(e, "relate_modules.truth[0].data[0].content"), a = {
                articleId: e.id,
                commentId: t.commentid || e.commentid,
                atype: e.articletype,
                title: t.title || e.title,
                intro: e.intro,
                introName: e.intro_name,
                content: (0, d.textParser)(e.cnt_html, e.cnt_attr),
                truthContent: n ? (0, d.textParser)(n, {}) : [],
                timestamp: t.timestamp || e.timestamp,
                date: (0, c.distanceInWords)(t.timestamp || item.timestamp),
                remark: e.remark || "",
                posterShareImg: e.poster_share_image || "",
                relateBlock: parseInt(i.relateBlock) || 0,
                hotNewsBlock: parseInt(i.hotNewsBlock) || 0
            }, o = r.default.get(e, "relate_modules.timeLine[0]", {});
            o.title && (a.timeline = {
                title: o.title,
                desc: o.desc,
                image: r.default.get(o, "image.url", ""),
                data: r.default.map(o.data, function(e) {
                    return {
                        time: e.time,
                        desc: e.desc
                    };
                })
            });
            var u = r.default.get(e, "relate_modules.rel_topic.list[0]", {});
            u.tid && (a.topic = {
                id: u.tid
            });
            var s = r.default.get(e, "relate_ref.zt[0]", {});
            s.sCmsId && (a.special = {
                id: s.sCmsId,
                title: s.title
            });
            var l = t.card || {}, m = e.card || {};
            return a.chlid = l.chlid || m.chlid || e.chlid || "", a.chlicon = l.icon || m.icon || e.chlicon || "", 
            a.chlname = l.chlname || t.source || m.chlname || e.chlname || e.source || "", a.uin = l.uin || m.uin || e.uin || "", 
            a;
        });
    },
    getShareRecommend: function(e) {
        return a.request.post(a.URL.getNewRelateRecomm, {
            id: e
        }).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            if (e.info) {
                var t = m();
                return r.default.map(e.info, function(e) {
                    return o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0, {
                        id: e.id,
                        atype: parseInt(e.articletype) || 0,
                        tpId: e.topic_id,
                        title: e.title,
                        chlname: e.chlname || e.src,
                        picShowType: e.picShowType,
                        comments: parseInt(e.comments) || 0,
                        img: r.default.get(e, "thumbnails_qqnews[0]"),
                        publishTime: (0, c.distanceInWords)(e.pubtime),
                        hasRead: t.has(e.id)
                    };
                });
            }
            return n.default.error("API未返回info", e), Promise.reject(e);
        });
    },
    getHasReadArticle: m,
    setHasReadArticle: function(e) {
        l(o.constant.HAS_READ_NEWSLIST, e);
    },
    getHasReadZwb: function() {
        return s(o.constant.ZWB_HAS_READ_LIST);
    },
    setHasReadZwb: function(e) {
        l(o.constant.ZWB_HAS_READ_LIST, e);
    },
    getDislikeArticle: function() {
        var e = new Set();
        try {
            var t = wx.getStorageSync(o.constant.DISLIKE_NEWSLIST) || [];
            e = new Set(t), t.length > 2e3 && t.splice(0, t.length - 2e3), wx.setStorageSync(o.constant.DISLIKE_NEWSLIST, t);
        } catch (e) {
            n.default.error("读取storage.DISLIKE_NEWSLIST缓存失败：", e);
        }
        return e;
    },
    setDislikeArticle: function(e) {
        var t = [];
        try {
            t = wx.getStorageSync(o.constant.DISLIKE_NEWSLIST) || [];
        } catch (e) {
            n.default.error("读取storage.DISLIKE_NEWSLIST缓存失败：", e);
        }
        return -1 === t.indexOf(e) && (t.push(e), wx.setStorageSync(o.constant.DISLIKE_NEWSLIST, t)), 
        a.request.post(a.URL.dislike, {
            id: e
        });
    },
    formatWeibo: function(e) {
        var t = {}, i = r.default.get(e, "video_channel.video", {});
        i.vid && (t = {
            vid: i.vid,
            img: r.default.get(i, "imgurlList[0].url", r.default.get(i, "imgurlList[0].origUrl", i.img)),
            playCount: Number(i.playcount) || 0,
            duration: i.duration
        }, i.videoWidth && i.videoHeight && .6 * i.videHeight > i.videoWidth && (t.width = "423rpx", 
        t.height = "752rpx"));
        var n = {}, a = r.default.get(e, "commentItem[0]", {});
        a.reply_id && (n = {
            replyId: a.reply_id,
            commentId: a.commentid,
            agreeCount: Number(a.agree_count),
            content: a.reply_content,
            nickName: a.nick || "腾讯网友",
            imageSrc: r.default.get(a, "pic[0].url", "")
        }, o.comment.likeCountMap[n.replyId] = parseInt(n.agreeCount) || 0);
        var d = r.default.get(e, "card", r.default.get(e, "userInfo", {})), u = {
            app_openid: d.openid,
            mediaId: d.mediaid || d.chlid || "",
            coral_uid: d.coral_uid || "",
            uin: d.uin || "",
            chlicon: d.icon || d.head_url || d.chlicon || "http://mat1.gtimg.com/www/images/newsapp/wxapp/news/default-avatar.png",
            chlname: d.nick || d.chlname || "腾讯网友",
            vip_desc: d.vip_desc,
            vip_icon: d.vip_icon
        };
        u.isMedia = u.mediaId && /^\d+$/.test(u.mediaId), u.isSelf = u.app_openid === o.userInfo.app_openid;
        var s = e.topic || {}, l = {
            tpid: s.tpid,
            tpname: s.tpname
        }, m = {};
        e.relation && e.relation.id && (m = {
            id: e.relation.id,
            atype: Number(r.default.get(e.relation, "item.articletype", 0)),
            title: e.relation.title,
            img: r.default.get(e.relation, "img[0]")
        });
        var p = Number(e.articletype), g = "";
        e.abstract && (g = String(e.abstract).replace(/(^\s+)|(\s+$)/g, ""));
        var h = e.imgurlList || [];
        return o.comment.commentCountMap[e.id] = parseInt(e.comments) || 0, o.weibo.pushTimesMap[e.id] ? o.weibo.pushCountMap[e.id] < parseInt(e.weiboHotScore) && (o.weibo.pushCountMap[e.id] = parseInt(e.weiboHotScore)) : o.weibo.pushCountMap[e.id] = parseInt(e.weiboHotScore) || 0, 
        {
            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
            articleId: e.id,
            commentId: e.commentid,
            atype: p,
            content: g,
            imageList: h,
            timestamp: e.timestamp,
            date: (0, c.distanceInWords)(e.timestamp),
            posterShareImg: r.default.get(e, "poster_share_image") || r.default.get(e, "thumbnails[0]", r.default.get(e, "thumbnails_qqnews[0]", "")),
            relation: m,
            topic: l,
            weiboStatus: Number(e.weiboStatus),
            isVideo: Boolean(303 === p && t.vid),
            hotComment: n,
            videoInfo: t,
            card: u
        };
    }
};