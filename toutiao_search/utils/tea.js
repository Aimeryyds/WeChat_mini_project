var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _assign = function __assign() {
    return (_assign = Object.assign || function(e) {
        for (var n, r = 1, t = arguments.length; r < t; r++) {
            n = arguments[r];
            for (var s in n) {
                Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
            }
        }
        return e;
    }).apply(this, arguments);
}, TEA_CACHE_PREFIX = "__tea_cache_", REPORT_PREFIX = "https://mcs.snssdk.com", StorageCache = function() {
    function e() {
        this.get = function(e) {
            var n = "";
            try {
                var r = wx.getStorageSync(e);
                r && (n = r = JSON.parse(r));
            } catch (e) {
                console.error(e.message);
            }
            return n;
        }, this.set = function(e, n) {
            try {
                wx.setStorageSync(e, n);
            } catch (e) {
                console.error(e);
            }
        };
    }
    return e;
}(), StorageManager = new StorageCache(), prefix = "tea-sdk:", Logger = function() {
    function e() {
        var e = this;
        this.init = function(n) {
            e.isLog = n;
        }, this.info = function() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                n[r] = arguments[r];
            }
            e.isLog && console.log.apply(console, [ prefix ].concat(n));
        }, this.error = function() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                n[r] = arguments[r];
            }
            e.isLog && (console.log(" "), console.error.apply(console, [ prefix ].concat(n)), 
            console.log(" "));
        }, this.warn = function() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                n[r] = arguments[r];
            }
            e.isLog && console.warn.apply(console, [ prefix ].concat(n));
        }, this.isLog = false;
    }
    return e;
}(), logger = new Logger(), undef = undefined, Env = function() {
    function e() {
        var e = this;
        this.initDeviceInfo = function() {
            var n = e;
            wx && wx.getSystemInfo && wx.getSystemInfo({
                success: function success(e) {
                    n.set("brand", e.brand), n.set("device_model", e.model), n.set("pixelRatio", e.pixelRatio), 
                    n.set("resolution", e.screenWidth + "x" + e.screenHeight), n.set("screen_width", e.screenWidth), 
                    n.set("screen_height", e.screenHeight), n.set("windowWidth", e.windowWidth), n.set("windowHeight", e.windowHeight), 
                    n.set("statusBarHeight", e.statusBarHeight), n.set("language", e.language), n.set("wx_version", e.version), 
                    n.set("os_version", e.system), n.set("os_name", e.platform), n.set("fontSizeSetting", e.fontSizeSetting), 
                    n.set("SDKVersion", e.SDKVersion), n.set("platform", "miniProduct");
                }
            }), wx && wx.getNetworkType && wx.getNetworkType({
                success: function success(e) {
                    n.set("networkType", e.networkType);
                }
            });
        }, this.checkUserToken = function(n) {
            e.appId = n;
            var r = "__tea_cache_tokens_" + n;
            e.tokensKey = r;
            var t = StorageManager.get(r);
            return t && t.user_unique_id && t.web_id && t.ssid ? (e.envInfo.user.user_unique_id = t.user_unique_id, 
            e.envInfo.user.web_id = t.web_id, e.envInfo.user.ssid = t.ssid, console.warn("初始化已经检测到了 webid ssid user_id，一般情况下不需要再次验证 id 了"), 
            e.unlock(), false) : e.requestWebId(n);
        }, this.requestWebId = function(n) {
            e.isRequestWebId = true, wx.request({
                url: "https://mcs.snssdk.com/v1/user/webid",
                method: "POST",
                data: {
                    app_id: n,
                    url: "location.href",
                    user_agent: "navigator.userAgent",
                    referer: "referer",
                    user_unique_id: ""
                },
                dataType: "json",
                header: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                success: function success(n) {
                    var r = n.data;
                    if (0 !== r.e) console.error("请求 webid 失败~"); else {
                        e.isRequestWebId = false, e.envInfo.user.ssid = r.ssid, e.envInfo.user.web_id = r.web_id, 
                        e.envInfo.user.user_unique_id = r.web_id;
                        var t = {
                            web_id: r.web_id,
                            ssid: r.ssid,
                            user_unique_id: r.web_id
                        };
                        StorageManager.set(e.tokensKey, JSON.stringify(t)), e.waitForVerifyTokens ? (e.lock(), 
                        e.verifyTokens(e.realUuid)) : (e.unlock(), e.callback && e.callback());
                    }
                },
                fail: function fail() {
                    e.isRequestWebId = false, console.error("获取 webid 失败，数据将不会被上报");
                }
            });
        }, this.verifyTokens = function(n) {
            var r = e.tokensKey;
            if (e.waitForVerifyTokens = false, e.realUuid = "" + n, e.isRequestWebId) return e.waitForVerifyTokens = true, 
            console.warn("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用"), false;
            var t = StorageManager.get(r);
            if (t.user_unique_id === e.realUuid && t.ssid && t.web_id) console.warn("用户身份验证完毕：", JSON.stringify(t, null, 2)), 
            console.warn("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求"), e.unlock(); else {
                e.lock(), e.envInfo.user.user_unique_id = e.realUuid;
                var s = _assign({}, StorageManager.get(r), {
                    user_unique_id: e.realUuid
                });
                StorageManager.set(r, JSON.stringify(s)), e.requestSsid();
            }
        }, this.requestSsid = function() {
            var n = e.tokensKey, r = StorageManager.get(n);
            wx.request({
                url: "https://mcs.snssdk.com/v1/user/ssid",
                method: "POST",
                data: {
                    app_id: e.appId,
                    web_id: r.web_id,
                    user_unique_id: "" + r.user_unique_id
                },
                success: function success(t) {
                    e.unlock();
                    var s = t.data;
                    if (0 !== s.e) console.error("请求 ssid 失败~"); else {
                        e.envInfo.user.ssid = s.ssid;
                        var i = _assign({}, r, {
                            ssid: s.ssid
                        });
                        StorageManager.set(n, JSON.stringify(i)), console.warn("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去"), 
                        e.callback && e.callback();
                    }
                },
                fail: function fail() {
                    e.unlock(), logger.error("根据 user_unique_id 获取新 ssid 失败");
                }
            });
        }, this.set = function(n, r) {
            "os_version" === n && (r += ""), "app_id" === n && e.checkUserToken(r), "user_unique_id" === n && e.verifyTokens(r), 
            e.envInfo.user.hasOwnProperty(n) ? "user_type" === n ? (r = Number(r), e.envInfo.user[n] = Number(r)) : "user_id" === n ? (e.envInfo.user[n] = String(r), 
            e.envInfo.user.user_unique_id = String(r)) : e.envInfo.user[n] = String(r) : e.envInfo.header.hasOwnProperty(n) ? e.envInfo.header[n] = r : e.envInfo.header.headers.hasOwnProperty(n) ? e.envInfo.header.headers[n] = r : e.envInfo.header.headers.custom[n] = r;
        }, this.get = function() {
            for (var n = {
                user: {},
                header: {
                    headers: {
                        custom: {}
                    }
                }
            }, r = e.envInfo, t = r.user, s = 0, i = Object.keys(t); s < i.length; s++) {
                t[_ = i[s]] !== undef && (n.user[_] = t[_]);
            }
            for (var o = r.header, a = 0, u = Object.keys(o); a < u.length; a++) {
                o[_ = u[a]] !== undef && "headers" !== _ && (n.header[_] = o[_]);
            }
            for (var c = r.header.headers, d = 0, f = Object.keys(c); d < f.length; d++) {
                "custom" !== (_ = f[d]) && c[_] !== undef && (n.header.headers[_] = c[_]);
            }
            var g = r.header.headers.custom, h = Object.keys(g);
            if (h.length) for (var l = 0, v = h; l < v.length; l++) {
                var _ = v[l];
                n.header.headers.custom[_] = g[_];
            } else delete n.header.headers.custom;
            return {
                user: n.user,
                header: _assign({}, n.header, {
                    headers: JSON.stringify(n.header.headers)
                })
            };
        }, this.envInfo = {
            user: {
                user_id: undef,
                web_id: undef,
                user_unique_id: undef,
                ssid: undef,
                user_type: undef
            },
            header: {
                app_id: undef,
                app_name: undef,
                os_name: undef,
                os_version: undef,
                device_model: undef,
                ab_client: undef,
                ab_version: undef,
                traffic_type: undef,
                utm_source: undef,
                utm_medium: undef,
                utm_campaign: undef,
                headers: {
                    platform: undef,
                    sdk_version: undef,
                    browser: undef,
                    browser_version: undef,
                    region: undef,
                    province: undef,
                    city: undef,
                    language: undef,
                    timezone: undef,
                    tz_offset: undef,
                    resolution: undef,
                    screen_height: undef,
                    screen_width: undef,
                    referrer: undef,
                    referrer_host: undef,
                    custom: {}
                }
            }
        }, this.initDeviceInfo(), this.isRequestWebId = false, this.waitForVerifyTokens = false, 
        this.realUuid = "";
    }
    return e.prototype.lock = function() {
        this.isUserTokensReady = false;
    }, e.prototype.unlock = function() {
        this.isUserTokensReady = true;
    }, e;
}(), env = new Env(), MemoryCache = function() {
    function e() {
        var e = this;
        this.set = function(n, r) {
            e.cache[n] = r;
        }, this.get = function(n) {
            var r = [], t = e.cache[n];
            if (t) for (var s = 0, i = t; s < i.length; s++) {
                var o = i[s];
                r.push(o);
            } else r = [];
            return r;
        }, this.clean = function(n) {
            e.cache[n] = undefined;
        }, this.cache = {};
    }
    return e;
}(), mCacheManager = new MemoryCache(), postData = function postData(e, n, r) {
    var t = +new Date() + Math.floor(1e5 * Math.random());
    wx.request({
        url: "https://mcs.snssdk.com/v1/list?tea_sdk_random=" + t,
        data: e,
        method: "POST",
        dataType: "json",
        header: {
            "Content-Type": "text/plain"
        },
        success: function success(t) {
            var s = t && t.data;
            "string" == typeof s ? (logger.error("数据上报失败"), r()) : (0 === s.e ? logger.warn("数据上报成功: ", e) : (logger.error("数据上报失败！", "错误码：" + s.e), 
            logger.error("为了避免后续上报数据被阻塞，sdk 将不再重试上报本数据，数据实体将会从 localstorage 清除")), n());
        },
        fail: function fail() {
            logger.error("数据上报失败"), r();
        }
    });
}, Channel = function() {
    function e() {
        var e = this;
        this.setReady = function(n) {
            e.isReady = n, e.report();
        }, this.setEvtParams = function(n) {
            e.evtParams = _assign({}, e.evtParams, n);
        }, this.event = function(n) {
            var r = e.cacheKey, t = mCacheManager.get(r) || [];
            t.push(n), mCacheManager.set(r, t), t.length >= 5 ? e.report() : setTimeout(function() {
                e.report();
            }, 45);
        }, this.report = function() {
            if (!e.isReady) return false;
            if (!env.isUserTokensReady) return false;
            var n = e.cacheKey, r = mCacheManager.get(n);
            mCacheManager.clean(n);
            var t = e.mergeEvts(r), s = StorageManager.get(n) || [], i = t.concat(s);
            if (!i.length) return false;
            if (e.setSCcacheData(i), e.isReporting) return false;
            var o = i.length;
            if (!o) return false;
            var a = 0, u = null;
            o <= e.sliceLength ? (a = o, u = i) : (a = e.sliceLength, u = i.slice(o - e.sliceLength)), 
            e.sendData(u, a);
        }, this.sendData = function(n, r) {
            e.isReporting = true;
            var t = e.cacheKey;
            postData(n, function() {
                e.isReporting = false;
                var n = StorageManager.get(t), s = n.length, i = n.slice(0, s - r);
                StorageManager.set(t, JSON.stringify(i)), e.report();
            }, function() {
                e.isReporting = false, setTimeout(function() {
                    e.report();
                }, 3e3);
            });
        }, this.setSCcacheData = function(n) {
            StorageManager.set(e.cacheKey, JSON.stringify(n));
        }, this.mergeEvts = function(n) {
            if (!n.length) return [];
            for (var r = {
                events: [],
                user: {},
                header: {}
            }, t = e.evtParams, s = Object.keys(t), i = 0, o = n; i < o.length; i++) {
                for (var a = o[i], u = 0, c = s; u < c.length; u++) {
                    var d = c[u];
                    undefined === a.params[d] && (a.params[d] = t[d]);
                }
                var f = JSON.stringify(a.params);
                a.params = f;
            }
            r.events = n;
            var g = env.get();
            return r.events = n, r.user = g.user, r.header = g.header, [ r ];
        }, this.isReady = false, this.isReporting = false, this.sliceLength = 10, this.cacheKey = "__tea_cache_events", 
        this.evtParams = {};
    }
    return e;
}(), _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
    return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};

if (!wx) throw new Error("本 sdk 的运行环境只能是微信小程序！");

var MiniProduct = function() {
    function e() {
        var e = this;
        this.getConfig = function() {
            return env.get();
        }, this.init = function(e) {
            if ("number" != typeof e) throw new Error("app_id must be a number");
            env.set("app_id", e);
        }, this.config = function(n) {
            if (e.channel.setReady(false), "object" !== (undefined === n ? "undefined" : _typeof(n))) throw new Error("config param must be {}");
            n.log && (logger.init(Boolean(n.log)), logger.info("logger 功能开启")), logger.info("当前配置项：", JSON.stringify(n, null, 2));
            var r = Object.keys(n);
            if (!r.length) return false;
            for (var t = 0, s = r; t < s.length; t++) {
                var i = s[t], o = n[i];
                "evtParams" === i ? e.channel.setEvtParams(o) : "_staging_flag" === i ? (o + "" == "1" && logger.warn("根据_staging_flag设置，数据将会上报到stag 表。"), 
                e.channel.setEvtParams({
                    _staging_flag: o
                })) : env.set(i, o);
            }
        }, this.send = function() {
            env.isUserTokensReady ? (logger.warn("看到本提示，意味着用户信息已完全就绪，上报通道打开"), logger.info("用户信息", JSON.stringify(env.get().user, null, 2)), 
            e.channel.setReady(true)) : e.callbackSend = true;
        }, this.event = function(n, r) {
            r || (r = {}), "object" !== (undefined === r ? "undefined" : _typeof(r)) && logger.error("事件params 必须是{}:", "event(event: string, params: object)");
            var t = {
                event: n,
                params: r,
                local_time_ms: +new Date()
            };
            e.channel.event(t);
        }, this.callbackSend = false, this.channel = new Channel(), this.reportUrl = "https://mcs.snssdk.com", 
        env.callback = function() {
            e.callbackSend && e.send();
        };
    }
    return e;
}(), index = new MiniProduct();

module.exports = index;