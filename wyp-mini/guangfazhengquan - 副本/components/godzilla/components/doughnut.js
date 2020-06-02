function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), i = e(require("../core/view")), a = e(require("./pie")), u = require("../../utils"), s = function(e) {
    function s(e) {
        t(this, s);
        var r = n(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
        return r.initialize(), r;
    }
    return r(s, i.default), o(s, [ {
        key: "initialize",
        value: function() {
            this.pie = new a.default(this.options);
        }
    }, {
        key: "setData",
        value: function(e) {
            return this.data = e, this.drawData(), this;
        }
    }, {
        key: "drawData",
        value: function() {
            this.pie.setData(this.data);
            var e = this.options, t = e.shapes, n = e.radius, r = e.thickness, o = e.bbox, i = (e.dataCtx, 
            o.x0), a = o.y0, s = o.x1, f = o.y1, c = n - r;
            t.push({
                id: (0, u.getUnique)(),
                hold: "\n        position: absolute;\n        width: " + 2 * c + "px;\n        height: " + 2 * c + "px;\n        left: " + ((s - i) / 2 - c) + "px;\n        top: " + ((f - a) / 2 - c) + "px;\n        border-radius: " + c + "px;\n        background-color: #ffffff;\n      "
            });
        }
    } ]), s;
}();

exports.default = s;