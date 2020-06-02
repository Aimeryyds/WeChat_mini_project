var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("bluebird"));

module.exports = {
    Promise: function(e, a) {
        return a = a || {}, new t.default(function(t, u) {
            "function" != typeof e && u(), a.success = t, a.fail = u;
            var s = a.apiclass || a.data.apiclass, r = a.apimethod || a.data.apimethod;
            e(s, r, a);
        });
    },
    Gesture: {
        touchstart: function(t, e) {
            var a = t.touches[0], u = a.clientX, s = a.clientY;
            e.setData({
                "gesture.startX": u,
                "gesture.startY": s,
                "gesture.out": !0
            });
        },
        isLeftSlide: function(t, e) {
            if (e.data.gesture.out) {
                var a = t.touches[0], u = a.clientX - e.data.gesture.startX, s = a.clientY - e.data.gesture.startY;
                return u < -20 && u > -40 && s < 8 && s > -8 && (e.setData({
                    "gesture.out": !1
                }), !0);
            }
        },
        isRightSlide: function(t, e) {
            if (e.data.gesture.out) {
                var a = t.touches[0], u = a.clientX - e.data.gesture.startX, s = a.clientY - e.data.gesture.startY;
                return u > 20 && u < 40 && s < 8 && s > -8 && (e.setData({
                    "gesture.out": !1
                }), !0);
            }
        }
    }
};