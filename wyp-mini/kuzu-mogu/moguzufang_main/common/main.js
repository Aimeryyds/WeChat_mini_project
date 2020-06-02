(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], {
    "1f6e": function(e, t, n) {
        "use strict";
        (function(e) {
            function n(e) {
                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, n(e);
            }
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            function r(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GioBehavior = t.GioComponent = t.GioApp = t.GioPage = t.default = void 0;
            var a = function() {
                function e(t) {
                    i(this, e), this.growingio = t, this.messageQueue = [], this.uploadingQueue = [], 
                    this.uploadTimer = null, this.projectId = this.growingio.projectId, this.appId = this.growingio.appId, 
                    this.host = this.growingio.host, this.url = "".concat(this.host, "/projects/").concat(this.projectId, "/apps/").concat(this.appId, "/collect");
                }
                return r(e, [ {
                    key: "upload",
                    value: function(e) {
                        var t = this;
                        this.messageQueue.push(e), this.uploadTimer || (this.uploadTimer = setTimeout(function() {
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
            }(), s = {
                sdkVer: "1.8.6",
                devVer: 1,
                guid: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    });
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
                }
            }, u = function() {
                function e() {
                    i(this, e), this.queries = {};
                }
                return r(e, [ {
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
                } ]), e;
            }(), c = {
                tap: [ "tap", "click" ],
                longtap: [ "longtap" ],
                input: [ "input" ],
                blur: [ "change", "blur" ],
                submit: [ "submit" ],
                focus: [ "focus" ]
            }, l = /^function[^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*/;
            function h(e) {
                return e && e.$attrs ? e.$attrs.mpcomid : "0";
            }
            function f(e, t) {
                void 0 === t && (t = []);
                var n = t.slice(1);
                return n.length ? n.reduce(function(e, t) {
                    for (var n = e.$children.length, i = 0; n > i; i++) {
                        var o = e.$children[i];
                        if (h(o) === t) return o;
                    }
                    return e;
                }, e) : e;
            }
            function p(e, t, n) {
                void 0 === n && (n = []);
                var i = [];
                if (!e || !e.tag) return i;
                var o = e || {}, r = o.data;
                void 0 === r && (r = {});
                var a = o.children;
                void 0 === a && (a = []);
                var s = o.componentInstance;
                s ? Object.keys(s.$slots).forEach(function(e) {
                    var o = s.$slots[e];
                    (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
                        i = i.concat(p(e, t, n));
                    });
                }) : a.forEach(function(e) {
                    i = i.concat(p(e, t, n));
                });
                var u = r.attrs, c = r.on;
                return u && c && u.eventid === t && n.forEach(function(e) {
                    var t = c[e];
                    "function" == typeof t ? i.push(t) : Array.isArray(t) && (i = i.concat(t));
                }), i;
            }
            var g = function() {
                function e(t) {
                    i(this, e), this.vueVM = t;
                }
                return r(e, [ {
                    key: "getHandle",
                    value: function(e) {
                        var t = e.type, n = e.target;
                        void 0 === n && (n = {});
                        var i = (e.currentTarget || n).dataset;
                        void 0 === i && (i = {});
                        var o = i.comkey;
                        void 0 === o && (o = "");
                        var r = i.eventid, a = f(this.vueVM, o.split(","));
                        if (a) {
                            var s = p(a._vnode, r, c[t] || [ t ]);
                            if (s.length) {
                                var u = s[0];
                                if (u.isProxied) return u.proxiedName;
                                try {
                                    var h = ("" + u).replace("\n", "");
                                    if (h.match(l)) {
                                        var g = l.exec(h);
                                        if (g && g.length > 1) return g[1];
                                    }
                                } catch (e) {}
                                return u.name;
                            }
                        }
                    }
                } ]), e;
            }(), d = function() {
                function e(t) {
                    i(this, e), this.growingio = t, this.weixin = t.weixin, this.currentPage = new u(), 
                    this.scene = null, this._sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, 
                    this.lastVstArgs = void 0, this.lastCloseTime = null, this.lastScene = void 0, this.keepAlive = t.keepAlive, 
                    this.isPauseSession = !1, this._observer = null, this.CLICK_TYPE = {
                        tap: "clck",
                        longpress: "lngprss",
                        longtap: "lngprss"
                    };
                }
                return r(e, [ {
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
                    key: "setUserId",
                    value: function(e) {
                        var t = e + "";
                        t && 100 > t.length && (this.cs1 = t, this.lastPageEvent && this._sendEvent(this.lastPageEvent));
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
                        "onShow" == t ? (this._parseScene(n), !this.lastCloseTime || Date.now() - this.lastCloseTime > this.keepAlive || this.lastScene && this.scene !== this.lastScene ? (this.resetSessionId(), 
                        this.sendVisitEvent(n), this.lastVstArgs = n, this.lastPageEvent = void 0) : this.useLastPageTime = !0) : "onHide" == t ? (this.lastScene = this.scene, 
                        this.growingio.forceFlush(), this.weixin.syncStorage(), this.isPauseSession || (this.lastCloseTime = Date.now(), 
                        this.sendVisitCloseEvent())) : "onError" == t && this.sendErrorEvent(n));
                    }
                }, {
                    key: "pageListener",
                    value: function(e, t, n) {
                        if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isPauseSession ? this.isPauseSession = !1 : (this.currentPage.touch(e), 
                        this.sendPage(e)); else if ("onLoad" === t) s.isEmpty(i = n[0]) || this.currentPage.addQuery(e, i); else if ("onHide" === t) this._observer && this._observer.disconnect(); else if ("onShareAppMessage" === t) {
                            var i = null, o = null;
                            2 > n.length ? 1 === n.length && (n[0].from ? i = n[0] : n[0].title && (o = n[0])) : (i = n[0], 
                            o = n[1]), this.pauseSession(), this.sendPageShare(e, i, o);
                        } else "onTabItemTap" === t && this.sendTabClick(n[0]);
                    }
                }, {
                    key: "actionListener",
                    value: function(e, t) {
                        if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                            var n = new g(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                            n && (t = n);
                        }
                        this.growingio.taroRootVMs && this.growingio.taroRootVMs[t] && (t = this.growingio.taroRootVMs[t]), 
                        this.growingio.debug && console.log("Click on ", t, Date.now()), "tap" === e.type || "longpress" === e.type ? this.sendClick(e, t) : -1 !== [ "change", "confirm", "blur" ].indexOf(e.type) ? this.sendChange(e, t) : "getuserinfo" === e.type ? (this.sendClick(e, t), 
                        e.detail && e.detail.userInfo && this.setVisitor(e.detail.userInfo)) : "getphonenumber" === e.type ? this.sendClick(e, t) : "contact" === e.type ? this.sendClick(e, t) : "submit" === e.type && this.sendSubmit(e, t);
                    }
                }, {
                    key: "getLocation",
                    value: function() {
                        this.growingio.getLocation = !0, this.sendVisitEvent(this.lastVstArgs);
                    }
                }, {
                    key: "track",
                    value: function(e, t) {
                        if (null !== e && void 0 !== e && 0 !== e.length) {
                            var i = {
                                t: "cstm",
                                ptm: this.currentPage.time,
                                p: this.currentPage.path,
                                q: this.currentPage.query,
                                n: e
                            };
                            null !== t && "object" == n(t) && (i.var = t), this._sendEvent(i);
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
                        this._sendEvent({
                            t: "pvar",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            var: e
                        });
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
                        var t = this, n = this.weixin.systemInfo, i = {
                            t: "vst",
                            tm: Date.now(),
                            av: s.sdkVer,
                            db: n.brand,
                            dm: n.model.replace(/<.*>/, ""),
                            sh: s.getScreenHeight(n),
                            sw: s.getScreenWidth(n),
                            os: s.getOS(n.platform),
                            osv: s.getOSV(n.version),
                            l: n.language
                        };
                        if (this.growingio.appVer && (i.cv = this.growingio.appVer + ""), e.length > 0) {
                            var o = e[0];
                            i.p = o.path, s.isEmpty(o.query) || (i.q = this.currentPage._getQuery(o.query)), 
                            i.ch = "scn:".concat(this.scene), o.referrerInfo && o.referrerInfo.appId && (i.rf = o.referrerInfo.appId);
                        }
                        this.weixin.getNetworkType().then(function(e) {
                            e && (i.nt = e.networkType, t.growingio.getLocation ? t.weixin.requestLocation().then(function() {
                                null != t.weixin.location && (i.lat = t.weixin.location.latitude, i.lng = t.weixin.location.longitude), 
                                t._sendEvent(i);
                            }) : t._sendEvent(i));
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
                                    var i = n[1].match(/at ([^ ]+) page (.*) function/), o = {
                                        key: t[0],
                                        error: n[0]
                                    };
                                    i && i.length > 2 && (o.page = i[1], o.function = i[2]), this._sendEvent({
                                        t: "cstm",
                                        ptm: this.currentPage.time,
                                        p: this.currentPage.path,
                                        q: this.currentPage.query,
                                        n: "onError",
                                        var: o
                                    });
                                }
                            }
                        }
                    }
                }, {
                    key: "sendPage",
                    value: function(e) {
                        var t = {
                            t: "page",
                            tm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        };
                        this.lastPageEvent ? (t.rp = this.lastPageEvent.p, this.useLastPageTime && (t.tm = this.lastPageEvent.tm, 
                        this.useLastPageTime = !1)) : t.rp = this.scene ? "scn:".concat(this.scene) : null, 
                        e.data && e.data.pvar && (t.var = e.data.pvar);
                        var n = this.weixin.getPageTitle(e);
                        n && n.length > 0 && (t.tl = n), this._sendEvent(t), this.lastPageEvent = t;
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
                        }, i = e.currentTarget, o = {
                            x: "".concat(i.id, "#").concat(t)
                        };
                        i.dataset.title ? o.v = i.dataset.title : i.dataset.src && (o.h = i.dataset.src), 
                        void 0 !== i.dataset.index && (o.idx = /^[\d]+$/.test(i.dataset.index) ? parseInt(i.dataset.index) : -1), 
                        n.e = [ o ], this._sendEvent(n);
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
                        }, i = e.currentTarget, o = {
                            x: "".concat(i.id, "#").concat(t)
                        };
                        if (-1 !== [ "blur", "change", "confirm" ].indexOf(e.type) && i.dataset.growingTrack) {
                            if (!e.detail.value || 0 === e.detail.value.length) return;
                            "string" == typeof e.detail.value ? o.v = e.detail.value : "[object Array]" === Object.prototype.toString.call(e.detail.value) && (o.v = e.detail.value.join(","));
                        }
                        "change" === e.type && e.detail && e.detail.source && "autoplay" === e.detail.source || (n.e = [ o ], 
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
                        return null === this._sessionId && (this._sessionId = s.guid()), this._sessionId;
                    }
                } ]), e;
            }(), v = function() {
                function e(t) {
                    i(this, e), this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
                    this._uid && 36 !== this._uid.length && (t.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
                }
                return r(e, [ {
                    key: "syncStorage",
                    value: function() {
                        wx.getStorageSync("_growing_uid_") || wx.setStorageSync("_growing_uid_", this._uid);
                    }
                }, {
                    key: "requestLocation",
                    value: function() {
                        var e = this;
                        return new Promise(function(t) {
                            e._getLocation().then(function(n) {
                                return e._location = n, t(n);
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
                    value: function() {
                        return new Promise(function(e) {
                            wx.getLocation({
                                success: e,
                                fail: function() {
                                    return e(null);
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
                        return this._uid || (this.uid = s.guid()), this._uid;
                    }
                } ]), e;
            }(), y = {
                defaultPageCallbacks: {},
                defaultAppCallbacks: {},
                appHandlers: [ "onShow", "onHide", "onError" ],
                pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap", "onHide" ],
                actionEventTypes: [ "tap", "longpress", "blur", "change", "submit", "confirm", "getuserinfo", "getphonenumber", "contact" ],
                originalPage: Page,
                originalApp: App,
                originalComponent: Component,
                originalBehavior: Behavior,
                hook: function(e, t) {
                    return function() {
                        var n, i = arguments ? arguments[0] : void 0;
                        if (i && i.currentTarget && -1 != y.actionEventTypes.indexOf(i.type)) try {
                            y.observer.actionListener(i, e);
                        } catch (e) {
                            console.error(e);
                        }
                        if (this._growing_app_ && "onShow" !== e ? n = t.apply(this, arguments) : this._growing_page_ && -1 === [ "onShow", "onLoad", "onTabItemTap" ].indexOf(e) && (n = t.apply(this, arguments)), 
                        this._growing_app_ && -1 !== y.appHandlers.indexOf(e)) {
                            try {
                                y.defaultAppCallbacks[e].apply(this, arguments);
                            } catch (e) {
                                console.error(e);
                            }
                            "onShow" === e && (n = t.apply(this, arguments));
                        }
                        if (this._growing_page_ && -1 !== y.pageHandlers.indexOf(e)) {
                            var o = Array.prototype.slice.call(arguments);
                            n && o.push(n);
                            try {
                                y.defaultPageCallbacks[e].apply(this, o);
                            } catch (e) {
                                console.error(e);
                            }
                            if (-1 !== [ "onShow", "onLoad", "onTabItemTap", "onHide" ].indexOf(e)) n = t.apply(this, arguments); else {
                                var r = y.observer.growingio;
                                r && r.followShare && n && n.path && (n.path = -1 === n.path.indexOf("?") ? n.path + "?suid=" + r.weixin.uid : n.path + "&suid=" + r.weixin.uid);
                            }
                        }
                        return n;
                    };
                },
                hookComponent: function(e, t) {
                    return function() {
                        var n = arguments ? arguments[0] : void 0;
                        if (n && n.currentTarget && -1 != y.actionEventTypes.indexOf(n.type)) try {
                            y.observer.actionListener(n, e);
                        } catch (e) {
                            console.error(e);
                        }
                        return t.apply(this, arguments);
                    };
                },
                instrument: function(e) {
                    for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
                    return e._growing_app_ && y.appHandlers.map(function(t) {
                        e[t] || (e[t] = y.defaultAppCallbacks[t]);
                    }), e._growing_page_ && y.pageHandlers.map(function(t) {
                        e[t] || "onShareAppMessage" === t || (e[t] = y.defaultPageCallbacks[t]);
                    }), e;
                },
                instrumentTaroPageComponent: function(e) {
                    if (e.methods) {
                        var t = e.methods, n = function(n) {
                            if ("function" == typeof t[n] && -1 != y.pageHandlers.indexOf(n)) {
                                var i = t[n];
                                e.methods[n] = function() {
                                    return y.observer.pageListener(this, n, arguments), i.apply(this, arguments);
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
                    return e._growing_page_ = !0, y.originalPage(y.instrument(e));
                },
                GrowingComponent: function(e) {
                    return y.originalComponent(y.instrumentComponent(e));
                },
                GrowingBehavior: function(e) {
                    return y.originalBehavior(y.instrumentComponent(e));
                },
                GrowingApp: function(e) {
                    return e._growing_app_ = !0, y.originalApp(y.instrument(e));
                },
                initInstrument: function(t, n) {
                    y.observer = t, y.pageHandlers.forEach(function(e) {
                        y.defaultPageCallbacks[e] = function() {
                            this.__route__ && y.observer.pageListener(this, e, arguments);
                        };
                    }), y.appHandlers.forEach(function(e) {
                        y.defaultAppCallbacks[e] = function() {
                            y.observer.appListener(this, e, arguments);
                        };
                    }), n ? (e.GioPage = y.GrowingPage, e.GioApp = y.GrowingApp, e.GioComponent = y.GrowingBehavior, 
                    e.GioBehavior = y.GrowingBehavior) : (Page = function() {
                        return y.GrowingPage(arguments[0]);
                    }, App = function() {
                        return y.GrowingApp(arguments[0]);
                    }, Component = function() {
                        return y.GrowingComponent(arguments[0]);
                    }, Behavior = function() {
                        return y.GrowingBehavior(arguments[0]);
                    });
                }
            };
            Object.getOwnPropertyDescriptors || (Object.getOwnPropertyDescriptors = function(e) {
                var t = {}, n = !0, i = !1, o = void 0;
                try {
                    for (var r, a = Reflect.ownKeys(e)[Symbol.iterator](); !(n = (r = a.next()).done); n = !0) {
                        var s = r.value;
                        t[s] = Object.getOwnPropertyDescriptor(e, s);
                    }
                } catch (u) {
                    i = !0, o = u;
                } finally {
                    try {
                        n || null == a.return || a.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return t;
            });
            var m = function() {
                function t() {
                    i(this, t), this.uploadingMessages = [];
                }
                return r(t, [ {
                    key: "init",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.projectId = e, this.appId = t, this.appVer = n.version, this.debug = n.debug || !1, 
                        this.forceLogin = n.forceLogin || !1, this.followShare = n.followShare || !1, this.usePlugin = n.usePlugin || !1, 
                        this.getLocation = n.getLocation || !1, this.keepAlive = +n.keepAlive || 3e4, this.vue = !!n.vue, 
                        this.taro = !!n.taro, this.weixin = new v(this), this.esid = this.weixin.esid, this.host = "https://wxapi.growingio.com", 
                        n.host && n.host.indexOf("http") >= 0 && (this.host = "https://" + n.host.slice(n.host.indexOf("://") + 3)), 
                        this.uploader = new a(this), this.observer = new d(this), n.vue && (this.vueRootVMs = {}, 
                        this._proxyVue(n.vue)), n.taro && (this.taroRootVMs = {}, this._proxyTaro(n.taro)), 
                        this._start();
                    }
                }, {
                    key: "setVue",
                    value: function(e) {
                        this.vueRootVMs || (this.vueRootVMs = {}), this.vue = !0, this._proxyVue(e);
                    }
                }, {
                    key: "login",
                    value: function(e) {
                        if (this.forceLogin) {
                            var t = !0, n = !1, i = void 0;
                            try {
                                for (var o, r = (this.weixin.uid = e, this.forceLogin = !1, this.uploadingMessages)[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
                                    var a = o.value;
                                    a.u = e, this._upload(a);
                                }
                            } catch (s) {
                                n = !0, i = s;
                            } finally {
                                try {
                                    t || null == r.return || r.return();
                                } finally {
                                    if (n) throw i;
                                }
                            }
                        }
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.forceLogin ? this.uploadingMessages.push(e) : this._upload(e);
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
                            if ("setVue" === e) this.setVue(t[0]); else if (this.observer && this.observer[e]) return this.observer[e].apply(this.observer, t);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }, {
                    key: "_start",
                    value: function() {
                        y.initInstrument(this.observer, this.usePlugin);
                        try {
                            e && (e.App = App, e.Page = Page, e.Component = Component);
                        } catch (t) {
                            console.error(t);
                        }
                    }
                }, {
                    key: "_upload",
                    value: function(e) {
                        e.esid = this.esid++, this.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
                        this.uploader.upload(e);
                    }
                }, {
                    key: "_proxyTaro",
                    value: function(e) {
                        var t = this, n = e.createComponent;
                        e.createComponent = function(e, i) {
                            for (var o = e; o && o.prototype; ) {
                                for (var r = Object.keys(Object.getOwnPropertyDescriptors(o.prototype) || {}), a = 0; r.length > a; a++) if (r[a].startsWith("func__")) {
                                    var s = o.name, u = r[a].slice(6);
                                    t.taroRootVMs[r[a]] = s + "_" + ("" + e.prototype[r[a]]).match(/this\.__triggerPropsFn\(\"(.+)\",/)[1] + "_" + u;
                                }
                                o = Object.getPrototypeOf(o);
                            }
                            var c = n(e, i);
                            return i && y.instrumentTaroPageComponent(c), c;
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
                } ]), t;
            }(), w = new m(), _ = function() {
                var e = arguments[0];
                if (e) {
                    var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
                    if ("init" !== e) return w.proxy(e, t);
                    t.length < 2 ? console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);") : w.init(t[0], t[1], t[2]);
                }
            };
            console.log("init growingio...");
            var b = y.GrowingPage, k = y.GrowingApp, P = y.GrowingComponent, x = y.GioBehavior;
            t.GioBehavior = x, t.GioComponent = P, t.GioApp = k, t.GioPage = b;
            var S = _;
            t.default = S;
        }).call(this, n("66fa"));
    },
    "23be": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("fe5f"), o = n.n(i);
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t["default"] = o.a;
    },
    "3dfd": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("23be");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("5c0b");
        var r, a, s = n("17cc"), u = Object(s["a"])(i["default"], r, a, !1, null, null, null);
        t["default"] = u.exports;
    },
    "56d7": function(e, t, n) {
        "use strict";
        n("6cdc");
        var i = p(n("1f6e")), o = p(n("354a")), r = p(n("3dfd")), a = p(n("4360")), s = p(n("30a4")), u = p(n("9b33")), c = p(n("ca14")), l = p(n("caaf")), h = p(n("c59d")), f = p(n("4e35"));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), i.forEach(function(t) {
                    d(e, t, n[t]);
                });
            }
            return e;
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var v = "mp-weixin";
        o.default.config.productionTip = !1, o.default.prototype.$store = a.default, o.default.prototype.$api = s.default, 
        o.default.prototype.$platform = {
            isWxMp: "mp-weixin" === v,
            isApMp: "mp-alipay" === v,
            isH5: "h5" === v
        }, (0, i.default)("init", "be2a30acdaca25c5", "wxa32d290fc833e4e1", {
            vue: o.default,
            version: "1.0"
        }), o.default.prototype.$toast = c.default, o.default.prototype.$mg = u.default, 
        o.default.prototype.$mgRouter = l.default, o.default.prototype.$mgCache = h.default, 
        o.default.prototype.$mgStorage = f.default, o.default.prototype.$gio = i.default, 
        r.default.mpType = "app";
        var y = new o.default(g({
            store: a.default
        }, r.default));
        y.$mount();
    },
    "5c0b": function(e, t, n) {
        "use strict";
        var i = n("e6f9"), o = n.n(i);
        o.a;
    },
    c59d: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {}, s = function() {
            function e() {
                i(this, e);
            }
            return r(e, [ {
                key: "get",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = void 0;
                    return e && "string" === typeof e && (n = a[e], t && this.remove(e)), n;
                }
            }, {
                key: "set",
                value: function(e, t) {
                    e && "string" === typeof e && (a[e] = t);
                }
            }, {
                key: "remove",
                value: function(e) {
                    e && "string" === typeof e && delete a[e];
                }
            }, {
                key: "clear",
                value: function() {
                    a = {};
                }
            } ]), e;
        }(), u = new s();
        t.default = u;
    },
    caaf: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n("0427")), o = n("eaf8");
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                return c(e) || u(e, t) || s();
            }
            function s() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function u(e, t) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) if (n.push(a.value), 
                    t && n.length === t) break;
                } catch (u) {
                    o = !0, r = u;
                } finally {
                    try {
                        i || null == s["return"] || s["return"]();
                    } finally {
                        if (o) throw r;
                    }
                }
                return n;
            }
            function c(e) {
                if (Array.isArray(e)) return e;
            }
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(e, i.key, i);
                }
            }
            function f(e, t, n) {
                return t && h(e.prototype, t), n && h(e, n), e;
            }
            var p = function() {
                function t() {
                    l(this, t), this.navRuning = !1;
                }
                return f(t, [ {
                    key: "_running",
                    value: function() {
                        this.navRuning = !0;
                    }
                }, {
                    key: "_stopping",
                    value: function() {
                        this.navRuning = !1;
                    }
                }, {
                    key: "buildUrl",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = ("" + e).trim().split("?"), o = a(n, 2), r = o[0], s = o[1], u = void 0 === s ? "" : s;
                        return t = Object.assign({}, i.default.parse(u), t || {}), r + (Object.keys(t).length ? "?" + i.default.stringify(t) : "");
                    }
                }, {
                    key: "_createProperty",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = (0, 
                        o.createPromise)(), n = this;
                        return {
                            url: e,
                            success: function() {
                                t.resolve();
                            },
                            fail: function() {
                                t.reject();
                            },
                            promise: t.promise.then(function(t) {
                                setTimeout(function() {
                                    console.log("%c 链接跳转成功：%c %s", "color:#3f51b5;", "color:#333;", e), n._stopping();
                                }, 1e3);
                            }, function() {
                                console.log("%c 链接跳转失败：%c %s", "color:#f44336;", "color:#333;", e), n._stopping();
                            })
                        };
                    }
                }, {
                    key: "navigateTo",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.navRuning) {
                            this._running();
                            var i = this.buildUrl(t, n), o = this._createProperty(i);
                            return e.navigateTo(o), o.promise;
                        }
                    }
                }, {
                    key: "switchTab",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.navRuning) {
                            this._running();
                            var i = this.buildUrl(t, n), o = this._createProperty(i);
                            return e.switchTab(o), o.promise;
                        }
                    }
                }, {
                    key: "reLaunch",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.navRuning) {
                            this._running();
                            var i = this.buildUrl(t, n), o = this._createProperty(i);
                            return e.reLaunch(o), o.promise;
                        }
                    }
                }, {
                    key: "redirectTo",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.navRuning) {
                            this._running();
                            var i = this.buildUrl(t, n), o = this._createProperty(i);
                            return e.redirectTo(o), o.promise;
                        }
                    }
                }, {
                    key: "navigateBack",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (!this.navRuning) {
                            this._running();
                            var n = this._createProperty();
                            return n.delta = t, e.navigateBack(n), n.promise;
                        }
                    }
                } ]), t;
            }(), g = new p();
            t.default = g;
        }).call(this, n("39c3")["default"]);
    },
    e6f9: function(e, t, n) {},
    fe5f: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("f2de");
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), i.forEach(function(t) {
                    r(e, t, n[t]);
                });
            }
            return e;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var a = {
            computed: o({}, (0, i.mapState)([ "openId" ])),
            methods: o({}, (0, i.mapActions)([ "getCityList", "getCityFilters", "getLocationCity", "getAuthSilent" ]), (0, 
            i.mapActions)("user", [ "getUserInfo", "getRenterInfoByUserId", "autoLogin" ])),
            onLaunch: function(e) {
                this.appLanuch = !0, this.getUserInfo(), this.autoLogin(), this.getCityList();
            },
            onShow: function(e) {
                this.appLanuch || (this.getLocationCity(), this.appLanuch = !1), console.log("App Show");
            },
            onHide: function() {
                console.log("App Hide");
            }
        };
        t.default = a;
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);