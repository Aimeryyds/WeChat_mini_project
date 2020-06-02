function e(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function t(e, t) {
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

function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    var s;
    return function() {
        var n = this, i = [].slice.call(arguments);
        clearTimeout(s), s = setTimeout(function() {
            e.apply(n, i);
        }, t);
    };
}

var i = function() {
    function e(e, t) {
        for (var s = 0; s < t.length; s++) {
            var n = t[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, s, n) {
        return s && e(t.prototype, s), n && e(t, n), t;
    };
}(), a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = require("../../index"), r = function(e) {
    return e && "object" == (void 0 === e ? "undefined" : a(e)) && "default" in e ? e.default : e;
}(o), u = !1;

!o.growingio.marketingHost && (o.growingio.marketingHost = "https://messages.growingio.com");

var h = function() {
    function e(t) {
        s(this, e), this.namespace = t;
    }
    return i(e, [ {
        key: "key",
        value: function(e) {
            return "#" + this.namespace + "#" + e;
        }
    }, {
        key: "get",
        value: function(e) {
            return JSON.parse(wx.getStorageSync(this.key(e)));
        }
    }, {
        key: "set",
        value: function(e, t) {
            wx.setStorageSync(this.key(e), JSON.stringify(t));
        }
    } ]), e;
}(), c = function(n) {
    function a() {
        return s(this, a), e(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
    }
    return t(a, h), i(a, [ {
        key: "get",
        value: function(e) {
            var t = wx.getStorageSync(this.key(e));
            return t ? JSON.parse(t) : (this.set(e, {
                showTimes: 0
            }), this.get(e));
        }
    }, {
        key: "plus",
        value: function(e, t) {
            var s = this.get(e);
            s.showTimes = s.showTimes + t, this.set(e, s);
        }
    } ]), a;
}(), l = function() {
    function e() {
        s(this, e), console.log("Marketing 启动."), this.statusStorage = new c("push-status"), 
        this.cs1 = r("getUserId"), this.bu = null, this.bcs = null, this.timer = null, this.isCreatedInstance = !1, 
        this.fetchedMessages = [], this.hasConsumeEvent = !1, this.setCs1 = this.setCs1.bind(this), 
        this.handleEvent = this.handleEvent.bind(this), this.initSeveralState(), this.startFetchPushMessageFromRemote = n(this.startFetchPushMessageFromRemote, 50);
    }
    return i(e, [ {
        key: "clear",
        value: function() {
            this.fetchedMessages = [];
        }
    }, {
        key: "run",
        value: function() {
            this.isCreatedInstance || (this.isCreatedInstance = !0, this.startFetchPushMessageFromRemote(), 
            o.gioEmitter.on("appShow", function() {
                u = !1;
            }), o.gioEmitter.on("setCs1", this.setCs1)), this.isRunning || (this.isRunning = !0, 
            o.gioEmitter.addListener("appOpen", this.handleEvent), o.gioEmitter.addListener("upload", this.handleEvent));
        }
    }, {
        key: "stop",
        value: function() {
            o.gioEmitter.removeListener("upload", this.handleEvent), o.gioEmitter.removeListener("appOpen", this.handleEvent), 
            this.initSeveralState();
        }
    }, {
        key: "initSeveralState",
        value: function() {
            this.listener = null, this.messageNeedToRender = [], this.unResolvedEvents = [], 
            this.isRunning = !1;
        }
    }, {
        key: "fetchPushMessageFromRemote",
        value: function() {
            var e = this, t = o.growingio.marketingHost + "/v1/" + o.growingio.projectId + "/notifications?url_scheme=" + o.growingio.appId;
            t += this.bu ? "&bu=" + this.bu : "&u=" + o.growingio.weixin.uid, this.cs1 && (t += this.bcs ? "&bcs=" + this.bcs : "&cs=" + this.cs1);
            var s = new Date().valueOf();
            wx.request({
                url: t,
                success: function(t) {
                    var n = new Date().valueOf();
                    e.bcs = t.data.idMappings.bcs, e.bu = t.data.idMappings.bu, e.fetchedMessages = e.refreshPushMessageFrmRemote(t.data.popupWindows), 
                    e.hasConsumeEvent || (n - s > 5e3 && (e.unResolvedEvents = []), e.hasConsumeEvent = !0, 
                    e.handleEvent());
                }
            });
        }
    }, {
        key: "startFetchPushMessageFromRemote",
        value: function() {
            var e = this;
            this.fetchedMessages = [], this.hasConsumeEvent = !1, this.fetchPushMessageFromRemote(), 
            clearInterval(this.timer), this.timer = setInterval(function() {
                e.fetchPushMessageFromRemote();
            }, 18e5);
        }
    }, {
        key: "refreshPushMessageFrmRemote",
        value: function(e) {
            return e.sort(function(e, t) {
                return t.updateAt > e.updateAt ? 1 : -1;
            });
        }
    }, {
        key: "getValidMessages",
        value: function(e) {
            var t = this;
            return this.fetchedMessages.filter(function(s) {
                return t.validActionType(s, e);
            }).filter(function(e) {
                return t.validTimeRange(e);
            }).filter(function(e) {
                return t.validateTimes(e);
            });
        }
    }, {
        key: "validActionType",
        value: function(e, t) {
            return t.n === e.rule.action;
        }
    }, {
        key: "validTimeRange",
        value: function(e) {
            var t = new Date().valueOf();
            return t >= (e.rule.startAt || 0) && (e.rule.endAt || t + 1) > t;
        }
    }, {
        key: "validateTimes",
        value: function(e) {
            var t = this.statusStorage.get(e.id).showTimes;
            return e.rule.limit > t;
        }
    }, {
        key: "onTrackImp",
        value: function(e) {
            r("track", "in_app_message_imp", {
                in_app_message_name: e.name
            }), this.statusStorage.plus(e.id, 1);
        }
    }, {
        key: "onCloseWindow",
        value: function(e) {
            r("track", "in_app_message_close", {
                in_app_message_name: e.name
            });
        }
    }, {
        key: "onClickTarget",
        value: function(e) {
            r("track", "in_app_message_cmp_click", {
                in_app_message_name: e.name
            }), this.statusStorage.plus(e.id, 1e3);
            var t = e.contentMetadata.components[0].config.target["growing." + o.growingio.appId];
            t && this.navigateTo(t);
        }
    }, {
        key: "navigateTo",
        value: function(e) {
            wx.navigateTo({
                url: e,
                fail: function() {
                    wx.switchTab({
                        url: e
                    });
                }
            });
        }
    }, {
        key: "handleEvent",
        value: function(e) {
            if (e && "cstm" === e.t && this.unResolvedEvents.push(e), this.hasConsumeEvent) for (;this.unResolvedEvents.length > 0; ) "cstm" === (e = this.unResolvedEvents.shift()).t && this.fetchedMessages.length > 0 && !e.n.startsWith("in_app_message_") && (this.messageNeedToRender = this.messageNeedToRender.concat(this.getValidMessages(e)), 
            this.dispatchMessage());
        }
    }, {
        key: "registerOnceMessageListener",
        value: function(e) {
            this.listener = e, this.dispatchMessage();
        }
    }, {
        key: "dispatchMessage",
        value: function() {
            if (this.messageNeedToRender.length > 0 && this.listener) {
                var e = this.messageNeedToRender.shift();
                this.validateTimes(e) ? (this.listener(e), this.listener = void 0) : this.dispatchMessage();
            }
        }
    }, {
        key: "setCs1",
        value: function(e) {
            this.cs1 = e, this.startFetchPushMessageFromRemote();
        }
    } ], [ {
        key: "getInstance",
        value: function() {
            return this.marketing || (this.marketing = new e()), this.marketing;
        }
    } ]), e;
}().getInstance();

Component({
    data: {
        message: void 0,
        visible: !1
    },
    pageLifetimes: {
        hide: function() {
            this.close();
        },
        show: function() {
            l.run(), this.registerListener(), u || (o.gioEmitter.emit("appOpen", {
                t: "cstm",
                n: "appOpen"
            }), u = !0);
        }
    },
    methods: {
        onClickTarget: function() {
            l.onClickTarget(this.data.message), this.hideModal(), this.registerListener();
        },
        handleClose: function() {
            l.onCloseWindow(this.data.message), this.hideModal(), this.registerListener();
        },
        registerListener: function() {
            var e = this;
            l.registerOnceMessageListener(function(t) {
                e.setData({
                    message: t,
                    visible: !0
                });
            });
        },
        hideModal: function() {
            this.setData({
                visible: !1
            });
        },
        close: function() {
            l.stop(), this.hideModal();
        }
    },
    observers: {
        "visible, message": function(e, t) {
            e && l.onTrackImp(t);
        }
    },
    attached: function() {
        l.run(), this.registerListener();
    },
    detached: function() {
        this.close();
    }
});