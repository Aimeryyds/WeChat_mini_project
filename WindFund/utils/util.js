function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments[2];
    if (t.length <= 0) return t;
    2 === arguments.length && "function" == typeof arguments[1] && (i = n, n = !1);
    for (var o = i && "function" == typeof i, a = Math.floor(l / 2), u = t.splice(a, 1), s = r(u, 1)[0], l = t.length, c = o ? i(s) : s, p = [], h = [], f = null, g = 0; g < l; g++) f = o ? i(t[g]) : t[g], 
    (n ? f > c : f < c) ? p.push(t[g]) : h.push(t[g]);
    return e(p, n, i).concat([ s ], e(h, n, i));
}

var r = function() {
    function t(t, e) {
        var r = [], n = !0, i = !1, o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), 
            !e || r.length !== e); n = !0) ;
        } catch (t) {
            i = !0, o = t;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (i) throw o;
            }
        }
        return r;
    }
    return function(e, r) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = 6e4, o = 60 * i, a = 24 * o;

module.exports = {
    mixin: function(t, e) {
        var r, i, o = Array.prototype.slice.call(arguments), a = 1, u = "boolean" != typeof o[o.length - 1] || o.pop();
        for (1 === o.length && (t = this, a = 0); e = o[a++]; ) for (r in e) if (r in t) {
            if ("object" == n(e[r]) && "object" == n(t[r])) for (i in e[r]) t[r][i] = e[r][i];
        } else !u && r in t || (t[r] = e[r]);
        return t;
    },
    formatTime: function(e) {
        var r = e.getFullYear(), n = e.getMonth() + 1, i = e.getDate(), o = e.getHours(), a = e.getMinutes(), u = e.getSeconds();
        return [ r, n, i ].map(t).join("/") + " " + [ o, a, u ].map(t).join(":");
    },
    compare: function(t, e) {
        return function(r, n) {
            var i = r[t], o = n[t];
            return o < i ? e ? 1 : -1 : o > i ? e ? -1 : 1 : 0;
        };
    },
    getParameter: function(t) {
        var e = {};
        if (!t) return e;
        for (var r = t.substr(t.indexOf("?") + 1).split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            e[i[0].toLowerCase()] = i[1];
        }
        return e;
    },
    pySegSort: function(t, e) {
        if (!String.prototype.localeCompare) return null;
        var r, n = "*abcdefghjklmnopqrstwxyz".split(""), i = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split(""), o = [];
        return $.each(n, function(n) {
            r = {
                letter: this,
                data: []
            }, $.each(t, function() {
                (!i[n - 1] || i[n - 1].localeCompare(this) <= 0) && -1 == this.localeCompare(i[n]) && r.data.push(this);
            }), (e || r.data.length) && (o.push(r), r.data.sort(function(t, e) {
                return t.localeCompare(e);
            }));
        }), o;
    },
    toFixed: function(t, e) {
        return t *= Math.pow(10, e), (t = Math.round(t)) / Math.pow(10, e);
    },
    moneyFormart: function(t) {
        if (!t || "--" == t) return "--";
        var e = parseFloat(t);
        return e >= 1e8 ? (e / 1e8).toFixed(2) + "亿元" : e >= 1e4 ? (e / 1e4).toFixed(2) + "万元" : e.toFixed(2) + "元";
    },
    str_repeat: function(t, e) {
        return new Array(e + 1).join(t);
    },
    numMulti100: function(t) {
        return 1 * (t + "00").replace(/\.([\d]{2})/, "$1.");
    },
    isExist: function(t) {
        return t || 0 === t;
    },
    isBenifitExist: function(t) {
        return !(isNaN(t) || "" == t);
    },
    dealBenifitData: function(t, e) {
        return isNaN(t) || "" == t ? "--" : parseFloat(t).toFixed(e || 2);
    },
    formatTimeMark: function(t) {
        var e = Date.now() - t, r = Math.round;
        return e < i ? "现在" : e < o ? r(e / i) + "分钟前" : e < a ? r(e / o) + "小时前" : r(e / a) + "天前";
    },
    getRandom: function(t) {
        return Math.round(Math.random(t) * t);
    },
    quickSort: e,
    convertFundFlag: function(t) {
        switch (t) {
          case "BenifitToNow":
            return "成立至今";

          case "MmfUnitYield":
            return "万份收益";

          case "Annualyeild":
          case "Annualyeild":
            return "年化收益率";

          case "Latest3MonthBenifit":
            return "近三月";

          case "Latest6MonthBenifit":
            return "近六月";

          case "LatestMonthBenifit":
            return "近一月";

          case "LatestUnit":
            return "最新净值";

          case "LatestWeekBenifit":
            return "近一周";

          case "LatestYearBenifit":
            return "近一年";

          case "MmfAnnualizedYield":
            return "七日年化";

          case "ThisYearBenifit":
            return "今年以来";

          case "FundGroupAnnualIncome":
            return "年化收益";
        }
        return "";
    },
    numToPercent: function(t, e) {
        if (void 0 == t || isEmpty(t)) return "--";
        if (isNaN(t)) return t;
        if (t = 1 * (t + "00").replace(/\.([\d]{2})/, "$1."), e) {
            var r = "" + t, n = r.length, i = r.indexOf(".");
            return -1 == i || n - i < e ? t + "%" : (r = parseFloat(r).toFixed(e)) + "%";
        }
        return t + "%";
    }
}, Array.prototype.max = function() {
    return Math.max.apply({}, this);
}, Array.prototype.min = function() {
    return Math.min.apply({}, this);
}, Date.prototype.formart = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    }, r = {
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
    /(E+)/.test(t) && (t = t.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + r[this.getDay() + ""]));
    for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
    return t;
}, Date.prototype.addDays = function(t) {
    return this.setDate(this.getDate() + t), this;
}, String.prototype.trimChart = function(t, e) {
    return t ? "left" == e ? this.replace(new RegExp("^\\" + t + "+", "g"), "") : "right" == e ? this.replace(new RegExp("\\" + t + "+$", "g"), "") : this.replace(new RegExp("^\\" + t + "+|\\" + t + "+$", "g"), "") : this.replace(/^\s+|\s+$/g, "");
}, String.prototype.dateFormat = function() {
    return 8 == this.length ? this.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3") : this;
}, String.prototype.dateFormatNoYear = function() {
    return 8 == this.length ? this.replace(/^(\d{4})(\d{2})(\d{2})$/, "$2-$3") : this;
}, String.prototype.toArray = function() {
    return 0 == this.length ? [] : this.replace(/(.)(?=[^$])/g, "$1,").split(",");
}, String.prototype.len = function() {
    for (var t = 0, e = this.split(""), r = 0; r < e.length; r++) e[r].charCodeAt(0) < 299 ? t++ : t += 2;
    return t;
}, Number.prototype.FloatAdd = function(t) {
    var e, r, n;
    try {
        e = this.toString().split(".")[1].length;
    } catch (t) {
        e = 0;
    }
    try {
        r = t.toString().split(".")[1].length;
    } catch (t) {
        r = 0;
    }
    return n = Math.pow(10, Math.max(e, r)), (this * n + t * n) / n;
}, Number.prototype.FloatMulti = function(t) {
    var e = 0, r = this.toString(), n = t.toString();
    try {
        e += r.split(".")[1].length;
    } catch (t) {}
    try {
        e += n.split(".")[1].length;
    } catch (t) {}
    return Number(r.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, e);
}, Number.prototype.FloatDiv = function(t) {
    var e = 0, r = 0, n = this.toString(), i = t.toString();
    try {
        e = n.split(".")[1].length;
    } catch (t) {}
    try {
        r = i.split(".")[1].length;
    } catch (t) {}
    return Number(n.replace(".", "")) / Number(i.replace(".", "")) * Math.pow(10, r - e);
};