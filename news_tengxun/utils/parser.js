var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/slicedToArray")), i = e(require("./mlodash")), r = e(require("./logger")), a = require("../services/jump"), s = /<\/P>|\n/i, l = /<!--\/?\w*?-->|<[^>]*?>|\n/gi, u = /<[^>]*?>/gi, d = /<(\/?\w*?)(\s[^>]*)?>/i, n = /<!--\/?\w*?-->/gi, f = /<!--(\/?\w*?)-->/i, g = {
    P: "p",
    TEXT: "text",
    STRONG: "strong",
    H1: "h1",
    H2: "h2",
    INTRO: "intro",
    BR: "br",
    LIST: "list",
    IMG: "img",
    VIDEO: "video",
    LIVEVIDEO: "livevideo",
    VIDEOALBUM: "videoalbum",
    OUTERLINK: "outerlink",
    LINK: "link",
    TIMELINE: "timeline",
    TIME: "time",
    EVENT: "event",
    TRUTH: "truth"
};

exports = module.exports = {
    textParser: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            var u = e.match(l);
            if (!u) return [ {
                type: g.P,
                desc: e
            } ];
            var n = e.split(l), o = [];
            n.shift();
            for (var p = [ o ], c = function(e) {
                p[0].push(e);
            }, E = function(e) {
                e._uid = "uid_" + Math.random().toString(36).substr(2, 10), o.push(e);
            }, m = [], h = function(e) {
                m.push(e), p.unshift([]);
            }, T = function(e) {
                return m[m.length - 1] === e ? (m.pop(), p.shift()) : null;
            }, I = 0; I < u.length; I++) {
                var v = u[I], y = n[I];
                if (d.test(v)) {
                    var N = v.match(d), _ = (0, t.default)(N, 2)[1], L = (void 0 === _ ? "" : _).toUpperCase(), R = void 0;
                    switch (L) {
                      case "H2":
                        h("H2");
                        break;

                      case "/H2":
                        R = T("H2"), i.default.get(R, "[0]") && E({
                            type: g.H2,
                            desc: i.default.get(R, "[0]")
                        });
                        break;

                      case "P":
                        h("P");
                        break;

                      case "/P":
                        R = T("P"), i.default.isEmpty(R) || E({
                            type: g.P,
                            children: R
                        });
                        break;

                      case "BR":
                        E({
                            type: g.BR
                        });
                        break;

                      case "STRONG":
                      case "B":
                        h("STRONG");
                        break;

                      case "/STRONG":
                      case "/B":
                        R = T("STRONG"), i.default.get(R, "[0]") && c({
                            type: g.STRONG,
                            desc: i.default.get(R, "[0]")
                        });
                        break;

                      default:
                        r.default.warn("TextParser: Unknown tag ", L);
                    }
                } else if (f.test(v)) {
                    var H = v.match(f), M = (0, t.default)(H, 2)[1], O = s[M];
                    if ("H2" === M) h("H2"); else if ("/H2" === M) {
                        var b = T("H2");
                        i.default.get(b, "[0]") && E({
                            type: g.H2,
                            desc: i.default.get(b, "[0]")
                        });
                    } else if ("H1" === M) h("H1"); else if ("/H1" === M) {
                        var w = T("H1");
                        i.default.get(w, "[0]") && E({
                            type: g.H1,
                            desc: i.default.get(w, "[0]")
                        });
                    } else if ("TRUTH_BEGIN" === M) h("TRUTH_BEGIN"); else if ("TRUTH_END" === M) {
                        var S = T("TRUTH_BEGIN");
                        i.default.isEmpty(S) || E({
                            type: g.TRUTH,
                            desc: S
                        });
                    } else if ("TIMELINE" === M) h("TIMELINE"); else if ("/TIMELINE" === M) {
                        var U = T("TIMELINE");
                        i.default.isEmpty(U) || E({
                            type: g.TIMELINE,
                            desc: U
                        });
                    } else if ("TIME" === M) h("TIME"); else if ("/TIME" === M) {
                        var P = T("TIME");
                        i.default.isEmpty(P) || E({
                            type: g.TIME,
                            desc: P
                        });
                    } else if ("EVENT" === M) h("EVENT"); else if ("/EVENT" === M) {
                        var V = T("EVENT");
                        i.default.isEmpty(V) || E({
                            type: g.EVENT,
                            desc: V
                        });
                    } else if (M.startsWith("LIST_") && O) E({
                        type: g.LIST,
                        desc: O
                    }); else if ("SPLITLINE" === M) E({
                        type: g.BR
                    }); else if (M.startsWith("VIDEO_") && O) {
                        var k = O.vid, x = O.img, B = O.duration, G = O.desc, D = O.type;
                        "1" === String(D) ? E({
                            type: g.LIVEVIDEO
                        }) : E({
                            type: g.VIDEO,
                            snapshot: i.default.isString(x) ? x : i.default.get(x, "imgurl640360.imgurl") || i.default.get(x, "imgurl640.imgurl"),
                            duration: B,
                            vid: k,
                            desc: G,
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10)
                        });
                    } else if (M.startsWith("MOBVIDEONEWS_") && O) {
                        var W = i.default.get(O, "img.imgurl640.imgurl") || i.default.get(O, "cms_orig_info.pic");
                        O.videolist && E({
                            type: g.VIDEOALBUM,
                            snapshot: W,
                            duration: i.default.get(O, "videolist[0].timelen"),
                            vid: i.default.get(O, "videolist[0].video.vid"),
                            desc: i.default.get(O, "videolist[0].video.desc"),
                            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
                            articleId: O.id,
                            atype: O.atype,
                            albumLength: i.default.get(O, "videolist", []).length
                        });
                    } else if (M.startsWith("IMG_") && O) {
                        var K = O.img, q = O.itype, A = O.desc, j = i.default.get(K, "imgurl0"), X = i.default.get(K, "imgurl640"), z = i.default.get(K, "imgurl641"), C = i.default.get(K, "imgurl1000"), F = i.default.get(K, "imgurlgif", {}), J = z || X || C || j, Q = i.default.get(F, "length"), Y = {
                            type: g.IMG,
                            desc: A,
                            itype: q,
                            img_url: J.imgurl,
                            img_show_height: 750 * parseInt(i.default.get(K, "imgurl0.height")) / parseInt(i.default.get(K, "imgurl0.width"))
                        };
                        1 === q && (Y.clicked = !1, Y.img_url_gif = F.imgurl, Y.size = parseInt(Q / 1024) >= 1 ? (Q / 1024).toFixed(1) + "M" : Q + "K"), 
                        E(Y);
                    } else if (M.startsWith("MOBARTEND_")) E({
                        type: g.INTRO,
                        desc: O.desc,
                        title: O.title
                    }); else if (M.startsWith("LINK_")) {
                        i.default.get(O, "cms_orig_info.url");
                        var Z = i.default.get(O, "cms_orig_info.desc");
                        (0, a.isSupportAtype)(O.atype) ? c({
                            type: g.LINK,
                            title: Z,
                            link: (0, a.atypeToUrl)(O.atype, {
                                id: O.id
                            })
                        }) : c({
                            type: g.OUTERLINK,
                            title: Z
                        });
                    } else if (M.startsWith("WXLINK_") || M.startsWith("OUTERLINK_")) {
                        var $ = i.default.get(O, "cms_orig_info.title");
                        c({
                            type: g.OUTERLINK,
                            title: $
                        });
                    } else r.default.warn("TextParser: Unknown attr ", M);
                } else r.default.warn("TextParser: Unknown tag ", v, v.length);
                i.default.isEmpty(y) || c(y);
            }
            for (p.length > 1 && r.default.warn("TextParser: Tags not matched"); p.length > 1; ) {
                var ee = p.shift();
                i.default.isEmpty(ee) || c({
                    type: g.P,
                    desc: ee
                });
            }
            return o;
        } catch (e) {
            return r.default.error(e), [];
        }
    },
    emojiParser: function(e) {
        var t = [ "[哈哈]", "[哭笑]", "[喜欢]", "[哭]", "[嘿嘿]", "[吃惊]", "[嘘]", "[汗]", "[生气]", "[坏笑]", "[大笑]", "[抓狂]", "[机智]", "[衰]", "[奸笑]", "[捂脸]", "[打脸]", "[鬼脸]", "[亲]", "[疑问]", "[愤怒]", "[打电话]", "[顶]", "[蜡烛]", "[心]", "[点赞]", "[二三三]", "[六六六]" ], r = /\[[\u4e00-\u9fa5]+\]/g, a = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(n, "").split(s).map(function(e) {
                return e.replace(u, "");
            }).filter(function(e) {
                return e.length;
            }).join(" ");
        }(e), l = a.match(r) || [], d = a.split(r), f = [], g = 0;
        f.push({
            type: "text",
            desc: d.shift(),
            count: g
        });
        var o = [ f ], p = function(e) {
            o[0].push(e);
        };
        if (!l) return a;
        for (var c = 0; c < l.length; c++) {
            var E = t.indexOf(l[c]), m = l[c], h = d[c];
            t[E] === m ? p({
                type: "emoji",
                desc: "https://mat1.gtimg.com/www/js/cp/f".concat(E + 1, ".gif"),
                count: ++g
            }) : -1 === E && p({
                type: "text",
                desc: m,
                count: ++g
            }), i.default.isEmpty(h) || p({
                type: "text",
                desc: h,
                count: ++g
            });
        }
        return f;
    },
    AttrType: g
};