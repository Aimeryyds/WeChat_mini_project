var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _ = {}, sa = {};

sa.para = require("./sensorsdata_conf.js"), sa.para.openid_url || (sa.para.openid_url = sa.para.server_url.replace(/\/sa(\.gif){0,1}/, "/mp_login")), 
"number" != typeof sa.para.send_timeout && (sa.para.send_timeout = 1e3);

var ArrayProto = Array.prototype, FuncProto = Function.prototype, ObjProto = Object.prototype, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty, LIB_VERSION = "1.9.8", LIB_NAME = "MiniProgram", source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term", mp_scene = {
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
}, sa_referrer = "直接打开", mpshow_time = null, share_depth = 0, share_distinct_id = "", is_first_launch = !1;

sa.lib_version = LIB_VERSION;

var logger = "object" === (void 0 === logger ? "undefined" : _typeof(logger)) ? logger : {};

if (logger.info = function() {
    if (sa.para.show_log && "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log) try {
        return console.log.apply(console, arguments);
    } catch (e) {
        console.log(arguments[0]);
    }
}, function() {
    var e = (FuncProto.bind, ArrayProto.forEach), t = ArrayProto.indexOf, r = Array.isArray, n = {}, i = _.each = function(t, r, i) {
        if (null == t) return !1;
        if (e && t.forEach === e) t.forEach(r, i); else if (t.length === +t.length) {
            for (var s = 0, a = t.length; s < a; s++) if (s in t && r.call(i, t[s], s, t) === n) return !1;
        } else for (var o in t) if (hasOwnProperty.call(t, o) && r.call(i, t[o], o, t) === n) return !1;
    };
    _.logger = logger, _.extend = function(e) {
        return i(slice.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
        }), e;
    }, _.extend2Lev = function(e) {
        return i(slice.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && (_.isObject(t[r]) && _.isObject(e[r]) ? _.extend(e[r], t[r]) : e[r] = t[r]);
        }), e;
    }, _.coverExtend = function(e) {
        return i(slice.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r]);
        }), e;
    }, _.isArray = r || function(e) {
        return "[object Array]" === toString.call(e);
    }, _.isFunction = function(e) {
        try {
            return /^\s*\bfunction\b/.test(e);
        } catch (e) {
            return !1;
        }
    }, _.isArguments = function(e) {
        return !(!e || !hasOwnProperty.call(e, "callee"));
    }, _.toArray = function(e) {
        return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : [];
    }, _.values = function(e) {
        var t = [];
        return null == e ? t : (i(e, function(e) {
            t[t.length] = e;
        }), t);
    }, _.include = function(e, r) {
        var s = !1;
        return null == e ? s : t && e.indexOf === t ? -1 != e.indexOf(r) : (i(e, function(e) {
            if (s || (s = e === r)) return n;
        }), s);
    };
}(), _.trim = function(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, _.isObject = function(e) {
    return "[object Object]" == toString.call(e) && null != e;
}, _.isEmptyObject = function(e) {
    if (_.isObject(e)) {
        for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
        return !0;
    }
    return !1;
}, _.isUndefined = function(e) {
    return void 0 === e;
}, _.isString = function(e) {
    return "[object String]" == toString.call(e);
}, _.isDate = function(e) {
    return "[object Date]" == toString.call(e);
}, _.isBoolean = function(e) {
    return "[object Boolean]" == toString.call(e);
}, _.isNumber = function(e) {
    return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e));
}, _.isJSONString = function(e) {
    try {
        JSON.parse(e);
    } catch (e) {
        return !1;
    }
    return !0;
}, _.decodeURIComponent = function(e) {
    var t = "";
    try {
        t = decodeURIComponent(e);
    } catch (r) {
        t = e;
    }
    return t;
}, _.encodeDates = function(e) {
    return _.each(e, function(t, r) {
        _.isDate(t) ? e[r] = _.formatDate(t) : _.isObject(t) && (e[r] = _.encodeDates(t));
    }), e;
}, _.formatDate = function(e) {
    function t(e) {
        return e < 10 ? "0" + e : e;
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
}, _.searchObjDate = function(e) {
    _.isObject(e) && _.each(e, function(t, r) {
        _.isObject(t) ? _.searchObjDate(e[r]) : _.isDate(t) && (e[r] = _.formatDate(t));
    });
}, _.formatString = function(e) {
    return e.length > sa.para.max_string_length ? (logger.info("字符串长度超过限制，已经做截取--" + e), 
    e.slice(0, sa.para.max_string_length)) : e;
}, _.searchObjString = function(e) {
    _.isObject(e) && _.each(e, function(t, r) {
        _.isObject(t) ? _.searchObjString(e[r]) : _.isString(t) && (e[r] = _.formatString(t));
    });
}, _.unique = function(e) {
    for (var t, r = [], n = {}, i = 0; i < e.length; i++) (t = e[i]) in n || (n[t] = !0, 
    r.push(t));
    return r;
}, _.strip_sa_properties = function(e) {
    return _.isObject(e) ? (_.each(e, function(t, r) {
        if (_.isArray(t)) {
            var n = [];
            _.each(t, function(e) {
                _.isString(e) ? n.push(e) : logger.info("您的数据-", t, "的数组里的值必须是字符串,已经将其删除");
            }), 0 !== n.length ? e[r] = n : (delete e[r], logger.info("已经删除空的数组"));
        }
        _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("您的数据-", t, "-格式不满足要求，我们已经将其删除"), 
        delete e[r]);
    }), e) : e;
}, _.strip_empty_properties = function(e) {
    var t = {};
    return _.each(e, function(e, r) {
        null != e && (t[r] = e);
    }), t;
}, _.utf8Encode = function(e) {
    e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var t, r, n, i = "", s = 0;
    for (t = r = 0, s = e.length, n = 0; n < s; n++) {
        var a = e.charCodeAt(n), o = null;
        a < 128 ? r++ : o = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), 
        null !== o && (r > t && (i += e.substring(t, r)), i += o, t = r = n + 1);
    }
    return r > t && (i += e.substring(t, e.length)), i;
}, _.base64Encode = function(e) {
    var t, r, n, i, s, a, o, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", p = 0, f = 0, l = "", h = [];
    if (!e) return e;
    e = _.utf8Encode(e);
    do {
        t = e.charCodeAt(p++), r = e.charCodeAt(p++), n = e.charCodeAt(p++), c = t << 16 | r << 8 | n, 
        i = c >> 18 & 63, s = c >> 12 & 63, a = c >> 6 & 63, o = 63 & c, h[f++] = u.charAt(i) + u.charAt(s) + u.charAt(a) + u.charAt(o);
    } while (p < e.length);
    switch (l = h.join(""), e.length % 3) {
      case 1:
        l = l.slice(0, -2) + "==";
        break;

      case 2:
        l = l.slice(0, -1) + "=";
    }
    return l;
}, _.getCurrentPath = function() {
    var e = "未取到";
    try {
        var t = getCurrentPages();
        e = t[t.length - 1].route;
    } catch (e) {
        logger.info(e);
    }
    return e;
}, _.getQueryParam = function(e, t) {
    var r = "[\\?&]" + t + "=([^&#]*)", n = new RegExp(r), i = n.exec(e);
    return null === i || i && "string" != typeof i[1] && i[1].length ? "" : _.decodeURIComponent(i[1]);
}, sa.initialState = {
    queue: [],
    isComplete: !1,
    systemIsComplete: !1,
    storeIsComplete: !1,
    checkIsComplete: function() {
        this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (_.each(this.queue, function(e) {
            sa[e[0]].apply(sa, slice.call(e[1]));
        }), sa.queue = []));
    }
}, _.getPrefixUtm = function(e, t, r) {
    if (t = t || "", r = r || "_", !_.isObject(e)) return {};
    var n = {}, i = {};
    for (var s in e) -1 !== (" " + source_channel_standard + " ").indexOf(" " + s + " ") ? n[t + s] = e[s] : i[r + s] = e[s];
    return {
        $utms: n,
        otherUtms: i
    };
}, _.convertObjToParam = function(e) {
    var t = [];
    for (var r in e) t.push(r + "=" + e[r]);
    return t.join("&");
}, _.getSource = function(e) {
    if (_.isObject(e)) {
        if (_.isEmptyObject(e)) return {};
        for (var t in e) -1 === (" " + source_channel_standard + " ").indexOf(" " + t + " ") ? delete e[t] : e[t] = e[t].replace("?", "*");
        e = _.convertObjToParam(e), e = "?" + e;
    } else e = _.decodeURIComponent(e);
    var r = source_channel_standard.split(" "), n = source_channel_standard.split(" "), i = "", s = {};
    return e = e.split("?"), 2 !== e.length ? {} : (e = e[1], e = "?" + e, _.isArray(sa.para.source_channel) && sa.para.source_channel.length > 0 && (n = n.concat(sa.para.source_channel), 
    n = _.unique(n)), _.each(n, function(t) {
        i = _.getQueryParam(e, t), i = _.decodeURIComponent(i), i.length && _.include(r, t) && (s[t] = i);
    }), s);
}, _.getObjFromQuery = function(e) {
    var t = e.split("?"), r = {};
    return t && t[1] ? (_.each(t[1].split("&"), function(e) {
        var t = e.split("=");
        t[0] && t[1] && (r[t[0]] = t[1]);
    }), r) : {};
}, _.getUtm = function(e, t, r) {
    var n = _.getSource(e);
    return void 0 === r && t ? {
        pre1: _.getPrefixUtm(n, t).$utms || {},
        pre2: {}
    } : void 0 !== r && t ? {
        pre1: _.getPrefixUtm(n, t).$utms || {},
        pre2: _.getPrefixUtm(n, r).$utms || {}
    } : {
        pre1: {},
        pre2: {}
    };
}, _.getMPScene = function(e) {
    return "number" == typeof e || "string" == typeof e && "" !== e ? (e = String(e), 
    mp_scene[e] || e) : "未取到值";
}, _.getShareDepth = function() {
    if ("number" == typeof share_depth && 0 !== share_depth) {
        var e = sa.store.getDistinctId(), t = sa.store.getFirstId(), r = share_distinct_id;
        return !r || r !== e && r !== t ? share_depth + 1 : share_depth;
    }
    return 1;
}, _.setShareInfo = function(e, t) {
    var r = {};
    if (!(e && _.isObject(e.query) && e.query.sampshare)) return {};
    if (r = _.decodeURIComponent(e.query.sampshare), !_.isJSONString(r)) return {};
    r = JSON.parse(r);
    var n = r.d, i = r.p, s = r.i;
    "string" == typeof s ? (t.$share_distinct_id = s, share_distinct_id = s) : t.$share_distinct_id = "取值异常", 
    "number" == typeof n ? (t.$share_depth = n, share_depth = n) : t.$share_depth = "取值异常", 
    t.$share_url_path = "string" == typeof i ? i : "取值异常";
}, _.getShareInfo = function() {
    return JSON.stringify({
        i: sa.store.getDistinctId() || "取值异常",
        p: _.getCurrentPath(),
        d: _.getShareDepth()
    });
}, _.setUtm = function(e, t) {
    var r = {};
    if (e && _.isObject(e.query)) {
        r = _.extend({}, e.query);
        var n = r.scene;
        n && (n = -1 !== n.indexOf("?") ? "?" + n.replace(/\?/g, "") : "?" + n, _.extend(r, _.getObjFromQuery(n))), 
        e.query.q && _.extend(r, _.getObjFromQuery(_.decodeURIComponent(e.query.q)));
    }
    if (e && _.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
        var i = {};
        _.isObject(e.referrerInfo.extraData) && !_.isEmptyObject(e.referrerInfo.extraData) ? i = e.referrerInfo.extraData : _.isJSONString(e.referrerInfo.extraData) && (i = JSON.parse(e.referrerInfo.extraData)), 
        _.extend(r, i);
    }
    var s = _.getUtm(r, "$", "$latest_");
    return _.extend(t, s.pre1), s;
}, _.info = {
    properties: {
        $lib: LIB_NAME,
        $lib_version: String(LIB_VERSION),
        $user_agent: "SensorsAnalytics MP SDK"
    },
    getSystem: function() {
        function e() {
            wx.getSystemInfo({
                success: function(e) {
                    t.$model = e.model, t.$screen_width = Number(e.windowWidth), t.$screen_height = Number(e.windowHeight), 
                    t.$os = e.system.split(" ")[0], t.$os_version = e.system.split(" ")[1];
                },
                complete: function() {
                    sa.initialState.systemIsComplete = !0, sa.initialState.checkIsComplete();
                }
            });
        }
        var t = this.properties;
        !function() {
            wx.getNetworkType({
                success: function(e) {
                    t.$network_type = e.networkType;
                },
                complete: e
            });
        }();
    }
}, sa._ = _, sa.prepareData = function(e, t) {
    var r = {
        distinct_id: this.store.getDistinctId(),
        lib: {
            $lib: LIB_NAME,
            $lib_method: "code",
            $lib_version: String(LIB_VERSION)
        },
        properties: {}
    };
    _.extend(r, e), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(r.properties, e.properties), 
    e.type && "profile" === e.type.slice(0, 7) || (r.properties = _.extend({}, _.info.properties, sa.store.getProps(), r.properties), 
    "object" === _typeof(sa.store._state) && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > new Date().getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1), 
    r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, 
    delete r.properties.$time) : sa.para.use_client_time && (r.time = 1 * new Date()), 
    _.searchObjDate(r), _.searchObjString(r), sa.send(r, t);
}, sa.store = {
    storageInfo: null,
    getUUID: function() {
        return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
    },
    getStorage: function() {
        return this.storageInfo ? this.storageInfo : (this.storageInfo = wx.getStorageSync("sensorsdata2015_wechat") || "", 
        this.storageInfo);
    },
    _state: {},
    toState: function(e) {
        var t = null;
        _.isJSONString(e) ? (t = JSON.parse(e), t.distinct_id ? this._state = t : this.set("distinct_id", this.getUUID())) : _.isObject(e) ? (t = e, 
        t.distinct_id ? this._state = t : this.set("distinct_id", this.getUUID())) : this.set("distinct_id", this.getUUID());
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
    setProps: function(e, t) {
        var r = this._state.props || {};
        t ? this.set("props", e) : (_.extend(r, e), this.set("props", r));
    },
    set: function(e, t) {
        var r = {};
        "string" == typeof e ? r[e] = t : "object" === (void 0 === e ? "undefined" : _typeof(e)) && (r = e), 
        this._state = this._state || {};
        for (var n in r) this._state[n] = r[n];
        this.save();
    },
    change: function(e, t) {
        this._state[e] = t;
    },
    save: function() {
        wx.setStorageSync("sensorsdata2015_wechat", this._state);
    },
    init: function() {
        var e = this.getStorage();
        if (e) this.toState(e); else {
            is_first_launch = !0;
            var t = new Date(), r = t.getTime();
            t.setHours(23), t.setMinutes(59), t.setSeconds(60), this.set({
                distinct_id: this.getUUID(),
                first_visit_time: r,
                first_visit_day_time: t.getTime()
            });
        }
    }
}, sa.setProfile = function(e, t) {
    sa.prepareData({
        type: "profile_set",
        properties: e
    }, t);
}, sa.setOnceProfile = function(e, t) {
    sa.prepareData({
        type: "profile_set_once",
        properties: e
    }, t);
}, sa.track = function(e, t, r) {
    this.prepareData({
        type: "track",
        event: e,
        properties: t
    }, r);
}, sa.identify = function(e, t) {
    if ("number" == typeof e) e = String(e); else if ("string" != typeof e) return !1;
    var r = sa.store.getFirstId();
    !0 === t ? r ? sa.store.set("first_id", e) : sa.store.set("distinct_id", e) : r ? sa.store.change("first_id", e) : sa.store.change("distinct_id", e);
}, sa.trackSignup = function(e, t, r, n) {
    sa.prepareData({
        original_id: sa.store.getFirstId() || sa.store.getDistinctId(),
        distinct_id: e,
        type: "track_signup",
        event: t,
        properties: r
    }, n), sa.store.set("distinct_id", e);
}, sa.registerApp = function(e) {
    _.isObject(e) && !_.isEmptyObject(e) && (_.info.properties = _.extend(_.info.properties, e));
}, sa.register = function(e) {
    _.isObject(e) && !_.isEmptyObject(e) && sa.store.setProps(e);
}, sa.clearAllRegister = function() {
    sa.store.setProps({}, !0);
}, sa.login = function(e) {
    var t = sa.store.getFirstId(), r = sa.store.getDistinctId();
    e !== r && (t ? sa.trackSignup(e, "$SignUp") : (sa.store.set("first_id", r), sa.trackSignup(e, "$SignUp")));
}, sa.openid = {
    getRequest: function(e) {
        wx.login({
            success: function(t) {
                t.code && sa.para.appid && sa.para.openid_url ? wx.request({
                    url: sa.para.openid_url + "&code=" + t.code + "&appid=" + sa.para.appid,
                    method: "GET",
                    complete: function(t) {
                        _.isObject(t) && _.isObject(t.data) && t.data.openid ? e(t.data.openid) : e();
                    }
                }) : e();
            }
        });
    },
    getWXStorage: function() {
        var e = sa.store.getStorage();
        if (e && _.isObject(e)) return e.openid;
    },
    getOpenid: function(e) {
        if (!sa.para.appid) return e(), !1;
        var t = this.getWXStorage();
        t ? e(t) : this.getRequest(function(t) {
            t && e(t);
        });
    }
}, sa.initial = function() {
    this._.info.getSystem(), this.store.init(), _.isObject(this.para.register) && (_.info.properties = _.extend(_.info.properties, this.para.register));
}, sa.init = function() {
    sa.initialState.storeIsComplete = !0, sa.initialState.checkIsComplete();
}, sa.getPresetProperties = function() {
    if (_.info && _.info.properties && _.info.properties.$lib && _.info.properties.$user_agent) {
        var e = _.extend({
            $url_path: _.getCurrentPath()
        }, _.info.properties, sa.store.getProps());
        return delete e.$lib, delete e.$user_agent, e;
    }
    return {};
}, _.autoExeQueue = function() {
    return {
        items: [],
        enqueue: function(e) {
            this.items.push(e), this.start();
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
}, sa.requestQueue = function(e) {
    this.url = e.url;
}, sa.requestQueue.prototype.isEnd = function() {
    this.received || (this.received = !0, this.close());
}, sa.requestQueue.prototype.start = function() {
    var e = this;
    setTimeout(function() {
        e.isEnd();
    }, sa.para.send_timeout), wx.request({
        url: this.url,
        method: "GET",
        complete: function() {
            e.isEnd();
        }
    });
}, sa.dataQueue = _.autoExeQueue(), sa.send = function(e) {
    var t = "";
    e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), 
    logger.info(e), e = JSON.stringify(e), t = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(e));
    var r = new sa.requestQueue({
        url: t
    });
    r.close = function() {
        sa.dataQueue.close();
    }, sa.dataQueue.enqueue(r);
}, sa.autoTrackCustom = function(e, t, r) {
    var n = sa.para.autoTrack[e], i = "";
    sa.para.autoTrack && n && ("function" == typeof n ? (i = n(), _.isObject(i) && _.extend(t, i)) : _.isObject(n) && (_.extend(t, n), 
    sa.para.autoTrack[e] = !0), sa.track(r, t));
}, sa.setOpenid = function(e, t) {
    sa.store.set("openid", e), t ? sa.store.set("distinct_id", e) : sa.identify(e, !0);
}, sa.initWithOpenid = function(e) {
    e = e || {}, sa.openid.getOpenid(function(t) {
        t && sa.setOpenid(t, e.isCoverLogin), sa.init();
    });
}, _.each([ "setProfile", "setOnceProfile", "track", "register", "clearAllRegister", "autoTrackCustom", "registerApp" ], function(e) {
    var t = sa[e];
    sa[e] = function() {
        sa.initialState.isComplete ? t.apply(sa, arguments) : sa.initialState.queue.push([ e, arguments ]);
    };
}), !1 !== sa.para.autoTrack) {
    var e = function(e, t, r) {
        if (e[t]) {
            var n = e[t];
            e[t] = function(e) {
                n.call(this, e), r.call(this, e, t);
            };
        } else e[t] = function(e) {
            r.call(this, e, t);
        };
    }, appLaunch = function(e) {
        this[sa.para.name] = sa;
        var t = {};
        e && e.path && (t.$url_path = e.path), _.setShareInfo(e, t);
        var r = _.setUtm(e, t);
        is_first_launch ? (t.$is_first_time = !0, _.isEmptyObject(r.pre1) || sa.setOnceProfile(r.pre1)) : t.$is_first_time = !1, 
        _.isEmptyObject(r.pre2) || sa.registerApp(r.pre2), e.scene = e.scene || "未取到值", 
        t.$scene = _.getMPScene(e.scene), sa.registerApp({
            $latest_scene: t.$scene
        }), sa.para.autoTrack && sa.para.autoTrack.appLaunch && sa.autoTrackCustom("appLaunch", t, "$MPLaunch");
    }, appShow = function(e) {
        var t = {};
        mpshow_time = new Date().getTime(), e && e.path && (t.$url_path = e.path), _.setShareInfo(e, t);
        var r = _.setUtm(e, t);
        _.isEmptyObject(r.pre2) || sa.registerApp(r.pre2), e.scene = e.scene || "未取到值", 
        t.$scene = _.getMPScene(e.scene), sa.registerApp({
            $latest_scene: t.$scene
        }), sa.para.autoTrack && sa.para.autoTrack.appShow && sa.autoTrackCustom("appShow", t, "$MPShow");
    }, appHide = function() {
        var e = new Date().getTime(), t = {};
        t.$url_path = _.getCurrentPath(), mpshow_time && e - mpshow_time > 0 && (e - mpshow_time) / 36e5 < 24 && (t.event_duration = (e - mpshow_time) / 1e3), 
        sa.para.autoTrack && sa.para.autoTrack.appHide && sa.autoTrackCustom("appHide", t, "$MPHide");
    }, appError = function() {}, appUnLaunch = function() {}, pageOnunload = function(e, t) {}, pageOnHide = function() {}, pageOnReady = function() {}, pageOnPullDownRefresh = function() {}, pageOnReachBottom = function() {}, pageOnShareAppMessage = function(e, t) {}, p = App;
    App = function(t) {
        e(t, "onLaunch", appLaunch), e(t, "onShow", appShow), e(t, "onHide", appHide), p(t);
    };
    var oldPage = Page;
    Page = function(t) {
        if (e(t, "onLoad", function(e) {
            if (e && _.isObject(e)) {
                var t = _.extend({}, e);
                e.q && _.extend(t, _.getObjFromQuery(_.decodeURIComponent(e.q)));
                var r = _.getUtm(t, "$", "$latest_");
                this.sensors_mp_load_utm = r.pre1;
            }
        }), e(t, "onShow", function() {
            var e = "系统没有取到值";
            "object" === _typeof(this) && ("string" == typeof this.route ? e = this.route : "string" == typeof this.__route__ && (e = this.__route__));
            var t = {};
            t.$referrer = sa_referrer, t.$url_path = e, this.sensors_mp_load_utm && (_.extend(t, this.sensors_mp_load_utm), 
            this.sensors_mp_load_utm = null), sa.para.onshow ? sa.para.onshow(sa, e, this) : sa.autoTrackCustom("pageShow", t, "$MPViewScreen"), 
            sa_referrer = e;
        }), "function" == typeof t.onShareAppMessage) {
            var r = t.onShareAppMessage;
            t.onShareAppMessage = function() {
                sa.para.autoTrack && sa.para.autoTrack.pageShare && sa.autoTrackCustom("pageShare", {
                    $url_path: _.getCurrentPath(),
                    $share_depth: _.getShareDepth()
                }, "$MPShare");
                var e = r.apply(this, arguments);
                return sa.para.allow_amend_share_path && "string" == typeof e.path && -1 !== e.path.indexOf("/") && (-1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(-1) && (e.path = e.path + "&"), 
                e.path = e.path + "sampshare=" + encodeURIComponent(_.getShareInfo())), e;
            };
        }
        oldPage.apply(this, arguments);
    };
}

sa.initial(), module.exports = sa;