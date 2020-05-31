function e(e, t) {
    for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
    return e;
}

function t(e) {
    var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
    var a = new Date(t.getFullYear(), 0, 4);
    a.setDate(a.getDate() - (a.getDay() + 6) % 7 + 3);
    var r = t.getTimezoneOffset() - a.getTimezoneOffset();
    t.setHours(t.getHours() - r);
    var n = (t - a) / 6048e5;
    return 1 + Math.floor(n);
}

function a(e) {
    var t = e.getDay();
    return 0 === t && (t = 7), t;
}

function r() {
    var e = new Date();
    return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}

var n = {
    date: function(r, n, o, i) {
        var d = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, s = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, m = /[^-+\dA-Z]/g, y = {
            default: "yyyy-mm-dd HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
            expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
        }, u = {
            dayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        };
        if (1 !== arguments.length || "string" != typeof r || /\d/.test(r) || (n = r, r = void 0), 
        (r = r || new Date()) instanceof Date || ("number" == typeof r && 10 == r.toString().length && (r *= 1e3), 
        r = new Date(r)), isNaN(r)) throw TypeError("Invalid date");
        var l = (n = String(y[n] || n || y.default)).slice(0, 4);
        "UTC:" !== l && "GMT:" !== l || (n = n.slice(4), o = !0, "GMT:" === l && (i = !0));
        var M = o ? "getUTC" : "get", g = r[M + "Date"](), h = r[M + "Day"](), T = r[M + "Month"](), f = r[M + "FullYear"](), D = r[M + "Hours"](), c = r[M + "Minutes"](), v = r[M + "Seconds"](), p = r[M + "Milliseconds"](), H = o ? 0 : r.getTimezoneOffset(), S = t(r), N = a(r), B = {
            d: g,
            dd: e(g),
            ddd: u.dayNames[h],
            dddd: u.dayNames[h + 7],
            m: T + 1,
            mm: e(T + 1),
            mmm: u.monthNames[T],
            mmmm: u.monthNames[T + 12],
            yy: String(f).slice(2),
            yyyy: f,
            h: D % 12 || 12,
            hh: e(D % 12 || 12),
            H: D,
            HH: e(D),
            M: c,
            MM: e(c),
            s: v,
            ss: e(v),
            l: e(p, 3),
            L: e(Math.round(p / 10)),
            t: D < 12 ? "a" : "p",
            tt: D < 12 ? "am" : "pm",
            T: D < 12 ? "A" : "P",
            TT: D < 12 ? "AM" : "PM",
            Z: i ? "GMT" : o ? "UTC" : (String(r).match(s) || [ "" ]).pop().replace(m, ""),
            o: (H > 0 ? "-" : "+") + e(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4),
            S: [ "th", "st", "nd", "rd" ][g % 10 > 3 ? 0 : (g % 100 - g % 10 != 10) * g % 10],
            W: S,
            N: N
        };
        return n.replace(d, function(e) {
            return e in B ? B[e] : e.slice(1, e.length - 1);
        });
    },
    prettyDate: function(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = r().getTime();
        if ((t = t || new Date()) instanceof Date || ("number" == typeof t && 10 == t.toString().length && (t *= 1e3), 
        t = new Date(t)), isNaN(t)) throw TypeError("Invalid date");
        var i = new Date().getFullYear();
        if (t.getFullYear() < i) {
            var d = n.date(t, "yyyy-mm-dd");
            return (d = d.split("-"))[0] + "年" + d[1] + "月" + d[2] + "日";
        }
        var s = a ? n.date(t, "HH:MM") : "", m = t.getTime();
        if (m >= o && m < o + 864e5) return a ? "今天 " + s : "今天";
        if (m < o && m >= o - 864e5) return a ? "昨天 " + s : "昨天";
        var y = e(t.getMonth() + 1), u = e(t.getDate());
        return a ? y + "月" + u + "日 " + s : y + "月" + u + "日";
    },
    longTime: function(t) {
        var a = Math.floor(t / 3600), r = Math.floor((t - 3600 * a) / 60), n = Math.floor(t - 60 * r - 3600 * a);
        return a ? e(a) + ":" + e(r) + ":" + e(n) : e(r) + ":" + e(n);
    },
    size: function(e, t) {
        var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = [ "B", "K", "M", "G", "T", "P", "E", "Z", "Y", "D", "N", "..." ], n = [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "DB", "NB", "..." ], o = void 0, i = void 0, d = void 0;
        return e = parseInt(e), t = parseInt(t), t = t >= 0 ? t : 2, e ? ((o = parseInt(Math.floor(Math.log(e) / Math.log(1024)))) > 4 && (o = 4), 
        i = e / Math.pow(1024, o), d = Math.pow(10, t), Math.round(i * d) / d + " " + (a ? n[o] : r[o])) : "0 B";
    },
    param: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return "";
        var r = [];
        for (var n in e) r.push(n + "=" + (a ? encodeURIComponent(e[n]) : e[n]));
        return r.join(t);
    }
};

module.exports = n;