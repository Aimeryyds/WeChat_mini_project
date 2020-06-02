function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _util = require("./util.js"), _util2 = _interopRequireDefault(_util), _model = require("./model.js"), _wxApi = require("./wxApi.js"), testServer = "https://analytics-test.speiyou.com/uploadMessage", prodServer = "https://analytics.speiyou.com/uploadMessage", XesAnalyticsMP_data = {
    session_id: (0, _wxApi.getStorage)("XesAnalyticsMP_data").session_id || 0
}, initialStore = {
    systemInfo: {},
    baseProps: _model.baseModel,
    dataProps: {
        common: _model.dataPropsModel,
        properties: _model.propertiesModel,
        busProps: _model.busPropsModel
    }
}, handleFun = {
    handleSystem: function() {
        var e = this;
        (0, _wxApi.getSystemInfo)().then(function(t) {
            try {
                initialStore.systemInfo = t;
                var i = {
                    os: t.platform,
                    os_vers: t.system,
                    model: t.model,
                    manufacturer: t.brand,
                    screen_size: t.windowWidth + "×" + t.windowHeight,
                    app_ver: t.SDKVersion
                };
                _util2.default.extend(initialStore.baseProps, i), _util2.default.extend(initialStore.dataProps.busProps, {
                    wechat_ver: t.version
                });
            } catch (e) {
                console.error(e);
            }
            e.handleLocation();
        });
    },
    handleLocation: function() {
        initialStore.systemInfo.locationAuthorized && XesAnalyticsMP.allowLocation ? (0, 
        _wxApi.getLocation)().then(function(e) {
            var t = {
                latitude: e.latitude,
                longitude: e.longitude
            };
            _util2.default.extend(initialStore.dataProps.properties, t), XesAnalyticsMP.initState.storeIsComplete = !0, 
            XesAnalyticsMP.initState.checkIsComplete();
        }) : (XesAnalyticsMP.initState.storeIsComplete = !0, XesAnalyticsMP.initState.checkIsComplete());
    },
    onNetChange: function() {
        var e = this;
        wx.onNetworkStatusChange(function(t) {
            logger.info("监听到网络变化，网络类型变为", t.networkType);
            var i = t.networkType;
            if ("wifi" === i) initialStore.dataProps.properties.netwk_typ = i, e.getWifi(!0); else {
                var a = {
                    netwk_typ: i,
                    wifi_address: "",
                    wifi_name: "",
                    wifi_signal: ""
                };
                _util2.default.extend(initialStore.dataProps.properties, a);
            }
        });
    },
    handleNetInfo: function() {
        var e = this;
        (0, _wxApi.getNetType)().then(function(t) {
            var i = t.networkType;
            initialStore.dataProps.properties.netwk_typ = i, "wifi" === i ? e.getWifi() : e.handleSystem(), 
            e.onNetChange();
        });
    },
    getWifi: function(e) {
        var t = this;
        (0, _wxApi.getWifiInfo)().then(function(i) {
            try {
                var a = i.SSID, s = i.BSSID, o = i.signalStrength;
                o < 1 && (o = parseInt(100 * o));
                var n = {
                    wifi_address: s,
                    wifi_name: a,
                    wifi_signal: o
                };
                _util2.default.extend(initialStore.dataProps.properties, n);
            } catch (e) {
                console.error(e);
            }
            e || t.handleSystem();
        });
    },
    handleStorage: function() {
        (0, _wxApi.getStorage)("XesAnalyticsMP_data").then(function(e) {
            XesAnalyticsMP.session_id = e.session_id || 0, XesAnalyticsMP.allowLocation = e.allowLocation || !1, 
            XesAnalyticsMP_data.session_id = XesAnalyticsMP.session_id + 1, XesAnalyticsMP_data.allowLocation = XesAnalyticsMP.allowLocation, 
            (0, _wxApi.setStorage)("XesAnalyticsMP_data", XesAnalyticsMP_data), XesAnalyticsMP.initState.finishGetCache = !0, 
            XesAnalyticsMP.initState.checkIsComplete();
        });
    }
}, pageStayTime = 0, XesAnalyticsMP = {
    usrProps: _model.usrPropsModel,
    seq_id: 0,
    session_id: 0,
    autoTrackCustom: !0,
    allowLocation: (0, _wxApi.getStorage)("XesAnalyticsMP_data").allowLocation || !1,
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
            logger.info("--- 初始化成功啊 ---", initialStore, XesAnalyticsMP), this.queue.length && XesAnalyticsMP.checkQueue());
        }
    },
    initial: function() {
        handleFun.handleNetInfo(), handleFun.handleStorage();
    },
    sendMessage: function(e, t) {
        var i = this, a = initialStore.dataProps.common, s = a.proj_id, o = a.source, n = +new Date(), r = {
            url: this.eventServer,
            data: e,
            projId: s,
            source: o,
            uploadId: _util2.default.encryption(s, o, n),
            time: n
        };
        (0, _wxApi.msgRequest)(r).then(function(a) {
            logger.info(e), "errorNet" === a.status && (i.initState.queue = i.initState.queue.concat(t), 
            logger.info("本次埋点上报失败，当前埋点队列", i.initState.queue));
        });
    },
    handleFullMessage: function() {
        var e = this;
        try {
            var t = JSON.parse(JSON.stringify(initialStore.baseProps));
            t.up_time = new Date().getTime(), t.data = [];
            var i = JSON.parse(JSON.stringify(this.initState.queue));
            this.initState.queue = [];
            var a = initialStore.dataProps.common, s = a.proj_id, o = a.source;
            _util2.default.each(i, function(i) {
                var a = {};
                i.prepareData.trace_id = _util2.default.encryption(s, o, +new Date()), _util2.default.extend(a, initialStore.dataProps.common, i.prepareData), 
                _util2.default.coverExtend(a.bus_props, initialStore.dataProps.busProps), a.properties = initialStore.dataProps.properties, 
                a.usr_props = e.usrProps, t.data.push(a);
            }), this.sendMessage(t, i);
        } catch (e) {
            console.error(e);
        }
    },
    checkQueue: function() {
        if (this.initState.queue.length && this.initState.isComplete && "none" !== initialStore.dataProps.properties) {
            if (this.initState.queue.length > this.initState.maxLen) return this.sliceQueue();
            this.handleFullMessage();
        }
    },
    sliceQueue: function() {
        for (var e = this, t = JSON.parse(JSON.stringify(this.initState.queue)), i = [], a = 0; a < t.length; a += this.initState.maxLen) i.push(t.slice(a, a + this.initState.maxLen));
        _util2.default.each(i, function(t) {
            e.initState.queue = t, e.handleFullMessage();
        });
    },
    prepareData: function(e) {
        var t = JSON.parse(JSON.stringify(e.busProp));
        _util2.default.extend(t, {
            page_id: _wxApi.pathModel.getTitle(),
            refer_id: _wxApi.pathModel.getTitle("referer")
        });
        var i = {
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
        this.initState.queue.push(i), this.checkQueue();
    },
    autoTrack: {
        appLaunch: function(e) {
            var t = e.scene;
            initialStore.dataProps.busProps.from_id = (0, _wxApi.getFromId)(t);
        },
        appShow: function(e) {
            XesAnalyticsMP.seq_id = 0;
            var t = e.scene;
            initialStore.dataProps.busProps.from_id = (0, _wxApi.getFromId)(t), XesAnalyticsMP.allowLocation && (XesAnalyticsMP.initState.storeIsComplete = !1, 
            handleFun.handleLocation());
        },
        appHide: function() {
            XesAnalyticsMP.session_id++, XesAnalyticsMP_data.session_id = XesAnalyticsMP.session_id, 
            (0, _wxApi.setStorage)("XesAnalyticsMP_data", XesAnalyticsMP_data);
        },
        pageShow: function() {
            XesAnalyticsMP.autoTrackCustom && (pageStayTime = new Date().getTime(), XesAnalyticsMP.view("5"));
        },
        pageHide: function() {
            XesAnalyticsMP.autoTrackCustom && (pageStayTime = new Date().getTime() - pageStayTime, 
            XesAnalyticsMP.view("", {
                duration: pageStayTime
            }));
        },
        pageUnload: function() {
            XesAnalyticsMP.autoTrackCustom && (pageStayTime = new Date().getTime() - pageStayTime, 
            XesAnalyticsMP.view("", {
                duration: pageStayTime
            }));
        }
    }
}, logger = "object" === (void 0 === logger ? "undefined" : _typeof(logger)) ? logger : {};

logger.info = function() {
    if (XesAnalyticsMP.showLog && "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log) try {
        return console.log.apply(console, arguments);
    } catch (e) {
        console.log(arguments[0]);
    }
}, XesAnalyticsMP.registerPage = function(e, t) {
    if (t = t || "extendBus", !_util2.default.isObject(e)) return console.error("Invalid params: The first param expected Object !");
    var i = {
        extendBus: function() {
            _util2.default.extend(initialStore.dataProps.busProps, e);
        },
        setLocation: function() {
            var t = {
                latitude: e.latitude,
                longitude: e.longitude
            }, i = e.allowLocation;
            if ("boolean" != typeof i) return console.error("Invalid params: allowLocation");
            t.latitude && t.longitude && _util2.default.extend(initialStore.dataProps.properties, t), 
            XesAnalyticsMP.allowLocation = i, XesAnalyticsMP_data.allowLocation = i, (0, _wxApi.setStorage)("XesAnalyticsMP_data", XesAnalyticsMP_data);
        },
        setPagesMap: function() {
            _wxApi.pathModel.routerMap = e;
        }
    };
    i[t] && i[t]();
}, XesAnalyticsMP.view = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!_util2.default.isObject(t)) return console.error("Invalid params: The second param expected Object !");
    this.prepareData({
        event_id: e,
        event_type: "view",
        busProp: t
    });
}, XesAnalyticsMP.track = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments[2];
    if (!_util2.default.isObject(t)) return console.error("Invalid params: The second param expected Object !");
    this.prepareData({
        event_id: e,
        event_type: "click",
        busProp: t
    }, i);
}, XesAnalyticsMP.setProfile = function(e) {
    if (!_util2.default.isObject(e)) return console.error("Invalid params: Expected Object !");
    _util2.default.extend(this.usrProps, e), "" !== this.usrProps.gid && this.usrProps.gid && "" !== this.usrProps.open_id && this.usrProps.open_id || (this.usrProps.gid = this.usrProps.open_id = this.openId);
}, XesAnalyticsMP.init = function(e) {
    var t = e.proj_id, i = e.event_env, a = e.auto_track, s = void 0 === a || a, o = e.show_log;
    return this.openId ? t ? (initialStore.dataProps.common.proj_id = t, this.eventServer = "test" === i ? testServer : prodServer, 
    this.autoTrackCustom = s, this.showLog = o, this.initState.userInitIsComplete = !0, 
    void this.initState.checkIsComplete()) : console.error("'proj_id' can not be empty !") : console.error("Please set openId first !");
}, XesAnalyticsMP.setOpenId = function(e) {
    if (!e) return console.error('setOpenId: args "openId" can not be empty !');
    this.openId = e, this.usrProps.open_id = this.usrProps.gid = this.openId, this.initState.finishSetGid = !0, 
    this.initState.checkIsComplete();
};

var oldApp = App;

App = function(e) {
    _util2.default.mp_proxy(e, "onLaunch", "appLaunch", XesAnalyticsMP), _util2.default.mp_proxy(e, "onShow", "appShow", XesAnalyticsMP), 
    _util2.default.mp_proxy(e, "onHide", "appHide", XesAnalyticsMP), oldApp.apply(this, arguments);
};

var oldPage = Page;

Page = function(e) {
    _util2.default.mp_proxy(e, "onShow", "pageShow", XesAnalyticsMP), _util2.default.mp_proxy(e, "onHide", "pageHide", XesAnalyticsMP), 
    _util2.default.mp_proxy(e, "onUnload", "pageUnload", XesAnalyticsMP), oldPage.apply(this, arguments);
}, XesAnalyticsMP.initial(), exports.default = XesAnalyticsMP;