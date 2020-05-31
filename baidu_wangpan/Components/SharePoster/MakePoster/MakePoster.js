var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
};

Component({
    properties: {
        canvasInfo: {
            type: Object,
            value: {
                items: []
            },
            observer: function(t, e) {
                this.data.canvasInfo && JSON.stringify(t) !== JSON.stringify(e) && t && t.width && t.height && (this.setData({
                    showCanvas: !0,
                    isPainting: !0
                }), this.readyPigment());
            }
        }
    },
    data: {
        showCanvas: !1,
        tempFileList: [],
        isPainting: !1,
        showUrl: ""
    },
    ctx: null,
    ready: function() {
        this.ctx = wx.createCanvasContext("posterCanvas", this);
    },
    methods: function(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t;
    }({
        hide: function() {
            this.setData({
                showCanvas: !1
            });
        },
        show: function() {
            this.setData({
                showCanvas: !0
            });
        },
        readyPigment: function() {
            var t = this;
            wx.wetoast({
                content: "正在生成卡片...",
                loading: !0,
                duration: !0
            });
            var e = this.data.canvasInfo, i = e.borderRadius, a = void 0 === i ? 0 : i, s = e.width, o = void 0 === s ? 0 : s, n = e.height, r = void 0 === n ? 0 : n, h = e.pixelRatio, c = void 0 === h ? 1 : h, g = (e.bgColor, 
            e.items), d = void 0 === g ? {} : g;
            this.setData({
                width: o,
                height: r,
                pixelRatio: c
            });
            var l = setInterval(function() {
                t.ctx && (clearInterval(l), t.ctx.clearActions(), t.roundRect(0, 0, o, r, a), t.ctx.save(), 
                t.getImagesInfo(d));
            }, 100);
        },
        roundRect: function(t, e, i, a, s) {
            i < 2 * s && (s = i / 2), a < 2 * s && (s = a / 2), this.ctx.beginPath(), this.ctx.moveTo(t + s, e), 
            this.ctx.arcTo(t + i, e, t + i, e + a, s), this.ctx.arcTo(t + i, e + a, t, e + a, s), 
            this.ctx.arcTo(t, e + a, t, e, s), this.ctx.arcTo(t, e, t + i, e, s), this.ctx.setFillStyle("#fff"), 
            this.ctx.fill(), this.ctx.closePath();
        },
        getImagesInfo: function(t) {
            for (var e = this, i = [], a = 0; a < t.length; a++) "image" === t[a].type && i.push(this.getImageInfo(t[a].url));
            Promise.all(i).then(function(t) {
                for (var i = [], a = 0; a < t.length; a++) i = i.concat(t[a]);
                e.setData({
                    tempFileList: i
                }), e.startPainting();
            });
        },
        startPainting: function() {
            var e = this, i = this.data, a = i.tempFileList, s = i.canvasInfo.items;
            console.log(a);
            for (var o = 0, n = 0; o < s.length; o++) if ("image" === s[o].type) this.drawImage(t({}, s[o], {
                imageInfo: a[n]
            })), n++; else if ("text" === s[o].type) {
                if (!this.ctx.measureText) return wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用 measureText 功能，请升级到最新微信版本后重试。"
                }), void this.triggerEvent("getImage", {
                    errMsg: "canvasdrawer:version too low"
                });
                this.drawText(s[o]);
            } else "line" === s[o].type && this.drawLine(s[o]);
            this.ctx.draw(!1, function() {
                var t = wx.getSystemInfoSync().system;
                /ios/i.test(t) ? e.saveImageToLocal() : setTimeout(function() {
                    e.saveImageToLocal();
                }, 800);
            });
        },
        drawLine: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.start, i = void 0 === e ? [] : e, a = t.end, s = void 0 === a ? [] : a, o = t.lineWidth, n = void 0 === o ? 1 : o, r = t.color, h = void 0 === r ? "#333" : r;
            this.ctx.beginPath(), this.ctx.setLineWidth(n), this.ctx.setStrokeStyle(h), this.ctx.moveTo(i[0], i[1]), 
            this.ctx.lineTo(s[0], s[1]), this.ctx.stroke(), this.ctx.closePath();
        },
        drawImage: function(t) {
            this.ctx.save();
            t.imageInfo;
            var e = t.top, i = void 0 === e ? 0 : e, a = t.left, s = void 0 === a ? 0 : a, o = t.width, n = void 0 === o ? 0 : o, r = t.height, h = void 0 === r ? 0 : r, c = (t.borderRadius, 
            t.deg), g = void 0 === c ? 0 : c, d = t.sx, l = void 0 === d ? 0 : d, v = t.sy, f = void 0 === v ? 0 : v, x = t.sHeight, m = void 0 === x ? 0 : x, w = t.imageInfo, u = w.path, I = w.width, p = w.height;
            if (u.includes(".json")) this.triggerEvent("getImage", {
                errMsg: "canvasdrawer:qrcode fail " + u
            }); else {
                if (0 !== g) this.ctx.translate(s + n / 2, i + h / 2), this.ctx.rotate(g * Math.PI / 180), 
                this.ctx.drawImage(u, -n / 2, -h / 2, n, h); else if (0 === m && this.ctx.drawImage(u, s, i, n, h), 
                I < n / 2) p < h / 2 ? this.ctx.drawImage(u, (n - I) / 2, i + (h - p) / 2, I, p) : this.ctx.drawImage(u, l, f, I, m, (n - I) / 2, i, I, h); else {
                    var T = n * p / I;
                    T < h ? this.ctx.drawImage(u, s, i + (h - T) / 2, n, T) : this.ctx.drawImage(u, l, f, I, I * h / n, s, i, n, h);
                }
                this.ctx.restore();
            }
        },
        getImageInfo: function(t) {
            var e = this;
            return new Promise(function(i, a) {
                new RegExp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(t) ? wx.getImageInfo({
                    src: t,
                    complete: function(s) {
                        "getImageInfo:ok" === s.errMsg ? i(s) : (e.triggerEvent("getImage", {
                            errMsg: "canvasdrawer:download fail"
                        }), a(new Error("getImageInfo fail: " + t)));
                    }
                }) : i(t);
            });
        },
        drawText: function(e) {
            this.ctx.save();
            var i = e.MaxLineNumber, a = void 0 === i ? 2 : i, s = e.breakWord, o = void 0 !== s && s, n = e.color, r = void 0 === n ? "#fff" : n, h = e.content, c = void 0 === h ? "" : h, g = e.fontSize, d = void 0 === g ? 16 : g, l = e.top, v = void 0 === l ? 0 : l, f = e.left, x = void 0 === f ? 0 : f, m = e.lineHeight, w = void 0 === m ? 20 : m, u = e.textAlign, I = void 0 === u ? "left" : u, p = e.width, T = e.bolder, P = void 0 !== T && T;
            this.ctx.beginPath(), this.ctx.setTextBaseline("top"), this.ctx.setTextAlign(I), 
            this.ctx.setFillStyle(r), this.ctx.setFontSize(d);
            this.ctx.measureText(c).width;
            var y = x;
            if (y = "center" === I ? this.data.width / 2 : x + this.data.width / 2, o) {
                for (var b = "", F = v, C = 1, L = 0; L < c.length; L++) if (b += [ c[L] ], this.ctx.measureText(b).width > p) {
                    if (C === a && L !== c.length) {
                        b = b.substring(0, b.length - 1) + "...", this.ctx.fillText(b, y, F), b = "";
                        break;
                    }
                    this.ctx.fillText(b, y, F), b = "", F += w, C++;
                }
                this.ctx.fillText(b, y, F);
            } else this.ctx.fillText(c, y, v);
            this.ctx.restore(), P && this.drawText(t({}, e, {
                left: x + .3,
                top: v + .3,
                bolder: !1
            }));
        },
        saveImageToLocal: function() {
            var t = this, e = this.data, i = e.width, a = e.height;
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: i,
                height: a,
                canvasId: "posterCanvas",
                complete: function(e) {
                    "canvasToTempFilePath:ok" === e.errMsg ? (t.setData({
                        showCanvas: !1,
                        isPainting: !1,
                        tempFileList: [],
                        showUrl: e.tempFilePath
                    }), t.triggerEvent("getImage", {
                        tempFilePath: e.tempFilePath,
                        errMsg: "canvasdrawer:ok"
                    })) : t.triggerEvent("getImage", {
                        errMsg: "canvasdrawer:fail"
                    });
                }
            }, this);
        }
    }, "hide", function(t) {
        this.triggerEvent("hide");
    }),
    move: {}
});