function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function o(e) {
    return e && e.$attrs ? e.$attrs.mpcomid : "0";
}

function r(e, t, n) {
    return !(!e || !t || t !== e && 0 !== t.indexOf(e + n));
}

function a(e, t, n) {
    void 0 === t && (t = []);
    var i = t.slice(1);
    if (!i.length) return e;
    var a = i.join(n), s = "";
    return i.reduce(function(e, t) {
        for (var i = e.$children.length, u = 0; i > u; u++) {
            var l = e.$children[u], g = o(l);
            if (s && (g = s + n + g), r(g, a, n)) return s = g, e = l;
        }
        return e;
    }, e);
}

function s(e, t, n) {
    void 0 === n && (n = []);
    var i = [];
    if (!e || !e.tag) return i;
    var o = e || {}, r = o.data;
    void 0 === r && (r = {});
    var a = o.children;
    void 0 === a && (a = []);
    var u = o.componentInstance;
    u ? Object.keys(u.$slots).forEach(function(e) {
        var o = u.$slots[e];
        (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
            i = i.concat(s(e, t, n));
        });
    }) : a.forEach(function(e) {
        i = i.concat(s(e, t, n));
    });
    var l = r.attrs, g = r.on;
    return l && g && l.eventid === t && n.forEach(function(e) {
        var t = g[e];
        "function" == typeof t ? i.push(t) : Array.isArray(t) && (i = i.concat(t));
    }), i;
}

function u(e, t) {
    return e === t || "regionchange" === t && ("begin" === e || "end" === e);
}

function l() {}

function g(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
}

function c(e) {
    return function() {
        return this[e].apply(this, arguments);
    };
}

function h(e) {
    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : y(e))) && h(e.listener);
}

function f(e) {
    return null !== e && "[object Object]" === Object.prototype.toString.call(e) && Object.keys(e).length > 0;
}

function p(e, t) {
    if ((void 0 === e ? "undefined" : y(e)) != (void 0 === t ? "undefined" : y(t))) return !1;
    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e || "function" == typeof e || void 0 == e || void 0 == t) return Object.is(e, t);
    if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every(function(e, n) {
        return p(e, t[n]);
    });
    if ("[object Object]" === Object.prototype.toString.call(e) && "[object Object]" === Object.prototype.toString.call(t)) {
        var n = Object.keys(e), i = Object.keys(t);
        return !(!n.every(function(n) {
            return t.hasOwnProperty(n) && p(e[n], t[n]);
        }) || !i.every(function(n) {
            return e.hasOwnProperty(n) && p(t[n], e[n]);
        }));
    }
    return !1;
}

var v = function() {
    function e(e, t) {
        var n = [], i = !0, o = !1, r = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), 
            !t || n.length !== t); i = !0) ;
        } catch (e) {
            o = !0, r = e;
        } finally {
            try {
                !i && s.return && s.return();
            } finally {
                if (o) throw r;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), d = function() {
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
}(), y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var m = {
    devVer: 1,
    guid: function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16);
        });
    },
    getScreenHeight: function(e) {
        return e.pixelRatio ? Math.round(e.screenHeight * e.pixelRatio) : e.screenHeight;
    },
    getScreenWidth: function(e) {
        return e.pixelRatio ? Math.round(e.screenWidth * e.pixelRatio) : e.screenWidth;
    },
    getOS: function(e) {
        if (e) {
            var t = e.toLowerCase();
            return -1 != t.indexOf("android") ? gioGlobal.platformConfig.name + "-Android" : -1 != t.indexOf("ios") ? gioGlobal.platformConfig.name + "-iOS" : e;
        }
    },
    getOSV: function(e) {
        return gioGlobal.platformConfig.name + " " + e;
    },
    isEmpty: function(e) {
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = Math.max(e.length, t.length); n > e.length; ) e.push("0");
        for (;n > t.length; ) t.push("0");
        for (var i = 0; n > i; i++) {
            var o = parseInt(e[i]), r = parseInt(t[i]);
            if (o > r) return 1;
            if (r > o) return -1;
        }
        return 0;
    }
}, w = function(e, t) {
    if (!e) return e;
    for (var n = t.split("."), i = e[n.shift()], o = 0, r = n.length; r > o; o++) {
        var a = n.shift();
        if (!i) return i;
        i = i[a];
    }
    return i;
}, b = function(e) {
    var t = {
        eventId: void 0,
        properties: {}
    };
    try {
        if (e.hasOwnProperty("gioTrack") && "object" == y(e.gioTrack)) return t.eventId = e.gioTrack.name, 
        t.properties = e.gioTrack.properties, t;
        if (!e.gioImpTrack) return t;
        t.eventId = e.gioImpTrack;
        var n = /^gioTrack(.+)/, i = /^\w+$/;
        for (var o in e) {
            var r = void 0, a = o.match(n);
            if (a && ("track" === (r = a[1].toLowerCase()) ? t.eventId = e[o] : t.properties[r] = e[o]), 
            !i.test(t.eventId) || 10 > parseInt(t.eventId[0])) throw t.eventId = null, Error();
        }
    } catch (e) {
        console.warn("半打点IMP格式不正确, 事件名只能包含数字，字母和下划线，且不以数字开头, 请参考文档");
    }
    return t;
}, k = function(e) {
    return e && "string" == typeof e && e.constructor === String;
};

if (!Object.hasOwnProperty("getOwnPropertyDescriptors")) {
    var _ = void 0;
    _ = "object" == ("undefined" == typeof Reflect ? "undefined" : y(Reflect)) && "function" == typeof Reflect.ownKeys ? Reflect.ownKeys : "function" == typeof Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : Object.getOwnPropertyNames, Object.defineProperty(Object, "getOwnPropertyDescriptors", {
        configurable: !0,
        writable: !0,
        value: function(e) {
            return _(e).reduce(function(t, n) {
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

var P = function(e) {
    var t = C.observer.growingio;
    t && t.vdsConfig.followShare && e && e.path && (e.path = -1 === e.path.indexOf("?") ? e.path + "?suid=" + t.info.uid : e.path + "&suid=" + t.info.uid);
}, C = {
    defaultPageCallbacks: {},
    defaultAppCallbacks: {},
    appHandlers: null,
    pageHandlers: null,
    actionEventTypes: null,
    originalPage: null,
    originalApp: null,
    originalComponent: null,
    originalBehavior: null,
    observer: null,
    hook: function(e, t) {
        return function() {
            var n = void 0, i = arguments ? arguments[0] : void 0;
            if (i && (i.currentTarget || i.target) && -1 != C.actionEventTypes.indexOf(i.type)) try {
                C.observer.actionListener(i, e);
            } catch (e) {
                console.error(e);
            }
            var o = gioGlobal.platformConfig.lisiteners.app, r = gioGlobal.platformConfig.lisiteners.page;
            if (this._growing_app_ && e !== o.appShow ? n = t.apply(this, arguments) : this._growing_page_ && -1 === [ r.pageShow, r.pageClose, r.pageLoad, r.pageHide, r.tabTap ].indexOf(e) ? n = t.apply(this, arguments) : this._growing_app_ || this._growing_page_ || (n = t.apply(this, arguments)), 
            this._growing_app_ && -1 !== C.appHandlers.indexOf(e)) {
                try {
                    C.defaultAppCallbacks[e].apply(this, arguments);
                } catch (e) {
                    console.error(e);
                }
                e === o.appShow && (n = t.apply(this, arguments));
            }
            if (this._growing_page_ && -1 !== C.pageHandlers.indexOf(e)) {
                var a = Array.prototype.slice.call(arguments);
                n && a.push(n);
                try {
                    C.defaultPageCallbacks[e].apply(this, a);
                } catch (e) {
                    console.error(e);
                }
                -1 !== [ r.pageShow, r.pageClose, r.pageLoad, r.pageHide, r.tabTap ].indexOf(e) ? n = t.apply(this, arguments) : P(n);
            }
            return n;
        };
    },
    hookComponent: function(e, t) {
        return function() {
            var n = arguments ? arguments[0] : void 0;
            if (n && (n.currentTarget || n.target) && -1 != C.actionEventTypes.indexOf(n.type)) try {
                C.observer.actionListener(n, e);
            } catch (e) {
                console.error(e);
            }
            return t.apply(this, arguments);
        };
    },
    instrument: function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
        return e._growing_app_ && C.appHandlers.map(function(t) {
            e[t] || (e[t] = C.defaultAppCallbacks[t]);
        }), e._growing_page_ && C.pageHandlers.map(function(t) {
            e[t] || t === gioGlobal.platformConfig.lisiteners.page.shareApp || (e[t] = C.defaultPageCallbacks[t]);
        }), e;
    },
    instrumentPageComponent: function(e) {
        if (e) return C.pageHandlers.map(function(t) {
            if ("function" == typeof e[t]) {
                var n = e[t];
                e[t] = function() {
                    var e = n.apply(this, arguments), i = Array.prototype.slice.call(arguments);
                    return e && i.push(e), C.observer.pageListener(this, t, i), t === gioGlobal.platformConfig.lisiteners.page.shareApp && P(e), 
                    e;
                };
            } else t !== gioGlobal.platformConfig.lisiteners.page.shareApp && (e[t] = function() {
                C.observer.pageListener(this, t, arguments);
            });
        }), e;
    },
    instrumentComponent: function(e) {
        if (e.methods) {
            var t = e.methods;
            for (var n in t) "function" == typeof t[n] && (e.methods[n] = this.hookComponent(n, t[n]));
        }
        return e;
    },
    GrowingPage: function(e) {
        return e._growing_page_ = !0, C.originalPage(C.instrument(e));
    },
    GrowingComponent: function(e) {
        return C.originalComponent(C.instrumentComponent(e));
    },
    GrowingBehavior: function(e) {
        return C.originalBehavior(C.instrumentComponent(e));
    },
    GrowingApp: function(e) {
        return e._growing_app_ = !0, C.originalApp(C.instrument(e));
    },
    initPlatformInfo: function(e) {
        C.appHandlers = e.appHandlers, C.pageHandlers = e.pageHandlers, C.actionEventTypes = e.actionEventTypes, 
        C.originalApp = e.originalApp, C.originalPage = e.originalPage, C.originalComponent = e.originalComponent, 
        C.originalBehavior = e.originalBehavior;
    },
    initInstrument: function(e) {
        if (C.initPlatformInfo(gioGlobal.platformConfig), C.observer = e, C.pageHandlers.forEach(function(e) {
            C.defaultPageCallbacks[e] = function() {
                C.observer.pageListener(this, e, arguments);
            };
        }), C.appHandlers.forEach(function(e) {
            C.defaultAppCallbacks[e] = function() {
                C.observer.appListener(this, e, arguments);
            };
        }), gioGlobal.platformConfig.canHook) {
            var t = gioGlobal.platformConfig.hooks;
            t.App && !gioGlobal.growingAppInited && (App = function() {
                return C.GrowingApp(arguments[0]);
            }, gioGlobal.growingAppInited = !0), t.Page && !gioGlobal.growingPageInited && (Page = function() {
                return C.GrowingPage(arguments[0]);
            }, gioGlobal.growingPageInited = !0), t.Component && !gioGlobal.growingComponentInited && (Component = function() {
                return C.GrowingComponent(arguments[0]);
            }, gioGlobal.growingComponentInited = !0), t.Behavior && !gioGlobal.growingBehaviorInited && (Behavior = function() {
                return C.GrowingBehavior(arguments[0]);
            }, gioGlobal.growingBehaviorInited = !0);
        }
        gioGlobal.GioPage = C.GrowingPage, gioGlobal.GioApp = C.GrowingApp, gioGlobal.GioComponent = C.GrowingComponent, 
        gioGlobal.GioBehavior = C.GrowingBehavior, gioGlobal.trackApp = function() {
            var e = arguments[0];
            return e._growing_app_ = !0, C.instrument(e);
        }, gioGlobal.trackPage = function() {
            var e = arguments[0];
            return e._growing_page_ = !0, C.instrument(e);
        }, gioGlobal.trackComponent = function() {
            return C.instrument(arguments[0]);
        }, gioGlobal.trackBehavior = function() {
            return C.instrument(arguments[0]);
        };
    }
}, x = function() {
    function e() {
        i(this, e), this.queries = {}, this.pvar = {};
    }
    return d(e, [ {
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
    } ]), e;
}(), S = {
    tap: [ "tap", "click" ],
    longtap: [ "longtap" ],
    input: [ "input" ],
    blur: [ "change", "blur" ],
    submit: [ "submit" ],
    focus: [ "focus" ]
}, E = /^function[^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*/, I = function() {
    function e(t) {
        i(this, e), this.vueVM = t;
    }
    return d(e, [ {
        key: "getHandle",
        value: function(e) {
            var t = e.type, n = e.target;
            void 0 === n && (n = {});
            var i = (e.currentTarget || n).dataset;
            void 0 === i && (i = {});
            var o = i.comkey;
            void 0 === o && (o = "");
            var r = i.eventid, u = -1 !== o.indexOf("_") ? "_" : ",", l = a(this.vueVM, o.split(u), u);
            if (l) {
                var g = s(l._vnode, r, S[t] || [ t ]);
                if (g.length) {
                    var c = g[0];
                    if (c.isProxied) return c.proxiedName;
                    try {
                        var h = ("" + c).replace("\n", "");
                        if (h.match(E)) {
                            var f = E.exec(h);
                            if (f && f.length > 1) return f[1];
                        }
                    } catch (e) {}
                    return c.name;
                }
            }
        }
    }, {
        key: "handleEvent",
        value: function(e) {
            var t = e.type, n = void 0, i = (e.currentTarget || e.target).dataset;
            return (i.eventOpts || i["event-opts"]).forEach(function(e) {
                var i = e[0], o = e[1];
                i = "~" === (i = "^" === i.charAt(0) ? i.slice(1) : i).charAt(0) ? i.slice(1) : i, 
                o && u(t, i) && o.forEach(function(e) {
                    n = e[0];
                });
            }), n;
        }
    } ]), e;
}(), O = l.prototype, A = exports.EventEmitter;

O.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if (e instanceof RegExp) for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]); else t = i[e] || (i[e] = []);
    return t;
}, O.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n;
}, O.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && ((t = {})[e] = n), t || n;
}, O.addListener = function(e, t) {
    if (!h(t)) throw new TypeError("listener must be a function");
    var n, i = this.getListenersAsObject(e), o = "object" == (void 0 === t ? "undefined" : y(t));
    for (n in i) i.hasOwnProperty(n) && -1 === g(i[n], t) && i[n].push(o ? t : {
        listener: t,
        once: !1
    });
    return this;
}, O.on = c("addListener"), O.addOnceListener = function(e, t) {
    return this.addListener(e, {
        listener: t,
        once: !0
    });
}, O.once = c("addOnceListener"), O.defineEvent = function(e) {
    return this.getListeners(e), this;
}, O.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this;
}, O.removeListener = function(e, t) {
    var n, i, o = this.getListenersAsObject(e);
    for (i in o) o.hasOwnProperty(i) && -1 !== (n = g(o[i], t)) && o[i].splice(n, 1);
    return this;
}, O.off = c("removeListener"), O.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t);
}, O.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t);
}, O.manipulateListeners = function(e, t, n) {
    var i, o, r = e ? this.removeListener : this.addListener, a = e ? this.removeListeners : this.addListeners;
    if ("object" != (void 0 === t ? "undefined" : y(t)) || t instanceof RegExp) for (i = n.length; i--; ) r.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
    return this;
}, O.removeEvent = function(e) {
    var t, n = void 0 === e ? "undefined" : y(e), i = this._getEvents();
    if ("string" === n) delete i[e]; else if (e instanceof RegExp) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
    return this;
}, O.removeAllListeners = c("removeEvent"), O.emitEvent = function(e, t) {
    var n, i, o, r, a = this.getListenersAsObject(e);
    for (r in a) if (a.hasOwnProperty(r)) for (n = a[r].slice(0), o = 0; n.length > o; o++) !0 === (i = n[o]).once && this.removeListener(e, i.listener), 
    i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
    return this;
}, O.trigger = c("emitEvent"), O.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
}, O.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this;
}, O._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
}, O._getEvents = function() {
    return this._events || (this._events = {});
}, l.noConflict = function() {
    return exports.EventEmitter = A, l;
};

var G = new l(), T = function() {
    function e(t) {
        i(this, e), this.growingio = t, this.esid = 0, this.info = t.info;
    }
    return d(e, [ {
        key: "setUserAttributes",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "setUserId",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "clearUserId",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "sendVisitEvent",
        value: function(e, t) {
            throw Error("this a interface function");
        }
    }, {
        key: "track",
        value: function(e, t) {
            throw Error("this a interface function");
        }
    }, {
        key: "_sendEvent",
        value: function(e) {
            throw Error("this a interface function");
        }
    } ]), e;
}(), j = {
    tap: "clck",
    longpress: "lngprss",
    longtap: "lngprss"
}, L = function(e) {
    function o(e) {
        var n;
        return i(this, o), n = t(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e)), 
        n.growingio = e, n.info = e.info, n.currentPage = new x(), n.scene = null, n._sessionId = null, 
        n.cs1 = null, n.lastPageEvent = null, n.lastVstArgs = void 0, n.lastCloseTime = null, 
        n.lastScene = void 0, n.keepAlive = e.vdsConfig.keepAlive, n.isPauseSession = !1, 
        n.isGettingUid = !1, n.esid = 0 === n.info.esid ? 1 : n.info.esid, n.uploadingMessages = [], 
        n;
    }
    return n(o, T), d(o, [ {
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
            return this.info.uid;
        }
    }, {
        key: "getUserId",
        value: function() {
            return this.cs1;
        }
    }, {
        key: "getGioInfo",
        value: function() {
            return "giou=" + this.getVisitorId() + "&giocs1=" + this.getUserId() + "&gios=" + this.sessionId + "&gioprojectid=" + this.growingio.vdsConfig.projectId + "&gioappid=" + this.growingio.vdsConfig.appId + "&gioplatform=" + gioGlobal.platformConfig.platform;
        }
    }, {
        key: "setUserId",
        value: function(e) {
            var t = e + "";
            t && 100 > t.length && (this.cs1 = t, G.emitEvent("setCs1", [ t ]), this.lastPageEvent && this._sendEvent(this.lastPageEvent));
        }
    }, {
        key: "clearUserId",
        value: function() {
            this.cs1 = null, G.emitEvent("clearCs1");
        }
    }, {
        key: "appListener",
        value: function(e, t, n) {
            var i = gioGlobal.platformConfig.lisiteners.app;
            this.isPauseSession || (this.growingio.vdsConfig.debug && console.log("App.", t, Date.now()), 
            t == i.appShow ? (G.emitEvent("appShow"), this._parseScene(n), !this.lastCloseTime || Date.now() - this.lastCloseTime > this.keepAlive || this.lastScene && this.scene !== this.lastScene ? (this.resetSessionId(), 
            this.sendVisitEvent(n, this.growingio.vdsConfig.getLocation.type), this.lastVstArgs = n, 
            this.useLastPageTime = !1, this.lastPageEvent = void 0) : this.lastPageEvent && (this.useLastPageTime = !0)) : t == i.appClose ? (this.lastScene = this.scene, 
            this.growingio.forceFlush(), this.info.syncStorage(), this.isPauseSession || (this.lastCloseTime = Date.now(), 
            this.sendVisitCloseEvent())) : t == i.appError && this.sendErrorEvent(n));
        }
    }, {
        key: "pageListener",
        value: function(e, t, n) {
            var i = gioGlobal.platformConfig.lisiteners.page;
            if (this.growingio.vdsConfig.wepy && (e.route = e.$is), e.route || (e.route = this.info.getPagePath(e)), 
            this.growingio.vdsConfig.debug && console.log("Page.", e.route, "#", t, Date.now()), 
            t === i.pageShow) {
                var o = w(e, "$page.query");
                m.isEmpty(o) || "quickApp" !== gioGlobal.gio__platform || this.currentPage.addQuery(e, o), 
                this.isPauseSession ? this.isPauseSession = !1 : (this.currentPage.touch(e), this.useLastPageTime && (this.currentPage.time = this.lastPageEvent.tm, 
                this.useLastPageTime = !1), this.sendPage(e));
            } else if (t === i.pageLoad) {
                var r = n[0];
                m.isEmpty(r) || "quickApp" === gioGlobal.gio__platform || this.currentPage.addQuery(e, r);
            } else if (t === i.pageHide) this.growingio._observer && this.growingio._observer.disconnect(); else if (t === i.pageClose) this.currentPage.pvar[this.currentPage.path + "?" + this.currentPage.query] = void 0; else if (t === i.shareApp) {
                var a = null, s = null;
                2 > n.length ? 1 === n.length && (n[0].from ? a = n[0] : n[0].title && (s = n[0])) : (a = n[0], 
                s = n[1]), this.pauseSession(), this.sendPageShare(e, a, s);
            } else "onTabItemTap" === t && this.sendTabClick(n[0]);
        }
    }, {
        key: "actionListener",
        value: function(e, t) {
            if (!w(e, "currentTarget.dataset.growingIgnore") && !w(e, "target.dataset.growingIgnore")) {
                var n = gioGlobal.platformConfig.lisiteners.actions;
                if ("_cmlEventProxy" !== t) {
                    if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                        var i = new I(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                        i && (t = i);
                    }
                    if ("__e" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                        var o = new I(this.growingio.vueRootVMs[this.currentPage.path]).handleEvent(e);
                        o && (t = o);
                    }
                    if ("_proxy" === t && this.growingio.wepyRootVMs) {
                        var r = e.currentTarget.dataset.wpyEvt, a = e.type;
                        w(this, "growingio.wepyRootVMs." + r + "." + a) && (t = this.growingio.wepyRootVMs[r][a]);
                    }
                    w(this, "growingio.taroRootVMs." + t) && (t = this.growingio.taroRootVMs[t]), this.growingio.vdsConfig.debug && console.log("Click on ", t, Date.now()), 
                    -1 !== n.click.indexOf(e.type) ? (this.sendClick(e, t), "getuserinfo" === e.type && w(e, "detail.userInfo") && this.setVisitor(e.detail.userInfo)) : -1 !== n.change.indexOf(e.type) ? this.sendChange(e, t) : -1 !== n.submit.indexOf(e.type) && this.sendSubmit(e, t);
                }
            }
        }
    }, {
        key: "sendVideoCstm",
        value: function(e) {
            this.track("video-" + e.type, e.var);
        }
    }, {
        key: "track",
        value: function(e, t) {
            if ("string" != typeof e || null === e || void 0 === e || 0 === e.length || !e.match(/^\w+$/) || 10 > parseInt(e[0])) console.warn("埋点格式不正确, 事件名只能包含数字，字母和下划线，且不以数字开头, 请参考文档"); else {
                var n = {
                    t: "cstm",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    n: e
                };
                f(t) && (n.var = t), this._sendEvent(n);
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
            f(e) && this._sendEvent({
                t: "vstr",
                var: e
            });
        }
    }, {
        key: "setUser",
        value: function(e) {
            this.cs1 && f(e) && this._sendEvent({
                t: "ppl",
                var: e
            });
        }
    }, {
        key: "setPage",
        value: function(e) {
            if (f(e)) {
                var t = {
                    t: "pvar",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    var: e
                };
                this.currentPage.touchRelatedPvarData(t), this._sendEvent(t);
            }
        }
    }, {
        key: "setEvar",
        value: function(e) {
            f(e) && this._sendEvent({
                t: "evar",
                var: e
            });
        }
    }, {
        key: "getLocation",
        value: function(e) {
            this.growingio.vdsConfig.getLocation.autoGet = !0, this.sendVisitEvent(this.lastVstArgs, e);
        }
    }, {
        key: "sendVisitEvent",
        value: function(e, t) {
            var n = this;
            this.info.getSystemInfo().then(function(i) {
                var o = i || {}, r = {
                    t: "vst",
                    tm: Date.now(),
                    av: n.info.sdkVer,
                    db: o.brand,
                    dm: o.model && o.model.replace(/<.*>/, ""),
                    sh: m.getScreenHeight(o),
                    sw: m.getScreenWidth(o),
                    os: m.getOS(o.platform),
                    osv: m.getOSV(o.version),
                    l: o.language
                };
                if (n.growingio.vdsConfig.appVer && (r.cv = n.growingio.vdsConfig.appVer + ""), 
                e.length > 0) {
                    var a = e[0];
                    r.p = a.path || n.info.getPagePath(), m.isEmpty(a.query) || (r.q = n.currentPage._getQuery(a.query)), 
                    r.ch = "scn:" + n.info.scnPrefix + n.scene, "quickapp" === n.info.platform ? r.rf = n.info.appSource.packageName : a.referrerInfo && a.referrerInfo.appId && w(a, "referrerInfo.appId") && (r.rf = a.referrerInfo.appId), 
                    n.info.getNetworkType().then(function(e) {
                        if (e && (r.nt = e.networkType, n._sendEvent(r), n.growingio.vdsConfig.getLocation.autoGet)) {
                            var i = JSON.parse(JSON.stringify(r));
                            t && -1 !== [ "wgs84", "gcj02", 0, 1, 2 ].indexOf(t) || (t = "my" === gioGlobal.gio__platform ? 0 : "wgs84"), 
                            n.info.getLocation(t).then(function(e) {
                                e && (i.lat = e.latitude, i.lng = e.longitude, n._sendEvent(i));
                            });
                        }
                    });
                }
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
                var t = e[0];
                if ("string" != typeof t) return;
                var n = void 0, i = t.split("\n");
                if (i && i.length > 1) {
                    var o = i[1].split(";");
                    if (o && o.length > 1) {
                        var r = o[1].match(/at ([^ ]+) page (.*) function/);
                        n = {
                            key: i[0],
                            error: o[0]
                        }, r && r.length > 2 && (n.page = r[1], n.function = r[2]);
                    }
                } else n = {
                    error: i && i[0]
                };
                this._sendEvent({
                    t: "cstm",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    n: "onError",
                    var: n
                });
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
            n.rp = this.lastPageEvent ? this.lastPageEvent.p : this.scene ? "scn:" + this.info.scnPrefix + this.scene : null;
            var i = this.info.getPageTitle(e);
            i && i.length > 0 && (n.tl = i), this._sendEvent(n), this.lastPageEvent = n;
            var o = this.currentPage.pvar[this.currentPage.path + "?" + this.currentPage.query];
            o && o.length > 0 && o.map(function(e) {
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
                t: j[e.type] || "clck",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            }, i = e.currentTarget || e.target, o = i.id;
            (!o || "swan" === gioGlobal.gio__platform && /^_[0-9a-f]+/.test(o)) && (o = "");
            var r = {
                x: o + "#" + t
            };
            i.dataset.title && (r.v = i.dataset.title), i.dataset.src && (r.h = i.dataset.src), 
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
            }, i = (e.currentTarget || e.target).id;
            (!i || "swan" === gioGlobal.gio__platform && /^_[0-9a-f]+/.test(i)) && (i = ""), 
            n.e = [ {
                x: i + "#" + t
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
            }, i = e.currentTarget || e.target, o = i.id;
            (!o || "swan" === gioGlobal.gio__platform && /^_[0-9a-f]+/.test(o)) && (o = "");
            var r = {
                x: o + "#" + t
            }, a = w(e, "detail.value") || w(e, "target.attr.value");
            (i.dataset.growingTrack || i.dataset.growingtrack) && ("boolean" == typeof a || a && 0 !== a.length) && ("[object Array]" === Object.prototype.toString.call(a) ? (a = a.join(",")) && (r.v = a) : r.v = a), 
            "change" === e.type && "autoplay" === w(e, "detail.source") || (n.e = [ r ], this._sendEvent(n));
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
                    h: "string" == typeof e.pagePath ? e.pagePath : JSON.stringify(e.pagePath)
                } ]
            };
            this._sendEvent(t);
        }
    }, {
        key: "_sendEvent",
        value: function(e) {
            var t = this;
            if (this.info.uid && this.esid) {
                var n = this._buildEvent(e, this.info);
                this.growingio.upload(n);
            } else if (this.isGettingUid) this.uploadingMessages.push(e); else {
                this.isGettingUid = !0;
                var i = this.info.getStorage(this.info.uidKey), o = this.info.getStorage(this.info.esidKey);
                Promise.all([ i, o ]).then(function(n) {
                    var i = v(n, 2), o = i[0], r = i[1];
                    o || (o = m.guid()), r || (r = 1), t.info.uid = o, t.info.esid = r, t.isGettingUid = !1;
                    var a = t._buildEvent(e, t.info);
                    for (t.growingio.upload(a); 0 !== t.uploadingMessages.length; ) {
                        var s = t.uploadingMessages.shift();
                        s = t._buildEvent(s, t.info), t.growingio.upload(s);
                    }
                });
            }
        }
    }, {
        key: "_buildEvent",
        value: function(e, t) {
            if (e.u = t.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.vdsConfig.appId, 
            e.b = t.platform, null !== this.cs1 && (e.cs1 = this.cs1), e.var) {
                var n = e.var;
                Object.keys(n).forEach(function(t) {
                    "string" != typeof n[t] && (e.var[t] = JSON.stringify(n[t]));
                });
            }
            return e.esid = this.esid++, e;
        }
    }, {
        key: "_parseScene",
        value: function(e) {
            if ("quickapp" === this.info.platform) {
                var t = this.info.getAppSource(), n = t.extra || {}, i = t.type || "";
                this.scene = i, this.setVisitor({
                    extra: JSON.stringify(n)
                });
            } else if (e.length > 0) {
                var o = e[0];
                this.scene = o.query && o.query.wxShoppingListScene ? o.query.wxShoppingListScene : o.scene ? o.scene : "NA";
            }
        }
    }, {
        key: "sessionId",
        get: function() {
            return null === this._sessionId && (this._sessionId = m.guid()), this._sessionId;
        }
    } ]), o;
}(), V = function() {
    function e(t) {
        i(this, e), this.growing = t, this._uid = void 0, this._esid = void 0, this._gioId = void 0, 
        this._userId = void 0, this._systemInfo = null, this.uidKey = "_growing_uid_", this.esidKey = "_growing_esid_", 
        this.gioIdKey = "_growing_gioId_", this.userIdKey = "_growing_userId_", this.platform = gioGlobal.platformConfig.platform, 
        this.sdkVer = gioGlobal.platformConfig.sdkVer, this.scnPrefix = gioGlobal.platformConfig.scnPrefix, 
        "quickapp" !== gioGlobal.platformConfig.platform && this.initUserInfo();
    }
    return d(e, [ {
        key: "initUserInfo",
        value: function() {
            this.uid = this.getStorageSync(this.uidKey), this.esid = +this.getStorageSync(this.esidKey);
        }
    }, {
        key: "syncStorage",
        value: function() {
            var e = this;
            this.getStorage(this.uidKey).then(function(t) {
                t || e.setStorage(e.uidKey, e._uid);
            });
        }
    }, {
        key: "getAppId",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getAppSource",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getPageTitle",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "getPagePath",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "getStorage",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "getStorageSync",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "setStorage",
        value: function(e, t) {
            throw Error("this a interface function");
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getNetworkType",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getLocation",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "request",
        value: function(e) {
            e.url, e.header, e.method, e.data, e.success, e.fail;
            throw Error("this a interface function");
        }
    }, {
        key: "collectImp",
        value: function(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            throw Error("this a interface function");
        }
    }, {
        key: "initShareAppMessage",
        value: function(e) {
            throw Error("this a interface function");
        }
    }, {
        key: "getCurrentPage",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getQuery",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getReferrer",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "getInitPath",
        value: function() {
            throw Error("this a interface function");
        }
    }, {
        key: "esid",
        set: function(e) {
            this._esid = e, this.setStorage(this.esidKey, this._esid);
        },
        get: function() {
            return this._esid;
        }
    }, {
        key: "uid",
        set: function(e) {
            this._uid = e, this.setStorage(this.uidKey, this._uid);
        },
        get: function() {
            return this._uid;
        }
    }, {
        key: "gioId",
        set: function(e) {
            this._gioId = e, this.setStorage(this.gioIdKey, this._gioId);
        },
        get: function() {
            return this._gioId;
        }
    }, {
        key: "userId",
        get: function() {
            return this._userId;
        },
        set: function(e) {
            this._userId = e, this.setStorage(this.userIdKey, this._userId);
        }
    }, {
        key: "systemInfo",
        get: function() {
            return this._systemInfo;
        }
    } ]), e;
}(), q = function(e) {
    function o(e) {
        var n;
        return i(this, o), n = t(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e)), 
        n.growingio = e, n;
    }
    return n(o, V), d(o, [ {
        key: "getAppId",
        value: function() {
            this._systemInfo || (this._systemInfo = wx.getSystemInfoSync());
            var e = void 0;
            return 0 > m.compareVersion(this._systemInfo.SDKVersion, "2.2.2") || (e = wx.getAccountInfoSync().miniProgram.appId), 
            e;
        }
    }, {
        key: "getPagePath",
        value: function() {
            return this.getCurrentPage().route;
        }
    }, {
        key: "getCurrentPage",
        value: function() {
            var e = getCurrentPages();
            return e[e.length - 1];
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
            } catch (e) {
                return "";
            }
            return t;
        }
    }, {
        key: "getStorage",
        value: function(e) {
            return new Promise(function(t) {
                wx.getStorage({
                    key: e,
                    success: function(e) {
                        return t(e.data);
                    },
                    fail: function() {
                        return t("");
                    }
                });
            });
        }
    }, {
        key: "getStorageSync",
        value: function(e) {
            return wx.getStorageSync(e);
        }
    }, {
        key: "setStorage",
        value: function(e, t) {
            wx.setStorage({
                key: e,
                data: t
            });
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                wx.getSystemInfo({
                    success: function(n) {
                        e._systemInfo = n, t(n);
                    },
                    fail: function() {
                        return t(null);
                    }
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
        key: "getSetting",
        value: function() {
            return new Promise(function(e) {
                wx.getSetting({
                    success: e,
                    fail: e
                });
            });
        }
    }, {
        key: "getLocation",
        value: function(e) {
            return new Promise(function(t) {
                wx.getLocation({
                    type: e,
                    success: function(e) {
                        return t(e);
                    },
                    fail: function() {
                        return t(null);
                    }
                });
            });
        }
    }, {
        key: "request",
        value: function(e) {
            var t = e.url, n = e.header, i = e.method, o = e.data, r = e.success, a = e.fail, s = e.complete;
            return wx.request({
                url: t,
                header: n,
                method: i,
                data: o,
                success: r,
                fail: a,
                complete: s
            });
        }
    }, {
        key: "collectImp",
        value: function(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.growingio.vdsConfig.vue && (e = e.$mp.page), this.growingio.vdsConfig.taro && (e = e.$scope);
            var i = {};
            this.growingio._observer && this.growingio._observer.disconnect(), this.growingio._observer = e.isComponent ? e.createIntersectionObserver({
                observeAll: !0
            }) : wx.createIntersectionObserver(e, {
                observeAll: !0
            }), (n ? this.growingio._observer.relativeTo(n) : this.growingio._observer.relativeToViewport()).observe(".growing_collect_imp", function(e) {
                if (e.id && !i[e.id]) {
                    var n = b(e.dataset), o = n.eventId, r = n.properties;
                    o && e.id && !i[e.id] && (t.growingio.observer.track(o, r), i[e.id] = !0);
                }
            });
        }
    }, {
        key: "setStorageSync",
        value: function(e, t) {
            wx.setStorageSync(e, JSON.stringify(t));
        }
    }, {
        key: "removeStorageSync",
        value: function(e) {
            wx.removeStorageSync(e);
        }
    }, {
        key: "navigateTo",
        value: function(e) {
            wx.navigateTo(e);
        }
    }, {
        key: "switchTab",
        value: function(e) {
            wx.switchTab(e);
        }
    } ]), o;
}(), R = function() {
    function e(t) {
        i(this, e), this.growingio = t, this.messageQueue = [], this.uploadingQueue = [], 
        this.uploadTimer = null, this.projectId = this.growingio.vdsConfig.projectId, this.appId = this.growingio.vdsConfig.appId, 
        this.host = this.growingio.vdsConfig.host, this.url = this.host + "/projects/" + this.projectId + "/apps/" + this.appId + "/collect";
    }
    return d(e, [ {
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
            this.uploadingQueue = this.messageQueue.slice(), this.messageQueue = [], this.uploadingQueue.length > 0 && this.growingio.info.request({
                url: this.url + "?stm=" + Date.now(),
                header: {
                    "content-type": "application/json"
                },
                method: "POST",
                data: this.uploadingQueue,
                success: function() {
                    e.messageQueue.length > 0 && e._flush();
                },
                fail: function(t) {
                    204 !== t.status && (e.messageQueue = e.uploadingQueue.concat(e.messageQueue));
                }
            });
        }
    } ]), e;
}(), M = {
    wx: {
        name: "Weixin",
        path: "./weixin"
    },
    qq: {
        name: "QQ",
        path: "./qq"
    },
    my: {
        name: "Alipay",
        path: "./alipay"
    },
    swan: {
        name: "Baidu",
        path: "./baidu"
    },
    tt: {
        name: "Bytedance",
        path: "./bytedance"
    },
    quickApp: {
        name: "Quickapp",
        path: "./quickApp"
    },
    frame: {
        name: "Frame",
        path: "./multipleFrame"
    }
}, D = Object.assign({}, M.wx, {
    platform: "MinP",
    scnPrefix: "",
    appHandlers: [ "onShow", "onHide", "onError" ],
    pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap", "onHide", "onUnload" ],
    actionEventTypes: [ "onclick", "tap", "longpress", "blur", "change", "submit", "confirm", "getuserinfo", "getphonenumber", "contact" ],
    originalApp: App,
    originalPage: Page,
    originalComponent: Component,
    originalBehavior: Behavior,
    canHook: !0,
    hooks: {
        App: !0,
        Page: !0,
        Component: !0,
        Behavior: !0
    },
    lisiteners: {
        app: {
            appShow: "onShow",
            appClose: "onHide",
            appError: "onError"
        },
        page: {
            pageLoad: "onLoad",
            pageShow: "onShow",
            pageHide: "onHide",
            pageClose: "onUnload",
            tabTap: "onTabItemTap",
            shareApp: "onShareAppMessage"
        },
        actions: {
            click: [ "onclick", "tap", "longpress", "getuserinfo", "getphonenumber", "contact" ],
            change: [ "blur", "change", "confirm" ],
            submit: [ "submit" ]
        }
    }
}), H = Object.assign({}, D, {
    sdkVer: "3.4.1"
}), B = function() {
    function e(t) {
        i(this, e), this.growingio = t;
    }
    return d(e, [ {
        key: "setDataCollect",
        value: function(e) {
            this.growingio.vdsConfig.dataCollect = e;
        }
    }, {
        key: "enableDebug",
        value: function(e) {
            e && console && (this.growingio.vdsConfig.debug = e);
        }
    }, {
        key: "setTrackerScheme",
        value: function(e) {
            var t = (e + "").toLocaleLowerCase();
            "http" !== t && "https" !== t || (this.growingio.vdsConfig.scheme = e + "://");
        }
    }, {
        key: "setTrackerHost",
        value: function(e) {
            k(e) && (this.growingio.vdsConfig.host = e);
        }
    } ]), e;
}(), $ = function() {
    function e() {
        i(this, e), this.uploadingMessages = [], this.start = !1;
    }
    return d(e, [ {
        key: "init",
        value: function(e, t, n) {
            this.start || (t && "string" != typeof t && (n = t, t = ""), t || n || (t = "", 
            n = {}), "alip" === H.platform && (n.vue || n.taro || n.cml || n.wepy) && (H.canHook = !0), 
            n.usePlugin && (H.canHook = !1), this.vdsConfig = {
                projectId: e,
                appId: t,
                appVer: n.version || "",
                debug: n.debug || !1,
                forceLogin: n.forceLogin || !1,
                followShare: void 0 === n.followShare || n.followShare,
                usePlugin: n.usePlugin || !1,
                getLocation: {
                    autoGet: ("object" == y(n.getLocation) ? n.getLocation.autoGet : n.getLocation) || !1,
                    type: "object" == y(n.getLocation) && n.getLocation.type || "wgs84"
                },
                dataCollect: !("boolean" == typeof n.stopTrack && n.stopTrack || "boolean" == typeof n.dataCollect && !n.dataCollect),
                keepAlive: +n.keepAlive || 3e5,
                vue: n.vue || !1,
                taro: n.taro || !1,
                cml: n.cml || !1,
                wepy: n.wepy || !1,
                host: n.host && n.host.indexOf("http") >= 0 ? "https://" + n.host.slice(n.host.indexOf("://") + 3) : "https://wxapi.growingio.com",
                sdkVer: H.sdkVer
            }, gioGlobal.vdsConfig = this.vdsConfig, gioGlobal.platformConfig = H, this.info = new q(this), 
            t || (this.vdsConfig.appId = this.info.getAppId() || e), this.observer = new L(this), 
            this.uploader = new R(this), this.config = new B(this), this.start = !0, n.vue && (this.vueRootVMs = {}, 
            this._proxyVue(n.vue)), n.taro && (this.taroRootVMs = {}, this._proxyTaro(n.taro)), 
            n.cml && (gioGlobal.platformConfig.hooks.Component = !1, this._proxyCml(n.cml)), 
            n.wepy && (this.wepyRootVMs = {}, this._proxyWepy(n.wepy)), "quickapp" === gioGlobal.platformConfig.platform && this.info.initShareAppMessage(this), 
            this._start());
        }
    }, {
        key: "setConfig",
        value: function(e) {
            this.init(e.projectId, e.appId, e);
        }
    }, {
        key: "setVue",
        value: function(e) {
            this.vueRootVMs || (this.vueRootVMs = {}), this.vdsConfig.vue = !0, this._proxyVue(e);
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
                                for (var o, r = Object.keys(this)[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
                                    var a = o.value;
                                    0 > e.indexOf(a) || "function" != typeof this[a] || (Object.defineProperty(this[a], "proxiedName", {
                                        value: a
                                    }), Object.defineProperty(this[a], "isProxied", {
                                        value: !0
                                    }));
                                }
                            } catch (e) {
                                n = !0, i = e;
                            } finally {
                                try {
                                    !t && r.return && r.return();
                                } finally {
                                    if (n) throw i;
                                }
                            }
                        }
                    },
                    beforeMount: function() {
                        var e = this.$root;
                        e.$mp && "page" === e.$mp.mpType ? e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e) : "page" === e.mpType && "page" === this.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route || e.$mp.page.is] = e, 
                        -1 !== [ "wx", "qq", "tt" ].indexOf(gioGlobal.gio__platform) && C.instrumentPageComponent(e.$mp.page));
                    }
                });
            }
        }
    }, {
        key: "_proxyTaro",
        value: function(e) {
            var t = this, n = e.createComponent, i = this.vdsConfig.usePlugin;
            if (e.createComponent = function(e, o) {
                for (var r = e; r && r.prototype; ) {
                    for (var a = Object.keys(Object.getOwnPropertyDescriptors(r.prototype) || {}), s = 0; a.length > s; s++) if (a[s].startsWith("func__")) {
                        var u = r.name, l = a[s].slice(6);
                        t.taroRootVMs[a[s]] = u + "_" + ("" + e.prototype[a[s]]).match(/this\.__triggerPropsFn\("(.+)",/)[1] + "_" + l;
                    }
                    r = Object.getPrototypeOf(r);
                }
                var g = n(e, o), c = -1 !== [ "MinP", "qq" ].indexOf(H.platform), h = c ? g && g.methods : g;
                return i ? (C.instrument(h), o && C.instrumentPageComponent(h)) : o && c && C.instrumentPageComponent(h), 
                g;
            }, i) {
                var o = e.createApp;
                e.createApp = function(e) {
                    var t = o(e);
                    return t._growing_app_ = !0, C.instrument(t), t;
                };
            }
        }
    }, {
        key: "_proxyCml",
        value: function(e) {
            var t = e.createApp, n = e.createComponent;
            e.createApp = function(e) {
                return e._growing_app_ = !0, t(C.instrument(e));
            }, e.createComponent = function(e) {
                return n(e.data && e.data.isComponent ? Object.assign({}, e, {
                    methods: C.instrument(e.methods)
                }) : e);
            };
        }
    }, {
        key: "_proxyWepy",
        value: function(e) {
            var t = this, n = e.page, i = function(e) {
                for (var n = Object.keys(e), i = 0; n.length > i; i++) for (var o = Object.keys(e[n[i]]), r = 0; o.length > r; r++) if ("function" == typeof e[n[i]][o[r]]) {
                    var a = ("" + e[n[i]][o[r]]).match(/_vm\.(.+)\(.*\)/);
                    a && a[1] && (t.wepyRootVMs[n[i]] || (t.wepyRootVMs[n[i]] = {}), t.wepyRootVMs[n[i]][o[r]] = a[1]), 
                    t.vdsConfig.usePlugin && (e[n[i]][o[r]] = C.hook("_proxy", e[n[i]][o[r]]));
                }
            };
            e.page = function(e, t) {
                return t.handlers && i(t.handlers), C.instrumentPageComponent(e), n(e, t);
            };
            var o = e.component;
            if (e.component = function(e, t) {
                return t.handlers && i(t.handlers), o(e, t);
            }, this.vdsConfig.usePlugin) {
                var r = e.app;
                e.app = function(e, t) {
                    return e._growing_app_ = !0, r(C.instrument(e), t);
                };
            }
        }
    }, {
        key: "_start",
        value: function() {
            C.initInstrument(this.observer);
            try {
                gioGlobal && H.canHook && (H.hooks.App && (gioGlobal.App = App), H.hooks.Page && (gioGlobal.Page = Page), 
                H.hooks.Component && (gioGlobal.Component = Component), H.hooks.Behavior && (gioGlobal.Behavior = Behavior));
            } catch (e) {}
        }
    }, {
        key: "setDataCollect",
        value: function(e) {
            this.config.setDataCollect(e);
        }
    }, {
        key: "login",
        value: function(e) {
            if (this.vdsConfig.forceLogin) {
                this.info.uid = e, this.vdsConfig.forceLogin = !1;
                var t = !0, n = !1, i = void 0;
                try {
                    for (var o, r = this.uploadingMessages[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
                        var a = o.value;
                        a.u = e, this.upload(a);
                    }
                } catch (e) {
                    n = !0, i = e;
                } finally {
                    try {
                        !t && r.return && r.return();
                    } finally {
                        if (n) throw i;
                    }
                }
            }
        }
    }, {
        key: "upload",
        value: function(e) {
            this.vdsConfig.dataCollect && (this.vdsConfig.forceLogin ? this.uploadingMessages.push(e) : (this.vdsConfig.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
            G.emitEvent("upload", [ e ]), this.uploader.upload(e)));
        }
    }, {
        key: "forceFlush",
        value: function() {
            this.info.esid = this.observer.esid, this.uploader.forceFlush();
        }
    }, {
        key: "proxy",
        value: function(e, t) {
            try {
                if ("setVue" === e) this.setVue(t[0]); else if ("setDataCollect" === e) this.setDataCollect(t[0]); else if ("setStopTrack" === e) this.setDataCollect(!t[0]); else if ("collectImp" === e) this.collectImp(t[0], t[1]); else if (this.observer && this.observer[e]) return this.observer[e].apply(this.observer, t);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "collectImp",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.info.collectImp(e, t);
        }
    } ]), e;
}(), K = function(e, t) {
    if ("string" == typeof t) {
        "?" !== t[0] && (t = "?" + t), e = e.replace(/[\[\]]/g, "\\$&");
        var n = RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null;
    }
}, Q = function() {
    function t(e) {
        i(this, t), this.growingio = e, this.namespace = "push-user-status", this.userTagDuration = 432e7, 
        this.eventTagDuration = 864e5, this.handleCs1 = this.handleCs1.bind(this), this.handleClearCs1 = this.handleClearCs1.bind(this), 
        this.handleEvent = this.handleEvent.bind(this), this.addEventListener();
    }
    return d(t, [ {
        key: "addEventListener",
        value: function() {
            G.on("appOpen", this.handleEvent), G.on("upload", this.handleEvent), G.on("setCs1", this.handleCs1), 
            G.on("clearCs1", this.handleClearCs1);
        }
    }, {
        key: "handleCs1",
        value: function(e) {
            e !== this.get("cs1") && (this.set("cs1", e), this.set("bcs", void 0), G.emit("cs1Refresh"));
        }
    }, {
        key: "handleClearCs1",
        value: function() {
            this.set("cs1", void 0), this.set("bcs", void 0);
        }
    }, {
        key: "handleEvent",
        value: function(e) {
            if (e) switch (e.t) {
              case "vst":
              case "vstr":
              case "ppl":
                this.storeFilters(e, this.generateEventKey.bind(this, "userAttrs"), this.formatUserFilterVars);
                break;

              case "cstm":
                this.storeFilters(e, this.generateEventKey.bind(this, "triggerAttrs"), this.formatEventFilterVars);

              case "page":
                this.setIsPreview(e);
            }
        }
    }, {
        key: "setIsPreview",
        value: function(e) {
            if (e.q) {
                var t = K("scene", e.q);
                if (t) {
                    var n = K("gioMessageId", t);
                    if (n) {
                        var i = {
                            s: "splash",
                            pw: "popupWindow",
                            p: "push",
                            b: "banner",
                            ab: "abTest"
                        }[K("mt", t)] || "";
                        gioGlobal.__growing__.marketingPreview = {
                            messageId: n,
                            msgType: i
                        };
                    }
                }
            }
        }
    }, {
        key: "storeFilters",
        value: function(t, n, i) {
            var o = n(), r = this.get(o, this.eventTagDuration) || [], a = i.call(this, t), s = [].concat(e(r), e(a));
            this.set(o, s);
        }
    }, {
        key: "formatUserFilterVars",
        value: function(e) {
            var t = e.var;
            return t ? Object.keys(t).map(function(e) {
                return {
                    key: e,
                    value: t[e]
                };
            }) : [];
        }
    }, {
        key: "formatEventFilterVars",
        value: function(e) {
            var t = e.var;
            return [ {
                key: e.n,
                value: "",
                event_variable: t ? Object.keys(t).map(function(e) {
                    return {
                        key: e,
                        value: t[e]
                    };
                }) : []
            } ];
        }
    }, {
        key: "generateEventKey",
        value: function(e) {
            return e + "#" + (this.get("cs1") || "");
        }
    }, {
        key: "_get",
        value: function(e) {
            return this.growingio.info.getStorageSync(this.namespace + "#" + e);
        }
    }, {
        key: "getUserAttrs",
        value: function() {
            var e = this.generateEventKey("userAttrs");
            return this.get(e) || [];
        }
    }, {
        key: "getTriggerAttrs",
        value: function() {
            var e = this.generateEventKey("triggerAttrs");
            return this.get(e) || [];
        }
    }, {
        key: "set",
        value: function(e, t) {
            var n = this._get(e), i = new Date();
            i.setHours(0), i.setMinutes(0), i.setSeconds(0);
            var o = {
                startAt: i.getTime(),
                value: t
            };
            n && p(o.value, JSON.parse(n).value) || this.growingio.info.setStorageSync(this.namespace + "#" + e, o);
        }
    }, {
        key: "get",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.userTagDuration, n = this._get(e);
            if (n) {
                var i = JSON.parse(n);
                return Date.now() > i.startAt + t ? void 0 : i.value;
            }
        }
    } ]), t;
}();

try {
    (function(e) {
        Object.defineProperty(Object.prototype, "gioGlobal", {
            get: function() {
                return "quickApp" === e ? global.__proto__ : "my" === e ? $global : global;
            },
            configurable: !1,
            enumerable: !1
        });
    })("wx"), gioGlobal.gio__platform = "wx";
} catch (_) {}

var U = new $(), N = function() {
    var e = arguments[0];
    if (e) {
        var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
        if ("init" === e) {
            if (gioGlobal.vdsConfig) return void console.warn("SDK已经初始化成功，请检查是否加载过其他平台sdk");
            if (1 > t.length) return void console.log('初始化 GrowingIO SDK 失败。请使用 gio("init", "你的GrowingIO项目ID", "你的应用APP_ID", options);');
            U.init(t[0], t[1], t[2]);
        } else {
            if ("setConfig" !== e) return U.proxy(e, t);
            if (!t[0]) return void console.log("初始化 GrowingIO SDK 失败。请检查你的config文件是否引入正确");
            if (!t[0].projectId) return void console.log("初始化 GrowingIO SDK 失败。请检查你的 GrowingIO项目ID, 你的应用APP_ID 是否填写正确");
            U.setConfig(t[0]);
        }
    }
};

console.log("init growingio...");

var F = C.GrowingPage, J = C.GrowingApp, W = C.GrowingComponent, z = C.GrowingBehavior, X = G, Y = new Q(U);

gioGlobal.__growing__ = {
    gioEmitter: X,
    gio: N,
    growingio: U,
    userStorage: Y,
    marketingPreview: void 0
}, gioGlobal.gio = N, exports.GioApp = J, exports.GioBehavior = z, exports.GioComponent = W, 
exports.GioPage = F, exports.default = N, exports.gioEmitter = X, exports.growingio = U;