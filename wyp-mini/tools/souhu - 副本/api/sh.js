Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = new Proxy(wx, {
    get: function(e, t) {
        return Reflect.get(e, t);
    }
}), t = Object.assign(e, {
    isBaidu: !1,
    isWeixin: !0,
    isToutiao: !1
});

exports.sh = t;