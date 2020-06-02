function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

var e = require("base64.js"), o = "douguo";

module.exports = {
    formatTime: function(e) {
        var o = e.getFullYear(), n = e.getMonth() + 1, s = e.getDate(), c = e.getHours(), i = e.getMinutes(), r = e.getSeconds();
        return [ o, n, s ].map(t).join("/") + " " + [ c, i, r ].map(t).join(":");
    },
    isArray: function(t) {
        return "[object Array]" == Object.prototype.toString.call(t);
    },
    isObject: function(t) {
        return "[object Object]" == Object.prototype.toString.call(t);
    },
    isNULL: function(t) {
        return "[object Null]" == Object.prototype.toString.call(t);
    },
    saveImageToPhotosAlbum: function(t) {
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                    filePath: t,
                    success: function(t) {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function(t) {
                                wx.showToast({
                                    title: "保存成功"
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    fail: function() {
                        wx.openSetting({
                            success: function(t) {
                                console.log("openSetting: success");
                            },
                            fail: function(t) {
                                console.log("openSetting: fail");
                            }
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    encryptForCommission: function(t) {
        if (t.length <= 0) return "";
        for (var n = o, s = e.encode(t), c = "", i = s.length < n.length ? s.length : n.length, r = 0; r < i; r++) if (c = c + s.substr(r, 1) + n.substr(r, 1), 
        r == n.length - 1 && r < s.length - 1) {
            c += s.substr(r + 1);
            break;
        }
        return s = e.encode(c), e._utf8_encode(s);
    },
    decipheringForCommission: function(t) {
        if (t.length < 0) return "";
        for (var n = e._utf8_decode(t), s = e.decode(n), c = o, i = c.length < s.length / 2 ? c.length : s.length / 2, r = "", u = 0; u < i; u++) {
            var l = c[u], g = s[2 * u + 1], a = s[2 * u];
            if (l !== g) break;
            r += a;
        }
        return c.length < s.length / 2 && (r += s.substr(2 * i)), e.decode(r);
    }
};