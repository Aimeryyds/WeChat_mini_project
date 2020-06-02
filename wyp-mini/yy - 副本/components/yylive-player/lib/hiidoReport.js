var n = function() {
    function n(n, t) {
        function e(n, t) {
            return n << t | n >>> 32 - t;
        }
        function r(n, t) {
            var e, r, o, i, a;
            return o = 2147483648 & n, i = 2147483648 & t, e = 1073741824 & n, r = 1073741824 & t, 
            a = (1073741823 & n) + (1073741823 & t), e & r ? 2147483648 ^ a ^ o ^ i : e | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
        }
        function o(n, t, e) {
            return n & t | ~n & e;
        }
        function i(n, t, e) {
            return n & e | t & ~e;
        }
        function a(n, t, e) {
            return n ^ t ^ e;
        }
        function u(n, t, e) {
            return t ^ (n | ~e);
        }
        function c(n, t, i, a, u, c, f) {
            return n = r(n, r(r(o(t, i, a), u), f)), r(e(n, c), t);
        }
        function f(n, t, o, a, u, c, f) {
            return n = r(n, r(r(i(t, o, a), u), f)), r(e(n, c), t);
        }
        function s(n, t, o, i, u, c, f) {
            return n = r(n, r(r(a(t, o, i), u), f)), r(e(n, c), t);
        }
        function l(n, t, o, i, a, c, f) {
            return n = r(n, r(r(u(t, o, i), a), f)), r(e(n, c), t);
        }
        function d(n) {
            var t, e = "", r = "";
            for (t = 0; t <= 3; t++) e += (r = "0" + (n >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
            return e;
        }
        var h, y, v, g, w, m, x, S, p, I = Array();
        for (I = function(n) {
            for (var t, e = n.length, r = e + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), a = 0, u = 0; u < e; ) a = u % 4 * 8, 
            i[t = (u - u % 4) / 4] = i[t] | n.charCodeAt(u) << a, u++;
            return t = (u - u % 4) / 4, a = u % 4 * 8, i[t] = i[t] | 128 << a, i[o - 2] = e << 3, 
            i[o - 1] = e >>> 29, i;
        }(n), m = 1732584193, x = 4023233417, S = 2562383102, p = 271733878, h = 0; h < I.length; h += 16) y = m, 
        v = x, g = S, w = p, x = l(x = l(x = l(x = l(x = s(x = s(x = s(x = s(x = f(x = f(x = f(x = f(x = c(x = c(x = c(x = c(x, S = c(S, p = c(p, m = c(m, x, S, p, I[h + 0], 7, 3614090360), x, S, I[h + 1], 12, 3905402710), m, x, I[h + 2], 17, 606105819), p, m, I[h + 3], 22, 3250441966), S = c(S, p = c(p, m = c(m, x, S, p, I[h + 4], 7, 4118548399), x, S, I[h + 5], 12, 1200080426), m, x, I[h + 6], 17, 2821735955), p, m, I[h + 7], 22, 4249261313), S = c(S, p = c(p, m = c(m, x, S, p, I[h + 8], 7, 1770035416), x, S, I[h + 9], 12, 2336552879), m, x, I[h + 10], 17, 4294925233), p, m, I[h + 11], 22, 2304563134), S = c(S, p = c(p, m = c(m, x, S, p, I[h + 12], 7, 1804603682), x, S, I[h + 13], 12, 4254626195), m, x, I[h + 14], 17, 2792965006), p, m, I[h + 15], 22, 1236535329), S = f(S, p = f(p, m = f(m, x, S, p, I[h + 1], 5, 4129170786), x, S, I[h + 6], 9, 3225465664), m, x, I[h + 11], 14, 643717713), p, m, I[h + 0], 20, 3921069994), S = f(S, p = f(p, m = f(m, x, S, p, I[h + 5], 5, 3593408605), x, S, I[h + 10], 9, 38016083), m, x, I[h + 15], 14, 3634488961), p, m, I[h + 4], 20, 3889429448), S = f(S, p = f(p, m = f(m, x, S, p, I[h + 9], 5, 568446438), x, S, I[h + 14], 9, 3275163606), m, x, I[h + 3], 14, 4107603335), p, m, I[h + 8], 20, 1163531501), S = f(S, p = f(p, m = f(m, x, S, p, I[h + 13], 5, 2850285829), x, S, I[h + 2], 9, 4243563512), m, x, I[h + 7], 14, 1735328473), p, m, I[h + 12], 20, 2368359562), S = s(S, p = s(p, m = s(m, x, S, p, I[h + 5], 4, 4294588738), x, S, I[h + 8], 11, 2272392833), m, x, I[h + 11], 16, 1839030562), p, m, I[h + 14], 23, 4259657740), S = s(S, p = s(p, m = s(m, x, S, p, I[h + 1], 4, 2763975236), x, S, I[h + 4], 11, 1272893353), m, x, I[h + 7], 16, 4139469664), p, m, I[h + 10], 23, 3200236656), S = s(S, p = s(p, m = s(m, x, S, p, I[h + 13], 4, 681279174), x, S, I[h + 0], 11, 3936430074), m, x, I[h + 3], 16, 3572445317), p, m, I[h + 6], 23, 76029189), S = s(S, p = s(p, m = s(m, x, S, p, I[h + 9], 4, 3654602809), x, S, I[h + 12], 11, 3873151461), m, x, I[h + 15], 16, 530742520), p, m, I[h + 2], 23, 3299628645), S = l(S, p = l(p, m = l(m, x, S, p, I[h + 0], 6, 4096336452), x, S, I[h + 7], 10, 1126891415), m, x, I[h + 14], 15, 2878612391), p, m, I[h + 5], 21, 4237533241), S = l(S, p = l(p, m = l(m, x, S, p, I[h + 12], 6, 1700485571), x, S, I[h + 3], 10, 2399980690), m, x, I[h + 10], 15, 4293915773), p, m, I[h + 1], 21, 2240044497), S = l(S, p = l(p, m = l(m, x, S, p, I[h + 8], 6, 1873313359), x, S, I[h + 15], 10, 4264355552), m, x, I[h + 6], 15, 2734768916), p, m, I[h + 13], 21, 1309151649), S = l(S, p = l(p, m = l(m, x, S, p, I[h + 4], 6, 4149444226), x, S, I[h + 11], 10, 3174756917), m, x, I[h + 2], 15, 718787259), p, m, I[h + 9], 21, 3951481745), 
        m = r(m, y), x = r(x, v), S = r(S, g), p = r(p, w);
        return 32 == t ? d(m) + d(x) + d(S) + d(p) : d(x) + d(S);
    }
    function t() {
        var n = wx.getStorageSync("op_hiido_ui");
        return n || (n = Math.random().toString(), wx.setStorageSync("op_hiido_ui", n)), 
        n;
    }
    function e() {
        y = t(), Object.assign(g, {
            ui: y,
            wyy: y
        }), r();
    }
    function r() {
        var t = Date.parse(new Date()), e = s(4);
        l = n("".concat(t).concat(y).concat(e)), Object.assign(g, {
            sessid: l
        }), o(), u();
    }
    function o() {
        c(2, Math.round(new Date() / 1e3), 0), f();
    }
    function i() {
        c(3, Math.round(new Date() / 1e3), Math.round(Math.round(new Date() / 1e3) - v / 1e3)), 
        f();
    }
    function a() {
        clearInterval(x), clearInterval(S), x = null, S = null, d = 0, h = 0, i(), l = !1;
    }
    function u() {
        w = 0, x = setInterval(function() {
            var n = Math.round(new Date() / 1e3), t = n, e = Math.round(n - v / 1e3);
            w < 18 && e < 190 ? (w++, c(1, t, e), f()) : (clearInterval(x), x = null, S = setInterval(function() {
                var n = Math.round(new Date() / 1e3);
                c(1, n, Math.round(n - v / 1e3)), f();
            }, 6e4));
        }, 1e4);
    }
    function c(t, e, r) {
        var o = l + e + m;
        Object.assign(g, {
            type: t,
            time: e,
            dr: r,
            ky: n(o, 32)
        });
    }
    function f() {
        var n = "act=webentchndo", t = "";
        for (var e in g) n += "&" + e + "=" + g[e];
        t = "https://ylog.hiido.com/c.gif?" + n;
        try {
            console.info("hiido:" + t), wx.request({
                url: t,
                data: "",
                header: {
                    accept: "image/*"
                },
                method: "GET",
                success: function(n) {
                    console.info("hiido success:" + n.statusCode);
                },
                fail: function() {
                    console.info("hiido fail");
                }
            });
        } catch (n) {}
    }
    function s(n) {
        for (var t = n, e = "0123456789abcdefghijklmnopqrstuvwxyz", r = 0, o = ""; r < t; r++) o += e.charAt(Math.floor(Math.random() * e.length));
        return o;
    }
    var l = !1, d = 0, h = 0, y = "", v = !1, g = {}, w = 0, m = "wx_xcx", x = null, S = null, p = null, I = wx.getSystemInfoSync();
    return {
        onJoinChannel: function(n, t) {
            var r = n, o = t || n;
            if (l && l.length > 0) {
                if (r == d && o == h) return;
                a();
            }
            d = r, h = o, w = 0, clearInterval(x), clearInterval(S), x = null, S = null;
            var i = wx.getStorageSync("HDSDK_openid") || "", u = wx.getStorageSync("udbInfo"), c = "gh_2363cdc477ae://pages/room/room?sid=" + r + "&ssid=" + o;
            if (v = new Date(), !p) if (I || (I = wx.getSystemInfoSync()), I) {
                var f = I.system;
                f || (f = I.platform), p = f.toLowerCase().indexOf("ios") >= 0 ? "yywxmini_ios" : "yywxmini_android";
            } else p = "yywxmini_android";
            var s = {
                deviceid: i
            };
            g = {
                time: 0,
                dr: 0,
                sessid: "",
                type: 0,
                rel: p,
                tempid: "",
                uid: u.yyuid ? u.yyuid : null,
                sid: r,
                subsid: o,
                source: "",
                cpuid: "",
                ref: encodeURIComponent(c),
                info: JSON.stringify(s),
                ky: ""
            }, e();
        },
        onLeaveChannel: function() {
            a();
        }
    };
}();

module.exports = {
    webentchndo: n
};