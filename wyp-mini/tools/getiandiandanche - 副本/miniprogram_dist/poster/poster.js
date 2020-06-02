function e() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e = r({}, t, e);
    var o = getCurrentPages(), n = o[o.length - 1].selectComponent(e.selector);
    return delete e.selector, n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
}, t = {
    selector: "#poster"
};

e.create = function() {
    if (e()) return e().onCreate();
    console.error('请设置组件的id="poster"!!!');
}, exports.default = e;