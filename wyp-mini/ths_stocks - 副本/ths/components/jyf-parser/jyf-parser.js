var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/jyf-parser/jyf-parser" ], {
    "155c": function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    "195c": function(t, e, n) {},
    a744: function(t, e, n) {
        n.r(e);
        var i = n("155c"), s = n("b7c6");
        for (var o in s) "default" !== o && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(o);
        n("b354");
        var a = n("f0c5"), r = Object(a.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    b354: function(t, e, n) {
        var i = n("195c");
        n.n(i).a;
    },
    b7c6: function(t, e, n) {
        n.r(e);
        var i = n("d4aa"), s = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = s.a;
    },
    d4aa: function(e, n, i) {
        (function(e) {
            function s(t) {
                for (var e = t.length, n = 5381; e--; ) n += (n << 5) + t.charCodeAt(e);
                return n;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = i("3826"), a = getApp().parserCache = {}, r = i("2cbc"), c = e.getFileSystemManager ? e.getFileSystemManager() : null, l = i("4a98"), h = e.createAnimation({
                timingFunction: "ease"
            }).opacity(1).step().export(), u = {
                name: "parser",
                data: function() {
                    return {
                        showAnimation: "",
                        controls: {},
                        nodes: []
                    };
                },
                components: {
                    trees: function() {
                        i.e("components/jyf-parser/libs/trees").then(function() {
                            return resolve(i("53ae"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                props: {
                    html: null,
                    autopause: {
                        type: Boolean,
                        default: !0
                    },
                    autosetTitle: {
                        type: Boolean,
                        default: !0
                    },
                    domain: String,
                    gestureZoom: Boolean,
                    lazyLoad: Boolean,
                    selectable: Boolean,
                    tagStyle: Object,
                    showWithAnimation: Boolean,
                    useAnchor: Boolean,
                    useCache: Boolean
                },
                watch: {
                    html: function(t) {
                        this.setContent(t, !0);
                    }
                },
                mounted: function() {
                    this.imgList = [], this.imgList.each = function(t) {
                        for (var e = 0; e < this.length; e++) {
                            var n = t(this[e], e, this);
                            n && this.setItem(e, n);
                        }
                    }, this.imgList.setItem = function(t, n) {
                        var i = this;
                        if (n.includes("base64")) {
                            this[t] = n;
                            var s = n.match(/data:image\/(\S+?);base64,(\S+)/);
                            if (!s) return;
                            var o = "".concat(e.env.USER_DATA_PATH, "/").concat(Date.now(), ".").concat(s[1]);
                            c && c.writeFile({
                                filePath: o,
                                data: s[2],
                                encoding: "base64",
                                success: function() {
                                    return i[t] = o;
                                }
                            });
                        } else if (this.includes(n)) {
                            if ("http" != n.substring(0, 4)) return this[t] = n;
                            for (var a = "", r = 0; r < n.length && (a += Math.random() > .5 ? n[r].toUpperCase() : n[r], 
                            "/" != n[r] || "/" == n[r - 1] || "/" == n[r + 1]); r++) ;
                            a += n.substring(r + 1), this[t] = a;
                        } else this[t] = n;
                    }, this.setContent(this.html, !0);
                },
                beforeDestroy: function() {
                    this.imgList.each(function(t) {
                        t && t.includes(e.env.USER_DATA_PATH) && c && c.unlink({
                            filePath: t
                        });
                    });
                },
                methods: {
                    setContent: function(n, i) {
                        var c = this;
                        if (this.showWithAnimation && (this.showAnimation = h), n) if ("string" == typeof n) {
                            if (this.useCache) {
                                var u = s(n);
                                a[u] ? this.nodes = a[u] : (this.nodes = o(n, this), a[u] = this.nodes);
                            } else this.nodes = o(n, this);
                            this.$emit("parse", this.nodes);
                        } else if ("[object Array]" == Object.prototype.toString.call(n)) {
                            if (this.nodes = i ? [] : n, n.length && "Parser" != n[0].PoweredBy) {
                                var f = {
                                    _imgNum: 0,
                                    _videoNum: 0,
                                    _audioNum: 0,
                                    _domain: this.domain,
                                    _protocol: this.domain && this.domain.includes("://") ? this.domain.split("://")[0] : "http",
                                    _STACK: [],
                                    CssHandler: new r(this.tagStyle)
                                };
                                f.CssHandler.getStyle(""), function t(e) {
                                    for (var n, i = 0; n = e[i++]; ) if ("text" != n.type) {
                                        for (var s in n.attrs = n.attrs || {}, n.attrs) l.trustAttrs[s] ? "string" != typeof n.attrs[s] && (n.attrs[s] = n.attrs[s].toString()) : n.attrs[s] = void 0;
                                        l.LabelHandler(n, f), l.blockTags[n.name] ? n.name = "div" : l.trustTags[n.name] || (n.name = "span"), 
                                        n.children && n.children.length ? (f._STACK.push(n), t(n.children), f._STACK.pop()) : n.children = void 0;
                                    }
                                }(n), this.nodes = n;
                            }
                        } else {
                            if ("object" != (void 0 === n ? "undefined" : t(n)) || !n.nodes) return console.warn("错误的 html 类型：" + (void 0 === n ? "undefined" : t(n)));
                            this.nodes = n.nodes, console.warn("错误的 html 类型：object 类型已废弃，请直接将 html 设置为 object.nodes");
                        } else {
                            if (i) return;
                            this.nodes = [];
                        }
                        this.$nextTick(function() {
                            c.imgList.length = 0, c.videoContexts = [];
                            (function t(n) {
                                for (var i = n.length; i--; ) {
                                    var s, o, a, r;
                                    !function() {
                                        var l = n[i];
                                        if ("trees" == l.$options.name) for (s = !1, o = l.nodes.length; a = l.nodes[--o]; ) a.c || ("img" == a.name ? (a.attrs.src && a.attrs.i && c.imgList.setItem(a.attrs.i, a.attrs.src), 
                                        s || (s = !0, c.lazyLoad && e.createIntersectionObserver ? (l._observer && l._observer.disconnect(), 
                                        l._observer = e.createIntersectionObserver(l), l._observer.relativeToViewport({
                                            top: 1e3,
                                            bottom: 1e3
                                        }).observe("._img", function(t) {
                                            l.imgLoad = !0, l._observer.disconnect(), l._observer = null;
                                        })) : l.imgLoad = !0)) : "video" == a.name ? (r = e.createVideoContext(a.attrs.id, l), 
                                        r.id = a.attrs.id, c.videoContexts.push(r)) : "audio" == a.name && a.attrs.autoplay ? wx.createAudioContext(a.attrs.id, l).play() : "title" == a.name && c.autosetTitle && "text" == a.children[0].type && a.children[0].text && e.setNavigationBarTitle({
                                            title: a.children[0].text
                                        }));
                                        l.$children.length && t(l.$children);
                                    }();
                                }
                            })(c.$children), c.createSelectorQuery().select("._contain").boundingClientRect().exec(function(t) {
                                c.width = (t[0] ? t[0] : t).width, c.$emit("ready", t);
                            });
                        });
                    },
                    getText: function() {
                        function t(n) {
                            if (n) for (var i, s = 0; i = n[s++]; ) if ("text" == i.type) e += i.text; else if ("br" == i.type) e += "\n"; else {
                                var o = "p" == i.name || "div" == i.name || "tr" == i.name || "li" == i.name || "h" == i.name[0] && i.name[1] > "0" && i.name[1] < "7";
                                o && e && "\n" != e[e.length - 1] && (e += "\n"), t(i.children), o && "\n" != e[e.length - 1] ? e += "\n" : "td" != i.name && "th" != i.name || (e += "\t");
                            }
                        }
                        var e = "";
                        return t(this.html), e.replace(/&nbsp;/g, " ");
                    },
                    navigateTo: function(t) {
                        var n = this;
                        if (t.fail = t.fail || function() {}, !this.useAnchor) return t.fail({
                            errMsg: "Use-anchor attribute is disabled"
                        });
                        var i = function(i, s) {
                            e.createSelectorQuery().in(s || n).select(i).boundingClientRect().selectViewport().scrollOffset().exec(function(n) {
                                if (!n || !n[0]) return t.fail({
                                    errMsg: "Label not found"
                                });
                                e.pageScrollTo({
                                    scrollTop: n[1].scrollTop + n[0].top,
                                    success: t.success,
                                    fail: t.fail
                                });
                            });
                        };
                        i(t.id ? "._contain >>> #" + t.id + ", ._contain >>> ." + t.id : "._contain");
                    },
                    tap: function(t) {
                        if (this.gestureZoom && t.timeStamp - this.lastTime < 300) {
                            if (this.zoomIn) this.animation.translateX(0).scale(1).step(), e.pageScrollTo({
                                scrollTop: (t.touches[0].pageY - t.currentTarget.offsetTop + this.initY) / 2 - t.touches[0].clientY,
                                duration: 400
                            }); else {
                                var n = t.touches[0].pageX - t.currentTarget.offsetLeft;
                                this.initY = t.touches[0].pageY - t.currentTarget.offsetTop, this.animation = e.createAnimation({
                                    transformOrigin: n + "px " + this.initY + "px 0",
                                    timingFunction: "ease-in-out"
                                }), this.animation.scale(2).step(), this.translateMax = n / 2, this.translateMin = (n - this.width) / 2, 
                                this.translateX = 0;
                            }
                            this.zoomIn = !this.zoomIn, this.showAnimation = this.animation.export();
                        }
                        this.lastTime = t.timeStamp;
                    },
                    touchstart: function(t) {
                        1 == t.touches.length && (this.initX = this.lastX = t.touches[0].pageX);
                    },
                    touchmove: function(t) {
                        var e = t.touches[0].pageX - this.lastX;
                        if (this.zoomIn && 1 == t.touches.length && Math.abs(e) > 20) {
                            if (this.lastX = t.touches[0].pageX, this.translateX <= this.translateMin && e < 0 || this.translateX >= this.translateMax && e > 0) return;
                            this.translateX += e * Math.abs(this.lastX - this.initX) * .05, this.translateX < this.translateMin && (this.translateX = this.translateMin), 
                            this.translateX > this.translateMax && (this.translateX = this.translateMax), this.animation.translateX(this.translateX).step(), 
                            this.showAnimation = this.animation.export();
                        }
                    },
                    getVideoContext: function(t) {
                        if (!t) return this.videoContexts;
                        for (var e = this.videoContexts.length; e--; ) if (this.videoContexts[e].id == t) return this.videoContexts[e];
                        return null;
                    }
                }
            };
            n.default = u;
        }).call(this, i("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/jyf-parser/jyf-parser-create-component", {
    "components/jyf-parser/jyf-parser-create-component": function(t, e, n) {
        n("543d").createComponent(n("a744"));
    }
}, [ [ "components/jyf-parser/jyf-parser-create-component" ] ] ]);