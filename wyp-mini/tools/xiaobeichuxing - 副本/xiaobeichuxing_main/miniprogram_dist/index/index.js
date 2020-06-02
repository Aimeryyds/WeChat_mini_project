var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, i = {
    drawBlock: function(t) {
        var i = t.text, e = t.width, o = void 0 === e ? 0 : e, s = t.height, n = t.x, h = t.y, r = t.paddingLeft, x = void 0 === r ? 0 : r, a = t.paddingRight, c = void 0 === a ? 0 : a, d = t.borderWidth, l = t.backgroundColor, u = t.borderColor, P = t.borderRadius, f = void 0 === P ? 0 : P, g = t.opacity, v = void 0 === g ? 1 : g, p = 0, w = 0, m = 0;
        if (void 0 !== i) {
            var b = this._getTextWidth("string" == typeof i.text ? i : i.text);
            p = b > o ? b : o, p += x + x;
            var y = i.textAlign, I = void 0 === y ? "left" : y;
            i.text;
            m = s / 2 + h, w = "left" === I ? n + x : "center" === I ? p / 2 + n : n + p - c;
        } else p = o;
        l && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setFillStyle(l), f > 0 ? (this._drawRadiusRect(n, h, p, s, f), 
        this.ctx.fill()) : this.ctx.fillRect(this.toPx(n), this.toPx(h), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), d && (this.ctx.save(), this.ctx.setGlobalAlpha(v), this.ctx.setStrokeStyle(u), 
        this.ctx.setLineWidth(this.toPx(d)), f > 0 ? (this._drawRadiusRect(n, h, p, s, f), 
        this.ctx.stroke()) : this.ctx.strokeRect(this.toPx(n), this.toPx(h), this.toPx(p), this.toPx(s)), 
        this.ctx.restore()), i && this.drawText(Object.assign(i, {
            x: w,
            y: m
        }));
    },
    drawText: function(i) {
        var e = this, o = i.x, s = i.y, n = (i.fontSize, i.color, i.baseLine), h = (i.textAlign, 
        i.text);
        i.opacity, i.width, i.lineNum, i.lineHeight;
        if ("[object Array]" === Object.prototype.toString.call(h)) {
            var r = {
                x: o,
                y: s,
                baseLine: n
            };
            h.forEach(function(i) {
                r.x += i.marginLeft || 0;
                var o = e._drawSingleText(Object.assign(i, t({}, r)));
                r.x += o + (i.marginRight || 0);
            });
        } else this._drawSingleText(i);
    },
    drawImage: function(t) {
        var i = t.imgPath, e = t.x, o = t.y, s = t.w, n = t.h, h = t.sx, r = t.sy, x = t.sw, a = t.sh, c = t.borderRadius, d = void 0 === c ? 0 : c, l = t.borderWidth, u = void 0 === l ? 0 : l, P = t.borderColor;
        this.ctx.save(), d > 0 ? (this._drawRadiusRect(e, o, s, n, d), this.ctx.clip(), 
        this.ctx.drawImage(i, this.toPx(h), this.toPx(r), this.toPx(x), this.toPx(a), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        u > 0 && (this.ctx.setStrokeStyle(P), this.ctx.setLineWidth(this.toPx(u)), this.ctx.stroke())) : this.ctx.drawImage(i, this.toPx(h), this.toPx(r), this.toPx(x), this.toPx(a), this.toPx(e), this.toPx(o), this.toPx(s), this.toPx(n)), 
        this.ctx.restore();
    },
    drawLine: function(t) {
        var i = t.startX, e = t.startY, o = t.endX, s = t.endY, n = t.color, h = t.width;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setStrokeStyle(n), this.ctx.setLineWidth(this.toPx(h)), 
        this.ctx.moveTo(this.toPx(i), this.toPx(e)), this.ctx.lineTo(this.toPx(o), this.toPx(s)), 
        this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
    },
    downloadResource: function() {
        var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [];
        return this.drawArr = [], i.forEach(function(i, o) {
            return e.push(t._downloadImageAndInfo(i, o));
        }), Promise.all(e);
    },
    initCanvas: function(t, i, e) {
        var o = this;
        return new Promise(function(s) {
            o.setData({
                pxWidth: o.toPx(t),
                pxHeight: o.toPx(i),
                debug: e
            }, s);
        });
    }
}, e = {
    _drawRadiusRect: function(t, i, e, o, s) {
        var n = s / 2;
        this.ctx.beginPath(), this.ctx.moveTo(this.toPx(t + n), this.toPx(i)), this.ctx.lineTo(this.toPx(t + e - n), this.toPx(i)), 
        this.ctx.arc(this.toPx(t + e - n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .75, 2 * Math.PI * 1), 
        this.ctx.lineTo(this.toPx(t + e), this.toPx(i + o - n)), this.ctx.arc(this.toPx(t + e - n), this.toPx(i + o - n), this.toPx(n), 0, 2 * Math.PI * .25), 
        this.ctx.lineTo(this.toPx(t + n), this.toPx(i + o)), this.ctx.arc(this.toPx(t + n), this.toPx(i + o - n), this.toPx(n), 2 * Math.PI * .25, 2 * Math.PI * .5), 
        this.ctx.lineTo(this.toPx(t), this.toPx(i + n)), this.ctx.arc(this.toPx(t + n), this.toPx(i + n), this.toPx(n), 2 * Math.PI * .5, 2 * Math.PI * .75);
    },
    _getTextWidth: function(t) {
        var i = this, e = [];
        "[object Object]" === Object.prototype.toString.call(t) ? e.push(t) : e = t;
        var o = 0;
        return e.forEach(function(t) {
            var e = t.fontSize, s = t.text, n = t.marginLeft, h = void 0 === n ? 0 : n, r = t.marginRight, x = void 0 === r ? 0 : r;
            i.ctx.setFontSize(i.toPx(e)), o += i.ctx.measureText(s).width + h + x;
        }), this.toRpx(o);
    },
    _drawSingleText: function(t) {
        var i = this, e = t.x, o = t.y, s = t.fontSize, n = t.color, h = t.baseLine, r = t.textAlign, x = void 0 === r ? "left" : r, a = t.text, c = t.opacity, d = void 0 === c ? 1 : c, l = t.textDecoration, u = void 0 === l ? "none" : l, P = t.width, f = t.lineNum, g = void 0 === f ? 1 : f, v = t.lineHeight, p = void 0 === v ? 0 : v;
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setGlobalAlpha(d), this.ctx.setFontSize(this.toPx(s)), 
        this.ctx.setFillStyle(n), this.ctx.setTextBaseline(h), this.ctx.setTextAlign(x);
        var w = this.toRpx(this.ctx.measureText(a).width), m = [];
        if (w > P) {
            for (var b = +(w / a.length).toFixed(2), y = P / b, I = 0; I <= a.length; I += y) {
                var T = a.slice(I, I + y);
                if ("" !== T && m.push(T), m.length === g) break;
            }
            if (m.length * y < a.length) {
                var R = this.ctx.measureText("...").width, S = Math.ceil(R / b), _ = new RegExp(".{" + S + "}$");
                m[m.length - 1] = m[m.length - 1].replace(_, "...");
            }
            w = P;
        } else m.push(a);
        if (m.forEach(function(t, n) {
            i.ctx.fillText(t, i.toPx(e), i.toPx(o + (p || s) * n));
        }), this.ctx.restore(), "none" !== u) {
            var k = o;
            "line-through" === u && (k = o), this.ctx.save(), this.ctx.moveTo(this.toPx(e), this.toPx(k)), 
            this.ctx.lineTo(this.toPx(e) + this.toPx(w), this.toPx(k)), this.ctx.setStrokeStyle(n), 
            this.ctx.stroke(), this.ctx.restore();
        }
        return w;
    }
}, o = {
    _downloadImageAndInfo: function(t, i) {
        var e = this;
        return new Promise(function(o, s) {
            var n = t.x, h = t.y, r = t.url, x = t.zIndex, a = r;
            e._downImage(a, i).then(function(t) {
                return e._getImageInfo(t, i);
            }).then(function(s) {
                var r = s.imgPath, a = s.imgInfo, c = void 0, d = void 0, l = t.borderRadius || 0, u = t.width, P = t.height, f = e.toRpx(a.width), g = e.toRpx(a.height);
                f / g <= u / P ? (c = 0, d = (g - f / u * P) / 2) : (d = 0, c = (f - g / P * u) / 2), 
                e.drawArr.push({
                    type: "image",
                    borderRadius: l,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor,
                    zIndex: void 0 !== x ? x : i,
                    imgPath: r,
                    sx: c,
                    sy: d,
                    sw: f - 2 * c,
                    sh: g - 2 * d,
                    x: n,
                    y: h,
                    w: u,
                    h: P
                }), o();
            }).catch(function(t) {
                return s(t);
            });
        });
    },
    _downImage: function(t) {
        var i = this;
        return new Promise(function(e, o) {
            /^http/.test(t) && !new RegExp(wx.env.USER_DATA_PATH).test(t) ? wx.downloadFile({
                url: i._mapHttpToHttps(t),
                success: function(t) {
                    200 === t.statusCode ? e(t.tempFilePath) : o(t.errMsg);
                },
                fail: function(t) {
                    o(t);
                }
            }) : e(t);
        });
    },
    _getImageInfo: function(t, i) {
        return new Promise(function(e, o) {
            wx.getImageInfo({
                src: t,
                success: function(o) {
                    e({
                        imgPath: t,
                        imgInfo: o,
                        index: i
                    });
                },
                fail: function(t) {
                    o(t);
                }
            });
        });
    },
    toPx: function(t) {
        return t * this.factor;
    },
    toRpx: function(t) {
        return t / this.factor;
    },
    _mapHttpToHttps: function(t) {
        if (t.indexOf(":") < 0) return t;
        var i = t.split(":");
        return 2 === i.length && "http" === i[0] ? (i[0] = "https", i[0] + ":" + i[1]) : t;
    }
};

Component({
    properties: {},
    created: function() {
        var t = wx.getSystemInfoSync().screenWidth;
        this.factor = t / 750;
    },
    methods: Object.assign({
        create: function(t) {
            var i = this;
            this.ctx = wx.createCanvasContext("canvasid", this), this.initCanvas(t.width, t.height, t.debug).then(function() {
                t.backgroundColor && (i.ctx.save(), i.ctx.setFillStyle(t.backgroundColor), i.ctx.fillRect(0, 0, i.toPx(t.width), i.toPx(t.height)), 
                i.ctx.restore());
                var e = t.texts, o = void 0 === e ? [] : e, s = (t.images, t.blocks), n = void 0 === s ? [] : s, h = t.lines, r = void 0 === h ? [] : h, x = i.drawArr.concat(o.map(function(t) {
                    return t.type = "text", t.zIndex = t.zIndex || 0, t;
                })).concat(n.map(function(t) {
                    return t.type = "block", t.zIndex = t.zIndex || 0, t;
                })).concat(r.map(function(t) {
                    return t.type = "line", t.zIndex = t.zIndex || 0, t;
                }));
                x.sort(function(t, i) {
                    return t.zIndex - i.zIndex;
                }), x.forEach(function(t) {
                    "image" === t.type ? i.drawImage(t) : "text" === t.type ? i.drawText(t) : "block" === t.type ? i.drawBlock(t) : "line" === t.type && i.drawLine(t);
                });
                var a = 0;
                "android" === wx.getSystemInfoSync().platform && (a = 300), i.ctx.draw(!1, function() {
                    setTimeout(function() {
                        wx.canvasToTempFilePath({
                            canvasId: "canvasid",
                            success: function(t) {
                                i.triggerEvent("success", t.tempFilePath);
                            },
                            fail: function(t) {
                                i.triggerEvent("fail", t);
                            }
                        }, i);
                    }, a);
                });
            }).catch(function(t) {
                wx.showToast({
                    icon: "none",
                    title: t.errMsg || "生成失败"
                }), console.error(t);
            });
        }
    }, i, e, o)
});