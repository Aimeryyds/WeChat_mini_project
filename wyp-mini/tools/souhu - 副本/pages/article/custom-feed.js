function e(e, r) {
    var a = e.slice(), i = [];
    return a.forEach(function(e) {
        e.id && (i.push(e.id), e.dateFormat = new o.default(e.publicTime).fromNow(), e.authorImage = t(e.authorPic), 
        e.path = d.urlMap[e.type] && d.urlMap[e.type].url + "?articleId=" + e.id + "&authorId=" + e.authorId + "&scm=" + e.scm + "&pvid=" + r);
    }), a = u.formatFeedAdData(a, "content", "fd-d");
}

function t(e) {
    return /^\/\//.test(e) ? "https:" + e : e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../../api/fetch"), a = require("../../api/index"), i = require("../../models/news"), d = require("../../config/index"), u = require("../../api/ad/ad-core"), o = require("../../utils/moment");

exports.getCustomFeed = function(t, d) {
    return void 0 === d && (d = {
        size: 16,
        page: 1,
        pvId: 0,
        suv: 0,
        requestId: 0,
        picWidth: 248,
        picHeight: 175
    }), new Promise(function(u, o) {
        r.fetch({
            url: a.default.getFeed + t,
            data: d,
            parseArrayObject: i.NewsModel
        }).then(function(t) {
            t.data && t.data.data && u(e(t.data.data, d.pvId));
        }).catch(function(e) {
            o(e);
        });
    });
};