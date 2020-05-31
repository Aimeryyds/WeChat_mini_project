Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
};

exports.default = function(e, r) {
    e.properties = t({}, r.properties, e.properties), e.data = t({}, r.data, e.data), 
    e.methods = t({}, r.methods, e.methods), e.options = t({}, r.options, e.options);
    var o = e.ready;
    return e.ready = function() {
        r.ready.call(this), o && o.call(this);
    }, Component(e);
};