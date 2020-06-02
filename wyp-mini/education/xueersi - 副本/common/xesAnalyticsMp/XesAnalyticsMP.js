var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == (void 0 === e ? "undefined" : _typeof(e)) && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) t.d(o, r, function(t) {
            return e[t];
        }.bind(null, r));
        return o;
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/dist/", t(t.s = 3);
}([ function(e, t, n) {
    var o = n(4), r = Array.prototype.forEach, i = Object.prototype, a = Array.prototype.slice, s = i.toString, u = i.hasOwnProperty, c = {}, p = function(e, t, n) {
        if (null == e) return !1;
        if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
            for (var o = 0, i = e.length; o < i; o++) if (o in e && t.call(n, e[o], o, e) === c) return !1;
        } else for (var a in e) if (u.call(e, a) && t.call(n, e[a], a, e) === c) return !1;
    }, d = function(e) {
        return null != e && "[object Object]" == s.call(e);
    }, f = function(e) {
        return p(a.call(arguments, 1), function(t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        }), e;
    };
    e.exports = {
        each: p,
        extend: f,
        extend2Lev: function(e) {
            return p(a.call(arguments, 1), function(t) {
                for (var n in t) void 0 !== t[n] && (d(t[n]) && d(e[n]) ? f(e[n], t[n]) : e[n] = t[n]);
            }), e;
        },
        coverExtend: function(e) {
            return p(a.call(arguments, 1), function(t) {
                for (var n in t) void 0 !== t[n] && void 0 === e[n] && (e[n] = t[n]);
            }), e;
        },
        encryption: function(e, t, n) {
            if (e && t && n) return o.hex_md5("" + e + t + n + "p1@PeFz4ZX");
            console.error("加密参数错误");
        },
        isObject: d,
        isFunction: function(e) {
            try {
                return /^\s*\bfunction\b/.test(e);
            } catch (e) {
                return !1;
            }
        },
        mp_proxy: function(e, t, n, o) {
            var r = o.autoTrack[n];
            if (e[t]) {
                var i = e[t];
                e[t] = function() {
                    "onLaunch" === t && (this.XesAnalyticsMP = o), i.apply(this, arguments), r.apply(this, arguments);
                };
            } else e[t] = function() {
                "onLaunch" === t && (this.XesAnalyticsMP = o), r.apply(this, arguments);
            };
        }
    };
}, function(e, t, n) {
    var o = n(0), r = o.isObject, i = o.isFunction, a = {
        retryCount: 1,
        getInfo: function(e, t) {
            return t = t || 0, new Promise(function(n) {
                var o = a.retryCount;
                t++, e({
                    success: function(e) {
                        n(e);
                    },
                    fail: function(r) {
                        if (t > o) return n({});
                        a.getInfo(e, t);
                    },
                    complete: function(e) {}
                });
            });
        },
        getSystemInfo: function() {
            return a.getInfo(wx.getSystemInfo);
        },
        getNetType: function() {
            return a.getInfo(wx.getNetworkType);
        },
        getWifiInfo: function() {
            var e = 0, t = a.retryCount;
            return new Promise(function(n) {
                !function o() {
                    e++, wx.startWifi({
                        complete: function(r) {
                            wx.getConnectedWifi({
                                success: function(e) {
                                    n(e.wifi);
                                },
                                fail: function(r) {
                                    if (e > t) return n({});
                                    o();
                                }
                            });
                        }
                    });
                }();
            });
        },
        getFromId: function(e) {
            return {
                1000: "其他",
                1001: "发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）",
                1005: "顶部搜索框的搜索结果页",
                1006: "发现栏小程序主入口搜索框的搜索结果页",
                1007: "单人聊天会话中的小程序消息卡片",
                1008: "群聊会话中的小程序消息卡片",
                1011: "扫描二维码",
                1012: "长按图片识别二维码",
                1013: "手机相册选取二维码",
                1014: "小程序模版消息",
                1017: "前往体验版的入口页",
                1019: "微信钱包",
                1020: "公众号 profile 页相关小程序列表",
                1022: "聊天顶部置顶小程序入口",
                1023: "安卓系统桌面图标",
                1024: "小程序 profile 页",
                1025: "扫描一维码",
                1026: "附近小程序列表",
                1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
                1028: "我的卡包",
                1029: "卡券详情页",
                1030: "自动化测试下打开小程序",
                1031: "长按图片识别一维码",
                1032: "手机相册选取一维码",
                1034: "微信支付完成页",
                1035: "公众号自定义菜单",
                1036: "App 分享消息卡片",
                1037: "小程序打开小程序",
                1038: "从另一个小程序返回",
                1039: "摇电视",
                1042: "添加好友搜索框的搜索结果页",
                1043: "公众号模板消息",
                1044: "带 shareTicket 的小程序消息卡片（详情)",
                1045: "朋友圈广告",
                1046: "朋友圈广告详情页",
                1047: "扫描小程序码",
                1048: "长按图片识别小程序码",
                1049: "手机相册选取小程序码",
                1052: "卡券的适用门店列表",
                1053: "搜一搜的结果页",
                1054: "顶部搜索框小程序快捷入口",
                1056: "音乐播放器菜单",
                1057: "钱包中的银行卡详情页",
                1058: "公众号文章",
                1059: "体验版小程序绑定邀请页",
                1064: "微信连Wi-Fi状态栏",
                1067: "公众号文章广告",
                1068: "附近小程序列表广告",
                1069: "移动应用",
                1071: "钱包中的银行卡列表页",
                1072: "二维码收款页面",
                1073: "客服消息列表下发的小程序消息卡片",
                1074: "公众号会话下发的小程序消息卡片",
                1077: "摇周边",
                1078: "连Wi-Fi成功页",
                1079: "微信游戏中心",
                1081: "客服消息下发的文字链",
                1082: "公众号会话下发的文字链",
                1084: "朋友圈广告原生页",
                1088: "会话中查看系统消息，打开小程序",
                1089: "微信聊天主界面下拉",
                1090: "长按小程序右上角菜单唤出最近使用历史",
                1091: "公众号文章商品卡片",
                1092: "城市服务入口",
                1095: "小程序广告组件",
                1096: "聊天记录",
                1097: "微信支付签约页",
                1099: "页面内嵌插件",
                1102: "公众号 profile 页服务预览",
                1103: "发现栏小程序主入口，“我的小程序”列表",
                1104: "微信聊天主界面下拉，“我的小程序”栏",
                1106: "聊天主界面下拉，从顶部搜索结果页，打开小程序",
                1107: "订阅消息，打开小程序",
                1113: "安卓手机负一屏，打开小程序(三星)",
                1114: "安卓手机侧边栏，打开小程序(三星)",
                1124: "扫“一物一码”打开小程序",
                1125: "长按图片识别“一物一码”",
                1126: "扫描手机相册中选取的“一物一码”",
                1129: "微信爬虫访问",
                1131: "浮窗打开小程序",
                1146: "地理位置信息打开出行类小程序",
                1148: "卡包-交通卡，打开小程序"
            }[e + ""];
        },
        getLocation: function() {
            return a.getInfo(wx.getLocation);
        },
        getStorage: function(e) {
            return new Promise(function(t) {
                wx.getStorage({
                    key: e,
                    success: function(e) {},
                    complete: function(e) {
                        t(e.data || {});
                    }
                });
            });
        },
        setStorage: function(e, t) {
            return new Promise(function(n) {
                wx.setStorage({
                    key: e,
                    data: t,
                    complete: function(e) {
                        n(e);
                    }
                });
            });
        },
        pathModel: {
            routerMap: {},
            getTitle: function(e) {
                var t = getCurrentPages(), n = t.length;
                if (!t || !t.length) return "";
                if (!e || "current" === e) {
                    var o = t[n - 1].route;
                    return this.routerMap[o] || o;
                }
                if (n >= 2 && "referer" == e) {
                    var r = t[n - 2].route;
                    return this.routerMap[r] || r;
                }
                return "";
            }
        },
        msgRequest: function(e) {
            return new Promise(function(t) {
                var n = e.url, o = e.data, a = e.projId, s = e.source, u = e.uploadId, c = e.time, p = wx.request({
                    url: n,
                    method: "POST",
                    data: o,
                    header: {
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        projId: a,
                        source: s,
                        upTime: c,
                        uploadId: u
                    },
                    success: function(e) {
                        t({
                            status: "success"
                        });
                    },
                    fail: function(e) {
                        t({
                            status: "errorNet"
                        });
                    },
                    complete: function(e) {}
                }), d = setTimeout(function() {
                    clearTimeout(d), r(p) && i(p.abort) && (p.abort(), t({
                        status: "errorNet"
                    }));
                }, 3e3);
            });
        }
    };
    e.exports = a;
}, function(e, t) {
    e.exports = {
        baseModel: {
            os: "",
            os_vers: "",
            model: "",
            manufacturer: "",
            screen_size: "",
            sdk_ver: "v1.0.0",
            app_ver: "",
            up_time: ""
        },
        dataPropsModel: {
            trace_id: "",
            accs_time: "",
            serv_time: "",
            proj_id: "",
            source: "11",
            event_type: "",
            event_id: "",
            seq_id: 0,
            session_id: 0
        },
        propertiesModel: {
            $province: "",
            $city: "",
            ip: "",
            longitude: "",
            latitude: "",
            netwk_typ: "",
            wifi_address: "",
            wifi_name: "",
            wifi_signal: ""
        },
        busPropsModel: {
            page_id: "",
            refer_id: "",
            duration: "",
            from_id: "",
            wechat_ver: ""
        },
        usrPropsModel: {
            gid: "",
            user_id: "",
            user_role: "1",
            city: "",
            city_code: "",
            city_id: "",
            union_id: "",
            app_id: "",
            open_id: "",
            grade: "",
            grade_id: ""
        },
        getFullMessage: function() {}
    };
}, function(e, t, n) {
    n.r(t);
    var o = n(0), r = n.n(o), i = n(2), a = n(1), s = {
        session_id: Object(a.getStorage)("XesAnalyticsMP_data").session_id || 0
    }, u = {
        systemInfo: {},
        baseProps: i.baseModel,
        dataProps: {
            common: i.dataPropsModel,
            properties: i.propertiesModel,
            busProps: i.busPropsModel
        }
    }, c = {
        handleSystem: function() {
            var e = this;
            Object(a.getSystemInfo)().then(function(t) {
                try {
                    u.systemInfo = t;
                    var n = {
                        os: t.platform,
                        os_vers: t.system,
                        model: t.model,
                        manufacturer: t.brand,
                        screen_size: t.windowWidth + "×" + t.windowHeight,
                        app_ver: t.SDKVersion
                    };
                    r.a.extend(u.baseProps, n), r.a.extend(u.dataProps.busProps, {
                        wechat_ver: t.version
                    });
                } catch (t) {
                    console.error(t);
                }
                e.handleLocation();
            });
        },
        handleLocation: function() {
            u.systemInfo.locationAuthorized && d.allowLocation ? Object(a.getLocation)().then(function(e) {
                var t = {
                    latitude: e.latitude,
                    longitude: e.longitude
                };
                r.a.extend(u.dataProps.properties, t), d.initState.storeIsComplete = !0, d.initState.checkIsComplete();
            }) : (d.initState.storeIsComplete = !0, d.initState.checkIsComplete());
        },
        onNetChange: function() {
            var e = this;
            wx.onNetworkStatusChange(function(t) {
                f.info("监听到网络变化，网络类型变为", t.networkType);
                var n = t.networkType;
                if ("wifi" === n) u.dataProps.properties.netwk_typ = n, e.getWifi(!0); else {
                    var o = {
                        netwk_typ: n,
                        wifi_address: "",
                        wifi_name: "",
                        wifi_signal: ""
                    };
                    r.a.extend(u.dataProps.properties, o);
                }
            });
        },
        handleNetInfo: function() {
            var e = this;
            Object(a.getNetType)().then(function(t) {
                var n = t.networkType;
                u.dataProps.properties.netwk_typ = n, "wifi" === n ? e.getWifi() : e.handleSystem(), 
                e.onNetChange();
            });
        },
        getWifi: function(e) {
            var t = this;
            Object(a.getWifiInfo)().then(function(n) {
                try {
                    var o = n.SSID, i = n.BSSID, a = n.signalStrength;
                    a < 1 && (a = parseInt(100 * a));
                    var s = {
                        wifi_address: i,
                        wifi_name: o,
                        wifi_signal: a
                    };
                    r.a.extend(u.dataProps.properties, s);
                } catch (e) {
                    console.error(e);
                }
                e || t.handleSystem();
            });
        },
        handleStorage: function() {
            Object(a.getStorage)("XesAnalyticsMP_data").then(function(e) {
                d.session_id = e.session_id || 0, d.allowLocation = e.allowLocation || !1, s.session_id = d.session_id + 1, 
                s.allowLocation = d.allowLocation, Object(a.setStorage)("XesAnalyticsMP_data", s), 
                d.initState.finishGetCache = !0, d.initState.checkIsComplete();
            });
        }
    }, p = 0, d = {
        usrProps: i.usrPropsModel,
        seq_id: 0,
        session_id: 0,
        autoTrackCustom: !0,
        allowLocation: Object(a.getStorage)("XesAnalyticsMP_data").allowLocation || !1,
        initState: {
            queue: [],
            maxLen: 10,
            storeIsComplete: !1,
            finishSetGid: !1,
            finishGetCache: !1,
            userInitIsComplete: !1,
            isComplete: !1,
            checkIsComplete: function() {
                this.storeIsComplete && this.finishSetGid && this.finishGetCache && this.userInitIsComplete && (this.isComplete = !0, 
                f.info("--- 初始化成功啊 ---", u, d), this.queue.length && d.checkQueue());
            }
        },
        initial: function() {
            c.handleNetInfo(), c.handleStorage();
        },
        sendMessage: function(e, t) {
            var n = this, o = u.dataProps.common, i = o.proj_id, s = o.source, c = +new Date(), p = {
                url: this.eventServer,
                data: e,
                projId: i,
                source: s,
                uploadId: r.a.encryption(i, s, c),
                time: c
            };
            Object(a.msgRequest)(p).then(function(o) {
                f.info(e), "errorNet" === o.status && (n.initState.queue = n.initState.queue.concat(t), 
                f.info("本次埋点上报失败，当前埋点队列", n.initState.queue));
            });
        },
        handleFullMessage: function() {
            var e = this;
            try {
                var t = JSON.parse(JSON.stringify(u.baseProps));
                t.up_time = new Date().getTime(), t.data = [];
                var n = JSON.parse(JSON.stringify(this.initState.queue));
                this.initState.queue = [];
                var o = u.dataProps.common, i = o.proj_id, a = o.source;
                r.a.each(n, function(n) {
                    var o = {};
                    n.prepareData.trace_id = r.a.encryption(i, a, +new Date()), r.a.extend(o, u.dataProps.common, n.prepareData), 
                    r.a.coverExtend(o.bus_props, u.dataProps.busProps), o.properties = u.dataProps.properties, 
                    o.usr_props = e.usrProps, t.data.push(o);
                }), this.sendMessage(t, n);
            } catch (e) {
                console.error(e);
            }
        },
        checkQueue: function() {
            if (this.initState.queue.length && this.initState.isComplete && "none" !== u.dataProps.properties) {
                if (this.initState.queue.length > this.initState.maxLen) return this.sliceQueue();
                this.handleFullMessage();
            }
        },
        sliceQueue: function() {
            for (var e = this, t = JSON.parse(JSON.stringify(this.initState.queue)), n = [], o = 0; o < t.length; o += this.initState.maxLen) n.push(t.slice(o, o + this.initState.maxLen));
            r.a.each(n, function(t) {
                e.initState.queue = t, e.handleFullMessage();
            });
        },
        prepareData: function(e) {
            var t = JSON.parse(JSON.stringify(e.busProp));
            r.a.extend(t, {
                page_id: a.pathModel.getTitle(),
                refer_id: a.pathModel.getTitle("referer")
            });
            var n = {
                prepareData: {
                    accs_time: new Date().getTime(),
                    serv_time: new Date().getTime(),
                    event_type: e.event_type,
                    event_id: e.event_id,
                    seq_id: this.seq_id++,
                    session_id: this.session_id,
                    bus_props: t
                }
            };
            this.initState.queue.push(n), this.checkQueue();
        },
        autoTrack: {
            appLaunch: function(e) {
                var t = e.scene;
                u.dataProps.busProps.from_id = Object(a.getFromId)(t);
            },
            appShow: function(e) {
                d.seq_id = 0;
                var t = e.scene;
                u.dataProps.busProps.from_id = Object(a.getFromId)(t), d.allowLocation && (d.initState.storeIsComplete = !1, 
                c.handleLocation());
            },
            appHide: function() {
                d.session_id++, s.session_id = d.session_id, Object(a.setStorage)("XesAnalyticsMP_data", s);
            },
            pageShow: function() {
                d.autoTrackCustom && (p = new Date().getTime(), d.view("5"));
            },
            pageHide: function() {
                d.autoTrackCustom && (p = new Date().getTime() - p, d.view("", {
                    duration: p
                }));
            },
            pageUnload: function() {
                d.autoTrackCustom && (p = new Date().getTime() - p, d.view("", {
                    duration: p
                }));
            }
        }
    }, f = "object" == (void 0 === f ? "undefined" : _typeof(f)) ? f : {};
    f.info = function() {
        if (d.showLog && "object" == ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log) try {
            return console.log.apply(console, arguments);
        } catch (e) {
            console.log(arguments[0]);
        }
    }, d.registerPage = function(e, t) {
        if (t = t || "extendBus", !r.a.isObject(e)) return console.error("Invalid params: The first param expected Object !");
        var n = {
            extendBus: function() {
                r.a.extend(u.dataProps.busProps, e);
            },
            setLocation: function() {
                var t = {
                    latitude: e.latitude,
                    longitude: e.longitude
                }, n = e.allowLocation;
                if ("boolean" != typeof n) return console.error("Invalid params: allowLocation");
                t.latitude && t.longitude && r.a.extend(u.dataProps.properties, t), d.allowLocation = n, 
                s.allowLocation = n, Object(a.setStorage)("XesAnalyticsMP_data", s);
            },
            setPagesMap: function() {
                a.pathModel.routerMap = e;
            }
        };
        n[t] && n[t]();
    }, d.view = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r.a.isObject(t)) return console.error("Invalid params: The second param expected Object !");
        this.prepareData({
            event_id: e,
            event_type: "view",
            busProp: t
        });
    }, d.track = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2];
        if (!r.a.isObject(t)) return console.error("Invalid params: The second param expected Object !");
        this.prepareData({
            event_id: e,
            event_type: "click",
            busProp: t
        }, n);
    }, d.setProfile = function(e) {
        if (!r.a.isObject(e)) return console.error("Invalid params: Expected Object !");
        r.a.extend(this.usrProps, e), "" !== this.usrProps.gid && this.usrProps.gid && "" !== this.usrProps.open_id && this.usrProps.open_id || (this.usrProps.gid = this.usrProps.open_id = this.openId);
    }, d.init = function(e) {
        var t = e.proj_id, n = e.event_env, o = e.auto_track, r = void 0 === o || o, i = e.show_log;
        return this.openId ? t ? (u.dataProps.common.proj_id = t, this.eventServer = "test" === n ? "https://analytics-test.speiyou.com/uploadMessage" : "https://analytics.speiyou.com/uploadMessage", 
        this.autoTrackCustom = r, this.showLog = i, this.initState.userInitIsComplete = !0, 
        void this.initState.checkIsComplete()) : console.error("'proj_id' can not be empty !") : console.error("Please set openId first !");
    }, d.setOpenId = function(e) {
        if (!e) return console.error('setOpenId: args "openId" can not be empty !');
        this.openId = e, this.usrProps.open_id = this.usrProps.gid = this.openId, this.initState.finishSetGid = !0, 
        this.initState.checkIsComplete();
    };
    var l = App;
    App = function(e) {
        r.a.mp_proxy(e, "onLaunch", "appLaunch", d), r.a.mp_proxy(e, "onShow", "appShow", d), 
        r.a.mp_proxy(e, "onHide", "appHide", d), l.apply(this, arguments);
    };
    var h = Page;
    Page = function(e) {
        r.a.mp_proxy(e, "onShow", "pageShow", d), r.a.mp_proxy(e, "onHide", "pageHide", d), 
        r.a.mp_proxy(e, "onUnload", "pageUnload", d), h.apply(this, arguments);
    }, d.initial(), t.default = d;
}, function(e, t) {
    function n(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, o = -271733879, u = -1732584194, p = 271733878, d = 0; d < e.length; d += 16) {
            var f = n, l = o, h = u, g = p;
            n = r(n, o, u, p, e[d + 0], 7, -680876936), p = r(p, n, o, u, e[d + 1], 12, -389564586), 
            u = r(u, p, n, o, e[d + 2], 17, 606105819), o = r(o, u, p, n, e[d + 3], 22, -1044525330), 
            n = r(n, o, u, p, e[d + 4], 7, -176418897), p = r(p, n, o, u, e[d + 5], 12, 1200080426), 
            u = r(u, p, n, o, e[d + 6], 17, -1473231341), o = r(o, u, p, n, e[d + 7], 22, -45705983), 
            n = r(n, o, u, p, e[d + 8], 7, 1770035416), p = r(p, n, o, u, e[d + 9], 12, -1958414417), 
            u = r(u, p, n, o, e[d + 10], 17, -42063), o = r(o, u, p, n, e[d + 11], 22, -1990404162), 
            n = r(n, o, u, p, e[d + 12], 7, 1804603682), p = r(p, n, o, u, e[d + 13], 12, -40341101), 
            u = r(u, p, n, o, e[d + 14], 17, -1502002290), n = i(n, o = r(o, u, p, n, e[d + 15], 22, 1236535329), u, p, e[d + 1], 5, -165796510), 
            p = i(p, n, o, u, e[d + 6], 9, -1069501632), u = i(u, p, n, o, e[d + 11], 14, 643717713), 
            o = i(o, u, p, n, e[d + 0], 20, -373897302), n = i(n, o, u, p, e[d + 5], 5, -701558691), 
            p = i(p, n, o, u, e[d + 10], 9, 38016083), u = i(u, p, n, o, e[d + 15], 14, -660478335), 
            o = i(o, u, p, n, e[d + 4], 20, -405537848), n = i(n, o, u, p, e[d + 9], 5, 568446438), 
            p = i(p, n, o, u, e[d + 14], 9, -1019803690), u = i(u, p, n, o, e[d + 3], 14, -187363961), 
            o = i(o, u, p, n, e[d + 8], 20, 1163531501), n = i(n, o, u, p, e[d + 13], 5, -1444681467), 
            p = i(p, n, o, u, e[d + 2], 9, -51403784), u = i(u, p, n, o, e[d + 7], 14, 1735328473), 
            n = a(n, o = i(o, u, p, n, e[d + 12], 20, -1926607734), u, p, e[d + 5], 4, -378558), 
            p = a(p, n, o, u, e[d + 8], 11, -2022574463), u = a(u, p, n, o, e[d + 11], 16, 1839030562), 
            o = a(o, u, p, n, e[d + 14], 23, -35309556), n = a(n, o, u, p, e[d + 1], 4, -1530992060), 
            p = a(p, n, o, u, e[d + 4], 11, 1272893353), u = a(u, p, n, o, e[d + 7], 16, -155497632), 
            o = a(o, u, p, n, e[d + 10], 23, -1094730640), n = a(n, o, u, p, e[d + 13], 4, 681279174), 
            p = a(p, n, o, u, e[d + 0], 11, -358537222), u = a(u, p, n, o, e[d + 3], 16, -722521979), 
            o = a(o, u, p, n, e[d + 6], 23, 76029189), n = a(n, o, u, p, e[d + 9], 4, -640364487), 
            p = a(p, n, o, u, e[d + 12], 11, -421815835), u = a(u, p, n, o, e[d + 15], 16, 530742520), 
            n = s(n, o = a(o, u, p, n, e[d + 2], 23, -995338651), u, p, e[d + 0], 6, -198630844), 
            p = s(p, n, o, u, e[d + 7], 10, 1126891415), u = s(u, p, n, o, e[d + 14], 15, -1416354905), 
            o = s(o, u, p, n, e[d + 5], 21, -57434055), n = s(n, o, u, p, e[d + 12], 6, 1700485571), 
            p = s(p, n, o, u, e[d + 3], 10, -1894986606), u = s(u, p, n, o, e[d + 10], 15, -1051523), 
            o = s(o, u, p, n, e[d + 1], 21, -2054922799), n = s(n, o, u, p, e[d + 8], 6, 1873313359), 
            p = s(p, n, o, u, e[d + 15], 10, -30611744), u = s(u, p, n, o, e[d + 6], 15, -1560198380), 
            o = s(o, u, p, n, e[d + 13], 21, 1309151649), n = s(n, o, u, p, e[d + 4], 6, -145523070), 
            p = s(p, n, o, u, e[d + 11], 10, -1120210379), u = s(u, p, n, o, e[d + 2], 15, 718787259), 
            o = s(o, u, p, n, e[d + 9], 21, -343485551), n = c(n, f), o = c(o, l), u = c(u, h), 
            p = c(p, g);
        }
        return Array(n, o, u, p);
    }
    function o(e, t, n, o, r, i) {
        return c((a = c(c(t, e), c(o, i))) << (s = r) | a >>> 32 - s, n);
        var a, s;
    }
    function r(e, t, n, r, i, a, s) {
        return o(t & n | ~t & r, e, t, i, a, s);
    }
    function i(e, t, n, r, i, a, s) {
        return o(t & r | n & ~r, e, t, i, a, s);
    }
    function a(e, t, n, r, i, a, s) {
        return o(t ^ n ^ r, e, t, i, a, s);
    }
    function s(e, t, n, r, i, a, s) {
        return o(n ^ (t | ~r), e, t, i, a, s);
    }
    function u(e, t) {
        var o = p(e);
        o.length > 16 && (o = n(o, e.length * h));
        for (var r = Array(16), i = Array(16), a = 0; a < 16; a++) r[a] = 909522486 ^ o[a], 
        i[a] = 1549556828 ^ o[a];
        var s = n(r.concat(p(t)), 512 + t.length * h);
        return n(i.concat(s), 640);
    }
    function c(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
    }
    function p(e) {
        for (var t = Array(), n = (1 << h) - 1, o = 0; o < e.length * h; o += h) t[o >> 5] |= (e.charCodeAt(o / h) & n) << o % 32;
        return t;
    }
    function d(e) {
        for (var t = "", n = (1 << h) - 1, o = 0; o < 32 * e.length; o += h) t += String.fromCharCode(e[o >> 5] >>> o % 32 & n);
        return t;
    }
    function f(e) {
        for (var t = g ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < 4 * e.length; o++) n += t.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + t.charAt(e[o >> 2] >> o % 4 * 8 & 15);
        return n;
    }
    function l(e) {
        for (var t = "", n = 0; n < 4 * e.length; n += 3) for (var o = (e[n >> 2] >> n % 4 * 8 & 255) << 16 | (e[n + 1 >> 2] >> (n + 1) % 4 * 8 & 255) << 8 | e[n + 2 >> 2] >> (n + 2) % 4 * 8 & 255, r = 0; r < 4; r++) 8 * n + 6 * r > 32 * e.length ? t += m : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >> 6 * (3 - r) & 63);
        return t;
    }
    var h = 8, g = 0, m = "";
    e.exports = {
        hex_md5: function(e) {
            return f(n(p(e), e.length * h));
        },
        b64_md5: function(e) {
            return l(n(p(e), e.length * h));
        },
        str_md5: function(e) {
            return d(n(p(e), e.length * h));
        },
        hex_hmac_md5: function(e, t) {
            return f(u(e, t));
        },
        b64_hmac_md5: function(e, t) {
            return l(u(e, t));
        },
        str_hmac_md5: function(e, t) {
            return d(u(e, t));
        }
    };
} ]);