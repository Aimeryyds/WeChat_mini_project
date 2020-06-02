function e(e) {
    return Number(e) < 10 ? "0" + e : e;
}

exports = module.exports = {
    distanceInWords: function(t) {
        t = Number(t) || Date.now() / 1e3;
        var a = new Date(), r = a.getTime() / 1e3 - t, n = "";
        if (r < 900) n = "刚刚"; else if (r < 3600) n = Math.floor(r / 60) + "分钟前"; else if (r < 25200) n = Math.floor(r / 60 / 60) + "小时前"; else {
            var o = new Date(1e3 * t), c = e(o.getMinutes());
            n = e(o.getHours()) + ":" + c;
            var s = o.getDate();
            s !== a.getDate() && (n = o.getMonth() + 1 + "/" + s + " " + n);
        }
        return n;
    },
    timestampToSecond: function(e) {
        var t = ((e = parseInt(e) || 0) + "").length - 10;
        if (0 === t) return e + .001;
        var a = (e = t > 0 ? (e / Math.pow(10, t)).toFixed(3) : (e / 1e3).toFixed(3)).split(".");
        return a[1] && "000" !== a[1] || (a[1] = "001"), parseFloat(a[0] + "." + a[1]);
    },
    format: function(t, a) {
        if ("number" != typeof t && "string" != typeof t || (10 === (t + "").length && (t *= 1e3), 
        t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t)) return "";
        var r = e(t.getMinutes()), n = e(t.getHours()), o = e(t.getDate()), c = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ][t.getDay()], s = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ][t.getDay()], i = e(t.getMonth() + 1), u = "";
        switch (a) {
          case "DD":
            u = o;
            break;

          case "dd":
            u = c;
            break;

          case "dddd":
            u = s;
            break;

          case "MM月DD日":
            u = "".concat(i, "月").concat(o, "日");
            break;

          case "HH:mm":
            u = "".concat(n, ":").concat(r);
            break;

          default:
            u = "";
        }
        return u;
    },
    addLeftZero: e
};