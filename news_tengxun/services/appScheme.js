var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/defineProperty")), r = require("../store/index"), o = e(require("../utils/mlodash")), a = e(require("../utils/logger"));

function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, o);
    }
    return r;
}

var n = {
    normal_share_detail_page: "0",
    smallvideo_share_detail_page: "118",
    video_share_detail_page: "4",
    videotopic_share_detail_page: "101"
}, c = {
    normal_share_detail_page: "normal",
    smallvideo_share_detail_page: "smallvideo",
    video_share_detail_page: "video",
    videotopic_share_detail_page: "videoalbum"
};

exports = module.exports = {
    getScheme: function(e) {
        var s = e.type, l = void 0 === s ? "article" : s, p = e.fromPage, m = void 0 === p ? "normal_share_detail_page" : p, d = e.bossName, u = void 0 === d ? "" : d, f = e.options, _ = void 0 === f ? {} : f;
        a.default.info("生成scheme参数: type=".concat(l, ", fromPage=").concat(m, ", bossName=").concat(u, ",options="), _);
        var h = "";
        h = "dailyHot" === l ? "qqnews://article_9528" : "qqnews://article_9527";
        var b = "ios" === r.systemInfo.platform ? n[m] : c[m], g = function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var o = null != arguments[r] ? arguments[r] : {};
                r % 2 ? i(Object(o), !0).forEach(function(r) {
                    (0, t.default)(e, r, o[r]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }({}, _, {
            from: "weixin",
            chlid: "weixin",
            isminiprogram: 1,
            startextras: JSON.stringify({
                path: "mini",
                shareinfo: "mini|".concat(u, "|").concat(b)
            })
        });
        "ios" === r.systemInfo.platform && (g.extinfo = r.userInfo.openid), g.nm && (g.nm = g.nm.substr(0, 19), 
        14 === g.nm.length && (g.nm += "00")), g.chlid && "".concat(Number(g.chlid)) === "".concat(g.chlid) && (g.chlid = "news_news_top");
        var v = "";
        "article" === l && (v += "&nm=".concat(g.nm), delete g.nm);
        var y = o.default.map(g, function(e, t) {
            return "".concat(t, "=").concat(encodeURIComponent(e));
        }).join("&");
        return v += "&".concat(y), h = "".concat(h, "?").concat(v.substr(1)), a.default.info("生成scheme结果：", h), 
        h;
    }
};