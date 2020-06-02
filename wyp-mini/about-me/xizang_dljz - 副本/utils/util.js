function t(t, n) {
    return new Date(t).format(n);
}

module.exports = {
    loading: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
    },
    toastErrorConn: function() {
        this.toast("连接失败", function() {
            setTimeout(function() {
                wx.hideToast();
            }, 2e3);
        });
    },
    toast: function(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
        wx.showToast({
            title: t,
            duration: o,
            success: function(t) {
                "function" == typeof n && n();
            }
        });
    },
    alert: function(t, n, o) {
        wx.showModal({
            title: t,
            content: n,
            showCancel: !1,
            success: function(t) {
                "function" == typeof o && o();
            }
        });
    },
    confirm: function(t, n, o, e) {
        wx.showModal({
            title: t,
            content: n,
            success: function(t) {
                t.confirm ? "function" == typeof o && o() : "function" == typeof e && e();
            }
        });
    },
    call: function(t) {
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    format: t,
    formatYMD: function(n) {
        return t(n, "yyyy-MM-dd");
    },
    formatTime: function(n) {
        return t(n, "yyyy-MM-dd hh:mm:ss");
    },
    diffNow: function(t) {
        return new Date(t).getTime() - new Date().getTime();
    },
    isBlank: function(t) {
        return void 0 == t || 0 == t.length;
    },
    phoneReg: function(t) {
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(t);
    },
    getArrayMax: function(t) {
        return Math.max.apply(null, t);
    },
    getArrayMin: function(t) {
        return Math.min.apply(null, t);
    },
    countdown: function(t) {
        var i = Math.floor(t / r), a = Math.floor((t - i * r) / e), u = Math.floor((t - i * r - a * e) / o), f = Math.floor((t - i * r - a * e - u * o) / n), s = Math.floor(t % 1e3 / 100);
        return {
            day: i,
            hr: a < 10 ? "0" + a : a,
            min: u < 10 ? "0" + u : u,
            sec: f < 10 ? "0" + f : f,
            msec: s
        };
    },
    countdown_str: function(t) {
        var i = Math.floor(t / r), a = Math.floor((t - i * r) / e), u = Math.floor((t - i * r - a * e) / o), f = Math.floor((t - i * r - a * e - u * o) / n), s = (a = a < 10 ? "0" + a : a) + ":" + (u = u < 10 ? "0" + u : u) + ":" + (f = f < 10 ? "0" + f : f);
        return (i > 0 ? i + "天 " : "") + s;
    },
    stopTimeout: function(t) {
        for (var n = 0; n < t.length; n++) clearTimeout(t[n]);
    },
    shuffleArray: function(t) {
        for (var n = t.length - 1; n > 0; n--) {
            var o = Math.floor(Math.random() * (n + 1)), e = t[n];
            t[n] = t[o], t[o] = e;
        }
        return t;
    }
}, Date.prototype.format = function(t) {
    var n = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var o in n) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
    return t;
};

var n = 1e3, o = 60 * n, e = 60 * o, r = 24 * e;