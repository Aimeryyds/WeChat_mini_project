var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getNewsflash = function(e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = {
        catid: e
    };
    a.length > 0 && (o.ids = a);
    return i.request.post(i.URL.newsflash, o).then(function(e) {
        if (!e || 0 !== e.code) return Promise.reject(e);
        var i = (0, u.getHasReadArticle)(), o = e.newslist || [];
        if (a.length > 0) return {
            list: n(o, d, i)
        };
        for (var c = e.newsids || {}, l = o.length - 1; l >= 0; ) {
            var f = o[l], m = s(f.ts_pub_time);
            c[m] ? c[m].unshift({
                id: f.id,
                pubTime: f.ts_pub_time
            }) : c[m] = [ {
                id: f.id,
                pubTime: f.ts_pub_time
            } ], l -= 1;
        }
        var p = Object.keys(c).sort(function(e, t) {
            return Number(t) - Number(e);
        }), h = {};
        t.default.forEach(p, function(e, i) {
            var u = c[e];
            if (u.length) {
                var n = r.default.format(u[0].pubTime, "MM月DD日") + " · " + r.default.format(u[0].pubTime, "dddd");
                h[n] = i, u[u.length - 1].isLast = !0, t.default.forEach(u, function(e) {
                    e.pubTime = n, a.push(e.id), d[e.id] = e;
                });
            }
        });
        var b = n(o, d, i), g = t.default.reduce(b, function(e, t) {
            return e += t.length;
        }, 0);
        a.splice(0, g);
        var v = {
            list: b,
            dateMap: d,
            dateIndexMap: h,
            idList: a
        };
        return e.cats && e.cats.length && (v.category = t.default.map(e.cats, function(e) {
            return e.checked = !1, e;
        }), v.category[0].checked = !0), v;
    });
};

var t = e(require("../../utils/mlodash")), r = e(require("../../utils/time")), i = require("../../network/index"), a = require("../../store/index"), u = require("../../services/article");

function n(e, i, u) {
    return t.default.reduce(e, function(e, n) {
        a.comment.commentCountMap[n.id] = parseInt(n.comments) || 0;
        var s = i[n.id], d = s.pubTime, o = Number(n.atype), c = {
            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
            articleId: n.id,
            atype: o,
            title: n.title,
            intro: n.intro,
            posterShareImage: n.poster_share_image,
            pubTimeStr: r.default.format(n.ts_pub_time, "HH:mm"),
            commentCount: parseInt(n.comments) || 0,
            hasRead: u.has(n.id),
            isLast: s.isLast || !1
        };
        return 114 === o && 11 === Number(n.showType) ? (c.title = "#".concat(n.title, "#"), 
        c.topicId = t.default.get(n, "topicInfo.tpid", "")) : 101 !== o && 4 !== o && 56 !== o && 118 !== o || (c.title = "视频 | ".concat(n.title), 
        c.vid = n.vid), e[d] = e[d] || [], e[d].push(c), e;
    }, {});
}

function s(e) {
    var t = new Date(1e3 * e);
    return t.getFullYear() + "" + r.default.addLeftZero(t.getMonth() + 1) + r.default.addLeftZero(t.getDate());
}