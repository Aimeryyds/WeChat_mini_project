Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
        var e = arguments[r];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
};

exports.default = {
    generatePluginData: function(r) {
        var e = getApp(), i = [], a = [], l = [], o = {}, n = !0, h = !1, p = void 0;
        try {
            for (var d, y = r[Symbol.iterator](); !(n = (d = y.next()).done); n = !0) {
                var f = d.value, s = t({}, f);
                f.type.startsWith("form_") || i.push(f.id);
                var u = t({}, s.globalstyle), c = "";
                if (u.height || (u.height = s.height), s.childprop.height && "media" != s.type && "" == s.father_id && (u.height = s.childprop.height), 
                f.type.startsWith("form_") && s.childprop.style && (u = t({}, u, s.childprop.style)), 
                "form_input" == f.type) {
                    var v = s.childprop.placeholder, g = "";
                    for (var b in v) {
                        var m = v[b];
                        "number" == typeof m && (m = e.px2rpx(m)), g += b + ":" + m + ";";
                    }
                    s.childprop.placeholderstylestr = g;
                }
                if (s.childprop.style) {
                    var x = [ "font-size", "color", "font-weight", "font-style", "text-decoration", "text-align", "line-height", "margin", "padding" ];
                    "video" == f.type && x.push("height");
                    var w = !0, _ = !1, O = void 0;
                    try {
                        for (var S, j = x[Symbol.iterator](); !(w = (S = j.next()).done); w = !0) {
                            var k = S.value;
                            s.childprop.style[k] && (u[k] = s.childprop.style[k]);
                        }
                    } catch (t) {
                        _ = !0, O = t;
                    } finally {
                        try {
                            !w && j.return && j.return();
                        } finally {
                            if (_) throw O;
                        }
                    }
                }
                if ("media" == s.type && s.width && (s.childprop.width = s.width), s.childprop["text-align"] && (u["text-align"] = s.childprop["text-align"]), 
                "form" == s.type) {
                    var P = u.height;
                    u["min-height"] = P, u.height = "auto";
                }
                for (var z in u) {
                    var F = u[z];
                    Number.isFinite(F) && "line-height" != z ? F = e.px2rpx(F) : "background-image" == z && "none" != F && (F = "url(" + F + ")"), 
                    c += z + ":" + F + ";";
                }
                "freelayout" == s.type && "no-repeat" == u["background-repeat"] && (c += "background-size: 100% 100%;"), 
                s.globalstylestr = c, "" != s.father_id ? l.push(s) : (s._children = [], a.push(s), 
                o[s.id] = s);
            }
        } catch (t) {
            h = !0, p = t;
        } finally {
            try {
                !n && y.return && y.return();
            } finally {
                if (h) throw p;
            }
        }
        var N = !0, W = !1, A = void 0;
        try {
            for (var D, M = l[Symbol.iterator](); !(N = (D = M.next()).done); N = !0) {
                var q = D.value, B = o[q.father_id];
                if (B) {
                    if ("freelayout" == B.type) {
                        var C = q.globalstylestr;
                        C += "position:absolute;";
                        var E = [ "left", "top", "width" ], G = !0, H = !1, I = void 0;
                        try {
                            for (var J, K = E[Symbol.iterator](); !(G = (J = K.next()).done); G = !0) {
                                var L = J.value, Q = q[L];
                                Number.isFinite(Q) && (Q = e.px2rpx(Q)), "media" == q.type && "width" == L ? C += "min-width:" + Q + ";" : C += L + ":" + Q + ";";
                            }
                        } catch (t) {
                            H = !0, I = t;
                        } finally {
                            try {
                                !G && K.return && K.return();
                            } finally {
                                if (H) throw I;
                            }
                        }
                        q.globalstylestr = C;
                    }
                    B._children.push(q);
                }
            }
        } catch (t) {
            W = !0, A = t;
        } finally {
            try {
                !N && M.return && M.return();
            } finally {
                if (W) throw A;
            }
        }
        return {
            plugindatas: a,
            plugins: i
        };
    }
};