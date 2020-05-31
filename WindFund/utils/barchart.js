var t = require("ctxbase.js");

module.exports = {
    BarChart: function(i, e, a) {
        function h() {
            return this.ctx = i, this.data = e, this.width = a.width, this.height = this.width * (a.heightratio || .7), 
            this.options = a, this.draw(), this.ctx.draw(), this;
        }
        var s = [ "#ffd16c", "#80adf7", "#fe949b", "#c390f2", "#74d2da", "#36bdda", "#8294f2", "#ffc26b", "#ff9966", "#a482f3", "#ebdc5b", "#b28ff2" ];
        return h.prototype.drawNoData = function() {
            var t = this.ctx, i = this.width, e = this.height;
            t.setFillStyle("#999999"), t.setFontSize(14), t.setTextAlign("center"), t.fillText("暂无数据", i / 2, e / 2);
        }, h.prototype.draw = function() {
            var i = this.ctx, e = this.width, a = this.height, h = this.data.names, l = this.data.values, r = .9 * e / h.length, n = 1.1 * l.max(), d = void 0, f = void 0;
            h && h.length > 0 ? (t.drawDashLine(i, .05 * e, .1 * a, .95 * e, .1 * a), t.drawDashLine(i, .05 * e, .48 * a, .95 * e, .48 * a), 
            t.drawLine(i, .05 * e, .86 * a, .95 * e, .86 * a), h.forEach(function(t, h) {
                d = .76 * a * l[h] / n, f = r * h + .05 * e + .1 * r, i.setFillStyle(s[h]), i.fillRect(f, .86 * a - Math.max(d, 20), .8 * r, Math.max(d, 20)), 
                i.fill(), i.setFontSize(12), i.setFillStyle("#FFFFFF"), i.fillText(l[h] + "亿", f + (.8 * r - 7.5 * String(l[h]).length) / 2, .86 * a - Math.max(d, 20) + 14), 
                i.setFontSize(14), i.setFillStyle("#666666"), i.fillText(t, f + (.8 * r - 30) / 2, .86 * a + 15);
            })) : this.drawNoData();
        }, new h();
    }
};