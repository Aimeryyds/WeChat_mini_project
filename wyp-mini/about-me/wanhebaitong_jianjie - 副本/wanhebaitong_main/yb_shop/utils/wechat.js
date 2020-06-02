function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var t = n[r];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, r, t) {
        return r && e(n.prototype, r), t && e(n, t), n;
    };
}(), r = function() {
    function r() {
        e(this, r);
    }
    return n(r, null, [ {
        key: "login",
        value: function() {
            return new Promise(function(e, n) {
                return wx.login({
                    success: e,
                    fail: n
                });
            });
        }
    }, {
        key: "getUserInfo",
        value: function() {
            return new Promise(function(e, n) {
                return wx.getUserInfo({
                    success: e,
                    fail: n
                });
            });
        }
    }, {
        key: "downloadFile",
        value: function(e) {
            return new Promise(function(n, r) {
                return wx.downloadFile({
                    url: e,
                    success: n,
                    fail: r
                });
            });
        }
    }, {
        key: "saveFile",
        value: function(e) {
            return new Promise(function(n, r) {
                return wx.saveFile({
                    tempFilePath: e,
                    success: n,
                    fail: r
                });
            });
        }
    }, {
        key: "saveImageToPhotosAlbum",
        value: function(e) {
            return new Promise(function(n, r) {
                return wx.saveImageToPhotosAlbum({
                    filePath: e,
                    success: n,
                    fail: r
                });
            });
        }
    } ]), r;
}();

module.exports = r;