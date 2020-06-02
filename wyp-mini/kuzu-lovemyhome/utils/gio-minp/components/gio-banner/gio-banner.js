function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, t = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}();

if (!gioGlobal.__growing__) throw "未加载 gio SDK";

var r = gioGlobal.__growing__.gio, a = gioGlobal.__growing__.growingio, i = gioGlobal.__growing__.gioEmitter, s = gioGlobal.__growing__.userStorage;

if (!a.info) throw "gio SDK 未初始化";

var o = {
    namespace: "gio-banner",
    key: function(e, n) {
        return "#" + this.namespace + "#" + e + "#" + (n || "");
    },
    get: function(e, n) {
        var t = a.info.getStorageSync(this.key(e, n));
        return t ? JSON.parse(t) : void 0;
    },
    set: function(e, n, t) {
        return a.info.setStorageSync(this.key(e, n), t);
    }
}, l = {
    id: "",
    content: "",
    name: "",
    rule: {
        target: ""
    }
}, u = function() {
    function u() {
        e(this, u), console.log("gio-banner 代码已引入，请继续使用<gio-banner />的方式引入组件"), this.isInit = !1, 
        this.bannerShowMap = {}, this.timer = null, this.listener = null, this.bannerKey = null, 
        this.placeholderDrawable = null, this.errorReplaceDrawable = null, this.handleCs1Refresh = this.handleCs1Refresh.bind(this), 
        this.addGlobalEventListener();
    }
    return t(u, [ {
        key: "init",
        value: function() {
            this.destroy(), console.log("gio-banner 集成成功，初始化中…"), this.isInit = !0;
        }
    }, {
        key: "update",
        value: function(e) {
            this.bannerKey = e.bannerKey, this.placeholderDrawable = e.placeholderDrawable, 
            this.errorReplaceDrawable = e.errorReplaceDrawable, this.refetchPushMessage();
        }
    }, {
        key: "disabled",
        value: function() {
            this.resetState();
        }
    }, {
        key: "destroy",
        value: function() {
            this.disabled(), this.isInit = !1;
        }
    }, {
        key: "resetState",
        value: function() {
            this.timer = null, this.bannerKey = null, this.placeholderDrawable = null, this.errorReplaceDrawable = null;
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
        key: "addGlobalEventListener",
        value: function() {
            i.on("cs1Refresh", this.handleCs1Refresh);
        }
    }, {
        key: "triggerListener",
        value: function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            e && this.listener && this.listener(e, n);
        }
    }, {
        key: "formatUrl",
        value: function() {
            var e = s.get("bu"), n = s.get("bcs"), t = a.info.uid, i = r("getUserId"), o = "https://messages.growingio.com/v3/" + a.vdsConfig.projectId + "/notifications?url_scheme=" + a.vdsConfig.appId;
            return o += e ? "&bu=" + e : t ? "&u=" + t : "", o += n ? "&bcs=" + n : i ? "&cs=" + i : "";
        }
    }, {
        key: "fetchPushMessage",
        value: function(e) {
            var n = this, t = this.formatUrl();
            return new Promise(function(r, i) {
                if (!e || "string" != typeof e) return i("请设置正确的bannerKey后重试！");
                a.info.request({
                    url: t,
                    success: function(t) {
                        n.updateUserStorage(t);
                        var a = n.formatResponse(t, e);
                        r(a);
                    },
                    fail: function(e) {
                        i(e);
                    }
                });
            });
        }
    }, {
        key: "updateUserStorage",
        value: function(e) {
            e && e.data && e.data.idMappings && (s.set("bcs", e.data.idMappings.bcs), s.set("bu", e.data.idMappings.bu));
        }
    }, {
        key: "formatResponse",
        value: function(e, n) {
            if (!(e && e.data && e.data.banners && e.data.banners.length)) return {
                name: "",
                key: "",
                messages: []
            };
            var t = e.data.banners.find(function(e) {
                return e.key === n;
            }) || {}, r = (t.messages || []).filter(this.validTimeRange).sort(this.sortMessages);
            return {
                name: t.name || "",
                key: t.key || "",
                messages: this.filterSameIndex(r)
            };
        }
    }, {
        key: "validTimeRange",
        value: function(e) {
            var n = Date.now();
            return n >= (e.rule.startAt || 0) && (e.rule.endAt || n + 1) > n;
        }
    }, {
        key: "sortMessages",
        value: function(e, n) {
            return e.index !== n.index ? e.index - n.index : e.priority !== n.priority ? n.priority - e.priority : n.updateAt - e.updateAt;
        }
    }, {
        key: "filterSameIndex",
        value: function(e) {
            var n = [];
            return e.forEach(function(e) {
                n.find(function(n) {
                    return n.index === e.index;
                }) || n.push(e);
            }), n;
        }
    }, {
        key: "refetchPushMessage",
        value: function() {
            var e = this;
            this.renderStoreMessages("default"), this.fetchPushMessage(this.bannerKey).then(function(n) {
                var t = n.messages;
                t.length && (e.updateStoreMessages(t), e.triggerListener(t));
            }).catch(function(n) {
                console.log("banner数据请求失败：", n), e.renderStoreMessages("error");
            }), this.timer = setTimeout(function() {
                e.refetchPushMessage();
            }, 18e5);
        }
    }, {
        key: "updateStoreMessages",
        value: function(e) {
            var n = r("getUserId");
            o.set(this.bannerKey, n, e);
        }
    }, {
        key: "renderStoreMessages",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default", n = s.get("cs1"), t = o.get(this.bannerKey, n) || [], r = {
                error: this.renderErrorMessages,
                default: this.renderDefaultMessages
            };
            t.length ? this.triggerListener(t) : r[e].call(this);
        }
    }, {
        key: "renderDefaultMessages",
        value: function() {
            this.placeholderDrawable ? this.triggerListener([ n({}, l, {
                id: "default",
                name: "default",
                content: this.placeholderDrawable
            }) ]) : this.triggerListener([], !1);
        }
    }, {
        key: "renderErrorMessages",
        value: function() {
            this.errorReplaceDrawable ? this.triggerListener([ n({}, l, {
                id: "default",
                name: "default",
                content: this.errorReplaceDrawable
            }) ]) : this.triggerListener([], !1);
        }
    }, {
        key: "signBannerShow",
        value: function(e) {
            e && "default" !== e.id && !this.bannerShowMap[e.id] && (this.bannerShowMap[e.id] = !0, 
            this.onTrackImp(e, this.bannerKey));
        }
    }, {
        key: "onTrackImp",
        value: function(e, n) {
            r("track", "in_app_message_imp", this.gatherTrackParams(e, n));
        }
    }, {
        key: "gatherTrackParams",
        value: function(e, n) {
            return {
                in_app_message_name: e.name,
                gio_message_type: "banner",
                gio_message_id: e.id,
                gio_message_index: e.index,
                gio_campaign_key: n
            };
        }
    }, {
        key: "onClickTarget",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bannerKey;
            if ("default" !== e.id) {
                r("track", "in_app_message_cmp_click", this.gatherTrackParams(e, n));
                var t = e.rule.target;
                t && this.navigateTo(t);
            }
        }
    }, {
        key: "navigateTo",
        value: function(e) {
            a.info.navigateTo({
                url: e,
                fail: function() {
                    a.info.switchTab({
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
    } ], [ {
        key: "getInstance",
        value: function() {
            return this.gioBanner || (this.gioBanner = new u()), this.gioBanner;
        }
    } ]), u;
}().getInstance();

gioGlobal.getBannerMessages = function(e) {
    return u.fetchPushMessage(e).then(function(t) {
        return n({}, t, {
            messages: t.messages.map(function(n) {
                return {
                    id: n.id,
                    index: n.index,
                    name: n.name || "",
                    imageUrl: n.content || "",
                    summary: n.summary || "",
                    onShow: function() {
                        u.onTrackImp(n, e);
                    },
                    onClick: function() {
                        u.onClickTarget(n, e);
                    }
                };
            })
        });
    });
}, Component({
    properties: {
        bannerKey: String,
        indicatorDots: Boolean,
        indicatorColor: String,
        indicatorActiveColor: String,
        autoplay: Boolean,
        interval: Number,
        duration: Number,
        circular: Boolean,
        vertical: Boolean,
        previousMargin: String,
        nextMargin: String,
        easingFunction: String,
        placeholderDrawable: String,
        errorReplaceDrawable: String
    },
    data: {
        bannerMessages: void 0,
        visible: !0
    },
    attached: function() {
        var e = this;
        u.init(), u.addComponentListener(function(n, t) {
            e.setData({
                bannerMessages: n,
                visible: t
            });
        });
    },
    detached: function() {
        u.destroy(), u.removeComponentListener();
    },
    pageLifetimes: {
        show: function() {
            u.update({
                bannerKey: this.properties.bannerKey,
                placeholderDrawable: this.properties.placeholderDrawable,
                errorReplaceDrawable: this.properties.errorReplaceDrawable
            });
        },
        hide: function() {
            u.disabled();
        }
    },
    methods: {
        onClickTarget: function(e) {
            u.onClickTarget(e.target.dataset.message);
        },
        onSwiperChange: function(e) {
            var n = e.detail.current, t = this.data.bannerMessages.find(function(e, t) {
                return t === n;
            });
            u.signBannerShow(t);
        },
        onImageLoaded: function(e) {
            0 === e.target.dataset.current && u.signBannerShow(e.target.dataset.message);
        },
        onImageError: function(e) {
            var n = e.target.dataset.message.id, t = this.data.bannerMessages.filter(function(e) {
                return e.id !== n;
            });
            t.length ? this.setData({
                bannerMessages: t
            }) : u.renderErrorMessages();
        }
    }
});