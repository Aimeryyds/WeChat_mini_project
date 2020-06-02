function e(e, t, s) {
    switch ("string" == typeof e && (e = new Date().parseDate(e)), "string" == typeof t && (t = new Date().parseDate(t)), 
    s) {
      case "ms":
        return parseInt(t - e);

      case "ss":
        return parseInt((t - e) / 1e3);

      case "mi":
        return parseInt((t - e) / 6e4);

      case "hh":
        return parseInt((t - e) / 36e5);

      case "d":
        return parseInt((t - e) / 864e5);

      case "w":
        return parseInt((t - e) / 6048e5);

      case "m":
        return t.getMonth() + 1 + 12 * (t.getFullYear() - e.getFullYear()) - (e.getMonth() + 1);

      case "y":
        return t.getFullYear() - e.getFullYear();
    }
}

function t(e) {
    var t = Date.parse(e), s = new Date(t);
    if (isNaN(s)) {
        var r = e.split("-");
        s = new Date(r[0], --r[1], r[2]);
    }
    return s;
}

Date.prototype.Format = function(e) {
    var t = e;
    return t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/yyyy|YYYY/, this.getFullYear())).replace(/yy|YY/, this.getYear() % 100 > 9 ? (this.getYear() % 100).toString() : "0" + this.getYear() % 100)).replace(/MM/, this.getMonth() > 8 ? (this.getMonth() + 1).toString() : "0" + (this.getMonth() + 1))).replace(/M/g, this.getMonth() + 1)).replace(/w|W/g, [ "日", "一", "二", "三", "四", "五", "六" ][this.getDay()])).replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : "0" + this.getDate())).replace(/d|D/g, this.getDate())).replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : "0" + this.getHours())).replace(/h|H/g, this.getHours())).replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : "0" + this.getMinutes())).replace(/m/g, this.getMinutes())).replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : "0" + this.getSeconds())).replace(/s|S/g, this.getSeconds());
}, Date.prototype.parseDate = function(e) {
    if ("string" == typeof e) {
        var t = !0, s = e.split("-");
        if (3 != s.length) {
            if (3 != (s = e.split("/")).length) return null;
            t = !1;
        }
        var r = new Date();
        return t ? r.setFullYear(s[0], s[1] - 1, s[2]) : r.setFullYear(s[2], s[1] - 1, s[0]), 
        r.setHours(0, 0, 0), r;
    }
    if (e instanceof Date) return e;
}, Date.prototype.isLeapYear = function() {
    return 0 == this.getYear() % 4 && (this.getYear() % 100 != 0 || this.getYear() % 400 == 0);
}, Date.prototype.formatDate = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    for (var s in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
    /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + {
        0: "/u65e5",
        1: "/u4e00",
        2: "/u4e8c",
        3: "/u4e09",
        4: "/u56db",
        5: "/u4e94",
        6: "/u516d"
    }[this.getDay() + ""])), t) new RegExp("(" + s + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[s] : ("00" + t[s]).substr(("" + t[s]).length)));
    return e;
}, Date.prototype.addDate = function(e, t, s, r, a) {
    t = parseInt(t);
    var n = function(e) {
        return !function(e) {
            if (null == e || null == e || 0 == e.length || "" == e) return !0;
        }(e);
    };
    hours = this.getHours(), n(s) && (hours = s);
    var i = this.getMinutes();
    n(r) && (i = r);
    var g = this.getSeconds();
    switch (n(a) && (g = a), e) {
      case "ms":
      case "s":
        return new Date(Date.parse(this) + 1e3 * t);

      case "mi":
        return new Date(Date.parse(this) + 6e4 * t);

      case "h":
        return new Date(Date.parse(this) + 36e5 * t);

      case "d":
      case "40":
        return new Date(Date.parse(this) + 864e5 * t);

      case "w":
        return new Date(Date.parse(this) + 6048e5 * t);

      case "q":
        return new Date(this.getFullYear(), this.getMonth() + 3 * t, this.getDate(), hours, i, g);

      case "M":
      case "month":
      case "41":
        return new Date(this.getFullYear(), this.getMonth() + t, this.getDate(), hours, i, g);

      case "y":
      case "Y":
      case "year":
      case "42":
        return new Date(this.getFullYear() + t, this.getMonth(), this.getDate(), hours, i, g);
    }
}, Date.prototype.dateDiff = function(e, t) {
    switch ("string" == typeof e && (e = new Date().parseDate(e)), t) {
      case "ms":
        return parseInt(e - startDate);

      case "ss":
        return parseInt((e - startDate) / 1e3);

      case "mi":
        return parseInt((e - startDate) / 6e4);

      case "hh":
        return parseInt((e - startDate) / 36e5);

      case "d":
        return parseInt((e - startDate) / 864e5);

      case "w":
        return parseInt((e - startDate) / 6048e5);

      case "m":
        return e.getMonth() + 1 + 12 * (e.getFullYear() - startDate.getFullYear()) - (startDate.getMonth() + 1);

      case "y":
        return e.getFullYear() - startDate.getFullYear();
    }
}, Date.prototype.after = function(e) {
    return Date.parse(this.Format("MM/dd/yyyy")) > Date.parse(e.Format("MM/dd/yyyy"));
}, Date.prototype.before = function(e) {
    return Date.parse(this.Format("MM/dd/yyyy")) < Date.parse(e.Format("MM/dd/yyyy"));
}, Date.prototype.DateAdd = function(e, t) {
    switch (e) {
      case "s":
        return new Date(Date.parse(this) + 1e3 * t);

      case "n":
        return new Date(Date.parse(this) + 6e4 * t);

      case "h":
        return new Date(Date.parse(this) + 36e5 * t);

      case "d":
        return new Date(Date.parse(this) + 864e5 * t);

      case "w":
        return new Date(Date.parse(this) + 6048e5 * t);

      case "q":
        return new Date(this.getFullYear(), this.getMonth() + 3 * t, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());

      case "m":
        return new Date(this.getFullYear(), this.getMonth() + t, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());

      case "y":
        return new Date(this.getFullYear() + t, this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());
    }
}, module.exports = {
    ages: function(e) {
        var s = new Date(), r = t(e), a = s.getFullYear() - r.getFullYear();
        return s.getMonth() < r.getMonth() ? a -= 1 : s.getMonth() == r.getMonth() && s.getDate() <= r.getDate() && (a -= 1), 
        a;
    },
    dateDiff: e,
    dateDiffInDays: function(t, s) {
        return e(t, s, "d");
    },
    timestampToTime: function(e, t) {
        var s = new Date(e), r = s.getFullYear() + t, a = (s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) : s.getMonth() + 1) + t, n = s.getDate() < 10 ? "0" + s.getDate() : s.getDate();
        return s.getHours(), s.getHours(), s.getMinutes(), s.getMinutes(), s.getSeconds(), 
        s.getSeconds(), r + a + n;
    },
    stringToDate: t
};