var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, n = function(e, n, o) {
        var r = {
            exports: {}
        };
        t[e] = {
            status: 0,
            func: n,
            req: o,
            m: r
        };
    }, o = function(n, o) {
        if (!t[n]) return require(o);
        if (!t[n].status) {
            var r = {
                exports: {}
            };
            t[n].status = 1, t[n].func(t[n].req, r, r.exports), "object" === e(r.exports) ? (t[n].m.exports.__proto__ = r.exports.__proto__, 
            Object.keys(r.exports).forEach(function(e) {
                t[n].m.exports[e] = r.exports[e];
                var o = Object.getOwnPropertyDescriptor(r.exports, e);
                o && o.configurable && Object.defineProperty(r.exports, e, {
                    set: function(o) {
                        t[n].m.exports[e] = o;
                    },
                    get: function() {
                        return t[n].m.exports[e];
                    }
                });
            }), r.exports.__esModule && Object.defineProperty(t[n].m.exports, "__esModule", {
                value: !0
            })) : t[n].m.exports = r.exports;
        }
        return t[n].m.exports;
    };
    return n(1583216923121, function(e, t, n) {
        "undefined" == typeof process || "renderer" === process.type ? t.exports = e("./browser.js") : t.exports = e("./node.js");
    }, function(e) {
        return o({
            "./browser.js": 1583216923122,
            "./node.js": 1583216923124
        }[e], e);
    }), n(1583216923122, function(t, n, o) {
        function r() {
            var e;
            try {
                e = o.storage.debug;
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }
        (o = n.exports = t("./debug")).log = function() {
            return "object" === ("undefined" == typeof console ? "undefined" : e(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, o.formatArgs = function(e) {
            var t = this.useColors;
            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + o.humanize(this.diff), 
            t) {
                var n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                var r = 0, s = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (r++, "%c" === e && (s = r));
                }), e.splice(s, 0, n);
            }
        }, o.save = function(e) {
            try {
                null == e ? o.storage.removeItem("debug") : o.storage.debug = e;
            } catch (e) {}
        }, o.load = r, o.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, o.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage;
            } catch (e) {}
        }(), o.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        o.formatters.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        }, o.enable(r());
    }, function(e) {
        return o({
            "./debug": 1583216923123
        }[e], e);
    }), n(1583216923123, function(e, t, n) {
        function o(e) {
            var t, o = 0;
            for (t in e) o = (o << 5) - o + e.charCodeAt(t), o |= 0;
            return n.colors[Math.abs(o) % n.colors.length];
        }
        function r(e) {
            function t() {
                if (t.enabled) {
                    var e = t, o = +new Date(), s = o - (r || o);
                    e.diff = s, e.prev = r, e.curr = o, r = o;
                    for (var i = new Array(arguments.length), c = 0; c < i.length; c++) i[c] = arguments[c];
                    i[0] = n.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                    var u = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(t, o) {
                        if ("%%" === t) return t;
                        u++;
                        var r = n.formatters[o];
                        if ("function" == typeof r) {
                            var s = i[u];
                            t = r.call(e, s), i.splice(u, 1), u--;
                        }
                        return t;
                    }), n.formatArgs.call(e, i), (t.log || n.log || console.log.bind(console)).apply(e, i);
                }
            }
            var r;
            return t.namespace = e, t.enabled = n.enabled(e), t.useColors = n.useColors(), t.color = o(e), 
            t.destroy = s, "function" == typeof n.init && n.init(t), n.instances.push(t), t;
        }
        function s() {
            var e = n.instances.indexOf(this);
            return -1 !== e && (n.instances.splice(e, 1), !0);
        }
        (n = t.exports = r.debug = r.default = r).coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
        }, n.disable = function() {
            n.enable("");
        }, n.enable = function(e) {
            n.save(e), n.names = [], n.skips = [];
            var t, o = ("string" == typeof e ? e : "").split(/[\s,]+/), r = o.length;
            for (t = 0; t < r; t++) o[t] && ("-" === (e = o[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
            for (t = 0; t < n.instances.length; t++) {
                var s = n.instances[t];
                s.enabled = n.enabled(s.namespace);
            }
        }, n.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            var t, o;
            for (t = 0, o = n.skips.length; t < o; t++) if (n.skips[t].test(e)) return !1;
            for (t = 0, o = n.names.length; t < o; t++) if (n.names[t].test(e)) return !0;
            return !1;
        }, n.humanize = e("ms"), n.instances = [], n.names = [], n.skips = [], n.formatters = {};
    }, function(e) {
        return o({}[e], e);
    }), n(1583216923124, function(e, t, n) {
        function o() {
            return n.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
        }
        function r() {
            return process.env.DEBUG;
        }
        var s = e("tty"), i = e("util");
        (n = t.exports = e("./debug")).init = function(e) {
            e.inspectOpts = {};
            for (var t = Object.keys(n.inspectOpts), o = 0; o < t.length; o++) e.inspectOpts[t[o]] = n.inspectOpts[t[o]];
        }, n.log = function() {
            return process.stderr.write(i.format.apply(i, arguments) + "\n");
        }, n.formatArgs = function(e) {
            var t = this.namespace;
            if (this.useColors) {
                var r = this.color, s = "[3" + (r < 8 ? r : "8;5;" + r), i = "  " + s + ";1m" + t + " [0m";
                e[0] = i + e[0].split("\n").join("\n" + i), e.push(s + "m+" + n.humanize(this.diff) + "[0m");
            } else e[0] = o() + t + " " + e[0];
        }, n.save = function(e) {
            null == e ? delete process.env.DEBUG : process.env.DEBUG = e;
        }, n.load = r, n.useColors = function() {
            return "colors" in n.inspectOpts ? Boolean(n.inspectOpts.colors) : s.isatty(process.stderr.fd);
        }, n.colors = [ 6, 2, 3, 4, 5, 1 ];
        try {
            var c = e("supports-color");
            c && c.level >= 2 && (n.colors = [ 20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221 ]);
        } catch (e) {}
        n.inspectOpts = Object.keys(process.env).filter(function(e) {
            return /^debug_/i.test(e);
        }).reduce(function(e, t) {
            var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(e, t) {
                return t.toUpperCase();
            }), o = process.env[t];
            return o = !!/^(yes|on|true|enabled)$/i.test(o) || !/^(no|off|false|disabled)$/i.test(o) && ("null" === o ? null : Number(o)), 
            e[n] = o, e;
        }, {}), n.formatters.o = function(e) {
            return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts).split("\n").map(function(e) {
                return e.trim();
            }).join(" ");
        }, n.formatters.O = function(e) {
            return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts);
        }, n.enable(r());
    }, function(e) {
        return o({
            "./debug": 1583216923123
        }[e], e);
    }), o(1583216923121);
}();