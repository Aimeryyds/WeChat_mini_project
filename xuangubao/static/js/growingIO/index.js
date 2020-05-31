var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.growingio = exports.gioEmitter = exports.GioPage = exports.GioComponent = exports.GioBehavior = exports.GioApp = exports.default = void 0;

var t = e(require("../../../@babel/runtime/helpers/typeof")), n = e(require("../../../@babel/runtime/helpers/classCallCheck")), i = e(require("../../../@babel/runtime/helpers/createClass"));

Object.getOwnPropertyDescriptors || (Object.getOwnPropertyDescriptors = function(e) {
    var t = {}, n = !0, i = !1, r = void 0;
    try {
        for (var o, s = Reflect.ownKeys(e)[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
            var a = o.value;
            t[a] = Object.getOwnPropertyDescriptor(e, a);
        }
    } catch (e) {
        i = !0, r = e;
    } finally {
        try {
            n || null == s.return || s.return();
        } finally {
            if (i) throw r;
        }
    }
    return t;
});

var r = function() {
    function e(t) {
        (0, n.default)(this, e), this.growingio = t, this.messageQueue = [], this.uploadingQueue = [], 
        this.uploadTimer = null, this.projectId = this.growingio.projectId, this.appId = this.growingio.appId, 
        this.host = this.growingio.host, this.url = "".concat(this.host, "/projects/").concat(this.projectId, "/apps/").concat(this.appId, "/collect");
    }
    return (0, i.default)(e, [ {
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
                url: "".concat(this.url, "?stm=").concat(Date.now()),
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
    } ]), e;
}(), o = {
    sdkVer: "2.0.0",
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
                0 > o.compareVersion(t.SDKVersion, "2.2.2") || (e = wx.getAccountInfoSync().miniProgram.appId);
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
        return "Weixin ".concat(e);
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
}, s = function() {
    function e() {
        (0, n.default)(this, e), this.queries = {}, this.pvar = {};
    }
    return (0, i.default)(e, [ {
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
            return Object.keys(e).map(function(t) {
                return "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
    }, {
        key: "touchRelatedPvarData",
        value: function(e) {
            var t = "".concat(e.p, "?").concat(e.q);
            this.pvar[t] ? this.pvar[t].push(e) : this.pvar[t] = [ e ];
        }
    } ]), e;
}(), a = {
    tap: [ "tap", "click" ],
    longtap: [ "longtap" ],
    input: [ "input" ],
    blur: [ "change", "blur" ],
    submit: [ "submit" ],
    focus: [ "focus" ]
}, u = /^function[^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*/;

function c(e) {
    return e && e.$attrs ? e.$attrs.mpcomid : "0";
}

var h = function() {
    function e(t) {
        (0, n.default)(this, e), this.vueVM = t;
    }
    return (0, i.default)(e, [ {
        key: "getHandle",
        value: function(e) {
            var t = e.type, n = e.target;
            void 0 === n && (n = {});
            var i = (e.currentTarget || n).dataset;
            void 0 === i && (i = {});
            var r = i.comkey;
            void 0 === r && (r = "");
            var o = i.eventid, s = function(e, t) {
                void 0 === t && (t = []);
                var n = t.slice(1);
                return n.length ? n.reduce(function(e, t) {
                    for (var n = e.$children.length, i = 0; n > i; i++) {
                        var r = e.$children[i];
                        if (c(r) === t) return r;
                    }
                    return e;
                }, e) : e;
            }(this.vueVM, r.split(","));
            if (s) {
                var h = function e(t, n, i) {
                    void 0 === i && (i = []);
                    var r = [];
                    if (!t || !t.tag) return r;
                    var o = t || {}, s = o.data;
                    void 0 === s && (s = {});
                    var a = o.children;
                    void 0 === a && (a = []);
                    var u = o.componentInstance;
                    u ? Object.keys(u.$slots).forEach(function(t) {
                        var o = u.$slots[t];
                        (Array.isArray(o) ? o : [ o ]).forEach(function(t) {
                            r = r.concat(e(t, n, i));
                        });
                    }) : a.forEach(function(t) {
                        r = r.concat(e(t, n, i));
                    });
                    var c = s.attrs, h = s.on;
                    return c && h && c.eventid === n && i.forEach(function(e) {
                        var t = h[e];
                        "function" == typeof t ? r.push(t) : Array.isArray(t) && (r = r.concat(t));
                    }), r;
                }(s._vnode, o, a[t] || [ t ]);
                if (h.length) {
                    var l = h[0];
                    if (l.isProxied) return l.proxiedName;
                    try {
                        var g = ("" + l).replace("\n", "");
                        if (g.match(u)) {
                            var p = u.exec(g);
                            if (p && p.length > 1) return p[1];
                        }
                    } catch (e) {}
                    return l.name;
                }
            }
        }
    } ]), e;
}();

function l() {}

var g = l.prototype, p = exports.EventEmitter;

function f(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
}

function d(e) {
    return function() {
        return this[e].apply(this, arguments);
    };
}

g.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if (e instanceof RegExp) for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]); else t = i[e] || (i[e] = []);
    return t;
}, g.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n;
}, g.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && ((t = {})[e] = n), t || n;
}, g.addListener = function(e, n) {
    if (!function e(n) {
        return "function" == typeof n || n instanceof RegExp || !(!n || "object" != (0, 
        t.default)(n)) && e(n.listener);
    }(n)) throw new TypeError("listener must be a function");
    var i, r = this.getListenersAsObject(e), o = "object" == (0, t.default)(n);
    for (i in r) r.hasOwnProperty(i) && -1 === f(r[i], n) && r[i].push(o ? n : {
        listener: n,
        once: !1
    });
    return this;
}, g.on = d("addListener"), g.addOnceListener = function(e, t) {
    return this.addListener(e, {
        listener: t,
        once: !0
    });
}, g.once = d("addOnceListener"), g.defineEvent = function(e) {
    return this.getListeners(e), this;
}, g.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this;
}, g.removeListener = function(e, t) {
    var n, i, r = this.getListenersAsObject(e);
    for (i in r) r.hasOwnProperty(i) && -1 !== (n = f(r[i], t)) && r[i].splice(n, 1);
    return this;
}, g.off = d("removeListener"), g.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t);
}, g.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t);
}, g.manipulateListeners = function(e, n, i) {
    var r, o, s = e ? this.removeListener : this.addListener, a = e ? this.removeListeners : this.addListeners;
    if ("object" != (0, t.default)(n) || n instanceof RegExp) for (r = i.length; r--; ) s.call(this, n, i[r]); else for (r in n) n.hasOwnProperty(r) && (o = n[r]) && ("function" == typeof o ? s.call(this, r, o) : a.call(this, r, o));
    return this;
}, g.removeEvent = function(e) {
    var n, i = (0, t.default)(e), r = this._getEvents();
    if ("string" === i) delete r[e]; else if (e instanceof RegExp) for (n in r) r.hasOwnProperty(n) && e.test(n) && delete r[n]; else delete this._events;
    return this;
}, g.removeAllListeners = d("removeEvent"), g.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].slice(0), r = 0; n.length > r; r++) !0 === (i = n[r]).once && this.removeListener(e, i.listener), 
    i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
    return this;
}, g.trigger = d("emitEvent"), g.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
}, g.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this;
}, g._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
}, g._getEvents = function() {
    return this._events || (this._events = {});
}, l.noConflict = function() {
    return exports.EventEmitter = p, l;
};

var v = new l(), y = function() {
    function e(t) {
        (0, n.default)(this, e), this.growingio = t, this.weixin = t.weixin, this.currentPage = new s(), 
        this.scene = null, this._sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, 
        this.lastVstArgs = void 0, this.lastCloseTime = null, this.lastScene = void 0, this.keepAlive = t.keepAlive, 
        this.isPauseSession = !1, this._observer = null, this.CLICK_TYPE = {
            tap: "clck",
            longpress: "lngprss",
            longtap: "lngprss"
        };
    }
    return (0, i.default)(e, [ {
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
            return "giou=".concat(this.getVisitorId(), "&giocs1=").concat(this.getUserId(), "&gios=").concat(this.sessionId);
        }
    }, {
        key: "setUserId",
        value: function(e) {
            var t = e + "";
            t && 100 > t.length && (this.cs1 = t, v.emitEvent("setCs1", [ t ]), this.lastPageEvent && this._sendEvent(this.lastPageEvent));
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
            "onShow" == t ? (v.emitEvent("appShow"), this._parseScene(n), !this.lastCloseTime || Date.now() - this.lastCloseTime > this.keepAlive || this.lastScene && this.scene !== this.lastScene ? (this.resetSessionId(), 
            this.sendVisitEvent(n, this.growingio.getLocationType), this.lastVstArgs = n, this.lastPageEvent = void 0) : this.useLastPageTime = !0) : "onHide" == t ? (this.lastScene = this.scene, 
            this.growingio.forceFlush(), this.weixin.syncStorage(), this.isPauseSession || (this.lastCloseTime = Date.now(), 
            this.sendVisitCloseEvent())) : "onError" == t && this.sendErrorEvent(n));
        }
    }, {
        key: "pageListener",
        value: function(e, t, n) {
            if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isPauseSession ? this.isPauseSession = !1 : (this.currentPage.touch(e), 
            this.sendPage(e)); else if ("onLoad" === t) o.isEmpty(i = n[0]) || this.currentPage.addQuery(e, i); else if ("onHide" === t) this._observer && this._observer.disconnect(); else if ("onUnload" === t) this.currentPage.pvar["".concat(this.currentPage.path, "?").concat(this.currentPage.query)] = void 0; else if ("onShareAppMessage" === t) {
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
                    var n = new h(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
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
        key: "track",
        value: function(e, n) {
            if (null != e && 0 !== e.length) {
                var i = {
                    t: "cstm",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    n: e
                };
                null !== n && "object" == (0, t.default)(n) && (i.var = n), this._sendEvent(i);
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
                av: o.sdkVer,
                db: i.brand,
                dm: i.model.replace(/<.*>/, ""),
                sh: o.getScreenHeight(i),
                sw: o.getScreenWidth(i),
                os: o.getOS(i.platform),
                osv: o.getOSV(i.version),
                l: i.language
            };
            if (this.growingio.appVer && (r.cv = this.growingio.appVer + ""), e.length > 0) {
                var s = e[0];
                r.p = s.path, o.isEmpty(s.query) || (r.q = this.currentPage._getQuery(s.query)), 
                r.ch = "scn:".concat(this.scene), s.referrerInfo && s.referrerInfo.appId && (r.rf = s.referrerInfo.appId);
            }
            this.weixin.getNetworkType().then(function(e) {
                e && (r.nt = e.networkType, t.growingio.getLocation ? t.weixin.requestLocation(n).then(function() {
                    null != t.weixin.location && (r.lat = t.weixin.location.latitude, r.lng = t.weixin.location.longitude), 
                    t._sendEvent(r);
                }) : t._sendEvent(r));
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
            this.useLastPageTime = !1)) : n.rp = this.scene ? "scn:".concat(this.scene) : null, 
            e.data && e.data.pvar && (n.var = e.data.pvar);
            var i = this.weixin.getPageTitle(e);
            i && i.length > 0 && (n.tl = i), this._sendEvent(n), this.lastPageEvent = n;
            var r = this.currentPage.pvar["".concat(this.currentPage.path, "?").concat(this.currentPage.query)];
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
                    path: n ? n.path : void 0
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
                x: "".concat(i.id, "#").concat(t)
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
                x: "".concat(e.currentTarget.id, "#").concat(t)
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
                x: "".concat(i.id, "#").concat(t)
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
            e.u = this.weixin.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.appId, 
            e.b = "MinP", null !== this.cs1 && (e.cs1 = this.cs1), this.growingio.upload(e);
        }
    }, {
        key: "_parseScene",
        value: function(e) {
            if (e.length > 0) {
                var t = e[0];
                t.scene && (this.scene = t.scene);
            }
        }
    }, {
        key: "sessionId",
        get: function() {
            return null === this._sessionId && (this._sessionId = o.guid()), this._sessionId;
        }
    } ]), e;
}(), m = function() {
    function e(t) {
        (0, n.default)(this, e), this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
        this._uid && 36 !== this._uid.length && (t.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
    }
    return (0, i.default)(e, [ {
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
                            return t.pathPath == e.route || t.pagePath == "".concat(e.route, ".html");
                        });
                        n && n.text && (t = n.text);
                    }
                    if (0 == t.length) {
                        var i = __wxConfig.page[e.route] || __wxConfig.page["".concat(e.route, ".html")];
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
            return this._uid || (this.uid = o.guid()), this._uid;
        }
    } ]), e;
}(), w = {
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
            if (i && i.currentTarget && -1 != w.actionEventTypes.indexOf(i.type)) try {
                w.observer.actionListener(i, e);
            } catch (e) {
                console.error(e);
            }
            if (this._growing_app_ && "onShow" !== e ? n = t.apply(this, arguments) : this._growing_page_ && -1 === [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e) && (n = t.apply(this, arguments)), 
            this._growing_app_ && -1 !== w.appHandlers.indexOf(e)) {
                try {
                    w.defaultAppCallbacks[e].apply(this, arguments);
                } catch (e) {
                    console.error(e);
                }
                "onShow" === e && (n = t.apply(this, arguments));
            }
            if (this._growing_page_ && -1 !== w.pageHandlers.indexOf(e)) {
                var r = Array.prototype.slice.call(arguments);
                n && r.push(n);
                try {
                    w.defaultPageCallbacks[e].apply(this, r);
                } catch (e) {
                    console.error(e);
                }
                if (-1 !== [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e)) n = t.apply(this, arguments); else {
                    var o = w.observer.growingio;
                    o && o.followShare && n && n.path && (n.path = -1 === n.path.indexOf("?") ? n.path + "?suid=" + o.weixin.uid : n.path + "&suid=" + o.weixin.uid);
                }
            }
            return n;
        };
    },
    hookComponent: function(e, t) {
        return function() {
            var n = arguments ? arguments[0] : void 0;
            if (n && n.currentTarget && -1 != w.actionEventTypes.indexOf(n.type)) try {
                w.observer.actionListener(n, e);
            } catch (e) {
                console.error(e);
            }
            return t.apply(this, arguments);
        };
    },
    instrument: function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
        return e._growing_app_ && w.appHandlers.map(function(t) {
            e[t] || (e[t] = w.defaultAppCallbacks[t]);
        }), e._growing_page_ && w.pageHandlers.map(function(t) {
            e[t] || "onShareAppMessage" === t || (e[t] = w.defaultPageCallbacks[t]);
        }), e;
    },
    instrumentTaroPageComponent: function(e) {
        if (e.methods) {
            var t = e.methods, n = function(n) {
                if ("function" == typeof t[n] && -1 != w.pageHandlers.indexOf(n)) {
                    var i = t[n];
                    e.methods[n] = function() {
                        return w.observer.pageListener(this, n, arguments), i.apply(this, arguments);
                    };
                }
            };
            for (var i in t) n(i);
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
        return e._growing_page_ = !0, w.originalPage(w.instrument(e));
    },
    GrowingComponent: function(e) {
        return w.originalComponent(w.instrumentComponent(e));
    },
    GrowingBehavior: function(e) {
        return w.originalBehavior(w.instrumentComponent(e));
    },
    GrowingApp: function(e) {
        return e._growing_app_ = !0, w.originalApp(w.instrument(e));
    },
    initInstrument: function(e, t) {
        w.observer = e, w.pageHandlers.forEach(function(e) {
            w.defaultPageCallbacks[e] = function() {
                this.__route__ && w.observer.pageListener(this, e, arguments);
            };
        }), w.appHandlers.forEach(function(e) {
            w.defaultAppCallbacks[e] = function() {
                w.observer.appListener(this, e, arguments);
            };
        }), t ? (global.GioPage = w.GrowingPage, global.GioApp = w.GrowingApp, global.GioComponent = w.GrowingComponent, 
        global.GioBehavior = w.GrowingBehavior, global.trackApp = function() {
            var e = arguments[0];
            return e._growing_app_ = !0, w.instrument(e);
        }, global.trackPage = function() {
            var e = arguments[0];
            return e._growing_page_ = !0, w.instrument(e);
        }, global.trackComponent = function() {
            return w.instrument(arguments[0]);
        }, global.trackBehavior = function() {
            return w.instrument(arguments[0]);
        }) : (Page = function() {
            return w.GrowingPage(arguments[0]);
        }, App = function() {
            return w.GrowingApp(arguments[0]);
        }, Component = function() {
            return w.GrowingComponent(arguments[0]);
        }, Behavior = function() {
            return w.GrowingBehavior(arguments[0]);
        });
    }
}, _ = new (function() {
    function e() {
        (0, n.default)(this, e), this.uploadingMessages = [], this.start = !1;
    }
    return (0, i.default)(e, [ {
        key: "init",
        value: function(e, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.start || (this.start = !0, this.projectId = e, "string" == typeof n ? this.appId = n : (i = n, 
            this.appId = o.getAppId()), this.appVer = i.version, this.debug = i.debug || !1, 
            this.forceLogin = i.forceLogin || !1, this.followShare = i.followShare || !1, this.usePlugin = i.usePlugin || !1, 
            this.getLocation = ("object" == (0, t.default)(i.getLocation) ? i.getLocation.autoGet : i.getLocation) || !1, 
            this.getLocationType = "object" == (0, t.default)(i.getLocation) && i.getLocation.type || "wgs84", 
            this.keepAlive = +i.keepAlive || 3e5, this.vue = !!i.vue, this.taro = !!i.taro, 
            this.dataCollect = !(i.stopTrack && !i.dataCollect), this.weixin = new m(this), 
            this.esid = this.weixin.esid, this.host = "https://wxapi.growingio.com", i.host && i.host.indexOf("http") >= 0 && (this.host = "https://" + i.host.slice(i.host.indexOf("://") + 3)), 
            this.uploader = new r(this), this.observer = new y(this), this.start = !0, i.vue && (this.vueRootVMs = {}, 
            this._proxyVue(i.vue)), i.taro && (this.taroRootVMs = {}, this._proxyTaro(i.taro)), 
            i.cml && this._proxyCml(i.cml), this._start());
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
                        t || null == o.return || o.return();
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
            w.initInstrument(this.observer, this.usePlugin);
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
            v.emitEvent("upload", [ e ]), this.uploader.upload(e);
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
                return i && w.instrumentTaroPageComponent(c), c;
            };
        }
    }, {
        key: "_proxyCml",
        value: function(e) {
            var t = e.createApp;
            e.createApp = function(e) {
                var n = t(e);
                return w.GrowingApp(n.options), n;
            };
        }
    }, {
        key: "_proxyVue",
        value: function(e) {
            if (void 0 !== e.mixin) {
                var t = this;
                e.mixin({
                    created: function() {
                        if (this.$options.methods) for (var e = Object.keys(this.$options.methods), t = 0, n = Object.keys(this); t < n.length; t++) {
                            var i = n[t];
                            0 > e.indexOf(i) || "function" != typeof this[i] || (Object.defineProperty(this[i], "proxiedName", {
                                value: i
                            }), Object.defineProperty(this[i], "isProxied", {
                                value: !0
                            }));
                        }
                    },
                    beforeMount: function() {
                        var e = this.$root;
                        e.$mp && "page" === e.$mp.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e);
                    }
                });
            }
        }
    } ]), e;
}())(), x = v;

if (exports.gioEmitter = x, exports.growingio = _, console.log("init growingio..."), 
o.compareVersion(o.sdkVer, "1.9.0") >= 0 && !_.start) {
    var P = require("./gioConfig").default;
    _.init(P.projectId, P.appId ? P.appId : o.getAppId(), P);
}

var k = w.GrowingPage, b = w.GrowingApp, E = w.GrowingComponent, C = w.GioBehavior;

exports.GioBehavior = C, exports.GioComponent = E, exports.GioApp = b, exports.GioPage = k;

var S = function() {
    var e = arguments[0];
    if (e) {
        var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
        if ("init" !== e) return _.proxy(e, t);
        t.length < 2 ? console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);") : _.init(t[0], t[1], t[2]);
    }
};

exports.default = S;