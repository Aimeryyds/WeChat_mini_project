var e = require("../../utils/nongli.js");

module.exports = {
    getRiLi: function(t) {
        var r = t.substring(0, 4), n = t.substring(4, 6), i = t.substring(6, 8), s = r + "-" + n + "-" + i, a = {}, g = [ "日", "一", "二", "三", "四", "五", "六" ], u = new Date(Date.parse(s.replace(/-/g, "/"))).getDay();
        a.xingqi = "星期" + g[u], a.year = r, a.month = n, a.getDate = i;
        var o = e.GetLunarDay(r, n, i);
        return a.nongli = o.substring(7, 11), a;
    }
};