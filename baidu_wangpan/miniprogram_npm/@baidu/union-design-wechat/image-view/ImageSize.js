function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), i = function() {
    function i() {
        e(this, i);
    }
    return t(i, null, [ {
        key: "imageZoomHeightUtil",
        value: function(e, t, i) {
            var n = {};
            return i ? (n.imageWidth = i, n.imageHeight = i * t / e) : wx.getSystemInfo({
                success: function(o) {
                    i = o.windowWidth, n.imageWidth = i, n.imageHeight = i * t / e;
                }
            }), n;
        }
    }, {
        key: "imageZoomWidthUtil",
        value: function(e, t, i) {
            var n = {};
            return i ? (n.imageWidth = i * e / t, n.imageHeight = i) : wx.getSystemInfo({
                success: function(o) {
                    i = o.windowHeight, n.imageWidth = i * e / t, n.imageHeight = i;
                }
            }), n;
        }
    } ]), i;
}();

exports.default = i;