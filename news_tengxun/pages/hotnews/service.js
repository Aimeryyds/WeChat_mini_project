var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTwentyFourHourNews = function(e, a) {
    return r.request.post(r.URL.getTwentyFourHourNews, {
        offset: e
    }).then(function(r) {
        if (!r || 0 !== r.ret) return Promise.reject(r);
        var o = (0, u.getHasReadArticle)(), s = t.default.reduce(r.newslist, function(e, i) {
            if (a.has(i.id)) return e;
            a.add(i.id);
            var r = t.default.get(i, "video_info", {}), u = t.default.get(i, "topicInfo", {});
            return e.push({
                _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                showType: i.showType,
                id: i.id,
                atype: Number(i.atype),
                source: i.chlname || i.source || "",
                title: i.title,
                pubTime: i.ts_pub_time,
                imgBig: i.img_big || "",
                imgSmall: i.img_small || "",
                imgThree: i.img_three || "",
                imgCount: i.img_count || 0,
                isFisOriginal: i.isFisOriginal,
                commentCount: i.comments,
                vid: r.vid,
                duration: r.duration,
                playCount: r.playcount,
                tpid: u.tpid || i.topic_id || i.tpid,
                joinCount: u.tpjoincount,
                readNum: u.readNum,
                hasRead: o.has(i.id)
            }), e;
        }, []), n = {
            offset: r.offset || 0,
            hasMore: r.offset < 199,
            list: s
        };
        if (0 === e) {
            var d = (0, u.getHasReadZwb)(), l = t.default.get(r, "zwbData", {}), m = t.default.get(l, "newslist[0]", {}), g = new Date(1e3 * r.timestamp), p = g.getHours(), f = l.zwb_type, c = l.zwb_day, h = d.has("".concat(c).concat(f)), w = !1;
            (1 == f && p >= 12 && p <= 17 || 2 == f && p >= 0 && p <= 6 || h) && (w = !0), n.zwbData = {
                id: l.id,
                title: m.title,
                imgBig: m.img_big,
                day: c,
                type: f,
                showSmall: w
            }, n.updateTime = i.default.format(r.timestamp, "HH:mm");
        }
        return n;
    });
};

var t = e(require("../../utils/mlodash")), i = (e(require("../../utils/logger")), 
e(require("../../utils/time"))), r = require("../../network/index"), u = require("../../services/article");