function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function e(t, e) {
    var e = e || {};
    wx.showToast({
        title: t || "操作成功",
        icon: e.icon || "success",
        duration: 2e3
    }), setTimeout(function() {
        wx.hideToast();
    }, e.delay || 2e3);
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate(), s = e.getHours(), o = e.getMinutes(), u = e.getSeconds();
        return [ n, a, r ].map(t).join("/") + " " + [ s, o, u ].map(t).join(":");
    },
    request: function(t) {
        wx.request({
            url: "https://" + t.url + (t.url.indexOf("?") > -1 ? "&" : "?") + "t=" + +new Date(),
            data: t.data,
            method: t.method || "GET",
            header: {
                "Content-Type": (t.header || {})["Content-Type"] || "POST" === t.method ? "application/x-www-form-urlencoded" : "application/json"
            },
            success: function(e) {
                t.success && "function" == typeof t.success && t.success(e);
            },
            fail: function() {
                t.fail && "function" == typeof t.fail && t.fail(), e("网络异常");
            },
            complete: function() {}
        });
    },
    json2Form: function(t) {
        var e = [];
        for (var n in t) e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return e.join("&");
    },
    getIDCardDate: function(t) {
        return (t = t.trim()).slice(6, 10) + "-" + t.slice(10, 12) + "-" + t.slice(12, 14);
    },
    getIDCardSex: function(t) {
        return t = t.trim(), parseInt(t.substr(16, 1)) % 2 == 1 ? 1 : 0;
    },
    toast: e,
    countDown: function(t, e, n) {
        var a = null;
        (t = +t) < 1 / 0 && (a = setInterval(function() {
            t--, "function" == typeof e && e.call(null, t), 0 === t && (clearInterval(a), a = null, 
            "function" == typeof n && n());
        }, 1e3));
    },
    identityCodeValid: function(t, e) {
        var n, a, r = t, s = new Array();
        return s = r.split(""), !!r && "111111111111111" != r && !!(parseInt(r.substr(6, 4)) % 4 == 0 || parseInt(r.substr(6, 4)) % 100 == 0 && parseInt(r.substr(6, 4)) % 4 == 0 ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/).test(r) && (a = 7 * (parseInt(s[0]) + parseInt(s[10])) + 9 * (parseInt(s[1]) + parseInt(s[11])) + 10 * (parseInt(s[2]) + parseInt(s[12])) + 5 * (parseInt(s[3]) + parseInt(s[13])) + 8 * (parseInt(s[4]) + parseInt(s[14])) + 4 * (parseInt(s[5]) + parseInt(s[15])) + 2 * (parseInt(s[6]) + parseInt(s[16])) + 1 * parseInt(s[7]) + 6 * parseInt(s[8]) + 3 * parseInt(s[9]), 
        n = a % 11, "10X98765432".substr(n, 1) == s[17].toUpperCase());
    },
    depthClone: function(t) {
        return JSON.parse(JSON.stringify(t));
    },
    createDate: function(t) {
        var e = this, n = t || {}, a = new Date();
        n.baseDate && (a = new Date(n.baseDate.getTime()));
        var r, s, o, u = a.getFullYear(), i = u, c = a.getMonth(), l = a.getDate(), p = 0;
        return n.year && (r = a.getFullYear(), a.setYear(r + n.year)), u !== i && e.isLeapYear(i) && 1 === c && 29 === l && (p = 1), 
        n.month && (s = a.getMonth(), a.setMonth(s + n.month - p)), p && a.setDate(0), n.date && (o = a.getDate(), 
        p ? a.setDate(0) : a.setDate(o + n.date)), a.getFullYear() + "-" + (a.getMonth() + 1 > 9 ? a.getMonth() + 1 : "0" + (a.getMonth() + 1)) + "-" + (a.getDate() > 9 ? a.getDate() : "0" + a.getDate());
    },
    getFullAge: function(t) {
        var e = t || {}, n = e.nowDate || new Date(), a = new Date(e.select), r = 0, s = 0, o = 0, u = 0;
        return r = n.getFullYear() - a.getFullYear(), s = n.getMonth() - a.getMonth(), o = n.getDate() - a.getDate(), 
        s < 0 ? u = -1 : 0 === s && o < 0 && (u = -1), r + u;
    }
};