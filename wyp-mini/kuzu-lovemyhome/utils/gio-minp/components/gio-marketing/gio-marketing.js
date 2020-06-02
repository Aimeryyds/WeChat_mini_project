function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
}, i = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t;
    };
}();

if (!gioGlobal.__growing__) throw "未加载 gio SDK";

var s = gioGlobal.__growing__.gio, n = gioGlobal.__growing__.growingio, r = gioGlobal.__growing__.gioEmitter, a = gioGlobal.__growing__.userStorage, o = "https://messages.growingio.com/v3";

if (!n.info) throw "gio SDK 未初始化";

var u = function(e) {
    return "boolean" == typeof e ? e : "string" == typeof e ? "t" === e : void 0;
}, l = function(e) {
    if ("t" === e) return !0;
    if ("f" === e) return !1;
    e = "(" + e.replace(/\&+/g, "&").replace(/\|+/g, "|") + ")";
    for (var t = [], i = 0; e.length > i; i++) !function(i) {
        var s = void 0, n = void 0;
        t.push(e[i]);
        for (var r = []; ")" === e[i] && "(" !== s && void 0 !== (s = t.pop()); ) [ "&", "|" ].includes(s) ? n = s : [ "t", "f", !0, !1 ].includes(s) && r.push(s);
        if (n && r.length) {
            var a = r.reduce(function(e, t) {
                var i = u(e), s = u(t);
                return "&" === n ? i && s : "|" === n ? i || s : void 0;
            }, u(r[0]));
            t.push(a);
        }
    }(i);
    return t.pop();
}, v = function() {
    function s(t) {
        e(this, s), this.namespace = t;
    }
    return i(s, [ {
        key: "_getOldkey",
        value: function(e) {
            return "#" + this.namespace + "#" + e;
        }
    }, {
        key: "_key",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return "#" + this.namespace + "#" + e + "_" + t;
        }
    }, {
        key: "_get",
        value: function(e, t) {
            var i = this._getOldkey(e), s = n.info.getStorageSync(i);
            if (s) return n.info.removeStorageSync(i), JSON.parse(s);
            var r = n.info.getStorageSync(this._key(e, t));
            return !!r && JSON.parse(r);
        }
    }, {
        key: "_set",
        value: function(e, t, i) {
            n.info.setStorageSync(this._key(e, t), i);
        }
    }, {
        key: "get",
        value: function(e, i) {
            var s = this._get(e, i), n = {
                showTimes: 0,
                showDate: Date.now()
            };
            if (s) {
                var r = t({}, n, s);
                return this._set(e, i, r), r;
            }
            return this._set(e, i, n), n;
        }
    }, {
        key: "plus",
        value: function(e, t, i, s) {
            var n = this.get(e, t);
            n[i] = n[i] + s, this._set(e, t, n);
        }
    }, {
        key: "plusShowTimes",
        value: function(e, t, i) {
            this.plus(e, t, "showTimes", i);
        }
    }, {
        key: "plusShowDate",
        value: function(e, t, i) {
            var s = this.get(e, t), n = new Date(Date.now() + i);
            n.setHours(0), n.setMinutes(0), n.setSeconds(0), s.showDate = n.getTime(), this._set(e, t, s);
        }
    } ]), s;
}(), h = function() {
    function t() {
        e(this, t), console.log("Marketing 引入成功。请继续使用<gio-marketing />集成在您需要的页面中."), this.isInit = !1, 
        this.statusStorage = new v("push-status"), this.timer = null, this.isPreview = !1, 
        this.isRequested = !1, this.isDispatching = !1, this.listener = null, this.fetchedMessages = [], 
        this.renderQueue = [], this.unResolvedEvents = [], this.handleCs1Refresh = this.handleCs1Refresh.bind(this), 
        this.handleEvent = this.handleEvent.bind(this), this.addGlobalEventListener();
    }
    return i(t, [ {
        key: "init",
        value: function() {
            this.destroy(), console.log("gio-marketing 集成成功！初始化中…"), this.isInit = !0, this.addEventListener();
        }
    }, {
        key: "update",
        value: function() {
            this.refetchPushMessage();
        }
    }, {
        key: "disabled",
        value: function() {
            this.resetState(), this.setPreviewState(!1);
        }
    }, {
        key: "destroy",
        value: function() {
            this.disabled(), this.isInit = !1, this.removeEventListener();
        }
    }, {
        key: "addGlobalEventListener",
        value: function() {
            r.on("cs1Refresh", this.handleCs1Refresh);
        }
    }, {
        key: "addEventListener",
        value: function() {
            r.on("appOpen", this.handleEvent), r.on("upload", this.handleEvent);
        }
    }, {
        key: "removeEventListener",
        value: function() {
            r.off("appOpen", this.handleEvent), r.off("upload", this.handleEvent);
        }
    }, {
        key: "addComponentListener",
        value: function(e) {
            this.listener = e;
        }
    }, {
        key: "removeComponentListener",
        value: function() {
            this.listener = null;
        }
    }, {
        key: "resetState",
        value: function() {
            this.timer = null, this.isRequested = !1, this.isDispatching = !1, this.renderQueue = [], 
            this.clearFetchedMessages(), this.clearUnResolvedEvents();
        }
    }, {
        key: "getPreviewState",
        value: function() {
            return this.isPreview;
        }
    }, {
        key: "setPreviewState",
        value: function(e) {
            this.isPreview = e;
        }
    }, {
        key: "gatherUnResolvedEvents",
        value: function(e) {
            this.unResolvedEvents.push(e);
        }
    }, {
        key: "clearUnResolvedEvents",
        value: function() {
            this.unResolvedEvents = [];
        }
    }, {
        key: "clearFetchedMessages",
        value: function() {
            this.fetchedMessages = [];
        }
    }, {
        key: "formatUrl",
        value: function() {
            var e = {
                bu: a.get("bu"),
                bcs: a.get("bcs"),
                u: n.info.uid,
                cs: s("getUserId")
            }, t = o + "/" + n.vdsConfig.projectId + "/notifications?url_scheme=" + n.vdsConfig.appId;
            return Object.keys(e).forEach(function(i) {
                var s = e[i];
                s && (t += "&" + i + "=" + s);
            }), t;
        }
    }, {
        key: "fetchPushMessage",
        value: function() {
            var e = this, t = this.formatUrl(), i = Date.now();
            n.info.request({
                url: t,
                header: {
                    "X-Timezone": ("" + new Date()).match(/GMT\+[0-9]+/g)[0]
                },
                success: function(t) {
                    var s = Date.now();
                    if (a.set("bcs", t.data.idMappings.bcs), a.set("bu", t.data.idMappings.bu), !e.getPreviewState()) {
                        if (t.data.previewStatus) return e.setPreviewState(!0), void e.fetchPreviewPushMessage(t.data.previewStatus.messageId, t.data.previewStatus.messageType);
                        e.setPreviewState(!1), e.setFetchedMessages(t.data.popupWindows), s - i > 5e3 && e.clearUnResolvedEvents(), 
                        e.consumeUnResolvedEvents();
                    }
                },
                fail: function() {
                    e.getPreviewState() || e.clearUnResolvedEvents();
                },
                complete: function() {
                    e.getPreviewState() || (e.isRequested = !0);
                }
            });
        }
    }, {
        key: "fetchPreviewPushMessage",
        value: function(e, t) {
            var i = this, s = Date.now();
            n.info.request({
                url: o + "/" + n.vdsConfig.projectId + "/notifications/preview?url_scheme=" + n.vdsConfig.appId + "&message_id=" + e + "&msgType=" + t,
                success: function(e) {
                    var t = Date.now();
                    i.setFetchedMessages(e.data.popupWindows), t - s > 5e3 && i.clearUnResolvedEvents(), 
                    i.consumeUnResolvedEvents();
                },
                fail: function() {
                    i.clearUnResolvedEvents();
                },
                complete: function() {
                    i.isRequested = !0;
                }
            });
        }
    }, {
        key: "setFetchedMessages",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (this.fetchedMessages = e.sort(function(e, t) {
                return t.updateAt - e.updateAt;
            }));
        }
    }, {
        key: "refetchPushMessage",
        value: function() {
            var e = this;
            this.getPreviewState() || (this.isRequested = !1, this.clearFetchedMessages(), this.fetchPushMessage(), 
            this.timer = setTimeout(function() {
                e.refetchPushMessage();
            }, 18e5));
        }
    }, {
        key: "consumeUnResolvedEvents",
        value: function(e) {
            var t = this, i = function(e) {
                if ("cstm" === e.t && !e.n.startsWith("in_app_message_")) {
                    var i = t.getValidMessage(e, t.fetchedMessages);
                    i && (void 0 !== i.rule.triggerDelay ? setTimeout(function() {
                        s(i);
                    }, 1e3 * i.rule.triggerDelay) : s(i));
                }
            }, s = function(e) {
                t.renderQueue.push(e), t.dispatchMessage();
            };
            if (e) i(e); else for (;this.unResolvedEvents.length > 0 && this.fetchedMessages.length > 0; ) i(this.unResolvedEvents.shift());
        }
    }, {
        key: "consumeNextMessage",
        value: function() {
            this.isDispatching = !1, this.dispatchMessage();
        }
    }, {
        key: "dispatchMessage",
        value: function() {
            if (!this.isDispatching) {
                this.isDispatching = !0;
                var e = this.renderQueue.shift();
                this.triggerListener(e);
            }
        }
    }, {
        key: "triggerListener",
        value: function(e) {
            e && this.listener && this.listener(e);
        }
    }, {
        key: "getValidMessage",
        value: function(e, t) {
            var i = this;
            return t.filter(function(t) {
                return i.getPreviewState() ? i.validPreviewMessages(t, e) : i.validOnlineMessages(t, e);
            })[0];
        }
    }, {
        key: "validOnlineMessages",
        value: function(e, t) {
            var i = a.get("cs1");
            return this.validAbNeedShow(e, t) && this.validTimeRange(e, t) && this.validTimes(e, t, i) && this.validTriggerCd(e, t, i) && this.validUserFilter(e, t) && this.validTriggerFilter(e, t);
        }
    }, {
        key: "validPreviewMessages",
        value: function(e, t) {
            return this.validAbNeedShow(e, t) && this.validTriggerFilter(e, t);
        }
    }, {
        key: "validAbNeedShow",
        value: function(e, t) {
            var i = !(e.abTest && e.abTest.ctrlGroup);
            return console.log(e.name + " validAbNeedShow", i, t), i;
        }
    }, {
        key: "validTimeRange",
        value: function(e, t) {
            var i = Date.now(), s = i >= (e.rule.startAt || 0) && (e.rule.endAt || i + 1) > i;
            return console.log(e.name + " validTimeRange", s, t), s;
        }
    }, {
        key: "validTimes",
        value: function(e, t, i) {
            var s = this.statusStorage.get(e.id, i).showTimes, n = e.rule.limit > s;
            return console.log(e.name + " validTimes", n, t), n;
        }
    }, {
        key: "validTriggerCd",
        value: function(e, t, i) {
            var s = this.statusStorage.get(e.id, i).showDate < Date.now();
            return console.log(e.name + " validTriggerCd", s, t), s;
        }
    }, {
        key: "validUserFilter",
        value: function(e, t) {
            var i = void 0;
            if (e.rule.filters && e.rule.filters.expr && e.rule.filters.exprs && e.rule.filters.exprs.length) {
                var s = this.getUserFilterMaps(e.rule.filters.exprs), n = this.getBoolExprs(s, e.rule.filters.expr);
                i = l(n);
            } else i = !0;
            return console.log(e.name + " validUserFilter", i, t), i;
        }
    }, {
        key: "validTriggerFilter",
        value: function(e, t) {
            var i = void 0;
            if (e.rule.triggerFilter && e.rule.triggerFilter.conditionExpr && e.rule.triggerFilter.conditions && e.rule.triggerFilter.conditions.length) {
                var s = this.getTriggerFilterMaps(t, e.rule.triggerFilter.conditions), n = this.getBoolExprs(s, e.rule.triggerFilter.conditionExpr);
                i = l(n);
            } else i = !0;
            return console.log(e.name + " validTriggerFilter", i, t), i;
        }
    }, {
        key: "mergeUserAttrs",
        value: function(e) {
            var t = {};
            return e.forEach(function(e) {
                t[e.key] = e;
            }), Object.values(t);
        }
    }, {
        key: "getUserFilterMaps",
        value: function(e) {
            var t = this, i = this.mergeUserAttrs(a.getUserAttrs());
            return e.map(function(e) {
                return {
                    symbol: e.symbol,
                    result: i.some(t.validUserFilterExpression.bind(t, e)) ? "t" : "f"
                };
            });
        }
    }, {
        key: "getTriggerFilterMaps",
        value: function(e, t) {
            var i = this, s = a.getTriggerAttrs();
            return t.map(function(t) {
                var n = s.filter(function(e) {
                    return e.key === t.key;
                });
                return {
                    symbol: t.alias,
                    result: e.n === t.key && n.length && i.validTriggerFilterExpression(t, n) ? "t" : "f"
                };
            });
        }
    }, {
        key: "getBoolExprs",
        value: function(e, t) {
            return e.reduce(function(e, t) {
                return e.replace(RegExp(t.symbol, "g"), t.result);
            }, t);
        }
    }, {
        key: "validUserFilterExpression",
        value: function(e, t) {
            return t.key === e.key && this.validExpression(t.value, e);
        }
    }, {
        key: "validTriggerFilterExpression",
        value: function(e, t) {
            var i = this, s = e.dimFilters || [];
            return {
                count: function() {
                    var n = i.validDimFilters(t, s).length;
                    return i.validExpression(n, e);
                },
                sum: function() {
                    var n = e.attribute;
                    if (!n) return !1;
                    var r = 0;
                    if (s.length) {
                        var a = i.validDimFilters(t, s);
                        r = i.sumAttribute(a, n);
                    } else r = i.sumAttribute(t, n);
                    return i.validExpression(r, e);
                }
            }[e.aggregator]() || !1;
        }
    }, {
        key: "validDimFilters",
        value: function(e) {
            var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return i.length ? e.filter(function(e) {
                var s = e.event_variable || [];
                return i.every(function(e) {
                    return s.some(function(i) {
                        return t.validExpression(i.value, e);
                    });
                });
            }) : e;
        }
    }, {
        key: "sumAttribute",
        value: function(e, t) {
            var i = 0;
            return e.forEach(function(e) {
                (e.event_variable || []).forEach(function(e) {
                    e.key === t && (i += +e.value || 0);
                });
            }), i;
        }
    }, {
        key: "validExpression",
        value: function(e, t) {
            var i = t.values;
            return "date" === t.valueType && (i = i.map(this.formatDate), e = this.formatDate(e)), 
            "==" === t.op ? e == i[0] : "<" === t.op ? i[0] > e : ">" === t.op ? e > i[0] : "<=" === t.op ? i[0] >= e : ">=" === t.op ? e >= i[0] : "!=" === t.op ? e != i[0] : "between" === t.op ? i[1] >= e && e >= i[0] : "in" === t.op ? i.find(function(t) {
                return t === e;
            }) : "not in" === t.op && !i.find(function(t) {
                return t === e;
            });
        }
    }, {
        key: "formatDate",
        value: function(e) {
            var t = e.substr(0, 4), i = e.substr(4, 2), s = e.substr(6, 2);
            return new Date(t + "-" + i + "-" + s).getTime();
        }
    }, {
        key: "onTrackImp",
        value: function(e) {
            if (!this.getPreviewState()) {
                var t = a.get("cs1");
                s("track", "in_app_message_imp", {
                    in_app_message_name: e.name
                }), this.statusStorage.plusShowTimes(e.id, t, 1), this.statusStorage.plusShowDate(e.id, t, 1e3 * e.rule.triggerCd);
            }
        }
    }, {
        key: "onCloseWindow",
        value: function(e) {
            this.getPreviewState() || s("track", "in_app_message_close", {
                in_app_message_name: e.name
            }), this.consumeNextMessage();
        }
    }, {
        key: "onClickTarget",
        value: function(e) {
            if (!this.getPreviewState()) {
                var t = a.get("cs1");
                s("track", "in_app_message_cmp_click", {
                    in_app_message_name: e.name
                }), this.statusStorage.plusShowTimes(e.id, t, 5e3);
            }
            var i = e.contentMetadata.components[0].config.target["growing." + n.vdsConfig.appId];
            i && this.navigateTo(i);
        }
    }, {
        key: "navigateTo",
        value: function(e) {
            n.info.navigateTo({
                url: e,
                fail: function() {
                    n.info.switchTab({
                        url: e
                    });
                }
            });
        }
    }, {
        key: "handleCs1Refresh",
        value: function() {
            this.isInit && this.refetchPushMessage();
        }
    }, {
        key: "handleEvent",
        value: function(e) {
            if (e) switch (e.t) {
              case "cstm":
                this.fetchedMessages.length ? this.consumeUnResolvedEvents(e) : this.isRequested || this.gatherUnResolvedEvents(e);
                break;

              case "page":
                var t = gioGlobal.__growing__.marketingPreview;
                if (!t) return;
                this.setPreviewState(!0), this.fetchPreviewPushMessage(t.messageId, t.msgType);
            }
        }
    } ], [ {
        key: "getInstance",
        value: function() {
            return this.marketing || (this.marketing = new t()), this.marketing;
        }
    } ]), t;
}().getInstance();

Component({
    data: {
        message: void 0,
        visible: !1
    },
    attached: function() {
        var e = this;
        h.init(), h.addComponentListener(function(t) {
            e.setData({
                message: t,
                visible: !0
            }), h.onTrackImp(t);
        });
    },
    detached: function() {
        h.destroy(), h.removeComponentListener(), this.hideModal();
    },
    pageLifetimes: {
        show: function() {
            h.update(), r.emit("appOpen", {
                t: "cstm",
                n: "appOpen"
            });
        },
        hide: function() {
            h.disabled(), this.hideModal();
        }
    },
    methods: {
        onClickTarget: function() {
            this.hideModal(), h.onClickTarget(this.data.message);
        },
        onImageLoad: function() {},
        onImageError: function() {
            this.hideModal(), h.consumeNextMessage();
        },
        handleClose: function() {
            this.hideModal(), h.onCloseWindow(this.data.message);
        },
        handleTouchMove: function() {},
        hideModal: function() {
            this.setData({
                visible: !1
            });
        }
    }
});