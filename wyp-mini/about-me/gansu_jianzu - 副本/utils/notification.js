Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    notificationCenter: {},
    register: function(e, o, r) {
        if (e && o && r) {
            console.log("注册通知：", e, o);
            var t = this.notificationCenter, n = t[e];
            n || (n = []), this.remove(e, o), n.push({
                observer: o,
                func: r
            }), t[e] = n;
        }
    },
    remove: function(e, o) {
        if (e && o) {
            console.log("移除通知：", e);
            var r = this.notificationCenter, t = r[e];
            if (t) {
                var n, i;
                for (n = 0; n < t.length; n++) {
                    var s = t[n];
                    if (s.observer == o) {
                        i = s;
                        break;
                    }
                }
                i && t.splice(n, 1), r[e] = t;
            }
        }
    },
    post: function(e, o) {
        var r = {};
        if (r.data = o, e) {
            console.log("发送通知：", e, o);
            var t = this.notificationCenter[e];
            t && 0 != t.length && (r.name = e, t.forEach(function(e) {
                if (e.observer) {
                    var o;
                    e.action && (o = e.observer[e.action]), o || (o = e.func), o && (r.observer = e.observer, 
                    o(r));
                }
            }), console.log("完成向 ", t.length, " 个监听者发出通知：", e));
        }
    }
};

exports.default = e;