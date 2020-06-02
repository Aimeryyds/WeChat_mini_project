function e(e) {
    return e < 10 && (e = "0" + e), e;
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = {
    renderTimer: function(t) {
        if (t <= 0) return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00"
        };
        var n = parseInt(t / 60 / 60 / 24, 10), r = parseInt(t / 60 / 60 % 24, 10), o = parseInt(t / 60 % 60, 10), a = parseInt(t % 60, 10);
        return n = e(n), r = e(r), o = e(o), a = e(a), {
            days: n,
            hours: r,
            minutes: o,
            seconds: a
        };
    },
    testMobile: function(e) {
        return !!/^1(3|4|5|7|8)\d{9}$/.test(e);
    },
    registComp: function() {
        for (var e = arguments[0], n = arguments.length, r = 1; r < n; r++) {
            var o = arguments[r];
            for (var a in o) if ("object" == t(o[a])) {
                var s = o[a];
                e.data || (e.data = {}), e.data[a] = s;
            } else e[a] = o[a];
        }
        return e;
    },
    isFunction: function(e) {
        return "function" == typeof e;
    },
    stringify: function(e) {
        return encodeURIComponent(JSON.stringify(e));
    },
    parse: function(e) {
        return JSON.parse(decodeURIComponent(e));
    },
    formatTime: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss", n = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var r in n) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
        return t;
    },
    getDateStr: function(e) {
        var t = new Date();
        t.setDate(t.getDate() + e);
        t.getFullYear();
        var n = t.getMonth() + 1, r = t.getDate();
        return (n > 9 ? n : "0" + n + "月") + (r > 9 ? r : "0" + r) + "日";
    },
    timestampToTime: function(e, t) {
        var n = new Date(e), r = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1, o = n.getDate(), a = (e - new Date(new Date().setHours(0, 0, 0, 0))) / 864e5, s = "";
        if (t) switch (a) {
          case 0:
            s = " 今天";
            break;

          case 1:
            s = " 明天";
            break;

          case 2:
            s = " 后天";
        }
        return r + "月" + (o > 9 ? o : "0" + o) + "日" + s;
    },
    getcurrentTimeYMD: function() {
        var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1;
        n = n < 10 ? "0" + n : n;
        var r = e.getDate();
        return r = r < 10 ? "0" + r : r, console.log("getcurrentTimeYMD===>", t + "-" + n + "-" + r), 
        t + "-" + n + "-" + r;
    },
    timestampToYMD: function(e) {
        var t = new Date(e), n = t.getFullYear(), r = t.getMonth() + 1;
        r = r < 10 ? "0" + r : r;
        var o = t.getDate();
        return o = o < 10 ? "0" + o : o, n + "-" + r + "-" + o;
    },
    getDateYMD: function(e) {
        var t = new Date();
        t.setDate(t.getDate() + e);
        var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate();
        return n + "-" + (r > 9 ? r : "0" + r + "-") + (o > 9 ? o : "0" + o);
    }
};