getApp();

var e = {
    addSerializedParams: function(e, n) {
        if (n) {
            var t = [];
            for (var r in n) if (n.hasOwnProperty(r)) {
                var o = n[r];
                null !== o && void 0 !== o && t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
            }
            e += (-1 === e.indexOf("?") ? "?" : "&") + t.join("&");
        }
        return e;
    },
    formatTime: function(e) {
        function n(e) {
            return (e = e.toString())[1] ? e : "0" + e;
        }
        var t = date.getFullYear(), r = date.getMonth() + 1, o = date.getDate(), i = date.getHours(), a = date.getMinutes(), u = date.getSeconds();
        return [ t, r, o ].map(n).join("/") + " " + [ i, a, u ].map(n).join(":");
    },
    splitStr: function(e, n, t) {
        if ("split" == t) {
            var r = e.split(n);
            return r[r.length - 1];
        }
    },
    json2Form: function(e) {
        var n = [];
        for (var t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
        return n.join("&");
    },
    URLencode: function(e) {
        return escape(e).replace(/\+/g, "%2B").replace(/\"/g, "%22").replace(/\'/g, "%27").replace(/\//g, "%2F");
    },
    getPicScale: function() {
        var e = void 0;
        return wx.getSystemInfo({
            success: function(n) {
                var t = n.pixelRatio;
                t < 1 ? e = 2 : 1 == t ? e = 1 : t > 1 && t <= 2 ? e = 4 : t > 2 && (e = 5);
            }
        }), e;
    },
    showShareMenu: function() {
        wx.showShareMenu ? wx.showShareMenu({
            withShareTicket: !0
        }) : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，请升级到最新微信版本后使用"
        });
    },
    _defineProperty: function(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }
};

module.exports = {
    util: e
};