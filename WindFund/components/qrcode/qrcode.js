Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("qr.js/index"));

exports.default = {
    setDefaults: function() {
        return {
            typeNumber: -1,
            errorCorrectLevel: 2,
            width: 200,
            height: 200,
            fgColor: "black",
            bgColor: "white"
        };
    },
    init: function(r, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = Object.assign({}, this.setDefaults(), o), n = (0, 
        e.default)(this.utf16to8(t), {
            typeNumber: a.typeNumber,
            errorCorrectLevel: a.errorCorrectLevel
        }), l = wx.createCanvasContext(r), i = n.modules, h = a.width / i.length, f = a.height / i.length;
        l.scale(1, 1), i.forEach(function(e, r) {
            e.forEach(function(e, t) {
                l.setFillStyle(e ? a.fgColor : a.bgColor);
                var o = Math.ceil((t + 1) * h) - Math.floor(t * h), n = Math.ceil((r + 1) * f) - Math.floor(r * f);
                l.fillRect(Math.round(t * h), Math.round(r * f), o, n);
            });
        }), l.draw();
    },
    utf16to8: function(e) {
        for (var r = e.length, t = "", o = 0; o < r; o++) {
            var a = e.charCodeAt(o);
            a >= 1 && a <= 127 ? t += e.charAt(o) : a > 2047 ? (t += String.fromCharCode(224 | a >> 12 & 15), 
            t += String.fromCharCode(128 | a >> 6 & 63), t += String.fromCharCode(128 | a >> 0 & 63)) : (t += String.fromCharCode(192 | a >> 6 & 31), 
            t += String.fromCharCode(128 | a >> 0 & 63));
        }
        return t;
    }
};