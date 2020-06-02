var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = function(e) {
    return e && "object" == (void 0 === e ? "undefined" : t(e)) && "default" in e ? e.default : e;
}(require("../../index"));

Component({
    properties: {
        src: String,
        eventList: {
            type: Object,
            value: {}
        }
    },
    data: {
        gioSrc: ""
    },
    methods: {
        bindmessage: function(t) {
            this.properties.eventList.bindmessage && this.properties.eventList.bindmessage(t);
        },
        bindload: function(t) {
            this.properties.eventList.bindpause && this.properties.eventList.bindload(t);
        },
        binderror: function(t) {
            this.properties.eventList.binderror && this.properties.eventList.binderror(t);
        }
    },
    pageLifetimes: {
        show: function() {
            var t = void 0;
            if (-1 === this.properties.src.indexOf("?")) t = this.properties.src + "?" + e("getGioInfo") + "&giotm=" + Date.now(); else if (-1 === this.properties.src.indexOf("giotm")) t = this.properties.src + "&" + e("getGioInfo") + "&giotm=" + Date.now(); else {
                var i = this.properties.src.split("?"), o = i[1].split("&"), r = [], n = !0, s = !1, p = void 0;
                try {
                    for (var f, a = o[Symbol.iterator](); !(n = (f = a.next()).done); n = !0) {
                        var c = f.value, u = c.split("=");
                        "giou" !== u[0] && "giocs1" !== u[0] && "gios" !== u[0] && "giotm" !== u[0] && r.push(c);
                    }
                } catch (t) {
                    s = !0, p = t;
                } finally {
                    try {
                        !n && a.return && a.return();
                    } finally {
                        if (s) throw p;
                    }
                }
                t = r.join("&") ? i[0] + "&" + e("getGioInfo") + "&giotm=" + Date.now() : i[0] + "?" + e("getGioInfo") + "&giotm=" + Date.now();
            }
            this.setData({
                src: t
            });
        }
    }
});