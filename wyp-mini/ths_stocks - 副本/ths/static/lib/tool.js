Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = {
    getTime: function(e, t) {
        var a = e ? new Date(1e3 * e) : new Date(), r = a.getFullYear(), s = a.getMonth() + 1, c = a.getDate(), n = a.getHours(), u = n < 10 ? "0" + n : n, o = a.getMinutes(), b = o < 10 ? "0" + o : o, g = "";
        switch (a.getDay()) {
          case 1:
            g = "一";
            break;

          case 2:
            g = "二";
            break;

          case 3:
            g = "三";
            break;

          case 4:
            g = "四";
            break;

          case 5:
            g = "五";
            break;

          case 6:
            g = "六";
            break;

          case 0:
            g = "日";
            break;

          default:
            g = "";
        }
        return 1 == t ? u + ":" + b : r + "年" + s + "月" + c + "日 星期" + g;
    },
    getMarkAndCode: function(e, t, a) {
        return a[e] + "_" + t + "_" + e;
    }
};