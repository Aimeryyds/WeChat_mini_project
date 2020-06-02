var e, t = require("../../@babel/runtime/helpers/interopRequireDefault"), r = t(require("../../utils/mlodash")), i = t(require("../../utils/logger")), o = require("../../network/index.js"), n = require("../../utils/common"), u = require("../../store/index"), s = require("../../services/article"), c = u.constant.reqStatus || {};

var a, l = c.rejected;

var d = c.rejected;

exports = module.exports = {
    getWeibo: function(e) {
        return o.request.post(o.URL.getSubNewsContent, {
            id: e
        }).then(function(e) {
            if (!e || 0 !== e.ret) return Promise.reject(e);
            var t = e.listItem || {};
            return delete e.listItem, Object.assign(e, t), (0, s.formatWeibo)(e);
        });
    },
    getTopicItem: function(e) {
        return o.request.post(o.URL.getTopicItem, {
            tpid: e
        }).then(function(t) {
            return t && 0 === t.ret && r.default.isObject(t.info) ? (u.topic.joinCountMap[e] = parseInt(t.info.tpjoincount) || 0, 
            {
                topicName: t.info.tpname,
                readNum: (0, n.formatCount)(t.info.readNum),
                tpid: t.info.tpid,
                desc: t.info.desc
            }) : Promise.reject(t);
        });
    },
    getSelectList: function(t, n) {
        return l === c.pending ? e : (l = c.pending, e = o.request.post(o.URL.getTopicSelectList, {
            tpid: t,
            ids: n
        }).then(function(e) {
            if (e && 0 === e.ret) {
                l = c.fullfilled;
                var t = r.default.map(e.newslist, function(e) {
                    return (0, s.formatWeibo)(e);
                }), o = r.default.get(e, "config.voteid", null);
                return {
                    selectList: t,
                    selectIdList: e.idlist,
                    hasVote: Boolean(o),
                    voteid: o
                };
            }
            return i.default.error("Error: getTopicSelectList", e), l = c.rejected, Promise.reject();
        }).catch(function(e) {
            return i.default.error("Error: getTopicSelectList", e), l = c.rejected, Promise.reject(e);
        }));
    },
    getLatestList: function(e, t) {
        return d === c.pending ? a : (d = c.pending, a = o.request.post(o.URL.getTopicWeiboList, {
            tpid: e,
            page_time: t
        }).then(function(e) {
            return e && 0 === e.ret ? (d = c.fullfilled, {
                latestList: r.default.map(e.weibolist, function(e) {
                    return (0, s.formatWeibo)(e);
                }),
                next: e.next
            }) : (i.default.error("Error: getTopicWeiboList", e), d = c.rejected, Promise.reject());
        }).catch(function(e) {
            return i.default.error("Error: getTopicWeiboList", e), d = c.rejected, Promise.reject(e);
        }));
    },
    postWeibo: function(e) {
        return e.rawData = u.userInfo.rawData, o.request.login().post(o.URL.postWeibo, e).then(function(e) {
            return e && 0 === e.ret ? e.data : Promise.reject(e);
        });
    },
    login: o.login
};