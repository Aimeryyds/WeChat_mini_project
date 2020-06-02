global.webpackJsonp([ 0 ], {
    "+66z": function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t) {
            return n.call(t);
        };
    },
    "+E39": function(t, e, n) {
        t.exports = !n("S82l")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    "+HRN": function(t, e, n) {
        "use strict";
        var r = n("X3l8").Buffer, i = n(1);
        function o(t, e, n) {
            t.copy(e, n);
        }
        t.exports = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.head = null, this.tail = null, this.length = 0;
            }
            return t.prototype.push = function(t) {
                var e = {
                    data: t,
                    next: null
                };
                this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
            }, t.prototype.unshift = function(t) {
                var e = {
                    data: t,
                    next: this.head
                };
                0 === this.length && (this.tail = e), this.head = e, ++this.length;
            }, t.prototype.shift = function() {
                if (0 !== this.length) {
                    var t = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, 
                    --this.length, t;
                }
            }, t.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0;
            }, t.prototype.join = function(t) {
                if (0 === this.length) return "";
                for (var e = this.head, n = "" + e.data; e = e.next; ) n += t + e.data;
                return n;
            }, t.prototype.concat = function(t) {
                if (0 === this.length) return r.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var e = r.allocUnsafe(t >>> 0), n = this.head, i = 0; n; ) o(n.data, e, i), 
                i += n.data.length, n = n.next;
                return e;
            }, t;
        }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
            var t = i.inspect({
                length: this.length
            });
            return this.constructor.name + " " + t;
        });
    },
    "+ZMJ": function(t, e, n) {
        var r = n("lOnJ");
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
              case 1:
                return function(n) {
                    return t.call(e, n);
                };

              case 2:
                return function(n, r) {
                    return t.call(e, n, r);
                };

              case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i);
                };
            }
            return function() {
                return t.apply(e, arguments);
            };
        };
    },
    "+gg+": function(t, e, n) {
        var r = n("TQ3y")["__core-js_shared__"];
        t.exports = r;
    },
    "+tPU": function(t, e, n) {
        n("xGkn");
        for (var r = n("7KvD"), i = n("hJx8"), o = n("/bQp"), a = n("dSzd")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
            var c = s[u], f = r[c], l = f && f.prototype;
            l && !l[a] && i(l, a, c), o[c] = o.Array;
        }
    },
    "//Fk": function(t, e, n) {
        t.exports = {
            default: n("U5ju"),
            __esModule: !0
        };
    },
    "/5h/": function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("bOdI"), a = n.n(o), s = n("Dd8w"), u = n.n(s), c = n("exGp"), f = n.n(c), l = n("Apws"), h = this, p = function() {
            var t = f()(i.a.mark(function t() {
                var e, n, r, o, s, c, f, p, d, v, y, g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return i.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n = g.userId, r = g.shareFrom, o = g.productId, s = g.productName, c = g.articleName, 
                        f = g.bookName, r) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return p = {
                            share_channel: "share_with_friends",
                            sharer_id: n
                        }, d = {
                            bookproduct_id: o,
                            bookproduct_name: s
                        }, e = {}, a()(e, "detail", u()({
                            share_object: "bookproduct"
                        }, d)), a()(e, "articleFinished", u()({
                            share_object: "completed_article",
                            article_name: c
                        }, d)), a()(e, "bookFinished", u()({
                            share_object: "completed_book",
                            book_name: f
                        }, d)), a()(e, "mine", {
                            share_object: "recommend"
                        }), a()(e, "bookplan", {
                            share_object: "bookplan"
                        }), v = e, y = {
                            event_code: "reading-minireader-share-reflux",
                            event_value: u()({}, v[r], p)
                        }, t.next = 9, l.a.track(y);

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t, h);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }();
        e.a = p;
    },
    "/F8v": function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "container"
                }, [ e("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/52251c533a9cd595b35dc4785c10c205.86dd15a7e82d7dd57a8d3298e59e48c8.png?x-oss-process=image/format,jpg/quality,q_80",
                        alt: "icon"
                    }
                }), this._v(" "), e("div", {
                    staticClass: "tip"
                }, [ this._t("default", null, {
                    mpcomid: "0"
                }) ], 2), this._v(" "), e("button", {
                    staticClass: "login-btn",
                    attrs: {
                        "open-type": "getUserInfo",
                        lang: "zh_CN",
                        disabled: this.loading,
                        loading: this.loading,
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: this.handleGetUserInfo
                    }
                }, [ this._v("立即登录") ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    "/GnY": function(t, e, n) {
        var r = n("HT7L"), i = n("W529"), o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    "/I3N": function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        };
    },
    "/MLu": function(t, e, n) {
        t.exports = n("cSWu").PassThrough;
    },
    "/WWA": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "f", function() {
            return u;
        });
        var r = n("OBm5");
        n.d(e, "d", function() {
            return r.a;
        }), n.d(e, "e", function() {
            return r.b;
        });
        var i = "https://www.shanbay.com", o = i + "/api/v1", a = i + "/api/v2", s = "https://apiv3.shanbay.com", u = "https://web.shanbay.com";
    },
    "/bQp": function(t, e) {
        t.exports = {};
    },
    "/n6Q": function(t, e, n) {
        n("zQR9"), n("+tPU"), t.exports = n("Kh4W").f("iterator");
    },
    "037f": function(t, e, n) {
        var r = n("1oyr"), i = n("p0bc"), o = n("wSKX"), a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            });
        } : o;
        t.exports = a;
    },
    "06OY": function(t, e, n) {
        var r = n("3Eo+")("meta"), i = n("EqjI"), o = n("D2L2"), a = n("evD5").f, s = 0, u = Object.isExtensible || function() {
            return !0;
        }, c = !n("S82l")(function() {
            return u(Object.preventExtensions({}));
        }), f = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            });
        }, l = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, r)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    f(t);
                }
                return t[r].i;
            },
            getWeak: function(t, e) {
                if (!o(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    f(t);
                }
                return t[r].w;
            },
            onFreeze: function(t) {
                return c && l.NEED && u(t) && !o(t, r) && f(t), t;
            }
        };
    },
    "09Qt": function(t, e, n) {
        var r = n("uIr7"), i = n("vi0E"), o = n("l9Lx"), a = n("C0hh"), s = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t; ) r(e, o(t)), t = i(t);
            return e;
        } : a;
        t.exports = s;
    },
    "0DSl": function(t, e, n) {
        var r = n("YkxI"), i = n("zBOP");
        t.exports = function(t) {
            return r(function(e, n) {
                var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
                for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && (a = o < 3 ? void 0 : a, 
                o = 1), e = Object(e); ++r < o; ) {
                    var u = n[r];
                    u && t(e, u, r, a);
                }
                return e;
            });
        };
    },
    "0uX4": function(t, e, n) {
        var r = n("NkRn"), i = r ? r.prototype : void 0, o = i ? i.valueOf : void 0;
        t.exports = function(t) {
            return o ? Object(o.call(t)) : {};
        };
    },
    "0xDb": function(t, e, n) {
        "use strict";
        n.d(e, "d", function() {
            return a;
        }), n.d(e, "g", function() {
            return s;
        }), n.d(e, "f", function() {
            return u;
        }), n.d(e, "a", function() {
            return c;
        }), n.d(e, "h", function() {
            return f;
        }), n.d(e, "c", function() {
            return l;
        }), n.d(e, "e", function() {
            return h;
        }), n.d(e, "b", function() {
            return p;
        });
        var r = n("d7EF"), i = (n.n(r), n("mvHQ")), o = n.n(i), a = function(t) {
            return t >= 1e4 ? (t / 1e4).toFixed(1) + "万" : o()(t);
        }, s = function(t) {
            return t.replace(/,Q_80/, ",Q_50");
        }, u = function(t) {
            return t && t.map(function(t) {
                return t.name_cn;
            }).join(",");
        }, c = function(t) {
            return t && (t[0] || t[1] || "");
        }, f = function(t) {
            return t < 10 ? "0" + t : t;
        }, l = function(t) {
            var e = new Date(t);
            return f(e.getFullYear()) + "年" + f(e.getMonth() + 1) + "月" + f(e.getDate()) + "日";
        }, h = function(t) {
            var e = t % 3600;
            return Math.floor(t / 3600) + "小时" + Math.ceil(e / 60) + "分钟";
        }, p = function(t) {
            return t.split("-").join(".");
        };
    },
    "162o": function(t, e, n) {
        (function(t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window, i = Function.prototype.apply;
            function o(t, e) {
                this._id = t, this._clearFn = e;
            }
            e.setTimeout = function() {
                return new o(i.call(setTimeout, r, arguments), clearTimeout);
            }, e.setInterval = function() {
                return new o(i.call(setInterval, r, arguments), clearInterval);
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close();
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id);
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout();
                }, e));
            }, n("mypn"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, 
            e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
        }).call(e, n("DuR2"));
    },
    "17x+": function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("exGp"), a = n.n(o), s = n("/WWA"), u = n("EwJx"), c = n.n(u), f = n("7YgM"), l = (n.n(f), 
        n("Apws")), h = n("qJN/"), p = {
            state: {
                isIpx: !1,
                statusBarHeight: 20,
                shareReflux: null,
                wechatVersion: "",
                isAndroid: "",
                isLogin: !1
            },
            mutations: {
                fetchMobileInfo: function(t, e) {
                    var n = e.isIpx, r = e.statusBarHeight, i = e.version, o = e.platform;
                    t.isIpx = n, t.statusBarHeight = r, t.wechatVersion = i, t.isAndroid = "android" === o;
                },
                setTarget: function(t, e) {
                    var n = e.target, r = e.productId, i = e.bookId;
                    t.shareReflux = {
                        target: n,
                        productId: r,
                        bookId: i
                    };
                },
                removeTarget: function(t) {
                    t.shareReflux = null;
                },
                setLoginStatus: function(t, e) {
                    var n = e.isLogin;
                    t.isLogin = n;
                }
            },
            actions: {
                fetchMobileType: function(t) {
                    var e = this, n = t.commit;
                    return a()(i.a.mark(function t() {
                        var r, o, a, s, u, f;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, c.a.getSystemInfo();

                              case 2:
                                r = t.sent, o = r.model, a = r.statusBarHeight, s = r.version, u = r.platform, f = -1 !== o.indexOf("iPhone X"), 
                                n("fetchMobileInfo", {
                                    isIpx: f,
                                    statusBarHeight: a,
                                    version: s,
                                    platform: u
                                });

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                fetchLoginStatus: function(t) {
                    var e = this, n = t.commit;
                    return a()(i.a.mark(function t() {
                        var r, o, a, u;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, c.a.login();

                              case 2:
                                return r = t.sent, o = r.code, a = !0, t.prev = 5, t.next = 8, l.a.login({
                                    code: o,
                                    app_name: s.d
                                });

                              case 8:
                                return t.next = 10, l.a.getUserDetail();

                              case 10:
                                u = t.sent, l.a.sensorLogin(u.id), c.a.setStorage({
                                    key: "userDetail",
                                    data: u
                                }), t.next = 18;
                                break;

                              case 15:
                                t.prev = 15, t.t0 = t.catch(5), a = !1;

                              case 18:
                                n("setLoginStatus", {
                                    isLogin: a
                                });

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t, e, [ [ 5, 15 ] ]);
                    }))();
                },
                fetchUpdateStatus: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        var n, r;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, l.a.getMpVersion();

                              case 2:
                                n = t.sent, r = n.version, r !== f.version && Object(h.a)(), wx.setStorage({
                                    key: "mpVersion",
                                    data: r
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, e, t);
                    }))();
                }
            }
        };
        e.a = p;
    },
    "1C79": function(t, e, n) {
        var r = n("uIr7"), i = n("Qp3N");
        t.exports = function t(e, n, o, a, s) {
            var u = -1, c = e.length;
            for (o || (o = i), s || (s = []); ++u < c; ) {
                var f = e[u];
                n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, s) : r(s, f) : a || (s[s.length] = f);
            }
            return s;
        };
    },
    "1IwQ": function(t, e, n) {
        "use strict";
        e.a = function() {
            var t = wx.createInnerAudioContext();
            t.src = "https://media-audio1.baydn.com/storage_media_audio/kvhfgj/e0ee6135630da1528e34092afe149347.84a4fea9f87c401ef6666cc2aa16c54f.mp3", 
            t.play();
        };
    },
    "1QDk": function(t, e, n) {
        var r = n("tv3T"), i = n("09Qt");
        t.exports = function(t, e) {
            return r(t, i(t), e);
        };
    },
    "1Yb9": function(t, e, n) {
        var r = n("mgnk"), i = n("UnEC"), o = Object.prototype, a = o.hasOwnProperty, s = o.propertyIsEnumerable, u = r(function() {
            return arguments;
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !s.call(t, "callee");
        };
        t.exports = u;
    },
    "1kS7": function(t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    "1oyr": function(t, e) {
        t.exports = function(t) {
            return function() {
                return t;
            };
        };
    },
    "1zHM": function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = {
            achieveArticle: function(t) {
                return Object(i.a)(r.c + "/reading/articles/" + t + "/brief");
            },
            achieveBook: function(t) {
                return Object(i.a)(r.c + "/reading/books/" + t + "/progress");
            },
            genImage: function(t) {
                return Object(i.a)(r.c + "/imageb/webview/capture", {
                    data: t
                });
            }
        };
        e.a = o;
    },
    "22B7": function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e;
        };
    },
    "2Hvv": function(t, e, n) {
        var r = n("imBK");
        t.exports = function(t) {
            return r(this.__data__, t) > -1;
        };
    },
    "2KxR": function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t;
        };
    },
    "2X2u": function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    "2cg0": function(t, e, n) {
        "use strict";
        var r = f(n("L8MQ")), i = f(n("mkWF")), o = f(n("zMR/")), a = f(n("P6Rp")), s = f(n("ASFP")), u = n("SHhs"), c = f(n("dZoO"));
        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return Array.from(t);
        }
        function h() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return 1 === e.length ? Array.isArray(e[0]) ? o.default.apply(void 0, [ {} ].concat(l(e[0]), [ (0, 
            s.default)(e[0]) ])) : e[0].customizeArray || e[0].customizeObject ? function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return Array.isArray(n[0]) ? o.default.apply(void 0, [ {} ].concat(l(n[0]), [ (0, 
                s.default)(e[0]) ])) : o.default.apply(void 0, [ {} ].concat(n, [ (0, s.default)(e[0]) ]));
            } : e[0] : o.default.apply(void 0, [ {} ].concat(e, [ (0, s.default)() ]));
        }
        var p = h({
            customizeArray: function(t, e, n) {
                return y(n.split(".").slice(-1)[0]) ? (0, i.default)(t, e, u.uniteRules.bind(null, {}, n)) : null;
            }
        });
        function d(t) {
            return function(e, n, r) {
                switch (t[r]) {
                  case "prepend":
                    return [].concat(l(n), l(e));

                  case "replace":
                    return n;

                  default:
                    return !1;
                }
            };
        }
        function v(t) {
            return function(e, n, r) {
                switch (t[r]) {
                  case "prepend":
                    return (0, o.default)({}, n, e, (0, s.default)());

                  case "replace":
                    return n;

                  default:
                    return !1;
                }
            };
        }
        function y(t) {
            return [ "preLoaders", "loaders", "postLoaders", "rules" ].indexOf(t) >= 0;
        }
        t.exports = h, t.exports.multiple = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return (0, r.default)(h(e));
        }, t.exports.smart = p, t.exports.strategy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return h({
                customizeArray: d(t),
                customizeObject: v(t)
            });
        }, t.exports.smartStrategy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return h({
                customizeArray: function(e, n, r) {
                    if (y(r.split(".").slice(-1)[0])) switch (t[r]) {
                      case "prepend":
                        return [].concat(l((0, a.default)(n, e, function(e, n) {
                            return (0, u.uniteRules)(t, r, e, n, "prepend");
                        })), l(e));

                      case "replace":
                        return n;

                      default:
                        return (0, i.default)(e, n, u.uniteRules.bind(null, t, r));
                    }
                    return d(t)(e, n, r);
                },
                customizeObject: v(t)
            });
        }, t.exports.unique = c.default;
    },
    "39Ks": function(t, e) {},
    "3Eo+": function(t, e) {
        var n = 0, r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    },
    "3IRH": function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l;
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i;
                }
            }), t.webpackPolyfill = 1), t;
        };
    },
    "3fs2": function(t, e, n) {
        var r = n("RY/4"), i = n("dSzd")("iterator"), o = n("/bQp");
        t.exports = n("FeBl").getIteratorMethod = function(t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
    },
    "3hRz": function(t, e) {},
    "4/4u": function(t, e, n) {
        t.exports = n("cSWu").Transform;
    },
    "449I": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = e.tryRedirect = function(t, e, n) {
            wx.redirectTo({
                url: t,
                success: e,
                fail: function(r) {
                    wx.switchTab({
                        url: t,
                        success: e,
                        fail: function(e) {
                            n({
                                msg: "failed to redirect to " + t,
                                data: {
                                    redirectTo: r,
                                    switchTab: e
                                }
                            });
                        }
                    });
                }
            });
        };
        e.redirect = function(t) {
            var e = t.url, n = t.success, i = void 0 === n ? function() {} : n, o = t.fail;
            return r(e, i, void 0 === o ? function() {} : o);
        };
    },
    "4VVH": function(t, e, n) {
        "use strict";
        e.a = function() {
            var t = wx.getStorageSync("userDetail");
            return t ? t.socials.find(function(t) {
                return "wechat" === t.provider_name;
            }).info : {
                nickname: "",
                avatar: ""
            };
        };
    },
    "4mcu": function(t, e) {
        t.exports = function() {};
    },
    "4yRm": function(t, e, n) {
        "use strict";
        var r = n("9uSC"), i = n("uHeJ");
        var o = function(t) {
            n("mOSZ");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-56ad33b0", null);
        e.a = a.exports;
    },
    "5/Qr": function(t, e, n) {
        var r = n("Kzd6"), i = n("6Git"), o = n("WyC4"), a = n("0uX4"), s = n("Ilb/"), u = "[object Boolean]", c = "[object Date]", f = "[object Map]", l = "[object Number]", h = "[object RegExp]", p = "[object Set]", d = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", g = "[object DataView]", m = "[object Float32Array]", b = "[object Float64Array]", _ = "[object Int8Array]", w = "[object Int16Array]", x = "[object Int32Array]", E = "[object Uint8Array]", A = "[object Uint8ClampedArray]", k = "[object Uint16Array]", T = "[object Uint32Array]";
        t.exports = function(t, e, n) {
            var O = t.constructor;
            switch (e) {
              case y:
                return r(t);

              case u:
              case c:
                return new O(+t);

              case g:
                return i(t, n);

              case m:
              case b:
              case _:
              case w:
              case x:
              case E:
              case A:
              case k:
              case T:
                return s(t, n);

              case f:
                return new O();

              case l:
              case d:
                return new O(t);

              case h:
                return o(t);

              case p:
                return new O();

              case v:
                return a(t);
            }
        };
    },
    "52gC": function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    "5N57": function(t, e, n) {
        var r = n("ICSD")(n("TQ3y"), "Set");
        t.exports = r;
    },
    "5PlU": function(t, e, n) {
        var r = n("RY/4"), i = n("dSzd")("iterator"), o = n("/bQp");
        t.exports = n("FeBl").isIterable = function(t) {
            var e = Object(t);
            return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e));
        };
    },
    "5QVw": function(t, e, n) {
        t.exports = {
            default: n("BwfY"),
            __esModule: !0
        };
    },
    "5nAL": function(t, e, n) {
        (function(e) {
            try {
                e || (e = {}), e.process = e.process || {}, e.process.env = e.process.env || {}, 
                e.App = e.App || App, e.Page = e.Page || Page, e.Component = e.Component || Component, 
                e.getApp = e.getApp || getApp;
            } catch (t) {}
            !function(e, n) {
                t.exports = n();
            }(0, function() {
                "use strict";
                function t(t) {
                    return void 0 === t || null === t;
                }
                function n(t) {
                    return void 0 !== t && null !== t;
                }
                function r(t) {
                    return !0 === t;
                }
                function i(t) {
                    return "string" == typeof t || "number" == typeof t;
                }
                function o(t) {
                    return null !== t && "object" == typeof t;
                }
                var a = Object.prototype.toString;
                function s(t) {
                    return "[object Object]" === a.call(t);
                }
                function u(t) {
                    var e = parseFloat(t);
                    return e >= 0 && Math.floor(e) === e && isFinite(t);
                }
                function c(t) {
                    return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
                }
                function f(t) {
                    var e = parseFloat(t);
                    return isNaN(e) ? t : e;
                }
                function l(t, e) {
                    for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
                    return e ? function(t) {
                        return n[t.toLowerCase()];
                    } : function(t) {
                        return n[t];
                    };
                }
                l("slot,component", !0);
                var h = l("key,ref,slot,is");
                function p(t, e) {
                    if (t.length) {
                        var n = t.indexOf(e);
                        if (n > -1) return t.splice(n, 1);
                    }
                }
                var d = Object.prototype.hasOwnProperty;
                function v(t, e) {
                    return d.call(t, e);
                }
                function y(t) {
                    var e = Object.create(null);
                    return function(n) {
                        return e[n] || (e[n] = t(n));
                    };
                }
                var g = /-(\w)/g, m = y(function(t) {
                    return t.replace(g, function(t, e) {
                        return e ? e.toUpperCase() : "";
                    });
                }), b = y(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                }), _ = /([^-])([A-Z])/g, w = y(function(t) {
                    return t.replace(_, "$1-$2").replace(_, "$1-$2").toLowerCase();
                });
                function x(t, e) {
                    function n(n) {
                        var r = arguments.length;
                        return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
                    }
                    return n._length = t.length, n;
                }
                function E(t, e) {
                    e = e || 0;
                    for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
                    return r;
                }
                function A(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                }
                function k(t, e, n) {}
                var T = function(t, e, n) {
                    return !1;
                }, O = function(t) {
                    return t;
                };
                function S(t, e) {
                    var n = o(t), r = o(e);
                    if (!n || !r) return !n && !r && String(t) === String(e);
                    try {
                        return JSON.stringify(t) === JSON.stringify(e);
                    } catch (n) {
                        return t === e;
                    }
                }
                function C(t, e) {
                    for (var n = 0; n < t.length; n++) if (S(t[n], e)) return n;
                    return -1;
                }
                function j(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, t.apply(this, arguments));
                    };
                }
                var P = "data-server-rendered", R = [ "component", "directive", "filter" ], D = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "onLaunch", "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "attached", "ready", "moved", "detached" ], I = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: T,
                    isReservedAttr: T,
                    isUnknownElement: T,
                    getTagNamespace: k,
                    parsePlatformTagName: O,
                    mustUseProp: T,
                    _lifecycleHooks: D
                }, M = Object.freeze({});
                function N(t) {
                    var e = (t + "").charCodeAt(0);
                    return 36 === e || 95 === e;
                }
                function L(t, e, n, r) {
                    Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !!r,
                        writable: !0,
                        configurable: !0
                    });
                }
                var F = /[^\w.$]/;
                var B = k;
                function U(t, e, n) {
                    if (I.errorHandler) I.errorHandler.call(null, t, e, n); else {
                        if (!Y || "undefined" == typeof console) throw t;
                        console.error(t);
                    }
                }
                var K, H = "__proto__" in {}, Y = "undefined" != typeof window, V = [ "mpvue-runtime" ].join(), G = (V && /msie|trident/.test(V), 
                V && V.indexOf("msie 9.0"), V && V.indexOf("edge/") > 0), W = (V && V.indexOf("android"), 
                V && /iphone|ipad|ipod|ios/.test(V)), q = (V && /chrome\/\d+/.test(V), {}.watch);
                if (Y) try {
                    var $ = {};
                    Object.defineProperty($, "passive", {
                        get: function() {
                            !0;
                        }
                    }), window.addEventListener("test-passive", null, $);
                } catch (t) {}
                var z = function() {
                    return void 0 === K && (K = !Y && void 0 !== e && "server" === e.process.env.VUE_ENV), 
                    K;
                }, Q = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
                function X(t) {
                    return "function" == typeof t && /native code/.test(t.toString());
                }
                var J, Z = "undefined" != typeof Symbol && X(Symbol) && "undefined" != typeof Reflect && X(Reflect.ownKeys), tt = function() {
                    var t, e = [], n = !1;
                    function r() {
                        n = !1;
                        var t = e.slice(0);
                        e.length = 0;
                        for (var r = 0; r < t.length; r++) t[r]();
                    }
                    if ("undefined" != typeof Promise && X(Promise)) {
                        var i = Promise.resolve(), o = function(t) {
                            console.error(t);
                        };
                        t = function() {
                            i.then(r).catch(o), W && setTimeout(k);
                        };
                    } else t = function() {
                        setTimeout(r, 0);
                    };
                    return function(r, i) {
                        var o;
                        if (e.push(function() {
                            if (r) try {
                                r.call(i);
                            } catch (t) {
                                U(t, i, "nextTick");
                            } else o && o(i);
                        }), n || (n = !0, t()), !r && "undefined" != typeof Promise) return new Promise(function(t, e) {
                            o = t;
                        });
                    };
                }();
                J = "undefined" != typeof Set && X(Set) ? Set : function() {
                    function t() {
                        this.set = Object.create(null);
                    }
                    return t.prototype.has = function(t) {
                        return !0 === this.set[t];
                    }, t.prototype.add = function(t) {
                        this.set[t] = !0;
                    }, t.prototype.clear = function() {
                        this.set = Object.create(null);
                    }, t;
                }();
                var et = 0, nt = function() {
                    this.id = et++, this.subs = [];
                };
                nt.prototype.addSub = function(t) {
                    this.subs.push(t);
                }, nt.prototype.removeSub = function(t) {
                    p(this.subs, t);
                }, nt.prototype.depend = function() {
                    nt.target && nt.target.addDep(this);
                }, nt.prototype.notify = function() {
                    for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
                }, nt.target = null;
                var rt = [];
                var it = Array.prototype, ot = Object.create(it);
                [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
                    var e = it[t];
                    L(ot, t, function() {
                        for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                        var i, o = e.apply(this, n), a = this.__ob__;
                        switch (t) {
                          case "push":
                          case "unshift":
                            i = n;
                            break;

                          case "splice":
                            i = n.slice(2);
                        }
                        return i && a.observeArray(i), a.dep.notify(), o;
                    });
                });
                var at = Object.getOwnPropertyNames(ot), st = {
                    shouldConvert: !0
                }, ut = function(t, e) {
                    (this.value = t, this.dep = new nt(), this.vmCount = 0, e && (this.key = e), L(t, "__ob__", this), 
                    Array.isArray(t)) ? ((H ? ct : ft)(t, ot, at), this.observeArray(t)) : this.walk(t);
                };
                function ct(t, e, n) {
                    t.__proto__ = e;
                }
                function ft(t, e, n) {
                    for (var r = 0, i = n.length; r < i; r++) {
                        var o = n[r];
                        L(t, o, e[o]);
                    }
                }
                function lt(t, e, n) {
                    var r;
                    if (o(t)) return v(t, "__ob__") && t.__ob__ instanceof ut ? r = t.__ob__ : st.shouldConvert && !z() && (Array.isArray(t) || s(t)) && Object.isExtensible(t) && !t._isVue && ((r = new ut(t, n)).__keyPath = r.__keyPath ? r.__keyPath : {}, 
                    r.__keyPath[n] = !0), e && r && r.vmCount++, r;
                }
                function ht(t, e, n, r, i) {
                    var o = new nt(), a = Object.getOwnPropertyDescriptor(t, e);
                    if (!a || !1 !== a.configurable) {
                        var s = a && a.get, u = a && a.set, c = !i && lt(n, void 0, e);
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                var e = s ? s.call(t) : n;
                                return nt.target && (o.depend(), c && c.dep.depend(), Array.isArray(e) && function t(e) {
                                    for (var n = void 0, r = 0, i = e.length; r < i; r++) (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), 
                                    Array.isArray(n) && t(n);
                                }(e)), e;
                            },
                            set: function(r) {
                                var a = s ? s.call(t) : n;
                                r === a || r != r && a != a || (u ? u.call(t, r) : n = r, c = !i && lt(r, void 0, e), 
                                o.notify(), t.__keyPath = t.__keyPath ? t.__keyPath : {}, t.__keyPath[e] = !0);
                            }
                        });
                    }
                }
                function pt(t, e, n) {
                    if (Array.isArray(t) && u(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
                    n;
                    if (v(t, e)) return t[e] = n, n;
                    var r = t.__ob__;
                    return t._isVue || r && r.vmCount ? n : r ? (ht(r.value, e, n), t.__keyPath || (t.__keyPath = {}), 
                    t.__keyPath[e] = !0, r.dep.notify(), n) : (t[e] = n, n);
                }
                function dt(t, e) {
                    if (Array.isArray(t) && u(e)) t.splice(e, 1); else {
                        var n = t.__ob__;
                        t._isVue || n && n.vmCount || v(t, e) && (delete t[e], n && (t.__keyPath || (t.__keyPath = {}), 
                        t.__keyPath[e] = "del", n.dep.notify()));
                    }
                }
                ut.prototype.walk = function(t) {
                    for (var e = Object.keys(t), n = 0; n < e.length; n++) ht(t, e[n], t[e[n]]);
                }, ut.prototype.observeArray = function(t) {
                    for (var e = 0, n = t.length; e < n; e++) lt(t[e]);
                };
                var vt = I.optionMergeStrategies;
                function yt(t, e) {
                    if (!e) return t;
                    for (var n, r, i, o = Object.keys(e), a = 0; a < o.length; a++) r = t[n = o[a]], 
                    i = e[n], v(t, n) ? s(r) && s(i) && yt(r, i) : pt(t, n, i);
                    return t;
                }
                function gt(t, e, n) {
                    return n ? t || e ? function() {
                        var r = "function" == typeof e ? e.call(n) : e, i = "function" == typeof t ? t.call(n) : void 0;
                        return r ? yt(r, i) : i;
                    } : void 0 : e ? t ? function() {
                        return yt("function" == typeof e ? e.call(this) : e, t.call(this));
                    } : e : t;
                }
                function mt(t, e) {
                    return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                }
                function bt(t, e) {
                    var n = Object.create(t || null);
                    return e ? A(n, e) : n;
                }
                vt.data = function(t, e, n) {
                    return n ? gt(t, e, n) : e && "function" != typeof e ? t : gt.call(this, t, e);
                }, D.forEach(function(t) {
                    vt[t] = mt;
                }), R.forEach(function(t) {
                    vt[t + "s"] = bt;
                }), vt.watch = function(t, e) {
                    if (t === q && (t = void 0), e === q && (e = void 0), !e) return Object.create(t || null);
                    if (!t) return e;
                    var n = {};
                    for (var r in A(n, t), e) {
                        var i = n[r], o = e[r];
                        i && !Array.isArray(i) && (i = [ i ]), n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [ o ];
                    }
                    return n;
                }, vt.props = vt.methods = vt.inject = vt.computed = function(t, e) {
                    if (!e) return Object.create(t || null);
                    if (!t) return e;
                    var n = Object.create(null);
                    return A(n, t), A(n, e), n;
                }, vt.provide = gt;
                var _t = function(t, e) {
                    return void 0 === e ? t : e;
                };
                function wt(t, e, n) {
                    "function" == typeof e && (e = e.options), function(t) {
                        var e = t.props;
                        if (e) {
                            var n, r, i = {};
                            if (Array.isArray(e)) for (n = e.length; n--; ) "string" == typeof (r = e[n]) && (i[m(r)] = {
                                type: null
                            }); else if (s(e)) for (var o in e) r = e[o], i[m(o)] = s(r) ? r : {
                                type: r
                            };
                            t.props = i;
                        }
                    }(e), function(t) {
                        var e = t.inject;
                        if (Array.isArray(e)) for (var n = t.inject = {}, r = 0; r < e.length; r++) n[e[r]] = e[r];
                    }(e), function(t) {
                        var e = t.directives;
                        if (e) for (var n in e) {
                            var r = e[n];
                            "function" == typeof r && (e[n] = {
                                bind: r,
                                update: r
                            });
                        }
                    }(e);
                    var r = e.extends;
                    if (r && (t = wt(t, r, n)), e.mixins) for (var i = 0, o = e.mixins.length; i < o; i++) t = wt(t, e.mixins[i], n);
                    var a, u = {};
                    for (a in t) c(a);
                    for (a in e) v(t, a) || c(a);
                    function c(r) {
                        var i = vt[r] || _t;
                        u[r] = i(t[r], e[r], n, r);
                    }
                    return u;
                }
                function xt(t, e, n, r) {
                    if ("string" == typeof n) {
                        var i = t[e];
                        if (v(i, n)) return i[n];
                        var o = m(n);
                        if (v(i, o)) return i[o];
                        var a = b(o);
                        return v(i, a) ? i[a] : i[n] || i[o] || i[a];
                    }
                }
                function Et(t, e, n, r) {
                    var i = e[t], o = !v(n, t), a = n[t];
                    if (kt(Boolean, i.type) && (o && !v(i, "default") ? a = !1 : kt(String, i.type) || "" !== a && a !== w(t) || (a = !0)), 
                    void 0 === a) {
                        a = function(t, e, n) {
                            if (!v(e, "default")) return;
                            var r = e.default;
                            0;
                            if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                            return "function" == typeof r && "Function" !== At(e.type) ? r.call(t) : r;
                        }(r, i, t);
                        var s = st.shouldConvert;
                        st.shouldConvert = !0, lt(a), st.shouldConvert = s;
                    }
                    return a;
                }
                function At(t) {
                    var e = t && t.toString().match(/^\s*function (\w+)/);
                    return e ? e[1] : "";
                }
                function kt(t, e) {
                    if (!Array.isArray(e)) return At(e) === At(t);
                    for (var n = 0, r = e.length; n < r; n++) if (At(e[n]) === At(t)) return !0;
                    return !1;
                }
                var Tt = function(t, e, n, r, i, o, a, s) {
                    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, 
                    this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, 
                    this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, 
                    this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, 
                    this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
                }, Ot = {
                    child: {}
                };
                Ot.child.get = function() {
                    return this.componentInstance;
                }, Object.defineProperties(Tt.prototype, Ot);
                var St = function(t) {
                    void 0 === t && (t = "");
                    var e = new Tt();
                    return e.text = t, e.isComment = !0, e;
                };
                function Ct(t) {
                    return new Tt(void 0, void 0, void 0, String(t));
                }
                function jt(t) {
                    var e = new Tt(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                    return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
                    e.isCloned = !0, e;
                }
                function Pt(t) {
                    for (var e = t.length, n = new Array(e), r = 0; r < e; r++) n[r] = jt(t[r]);
                    return n;
                }
                var Rt, Dt = y(function(t) {
                    var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                    return {
                        name: t = r ? t.slice(1) : t,
                        once: n,
                        capture: r,
                        passive: e
                    };
                });
                function It(t) {
                    function e() {
                        var t = arguments, n = e.fns;
                        if (!Array.isArray(n)) return n.apply(null, arguments);
                        for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
                    }
                    return e.fns = t, e;
                }
                function Mt(t, e, r, i, o) {
                    if (n(e)) {
                        if (v(e, r)) return t[r] = e[r], o || delete e[r], !0;
                        if (v(e, i)) return t[r] = e[i], o || delete e[i], !0;
                    }
                    return !1;
                }
                function Nt(e) {
                    return i(e) ? [ Ct(e) ] : Array.isArray(e) ? function e(o, a) {
                        var s = [];
                        var u, c, f;
                        for (u = 0; u < o.length; u++) t(c = o[u]) || "boolean" == typeof c || (f = s[s.length - 1], 
                        Array.isArray(c) ? s.push.apply(s, e(c, (a || "") + "_" + u)) : i(c) ? Lt(f) ? f.text += String(c) : "" !== c && s.push(Ct(c)) : Lt(c) && Lt(f) ? s[s.length - 1] = Ct(f.text + c.text) : (r(o._isVList) && n(c.tag) && t(c.key) && n(a) && (c.key = "__vlist" + a + "_" + u + "__"), 
                        s.push(c)));
                        return s;
                    }(e) : void 0;
                }
                function Lt(t) {
                    return n(t) && n(t.text) && function(t) {
                        return !1 === t;
                    }(t.isComment);
                }
                function Ft(t, e) {
                    return t.__esModule && t.default && (t = t.default), o(t) ? e.extend(t) : t;
                }
                function Bt(t, e, n) {
                    n ? Rt.$once(t, e) : Rt.$on(t, e);
                }
                function Ut(t, e) {
                    Rt.$off(t, e);
                }
                function Kt(e, n, r) {
                    Rt = e, function(e, n, r, i, o) {
                        var a, s, u, c;
                        for (a in e) s = e[a], u = n[a], c = Dt(a), t(s) || (t(u) ? (t(s.fns) && (s = e[a] = It(s)), 
                        r(c.name, s, c.once, c.capture, c.passive)) : s !== u && (u.fns = s, e[a] = u));
                        for (a in n) t(e[a]) && i((c = Dt(a)).name, n[a], c.capture);
                    }(n, r || {}, Bt, Ut);
                }
                function Ht(t, e) {
                    var n = {};
                    if (!t) return n;
                    for (var r = [], i = 0, o = t.length; i < o; i++) {
                        var a = t[i];
                        if (a.context !== e && a.functionalContext !== e || !a.data || null == a.data.slot) r.push(a); else {
                            var s = a.data.slot, u = n[s] || (n[s] = []);
                            "template" === a.tag ? u.push.apply(u, a.children) : u.push(a);
                        }
                    }
                    return r.every(Yt) || (n.default = r), n;
                }
                function Yt(t) {
                    return t.isComment || " " === t.text;
                }
                function Vt(t, e) {
                    e = e || {};
                    for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? Vt(t[n], e) : e[t[n].key] = t[n].fn;
                    return e;
                }
                var Gt = null;
                function Wt(t, e, n) {
                    var r;
                    return t.$el = e, t.$options.render || (t.$options.render = St), zt(t, "beforeMount"), 
                    r = function() {
                        t._update(t._render(), n);
                    }, t._watcher = new ie(t, r, k), n = !1, null == t.$vnode && (t._isMounted = !0, 
                    zt(t, "mounted")), t;
                }
                function qt(t) {
                    for (;t && (t = t.$parent); ) if (t._inactive) return !0;
                    return !1;
                }
                function $t(t, e) {
                    if (e) {
                        if (t._directInactive = !1, qt(t)) return;
                    } else if (t._directInactive) return;
                    if (t._inactive || null === t._inactive) {
                        t._inactive = !1;
                        for (var n = 0; n < t.$children.length; n++) $t(t.$children[n]);
                        zt(t, "activated");
                    }
                }
                function zt(t, e) {
                    var n = t.$options[e];
                    if (n) for (var r = 0, i = n.length; r < i; r++) try {
                        n[r].call(t);
                    } catch (n) {
                        U(n, t, e + " hook");
                    }
                    t._hasHookEvent && t.$emit("hook:" + e);
                }
                var Qt = [], Xt = [], Jt = {}, Zt = !1, te = !1, ee = 0;
                function ne() {
                    var t, e;
                    for (te = !0, Qt.sort(function(t, e) {
                        return t.id - e.id;
                    }), ee = 0; ee < Qt.length; ee++) e = (t = Qt[ee]).id, Jt[e] = null, t.run();
                    var n = Xt.slice(), r = Qt.slice();
                    ee = Qt.length = Xt.length = 0, Jt = {}, Zt = te = !1, function(t) {
                        for (var e = 0; e < t.length; e++) t[e]._inactive = !0, $t(t[e], !0);
                    }(n), function(t) {
                        var e = t.length;
                        for (;e--; ) {
                            var n = t[e], r = n.vm;
                            r._watcher === n && r._isMounted && zt(r, "updated");
                        }
                    }(r), Q && I.devtools && Q.emit("flush");
                }
                var re = 0, ie = function(t, e, n, r) {
                    this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, 
                    this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
                    this.cb = n, this.id = ++re, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                    this.newDeps = [], this.depIds = new J(), this.newDepIds = new J(), this.expression = "", 
                    "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                        if (!F.test(t)) {
                            var e = t.split(".");
                            return function(t) {
                                for (var n = 0; n < e.length; n++) {
                                    if (!t) return;
                                    t = t[e[n]];
                                }
                                return t;
                            };
                        }
                    }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
                };
                ie.prototype.get = function() {
                    var t;
                    !function(t) {
                        nt.target && rt.push(nt.target), nt.target = t;
                    }(this);
                    var e = this.vm;
                    try {
                        t = this.getter.call(e, e);
                    } catch (t) {
                        if (!this.user) throw t;
                        U(t, e, 'getter for watcher "' + this.expression + '"');
                    } finally {
                        this.deep && function(t) {
                            oe.clear(), function t(e, n) {
                                var r, i;
                                var a = Array.isArray(e);
                                if (!a && !o(e) || !Object.isExtensible(e)) return;
                                if (e.__ob__) {
                                    var s = e.__ob__.dep.id;
                                    if (n.has(s)) return;
                                    n.add(s);
                                }
                                if (a) for (r = e.length; r--; ) t(e[r], n); else for (i = Object.keys(e), r = i.length; r--; ) t(e[i[r]], n);
                            }(t, oe);
                        }(t), nt.target = rt.pop(), this.cleanupDeps();
                    }
                    return t;
                }, ie.prototype.addDep = function(t) {
                    var e = t.id;
                    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
                }, ie.prototype.cleanupDeps = function() {
                    for (var t = this.deps.length; t--; ) {
                        var e = this.deps[t];
                        this.newDepIds.has(e.id) || e.removeSub(this);
                    }
                    var n = this.depIds;
                    this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                    this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
                }, ie.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                        var e = t.id;
                        if (null == Jt[e]) {
                            if (Jt[e] = !0, te) {
                                for (var n = Qt.length - 1; n > ee && Qt[n].id > t.id; ) n--;
                                Qt.splice(n + 1, 0, t);
                            } else Qt.push(t);
                            Zt || (Zt = !0, tt(ne));
                        }
                    }(this);
                }, ie.prototype.run = function() {
                    if (this.active) {
                        var t = this.get();
                        if (t !== this.value || o(t) || this.deep) {
                            var e = this.value;
                            if (this.value = t, this.user) try {
                                this.cb.call(this.vm, t, e);
                            } catch (t) {
                                U(t, this.vm, 'callback for watcher "' + this.expression + '"');
                            } else this.cb.call(this.vm, t, e);
                        }
                    }
                }, ie.prototype.evaluate = function() {
                    this.value = this.get(), this.dirty = !1;
                }, ie.prototype.depend = function() {
                    for (var t = this.deps.length; t--; ) this.deps[t].depend();
                }, ie.prototype.teardown = function() {
                    if (this.active) {
                        this.vm._isBeingDestroyed || p(this.vm._watchers, this);
                        for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                        this.active = !1;
                    }
                };
                var oe = new J();
                var ae = {
                    enumerable: !0,
                    configurable: !0,
                    get: k,
                    set: k
                };
                function se(t, e, n) {
                    ae.get = function() {
                        return this[e][n];
                    }, ae.set = function(t) {
                        this[e][n] = t;
                    }, Object.defineProperty(t, n, ae);
                }
                function ue(t) {
                    t._watchers = [];
                    var e = t.$options;
                    e.props && function(t, e) {
                        var n = t.$options.propsData || {}, r = t._props = {}, i = t.$options._propKeys = [], o = !t.$parent;
                        st.shouldConvert = o;
                        var a = function(o) {
                            i.push(o);
                            var a = Et(o, e, n, t);
                            ht(r, o, a), o in t || se(t, "_props", o);
                        };
                        for (var s in e) a(s);
                        st.shouldConvert = !0;
                    }(t, e.props), e.methods && function(t, e) {
                        t.$options.props;
                        for (var n in e) t[n] = null == e[n] ? k : x(e[n], t);
                    }(t, e.methods), e.data ? function(t) {
                        var e = t.$options.data;
                        s(e = t._data = "function" == typeof e ? function(t, e) {
                            try {
                                return t.call(e);
                            } catch (t) {
                                return U(t, e, "data()"), {};
                            }
                        }(e, t) : e || {}) || (e = {});
                        var n = Object.keys(e), r = t.$options.props, i = (t.$options.methods, n.length);
                        for (;i--; ) {
                            var o = n[i];
                            r && v(r, o) || N(o) || se(t, "_data", o);
                        }
                        lt(e, !0);
                    }(t) : lt(t._data = {}, !0), e.computed && function(t, e) {
                        var n = t._computedWatchers = Object.create(null);
                        for (var r in e) {
                            var i = e[r], o = "function" == typeof i ? i : i.get;
                            n[r] = new ie(t, o, k, ce), r in t || fe(t, r, i);
                        }
                    }(t, e.computed), e.watch && e.watch !== q && function(t, e) {
                        for (var n in e) {
                            var r = e[n];
                            if (Array.isArray(r)) for (var i = 0; i < r.length; i++) he(t, n, r[i]); else he(t, n, r);
                        }
                    }(t, e.watch);
                }
                var ce = {
                    lazy: !0
                };
                function fe(t, e, n) {
                    "function" == typeof n ? (ae.get = le(e), ae.set = k) : (ae.get = n.get ? !1 !== n.cache ? le(e) : n.get : k, 
                    ae.set = n.set ? n.set : k), Object.defineProperty(t, e, ae);
                }
                function le(t) {
                    return function() {
                        var e = this._computedWatchers && this._computedWatchers[t];
                        if (e) return e.dirty && e.evaluate(), nt.target && e.depend(), e.value;
                    };
                }
                function he(t, e, n, r) {
                    return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
                }
                function pe(t, e) {
                    if (t) {
                        for (var n = Object.create(null), r = Z ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
                            for (var o = r[i], a = t[o], s = e; s; ) {
                                if (s._provided && a in s._provided) {
                                    n[o] = s._provided[a];
                                    break;
                                }
                                s = s.$parent;
                            }
                            0;
                        }
                        return n;
                    }
                }
                function de(t, e) {
                    for (var n in e) t[m(n)] = e[n];
                }
                var ve = {
                    init: function(t, e, r, i) {
                        if (!t.componentInstance || t.componentInstance._isDestroyed) (t.componentInstance = function(t, e, r, i) {
                            var o = t.componentOptions, a = {
                                _isComponent: !0,
                                parent: e,
                                propsData: o.propsData,
                                _componentTag: o.tag,
                                _parentVnode: t,
                                _parentListeners: o.listeners,
                                _renderChildren: o.children,
                                _parentElm: r || null,
                                _refElm: i || null
                            }, s = t.data.inlineTemplate;
                            n(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns);
                            return new o.Ctor(a);
                        }(t, Gt, r, i)).$mount(e ? t.elm : void 0, e); else if (t.data.keepAlive) {
                            var o = t;
                            ve.prepatch(o, o);
                        }
                    },
                    prepatch: function(t, e) {
                        var n = e.componentOptions;
                        !function(t, e, n, r, i) {
                            var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== M);
                            if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                            t.$options._renderChildren = i, t.$attrs = r.data && r.data.attrs, t.$listeners = n, 
                            e && t.$options.props) {
                                st.shouldConvert = !1;
                                for (var a = t._props, s = t.$options._propKeys || [], u = 0; u < s.length; u++) {
                                    var c = s[u];
                                    a[c] = Et(c, t.$options.props, e, t);
                                }
                                st.shouldConvert = !0, t.$options.propsData = e;
                            }
                            if (n) {
                                var f = t.$options._parentListeners;
                                t.$options._parentListeners = n, Kt(t, n, f);
                            }
                            o && (t.$slots = Ht(i, r.context), t.$forceUpdate());
                        }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
                    },
                    insert: function(t) {
                        var e = t.context, n = t.componentInstance;
                        n._isMounted || (n._isMounted = !0, zt(n, "mounted")), t.data.keepAlive && (e._isMounted ? function(t) {
                            t._inactive = !1, Xt.push(t);
                        }(n) : $t(n, !0));
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                            if (!(n && (e._directInactive = !0, qt(e)) || e._inactive)) {
                                e._inactive = !0;
                                for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                                zt(e, "deactivated");
                            }
                        }(e, !0) : e.$destroy());
                    }
                }, ye = Object.keys(ve);
                function ge(e, i, a, s, u) {
                    if (!t(e)) {
                        var c = a.$options._base;
                        if (o(e) && (e = c.extend(e)), "function" == typeof e) {
                            var f;
                            if (t(e.cid) && void 0 === (e = function(e, i, a) {
                                if (r(e.error) && n(e.errorComp)) return e.errorComp;
                                if (n(e.resolved)) return e.resolved;
                                if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;
                                if (!n(e.contexts)) {
                                    var s = e.contexts = [ a ], u = !0, c = function() {
                                        for (var t = 0, e = s.length; t < e; t++) s[t].$forceUpdate();
                                    }, f = j(function(t) {
                                        e.resolved = Ft(t, i), u || c();
                                    }), l = j(function(t) {
                                        n(e.errorComp) && (e.error = !0, c());
                                    }), h = e(f, l);
                                    return o(h) && ("function" == typeof h.then ? t(e.resolved) && h.then(f, l) : n(h.component) && "function" == typeof h.component.then && (h.component.then(f, l), 
                                    n(h.error) && (e.errorComp = Ft(h.error, i)), n(h.loading) && (e.loadingComp = Ft(h.loading, i), 
                                    0 === h.delay ? e.loading = !0 : setTimeout(function() {
                                        t(e.resolved) && t(e.error) && (e.loading = !0, c());
                                    }, h.delay || 200)), n(h.timeout) && setTimeout(function() {
                                        t(e.resolved) && l(null);
                                    }, h.timeout))), u = !1, e.loading ? e.loadingComp : e.resolved;
                                }
                                e.contexts.push(a);
                            }(f = e, c, a))) return function(t, e, n, r, i) {
                                var o = St();
                                return o.asyncFactory = t, o.asyncMeta = {
                                    data: e,
                                    context: n,
                                    children: r,
                                    tag: i
                                }, o;
                            }(f, i, a, s, u);
                            i = i || {}, De(e), n(i.model) && function(t, e) {
                                var r = t.model && t.model.prop || "value", i = t.model && t.model.event || "input";
                                (e.props || (e.props = {}))[r] = e.model.value;
                                var o = e.on || (e.on = {});
                                n(o[i]) ? o[i] = [ e.model.callback ].concat(o[i]) : o[i] = e.model.callback;
                            }(e.options, i);
                            var l = function(e, r, i) {
                                var o = r.options.props;
                                if (!t(o)) {
                                    var a = {}, s = e.attrs, u = e.props;
                                    if (n(s) || n(u)) for (var c in o) {
                                        var f = w(c);
                                        Mt(a, u, c, f, !0) || Mt(a, s, c, f, !1);
                                    }
                                    return a;
                                }
                            }(i, e);
                            if (r(e.options.functional)) return function(t, e, r, i, o) {
                                var a = {}, s = t.options.props;
                                if (n(s)) for (var u in s) a[u] = Et(u, s, e || {}); else n(r.attrs) && de(a, r.attrs), 
                                n(r.props) && de(a, r.props);
                                var c = Object.create(i), f = t.options.render.call(null, function(t, e, n, r) {
                                    return we(c, t, e, n, r, !0);
                                }, {
                                    data: r,
                                    props: a,
                                    children: o,
                                    parent: i,
                                    listeners: r.on || {},
                                    injections: pe(t.options.inject, i),
                                    slots: function() {
                                        return Ht(o, i);
                                    }
                                });
                                return f instanceof Tt && (f.functionalContext = i, f.functionalOptions = t.options, 
                                r.slot && ((f.data || (f.data = {})).slot = r.slot)), f;
                            }(e, l, i, a, s);
                            var h = i.on;
                            if (r(e.options.abstract)) {
                                var p = i.slot;
                                i = {}, p && (i.slot = p);
                            }
                            !function(t) {
                                t.hook || (t.hook = {});
                                for (var e = 0; e < ye.length; e++) {
                                    var n = ye[e], r = t.hook[n], i = ve[n];
                                    t.hook[n] = r ? me(i, r) : i;
                                }
                            }(i);
                            var d = e.options.name || u;
                            return new Tt("vue-component-" + e.cid + (d ? "-" + d : ""), i, void 0, void 0, void 0, a, {
                                Ctor: e,
                                propsData: l,
                                listeners: h,
                                tag: u,
                                children: s
                            }, f);
                        }
                    }
                }
                function me(t, e) {
                    return function(n, r, i, o) {
                        t(n, r, i, o), e(n, r, i, o);
                    };
                }
                var be = 1, _e = 2;
                function we(e, o, a, s, u, c) {
                    return (Array.isArray(a) || i(a)) && (u = s, s = a, a = void 0), r(c) && (u = _e), 
                    function(e, r, i, o, a) {
                        if (n(i) && n(i.__ob__)) return St();
                        n(i) && n(i.is) && (r = i.is);
                        if (!r) return St();
                        0;
                        Array.isArray(o) && "function" == typeof o[0] && ((i = i || {}).scopedSlots = {
                            default: o[0]
                        }, o.length = 0);
                        a === _e ? o = Nt(o) : a === be && (o = function(t) {
                            for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                            return t;
                        }(o));
                        var s, u;
                        if ("string" == typeof r) {
                            var c;
                            u = I.getTagNamespace(r), s = I.isReservedTag(r) ? new Tt(I.parsePlatformTagName(r), i, o, void 0, void 0, e) : n(c = xt(e.$options, "components", r)) ? ge(c, i, e, o, r) : new Tt(r, i, o, void 0, void 0, e);
                        } else s = ge(r, i, e, o);
                        return n(s) ? (u && function e(r, i) {
                            r.ns = i;
                            if ("foreignObject" === r.tag) return;
                            if (n(r.children)) for (var o = 0, a = r.children.length; o < a; o++) {
                                var s = r.children[o];
                                n(s.tag) && t(s.ns) && e(s, i);
                            }
                        }(s, u), s) : St();
                    }(e, o, a, s, u);
                }
                function xe(t, e) {
                    var r, i, a, s, u;
                    if (Array.isArray(t) || "string" == typeof t) for (r = new Array(t.length), i = 0, 
                    a = t.length; i < a; i++) r[i] = e(t[i], i); else if ("number" == typeof t) for (r = new Array(t), 
                    i = 0; i < t; i++) r[i] = e(i + 1, i); else if (o(t)) for (s = Object.keys(t), r = new Array(s.length), 
                    i = 0, a = s.length; i < a; i++) u = s[i], r[i] = e(t[u], u, i);
                    return n(r) && (r._isVList = !0), r;
                }
                function Ee(t, e, n, r) {
                    var i = this.$scopedSlots[t];
                    if (i) return n = n || {}, r && (n = A(A({}, r), n)), i(n) || e;
                    var o = this.$slots[t];
                    return o || e;
                }
                function Ae(t) {
                    return xt(this.$options, "filters", t) || O;
                }
                function ke(t, e, n) {
                    var r = I.keyCodes[e] || n;
                    return Array.isArray(r) ? -1 === r.indexOf(t) : r !== t;
                }
                function Te(t, e, n, r, i) {
                    if (n) if (o(n)) {
                        var a;
                        Array.isArray(n) && (n = function(t) {
                            for (var e = {}, n = 0; n < t.length; n++) t[n] && A(e, t[n]);
                            return e;
                        }(n));
                        var s = function(o) {
                            if ("class" === o || "style" === o || h(o)) a = t; else {
                                var s = t.attrs && t.attrs.type;
                                a = r || I.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                            }
                            o in a || (a[o] = n[o], i && ((t.on || (t.on = {}))["update:" + o] = function(t) {
                                n[o] = t;
                            }));
                        };
                        for (var u in n) s(u);
                    } else ;
                    return t;
                }
                function Oe(t, e) {
                    var n = this._staticTrees[t];
                    return n && !e ? Array.isArray(n) ? Pt(n) : jt(n) : (Ce(n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), "__static__" + t, !1), 
                    n);
                }
                function Se(t, e, n) {
                    return Ce(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
                }
                function Ce(t, e, n) {
                    if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && je(t[r], e + "_" + r, n); else je(t, e, n);
                }
                function je(t, e, n) {
                    t.isStatic = !0, t.key = e, t.isOnce = n;
                }
                function Pe(t, e) {
                    if (e) if (s(e)) {
                        var n = t.on = t.on ? A({}, t.on) : {};
                        for (var r in e) {
                            var i = n[r], o = e[r];
                            n[r] = i ? [].concat(o, i) : o;
                        }
                    } else ;
                    return t;
                }
                var Re = 0;
                function De(t) {
                    var e = t.options;
                    if (t.super) {
                        var n = De(t.super);
                        if (n !== t.superOptions) {
                            t.superOptions = n;
                            var r = function(t) {
                                var e, n = t.options, r = t.extendOptions, i = t.sealedOptions;
                                for (var o in n) n[o] !== i[o] && (e || (e = {}), e[o] = Ie(n[o], r[o], i[o]));
                                return e;
                            }(t);
                            r && A(t.extendOptions, r), (e = t.options = wt(n, t.extendOptions)).name && (e.components[e.name] = t);
                        }
                    }
                    return e;
                }
                function Ie(t, e, n) {
                    if (Array.isArray(t)) {
                        var r = [];
                        n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
                        for (var i = 0; i < t.length; i++) (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
                        return r;
                    }
                    return t;
                }
                function Me(t) {
                    this._init(t);
                }
                function Ne(t) {
                    t.cid = 0;
                    var e = 1;
                    t.extend = function(t) {
                        t = t || {};
                        var n = this, r = n.cid, i = t._Ctor || (t._Ctor = {});
                        if (i[r]) return i[r];
                        var o = t.name || n.options.name, a = function(t) {
                            this._init(t);
                        };
                        return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                        a.options = wt(n.options, t), a.super = n, a.options.props && function(t) {
                            var e = t.options.props;
                            for (var n in e) se(t.prototype, "_props", n);
                        }(a), a.options.computed && function(t) {
                            var e = t.options.computed;
                            for (var n in e) fe(t.prototype, n, e[n]);
                        }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, R.forEach(function(t) {
                            a[t] = n[t];
                        }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, 
                        a.sealedOptions = A({}, a.options), i[r] = a, a;
                    };
                }
                !function(t) {
                    t.prototype._init = function(t) {
                        var e = this;
                        e._uid = Re++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                            var n = t.$options = Object.create(t.constructor.options);
                            n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, 
                            n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, 
                            n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, 
                            e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
                        }(e, t) : e.$options = wt(De(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
                        function(t) {
                            var e = t.$options, n = e.parent;
                            if (n && !e.abstract) {
                                for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                                n.$children.push(t);
                            }
                            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                            t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                            t._isBeingDestroyed = !1;
                        }(e), function(t) {
                            t._events = Object.create(null), t._hasHookEvent = !1;
                            var e = t.$options._parentListeners;
                            e && Kt(t, e);
                        }(e), function(t) {
                            t._vnode = null, t._staticTrees = null;
                            var e = t.$vnode = t.$options._parentVnode, n = e && e.context;
                            t.$slots = Ht(t.$options._renderChildren, n), t.$scopedSlots = M, t._c = function(e, n, r, i) {
                                return we(t, e, n, r, i, !1);
                            }, t.$createElement = function(e, n, r, i) {
                                return we(t, e, n, r, i, !0);
                            };
                            var r = e && e.data;
                            ht(t, "$attrs", r && r.attrs, 0, !0), ht(t, "$listeners", r && r.on, 0, !0);
                        }(e), zt(e, "beforeCreate"), function(t) {
                            var e = pe(t.$options.inject, t);
                            e && (st.shouldConvert = !1, Object.keys(e).forEach(function(n) {
                                ht(t, n, e[n]);
                            }), st.shouldConvert = !0);
                        }(e), ue(e), function(t) {
                            var e = t.$options.provide;
                            e && (t._provided = "function" == typeof e ? e.call(t) : e);
                        }(e), zt(e, "created"), e.$options.el && e.$mount(e.$options.el);
                    };
                }(Me), function(t) {
                    var e = {
                        get: function() {
                            return this._data;
                        }
                    }, n = {
                        get: function() {
                            return this._props;
                        }
                    };
                    Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
                    t.prototype.$set = pt, t.prototype.$delete = dt, t.prototype.$watch = function(t, e, n) {
                        if (s(e)) return he(this, t, e, n);
                        (n = n || {}).user = !0;
                        var r = new ie(this, t, e, n);
                        return n.immediate && e.call(this, r.value), function() {
                            r.teardown();
                        };
                    };
                }(Me), function(t) {
                    var e = /^hook:/;
                    t.prototype.$on = function(t, n) {
                        if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n); else (this._events[t] || (this._events[t] = [])).push(n), 
                        e.test(t) && (this._hasHookEvent = !0);
                        return this;
                    }, t.prototype.$once = function(t, e) {
                        var n = this;
                        function r() {
                            n.$off(t, r), e.apply(n, arguments);
                        }
                        return r.fn = e, n.$on(t, r), n;
                    }, t.prototype.$off = function(t, e) {
                        var n = this;
                        if (!arguments.length) return n._events = Object.create(null), n;
                        if (Array.isArray(t)) {
                            for (var r = 0, i = t.length; r < i; r++) this.$off(t[r], e);
                            return n;
                        }
                        var o, a = n._events[t];
                        if (!a) return n;
                        if (1 === arguments.length) return n._events[t] = null, n;
                        for (var s = a.length; s--; ) if ((o = a[s]) === e || o.fn === e) {
                            a.splice(s, 1);
                            break;
                        }
                        return n;
                    }, t.prototype.$emit = function(t) {
                        var e = this._events[t];
                        if (e) {
                            e = e.length > 1 ? E(e) : e;
                            for (var n = E(arguments, 1), r = 0, i = e.length; r < i; r++) try {
                                e[r].apply(this, n);
                            } catch (e) {
                                U(e, this, 'event handler for "' + t + '"');
                            }
                        }
                        return this;
                    };
                }(Me), function(t) {
                    t.prototype._update = function(t, e) {
                        var n = this;
                        n._isMounted && zt(n, "beforeUpdate");
                        var r = n.$el, i = n._vnode, o = Gt;
                        Gt = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), 
                        n.$options._parentElm = n.$options._refElm = null), Gt = o, r && (r.__vue__ = null), 
                        n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                    }, t.prototype.$forceUpdate = function() {
                        this._watcher && this._watcher.update();
                    }, t.prototype.$destroy = function() {
                        var t = this;
                        if (!t._isBeingDestroyed) {
                            zt(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                            var e = t.$parent;
                            !e || e._isBeingDestroyed || t.$options.abstract || p(e.$children, t), t._watcher && t._watcher.teardown();
                            for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                            t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                            zt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null);
                        }
                    };
                }(Me), function(t) {
                    t.prototype.$nextTick = function(t) {
                        return tt(t, this);
                    }, t.prototype._render = function() {
                        var t, e = this, n = e.$options, r = n.render, i = n.staticRenderFns, o = n._parentVnode;
                        if (e._isMounted) for (var a in e.$slots) e.$slots[a] = Pt(e.$slots[a]);
                        e.$scopedSlots = o && o.data.scopedSlots || M, i && !e._staticTrees && (e._staticTrees = []), 
                        e.$vnode = o;
                        try {
                            t = r.call(e._renderProxy, e.$createElement);
                        } catch (n) {
                            U(n, e, "render function"), t = e._vnode;
                        }
                        return t instanceof Tt || (t = St()), t.parent = o, t;
                    }, t.prototype._o = Se, t.prototype._n = f, t.prototype._s = c, t.prototype._l = xe, 
                    t.prototype._t = Ee, t.prototype._q = S, t.prototype._i = C, t.prototype._m = Oe, 
                    t.prototype._f = Ae, t.prototype._k = ke, t.prototype._b = Te, t.prototype._v = Ct, 
                    t.prototype._e = St, t.prototype._u = Vt, t.prototype._g = Pe;
                }(Me);
                var Le = [ String, RegExp, Array ];
                function Fe(t) {
                    return t && (t.Ctor.options.name || t.tag);
                }
                function Be(t, e) {
                    return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!function(t) {
                        return "[object RegExp]" === a.call(t);
                    }(t) && t.test(e);
                }
                function Ue(t, e, n) {
                    for (var r in t) {
                        var i = t[r];
                        if (i) {
                            var o = Fe(i.componentOptions);
                            o && !n(o) && (i !== e && Ke(i), t[r] = null);
                        }
                    }
                }
                function Ke(t) {
                    t && t.componentInstance.$destroy();
                }
                var He = {
                    KeepAlive: {
                        name: "keep-alive",
                        abstract: !0,
                        props: {
                            include: Le,
                            exclude: Le
                        },
                        created: function() {
                            this.cache = Object.create(null);
                        },
                        destroyed: function() {
                            for (var t in this.cache) Ke(this.cache[t]);
                        },
                        watch: {
                            include: function(t) {
                                Ue(this.cache, this._vnode, function(e) {
                                    return Be(t, e);
                                });
                            },
                            exclude: function(t) {
                                Ue(this.cache, this._vnode, function(e) {
                                    return !Be(t, e);
                                });
                            }
                        },
                        render: function() {
                            var t = function(t) {
                                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                                    var r = t[e];
                                    if (n(r) && n(r.componentOptions)) return r;
                                }
                            }(this.$slots.default), e = t && t.componentOptions;
                            if (e) {
                                var r = Fe(e);
                                if (r && (this.include && !Be(this.include, r) || this.exclude && Be(this.exclude, r))) return t;
                                var i = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                                this.cache[i] ? t.componentInstance = this.cache[i].componentInstance : this.cache[i] = t, 
                                t.data.keepAlive = !0;
                            }
                            return t;
                        }
                    }
                };
                !function(t) {
                    var e = {
                        get: function() {
                            return I;
                        }
                    };
                    Object.defineProperty(t, "config", e), t.util = {
                        warn: B,
                        extend: A,
                        mergeOptions: wt,
                        defineReactive: ht
                    }, t.set = pt, t.delete = dt, t.nextTick = tt, t.options = Object.create(null), 
                    R.forEach(function(e) {
                        t.options[e + "s"] = Object.create(null);
                    }), t.options._base = t, A(t.options.components, He), function(t) {
                        t.use = function(t) {
                            var e = this._installedPlugins || (this._installedPlugins = []);
                            if (e.indexOf(t) > -1) return this;
                            var n = E(arguments, 1);
                            return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                            e.push(t), this;
                        };
                    }(t), function(t) {
                        t.mixin = function(t) {
                            return this.options = wt(this.options, t), this;
                        };
                    }(t), Ne(t), function(t) {
                        R.forEach(function(e) {
                            t[e] = function(t, n) {
                                return n ? ("component" === e && s(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                                "directive" === e && "function" == typeof n && (n = {
                                    bind: n,
                                    update: n
                                }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                            };
                        });
                    }(t);
                }(Me), Object.defineProperty(Me.prototype, "$isServer", {
                    get: z
                }), Object.defineProperty(Me.prototype, "$ssrContext", {
                    get: function() {
                        return this.$vnode && this.$vnode.ssrContext;
                    }
                }), Me.version = "2.4.1", Me.mpvueVersion = "1.0.18";
                var Ye = l("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown", !0), Ve = l("style,class");
                l("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown", !0), l("embed,img,image,input,link,meta", !0);
                function Ge(t) {
                    return t && t.$attrs ? t.$attrs.mpcomid : "0";
                }
                var We = {
                    tap: [ "tap", "click" ],
                    touchstart: [ "touchstart" ],
                    touchmove: [ "touchmove" ],
                    touchcancel: [ "touchcancel" ],
                    touchend: [ "touchend" ],
                    longtap: [ "longtap" ],
                    input: [ "input" ],
                    blur: [ "change", "blur" ],
                    submit: [ "submit" ],
                    focus: [ "focus" ],
                    scrolltoupper: [ "scrolltoupper" ],
                    scrolltolower: [ "scrolltolower" ],
                    scroll: [ "scroll" ]
                }, qe = {};
                var $e = Object.freeze({
                    createElement: function(t, e) {
                        return qe;
                    },
                    createElementNS: function(t, e) {
                        return qe;
                    },
                    createTextNode: function(t) {
                        return qe;
                    },
                    createComment: function(t) {
                        return qe;
                    },
                    insertBefore: function(t, e, n) {},
                    removeChild: function(t, e) {},
                    appendChild: function(t, e) {},
                    parentNode: function(t) {
                        return qe;
                    },
                    nextSibling: function(t) {
                        return qe;
                    },
                    tagName: function(t) {
                        return "div";
                    },
                    setTextContent: function(t, e) {
                        return qe;
                    },
                    setAttribute: function(t, e, n) {
                        return qe;
                    }
                }), ze = {
                    create: function(t, e) {
                        Qe(e);
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (Qe(t, !0), Qe(e));
                    },
                    destroy: function(t) {
                        Qe(t, !0);
                    }
                };
                function Qe(t, e) {
                    var n = t.data.ref;
                    if (n) {
                        var r = t.context, i = t.componentInstance || t.elm, o = r.$refs;
                        e ? Array.isArray(o[n]) ? p(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [ i ] : o[n] = i;
                    }
                }
                var Xe = new Tt("", {}, []), Je = [ "create", "activate", "update", "remove", "destroy" ];
                function Ze(e, i) {
                    return e.key === i.key && (e.tag === i.tag && e.isComment === i.isComment && n(e.data) === n(i.data) && function(t, e) {
                        if ("input" !== t.tag) return !0;
                        var r, i = n(r = t.data) && n(r = r.attrs) && r.type, o = n(r = e.data) && n(r = r.attrs) && r.type;
                        return i === o;
                    }(e, i) || r(e.isAsyncPlaceholder) && e.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
                }
                function tn(t, e, r) {
                    var i, o, a = {};
                    for (i = e; i <= r; ++i) n(o = t[i].key) && (a[o] = i);
                    return a;
                }
                var en = function(e) {
                    var o, a, s = {}, u = e.modules, c = e.nodeOps;
                    for (o = 0; o < Je.length; ++o) for (s[Je[o]] = [], a = 0; a < u.length; ++a) n(u[a][Je[o]]) && s[Je[o]].push(u[a][Je[o]]);
                    function f(t) {
                        var e = c.parentNode(t);
                        n(e) && c.removeChild(e, t);
                    }
                    function h(t, e, i, o, a) {
                        if (t.isRootInsert = !a, !function(t, e, i, o) {
                            var a = t.data;
                            if (n(a)) {
                                var u = n(t.componentInstance) && a.keepAlive;
                                if (n(a = a.hook) && n(a = a.init) && a(t, !1, i, o), n(t.componentInstance)) return p(t, e), 
                                r(u) && function(t, e, r, i) {
                                    for (var o, a = t; a.componentInstance; ) if (a = a.componentInstance._vnode, n(o = a.data) && n(o = o.transition)) {
                                        for (o = 0; o < s.activate.length; ++o) s.activate[o](Xe, a);
                                        e.push(a);
                                        break;
                                    }
                                    d(r, t.elm, i);
                                }(t, e, i, o), !0;
                            }
                        }(t, e, i, o)) {
                            var u = t.data, f = t.children, l = t.tag;
                            n(l) ? (t.elm = t.ns ? c.createElementNS(t.ns, l) : c.createElement(l, t), m(t), 
                            v(t, f, e), n(u) && g(t, e), d(i, t.elm, o)) : r(t.isComment) ? (t.elm = c.createComment(t.text), 
                            d(i, t.elm, o)) : (t.elm = c.createTextNode(t.text), d(i, t.elm, o));
                        }
                    }
                    function p(t, e) {
                        n(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), 
                        t.elm = t.componentInstance.$el, y(t) ? (g(t, e), m(t)) : (Qe(t), e.push(t));
                    }
                    function d(t, e, r) {
                        n(t) && (n(r) ? r.parentNode === t && c.insertBefore(t, e, r) : c.appendChild(t, e));
                    }
                    function v(t, e, n) {
                        if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) h(e[r], n, t.elm, null, !0); else i(t.text) && c.appendChild(t.elm, c.createTextNode(t.text));
                    }
                    function y(t) {
                        for (;t.componentInstance; ) t = t.componentInstance._vnode;
                        return n(t.tag);
                    }
                    function g(t, e) {
                        for (var r = 0; r < s.create.length; ++r) s.create[r](Xe, t);
                        n(o = t.data.hook) && (n(o.create) && o.create(Xe, t), n(o.insert) && e.push(t));
                    }
                    function m(t) {
                        for (var e, r = t; r; ) n(e = r.context) && n(e = e.$options._scopeId) && c.setAttribute(t.elm, e, ""), 
                        r = r.parent;
                        n(e = Gt) && e !== t.context && n(e = e.$options._scopeId) && c.setAttribute(t.elm, e, "");
                    }
                    function b(t, e, n, r, i, o) {
                        for (;r <= i; ++r) h(n[r], o, t, e);
                    }
                    function _(t) {
                        var e, r, i = t.data;
                        if (n(i)) for (n(e = i.hook) && n(e = e.destroy) && e(t), e = 0; e < s.destroy.length; ++e) s.destroy[e](t);
                        if (n(e = t.children)) for (r = 0; r < t.children.length; ++r) _(t.children[r]);
                    }
                    function w(t, e, r, i) {
                        for (;r <= i; ++r) {
                            var o = e[r];
                            n(o) && (n(o.tag) ? (x(o), _(o)) : f(o.elm));
                        }
                    }
                    function x(t, e) {
                        if (n(e) || n(t.data)) {
                            var r, i = s.remove.length + 1;
                            for (n(e) ? e.listeners += i : e = function(t, e) {
                                function n() {
                                    0 == --n.listeners && f(t);
                                }
                                return n.listeners = e, n;
                            }(t.elm, i), n(r = t.componentInstance) && n(r = r._vnode) && n(r.data) && x(r, e), 
                            r = 0; r < s.remove.length; ++r) s.remove[r](t, e);
                            n(r = t.data.hook) && n(r = r.remove) ? r(t, e) : e();
                        } else f(t.elm);
                    }
                    function E(e, i, o, a) {
                        if (e !== i) {
                            var u = i.elm = e.elm;
                            if (r(e.isAsyncPlaceholder)) n(i.asyncFactory.resolved) ? T(e.elm, i, o) : i.isAsyncPlaceholder = !0; else if (r(i.isStatic) && r(e.isStatic) && i.key === e.key && (r(i.isCloned) || r(i.isOnce))) i.componentInstance = e.componentInstance; else {
                                var f, l = i.data;
                                n(l) && n(f = l.hook) && n(f = f.prepatch) && f(e, i);
                                var p = e.children, d = i.children;
                                if (n(l) && y(i)) {
                                    for (f = 0; f < s.update.length; ++f) s.update[f](e, i);
                                    n(f = l.hook) && n(f = f.update) && f(e, i);
                                }
                                t(i.text) ? n(p) && n(d) ? p !== d && function(e, r, i, o, a) {
                                    for (var s, u, f, l = 0, p = 0, d = r.length - 1, v = r[0], y = r[d], g = i.length - 1, m = i[0], _ = i[g], x = !a; l <= d && p <= g; ) t(v) ? v = r[++l] : t(y) ? y = r[--d] : Ze(v, m) ? (E(v, m, o), 
                                    v = r[++l], m = i[++p]) : Ze(y, _) ? (E(y, _, o), y = r[--d], _ = i[--g]) : Ze(v, _) ? (E(v, _, o), 
                                    x && c.insertBefore(e, v.elm, c.nextSibling(y.elm)), v = r[++l], _ = i[--g]) : Ze(y, m) ? (E(y, m, o), 
                                    x && c.insertBefore(e, y.elm, v.elm), y = r[--d], m = i[++p]) : (t(s) && (s = tn(r, l, d)), 
                                    t(u = n(m.key) ? s[m.key] : null) ? (h(m, o, e, v.elm), m = i[++p]) : Ze(f = r[u], m) ? (E(f, m, o), 
                                    r[u] = void 0, x && c.insertBefore(e, f.elm, v.elm), m = i[++p]) : (h(m, o, e, v.elm), 
                                    m = i[++p]));
                                    l > d ? b(e, t(i[g + 1]) ? null : i[g + 1].elm, i, p, g, o) : p > g && w(0, r, l, d);
                                }(u, p, d, o, a) : n(d) ? (n(e.text) && c.setTextContent(u, ""), b(u, null, d, 0, d.length - 1, o)) : n(p) ? w(0, p, 0, p.length - 1) : n(e.text) && c.setTextContent(u, "") : e.text !== i.text && c.setTextContent(u, i.text), 
                                n(l) && n(f = l.hook) && n(f = f.postpatch) && f(e, i);
                            }
                        }
                    }
                    function A(t, e, i) {
                        if (r(i) && n(t.parent)) t.parent.data.pendingInsert = e; else for (var o = 0; o < e.length; ++o) e[o].data.hook.insert(e[o]);
                    }
                    var k = l("attrs,style,class,staticClass,staticStyle,key");
                    function T(t, e, i) {
                        if (r(e.isComment) && n(e.asyncFactory)) return e.elm = t, e.isAsyncPlaceholder = !0, 
                        !0;
                        e.elm = t;
                        var a = e.tag, s = e.data, u = e.children;
                        if (n(s) && (n(o = s.hook) && n(o = o.init) && o(e, !0), n(o = e.componentInstance))) return p(e, i), 
                        !0;
                        if (n(a)) {
                            if (n(u)) if (t.hasChildNodes()) {
                                for (var c = !0, f = t.firstChild, l = 0; l < u.length; l++) {
                                    if (!f || !T(f, u[l], i)) {
                                        c = !1;
                                        break;
                                    }
                                    f = f.nextSibling;
                                }
                                if (!c || f) return !1;
                            } else v(e, u, i);
                            if (n(s)) for (var h in s) if (!k(h)) {
                                g(e, i);
                                break;
                            }
                        } else t.data !== e.text && (t.data = e.text);
                        return !0;
                    }
                    return function(e, i, o, a, u, f) {
                        if (!t(i)) {
                            var l = !1, p = [];
                            if (t(e)) l = !0, h(i, p, u, f); else {
                                var d = n(e.nodeType);
                                if (!d && Ze(e, i)) E(e, i, p, a); else {
                                    if (d) {
                                        if (1 === e.nodeType && e.hasAttribute(P) && (e.removeAttribute(P), o = !0), r(o) && T(e, i, p)) return A(i, p, !0), 
                                        e;
                                        e = function(t) {
                                            return new Tt(c.tagName(t).toLowerCase(), {}, [], void 0, t);
                                        }(e);
                                    }
                                    var v = e.elm, g = c.parentNode(v);
                                    if (h(i, p, v._leaveCb ? null : g, c.nextSibling(v)), n(i.parent)) {
                                        for (var m = i.parent; m; ) m.elm = i.elm, m = m.parent;
                                        if (y(i)) for (var b = 0; b < s.create.length; ++b) s.create[b](Xe, i.parent);
                                    }
                                    n(g) ? w(0, [ e ], 0, 0) : n(e.tag) && _(e);
                                }
                            }
                            return A(i, p, l), i.elm;
                        }
                        n(e) && _(e);
                    };
                }({
                    nodeOps: $e,
                    modules: [ ze ]
                });
                function nn(t, e, n) {
                    var r, i = t.$options[e];
                    if ("onError" === e && i ? i = [ i ] : "onPageNotFound" === e && i && (i = [ i ]), 
                    i) for (var o = 0, a = i.length; o < a; o++) try {
                        r = i[o].call(t, n);
                    } catch (n) {
                        U(n, t, e + " hook");
                    }
                    return t._hasHookEvent && t.$emit("hook:" + e), t.$children.length && t.$children.forEach(function(t) {
                        return nn(t, e, n);
                    }), r;
                }
                function rn(t, e, n) {
                    if (t) {
                        var r, i, o;
                        if (Array.isArray(t)) for (r = t.length; r--; ) "string" == typeof (i = t[r]) && (e[o = m(i)] = {
                            type: null
                        }); else if (s(t)) for (var a in t) i = t[a], e[o = m(a)] = s(i) ? i : {
                            type: i
                        };
                        for (var u in e) if (e.hasOwnProperty(u)) {
                            var c = e[u];
                            c.default && (c.value = c.default);
                            var f = c.observer;
                            c.observer = function(t, e) {
                                n[o] = t, "function" == typeof f && f.call(n, t, e);
                            };
                        }
                        return e;
                    }
                }
                var on = 0;
                function an(t, e, n, r, i) {
                    try {
                        var o = function t(e, n) {
                            if (e.length > 1) {
                                var r = n[e.splice(0, 1)];
                                return r ? t(e, r) : null;
                            }
                            return n[e[0]] ? n[e[0]] : null;
                        }(t.split("."), n.$root.$mp.page.data);
                        (null === o || JSON.stringify(o) !== JSON.stringify(e) || i) && (r[t] = e);
                    } catch (r) {
                        console.log(r, t, e, n);
                    }
                }
                function sn(t, e, n, r, i, o) {
                    try {
                        if (n instanceof Array) an(t + "." + e, n, o, r, !0); else {
                            var a = {};
                            n.__keyPath ? (a = n.__keyPath, Object.keys(n).forEach(function(i) {
                                if (n[i] instanceof Object) {
                                    if ("__keyPath" === i) return;
                                    sn(t + "." + e, i, n[i], r, null, o);
                                } else !0 === a[i] && (e ? r[t + "." + e + "." + i] = n[i] : r[t + "." + i] = n[i]);
                            }), o.__mpKeyPath = o.__mpKeyPath || {}, o.__mpKeyPath[n.__ob__.dep.id] = n) : an(t + "." + e, n, o, r);
                        }
                    } catch (i) {
                        console.log(i, t, e, n, r);
                    }
                }
                function un(t, e) {
                    var n = t._data || {}, r = t._props || {}, i = "";
                    i = t.$attrs ? function t(e, n) {
                        return e.$parent.$attrs ? (n = e.$parent.$attrs.mpcomid + "," + n, t(e.$parent, n)) : n = "$root.0," + n;
                    }(t, t.$attrs.mpcomid) : "$root.0", Me.nextTick(function() {
                        !function(t) {
                            t.__mpKeyPath && Object.keys(t.__mpKeyPath).forEach(function(e) {
                                delete t.__mpKeyPath[e].__keyPath;
                            });
                        }(t);
                    });
                    var o = n.__keyPath || t.__keyPath || {};
                    if (delete t.__keyPath, delete n.__keyPath, delete r.__keyPath, "done" === t._mpValueSet) {
                        Object.keys(n).forEach(function(r) {
                            if (n[r] instanceof Object) {
                                if ("__keyPath" === r) return;
                                sn(i, r, n[r], e, t._mpValueSet, t);
                            } else void 0 !== n[r] && !0 === o[r] && (e[i + "." + r] = n[r]);
                        }), Object.keys(r).forEach(function(n) {
                            if (r[n] instanceof Object) {
                                if ("__keyPath" === n) return;
                                sn(i, n, r[n], e, t._mpValueSet, t);
                            } else void 0 !== r[n] && (e[i + "." + n] = r[n]);
                        });
                        var a = t._mpProps || {}, s = t._computedWatchers || {};
                        Object.keys(a).forEach(function(n) {
                            e[i + "." + n] = t[n];
                        }), Object.keys(s).forEach(function(n) {
                            e[i + "." + n] = t[n];
                        }), delete e[i];
                    }
                    void 0 === t._mpValueSet && (t._mpValueSet = "done"), Me.config._mpTrace && function(t) {
                        t = JSON.stringify(t), Me._mpvueTraceTimer ? Me._mpvueTraceTimer && (t = t.replace(/[^\u0000-\u00ff]/g, "aa"), 
                        on += t.length) : Me._mpvueTraceTimer = setTimeout(function() {
                            clearTimeout(Me._mpvueTraceTimer), on = (on / 1024).toFixed(1), console.log("这次操作引发500ms内数据更新量:" + on + "kb"), 
                            Me._mpvueTraceTimer = 0, on = 0;
                        }, 500);
                    }(e);
                }
                function cn(t) {
                    var e = function t(e, n) {
                        void 0 === n && (n = []);
                        var r = (e || {}).$parent;
                        return r ? (n.unshift(Ge(r)), r.$parent ? t(r, n) : n) : n;
                    }(t).join(","), n = e + (e ? "," : "") + Ge(t), r = Object.assign(function(t) {
                        return [].concat(Object.keys(t._data || {}), Object.keys(t._props || {}), Object.keys(t._mpProps || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                            return e[n] = t[n], e;
                        }, {});
                    }(t), {
                        $k: n,
                        $kk: n + ",",
                        $p: e
                    }), i = {};
                    return i["$root." + n] = r, i;
                }
                var fn = function(t, e, n) {
                    var r, i, o, a = null, s = 0;
                    function u() {
                        s = !1 === n.leading ? 0 : Date.now(), a = null, o = t.apply(r, i), a || (r = i = null);
                    }
                    return n || (n = {}), function(c, f) {
                        var l = Date.now();
                        s || !1 !== n.leading || (s = l);
                        var h = e - (l - s);
                        return r = this, i = i ? [ c, Object.assign(i[1], f) ] : [ c, f ], h <= 0 || h > e ? (clearTimeout(a), 
                        a = null, s = l, o = t.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, h)), 
                        o;
                    };
                }(function(t, e) {
                    t(e);
                }, 50);
                function ln(t) {
                    var e = t.$root.$mp || {}, n = e.mpType;
                    void 0 === n && (n = "");
                    var r = e.page;
                    if ("app" !== n && r && "function" == typeof r.setData) return r;
                }
                return Me.config.mustUseProp = function() {}, Me.config.isReservedTag = Ye, Me.config.isReservedAttr = Ve, 
                Me.config.getTagNamespace = function() {}, Me.config.isUnknownElement = function() {}, 
                Me.prototype.__patch__ = function() {
                    en.apply(this, arguments), this.$updateDataToMP();
                }, Me.prototype.$mount = function(t, e) {
                    var n = this, r = this.$options;
                    if (r && (r.render || r.mpType)) {
                        var i = r.mpType;
                        return void 0 === i && (i = "page"), this._initMP(i, function() {
                            return Wt(n, void 0, void 0);
                        });
                    }
                    return Wt(this, void 0, void 0);
                }, Me.prototype._initMP = function(t, n) {
                    var r = this.$root;
                    r.$mp || (r.$mp = {});
                    var i = r.$mp;
                    if (i.status) return "app" === t ? nn(this, "onLaunch", i.appOptions) : (nn(this, "onLoad", i.query), 
                    nn(this, "onReady")), n();
                    if (i.mpType = t, i.status = "register", "app" === t) e.App({
                        globalData: {
                            appOptions: {}
                        },
                        handleProxy: function(t) {
                            return r.$handleProxyWithVue(t);
                        },
                        onLaunch: function(t) {
                            void 0 === t && (t = {}), i.app = this, i.status = "launch", this.globalData.appOptions = i.appOptions = t, 
                            nn(r, "onLaunch", t), n();
                        },
                        onShow: function(t) {
                            void 0 === t && (t = {}), i.status = "show", this.globalData.appOptions = i.appOptions = t, 
                            nn(r, "onShow", t);
                        },
                        onHide: function() {
                            i.status = "hide", nn(r, "onHide");
                        },
                        onError: function(t) {
                            nn(r, "onError", t);
                        },
                        onPageNotFound: function(t) {
                            nn(r, "onPageNotFound", t);
                        }
                    }); else if ("component" === t) !function(t) {
                        var e = t._mpProps = {};
                        Object.keys(t.$options.properties || {}).forEach(function(n) {
                            n in t || (se(t, "_mpProps", n), e[n] = void 0);
                        }), lt(e, !0);
                    }(r), e.Component({
                        properties: function(t) {
                            var e = t.$options.properties, n = t.$options.props, r = {};
                            return rn(e, r, t), rn(n, r, t), r;
                        }(r),
                        data: {
                            $root: {}
                        },
                        methods: {
                            handleProxy: function(t) {
                                return r.$handleProxyWithVue(t);
                            }
                        },
                        created: function() {
                            i.status = "created", i.page = this;
                        },
                        attached: function() {
                            i.status = "attached", nn(r, "attached");
                        },
                        ready: function() {
                            i.status = "ready", nn(r, "ready"), n(), r.$nextTick(function() {
                                r._initDataToMP();
                            });
                        },
                        moved: function() {
                            nn(r, "moved");
                        },
                        detached: function() {
                            i.status = "detached", nn(r, "detached");
                        }
                    }); else {
                        var o = e.getApp();
                        e.Page({
                            data: {
                                $root: {}
                            },
                            handleProxy: function(t) {
                                return r.$handleProxyWithVue(t);
                            },
                            onLoad: function(t) {
                                i.page = this, i.query = t, i.status = "load", function(t, e) {
                                    var n = e.$mp;
                                    t && t.globalData && (n.appOptions = t.globalData.appOptions);
                                }(o, r), nn(r, "onLoad", t);
                            },
                            onShow: function() {
                                i.page = this, i.status = "show", nn(r, "onShow"), r.$nextTick(function() {
                                    r._initDataToMP();
                                });
                            },
                            onReady: function() {
                                i.status = "ready", nn(r, "onReady"), n();
                            },
                            onHide: function() {
                                i.status = "hide", nn(r, "onHide"), i.page = null;
                            },
                            onUnload: function() {
                                i.status = "unload", nn(r, "onUnload"), i.page = null;
                            },
                            onPullDownRefresh: function() {
                                nn(r, "onPullDownRefresh");
                            },
                            onReachBottom: function() {
                                nn(r, "onReachBottom");
                            },
                            onShareAppMessage: r.$options.onShareAppMessage ? function(t) {
                                return nn(r, "onShareAppMessage", t);
                            } : null,
                            onPageScroll: function(t) {
                                nn(r, "onPageScroll", t);
                            },
                            onTabItemTap: function(t) {
                                nn(r, "onTabItemTap", t);
                            }
                        });
                    }
                }, Me.prototype.$updateDataToMP = function() {
                    var t = ln(this);
                    if (t) {
                        var e = cn(this);
                        un(this, e), fn(t.setData.bind(t), e);
                    }
                }, Me.prototype._initDataToMP = function() {
                    var t = ln(this);
                    if (t) {
                        var e = function t(e, n) {
                            void 0 === n && (n = {});
                            var r = e.$children;
                            return r && r.length && r.forEach(function(e) {
                                return t(e, n);
                            }), Object.assign(n, cn(e));
                        }(this.$root);
                        t.setData(e);
                    }
                }, Me.prototype.$handleProxyWithVue = function(t) {
                    var e = this.$root, n = t.type, r = t.target;
                    void 0 === r && (r = {});
                    var i = (t.currentTarget || r).dataset;
                    void 0 === i && (i = {});
                    var o = i.comkey;
                    void 0 === o && (o = "");
                    var a = i.eventid, s = function(t, e) {
                        void 0 === e && (e = []);
                        var n = e.slice(1);
                        return n.length ? n.reduce(function(t, e) {
                            for (var n = t.$children.length, r = 0; r < n; r++) {
                                var i = t.$children[r];
                                if (Ge(i) === e) return t = i;
                            }
                            return t;
                        }, t) : t;
                    }(e, o.split(","));
                    if (s) {
                        var u = We[n] || [ n ], c = function t(e, n, r) {
                            void 0 === r && (r = []);
                            var i = [];
                            if (!e || !e.tag) return i;
                            var o = e || {}, a = o.data;
                            void 0 === a && (a = {});
                            var s = o.children;
                            void 0 === s && (s = []);
                            var u = o.componentInstance;
                            u ? Object.keys(u.$slots).forEach(function(e) {
                                var o = u.$slots[e];
                                (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
                                    i = i.concat(t(e, n, r));
                                });
                            }) : s.forEach(function(e) {
                                i = i.concat(t(e, n, r));
                            });
                            var c = a.attrs, f = a.on;
                            return c && f && c.eventid === n ? (r.forEach(function(t) {
                                var e = f[t];
                                "function" == typeof e ? i.push(e) : Array.isArray(e) && (i = i.concat(e));
                            }), i) : i;
                        }(s._vnode, a, u);
                        if (c.length) {
                            var f = function(t) {
                                var e = t.type, n = t.timeStamp, r = t.touches, i = t.detail;
                                void 0 === i && (i = {});
                                var o = t.target;
                                void 0 === o && (o = {});
                                var a = t.currentTarget;
                                void 0 === a && (a = {});
                                var s = {
                                    mp: t,
                                    type: e,
                                    timeStamp: n,
                                    x: i.x,
                                    y: i.y,
                                    target: Object.assign({}, o, i),
                                    currentTarget: a,
                                    stopPropagation: k,
                                    preventDefault: k
                                };
                                return r && r.length && (Object.assign(s, r[0]), s.touches = r), s;
                            }(t);
                            if (1 === c.length) return c[0](f);
                            c.forEach(function(t) {
                                return t(f);
                            });
                        }
                    }
                }, Me;
            });
        }).call(e, n("DuR2"));
    },
    "5zde": function(t, e, n) {
        n("zQR9"), n("qyJz"), t.exports = n("FeBl").Array.from;
    },
    "6Git": function(t, e, n) {
        var r = n("Kzd6");
        t.exports = function(t, e) {
            var n = e ? r(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength);
        };
    },
    "6gN+": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = u(n("bOdI")), i = u(n("Xxa5")), o = u(n("exGp"));
        e.default = function(t) {
            var e = this, n = t.isProd, u = t.pushFormIdsApiUrl, c = t.wxCodename;
            return {
                formSubmit: function() {
                    var t = (0, o.default)(i.default.mark(function t(r) {
                        var o, s, u;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = r.mp.detail.formId, !n || !o) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 4, (0, a.getStorageAsync)("formIds");

                              case 4:
                                if (s = t.sent, /mock/.test(o)) {
                                    t.next = 9;
                                    break;
                                }
                                return u = s ? s.concat(o) : [ o ], t.next = 9, (0, a.setStorageAsync)("formIds", u);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                pushFormId: function() {
                    var t = (0, o.default)(i.default.mark(function t() {
                        var o, f = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = f.formIdsKey, h = void 0 === l ? "form_ids" : l, p = f.data;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, a.getStorageAsync)("formIds");

                              case 2:
                                if (o = t.sent, !n || !o) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 6, (0, s.default)(u, {
                                    method: "POST",
                                    data: Object.assign((0, r.default)({
                                        codename: c
                                    }, h, o), p)
                                });

                              case 6:
                                wx.removeStorageSync("formIds");

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }()
            };
        };
        var a = n("nYYt"), s = u(n("CG4Y"));
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
    },
    "75Sk": function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = {
            list: function() {
                return Object(i.a)(r.c + "/reading/mini_reader/homepage", {
                    isHideLoading: !0
                });
            },
            get: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    page: 1,
                    ipp: 10
                };
                return Object(i.a)(r.c + "/reading/groups/" + t + "/book_products", {
                    data: e
                });
            }
        };
        e.a = o;
    },
    "77Pl": function(t, e, n) {
        var r = n("EqjI");
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    "7KvD": function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    },
    "7UMu": function(t, e, n) {
        var r = n("R9M2");
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t);
        };
    },
    "7YgM": function(t, e) {
        t.exports = {
            name: "reading",
            version: "3.6.0",
            description: "A Mpvue project",
            author: "",
            private: !0,
            scripts: {
                dev: "node build/dev-server.js",
                start: "NODE_ENV=development node build/dev-server.js",
                pstart: "NODE_ENV=production node build/dev-server.js",
                build: "rm -rf dist/ && node build/build.js",
                lint: "eslint --fix 'src/**/*.{js,vue}'",
                format: "prettier --write 'src/**/*.{js,vue}' && yarn lint"
            },
            dependencies: {
                "@shanbay/bays4": "^1.0.3",
                "@shanbay/wx-common": "1.2.49",
                "minapp-api-promise": "^1.0.2",
                mpvue: "^1.0.18",
                "mpvue-router-patch": "^0.2.1",
                vuex: "^3.0.1",
                "xml-js": "^1.6.11"
            },
            devDependencies: {
                "babel-core": "^6.22.1",
                "babel-eslint": "^8.2.3",
                "babel-loader": "^7.1.1",
                "babel-plugin-transform-runtime": "^6.22.0",
                "babel-preset-env": "^1.3.2",
                "babel-preset-stage-2": "^6.22.0",
                "babel-register": "^6.22.0",
                chalk: "^2.4.0",
                "connect-history-api-fallback": "^1.3.0",
                "copy-webpack-plugin": "^4.5.1",
                "css-loader": "^0.28.11",
                cssnano: "^3.10.0",
                eslint: "^4.19.1",
                "eslint-config-airbnb-base": "^12.1.0",
                "eslint-friendly-formatter": "^4.0.1",
                "eslint-import-resolver-webpack": "^0.9.0",
                "eslint-loader": "^2.0.0",
                "eslint-plugin-html": "^4.0.3",
                "eslint-plugin-import": "^2.11.0",
                "eslint-plugin-node": "^6.0.1",
                "eslint-plugin-vue": "^5.2.2",
                "eventsource-polyfill": "^0.9.6",
                express: "^4.16.3",
                "extract-text-webpack-plugin": "^3.0.2",
                "file-loader": "^1.1.11",
                "friendly-errors-webpack-plugin": "^1.7.0",
                glob: "^7.1.2",
                "html-webpack-plugin": "^3.2.0",
                "http-proxy-middleware": "^0.18.0",
                husky: "^2.4.1",
                less: "^3.8.1",
                "less-loader": "^4.1.0",
                "mpvue-loader": "^1.1.2",
                "mpvue-template-compiler": "^1.0.18",
                "mpvue-webpack-target": "^1.0.0",
                "optimize-css-assets-webpack-plugin": "^3.2.0",
                ora: "^2.0.0",
                portfinder: "^1.0.13",
                "postcss-loader": "^2.1.4",
                "postcss-mpvue-wxss": "^1.0.0",
                prettier: "~1.12.1",
                "px2rpx-loader": "^0.1.10",
                relative: "^3.0.2",
                rimraf: "^2.6.0",
                semver: "^5.3.0",
                shelljs: "^0.8.1",
                "style-resources-loader": "^1.2.1",
                "uglifyjs-webpack-plugin": "^1.2.5",
                "url-loader": "^1.0.1",
                "vue-style-loader": "^4.1.0",
                webpack: "^3.11.0",
                "webpack-bundle-analyzer": "^2.2.1",
                "webpack-dev-middleware-hard-disk": "^1.12.0",
                "webpack-merge": "^4.1.0",
                "webpack-mpvue-asset-plugin": "^0.1.1"
            },
            engines: {
                node: ">= 4.0.0",
                npm: ">= 3.0.0"
            },
            husky: {
                "pre-commit": "yarn format"
            },
            browserslist: [ "> 1%", "last 2 versions", "not ie <= 8" ]
        };
    },
    "7YkW": function(t, e, n) {
        var r = n("YeCl"), i = n("Cskv"), o = n("aQOO");
        function a(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
        }
        a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a;
    },
    "7dSG": function(t, e, n) {
        "use strict";
        (function(e, r, i) {
            var o = n("ypnx");
            function a(t) {
                var e = this;
                this.next = null, this.entry = null, this.finish = function() {
                    !function(t, e, n) {
                        var r = t.entry;
                        t.entry = null;
                        for (;r; ) {
                            var i = r.callback;
                            e.pendingcb--, i(n), r = r.next;
                        }
                        e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
                    }(e, t);
                };
            }
            t.exports = m;
            var s, u = !e.browser && [ "v0.10", "v0.9." ].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;
            m.WritableState = g;
            var c = n("jOgh");
            c.inherits = n("LC74");
            var f = {
                deprecate: n("iP15")
            }, l = n("UcPO"), h = n("X3l8").Buffer, p = i.Uint8Array || function() {};
            var d, v = n("x0Ha");
            function y() {}
            function g(t, e) {
                s = s || n("DsFX"), t = t || {};
                var r = e instanceof s;
                this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var i = t.highWaterMark, c = t.writableHighWaterMark, f = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (c || 0 === c) ? c : f, this.highWaterMark = Math.floor(this.highWaterMark), 
                this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, 
                this.destroyed = !1;
                var l = !1 === t.decodeStrings;
                this.decodeStrings = !l, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, 
                this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, 
                this.onwrite = function(t) {
                    !function(t, e) {
                        var n = t._writableState, r = n.sync, i = n.writecb;
                        if (function(t) {
                            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
                        }(n), e) !function(t, e, n, r, i) {
                            --e.pendingcb, n ? (o.nextTick(i, r), o.nextTick(A, t, e), t._writableState.errorEmitted = !0, 
                            t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), 
                            A(t, e));
                        }(t, n, r, e, i); else {
                            var a = x(n);
                            a || n.corked || n.bufferProcessing || !n.bufferedRequest || w(t, n), r ? u(_, t, n, a, i) : _(t, n, a, i);
                        }
                    }(e, t);
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, 
                this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, 
                this.corkedRequestsFree = new a(this);
            }
            function m(t) {
                if (s = s || n("DsFX"), !(d.call(m, this) || this instanceof s)) return new m(t);
                this._writableState = new g(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), 
                "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), 
                "function" == typeof t.final && (this._final = t.final)), l.call(this);
            }
            function b(t, e, n, r, i, o, a) {
                e.writelen = r, e.writecb = a, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), 
                e.sync = !1;
            }
            function _(t, e, n, r) {
                n || function(t, e) {
                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
                }(t, e), e.pendingcb--, r(), A(t, e);
            }
            function w(t, e) {
                e.bufferProcessing = !0;
                var n = e.bufferedRequest;
                if (t._writev && n && n.next) {
                    var r = e.bufferedRequestCount, i = new Array(r), o = e.corkedRequestsFree;
                    o.entry = n;
                    for (var s = 0, u = !0; n; ) i[s] = n, n.isBuf || (u = !1), n = n.next, s += 1;
                    i.allBuffers = u, b(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, 
                    o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e), 
                    e.bufferedRequestCount = 0;
                } else {
                    for (;n; ) {
                        var c = n.chunk, f = n.encoding, l = n.callback;
                        if (b(t, e, !1, e.objectMode ? 1 : c.length, c, f, l), n = n.next, e.bufferedRequestCount--, 
                        e.writing) break;
                    }
                    null === n && (e.lastBufferedRequest = null);
                }
                e.bufferedRequest = n, e.bufferProcessing = !1;
            }
            function x(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
            }
            function E(t, e) {
                t._final(function(n) {
                    e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), 
                    A(t, e);
                });
            }
            function A(t, e) {
                var n = x(e);
                return n && (!function(t, e) {
                    e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, 
                    e.finalCalled = !0, o.nextTick(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
                }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n;
            }
            c.inherits(m, l), g.prototype.getBuffer = function() {
                for (var t = this.bufferedRequest, e = []; t; ) e.push(t), t = t.next;
                return e;
            }, function() {
                try {
                    Object.defineProperty(g.prototype, "buffer", {
                        get: f.deprecate(function() {
                            return this.getBuffer();
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    });
                } catch (t) {}
            }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance], 
            Object.defineProperty(m, Symbol.hasInstance, {
                value: function(t) {
                    return !!d.call(this, t) || this === m && (t && t._writableState instanceof g);
                }
            })) : d = function(t) {
                return t instanceof this;
            }, m.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe, not readable"));
            }, m.prototype.write = function(t, e, n) {
                var r = this._writableState, i = !1, a = !r.objectMode && function(t) {
                    return h.isBuffer(t) || t instanceof p;
                }(t);
                return a && !h.isBuffer(t) && (t = function(t) {
                    return h.from(t);
                }(t)), "function" == typeof e && (n = e, e = null), a ? e = "buffer" : e || (e = r.defaultEncoding), 
                "function" != typeof n && (n = y), r.ended ? function(t, e) {
                    var n = new Error("write after end");
                    t.emit("error", n), o.nextTick(e, n);
                }(this, n) : (a || function(t, e, n, r) {
                    var i = !0, a = !1;
                    return null === n ? a = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), 
                    a && (t.emit("error", a), o.nextTick(r, a), i = !1), i;
                }(this, r, t, n)) && (r.pendingcb++, i = function(t, e, n, r, i, o) {
                    if (!n) {
                        var a = function(t, e, n) {
                            t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = h.from(e, n));
                            return e;
                        }(e, r, i);
                        r !== a && (n = !0, i = "buffer", r = a);
                    }
                    var s = e.objectMode ? 1 : r.length;
                    e.length += s;
                    var u = e.length < e.highWaterMark;
                    u || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                        var c = e.lastBufferedRequest;
                        e.lastBufferedRequest = {
                            chunk: r,
                            encoding: i,
                            isBuf: n,
                            callback: o,
                            next: null
                        }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, 
                        e.bufferedRequestCount += 1;
                    } else b(t, e, !1, s, r, i, o);
                    return u;
                }(this, r, a, t, e, n)), i;
            }, m.prototype.cork = function() {
                this._writableState.corked++;
            }, m.prototype.uncork = function() {
                var t = this._writableState;
                t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || w(this, t));
            }, m.prototype.setDefaultEncoding = function(t) {
                if ("string" == typeof t && (t = t.toLowerCase()), !([ "hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw" ].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                return this._writableState.defaultEncoding = t, this;
            }, Object.defineProperty(m.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark;
                }
            }), m.prototype._write = function(t, e, n) {
                n(new Error("_write() is not implemented"));
            }, m.prototype._writev = null, m.prototype.end = function(t, e, n) {
                var r = this._writableState;
                "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, 
                e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, 
                this.uncork()), r.ending || r.finished || function(t, e, n) {
                    e.ending = !0, A(t, e), n && (e.finished ? o.nextTick(n) : t.once("finish", n));
                    e.ended = !0, t.writable = !1;
                }(this, r, n);
            }, Object.defineProperty(m.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._writableState && this._writableState.destroyed;
                },
                set: function(t) {
                    this._writableState && (this._writableState.destroyed = t);
                }
            }), m.prototype.destroy = v.destroy, m.prototype._undestroy = v.undestroy, m.prototype._destroy = function(t, e) {
                this.end(), e(t);
            };
        }).call(e, n("W2nU"), n("162o").setImmediate, n("DuR2"));
    },
    "7e4z": function(t, e, n) {
        var r = n("uieL"), i = n("1Yb9"), o = n("NGEn"), a = n("ggOT"), s = n("ZGh9"), u = n("YsVG"), c = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var n = o(t), f = !n && i(t), l = !n && !f && a(t), h = !n && !f && !l && u(t), p = n || f || l || h, d = p ? r(t.length, String) : [], v = d.length;
            for (var y in t) !e && !c.call(t, y) || p && ("length" == y || l && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, v)) || d.push(y);
            return d;
        };
    },
    "7eUt": function(t, e, n) {
        "use strict";
        var r = n("hvHy"), i = n.n(r), o = n("/WWA"), a = n("7YgM"), s = (n.n(a), i()({
            wxCodename: o.d,
            apiV1UrlPrefix: o.a,
            apiV2UrlPrefix: o.b,
            apiV3UrlPrefix: o.c,
            showReqLoading: !0,
            isHandleFetchError: !1,
            notShowReqLoadingPages: [ "/pages/planProgress/main" ]
        }));
        s.monitor.init({
            key: "reading",
            mpversion: a.version
        }, {
            fetchBlackList: [ "readingdata", "form_id", "login" ]
        }), e.a = s;
    },
    "8++/": function(t, e) {
        t.exports = function(t) {
            return t != t;
        };
    },
    "82Mu": function(t, e, n) {
        var r = n("7KvD"), i = n("L42u").set, o = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise, u = "process" == n("R9M2")(a);
        t.exports = function() {
            var t, e, n, c = function() {
                var r, i;
                for (u && (r = a.domain) && r.exit(); t; ) {
                    i = t.fn, t = t.next;
                    try {
                        i();
                    } catch (r) {
                        throw t ? n() : e = void 0, r;
                    }
                }
                e = void 0, r && r.enter();
            };
            if (u) n = function() {
                a.nextTick(c);
            }; else if (!o || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                var f = s.resolve(void 0);
                n = function() {
                    f.then(c);
                };
            } else n = function() {
                i.call(r, c);
            }; else {
                var l = !0, h = document.createTextNode("");
                new o(c).observe(h, {
                    characterData: !0
                }), n = function() {
                    h.data = l = !l;
                };
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i), t || (t = i, n()), e = i;
            };
        };
    },
    "86tT": function(t, e, n) {
        var r = n("gHOb"), i = n("UnEC"), o = "[object Map]";
        t.exports = function(t) {
            return i(t) && r(t) == o;
        };
    },
    "87vf": function(t, e, n) {
        t.exports = n("7dSG");
    },
    "880/": function(t, e, n) {
        t.exports = n("hJx8");
    },
    "8AZL": function(t, e) {
        t.exports = function(t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);

              case 1:
                return t.call(e, n[0]);

              case 2:
                return t.call(e, n[0], n[1]);

              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    "8ZyN": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("pFYg")), i = n("Whwk");
        var o = App, a = wx.request, s = {
            retryTimes: 3,
            handleRequestError: !0,
            handleNormalError: !0
        }, u = void 0, c = {
            key: null,
            uuid: (0, i.getUUID)(),
            launchTime: Date.now(),
            errType: null,
            detail: null,
            networkStatus: [],
            platform: null,
            errPagePath: null,
            metaData: {}
        }, f = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !0;
            u.fetchBlackList && u.fetchBlackList.length && u.fetchBlackList.forEach(function(t) {
                -1 !== e.url.indexOf(t) && (n = !1);
            }), 200 !== t.statusCode && 401 !== t.statusCode && n && function(t, e) {
                c.errType = "network err", c.errMark = e.url + "@" + (e.method || "GET"), c.detail = {
                    url: e.url,
                    method: e.method || "GET",
                    statusCode: t.statusCode,
                    errMsg: t.data || t.errMsg
                }, h();
            }(t, e);
        }, l = function() {
            wx.getSystemInfo({
                success: function(t) {
                    c.platform = t;
                }
            }), wx.getNetworkType({
                success: function(t) {
                    var e = t.networkType;
                    c.networkStatus = [ {
                        type: e
                    } ];
                }
            }), wx.onNetworkStatusChange(function(t) {
                var e = t.isConnected, n = t.networkType;
                c.networkStatus.unshift({
                    connected: e,
                    type: n
                });
            }), wx.getSetting({
                success: function(t) {
                    c.settings = t.authSetting || {};
                }
            }), u.handleRequestError && Object.defineProperty(wx, "request", {
                value: function(t) {
                    var e = t.complete;
                    t.complete = function(n) {
                        f(n, t), e && e(n);
                    }, a.call(this, t);
                }
            }), u.handleNormalError && (App = function(t) {
                t.onError = function(t) {
                    if (-1 === t.indexOf("monitorSdkError")) {
                        try {
                            c.errType = t.match(/.*\n/g)[2].trim(), c.errMark = t.match(/.*\n/g)[3].match(/\((.*)\)/)[1], 
                            c.detail = t;
                        } catch (e) {
                            c.errType = c.errType || "UNKNOWN ASYNC ERR TYPE", c.errMark = c.errMark || "UNKONWN CODE LINE & UNKONWN ERRMARK", 
                            c.detail = {
                                errMsg: t,
                                sdkError: JSON.stringify(e)
                            };
                        }
                        h();
                    }
                }, o(t);
            });
        };
        function h() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = u.cookie || wx.getStorageSync("cookie"), n = e.csrftoken || "hqJIquhJWi6s8wNaGWngSNqzHFuMVhBE";
            p.beforeReport();
            var i = {
                key: c.key,
                mp_version: c.mpVersion,
                uuid: c.uuid,
                launch_time: c.launchTime,
                err_mark: c.errMark,
                err_type: c.errType,
                detail: c.detail,
                network_status: c.networkStatus,
                platform: c.platform,
                meta_data: c.metaData,
                err_page_path: c.errPagePath
            };
            Object.keys(i).forEach(function(t) {
                "object" === (0, r.default)(i[t]) && (i[t] = JSON.stringify(i[t]));
            }), /pages(.*)/.test(i.err_mark) && (i.err_mark = i.err_mark.match(/pages(.*)/)[1]), 
            a({
                url: u.reportUrl,
                data: i,
                method: "POST",
                header: {
                    "X-CSRFToken": n,
                    Cookie: "auth_token=" + e.auth_token
                },
                fail: function() {
                    t < u.retryTimes && (console.log("失败，重试:", t), setTimeout(h.bind(null, t + 1), 1500));
                }
            });
        }
        var p = {
            additionalAttrs: [],
            init: function(t) {
                var e = t.key, n = t.mpVersion, r = t.extraFields, i = void 0 === r ? null : r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i && Object.keys(i).forEach(function(t) {
                    c.metaData[t] = i[t];
                }), c.key = e, c.mpVersion = n, (u = Object.assign({}, s, o)).reportUrl || (u.reportUrl = "https://apiv3.shanbay.com/nuwa/mp/log_beat"), 
                l();
            },
            additionalAttrSetter: function(t, e) {
                this.additionalAttrs.push({
                    key: t,
                    getValue: e
                });
            },
            beforeReport: function() {
                this.additionalAttrs.forEach(function(t) {
                    c.metaData[t.key] = t.getValue();
                }), function() {
                    var t = getCurrentPages(), e = t[t.length - 1].route;
                    c.errPagePath = e;
                }();
            },
            notify: function(t, e, n) {
                !function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "customNotifyErrorMark";
                    if (!t || !e) throw new Error("monitorSdkError: type or detail can not be undefined");
                    if ("string" != typeof t) throw new Error("monitorSdkError: type must be string but now it is " + (void 0 === t ? "undefined" : (0, 
                    r.default)(t)));
                    if ("string" != typeof e) throw new Error("monitorSdkError: detail must be string but now it is " + (void 0 === e ? "undefined" : (0, 
                    r.default)(e)));
                    c.errType = t, c.errMark = n, c.detail = e, h();
                }(t, e, n);
            },
            notifyError: function(t) {
                !function(t) {
                    if ("[object Error]" !== Object.prototype.toString.call(t)) throw new Error("monitorSdkError: notifyError must be an real Error");
                    try {
                        c.errType = t.stack.match(/.*\n/)[0], c.errMark = t.stack.match(/.*\n/g)[1].trim().match(/\((.*)\)/)[1], 
                        c.detail = JSON.stringify({
                            message: t.message,
                            stack: t.stack
                        });
                    } catch (e) {
                        c.errType = c.errType || "customizeReportError", c.errMark = c.errMark || "customizeReportErrorMark", 
                        c.detail = c.detail || JSON.stringify({
                            errMsg: t,
                            sdkError: JSON.stringify(e)
                        });
                    }
                    h();
                }(t);
            }
        };
        e.default = p;
    },
    "8gK5": function(t, e) {
        t.exports = function(t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    "94VQ": function(t, e, n) {
        "use strict";
        var r = n("Yobk"), i = n("X8DO"), o = n("e6n0"), a = {};
        n("hJx8")(a, n("dSzd")("iterator"), function() {
            return this;
        }), t.exports = function(t, e, n) {
            t.prototype = r(a, {
                next: i(1, n)
            }), o(t, e + " Iterator");
        };
    },
    "94sX": function(t, e, n) {
        var r = n("dCZQ");
        t.exports = function() {
            this.__data__ = r ? r(null) : {}, this.size = 0;
        };
    },
    "95Qu": function(t, e) {
        !function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e;
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e;
                },
                endian: function(t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t;
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e;
                },
                bytesToWords: function(t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e;
                },
                wordsToBytes: function(t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e;
                },
                bytesToHex: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
                    return e.join("");
                },
                hexToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                    return e;
                },
                bytesToBase64: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("");
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                    return n;
                }
            };
            t.exports = n;
        }();
    },
    "9DG0": function(t, e, n) {
        t.exports = i;
        var r = n("vzCy").EventEmitter;
        function i() {
            r.call(this);
        }
        n("LC74")(i, r), i.Readable = n("cSWu"), i.Writable = n("87vf"), i.Duplex = n("SDM6"), 
        i.Transform = n("4/4u"), i.PassThrough = n("/MLu"), i.Stream = i, i.prototype.pipe = function(t, e) {
            var n = this;
            function i(e) {
                t.writable && !1 === t.write(e) && n.pause && n.pause();
            }
            function o() {
                n.readable && n.resume && n.resume();
            }
            n.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (n.on("end", s), 
            n.on("close", u));
            var a = !1;
            function s() {
                a || (a = !0, t.end());
            }
            function u() {
                a || (a = !0, "function" == typeof t.destroy && t.destroy());
            }
            function c(t) {
                if (f(), 0 === r.listenerCount(this, "error")) throw t;
            }
            function f() {
                n.removeListener("data", i), t.removeListener("drain", o), n.removeListener("end", s), 
                n.removeListener("close", u), n.removeListener("error", c), t.removeListener("error", c), 
                n.removeListener("end", f), n.removeListener("close", f), t.removeListener("close", f);
            }
            return n.on("error", c), t.on("error", c), n.on("end", f), n.on("close", f), t.on("close", f), 
            t.emit("pipe", n), t;
        };
    },
    "9G51": function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "book",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleClick
                    }
                }, [ n("BookCover", {
                    attrs: {
                        type: t.type,
                        cover_urls: t.cover_urls,
                        mpcomid: "0"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "book-info",
                    class: {
                        detail: t.isDetail
                    }
                }, [ n("div", {
                    staticClass: "title-en"
                }, [ t._v(t._s(t.name_en)) ]), t._v(" "), n("div", {
                    staticClass: "title-cn"
                }, [ t._v(t._s(t.name_cn)) ]), t._v(" "), n("div", {
                    staticClass: "author"
                }, [ t._v(t._s(t.author)) ]), t._v(" "), t.description_cn ? n("div", {
                    staticClass: "desc"
                }, [ t._v(t._s(t.description_cn)) ]) : t._e(), t._v(" "), t.readAmount ? n("div", {
                    staticClass: "reader-amount"
                }, [ t._v(t._s(t.readAmount) + "人在读") ]) : t._e() ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    "9UkZ": function(t, e, n) {
        var r = n("aCM0"), i = n("vi0E"), o = n("UnEC"), a = "[object Object]", s = Function.prototype, u = Object.prototype, c = s.toString, f = u.hasOwnProperty, l = c.call(Object);
        t.exports = function(t) {
            if (!o(t) || r(t) != a) return !1;
            var e = i(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && c.call(n) == l;
        };
    },
    "9bBU": function(t, e, n) {
        n("mClu");
        var r = n("FeBl").Object;
        t.exports = function(t, e, n) {
            return r.defineProperty(t, e, n);
        };
    },
    "9uSC": function(t, e, n) {
        "use strict";
        var r = n("0xDb"), i = n("Hqeg");
        e.a = {
            props: [ "name_cn", "authors", "cover_urls", "id", "isTrial", "isFinished", "progress", "book_id" ],
            components: {
                BookCover: i.a
            },
            computed: {
                author: function() {
                    return Object(r.f)(this.authors);
                }
            }
        };
    },
    A9mX: function(t, e, n) {
        var r = n("pTUa");
        t.exports = function(t) {
            var e = r(this, t).delete(t);
            return this.size -= e ? 1 : 0, e;
        };
    },
    ASFP: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("zMR/")), i = s(n("9UkZ")), o = s(n("gGqR")), a = s(n("kvU2"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return Array.from(t);
        }
        e.default = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.customizeArray, s = e.customizeObject, f = e.key;
            return function e(l, h, p) {
                var d = f ? f + "." + p : p;
                if ((0, o.default)(l) && (0, o.default)(h)) return function() {
                    return e(l.apply(void 0, arguments), h.apply(void 0, arguments), p);
                };
                if (c(l) && c(h)) {
                    var v = n && n(l, h, d);
                    return v || [].concat(u(l), u(h));
                }
                if ((0, i.default)(l) && (0, i.default)(h)) {
                    var y = s && s(l, h, d);
                    return y || (0, r.default)({}, l, h, t({
                        customizeArray: n,
                        customizeObject: s,
                        key: d
                    }));
                }
                return (0, i.default)(h) ? (0, a.default)(h) : h;
            };
        };
        var c = Array.isArray;
    },
    AUpc: function(t, e, n) {
        "use strict";
        var r = n("mvHQ"), i = n.n(r), o = n("0xDb");
        e.a = {
            props: [ "cover_urls", "type", "progress", "isFinished", "isTrial" ],
            computed: {
                cover: function() {
                    return Object(o.g)(Object(o.a)(this.cover_urls));
                },
                resolvedProgress: function() {
                    return i()(this.progress);
                }
            }
        };
    },
    "Ai/T": function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        };
    },
    Apws: function(t, e, n) {
        "use strict";
        var r = n("Dd8w"), i = n.n(r), o = n("/WWA"), a = n("Vo7i"), s = {
            collectFormId: function(t) {
                return Object(a.a)(o.c + "/reading/form_id", {
                    method: "PUT",
                    body: {
                        form_id: t
                    },
                    isHideLoading: !0
                });
            },
            track: function(t) {
                var e = Math.floor(Date.now());
                return Object(a.a)(o.c + "/readingdata/baylog", {
                    method: "POST",
                    body: {
                        name: "user-event",
                        payload: t,
                        timestamp: e
                    },
                    isHideLoading: !0
                });
            },
            search: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Object(a.a)(o.c + "/reading/search/books", {
                    data: {
                        key_words: t.trim().replace(/\s/g, "+"),
                        page: e,
                        ipp: 10
                    }
                });
            },
            playDisco: function(t) {
                return Object(a.a)(o.c + "/readingdata/disco", {
                    method: "POST",
                    body: t,
                    isHideLoading: !0
                });
            },
            getImageSuite: function(t) {
                return Object(a.a)(o.c + "/readingoperation/imgsuites/" + t, {
                    isHideLoading: !0
                });
            },
            getMpVersion: function() {
                return Object(a.a)(o.c + "/readingoperation/mpversion", {
                    isHideLoading: !0
                });
            },
            sensorLog: function(t) {
                getApp().sensors.track(t.event_code, i()({
                    ns: "readwechat",
                    mp_type: "weapp"
                }, t.event_value));
            },
            sensorLogin: function(t) {
                getApp().sensors.login(t);
            },
            login: function(t) {
                return Object(a.a)(o.c + "/bayuser/auth/miniprogram/login", {
                    method: "POST",
                    body: t,
                    isHideLoading: !0
                });
            },
            register: function(t) {
                return Object(a.a)(o.c + "/bayuser/auth/miniprogram/register", {
                    method: "POST",
                    body: t
                });
            },
            getUserDetail: function() {
                return Object(a.a)(o.c + "/bayuser/user_detail", {
                    isHideLoading: !0
                });
            }
        };
        e.a = s;
    },
    BAfL: function(t, e, n) {
        var r = n("T8xL"), i = n("xOip"), o = n("IRPJ"), a = n("fT9R");
        t.exports = {
            xml2js: r,
            xml2json: i,
            js2xml: o,
            json2xml: a
        };
    },
    BO1k: function(t, e, n) {
        t.exports = {
            default: n("fxRn"),
            __esModule: !0
        };
    },
    BwfY: function(t, e, n) {
        n("fWfb"), n("M6a0"), n("OYls"), n("QWe/"), t.exports = n("FeBl").Symbol;
    },
    C0hh: function(t, e) {
        t.exports = function() {
            return [];
        };
    },
    C4MV: function(t, e, n) {
        t.exports = {
            default: n("9bBU"),
            __esModule: !0
        };
    },
    CG4Y: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.requestWrapper = e.fetch = void 0;
        var r = u(n("Xxa5")), i = u(n("exGp")), o = u(n("hKoQ")), a = u(n("sp77")), s = n("449I");
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var c = {}, f = function(t) {
            if (c[t]) return c[t];
            var e = wx.getStorageSync(t);
            return c[t] = e, e;
        }, l = function(t, e) {
            c[t] = e, wx.setStorage({
                key: t,
                data: e
            });
        }, h = e.fetch = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = e.isHandleError, i = void 0 === r || r, u = e.header, c = void 0 === u ? {} : u, h = n.loginPath, p = Object.assign({}, e);
            p.url = t;
            var d = f("cookie"), v = d.csrftoken || "";
            return c["X-CSRFToken"] = v, c.Cookie = Object.keys(d).map(function(t) {
                return a.default.serialize(t, d[t]);
            }).join(";"), p.data = e.data || e.body, p.header = c, new o.default(function(t, e) {
                p.fail = function() {
                    i && wx.showToast({
                        title: "出错了，稍后重试",
                        icon: "none"
                    }), e({
                        msg: "出错了，稍后重试",
                        data: {}
                    });
                }, p.success = function(n) {
                    var r = n.header["set-cookie"] || n.header["Set-Cookie"] || "", o = a.default.parse(r.replace(/,/g, "; ")), u = function(t) {
                        var e = {};
                        return t.replace(/=(([^=]*?)(,)([^;=]*?))=/g, "=$2;;$4=").split(";;").forEach(function(t) {
                            var n = t.split("=").shift();
                            e[n] = a.default.parse(t), e[n].value = e[n][n], delete e[n][n];
                        }), e;
                    }(r), c = f("cookie") ? Object.assign({}, f("cookie"), o) : o;
                    l("cookie", c);
                    var d = f("full_cookie") ? Object.assign({}, f("full_cookie"), u) : u;
                    l("full_cookie", d);
                    var v = void 0, y = void 0;
                    if (/apiv3/.test(p.url) ? (v = n.data || {}, y = n.statusCode) : (v = n.data && n.data.data || {}, 
                    y = (0 === v.status_code ? 200 : v.status_code) || n.statusCode), !(y >= 200 && y < 300 || 304 === y)) return 401 === y && h ? void (0, 
                    s.tryRedirect)(h, function() {
                        return e({
                            msg: "success to redirect to " + h,
                            statusCode: y,
                            data: {}
                        });
                    }, e) : (i && wx.showToast({
                        title: v.msg || "出错了，稍后重试",
                        icon: "none"
                    }), void e({
                        msg: v.errors && JSON.stringify(v.errors) || v.msg || "出错了，稍后重试",
                        statusCode: y,
                        data: v
                    }));
                    t(v);
                }, wx.request(p);
            });
        }, p = function(t) {
            var e = getCurrentPages();
            if (e.length <= 0) return !1;
            var n = e[e.length - 1];
            return t.includes(n.route);
        };
        e.requestWrapper = function(t) {
            var e = t.loginPath, n = t.showReqLoading, o = t.notShowReqLoadingPages, a = t.isHandleError;
            return function() {
                var t = (0, i.default)(r.default.mark(function t(i) {
                    var s, u, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return s = p(o), !n || s || c.isHideLoading || wx.showLoading({}), u = void 0, null !== c.isHandleError && void 0 !== c.isHandleError || null === a || void 0 === a || (c.isHandleError = a), 
                            t.prev = 4, t.next = 7, h(i, c, {
                                loginPath: e
                            });

                          case 7:
                            u = t.sent, t.next = 14;
                            break;

                          case 10:
                            throw t.prev = 10, t.t0 = t.catch(4), !n || s || c.isHideLoading || wx.hideLoading(), 
                            t.t0;

                          case 14:
                            return !n || s || c.isHideLoading || wx.hideLoading(), t.abrupt("return", u);

                          case 16:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0, [ [ 4, 10 ] ]);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
        };
        e.default = h;
    },
    CW5P: function(t, e, n) {
        var r = n("T/bE"), i = n("duB3"), o = n("POb3");
        t.exports = function() {
            this.size = 0, this.__data__ = {
                hash: new r(),
                map: new (o || i)(),
                string: new r()
            };
        };
    },
    CXsx: function(t, e, n) {
        "use strict";
        var r = n("r/n2"), i = n("N5/M");
        var o = function(t) {
            n("c3Kw");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-704d952c", null);
        e.a = a.exports;
    },
    CXw9: function(t, e, n) {
        "use strict";
        var r, i, o, a, s = n("O4g8"), u = n("7KvD"), c = n("+ZMJ"), f = n("RY/4"), l = n("kM2E"), h = n("EqjI"), p = n("lOnJ"), d = n("2KxR"), v = n("NWt+"), y = n("t8x9"), g = n("L42u").set, m = n("82Mu")(), b = n("qARP"), _ = n("dNDb"), w = n("iUbK"), x = n("fJUb"), E = u.TypeError, A = u.process, k = A && A.versions, T = k && k.v8 || "", O = u.Promise, S = "process" == f(A), C = function() {}, j = i = b.f, P = !!function() {
            try {
                var t = O.resolve(1), e = (t.constructor = {})[n("dSzd")("species")] = function(t) {
                    t(C, C);
                };
                return (S || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== T.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
            } catch (t) {}
        }(), R = function(t) {
            var e;
            return !(!h(t) || "function" != typeof (e = t.then)) && e;
        }, D = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m(function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                        var n, o, a, s = i ? e.ok : e.fail, u = e.resolve, c = e.reject, f = e.domain;
                        try {
                            s ? (i || (2 == t._h && N(t), t._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), 
                            f && (f.exit(), a = !0)), n === e.promise ? c(E("Promise-chain cycle")) : (o = R(n)) ? o.call(n, u, c) : u(n)) : c(r);
                        } catch (t) {
                            f && !a && f.exit(), c(t);
                        }
                    }; n.length > o; ) a(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && I(t);
                });
            }
        }, I = function(t) {
            g.call(u, function() {
                var e, n, r, i = t._v, o = M(t);
                if (o && (e = _(function() {
                    S ? A.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i);
                }), t._h = S || M(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v;
            });
        }, M = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
        }, N = function(t) {
            g.call(u, function() {
                var e;
                S ? A.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                });
            });
        }, L = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), 
            D(e, !0));
        }, F = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw E("Promise can't be resolved itself");
                    (e = R(t)) ? m(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(F, r, 1), c(L, r, 1));
                        } catch (t) {
                            L.call(r, t);
                        }
                    }) : (n._v = t, n._s = 1, D(n, !1));
                } catch (t) {
                    L.call({
                        _w: n,
                        _d: !1
                    }, t);
                }
            }
        };
        P || (O = function(t) {
            d(this, O, "Promise", "_h"), p(t), r.call(this);
            try {
                t(c(F, this, 1), c(L, this, 1));
            } catch (t) {
                L.call(this, t);
            }
        }, (r = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }).prototype = n("xH/j")(O.prototype, {
            then: function(t, e) {
                var n = j(y(this, O));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
                n.domain = S ? A.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), 
                n.promise;
            },
            catch: function(t) {
                return this.then(void 0, t);
            }
        }), o = function() {
            var t = new r();
            this.promise = t, this.resolve = c(F, t, 1), this.reject = c(L, t, 1);
        }, b.f = j = function(t) {
            return t === O || t === a ? new o(t) : i(t);
        }), l(l.G + l.W + l.F * !P, {
            Promise: O
        }), n("e6n0")(O, "Promise"), n("bRrM")("Promise"), a = n("FeBl").Promise, l(l.S + l.F * !P, "Promise", {
            reject: function(t) {
                var e = j(this);
                return (0, e.reject)(t), e.promise;
            }
        }), l(l.S + l.F * (s || !P), "Promise", {
            resolve: function(t) {
                return x(s && this === a ? O : this, t);
            }
        }), l(l.S + l.F * !(P && n("dY0y")(function(t) {
            O.all(t).catch(C);
        })), "Promise", {
            all: function(t) {
                var e = this, n = j(e), r = n.resolve, i = n.reject, o = _(function() {
                    var n = [], o = 0, a = 1;
                    v(t, !1, function(t) {
                        var s = o++, u = !1;
                        n.push(void 0), a++, e.resolve(t).then(function(t) {
                            u || (u = !0, n[s] = t, --a || r(n));
                        }, i);
                    }), --a || r(n);
                });
                return o.e && i(o.v), n.promise;
            },
            race: function(t) {
                var e = this, n = j(e), r = n.reject, i = _(function() {
                    v(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r);
                    });
                });
                return i.e && r(i.v), n.promise;
            }
        });
    },
    Cdx3: function(t, e, n) {
        var r = n("sB3e"), i = n("lktj");
        n("uqUo")("keys", function() {
            return function(t) {
                return i(r(t));
            };
        });
    },
    Cskv: function(t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function(t) {
            return this.__data__.set(t, n), this;
        };
    },
    CzSr: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = o(n("L6bb")), i = o(n("CG4Y"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.default = function(t) {
            var e = t.apiV2UrlPrefix, n = t.isProd;
            return function(t) {
                var o = JSON.stringify(t), a = "n8y1uDRdo4ywbBvw||web||com.shanbay.web||" + o + "||47vvXYLf7Dts33NJN54RtlziMhFswNsV", s = {
                    app_key: "n8y1uDRdo4ywbBvw",
                    field_data: o,
                    signature: (0, r.default)(a)
                };
                if (n) {
                    var u = e + "/logbay/log/";
                    return (0, i.default)(u, {
                        method: "POST",
                        body: s
                    });
                }
                return console.log(s), Promise.resolve();
            };
        };
    },
    D1Va: function(t, e, n) {
        "use strict";
        t.exports = o;
        var r = n("DsFX"), i = n("jOgh");
        function o(t) {
            if (!(this instanceof o)) return new o(t);
            r.call(this, t), this._transformState = {
                afterTransform: function(t, e) {
                    var n = this._transformState;
                    n.transforming = !1;
                    var r = n.writecb;
                    if (!r) return this.emit("error", new Error("write callback called multiple times"));
                    n.writechunk = null, n.writecb = null, null != e && this.push(e), r(t);
                    var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                }.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), 
            "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", a);
        }
        function a() {
            var t = this;
            "function" == typeof this._flush ? this._flush(function(e, n) {
                s(t, e, n);
            }) : s(this, null, null);
        }
        function s(t, e, n) {
            if (e) return t.emit("error", e);
            if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
            if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
            return t.push(null);
        }
        i.inherits = n("LC74"), i.inherits(o, r), o.prototype.push = function(t, e) {
            return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e);
        }, o.prototype._transform = function(t, e, n) {
            throw new Error("_transform() is not implemented");
        }, o.prototype._write = function(t, e, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
            }
        }, o.prototype._read = function(t) {
            var e = this._transformState;
            null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
        }, o.prototype._destroy = function(t, e) {
            var n = this;
            r.prototype._destroy.call(this, t, function(t) {
                e(t), n.emit("close");
            });
        };
    },
    D2L2: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e);
        };
    },
    D4CW: function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, i = function(t) {
            switch (void 0 === t ? "undefined" : r(t)) {
              case "string":
                return t;

              case "boolean":
                return t ? "true" : "false";

              case "number":
                return isFinite(t) ? t : "";

              default:
                return "";
            }
        };
        function o(t) {
            if ("string" == typeof t) return t;
            var e = t.path, n = function(t, e, n, o) {
                return e = e || "&", n = n || "=", null === t && (t = void 0), "object" === (void 0 === t ? "undefined" : r(t)) ? Object.keys(t).map(function(r) {
                    var o = i(r) + n;
                    return Array.isArray(t[r]) ? t[r].map(function(t) {
                        return o + i(t);
                    }).join(e) : o + i(t[r]);
                }).filter(Boolean).join(e) : o ? i(o) + n + i(t) : "";
            }(t.query);
            return n ? e + "?" + n : e;
        }
        function a(t, e, n, r) {
            var i = {
                url: o(t),
                complete: e,
                fail: n,
                success: r
            };
            t.isTab ? wx.switchTab(i) : t.reLaunch ? wx.reLaunch(i) : wx.navigateTo(i);
        }
        function s(t, e, n, r) {
            var i = o(t);
            wx.redirectTo({
                url: i,
                complete: e,
                fail: n,
                success: r
            });
        }
        function u(t) {
            wx.navigateBack({
                delta: t
            });
        }
        function c() {
            wx.navigateBack();
        }
        var f = void 0, l = {
            install: function(t) {
                if (!this.installed || f !== t) {
                    this.installed = !0, f = t;
                    var e = {
                        mode: "history",
                        push: a,
                        replace: s,
                        go: u,
                        back: c
                    };
                    t.mixin({
                        onLoad: function() {
                            var t = this.$root.$mp;
                            this._route = function(t) {
                                var e = t || {}, n = e.page && e.page.route;
                                return {
                                    path: "/" + n,
                                    params: {},
                                    query: e.query,
                                    hash: "",
                                    fullPath: o({
                                        path: "/" + n,
                                        query: e.query
                                    }),
                                    name: n && n.replace(/\/(\w)/g, function(t, e) {
                                        return e.toUpperCase();
                                    })
                                };
                            }(t);
                        },
                        onShow: function() {
                            e.app = this, e.currentRoute = this._route;
                        }
                    }), Object.defineProperty(t.prototype, "$router", {
                        get: function() {
                            return e;
                        }
                    }), Object.defineProperty(t.prototype, "$route", {
                        get: function() {
                            return this._route;
                        }
                    });
                }
            }
        };
        e.a = l;
    },
    D9eU: function(t, e, n) {
        "use strict";
        n.d(e, "t", function() {
            return o;
        }), n.d(e, "g", function() {
            return a;
        }), n.d(e, "A", function() {
            return s;
        }), n.d(e, "n", function() {
            return u;
        }), n.d(e, "a", function() {
            return c;
        }), n.d(e, "y", function() {
            return f;
        }), n.d(e, "x", function() {
            return l;
        }), n.d(e, "p", function() {
            return h;
        }), n.d(e, "s", function() {
            return p;
        }), n.d(e, "r", function() {
            return d;
        }), n.d(e, "q", function() {
            return v;
        }), n.d(e, "i", function() {
            return y;
        }), n.d(e, "w", function() {
            return g;
        }), n.d(e, "v", function() {
            return m;
        }), n.d(e, "m", function() {
            return b;
        }), n.d(e, "j", function() {
            return _;
        }), n.d(e, "e", function() {
            return w;
        }), n.d(e, "d", function() {
            return x;
        }), n.d(e, "z", function() {
            return E;
        }), n.d(e, "l", function() {
            return A;
        }), n.d(e, "k", function() {
            return k;
        }), n.d(e, "c", function() {
            return T;
        }), n.d(e, "o", function() {
            return O;
        }), n.d(e, "h", function() {
            return S;
        }), n.d(e, "b", function() {
            return C;
        }), n.d(e, "f", function() {
            return j;
        }), n.d(e, "u", function() {
            return P;
        });
        var r = n("/WWA"), i = n("Vo7i"), o = function(t) {
            return Object(i.a)(r.c + "/abc/words/senses", {
                data: {
                    vocabulary_content: t
                },
                isHideLoading: !0
            });
        }, a = function(t) {
            return Object(i.a)(r.c + "/reading/articles/" + t, {
                isHideLoading: !0
            });
        }, s = function(t, e) {
            return Object(i.a)(r.c + "/reading/articles/" + t, {
                method: "PUT",
                body: e,
                isHideLoading: !0
            });
        }, u = function(t) {
            return Object(i.a)(r.c + "/reading/bilingual", {
                data: {
                    sentence_id: t
                },
                isHideLoading: !0
            });
        }, c = function(t) {
            return Object(i.a)(r.c + "/wordscollection/words_check", {
                data: {
                    vocab_ids: t
                },
                isHideLoading: !0
            });
        }, f = function(t) {
            return Object(i.a)(r.c + "/abc/words/vocabularies/" + t + "/examples", {
                isHideLoading: !0
            });
        }, l = function() {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses", {
                data: {
                    page: 1,
                    ipp: 20
                },
                isHideLoading: !0
            });
        }, h = function(t) {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses/" + t, {
                isHideLoading: !0
            });
        }, p = function(t) {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses/" + t + "/statistics", {
                isHideLoading: !0
            });
        }, d = function(t, e) {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses/" + t + "/month_stats", {
                data: {
                    month: e
                },
                isHideLoading: !0
            });
        }, v = function(t, e) {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses/" + t + "/articles/" + e, {
                isHideLoading: !0
            });
        }, y = function(t) {
            return Object(i.a)(r.c + "/bookcourse/articles/" + t + "/introduction", {
                isHideLoading: !0
            });
        }, g = function(t, e) {
            return Object(i.a)(r.c + "/bookcourse/articles/" + t + "/questions", {
                data: {
                    user_book_course_id: e
                },
                isHideLoading: !0
            });
        }, m = function(t) {
            return Object(i.a)(r.c + "/bookcourse/articles/" + t + "/original_sentences", {
                isHideLoading: !0
            });
        }, b = function(t) {
            return Object(i.a)(r.c + "/bookcourse/original_sentences/" + t, {
                isHideLoading: !0
            });
        }, _ = function(t) {
            return Object(i.a)(r.c + "/bookcourse/articles/" + t + "/summary", {
                isHideLoading: !0
            });
        }, w = function(t) {
            return Object(i.a)(r.c + "/bookcourse/user_article_questions", {
                method: "POST",
                body: t,
                isHideLoading: !0
            });
        }, x = function(t, e) {
            return Object(i.a)(r.c + "/bookcourse/user_book_courses/" + t + "/progress", {
                method: "POST",
                body: e,
                isHideLoading: !0
            });
        }, E = function(t) {
            return Object(i.a)(r.c + "/imageb/webview/capture", {
                data: t,
                isHideLoading: !0
            });
        }, A = function(t) {
            return Object(i.a)(r.c + "/bookcourse/user_article_courses/" + t + "/share_info", {
                isHideLoading: !0
            });
        }, k = function() {
            return Object(i.a)(r.c + "/uc/checkin/days_num", {
                isHideLoading: !0
            });
        }, T = function(t) {
            return Object(i.a)(r.c + "/bookcourse/satisfaction", {
                method: "POST",
                body: t,
                isHideLoading: !0
            });
        }, O = function(t, e) {
            return Object(i.a)(r.c + "/bookcourse/satisfaction", {
                data: {
                    user_book_course_id: t,
                    article_id: e
                },
                isHideLoading: !0
            });
        }, S = function(t) {
            return Object(i.a)(r.c + "/reading/articles/" + t + "/audio", {
                isHideLoading: !0
            });
        }, C = function(t) {
            return Object(i.a)(r.c + "/news/words", {
                method: "POST",
                body: t,
                isHideLoading: !0
            });
        }, j = function(t) {
            return Object(i.a)(r.c + "/bookcourse/reward_apps", {
                method: "POST",
                body: t,
                isHideLoading: !0
            });
        }, P = function(t) {
            return Object(i.a)(r.c + "/bookcourse/articles/" + t + "/applications", {
                isHideLoading: !0
            });
        };
    },
    Dc0G: function(t, e, n) {
        (function(t) {
            var r = n("blYT"), i = "object" == typeof e && e && !e.nodeType && e, o = i && "object" == typeof t && t && !t.nodeType && t, a = o && o.exports === i && r.process, s = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util");
                } catch (t) {}
            }();
            t.exports = s;
        }).call(e, n("3IRH")(t));
    },
    Dd8w: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("woOf"));
        e.default = r.default || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        };
    },
    "Dpr/": function(t, e) {},
    DsFX: function(t, e, n) {
        "use strict";
        var r = n("ypnx"), i = Object.keys || function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
        };
        t.exports = l;
        var o = n("jOgh");
        o.inherits = n("LC74");
        var a = n("Rt1F"), s = n("7dSG");
        o.inherits(l, a);
        for (var u = i(s.prototype), c = 0; c < u.length; c++) {
            var f = u[c];
            l.prototype[f] || (l.prototype[f] = s.prototype[f]);
        }
        function l(t) {
            if (!(this instanceof l)) return new l(t);
            a.call(this, t), s.call(this, t), t && !1 === t.readable && (this.readable = !1), 
            t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), 
            this.once("end", h);
        }
        function h() {
            this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this);
        }
        function p(t) {
            t.end();
        }
        Object.defineProperty(l.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark;
            }
        }), Object.defineProperty(l.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
            },
            set: function(t) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, 
                this._writableState.destroyed = t);
            }
        }), l.prototype._destroy = function(t, e) {
            this.push(null), this.end(), r.nextTick(e, t);
        };
    },
    DuR2: function(t, e) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    Dv2r: function(t, e, n) {
        var r = n("pTUa");
        t.exports = function(t, e) {
            var n = r(this, t), i = n.size;
            return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
        };
    },
    E4Hj: function(t, e) {
        t.exports = function(t) {
            return this.__data__.get(t);
        };
    },
    EGZi: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            };
        };
    },
    EHRO: function(t, e, n) {
        var r = n("NkRn"), i = n("qwTf"), o = n("22B7"), a = n("FhcP"), s = n("WFiI"), u = n("octw"), c = 1, f = 2, l = "[object Boolean]", h = "[object Date]", p = "[object Error]", d = "[object Map]", v = "[object Number]", y = "[object RegExp]", g = "[object Set]", m = "[object String]", b = "[object Symbol]", _ = "[object ArrayBuffer]", w = "[object DataView]", x = r ? r.prototype : void 0, E = x ? x.valueOf : void 0;
        t.exports = function(t, e, n, r, x, A, k) {
            switch (n) {
              case w:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;

              case _:
                return !(t.byteLength != e.byteLength || !A(new i(t), new i(e)));

              case l:
              case h:
              case v:
                return o(+t, +e);

              case p:
                return t.name == e.name && t.message == e.message;

              case y:
              case m:
                return t == e + "";

              case d:
                var T = s;

              case g:
                var O = r & c;
                if (T || (T = u), t.size != e.size && !O) return !1;
                var S = k.get(t);
                if (S) return S == e;
                r |= f, k.set(t, e);
                var C = a(T(t), T(e), r, x, A, k);
                return k.delete(t), C;

              case b:
                if (E) return E.call(t) == E.call(e);
            }
            return !1;
        };
    },
    EKta: function(t, e, n) {
        "use strict";
        e.byteLength = function(t) {
            var e = c(t), n = e[0], r = e[1];
            return 3 * (n + r) / 4 - r;
        }, e.toByteArray = function(t) {
            for (var e, n = c(t), r = n[0], a = n[1], s = new o(function(t, e, n) {
                return 3 * (e + n) / 4 - n;
            }(0, r, a)), u = 0, f = a > 0 ? r - 4 : r, l = 0; l < f; l += 4) e = i[t.charCodeAt(l)] << 18 | i[t.charCodeAt(l + 1)] << 12 | i[t.charCodeAt(l + 2)] << 6 | i[t.charCodeAt(l + 3)], 
            s[u++] = e >> 16 & 255, s[u++] = e >> 8 & 255, s[u++] = 255 & e;
            2 === a && (e = i[t.charCodeAt(l)] << 2 | i[t.charCodeAt(l + 1)] >> 4, s[u++] = 255 & e);
            1 === a && (e = i[t.charCodeAt(l)] << 10 | i[t.charCodeAt(l + 1)] << 4 | i[t.charCodeAt(l + 2)] >> 2, 
            s[u++] = e >> 8 & 255, s[u++] = 255 & e);
            return s;
        }, e.fromByteArray = function(t) {
            for (var e, n = t.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(l(t, a, a + 16383 > s ? s : a + 16383));
            1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], 
            o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
            return o.join("");
        };
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], 
        i[a.charCodeAt(s)] = s;
        function c(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = t.indexOf("=");
            return -1 === n && (n = e), [ n, n === e ? 0 : 4 - n % 4 ];
        }
        function f(t) {
            return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
        }
        function l(t, e, n) {
            for (var r, i = [], o = e; o < n; o += 3) r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), 
            i.push(f(r));
            return i.join("");
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
    },
    EqBC: function(t, e, n) {
        "use strict";
        var r = n("kM2E"), i = n("FeBl"), o = n("7KvD"), a = n("t8x9"), s = n("fJUb");
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = a(this, i.Promise || o.Promise), n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return s(e, t()).then(function() {
                        return n;
                    });
                } : t, n ? function(n) {
                    return s(e, t()).then(function() {
                        throw n;
                    });
                } : t);
            }
        });
    },
    EqjI: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    EuP9: function(t, e, n) {
        "use strict";
        (function(t) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var r = n("EKta"), i = n("ujcs"), o = n("sOR5");
            function a() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function s(t, e) {
                if (a() < e) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), 
                t.length = e), t;
            }
            function u(t, e, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, t);
                }
                return c(this, t, e, n);
            }
            function c(t, e, n, r) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                    if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                    u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e);
                    return t;
                }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | d(e, n), i = (t = s(t, r)).write(e, n);
                    i !== r && (t = t.slice(0, i));
                    return t;
                }(t, e, n) : function(t, e) {
                    if (u.isBuffer(e)) {
                        var n = 0 | p(e.length);
                        return 0 === (t = s(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(t) {
                            return t != t;
                        }(e.length) ? s(t, 0) : h(t, e);
                        if ("Buffer" === e.type && o(e.data)) return h(t, e.data);
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                }(t, e);
            }
            function f(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative');
            }
            function l(t, e) {
                if (f(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                return t;
            }
            function h(t, e) {
                var n = e.length < 0 ? 0 : 0 | p(e.length);
                t = s(t, n);
                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                return t;
            }
            function p(t) {
                if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | t;
            }
            function d(t, e) {
                if (u.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1; ;) switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;

                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return U(t).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;

                  case "hex":
                    return n >>> 1;

                  case "base64":
                    return K(t).length;

                  default:
                    if (r) return U(t).length;
                    e = ("" + e).toLowerCase(), r = !0;
                }
            }
            function v(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r;
            }
            function y(t, e, n, r, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
                n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (i) return -1;
                    n = t.length - 1;
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0;
                }
                if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, i);
                if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [ e ], n, r, i);
                throw new TypeError("val must be string, number or Buffer");
            }
            function g(t, e, n, r, i) {
                var o, a = 1, s = t.length, u = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    a = 2, s /= 2, u /= 2, n /= 2;
                }
                function c(t, e) {
                    return 1 === a ? t[e] : t.readUInt16BE(e * a);
                }
                if (i) {
                    var f = -1;
                    for (o = n; o < s; o++) if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                        if (-1 === f && (f = o), o - f + 1 === u) return f * a;
                    } else -1 !== f && (o -= o - f), f = -1;
                } else for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                    for (var l = !0, h = 0; h < u; h++) if (c(t, o + h) !== c(e, h)) {
                        l = !1;
                        break;
                    }
                    if (l) return o;
                }
                return -1;
            }
            function m(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = e.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(e.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    t[n + a] = s;
                }
                return a;
            }
            function b(t, e, n, r) {
                return H(U(e, t.length - n), t, n, r);
            }
            function _(t, e, n, r) {
                return H(function(t) {
                    for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                    return e;
                }(e), t, n, r);
            }
            function w(t, e, n, r) {
                return _(t, e, n, r);
            }
            function x(t, e, n, r) {
                return H(K(e), t, n, r);
            }
            function E(t, e, n, r) {
                return H(function(t, e) {
                    for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a), 
                    r = n >> 8, i = n % 256, o.push(i), o.push(r);
                    return o;
                }(e, t.length - n), t, n, r);
            }
            function A(t, e, n) {
                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
            }
            function k(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], i = e; i < n; ) {
                    var o, a, s, u, c = t[i], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + l <= n) switch (l) {
                      case 1:
                        c < 128 && (f = c);
                        break;

                      case 2:
                        128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
                        break;

                      case 3:
                        o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                        break;

                      case 4:
                        o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u);
                    }
                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), 
                    f = 56320 | 1023 & f), r.push(f), i += l;
                }
                return function(t) {
                    var e = t.length;
                    if (e <= T) return String.fromCharCode.apply(String, t);
                    var n = "", r = 0;
                    for (;r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += T));
                    return n;
                }(r);
            }
            e.Buffer = u, e.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return u.alloc(+t);
            }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                } catch (t) {
                    return !1;
                }
            }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) {
                return t.__proto__ = u.prototype, t;
            }, u.from = function(t, e, n) {
                return c(null, t, e, n);
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, 
            "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })), u.alloc = function(t, e, n) {
                return function(t, e, n, r) {
                    return f(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e);
                }(null, t, e, n);
            }, u.allocUnsafe = function(t) {
                return l(null, t);
            }, u.allocUnsafeSlow = function(t) {
                return l(null, t);
            }, u.isBuffer = function(t) {
                return !(null == t || !t._isBuffer);
            }, u.compare = function(t, e) {
                if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) if (t[i] !== e[i]) {
                    n = t[i], r = e[i];
                    break;
                }
                return n < r ? -1 : r < n ? 1 : 0;
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;

                  default:
                    return !1;
                }
            }, u.concat = function(t, e) {
                if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                var n;
                if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var r = u.allocUnsafe(e), i = 0;
                for (n = 0; n < t.length; ++n) {
                    var a = t[n];
                    if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(r, i), i += a.length;
                }
                return r;
            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                return this;
            }, u.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                return this;
            }, u.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), 
                v(this, e + 3, e + 4);
                return this;
            }, u.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : function(t, e, n) {
                    var r = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ;) switch (t) {
                      case "hex":
                        return C(this, e, n);

                      case "utf8":
                      case "utf-8":
                        return k(this, e, n);

                      case "ascii":
                        return O(this, e, n);

                      case "latin1":
                      case "binary":
                        return S(this, e, n);

                      case "base64":
                        return A(this, e, n);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return j(this, e, n);

                      default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0;
                    }
                }.apply(this, arguments);
            }, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t);
            }, u.prototype.inspect = function() {
                var t = "", n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
                this.length > n && (t += " ... ")), "<Buffer " + t + ">";
            }, u.prototype.compare = function(t, e, n, r, i) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), 
                void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && e >= n) return 0;
                if (r >= i) return -1;
                if (e >= n) return 1;
                if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
                for (var o = i - r, a = n - e, s = Math.min(o, a), c = this.slice(r, i), f = t.slice(e, n), l = 0; l < s; ++l) if (c[l] !== f[l]) {
                    o = c[l], a = f[l];
                    break;
                }
                return o < a ? -1 : a < o ? 1 : 0;
            }, u.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n);
            }, u.prototype.indexOf = function(t, e, n) {
                return y(this, t, e, n, !0);
            }, u.prototype.lastIndexOf = function(t, e, n) {
                return y(this, t, e, n, !1);
            }, u.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, 
                n = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                }
                var i = this.length - e;
                if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1; ;) switch (r) {
                  case "hex":
                    return m(this, t, e, n);

                  case "utf8":
                  case "utf-8":
                    return b(this, t, e, n);

                  case "ascii":
                    return _(this, t, e, n);

                  case "latin1":
                  case "binary":
                    return w(this, t, e, n);

                  case "base64":
                    return x(this, t, e, n);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return E(this, t, e, n);

                  default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0;
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            var T = 4096;
            function O(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                return r;
            }
            function S(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                return r;
            }
            function C(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = e; o < n; ++o) i += B(t[o]);
                return i;
            }
            function j(t, e, n) {
                for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i;
            }
            function P(t, e, n) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
            }
            function R(t, e, n, r, i, o) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length) throw new RangeError("Index out of range");
            }
            function D(t, e, n, r) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
            }
            function I(t, e, n, r) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
            }
            function M(t, e, n, r, i, o) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range");
            }
            function N(t, e, n, r, o) {
                return o || M(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
            }
            function L(t, e, n, r, o) {
                return o || M(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
            }
            u.prototype.slice = function(t, e) {
                var n, r = this.length;
                if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = u.prototype; else {
                    var i = e - t;
                    n = new u(i, void 0);
                    for (var o = 0; o < i; ++o) n[o] = this[o + t];
                }
                return n;
            }, u.prototype.readUIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || P(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
                return r;
            }, u.prototype.readUIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || P(t, e, this.length);
                for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); ) r += this[t + --e] * i;
                return r;
            }, u.prototype.readUInt8 = function(t, e) {
                return e || P(t, 1, this.length), this[t];
            }, u.prototype.readUInt16LE = function(t, e) {
                return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
            }, u.prototype.readUInt16BE = function(t, e) {
                return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
            }, u.prototype.readUInt32LE = function(t, e) {
                return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
            }, u.prototype.readUInt32BE = function(t, e) {
                return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
            }, u.prototype.readIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || P(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
            }, u.prototype.readIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || P(t, e, this.length);
                for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); ) o += this[t + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
            }, u.prototype.readInt8 = function(t, e) {
                return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }, u.prototype.readInt16LE = function(t, e) {
                e || P(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n;
            }, u.prototype.readInt16BE = function(t, e) {
                e || P(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n;
            }, u.prototype.readInt32LE = function(t, e) {
                return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
            }, u.prototype.readInt32BE = function(t, e) {
                return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
            }, u.prototype.readFloatLE = function(t, e) {
                return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4);
            }, u.prototype.readFloatBE = function(t, e) {
                return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4);
            }, u.prototype.readDoubleLE = function(t, e) {
                return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8);
            }, u.prototype.readDoubleBE = function(t, e) {
                return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8);
            }, u.prototype.writeUIntLE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1, o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256); ) this[e + o] = t / i & 255;
                return e + n;
            }, u.prototype.writeUIntBE = function(t, e, n, r) {
                (t = +t, e |= 0, n |= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1, o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
                return e + n;
            }, u.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                this[e] = 255 & t, e + 1;
            }, u.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
            }, u.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
            }, u.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), 
                e + 4;
            }, u.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), 
                e + 4;
            }, u.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    R(this, t, e, n, i - 1, -i);
                }
                var o = 0, a = 1, s = 0;
                for (this[e] = 255 & t; ++o < n && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), 
                this[e + o] = (t / a >> 0) - s & 255;
                return e + n;
            }, u.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    R(this, t, e, n, i - 1, -i);
                }
                var o = n - 1, a = 1, s = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), 
                this[e + o] = (t / a >> 0) - s & 255;
                return e + n;
            }, u.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
            }, u.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
            }, u.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
            }, u.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), 
                e + 4;
            }, u.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
            }, u.prototype.writeFloatLE = function(t, e, n) {
                return N(this, t, e, !0, n);
            }, u.prototype.writeFloatBE = function(t, e, n) {
                return N(this, t, e, !1, n);
            }, u.prototype.writeDoubleLE = function(t, e, n) {
                return L(this, t, e, !0, n);
            }, u.prototype.writeDoubleBE = function(t, e, n) {
                return L(this, t, e, !1, n);
            }, u.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), 
                e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, o = r - n;
                if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                return o;
            }, u.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, 
                    n = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i);
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var o;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                    var a = u.isBuffer(t) ? t : U(new u(t, r).toString()), s = a.length;
                    for (o = 0; o < n - e; ++o) this[o + e] = a[o % s];
                }
                return this;
            };
            var F = /[^+\/0-9A-Za-z-_]/g;
            function B(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }
            function U(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                    if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue;
                            }
                            if (a + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue;
                            }
                            i = n;
                            continue;
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue;
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320);
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n);
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128);
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                    }
                }
                return o;
            }
            function K(t) {
                return r.toByteArray(function(t) {
                    if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                    }(t).replace(F, "")).length < 2) return "";
                    for (;t.length % 4 != 0; ) t += "=";
                    return t;
                }(t));
            }
            function H(t, e, n, r) {
                for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                return i;
            }
        }).call(e, n("DuR2"));
    },
    EwJx: function(t, e, n) {
        !function(e, n) {
            t.exports = n();
        }(window, function() {
            return function(t) {
                var e = {};
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    });
                }, n.r = function(t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            }([ function(t, e, n) {
                "use strict";
                n.r(e);
                var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), i = {}, o = {
                    map: {},
                    mq: [],
                    running: [],
                    MAX_REQUEST: 10,
                    push: function(t) {
                        for (t.t = +new Date(); this.mq.indexOf(t.t) > -1 || this.running.indexOf(t.t) > -1; ) t.t += 10 * Math.random() >> 0;
                        this.mq.push(t.t), this.map[t.t] = t;
                    },
                    next: function() {
                        var t = this;
                        if (0 !== this.mq.length && this.running.length < this.MAX_REQUEST - 1) {
                            var e = this.mq.shift(), n = this.map[e], r = n.complete;
                            return n.complete = function() {
                                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                                t.running.splice(t.running.indexOf(n.t), 1), delete t.map[n.t], r && r.apply(n, i), 
                                t.next();
                            }, this.running.push(n.t), wx.request(n);
                        }
                    },
                    request: function(t) {
                        return t = "string" == typeof (t = t || {}) ? {
                            url: t
                        } : t, this.push(t), this.next();
                    }
                }, a = new (function() {
                    function t() {
                        !function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, t), this.$addons = {}, this.$interceptors = {};
                    }
                    return r(t, [ {
                        key: "$init",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.$initAPI(t, e.noPromiseAPI);
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            "string" == typeof t && this[t] ? (this.$addons[t] = 1, this[t](n)) : this.$addons[t.name] = new t(n);
                        }
                    }, {
                        key: "intercept",
                        value: function(t, e) {
                            this.$interceptors[t] = e;
                        }
                    }, {
                        key: "promisify",
                        value: function() {
                            console.log("promise已经启用");
                        }
                    }, {
                        key: "requestfix",
                        value: function() {
                            console.log("requestfix启用");
                        }
                    }, {
                        key: "$initAPI",
                        value: function(t, e) {
                            var n = this, r = {
                                stopRecord: !0,
                                getRecorderManager: !0,
                                pauseVoice: !0,
                                stopVoice: !0,
                                pauseBackgroundAudio: !0,
                                stopBackgroundAudio: !0,
                                getBackgroundAudioManager: !0,
                                createAudioContext: !0,
                                createInnerAudioContext: !0,
                                createVideoContext: !0,
                                createCameraContext: !0,
                                createMapContext: !0,
                                canIUse: !0,
                                startAccelerometer: !0,
                                stopAccelerometer: !0,
                                startCompass: !0,
                                stopCompass: !0,
                                onBLECharacteristicValueChange: !0,
                                onBLEConnectionStateChange: !0,
                                hideToast: !0,
                                hideLoading: !0,
                                showNavigationBarLoading: !0,
                                hideNavigationBarLoading: !0,
                                navigateBack: !0,
                                createAnimation: !0,
                                pageScrollTo: !0,
                                createSelectorQuery: !0,
                                createCanvasContext: !0,
                                createContext: !0,
                                drawCanvas: !0,
                                hideKeyboard: !0,
                                stopPullDownRefresh: !0,
                                arrayBufferToBase64: !0,
                                base64ToArrayBuffer: !0
                            };
                            if (e) if (Array.isArray(e)) e.forEach(function(t) {
                                return r[t] = !0;
                            }); else for (var a in e) r[a] = e[a];
                            Object.keys(wx).forEach(function(e) {
                                r[e] || "on" === e.substr(0, 2) || /\w+Sync$/.test(e) ? (Object.defineProperty(i, e, {
                                    get: function() {
                                        return function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            return wx[e].apply(wx, n);
                                        };
                                    }
                                }), t[e] = i[e]) : (Object.defineProperty(i, e, {
                                    get: function() {
                                        return function(t) {
                                            if (t = t || {}, n.$interceptors[e] && n.$interceptors[e].config) {
                                                var r = n.$interceptors[e].config.call(n, t);
                                                if (!1 === r) return n.$addons.promisify ? Promise.reject("aborted by interceptor") : void (t.fail && t.fail("aborted by interceptor"));
                                                t = r;
                                            }
                                            if ("request" === e && (t = "string" == typeof t ? {
                                                url: t
                                            } : t), "string" == typeof t) return wx[e](t);
                                            if (n.$addons.promisify) {
                                                var i = void 0, a = new Promise(function(r, a) {
                                                    var s = {};
                                                    [ "fail", "success", "complete" ].forEach(function(i) {
                                                        s[i] = t[i], t[i] = function(t) {
                                                            n.$interceptors[e] && n.$interceptors[e][i] && (t = n.$interceptors[e][i].call(n, t)), 
                                                            "success" === i ? r(t) : "fail" === i && a(t);
                                                        };
                                                    }), n.$addons.requestfix && "request" === e ? o.request(t) : i = wx[e](t);
                                                });
                                                return "uploadFile" !== e && "downloadFile" !== e || (a.progress = function(t) {
                                                    return i.onProgressUpdate(t), a;
                                                }, a.abort = function(t) {
                                                    return t && t(), i.abort(), a;
                                                }), a;
                                            }
                                            var s = {};
                                            if ([ "fail", "success", "complete" ].forEach(function(r) {
                                                s[r] = t[r], t[r] = function(t) {
                                                    n.$interceptors[e] && n.$interceptors[e][r] && (t = n.$interceptors[e][r].call(n, t)), 
                                                    s[r] && s[r].call(n, t);
                                                };
                                            }), !n.$addons.requestfix || "request" !== e) return wx[e](t);
                                            o.request(t);
                                        };
                                    }
                                }), t[e] = i[e]);
                            });
                        }
                    } ]), t;
                }())();
                a.$init(a), a.use("promisify"), a.use("requestfix"), e.default = a;
            } ]);
        });
    },
    EzS2: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAYAAABMfblJAAAAAXNSR0IArs4c6QAAArBJREFUSA3NljuIE1EUhp3JplC2snPIy0KwVEEsFBUEK1cRFBQsxEYFEbGx1EobYyE2Vm5noSC7qK0PTGVhJwEL8wBZFrFREHY3xu8f7x1uJjOTTNgEL0zOf885//nvY+6deFvGaP1+f67T6Zwm9RR4v+d5gWjgb+CPwKVKpfICvCF/VvOygoq12+0TmAcU35WVi9gX4jer1erLrDw/K4jYHeLLcTGK/9bjck3OsuG4oQGcKgjxFkVu89hVWEHkCuyAWWzTI2x8K6qqXHHEVT+p2WIDMQgHcbyHbAf0tFAoXCuXyz8GEk2n2+1u7/V6j+iel4tB/MEcZlAN9d2WJvgBMYmK/BziWZeUhhnoM3hnDK8B71A8184g8rdarX1WDOdqsVi8GgVHAJO7qjTVUK04ZUiQGZ20SeC7QRB8t/1RVrlw7tk88ILF1g4JEtgTBX3/tcXjWt/3Xzm5ex0cwiTBHYowun6pVGqFWTl+4LTFNZSwlktPEpxXAnuwAXHdTR4Hw1kT1+SGtVxekqAb33Q8c8HwHPL67mQpLjOd3TzHWJJ5+toHvQDRWcUfYdcfw9r/4/i0LT/Bb4FN8ONarfbV01nB+U4iSppWQ+MXGke0pPVpi2kSRqPuo3xgWrOK15WWj/LWeGBafWnNTVD8EyNdFI8CFzFDt4liaU0vjb0V0nIiP0IN/kocxYYHG8Eifz3eYMMvS5SYAXKdQ+7JuhVTTfC6fBn1h0K5BPnIrsUrJPniOW4/lyAzOueShZN88Ry3n0uQvbrAV/2GLSAsn+2PY3MJmoK6/mxzsfVl2kkEMwuOCv7/guxZxc7CxdY3yuY6+CrGW6n/nA9N4euI5lql3IJGaGKjr4VGPJMmLS1HcyZq/0SamuH9WQlKy+f2f8IFfInOZ015s8VVU7WlIa2/dYAANbqAUVkAAAAASUVORK5CYII=";
    },
    FCuZ: function(t, e, n) {
        var r = n("uIr7"), i = n("NGEn");
        t.exports = function(t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    FeBl: function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n);
    },
    FhcP: function(t, e, n) {
        var r = n("7YkW"), i = n("2X2u"), o = n("dmQx"), a = 1, s = 2;
        t.exports = function(t, e, n, u, c, f) {
            var l = n & a, h = t.length, p = e.length;
            if (h != p && !(l && p > h)) return !1;
            var d = f.get(t);
            if (d && f.get(e)) return d == e;
            var v = -1, y = !0, g = n & s ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++v < h; ) {
                var m = t[v], b = e[v];
                if (u) var _ = l ? u(b, m, v, e, t, f) : u(m, b, v, t, e, f);
                if (void 0 !== _) {
                    if (_) continue;
                    y = !1;
                    break;
                }
                if (g) {
                    if (!i(e, function(t, e) {
                        if (!o(g, e) && (m === t || c(m, t, n, u, f))) return g.push(e);
                    })) {
                        y = !1;
                        break;
                    }
                } else if (m !== b && !c(m, b, n, u, f)) {
                    y = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), y;
        };
    },
    Fkvj: function(t, e, n) {
        var r = n("bJWQ"), i = n("PqYH"), o = n("i4ON"), a = n("jD7S"), s = n("py9u"), u = n("mKB/"), c = n("hrPF"), f = n("Nkkh"), l = n("1QDk"), h = n("MoMe"), p = n("xond"), d = n("gHOb"), v = n("UfSK"), y = n("5/Qr"), g = n("WQFf"), m = n("NGEn"), b = n("ggOT"), _ = n("dwsC"), w = n("yCNF"), x = n("SGXn"), E = n("ktak"), A = 1, k = 2, T = 4, O = "[object Arguments]", S = "[object Function]", C = "[object GeneratorFunction]", j = "[object Object]", P = {};
        P[O] = P["[object Array]"] = P["[object ArrayBuffer]"] = P["[object DataView]"] = P["[object Boolean]"] = P["[object Date]"] = P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Map]"] = P["[object Number]"] = P[j] = P["[object RegExp]"] = P["[object Set]"] = P["[object String]"] = P["[object Symbol]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, 
        P["[object Error]"] = P[S] = P["[object WeakMap]"] = !1, t.exports = function t(e, n, R, D, I, M) {
            var N, L = n & A, F = n & k, B = n & T;
            if (R && (N = I ? R(e, D, I, M) : R(e)), void 0 !== N) return N;
            if (!w(e)) return e;
            var U = m(e);
            if (U) {
                if (N = v(e), !L) return c(e, N);
            } else {
                var K = d(e), H = K == S || K == C;
                if (b(e)) return u(e, L);
                if (K == j || K == O || H && !I) {
                    if (N = F || H ? {} : g(e), !L) return F ? l(e, s(N, e)) : f(e, a(N, e));
                } else {
                    if (!P[K]) return I ? e : {};
                    N = y(e, K, L);
                }
            }
            M || (M = new r());
            var Y = M.get(e);
            if (Y) return Y;
            if (M.set(e, N), x(e)) return e.forEach(function(r) {
                N.add(t(r, n, R, r, e, M));
            }), N;
            if (_(e)) return e.forEach(function(r, i) {
                N.set(i, t(r, n, R, i, e, M));
            }), N;
            var V = B ? F ? p : h : F ? keysIn : E, G = U ? void 0 : V(e);
            return i(G || e, function(r, i) {
                G && (r = e[i = r]), o(N, i, t(r, n, R, i, e, M));
            }), N;
        };
    },
    Fp5l: function(t, e, n) {
        var r = n("bGc4"), i = n("UnEC");
        t.exports = function(t) {
            return i(t) && r(t);
        };
    },
    G0Wc: function(t, e, n) {
        var r = n("yCNF"), i = n("HT7L"), o = n("8gK5"), a = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t)) return o(t);
            var e = i(t), n = [];
            for (var s in t) ("constructor" != s || !e && a.call(t, s)) && n.push(s);
            return n;
        };
    },
    G2xm: function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t);
        };
    },
    G8ar: function(t, e, n) {
        var r = n("cdq7"), i = n("8++/"), o = n("i6nN");
        t.exports = function(t, e, n) {
            return e == e ? o(t, e, n) : r(t, i, n);
        };
    },
    GH0O: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            return function(e) {
                return new Promise(function(n, r) {
                    t(Object.assign({}, e, {
                        success: function(t) {
                            t && t.statusCode && 200 !== t.statusCode ? r(t.data) : n(t);
                        },
                        fail: r
                    }));
                });
            };
        };
    },
    Gu7T: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("c/Tr"));
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return (0, r.default)(t);
        };
    },
    H9Sy: function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("exGp"), a = n.n(o), s = n("IcnI"), u = n("/WWA"), c = n("Apws"), f = n("EwJx"), l = n.n(f);
        e.a = {
            store: s.a,
            props: [ "onLogin", "content" ],
            data: function() {
                return {
                    loading: !1
                };
            },
            methods: {
                handleGetUserInfo: function(t) {
                    var e = this;
                    return a()(i.a.mark(function n() {
                        var r, o, a, f;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e.loading = !0, r = t.mp.detail, r.userInfo) {
                                    n.next = 7;
                                    break;
                                }
                                return wx.showToast({
                                    title: "需要授权才可以使用哦",
                                    icon: "none"
                                }), e.loading = !1, n.abrupt("return");

                              case 7:
                                return n.next = 9, l.a.login();

                              case 9:
                                return o = n.sent, a = o.code, n.next = 13, c.a.register({
                                    code: a,
                                    app_name: u.d,
                                    data: r
                                });

                              case 13:
                                return n.next = 15, c.a.getUserDetail();

                              case 15:
                                f = n.sent, c.a.sensorLogin(f.id), wx.setStorageSync("userDetail", f), e.loading = !1, 
                                s.a.commit("setLoginStatus", {
                                    isLogin: !0
                                }), e.$emit("onLogin");

                              case 21:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            }
        };
    },
    HT7L: function(t, e) {
        var n = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || n);
        };
    },
    HTtT: function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("d7EF"), a = n.n(o), s = n("exGp"), u = n.n(s), c = n("Dd8w"), f = n.n(c), l = n("MPG0"), h = n("Apws"), p = n("/WWA");
        e.a = {
            props: {
                bookplans: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                scene: {
                    type: Number
                }
            },
            computed: {
                bookplansWithSlicedBooks: function() {
                    return this.bookplans.map(function(t) {
                        return f()({}, t, {
                            books: t.books.slice(0, 2)
                        });
                    });
                }
            },
            methods: {
                nav: function(t) {
                    var e = this;
                    return u()(i.a.mark(function n() {
                        var r, o, s, u, c, f;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, h.a.track({
                                    event_code: "bookplan-homepagelist-click",
                                    event_value: {
                                        bookplan_title: t.title
                                    }
                                });

                              case 2:
                                if (r = "", o = {}, !t.sale_page_ids.length) {
                                    n.next = 13;
                                    break;
                                }
                                return s = a()(t.sale_page_ids, 1), u = s[0], n.next = 8, l.a.getSaleDetail(u);

                              case 8:
                                c = n.sent, (f = c.user_book_plan_id) ? (r = "/pages/planIndex/main", o.id = f) : (r = "/pages/planDetail/main", 
                                o.scene = e.scene, o.planId = t.book_plan_id, o.salePageId = u), n.next = 15;
                                break;

                              case 13:
                                r = "/pages/planLanding/main", o.id = p.e;

                              case 15:
                                e.$router.push({
                                    path: r,
                                    query: o
                                });

                              case 16:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            }
        };
    },
    HbnZ: function(t, e, n) {
        var r = n("bJWQ"), i = n("O1jc"), o = n("rpnb"), a = n("jMi8"), s = n("yCNF"), u = n("t8rQ"), c = n("MMop");
        t.exports = function t(e, n, f, l, h) {
            e !== n && o(n, function(o, u) {
                if (s(o)) h || (h = new r()), a(e, n, u, f, t, l, h); else {
                    var p = l ? l(c(e, u), o, u + "", e, n, h) : void 0;
                    void 0 === p && (p = o), i(e, u, p);
                }
            }, u);
        };
    },
    Hqeg: function(t, e, n) {
        "use strict";
        var r = n("AUpc"), i = n("x+JY");
        var o = function(t) {
            n("Dpr/");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-54eb1df1", null);
        e.a = a.exports;
    },
    Hxdr: function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
            return i;
        };
    },
    ICSD: function(t, e, n) {
        var r = n("ITwD"), i = n("mTAn");
        t.exports = function(t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    IRPJ: function(t, e, n) {
        var r, i, o = n("w/Rp"), a = n("e4p/").isArray;
        function s(t, e, n) {
            return (!n && t.spaces ? "\n" : "") + Array(e + 1).join(t.spaces);
        }
        function u(t, e, n) {
            if (e.ignoreAttributes) return "";
            "attributesFn" in e && (t = e.attributesFn(t, i, r));
            var o, a, u, c, f = [];
            for (o in t) t.hasOwnProperty(o) && null !== t[o] && void 0 !== t[o] && (c = e.noQuotesForNativeAttributes && "string" != typeof t[o] ? "" : '"', 
            a = (a = "" + t[o]).replace(/"/g, "&quot;"), u = "attributeNameFn" in e ? e.attributeNameFn(o, a, i, r) : o, 
            f.push(e.spaces && e.indentAttributes ? s(e, n + 1, !1) : " "), f.push(u + "=" + c + ("attributeValueFn" in e ? e.attributeValueFn(a, o, i, r) : a) + c));
            return t && Object.keys(t).length && e.spaces && e.indentAttributes && f.push(s(e, n, !1)), 
            f.join("");
        }
        function c(t, e, n) {
            return r = t, i = "xml", e.ignoreDeclaration ? "" : "<?xml" + u(t[e.attributesKey], e, n) + "?>";
        }
        function f(t, e, n) {
            if (e.ignoreInstruction) return "";
            var o;
            for (o in t) if (t.hasOwnProperty(o)) break;
            var a = "instructionNameFn" in e ? e.instructionNameFn(o, t[o], i, r) : o;
            if ("object" == typeof t[o]) return r = t, i = a, "<?" + a + u(t[o][e.attributesKey], e, n) + "?>";
            var s = t[o] ? t[o] : "";
            return "instructionFn" in e && (s = e.instructionFn(s, o, i, r)), "<?" + a + (s ? " " + s : "") + "?>";
        }
        function l(t, e) {
            return e.ignoreComment ? "" : "\x3c!--" + ("commentFn" in e ? e.commentFn(t, i, r) : t) + "--\x3e";
        }
        function h(t, e) {
            return e.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in e ? e.cdataFn(t, i, r) : t.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
        }
        function p(t, e) {
            return e.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in e ? e.doctypeFn(t, i, r) : t) + ">";
        }
        function d(t, e) {
            return e.ignoreText ? "" : (t = (t = (t = "" + t).replace(/&amp;/g, "&")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), 
            "textFn" in e ? e.textFn(t, i, r) : t);
        }
        function v(t, e, n, o) {
            return t.reduce(function(t, a) {
                var c = s(e, n, o && !t);
                switch (a.type) {
                  case "element":
                    return t + c + function(t, e, n) {
                        r = t, i = t.name;
                        var o = [], a = "elementNameFn" in e ? e.elementNameFn(t.name, t) : t.name;
                        o.push("<" + a), t[e.attributesKey] && o.push(u(t[e.attributesKey], e, n));
                        var s = t[e.elementsKey] && t[e.elementsKey].length || t[e.attributesKey] && "preserve" === t[e.attributesKey]["xml:space"];
                        return s || (s = "fullTagEmptyElementFn" in e ? e.fullTagEmptyElementFn(t.name, t) : e.fullTagEmptyElement), 
                        s ? (o.push(">"), t[e.elementsKey] && t[e.elementsKey].length && (o.push(v(t[e.elementsKey], e, n + 1)), 
                        r = t, i = t.name), o.push(e.spaces && function(t, e) {
                            var n;
                            if (t.elements && t.elements.length) for (n = 0; n < t.elements.length; ++n) switch (t.elements[n][e.typeKey]) {
                              case "text":
                                if (e.indentText) return !0;
                                break;

                              case "cdata":
                                if (e.indentCdata) return !0;
                                break;

                              case "instruction":
                                if (e.indentInstruction) return !0;
                                break;

                              case "doctype":
                              case "comment":
                              case "element":
                              default:
                                return !0;
                            }
                            return !1;
                        }(t, e) ? "\n" + Array(n + 1).join(e.spaces) : ""), o.push("</" + a + ">")) : o.push("/>"), 
                        o.join("");
                    }(a, e, n);

                  case "comment":
                    return t + c + l(a[e.commentKey], e);

                  case "doctype":
                    return t + c + p(a[e.doctypeKey], e);

                  case "cdata":
                    return t + (e.indentCdata ? c : "") + h(a[e.cdataKey], e);

                  case "text":
                    return t + (e.indentText ? c : "") + d(a[e.textKey], e);

                  case "instruction":
                    var y = {};
                    return y[a[e.nameKey]] = a[e.attributesKey] ? a : a[e.instructionKey], t + (e.indentInstruction ? c : "") + f(y, e, n);
                }
            }, "");
        }
        function y(t, e, n) {
            var r;
            for (r in t) if (t.hasOwnProperty(r)) switch (r) {
              case e.parentKey:
              case e.attributesKey:
                break;

              case e.textKey:
                if (e.indentText || n) return !0;
                break;

              case e.cdataKey:
                if (e.indentCdata || n) return !0;
                break;

              case e.instructionKey:
                if (e.indentInstruction || n) return !0;
                break;

              case e.doctypeKey:
              case e.commentKey:
              default:
                return !0;
            }
            return !1;
        }
        function g(t, e, n, o, a) {
            r = t, i = e;
            var c = "elementNameFn" in n ? n.elementNameFn(e, t) : e;
            if (void 0 === t || null === t || "" === t) return "fullTagEmptyElementFn" in n && n.fullTagEmptyElementFn(e, t) || n.fullTagEmptyElement ? "<" + c + "></" + c + ">" : "<" + c + "/>";
            var f = [];
            if (e) {
                if (f.push("<" + c), "object" != typeof t) return f.push(">" + d(t, n) + "</" + c + ">"), 
                f.join("");
                t[n.attributesKey] && f.push(u(t[n.attributesKey], n, o));
                var l = y(t, n, !0) || t[n.attributesKey] && "preserve" === t[n.attributesKey]["xml:space"];
                if (l || (l = "fullTagEmptyElementFn" in n ? n.fullTagEmptyElementFn(e, t) : n.fullTagEmptyElement), 
                !l) return f.push("/>"), f.join("");
                f.push(">");
            }
            return f.push(m(t, n, o + 1, !1)), r = t, i = e, e && f.push((a ? s(n, o, !1) : "") + "</" + c + ">"), 
            f.join("");
        }
        function m(t, e, n, r) {
            var i, o, u, v = [];
            for (o in t) if (t.hasOwnProperty(o)) for (u = a(t[o]) ? t[o] : [ t[o] ], i = 0; i < u.length; ++i) {
                switch (o) {
                  case e.declarationKey:
                    v.push(c(u[i], e, n));
                    break;

                  case e.instructionKey:
                    v.push((e.indentInstruction ? s(e, n, r) : "") + f(u[i], e, n));
                    break;

                  case e.attributesKey:
                  case e.parentKey:
                    break;

                  case e.textKey:
                    v.push((e.indentText ? s(e, n, r) : "") + d(u[i], e));
                    break;

                  case e.cdataKey:
                    v.push((e.indentCdata ? s(e, n, r) : "") + h(u[i], e));
                    break;

                  case e.doctypeKey:
                    v.push(s(e, n, r) + p(u[i], e));
                    break;

                  case e.commentKey:
                    v.push(s(e, n, r) + l(u[i], e));
                    break;

                  default:
                    v.push(s(e, n, r) + g(u[i], o, e, n, y(u[i], e)));
                }
                r = r && !v.length;
            }
            return v.join("");
        }
        t.exports = function(t, e) {
            e = function(t) {
                var e = o.copyOptions(t);
                return o.ensureFlagExists("ignoreDeclaration", e), o.ensureFlagExists("ignoreInstruction", e), 
                o.ensureFlagExists("ignoreAttributes", e), o.ensureFlagExists("ignoreText", e), 
                o.ensureFlagExists("ignoreComment", e), o.ensureFlagExists("ignoreCdata", e), o.ensureFlagExists("ignoreDoctype", e), 
                o.ensureFlagExists("compact", e), o.ensureFlagExists("indentText", e), o.ensureFlagExists("indentCdata", e), 
                o.ensureFlagExists("indentAttributes", e), o.ensureFlagExists("indentInstruction", e), 
                o.ensureFlagExists("fullTagEmptyElement", e), o.ensureFlagExists("noQuotesForNativeAttributes", e), 
                o.ensureSpacesExists(e), "number" == typeof e.spaces && (e.spaces = Array(e.spaces + 1).join(" ")), 
                o.ensureKeyExists("declaration", e), o.ensureKeyExists("instruction", e), o.ensureKeyExists("attributes", e), 
                o.ensureKeyExists("text", e), o.ensureKeyExists("comment", e), o.ensureKeyExists("cdata", e), 
                o.ensureKeyExists("doctype", e), o.ensureKeyExists("type", e), o.ensureKeyExists("name", e), 
                o.ensureKeyExists("elements", e), o.checkFnExists("doctype", e), o.checkFnExists("instruction", e), 
                o.checkFnExists("cdata", e), o.checkFnExists("comment", e), o.checkFnExists("text", e), 
                o.checkFnExists("instructionName", e), o.checkFnExists("elementName", e), o.checkFnExists("attributeName", e), 
                o.checkFnExists("attributeValue", e), o.checkFnExists("attributes", e), o.checkFnExists("fullTagEmptyElement", e), 
                e;
            }(e);
            var n = [];
            return r = t, i = "_root_", e.compact ? n.push(m(t, e, 0, !0)) : (t[e.declarationKey] && n.push(c(t[e.declarationKey], e, 0)), 
            t[e.elementsKey] && t[e.elementsKey].length && n.push(v(t[e.elementsKey], e, 0, !n.length))), 
            n.join("");
        };
    },
    ITwD: function(t, e, n) {
        var r = n("gGqR"), i = n("eFps"), o = n("yCNF"), a = n("Ai/T"), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, f = u.toString, l = c.hasOwnProperty, h = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t) {
            return !(!o(t) || i(t)) && (r(t) ? h : s).test(a(t));
        };
    },
    Ibhu: function(t, e, n) {
        var r = n("D2L2"), i = n("TcQ7"), o = n("vFc/")(!1), a = n("ax3d")("IE_PROTO");
        t.exports = function(t, e) {
            var n, s = i(t), u = 0, c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (;e.length > u; ) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
            return c;
        };
    },
    IcnI: function(t, e, n) {
        "use strict";
        var r = n("5nAL"), i = n.n(r), o = n("NYxO"), a = n("17x+"), s = n("xTcS"), u = n("WGFR");
        i.a.use(o.a);
        var c = new o.a.Store({
            modules: {
                globalData: a.a,
                groupData: s.a,
                bookplanData: u.a
            }
        });
        e.a = c;
    },
    "Ilb/": function(t, e, n) {
        var r = n("Kzd6");
        t.exports = function(t, e) {
            var n = e ? r(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length);
        };
    },
    JBvZ: function(t, e, n) {
        var r = n("imBK");
        t.exports = function(t) {
            var e = this.__data__, n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    JUs9: function(t, e, n) {
        var r = n("G8ar");
        t.exports = function(t, e) {
            return !(null == t || !t.length) && r(t, e, 0) > -1;
        };
    },
    Kh4W: function(t, e, n) {
        e.f = n("dSzd");
    },
    KmWZ: function(t, e, n) {
        var r = n("duB3");
        t.exports = function() {
            this.__data__ = new r(), this.size = 0;
        };
    },
    KntP: function(t, e, n) {
        "use strict";
        var r = n("olFz"), i = n("9G51");
        var o = function(t) {
            n("NGvV");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-7be8431c", null);
        e.a = a.exports;
    },
    Kzd6: function(t, e, n) {
        var r = n("qwTf");
        t.exports = function(t) {
            var e = new t.constructor(t.byteLength);
            return new r(e).set(new r(t)), e;
        };
    },
    L42u: function(t, e, n) {
        var r, i, o, a = n("+ZMJ"), s = n("knuC"), u = n("RPLV"), c = n("ON07"), f = n("7KvD"), l = f.process, h = f.setImmediate, p = f.clearImmediate, d = f.MessageChannel, v = f.Dispatch, y = 0, g = {}, m = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e();
            }
        }, b = function(t) {
            m.call(t.data);
        };
        h && p || (h = function(t) {
            for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
            return g[++y] = function() {
                s("function" == typeof t ? t : Function(t), e);
            }, r(y), y;
        }, p = function(t) {
            delete g[t];
        }, "process" == n("R9M2")(l) ? r = function(t) {
            l.nextTick(a(m, t, 1));
        } : v && v.now ? r = function(t) {
            v.now(a(m, t, 1));
        } : d ? (o = (i = new d()).port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*");
        }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this), m.call(t);
            };
        } : function(t) {
            setTimeout(a(m, t, 1), 0);
        }), t.exports = {
            set: h,
            clear: p
        };
    },
    L6bb: function(t, e, n) {
        !function() {
            var e = n("95Qu"), r = n("iFDI").utf8, i = n("Re3r"), o = n("iFDI").bin, a = function(t, n) {
                t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var s = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, f = -271733879, l = -1732584194, h = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
                s[u >>> 5] |= 128 << u % 32, s[14 + (u + 64 >>> 9 << 4)] = u;
                var d = a._ff, v = a._gg, y = a._hh, g = a._ii;
                for (p = 0; p < s.length; p += 16) {
                    var m = c, b = f, _ = l, w = h;
                    f = g(f = g(f = g(f = g(f = y(f = y(f = y(f = y(f = v(f = v(f = v(f = v(f = d(f = d(f = d(f = d(f, l = d(l, h = d(h, c = d(c, f, l, h, s[p + 0], 7, -680876936), f, l, s[p + 1], 12, -389564586), c, f, s[p + 2], 17, 606105819), h, c, s[p + 3], 22, -1044525330), l = d(l, h = d(h, c = d(c, f, l, h, s[p + 4], 7, -176418897), f, l, s[p + 5], 12, 1200080426), c, f, s[p + 6], 17, -1473231341), h, c, s[p + 7], 22, -45705983), l = d(l, h = d(h, c = d(c, f, l, h, s[p + 8], 7, 1770035416), f, l, s[p + 9], 12, -1958414417), c, f, s[p + 10], 17, -42063), h, c, s[p + 11], 22, -1990404162), l = d(l, h = d(h, c = d(c, f, l, h, s[p + 12], 7, 1804603682), f, l, s[p + 13], 12, -40341101), c, f, s[p + 14], 17, -1502002290), h, c, s[p + 15], 22, 1236535329), l = v(l, h = v(h, c = v(c, f, l, h, s[p + 1], 5, -165796510), f, l, s[p + 6], 9, -1069501632), c, f, s[p + 11], 14, 643717713), h, c, s[p + 0], 20, -373897302), l = v(l, h = v(h, c = v(c, f, l, h, s[p + 5], 5, -701558691), f, l, s[p + 10], 9, 38016083), c, f, s[p + 15], 14, -660478335), h, c, s[p + 4], 20, -405537848), l = v(l, h = v(h, c = v(c, f, l, h, s[p + 9], 5, 568446438), f, l, s[p + 14], 9, -1019803690), c, f, s[p + 3], 14, -187363961), h, c, s[p + 8], 20, 1163531501), l = v(l, h = v(h, c = v(c, f, l, h, s[p + 13], 5, -1444681467), f, l, s[p + 2], 9, -51403784), c, f, s[p + 7], 14, 1735328473), h, c, s[p + 12], 20, -1926607734), l = y(l, h = y(h, c = y(c, f, l, h, s[p + 5], 4, -378558), f, l, s[p + 8], 11, -2022574463), c, f, s[p + 11], 16, 1839030562), h, c, s[p + 14], 23, -35309556), l = y(l, h = y(h, c = y(c, f, l, h, s[p + 1], 4, -1530992060), f, l, s[p + 4], 11, 1272893353), c, f, s[p + 7], 16, -155497632), h, c, s[p + 10], 23, -1094730640), l = y(l, h = y(h, c = y(c, f, l, h, s[p + 13], 4, 681279174), f, l, s[p + 0], 11, -358537222), c, f, s[p + 3], 16, -722521979), h, c, s[p + 6], 23, 76029189), l = y(l, h = y(h, c = y(c, f, l, h, s[p + 9], 4, -640364487), f, l, s[p + 12], 11, -421815835), c, f, s[p + 15], 16, 530742520), h, c, s[p + 2], 23, -995338651), l = g(l, h = g(h, c = g(c, f, l, h, s[p + 0], 6, -198630844), f, l, s[p + 7], 10, 1126891415), c, f, s[p + 14], 15, -1416354905), h, c, s[p + 5], 21, -57434055), l = g(l, h = g(h, c = g(c, f, l, h, s[p + 12], 6, 1700485571), f, l, s[p + 3], 10, -1894986606), c, f, s[p + 10], 15, -1051523), h, c, s[p + 1], 21, -2054922799), l = g(l, h = g(h, c = g(c, f, l, h, s[p + 8], 6, 1873313359), f, l, s[p + 15], 10, -30611744), c, f, s[p + 6], 15, -1560198380), h, c, s[p + 13], 21, 1309151649), l = g(l, h = g(h, c = g(c, f, l, h, s[p + 4], 6, -145523070), f, l, s[p + 11], 10, -1120210379), c, f, s[p + 2], 15, 718787259), h, c, s[p + 9], 21, -343485551), 
                    c = c + m >>> 0, f = f + b >>> 0, l = l + _ >>> 0, h = h + w >>> 0;
                }
                return e.endian([ c, f, l, h ]);
            };
            a._ff = function(t, e, n, r, i, o, a) {
                var s = t + (e & n | ~e & r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + e;
            }, a._gg = function(t, e, n, r, i, o, a) {
                var s = t + (e & r | n & ~r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + e;
            }, a._hh = function(t, e, n, r, i, o, a) {
                var s = t + (e ^ n ^ r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + e;
            }, a._ii = function(t, e, n, r, i, o, a) {
                var s = t + (n ^ (e | ~r)) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + e;
            }, a._blocksize = 16, a._digestsize = 16, t.exports = function(t, n) {
                if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
                var r = e.wordsToBytes(a(t, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r);
            };
        }();
    },
    L8MQ: function(t, e, n) {
        var r = n("ktnU"), i = n("ktak");
        t.exports = function(t) {
            return null == t ? [] : r(t, i(t));
        };
    },
    LC74: function(t, e) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
        } : t.exports = function(t, e) {
            t.super_ = e;
            var n = function() {};
            n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
        };
    },
    LKZe: function(t, e, n) {
        var r = n("NpIQ"), i = n("X8DO"), o = n("TcQ7"), a = n("MmMw"), s = n("D2L2"), u = n("SfB7"), c = Object.getOwnPropertyDescriptor;
        e.f = n("+E39") ? c : function(t, e) {
            if (t = o(t), e = a(e, !0), u) try {
                return c(t, e);
            } catch (t) {}
            if (s(t, e)) return i(!r.f.call(t, e), t[e]);
        };
    },
    M6a0: function(t, e) {},
    MMop: function(t, e) {
        t.exports = function(t, e) {
            return "__proto__" == e ? void 0 : t[e];
        };
    },
    MPG0: function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = r.c + "/bookplan", a = o + "/user_book_plans", s = {
            listBookplans: function() {
                return Object(i.a)(o + "/book_plans");
            },
            getBookplan: function(t) {
                return Object(i.a)(o + "/book_plans/" + t);
            },
            listUserBookplans: function() {
                return Object(i.a)("" + a, {
                    data: {
                        page: 1,
                        ipp: 20
                    }
                });
            },
            getUserBookplanDetail: function(t) {
                return Object(i.a)(a + "/" + t);
            },
            getUserBookplanDailyData: function(t) {
                return Object(i.a)(a + "/" + t + "/daily_read_stats");
            },
            getUserBookplanDailyDataByDate: function(t, e) {
                return Object(i.a)(a + "/" + t + "/daily_read_stats", {
                    data: {
                        date: e
                    }
                });
            },
            getUserBookplanStatistics: function(t, e) {
                return Object(i.a)(a + "/" + t + "/statistics", {
                    data: {
                        month: e
                    },
                    isHideLoading: !0
                });
            },
            createOrders: function(t) {
                return Object(i.a)(o + "/orders", {
                    method: "POST",
                    body: t
                });
            },
            createPayments: function(t) {
                return Object(i.a)(o + "/payments", {
                    method: "POST",
                    body: t
                });
            },
            listHomePlans: function() {
                return Object(i.a)(o + "/homepage/book_plans", {
                    isHideLoading: !0
                });
            },
            getUserCoupons: function() {
                return Object(i.a)(o + "/user_coupons");
            },
            getSaleDetail: function(t) {
                return Object(i.a)(o + "/sale_pages/" + t);
            },
            getShareSpecialEntry: function(t) {
                return Object(i.a)(a + "/" + t + "/share_poster_info");
            },
            getUserBookplanPop: function(t) {
                return Object(i.a)(a + "/" + t + "/pop_up");
            },
            getLandingPage: function(t) {
                return Object(i.a)(o + "/landing_pages/" + t);
            },
            listDailyLectures: function(t) {
                return Object(i.a)(a + "/" + t + "/daily_lectures");
            }
        };
        e.a = s;
    },
    MU5D: function(t, e, n) {
        var r = n("R9M2");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    },
    Mhyx: function(t, e, n) {
        var r = n("/bQp"), i = n("dSzd")("iterator"), o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t);
        };
    },
    MmMw: function(t, e, n) {
        var r = n("EqjI");
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    MoMe: function(t, e, n) {
        var r = n("FCuZ"), i = n("l9Lx"), o = n("ktak");
        t.exports = function(t) {
            return r(t, o, i);
        };
    },
    "N5/M": function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "unlock-mask"
                }, [ n("div", {
                    staticClass: "unlock-modal"
                }, [ n("p", {
                    staticClass: "unlock-notice"
                }, [ t._v("稍后请在客服页面中输入：") ]), t._v(" "), n("p", {
                    staticClass: "unlock-command"
                }, [ t._v(t._s(t.inputValue)) ]), t._v(" "), n("button", {
                    staticClass: "unlock-btn",
                    attrs: {
                        "open-type": "contact",
                        eventid: "0"
                    },
                    on: {
                        click: t.handleCloseUnlockModal
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    NGEn: function(t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    NGvV: function(t, e) {},
    "NWt+": function(t, e, n) {
        var r = n("+ZMJ"), i = n("msXi"), o = n("Mhyx"), a = n("77Pl"), s = n("QRG4"), u = n("3fs2"), c = {}, f = {};
        (e = t.exports = function(t, e, n, l, h) {
            var p, d, v, y, g = h ? function() {
                return t;
            } : u(t), m = r(n, l, e ? 2 : 1), b = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (o(g)) {
                for (p = s(t.length); p > b; b++) if ((y = e ? m(a(d = t[b])[0], d[1]) : m(t[b])) === c || y === f) return y;
            } else for (v = g.call(t); !(d = v.next()).done; ) if ((y = i(v, m, d.value, e)) === c || y === f) return y;
        }).BREAK = c, e.RETURN = f;
    },
    NYxO: function(t, e, n) {
        "use strict";
        n.d(e, "c", function() {
            return b;
        }), n.d(e, "b", function() {
            return w;
        });
        /**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */        var r = function(t) {
            if (Number(t.version.split(".")[0]) >= 2) t.mixin({
                beforeCreate: n
            }); else {
                var e = t.prototype._init;
                t.prototype._init = function(t) {
                    void 0 === t && (t = {}), t.init = t.init ? [ n ].concat(t.init) : n, e.call(this, t);
                };
            }
            function n() {
                var t = this.$options;
                t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store);
            }
        }, i = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function o(t, e) {
            Object.keys(t).forEach(function(n) {
                return e(t[n], n);
            });
        }
        var a = function(t, e) {
            this.runtime = e, this._children = Object.create(null), this._rawModule = t;
            var n = t.state;
            this.state = ("function" == typeof n ? n() : n) || {};
        }, s = {
            namespaced: {
                configurable: !0
            }
        };
        s.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        }, a.prototype.addChild = function(t, e) {
            this._children[t] = e;
        }, a.prototype.removeChild = function(t) {
            delete this._children[t];
        }, a.prototype.getChild = function(t) {
            return this._children[t];
        }, a.prototype.update = function(t) {
            this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), 
            t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
        }, a.prototype.forEachChild = function(t) {
            o(this._children, t);
        }, a.prototype.forEachGetter = function(t) {
            this._rawModule.getters && o(this._rawModule.getters, t);
        }, a.prototype.forEachAction = function(t) {
            this._rawModule.actions && o(this._rawModule.actions, t);
        }, a.prototype.forEachMutation = function(t) {
            this._rawModule.mutations && o(this._rawModule.mutations, t);
        }, Object.defineProperties(a.prototype, s);
        var u = function(t) {
            this.register([], t, !1);
        };
        u.prototype.get = function(t) {
            return t.reduce(function(t, e) {
                return t.getChild(e);
            }, this.root);
        }, u.prototype.getNamespace = function(t) {
            var e = this.root;
            return t.reduce(function(t, n) {
                return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
            }, "");
        }, u.prototype.update = function(t) {
            !function t(e, n, r) {
                0;
                n.update(r);
                if (r.modules) for (var i in r.modules) {
                    if (!n.getChild(i)) return void 0;
                    t(e.concat(i), n.getChild(i), r.modules[i]);
                }
            }([], this.root, t);
        }, u.prototype.register = function(t, e, n) {
            var r = this;
            void 0 === n && (n = !0);
            var i = new a(e, n);
            0 === t.length ? this.root = i : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i);
            e.modules && o(e.modules, function(e, i) {
                r.register(t.concat(i), e, n);
            });
        }, u.prototype.unregister = function(t) {
            var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
            e.getChild(n).runtime && e.removeChild(n);
        };
        var c;
        var f = function(t) {
            var e = this;
            void 0 === t && (t = {}), !c && "undefined" != typeof window && window.Vue && m(window.Vue);
            var n = t.plugins;
            void 0 === n && (n = []);
            var r = t.strict;
            void 0 === r && (r = !1);
            var o = t.state;
            void 0 === o && (o = {}), "function" == typeof o && (o = o() || {}), this._committing = !1, 
            this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), 
            this._wrappedGetters = Object.create(null), this._modules = new u(t), this._modulesNamespaceMap = Object.create(null), 
            this._subscribers = [], this._watcherVM = new c();
            var a = this, s = this.dispatch, f = this.commit;
            this.dispatch = function(t, e) {
                return s.call(a, t, e);
            }, this.commit = function(t, e, n) {
                return f.call(a, t, e, n);
            }, this.strict = r, v(this, o, [], this._modules.root), d(this, o), n.forEach(function(t) {
                return t(e);
            }), c.config.devtools && function(t) {
                i && (t._devtoolHook = i, i.emit("vuex:init", t), i.on("vuex:travel-to-state", function(e) {
                    t.replaceState(e);
                }), t.subscribe(function(t, e) {
                    i.emit("vuex:mutation", t, e);
                }));
            }(this);
        }, l = {
            state: {
                configurable: !0
            }
        };
        function h(t, e) {
            return e.indexOf(t) < 0 && e.push(t), function() {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1);
            };
        }
        function p(t, e) {
            t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), 
            t._modulesNamespaceMap = Object.create(null);
            var n = t.state;
            v(t, n, [], t._modules.root, !0), d(t, n, e);
        }
        function d(t, e, n) {
            var r = t._vm;
            t.getters = {};
            var i = {};
            o(t._wrappedGetters, function(e, n) {
                i[n] = function() {
                    return e(t);
                }, Object.defineProperty(t.getters, n, {
                    get: function() {
                        return t._vm[n];
                    },
                    enumerable: !0
                });
            });
            var a = c.config.silent;
            c.config.silent = !0, t._vm = new c({
                data: {
                    $$state: e
                },
                computed: i
            }), c.config.silent = a, t.strict && function(t) {
                t._vm.$watch(function() {
                    return this._data.$$state;
                }, function() {
                    0;
                }, {
                    deep: !0,
                    sync: !0
                });
            }(t), r && (n && t._withCommit(function() {
                r._data.$$state = null;
            }), c.nextTick(function() {
                return r.$destroy();
            }));
        }
        function v(t, e, n, r, i) {
            var o = !n.length, a = t._modules.getNamespace(n);
            if (r.namespaced && (t._modulesNamespaceMap[a] = r), !o && !i) {
                var s = y(e, n.slice(0, -1)), u = n[n.length - 1];
                t._withCommit(function() {
                    c.set(s, u, r.state);
                });
            }
            var f = r.context = function(t, e, n) {
                var r = "" === e, i = {
                    dispatch: r ? t.dispatch : function(n, r, i) {
                        var o = g(n, r, i), a = o.payload, s = o.options, u = o.type;
                        return s && s.root || (u = e + u), t.dispatch(u, a);
                    },
                    commit: r ? t.commit : function(n, r, i) {
                        var o = g(n, r, i), a = o.payload, s = o.options, u = o.type;
                        s && s.root || (u = e + u), t.commit(u, a, s);
                    }
                };
                return Object.defineProperties(i, {
                    getters: {
                        get: r ? function() {
                            return t.getters;
                        } : function() {
                            return function(t, e) {
                                var n = {}, r = e.length;
                                return Object.keys(t.getters).forEach(function(i) {
                                    if (i.slice(0, r) === e) {
                                        var o = i.slice(r);
                                        Object.defineProperty(n, o, {
                                            get: function() {
                                                return t.getters[i];
                                            },
                                            enumerable: !0
                                        });
                                    }
                                }), n;
                            }(t, e);
                        }
                    },
                    state: {
                        get: function() {
                            return y(t.state, n);
                        }
                    }
                }), i;
            }(t, a, n);
            r.forEachMutation(function(e, n) {
                !function(t, e, n, r) {
                    (t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
                        n.call(t, r.state, e);
                    });
                }(t, a + n, e, f);
            }), r.forEachAction(function(e, n) {
                var r = e.root ? n : a + n, i = e.handler || e;
                !function(t, e, n, r) {
                    (t._actions[e] || (t._actions[e] = [])).push(function(e, i) {
                        var o = n.call(t, {
                            dispatch: r.dispatch,
                            commit: r.commit,
                            getters: r.getters,
                            state: r.state,
                            rootGetters: t.getters,
                            rootState: t.state
                        }, e, i);
                        return function(t) {
                            return t && "function" == typeof t.then;
                        }(o) || (o = Promise.resolve(o)), t._devtoolHook ? o.catch(function(e) {
                            throw t._devtoolHook.emit("vuex:error", e), e;
                        }) : o;
                    });
                }(t, r, i, f);
            }), r.forEachGetter(function(e, n) {
                !function(t, e, n, r) {
                    if (t._wrappedGetters[e]) return void 0;
                    t._wrappedGetters[e] = function(t) {
                        return n(r.state, r.getters, t.state, t.getters);
                    };
                }(t, a + n, e, f);
            }), r.forEachChild(function(r, o) {
                v(t, e, n.concat(o), r, i);
            });
        }
        function y(t, e) {
            return e.length ? e.reduce(function(t, e) {
                return t[e];
            }, t) : t;
        }
        function g(t, e, n) {
            return function(t) {
                return null !== t && "object" == typeof t;
            }(t) && t.type && (n = e, e = t, t = t.type), {
                type: t,
                payload: e,
                options: n
            };
        }
        function m(t) {
            c && t === c || r(c = t);
        }
        l.state.get = function() {
            return this._vm._data.$$state;
        }, l.state.set = function(t) {
            0;
        }, f.prototype.commit = function(t, e, n) {
            var r = this, i = g(t, e, n), o = i.type, a = i.payload, s = (i.options, {
                type: o,
                payload: a
            }), u = this._mutations[o];
            u && (this._withCommit(function() {
                u.forEach(function(t) {
                    t(a);
                });
            }), this._subscribers.forEach(function(t) {
                return t(s, r.state);
            }));
        }, f.prototype.dispatch = function(t, e) {
            var n = this, r = g(t, e), i = r.type, o = r.payload, a = {
                type: i,
                payload: o
            }, s = this._actions[i];
            if (s) return this._actionSubscribers.forEach(function(t) {
                return t(a, n.state);
            }), s.length > 1 ? Promise.all(s.map(function(t) {
                return t(o);
            })) : s[0](o);
        }, f.prototype.subscribe = function(t) {
            return h(t, this._subscribers);
        }, f.prototype.subscribeAction = function(t) {
            return h(t, this._actionSubscribers);
        }, f.prototype.watch = function(t, e, n) {
            var r = this;
            return this._watcherVM.$watch(function() {
                return t(r.state, r.getters);
            }, e, n);
        }, f.prototype.replaceState = function(t) {
            var e = this;
            this._withCommit(function() {
                e._vm._data.$$state = t;
            });
        }, f.prototype.registerModule = function(t, e, n) {
            void 0 === n && (n = {}), "string" == typeof t && (t = [ t ]), this._modules.register(t, e), 
            v(this, this.state, t, this._modules.get(t), n.preserveState), d(this, this.state);
        }, f.prototype.unregisterModule = function(t) {
            var e = this;
            "string" == typeof t && (t = [ t ]), this._modules.unregister(t), this._withCommit(function() {
                var n = y(e.state, t.slice(0, -1));
                c.delete(n, t[t.length - 1]);
            }), p(this);
        }, f.prototype.hotUpdate = function(t) {
            this._modules.update(t), p(this, !0);
        }, f.prototype._withCommit = function(t) {
            var e = this._committing;
            this._committing = !0, t(), this._committing = e;
        }, Object.defineProperties(f.prototype, l);
        var b = A(function(t, e) {
            var n = {};
            return E(e).forEach(function(e) {
                var r = e.key, i = e.val;
                n[r] = function() {
                    var e = this.$store.state, n = this.$store.getters;
                    if (t) {
                        var r = k(this.$store, "mapState", t);
                        if (!r) return;
                        e = r.context.state, n = r.context.getters;
                    }
                    return "function" == typeof i ? i.call(this, e, n) : e[i];
                }, n[r].vuex = !0;
            }), n;
        }), _ = A(function(t, e) {
            var n = {};
            return E(e).forEach(function(e) {
                var r = e.key, i = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.commit;
                    if (t) {
                        var o = k(this.$store, "mapMutations", t);
                        if (!o) return;
                        r = o.context.commit;
                    }
                    return "function" == typeof i ? i.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ i ].concat(e));
                };
            }), n;
        }), w = A(function(t, e) {
            var n = {};
            return E(e).forEach(function(e) {
                var r = e.key, i = e.val;
                i = t + i, n[r] = function() {
                    if (!t || k(this.$store, "mapGetters", t)) return this.$store.getters[i];
                }, n[r].vuex = !0;
            }), n;
        }), x = A(function(t, e) {
            var n = {};
            return E(e).forEach(function(e) {
                var r = e.key, i = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (t) {
                        var o = k(this.$store, "mapActions", t);
                        if (!o) return;
                        r = o.context.dispatch;
                    }
                    return "function" == typeof i ? i.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ i ].concat(e));
                };
            }), n;
        });
        function E(t) {
            return Array.isArray(t) ? t.map(function(t) {
                return {
                    key: t,
                    val: t
                };
            }) : Object.keys(t).map(function(e) {
                return {
                    key: e,
                    val: t[e]
                };
            });
        }
        function A(t) {
            return function(e, n) {
                return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), 
                t(e, n);
            };
        }
        function k(t, e, n) {
            return t._modulesNamespaceMap[n];
        }
        var T = {
            Store: f,
            install: m,
            version: "3.0.1",
            mapState: b,
            mapMutations: _,
            mapGetters: w,
            mapActions: x,
            createNamespacedHelpers: function(t) {
                return {
                    mapState: b.bind(null, t),
                    mapGetters: w.bind(null, t),
                    mapMutations: _.bind(null, t),
                    mapActions: x.bind(null, t)
                };
            }
        };
        e.a = T;
    },
    NkRn: function(t, e, n) {
        var r = n("TQ3y").Symbol;
        t.exports = r;
    },
    Nkkh: function(t, e, n) {
        var r = n("tv3T"), i = n("l9Lx");
        t.exports = function(t, e) {
            return r(t, i(t), e);
        };
    },
    NpIQ: function(t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    NqZt: function(t, e) {
        t.exports = function(t) {
            var e = this.__data__, n = e.delete(t);
            return this.size = e.size, n;
        };
    },
    O1jc: function(t, e, n) {
        var r = n("nw3t"), i = n("22B7");
        t.exports = function(t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n);
        };
    },
    O4g8: function(t, e) {
        t.exports = !0;
    },
    OBm5: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return i;
        });
        var r = "wechatapp_read", i = "juuxc";
    },
    ON07: function(t, e, n) {
        var r = n("EqjI"), i = n("7KvD").document, o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {};
        };
    },
    OYls: function(t, e, n) {
        n("crlp")("asyncIterator");
    },
    P6Rp: function(t, e, n) {
        var r = n("Rx1E"), i = n("1C79"), o = n("YkxI"), a = n("Fp5l"), s = n("oqL2"), u = o(function(t, e) {
            var n = s(e);
            return a(n) && (n = void 0), a(t) ? r(t, i(e, 1, a, !0), void 0, n) : [];
        });
        t.exports = u;
    },
    POb3: function(t, e, n) {
        var r = n("ICSD")(n("TQ3y"), "Map");
        t.exports = r;
    },
    PqYH: function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); ) ;
            return t;
        };
    },
    PzxK: function(t, e, n) {
        var r = n("D2L2"), i = n("sB3e"), o = n("ax3d")("IE_PROTO"), a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
        };
    },
    Q2wK: function(t, e, n) {
        var r = n("8AZL"), i = Math.max;
        t.exports = function(t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0), function() {
                for (var o = arguments, a = -1, s = i(o.length - e, 0), u = Array(s); ++a < s; ) u[a] = o[e + a];
                a = -1;
                for (var c = Array(e + 1); ++a < e; ) c[a] = o[a];
                return c[e] = n(u), r(t, this, c);
            };
        };
    },
    Q8le: function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = {
            trialBook: function(t) {
                return Object(i.a)(r.c + "/reading/books/" + t + "/trial", {
                    method: "POST"
                });
            },
            getBookFirstUnfinished: function(t) {
                return Object(i.a)(r.c + "/reading/books/" + t + "/first_unfinished_article");
            }
        };
        e.a = o;
    },
    QRG4: function(t, e, n) {
        var r = n("UuGF"), i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    "QWe/": function(t, e, n) {
        n("crlp")("observable");
    },
    QkUu: function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "share"
                }, [ t._m(0), t._v(" "), n("div", {
                    staticClass: "share-btn-group"
                }, [ n("button", {
                    staticClass: "share-btn",
                    attrs: {
                        "open-type": "share",
                        eventid: "0"
                    },
                    on: {
                        click: t.handleShareButtonLogData
                    }
                }, [ n("div", {
                    staticClass: "share-btn-wechat"
                }), t._v(" "), n("span", {
                    staticClass: "share-btn-text"
                }, [ t._v("微信好友") ]) ]), t._v(" "), n("div", {
                    staticClass: "share-btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.handleShareMoments
                    }
                }, [ n("div", {
                    staticClass: "share-btn-moments"
                }), t._v(" "), n("span", {
                    staticClass: "share-btn-text"
                }, [ t._v("生成海报") ]) ]) ], 1) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "share-title"
                }, [ e("span", {
                    staticClass: "share-line"
                }), this._v(" "), e("span", {
                    staticClass: "share-title-text"
                }, [ this._v("分享成就") ]), this._v(" "), e("span", {
                    staticClass: "share-line"
                }) ]);
            } ]
        };
        e.a = r;
    },
    Qp3N: function(t, e, n) {
        var r = n("NkRn"), i = n("1Yb9"), o = n("NGEn"), a = r ? r.isConcatSpreadable : void 0;
        t.exports = function(t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    R4wc: function(t, e, n) {
        var r = n("kM2E");
        r(r.S + r.F, "Object", {
            assign: n("To3L")
        });
    },
    R9M2: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1);
        };
    },
    RGrk: function(t, e, n) {
        var r = n("dCZQ"), i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    RPLV: function(t, e, n) {
        var r = n("7KvD").document;
        t.exports = r && r.documentElement;
    },
    "RY/4": function(t, e, n) {
        var r = n("R9M2"), i = n("dSzd")("toStringTag"), o = "Arguments" == r(function() {
            return arguments;
        }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e];
                } catch (t) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
        };
    },
    Re3r: function(t, e) {
        function n(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */        t.exports = function(t) {
            return null != t && (n(t) || function(t) {
                return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0));
            }(t) || !!t._isBuffer);
        };
    },
    Rh28: function(t, e) {
        var n = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    Rrel: function(t, e, n) {
        var r = n("TcQ7"), i = n("n0T6").f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? function(t) {
                try {
                    return i(t);
                } catch (t) {
                    return a.slice();
                }
            }(t) : i(r(t));
        };
    },
    Rt1F: function(t, e, n) {
        "use strict";
        (function(e, r) {
            var i = n("ypnx");
            t.exports = b;
            var o, a = n("sOR5");
            b.ReadableState = m;
            n("vzCy").EventEmitter;
            var s = function(t, e) {
                return t.listeners(e).length;
            }, u = n("UcPO"), c = n("X3l8").Buffer, f = e.Uint8Array || function() {};
            var l = n("jOgh");
            l.inherits = n("LC74");
            var h = n(0), p = void 0;
            p = h && h.debuglog ? h.debuglog("stream") : function() {};
            var d, v = n("+HRN"), y = n("x0Ha");
            l.inherits(b, u);
            var g = [ "error", "close", "destroy", "pause", "resume" ];
            function m(t, e) {
                o = o || n("DsFX"), t = t || {};
                var r = e instanceof o;
                this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var i = t.highWaterMark, a = t.readableHighWaterMark, s = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), 
                this.buffer = new v(), this.length = 0, this.pipes = null, this.pipesCount = 0, 
                this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, 
                this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, 
                this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", 
                this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, 
                t.encoding && (d || (d = n("X4X3").StringDecoder), this.decoder = new d(t.encoding), 
                this.encoding = t.encoding);
            }
            function b(t) {
                if (o = o || n("DsFX"), !(this instanceof b)) return new b(t);
                this._readableState = new m(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), 
                "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this);
            }
            function _(t, e, n, r, i) {
                var o, a = t._readableState;
                null === e ? (a.reading = !1, function(t, e) {
                    if (e.ended) return;
                    if (e.decoder) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
                    }
                    e.ended = !0, A(t);
                }(t, a)) : (i || (o = function(t, e) {
                    var n;
                    (function(t) {
                        return c.isBuffer(t) || t instanceof f;
                    })(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
                    return n;
                }(a, e)), o ? t.emit("error", o) : a.objectMode || e && e.length > 0 ? ("string" == typeof e || a.objectMode || Object.getPrototypeOf(e) === c.prototype || (e = function(t) {
                    return c.from(t);
                }(e)), r ? a.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : w(t, a, e, !0) : a.ended ? t.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, 
                a.decoder && !n ? (e = a.decoder.write(e), a.objectMode || 0 !== e.length ? w(t, a, e, !1) : T(t, a)) : w(t, a, e, !1))) : r || (a.reading = !1));
                return function(t) {
                    return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
                }(a);
            }
            function w(t, e, n, r) {
                e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, 
                r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && A(t)), T(t, e);
            }
            Object.defineProperty(b.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed;
                },
                set: function(t) {
                    this._readableState && (this._readableState.destroyed = t);
                }
            }), b.prototype.destroy = y.destroy, b.prototype._undestroy = y.undestroy, b.prototype._destroy = function(t, e) {
                this.push(null), e(t);
            }, b.prototype.push = function(t, e) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = c.from(t, e), 
                e = ""), n = !0), _(this, t, e, !1, n);
            }, b.prototype.unshift = function(t) {
                return _(this, t, null, !0, !1);
            }, b.prototype.isPaused = function() {
                return !1 === this._readableState.flowing;
            }, b.prototype.setEncoding = function(t) {
                return d || (d = n("X4X3").StringDecoder), this._readableState.decoder = new d(t), 
                this._readableState.encoding = t, this;
            };
            var x = 8388608;
            function E(t, e) {
                return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                    return t >= x ? t = x : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 
                    t |= t >>> 16, t++), t;
                }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
            }
            function A(t) {
                var e = t._readableState;
                e.needReadable = !1, e.emittedReadable || (p("emitReadable", e.flowing), e.emittedReadable = !0, 
                e.sync ? i.nextTick(k, t) : k(t));
            }
            function k(t) {
                p("emit readable"), t.emit("readable"), j(t);
            }
            function T(t, e) {
                e.readingMore || (e.readingMore = !0, i.nextTick(O, t, e));
            }
            function O(t, e) {
                for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), 
                t.read(0), n !== e.length); ) n = e.length;
                e.readingMore = !1;
            }
            function S(t) {
                p("readable nexttick read 0"), t.read(0);
            }
            function C(t, e) {
                e.reading || (p("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, 
                t.emit("resume"), j(t), e.flowing && !e.reading && t.read(0);
            }
            function j(t) {
                var e = t._readableState;
                for (p("flow", e.flowing); e.flowing && null !== t.read(); ) ;
            }
            function P(t, e) {
                return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), 
                e.buffer.clear()) : n = function(t, e, n) {
                    var r;
                    t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function(t, e) {
                        var n = e.head, r = 1, i = n.data;
                        t -= i.length;
                        for (;n = n.next; ) {
                            var o = n.data, a = t > o.length ? o.length : t;
                            if (a === o.length ? i += o : i += o.slice(0, t), 0 === (t -= a)) {
                                a === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, 
                                n.data = o.slice(a));
                                break;
                            }
                            ++r;
                        }
                        return e.length -= r, i;
                    }(t, e) : function(t, e) {
                        var n = c.allocUnsafe(t), r = e.head, i = 1;
                        r.data.copy(n), t -= r.data.length;
                        for (;r = r.next; ) {
                            var o = r.data, a = t > o.length ? o.length : t;
                            if (o.copy(n, n.length - t, 0, a), 0 === (t -= a)) {
                                a === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, 
                                r.data = o.slice(a));
                                break;
                            }
                            ++i;
                        }
                        return e.length -= i, n;
                    }(t, e);
                    return r;
                }(t, e.buffer, e.decoder), n);
                var n;
            }
            function R(t) {
                var e = t._readableState;
                if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                e.endEmitted || (e.ended = !0, i.nextTick(D, e, t));
            }
            function D(t, e) {
                t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
            }
            function I(t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1;
            }
            b.prototype.read = function(t) {
                p("read", t), t = parseInt(t, 10);
                var e = this._readableState, n = t;
                if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return p("read: emitReadable", e.length, e.ended), 
                0 === e.length && e.ended ? R(this) : A(this), null;
                if (0 === (t = E(t, e)) && e.ended) return 0 === e.length && R(this), null;
                var r, i = e.needReadable;
                return p("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && p("length less than watermark", i = !0), 
                e.ended || e.reading ? p("reading or ended", i = !1) : i && (p("do read"), e.reading = !0, 
                e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), 
                e.sync = !1, e.reading || (t = E(n, e))), null === (r = t > 0 ? P(t, e) : null) ? (e.needReadable = !0, 
                t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && R(this)), 
                null !== r && this.emit("data", r), r;
            }, b.prototype._read = function(t) {
                this.emit("error", new Error("_read() is not implemented"));
            }, b.prototype.pipe = function(t, e) {
                var n = this, o = this._readableState;
                switch (o.pipesCount) {
                  case 0:
                    o.pipes = t;
                    break;

                  case 1:
                    o.pipes = [ o.pipes, t ];
                    break;

                  default:
                    o.pipes.push(t);
                }
                o.pipesCount += 1, p("pipe count=%d opts=%j", o.pipesCount, e);
                var u = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? f : b;
                function c(e, r) {
                    p("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, p("cleanup"), 
                    t.removeListener("close", g), t.removeListener("finish", m), t.removeListener("drain", l), 
                    t.removeListener("error", y), t.removeListener("unpipe", c), n.removeListener("end", f), 
                    n.removeListener("end", b), n.removeListener("data", v), h = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || l());
                }
                function f() {
                    p("onend"), t.end();
                }
                o.endEmitted ? i.nextTick(u) : n.once("end", u), t.on("unpipe", c);
                var l = function(t) {
                    return function() {
                        var e = t._readableState;
                        p("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && s(t, "data") && (e.flowing = !0, 
                        j(t));
                    };
                }(n);
                t.on("drain", l);
                var h = !1;
                var d = !1;
                function v(e) {
                    p("ondata"), d = !1, !1 !== t.write(e) || d || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== I(o.pipes, t)) && !h && (p("false write response, pause", n._readableState.awaitDrain), 
                    n._readableState.awaitDrain++, d = !0), n.pause());
                }
                function y(e) {
                    p("onerror", e), b(), t.removeListener("error", y), 0 === s(t, "error") && t.emit("error", e);
                }
                function g() {
                    t.removeListener("finish", m), b();
                }
                function m() {
                    p("onfinish"), t.removeListener("close", g), b();
                }
                function b() {
                    p("unpipe"), n.unpipe(t);
                }
                return n.on("data", v), function(t, e, n) {
                    if ("function" == typeof t.prependListener) return t.prependListener(e, n);
                    t._events && t._events[e] ? a(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [ n, t._events[e] ] : t.on(e, n);
                }(t, "error", y), t.once("close", g), t.once("finish", m), t.emit("pipe", n), o.flowing || (p("pipe resume"), 
                n.resume()), t;
            }, b.prototype.unpipe = function(t) {
                var e = this._readableState, n = {
                    hasUnpiped: !1
                };
                if (0 === e.pipesCount) return this;
                if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), 
                e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), 
                this);
                if (!t) {
                    var r = e.pipes, i = e.pipesCount;
                    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                    for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
                    return this;
                }
                var a = I(e.pipes, t);
                return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), 
                t.emit("unpipe", this, n), this);
            }, b.prototype.on = function(t, e) {
                var n = u.prototype.on.call(this, t, e);
                if ("data" === t) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === t) {
                    var r = this._readableState;
                    r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, 
                    r.emittedReadable = !1, r.reading ? r.length && A(this) : i.nextTick(S, this));
                }
                return n;
            }, b.prototype.addListener = b.prototype.on, b.prototype.resume = function() {
                var t = this._readableState;
                return t.flowing || (p("resume"), t.flowing = !0, function(t, e) {
                    e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(C, t, e));
                }(this, t)), this;
            }, b.prototype.pause = function() {
                return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), 
                this._readableState.flowing = !1, this.emit("pause")), this;
            }, b.prototype.wrap = function(t) {
                var e = this, n = this._readableState, r = !1;
                for (var i in t.on("end", function() {
                    if (p("wrapped end"), n.decoder && !n.ended) {
                        var t = n.decoder.end();
                        t && t.length && e.push(t);
                    }
                    e.push(null);
                }), t.on("data", function(i) {
                    (p("wrapped data"), n.decoder && (i = n.decoder.write(i)), !n.objectMode || null !== i && void 0 !== i) && ((n.objectMode || i && i.length) && (e.push(i) || (r = !0, 
                    t.pause())));
                }), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments);
                    };
                }(i));
                for (var o = 0; o < g.length; o++) t.on(g[o], this.emit.bind(this, g[o]));
                return this._read = function(e) {
                    p("wrapped _read", e), r && (r = !1, t.resume());
                }, this;
            }, Object.defineProperty(b.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark;
                }
            }), b._fromList = P;
        }).call(e, n("DuR2"), n("W2nU"));
    },
    Rx1E: function(t, e, n) {
        var r = n("7YkW"), i = n("JUs9"), o = n("s96k"), a = n("Hxdr"), s = n("S7p9"), u = n("dmQx"), c = 200;
        t.exports = function(t, e, n, f) {
            var l = -1, h = i, p = !0, d = t.length, v = [], y = e.length;
            if (!d) return v;
            n && (e = a(e, s(n))), f ? (h = o, p = !1) : e.length >= c && (h = u, p = !1, e = new r(e));
            t: for (;++l < d; ) {
                var g = t[l], m = null == n ? g : n(g);
                if (g = f || 0 !== g ? g : 0, p && m == m) {
                    for (var b = y; b--; ) if (e[b] === m) continue t;
                    v.push(g);
                } else h(e, m, f) || v.push(g);
            }
            return v;
        };
    },
    S7p9: function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e);
            };
        };
    },
    S82l: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    SDM6: function(t, e, n) {
        t.exports = n("DsFX");
    },
    SGXn: function(t, e, n) {
        var r = n("eP4g"), i = n("S7p9"), o = n("Dc0G"), a = o && o.isSet, s = a ? i(a) : r;
        t.exports = s;
    },
    SHWz: function(t, e, n) {
        var r = n("MoMe"), i = 1, o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, a, s, u) {
            var c = n & i, f = r(t), l = f.length;
            if (l != r(e).length && !c) return !1;
            for (var h = l; h--; ) {
                var p = f[h];
                if (!(c ? p in e : o.call(e, p))) return !1;
            }
            var d = u.get(t);
            if (d && u.get(e)) return d == e;
            var v = !0;
            u.set(t, e), u.set(e, t);
            for (var y = c; ++h < l; ) {
                var g = t[p = f[h]], m = e[p];
                if (a) var b = c ? a(m, g, p, e, t, u) : a(g, m, p, t, e, u);
                if (!(void 0 === b ? g === m || s(g, m, n, a, u) : b)) {
                    v = !1;
                    break;
                }
                y || (y = "constructor" == p);
            }
            if (v && !y) {
                var _ = t.constructor, w = e.constructor;
                _ != w && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (v = !1);
            }
            return u.delete(t), u.delete(e), v;
        };
    },
    SHhs: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.uniteEntries = e.uniteRules = void 0;
        var r = s(n("P6Rp")), i = s(n("zMR/")), o = s(n("hygk")), a = function() {
            return function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [], r = !0, i = !1, o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                        !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        i = !0, o = t;
                    } finally {
                        try {
                            !r && s.return && s.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return Array.from(t);
        }
        var c = Array.isArray;
        function f(t, e) {
            var n = [ t, e ].map(function(t) {
                return c(t) ? [].concat(u(t)).sort() : t;
            }), r = a(n, 2), i = r[0], s = r[1];
            return (0, o.default)(i, s);
        }
        function l(t, e) {
            var n = /^([^?]+)/gi, r = e.loader.match(n), i = a(r, 1)[0], o = t.loader.match(n);
            return i === a(o, 1)[0];
        }
        function h(t, e) {
            return !!l(t, e) && ((0, i.default)(e, t), !0);
        }
        function p(t, e, n, r) {
            for (var i = r = r || t.length - 1; i >= 0; i -= 1) if (l(e, t[i])) return i;
            return -1;
        }
        e.uniteRules = function(t, e, n, i) {
            if (String(i.test) !== String(n.test) || (n.enforce || i.enforce) && i.enforce !== n.enforce || n.include && !f(i.include, n.include) || n.exclude && !f(i.exclude, n.exclude)) return !1;
            if (!(i.test || i.include || i.exclude || (i.loader && i.loader.split("?")[0]) === (n.loader && n.loader.split("?")[0]))) return !1;
            if ((i.include || i.exclude) && !n.include && !n.exclude) return !1;
            if (n.loader) {
                var o = n.options ? "options" : n.query && "query";
                delete i.use, delete i.loaders, i.loader = n.loader, o && (i[o] = n[o]);
            } else if ((i.use || i.loaders || i.loader) && (n.use || n.loaders)) {
                var a = function(t) {
                    return "string" == typeof t ? {
                        loader: t
                    } : t;
                }, s = function(t) {
                    return t.options || t.query ? t : t.loader;
                }, c = void 0;
                if (i.loader) {
                    var l = i.options ? "options" : i.query && "query";
                    c = [ {
                        loader: i.loader
                    } ], l && (c[0][l] = i[l]), delete i.loader, l && delete i[l];
                } else c = [].concat(i.use || i.loaders).map(a);
                var d = [].concat(n.use || n.loaders).map(a), v = i.use || n.use ? "use" : "loaders";
                switch (t[e + "." + v]) {
                  case "prepend":
                    i[v] = [].concat(u((0, r.default)(d, c, h)), u(c)).map(s);
                    break;

                  case "replace":
                    i[v] = n.use || n.loaders;
                    break;

                  default:
                    i[v] = function(t, e) {
                        for (var n = [], r = e.length - 1, i = t.length - 1; i >= 0; i -= 1) {
                            var o = t[i], a = p(e, o, 0, r), s = -1 !== a;
                            if (s) {
                                for (var u = r; u > a; u -= 1) {
                                    var c = e[u], f = -1 !== p(t, c, 0, i);
                                    f || n.unshift(c), r -= 1;
                                }
                                h(o, e[r]), n.unshift(e[r]), r -= 1;
                            } else {
                                var l = -1 !== p(n, o);
                                l || n.unshift(o);
                            }
                        }
                        for (;r >= 0; r -= 1) {
                            var d = e[r], v = -1 !== p(n, d);
                            v || n.unshift(d);
                        }
                        return n;
                    }(d, c).map(s);
                }
            }
            return n.include && (i.include = n.include), n.exclude && (i.exclude = n.exclude), 
            !0;
        }, e.uniteEntries = h;
    },
    SfB7: function(t, e, n) {
        t.exports = !n("+E39") && !n("S82l")(function() {
            return 7 != Object.defineProperty(n("ON07")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    SldL: function(t, e) {
        !function(e) {
            "use strict";
            var n, r = Object.prototype, i = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag", c = "object" == typeof t, f = e.regeneratorRuntime;
            if (f) c && (t.exports = f); else {
                (f = e.regeneratorRuntime = c ? t.exports : {}).wrap = _;
                var l = "suspendedStart", h = "suspendedYield", p = "executing", d = "completed", v = {}, y = {};
                y[a] = function() {
                    return this;
                };
                var g = Object.getPrototypeOf, m = g && g(g(P([])));
                m && m !== r && i.call(m, a) && (y = m);
                var b = A.prototype = x.prototype = Object.create(y);
                E.prototype = b.constructor = A, A.constructor = E, A[u] = E.displayName = "GeneratorFunction", 
                f.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === E || "GeneratorFunction" === (e.displayName || e.name));
                }, f.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, A) : (t.__proto__ = A, u in t || (t[u] = "GeneratorFunction")), 
                    t.prototype = Object.create(b), t;
                }, f.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, k(T.prototype), T.prototype[s] = function() {
                    return this;
                }, f.AsyncIterator = T, f.async = function(t, e, n, r) {
                    var i = new T(_(t, e, n, r));
                    return f.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next();
                    });
                }, k(b), b[u] = "Generator", b[a] = function() {
                    return this;
                }, b.toString = function() {
                    return "[object Generator]";
                }, f.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(), function n() {
                        for (;e.length; ) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, f.values = P, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = n, this.tryEntries.forEach(C), !t) for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(r, i) {
                            return s.type = "throw", s.arg = t, e.next = r, i && (e.method = "next", e.arg = n), 
                            !!i;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o], s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var u = i.call(a, "catchLoc"), c = i.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, 
                        v) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                        this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                        v;
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), v;
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    C(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), v;
                    }
                };
            }
            function _(t, e, n, r) {
                var i = e && e.prototype instanceof x ? e : x, o = Object.create(i.prototype), a = new j(r || []);
                return o._invoke = function(t, e, n) {
                    var r = l;
                    return function(i, o) {
                        if (r === p) throw new Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === i) throw o;
                            return R();
                        }
                        for (n.method = i, n.arg = o; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = O(a, n);
                                if (s) {
                                    if (s === v) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (r === l) throw r = d, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var u = w(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? d : h, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                };
                            }
                            "throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg);
                        }
                    };
                }(t, n, a), o;
            }
            function w(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            function x() {}
            function E() {}
            function A() {}
            function k(t) {
                [ "next", "throw", "return" ].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t);
                    };
                });
            }
            function T(t) {
                var e;
                this._invoke = function(n, r) {
                    function o() {
                        return new Promise(function(e, o) {
                            !function e(n, r, o, a) {
                                var s = w(t[n], t, r);
                                if ("throw" !== s.type) {
                                    var u = s.arg, c = u.value;
                                    return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                        e("next", t, o, a);
                                    }, function(t) {
                                        e("throw", t, o, a);
                                    }) : Promise.resolve(c).then(function(t) {
                                        u.value = t, o(u);
                                    }, a);
                                }
                                a(s.arg);
                            }(n, r, e, o);
                        });
                    }
                    return e = e ? e.then(o, o) : o();
                };
            }
            function O(t, e) {
                var r = t.iterator[e.method];
                if (r === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, O(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return v;
                }
                var i = w(r, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, 
                v;
                var o = i.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = n), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, v);
            }
            function S(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function C(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function j(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(S, this), this.reset(!0);
            }
            function P(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = n, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: R
                };
            }
            function R() {
                return {
                    value: n,
                    done: !0
                };
            }
        }(function() {
            return this;
        }() || Function("return this")());
    },
    "T/bE": function(t, e, n) {
        var r = n("94sX"), i = n("ue/d"), o = n("eVIm"), a = n("RGrk"), s = n("Z2pD");
        function u(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, 
        u.prototype.set = s, t.exports = u;
    },
    T8xL: function(t, e, n) {
        var r, i, o = n("qc9y"), a = n("w/Rp"), s = n("e4p/").isArray;
        function u(t) {
            var e = Number(t);
            if (!isNaN(e)) return e;
            var n = t.toLowerCase();
            return "true" === n || "false" !== n && t;
        }
        function c(t, e) {
            var n;
            if (r.compact) {
                if (!i[r[t + "Key"]] && (s(r.alwaysArray) ? -1 !== r.alwaysArray.indexOf(r[t + "Key"]) : r.alwaysArray) && (i[r[t + "Key"]] = []), 
                i[r[t + "Key"]] && !s(i[r[t + "Key"]]) && (i[r[t + "Key"]] = [ i[r[t + "Key"]] ]), 
                t + "Fn" in r && "string" == typeof e && (e = r[t + "Fn"](e, i)), "instruction" === t && ("instructionFn" in r || "instructionNameFn" in r)) for (n in e) if (e.hasOwnProperty(n)) if ("instructionFn" in r) e[n] = r.instructionFn(e[n], n, i); else {
                    var o = e[n];
                    delete e[n], e[r.instructionNameFn(n, o, i)] = o;
                }
                s(i[r[t + "Key"]]) ? i[r[t + "Key"]].push(e) : i[r[t + "Key"]] = e;
            } else {
                i[r.elementsKey] || (i[r.elementsKey] = []);
                var a = {};
                if (a[r.typeKey] = t, "instruction" === t) {
                    for (n in e) if (e.hasOwnProperty(n)) break;
                    a[r.nameKey] = "instructionNameFn" in r ? r.instructionNameFn(n, e, i) : n, r.instructionHasAttributes ? (a[r.attributesKey] = e[n][r.attributesKey], 
                    "instructionFn" in r && (a[r.attributesKey] = r.instructionFn(a[r.attributesKey], n, i))) : ("instructionFn" in r && (e[n] = r.instructionFn(e[n], n, i)), 
                    a[r.instructionKey] = e[n]);
                } else t + "Fn" in r && (e = r[t + "Fn"](e, i)), a[r[t + "Key"]] = e;
                r.addParent && (a[r.parentKey] = i), i[r.elementsKey].push(a);
            }
        }
        function f(t) {
            var e;
            if ("attributesFn" in r && t && (t = r.attributesFn(t, i)), (r.trim || "attributeValueFn" in r || "attributeNameFn" in r || r.nativeTypeAttributes) && t) for (e in t) if (t.hasOwnProperty(e) && (r.trim && (t[e] = t[e].trim()), 
            r.nativeTypeAttributes && (t[e] = u(t[e])), "attributeValueFn" in r && (t[e] = r.attributeValueFn(t[e], e, i)), 
            "attributeNameFn" in r)) {
                var n = t[e];
                delete t[e], t[r.attributeNameFn(e, t[e], i)] = n;
            }
            return t;
        }
        function l(t) {
            var e = {};
            if (t.body && ("xml" === t.name.toLowerCase() || r.instructionHasAttributes)) {
                for (var n, o = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g; null !== (n = o.exec(t.body)); ) e[n[1]] = n[2] || n[3] || n[4];
                e = f(e);
            }
            if ("xml" === t.name.toLowerCase()) {
                if (r.ignoreDeclaration) return;
                i[r.declarationKey] = {}, Object.keys(e).length && (i[r.declarationKey][r.attributesKey] = e), 
                r.addParent && (i[r.declarationKey][r.parentKey] = i);
            } else {
                if (r.ignoreInstruction) return;
                r.trim && (t.body = t.body.trim());
                var a = {};
                r.instructionHasAttributes && Object.keys(e).length ? (a[t.name] = {}, a[t.name][r.attributesKey] = e) : a[t.name] = t.body, 
                c("instruction", a);
            }
        }
        function h(t, e) {
            var n;
            if ("object" == typeof t && (e = t.attributes, t = t.name), e = f(e), "elementNameFn" in r && (t = r.elementNameFn(t, i)), 
            r.compact) {
                var o;
                if (n = {}, !r.ignoreAttributes && e && Object.keys(e).length) for (o in n[r.attributesKey] = {}, 
                e) e.hasOwnProperty(o) && (n[r.attributesKey][o] = e[o]);
                t in i || (s(r.alwaysArray) ? -1 === r.alwaysArray.indexOf(t) : !r.alwaysArray) || (i[t] = []), 
                i[t] && !s(i[t]) && (i[t] = [ i[t] ]), s(i[t]) ? i[t].push(n) : i[t] = n;
            } else i[r.elementsKey] || (i[r.elementsKey] = []), (n = {})[r.typeKey] = "element", 
            n[r.nameKey] = t, !r.ignoreAttributes && e && Object.keys(e).length && (n[r.attributesKey] = e), 
            r.alwaysChildren && (n[r.elementsKey] = []), i[r.elementsKey].push(n);
            n[r.parentKey] = i, i = n;
        }
        function p(t) {
            r.ignoreText || (t.trim() || r.captureSpacesBetweenElements) && (r.trim && (t = t.trim()), 
            r.nativeType && (t = u(t)), r.sanitize && (t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), 
            c("text", t));
        }
        function d(t) {
            r.ignoreComment || (r.trim && (t = t.trim()), c("comment", t));
        }
        function v(t) {
            var e = i[r.parentKey];
            r.addParent || delete i[r.parentKey], i = e;
        }
        function y(t) {
            r.ignoreCdata || (r.trim && (t = t.trim()), c("cdata", t));
        }
        function g(t) {
            r.ignoreDoctype || (t = t.replace(/^ /, ""), r.trim && (t = t.trim()), c("doctype", t));
        }
        function m(t) {
            t.note = t;
        }
        t.exports = function(t, e) {
            var n = o.parser(!0, {}), s = {};
            if (i = s, r = function(t) {
                return r = a.copyOptions(t), a.ensureFlagExists("ignoreDeclaration", r), a.ensureFlagExists("ignoreInstruction", r), 
                a.ensureFlagExists("ignoreAttributes", r), a.ensureFlagExists("ignoreText", r), 
                a.ensureFlagExists("ignoreComment", r), a.ensureFlagExists("ignoreCdata", r), a.ensureFlagExists("ignoreDoctype", r), 
                a.ensureFlagExists("compact", r), a.ensureFlagExists("alwaysChildren", r), a.ensureFlagExists("addParent", r), 
                a.ensureFlagExists("trim", r), a.ensureFlagExists("nativeType", r), a.ensureFlagExists("nativeTypeAttributes", r), 
                a.ensureFlagExists("sanitize", r), a.ensureFlagExists("instructionHasAttributes", r), 
                a.ensureFlagExists("captureSpacesBetweenElements", r), a.ensureAlwaysArrayExists(r), 
                a.ensureKeyExists("declaration", r), a.ensureKeyExists("instruction", r), a.ensureKeyExists("attributes", r), 
                a.ensureKeyExists("text", r), a.ensureKeyExists("comment", r), a.ensureKeyExists("cdata", r), 
                a.ensureKeyExists("doctype", r), a.ensureKeyExists("type", r), a.ensureKeyExists("name", r), 
                a.ensureKeyExists("elements", r), a.ensureKeyExists("parent", r), a.checkFnExists("doctype", r), 
                a.checkFnExists("instruction", r), a.checkFnExists("cdata", r), a.checkFnExists("comment", r), 
                a.checkFnExists("text", r), a.checkFnExists("instructionName", r), a.checkFnExists("elementName", r), 
                a.checkFnExists("attributeName", r), a.checkFnExists("attributeValue", r), a.checkFnExists("attributes", r), 
                r;
            }(e), n.opt = {
                strictEntities: !0
            }, n.onopentag = h, n.ontext = p, n.oncomment = d, n.onclosetag = v, n.onerror = m, 
            n.oncdata = y, n.ondoctype = g, n.onprocessinginstruction = l, n.write(t).close(), 
            s[r.elementsKey]) {
                var u = s[r.elementsKey];
                delete s[r.elementsKey], s[r.elementsKey] = u, delete s.text;
            }
            return s;
        };
    },
    TQ3y: function(t, e, n) {
        var r = n("blYT"), i = "object" == typeof self && self && self.Object === Object && self, o = r || i || Function("return this")();
        t.exports = o;
    },
    TcQ7: function(t, e, n) {
        var r = n("MU5D"), i = n("52gC");
        t.exports = function(t) {
            return r(i(t));
        };
    },
    TlPD: function(t, e, n) {
        var r = n("tv3T"), i = n("t8rQ");
        t.exports = function(t) {
            return r(t, i(t));
        };
    },
    To3L: function(t, e, n) {
        "use strict";
        var r = n("lktj"), i = n("1kS7"), o = n("NpIQ"), a = n("sB3e"), s = n("MU5D"), u = Object.assign;
        t.exports = !u || n("S82l")(function() {
            var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function(t) {
                e[t] = t;
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
        }) ? function(t, e) {
            for (var n = a(t), u = arguments.length, c = 1, f = i.f, l = o.f; u > c; ) for (var h, p = s(arguments[c++]), d = f ? r(p).concat(f(p)) : r(p), v = d.length, y = 0; v > y; ) l.call(p, h = d[y++]) && (n[h] = p[h]);
            return n;
        } : u;
    },
    Tvex: function(t, e, n) {
        var r = n("7YkW"), i = n("JUs9"), o = n("s96k"), a = n("dmQx"), s = n("V3Yo"), u = n("octw"), c = 200;
        t.exports = function(t, e, n) {
            var f = -1, l = i, h = t.length, p = !0, d = [], v = d;
            if (n) p = !1, l = o; else if (h >= c) {
                var y = e ? null : s(t);
                if (y) return u(y);
                p = !1, l = a, v = new r();
            } else v = e ? [] : d;
            t: for (;++f < h; ) {
                var g = t[f], m = e ? e(g) : g;
                if (g = n || 0 !== g ? g : 0, p && m == m) {
                    for (var b = v.length; b--; ) if (v[b] === m) continue t;
                    e && v.push(m), d.push(g);
                } else l(v, m, n) || (v !== d && v.push(m), d.push(g));
            }
            return d;
        };
    },
    U5ju: function(t, e, n) {
        n("M6a0"), n("zQR9"), n("+tPU"), n("CXw9"), n("EqBC"), n("jKW+"), t.exports = n("FeBl").Promise;
    },
    UcPO: function(t, e, n) {
        t.exports = n("vzCy").EventEmitter;
    },
    UfSK: function(t, e) {
        var n = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = t.length, r = new t.constructor(e);
            return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, 
            r.input = t.input), r;
        };
    },
    UnEC: function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t;
        };
    },
    UuGF: function(t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    Uz1a: function(t, e, n) {
        var r = n("bJWQ"), i = n("FhcP"), o = n("EHRO"), a = n("SHWz"), s = n("gHOb"), u = n("NGEn"), c = n("ggOT"), f = n("YsVG"), l = 1, h = "[object Arguments]", p = "[object Array]", d = "[object Object]", v = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, y, g, m) {
            var b = u(t), _ = u(e), w = b ? p : s(t), x = _ ? p : s(e), E = (w = w == h ? d : w) == d, A = (x = x == h ? d : x) == d, k = w == x;
            if (k && c(t)) {
                if (!c(e)) return !1;
                b = !0, E = !1;
            }
            if (k && !E) return m || (m = new r()), b || f(t) ? i(t, e, n, y, g, m) : o(t, e, w, n, y, g, m);
            if (!(n & l)) {
                var T = E && v.call(t, "__wrapped__"), O = A && v.call(e, "__wrapped__");
                if (T || O) {
                    var S = T ? t.value() : t, C = O ? e.value() : e;
                    return m || (m = new r()), g(S, C, n, y, m);
                }
            }
            return !!k && (m || (m = new r()), a(t, e, n, y, g, m));
        };
    },
    V3Yo: function(t, e, n) {
        var r = n("5N57"), i = n("qrdl"), o = n("octw"), a = r && 1 / o(new r([ , -0 ]))[1] == 1 / 0 ? function(t) {
            return new r(t);
        } : i;
        t.exports = a;
    },
    V3tA: function(t, e, n) {
        n("R4wc"), t.exports = n("FeBl").Object.assign;
    },
    VORN: function(t, e, n) {
        var r = n("yCNF"), i = Object.create, o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t();
                return t.prototype = void 0, n;
            };
        }();
        t.exports = o;
    },
    VW3m: function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("exGp"), a = n.n(o), s = n("1zHM"), u = n("Apws");
        e.a = {
            props: [ "type", "productId", "productName", "cover", "nickname", "avatar", "time", "bookWords", "articleWords", "bookName", "articleName", "progress" ],
            data: function() {
                return {
                    clickBtn: 0
                };
            },
            computed: {
                trackData: function() {
                    return {
                        event_code: "reading-minireader-share",
                        event_value: {
                            channel: this.clickBtn ? "share_to_friends" : "share_in_moment",
                            share_object: "article" === this.type ? "completed_article" : "completed_book",
                            bookproduct_id: this.productId,
                            bookproduct_name: this.productName,
                            article_name: this.articleName
                        }
                    };
                }
            },
            methods: {
                handleShareButtonLogData: function() {
                    this.clickBtn = 1, u.a.track(this.trackData);
                },
                handleShareMoments: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.genPoster(), t.clickBtn = 0, u.a.track(t.trackData);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                genPoster: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        var n, r, o, a, u, c;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "正在生成图片"
                                }), n = "article" === t.type ? "476" : "667", r = "375", o = "cover=" + t.cover + "&nickname=" + t.nickname + "&avatar=" + t.avatar + "&time=" + t.time + "&book_name=" + t.bookName + "&article_name=" + t.articleName + "&book_words=" + t.bookWords + "&article_words=" + t.articleWords + "&progress=" + t.progress, 
                                a = "https://www.shanbay.com/read/client/wx/share/" + t.type + "?" + o, e.next = 7, 
                                s.a.genImage({
                                    url: a,
                                    width: r,
                                    height: n
                                });

                              case 7:
                                u = e.sent, c = u.url, wx.hideLoading(), wx.navigateTo({
                                    url: "/pages/shareCaptureImage/main?type=" + t.type + "&url=" + c
                                });

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            }
        };
    },
    Vo7i: function(t, e, n) {
        "use strict";
        var r = n("7eUt").a.fetch;
        e.a = r;
    },
    W0Qm: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("Xxa5")), i = s(n("exGp")), o = s(n("CG4Y")), a = n("449I");
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var u = function(t) {
            return function(e) {
                return new Promise(function(n, r) {
                    var i = e || {};
                    i.success = function() {
                        n.apply(void 0, arguments);
                    }, i.fail = function() {
                        r.apply(void 0, arguments);
                    }, t(i);
                });
            };
        }, c = u(wx.showModal), f = u(wx.login), l = u(wx.openSetting), h = u(wx.getUserInfo), p = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return wx.hideLoading(), t.next = 3, c({
                            title: "授权提示",
                            content: "为保证正常使用，请允许授权",
                            confirmText: "去授权",
                            showCancel: !1
                        });

                      case 3:
                        if (!t.sent.confirm) {
                            t.next = 16;
                            break;
                        }
                        return t.next = 7, l();

                      case 7:
                        if (!t.sent.authSetting["scope.userInfo"]) {
                            t.next = 14;
                            break;
                        }
                        return wx.showLoading({
                            title: "登录中...",
                            mask: !0
                        }), t.next = 12, e();

                      case 12:
                        t.next = 16;
                        break;

                      case 14:
                        return t.next = 16, p(e);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), d = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                var n, a, s, u = e.apiV3UrlPrefix, c = e.wxCodename;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, f();

                      case 2:
                        return n = t.sent, a = n.code, s = void 0, t.prev = 5, t.next = 8, h();

                      case 8:
                        s = t.sent, t.next = 16;
                        break;

                      case 11:
                        return t.prev = 11, t.t0 = t.catch(5), t.next = 15, p((0, i.default)(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, d({
                                        apiV3UrlPrefix: u,
                                        wxCodename: c
                                    });

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, void 0);
                        })));

                      case 15:
                        return t.abrupt("return");

                      case 16:
                        return wx.setStorageSync("userInfo", s.userInfo), t.next = 19, (0, o.default)(u + "/bayuser/auth/miniprogram/register", {
                            method: "POST",
                            body: {
                                app_name: c,
                                code: a,
                                data: s
                            }
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 5, 11 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }();
        e.default = function(t) {
            var e = t.apiV3UrlPrefix, n = (t.loginPath, t.wxCodename);
            return function() {
                var t = (0, i.default)(r.default.mark(function t(i) {
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "登录中...",
                                mask: !0
                            }), t.prev = 1, t.next = 4, (0, o.default)(e + "/bayuser/user", {
                                isHandleError: !1
                            });

                          case 4:
                            t.next = 10;
                            break;

                          case 6:
                            return t.prev = 6, t.t0 = t.catch(1), t.next = 10, d({
                                apiV3UrlPrefix: e,
                                wxCodename: n
                            });

                          case 10:
                            wx.hideLoading(), i && (0, a.tryRedirect)(i, function() {}, function(t) {
                                console.log(t);
                            });

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0, [ [ 1, 6 ] ]);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
        };
    },
    W2nU: function(t, e) {
        var n, r, i = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0);
            } catch (e) {
                try {
                    return n.call(null, t, 0);
                } catch (e) {
                    return n.call(this, t, 0);
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (t) {
                n = o;
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (t) {
                r = a;
            }
        }();
        var u, c = [], f = !1, l = -1;
        function h() {
            f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && p());
        }
        function p() {
            if (!f) {
                var t = s(h);
                f = !0;
                for (var e = c.length; e; ) {
                    for (u = c, c = []; ++l < e; ) u && u[l].run();
                    l = -1, e = c.length;
                }
                u = null, f = !1, function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t);
                    } catch (e) {
                        try {
                            return r.call(null, t);
                        } catch (e) {
                            return r.call(this, t);
                        }
                    }
                }(t);
            }
        }
        function d(t, e) {
            this.fun = t, this.array = e;
        }
        function v() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new d(t, e)), 1 !== c.length || f || s(p);
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", 
        i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, 
        i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, 
        i.listeners = function(t) {
            return [];
        }, i.binding = function(t) {
            throw new Error("process.binding is not supported");
        }, i.cwd = function() {
            return "/";
        }, i.chdir = function(t) {
            throw new Error("process.chdir is not supported");
        }, i.umask = function() {
            return 0;
        };
    },
    W529: function(t, e, n) {
        var r = n("f931")(Object.keys, Object);
        t.exports = r;
    },
    WFiI: function(t, e) {
        t.exports = function(t) {
            var e = -1, n = Array(t.size);
            return t.forEach(function(t, r) {
                n[++e] = [ r, t ];
            }), n;
        };
    },
    WGFR: function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("//Fk"), a = n.n(o), s = n("d7EF"), u = n.n(s), c = n("exGp"), f = n.n(c), l = n("MPG0"), h = {
            state: {
                bookplanId: null,
                bookplanInfo: null,
                todayTask: null
            },
            getters: {
                currentBook: function(t) {
                    var e = t.bookplanInfo;
                    return e.books.find(function(t) {
                        return t.book_id === e.current_book_id;
                    });
                },
                usedMinTime: function(t) {
                    var e = t.todayTask;
                    return Math.round(e.used_time / 60);
                }
            },
            mutations: {
                fetchBookplan: function(t, e) {
                    var n = e.id, r = e.bookplanInfo, i = e.todayTask;
                    r.expire_date = r.expire_date, t.bookplanInfo = r, t.todayTask = i, t.bookplanId = n;
                }
            },
            actions: {
                fetchBookplan: function(t, e) {
                    var n = this, r = t.commit;
                    return f()(i.a.mark(function t() {
                        var o, s, c, f;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.a.all([ l.a.getUserBookplanDetail(e), l.a.getUserBookplanDailyData(e) ]);

                              case 2:
                                o = t.sent, s = u()(o, 2), c = s[0], f = s[1], r("fetchBookplan", {
                                    id: e,
                                    bookplanInfo: c,
                                    todayTask: f
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, n);
                    }))();
                }
            }
        };
        e.a = h;
    },
    WHce: function(t, e, n) {
        var r = n("037f"), i = n("Zk5a")(r);
        t.exports = i;
    },
    WQFf: function(t, e, n) {
        var r = n("VORN"), i = n("vi0E"), o = n("HT7L");
        t.exports = function(t) {
            return "function" != typeof t.constructor || o(t) ? {} : r(i(t));
        };
    },
    Whwk: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = e.uuidGen = function() {
            for (var t = [], e = 0; e < 36; e += 1) t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
            return t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", 
            t.join("");
        };
        e.getUUID = function() {
            var t = wx.getStorageSync("SHANBAY_MONITOR_UUID");
            return t || (t = r(), wx.setStorage({
                key: "SHANBAY_MONITOR_UUID",
                data: t
            }), t);
        };
    },
    WxI4: function(t, e) {
        t.exports = function() {
            this.__data__ = [], this.size = 0;
        };
    },
    WyC4: function(t, e) {
        var n = /\w*$/;
        t.exports = function(t) {
            var e = new t.constructor(t.source, n.exec(t));
            return e.lastIndex = t.lastIndex, e;
        };
    },
    X3l8: function(t, e, n) {
        var r = n("EuP9"), i = r.Buffer;
        function o(t, e) {
            for (var n in t) e[n] = t[n];
        }
        function a(t, e, n) {
            return i(t, e, n);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), 
        e.Buffer = a), o(i, a), a.from = function(t, e, n) {
            if ("number" == typeof t) throw new TypeError("Argument must not be a number");
            return i(t, e, n);
        }, a.alloc = function(t, e, n) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            var r = i(t);
            return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), 
            r;
        }, a.allocUnsafe = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return i(t);
        }, a.allocUnsafeSlow = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return r.SlowBuffer(t);
        };
    },
    X4X3: function(t, e, n) {
        "use strict";
        var r = n("X3l8").Buffer, i = r.isEncoding || function(t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;

              default:
                return !1;
            }
        };
        function o(t) {
            var e;
            switch (this.encoding = function(t) {
                var e = function(t) {
                    if (!t) return "utf8";
                    for (var e; ;) switch (t) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";

                      case "latin1":
                      case "binary":
                        return "latin1";

                      case "base64":
                      case "ascii":
                      case "hex":
                        return t;

                      default:
                        if (e) return;
                        t = ("" + t).toLowerCase(), e = !0;
                    }
                }(t);
                if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
                return e || t;
            }(t), this.encoding) {
              case "utf16le":
                this.text = u, this.end = c, e = 4;
                break;

              case "utf8":
                this.fillLast = s, e = 4;
                break;

              case "base64":
                this.text = f, this.end = l, e = 3;
                break;

              default:
                return this.write = h, void (this.end = p);
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e);
        }
        function a(t) {
            return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
        }
        function s(t) {
            var e = this.lastTotal - this.lastNeed, n = function(t, e, n) {
                if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
                if (t.lastNeed > 1 && e.length > 1) {
                    if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
                    if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, 
                    "�";
                }
            }(this, t);
            return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), 
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), 
            void (this.lastNeed -= t.length));
        }
        function u(t, e) {
            if ((t.length - e) % 2 == 0) {
                var n = t.toString("utf16le", e);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], 
                    this.lastChar[1] = t[t.length - 1], n.slice(0, -1);
                }
                return n;
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], 
            t.toString("utf16le", e, t.length - 1);
        }
        function c(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return e + this.lastChar.toString("utf16le", 0, n);
            }
            return e;
        }
        function f(t, e) {
            var n = (t.length - e) % 3;
            return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 
            1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], 
            this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n));
        }
        function l(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
        }
        function h(t) {
            return t.toString(this.encoding);
        }
        function p(t) {
            return t && t.length ? this.write(t) : "";
        }
        e.StringDecoder = o, o.prototype.write = function(t) {
            if (0 === t.length) return "";
            var e, n;
            if (this.lastNeed) {
                if (void 0 === (e = this.fillLast(t))) return "";
                n = this.lastNeed, this.lastNeed = 0;
            } else n = 0;
            return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || "";
        }, o.prototype.end = function(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "�" : e;
        }, o.prototype.text = function(t, e) {
            var n = function(t, e, n) {
                var r = e.length - 1;
                if (r < n) return 0;
                var i = a(e[r]);
                if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
                if (--r < n || -2 === i) return 0;
                if ((i = a(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
                if (--r < n || -2 === i) return 0;
                if ((i = a(e[r])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), 
                i;
                return 0;
            }(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = n;
            var r = t.length - (n - this.lastNeed);
            return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
        }, o.prototype.fillLast = function(t) {
            if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), 
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
        };
    },
    X8DO: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            };
        };
    },
    Xc4G: function(t, e, n) {
        var r = n("lktj"), i = n("1kS7"), o = n("NpIQ");
        t.exports = function(t) {
            var e = r(t), n = i.f;
            if (n) for (var a, s = n(t), u = o.f, c = 0; s.length > c; ) u.call(t, a = s[c++]) && e.push(a);
            return e;
        };
    },
    Xd32: function(t, e, n) {
        n("+tPU"), n("zQR9"), t.exports = n("5PlU");
    },
    Xxa5: function(t, e, n) {
        t.exports = n("jyFz");
    },
    YDHx: function(t, e, n) {
        var r = n("Uz1a"), i = n("UnEC");
        t.exports = function t(e, n, o, a, s) {
            return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, s));
        };
    },
    YeCl: function(t, e, n) {
        var r = n("CW5P"), i = n("A9mX"), o = n("v8Dt"), a = n("agim"), s = n("Dv2r");
        function u(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, 
        u.prototype.set = s, t.exports = u;
    },
    YkxI: function(t, e, n) {
        var r = n("wSKX"), i = n("Q2wK"), o = n("WHce");
        t.exports = function(t, e) {
            return o(i(t, e, r), t + "");
        };
    },
    Yobk: function(t, e, n) {
        var r = n("77Pl"), i = n("qio6"), o = n("xnc9"), a = n("ax3d")("IE_PROTO"), s = function() {}, u = function() {
            var t, e = n("ON07")("iframe"), r = o.length;
            for (e.style.display = "none", n("RPLV").appendChild(e), e.src = "javascript:", 
            (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), 
            t.close(), u = t.F; r--; ) delete u.prototype[o[r]];
            return u();
        };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[a] = t) : n = u(), 
            void 0 === e ? n : i(n, e);
        };
    },
    YsVG: function(t, e, n) {
        var r = n("z4hc"), i = n("S7p9"), o = n("Dc0G"), a = o && o.isTypedArray, s = a ? i(a) : r;
        t.exports = s;
    },
    Z2pD: function(t, e, n) {
        var r = n("dCZQ"), i = "__lodash_hash_undefined__";
        t.exports = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this;
        };
    },
    Z8KY: function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = {
            get: function(t) {
                return Object(i.a)(r.c + "/reading/book_products/" + t);
            },
            getComments: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ipp: 10,
                    page: 1
                };
                return Object(i.a)(r.c + "/reading/books/" + t + "/comments", {
                    data: e
                });
            },
            getCatalogs: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ipp: 10,
                    page: 1
                };
                return Object(i.a)(r.c + "/reading/books/" + t + "/catalogs", {
                    data: e
                });
            },
            logPurchase: function(t, e) {
                return Object(i.a)(r.c + "/reading/mini_reader/purchase/log", {
                    method: "POST",
                    body: {
                        object_id: t,
                        object_type: e
                    }
                });
            },
            getBookDetail: function(t) {
                return Object(i.a)(r.c + "/reading/book_detail", {
                    data: {
                        book_id: t
                    }
                });
            }
        };
        e.a = o;
    },
    ZGh9: function(t, e) {
        var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            var i = typeof t;
            return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e;
        };
    },
    ZeJi: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.loginRequiredWrapper = e.autoLoginRequiredWrapper = void 0;
        var r = s(n("Xxa5")), i = s(n("exGp")), o = s(n("Zrlr")), a = s(n("CG4Y"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var u = function t(e) {
            (0, o.default)(this, t), this.name = "loginError", this.message = e;
        }, c = function(t) {
            return function(e) {
                return new Promise(function(n, r) {
                    var i = e || {};
                    i.success = function() {
                        n.apply(void 0, arguments);
                    }, i.fail = function() {
                        r.apply(void 0, arguments);
                    }, t(i);
                });
            };
        }, f = function() {
            var t = (0, i.default)(r.default.mark(function t() {
                var e;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, c(wx.login)();

                      case 2:
                        if ("login:ok" !== (e = t.sent).errMsg) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt("return", e.code);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(), l = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, (0, a.default)(e + "/bayuser/user", {
                            isHandleError: !1
                        });

                      case 2:
                        return t.abrupt("return", t.sent);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), h = function() {
            var t = (0, i.default)(r.default.mark(function t(e, n, i) {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, (0, a.default)(e + "/bayuser/auth/miniprogram/login", {
                            method: "POST",
                            body: {
                                app_name: i,
                                code: n
                            },
                            isHandleError: !1
                        });

                      case 2:
                        return t.abrupt("return", t.sent);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0);
            }));
            return function(e, n, r) {
                return t.apply(this, arguments);
            };
        }(), p = function(t, e) {
            var n = t.wxCodename, r = t.code;
            return (0, a.default)(e + "/bayuser/auth/miniprogram/register", {
                method: "POST",
                body: {
                    app_name: n,
                    code: r,
                    data: t
                },
                isHandleError: !1
            });
        }, d = function() {
            var t = (0, i.default)(r.default.mark(function t(e, n, i, o) {
                var a;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e.wxCodename = i, e.code = n, t.prev = 2, t.next = 5, p(e, o);

                      case 5:
                        if (a = t.sent, !a.id) {
                            t.next = 9;
                            break;
                        }
                        return t.abrupt("return", l(o));

                      case 9:
                        throw new u("create token fail");

                      case 12:
                        throw t.prev = 12, t.t0 = t.catch(2), t.t0;

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 2, 12 ] ]);
            }));
            return function(e, n, r, i) {
                return t.apply(this, arguments);
            };
        }(), v = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                var n, i, o = e.apiV3UrlPrefix, a = e.wxCodename;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, f();

                      case 3:
                        if (n = t.sent) {
                            t.next = 6;
                            break;
                        }
                        throw new Error("获取登录code失败");

                      case 6:
                        return t.next = 8, h(o, n, a);

                      case 8:
                        if (i = t.sent, !i.id) {
                            t.next = 12;
                            break;
                        }
                        return t.abrupt("return", l(o));

                      case 12:
                        throw new u("can not read token");

                      case 15:
                        throw t.prev = 15, t.t0 = t.catch(0), t.t0;

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 0, 15 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }();
        e.autoLoginRequiredWrapper = function(t) {
            var e = t.apiV3UrlPrefix, n = t.wxCodename;
            return (0, i.default)(r.default.mark(function t() {
                var i;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = void 0, t.prev = 1, t.next = 4, l(e);

                      case 4:
                        i = t.sent, t.next = 20;
                        break;

                      case 7:
                        if (t.prev = 7, t.t0 = t.catch(1), 401 === t.t0.statusCode) {
                            t.next = 11;
                            break;
                        }
                        throw t.t0;

                      case 11:
                        return t.prev = 11, t.next = 14, v({
                            apiV3UrlPrefix: e,
                            wxCodename: n
                        });

                      case 14:
                        i = t.sent, t.next = 20;
                        break;

                      case 17:
                        throw t.prev = 17, t.t1 = t.catch(11), t.t1;

                      case 20:
                        return t.abrupt("return", i);

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 1, 7 ], [ 11, 17 ] ]);
            }));
        }, e.loginRequiredWrapper = function(t) {
            var e = t.apiV3UrlPrefix, n = t.wxCodename;
            return function(t, r) {
                return d(t, r, n, e);
            };
        };
    },
    Zfb5: function(t, e) {},
    Zk5a: function(t, e) {
        var n = 800, r = 16, i = Date.now;
        t.exports = function(t) {
            var e = 0, o = 0;
            return function() {
                var a = i(), s = r - (a - o);
                if (o = a, s > 0) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    Zrlr: function(t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        };
    },
    Zzip: function(t, e, n) {
        t.exports = {
            default: n("/n6Q"),
            __esModule: !0
        };
    },
    aCM0: function(t, e, n) {
        var r = n("NkRn"), i = n("uLhX"), o = n("+66z"), a = "[object Null]", s = "[object Undefined]", u = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? s : a : u && u in Object(t) ? i(t) : o(t);
        };
    },
    aQOO: function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t);
        };
    },
    agim: function(t, e, n) {
        var r = n("pTUa");
        t.exports = function(t) {
            return r(this, t).has(t);
        };
    },
    apOE: function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i");
        e.a = {
            listKnowledgeCardsByBookId: function(t) {
                return Object(i.a)(r.c + "/bookplan/books/" + t + "/article_knowledges");
            },
            listKnowledgeCardsByArticleId: function(t) {
                return Object(i.a)(r.c + "/bookplan/article_knowledges/" + t);
            },
            listKnowledgeCardsByArticleIds: function(t) {
                return Object(i.a)(r.c + "/bookplan/article_knowledges", {
                    method: "POST",
                    body: {
                        article_ids: t
                    }
                });
            }
        };
    },
    ax3d: function(t, e, n) {
        var r = n("e8AB")("keys"), i = n("3Eo+");
        t.exports = function(t) {
            return r[t] || (r[t] = i(t));
        };
    },
    bGc4: function(t, e, n) {
        var r = n("gGqR"), i = n("Rh28");
        t.exports = function(t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    bIbi: function(t, e, n) {
        var r = n("ICSD")(n("TQ3y"), "WeakMap");
        t.exports = r;
    },
    bJWQ: function(t, e, n) {
        var r = n("duB3"), i = n("KmWZ"), o = n("NqZt"), a = n("E4Hj"), s = n("G2xm"), u = n("zpVT");
        function c(t) {
            var e = this.__data__ = new r(t);
            this.size = e.size;
        }
        c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = s, 
        c.prototype.set = u, t.exports = c;
    },
    bO0Y: function(t, e, n) {
        var r = n("ICSD")(n("TQ3y"), "Promise");
        t.exports = r;
    },
    bOdI: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("C4MV"));
        e.default = function(t, e, n) {
            return e in t ? (0, r.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        };
    },
    bRrM: function(t, e, n) {
        "use strict";
        var r = n("7KvD"), i = n("FeBl"), o = n("evD5"), a = n("+E39"), s = n("dSzd")("species");
        t.exports = function(t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            a && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    blYT: function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }).call(e, n("DuR2"));
    },
    "c/Tr": function(t, e, n) {
        t.exports = {
            default: n("5zde"),
            __esModule: !0
        };
    },
    c3Kw: function(t, e) {},
    cSWu: function(t, e, n) {
        (e = t.exports = n("Rt1F")).Stream = e, e.Readable = e, e.Writable = n("7dSG"), 
        e.Duplex = n("DsFX"), e.Transform = n("D1Va"), e.PassThrough = n("f48b");
    },
    cdq7: function(t, e) {
        t.exports = function(t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    crlp: function(t, e, n) {
        var r = n("7KvD"), i = n("FeBl"), o = n("O4g8"), a = n("Kh4W"), s = n("evD5").f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            });
        };
    },
    d4US: function(t, e, n) {
        var r = n("ICSD")(n("TQ3y"), "DataView");
        t.exports = r;
    },
    d7EF: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = o(n("us/S")), i = o(n("BO1k"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.default = function() {
            return function(t, e) {
                if (Array.isArray(t)) return t;
                if ((0, r.default)(Object(t))) return function(t, e) {
                    var n = [], r = !0, o = !1, a = void 0;
                    try {
                        for (var s, u = (0, i.default)(t); !(r = (s = u.next()).done) && (n.push(s.value), 
                        !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        o = !0, a = t;
                    } finally {
                        try {
                            !r && u.return && u.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                    return n;
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    },
    dCZQ: function(t, e, n) {
        var r = n("ICSD")(Object, "create");
        t.exports = r;
    },
    dFpP: function(t, e, n) {
        var r = n("imBK"), i = Array.prototype.splice;
        t.exports = function(t) {
            var e = this.__data__, n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
        };
    },
    dNDb: function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                };
            } catch (t) {
                return {
                    e: !0,
                    v: t
                };
            }
        };
    },
    dSzd: function(t, e, n) {
        var r = n("e8AB")("wks"), i = n("3Eo+"), o = n("7KvD").Symbol, a = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
        }).store = r;
    },
    dY0y: function(t, e, n) {
        var r = n("dSzd")("iterator"), i = !1;
        try {
            var o = [ 7 ][r]();
            o.return = function() {
                i = !0;
            }, Array.from(o, function() {
                throw 2;
            });
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [ 7 ], a = o[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    };
                }, o[r] = function() {
                    return a;
                }, t(o);
            } catch (t) {}
            return n;
        };
    },
    dZoO: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("P6Rp"));
        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return Array.from(t);
        }
        e.default = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t) {
                return t;
            };
            return function(o, a, s) {
                return s === t && [].concat(i(o), i((0, r.default)(a, o, function(t) {
                    return e.indexOf(n(t)) >= 0;
                })));
            };
        };
    },
    deUO: function(t, e, n) {
        var r = n("imBK");
        t.exports = function(t, e) {
            var n = this.__data__, i = r(n, t);
            return i < 0 ? (++this.size, n.push([ t, e ])) : n[i][1] = e, this;
        };
    },
    dmQx: function(t, e) {
        t.exports = function(t, e) {
            return t.has(e);
        };
    },
    duB3: function(t, e, n) {
        var r = n("WxI4"), i = n("dFpP"), o = n("JBvZ"), a = n("2Hvv"), s = n("deUO");
        function u(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, 
        u.prototype.set = s, t.exports = u;
    },
    dwsC: function(t, e, n) {
        var r = n("86tT"), i = n("S7p9"), o = n("Dc0G"), a = o && o.isMap, s = a ? i(a) : r;
        t.exports = s;
    },
    "e4p/": function(t, e) {
        t.exports = {
            isArray: function(t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t);
            }
        };
    },
    e6n0: function(t, e, n) {
        var r = n("evD5").f, i = n("D2L2"), o = n("dSzd")("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            });
        };
    },
    e8AB: function(t, e, n) {
        var r = n("FeBl"), i = n("7KvD"), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: r.version,
            mode: n("O4g8") ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    eFps: function(t, e, n) {
        var r = n("+gg+"), i = function() {
            var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : "";
        }();
        t.exports = function(t) {
            return !!i && i in t;
        };
    },
    eP4g: function(t, e, n) {
        var r = n("gHOb"), i = n("UnEC"), o = "[object Set]";
        t.exports = function(t) {
            return i(t) && r(t) == o;
        };
    },
    eRdb: function(t, e, n) {
        "use strict";
        var r = n("HTtT"), i = n("kXyR");
        var o = function(t) {
            n("Zfb5");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-e4f245da", null);
        e.a = a.exports;
    },
    eVIm: function(t, e, n) {
        var r = n("dCZQ"), i = "__lodash_hash_undefined__", o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    evD5: function(t, e, n) {
        var r = n("77Pl"), i = n("SfB7"), o = n("MmMw"), a = Object.defineProperty;
        e.f = n("+E39") ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return a(t, e, n);
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        };
    },
    exGp: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("//Fk"));
        e.default = function(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new r.default(function(t, n) {
                    return function i(o, a) {
                        try {
                            var s = e[o](a), u = s.value;
                        } catch (t) {
                            return void n(t);
                        }
                        if (!s.done) return r.default.resolve(u).then(function(t) {
                            i("next", t);
                        }, function(t) {
                            i("throw", t);
                        });
                        t(u);
                    }("next");
                });
            };
        };
    },
    f48b: function(t, e, n) {
        "use strict";
        t.exports = o;
        var r = n("D1Va"), i = n("jOgh");
        function o(t) {
            if (!(this instanceof o)) return new o(t);
            r.call(this, t);
        }
        i.inherits = n("LC74"), i.inherits(o, r), o.prototype._transform = function(t, e, n) {
            n(null, t);
        };
    },
    f931: function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return t(e(n));
            };
        };
    },
    fBQ2: function(t, e, n) {
        "use strict";
        var r = n("evD5"), i = n("X8DO");
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n;
        };
    },
    fJUb: function(t, e, n) {
        var r = n("77Pl"), i = n("EqjI"), o = n("qARP");
        t.exports = function(t, e) {
            if (r(t), i(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    fT9R: function(t, e, n) {
        (function(e) {
            var r = n("IRPJ");
            t.exports = function(t, n) {
                t instanceof e && (t = t.toString());
                var i = null;
                if ("string" == typeof t) try {
                    i = JSON.parse(t);
                } catch (t) {
                    throw new Error("The JSON structure is invalid");
                } else i = t;
                return r(i, n);
            };
        }).call(e, n("EuP9").Buffer);
    },
    fWfb: function(t, e, n) {
        "use strict";
        var r = n("7KvD"), i = n("D2L2"), o = n("+E39"), a = n("kM2E"), s = n("880/"), u = n("06OY").KEY, c = n("S82l"), f = n("e8AB"), l = n("e6n0"), h = n("3Eo+"), p = n("dSzd"), d = n("Kh4W"), v = n("crlp"), y = n("Xc4G"), g = n("7UMu"), m = n("77Pl"), b = n("EqjI"), _ = n("TcQ7"), w = n("MmMw"), x = n("X8DO"), E = n("Yobk"), A = n("Rrel"), k = n("LKZe"), T = n("evD5"), O = n("lktj"), S = k.f, C = T.f, j = A.f, P = r.Symbol, R = r.JSON, D = R && R.stringify, I = p("_hidden"), M = p("toPrimitive"), N = {}.propertyIsEnumerable, L = f("symbol-registry"), F = f("symbols"), B = f("op-symbols"), U = Object.prototype, K = "function" == typeof P, H = r.QObject, Y = !H || !H.prototype || !H.prototype.findChild, V = o && c(function() {
            return 7 != E(C({}, "a", {
                get: function() {
                    return C(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(t, e, n) {
            var r = S(U, e);
            r && delete U[e], C(t, e, n), r && t !== U && C(U, e, r);
        } : C, G = function(t) {
            var e = F[t] = E(P.prototype);
            return e._k = t, e;
        }, W = K && "symbol" == typeof P.iterator ? function(t) {
            return "symbol" == typeof t;
        } : function(t) {
            return t instanceof P;
        }, q = function(t, e, n) {
            return t === U && q(B, e, n), m(t), e = w(e, !0), m(n), i(F, e) ? (n.enumerable ? (i(t, I) && t[I][e] && (t[I][e] = !1), 
            n = E(n, {
                enumerable: x(0, !1)
            })) : (i(t, I) || C(t, I, x(1, {})), t[I][e] = !0), V(t, e, n)) : C(t, e, n);
        }, $ = function(t, e) {
            m(t);
            for (var n, r = y(e = _(e)), i = 0, o = r.length; o > i; ) q(t, n = r[i++], e[n]);
            return t;
        }, z = function(t) {
            var e = N.call(this, t = w(t, !0));
            return !(this === U && i(F, t) && !i(B, t)) && (!(e || !i(this, t) || !i(F, t) || i(this, I) && this[I][t]) || e);
        }, Q = function(t, e) {
            if (t = _(t), e = w(e, !0), t !== U || !i(F, e) || i(B, e)) {
                var n = S(t, e);
                return !n || !i(F, e) || i(t, I) && t[I][e] || (n.enumerable = !0), n;
            }
        }, X = function(t) {
            for (var e, n = j(_(t)), r = [], o = 0; n.length > o; ) i(F, e = n[o++]) || e == I || e == u || r.push(e);
            return r;
        }, J = function(t) {
            for (var e, n = t === U, r = j(n ? B : _(t)), o = [], a = 0; r.length > a; ) !i(F, e = r[a++]) || n && !i(U, e) || o.push(F[e]);
            return o;
        };
        K || (s((P = function() {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
                this === U && e.call(B, n), i(this, I) && i(this[I], t) && (this[I][t] = !1), V(this, t, x(1, n));
            };
            return o && Y && V(U, t, {
                configurable: !0,
                set: e
            }), G(t);
        }).prototype, "toString", function() {
            return this._k;
        }), k.f = Q, T.f = q, n("n0T6").f = A.f = X, n("NpIQ").f = z, n("1kS7").f = J, o && !n("O4g8") && s(U, "propertyIsEnumerable", z, !0), 
        d.f = function(t) {
            return G(p(t));
        }), a(a.G + a.W + a.F * !K, {
            Symbol: P
        });
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt; ) p(Z[tt++]);
        for (var et = O(p.store), nt = 0; et.length > nt; ) v(et[nt++]);
        a(a.S + a.F * !K, "Symbol", {
            for: function(t) {
                return i(L, t += "") ? L[t] : L[t] = P(t);
            },
            keyFor: function(t) {
                if (!W(t)) throw TypeError(t + " is not a symbol!");
                for (var e in L) if (L[e] === t) return e;
            },
            useSetter: function() {
                Y = !0;
            },
            useSimple: function() {
                Y = !1;
            }
        }), a(a.S + a.F * !K, "Object", {
            create: function(t, e) {
                return void 0 === e ? E(t) : $(E(t), e);
            },
            defineProperty: q,
            defineProperties: $,
            getOwnPropertyDescriptor: Q,
            getOwnPropertyNames: X,
            getOwnPropertySymbols: J
        }), R && a(a.S + a.F * (!K || c(function() {
            var t = P();
            return "[null]" != D([ t ]) || "{}" != D({
                a: t
            }) || "{}" != D(Object(t));
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [ t ], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !W(t)) return g(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !W(e)) return e;
                }), r[1] = e, D.apply(R, r);
            }
        }), P.prototype[M] || n("hJx8")(P.prototype, M, P.prototype.valueOf), l(P, "Symbol"), 
        l(Math, "Math", !0), l(r.JSON, "JSON", !0);
    },
    fZjL: function(t, e, n) {
        t.exports = {
            default: n("jFbC"),
            __esModule: !0
        };
    },
    fkB2: function(t, e, n) {
        var r = n("UuGF"), i = Math.max, o = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
        };
    },
    fxRn: function(t, e, n) {
        n("+tPU"), n("zQR9"), t.exports = n("g8Ux");
    },
    g8Ux: function(t, e, n) {
        var r = n("77Pl"), i = n("3fs2");
        t.exports = n("FeBl").getIterator = function(t) {
            var e = i(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t));
        };
    },
    gD96: function(t, e, n) {
        "use strict";
        var r = n("wGhD"), i = n("xOcS");
        var o = function(t) {
            n("3hRz");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-4e116356", null);
        e.a = a.exports;
    },
    gGqR: function(t, e, n) {
        var r = n("aCM0"), i = n("yCNF"), o = "[object AsyncFunction]", a = "[object Function]", s = "[object GeneratorFunction]", u = "[object Proxy]";
        t.exports = function(t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == s || e == o || e == u;
        };
    },
    gHOb: function(t, e, n) {
        var r = n("d4US"), i = n("POb3"), o = n("bO0Y"), a = n("5N57"), s = n("bIbi"), u = n("aCM0"), c = n("Ai/T"), f = c(r), l = c(i), h = c(o), p = c(a), d = c(s), v = u;
        (r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || i && "[object Map]" != v(new i()) || o && "[object Promise]" != v(o.resolve()) || a && "[object Set]" != v(new a()) || s && "[object WeakMap]" != v(new s())) && (v = function(t) {
            var e = u(t), n = "[object Object]" == e ? t.constructor : void 0, r = n ? c(n) : "";
            if (r) switch (r) {
              case f:
                return "[object DataView]";

              case l:
                return "[object Map]";

              case h:
                return "[object Promise]";

              case p:
                return "[object Set]";

              case d:
                return "[object WeakMap]";
            }
            return e;
        }), t.exports = v;
    },
    ggOT: function(t, e, n) {
        (function(t) {
            var r = n("TQ3y"), i = n("gwcX"), o = "object" == typeof e && e && !e.nodeType && e, a = o && "object" == typeof t && t && !t.nodeType && t, s = a && a.exports === o ? r.Buffer : void 0, u = (s ? s.isBuffer : void 0) || i;
            t.exports = u;
        }).call(e, n("3IRH")(t));
    },
    gwcX: function(t, e) {
        t.exports = function() {
            return !1;
        };
    },
    h65t: function(t, e, n) {
        var r = n("UuGF"), i = n("52gC");
        t.exports = function(t) {
            return function(e, n) {
                var o, a, s = String(i(e)), u = r(n), c = s.length;
                return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536;
            };
        };
    },
    hJx8: function(t, e, n) {
        var r = n("evD5"), i = n("X8DO");
        t.exports = n("+E39") ? function(t, e, n) {
            return r.f(t, e, i(1, n));
        } : function(t, e, n) {
            return t[e] = n, t;
        };
    },
    hKoQ: function(t, e, n) {
        (function(e, n) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
            !function(e, n) {
                t.exports = n();
            }(0, function() {
                "use strict";
                function t(t) {
                    return "function" == typeof t;
                }
                var r = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                }, i = 0, o = void 0, a = void 0, s = function(t, e) {
                    d[i] = t, d[i + 1] = e, 2 === (i += 2) && (a ? a(v) : y());
                };
                var u = "undefined" != typeof window ? window : void 0, c = u || {}, f = c.MutationObserver || c.WebKitMutationObserver, l = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e), h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function p() {
                    var t = setTimeout;
                    return function() {
                        return t(v, 1);
                    };
                }
                var d = new Array(1e3);
                function v() {
                    for (var t = 0; t < i; t += 2) {
                        (0, d[t])(d[t + 1]), d[t] = void 0, d[t + 1] = void 0;
                    }
                    i = 0;
                }
                var y = void 0;
                function g(t, e) {
                    var n = this, r = new this.constructor(_);
                    void 0 === r[b] && M(r);
                    var i = n._state;
                    if (i) {
                        var o = arguments[i - 1];
                        s(function() {
                            return D(i, r, o, n._result);
                        });
                    } else P(n, r, t, e);
                    return r;
                }
                function m(t) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var e = new this(_);
                    return O(e, t), e;
                }
                y = l ? function() {
                    return e.nextTick(v);
                } : f ? function() {
                    var t = 0, e = new f(v), n = document.createTextNode("");
                    return e.observe(n, {
                        characterData: !0
                    }), function() {
                        n.data = t = ++t % 2;
                    };
                }() : h ? function() {
                    var t = new MessageChannel();
                    return t.port1.onmessage = v, function() {
                        return t.port2.postMessage(0);
                    };
                }() : void 0 === u ? function() {
                    try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function() {
                            o(v);
                        } : p();
                    } catch (t) {
                        return p();
                    }
                }() : p();
                var b = Math.random().toString(36).substring(2);
                function _() {}
                var w = void 0, x = 1, E = 2, A = {
                    error: null
                };
                function k(t) {
                    try {
                        return t.then;
                    } catch (t) {
                        return A.error = t, A;
                    }
                }
                function T(e, n, r) {
                    n.constructor === e.constructor && r === g && n.constructor.resolve === m ? function(t, e) {
                        e._state === x ? C(t, e._result) : e._state === E ? j(t, e._result) : P(e, void 0, function(e) {
                            return O(t, e);
                        }, function(e) {
                            return j(t, e);
                        });
                    }(e, n) : r === A ? (j(e, A.error), A.error = null) : void 0 === r ? C(e, n) : t(r) ? function(t, e, n) {
                        s(function(t) {
                            var r = !1, i = function(t, e, n, r) {
                                try {
                                    t.call(e, n, r);
                                } catch (t) {
                                    return t;
                                }
                            }(n, e, function(n) {
                                r || (r = !0, e !== n ? O(t, n) : C(t, n));
                            }, function(e) {
                                r || (r = !0, j(t, e));
                            }, t._label);
                            !r && i && (r = !0, j(t, i));
                        }, t);
                    }(e, n, r) : C(e, n);
                }
                function O(t, e) {
                    t === e ? j(t, new TypeError("You cannot resolve a promise with itself")) : !function(t) {
                        var e = typeof t;
                        return null !== t && ("object" === e || "function" === e);
                    }(e) ? C(t, e) : T(t, e, k(e));
                }
                function S(t) {
                    t._onerror && t._onerror(t._result), R(t);
                }
                function C(t, e) {
                    t._state === w && (t._result = e, t._state = x, 0 !== t._subscribers.length && s(R, t));
                }
                function j(t, e) {
                    t._state === w && (t._state = E, t._result = e, s(S, t));
                }
                function P(t, e, n, r) {
                    var i = t._subscribers, o = i.length;
                    t._onerror = null, i[o] = e, i[o + x] = n, i[o + E] = r, 0 === o && t._state && s(R, t);
                }
                function R(t) {
                    var e = t._subscribers, n = t._state;
                    if (0 !== e.length) {
                        for (var r = void 0, i = void 0, o = t._result, a = 0; a < e.length; a += 3) r = e[a], 
                        i = e[a + n], r ? D(n, r, i, o) : i(o);
                        t._subscribers.length = 0;
                    }
                }
                function D(e, n, r, i) {
                    var o = t(r), a = void 0, s = void 0, u = void 0, c = void 0;
                    if (o) {
                        if ((a = function(t, e) {
                            try {
                                return t(e);
                            } catch (t) {
                                return A.error = t, A;
                            }
                        }(r, i)) === A ? (c = !0, s = a.error, a.error = null) : u = !0, n === a) return void j(n, new TypeError("A promises callback cannot return that same promise."));
                    } else a = i, u = !0;
                    n._state !== w || (o && u ? O(n, a) : c ? j(n, s) : e === x ? C(n, a) : e === E && j(n, a));
                }
                var I = 0;
                function M(t) {
                    t[b] = I++, t._state = void 0, t._result = void 0, t._subscribers = [];
                }
                var N = function() {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(_), this.promise[b] || M(this.promise), 
                        r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 
                        0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, 
                        this._enumerate(e), 0 === this._remaining && C(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"));
                    }
                    return t.prototype._enumerate = function(t) {
                        for (var e = 0; this._state === w && e < t.length; e++) this._eachEntry(t[e], e);
                    }, t.prototype._eachEntry = function(t, e) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === m) {
                            var i = k(t);
                            if (i === g && t._state !== w) this._settledAt(t._state, e, t._result); else if ("function" != typeof i) this._remaining--, 
                            this._result[e] = t; else if (n === L) {
                                var o = new n(_);
                                T(o, t, i), this._willSettleAt(o, e);
                            } else this._willSettleAt(new n(function(e) {
                                return e(t);
                            }), e);
                        } else this._willSettleAt(r(t), e);
                    }, t.prototype._settledAt = function(t, e, n) {
                        var r = this.promise;
                        r._state === w && (this._remaining--, t === E ? j(r, n) : this._result[e] = n), 
                        0 === this._remaining && C(r, this._result);
                    }, t.prototype._willSettleAt = function(t, e) {
                        var n = this;
                        P(t, void 0, function(t) {
                            return n._settledAt(x, e, t);
                        }, function(t) {
                            return n._settledAt(E, e, t);
                        });
                    }, t;
                }();
                var L = function() {
                    function e(t) {
                        this[b] = I++, this._result = this._state = void 0, this._subscribers = [], _ !== t && ("function" != typeof t && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                        }(), this instanceof e ? function(t, e) {
                            try {
                                e(function(e) {
                                    O(t, e);
                                }, function(e) {
                                    j(t, e);
                                });
                            } catch (e) {
                                j(t, e);
                            }
                        }(this, t) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        }());
                    }
                    return e.prototype.catch = function(t) {
                        return this.then(null, t);
                    }, e.prototype.finally = function(e) {
                        var n = this.constructor;
                        return t(e) ? this.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t;
                            });
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t;
                            });
                        }) : this.then(e, e);
                    }, e;
                }();
                return L.prototype.then = g, L.all = function(t) {
                    return new N(this, t).promise;
                }, L.race = function(t) {
                    var e = this;
                    return r(t) ? new e(function(n, r) {
                        for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(n, r);
                    }) : new e(function(t, e) {
                        return e(new TypeError("You must pass an array to race."));
                    });
                }, L.resolve = m, L.reject = function(t) {
                    var e = new this(_);
                    return j(e, t), e;
                }, L._setScheduler = function(t) {
                    a = t;
                }, L._setAsap = function(t) {
                    s = t;
                }, L._asap = s, L.polyfill = function() {
                    var t = void 0;
                    if (void 0 !== n) t = n; else if ("undefined" != typeof self) t = self; else try {
                        t = Function("return this")();
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                    var e = t.Promise;
                    if (e) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(e.resolve());
                        } catch (t) {}
                        if ("[object Promise]" === r && !e.cast) return;
                    }
                    t.Promise = L;
                }, L.Promise = L, L;
            });
        }).call(e, n("W2nU"), n("DuR2"));
    },
    hrPF: function(t, e) {
        t.exports = function(t, e) {
            var n = -1, r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
        };
    },
    hvHy: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n("CG4Y"), i = y(n("W0Qm")), o = n("ZeJi"), a = y(n("CzSr")), s = n("449I"), u = y(n("tpoA")), c = y(n("8ZyN")), f = y(n("6gN+")), l = y(n("s252")), h = y(n("GH0O")), p = y(n("tFQi")), d = n("nYYt"), v = y(n("iHg0"));
        function y(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.default = function(t) {
            var e = Object.assign({}, {
                apiV1UrlPrefix: "https://www.shanbay.com/api/v1",
                apiV2UrlPrefix: "https://www.shanbay.com/api/v2",
                apiV3UrlPrefix: "https://apiv3.shanbay.com",
                loginPath: null,
                wxCodename: null,
                isProd: !0,
                showReqLoading: !1,
                trackApiUrl: "https://h10.shanbay.com/s/track/wxmp",
                notShowReqLoadingPages: [],
                isHandleFetchError: !0
            }, t);
            return {
                fetch: (0, r.requestWrapper)({
                    loginPath: e.loginPath,
                    showReqLoading: e.showReqLoading,
                    notShowReqLoadingPages: e.notShowReqLoadingPages,
                    isHandleError: e.isHandleFetchError
                }),
                baylog: (0, a.default)({
                    apiV2UrlPrefix: e.apiV2UrlPrefix,
                    isProd: e.isProd
                }),
                loginRequired: (0, i.default)({
                    apiV3UrlPrefix: e.apiV3UrlPrefix,
                    loginPath: e.loginPath,
                    wxCodename: e.wxCodename
                }),
                trackPage: (0, u.default)({
                    wxCodename: e.wxCodename,
                    trackApiUrl: e.trackApiUrl
                }),
                autoLogin: (0, o.autoLoginRequiredWrapper)({
                    apiV3UrlPrefix: e.apiV3UrlPrefix,
                    wxCodename: e.wxCodename
                }),
                login: (0, o.loginRequiredWrapper)({
                    apiV3UrlPrefix: e.apiV3UrlPrefix,
                    wxCodename: e.wxCodename
                }),
                formSubmit: (0, f.default)({
                    isProd: e.isProd,
                    pushFormIdsApiUrl: e.pushFormIdsApiUrl,
                    wxCodename: e.wxCodename
                }).formSubmit,
                pushFormId: (0, f.default)({
                    isProd: e.isProd,
                    pushFormIdsApiUrl: e.pushFormIdsApiUrl,
                    wxCodename: e.wxCodename
                }).pushFormId,
                uploadFile: (0, l.default)({
                    isProd: e.isProd,
                    BASE_URL: e.BASE_URL,
                    UPLOAD_AUDIO_CODE: e.UPLOAD_AUDIO_CODE,
                    UPLOAD_IMAGE_CODE: e.UPLOAD_IMAGE_CODE
                }),
                setStorageAsync: d.setStorageAsync,
                getStorageAsync: d.getStorageAsync,
                getStorageBatchAsync: d.getStorageBatchAsync,
                checkMini: v.default.checkMini,
                checkSDK: v.default.checkSDK,
                promisify: h.default,
                resizeImage: p.default,
                redirect: s.redirect,
                config: e,
                monitor: c.default
            };
        };
    },
    hygk: function(t, e, n) {
        var r = n("YDHx");
        t.exports = function(t, e) {
            return r(t, e);
        };
    },
    i4ON: function(t, e, n) {
        var r = n("nw3t"), i = n("22B7"), o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) {
            var a = t[e];
            o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n);
        };
    },
    i6nN: function(t, e) {
        t.exports = function(t, e, n) {
            for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
            return -1;
        };
    },
    iFDI: function(t, e) {
        var n = {
            utf8: {
                stringToBytes: function(t) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(n.bin.bytesToString(t)));
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                    return e;
                },
                bytesToString: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                    return e.join("");
                }
            }
        };
        t.exports = n;
    },
    iHg0: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {
            selfUpdateManager: null,
            checkMini: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this.selfUpdateManager && wx.canIUse("getUpdateManager")) {
                    var e = wx.getUpdateManager();
                    this.selfUpdateManager = e, e.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，" + (t ? "点击重启应用。" : "是否重启应用？"),
                            showCancel: !t,
                            success: function(t) {
                                t.confirm && e.applyUpdate();
                            }
                        });
                    });
                }
            },
            checkSDK: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.9.0";
                return !!wx.canIUse("getSystemInfoSync") && wx.getSystemInfoSync().SDKVersion >= t;
            }
        };
        e.default = r;
    },
    iP15: function(t, e, n) {
        (function(e) {
            function n(t) {
                try {
                    if (!e.localStorage) return !1;
                } catch (t) {
                    return !1;
                }
                var n = e.localStorage[t];
                return null != n && "true" === String(n).toLowerCase();
            }
            t.exports = function(t, e) {
                if (n("noDeprecation")) return t;
                var r = !1;
                return function() {
                    if (!r) {
                        if (n("throwDeprecation")) throw new Error(e);
                        n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
                    }
                    return t.apply(this, arguments);
                };
            };
        }).call(e, n("DuR2"));
    },
    iUbK: function(t, e, n) {
        var r = n("7KvD").navigator;
        t.exports = r && r.userAgent || "";
    },
    imBK: function(t, e, n) {
        var r = n("22B7");
        t.exports = function(t, e) {
            for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    iyFI: function(t, e, n) {
        "use strict";
        var r = n("vSr5"), i = n("mJkG");
        var o = function(t) {
            n("39Ks");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-781f816b", null);
        e.a = a.exports;
    },
    jD7S: function(t, e, n) {
        var r = n("tv3T"), i = n("ktak");
        t.exports = function(t, e) {
            return t && r(e, i(e), t);
        };
    },
    jFbC: function(t, e, n) {
        n("Cdx3"), t.exports = n("FeBl").Object.keys;
    },
    "jKW+": function(t, e, n) {
        "use strict";
        var r = n("kM2E"), i = n("qARP"), o = n("dNDb");
        r(r.S, "Promise", {
            try: function(t) {
                var e = i.f(this), n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise;
            }
        });
    },
    jKnu: function(t, e) {},
    jMi8: function(t, e, n) {
        var r = n("O1jc"), i = n("mKB/"), o = n("Ilb/"), a = n("hrPF"), s = n("WQFf"), u = n("1Yb9"), c = n("NGEn"), f = n("Fp5l"), l = n("ggOT"), h = n("gGqR"), p = n("yCNF"), d = n("9UkZ"), v = n("YsVG"), y = n("MMop"), g = n("TlPD");
        t.exports = function(t, e, n, m, b, _, w) {
            var x = y(t, n), E = y(e, n), A = w.get(E);
            if (A) r(t, n, A); else {
                var k = _ ? _(x, E, n + "", t, e, w) : void 0, T = void 0 === k;
                if (T) {
                    var O = c(E), S = !O && l(E), C = !O && !S && v(E);
                    k = E, O || S || C ? c(x) ? k = x : f(x) ? k = a(x) : S ? (T = !1, k = i(E, !0)) : C ? (T = !1, 
                    k = o(E, !0)) : k = [] : d(E) || u(E) ? (k = x, u(x) ? k = g(x) : (!p(x) || m && h(x)) && (k = s(E))) : T = !1;
                }
                T && (w.set(E, k), b(k, E, m, _, w), w.delete(E)), r(t, n, k);
            }
        };
    },
    jOgh: function(t, e, n) {
        (function(t) {
            function n(t) {
                return Object.prototype.toString.call(t);
            }
            e.isArray = function(t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t);
            }, e.isBoolean = function(t) {
                return "boolean" == typeof t;
            }, e.isNull = function(t) {
                return null === t;
            }, e.isNullOrUndefined = function(t) {
                return null == t;
            }, e.isNumber = function(t) {
                return "number" == typeof t;
            }, e.isString = function(t) {
                return "string" == typeof t;
            }, e.isSymbol = function(t) {
                return "symbol" == typeof t;
            }, e.isUndefined = function(t) {
                return void 0 === t;
            }, e.isRegExp = function(t) {
                return "[object RegExp]" === n(t);
            }, e.isObject = function(t) {
                return "object" == typeof t && null !== t;
            }, e.isDate = function(t) {
                return "[object Date]" === n(t);
            }, e.isError = function(t) {
                return "[object Error]" === n(t) || t instanceof Error;
            }, e.isFunction = function(t) {
                return "function" == typeof t;
            }, e.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t;
            }, e.isBuffer = t.isBuffer;
        }).call(e, n("EuP9").Buffer);
    },
    jyFz: function(t, e, n) {
        var r = function() {
            return this;
        }() || Function("return this")(), i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, o = i && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, t.exports = n("SldL"), i) r.regeneratorRuntime = o; else try {
            delete r.regeneratorRuntime;
        } catch (t) {
            r.regeneratorRuntime = void 0;
        }
    },
    kM2E: function(t, e, n) {
        var r = n("7KvD"), i = n("FeBl"), o = n("+ZMJ"), a = n("hJx8"), s = n("D2L2"), u = function(t, e, n) {
            var c, f, l, h = t & u.F, p = t & u.G, d = t & u.S, v = t & u.P, y = t & u.B, g = t & u.W, m = p ? i : i[e] || (i[e] = {}), b = m.prototype, _ = p ? r : d ? r[e] : (r[e] || {}).prototype;
            for (c in p && (n = e), n) (f = !h && _ && void 0 !== _[c]) && s(m, c) || (l = f ? _[c] : n[c], 
            m[c] = p && "function" != typeof _[c] ? n[c] : y && f ? o(l, r) : g && _[c] == l ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();

                          case 1:
                            return new t(e);

                          case 2:
                            return new t(e, n);
                        }
                        return new t(e, n, r);
                    }
                    return t.apply(this, arguments);
                };
                return e.prototype = t.prototype, e;
            }(l) : v && "function" == typeof l ? o(Function.call, l) : l, v && ((m.virtual || (m.virtual = {}))[c] = l, 
            t & u.R && b && !b[c] && a(b, c, l)));
        };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    },
    kXyR: function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("ul", {
                    staticClass: "home-plans"
                }, t._l(t.bookplansWithSlicedBooks, function(e, r) {
                    return n("li", {
                        key: e.id,
                        attrs: {
                            eventid: "0-" + r
                        },
                        on: {
                            click: function(n) {
                                t.nav(e);
                            }
                        }
                    }, [ n("div", {
                        staticClass: "cover-container"
                    }, [ n("div", {
                        staticClass: "cover",
                        style: {
                            backgroundImage: "url(" + e.cover_url + ")"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "shadow"
                    }) ]), t._v(" "), n("div", {
                        staticClass: "meta"
                    }, [ n("div", {
                        staticClass: "title"
                    }, [ t._v(t._s(e.title)) ]), t._v(" "), n("ul", t._l(e.books, function(e, i) {
                        return n("li", {
                            key: e.name_cn,
                            staticClass: "book-name",
                            class: {
                                faded: 1 === i
                            }
                        }, [ t._v("\n                    ·《" + t._s(e.name_cn) + "》\n                    "), 1 === i && t.bookplans[r].books.length > 2 ? n("span", [ t._v("...") ]) : t._e() ]);
                    })), t._v(" "), n("div", {
                        staticClass: "footer"
                    }, [ n("div", {
                        staticClass: "scholarship"
                    }), t._v(" "), n("div", {
                        staticClass: "description"
                    }, [ t._v(t._s(e.total_days) + "天读完" + t._s(t.bookplans[r].books.length) + "本书") ]) ]) ], 1) ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    knuC: function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
              case 0:
                return r ? t() : t.call(n);

              case 1:
                return r ? t(e[0]) : t.call(n, e[0]);

              case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

              case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

              case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    ktak: function(t, e, n) {
        var r = n("7e4z"), i = n("/GnY"), o = n("bGc4");
        t.exports = function(t) {
            return o(t) ? r(t) : i(t);
        };
    },
    ktnU: function(t, e, n) {
        var r = n("Hxdr");
        t.exports = function(t, e) {
            return r(e, function(e) {
                return t[e];
            });
        };
    },
    kvU2: function(t, e, n) {
        var r = n("Fkvj"), i = 1, o = 4;
        t.exports = function(t) {
            return r(t, i | o);
        };
    },
    l9Lx: function(t, e, n) {
        var r = n("lb6C"), i = n("C0hh"), o = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols, s = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return o.call(t, e);
            }));
        } : i;
        t.exports = s;
    },
    lOnJ: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    lb6C: function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    lktj: function(t, e, n) {
        var r = n("Ibhu"), i = n("xnc9");
        t.exports = Object.keys || function(t) {
            return r(t, i);
        };
    },
    mClu: function(t, e, n) {
        var r = n("kM2E");
        r(r.S + r.F * !n("+E39"), "Object", {
            defineProperty: n("evD5").f
        });
    },
    mJkG: function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "calendar"
                }, [ n("div", {
                    staticClass: "calendar-header"
                }, [ n("div", {
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [ t._v("学习日历") ]), t._v(" "), n("div", {
                    staticClass: "current"
                }, [ t._v(t._s(t.current.year) + "年" + t._s(t.current.month) + "月") ]), t._v(" "), n("div", {
                    staticClass: "chevron"
                }, [ n("i", {
                    staticClass: "ib ib-chevron-left",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.switchMonth("prev");
                        }
                    }
                }), t._v(" "), n("i", {
                    staticClass: "ib ib-chevron-right",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.switchMonth("next");
                        }
                    }
                }) ], 1) ]), t._v(" "), n("div", {
                    staticClass: "calendar-body"
                }, [ n("ul", {
                    staticClass: "week"
                }, t._l(t.weekText, function(e, r) {
                    return n("li", {
                        key: r
                    }, [ t._v(t._s(e)) ]);
                })), t._v(" "), n("ul", {
                    staticClass: "month"
                }, t._l(t.days, function(e, r) {
                    return n("li", {
                        key: r
                    }, [ n("span", {
                        class: {
                            "future-day": e.isFutureDay && !e.isOtherMonthDay,
                            selected: e.selected && !e.isOtherMonthDay && "BOOKPLAN" === t.type,
                            "is-not-valid": e.isNotValid && "BOOKPLAN" === t.type,
                            "plan-checked": e.checked && "BOOKPLAN" === t.type,
                            "course-checked": e.checked && "COURSE" === t.type,
                            unchecked: !e.checked && "BOOKPLAN" === t.type,
                            "other-month-day": e.isOtherMonthDay
                        },
                        attrs: {
                            eventid: "2-" + r
                        },
                        on: {
                            click: function(n) {
                                t.chooseDay(e, r);
                            }
                        }
                    }, [ t._v(t._s(e.date === t.today ? "今" : e.day)) ]) ]);
                })) ], 1), t._v(" "), n("div", {
                    staticClass: "calendar-footer"
                }, [ n("div", {
                    staticClass: "indicator-wrap"
                }, [ n("div", {
                    staticClass: "indicator",
                    class: {
                        "plan-finished": "BOOKPLAN" === t.type,
                        "course-finished": "COURSE" === t.type
                    }
                }), t._v("已学习\n        ") ]), t._v(" "), "BOOKLPAN" === t.type ? n("div", {
                    staticClass: "indicator-wrap"
                }, [ n("div", {
                    staticClass: "indicator unfinished"
                }), t._v("未学习\n        ") ]) : t._e() ]) ]);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    "mKB/": function(t, e, n) {
        (function(t) {
            var r = n("TQ3y"), i = "object" == typeof e && e && !e.nodeType && e, o = i && "object" == typeof t && t && !t.nodeType && t, a = o && o.exports === i ? r.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
            t.exports = function(t, e) {
                if (e) return t.slice();
                var n = t.length, r = s ? s(n) : new t.constructor(n);
                return t.copy(r), r;
            };
        }).call(e, n("3IRH")(t));
    },
    mOSZ: function(t, e) {},
    mTAn: function(t, e) {
        t.exports = function(t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    mgnk: function(t, e, n) {
        var r = n("aCM0"), i = n("UnEC"), o = "[object Arguments]";
        t.exports = function(t) {
            return i(t) && r(t) == o;
        };
    },
    mkWF: function(t, e, n) {
        var r = n("1C79"), i = n("YkxI"), o = n("Tvex"), a = n("Fp5l"), s = n("oqL2"), u = i(function(t) {
            var e = s(t);
            return e = "function" == typeof e ? e : void 0, o(r(t, 1, a, !0), void 0, e);
        });
        t.exports = u;
    },
    msXi: function(t, e, n) {
        var r = n("77Pl");
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e;
            }
        };
    },
    mvHQ: function(t, e, n) {
        t.exports = {
            default: n("qkKv"),
            __esModule: !0
        };
    },
    mypn: function(t, e, n) {
        (function(t, e) {
            !function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, i = 1, o = {}, a = !1, s = t.document, u = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    u = u && u.setTimeout ? u : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            f(t);
                        });
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0, n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1;
                            }, t.postMessage("", "*"), t.onmessage = n, e;
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$", n = function(n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && f(+n.data.slice(e.length));
                        };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), 
                        r = function(n) {
                            t.postMessage(e + n, "*");
                        };
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel();
                        t.port1.onmessage = function(t) {
                            f(t.data);
                        }, r = function(e) {
                            t.port2.postMessage(e);
                        };
                    }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                        var t = s.documentElement;
                        r = function(e) {
                            var n = s.createElement("script");
                            n.onreadystatechange = function() {
                                f(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                            }, t.appendChild(n);
                        };
                    }() : r = function(t) {
                        setTimeout(f, 0, t);
                    }, u.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var a = {
                            callback: t,
                            args: e
                        };
                        return o[i] = a, r(i), i++;
                    }, u.clearImmediate = c;
                }
                function c(t) {
                    delete o[t];
                }
                function f(t) {
                    if (a) setTimeout(f, 0, t); else {
                        var e = o[t];
                        if (e) {
                            a = !0;
                            try {
                                !function(t) {
                                    var e = t.callback, r = t.args;
                                    switch (r.length) {
                                      case 0:
                                        e();
                                        break;

                                      case 1:
                                        e(r[0]);
                                        break;

                                      case 2:
                                        e(r[0], r[1]);
                                        break;

                                      case 3:
                                        e(r[0], r[1], r[2]);
                                        break;

                                      default:
                                        e.apply(n, r);
                                    }
                                }(e);
                            } finally {
                                c(t), a = !1;
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self);
        }).call(e, n("DuR2"), n("W2nU"));
    },
    n0T6: function(t, e, n) {
        var r = n("Ibhu"), i = n("xnc9").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, i);
        };
    },
    nYYt: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getStorageBatchAsync = e.getStorageAsync = e.setStorageAsync = void 0;
        var r = a(n("Xxa5")), i = a(n("exGp")), o = a(n("GH0O"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.setStorageAsync = function() {
            var t = (0, i.default)(r.default.mark(function t(e, n) {
                var a, s, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = u, s = function() {
                            var t = (0, i.default)(r.default.mark(function t() {
                                return r.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return t.prev = 0, t.next = 3, (0, o.default)(wx.setStorage)({
                                            key: e,
                                            data: n
                                        });

                                      case 3:
                                        t.next = 8;
                                        break;

                                      case 5:
                                        t.prev = 5, t.t0 = t.catch(0), --a > 0 && s(a);

                                      case 8:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t, void 0, [ [ 0, 5 ] ]);
                            }));
                            return function() {
                                return t.apply(this, arguments);
                            };
                        }(), t.next = 4, s();

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0);
            }));
            return function(e, n) {
                return t.apply(this, arguments);
            };
        }(), e.getStorageAsync = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                var n;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, o.default)(wx.getStorage)({
                            key: e
                        });

                      case 3:
                        return n = t.sent, t.abrupt("return", n.data);

                      case 7:
                        return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", null);

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 0, 7 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), e.getStorageBatchAsync = function() {
            var t = (0, i.default)(r.default.mark(function t(e) {
                var n, a;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, n = {}, a = e.map(function() {
                            var t = (0, i.default)(r.default.mark(function t(e) {
                                var i;
                                return r.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return t.prev = 0, t.next = 3, (0, o.default)(wx.getStorage)({
                                            key: e
                                        });

                                      case 3:
                                        i = t.sent, n[e] = i.data, t.next = 10;
                                        break;

                                      case 7:
                                        t.prev = 7, t.t0 = t.catch(0), n[e] = null;

                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t, void 0, [ [ 0, 7 ] ]);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }()), t.next = 5, Promise.all(a);

                      case 5:
                        return t.abrupt("return", n);

                      case 8:
                        return t.prev = 8, t.t0 = t.catch(0), t.abrupt("return", null);

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 0, 8 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }();
    },
    nw3t: function(t, e, n) {
        var r = n("p0bc");
        t.exports = function(t, e, n) {
            "__proto__" == e && r ? r(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n;
        };
    },
    "o/zv": function(t, e, n) {
        (function(t) {
            function n(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var i = t[r];
                    "." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), 
                    n--);
                }
                if (e) for (;n--; n) t.unshift("..");
                return t;
            }
            var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, i = function(t) {
                return r.exec(t).slice(1);
            };
            function o(t, e) {
                if (t.filter) return t.filter(e);
                for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
                return n;
            }
            e.resolve = function() {
                for (var e = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                    var a = i >= 0 ? arguments[i] : t.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (e = a + "/" + e, r = "/" === a.charAt(0));
                }
                return e = n(o(e.split("/"), function(t) {
                    return !!t;
                }), !r).join("/"), (r ? "/" : "") + e || ".";
            }, e.normalize = function(t) {
                var r = e.isAbsolute(t), i = "/" === a(t, -1);
                return (t = n(o(t.split("/"), function(t) {
                    return !!t;
                }), !r).join("/")) || r || (t = "."), t && i && (t += "/"), (r ? "/" : "") + t;
            }, e.isAbsolute = function(t) {
                return "/" === t.charAt(0);
            }, e.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(o(t, function(t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t;
                }).join("/"));
            }, e.relative = function(t, n) {
                function r(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++) ;
                    for (var n = t.length - 1; n >= 0 && "" === t[n]; n--) ;
                    return e > n ? [] : t.slice(e, n - e + 1);
                }
                t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
                for (var i = r(t.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++) if (i[u] !== o[u]) {
                    s = u;
                    break;
                }
                var c = [];
                for (u = s; u < i.length; u++) c.push("..");
                return (c = c.concat(o.slice(s))).join("/");
            }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                var e = i(t), n = e[0], r = e[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
            }, e.basename = function(t, e) {
                var n = i(t)[2];
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), 
                n;
            }, e.extname = function(t) {
                return i(t)[3];
            };
            var a = "b" === "ab".substr(-1) ? function(t, e, n) {
                return t.substr(e, n);
            } : function(t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n);
            };
        }).call(e, n("W2nU"));
    },
    octw: function(t, e) {
        t.exports = function(t) {
            var e = -1, n = Array(t.size);
            return t.forEach(function(t) {
                n[++e] = t;
            }), n;
        };
    },
    ojCX: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAAnCAYAAAAowHyKAAAAAXNSR0IArs4c6QAAFfdJREFUeAHtnQm4FcWVx0WCLC6giQqyuOKCiesEl/kQolk0i2jyuaAZ10THYCCJII4RRXAJaESz6cRBY+JKoogmJhrcBkm+URQDGAFj0BgiCqJAFBDQ+f3v63M5t1533779+j6W3PN9/1tVp845VV1ddep09X33bbZZgxoj0BiBxgi0YATaZNH98MMPhyJ3OHgNzAdzwYtt2rRZQJqbsPsxlPcBe4NdQS+wEAzH9oekGxTR383pUFv6tnqD6thG3BnGdAu639sugbF9wfJFprTTFnvtIpsf0M77Rdpv2EoZAQb/I2ANiKNFMH8HLgGHg4+kmNqM+v3At8Ek8BpIoo+n2WntOjp5DXgWvAe+29rtb+jtMSb9wf55+oleb+ApdQ7laUM6NDDcNTItzQ5yu4BHwQFpcnF16BwFcs1f9DYHSxy+FNdGNR76J4HZEX5t8pR7gB8Crb9MAYTpWore98EzEc4Rv+oNw2PLgaxBVp7ckyIFRRKfizCGVE5lIulN6M0m1c3rQXIeGAQUbWShFVmEWlFmKW0dFLV3KumVRbbNGO2JvZ8VaRNbV3EPyhOoYNtlc/T9sxTuBx+Q/w/anFSu3AgzXIMW161gAJhOeTzpKK7rXdJUQvYYBHT9q8l/FZ3JqQrxlds6tqK0PLQ1SvtGih2U0h+tVUV526gMDQE3lHK1ffRG/N8ild8orXAiNNSeC18VCfjkHQo7egb50JPJqWwPBoPzsHU36ZvKg/agFlJ7FYQ9Dehq+lfIYw729Aglh5CFdAOM9kH3egrLjVElvYY+L6sisxX1h1WRqbV6h1oVapVnHHqiIwfSMdK9F95IrrfCycK7lvozIpkwCTenhciHMla+GNs/tUKdUkURFlWpb8PACfTpG7T9UFKb1Gss7gWa64J2+0vRuYJ8a5N/3C6tcfqxmP6MpiO6F6KxlB+DP6upWMAnBm8ECteF73uTlOeAWki7Uh4yvfLEwsi5YClQvx4H5Trfx1rz2DkWtAZ1r9Y3OnFQHTpyVrV2i6in358H7wT9l5MtE3U3BfV5i0PLRmvM0GAtjzPbIX8DeD/o6D2UuyY1TV3cWGTe7dHX44ynryS1lcbHwCnOyGsmC0/2n3R1euQpRSomoxTeCPB2hBuDugfgG41SXclLwdFOci6w6OJb8LSDLpQQ1CwyaGInfpqdRIGECuktp921rv4a8grPRIcA7RLPqbAJkxZL1fA55vrHwdsuhl83FvfqIeZKXxpQRLJP1NBQeJtTp5B5oyP6vYRO6xp+TKpHG71UEJ0IdgaHqhCSGws9xijSFQ2JxuKbTcVW+WwWiahV+qdN+nSyM4HWlB55NGfC+yTH0gWIOjUlyZ/2OKNFawtf5x+vg0VOrVYn4lRrzr4daMygrFC/XcRX/4qmv2LwzgKNjsCW9TeP2V9ww8NxqGqHCXIpQq3qRNQp+jqPtrWwHga2wAbDu526p8F/wheaETJ6xp7nKrZA3i8CV9U8i74es49sXtOMc6DjbI/eIFdOyi6mYgAYC74N9Jw1HCRSNBba7PxYnE97v6LuyUTFYiv8BlThBOjDK/TlWzT3P+A+cHNLm7bnJYVteuWlcwelw2jMRwPr04mcR3+eByItzKWlXLEff+F6RxZlkrHUhGuJE2nWFWwqjN42qlhGfxc0E1qPDPqzjD4eTRd+Dw4GZ8J7OkeXtFBrIe2mtW4AclxZdP7INSgK+Q7XNo30EMpTSVMJGT8Wn0R4CLzWciDqm1+vW9F3ml93lkj+FnhTSV9KvZCMlRaJSFzeS05EzqPCe1H2naJYVwrb2pLW5Ni0KNXfsB7WvwQpypBDFWkHyfW8XNKu0weTUmdXn8X8APL3qxnK95JsrnwC6f56+hU6aY7kdGxXO6j29lqSX2XKtKnrEDKRG4svkL8jk1JxQj6K1dhrjP8ZmH+ZYd4Z3l4RXqGfDwYymYreiSxHQzudeF0Cbd+poKrwYtiWwvMPolY0udTPomlrBnT/Ao2mLZoCm9nwTDER5eRLDiTq3XGktYzHwCpXpY3Ok+bL456RkO8Ff/eoTk7o2QQ5Lazdoro3E2QysaOxaG0Hor7pHnjqz/zWOjKHsSf53qCjE5pEvsVOxLy7dnwLm62NsFPGr0catqW+yHmIVnJjzKE0cYr5PAwzzxdjqmGljiOgyMA/7+s8Zga8I6u1ySIajsy4SG42erE6yF2NzEWR3KIo3aAT+iwnLee3N9gHfAJ4+rUvJOT7JPCrsn0kYotXvI8GmlYXsOtS1M7iSU7EXuuGIZmXa+RbaQSYtGNpSo43jtYEC/R4hOzQXvL68uHflclIJyMniB7C9oqmbN0+uznLVSORyDl9yemE2aGRo9OjnV63hmsrlPflO9HxZ5O+Tvlp2P4MaX/wmBg5SOttLnghh25JxTsRvdYy0om3p9Z0ImFbciKKjkT1eJSRXV3788rUgbR7bmqkL2T1S7ioirdnTPIHTI4F0YX8bKBJew51L6sO/gEkdykPLYJ/hDLw5XwsehDrbn3UmXSAbVTViSCox4KksZCdzvqISI8P/hHC+Elp+OgWyrWPGPPCiqCse6Kx1rhXgLFucbTlnchbruHtXV7ZcGEH1YUWw0hEz3LmRJYW2tI6Y9MZzM+tKzZydRoBOYTuEWbhJC4jfx3oBBSKi+RojLTL6vldpCg01zN7STv7RzcnmsWJOPH1k2XuLmAsNT6rwJwIequkRxvRGGRGN2XXfaIzCDxFnSKk3OSdiN6J6+xB3l8L11NrOpGwLUVFFg77aMn3L0/evLh0V+YxsCnpMJm24nquBvri2NNAXzFPivy+R/1twEgL73orpKQjqdOGcDrQjiynMghcBeJosGNOpj/1fpRRcz4SybJL/xSdKa6fyo4HOwU8Fb8AbEOMqS4dQD/pKi4h78uuqpT1m2oPxqdc5n7KOZsTMUdc1qd+Nwq6h/oC2n+TXoZ+uPbK8mkZ70RkYDVQCOVDMOmbcXMy4tWLwkhkB9dQkU5Ei8ZoOQPZg8JzxkhJf8Rgj0ZeN+CYFDmr0ivJ31qhBWkbp6v7UDTdjsGBkVE5Er3NsHLEbkq4nqmewVhokiY6EepHUK9IdwK6Z1KeQH4ikPNZC94AFYRMTxhfdMy7XF6POp0o2yLxVUl53V8jfXfiYCu4VGP8MVfeMZDTwX7F2QHl6cgLZULncgrNnAiy/1cWismgpwNST3PQecozkvLIlR1IJDPPyfZ2ecuOIWMOTd/Evdgqak29E1EnzIlsExgyJxKw61IMnchHXStZdgYnnpr1TkRvpnQDw8e4OAOm1zmjvJxyEaTHAKMFlikiZfJ2wE54OPhF+B2ZnC3a/bEhh3QlaAv0Nx06C3mK9CDKd4ChIJxveuuin4r4OHVHg37gEeBJjz8Vi9dXVsnvl1H3l4GdFyn3CXgbalGPNUYVkQjjuj8VigCNRjHe71qh1jR0Ivb6dMvAkC1svxsGIoUVQ4e1bWR5DemSwlpZ9/c4MqmwXfb9wItvpMc7HxGJ/3eQJK9dz5yNZIsgLSgjHU4WRkyglUysxRj017gYfoscSNTBQ0g1r+REPgVm0tZlpNdh/yhSRRWHKw2Jei1aYXxYt57Kq9ZTu3mafQ4ljbs2xy6McU/GU45ZZY2nreW55BUZ5qbQiViY3I7GOtDoSlkm1dfiNaE65m4pu6I5LNOwXUpRUuhgTCZPurVT0h/9/YNybHjMtV9A3bVOXmNyvi/7PPL3UT7e81qSx56c+i7OxiyXLyr7dQzdDXSPdd/PBS0mxkk/gjMFQz8BA4Ds6yxEjytDgMjPw7VNrKqfmg+6Z1lpKwRtLr1PXk4zCylKszPC0nrIorS+ZRh3ffVem5xFTv3J3w6GAzlzo/9CVhtobvI3T48z5p3kwRQBvO4sawG3hhMJHYVuvkiTK6wrVeT82MXp6Tcs5KF/B14C1zOwShMJ+T2olLy8uH6EKXR+ibo5KjQR7N5IveK5PIe9Zir0/wGuqTcV+4GZlBc0E8rJwNaL2FbUcSkYCbQhXQeMdrIMqX9L6NiVWWzKkXav5CaXaF+LR85LpLdx/96UTf9E7wQkJkZSG1Mkoi5PBeZEBnAtijrGqCIi/W3QJCvkTb0T0QJtGxmSp+4CQifSLaqvV/I+F/WeGeei25HXTiCSY5OjK4q0YIzksRVtfCaCflTpQfLj6c8TpBVEnRzOz8Du4CrwXXi3kEp+PmnRdKAz+CptLHflwrLYXYAxoTBiXAZjzOaZHO3DQJHVQOpISqRd0mhL+EOtEJPqt30fieHXi9XJGS7PTcfbkLMP0DmLKDW3B4B2QKRXwl8r5Vr4YTdXZrRArQGFN4pEPBUZBXi7Ph+2oT5opmkXFsJ6WLnJHzbJiWiy/BEcBtTWsWA3JrQOAEOSE5HT0En+XkCL4ptAjvc0UBjRvtoa4gwWeh7i7NYrOw7DfiFaO0dYJkjlmK8PeL54G4XWdCIWCasPb/iObAT5R+mjnIWuoVfQ37Nxxn8OeLmKmqBG3ol8ADN0IjrgqjeFbagPiopE6mshToSF2RVbdibyFoOpQ8RHwOHwPw3+F+jx6Ux4q0krCJ6+2n0LzD7gy+Bp8CbQj1ArmusMiqJBGNrXGVO7GwUxFnLGGztpozBaaJk8KeNR5Lyo2gXm6CqEFPmFpIh5YsjMW/aRyDKM+F0/dCLfoF7h0R6gD+gbpd4RwaqJ5NmngRlAZxA6Y/CkPmgRtwfq61JQBH3SGVEUUiYGV95bv/StHfFd0itIzysLuAyycraTBOR2Jj0RDAO7gVpoHsKfcgqlxxVs6ppHOb5+4Oc+lanrRfIJoL8n0X0THQqkI1rSlKyfT/qn6Elj+0OwRUovFOn1j+p1HZKXA0+iZ5Iq6sTv5uzmdiKMx9HY+R44wNmrazaaI7sEjWiDvDDgtahoE05vG/TNNXmuDkCOocKJUK+6yaBMyMuzHgKOAScBP+AUm9F7cOQo7gR/wObrzSQqGeqDFqpIE7GQSAQ7ej40+oNlLOW6DiZ/PjgFpC0ALeY9Izk5mh1AzcQ4KOR8IkbxAnh7OP5FytOmdvgJ4NNAXx8fS3pPhvFErP5Ef86gFT2S6Cc2RyS1iJyitpmu/m3y+jW01nYUrgvNsj4KzHWgHY3HzVjWv1/pxfX9rVkrBTNo53hMao5UrGPKuicVb2OQ1drtC/Qj21qj+Qlji4FIr3RH1mIJ+TagH7gDrAWeplDQj9jamUsm08ifCvSqyih1QWcyihDG9LbA6CjpUTgIXA3+YhUuXeXy48jr/3cMA/pfNCEpetHbHqOBWfvl5VC+0AxEqZxviSjr4Dek+TD0k4QdTa61UtrcE3jSvxkRTU/rA/X6Ld84+iVMOefCCHuZf6hZjSLfC4wBNpe1yW6TpUPI+fn1IGVPZyTZQKjFP9SMjW3Aj3yDQb48j6wf1F8XyWjuHwB0uL1DhIprhqe3eEajzEY5pWa+1ZK+AtSZc4Ccg382LOvEZZDVgtSvs+sGHBcnE8dDtjM4FOir0fonOS8A2REpEmoxYadnyVrThxZ8e3CF4/msBvU0MMIx5US+7sqWlaP5AegK7jMmaU1OBHk5qPudvrIrQDkMJi8Zff9C/JDegHEWaLXzCNoKnYj16fdJNwyBM4AtUMl7R62y/neLfiW+WnSb1EQFHzupToT648EaoH5oXOU0PE2tMJhSQGmOV3T5aeR3SlKlLnQiX06SDfnoau2MBEtASI/C+Kdjnub14T/j6g7zdWEeuapOZIYzZlktNHVAN1wTdCI4G/gwO2xLnrwt2K5ZhWNQ3x3oq9C3An2bTm2oLSG8iYU842P3YmD0G3WHQh9jROmfSLUQS497pBdEfCVyIh3BIhWgN8FY0NMujXzNTgSdHcFosBx4UvlIs+1T+N2AdhHdo5A0Yffz8vXK087AsHHKd4FmkSO87cBtwNNbFPYAOphe6iui8lkt7Tt2qjkR/bqdIvA4Et/ObVK7glwnEOfctcGkRuLUh07kK6mNRZXoaa6+DUKSQ/wO0FPCRa5S60vnmpr72vS07kRag6mbD/VVncjlCKmBuEGAXSbJaGC1kH4M9FYjEyG7L7gSvAq022iRhA4DVpk0EJK5K1MDKULY0DOpBsroXBOHMRlocjfzxPB8pDJOOvB0404BOvStIHiPA6PESAQBTZr+YAJYCUJ6GYaeVVMJGYWecmShDe2scjL2JirVTt5K7M8CntRmxWSkrD6OAXIYnlT2UZYm9c+9QJR/kLRrC/qY6kRkF/tTXLtalLou3Rsd/mYiZK8BnuTgT82ijJzmg6esTqQvSrrXnrQR+nHdgvIcJ6BH7qHgRse7Mq2fyLUFC5z8ZbHyCPQHlwDtJDOBFvBaIMehRR+SFrkeOTThvwZKu3doHP6xYDowebIVpDbUltqQvRfBvWA00B+DVUzK0H6WMjZOAEba8fx3AMom4HcDGgM9swve8VScFVHXDlwGLgTng4uBd8IDyoajDPWaLNqZ/NkJxTJpLG4AnULdtDLyewNFICHJYddkK62dsA7bE6IGtRnoMLhE5BWxacx1H/2YUCzRDD5LO6LpWAq/H/hrSWrdhxzOiSZTS4peFieie9kBNIugsraF7knA6CUyeoOWiZDN5URkHF2d54m0bk4GejlSQfAOBHJqcaSgoLspkFdAIaejNfsk+C34B/B0tslXTdHaERwHrgXPAy30OKciJ/A30M+Mktfz8rNAnfcRhzkNedC54CYwCOxsukWn2D4LWB9+kGQfGXltXUsc6U1UBSE0O04Q3goQe5YEX49FIelG3gr2rmighgK6mohDgO6P0dU1mKhZlEY0ObU5DPLKlHcH2hBCWgZjFKgW3m+LjA+fZSfxvvm2wzx6VZ1IqJOnTDtyRFpsk0HnWmwg3xInorO9E2QjrU3qtSHH3RO9fi4TMnJEaaT7vXtZodYMyurwMeAWoMXmF5wW6Uqg3UmhnTosp2Okya167U666IrT31r7Uqs87Z0KNAB7pelSH05eOb0b4nTgjwch6TrPjJMXjzrt0i9HSrNIR4LyuUqSXlY+tnYFU8AcoNf2dSXaiD1/gT8MGGlxaYdLPSvzHUW2DVCUp81mPtjS12fNo9cqTkT9oS051ZojZ3RyO5Gs4xD1ry9tPQeMHiZT8QRBeSerjEl1jHGytVnzhZqipRhT6Kd30mNAD2CvGPUuWl8est1mBfnl4HLwC95HK79eiD7vS/up7/yRkZfdNergu6T6B1eL4jqMrE7cfVj+DuW51a4RPYW6a5H7c5zdIni00RX7C4uwlccG7bdFT/f8MfAEfbHv/dRkDjtHoIB6vn8Chb4ORj8fNfoqdn5SUwdaQZg+aj36jUo/4vSnejQdtaU525Y2Zsa1gYzOVMLI5i14r6GT6z7GtVPmqVNgMFDkoZ3eSDu4Ig9FJbmfNcsNNTKNEWiMwKY9AjiKnuBmoAOel8A9oHxKvGlffePqGiPQGIHGCDRGoDECjRFojEBjBBoj0BiBxgg0RqAxAo0R2EhG4P8Bprz9u5DX3mYAAAAASUVORK5CYII=";
    },
    olFz: function(t, e, n) {
        "use strict";
        var r = n("mvHQ"), i = n.n(r), o = n("0xDb"), a = n("Hqeg");
        e.a = {
            props: [ "name_en", "name_cn", "authors", "description_cn", "read_amount", "cover_urls", "isDetail", "id", "book_id" ],
            components: {
                BookCover: a.a
            },
            computed: {
                type: function() {
                    return this.isDetail ? "middle" : "small";
                },
                author: function() {
                    return this.authors && Object(o.f)(this.authors);
                },
                readAmount: function() {
                    return i()(this.read_amount) && Object(o.d)(this.read_amount);
                }
            },
            methods: {
                handleClick: function() {
                    this.$emit("handle-click"), this.isDetail || this.$router.push({
                        path: "/pages/detail/main",
                        query: {
                            id: this.id,
                            bookId: this.book_id
                        }
                    });
                }
            }
        };
    },
    oqL2: function(t, e) {
        t.exports = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0;
        };
    },
    p0bc: function(t, e, n) {
        var r = n("ICSD"), i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t;
            } catch (t) {}
        }();
        t.exports = i;
    },
    pFYg: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = a(n("Zzip")), i = a(n("5QVw")), o = "function" == typeof i.default && "symbol" == typeof r.default ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t;
        };
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(t) {
            return void 0 === t ? "undefined" : o(t);
        } : function(t) {
            return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : o(t);
        };
    },
    pTUa: function(t, e, n) {
        var r = n("/I3N");
        t.exports = function(t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    py9u: function(t, e, n) {
        var r = n("tv3T"), i = n("t8rQ");
        t.exports = function(t, e) {
            return t && r(e, i(e), t);
        };
    },
    qARP: function(t, e, n) {
        "use strict";
        var r = n("lOnJ");
        t.exports.f = function(t) {
            return new function(t) {
                var e, n;
                this.promise = new t(function(t, r) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = r;
                }), this.resolve = r(e), this.reject = r(n);
            }(t);
        };
    },
    "qJN/": function(t, e, n) {
        "use strict";
        e.a = function(t) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                e.hasUpdate || t && t();
            }), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，请点击确定重启小程序",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && e.applyUpdate();
                    }
                });
            }), e.onUpdateFailed(function() {
                wx.showToast({
                    title: "Ooops，小程序更新失败了",
                    icon: "none"
                });
            });
        };
    },
    qc9y: function(t, e, n) {
        (function(t) {
            !function(e) {
                e.parser = function(t, e) {
                    return new o(t, e);
                }, e.SAXParser = o, e.SAXStream = s, e.createStream = function(t, e) {
                    return new s(t, e);
                }, e.MAX_BUFFER_LENGTH = 65536;
                var r, i = [ "comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script" ];
                function o(t, n) {
                    if (!(this instanceof o)) return new o(t, n);
                    !function(t) {
                        for (var e = 0, n = i.length; e < n; e++) t[i[e]] = "";
                    }(this), this.q = this.c = "", this.bufferCheckPosition = e.MAX_BUFFER_LENGTH, this.opt = n || {}, 
                    this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", 
                    this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, 
                    this.strict = !!t, this.noscript = !(!t && !this.opt.noscript), this.state = x.BEGIN, 
                    this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), 
                    this.attribList = [], this.opt.xmlns && (this.ns = Object.create(h)), this.trackPosition = !1 !== this.opt.position, 
                    this.trackPosition && (this.position = this.line = this.column = 0), A(this, "onready");
                }
                e.EVENTS = [ "text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace" ], 
                Object.create || (Object.create = function(t) {
                    function e() {}
                    return e.prototype = t, new e();
                }), Object.keys || (Object.keys = function(t) {
                    var e = [];
                    for (var n in t) t.hasOwnProperty(n) && e.push(n);
                    return e;
                }), o.prototype = {
                    end: function() {
                        C(this);
                    },
                    write: function(t) {
                        if (this.error) throw this.error;
                        if (this.closed) return S(this, "Cannot write after close. Assign an onready handler.");
                        if (null === t) return C(this);
                        "object" == typeof t && (t = t.toString());
                        var n = 0, r = "";
                        for (;r = F(t, n++), this.c = r, r; ) switch (this.trackPosition && (this.position++, 
                        "\n" === r ? (this.line++, this.column = 0) : this.column++), this.state) {
                          case x.BEGIN:
                            if (this.state = x.BEGIN_WHITESPACE, "\ufeff" === r) continue;
                            L(this, r);
                            continue;

                          case x.BEGIN_WHITESPACE:
                            L(this, r);
                            continue;

                          case x.TEXT:
                            if (this.sawRoot && !this.closedRoot) {
                                for (var o = n - 1; r && "<" !== r && "&" !== r; ) (r = F(t, n++)) && this.trackPosition && (this.position++, 
                                "\n" === r ? (this.line++, this.column = 0) : this.column++);
                                this.textNode += t.substring(o, n - 1);
                            }
                            "<" !== r || this.sawRoot && this.closedRoot && !this.strict ? (g(r) || this.sawRoot && !this.closedRoot || j(this, "Text data outside of root node."), 
                            "&" === r ? this.state = x.TEXT_ENTITY : this.textNode += r) : (this.state = x.OPEN_WAKA, 
                            this.startTagPosition = this.position);
                            continue;

                          case x.SCRIPT:
                            "<" === r ? this.state = x.SCRIPT_ENDING : this.script += r;
                            continue;

                          case x.SCRIPT_ENDING:
                            "/" === r ? this.state = x.CLOSE_TAG : (this.script += "<" + r, this.state = x.SCRIPT);
                            continue;

                          case x.OPEN_WAKA:
                            if ("!" === r) this.state = x.SGML_DECL, this.sgmlDecl = ""; else if (g(r)) ; else if (_(p, r)) this.state = x.OPEN_TAG, 
                            this.tagName = r; else if ("/" === r) this.state = x.CLOSE_TAG, this.tagName = ""; else if ("?" === r) this.state = x.PROC_INST, 
                            this.procInstName = this.procInstBody = ""; else {
                                if (j(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
                                    var a = this.position - this.startTagPosition;
                                    r = new Array(a).join(" ") + r;
                                }
                                this.textNode += "<" + r, this.state = x.TEXT;
                            }
                            continue;

                          case x.SGML_DECL:
                            (this.sgmlDecl + r).toUpperCase() === u ? (k(this, "onopencdata"), this.state = x.CDATA, 
                            this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + r === "--" ? (this.state = x.COMMENT, 
                            this.comment = "", this.sgmlDecl = "") : (this.sgmlDecl + r).toUpperCase() === c ? (this.state = x.DOCTYPE, 
                            (this.doctype || this.sawRoot) && j(this, "Inappropriately located doctype declaration"), 
                            this.doctype = "", this.sgmlDecl = "") : ">" === r ? (k(this, "onsgmldeclaration", this.sgmlDecl), 
                            this.sgmlDecl = "", this.state = x.TEXT) : m(r) ? (this.state = x.SGML_DECL_QUOTED, 
                            this.sgmlDecl += r) : this.sgmlDecl += r;
                            continue;

                          case x.SGML_DECL_QUOTED:
                            r === this.q && (this.state = x.SGML_DECL, this.q = ""), this.sgmlDecl += r;
                            continue;

                          case x.DOCTYPE:
                            ">" === r ? (this.state = x.TEXT, k(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += r, 
                            "[" === r ? this.state = x.DOCTYPE_DTD : m(r) && (this.state = x.DOCTYPE_QUOTED, 
                            this.q = r));
                            continue;

                          case x.DOCTYPE_QUOTED:
                            this.doctype += r, r === this.q && (this.q = "", this.state = x.DOCTYPE);
                            continue;

                          case x.DOCTYPE_DTD:
                            this.doctype += r, "]" === r ? this.state = x.DOCTYPE : m(r) && (this.state = x.DOCTYPE_DTD_QUOTED, 
                            this.q = r);
                            continue;

                          case x.DOCTYPE_DTD_QUOTED:
                            this.doctype += r, r === this.q && (this.state = x.DOCTYPE_DTD, this.q = "");
                            continue;

                          case x.COMMENT:
                            "-" === r ? this.state = x.COMMENT_ENDING : this.comment += r;
                            continue;

                          case x.COMMENT_ENDING:
                            "-" === r ? (this.state = x.COMMENT_ENDED, this.comment = O(this.opt, this.comment), 
                            this.comment && k(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + r, 
                            this.state = x.COMMENT);
                            continue;

                          case x.COMMENT_ENDED:
                            ">" !== r ? (j(this, "Malformed comment"), this.comment += "--" + r, this.state = x.COMMENT) : this.state = x.TEXT;
                            continue;

                          case x.CDATA:
                            "]" === r ? this.state = x.CDATA_ENDING : this.cdata += r;
                            continue;

                          case x.CDATA_ENDING:
                            "]" === r ? this.state = x.CDATA_ENDING_2 : (this.cdata += "]" + r, this.state = x.CDATA);
                            continue;

                          case x.CDATA_ENDING_2:
                            ">" === r ? (this.cdata && k(this, "oncdata", this.cdata), k(this, "onclosecdata"), 
                            this.cdata = "", this.state = x.TEXT) : "]" === r ? this.cdata += "]" : (this.cdata += "]]" + r, 
                            this.state = x.CDATA);
                            continue;

                          case x.PROC_INST:
                            "?" === r ? this.state = x.PROC_INST_ENDING : g(r) ? this.state = x.PROC_INST_BODY : this.procInstName += r;
                            continue;

                          case x.PROC_INST_BODY:
                            if (!this.procInstBody && g(r)) continue;
                            "?" === r ? this.state = x.PROC_INST_ENDING : this.procInstBody += r;
                            continue;

                          case x.PROC_INST_ENDING:
                            ">" === r ? (k(this, "onprocessinginstruction", {
                                name: this.procInstName,
                                body: this.procInstBody
                            }), this.procInstName = this.procInstBody = "", this.state = x.TEXT) : (this.procInstBody += "?" + r, 
                            this.state = x.PROC_INST_BODY);
                            continue;

                          case x.OPEN_TAG:
                            _(d, r) ? this.tagName += r : (P(this), ">" === r ? I(this) : "/" === r ? this.state = x.OPEN_TAG_SLASH : (g(r) || j(this, "Invalid character in tag name"), 
                            this.state = x.ATTRIB));
                            continue;

                          case x.OPEN_TAG_SLASH:
                            ">" === r ? (I(this, !0), M(this)) : (j(this, "Forward-slash in opening tag not followed by >"), 
                            this.state = x.ATTRIB);
                            continue;

                          case x.ATTRIB:
                            if (g(r)) continue;
                            ">" === r ? I(this) : "/" === r ? this.state = x.OPEN_TAG_SLASH : _(p, r) ? (this.attribName = r, 
                            this.attribValue = "", this.state = x.ATTRIB_NAME) : j(this, "Invalid attribute name");
                            continue;

                          case x.ATTRIB_NAME:
                            "=" === r ? this.state = x.ATTRIB_VALUE : ">" === r ? (j(this, "Attribute without value"), 
                            this.attribValue = this.attribName, D(this), I(this)) : g(r) ? this.state = x.ATTRIB_NAME_SAW_WHITE : _(d, r) ? this.attribName += r : j(this, "Invalid attribute name");
                            continue;

                          case x.ATTRIB_NAME_SAW_WHITE:
                            if ("=" === r) this.state = x.ATTRIB_VALUE; else {
                                if (g(r)) continue;
                                j(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", 
                                k(this, "onattribute", {
                                    name: this.attribName,
                                    value: ""
                                }), this.attribName = "", ">" === r ? I(this) : _(p, r) ? (this.attribName = r, 
                                this.state = x.ATTRIB_NAME) : (j(this, "Invalid attribute name"), this.state = x.ATTRIB);
                            }
                            continue;

                          case x.ATTRIB_VALUE:
                            if (g(r)) continue;
                            m(r) ? (this.q = r, this.state = x.ATTRIB_VALUE_QUOTED) : (j(this, "Unquoted attribute value"), 
                            this.state = x.ATTRIB_VALUE_UNQUOTED, this.attribValue = r);
                            continue;

                          case x.ATTRIB_VALUE_QUOTED:
                            if (r !== this.q) {
                                "&" === r ? this.state = x.ATTRIB_VALUE_ENTITY_Q : this.attribValue += r;
                                continue;
                            }
                            D(this), this.q = "", this.state = x.ATTRIB_VALUE_CLOSED;
                            continue;

                          case x.ATTRIB_VALUE_CLOSED:
                            g(r) ? this.state = x.ATTRIB : ">" === r ? I(this) : "/" === r ? this.state = x.OPEN_TAG_SLASH : _(p, r) ? (j(this, "No whitespace between attributes"), 
                            this.attribName = r, this.attribValue = "", this.state = x.ATTRIB_NAME) : j(this, "Invalid attribute name");
                            continue;

                          case x.ATTRIB_VALUE_UNQUOTED:
                            if (!b(r)) {
                                "&" === r ? this.state = x.ATTRIB_VALUE_ENTITY_U : this.attribValue += r;
                                continue;
                            }
                            D(this), ">" === r ? I(this) : this.state = x.ATTRIB;
                            continue;

                          case x.CLOSE_TAG:
                            if (this.tagName) ">" === r ? M(this) : _(d, r) ? this.tagName += r : this.script ? (this.script += "</" + this.tagName, 
                            this.tagName = "", this.state = x.SCRIPT) : (g(r) || j(this, "Invalid tagname in closing tag"), 
                            this.state = x.CLOSE_TAG_SAW_WHITE); else {
                                if (g(r)) continue;
                                w(p, r) ? this.script ? (this.script += "</" + r, this.state = x.SCRIPT) : j(this, "Invalid tagname in closing tag.") : this.tagName = r;
                            }
                            continue;

                          case x.CLOSE_TAG_SAW_WHITE:
                            if (g(r)) continue;
                            ">" === r ? M(this) : j(this, "Invalid characters in closing tag");
                            continue;

                          case x.TEXT_ENTITY:
                          case x.ATTRIB_VALUE_ENTITY_Q:
                          case x.ATTRIB_VALUE_ENTITY_U:
                            var s, f;
                            switch (this.state) {
                              case x.TEXT_ENTITY:
                                s = x.TEXT, f = "textNode";
                                break;

                              case x.ATTRIB_VALUE_ENTITY_Q:
                                s = x.ATTRIB_VALUE_QUOTED, f = "attribValue";
                                break;

                              case x.ATTRIB_VALUE_ENTITY_U:
                                s = x.ATTRIB_VALUE_UNQUOTED, f = "attribValue";
                            }
                            ";" === r ? (this[f] += N(this), this.entity = "", this.state = s) : _(this.entity.length ? y : v, r) ? this.entity += r : (j(this, "Invalid character in entity name"), 
                            this[f] += "&" + this.entity + r, this.entity = "", this.state = s);
                            continue;

                          default:
                            throw new Error(this, "Unknown state: " + this.state);
                        }
                        this.position >= this.bufferCheckPosition && function(t) {
                            for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), r = 0, o = 0, a = i.length; o < a; o++) {
                                var s = t[i[o]].length;
                                if (s > n) switch (i[o]) {
                                  case "textNode":
                                    T(t);
                                    break;

                                  case "cdata":
                                    k(t, "oncdata", t.cdata), t.cdata = "";
                                    break;

                                  case "script":
                                    k(t, "onscript", t.script), t.script = "";
                                    break;

                                  default:
                                    S(t, "Max buffer length exceeded: " + i[o]);
                                }
                                r = Math.max(r, s);
                            }
                            var u = e.MAX_BUFFER_LENGTH - r;
                            t.bufferCheckPosition = u + t.position;
                        }(this);
                        return this;
                    }
                    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ ,
                    resume: function() {
                        return this.error = null, this;
                    },
                    close: function() {
                        return this.write(null);
                    },
                    flush: function() {
                        !function(t) {
                            T(t), "" !== t.cdata && (k(t, "oncdata", t.cdata), t.cdata = ""), "" !== t.script && (k(t, "onscript", t.script), 
                            t.script = "");
                        }(this);
                    }
                };
                try {
                    r = n("9DG0").Stream;
                } catch (t) {
                    r = function() {};
                }
                var a = e.EVENTS.filter(function(t) {
                    return "error" !== t && "end" !== t;
                });
                function s(t, e) {
                    if (!(this instanceof s)) return new s(t, e);
                    r.apply(this), this._parser = new o(t, e), this.writable = !0, this.readable = !0;
                    var n = this;
                    this._parser.onend = function() {
                        n.emit("end");
                    }, this._parser.onerror = function(t) {
                        n.emit("error", t), n._parser.error = null;
                    }, this._decoder = null, a.forEach(function(t) {
                        Object.defineProperty(n, "on" + t, {
                            get: function() {
                                return n._parser["on" + t];
                            },
                            set: function(e) {
                                if (!e) return n.removeAllListeners(t), n._parser["on" + t] = e, e;
                                n.on(t, e);
                            },
                            enumerable: !0,
                            configurable: !1
                        });
                    });
                }
                s.prototype = Object.create(r.prototype, {
                    constructor: {
                        value: s
                    }
                }), s.prototype.write = function(e) {
                    if ("function" == typeof t && "function" == typeof t.isBuffer && t.isBuffer(e)) {
                        if (!this._decoder) {
                            var r = n("X4X3").StringDecoder;
                            this._decoder = new r("utf8");
                        }
                        e = this._decoder.write(e);
                    }
                    return this._parser.write(e.toString()), this.emit("data", e), !0;
                }, s.prototype.end = function(t) {
                    return t && t.length && this.write(t), this._parser.end(), !0;
                }, s.prototype.on = function(t, e) {
                    var n = this;
                    return n._parser["on" + t] || -1 === a.indexOf(t) || (n._parser["on" + t] = function() {
                        var e = 1 === arguments.length ? [ arguments[0] ] : Array.apply(null, arguments);
                        e.splice(0, 0, t), n.emit.apply(n, e);
                    }), r.prototype.on.call(n, t, e);
                };
                var u = "[CDATA[", c = "DOCTYPE", f = "http://www.w3.org/XML/1998/namespace", l = "http://www.w3.org/2000/xmlns/", h = {
                    xml: f,
                    xmlns: l
                }, p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, v = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
                function g(t) {
                    return " " === t || "\n" === t || "\r" === t || "\t" === t;
                }
                function m(t) {
                    return '"' === t || "'" === t;
                }
                function b(t) {
                    return ">" === t || g(t);
                }
                function _(t, e) {
                    return t.test(e);
                }
                function w(t, e) {
                    return !_(t, e);
                }
                var x = 0;
                for (var E in e.STATE = {
                    BEGIN: x++,
                    BEGIN_WHITESPACE: x++,
                    TEXT: x++,
                    TEXT_ENTITY: x++,
                    OPEN_WAKA: x++,
                    SGML_DECL: x++,
                    SGML_DECL_QUOTED: x++,
                    DOCTYPE: x++,
                    DOCTYPE_QUOTED: x++,
                    DOCTYPE_DTD: x++,
                    DOCTYPE_DTD_QUOTED: x++,
                    COMMENT_STARTING: x++,
                    COMMENT: x++,
                    COMMENT_ENDING: x++,
                    COMMENT_ENDED: x++,
                    CDATA: x++,
                    CDATA_ENDING: x++,
                    CDATA_ENDING_2: x++,
                    PROC_INST: x++,
                    PROC_INST_BODY: x++,
                    PROC_INST_ENDING: x++,
                    OPEN_TAG: x++,
                    OPEN_TAG_SLASH: x++,
                    ATTRIB: x++,
                    ATTRIB_NAME: x++,
                    ATTRIB_NAME_SAW_WHITE: x++,
                    ATTRIB_VALUE: x++,
                    ATTRIB_VALUE_QUOTED: x++,
                    ATTRIB_VALUE_CLOSED: x++,
                    ATTRIB_VALUE_UNQUOTED: x++,
                    ATTRIB_VALUE_ENTITY_Q: x++,
                    ATTRIB_VALUE_ENTITY_U: x++,
                    CLOSE_TAG: x++,
                    CLOSE_TAG_SAW_WHITE: x++,
                    SCRIPT: x++,
                    SCRIPT_ENDING: x++
                }, e.XML_ENTITIES = {
                    amp: "&",
                    gt: ">",
                    lt: "<",
                    quot: '"',
                    apos: "'"
                }, e.ENTITIES = {
                    amp: "&",
                    gt: ">",
                    lt: "<",
                    quot: '"',
                    apos: "'",
                    AElig: 198,
                    Aacute: 193,
                    Acirc: 194,
                    Agrave: 192,
                    Aring: 197,
                    Atilde: 195,
                    Auml: 196,
                    Ccedil: 199,
                    ETH: 208,
                    Eacute: 201,
                    Ecirc: 202,
                    Egrave: 200,
                    Euml: 203,
                    Iacute: 205,
                    Icirc: 206,
                    Igrave: 204,
                    Iuml: 207,
                    Ntilde: 209,
                    Oacute: 211,
                    Ocirc: 212,
                    Ograve: 210,
                    Oslash: 216,
                    Otilde: 213,
                    Ouml: 214,
                    THORN: 222,
                    Uacute: 218,
                    Ucirc: 219,
                    Ugrave: 217,
                    Uuml: 220,
                    Yacute: 221,
                    aacute: 225,
                    acirc: 226,
                    aelig: 230,
                    agrave: 224,
                    aring: 229,
                    atilde: 227,
                    auml: 228,
                    ccedil: 231,
                    eacute: 233,
                    ecirc: 234,
                    egrave: 232,
                    eth: 240,
                    euml: 235,
                    iacute: 237,
                    icirc: 238,
                    igrave: 236,
                    iuml: 239,
                    ntilde: 241,
                    oacute: 243,
                    ocirc: 244,
                    ograve: 242,
                    oslash: 248,
                    otilde: 245,
                    ouml: 246,
                    szlig: 223,
                    thorn: 254,
                    uacute: 250,
                    ucirc: 251,
                    ugrave: 249,
                    uuml: 252,
                    yacute: 253,
                    yuml: 255,
                    copy: 169,
                    reg: 174,
                    nbsp: 160,
                    iexcl: 161,
                    cent: 162,
                    pound: 163,
                    curren: 164,
                    yen: 165,
                    brvbar: 166,
                    sect: 167,
                    uml: 168,
                    ordf: 170,
                    laquo: 171,
                    not: 172,
                    shy: 173,
                    macr: 175,
                    deg: 176,
                    plusmn: 177,
                    sup1: 185,
                    sup2: 178,
                    sup3: 179,
                    acute: 180,
                    micro: 181,
                    para: 182,
                    middot: 183,
                    cedil: 184,
                    ordm: 186,
                    raquo: 187,
                    frac14: 188,
                    frac12: 189,
                    frac34: 190,
                    iquest: 191,
                    times: 215,
                    divide: 247,
                    OElig: 338,
                    oelig: 339,
                    Scaron: 352,
                    scaron: 353,
                    Yuml: 376,
                    fnof: 402,
                    circ: 710,
                    tilde: 732,
                    Alpha: 913,
                    Beta: 914,
                    Gamma: 915,
                    Delta: 916,
                    Epsilon: 917,
                    Zeta: 918,
                    Eta: 919,
                    Theta: 920,
                    Iota: 921,
                    Kappa: 922,
                    Lambda: 923,
                    Mu: 924,
                    Nu: 925,
                    Xi: 926,
                    Omicron: 927,
                    Pi: 928,
                    Rho: 929,
                    Sigma: 931,
                    Tau: 932,
                    Upsilon: 933,
                    Phi: 934,
                    Chi: 935,
                    Psi: 936,
                    Omega: 937,
                    alpha: 945,
                    beta: 946,
                    gamma: 947,
                    delta: 948,
                    epsilon: 949,
                    zeta: 950,
                    eta: 951,
                    theta: 952,
                    iota: 953,
                    kappa: 954,
                    lambda: 955,
                    mu: 956,
                    nu: 957,
                    xi: 958,
                    omicron: 959,
                    pi: 960,
                    rho: 961,
                    sigmaf: 962,
                    sigma: 963,
                    tau: 964,
                    upsilon: 965,
                    phi: 966,
                    chi: 967,
                    psi: 968,
                    omega: 969,
                    thetasym: 977,
                    upsih: 978,
                    piv: 982,
                    ensp: 8194,
                    emsp: 8195,
                    thinsp: 8201,
                    zwnj: 8204,
                    zwj: 8205,
                    lrm: 8206,
                    rlm: 8207,
                    ndash: 8211,
                    mdash: 8212,
                    lsquo: 8216,
                    rsquo: 8217,
                    sbquo: 8218,
                    ldquo: 8220,
                    rdquo: 8221,
                    bdquo: 8222,
                    dagger: 8224,
                    Dagger: 8225,
                    bull: 8226,
                    hellip: 8230,
                    permil: 8240,
                    prime: 8242,
                    Prime: 8243,
                    lsaquo: 8249,
                    rsaquo: 8250,
                    oline: 8254,
                    frasl: 8260,
                    euro: 8364,
                    image: 8465,
                    weierp: 8472,
                    real: 8476,
                    trade: 8482,
                    alefsym: 8501,
                    larr: 8592,
                    uarr: 8593,
                    rarr: 8594,
                    darr: 8595,
                    harr: 8596,
                    crarr: 8629,
                    lArr: 8656,
                    uArr: 8657,
                    rArr: 8658,
                    dArr: 8659,
                    hArr: 8660,
                    forall: 8704,
                    part: 8706,
                    exist: 8707,
                    empty: 8709,
                    nabla: 8711,
                    isin: 8712,
                    notin: 8713,
                    ni: 8715,
                    prod: 8719,
                    sum: 8721,
                    minus: 8722,
                    lowast: 8727,
                    radic: 8730,
                    prop: 8733,
                    infin: 8734,
                    ang: 8736,
                    and: 8743,
                    or: 8744,
                    cap: 8745,
                    cup: 8746,
                    int: 8747,
                    there4: 8756,
                    sim: 8764,
                    cong: 8773,
                    asymp: 8776,
                    ne: 8800,
                    equiv: 8801,
                    le: 8804,
                    ge: 8805,
                    sub: 8834,
                    sup: 8835,
                    nsub: 8836,
                    sube: 8838,
                    supe: 8839,
                    oplus: 8853,
                    otimes: 8855,
                    perp: 8869,
                    sdot: 8901,
                    lceil: 8968,
                    rceil: 8969,
                    lfloor: 8970,
                    rfloor: 8971,
                    lang: 9001,
                    rang: 9002,
                    loz: 9674,
                    spades: 9824,
                    clubs: 9827,
                    hearts: 9829,
                    diams: 9830
                }, Object.keys(e.ENTITIES).forEach(function(t) {
                    var n = e.ENTITIES[t], r = "number" == typeof n ? String.fromCharCode(n) : n;
                    e.ENTITIES[t] = r;
                }), e.STATE) e.STATE[e.STATE[E]] = E;
                function A(t, e, n) {
                    t[e] && t[e](n);
                }
                function k(t, e, n) {
                    t.textNode && T(t), A(t, e, n);
                }
                function T(t) {
                    t.textNode = O(t.opt, t.textNode), t.textNode && A(t, "ontext", t.textNode), t.textNode = "";
                }
                function O(t, e) {
                    return t.trim && (e = e.trim()), t.normalize && (e = e.replace(/\s+/g, " ")), e;
                }
                function S(t, e) {
                    return T(t), t.trackPosition && (e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c), 
                    e = new Error(e), t.error = e, A(t, "onerror", e), t;
                }
                function C(t) {
                    return t.sawRoot && !t.closedRoot && j(t, "Unclosed root tag"), t.state !== x.BEGIN && t.state !== x.BEGIN_WHITESPACE && t.state !== x.TEXT && S(t, "Unexpected end"), 
                    T(t), t.c = "", t.closed = !0, A(t, "onend"), o.call(t, t.strict, t.opt), t;
                }
                function j(t, e) {
                    if ("object" != typeof t || !(t instanceof o)) throw new Error("bad call to strictFail");
                    t.strict && S(t, e);
                }
                function P(t) {
                    t.strict || (t.tagName = t.tagName[t.looseCase]());
                    var e = t.tags[t.tags.length - 1] || t, n = t.tag = {
                        name: t.tagName,
                        attributes: {}
                    };
                    t.opt.xmlns && (n.ns = e.ns), t.attribList.length = 0, k(t, "onopentagstart", n);
                }
                function R(t, e) {
                    var n = t.indexOf(":") < 0 ? [ "", t ] : t.split(":"), r = n[0], i = n[1];
                    return e && "xmlns" === t && (r = "xmlns", i = ""), {
                        prefix: r,
                        local: i
                    };
                }
                function D(t) {
                    if (t.strict || (t.attribName = t.attribName[t.looseCase]()), -1 !== t.attribList.indexOf(t.attribName) || t.tag.attributes.hasOwnProperty(t.attribName)) t.attribName = t.attribValue = ""; else {
                        if (t.opt.xmlns) {
                            var e = R(t.attribName, !0), n = e.prefix, r = e.local;
                            if ("xmlns" === n) if ("xml" === r && t.attribValue !== f) j(t, "xml: prefix must be bound to " + f + "\nActual: " + t.attribValue); else if ("xmlns" === r && t.attribValue !== l) j(t, "xmlns: prefix must be bound to " + l + "\nActual: " + t.attribValue); else {
                                var i = t.tag, o = t.tags[t.tags.length - 1] || t;
                                i.ns === o.ns && (i.ns = Object.create(o.ns)), i.ns[r] = t.attribValue;
                            }
                            t.attribList.push([ t.attribName, t.attribValue ]);
                        } else t.tag.attributes[t.attribName] = t.attribValue, k(t, "onattribute", {
                            name: t.attribName,
                            value: t.attribValue
                        });
                        t.attribName = t.attribValue = "";
                    }
                }
                function I(t, e) {
                    if (t.opt.xmlns) {
                        var n = t.tag, r = R(t.tagName);
                        n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (j(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), 
                        n.uri = r.prefix);
                        var i = t.tags[t.tags.length - 1] || t;
                        n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(e) {
                            k(t, "onopennamespace", {
                                prefix: e,
                                uri: n.ns[e]
                            });
                        });
                        for (var o = 0, a = t.attribList.length; o < a; o++) {
                            var s = t.attribList[o], u = s[0], c = s[1], f = R(u, !0), l = f.prefix, h = f.local, p = "" === l ? "" : n.ns[l] || "", d = {
                                name: u,
                                value: c,
                                prefix: l,
                                local: h,
                                uri: p
                            };
                            l && "xmlns" !== l && !p && (j(t, "Unbound namespace prefix: " + JSON.stringify(l)), 
                            d.uri = l), t.tag.attributes[u] = d, k(t, "onattribute", d);
                        }
                        t.attribList.length = 0;
                    }
                    t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), k(t, "onopentag", t.tag), 
                    e || (t.noscript || "script" !== t.tagName.toLowerCase() ? t.state = x.TEXT : t.state = x.SCRIPT, 
                    t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0;
                }
                function M(t) {
                    if (!t.tagName) return j(t, "Weird empty close tag."), t.textNode += "</>", void (t.state = x.TEXT);
                    if (t.script) {
                        if ("script" !== t.tagName) return t.script += "</" + t.tagName + ">", t.tagName = "", 
                        void (t.state = x.SCRIPT);
                        k(t, "onscript", t.script), t.script = "";
                    }
                    var e = t.tags.length, n = t.tagName;
                    t.strict || (n = n[t.looseCase]());
                    for (var r = n; e--; ) {
                        if (t.tags[e].name === r) break;
                        j(t, "Unexpected close tag");
                    }
                    if (e < 0) return j(t, "Unmatched closing tag: " + t.tagName), t.textNode += "</" + t.tagName + ">", 
                    void (t.state = x.TEXT);
                    t.tagName = n;
                    for (var i = t.tags.length; i-- > e; ) {
                        var o = t.tag = t.tags.pop();
                        t.tagName = t.tag.name, k(t, "onclosetag", t.tagName);
                        var a = {};
                        for (var s in o.ns) a[s] = o.ns[s];
                        var u = t.tags[t.tags.length - 1] || t;
                        t.opt.xmlns && o.ns !== u.ns && Object.keys(o.ns).forEach(function(e) {
                            var n = o.ns[e];
                            k(t, "onclosenamespace", {
                                prefix: e,
                                uri: n
                            });
                        });
                    }
                    0 === e && (t.closedRoot = !0), t.tagName = t.attribValue = t.attribName = "", t.attribList.length = 0, 
                    t.state = x.TEXT;
                }
                function N(t) {
                    var e, n = t.entity, r = n.toLowerCase(), i = "";
                    return t.ENTITIES[n] ? t.ENTITIES[n] : t.ENTITIES[r] ? t.ENTITIES[r] : ("#" === (n = r).charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), 
                    i = (e = parseInt(n, 16)).toString(16)) : (n = n.slice(1), i = (e = parseInt(n, 10)).toString(10))), 
                    n = n.replace(/^0+/, ""), isNaN(e) || i.toLowerCase() !== n ? (j(t, "Invalid character entity"), 
                    "&" + t.entity + ";") : String.fromCodePoint(e));
                }
                function L(t, e) {
                    "<" === e ? (t.state = x.OPEN_WAKA, t.startTagPosition = t.position) : g(e) || (j(t, "Non-whitespace before first tag."), 
                    t.textNode = e, t.state = x.TEXT);
                }
                function F(t, e) {
                    var n = "";
                    return e < t.length && (n = t.charAt(e)), n;
                }
                x = e.STATE, String.fromCodePoint || function() {
                    var t = String.fromCharCode, e = Math.floor, n = function() {
                        var n, r, i = [], o = -1, a = arguments.length;
                        if (!a) return "";
                        for (var s = ""; ++o < a; ) {
                            var u = Number(arguments[o]);
                            if (!isFinite(u) || u < 0 || u > 1114111 || e(u) !== u) throw RangeError("Invalid code point: " + u);
                            u <= 65535 ? i.push(u) : (n = 55296 + ((u -= 65536) >> 10), r = u % 1024 + 56320, 
                            i.push(n, r)), (o + 1 === a || i.length > 16384) && (s += t.apply(null, i), i.length = 0);
                        }
                        return s;
                    };
                    Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                        value: n,
                        configurable: !0,
                        writable: !0
                    }) : String.fromCodePoint = n;
                }();
            }(e);
        }).call(e, n("EuP9").Buffer);
    },
    qio6: function(t, e, n) {
        var r = n("evD5"), i = n("77Pl"), o = n("lktj");
        t.exports = n("+E39") ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, a = o(e), s = a.length, u = 0; s > u; ) r.f(t, n = a[u++], e[n]);
            return t;
        };
    },
    qkKv: function(t, e, n) {
        var r = n("FeBl"), i = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
        t.exports = function(t) {
            return i.stringify.apply(i, arguments);
        };
    },
    qrdl: function(t, e) {
        t.exports = function() {};
    },
    qwTf: function(t, e, n) {
        var r = n("TQ3y").Uint8Array;
        t.exports = r;
    },
    qyJz: function(t, e, n) {
        "use strict";
        var r = n("+ZMJ"), i = n("kM2E"), o = n("sB3e"), a = n("msXi"), s = n("Mhyx"), u = n("QRG4"), c = n("fBQ2"), f = n("3fs2");
        i(i.S + i.F * !n("dY0y")(function(t) {
            Array.from(t);
        }), "Array", {
            from: function(t) {
                var e, n, i, l, h = o(t), p = "function" == typeof this ? this : Array, d = arguments.length, v = d > 1 ? arguments[1] : void 0, y = void 0 !== v, g = 0, m = f(h);
                if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == m || p == Array && s(m)) for (n = new p(e = u(h.length)); e > g; g++) c(n, g, y ? v(h[g], g) : h[g]); else for (l = m.call(h), 
                n = new p(); !(i = l.next()).done; g++) c(n, g, y ? a(l, v, [ i.value, g ], !0) : i.value);
                return n.length = g, n;
            }
        });
    },
    "r/n2": function(t, e, n) {
        "use strict";
        e.a = {
            props: [ "inputValue" ],
            methods: {
                handleCloseUnlockModal: function() {
                    this.$emit("closeUnlockModal");
                }
            }
        };
    },
    rgcf: function(t, e, n) {
        "use strict";
        var r = n("/WWA"), i = n("Vo7i"), o = {
            listSlides: function() {
                return Object(i.a)(r.c + "/reading/user_desk/books");
            },
            listAllBooks: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    page: 1,
                    ipp: 9
                };
                return Object(i.a)(r.c + "/reading/user/books", {
                    data: t
                });
            },
            addBookToDesk: function(t) {
                return Object(i.a)(r.c + "/reading/user/books", {
                    method: "POST",
                    body: {
                        book_id: t
                    }
                });
            },
            removeBookFromDesk: function(t) {
                return Object(i.a)(r.c + "/reading/user/books", {
                    method: "DELETE",
                    body: {
                        book_ids: t
                    }
                });
            }
        };
        e.a = o;
    },
    rpnb: function(t, e, n) {
        var r = n("tHks")();
        t.exports = r;
    },
    s252: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("Xxa5")), i = s(n("exGp"));
        e.default = function(t) {
            var e = t.isProd, n = t.BASE_URL, r = t.UPLOAD_AUDIO_CODE, i = t.UPLOAD_IMAGE_CODE, o = {
                AUDIO: {
                    code: r,
                    exts: [ "aac", "m4a", "ogg", "mp3", "wav" ],
                    supported: [ "aac", "wav", "mp3" ]
                },
                IMAGE: {
                    code: i,
                    exts: [ "jpeg", "png", "jpg", "gif" ]
                }
            };
            return function(t) {
                var r = u(t, o), i = r.type, s = r.data;
                return i && s.code ? new Promise(function(r, o) {
                    (0, a.default)(n + "/api/v2/media/wechatapp/token/", {
                        data: s
                    }).then(function(n) {
                        c(e, {
                            type: i,
                            filePath: t,
                            key: n.key,
                            uploadImageUrl: n.credentials.host,
                            OSSAccessKeyId: n.credentials.accessid,
                            signature: n.credentials.signature,
                            policy: n.credentials.policy,
                            callback_body: n.callback_body,
                            callback_content_type: n.callback_content_type,
                            callback_vars: n.callback_vars,
                            callback_url: n.callback_url,
                            fail: function(t) {
                                o(t);
                            },
                            success: function(t) {
                                r(t);
                            }
                        });
                    }).catch(function(t) {
                        o(t);
                    });
                }) : (wx.showModal({
                    title: "文件错误",
                    content: "请重试",
                    showCancel: !1
                }), null);
            };
        };
        var o = s(n("GH0O")), a = s(n("CG4Y"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var u = function(t, e) {
            var n = {}, r = {}, i = t.match(/\.(\w+)$/i);
            return r.media_type = i && i[1].toLowerCase(), Object.keys(e).forEach(function(t) {
                var i = e[t];
                i.exts.indexOf(r.media_type) > -1 && (r.code = i.code, n.type = t, "AUDIO" === n.type && -1 === e.AUDIO.supported.indexOf(r.media_type) && (r.media_type = "aac"));
            }), n.data = r, n;
        }, c = function() {
            var t = (0, i.default)(r.default.mark(function t(e, n) {
                var i, a;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = n.type.toLowerCase(), a = n.uploadImageUrl.replace(/^.*oss-cn-hangzhou.aliyuncs.com/, "https://oss-" + i + "1.baydn.com"), 
                        e || (a = n.uploadImageUrl.replace(".oss-cn-hangzhou.aliyuncs.com", ".baydn.com")), 
                        t.prev = 3, t.next = 6, (0, o.default)(wx.uploadFile)({
                            url: a,
                            filePath: n.filePath,
                            name: "file",
                            formData: Object.assign({
                                key: n.key,
                                fileName: n.key,
                                policy: n.policy,
                                OSSAccessKeyId: n.OSSAccessKeyId,
                                Signature: n.signature,
                                success_action_status: "200",
                                callbackBody: n.callback_body,
                                callbackBodyType: n.callback_content_type,
                                callbackUrl: n.callback_url
                            }, n.callback_vars)
                        });

                      case 6:
                        n.success(n.key), t.next = 12;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t.catch(3), n.fail(t.t0);

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 3, 9 ] ]);
            }));
            return function(e, n) {
                return t.apply(this, arguments);
            };
        }();
    },
    s96k: function(t, e) {
        t.exports = function(t, e, n) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i; ) if (n(e, t[r])) return !0;
            return !1;
        };
    },
    sB3e: function(t, e, n) {
        var r = n("52gC");
        t.exports = function(t) {
            return Object(r(t));
        };
    },
    sOR5: function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == n.call(t);
        };
    },
    sj8F: function(t, e) {},
    sp77: function(t, e, n) {
        "use strict";
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */        e.parse = function(t, e) {
            if ("string" != typeof t) throw new TypeError("argument str must be a string");
            for (var n = {}, i = e || {}, a = t.split(o), u = i.decode || r, c = 0; c < a.length; c++) {
                var f = a[c], l = f.indexOf("=");
                if (!(l < 0)) {
                    var h = f.substr(0, l).trim(), p = f.substr(++l, f.length).trim();
                    '"' == p[0] && (p = p.slice(1, -1)), void 0 == n[h] && (n[h] = s(p, u));
                }
            }
            return n;
        }, e.serialize = function(t, e, n) {
            var r = n || {}, o = r.encode || i;
            if ("function" != typeof o) throw new TypeError("option encode is invalid");
            if (!a.test(t)) throw new TypeError("argument name is invalid");
            var s = o(e);
            if (s && !a.test(s)) throw new TypeError("argument val is invalid");
            var u = t + "=" + s;
            if (null != r.maxAge) {
                var c = r.maxAge - 0;
                if (isNaN(c)) throw new Error("maxAge should be a Number");
                u += "; Max-Age=" + Math.floor(c);
            }
            if (r.domain) {
                if (!a.test(r.domain)) throw new TypeError("option domain is invalid");
                u += "; Domain=" + r.domain;
            }
            if (r.path) {
                if (!a.test(r.path)) throw new TypeError("option path is invalid");
                u += "; Path=" + r.path;
            }
            if (r.expires) {
                if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                u += "; Expires=" + r.expires.toUTCString();
            }
            r.httpOnly && (u += "; HttpOnly");
            r.secure && (u += "; Secure");
            if (r.sameSite) {
                var f = "string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite;
                switch (f) {
                  case !0:
                    u += "; SameSite=Strict";
                    break;

                  case "lax":
                    u += "; SameSite=Lax";
                    break;

                  case "strict":
                    u += "; SameSite=Strict";
                    break;

                  default:
                    throw new TypeError("option sameSite is invalid");
                }
            }
            return u;
        };
        var r = decodeURIComponent, i = encodeURIComponent, o = /; */, a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function s(t, e) {
            try {
                return e(t);
            } catch (e) {
                return t;
            }
        }
    },
    t8rQ: function(t, e, n) {
        var r = n("7e4z"), i = n("G0Wc"), o = n("bGc4");
        t.exports = function(t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    t8x9: function(t, e, n) {
        var r = n("77Pl"), i = n("lOnJ"), o = n("dSzd")("species");
        t.exports = function(t, e) {
            var n, a = r(t).constructor;
            return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n);
        };
    },
    tFQi: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function(t, e) {
            var n = t + "/resize";
            return Object.keys(e).forEach(function(t) {
                n = n + "," + t + "_" + e[t];
            }), n;
        };
        e.default = function(t, e) {
            var n = {
                mode: "m",
                width: "w",
                height: "h",
                longestSide: "l",
                shortestSide: "s",
                percent: "p",
                limit: "limit",
                color: "color"
            }, i = void 0, o = {};
            return Object.keys(e).forEach(function(t) {
                e[t] && (o[n[t]] = e[t]);
            }), -1 !== t.indexOf("x-oss-process=image") ? i = function(t, e) {
                var n = t.indexOf("x-oss-process=image"), i = t.slice(n).replace("x-oss-process=image", ""), o = t.slice(0, n - 1), a = i.split("/"), s = void 0, u = o.indexOf("?") > -1 ? o + "&x-oss-process=image" : o + "?x-oss-process=image";
                return a.forEach(function(t) {
                    if (t) {
                        var n = t.slice(0, t.indexOf(",")), i = {};
                        t.slice(t.indexOf(n) + n.length + 1).split(",").forEach(function(t) {
                            if (-1 === t.indexOf("_")) i[n] = t; else {
                                var e = t.split("_"), r = e[0], o = e[1];
                                i[r] = o;
                            }
                        });
                        var o = n;
                        "resize" === o ? (s = !0, u = r(u, Object.assign({}, i, e))) : (u = u + "/" + o, 
                        Object.keys(i).forEach(function(t) {
                            u = t === o ? u + "," + i[t] : u + "," + t + "_" + i[t];
                        }));
                    }
                }), s || (u = r(u, e)), u;
            }(t, o) : (i = t.indexOf("?") > -1 ? t + "&x-oss-process=image" : t + "?x-oss-process=image", 
            i = Object.keys(o).some(function(t) {
                return void 0 !== o[t];
            }) ? r(i, o) : t), i;
        };
    },
    tHks: function(t, e) {
        t.exports = function(t) {
            return function(e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
                    var u = a[t ? s : ++i];
                    if (!1 === n(o[u], u, o)) break;
                }
                return e;
            };
        };
    },
    tpoA: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("Xxa5")), i = s(n("exGp")), o = s(n("CG4Y")), a = n("449I");
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var u = function(t, e, n, r) {
            var i = e.query, o = e.scene, a = i.n, s = i.s, u = Object.keys(i).filter(function(t) {
                return r[t];
            }).reduce(function(t, e) {
                return t[r[e]] = i[e], t;
            }, {});
            return Object.assign({
                url: a,
                wx_scene: o,
                bay_scene: s,
                wx_codename: t
            }, n, u);
        };
        e.default = function(t) {
            var e = t.trackApiUrl, n = t.wxCodename;
            return function() {
                var t = (0, i.default)(r.default.mark(function t(i) {
                    var s, c, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return s = i.query.n, c = u(n, i, f, l), t.next = 5, (0, o.default)(e, {
                                method: "POST",
                                body: c
                            });

                          case 5:
                            t.next = 8;
                            break;

                          case 7:
                            console.log(e, c);

                          case 8:
                            s && (0, a.redirect)({
                                url: s
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
        };
    },
    tv3T: function(t, e, n) {
        var r = n("i4ON"), i = n("nw3t");
        t.exports = function(t, e, n, o) {
            var a = !n;
            n || (n = {});
            for (var s = -1, u = e.length; ++s < u; ) {
                var c = e[s], f = o ? o(n[c], t[c], c, n, t) : void 0;
                void 0 === f && (f = t[c]), a ? i(n, c, f) : r(n, c, f);
            }
            return n;
        };
    },
    uHeJ: function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "book"
                }, [ n("BookCover", {
                    attrs: {
                        type: "middle",
                        cover_urls: t.cover_urls,
                        isFinished: t.isFinished,
                        isTrial: t.isTrial,
                        progress: t.progress,
                        mpcomid: "0"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.name_cn)) ]), t._v(" "), n("div", {
                    staticClass: "author"
                }, [ t._v(t._s(t.author)) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    uIr7: function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
            return t;
        };
    },
    uLhX: function(t, e, n) {
        var r = n("NkRn"), i = Object.prototype, o = i.hasOwnProperty, a = i.toString, s = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, s), n = t[s];
            try {
                t[s] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? t[s] = n : delete t[s]), i;
        };
    },
    uNpT: function(t, e, n) {
        !function(e, n) {
            t.exports = n();
        }(0, function() {
            return function(t) {
                var e = {};
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
                }
                return n.m = t, n.c = e, n.i = function(t) {
                    return t;
                }, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    });
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 4);
            }([ function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), i = function() {
                    function t() {
                        !function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, t);
                    }
                    return r(t, null, [ {
                        key: "loop",
                        value: function(t, e) {
                            "v".repeat(t).split("").map(function(t, n) {
                                return e(n);
                            });
                        }
                    } ]), t;
                }();
                e.default = i;
            }, function(t, e) {
                var n;
                n = function() {
                    return this;
                }();
                try {
                    n = n || Function("return this")() || (0, eval)("this");
                } catch (t) {
                    "object" == typeof window && (n = window);
                }
                t.exports = n;
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), i = a(n(6)), o = a(n(0));
                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var u = function() {
                    function t() {
                        s(this, t), this.char = ".", this.children = {};
                    }
                    return r(t, [ {
                        key: "getChar",
                        value: function() {
                            return this.char;
                        }
                    }, {
                        key: "getChildren",
                        value: function() {
                            return this.children;
                        }
                    }, {
                        key: "setChar",
                        value: function(t) {
                            this.char = t;
                        }
                    }, {
                        key: "setChildren",
                        value: function(t, e) {
                            this.children[t] = e;
                        }
                    } ]), t;
                }(), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", f = [ 1, 2, 2, 2, 2, 2 ], l = function() {
                    function t() {
                        s(this, t), this.random = new i.default(), this.sign = "", this.inter = {}, this.head = new u();
                    }
                    return r(t, [ {
                        key: "init",
                        value: function(t) {
                            var e = this;
                            this.random.seed(t), this.sign = t, o.default.loop(64, function(t) {
                                e.addSymbol("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t], f[parseInt((t + 1) / 11, 10)]);
                            }), this.inter["="] = "=";
                        }
                    }, {
                        key: "addSymbol",
                        value: function(t, e) {
                            var n = this, r = this.head, i = "";
                            return o.default.loop(e, function() {
                                for (var t = c[n.random.generate(32)]; t in r.getChildren() && "." !== r.getChildren()[t].getChar(); ) t = c[n.random.generate(32)];
                                i += t, t in r.getChildren() || r.setChildren(t, new u()), r = r.getChildren()[t];
                            }), r.setChar(t), this.inter[t] = i, i;
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            for (var e = "", n = 4; n < t.length; ) if ("=" !== t[n]) {
                                for (var r = this.head; t[n] in r.getChildren(); ) r = r.getChildren()[t[n]], n++;
                                e += r.getChar();
                            } else e += "=", n++;
                            return e;
                        }
                    } ]), t;
                }();
                e.default = l;
            }, function(t, e, n) {
                (function(r) {
                    var i;
                    !function(e, n) {
                        t.exports = n(e);
                    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r ? r : this, function(r) {
                        "use strict";
                        var o, a = r.Base64;
                        if (void 0 !== t && t.exports) try {
                            o = n(8).Buffer;
                        } catch (t) {}
                        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = function(t) {
                            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
                            return e;
                        }(s), c = String.fromCharCode, f = function(t) {
                            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? c(192 | e >>> 6) + c(128 | 63 & e) : c(224 | e >>> 12 & 15) + c(128 | e >>> 6 & 63) + c(128 | 63 & e);
                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                            return c(240 | e >>> 18 & 7) + c(128 | e >>> 12 & 63) + c(128 | e >>> 6 & 63) + c(128 | 63 & e);
                        }, l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, h = function(t) {
                            return t.replace(l, f);
                        }, p = function(t) {
                            var e = [ 0, 2, 1 ][t.length % 3], n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                            return [ s.charAt(n >>> 18), s.charAt(n >>> 12 & 63), e >= 2 ? "=" : s.charAt(n >>> 6 & 63), e >= 1 ? "=" : s.charAt(63 & n) ].join("");
                        }, d = r.btoa ? function(t) {
                            return r.btoa(t);
                        } : function(t) {
                            return t.replace(/[\s\S]{1,3}/g, p);
                        }, v = o ? o.from && o.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === o.constructor ? t : o.from(t)).toString("base64");
                        } : function(t) {
                            return (t.constructor === o.constructor ? t : new o(t)).toString("base64");
                        } : function(t) {
                            return d(h(t));
                        }, y = function(t, e) {
                            return e ? v(String(t)).replace(/[+\/]/g, function(t) {
                                return "+" == t ? "-" : "_";
                            }).replace(/=/g, "") : v(String(t));
                        }, g = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), m = function(t) {
                            switch (t.length) {
                              case 4:
                                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                return c(55296 + (e >>> 10)) + c(56320 + (1023 & e));

                              case 3:
                                return c((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

                              default:
                                return c((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
                            }
                        }, b = function(t) {
                            return t.replace(g, m);
                        }, _ = function(t) {
                            var e = t.length, n = e % 4, r = (e > 0 ? u[t.charAt(0)] << 18 : 0) | (e > 1 ? u[t.charAt(1)] << 12 : 0) | (e > 2 ? u[t.charAt(2)] << 6 : 0) | (e > 3 ? u[t.charAt(3)] : 0), i = [ c(r >>> 16), c(r >>> 8 & 255), c(255 & r) ];
                            return i.length -= [ 0, 0, 2, 1 ][n], i.join("");
                        }, w = r.atob ? function(t) {
                            return r.atob(t);
                        } : function(t) {
                            return t.replace(/[\s\S]{1,4}/g, _);
                        }, x = o ? o.from && o.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === o.constructor ? t : o.from(t, "base64")).toString();
                        } : function(t) {
                            return (t.constructor === o.constructor ? t : new o(t, "base64")).toString();
                        } : function(t) {
                            return b(w(t));
                        }, E = function(t) {
                            return x(String(t).replace(/[-_]/g, function(t) {
                                return "-" == t ? "+" : "/";
                            }).replace(/[^A-Za-z0-9\+\/]/g, ""));
                        };
                        if (r.Base64 = {
                            VERSION: "2.4.3",
                            atob: w,
                            btoa: d,
                            fromBase64: E,
                            toBase64: y,
                            utob: h,
                            encode: y,
                            encodeURI: function(t) {
                                return y(t, !0);
                            },
                            btou: b,
                            decode: E,
                            noConflict: function() {
                                var t = r.Base64;
                                return r.Base64 = a, t;
                            }
                        }, "function" == typeof Object.defineProperty) {
                            var A = function(t) {
                                return {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                };
                            };
                            r.Base64.extendString = function() {
                                Object.defineProperty(String.prototype, "fromBase64", A(function() {
                                    return E(this);
                                })), Object.defineProperty(String.prototype, "toBase64", A(function(t) {
                                    return y(this, t);
                                })), Object.defineProperty(String.prototype, "toBase64URI", A(function() {
                                    return y(this, !0);
                                }));
                            };
                        }
                        return r.Meteor && (Base64 = r.Base64), void 0 !== t && t.exports ? t.exports.Base64 = r.Base64 : void 0 === (i = function() {
                            return r.Base64;
                        }.apply(e, [])) || (t.exports = i), {
                            Base64: r.Base64
                        };
                    });
                }).call(e, n(1));
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.decode = void 0;
                var r, i = (r = n(2)) && r.__esModule ? r : {
                    default: r
                }, o = n(3), a = function(t) {
                    var e = t.charCodeAt();
                    return e >= 65 ? e - 65 : e - 65 + 41;
                };
                e.decode = function(t) {
                    if (!(1 >= ((32 * a((e = t)[0]) + a(e[1])) * a(e[2]) + a(e[3])) % 32)) return "";
                    var e, n = new i.default();
                    n.init(t.substr(0, 4));
                    var r = n.decode(t);
                    return o.Base64.decode(r);
                };
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), i = function() {
                    function t() {
                        !function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, t);
                    }
                    return r(t, null, [ {
                        key: "get",
                        value: function(t) {
                            return t >>> 0;
                        }
                    }, {
                        key: "xor",
                        value: function(t, e) {
                            return this.get(this.get(t) ^ this.get(e));
                        }
                    }, {
                        key: "and",
                        value: function(t, e) {
                            return this.get(this.get(t) & this.get(e));
                        }
                    }, {
                        key: "mul",
                        value: function(t, e) {
                            var n = ((4294901760 & t) >>> 0) * e, r = (65535 & t) * e;
                            return this.get((n >>> 0) + (r >>> 0));
                        }
                    }, {
                        key: "or",
                        value: function(t, e) {
                            return this.get(this.get(t) | this.get(e));
                        }
                    }, {
                        key: "not",
                        value: function(t) {
                            return this.get(~this.get(t));
                        }
                    }, {
                        key: "shiftLeft",
                        value: function(t, e) {
                            return this.get(this.get(t) << e);
                        }
                    }, {
                        key: "shiftRight",
                        value: function(t, e) {
                            return this.get(t) >>> e;
                        }
                    }, {
                        key: "mod",
                        value: function(t, e) {
                            return this.get(this.get(t) % e);
                        }
                    } ]), t;
                }();
                e.default = i;
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            i = !0, o = t;
                        } finally {
                            try {
                                !r && s.return && s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return n;
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }, i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(), o = s(n(0)), a = s(n(5));
                function s(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                var u = function() {
                    function t() {
                        !function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }(this, t), this.status = [], this.mat1 = 0, this.mat2 = 0, this.tmat = 0;
                    }
                    return i(t, [ {
                        key: "seed",
                        value: function(t) {
                            var e = this;
                            o.default.loop(4, function(n) {
                                t.length > n ? e.status[n] = a.default.get(t.charAt(n).charCodeAt()) : e.status[n] = a.default.get(110);
                            });
                            var n = r(this.status, 4);
                            this.mat1 = n[1], this.mat2 = n[2], this.tmat = n[3], this.init();
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            o.default.loop(7, function(e) {
                                t.status[e + 1 & 3] = a.default.xor(t.status[e + 1 & 3], e + 1 + a.default.mul(1812433253, a.default.xor(t.status[3 & e], a.default.shiftRight(t.status[3 & e], 30))));
                            }), 0 == (2147483647 & this.status[0]) && 0 === this.status[1] && 0 === this.status[2] && 0 === this.status[3] && (this.status[0] = 66, 
                            this.status[1] = 65, this.status[2] = 89, this.status[3] = 83), o.default.loop(8, function() {
                                return t.nextState();
                            });
                        }
                    }, {
                        key: "nextState",
                        value: function() {
                            var t = void 0, e = void 0;
                            e = r(this.status, 4)[3], t = a.default.xor(a.default.and(this.status[0], 2147483647), a.default.xor(this.status[1], this.status[2])), 
                            t = a.default.xor(t, a.default.shiftLeft(t, 1)), e = a.default.xor(e, a.default.xor(a.default.shiftRight(e, 1), t));
                            var n = r(this.status, 3);
                            this.status[0] = n[1], this.status[1] = n[2], this.status[2] = a.default.xor(t, a.default.shiftLeft(e, 10)), 
                            this.status[3] = e, this.status[1] = a.default.xor(this.status[1], a.default.and(-a.default.and(e, 1), this.mat1)), 
                            this.status[2] = a.default.xor(this.status[2], a.default.and(-a.default.and(e, 1), this.mat2));
                        }
                    }, {
                        key: "generate",
                        value: function(t) {
                            this.nextState();
                            var e = void 0;
                            e = r(this.status, 4)[3];
                            var n = a.default.xor(this.status[0], a.default.shiftRight(this.status[2], 8));
                            return e = a.default.xor(e, n), (e = a.default.xor(a.default.and(-a.default.and(n, 1), this.tmat), e)) % t;
                        }
                    } ]), t;
                }();
                e.default = u;
            }, function(t, e, n) {
                "use strict";
                e.byteLength = function(t) {
                    return 3 * t.length / 4 - c(t);
                }, e.toByteArray = function(t) {
                    var e, n, r, a, s, u = t.length;
                    a = c(t), s = new o(3 * u / 4 - a), n = a > 0 ? u - 4 : u;
                    var f = 0;
                    for (e = 0; e < n; e += 4) r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], 
                    s[f++] = r >> 16 & 255, s[f++] = r >> 8 & 255, s[f++] = 255 & r;
                    return 2 === a ? (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[f++] = 255 & r) : 1 === a && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, 
                    s[f++] = r >> 8 & 255, s[f++] = 255 & r), s;
                }, e.fromByteArray = function(t) {
                    for (var e, n = t.length, i = n % 3, o = "", a = [], s = 0, u = n - i; s < u; s += 16383) a.push(f(t, s, s + 16383 > u ? u : s + 16383));
                    return 1 === i ? (e = t[n - 1], o += r[e >> 2], o += r[e << 4 & 63], o += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], 
                    o += r[e >> 10], o += r[e >> 4 & 63], o += r[e << 2 & 63], o += "="), a.push(o), 
                    a.join("");
                };
                for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], 
                i[a.charCodeAt(s)] = s;
                function c(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
                }
                function f(t, e, n) {
                    for (var i, o, a = [], s = e; s < n; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), 
                    a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                    return a.join("");
                }
                i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
            }, function(t, e, n) {
                "use strict";
                (function(t) {
                    var r = n(7), i = n(9), o = n(10);
                    function a() {
                        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                    }
                    function s(t, e) {
                        if (a() < e) throw new RangeError("Invalid typed array length");
                        return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), 
                        t.length = e), t;
                    }
                    function u(t, e, n) {
                        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                            return l(this, t);
                        }
                        return c(this, t, e, n);
                    }
                    function c(t, e, n, r) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                            if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                            return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), 
                            u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e), t;
                        }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                            if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                            var r = 0 | d(e, n), i = (t = s(t, r)).write(e, n);
                            return i !== r && (t = t.slice(0, i)), t;
                        }(t, e, n) : function(t, e) {
                            if (u.isBuffer(e)) {
                                var n = 0 | p(e.length);
                                return 0 === (t = s(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? s(t, 0) : h(t, e);
                                if ("Buffer" === e.type && o(e.data)) return h(t, e.data);
                            }
                            var r;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                        }(t, e);
                    }
                    function f(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                        if (t < 0) throw new RangeError('"size" argument must not be negative');
                    }
                    function l(t, e) {
                        if (f(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                        return t;
                    }
                    function h(t, e) {
                        var n = e.length < 0 ? 0 : 0 | p(e.length);
                        t = s(t, n);
                        for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                        return t;
                    }
                    function p(t) {
                        if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                        return 0 | t;
                    }
                    function d(t, e) {
                        if (u.isBuffer(t)) return t.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                        "string" != typeof t && (t = "" + t);
                        var n = t.length;
                        if (0 === n) return 0;
                        for (var r = !1; ;) switch (e) {
                          case "ascii":
                          case "latin1":
                          case "binary":
                            return n;

                          case "utf8":
                          case "utf-8":
                          case void 0:
                            return U(t).length;

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return 2 * n;

                          case "hex":
                            return n >>> 1;

                          case "base64":
                            return K(t).length;

                          default:
                            if (r) return U(t).length;
                            e = ("" + e).toLowerCase(), r = !0;
                        }
                    }
                    function v(t, e, n) {
                        var r = t[e];
                        t[e] = t[n], t[n] = r;
                    }
                    function y(t, e, n, r, i) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
                        n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                            if (i) return -1;
                            n = t.length - 1;
                        } else if (n < 0) {
                            if (!i) return -1;
                            n = 0;
                        }
                        if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, r, i);
                        if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [ e ], n, r, i);
                        throw new TypeError("val must be string, number or Buffer");
                    }
                    function g(t, e, n, r, i) {
                        var o, a = 1, s = t.length, u = e.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            a = 2, s /= 2, u /= 2, n /= 2;
                        }
                        function c(t, e) {
                            return 1 === a ? t[e] : t.readUInt16BE(e * a);
                        }
                        if (i) {
                            var f = -1;
                            for (o = n; o < s; o++) if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                                if (-1 === f && (f = o), o - f + 1 === u) return f * a;
                            } else -1 !== f && (o -= o - f), f = -1;
                        } else for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                            for (var l = !0, h = 0; h < u; h++) if (c(t, o + h) !== c(e, h)) {
                                l = !1;
                                break;
                            }
                            if (l) return o;
                        }
                        return -1;
                    }
                    function m(t, e, n, r) {
                        n = Number(n) || 0;
                        var i = t.length - n;
                        r ? (r = Number(r)) > i && (r = i) : r = i;
                        var o = e.length;
                        if (o % 2 != 0) throw new TypeError("Invalid hex string");
                        r > o / 2 && (r = o / 2);
                        for (var a = 0; a < r; ++a) {
                            var s = parseInt(e.substr(2 * a, 2), 16);
                            if (isNaN(s)) return a;
                            t[n + a] = s;
                        }
                        return a;
                    }
                    function b(t, e, n, r) {
                        return H(U(e, t.length - n), t, n, r);
                    }
                    function _(t, e, n, r) {
                        return H(function(t) {
                            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                            return e;
                        }(e), t, n, r);
                    }
                    function w(t, e, n, r) {
                        return _(t, e, n, r);
                    }
                    function x(t, e, n, r) {
                        return H(K(e), t, n, r);
                    }
                    function E(t, e, n, r) {
                        return H(function(t, e) {
                            for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = (n = t.charCodeAt(a)) >> 8, 
                            i = n % 256, o.push(i), o.push(r);
                            return o;
                        }(e, t.length - n), t, n, r);
                    }
                    function A(t, e, n) {
                        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
                    }
                    function k(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var r = [], i = e; i < n; ) {
                            var o, a, s, u, c = t[i], f = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (i + l <= n) switch (l) {
                              case 1:
                                c < 128 && (f = c);
                                break;

                              case 2:
                                128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
                                break;

                              case 3:
                                o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                break;

                              case 4:
                                o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u);
                            }
                            null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), 
                            f = 56320 | 1023 & f), r.push(f), i += l;
                        }
                        return function(t) {
                            var e = t.length;
                            if (e <= T) return String.fromCharCode.apply(String, t);
                            for (var n = "", r = 0; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += T));
                            return n;
                        }(r);
                    }
                    e.Buffer = u, e.SlowBuffer = function(t) {
                        return +t != t && (t = 0), u.alloc(+t);
                    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42;
                                }
                            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                        } catch (t) {
                            return !1;
                        }
                    }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) {
                        return t.__proto__ = u.prototype, t;
                    }, u.from = function(t, e, n) {
                        return c(null, t, e, n);
                    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, 
                    "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                        value: null,
                        configurable: !0
                    })), u.alloc = function(t, e, n) {
                        return function(t, e, n, r) {
                            return f(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e);
                        }(null, t, e, n);
                    }, u.allocUnsafe = function(t) {
                        return l(null, t);
                    }, u.allocUnsafeSlow = function(t) {
                        return l(null, t);
                    }, u.isBuffer = function(t) {
                        return !(null == t || !t._isBuffer);
                    }, u.compare = function(t, e) {
                        if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                        if (t === e) return 0;
                        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) if (t[i] !== e[i]) {
                            n = t[i], r = e[i];
                            break;
                        }
                        return n < r ? -1 : r < n ? 1 : 0;
                    }, u.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                          case "hex":
                          case "utf8":
                          case "utf-8":
                          case "ascii":
                          case "latin1":
                          case "binary":
                          case "base64":
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return !0;

                          default:
                            return !1;
                        }
                    }, u.concat = function(t, e) {
                        if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return u.alloc(0);
                        var n;
                        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var r = u.allocUnsafe(e), i = 0;
                        for (n = 0; n < t.length; ++n) {
                            var a = t[n];
                            if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(r, i), i += a.length;
                        }
                        return r;
                    }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                        return this;
                    }, u.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                        return this;
                    }, u.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), 
                        v(this, e + 3, e + 4);
                        return this;
                    }, u.prototype.toString = function() {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : function(t, e, n) {
                            var r = !1;
                            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                            if ((n >>>= 0) <= (e >>>= 0)) return "";
                            for (t || (t = "utf8"); ;) switch (t) {
                              case "hex":
                                return C(this, e, n);

                              case "utf8":
                              case "utf-8":
                                return k(this, e, n);

                              case "ascii":
                                return O(this, e, n);

                              case "latin1":
                              case "binary":
                                return S(this, e, n);

                              case "base64":
                                return A(this, e, n);

                              case "ucs2":
                              case "ucs-2":
                              case "utf16le":
                              case "utf-16le":
                                return j(this, e, n);

                              default:
                                if (r) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), r = !0;
                            }
                        }.apply(this, arguments);
                    }, u.prototype.equals = function(t) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === u.compare(this, t);
                    }, u.prototype.inspect = function() {
                        var t = "", n = e.INSPECT_MAX_BYTES;
                        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
                        this.length > n && (t += " ... ")), "<Buffer " + t + ">";
                    }, u.prototype.compare = function(t, e, n, r, i) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), 
                        void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                        if (r >= i && e >= n) return 0;
                        if (r >= i) return -1;
                        if (e >= n) return 1;
                        if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
                        for (var o = i - r, a = n - e, s = Math.min(o, a), c = this.slice(r, i), f = t.slice(e, n), l = 0; l < s; ++l) if (c[l] !== f[l]) {
                            o = c[l], a = f[l];
                            break;
                        }
                        return o < a ? -1 : a < o ? 1 : 0;
                    }, u.prototype.includes = function(t, e, n) {
                        return -1 !== this.indexOf(t, e, n);
                    }, u.prototype.indexOf = function(t, e, n) {
                        return y(this, t, e, n, !0);
                    }, u.prototype.lastIndexOf = function(t, e, n) {
                        return y(this, t, e, n, !1);
                    }, u.prototype.write = function(t, e, n, r) {
                        if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, 
                        n = this.length, e = 0; else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                        }
                        var i = this.length - e;
                        if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var o = !1; ;) switch (r) {
                          case "hex":
                            return m(this, t, e, n);

                          case "utf8":
                          case "utf-8":
                            return b(this, t, e, n);

                          case "ascii":
                            return _(this, t, e, n);

                          case "latin1":
                          case "binary":
                            return w(this, t, e, n);

                          case "base64":
                            return x(this, t, e, n);

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return E(this, t, e, n);

                          default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0;
                        }
                    }, u.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        };
                    };
                    var T = 4096;
                    function O(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                        return r;
                    }
                    function S(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                        return r;
                    }
                    function C(t, e, n) {
                        var r = t.length;
                        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var i = "", o = e; o < n; ++o) i += B(t[o]);
                        return i;
                    }
                    function j(t, e, n) {
                        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                        return i;
                    }
                    function P(t, e, n) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
                    }
                    function R(t, e, n, r, i, o) {
                        if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                        if (n + r > t.length) throw new RangeError("Index out of range");
                    }
                    function D(t, e, n, r) {
                        e < 0 && (e = 65535 + e + 1);
                        for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
                    }
                    function I(t, e, n, r) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
                    }
                    function M(t, e, n, r, i, o) {
                        if (n + r > t.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range");
                    }
                    function N(t, e, n, r, o) {
                        return o || M(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
                    }
                    function L(t, e, n, r, o) {
                        return o || M(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
                    }
                    u.prototype.slice = function(t, e) {
                        var n, r = this.length;
                        if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
                        e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = u.prototype; else {
                            var i = e - t;
                            n = new u(i, void 0);
                            for (var o = 0; o < i; ++o) n[o] = this[o + t];
                        }
                        return n;
                    }, u.prototype.readUIntLE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
                        return r;
                    }, u.prototype.readUIntBE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); ) r += this[t + --e] * i;
                        return r;
                    }, u.prototype.readUInt8 = function(t, e) {
                        return e || P(t, 1, this.length), this[t];
                    }, u.prototype.readUInt16LE = function(t, e) {
                        return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
                    }, u.prototype.readUInt16BE = function(t, e) {
                        return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
                    }, u.prototype.readUInt32LE = function(t, e) {
                        return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
                    }, u.prototype.readUInt32BE = function(t, e) {
                        return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
                    }, u.prototype.readIntLE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
                        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
                    }, u.prototype.readIntBE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); ) o += this[t + --r] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
                    }, u.prototype.readInt8 = function(t, e) {
                        return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }, u.prototype.readInt16LE = function(t, e) {
                        e || P(t, 2, this.length);
                        var n = this[t] | this[t + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n;
                    }, u.prototype.readInt16BE = function(t, e) {
                        e || P(t, 2, this.length);
                        var n = this[t + 1] | this[t] << 8;
                        return 32768 & n ? 4294901760 | n : n;
                    }, u.prototype.readInt32LE = function(t, e) {
                        return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
                    }, u.prototype.readInt32BE = function(t, e) {
                        return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
                    }, u.prototype.readFloatLE = function(t, e) {
                        return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4);
                    }, u.prototype.readFloatBE = function(t, e) {
                        return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4);
                    }, u.prototype.readDoubleLE = function(t, e) {
                        return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8);
                    }, u.prototype.readDoubleBE = function(t, e) {
                        return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8);
                    }, u.prototype.writeUIntLE = function(t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = 1, o = 0;
                        for (this[e] = 255 & t; ++o < n && (i *= 256); ) this[e + o] = t / i & 255;
                        return e + n;
                    }, u.prototype.writeUIntBE = function(t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = n - 1, o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
                        return e + n;
                    }, u.prototype.writeUInt8 = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        this[e] = 255 & t, e + 1;
                    }, u.prototype.writeUInt16LE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
                    }, u.prototype.writeUInt16BE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
                    }, u.prototype.writeUInt32LE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                        this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), 
                        e + 4;
                    }, u.prototype.writeUInt32BE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                        this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), 
                        e + 4;
                    }, u.prototype.writeIntLE = function(t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var i = Math.pow(2, 8 * n - 1);
                            R(this, t, e, n, i - 1, -i);
                        }
                        var o = 0, a = 1, s = 0;
                        for (this[e] = 255 & t; ++o < n && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), 
                        this[e + o] = (t / a >> 0) - s & 255;
                        return e + n;
                    }, u.prototype.writeIntBE = function(t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var i = Math.pow(2, 8 * n - 1);
                            R(this, t, e, n, i - 1, -i);
                        }
                        var o = n - 1, a = 1, s = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), 
                        this[e + o] = (t / a >> 0) - s & 255;
                        return e + n;
                    }, u.prototype.writeInt8 = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
                    }, u.prototype.writeInt16LE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
                    }, u.prototype.writeInt16BE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
                    }, u.prototype.writeInt32LE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), 
                        e + 4;
                    }, u.prototype.writeInt32BE = function(t, e, n) {
                        return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                        u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                        this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
                    }, u.prototype.writeFloatLE = function(t, e, n) {
                        return N(this, t, e, !0, n);
                    }, u.prototype.writeFloatBE = function(t, e, n) {
                        return N(this, t, e, !1, n);
                    }, u.prototype.writeDoubleLE = function(t, e, n) {
                        return L(this, t, e, !0, n);
                    }, u.prototype.writeDoubleBE = function(t, e, n) {
                        return L(this, t, e, !1, n);
                    }, u.prototype.copy = function(t, e, n, r) {
                        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), 
                        e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                        var i, o = r - n;
                        if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                        return o;
                    }, u.prototype.fill = function(t, e, n, r) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, 
                            n = this.length), 1 === t.length) {
                                var i = t.charCodeAt(0);
                                i < 256 && (t = i);
                            }
                            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var o;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                            var a = u.isBuffer(t) ? t : U(new u(t, r).toString()), s = a.length;
                            for (o = 0; o < n - e; ++o) this[o + e] = a[o % s];
                        }
                        return this;
                    };
                    var F = /[^+\/0-9A-Za-z-_]/g;
                    function B(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16);
                    }
                    function U(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                                if (!i) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue;
                                    }
                                    if (a + 1 === r) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue;
                                    }
                                    i = n;
                                    continue;
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                                    continue;
                                }
                                n = 65536 + (i - 55296 << 10 | n - 56320);
                            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, n < 128) {
                                if ((e -= 1) < 0) break;
                                o.push(n);
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                o.push(n >> 6 | 192, 63 & n | 128);
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                            }
                        }
                        return o;
                    }
                    function K(t) {
                        return r.toByteArray(function(t) {
                            if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                            }(t).replace(F, "")).length < 2) return "";
                            for (;t.length % 4 != 0; ) t += "=";
                            return t;
                        }(t));
                    }
                    function H(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                        return i;
                    }
                }).call(e, n(1));
            }, function(t, e) {
                e.read = function(t, e, n, r, i) {
                    var o, a, s = 8 * i - r - 1, u = (1 << s) - 1, c = u >> 1, f = -7, l = n ? i - 1 : 0, h = n ? -1 : 1, p = t[e + l];
                    for (l += h, o = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; o = 256 * o + t[e + l], 
                    l += h, f -= 8) ;
                    for (a = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; a = 256 * a + t[e + l], l += h, 
                    f -= 8) ;
                    if (0 === o) o = 1 - c; else {
                        if (o === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                        a += Math.pow(2, r), o -= c;
                    }
                    return (p ? -1 : 1) * a * Math.pow(2, o - r);
                }, e.write = function(t, e, n, r, i, o) {
                    var a, s, u, c = 8 * o - i - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), 
                    e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++, 
                    u /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), 
                    a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + p] = 255 & s, 
                    p += d, s /= 256, i -= 8) ;
                    for (a = a << i | s, c += i; c > 0; t[n + p] = 255 & a, p += d, a /= 256, c -= 8) ;
                    t[n + p - d] |= 128 * v;
                };
            }, function(t, e) {
                var n = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == n.call(t);
                };
            } ]);
        });
    },
    "ue/d": function(t, e) {
        t.exports = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e;
        };
    },
    uieL: function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
        };
    },
    ujcs: function(t, e) {
        e.read = function(t, e, n, r, i) {
            var o, a, s = 8 * i - r - 1, u = (1 << s) - 1, c = u >> 1, f = -7, l = n ? i - 1 : 0, h = n ? -1 : 1, p = t[e + l];
            for (l += h, o = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; o = 256 * o + t[e + l], 
            l += h, f -= 8) ;
            for (a = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; a = 256 * a + t[e + l], l += h, 
            f -= 8) ;
            if (0 === o) o = 1 - c; else {
                if (o === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                a += Math.pow(2, r), o -= c;
            }
            return (p ? -1 : 1) * a * Math.pow(2, o - r);
        }, e.write = function(t, e, n, r, i, o) {
            var a, s, u, c = 8 * o - i - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), 
            e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++, 
            u /= 2), a + l >= f ? (s = 0, a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), 
            a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + p] = 255 & s, 
            p += d, s /= 256, i -= 8) ;
            for (a = a << i | s, c += i; c > 0; t[n + p] = 255 & a, p += d, a /= 256, c -= 8) ;
            t[n + p - d] |= 128 * v;
        };
    },
    uqUo: function(t, e, n) {
        var r = n("kM2E"), i = n("FeBl"), o = n("S82l");
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t], a = {};
            a[t] = e(n), r(r.S + r.F * o(function() {
                n(1);
            }), "Object", a);
        };
    },
    "us/S": function(t, e, n) {
        t.exports = {
            default: n("Xd32"),
            __esModule: !0
        };
    },
    v8Dt: function(t, e, n) {
        var r = n("pTUa");
        t.exports = function(t) {
            return r(this, t).get(t);
        };
    },
    "vFc/": function(t, e, n) {
        var r = n("TcQ7"), i = n("QRG4"), o = n("fkB2");
        t.exports = function(t) {
            return function(e, n, a) {
                var s, u = r(e), c = i(u.length), f = o(a, c);
                if (t && n != n) {
                    for (;c > f; ) if ((s = u[f++]) != s) return !0;
                } else for (;c > f; f++) if ((t || f in u) && u[f] === n) return t || f || 0;
                return !t && -1;
            };
        };
    },
    "vIB/": function(t, e, n) {
        "use strict";
        var r = n("O4g8"), i = n("kM2E"), o = n("880/"), a = n("hJx8"), s = n("/bQp"), u = n("94VQ"), c = n("e6n0"), f = n("PzxK"), l = n("dSzd")("iterator"), h = !([].keys && "next" in [].keys()), p = function() {
            return this;
        };
        t.exports = function(t, e, n, d, v, y, g) {
            u(n, e, d);
            var m, b, _, w = function(t) {
                if (!h && t in k) return k[t];
                switch (t) {
                  case "keys":
                  case "values":
                    return function() {
                        return new n(this, t);
                    };
                }
                return function() {
                    return new n(this, t);
                };
            }, x = e + " Iterator", E = "values" == v, A = !1, k = t.prototype, T = k[l] || k["@@iterator"] || v && k[v], O = T || w(v), S = v ? E ? w("entries") : O : void 0, C = "Array" == e && k.entries || T;
            if (C && (_ = f(C.call(new t()))) !== Object.prototype && _.next && (c(_, x, !0), 
            r || "function" == typeof _[l] || a(_, l, p)), E && T && "values" !== T.name && (A = !0, 
            O = function() {
                return T.call(this);
            }), r && !g || !h && !A && k[l] || a(k, l, O), s[e] = O, s[x] = p, v) if (m = {
                values: E ? O : w("values"),
                keys: y ? O : w("keys"),
                entries: S
            }, g) for (b in m) b in k || o(k, b, m[b]); else i(i.P + i.F * (h || A), e, m);
            return m;
        };
    },
    vSr5: function(t, e, n) {
        "use strict";
        var r = n("Gu7T"), i = n.n(r);
        e.a = {
            props: {
                type: String,
                validDates: Array,
                markers: Array,
                weekText: {
                    type: Array,
                    default: function() {
                        return [ "日", "一", "二", "三", "四", "五", "六" ];
                    }
                }
            },
            data: function() {
                return {
                    minMonths: [ 4, 6, 9, 11 ],
                    days: [],
                    current: {
                        date: null,
                        year: new Date().getFullYear(),
                        month: new Date().getMonth() + 1,
                        day: new Date().getDate()
                    }
                };
            },
            computed: {
                today: function() {
                    return this.formatDate({
                        year: new Date().getFullYear(),
                        month: new Date().getMonth() + 1,
                        day: new Date().getDate()
                    });
                }
            },
            watch: {
                "current.month": function() {
                    var t = this;
                    this.init(), this.current.date = this.formatDate(this.current), this.days.forEach(function(e) {
                        e.date !== t.today || e.isNotValid ? e.selected = !1 : e.selected = !0;
                    });
                },
                markers: function() {
                    this.init();
                }
            },
            methods: {
                init: function() {
                    var t = this;
                    this.days = this.initCalendar(this.current, this.markers), this.current.date = this.formatDate(this.current), 
                    this.days.forEach(function(e) {
                        e.date !== t.today || e.isNotValid ? e.selected = !1 : e.selected = !0;
                    });
                },
                initCalendar: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.year, n = t.month, r = arguments[1], o = 1 === n ? 12 : n - 1, a = 12 === n ? 1 : n + 1, s = this.handleDays(e, n, r), u = this.handleDays(e, o, r), c = this.handleDays(e, a, r), f = new Date(s[0].date).getDay(), l = new Date(s[s.length - 1].date).getDay(), h = u.splice(u.length - f, u.length - 1), p = c.splice(0, 7 - (l + 1));
                    return h.forEach(function(t) {
                        t.isOtherMonthDay = !0;
                    }), p.forEach(function(t) {
                        t.isOtherMonthDay = !0;
                    }), [].concat(i()(h), i()(s), i()(p));
                },
                handleDays: function(t, e, n) {
                    for (var r = this, i = [], o = this.getTotalDays(t, e), a = function(o) {
                        var a = o + 1, s = r.formatDate({
                            year: t,
                            month: e,
                            day: a
                        }), u = {
                            day: a,
                            date: s,
                            isFutureDay: r.getTimestamp() < r.getTimestamp(s),
                            isNotValid: r.getTimestamp(s) < r.getTimestamp(r.validDates[0]) || r.getTimestamp(s) > r.getTimestamp(r.validDates[1])
                        };
                        n.forEach(function(t) {
                            u.date === t.date && (u.checked = t.finished);
                        }), i.push(u);
                    }, s = 0; s < o; s += 1) a(s);
                    return i;
                },
                isLeapYear: function(t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
                },
                getTimestamp: function(t) {
                    return t ? new Date(t).getTime() : new Date().getTime();
                },
                formatDate: function(t) {
                    var e = t.year, n = t.month, r = t.day;
                    return r = r > 9 ? r : "0" + r, e + "-" + (n = n > 9 ? n : "0" + n) + "-" + r;
                },
                getTotalDays: function(t, e) {
                    return 2 === e ? this.isLeapYear(t) ? 29 : 28 : this.minMonths.includes(e) ? 30 : 31;
                },
                chooseDay: function(t, e) {
                    "BOOKPLAN" === this.type && (this.days.forEach(function(t) {
                        t.selected = !1;
                    }), t.selected = !0, this.$set(this.days, e, t), this.current.day = t.day, this.current.date = t.date, 
                    this.$emit("day-change", this.formatDate(this.current)));
                },
                switchMonth: function(t) {
                    var e = this.current, n = e.year, r = e.month;
                    "prev" === t && (r > 1 ? r -= 1 : (n -= 1, r = 12)), "next" === t && (r < 12 ? r += 1 : (n += 1, 
                    r = 1));
                    var i = new Date().getDate(), o = this.getTotalDays(n, r);
                    this.current.year = n, this.current.month = r, i > o && (this.current.day = o), 
                    this.current.date = this.formatDate(this.current), this.$emit("month-change", this.formatDate(this.current));
                }
            },
            created: function() {
                this.init();
            }
        };
    },
    vi0E: function(t, e, n) {
        var r = n("f931")(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    vzCy: function(t, e) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
        }
        function r(t) {
            return "function" == typeof t;
        }
        function i(t) {
            return "object" == typeof t && null !== t;
        }
        function o(t) {
            return void 0 === t;
        }
        t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, 
        n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
            if (!function(t) {
                return "number" == typeof t;
            }(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this;
        }, n.prototype.emit = function(t) {
            var e, n, a, s, u, c;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error) throw e;
                var f = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw f.context = e, f;
            }
            if (o(n = this._events[t])) return !1;
            if (r(n)) switch (arguments.length) {
              case 1:
                n.call(this);
                break;

              case 2:
                n.call(this, arguments[1]);
                break;

              case 3:
                n.call(this, arguments[1], arguments[2]);
                break;

              default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s);
            } else if (i(n)) for (s = Array.prototype.slice.call(arguments, 1), a = (c = n.slice()).length, 
            u = 0; u < a; u++) c[u].apply(this, s);
            return !0;
        }, n.prototype.addListener = function(t, e) {
            var a;
            if (!r(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), 
            this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [ this._events[t], e ] : this._events[t] = e, 
            i(this._events[t]) && !this._events[t].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[t].length > a && (this._events[t].warned = !0, 
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), 
            "function" == typeof console.trace && console.trace()), this;
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
            if (!r(e)) throw TypeError("listener must be a function");
            var n = !1;
            function i() {
                this.removeListener(t, i), n || (n = !0, e.apply(this, arguments));
            }
            return i.listener = e, this.on(t, i), this;
        }, n.prototype.removeListener = function(t, e) {
            var n, o, a, s;
            if (!r(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (a = (n = this._events[t]).length, o = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], 
            this._events.removeListener && this.emit("removeListener", t, e); else if (i(n)) {
                for (s = a; s-- > 0; ) if (n[s] === e || n[s].listener && n[s].listener === e) {
                    o = s;
                    break;
                }
                if (o < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e);
            }
            return this;
        }, n.prototype.removeAllListeners = function(t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], 
            this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this;
            }
            if (r(n = this._events[t])) this.removeListener(t, n); else if (n) for (;n.length; ) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this;
        }, n.prototype.listeners = function(t) {
            return this._events && this._events[t] ? r(this._events[t]) ? [ this._events[t] ] : this._events[t].slice() : [];
        }, n.prototype.listenerCount = function(t) {
            if (this._events) {
                var e = this._events[t];
                if (r(e)) return 1;
                if (e) return e.length;
            }
            return 0;
        }, n.listenerCount = function(t, e) {
            return t.listenerCount(e);
        };
    },
    "w/Rp": function(t, e, n) {
        var r = n("e4p/").isArray;
        t.exports = {
            copyOptions: function(t) {
                var e, n = {};
                for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                return n;
            },
            ensureFlagExists: function(t, e) {
                t in e && "boolean" == typeof e[t] || (e[t] = !1);
            },
            ensureSpacesExists: function(t) {
                "spaces" in t && ("number" == typeof t.spaces || "string" == typeof t.spaces) || (t.spaces = 0);
            },
            ensureAlwaysArrayExists: function(t) {
                "alwaysArray" in t && ("boolean" == typeof t.alwaysArray || r(t.alwaysArray)) || (t.alwaysArray = !1);
            },
            ensureKeyExists: function(t, e) {
                t + "Key" in e && "string" == typeof e[t + "Key"] || (e[t + "Key"] = e.compact ? "_" + t : t);
            },
            checkFnExists: function(t, e) {
                return t + "Fn" in e;
            }
        };
    },
    wGhD: function(t, e, n) {
        "use strict";
        e.a = {
            props: {
                serviceList: {
                    type: Array,
                    required: !0
                }
            }
        };
    },
    wSKX: function(t, e) {
        t.exports = function(t) {
            return t;
        };
    },
    woOf: function(t, e, n) {
        t.exports = {
            default: n("V3tA"),
            __esModule: !0
        };
    },
    "x+JY": function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "book-cover",
                    class: t.type
                }, [ n("div", {
                    staticClass: "cover"
                }, [ n("img", {
                    staticClass: "cover-img",
                    attrs: {
                        src: t.cover,
                        alt: "cover"
                    }
                }), t._v(" "), t.resolvedProgress ? n("div", {
                    staticClass: "progress"
                }, [ n("span", {
                    staticClass: "progress-number"
                }, [ t._v(t._s(t.resolvedProgress)) ]), t._v(" "), n("span", {
                    staticClass: "progress-unit"
                }, [ t._v("%") ]) ]) : t._e(), t._v(" "), t.isFinished ? n("div", {
                    staticClass: "finish"
                }, [ t._v("已读完") ]) : t._e(), t._v(" "), t.isTrial ? n("div", {
                    staticClass: "trial"
                }, [ t._v("试读中") ]) : t._e() ]), t._v(" "), n("div", {
                    staticClass: "shadow"
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    x0Ha: function(t, e, n) {
        "use strict";
        var r = n("ypnx");
        function i(t, e) {
            t.emit("error", e);
        }
        t.exports = {
            destroy: function(t, e) {
                var n = this, o = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
                return o || a ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, t), 
                this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), 
                this._destroy(t || null, function(t) {
                    !e && t ? (r.nextTick(i, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t);
                }), this);
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, 
                this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, 
                this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, 
                this._writableState.errorEmitted = !1);
            }
        };
    },
    xGkn: function(t, e, n) {
        "use strict";
        var r = n("4mcu"), i = n("EGZi"), o = n("/bQp"), a = n("TcQ7");
        t.exports = n("vIB/")(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e;
        }, function() {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    },
    "xH/j": function(t, e, n) {
        var r = n("hJx8");
        t.exports = function(t, e, n) {
            for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
            return t;
        };
    },
    xJsL: function(t, e, n) {
        "use strict";
        var r = n("H9Sy"), i = n("/F8v");
        var o = function(t) {
            n("sj8F");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-064b330c", null);
        e.a = a.exports;
    },
    xOcS: function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("ul", {
                    staticClass: "service-list"
                }, t._l(t.serviceList, function(e, r) {
                    return n("li", {
                        key: e.id,
                        staticClass: "service-item"
                    }, [ n("img", {
                        staticClass: "item-image",
                        attrs: {
                            src: e.iconUrl,
                            alt: ""
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "item-name"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), n("hr", {
                        staticClass: "vertical-line"
                    }) ], 1);
                }));
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    xOip: function(t, e, n) {
        var r = n("w/Rp"), i = n("T8xL");
        t.exports = function(t, e) {
            var n, o, a;
            return n = function(t) {
                var e = r.copyOptions(t);
                return r.ensureSpacesExists(e), e;
            }(e), o = i(t, n), a = "compact" in n && n.compact ? "_parent" : "parent", ("addParent" in n && n.addParent ? JSON.stringify(o, function(t, e) {
                return t === a ? "_" : e;
            }, n.spaces) : JSON.stringify(o, null, n.spaces)).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        };
    },
    xTcS: function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("Dd8w"), a = n.n(o), s = n("//Fk"), u = n.n(s), c = n("exGp"), f = n.n(c), l = n("d7EF"), h = n.n(l), p = n("75Sk"), d = n("MPG0"), v = n("Apws"), y = n("/WWA"), g = {
            state: {
                mallData: null,
                url: "",
                homePlans: []
            },
            mutations: {
                fetchMallData: function(t, e) {
                    var n = e.groups, r = e.urls, i = e.homePlans;
                    t.mallData = n;
                    var o = h()(r, 1);
                    t.url = o[0], t.homePlans = i;
                }
            },
            actions: {
                fetchMallData: function(t) {
                    var e = this, n = t.commit;
                    return f()(i.a.mark(function t() {
                        var r, o, s, c, f, l, g, m, b;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "加载中..."
                                }), t.next = 3, u.a.all([ p.a.list(), v.a.getImageSuite("qvyrg"), d.a.listHomePlans() ]);

                              case 3:
                                r = t.sent, o = h()(r, 3), s = o[0], c = o[1], f = o[2], wx.hideLoading(), l = s.groups, 
                                g = c.image_urls, m = f.objects, b = m.map(function(t) {
                                    return a()({}, t, {
                                        navUrl: "/pages/planLanding/main?id=" + y.e
                                    });
                                }), n("fetchMallData", {
                                    groups: l,
                                    urls: g,
                                    homePlans: b
                                });

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            }
        };
        e.a = g;
    },
    xnc9: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    xond: function(t, e, n) {
        var r = n("FCuZ"), i = n("09Qt"), o = n("t8rQ");
        t.exports = function(t) {
            return r(t, o, i);
        };
    },
    xzjf: function(t, e, n) {
        "use strict";
        var r = n("VW3m"), i = n("QkUu");
        var o = function(t) {
            n("jKnu");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-03c5fe20", null);
        e.a = a.exports;
    },
    yCNF: function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    ybqe: function(t, e) {
        t.exports = function(t, e, n, r, i) {
            var o, a = t = t || {}, s = typeof t.default;
            "object" !== s && "function" !== s || (o = t, a = t.default);
            var u, c = "function" == typeof a ? a.options : a;
            if (e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns), r && (c._scopeId = r), 
            i ? (u = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
                n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i);
            }, c._ssrRegister = u) : n && (u = n), u) {
                var f = c.functional, l = f ? c.render : c.beforeCreate;
                f ? c.render = function(t, e) {
                    return u.call(e), l(t, e);
                } : c.beforeCreate = l ? [].concat(l, u) : [ u ];
            }
            return {
                esModule: o,
                exports: a,
                options: c
            };
        };
    },
    ypnx: function(t, e, n) {
        "use strict";
        (function(e) {
            !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                nextTick: function(t, n, r, i) {
                    if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                    var o, a, s = arguments.length;
                    switch (s) {
                      case 0:
                      case 1:
                        return e.nextTick(t);

                      case 2:
                        return e.nextTick(function() {
                            t.call(null, n);
                        });

                      case 3:
                        return e.nextTick(function() {
                            t.call(null, n, r);
                        });

                      case 4:
                        return e.nextTick(function() {
                            t.call(null, n, r, i);
                        });

                      default:
                        for (o = new Array(s - 1), a = 0; a < o.length; ) o[a++] = arguments[a];
                        return e.nextTick(function() {
                            t.apply(null, o);
                        });
                    }
                }
            } : t.exports = e;
        }).call(e, n("W2nU"));
    },
    z4hc: function(t, e, n) {
        var r = n("aCM0"), i = n("Rh28"), o = n("UnEC"), a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, 
        a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, 
        t.exports = function(t) {
            return o(t) && i(t.length) && !!a[r(t)];
        };
    },
    zBOP: function(t, e, n) {
        var r = n("22B7"), i = n("bGc4"), o = n("ZGh9"), a = n("yCNF");
        t.exports = function(t, e, n) {
            if (!a(n)) return !1;
            var s = typeof e;
            return !!("number" == s ? i(n) && o(e, n.length) : "string" == s && e in n) && r(n[e], t);
        };
    },
    "zMR/": function(t, e, n) {
        var r = n("HbnZ"), i = n("0DSl")(function(t, e, n, i) {
            r(t, e, n, i);
        });
        t.exports = i;
    },
    zQR9: function(t, e, n) {
        "use strict";
        var r = n("h65t")(!0);
        n("vIB/")(String, "String", function(t) {
            this._t = String(t), this._i = 0;
        }, function() {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            });
        });
    },
    zpVT: function(t, e, n) {
        var r = n("duB3"), i = n("POb3"), o = n("YeCl"), a = 200;
        t.exports = function(t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var s = n.__data__;
                if (!i || s.length < a - 1) return s.push([ t, e ]), this.size = ++n.size, this;
                n = this.__data__ = new o(s);
            }
            return n.set(t, e), this.size = n.size, this;
        };
    }
});