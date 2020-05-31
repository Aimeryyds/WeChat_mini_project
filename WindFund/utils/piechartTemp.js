var t = require("ctxbase.js");

module.exports = {
    PieChart: function(i, e, a) {
        function s() {
            return this.ctx = i, this.datalist = e, this.angles = [], this.width = a.width, 
            this.height = this.width * (a.heightratio || .46), l = a.width * d, o = this.height * f, 
            r = .4 * this.height, this.options = a, this.draw(), i.draw(), n && clearTimeout(n), 
            this;
        }
        function h(t, i, e, a) {
            var s = Math.abs(t.x - l), h = Math.abs(t.y - o), n = t.x - l, r = t.y - o, d = Math.sqrt(s * s + h * h), f = void 0, c = void 0, x = 0;
            if (d < .4 * e && (n > 0 && r < 0 ? f = 0 - Math.asin(h / d) : n > 0 && r > 0 ? f = Math.asin(h / d) : n < 0 && r > 0 ? f = Math.PI - Math.asin(h / d) : n < 0 && r < 0 && (f = Math.PI + Math.asin(h / d))), 
            f) {
                for (var g = 0; g < a.length; g++) if (f < a[g]) {
                    c = g, x = 0 == g ? (a[g] - Math.PI / 2) / 2 : (a[g - 1] + a[g]) / 2;
                    break;
                }
                var p = Math.abs(Math.tan(x)), u = Math.sqrt(1 / (1 + p * p)), w = u * p, P = void 0, T = void 0;
                return x < 0 ? (P = u, T = -w) : x < Math.PI / 2 ? (P = u, T = w) : x < Math.PI ? (P = -u, 
                T = w) : x < 1.5 * Math.PI && (P = -u, T = -w), {
                    index: c,
                    centerAngle: x,
                    xdiff: P * e * .02,
                    ydiff: T * e * .02
                };
            }
            return {};
        }
        var n, l = 0, o = 0, r = 0, d = 1 / 3.57, f = .5, c = [ "#ffd16c", "#80adf7", "#fe949b", "#c390f2", "#74d2da", "#36bdda", "#8294f2", "#ffc26b", "#ff9966", "#a482f3", "#ebdc5b", "#b28ff2" ];
        return s.prototype.drawNoData = function() {
            var t = this.ctx, i = this.width, e = this.height;
            t.setFillStyle("#999999"), t.setFontSize(14), t.setTextAlign("center"), t.fillText("暂无数据", i / 2, e / 2);
        }, s.prototype.drawPieRing = function(i) {
            var e = this.ctx, a = this.datalist, s = (this.width, this.height, this.options.pieColors || c), h = this, n = this.angles.length, d = 0;
            a.forEach(function(a, f) {
                var c = 2 * Math.PI * d - .5 * Math.PI, x = 2 * Math.PI * (d + a.percent) - .5 * Math.PI, g = l, p = o;
                i && i.index == f && (g += i.xdiff, p += i.ydiff), t.drawSolidPie(e, g, p, r, c, x, a.color || s[f]), 
                d += a.percent, n > 0 || h.angles.push(x);
            });
        }, s.prototype.alertBox = function(t, i) {
            if (i && i.index >= 0) {
                var e = this.ctx, a = this.datalist;
                e.setFillStyle("rgba(100,100,100,0.5)"), e.fillRect(t.x, t.y, 50, 20), e.setFontSize(12), 
                e.setTextAlign("left"), e.setFillStyle("#333333"), e.fillText(a[i.index].value + "%", t.x + 8, t.y + 15);
            }
        }, s.prototype.drawPieCenterText = function() {
            var t = this.ctx, i = this.width, e = this.height, a = this.options.centerText, s = this.options.centerTextColor || "#333333", h = this.options.centerTextFontSize || 12;
            a && (1 == a.length ? (t.setFontSize(h), t.setFillStyle(s), t.setTextAlign("center"), 
            t.fillText(a[0], .5 * i, .4 * e + 5)) : 2 == a.length && (t.setFontSize(h), t.setFillStyle(s), 
            t.setTextAlign("center"), t.fillText(a[0], .5 * i, .4 * e - 6), t.fillText(a[1], .5 * i, .4 * e + 14)));
        }, s.prototype.drawPieLabelData = function() {
            var t = this.ctx, i = this.width, e = this.height, a = this.datalist, s = this.options.labelTextFontSize || 12, h = this.options.labelTextColor || "#333333", n = (this.options.islongLabel, 
            this.options.pieColors || c);
            t.setFontSize(s), t.setTextAlign("left");
            for (var l = .1 * (10 - a.length) / 2, o = .1 + .01 * (10 - a.length), r = 0; r < a.length; r++) t.setFillStyle(h), 
            t.fillText(a[r].name + " (" + a[r].value + "%)", .65 * i, e * (l + o * r)), t.setFillStyle(a[r].color || n[r]), 
            t.fillRect(i * (.65 - .06), e * (l + o * r) - 10, 11, 11);
        }, s.prototype.draw = function() {
            this.datalist && this.datalist.length > 0 ? (this.drawPieRing(), this.drawPieLabelData()) : this.drawNoData();
        }, s.prototype.redraw = function(t) {
            if (this.datalist && this.datalist.length > 0) {
                var i = this.ctx, e = h(t, this.width, this.height, this.angles);
                if (this.drawPieRing(e), this.alertBox(t, e), this.drawPieLabelData(), i.draw(), 
                n && clearTimeout(n), this.options.autoReset) {
                    var a = this;
                    n = setTimeout(function() {
                        a.drawPieRing(), a.drawPieLabelData(), i.draw();
                    }, this.options.autoResetTime || 3e3);
                }
                return e.index;
            }
        }, new s();
    }
};