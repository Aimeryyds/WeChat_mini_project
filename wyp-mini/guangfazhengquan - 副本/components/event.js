Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("./utils"), e = {
    on: function(e, n) {
        return (this.events || (this.events = new t.MapList())).add(e, n);
    },
    off: function(e, n) {
        (this.events || (this.events = new t.MapList())).remove(e, n);
    },
    listenTo: function(t, e, n) {
        return t.on(e, n);
    },
    listenToOnce: function(t, e, n) {
        var i = null;
        return i = this.listenTo(t, e, function() {
            n.apply(this, arguments), i();
        });
    },
    stopListening: function(t, e, n) {
        return t.off(e, n);
    },
    fire: function(e, n) {
        var i = (this.events || (this.events = new t.MapList())).find(e), r = !0, s = !1, o = void 0;
        try {
            for (var u, f = i[Symbol.iterator](); !(r = (u = f.next()).done); r = !0) (0, u.value)(n);
        } catch (t) {
            s = !0, o = t;
        } finally {
            try {
                !r && f.return && f.return();
            } finally {
                if (s) throw o;
            }
        }
    }
};

exports.default = e;