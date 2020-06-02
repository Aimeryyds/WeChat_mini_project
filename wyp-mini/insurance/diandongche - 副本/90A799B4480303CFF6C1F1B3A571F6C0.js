Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSwipeDirection = exports.getPointsDistance = exports.isNearbyPoints = exports.isEqualPoints = exports.getPointsNumber = exports.getTouchPoints = void 0;

exports.getTouchPoints = function(t, e) {
    var o = 1 < arguments.length && void 0 !== e ? e : 0, s = t.touches, n = t.changedTouches, r = s && 0 < s.length, i = n && 0 < n.length, a = !r && i ? n[o] : r ? s[o] : t;
    return {
        x: a.pageX,
        y: a.pageY
    };
};

exports.getPointsNumber = function(t) {
    return t.touches && t.touches.length || t.changedTouches && t.changedTouches.length;
};

exports.isEqualPoints = function(t, e) {
    return t.x === e.x && t.y === e.y;
};

exports.isNearbyPoints = function(t, e, o) {
    var s = 2 < arguments.length && void 0 !== o ? o : 25;
    return Math.abs(t.x - e.x) < s & Math.abs(t.y - e.y) < s;
};

exports.getPointsDistance = function(t, e) {
    var o = Math.abs(t.x - e.x), s = Math.abs(t.y - e.y);
    return Math.sqrt(o * o + s * s);
};

exports.getSwipeDirection = function(t, e, o, s) {
    return Math.abs(t - e) >= Math.abs(o - s) ? 0 < t - e ? "Left" : "Right" : 0 < o - s ? "Up" : "Down";
};