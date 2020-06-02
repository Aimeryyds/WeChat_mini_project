require("common/manifest.js");

require("common/vendor.js");

global.webpackJsonp([ 7 ], {
    BRPh: function(t, e, r) {
        var n = r("2cg0"), a = r("EkjR");
        t.exports = n(a, {
            name: "sensors",
            appid: "wx0347fc1fe57005ba",
            server_url: "https://sa.shanbay.com/sa?project=default",
            send_timeout: 1e3,
            use_client_time: !1,
            show_log: !0,
            allow_amend_share_path: !0,
            autoTrack: {
                appLaunch: !1,
                appShow: !1,
                appHide: !1,
                pageShow: !1,
                pageShare: !1
            },
            is_plugin: !1
        });
    },
    C0oD: function(t, e, r) {
        "use strict";
        var n = r("woOf"), a = r.n(n), i = {
            install: function(t) {
                t.mixin({
                    onUnload: function() {
                        a()(this.$data, this.$options.data && this.$options.data());
                    }
                });
            }
        };
        e.a = i;
    },
    EkjR: function(t, e) {
        t.exports = {
            name: "sensors",
            appid: "wx0347fc1fe57005ba",
            server_url: "https://sa.shanbay.com/sa?project=production&token=e8d971a5389d7939",
            send_timeout: 1e3,
            use_client_time: !1,
            show_log: !1,
            allow_amend_share_path: !0,
            autoTrack: {
                appLaunch: !1,
                appShow: !1,
                appHide: !1,
                pageShow: !1,
                pageShare: !1
            },
            is_plugin: !1
        };
    },
    FhoZ: function(t, e, r) {
        (function(e) {
            var n = r("o/zv");
            t.exports = {
                build: {
                    env: r("rBKV"),
                    sensors: r("EkjR"),
                    index: n.resolve(e, "../dist/index.html"),
                    assetsRoot: n.resolve(e, "../dist"),
                    assetsSubDirectory: "",
                    assetsPublicPath: "/",
                    productionSourceMap: !1,
                    productionGzip: !1,
                    productionGzipExtensions: [ "js", "css" ],
                    bundleAnalyzerReport: Object({
                        NODE_ENV: "production"
                    }).npm_config_report
                },
                dev: {
                    env: r("dhIU"),
                    sensors: r("BRPh"),
                    port: 8080,
                    autoOpenBrowser: !1,
                    assetsSubDirectory: "",
                    assetsPublicPath: "/",
                    proxyTable: {},
                    cssSourceMap: !1
                }
            };
        }).call(e, "/");
    },
    M93x: function(t, e, r) {
        "use strict";
        var n = r("Mw+1");
        var a = function(t) {
            r("r5zL");
        }, i = r("ybqe")(n.a, null, a, null, null);
        e.a = i.exports;
    },
    "Mw+1": function(t, e, r) {
        "use strict";
        var n = r("IcnI");
        e.a = {
            store: n.a,
            created: function() {
                n.a.dispatch("fetchMobileType"), n.a.dispatch("fetchUpdateStatus"), n.a.dispatch("fetchLoginStatus");
            }
        };
    },
    NHnr: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), function(t) {
            var e = r("fsHP"), n = r("5nAL"), a = r.n(n), i = r("M93x"), s = r("D4CW"), o = r("C0oD"), c = r("7eUt");
            e.a.init(), t.wxCommon = c.a, a.a.config.productionTip = !1, a.a.use(s.a), a.a.use(o.a), 
            i.a.mpType = "app", new a.a(i.a).$mount();
        }.call(e, r("DuR2"));
    },
    dhIU: function(t, e, r) {
        var n = r("2cg0"), a = r("rBKV");
        t.exports = n(a, {
            NODE_ENV: '"development"'
        });
    },
    fsHP: function(t, e, r) {
        "use strict";
        var n = r("mvHQ"), a = r.n(n), i = r("pFYg"), s = r.n(i), o = r("FhoZ"), c = null;
        c = o.build.sensors;
        var u = {}, p = {};
        p.para = c, p.status = {}, p.para.openid_url || (p.para.openid_url = p.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/, "$1/mp_login")), 
        p.para.max_string_length = p.para.max_string_length || 300, "number" != typeof p.para.send_timeout && (p.para.send_timeout = 1e3), 
        p.para.datasend_timeout = p.para.datasend_timeout || 3e3, p.para.batch_send && ("object" != s()(p.para.batch_send) && (p.para.batch_send = {}), 
        p.para.use_client_time = !0, p.para.batch_send.send_timeout = p.para.batch_send.send_timeout || 6e3, 
        p.para.batch_send.max_length = p.para.batch_send.max_length || 6);
        var h = Array.prototype, d = Function.prototype, f = Object.prototype, l = h.slice, g = f.toString, m = f.hasOwnProperty, _ = "utm_source utm_medium utm_campaign utm_content utm_term", b = {
            1001: "发现栏小程序主入口，“最近使用”列表",
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
            1104: "微信聊天主界面下拉，“我的小程序”栏"
        }, v = "直接打开";
        p.status.referrer = "直接打开";
        var y = null, S = 0, O = "", x = !1;
        p.lib_version = "1.12.9";
        var j = "object" == (void 0 === j ? "undefined" : s()(j)) ? j : {};
        function w(t, e, r) {
            var n = p.autoTrackCustom[r];
            if (t[e]) {
                var a = t[e];
                t[e] = function() {
                    "onLaunch" === e && (this[p.para.name] = p), !p.para.autoTrackIsFirst || u.isObject(p.para.autoTrackIsFirst) && !p.para.autoTrackIsFirst[r] ? (a.apply(this, arguments), 
                    n.apply(this, arguments)) : (!0 === p.para.autoTrackIsFirst || u.isObject(p.para.autoTrackIsFirst) && p.para.autoTrackIsFirst[r]) && (n.apply(this, arguments), 
                    a.apply(this, arguments));
                };
            } else t[e] = function() {
                "onLaunch" === e && (this[p.para.name] = p), n.apply(this, arguments);
            };
        }
        if (j.info = function() {
            if (p.para.show_log && "object" == ("undefined" == typeof console ? "undefined" : s()(console)) && console.log) try {
                return console.log.apply(console, arguments);
            } catch (t) {
                console.log(arguments[0]);
            }
        }, function() {
            d.bind;
            var t = h.forEach, e = h.indexOf, r = Array.isArray, n = {}, a = u.each = function(e, r, a) {
                if (null == e) return !1;
                if (t && e.forEach === t) e.forEach(r, a); else if (e.length === +e.length) {
                    for (var i = 0, s = e.length; i < s; i++) if (i in e && r.call(a, e[i], i, e) === n) return !1;
                } else for (var o in e) if (m.call(e, o) && r.call(a, e[o], o, e) === n) return !1;
            };
            u.logger = j, u.extend = function(t) {
                return a(l.call(arguments, 1), function(e) {
                    for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
                }), t;
            }, u.extend2Lev = function(t) {
                return a(l.call(arguments, 1), function(e) {
                    for (var r in e) void 0 !== e[r] && (u.isObject(e[r]) && u.isObject(t[r]) ? u.extend(t[r], e[r]) : t[r] = e[r]);
                }), t;
            }, u.coverExtend = function(t) {
                return a(l.call(arguments, 1), function(e) {
                    for (var r in e) void 0 !== e[r] && void 0 === t[r] && (t[r] = e[r]);
                }), t;
            }, u.isArray = r || function(t) {
                return "[object Array]" === g.call(t);
            }, u.isFunction = function(t) {
                try {
                    return /^\s*\bfunction\b/.test(t);
                } catch (t) {
                    return !1;
                }
            }, u.isArguments = function(t) {
                return !(!t || !m.call(t, "callee"));
            }, u.toArray = function(t) {
                return t ? t.toArray ? t.toArray() : u.isArray(t) ? l.call(t) : u.isArguments(t) ? l.call(t) : u.values(t) : [];
            }, u.values = function(t) {
                var e = [];
                return null == t ? e : (a(t, function(t) {
                    e[e.length] = t;
                }), e);
            }, u.include = function(t, r) {
                var i = !1;
                return null == t ? i : e && t.indexOf === e ? -1 != t.indexOf(r) : (a(t, function(t) {
                    if (i || (i = t === r)) return n;
                }), i);
            };
        }(), u.trim = function(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }, u.isObject = function(t) {
            return "[object Object]" == g.call(t) && null != t;
        }, u.isEmptyObject = function(t) {
            if (u.isObject(t)) {
                for (var e in t) if (m.call(t, e)) return !1;
                return !0;
            }
            return !1;
        }, u.isUndefined = function(t) {
            return void 0 === t;
        }, u.isString = function(t) {
            return "[object String]" == g.call(t);
        }, u.isDate = function(t) {
            return "[object Date]" == g.call(t);
        }, u.isBoolean = function(t) {
            return "[object Boolean]" == g.call(t);
        }, u.isNumber = function(t) {
            return "[object Number]" == g.call(t) && /[\d\.]+/.test(String(t));
        }, u.isJSONString = function(t) {
            try {
                JSON.parse(t);
            } catch (t) {
                return !1;
            }
            return !0;
        }, u.decodeURIComponent = function(t) {
            var e = "";
            try {
                e = decodeURIComponent(t);
            } catch (r) {
                e = t;
            }
            return e;
        }, u.encodeDates = function(t) {
            return u.each(t, function(e, r) {
                u.isDate(e) ? t[r] = u.formatDate(e) : u.isObject(e) && (t[r] = u.encodeDates(e));
            }), t;
        }, u.formatDate = function(t) {
            function e(t) {
                return t < 10 ? "0" + t : t;
            }
            return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds());
        }, u.searchObjDate = function(t) {
            u.isObject(t) && u.each(t, function(e, r) {
                u.isObject(e) ? u.searchObjDate(t[r]) : u.isDate(e) && (t[r] = u.formatDate(e));
            });
        }, u.formatString = function(t) {
            return t.length > p.para.max_string_length ? (j.info("字符串长度超过限制，已经做截取--" + t), t.slice(0, p.para.max_string_length)) : t;
        }, u.searchObjString = function(t) {
            u.isObject(t) && u.each(t, function(e, r) {
                u.isObject(e) ? u.searchObjString(t[r]) : u.isString(e) && (t[r] = u.formatString(e));
            });
        }, u.unique = function(t) {
            for (var e, r = [], n = {}, a = 0; a < t.length; a++) (e = t[a]) in n || (n[e] = !0, 
            r.push(e));
            return r;
        }, u.strip_sa_properties = function(t) {
            return u.isObject(t) ? (u.each(t, function(e, r) {
                if (u.isArray(e)) {
                    var n = [];
                    u.each(e, function(t) {
                        u.isString(t) ? n.push(t) : j.info("您的数据-", e, "的数组里的值必须是字符串,已经将其删除");
                    }), 0 !== n.length ? t[r] = n : (delete t[r], j.info("已经删除空的数组"));
                }
                u.isString(e) || u.isNumber(e) || u.isDate(e) || u.isBoolean(e) || u.isArray(e) || (j.info("您的数据-", e, "-格式不满足要求，我们已经将其删除"), 
                delete t[r]);
            }), t) : t;
        }, u.strip_empty_properties = function(t) {
            var e = {};
            return u.each(t, function(t, r) {
                null != t && (e[r] = t);
            }), e;
        }, u.utf8Encode = function(t) {
            var e, r = void 0, n = void 0, a = void 0, i = "";
            for (r = n = 0, e = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
            a = 0; a < e; a++) {
                var s = t.charCodeAt(a), o = null;
                s < 128 ? n++ : o = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), 
                null !== o && (n > r && (i += t.substring(r, n)), i += o, r = n = a + 1);
            }
            return n > r && (i += t.substring(r, t.length)), i;
        }, u.base64Encode = function(t) {
            var e = void 0, r = void 0, n = void 0, a = void 0, i = void 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = 0, c = 0, p = "", h = [];
            if (!t) return t;
            t = u.utf8Encode(t);
            do {
                e = (i = t.charCodeAt(o++) << 16 | t.charCodeAt(o++) << 8 | t.charCodeAt(o++)) >> 18 & 63, 
                r = i >> 12 & 63, n = i >> 6 & 63, a = 63 & i, h[c++] = s.charAt(e) + s.charAt(r) + s.charAt(n) + s.charAt(a);
            } while (o < t.length);
            switch (p = h.join(""), t.length % 3) {
              case 1:
                p = p.slice(0, -2) + "==";
                break;

              case 2:
                p = p.slice(0, -1) + "=";
            }
            return p;
        }, u.getCurrentPath = function() {
            var t = "未取到";
            try {
                var e = getCurrentPages();
                t = e[e.length - 1].route;
            } catch (t) {
                j.info(t);
            }
            return t;
        }, u.getPath = function(t) {
            return "string" == typeof t ? t.replace(/^\//, "") : "取值异常";
        }, u.getQueryParam = function(t, e) {
            var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
            return null === r || r && "string" != typeof r[1] && r[1].length ? "" : u.decodeURIComponent(r[1]);
        }, p.initialState = {
            queue: [],
            isComplete: !1,
            systemIsComplete: !1,
            storeIsComplete: !1,
            checkIsComplete: function() {
                this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (u.each(this.queue, function(t) {
                    p[t[0]].apply(p, l.call(t[1]));
                }), p.queue = []));
            }
        }, u.getPrefixUtm = function(t, e, r) {
            if (e = e || "", r = r || "_", !u.isObject(t)) return {};
            var n = {}, a = {};
            for (var i in t) -1 !== (" " + _ + " ").indexOf(" " + i + " ") ? n[e + i] = t[i] : a[r + i] = t[i];
            return {
                $utms: n,
                otherUtms: a
            };
        }, u.convertObjToParam = function(t) {
            var e = [];
            for (var r in t) e.push(r + "=" + t[r]);
            return e.join("&");
        }, u.getSource = function(t) {
            if (u.isObject(t)) {
                if (u.isEmptyObject(t)) return {};
                for (var e in t) -1 === (" " + _ + " ").indexOf(" " + e + " ") ? delete t[e] : t[e] = t[e].replace("?", "*");
                t = "?" + (t = u.convertObjToParam(t));
            } else t = u.decodeURIComponent(t);
            var r = _.split(" "), n = _.split(" "), a = "", i = {};
            return 2 !== (t = t.split("?")).length ? {} : (t = "?" + (t = t[1]), u.isArray(p.para.source_channel) && p.para.source_channel.length > 0 && (n = n.concat(p.para.source_channel), 
            n = u.unique(n)), u.each(n, function(e) {
                a = u.getQueryParam(t, e), (a = u.decodeURIComponent(a)).length && u.include(r, e) && (i[e] = a);
            }), i);
        }, u.getObjFromQuery = function(t) {
            var e = t.split("?"), r = {};
            return e && e[1] ? (u.each(e[1].split("&"), function(t) {
                var e = t.split("=");
                e[0] && e[1] && (r[e[0]] = e[1]);
            }), r) : {};
        }, u.getUtm = function(t, e, r) {
            var n = u.getSource(t);
            return void 0 === r && e ? {
                pre1: u.getPrefixUtm(n, e).$utms || {},
                pre2: {}
            } : void 0 !== r && e ? {
                pre1: u.getPrefixUtm(n, e).$utms || {},
                pre2: u.getPrefixUtm(n, r).$utms || {}
            } : {
                pre1: {},
                pre2: {}
            };
        }, u.getMPScene = function(t) {
            return "number" == typeof t || "string" == typeof t && "" !== t ? (t = String(t), 
            b[t] || t) : "未取到值";
        }, u.getShareDepth = function() {
            if ("number" == typeof S && 0 !== S) {
                var t = p.store.getDistinctId(), e = p.store.getFirstId();
                return !O || O !== t && O !== e ? S + 1 : S;
            }
            return 1;
        }, u.setShareInfo = function(t, e) {
            var r = {};
            if (!(t && u.isObject(t.query) && t.query.sampshare)) return {};
            if (r = u.decodeURIComponent(t.query.sampshare), !u.isJSONString(r)) return {};
            var n = (r = JSON.parse(r)).d, a = r.p, i = r.i;
            "string" == typeof i ? (e.$share_distinct_id = i, O = i) : e.$share_distinct_id = "取值异常", 
            "number" == typeof n ? (e.$share_depth = n, S = n) : e.$share_depth = "-1", e.$share_url_path = "string" == typeof a ? a : "取值异常";
        }, u.getShareInfo = function() {
            return a()({
                i: p.store.getDistinctId() || "取值异常",
                p: u.getCurrentPath(),
                d: u.getShareDepth()
            });
        }, u.setUtm = function(t, e) {
            var r = {};
            if (t && u.isObject(t.query)) {
                var n = (r = u.extend({}, t.query)).scene;
                n && (n = -1 !== (n = u.decodeURIComponent(n)).indexOf("?") ? "?" + n.replace(/\?/g, "") : "?" + n, 
                u.extend(r, u.getObjFromQuery(n))), t.query.q && u.extend(r, u.getObjFromQuery(u.decodeURIComponent(t.query.q)));
            }
            if (t && u.isObject(t.referrerInfo) && t.referrerInfo.extraData) {
                var a = {};
                u.isObject(t.referrerInfo.extraData) && !u.isEmptyObject(t.referrerInfo.extraData) ? a = t.referrerInfo.extraData : u.isJSONString(t.referrerInfo.extraData) && (a = JSON.parse(t.referrerInfo.extraData)), 
                u.extend(r, a);
            }
            var i = u.getUtm(r, "$", "$latest_");
            return u.extend(e, i.pre1), i;
        }, u.wxrequest = function(t) {
            var e = wx.request(t);
            setTimeout(function() {
                u.isObject(e) && u.isFunction(e.abort) && e.abort();
            }, p.para.datasend_timeout);
        }, u.info = {
            currentProps: {},
            properties: {
                $lib: "MiniProgram",
                $lib_version: String("1.12.9")
            },
            getSystem: function() {
                var t = this.properties;
                wx.getNetworkType({
                    success: function(e) {
                        t.$network_type = e.networkType;
                    },
                    complete: function() {
                        wx.getSystemInfo({
                            success: function(e) {
                                t.$manufacturer = e.brand, t.$model = e.model, t.$screen_width = Number(e.screenWidth), 
                                t.$screen_height = Number(e.screenHeight), t.$os = e.system.split(" ")[0], t.$os_version = e.system.split(" ")[1];
                            },
                            complete: function() {
                                p.initialState.systemIsComplete = !0, p.initialState.checkIsComplete();
                            }
                        });
                    }
                });
            }
        }, p._ = u, p.prepareData = function(t, e) {
            var r = {
                distinct_id: this.store.getDistinctId(),
                lib: {
                    $lib: "MiniProgram",
                    $lib_method: "code",
                    $lib_version: String("1.12.9")
                },
                properties: {}
            };
            u.extend(r, t), u.isObject(t.properties) && !u.isEmptyObject(t.properties) && u.extend(r.properties, t.properties), 
            t.type && "profile" === t.type.slice(0, 7) || (p.para.batch_send && (r._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4))), 
            r.properties = u.extend({}, u.info.properties, p.store.getProps(), u.info.currentProps, r.properties), 
            "object" == s()(p.store._state) && "number" == typeof p.store._state.first_visit_day_time && p.store._state.first_visit_day_time > new Date().getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1), 
            r.properties.$time && u.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, 
            delete r.properties.$time) : p.para.use_client_time && (r.time = 1 * new Date()), 
            u.searchObjDate(r), u.searchObjString(r), j.info(r), p.sendStrategy.send(r);
        }, p.store = {
            verifyDistinctId: function(t) {
                return "number" == typeof t && (t = String(t), /^\d+$/.test(t) || (t = "unexpected_id")), 
                "string" == typeof t && "" !== t || (t = "unexpected_id"), t;
            },
            storageInfo: null,
            getUUID: function() {
                return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
            },
            getStorage: function() {
                return this.storageInfo ? this.storageInfo : (this.storageInfo = wx.getStorageSync("sensorsdata2015_wechat") || "", 
                this.storageInfo);
            },
            _state: {},
            mem: {
                mdata: [],
                getLength: function() {
                    return this.mdata.length;
                },
                add: function(t) {
                    this.mdata.push(t);
                },
                clear: function(t) {
                    this.mdata.splice(0, t);
                }
            },
            toState: function(t) {
                var e = null;
                u.isJSONString(t) ? (e = JSON.parse(t)).distinct_id ? this._state = e : this.set("distinct_id", this.getUUID()) : u.isObject(t) && (e = t).distinct_id ? this._state = e : this.set("distinct_id", this.getUUID());
            },
            getFirstId: function() {
                return this._state.first_id;
            },
            getDistinctId: function() {
                return this._state.distinct_id;
            },
            getProps: function() {
                return this._state.props || {};
            },
            setProps: function(t, e) {
                var r = this._state.props || {};
                e ? this.set("props", t) : (u.extend(r, t), this.set("props", r));
            },
            set: function(t, e) {
                var r = {};
                for (var n in "string" == typeof t ? r[t] = e : "object" == (void 0 === t ? "undefined" : s()(t)) && (r = t), 
                this._state = this._state || {}, r) this._state[n] = r[n];
                this.save();
            },
            change: function(t, e) {
                this._state[t] = e;
            },
            save: function() {
                wx.setStorageSync("sensorsdata2015_wechat", this._state);
            },
            init: function() {
                var t = this.getStorage();
                if (t) this.toState(t); else {
                    x = !0;
                    var e = new Date(), r = e.getTime();
                    e.setHours(23), e.setMinutes(59), e.setSeconds(60), p.setOnceProfile({
                        $first_visit_time: new Date()
                    }), this.set({
                        distinct_id: this.getUUID(),
                        first_visit_time: r,
                        first_visit_day_time: e.getTime()
                    });
                }
            }
        }, p.setProfile = function(t, e) {
            p.prepareData({
                type: "profile_set",
                properties: t
            }, e);
        }, p.setOnceProfile = function(t, e) {
            p.prepareData({
                type: "profile_set_once",
                properties: t
            }, e);
        }, p.track = function(t, e, r) {
            this.prepareData({
                type: "track",
                event: t,
                properties: e
            }, r);
        }, p.identify = function(t, e) {
            if ("string" != typeof t && "number" != typeof t) return !1;
            t = p.store.verifyDistinctId(t);
            var r = p.store.getFirstId();
            !0 === e ? r ? p.store.set("first_id", t) : p.store.set("distinct_id", t) : r ? p.store.change("first_id", t) : p.store.change("distinct_id", t);
        }, p.trackSignup = function(t, e, r, n) {
            p.prepareData({
                original_id: p.store.getFirstId() || p.store.getDistinctId(),
                distinct_id: t,
                type: "track_signup",
                event: e,
                properties: r
            }, n), p.store.set("distinct_id", t);
        }, p.registerApp = function(t) {
            u.isObject(t) && !u.isEmptyObject(t) && (u.info.currentProps = u.extend(u.info.currentProps, t));
        }, p.register = function(t) {
            u.isObject(t) && !u.isEmptyObject(t) && p.store.setProps(t);
        }, p.clearAllRegister = function() {
            p.store.setProps({}, !0);
        }, p.login = function(t) {
            if ("string" != typeof t && "number" != typeof t) return !1;
            t = p.store.verifyDistinctId(t);
            var e = p.store.getFirstId(), r = p.store.getDistinctId();
            t !== r && (e ? p.trackSignup(t, "$SignUp") : (p.store.set("first_id", r), p.trackSignup(t, "$SignUp")));
        }, p.openid = {
            getRequest: function(t) {
                wx.login({
                    success: function(e) {
                        e.code && p.para.appid && p.para.openid_url ? u.wxrequest({
                            url: p.para.openid_url + "&code=" + e.code + "&appid=" + p.para.appid,
                            method: "GET",
                            complete: function(e) {
                                u.isObject(e) && u.isObject(e.data) && e.data.openid ? t(e.data.openid) : t();
                            }
                        }) : t();
                    }
                });
            },
            getWXStorage: function() {
                var t = p.store.getStorage();
                if (t && u.isObject(t)) return t.openid;
            },
            getOpenid: function(t) {
                if (!p.para.appid) return t(), !1;
                var e = this.getWXStorage();
                e ? t(e) : this.getRequest(t);
            }
        }, p.initial = function() {
            this._.info.getSystem(), this.store.init(), p.para.batch_send && p.sendStrategy.batchInterval(), 
            u.isObject(this.para.register) && (u.info.properties = u.extend(u.info.properties, this.para.register));
        }, p.init = function(t) {
            if (!0 === this.hasInit) return !1;
            this.hasInit = !0, u.isObject(t) && (p.para = u.extend(p.para, t)), p.initialState.storeIsComplete = !0, 
            p.initialState.checkIsComplete();
        }, p.getPresetProperties = function() {
            if (u.info && u.info.properties && u.info.properties.$lib) {
                var t = u.extend({
                    $url_path: u.getCurrentPath()
                }, u.info.properties, p.store.getProps());
                return delete t.$lib, t;
            }
            return {};
        }, u.autoExeQueue = function() {
            return {
                items: [],
                enqueue: function(t) {
                    this.items.push(t), this.start();
                },
                dequeue: function() {
                    return this.items.shift();
                },
                getCurrentItem: function() {
                    return this.items[0];
                },
                isRun: !1,
                start: function() {
                    this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
                },
                close: function() {
                    this.dequeue(), this.isRun = !1, this.start();
                }
            };
        }, p.requestQueue = function(t) {
            this.url = t.url;
        }, p.requestQueue.prototype.isEnd = function() {
            this.received || (this.received = !0, this.close());
        }, p.requestQueue.prototype.start = function() {
            var t = this;
            setTimeout(function() {
                t.isEnd();
            }, p.para.send_timeout), u.wxrequest({
                url: this.url,
                method: "GET",
                complete: function() {
                    t.isEnd();
                }
            });
        }, p.dataQueue = u.autoExeQueue(), p.sendStrategy = {
            dataHasSend: !0,
            dataHasChange: !1,
            onAppHide: function() {
                p.para.batch_send && this.batchSend();
            },
            send: function(t) {
                if (p.para.batch_send) {
                    if (this.dataHasChange = !0, p.store.mem.getLength() >= 300) return j.info("数据量存储过大，有异常"), 
                    !1;
                    p.store.mem.add(t), p.store.mem.getLength() >= p.para.batch_send.max_length && this.batchSend();
                } else this.queueSend(t);
            },
            queueSend: function(t) {
                t = a()(t), t = -1 !== p.para.server_url.indexOf("?") ? p.para.server_url + "&data=" + encodeURIComponent(u.base64Encode(t)) : p.para.server_url + "?data=" + encodeURIComponent(u.base64Encode(t));
                var e = new p.requestQueue({
                    url: t
                });
                e.close = function() {
                    p.dataQueue.close();
                }, p.dataQueue.enqueue(e);
            },
            wxrequest: function(t) {
                if (u.isArray(t.data) && t.data.length > 0) {
                    var e = Date.now();
                    t.data.forEach(function(t) {
                        t._flush_time = e;
                    }), t.data = a()(t.data), u.wxrequest({
                        url: p.para.server_url,
                        method: "POST",
                        dataType: "text",
                        data: "data_list=" + encodeURIComponent(u.base64Encode(t.data)),
                        success: function() {
                            t.success(t.len);
                        }
                    });
                } else t.success(t.len);
            },
            batchSend: function() {
                if (this.dataHasSend) {
                    var t = p.store.mem.mdata, e = t.length;
                    e > 0 && (this.dataHasSend = !1, this.wxrequest({
                        data: t,
                        len: e,
                        success: this.batchRemove.bind(this)
                    }));
                }
            },
            batchRemove: function(t) {
                p.store.mem.clear(t), this.dataHasSend = !0, this.dataHasChange = !0, this.batchWrite();
            },
            is_first_batch_write: !0,
            batchWrite: function() {
                var t = this;
                this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, 
                setTimeout(function() {
                    t.batchSend();
                }, 1e3)), this.dataHasChange = !1, wx.setStorageSync("sensors_mp_prepare_data", p.store.mem.mdata));
            },
            batchInterval: function() {
                var t = this;
                !function e() {
                    setTimeout(function() {
                        t.batchWrite(), e();
                    }, 1e3);
                }(), function e() {
                    setTimeout(function() {
                        t.batchSend(), e();
                    }, p.para.batch_send.send_timeout);
                }();
            }
        }, p.setOpenid = function(t, e) {
            p.store.set("openid", t), e ? p.store.set("distinct_id", t) : p.identify(t, !0);
        }, p.initWithOpenid = function(t, e) {
            t = t || {}, p.openid.getOpenid(function(r) {
                r && p.setOpenid(r, t.isCoverLogin), e && u.isFunction(e) && e(r), p.init(t);
            });
        }, u.each([ "setProfile", "setOnceProfile", "track", "register", "clearAllRegister", "quick" ], function(t) {
            var e = p[t];
            p[t] = function() {
                p.initialState.isComplete ? e.apply(p, arguments) : p.initialState.queue.push([ t, arguments ]);
            };
        }), u.setQuery = function(t) {
            if (t && u.isObject(t) && !u.isEmptyObject(t)) {
                var e = [];
                return u.each(t, function(t, r) {
                    e.push(r + "=" + t);
                }), e.join("&");
            }
            return "";
        }, p.autoTrackCustom = {
            trackCustom: function(t, e, r) {
                var n = p.para.autoTrack[t], a = "";
                p.para.autoTrack && n && ("function" == typeof n ? (a = n(), u.isObject(a) && u.extend(e, a)) : u.isObject(n) && (u.extend(e, n), 
                p.para.autoTrack[t] = !0), p.track(r, e));
            },
            appLaunch: function(t, e) {
                this[p.para.name] = p;
                var r = {};
                t && t.path && (r.$url_path = u.getPath(t.path)), u.setShareInfo(t, r);
                var n = u.setUtm(t, r);
                x ? (r.$is_first_time = !0, u.isEmptyObject(n.pre1) || p.setOnceProfile(n.pre1)) : r.$is_first_time = !1, 
                u.isEmptyObject(n.pre2) || p.registerApp(n.pre2), t.scene = t.scene || "未取到值", r.$scene = u.getMPScene(t.scene), 
                p.registerApp({
                    $latest_scene: r.$scene
                }), r.$url_query = u.setQuery(t.query), e ? (r = u.extend(r, e), p.track("$MPLaunch", r)) : p.para.autoTrack && p.para.autoTrack.appLaunch && p.autoTrackCustom.trackCustom("appLaunch", r, "$MPLaunch");
            },
            appShow: function(t, e) {
                var r = {};
                y = new Date().getTime(), t && t.path && (r.$url_path = u.getPath(t.path)), u.setShareInfo(t, r);
                var n = u.setUtm(t, r);
                u.isEmptyObject(n.pre2) || p.registerApp(n.pre2), t.scene = t.scene || "未取到值", r.$scene = u.getMPScene(t.scene), 
                p.registerApp({
                    $latest_scene: r.$scene
                }), r.$url_query = u.setQuery(t.query), e ? (r = u.extend(r, e), p.track("$MPShow", r)) : p.para.autoTrack && p.para.autoTrack.appShow && p.autoTrackCustom.trackCustom("appShow", r, "$MPShow");
            },
            appHide: function(t) {
                var e = new Date().getTime(), r = {};
                r.$url_path = u.getCurrentPath(), y && e - y > 0 && (e - y) / 36e5 < 24 && (r.event_duration = (e - y) / 1e3), 
                t ? (r = u.extend(r, t), p.track("$MPHide", r)) : p.para.autoTrack && p.para.autoTrack.appHide && p.autoTrackCustom.trackCustom("appHide", r, "$MPHide"), 
                p.sendStrategy.onAppHide();
            },
            pageLoad: function(t) {
                if (t && u.isObject(t)) {
                    var e = u.extend({}, t);
                    if (t.q && u.extend(e, u.getObjFromQuery(u.decodeURIComponent(t.q))), t.scene) {
                        var r = t.scene;
                        r = -1 !== (r = u.decodeURIComponent(r)).indexOf("?") ? "?" + r.replace(/\?/g, "") : "?" + r, 
                        u.extend(e, u.getObjFromQuery(r));
                    }
                    var n = u.getUtm(e, "$", "$latest_");
                    this.sensors_mp_load_utm = n.pre1, this.sensors_mp_url_query = u.setQuery(t);
                }
            },
            pageShow: function(t) {
                var e = "系统没有取到值";
                "object" == s()(this) && ("string" == typeof this.route ? e = this.route : "string" == typeof this.__route__ && (e = this.__route__));
                var r = {};
                r.$referrer = v, r.$url_path = e, p.status.last_referrer = v, this.sensors_mp_load_utm && (u.extend(r, this.sensors_mp_load_utm), 
                this.sensors_mp_load_utm = null), this.sensors_mp_url_query && (r.$url_query = this.sensors_mp_url_query, 
                this.sensors_mp_url_query = ""), t ? (r = u.extend(r, t), p.track("$MPViewScreen", r)) : p.para.onshow ? p.para.onshow(p, e, this) : p.para.autoTrack && p.para.autoTrack.pageShow && p.autoTrackCustom.trackCustom("pageShow", r, "$MPViewScreen"), 
                v = e, p.status.referrer = e;
            },
            pageShare: function(t, e) {
                var r = t.onShareAppMessage;
                t.onShareAppMessage = function() {
                    var t = r.apply(this, arguments);
                    return p.para.autoTrack && p.para.autoTrack.pageShare && p.autoTrackCustom.trackCustom("pageShare", {
                        $url_path: u.getCurrentPath(),
                        $share_depth: u.getShareDepth()
                    }, "$MPShare"), p.para.allow_amend_share_path && ("object" != (void 0 === t ? "undefined" : s()(t)) && ((t = {}).path = u.getCurrentPath()), 
                    "object" != (void 0 === t ? "undefined" : s()(t)) || void 0 !== t.path && "" !== t.path || (t.path = u.getCurrentPath()), 
                    "object" == (void 0 === t ? "undefined" : s()(t)) && "string" == typeof t.path && (-1 === t.path.indexOf("?") ? t.path = t.path + "?" : "&" !== t.path.slice(-1) && (t.path = t.path + "&")), 
                    t.path = t.path + "sampshare=" + encodeURIComponent(u.getShareInfo())), t;
                };
            }
        }, p.quick = function() {
            var t = arguments[0], e = arguments[1], r = arguments[2], n = {};
            "appLaunch" === t || "appShow" === t ? (u.isObject(r) && (n = r), e && p.autoTrackCustom[t](e, n)) : "pageLoad" === t ? e && p.autoTrackCustom.pageLoad(e) : "appHide" !== t && "pageShow" !== t || (u.isObject(e) && (n = e), 
            p.autoTrackCustom[t](e, n));
        }, !1 !== p.para.autoTrack) if (p.para.is_plugin) p.App = function(t) {
            w(t = t || {}, "onLaunch", "appLaunch"), w(t, "onShow", "appShow"), w(t, "onHide", "appHide"), 
            App.apply(this, arguments);
        }, p.Page = function(t) {
            w(t, "onLoad", "pageLoad"), w(t, "onShow", "pageShow"), "function" == typeof t.onShareAppMessage && p.autoTrackCustom.pageShare(t), 
            Page.apply(this, arguments);
        }; else {
            var I = App;
            App = function(t) {
                w(t, "onLaunch", "appLaunch"), w(t, "onShow", "appShow"), w(t, "onHide", "appHide"), 
                I.apply(this, arguments);
            };
            var C = Page;
            Page = function(t) {
                w(t, "onLoad", "pageLoad"), w(t, "onShow", "pageShow"), "function" == typeof t.onShareAppMessage && p.autoTrackCustom.pageShare(t), 
                C.apply(this, arguments);
            };
        }
        p.initial(), e.a = p;
    },
    r5zL: function(t, e) {},
    rBKV: function(t, e) {
        t.exports = {
            NODE_ENV: '"production"'
        };
    }
}, [ "NHnr" ]);