var t = require("ctxbase.js");

module.exports = {
    FundLineChart: function(i, e, h) {
        function s() {
            return this.ctx = i, this.width = h.width, this.height = this.width * (h.heightratio || .4), 
            this.isopen = !0, this.multi = 1.6, this.options = h, this.showSwitch = h.showswitch, 
            this.CData = [], this.SData = [], this.fundtype = h.fundtype, this.charttype = h.charttype, 
            this.draw(e), i.draw(), this;
        }
        function a(t, i, e, h, s, a, o) {
            var n = void 0, r = void 0, l = void 0, d = void 0;
            if (e *= a, h *= a, n = i.x - h / 2, r = i.x + h / 2, n < 0 && (n = 0, r = h), r > o && (r = o, 
            n = o - h), i.y - e - h > 0 ? (l = i.y - e - h, d = i.y - e) : (l = i.y + e + h, 
            d = i.y + e), t.beginPath(), t.setStrokeStyle("4" === s.type ? "#FBA52F" : "#80adf7"), 
            t.setFillStyle("4" === s.type ? "#FBA52F" : "#80adf7"), t.setLineWidth(1), t.moveTo(n, l), 
            t.lineTo(r, l), t.lineTo(r, d), t.lineTo(i.x + h / 10, d), t.lineTo(i.x, i.y), t.lineTo(i.x - h / 10, d), 
            t.lineTo(n, d), t.lineTo(n, l), t.stroke(), t.fill(), t.closePath(), "4" === s.type) {
                var p = Math.min(l, d);
                t.drawImage(s.filepath, n + 1, p + 1, h - 2, h - 2);
            } else "3" === s.type && (t.setFillStyle("#FFFFFF"), t.setTextAlign("center"), t.setFontSize(1 == a ? 12 : 18), 
            t.fillText("关注", (n + r) / 2, (l + d) / 2 + 4 * a + (1 == a ? 1 : 0)));
            return {
                x1: n,
                x2: r,
                y1: Math.min(l, d),
                y2: Math.max(l, d)
            };
        }
        var o = function(t, i, e, h, s) {
            var a = void 0, o = void 0, n = void 0, r = void 0, l = void 0, d = void 0, p = s || 6;
            if (a = i / 2 - 10 - p / 2 - Math.sqrt(2) * p, o = i / 2 - 10 - p / 2, n = i / 2 - 10 + p / 2, 
            r = i / 2 - 10 + p / 2 + Math.sqrt(2) * p, l = e * (i < 310 ? .85 : .86), d = l + 2 * p, 
            t.beginPath(), t.moveTo(o, l), t.lineTo(n, l), t.bezierCurveTo(r, l, r, d, n, d), 
            t.lineTo(o, d), t.bezierCurveTo(a, d, a, l, o, l), t.setLineWidth(3), t.setStrokeStyle("#cccccc"), 
            t.setFillStyle("#FFFFFF"), t.stroke(), t.fill(), t.beginPath(), t.arc(h ? n : o, (l + d) / 2, p - 3, 0, 2 * Math.PI), 
            t.setStrokeStyle(h ? "#09BF82" : "#cccccc"), t.setFillStyle(h ? "#09BF82" : "#FFFFFF"), 
            t.stroke(), t.fill(), t.setFillStyle("#999999"), t.setFontSize(10), t.setTextAlign("left"), 
            t.fillText("记号", i / 2 - 10 - 42, .94 * e - 1), h) {
                var c = (d - l) / 2;
                t.setLineWidth(2), t.setStrokeStyle("#cccccc"), t.beginPath(), t.moveTo(r + 20 + c, l), 
                t.lineTo(r + 20, (l + d) / 2), t.lineTo(r + 20 + c, d), t.stroke(), t.beginPath(), 
                t.moveTo(r + 50, l), t.lineTo(r + 50 + c, (l + d) / 2), t.lineTo(r + 50, d), t.stroke();
            }
            return [ {
                x1: a,
                x2: r,
                y1: l,
                y2: d
            }, {
                x1: r + 10,
                x2: r + 40,
                y1: l,
                y2: d
            }, {
                x1: r + 40,
                x2: r + 80,
                y1: l,
                y2: d
            } ];
        };
        return s.prototype.dealLine = function(t, i, e, h, s, a) {
            var o = this.width, n = this.height, r = this.options.spacewidth, l = [], d = this.options.line3 - this.options.line1 || .64, p = this.options.line1 || .18, c = s || t.length;
            null != t[0] && l.push({
                x: r,
                y: n * (d * Math.abs(i - t[0]) / h + p),
                index: 0
            });
            for (var y = 1; y < c; y++) null != t[y] ? l.push({
                x: r + (o - 2 * r) * y / (c - 1),
                y: n * (d * Math.abs(i - t[y]) / h + p),
                index: y
            }) : a || l.push(null);
            return l;
        }, s.prototype.drawNoData = function(t) {
            var i = this.ctx, e = this.width, h = this.height;
            i.setFillStyle("#999999"), i.setFontSize(14), i.setTextAlign("center"), i.fillText(t || "本基金暂无净值趋势", e / 2, h / 2);
        }, s.prototype.drawRange = function(i, e, h, s, a) {
            var n = this.ctx, r = this.width, l = this.height, d = (((i + e) / 2).toFixed(2), 
            this.options.spacewidth || 10), p = this.options.line1, c = this.options.line2, y = this.options.line3;
            if (t.drawDashLine(n, d, l * p, r - d, l * p), t.drawDashLine(n, d, l * c, r - d, l * c), 
            t.drawLine(n, d, l * y, r - d, l * y), n.setFillStyle("#999999"), n.setFontSize(10), 
            h && n.fillText(h, d, .94 * l - 1), n.setTextAlign("right"), s && n.fillText(s, r - d, .94 * l - 1), 
            "06" != this.charttype && "50" != this.charttype && this.showSwitch) {
                var w = o(n, r, l, this.isopen, this.options.switchr);
                this.switchrange || (this.switchrange = w);
            }
        }, s.prototype.drawYLabel = function(t, i, e) {
            var h = this.ctx, s = (this.width, this.height), a = ((t + i) / 2).toFixed(2), o = this.options.spacewidth || 10, n = this.options.line1, r = this.options.line2, l = this.options.line3;
            h.setFillStyle("#999999"), h.setFontSize(10), h.setTextAlign("left"), h.fillText(e ? t.toFixed(2) + "%" : t, o, s * (n - .04)), 
            h.fillText(a + (e ? "%" : ""), o, s * (r - .04)), h.fillText(e ? i.toFixed(2) + "%" : i, o, s * (l - .04));
        }, s.prototype.draw = function(i, e) {
            var h = this.ctx, s = this.fundtype;
            if (h.setFillStyle("#FFFFFF"), h.fillRect(0, 0, this.width, this.height), "01" == s) {
                var a, o, n, r = this.charttype;
                if (console.log("charttype:" + r), "12" !== r ? (a = 0, o = this.options.qrnhColor || "#FE7E85", 
                n = !0) : (a = 1, o = this.options.wfsyColor || "#81ADF6", n = !1), this.CData[r]) {
                    var l = this.CData[r];
                    this.drawRange(l[1], l[2], l[3], l[4], l[5]), t.drawPath(h, l[0], o, 2), this.drawYLabel(l[1], l[2], l[5]);
                } else if (i && i[a][0].length > 0) {
                    this.drawRange(i[a][1], i[a][2], i[2][0], i[2][i[2].length - 1], n);
                    var d = this.dealLine(i[a][0], i[a][1], i[a][2], Math.abs(i[a][1] - i[a][2]));
                    t.drawPath(h, d, o, 2), this.drawYLabel(i[a][1], i[a][2], n), this.CData[r] = [ d, i[a][1], i[a][2], i[2][0], i[2][i[2].length - 1], n ];
                } else this.drawNoData();
                h.save();
            } else if ("portfolio" == s) {
                if (this.SData[this.charttype]) {
                    var p = this.SData[this.charttype];
                    this.drawRange(p[3], p[4], p[5], p[6], p[7]), t.drawPath(h, p[1], this.options.line2Color || "#FF7E83", 1), 
                    t.drawPath(h, p[0], this.options.line1Color || "#fcc84b", 3), this.drawYLabel(p[3], p[4], p[7]);
                } else if (i && i[0].length > 0) {
                    this.drawRange(i[6], i[7], i[8][0], i[8][i[8].length - 1], !0);
                    var c = this.dealLine(i[0], i[6], i[7], Math.abs(i[6] - i[7])), y = this.dealLine(i[1], i[6], i[7], Math.abs(i[6] - i[7]));
                    t.drawPath(h, y, this.options.line2Color || "#FF7E83", 1), t.drawPath(h, c, this.options.line1Color || "#fcc84b", 3), 
                    this.drawYLabel(i[6], i[7], !0), this.SData[this.charttype] = [ c, y, x, i[6], i[7], i[8][0], i[8][i[8].length - 1], !0 ];
                } else this.drawNoData("暂无收益趋势数据");
                h.save();
            } else {
                if ("50" == this.charttype) this.drawEstimateChart(i, e); else if (this.SData[this.charttype]) {
                    var w = this.SData[this.charttype];
                    this.drawRange(w[3], w[4], w[5], w[6], w[7]), t.drawPath(h, w[1], this.options.line2Color || "#82aef2"), 
                    t.drawPath(h, w[2], this.options.line3Color || "#ff7e84"), t.drawPath(h, w[0], this.options.line1Color || "#fcc84b", 3), 
                    this.drawYLabel(w[3], w[4], w[7]);
                } else if (i && i[0].length > 0) {
                    this.drawRange(i[6], i[7], i[8][0], i[8][i[8].length - 1], !0);
                    var c = this.dealLine(i[0], i[6], i[7], Math.abs(i[6] - i[7])), y = this.dealLine(i[1], i[6], i[7], Math.abs(i[6] - i[7])), x = this.dealLine(i[2], i[6], i[7], Math.abs(i[6] - i[7]));
                    t.drawPath(h, y, this.options.line2Color || "#82aef2"), t.drawPath(h, x, this.options.line3Color || "#ff7e84"), 
                    t.drawPath(h, c, this.options.line1Color || "#fcc84b", 3), this.drawYLabel(i[6], i[7], !0), 
                    this.SData[this.charttype] = [ c, y, x, i[6], i[7], i[8][0], i[8][i[8].length - 1], !0 ];
                } else this.drawNoData();
                h.save();
            }
        }, s.prototype.drawEstimateChart = function(e, h) {
            if (this.SData[this.charttype]) {
                var s = this.SData[this.charttype];
                this.drawRange(s[1], s[2], s[3], s[4], s[5]), t.drawPath(i, s[0], this.options.line2Color || "#82aef2", 2), 
                this.drawEstimateTip(h), this.drawYLabel(s[1], s[2], s[5]);
            } else if (e && e[0] && e[0].length > 0) {
                this.drawRange(100 * e[1], 100 * e[2], "09:30", "15:00", !0);
                var a = this.dealLine(e[0], e[1], e[2], Math.abs(e[1] - e[2]), 241, !0);
                t.drawPath(i, a, this.options.line2Color || "#82aef2", 2), this.drawEstimateTip(h), 
                this.drawYLabel(100 * e[1], 100 * e[2], !0), this.SData[this.charttype] = [ a, 100 * e[1], 100 * e[2], "09:30", "15:00", !0 ];
            } else this.drawNoData("本基金暂无净值估算数据");
        }, s.prototype.drawEstimateTip = function(t) {
            t || (i.setFillStyle("#BBBBBB"), i.setFontSize(10), i.setTextAlign("center"), i.fillText("盘中估值仅供参考，实际涨跌幅以基金披露净值为准。", this.width / 2, this.height * (this.options.line1 - .05)));
        }, s.prototype.redraw = function(t, i, e, h) {
            var s = this.ctx, o = this.fundtype, n = this.width;
            if (this.charttype = i, this.draw(t), e && e.length > 0 && this.isopen && "06" != this.charttype && this.showSwitch) {
                this.pointsList = e;
                var r = void 0, l = void 0, d = void 0;
                "01" === o ? (d = (r = this.CData[i])[0], l = 6) : (d = (r = this.SData[i])[0], 
                l = 8), r[l] = [];
                for (var p = 0; p < e.length; p++) {
                    var c = d[e[p].index];
                    h != p && c && (w = a(s, {
                        x: c.x,
                        y: c.y
                    }, 6, 24, e[p], 1, n), r[l][p] = w);
                }
                if (h > -1) {
                    var y = d[e[h].index];
                    if (y) {
                        var w = a(s, {
                            x: y.x,
                            y: y.y
                        }, 6, 24, e[h], this.multi, n);
                        r[l][h] = w;
                    }
                }
                this.index = h;
            }
            s.draw();
        }, s.prototype.touchRedraw = function(t) {
            if (!this.showSwitch) return {};
            var i = this.ctx, e = -1, h = !1, s = 0;
            if (this.switchrange) {
                var o = this.switchrange[0], n = this.switchrange[1], r = this.switchrange[2];
                t.x >= o.x1 && t.x <= o.x2 && t.y >= o.y1 && t.y <= o.y2 ? (this.isopen = !Boolean(this.isopen), 
                h = !0) : this.isopen && t.x >= n.x1 && t.x <= n.x2 && t.y >= n.y1 && t.y <= n.y2 ? s = -1 : this.isopen && t.x >= r.x1 && t.x <= r.x2 && t.y >= r.y1 && t.y <= r.y2 && (s = 1);
            }
            if (this.draw(), this.pointsList && this.pointsList.length > 0 && this.isopen && "06" !== this.charttype) {
                var l = void 0, d = void 0, p = void 0, c = void 0;
                "01" === this.fundtype ? (c = (d = this.CData[this.charttype])[0], p = 6) : (c = (d = this.SData[this.charttype])[0], 
                p = 8), l = this.pointsList, 0 != s && (e = void 0 == this.index || -1 == this.index ? 0 : 0 == this.index && -1 == s ? l.length - 1 : this.index == l.length - 1 && 1 == s ? 0 : this.index + s);
                for (var y = 0; y < l.length; y++) {
                    var w = c[l[y].index], x = void 0;
                    if (!h && (x = d[p][y]), e != y) {
                        if (!h && x.x1 < t.x && x.x2 > t.x && x.y1 < t.y && x.y2 > t.y && -1 == e) {
                            if (void 0 == this.index || this.index != y) {
                                e = y;
                                continue;
                            }
                            e = -1;
                        }
                        v = a(i, {
                            x: w.x,
                            y: w.y
                        }, 6, 24, l[y], 1, this.width), d[p] || (d[p] = []), d[p][y] = v;
                    }
                }
                if (e > -1) {
                    var f = c[l[e].index], v = a(i, {
                        x: f.x,
                        y: f.y - 1
                    }, 6, 24, l[e], this.multi, this.width);
                    d[p][e] = v;
                }
                this.index = e;
            }
            return i.draw(), {
                index: e,
                isswitch: h,
                isopen: this.isopen
            };
        }, s.prototype.touchMove = function(i) {
            var e = this.ctx, h = void 0, s = void 0, a = this.width, o = this.height, n = this.options.spacewidth || 10, r = "01" == this.fundtype ? this.CData[this.charttype] : this.SData[this.charttype];
            if (r) for (var l = 0; l < r[0].length; l++) {
                if (0 == l && i.changedTouches[0].x <= r[0][l].x) {
                    h = r[0][l], s = null;
                    break;
                }
                if (r[0][l] && i.changedTouches[0].x <= r[0][l].x) {
                    for (var d = l - 1; !r[0][d]; ) d--;
                    var p = r[0][d];
                    i.changedTouches[0].x <= (r[0][l].x + p.x) / 2 ? (h = p, s = l - 1 == 0 ? null : r[0][l - 2]) : (h = r[0][l], 
                    s = p);
                    break;
                }
                if (l === r[0].length - 1) {
                    h = r[0][l], s = r[0][l - 1];
                    break;
                }
            }
            return this.draw(null, !0), t.drawLine(e, n, h.y, a - n, h.y, "#99A9C9"), t.drawLine(e, h.x, 0, h.x, o * this.options.line3, "#99A9C9"), 
            e.draw(), [ s ? s.index : null, h.index ];
        }, new s();
    }
};