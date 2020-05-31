var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/defineProperty"));

function e(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, a);
    }
    return i;
}

function i(i) {
    for (var a = 1; a < arguments.length; a++) {
        var s = null != arguments[a] ? arguments[a] : {};
        a % 2 ? e(s, !0).forEach(function(e) {
            (0, t.default)(i, e, s[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : e(s).forEach(function(t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(s, t));
        });
    }
    return i;
}

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
            var r = setInterval(function() {
                t.ctx && (clearInterval(r), t.ctx.clearActions(), t.ctx.save(), t.getImagesInfo(s));
            }, 100);
        },
        getImagesInfo: function(t) {
            for (var e = this, i = [], a = 0; a < t.length; a++) "image" === t[a].type && i.push(this.getImageInfo(t[a].url));
            for (var s = [], r = function(t) {
                s.push(new Promise(function(e, a) {
                    Promise.all(i.splice(8 * t, 8)).then(function(t) {
                        e(t);
                    }).catch(function(t) {
                        a(t);
                    });
                }));
            }, n = 0; n < Math.ceil(i.length / 8); n++) r(n);
            Promise.all(s).then(function(t) {
                for (var i = [], a = 0; a < t.length; a++) i = i.concat(t[a]);
                e.setData({
                    tempFileList: i
                }), e.startPainting();
            });
        },
        startPainting: function() {
            for (var t = this, e = this.data, a = e.tempFileList, s = e.painting.views, r = 0, n = 0; r < s.length; r++) if ("image" === s[r].type) this.drawImage(i({}, s[r], {
                url: a[n]
            })), n++; else if ("text" === s[r].type) {
                if (!this.ctx.measureText) return wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用 measureText 功能，请升级到最新微信版本后重试。"
                }), void this.triggerEvent("getImage", {
                    errMsg: "canvasdrawer:version too low"
                });
                this.drawText(s[r]);
            } else "rect" === s[r].type && this.drawRect(s[r]);
            this.ctx.draw(!1, function() {
                wx.setStorageSync("canvasdrawer_pic_cache", t.cache);
                var e = wx.getSystemInfoSync().system;
                /ios/i.test(e) ? t.saveImageToLocal() : setTimeout(function() {
                    t.saveImageToLocal();
                }, 800);
            });
        },
        drawImage: function(t) {
            var e = this;
            this.ctx.save();
            var i = t.url, a = t.top, s = void 0 === a ? 0 : a, r = t.left, n = void 0 === r ? 0 : r, c = t.width, h = void 0 === c ? 0 : c, o = t.height, l = void 0 === o ? 0 : o, x = t.borderRadius, g = void 0 === x ? 0 : x, d = t.deg, v = void 0 === d ? 0 : d;
            g ? (this.ctx.beginPath(), this.clipRoundRect(s, n, h, l, g, function() {
                e.ctx.drawImage(i, n, s, h, l);
            })) : 0 !== v ? (this.ctx.translate(n + h / 2, s + l / 2), this.ctx.rotate(v * Math.PI / 180), 
            this.ctx.drawImage(i, -h / 2, -l / 2, h, l)) : this.ctx.drawImage(i, n, s, h, l), 
            this.ctx.restore();
        },
        drawText: function(t) {
            this.ctx.save();
            var e = t.MaxLineNumber, a = void 0 === e ? 2 : e, s = t.breakWord, r = void 0 !== s && s, n = t.color, c = void 0 === n ? "black" : n, h = t.content, o = void 0 === h ? "" : h, l = t.fontSize, x = void 0 === l ? 16 : l, g = t.fontType, d = void 0 === g ? "sans-serif" : g, v = t.top, f = void 0 === v ? 0 : v, u = t.left, w = void 0 === u ? 0 : u, p = t.lineHeight, m = void 0 === p ? 20 : p, P = t.textAlign, T = void 0 === P ? "left" : P, I = t.width, b = t.bolder, y = void 0 !== b && b, M = t.textDecoration, S = void 0 === M ? "none" : M;
            if (this.ctx.beginPath(), this.ctx.setTextBaseline("top"), this.ctx.setTextAlign(T), 
            this.ctx.setFillStyle(c), this.ctx.font = "".concat(x, "px ").concat(d), r) {
                for (var O = "", R = f, k = 1, L = 0; L < o.length; L++) if (O += [ o[L] ], this.ctx.measureText(O).width > I) {
                    if (k === a && L !== o.length) {
                        O = O.substring(0, O.length - 1) + "...", this.drawTextLine(w, R, S, c, x, O), this.ctx.fillText(O, w, R), 
                        O = "";
                        break;
                    }
                    this.drawTextLine(w, R, S, c, x, O), this.ctx.fillText(O, w, R), O = "", R += m, 
                    k++;
                }
                this.drawTextLine(w, R, S, c, x, O), this.ctx.fillText(O, w, R);
            } else this.drawTextLine(w, f, S, c, x, o), this.ctx.fillText(o, w, f);
            this.ctx.restore(), y && this.drawText(i({}, t, {
                left: w + .3,
                top: f + .3,
                bolder: !1,
                textDecoration: "none"
            }));
        },
        drawTextLine: function(t, e, i, a, s, r) {
            "underline" === i ? this.drawRect({
                background: a,
                top: e + 1.2 * s,
                left: t - 1,
                width: this.ctx.measureText(r).width + 3,
                height: 1
            }) : "line-through" === i ? this.drawRect({
                background: a,
                top: e + .6 * s,
                left: t - 1,
                width: this.ctx.measureText(r).width + 3,
                height: 1
            }) : "backgroundColor" === i && this.clipRoundRect(e, t - 14, 24 + this.ctx.measureText(r).width, s + 8, s / 2 + 4, function() {}, "#e5e5e5");
        },
        drawRect: function(t) {
            var e = t.background, i = t.top, a = void 0 === i ? 0 : i, s = t.left, r = void 0 === s ? 0 : s, n = t.width, c = void 0 === n ? 0 : n, h = t.height, o = void 0 === h ? 0 : h, l = t.globalAlpha, x = void 0 === l ? 1 : l, g = t.roundCorner, d = void 0 === g ? 0 : g, v = t.strokeStyle, f = void 0 === v ? "" : v;
            d ? this.drawRoundRect(r, a, c, o, d, e, f) : (this.ctx.save(), this.ctx.setGlobalAlpha(x), 
            this.ctx.setFillStyle(e), this.ctx.fillRect(r, a, c, o), this.ctx.restore());
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
        clipRoundRect: function(t, e, i, a, s, r) {
            var n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "transparent";
            this.ctx.save(), this.ctx.beginPath(), this.ctx.fillStyle = n, this.ctx.arc(t + s, e + s, s, Math.PI, 1.5 * Math.PI), 
            this.ctx.moveTo(t + s, e), this.ctx.lineTo(t + i - s, e), this.ctx.lineTo(t + i, e + s), 
            this.ctx.arc(t + i - s, e + s, s, 1.5 * Math.PI, 2 * Math.PI), this.ctx.lineTo(t + i, e + a - s), 
            this.ctx.lineTo(t + i - s, e + a), this.ctx.arc(t + i - s, e + a - s, s, 0, .5 * Math.PI), 
            this.ctx.lineTo(t + s, e + a), this.ctx.lineTo(t, e + a - s), this.ctx.arc(t + s, e + a - s, s, .5 * Math.PI, Math.PI), 
            this.ctx.lineTo(t, e + s), this.ctx.lineTo(t + s, e), this.ctx.fill(), this.ctx.closePath(), 
            this.ctx.clip(), r(this.ctx), this.ctx.closePath(), this.ctx.restore();
        },
        drawRoundRect: function(t, e, i, a, s) {
            var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "transparent", n = arguments.length > 6 ? arguments[6] : void 0;
            this.ctx.save(), this.ctx.beginPath(), this.ctx.fillStyle = r, this.ctx.strokeStyle = n || r, 
            this.ctx.arc(t + s, e + s, s, Math.PI, 1.5 * Math.PI), this.ctx.moveTo(t + s, e), 
            this.ctx.lineTo(t + i - s, e), this.ctx.lineTo(t + i, e + s), this.ctx.arc(t + i - s, e + s, s, 1.5 * Math.PI, 2 * Math.PI), 
            this.ctx.lineTo(t + i, e + a - s), this.ctx.lineTo(t + i - s, e + a), this.ctx.arc(t + i - s, e + a - s, s, 0, .5 * Math.PI), 
            this.ctx.lineTo(t + s, e + a), this.ctx.lineTo(t, e + a - s), this.ctx.arc(t + s, e + a - s, s, .5 * Math.PI, Math.PI), 
            this.ctx.lineTo(t, e + s), this.ctx.lineTo(t + s, e), this.ctx.fill(), this.ctx.stroke(), 
            this.ctx.closePath(), this.ctx.restore();
        }
    }
});