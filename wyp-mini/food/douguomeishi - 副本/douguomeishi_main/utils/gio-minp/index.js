function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e) {
    return e && e.$attrs ? e.$attrs.mpcomid : "0";
}

function n(e, t, n) {
    return !(!e || !t || t !== e && 0 !== t.indexOf(e + n));
}

function i(e, i, r) {
    void 0 === i && (i = []);
    var o = i.slice(1);
    if (!o.length) return e;
    var s = o.join(r), a = "";
    return o.reduce(function(e, i) {
        for (var o = e.$children.length, u = 0; o > u; u++) {
            var c = e.$children[u], h = t(c);
            if (a && (h = a + r + h), n(h, s, r)) return a = h, e = c;
        }
        return e;
    }, e);
}

function r(e, t, n) {
    void 0 === n && (n = []);
    var i = [];
    if (!e || !e.tag) return i;
    var o = e || {}, s = o.data;
    void 0 === s && (s = {});
    var a = o.children;
    void 0 === a && (a = []);
    var u = o.componentInstance;
    u ? Object.keys(u.$slots).forEach(function(e) {
        var o = u.$slots[e];
        (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
            i = i.concat(r(e, t, n));
        });
    }) : a.forEach(function(e) {
        i = i.concat(r(e, t, n));
    });
    var c = s.attrs, h = s.on;
    return c && h && c.eventid === t && n.forEach(function(e) {
        var t = h[e];
        "function" == typeof t ? i.push(t) : Array.isArray(t) && (i = i.concat(t));
    }), i;
}

function o() {}

function s(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
}

function a(e) {
    return function() {
        return this[e].apply(this, arguments);
    };
}

function u(e) {
    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : h(e))) && u(e.listener);
}

var c = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

if (Object.defineProperty(exports, "__esModule", {
    value: !0
}), !Object.hasOwnProperty("getOwnPropertyDescriptors")) {
    E = void 0;
    E = "object" == ("undefined" == typeof Reflect ? "undefined" : h(Reflect)) && "function" == typeof Reflect.ownKeys ? Reflect.ownKeys : "function" == typeof Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : Object.getOwnPropertyNames, Object.defineProperty(Object, "getOwnPropertyDescriptors", {
        configurable: !0,
        writable: !0,
        value: function(e) {
            return E(e).reduce(function(t, n) {
                return Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: Object.getOwnPropertyDescriptor(e, n)
                });
            }, {});
        }
    });
}

var l = function() {
    function t(n) {
        e(this, t), this.growingio = n, this.messageQueue = [], this.uploadingQueue = [], 
        this.uploadTimer = null, this.projectId = this.growingio.projectId, this.appId = this.growingio.appId, 
        this.host = this.growingio.host, this.url = this.host + "/projects/" + this.projectId + "/apps/" + this.appId + "/collect";
    }
    return c(t, [ {
        key: "upload",
        value: function(e) {
            var t = this;
            this.messageQueue.push(e);
            var n = this.messageQueue.length;
            n > 100 && (this.messageQueue = this.messageQueue.slice(n - 100)), this.uploadTimer || (this.uploadTimer = setTimeout(function() {
                t._flush(), t.uploadTimer = null;
            }, 1e3));
        }
    }, {
        key: "forceFlush",
        value: function() {
            this.uploadTimer && (clearTimeout(this.uploadTimer), this.uploadTimer = null), this._flush();
        }
    }, {
        key: "_flush",
        value: function() {
            var e = this;
            this.uploadingQueue = this.messageQueue.slice(), this.messageQueue = [], this.uploadingQueue.length > 0 && wx.request({
                url: this.url + "?stm=" + Date.now(),
                header: {
                    "content-type": "application/json"
                },
                method: "POST",
                data: this.uploadingQueue,
                success: function() {
                    e.messageQueue.length > 0 && e._flush();
                },
                fail: function() {
                    e.messageQueue = e.uploadingQueue.concat(e.messageQueue);
                }
            });
        }
    } ]), t;
}(), g = {
    sdkVer: "2.0.11",
    devVer: 1,
    guid: function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16);
        });
    },
    getAppId: function() {
        var e = void 0;
        return wx.getSystemInfo({
            success: function(t) {
                0 > g.compareVersion(t.SDKVersion, "2.2.2") || (e = wx.getAccountInfoSync().miniProgram.appId);
            }
        }), e;
    },
    getScreenHeight: function(e) {
        return Math.round(e.screenHeight * e.pixelRatio);
    },
    getScreenWidth: function(e) {
        return Math.round(e.screenWidth * e.pixelRatio);
    },
    getOS: function(e) {
        if (e) {
            var t = e.toLowerCase();
            return -1 != t.indexOf("android") ? "Weixin-Android" : -1 != t.indexOf("ios") ? "Weixin-iOS" : e;
        }
    },
    getOSV: function(e) {
        return "Weixin " + e;
    },
    isEmpty: function(e) {
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = Math.max(e.length, t.length); n > e.length; ) e.push("0");
        for (;n > t.length; ) t.push("0");
        for (var i = 0; n > i; i++) {
            var r = parseInt(e[i]), o = parseInt(t[i]);
            if (r > o) return 1;
            if (o > r) return -1;
        }
        return 0;
    }
}, p = function() {
    function t() {
        e(this, t), this.queries = {}, this.pvar = {};
    }
    return c(t, [ {
        key: "touch",
        value: function(e) {
            this.path = e.route, this.time = Date.now(), this.query = this.queries[e.route] ? this.queries[e.route] : void 0;
        }
    }, {
        key: "addQuery",
        value: function(e, t) {
            this.queries[e.route] = t ? this._getQuery(t) : null;
        }
    }, {
        key: "_getQuery",
        value: function(e) {
            return Object.keys(e).filter(function(e) {
                return "wxShoppingListScene" !== e;
            }).map(function(t) {
                return t + "=" + e[t];
            }).join("&");
        }
    }, {
        key: "touchRelatedPvarData",
        value: function(e) {
            var t = e.p + "?" + e.q;
            this.pvar[t] ? this.pvar[t].push(e) : this.pvar[t] = [ e ];
        }
    } ]), t;
}(), f = {
    tap: [ "tap", "click" ],
    longtap: [ "longtap" ],
    input: [ "input" ],
    blur: [ "change", "blur" ],
    submit: [ "submit" ],
    focus: [ "focus" ]
}, d = /^function[^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*/, v = function() {
    function t(n) {
        e(this, t), this.vueVM = n;
    }
    return c(t, [ {
        key: "getHandle",
        value: function(e) {
            var t = e.type, n = e.target;
            void 0 === n && (n = {});
            var o = (e.currentTarget || n).dataset;
            void 0 === o && (o = {});
            var s = o.comkey;
            void 0 === s && (s = "");
            var a = o.eventid, u = -1 !== s.indexOf("_") ? "_" : ",", c = i(this.vueVM, s.split(u), u);
            if (c) {
                var h = r(c._vnode, a, f[t] || [ t ]);
                if (h.length) {
                    var l = h[0];
                    if (l.isProxied) return l.proxiedName;
                    try {
                        var g = ("" + l).replace("\n", "");
                        if (g.match(d)) {
                            var p = d.exec(g);
                            if (p && p.length > 1) return p[1];
                        }
                    } catch (e) {}
                    return l.name;
                }
            }
        }
    } ]), t;
}(), y = o.prototype, m = exports.EventEmitter;

y.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if (e instanceof RegExp) for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]); else t = i[e] || (i[e] = []);
    return t;
}, y.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n;
}, y.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && ((t = {})[e] = n), t || n;
}, y.addListener = function(e, t) {
    if (!u(t)) throw new TypeError("listener must be a function");
    var n, i = this.getListenersAsObject(e), r = "object" == (void 0 === t ? "undefined" : h(t));
    for (n in i) i.hasOwnProperty(n) && -1 === s(i[n], t) && i[n].push(r ? t : {
        listener: t,
        once: !1
    });
    return this;
}, y.on = a("addListener"), y.addOnceListener = function(e, t) {
    return this.addListener(e, {
        listener: t,
        once: !0
    });
}, y.once = a("addOnceListener"), y.defineEvent = function(e) {
    return this.getListeners(e), this;
}, y.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this;
}, y.removeListener = function(e, t) {
    var n, i, r = this.getListenersAsObject(e);
    for (i in r) r.hasOwnProperty(i) && -1 !== (n = s(r[i], t)) && r[i].splice(n, 1);
    return this;
}, y.off = a("removeListener"), y.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t);
}, y.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t);
}, y.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
    if ("object" != (void 0 === t ? "undefined" : h(t)) || t instanceof RegExp) for (i = n.length; i--; ) o.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this;
}, y.removeEvent = function(e) {
    var t, n = void 0 === e ? "undefined" : h(e), i = this._getEvents();
    if ("string" === n) delete i[e]; else if (e instanceof RegExp) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
    return this;
}, y.removeAllListeners = a("removeEvent"), y.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].slice(0), r = 0; n.length > r; r++) !0 === (i = n[r]).once && this.removeListener(e, i.listener), 
    i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
    return this;
}, y.trigger = a("emitEvent"), y.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
}, y.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this;
}, y._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
}, y._getEvents = function() {
    return this._events || (this._events = {});
}, o.noConflict = function() {
    return exports.EventEmitter = m, o;
};

var w = new o(), _ = function() {
    function t(n) {
        e(this, t), this.growingio = n, this.weixin = n.weixin, this.currentPage = new p(), 
        this.scene = null, this._sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, 
        this.lastVstArgs = void 0, this.lastCloseTime = null, this.lastScene = void 0, this.keepAlive = n.keepAlive, 
        this.isPauseSession = !1, this._observer = null, this.CLICK_TYPE = {
            tap: "clck",
            longpress: "lngprss",
            longtap: "lngprss"
        };
    }
    return c(t, [ {
        key: "resetSessionId",
        value: function() {
            this._sessionId = null;
        }
    }, {
        key: "pauseSession",
        value: function() {
            this.isPauseSession = !0;
        }
    }, {
        key: "getVisitorId",
        value: function() {
            return this.weixin.uid;
        }
    }, {
        key: "getUserId",
        value: function() {
            return this.cs1;
        }
    }, {
        key: "getGioInfo",
        value: function() {
            return "giou=" + this.getVisitorId() + "&giocs1=" + this.getUserId() + "&gios=" + this.sessionId;
        }
    }, {
        key: "setUserId",
        value: function(e) {
            var t = e + "";
            t && 100 > t.length && (this.cs1 = t, w.emitEvent("setCs1", [ t ]), this.lastPageEvent && this._sendEvent(this.lastPageEvent));
        }
    }, {
        key: "clearUserId",
        value: function() {
            this.cs1 = null;
        }
    }, {
        key: "collectImp",
        value: function(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.growingio.vue && (e = e.$mp.page), this.growingio.taro && (e = e.$scope);
            var i = {};
            this._observer && this._observer.disconnect(), this._observer = e.isComponent ? e.createIntersectionObserver({
                observeAll: !0
            }) : wx.createIntersectionObserver(e, {
                observeAll: !0
            }), this._relative = n ? this._observer.relativeTo(n) : this._observer.relativeToViewport(), 
            this._relative.observe(".growing_collect_imp", function(e) {
                e.id && !i[e.id] && (t.track(e.dataset.gioTrack && e.dataset.gioTrack.name, e.dataset.gioTrack && e.dataset.gioTrack.properties), 
                i[e.id] = !0);
            });
        }
    }, {
        key: "appListener",
        value: function(e, t, n) {
            this.isPauseSession || (this.growingio.debug && console.log("App.", t, Date.now()), 
            "onShow" == t ? (w.emitEvent("appShow"), this._parseScene(n), !this.lastCloseTime || Date.now() - this.lastCloseTime > this.keepAlive || this.lastScene && this.scene !== this.lastScene ? (this.resetSessionId(), 
            this.sendVisitEvent(n, this.growingio.getLocationType), this.lastVstArgs = n, this.lastPageEvent = void 0) : this.useLastPageTime = !0) : "onHide" == t ? (this.lastScene = this.scene, 
            this.growingio.forceFlush(), this.weixin.syncStorage(), this.isPauseSession || (this.lastCloseTime = Date.now(), 
            this.sendVisitCloseEvent())) : "onError" == t && this.sendErrorEvent(n));
        }
    }, {
        key: "pageListener",
        value: function(e, t, n) {
            if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isPauseSession ? this.isPauseSession = !1 : (this.currentPage.touch(e), 
            this.sendPage(e)); else if ("onLoad" === t) g.isEmpty(i = n[0]) || this.currentPage.addQuery(e, i); else if ("onHide" === t) this._observer && this._observer.disconnect(); else if ("onUnload" === t) this.currentPage.pvar[this.currentPage.path + "?" + this.currentPage.query] = void 0; else if ("onShareAppMessage" === t) {
                var i = null, r = null;
                2 > n.length ? 1 === n.length && (n[0].from ? i = n[0] : n[0].title && (r = n[0])) : (i = n[0], 
                r = n[1]), this.pauseSession(), this.sendPageShare(e, i, r);
            } else "onTabItemTap" === t && this.sendTabClick(n[0]);
        }
    }, {
        key: "actionListener",
        value: function(e, t) {
            if ("_cmlEventProxy" !== t) {
                if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                    var n = new v(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                    n && (t = n);
                }
                this.growingio.taroRootVMs && this.growingio.taroRootVMs[t] && (t = this.growingio.taroRootVMs[t]), 
                this.growingio.debug && console.log("Click on ", t, Date.now()), "tap" === e.type || "longpress" === e.type ? this.sendClick(e, t) : -1 !== [ "change", "confirm", "blur" ].indexOf(e.type) ? this.sendChange(e, t) : "getuserinfo" === e.type ? (this.sendClick(e, t), 
                e.detail && e.detail.userInfo && this.setVisitor(e.detail.userInfo)) : "getphonenumber" === e.type ? this.sendClick(e, t) : "contact" === e.type ? this.sendClick(e, t) : "submit" === e.type && this.sendSubmit(e, t);
            }
        }
    }, {
        key: "getLocation",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wgs84";
            this.growingio.getLocation = !0, this.sendVisitEvent(this.lastVstArgs, e);
        }
    }, {
        key: "sendVideoCstm",
        value: function(e, t) {
            this.track("video-" + e.type, e.var);
        }
    }, {
        key: "track",
        value: function(e, t) {
            if (null !== e && void 0 !== e && 0 !== e.length) {
                var n = {
                    t: "cstm",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    n: e
                };
                null !== t && "object" == (void 0 === t ? "undefined" : h(t)) && (n.var = t), this._sendEvent(n);
            }
        }
    }, {
        key: "identify",
        value: function(e, t) {
            void 0 !== e && 0 !== e.length && (this.growingio.login(e), this._sendEvent({
                t: "vstr",
                var: {
                    openid: e,
                    unionid: t
                }
            }));
        }
    }, {
        key: "setVisitor",
        value: function(e) {
            this._sendEvent({
                t: "vstr",
                var: e
            });
        }
    }, {
        key: "setUser",
        value: function(e) {
            this._sendEvent({
                t: "ppl",
                var: e
            });
        }
    }, {
        key: "setPage",
        value: function(e) {
            var t = {
                t: "pvar",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                var: e
            };
            this.currentPage.touchRelatedPvarData(t), this._sendEvent(t);
        }
    }, {
        key: "setEvar",
        value: function(e) {
            this._sendEvent({
                t: "evar",
                var: e
            });
        }
    }, {
        key: "sendVisitEvent",
        value: function(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wgs84";
            n = -1 !== [ "wgs84", "gcj02" ].indexOf(n) ? n : "wgs84";
            var i = this.weixin.systemInfo, r = {
                t: "vst",
                tm: Date.now(),
                av: g.sdkVer,
                db: i.brand,
                dm: i.model.replace(/<.*>/, ""),
                sh: g.getScreenHeight(i),
                sw: g.getScreenWidth(i),
                os: g.getOS(i.platform),
                osv: g.getOSV(i.version),
                l: i.language
            };
            if (this.growingio.appVer && (r.cv = this.growingio.appVer + ""), e.length > 0) {
                var o = e[0];
                r.p = o.path, g.isEmpty(o.query) || (r.q = this.currentPage._getQuery(o.query)), 
                r.ch = "scn:" + this.scene, o.referrerInfo && o.referrerInfo.appId && (r.rf = o.referrerInfo.appId);
            }
            this.weixin.getNetworkType().then(function(e) {
                e && (r.nt = e.networkType, t._sendEvent(r), t.growingio.getLocation && t.weixin.requestLocation(n).then(function() {
                    null != t.weixin.location && (r.lat = t.weixin.location.latitude, r.lng = t.weixin.location.longitude, 
                    t._sendEvent(r));
                }));
            });
        }
    }, {
        key: "sendVisitCloseEvent",
        value: function() {
            this._sendEvent({
                t: "cls",
                p: this.currentPage.path,
                q: this.currentPage.query
            });
        }
    }, {
        key: "sendErrorEvent",
        value: function(e) {
            if (e && e.length > 0) {
                var t = e[0].split("\n");
                if (t && t.length > 1) {
                    var n = t[1].split(";");
                    if (n && n.length > 1) {
                        var i = n[1].match(/at ([^ ]+) page (.*) function/), r = {
                            key: t[0],
                            error: n[0]
                        };
                        i && i.length > 2 && (r.page = i[1], r.function = i[2]), this._sendEvent({
                            t: "cstm",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            n: "onError",
                            var: r
                        });
                    }
                }
            }
        }
    }, {
        key: "sendPage",
        value: function(e) {
            var t = this, n = {
                t: "page",
                tm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            };
            this.lastPageEvent ? (n.rp = this.lastPageEvent.p, this.useLastPageTime && (n.tm = this.lastPageEvent.tm, 
            this.useLastPageTime = !1)) : n.rp = this.scene ? "scn:" + this.scene : null, e.data && e.data.pvar && (n.var = e.data.pvar);
            var i = this.weixin.getPageTitle(e);
            i && i.length > 0 && (n.tl = i), this._sendEvent(n), this.lastPageEvent = n;
            var r = this.currentPage.pvar[this.currentPage.path + "?" + this.currentPage.query];
            r && r.length > 0 && r.map(function(e) {
                e.ptm = t.currentPage.time, t._sendEvent(e);
            });
        }
    }, {
        key: "sendPageShare",
        value: function(e, t, n) {
            this._sendEvent({
                t: "cstm",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                n: "onShareAppMessage",
                var: {
                    from: t ? t.from : void 0,
                    target: t && t.target ? t.target.id : void 0,
                    title: n ? n.title : void 0,
                    path: n ? decodeURI(n.path) : void 0
                }
            });
        }
    }, {
        key: "sendClick",
        value: function(e, t) {
            var n = {
                t: this.CLICK_TYPE[e.type] || "clck",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            }, i = e.currentTarget, r = {
                x: i.id + "#" + t
            };
            i.dataset.title ? r.v = i.dataset.title : i.dataset.src && (r.h = i.dataset.src), 
            void 0 !== i.dataset.index && (r.idx = /^[\d]+$/.test(i.dataset.index) ? parseInt(i.dataset.index) : -1), 
            n.e = [ r ], this._sendEvent(n);
        }
    }, {
        key: "sendSubmit",
        value: function(e, t) {
            var n = {
                t: "sbmt",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            };
            n.e = [ {
                x: e.currentTarget.id + "#" + t
            } ], this._sendEvent(n);
        }
    }, {
        key: "sendChange",
        value: function(e, t) {
            var n = {
                t: "chng",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            }, i = e.currentTarget, r = {
                x: i.id + "#" + t
            };
            if (-1 !== [ "blur", "change", "confirm" ].indexOf(e.type) && i.dataset.growingTrack) {
                if (!e.detail.value || 0 === e.detail.value.length) return;
                "string" == typeof e.detail.value ? r.v = e.detail.value : "[object Array]" === Object.prototype.toString.call(e.detail.value) && (r.v = e.detail.value.join(","));
            }
            "change" === e.type && e.detail && e.detail.source && "autoplay" === e.detail.source || (n.e = [ r ], 
            this._sendEvent(n));
        }
    }, {
        key: "sendTabClick",
        value: function(e) {
            var t = {
                t: "clck",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                e: [ {
                    x: "#onTabItemTap",
                    v: e.text,
                    idx: e.index,
                    h: JSON.stringify(e.pagePath)
                } ]
            };
            this._sendEvent(t);
        }
    }, {
        key: "_sendEvent",
        value: function(e) {
            if (e.u = this.weixin.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.appId, 
            e.b = "MinP", null !== this.cs1 && (e.cs1 = this.cs1), e.var) {
                var t = e.var;
                Object.keys(t).forEach(function(n) {
                    "string" != typeof t[n] && (e.var[n] = JSON.stringify(t[n]));
                });
            }
            this.growingio.upload(e);
        }
    }, {
        key: "_parseScene",
        value: function(e) {
            if (e.length > 0) {
                var t = e[0];
                t.query.wxShoppingListScene ? this.scene = t.query.wxShoppingListScene : t.scene && (this.scene = t.scene);
            }
        }
    }, {
        key: "sessionId",
        get: function() {
            return null === this._sessionId && (this._sessionId = g.guid()), this._sessionId;
        }
    } ]), t;
}(), x = function() {
    function t(n) {
        e(this, t), this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
        this._uid && 36 !== this._uid.length && (n.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
    }
    return c(t, [ {
        key: "syncStorage",
        value: function() {
            wx.getStorageSync("_growing_uid_") || wx.setStorageSync("_growing_uid_", this._uid);
        }
    }, {
        key: "requestLocation",
        value: function(e) {
            var t = this;
            return new Promise(function(n) {
                t._getLocation(e).then(function(e) {
                    return t._location = e, n(e);
                });
            });
        }
    }, {
        key: "getNetworkType",
        value: function() {
            return new Promise(function(e) {
                wx.getNetworkType({
                    success: function(t) {
                        return e(t);
                    },
                    fail: function() {
                        return e(null);
                    }
                });
            });
        }
    }, {
        key: "getPageTitle",
        value: function(e) {
            var t = "";
            try {
                if (e.data.title && e.data.title.length > 0 && (t = Array.isArray(e.data.title) ? e.data.title.join(" ") : e.data.title), 
                0 === t.length && __wxConfig) {
                    if (__wxConfig.tabBar) {
                        var n = __wxConfig.tabBar.list.find(function(t) {
                            return t.pathPath == e.route || t.pagePath == e.route + ".html";
                        });
                        n && n.text && (t = n.text);
                    }
                    if (0 == t.length) {
                        var i = __wxConfig.page[e.route] || __wxConfig.page[e.route + ".html"];
                        t = i ? i.window.navigationBarTitleText : __wxConfig.global.window.navigationBarTitleText;
                    }
                }
            } catch (e) {}
            return t;
        }
    }, {
        key: "_getSetting",
        value: function() {
            return new Promise(function(e) {
                wx.getSetting({
                    success: e,
                    fail: e
                });
            });
        }
    }, {
        key: "_getLocation",
        value: function(e) {
            return new Promise(function(t) {
                wx.getLocation({
                    type: e,
                    success: t,
                    fail: function() {
                        return t(null);
                    }
                });
            });
        }
    }, {
        key: "location",
        get: function() {
            return this._location;
        }
    }, {
        key: "systemInfo",
        get: function() {
            return null == this._systemInfo && (this._systemInfo = wx.getSystemInfoSync()), 
            this._systemInfo;
        }
    }, {
        key: "esid",
        set: function(e) {
            this._esid = e, wx.setStorageSync("_growing_esid_", this._esid);
        },
        get: function() {
            return this._esid || (this._esid = 1), this._esid;
        }
    }, {
        key: "uid",
        set: function(e) {
            this._uid = e, wx.setStorageSync("_growing_uid_", this._uid);
        },
        get: function() {
            return this._uid || (this.uid = g.guid()), this._uid;
        }
    } ]), t;
}(), b = function(e) {
    var t = P.observer.growingio;
    t && t.followShare && e && e.path && (e.path = -1 === e.path.indexOf("?") ? e.path + "?suid=" + t.weixin.uid : e.path + "&suid=" + t.weixin.uid);
}, P = {
    defaultPageCallbacks: {},
    defaultAppCallbacks: {},
    appHandlers: [ "onShow", "onHide", "onError" ],
    pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap", "onHide", "onUnload" ],
    actionEventTypes: [ "tap", "longpress", "blur", "change", "submit", "confirm", "getuserinfo", "getphonenumber", "contact" ],
    originalPage: Page,
    originalApp: App,
    originalComponent: Component,
    originalBehavior: Behavior,
    hook: function(e, t) {
        return function() {
            var n, i = arguments ? arguments[0] : void 0;
            if (i && i.currentTarget && -1 != P.actionEventTypes.indexOf(i.type)) try {
                P.observer.actionListener(i, e);
            } catch (e) {
                console.error(e);
            }
            if (this._growing_app_ && "onShow" !== e ? n = t.apply(this, arguments) : this._growing_page_ && -1 === [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e) ? n = t.apply(this, arguments) : this._growing_app_ || this._growing_page_ || (n = t.apply(this, arguments)), 
            this._growing_app_ && -1 !== P.appHandlers.indexOf(e)) {
                try {
                    P.defaultAppCallbacks[e].apply(this, arguments);
                } catch (e) {
                    console.error(e);
                }
                "onShow" === e && (n = t.apply(this, arguments));
            }
            if (this._growing_page_ && -1 !== P.pageHandlers.indexOf(e)) {
                var r = Array.prototype.slice.call(arguments);
                n && r.push(n);
                try {
                    P.defaultPageCallbacks[e].apply(this, r);
                } catch (e) {
                    console.error(e);
                }
                -1 !== [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e) ? n = t.apply(this, arguments) : b(n);
            }
            return n;
        };
    },
    hookComponent: function(e, t) {
        return function() {
            var n = arguments ? arguments[0] : void 0;
            if (n && n.currentTarget && -1 != P.actionEventTypes.indexOf(n.type)) try {
                P.observer.actionListener(n, e);
            } catch (e) {
                console.error(e);
            }
            return t.apply(this, arguments);
        };
    },
    instrument: function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
        return e._growing_app_ && P.appHandlers.map(function(t) {
            e[t] || (e[t] = P.defaultAppCallbacks[t]);
        }), e._growing_page_ && P.pageHandlers.map(function(t) {
            e[t] || "onShareAppMessage" === t || (e[t] = P.defaultPageCallbacks[t]);
        }), e;
    },
    instrumentTaroPageComponent: function(e) {
        if (e.methods) {
            var t = e.methods;
            for (var n in t) !function(n) {
                if ("function" == typeof t[n] && -1 != P.pageHandlers.indexOf(n)) {
                    var i = t[n];
                    e.methods[n] = function() {
                        P.observer.pageListener(this, n, arguments);
                        var e = i.apply(this, arguments);
                        return "onShareAppMessage" === n && b(e), e;
                    };
                }
            }(n);
        }
        return e;
    },
    instrumentComponent: function(e) {
        if (e.methods) {
            var t = e.methods;
            for (var n in t) "function" == typeof t[n] && (e.methods[n] = this.hookComponent(n, t[n]));
        }
        return e;
    },
    GrowingPage: function(e) {
        return e._growing_page_ = !0, P.originalPage(P.instrument(e));
    },
    GrowingComponent: function(e) {
        return P.originalComponent(P.instrumentComponent(e));
    },
    GrowingBehavior: function(e) {
        return P.originalBehavior(P.instrumentComponent(e));
    },
    GrowingApp: function(e) {
        return e._growing_app_ = !0, P.originalApp(P.instrument(e));
    },
    initInstrument: function(e, t) {
        P.observer = e, P.pageHandlers.forEach(function(e) {
            P.defaultPageCallbacks[e] = function() {
                this.__route__ && P.observer.pageListener(this, e, arguments);
            };
        }), P.appHandlers.forEach(function(e) {
            P.defaultAppCallbacks[e] = function() {
                P.observer.appListener(this, e, arguments);
            };
        }), t ? (global.GioPage = P.GrowingPage, global.GioApp = P.GrowingApp, global.GioComponent = P.GrowingComponent, 
        global.GioBehavior = P.GrowingBehavior, global.trackApp = function() {
            var e = arguments[0];
            return e._growing_app_ = !0, P.instrument(e);
        }, global.trackPage = function() {
            var e = arguments[0];
            return e._growing_page_ = !0, P.instrument(e);
        }, global.trackComponent = function() {
            return P.instrument(arguments[0]);
        }, global.trackBehavior = function() {
            return P.instrument(arguments[0]);
        }) : (Page = function() {
            return P.GrowingPage(arguments[0]);
        }, App = function() {
            return P.GrowingApp(arguments[0]);
        }, Component = function() {
            return P.GrowingComponent(arguments[0]);
        }, Behavior = function() {
            return P.GrowingBehavior(arguments[0]);
        });
    }
}, k = new (function() {
    function t() {
        e(this, t), this.uploadingMessages = [], this.start = !1;
    }
    return c(t, [ {
        key: "init",
        value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.start || (this.start = !0, this.projectId = e, "string" == typeof t ? this.appId = t : (n = t, 
            this.appId = g.getAppId()), this.appVer = n.version, this.debug = n.debug || !1, 
            this.forceLogin = n.forceLogin || !1, this.followShare = n.followShare || !1, this.usePlugin = n.usePlugin || !1, 
            this.getLocation = ("object" == h(n.getLocation) ? n.getLocation.autoGet : n.getLocation) || !1, 
            this.getLocationType = "object" == h(n.getLocation) && n.getLocation.type || "wgs84", 
            this.keepAlive = +n.keepAlive || 3e5, this.vue = !!n.vue, this.taro = !!n.taro, 
            this.dataCollect = !(n.stopTrack && !n.dataCollect), this.weixin = new x(this), 
            this.esid = this.weixin.esid, this.host = "https://wxapi.growingio.com", n.host && n.host.indexOf("http") >= 0 && (this.host = "https://" + n.host.slice(n.host.indexOf("://") + 3)), 
            this.uploader = new l(this), this.observer = new _(this), this.start = !0, n.vue && (this.vueRootVMs = {}, 
            this._proxyVue(n.vue)), n.taro && (this.taroRootVMs = {}, this._proxyTaro(n.taro)), 
            n.cml && this._proxyCml(n.cml), this._start());
        }
    }, {
        key: "setVue",
        value: function(e) {
            this.vueRootVMs || (this.vueRootVMs = {}), this.vue = !0, this._proxyVue(e);
        }
    }, {
        key: "setDataCollect",
        value: function(e) {
            this.dataCollect = e;
        }
    }, {
        key: "login",
        value: function(e) {
            if (this.forceLogin) {
                var t = !0, n = !1, i = void 0;
                try {
                    for (var r, o = (this.weixin.uid = e, this.forceLogin = !1, this.uploadingMessages)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                        var s = r.value;
                        s.u = e, this._upload(s);
                    }
                } catch (e) {
                    n = !0, i = e;
                } finally {
                    try {
                        !t && o.return && o.return();
                    } finally {
                        if (n) throw i;
                    }
                }
            }
        }
    }, {
        key: "upload",
        value: function(e) {
            this.dataCollect && (this.forceLogin ? this.uploadingMessages.push(e) : this._upload(e));
        }
    }, {
        key: "forceFlush",
        value: function() {
            this.weixin.esid = this.esid, this.uploader.forceFlush();
        }
    }, {
        key: "proxy",
        value: function(e, t) {
            try {
                if ("setVue" === e) this.setVue(t[0]); else if ("setDataCollect" === e) this.setDataCollect(t[0]); else if ("setStopTrack" === e) this.setDataCollect(!t[0]); else if (this.observer && this.observer[e]) return this.observer[e].apply(this.observer, t);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "_start",
        value: function() {
            P.initInstrument(this.observer, this.usePlugin);
            try {
                global && (global.App = App, global.Page = Page, global.Component = Component);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "_upload",
        value: function(e) {
            e.esid = this.esid++, this.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
            w.emitEvent("upload", [ e ]), this.uploader.upload(e);
        }
    }, {
        key: "_proxyTaro",
        value: function(e) {
            var t = this, n = e.createComponent;
            e.createComponent = function(e, i) {
                for (var r = e; r && r.prototype; ) {
                    for (var o = Object.keys(Object.getOwnPropertyDescriptors(r.prototype) || {}), s = 0; o.length > s; s++) if (o[s].startsWith("func__")) {
                        var a = r.name, u = o[s].slice(6);
                        t.taroRootVMs[o[s]] = a + "_" + ("" + e.prototype[o[s]]).match(/this\.__triggerPropsFn\(\"(.+)\",/)[1] + "_" + u;
                    }
                    r = Object.getPrototypeOf(r);
                }
                var c = n(e, i);
                return i && P.instrumentTaroPageComponent(c), c;
            };
        }
    }, {
        key: "_proxyCml",
        value: function(e) {
            var t = e.createApp;
            e.createApp = function(e) {
                var n = t(e);
                return P.GrowingApp(n.options), n;
            };
        }
    }, {
        key: "_proxyVue",
        value: function(e) {
            if (void 0 !== e.mixin) {
                var t = this;
                e.mixin({
                    created: function() {
                        if (this.$options.methods) {
                            var e = Object.keys(this.$options.methods), t = !0, n = !1, i = void 0;
                            try {
                                for (var r, o = Object.keys(this)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                    var s = r.value;
                                    0 > e.indexOf(s) || "function" != typeof this[s] || (Object.defineProperty(this[s], "proxiedName", {
                                        value: s
                                    }), Object.defineProperty(this[s], "isProxied", {
                                        value: !0
                                    }));
                                }
                            } catch (e) {
                                n = !0, i = e;
                            } finally {
                                try {
                                    !t && o.return && o.return();
                                } finally {
                                    if (n) throw i;
                                }
                            }
                        }
                    },
                    beforeMount: function() {
                        var e = this.$root;
                        e.$mp && "page" === e.$mp.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e);
                    }
                });
            }
        }
    } ]), t;
}())(), S = w;

if (console.log("init growingio..."), g.compareVersion(g.sdkVer, "1.9.0") >= 0 && !k.start) {
    var E = require("./gioConfig").default;
    k.init(E.projectId, E.appId ? E.appId : g.getAppId(), E);
}

var O = P.GrowingPage, C = P.GrowingApp, I = P.GrowingComponent, L = P.GioBehavior;

exports.GioApp = C, exports.GioBehavior = L, exports.GioComponent = I, exports.GioPage = O, 
exports.default = function() {
    var e = arguments[0];
    if (e) {
        var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
        if ("init" !== e) return k.proxy(e, t);
        t.length < 2 ? console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);") : k.init(t[0], t[1], t[2]);
    }
}, exports.gioEmitter = S, exports.growingio = k;