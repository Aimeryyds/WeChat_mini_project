var t = require("ctxbase.js");

module.exports = {
    PieChart: function(e, i, a) {
        function s() {
            return this.ctx = e, this.datalist = i, this.angles = [], this.width = a.width, 
            this.height = this.width * (a.heightratio || .7), this.options = a, this.draw(), 
            e.draw(), h && clearTimeout(h), this;
        }
        function l(t, e, i, a) {
            var s = Math.abs(t.x - .5 * e), l = Math.abs(t.y - .4 * i), h = t.x - .5 * e, n = t.y - .4 * i, o = Math.sqrt(s * s + l * l), r = void 0, d = void 0, f = 0;
            if (o < .33 * i && (h > 0 && n < 0 ? r = 0 - Math.asin(l / o) : h > 0 && n > 0 ? r = Math.asin(l / o) : h < 0 && n > 0 ? r = Math.PI - Math.asin(l / o) : h < 0 && n < 0 && (r = Math.PI + Math.asin(l / o))), 
            r) {
                for (var c = 0; c < a.length; c++) if (r < a[c]) {
                    d = c, f = 0 == c ? (a[c] - Math.PI / 2) / 2 : (a[c - 1] + a[c]) / 2;
                    break;
                }
                var x = Math.abs(Math.tan(f)), g = Math.sqrt(1 / (1 + x * x)), p = g * x, w = void 0, u = void 0;
                return f < 0 ? (w = g, u = -p) : f < Math.PI / 2 ? (w = g, u = p) : f < Math.PI ? (w = -g, 
                u = p) : f < 1.5 * Math.PI && (w = -g, u = -p), {
                    index: d,
                    centerAngle: f,
                    xdiff: w * i * .02,
                    ydiff: u * i * .02
                };
            }
            return {};
        }
        var h, n = [ "#ffd16c", "#80adf7", "#fe949b", "#c390f2", "#74d2da", "#36bdda", "#8294f2", "#ffc26b", "#ff9966", "#a482f3", "#ebdc5b", "#b28ff2" ];
        return s.prototype.drawNoData = function() {
            var t = this.ctx, e = this.width, i = this.height;
            t.setFillStyle("#999999"), t.setFontSize(14), t.setTextAlign("center"), t.fillText("暂无数据", e / 2, i / 2);
        }, s.prototype.drawPieRing = function(e) {
            var i = this.ctx, a = this.datalist, s = this.width, l = this.height, h = this.options.pieColors || n, o = this, r = this.angles.length, d = 0;
            a.forEach(function(a, n) {
                var f = 2 * Math.PI * d - .5 * Math.PI, c = 2 * Math.PI * (d + a.percent) - .5 * Math.PI, x = s / 2, g = .4 * l;
                e && e.index == n && (x += e.xdiff, g += e.ydiff), t.drawRingPiece(i, x, g, .33 * l, f, c, 1, a.color || h[n]), 
                t.drawRingPiece(i, x, g, .25 * l, f, c, .14 * l, a.color || h[n]), d += a.percent, 
                r > 0 || o.angles.push(c);
            });
        }, s.prototype.alertBox = function(t, e) {
            if (e && e.index >= 0) {
                var i = this.ctx, a = this.datalist;
                i.setFillStyle("rgba(100,100,100,0.5)"), i.fillRect(t.x, t.y, 50, 20), i.setFontSize(12), 
                i.setTextAlign("left"), i.setFillStyle("#333333"), i.fillText(a[e.index].value + "%", t.x + 8, t.y + 15);
            }
        }, s.prototype.drawPieCenterText = function() {
            var t = this.ctx, e = this.width, i = this.height, a = this.options.centerText, s = this.options.centerTextColor || "#333333", l = this.options.centerTextFontSize || 12;
            a && (1 == a.length ? (t.setFontSize(l), t.setFillStyle(s), t.setTextAlign("center"), 
            t.fillText(a[0], .5 * e, .4 * i + 5)) : 2 == a.length && (t.setFontSize(l), t.setFillStyle(s), 
            t.setTextAlign("center"), t.fillText(a[0], .5 * e, .4 * i - 6), t.fillText(a[1], .5 * e, .4 * i + 14)));
        }, s.prototype.drawPieLabelData = function() {
            var t = this.ctx, e = this.width, i = this.height, a = this.datalist, s = this.options.labelTextFontSize || 12, l = this.options.labelTextColor || "#333333", h = this.options.islongLabel, o = this.options.pieColors || n;
            if (t.setFontSize(s), t.setTextAlign("left"), 1 == a.length) t.fillText(a[0].name + "(" + a[0].value + "%)", .42 * e, .85 * i), 
            t.setFillStyle(a[0].color || o[0]), t.fillRect(.36 * e, .85 * i - 9, 10, 10); else for (var r = h ? .1 : .2, d = 0; d < a.length; d += 2) t.setFillStyle(l), 
            t.fillText(a[d].name + "(" + a[d].value + "%)", e * r, i * (.85 + .1 * d / 2)), 
            t.setFillStyle(a[d].color || o[d]), t.fillRect(e * (r - .04), i * (.85 + .1 * d / 2) - 9, 10, 10), 
            a[d + 1] && (t.setFillStyle(l), t.fillText(a[d + 1].name + "(" + a[d + 1].value + "%)", .57 * e, i * (.85 + .1 * d / 2)), 
            t.setFillStyle(a[d + 1].color || o[d + 1]), t.fillRect(.53 * e, i * (.85 + .1 * d / 2) - 9, 10, 10));
        }, s.prototype.draw = function() {
            this.datalist && this.datalist.length > 0 ? (this.drawPieRing(), this.drawPieCenterText(), 
            this.drawPieLabelData()) : this.drawNoData();
        }, s.prototype.redraw = function(t) {
            if (this.datalist && this.datalist.length > 0) {
                var e = this.ctx, i = l(t, this.width, this.height, this.angles);
                if (this.drawPieRing(i), this.alertBox(t, i), this.drawPieCenterText(), this.drawPieLabelData(), 
                e.draw(), h && clearTimeout(h), this.options.autoReset) {
                    var a = this;
                    h = setTimeout(function() {
                        a.drawPieRing(), a.drawPieCenterText(), a.drawPieLabelData(), e.draw();
                    }, this.options.autoResetTime || 3e3);
                }
                return i.index;
            }
        }, new s();
    }
};