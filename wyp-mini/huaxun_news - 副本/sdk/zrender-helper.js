function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}();

exports.createZrender = function(e, t, r) {
    var a = wx.createCanvasContext(e), o = new i(a), s = {
        renderer: "canvas",
        width: t,
        height: r
    };
    return n.init(o, s);
};

var n = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("./zrender")), i = function() {
    function i(t, r, a) {
        e(this, i), this.ctx = t, this.opts = a || {}, this._initCanvas(n, t), this._initStyle(t), 
        this._initEvent(n);
    }
    return t(i, [ {
        key: "getContext",
        value: function(e) {
            if ("2d" === e) return this.ctx;
        }
    }, {
        key: "attachEvent",
        value: function() {}
    }, {
        key: "detachEvent",
        value: function() {}
    }, {
        key: "_initCanvas",
        value: function(e, t) {
            var n = this;
            e.util.$override("createCanvas", function() {
                return n;
            }), e.util.$override("getContext", function() {
                return t;
            }), e.util.$override("measureText", function(e, n) {
                return t.font = n || "12px sans-serif", t.measureText(e);
            }), e.Image.prototype.brush = function(e, t) {
                var n = this.style, i = n.image;
                n.bind(e, this, t);
                var r = n.width, a = n.height, o = n.x || 0, s = n.y || 0;
                if (this.setTransform(e), n.sWidth && n.sHeight) {
                    var u = n.sx || 0, c = n.sy || 0;
                    e.drawImage(i, u, c, n.sWidth, n.sHeight, o, s, r, a);
                } else if (n.sx && n.sy) {
                    var l = r - (u = n.sx), h = a - (c = n.sy);
                    e.drawImage(i, u, c, l, h, o, s, r, a);
                } else e.drawImage(i, o, s, r, a);
                null != n.text && (this.restoreTransform(e), this.drawRectText(e, this.getBoundingRect()));
            }, e.Image.prototype.getBoundingRect = function() {
                var t = this.style;
                return this._rect || (this._rect = new e.BoundingRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), 
                this._rect;
            };
        }
    }, {
        key: "_initStyle",
        value: function(e) {
            var t = arguments;
            [ "fillStyle", "strokeStyle", "globalAlpha", "textAlign", "textBaseAlign", "shadow", "lineWidth", "lineCap", "lineJoin", "lineDash", "miterLimit", "fontSize" ].forEach(function(t) {
                Object.defineProperty(e, t, {
                    set: function(n) {
                        ("fillStyle" !== t && "strokeStyle" !== t || "none" !== n && null !== n) && e["set" + t.charAt(0).toUpperCase() + t.slice(1)](n);
                    }
                });
            }), e.createRadialGradient = function() {
                return e.createCircularGradient(t);
            };
        }
    }, {
        key: "_initEvent",
        value: function(e) {
            var t = this;
            this.event = {}, [ {
                wxName: "touchStart",
                ecName: "mousedown"
            }, {
                wxName: "touchMove",
                ecName: "mousemove"
            }, {
                wxName: "touchEnd",
                ecName: "mouseup"
            }, {
                wxName: "tap",
                ecName: "click"
            } ].forEach(function(n) {
                t.event[n.wxName] = function(t) {
                    var i = t.touches[0];
                    e.handler.dispatch(n.ecName, {
                        zrX: "tap" === n.wxName ? i.clientX : i.x,
                        zrY: "tap" === n.wxName ? i.clientY : i.y
                    });
                };
            });
        }
    } ]), i;
}();