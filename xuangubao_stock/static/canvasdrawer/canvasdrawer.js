var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
};

Component({
    properties: {
        painting: {
            type: Object,
            value: {
                view: []
            },
            observer: function(t, e) {
                this.data.isPainting || (JSON.stringify(t) !== JSON.stringify(e) ? t && t.width && t.height && (this.setData({
                    showCanvas: !0,
                    isPainting: !0
                }), this.readyPigment()) : t && "same" !== t.mode && this.triggerEvent("getImage", {
                    errMsg: "canvasdrawer:samme params"
                }));
            }
        }
    },
    data: {
        showCanvas: !1,
        width: 100,
        height: 100,
        tempFileList: [],
        isPainting: !1
    },
    ctx: null,
    cache: {},
    ready: function() {
        wx.removeStorageSync("canvasdrawer_pic_cache"), this.cache = wx.getStorageSync("canvasdrawer_pic_cache") || {}, 
        this.ctx = wx.createCanvasContext("canvasdrawer", this);
    },
    methods: {
        readyPigment: function() {
            var t = this, e = this.data.painting, i = e.width, a = e.height, s = e.views;
            this.setData({
                width: i,
                height: a
            });
            var n = setInterval(function() {
                t.ctx && (clearInterval(n), t.ctx.clearActions(), t.ctx.save(), t.getImagesInfo(s));
            }, 100);
        },
        getImagesInfo: function(t) {
            for (var e = this, i = [], a = 0; a < t.length; a++) "image" === t[a].type && i.push(this.getImageInfo(t[a].url));
            for (var s = [], n = 0; n < Math.ceil(i.length / 8); n++) !function(t) {
                s.push(new Promise(function(e, a) {
                    Promise.all(i.splice(8 * t, 8)).then(function(t) {
                        e(t);
                    }).catch(function(t) {
                        a(t);
                    });
                }));
            }(n);
            Promise.all(s).then(function(t) {
                for (var i = [], a = 0; a < t.length; a++) i = i.concat(t[a]);
                e.setData({
                    tempFileList: i
                }), e.startPainting();
            });
        },
        startPainting: function() {
            for (var e = this, i = this.data, a = i.tempFileList, s = i.painting.views, n = 0, h = 0; n < s.length; n++) if ("image" === s[n].type) this.drawImage(t({}, s[n], {
                url: a[h]
            })), h++; else if ("text" === s[n].type) {
                if (!this.ctx.measureText) return wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用 measureText 功能，请升级到最新微信版本后重试。"
                }), void this.triggerEvent("getImage", {
                    errMsg: "canvasdrawer:version too low"
                });
                this.drawText(s[n]);
            } else "rect" === s[n].type && this.drawRect(s[n]);
            this.ctx.draw(!1, function() {
                wx.setStorageSync("canvasdrawer_pic_cache", e.cache);
                var t = wx.getSystemInfoSync().system;
                /ios/i.test(t) ? e.saveImageToLocal() : setTimeout(function() {
                    e.saveImageToLocal();
                }, 800);
            });
        },
        drawImage: function(t) {
            var e = this;
            this.ctx.save();
            var i = t.url, a = t.top, s = void 0 === a ? 0 : a, n = t.left, h = void 0 === n ? 0 : n, c = t.width, r = void 0 === c ? 0 : c, o = t.height, l = void 0 === o ? 0 : o, g = t.borderRadius, d = void 0 === g ? 0 : g, x = t.deg, v = void 0 === x ? 0 : x;
            d ? (this.ctx.beginPath(), this.clipRoundRect(s, h, r, l, d, function() {
                e.ctx.drawImage(i, h, s, r, l);
            })) : 0 !== v ? (this.ctx.translate(h + r / 2, s + l / 2), this.ctx.rotate(v * Math.PI / 180), 
            this.ctx.drawImage(i, -r / 2, -l / 2, r, l)) : this.ctx.drawImage(i, h, s, r, l), 
            this.ctx.restore();
        },
        drawText: function(e) {
            this.ctx.save();
            var i = e.MaxLineNumber, a = void 0 === i ? 2 : i, s = e.breakWord, n = void 0 !== s && s, h = e.color, c = void 0 === h ? "black" : h, r = e.content, o = void 0 === r ? "" : r, l = e.fontSize, g = void 0 === l ? 16 : l, d = e.top, x = void 0 === d ? 0 : d, v = e.left, w = void 0 === v ? 0 : v, f = e.lineHeight, m = void 0 === f ? 20 : f, u = e.textAlign, p = void 0 === u ? "left" : u, I = e.width, T = e.bolder, P = void 0 !== T && T, y = e.textDecoration, b = void 0 === y ? "none" : y;
            if (this.ctx.beginPath(), this.ctx.setTextBaseline("top"), this.ctx.setTextAlign(p), 
            this.ctx.setFillStyle(c), this.ctx.setFontSize(g), n) {
                for (var M = "", S = x, L = 1, R = 0; R < o.length; R++) if (M += [ o[R] ], this.ctx.measureText(M).width > I) {
                    if (L === a && R !== o.length) {
                        M = M.substring(0, M.length - 1) + "...", this.drawTextLine(w, S, b, c, g, M), this.ctx.fillText(M, w, S), 
                        M = "";
                        break;
                    }
                    this.drawTextLine(w, S, b, c, g, M), this.ctx.fillText(M, w, S), M = "", S += m, 
                    L++;
                }
                this.drawTextLine(w, S, b, c, g, M), this.ctx.fillText(M, w, S);
            } else this.drawTextLine(w, x, b, c, g, o), this.ctx.fillText(o, w, x);
            this.ctx.restore(), P && this.drawText(t({}, e, {
                left: w + .3,
                top: x + .3,
                bolder: !1,
                textDecoration: "none"
            }));
        },
        drawTextLine: function(t, e, i, a, s, n) {
            "underline" === i ? this.drawRect({
                background: a,
                top: e + 1.2 * s,
                left: t - 1,
                width: this.ctx.measureText(n).width + 3,
                height: 1
            }) : "line-through" === i ? this.drawRect({
                background: a,
                top: e + .6 * s,
                left: t - 1,
                width: this.ctx.measureText(n).width + 3,
                height: 1
            }) : "backgroundColor" === i && this.clipRoundRect(e, t - 14, 24 + this.ctx.measureText(n).width, s + 8, s / 2 + 4, function() {}, "#e5e5e5");
        },
        drawRect: function(t) {
            this.ctx.save();
            var e = t.background, i = t.top, a = void 0 === i ? 0 : i, s = t.left, n = void 0 === s ? 0 : s, h = t.width, c = void 0 === h ? 0 : h, r = t.height, o = void 0 === r ? 0 : r, l = t.globalAlpha, g = void 0 === l ? 1 : l;
            this.ctx.setGlobalAlpha(g), this.ctx.setFillStyle(e), this.ctx.fillRect(n, a, c, o), 
            this.ctx.restore();
        },
        getImageInfo: function(t) {
            var e = this;
            return new Promise(function(i, a) {
                e.cache[t] ? i(e.cache[t]) : new RegExp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(t) ? wx.getImageInfo({
                    src: t,
                    complete: function(s) {
                        "getImageInfo:ok" === s.errMsg ? (e.cache[t] = s.path, i(s.path)) : (e.triggerEvent("getImage", {
                            errMsg: "canvasdrawer:download fail"
                        }), a(new Error("getImageInfo fail")));
                    }
                }) : (e.cache[t] = t, i(t));
            });
        },
        saveImageToLocal: function() {
            var t = this, e = this.data, i = e.width, a = e.height;
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: i,
                height: a,
                canvasId: "canvasdrawer",
                complete: function(e) {
                    "canvasToTempFilePath:ok" === e.errMsg ? (t.setData({
                        showCanvas: !1,
                        isPainting: !1,
                        tempFileList: []
                    }), t.triggerEvent("getImage", {
                        tempFilePath: e.tempFilePath,
                        errMsg: "canvasdrawer:ok"
                    })) : t.triggerEvent("getImage", {
                        errMsg: "canvasdrawer:fail"
                    });
                }
            }, this);
        },
        clipRoundRect: function(t, e, i, a, s, n) {
            var h = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "transparent";
            this.ctx.save(), this.ctx.beginPath(), this.ctx.fillStyle = h, this.ctx.arc(t + s, e + s, s, Math.PI, 1.5 * Math.PI), 
            this.ctx.moveTo(t + s, e), this.ctx.lineTo(t + i - s, e), this.ctx.lineTo(t + i, e + s), 
            this.ctx.arc(t + i - s, e + s, s, 1.5 * Math.PI, 2 * Math.PI), this.ctx.lineTo(t + i, e + a - s), 
            this.ctx.lineTo(t + i - s, e + a), this.ctx.arc(t + i - s, e + a - s, s, 0, .5 * Math.PI), 
            this.ctx.lineTo(t + s, e + a), this.ctx.lineTo(t, e + a - s), this.ctx.arc(t + s, e + a - s, s, .5 * Math.PI, Math.PI), 
            this.ctx.lineTo(t, e + s), this.ctx.lineTo(t + s, e), this.ctx.fill(), this.ctx.closePath(), 
            this.ctx.clip(), n(this.ctx), this.ctx.closePath(), this.ctx.restore();
        }
    }
});