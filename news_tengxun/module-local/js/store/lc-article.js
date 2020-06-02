var t = require("../../../@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getArticleDetail = function(t, r, n) {
    a.fetch(e.api.getArticleDetail, null, r, "POST", {
        "Content-Type": "application/json"
    }).then(function(e) {
        200 === e.statusCode ? e.data && 0 === e.data.code ? (t.setData({
            articleData: i(e.data.data),
            id: r.id,
            showType: 1
        }), "function" == typeof n && n(e.data.data)) : t.setData({
            showType: 2
        }) : 200 !== data.statusCode && t.setData({
            showType: 3
        });
    });
}, exports.getRelatedArticles = function(t, i) {
    a.fetch(e.api.getRelatedArticles, i).then(function(e) {
        if (200 === e.statusCode && e.data && e.data.relateNewslist) {
            var i = function(t, e) {
                var i = [];
                return t.forEach(function(t) {
                    var n, o, s;
                    t.url = (0, r.toUrl)(r.PAGE_PATH.LOCAL_ARTICLE, {
                        id: t.id
                    }), t.comment = (n = t.id, o = e.subIdComments, s = 0, o.forEach(function(t) {
                        t.id === n && (s = a.transNum(t.comments));
                    }), s), i.push(t);
                }), i;
            }(e.data.relateNewslist, e.data.changeInfo);
            t.setData({
                relatedData: i
            });
        }
    });
};

var e = t(require("../const")), a = t(require("../util")), r = require("../../../services/jump");

function i(t) {
    var e = {};
    e.title = t.title, e.cover = t.cover, e.pub_time = t.pub_time, e.comment_id = t.comment_id, 
    t.card ? e.card = t.card : t.listItem && t.listItem.card && (e.card = t.listItem.card), 
    e.timestamp = a.formatTimeExt(1e3 * parseInt(t.timestamp), "MM / dd mm:hh"), e.chlname = t.listItem ? t.listItem.source : "", 
    t.intro && (e.intro = t.intro, e.intro_name = t.intro_name ? t.intro_name : "摘要"), 
    t.remark && (e.remark = t.remark, e.remark_name = t.remark_name ? t.remark_name : "结语"), 
    e.content = [];
    var r = JSON.parse(t.wxapp_content_html);
    return e.wxapp_content_html = r, e;
}