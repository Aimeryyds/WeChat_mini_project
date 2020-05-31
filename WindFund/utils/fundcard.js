var t = require("ctxbase.js");

module.exports = {
    FundCard: function(e, i, s, l) {
        function h() {
            return this.ctx = e, this.width = l.width, this.height = 19 * this.width / 15, this.chartheight = .5 * this.width, 
            this.chartY = .36 * this.width, this.isopen = !0, this.fundinfo = s, this.options = l, 
            this.CData = [], this.SData = [], this.fundtype = l.fundtype, this.charttype = l.charttype, 
            this.draw(i), console.log("draw over"), this.ctx.draw(), this;
        }
        var a = function(t) {
            return t > 0 ? "+" + t + "%" : t + "%";
        };
        h.prototype.drawBG = function() {
            var t = this.ctx, e = this.width, i = this.height;
            t.rect(0, 0, e, i), t.setFillStyle("#FFFFFF"), t.fill();
        }, h.prototype.drawRect = function() {
            var e = this.ctx, i = this.width, s = this.height;
            e.setFillStyle("#FFFFFF"), e.setStrokeStyle("#EDEDED"), e.setShadow(0, 0, 10, "#FFFFFF"), 
            t.drawRoundRect(e, .03 * i, .03 * s, .94 * i, .94 * s, 10, "#FFF000", "#ADFDFD"), 
            e.setShadow(0, 0, 0, "#FFFFFF");
        }, h.prototype.dealLine2 = function(t, e, i, s) {
            var l = this.width - 2 * this.options.spacewidth, h = this.chartheight, a = this.options.spacewidth, n = [], r = this.options.line3 - this.options.line1 || .64, o = this.options.line1 || .18;
            null != t[0] && n.push({
                x: 2 * a,
                y: h * (r * Math.abs(e - t[0]) / s + o) + this.chartY
            });
            for (var f = 1; f < t.length; f++) null != t[f] ? n.push({
                x: 2 * a + (l - 2 * a) * f / (t.length - 1),
                y: h * (r * Math.abs(e - t[f]) / s + o) + this.chartY
            }) : n.push(null);
            return n;
        }, h.prototype.dealLine = function(t, e, i, s, l, h) {
            var a = this.width - 2 * this.options.spacewidth, n = this.chartheight, r = this.options.spacewidth, o = [], f = this.options.line3 - this.options.line1 || .64, d = this.options.line1 || .18, F = l || t.length;
            null != t[0] && o.push({
                x: 2 * r,
                y: n * (f * Math.abs(e - t[0]) / s + d) + this.chartY,
                index: 0
            });
            for (var c = 1; c < F; c++) null != t[c] ? o.push({
                x: 2 * r + (a - 2 * r) * c / (F - 1),
                y: n * (f * Math.abs(e - t[c]) / s + d) + this.chartY,
                index: c
            }) : h || o.push(null);
            return o;
        }, h.prototype.drawNoData = function() {
            var t = this.ctx, e = this.width, i = this.chartheight;
            t.setFillStyle("#999999"), t.setFontSize(14), t.setTextAlign("center"), t.fillText("本基金暂无净值趋势", e / 2, i / 2);
        }, h.prototype.drawRange = function(e, i, s, l, h) {
            var a = this.ctx, n = this.width, r = this.height, o = this.chartheight, f = this.chartY, d = (((e + i) / 2).toFixed(2), 
            this.options.spacewidth || 10), F = this.options.line1, c = this.options.line2, p = this.options.line3;
            a.setFillStyle("#F4F4F4"), a.fillRect(.03 * n, .03 * r, .94 * n, .23 * r), t.drawDashLine(a, 2 * d, o * F + f - 5, n - 2 * d, o * F + f - 5, 2, "#DEDEDE"), 
            t.drawDashLine(a, 2 * d, o * c + f - 5, n - 2 * d, o * c + f - 5, 2, "#DEDEDE"), 
            t.drawLine(a, d, o * p + f, n - d, o * p + f, "#DEDEDE"), a.setFillStyle("#999999"), 
            a.setFontSize(10), s && a.fillText(s, 2 * d, .9 * o + f), a.setTextAlign("right"), 
            l && a.fillText(l, n - 2 * d, .9 * o + f), t.drawLine(a, .03 * n, .26 * r, .97 * n, .26 * r, "#EDEDED"), 
            t.drawLine(a, .03 * n, .72 * r, .97 * n, .72 * r, "#EDEDED");
        }, h.prototype.drawYLabel = function(t, e, i) {
            var s = this.ctx, l = (this.width, this.height, this.chartheight), h = this.chartY, a = ((t + e) / 2).toFixed(2), n = this.options.spacewidth || 10, r = this.options.line1, o = this.options.line2, f = this.options.line3;
            s.setFillStyle("#999999"), s.setFontSize(10), s.setTextAlign("left"), s.fillText(i ? t.toFixed(2) + "%" : t, 2 * n, l * (r + .04) + h), 
            s.fillText(a + (i ? "%" : ""), 2 * n, l * (o + .04) + h), s.fillText(i ? e.toFixed(2) + "%" : e, 2 * n, l * (f - .04) + h);
        };
        var n = function(t, e, i) {
            if (t.measureText) {
                for (var s = 10; s < e.length; ) {
                    var l = e.substring(0, s);
                    if (t.measureText(l).width > i) break;
                    s++;
                }
                return [ e.substring(0, s - 1), e.substring(s - 1, e.length) ];
            }
            for (var h = 10; h < e.length && !(18 * e.substring(0, h).len() > i); ) h++;
            return [ e.substring(0, h - 1), e.substring(h - 1, e.length) ];
        };
        return h.prototype.drawinfos = function() {
            var t = this.ctx, e = this.width, i = (this.chartY, this.height), s = this.fundinfo, l = this.options;
            if (l.headimgpath && t.drawImage(l.headimgpath, .04 * e + 10, .1 * i - 20, 40, 40), 
            t.beginPath(), t.arc(.04 * e + 10 + 20, .1 * i, 24, 0, 2 * Math.PI), t.setStrokeStyle("#F4F4F4"), 
            t.setLineWidth(8), t.stroke(), t.setFillStyle("#999999"), t.setFontSize(18), t.setTextAlign("left"), 
            t.fillText(l.nickName, .04 * e + 60, .1 * i), console.log(t.measureText(s.sharetext)), 
            t.measureText(s.sharetext).width > .96 * e - 30) {
                var h = n(t, s.sharetext, .96 * e - 30);
                t.setFillStyle("#333333"), t.setFontSize(18), t.setTextAlign("left"), t.fillText(h[0], .04 * e + 10, .19 * i), 
                t.fillText(h[1], .04 * e + 10, .24 * i);
            } else t.setFillStyle("#333333"), t.setFontSize(18), t.setTextAlign("left"), t.fillText(s.sharetext, .04 * e + 10, .21 * i);
            t.setFillStyle("#666666"), t.setFontSize(15), t.setTextAlign("left"), t.fillText(this.cutstring(s.fundname, 18) + "(" + s.fundcode + ")", 2 * l.spacewidth, .32 * i), 
            t.setFillStyle("#999999"), t.setFontSize(12), t.setTextAlign("right"), t.fillText(s.charttypetext, e - 2 * l.spacewidth, .32 * i), 
            t.drawImage(l.imgpath, .2 * e, .74 * i, .24 * e, .24 * e), t.setFillStyle("#999999"), 
            t.setFontSize(14), t.setTextAlign("center"), t.fillText("长按识别小程序码", .7 * e, .82 * i), 
            t.fillText("了解更多", .7 * e, .87 * i), this.drawlables();
        }, h.prototype.drawlables = function() {
            var t = this.ctx, e = this.width, i = (this.chartY, this.height), s = this.options.spacewidth || 10, l = this.fundinfo, h = s + 15, n = .67 * i;
            "50" == this.charttype ? (t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), 
            t.fillText(l.estimateTime, h, n + 10), t.fillText("估算净值：" + l.estimateNetValue, e / 3 + 20, n + 10), 
            t.fillText("估算涨幅：", e / 3 * 2 + 10, n + 10), t.setFillStyle(l.estimateZdfValue > 0 ? "#EE3348" : "#09BF82"), 
            t.fillText(l.estimateZdfValue + "%", e / 3 * 2 + 60, n + 10)) : "01" == this.fundtype ? "11" == this.charttype ? (h = e / 2, 
            t.setFillStyle("#FE7E85"), t.fillRect(h - 48, n, 10, 10), t.setFillStyle("#666666"), 
            t.setFontSize(12), t.setTextAlign("center"), t.fillText("平均7日年化：", h - 10, n + 10), 
            t.setFillStyle("#EE3348"), t.fillText(a(l.avgYield), h + 60, n + 10)) : (h = e / 2, 
            t.setFillStyle("#81ADF6"), t.fillRect(h - 50 - 10, n, 10, 10), t.setFillStyle("#666666"), 
            t.setFontSize(12), t.setTextAlign("center"), t.fillText("累计万份收益：", h - 20, n + 10), 
            t.setFillStyle("#EE3348"), t.fillText(l.totalUnit, h + 68 - 20, n + 10)) : "50" == this.fundtype ? (t.setFillStyle("#fcc84b"), 
            t.fillRect(h, n - 1, 10, 10), t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), 
            t.fillText("组合收益率:", h + 13, n + 8), t.setFillStyle(l.seflFund > 0 ? "#EE3348" : "#09BF82"), 
            t.fillText(a(l.seflFund), h + 70, n + 8), h = h + (e - 2 * s) / 2 + 5, t.setFillStyle("#ff7e84"), 
            t.fillRect(h, n - 1, 10, 10), t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), 
            t.fillText("沪深300:", h + 13, n + 8), t.setFillStyle(l.hs300 > 0 ? "#EE3348" : "#09BF82"), 
            t.fillText(a(l.hs300), h + 56, n + 8)) : (t.setFillStyle("#fcc84b"), t.fillRect(h, n - 1, 10, 10), 
            t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), t.fillText("本基金:", h + 13, n + 8), 
            t.setFillStyle(l.seflFund > 0 ? "#EE3348" : "#09BF82"), t.fillText(a(l.seflFund), h + 50, n + 8), 
            h = s + (e - 2 * s) / 3, t.setFillStyle("#82aef2"), t.fillRect(h, n - 1, 10, 10), 
            t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), t.fillText("同类基金:", h + 13, n + 8), 
            t.setFillStyle(l.sameFund > 0 ? "#EE3348" : "#09BF82"), t.fillText(a(l.sameFund), h + 60, n + 8), 
            h = h + (e - 2 * s) / 3 + 5, t.setFillStyle("#ff7e84"), t.fillRect(h, n - 1, 10, 10), 
            t.setFillStyle("#666666"), t.setFontSize(10), t.setTextAlign("left"), t.fillText("沪深300:", h + 13, n + 8), 
            t.setFillStyle(l.hs300 > 0 ? "#EE3348" : "#09BF82"), t.fillText(a(l.hs300), h + 56, n + 8));
        }, h.prototype.drawEstimateChart = function(i, s) {
            if (this.SData[this.charttype]) {
                var l = this.SData[this.charttype];
                this.drawRange(l[1], l[2], l[3], l[4], l[5]), t.drawPath(e, l[0], this.options.line2Color || "#82aef2", 2), 
                this.drawYLabel(l[1], l[2], l[5]), this.drawinfos();
            } else if (i && i[0] && i[0].length > 0) {
                this.drawRange(100 * i[1], 100 * i[2], "09:30", "15:00", !0);
                var h = this.dealLine(i[0], i[1], i[2], Math.abs(i[1] - i[2]), 241, !0);
                t.drawPath(e, h, this.options.line2Color || "#82aef2", 2), this.SData[this.charttype] = [ h, 100 * i[1], 100 * i[2], "09:30", "15:00", !0 ], 
                this.drawYLabel(100 * i[1], 100 * i[2], !0), this.drawinfos();
            } else this.drawNoData("本基金暂无净值估算数据");
        }, h.prototype.cutstring = function(t, e) {
            if (2 * t.length <= e) return t;
            for (var i = 0, s = "", l = 0; l < t.length; l++) if (s += t.charAt(l), t.charCodeAt(l) > 128) {
                if ((i += 2) >= e) return s.substring(0, s.length - 1) + "...";
            } else if ((i += 1) >= e) return s.substring(0, s.length - 2) + "...";
            return s;
        }, h.prototype.draw = function(e) {
            var i = this.ctx, s = this.fundtype;
            if (i.setFillStyle("#FFFFFF"), i.fillRect(0, 0, this.width, this.height), this.drawBG(), 
            this.drawRect(), "01" == s) {
                var l, h, a, n = this.charttype;
                if ("11" == n ? (l = 0, h = this.options.qrnhColor || "#FE7E85", a = !0) : (l = 1, 
                h = this.options.wfsyColor || "#81ADF6", a = !1), this.CData[n]) {
                    var r = this.CData[n];
                    this.drawRange(r[1], r[2], r[3], r[4], r[5]), t.drawPath(i, r[0], h, 2), this.drawYLabel(r[1], r[2], r[5]), 
                    this.drawinfos();
                } else if (e && e[l][0].length > 0) {
                    this.drawRange(e[l][1], e[l][2], e[2][0], e[2][e[2].length - 1], a);
                    var o = this.dealLine(e[l][0], e[l][1], e[l][2], Math.abs(e[l][1] - e[l][2]));
                    t.drawPath(i, o, h, 2), this.drawYLabel(e[l][1], e[l][2], a), this.drawinfos(), 
                    this.CData[n] = [ o, e[l][1], e[l][2], e[2][0], e[2][e[2].length - 1], a ];
                } else this.drawNoData();
                i.save();
            } else if ("50" == s) if (this.SData[this.charttype]) {
                var f = this.SData[this.charttype];
                this.drawRange(f[3], f[4], f[5], f[6], f[7]), t.drawPath(i, f[1], this.options.line2Color || "#82aef2"), 
                t.drawPath(i, f[2], this.options.line3Color || "#ff7e84"), t.drawPath(i, f[0], this.options.line1Color || "#fcc84b", 3), 
                this.drawYLabel(f[3], f[4], f[7]), this.drawinfos();
            } else if (e && e[0].length > 0) {
                this.drawRange(e[6], e[7], e[8][0], e[8][e[8].length - 1], !0);
                var d = this.dealLine(e[0], e[6], e[7], Math.abs(e[6] - e[7])), F = this.dealLine(e[1], e[6], e[7], Math.abs(e[6] - e[7]));
                t.drawPath(i, F, this.options.line2Color || "#ff7e84"), t.drawPath(i, d, this.options.line1Color || "#fcc84b", 3), 
                this.drawYLabel(e[6], e[7], !0), this.drawinfos(), this.SData[this.charttype] = [ d, F, e[6], e[7], e[8][0], e[8][e[8].length - 1], !0 ];
            } else this.drawNoData(); else {
                if ("50" == this.charttype) this.drawEstimateChart(e); else if (this.SData[this.charttype]) {
                    var c = this.SData[this.charttype];
                    this.drawRange(c[3], c[4], c[5], c[6], c[7]), t.drawPath(i, c[1], this.options.line2Color || "#82aef2"), 
                    t.drawPath(i, c[2], this.options.line3Color || "#ff7e84"), t.drawPath(i, c[0], this.options.line1Color || "#fcc84b", 3), 
                    this.drawYLabel(c[3], c[4], c[7]), this.drawinfos();
                } else if (e && e[0].length > 0) {
                    this.drawRange(e[6], e[7], e[8][0], e[8][e[8].length - 1], !0);
                    var d = this.dealLine(e[0], e[6], e[7], Math.abs(e[6] - e[7])), F = this.dealLine(e[1], e[6], e[7], Math.abs(e[6] - e[7])), p = this.dealLine(e[2], e[6], e[7], Math.abs(e[6] - e[7]));
                    t.drawPath(i, F, this.options.line2Color || "#82aef2"), t.drawPath(i, p, this.options.line3Color || "#ff7e84"), 
                    t.drawPath(i, d, this.options.line1Color || "#fcc84b", 3), this.drawYLabel(e[6], e[7], !0), 
                    this.drawinfos(), this.SData[this.charttype] = [ d, F, p, e[6], e[7], e[8][0], e[8][e[8].length - 1], !0 ];
                } else this.drawNoData();
                i.save();
            }
        }, new h();
    }
};