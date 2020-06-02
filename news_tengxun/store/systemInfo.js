var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = t(require("../utils/logger")), n = t(require("../utils/mlodash")), s = {
    name: "systemInfo",
    state: {
        app_version: 2410,
        systemInfo: null,
        networkType: null,
        networkIsConnected: !0,
        _menuButtonRect: null
    },
    getter: {
        reqParams: function() {
            return {
                system: this.getSysInfo().system,
                version: this.getSysInfo().version,
                SDKVersion: this.getSysInfo().SDKVersion,
                brand: this.getSysInfo().brand,
                platform: this.getSysInfo().platform,
                model: this.getSysInfo().model,
                network: this.networkType,
                app_version: this.app_version
            };
        },
        reportParams: function() {
            return {
                brand: this.getSysInfo().brand,
                pixelRatio: this.getSysInfo().pixelRatio,
                windowWidth: this.getSysInfo().windowHeight,
                windowHeight: this.getSysInfo().windowHeight,
                language: this.getSysInfo().language,
                network: this.networkType
            };
        },
        beaconParams: function() {
            return {
                mpbrand: this.getSysInfo().brand,
                mpmodel: this.getSysInfo().model,
                mpversion: this.getSysInfo().version,
                mpsystem: this.getSysInfo().system,
                mpplatform: this.getSysInfo().platform,
                mpSDKVersion: this.getSysInfo().SDKVersion,
                mpnetwork: this.networkType,
                appVersion: this.app_version
            };
        },
        model: function() {
            return this.getSysInfo().model;
        },
        pixelRatio: function() {
            return this.getSysInfo().pixelRatio;
        },
        windowWidth: function() {
            return this.getSysInfo().windowWidth;
        },
        windowHeight: function() {
            return this.getSysInfo().windowHeight;
        },
        system: function() {
            return this.getSysInfo().system;
        },
        language: function() {
            return this.getSysInfo().language;
        },
        version: function() {
            return this.getSysInfo().version;
        },
        screenWidth: function() {
            return this.getSysInfo().screenWidth;
        },
        screenHeight: function() {
            return this.getSysInfo().screenHeight;
        },
        SDKVersion: function() {
            return this.getSysInfo().SDKVersion;
        },
        brand: function() {
            return this.getSysInfo().brand;
        },
        fontSizeSetting: function() {
            return this.getSysInfo().fontSizeSetting;
        },
        batteryLevel: function() {
            return this.getSysInfo().batteryLevel;
        },
        statusBarHeight: function() {
            return this.getSysInfo().statusBarHeight;
        },
        platform: function() {
            return this.getSysInfo().platform;
        },
        isIphoneX: function() {
            return this.getSysInfo().isIphoneX;
        },
        isIOS12_2: function() {
            return this.getSysInfo().isIOS12_2;
        },
        menuButtonRect: function() {
            if (this._menuButtonRect && this._menuButtonRect.bottom) return this._menuButtonRect;
            var t = {};
            if (n.default.isFunction(wx.getMenuButtonBoundingClientRect)) try {
                t = wx.getMenuButtonBoundingClientRect();
            } catch (t) {
                e.default.error("getMenuButtonBoundingClientRect 接口失败:", t);
            }
            return t && t.bottom && 0 !== t.bottom || (t = this.getSysInfo().isIphoneX ? {
                bottom: 82,
                height: 32,
                left: 278,
                right: 365,
                top: 50,
                width: 87
            } : {
                bottom: this.getSysInfo().statusBarHeight + 40,
                height: 32,
                left: 278,
                right: 365,
                top: this.getSysInfo().statusBarHeight + 8,
                width: 87
            }), this._menuButtonRect = t, t;
        }
    },
    method: {
        getSysInfo: function() {
            if (null !== this.systemInfo) return this.systemInfo;
            try {
                this.systemInfo = wx.getSystemInfoSync();
                var t = this.systemInfo.model;
                this.systemInfo.model = t.replace(/,|>| /g, "").replace(/</g, "_"), this.systemInfo.isIphoneX = t.search("iPhone X") >= 0 || t.search("iPhone11,2") >= 0 || t.search("iPhone11,4") >= 0 || t.search("iPhone11,6") >= 0 || t.search("iPhone11,8") >= 0;
                var n = this.systemInfo.system.toUpperCase();
                this.systemInfo.isIOS12_2 = -1 !== n.indexOf("IOS 12.2"), e.default.info("wx.getSystemInfoSync:", this.systemInfo);
            } catch (t) {
                e.default.error("wx.getSystemInfoSync发生错误：", t), this.systemInfo = null;
            }
            return this.systemInfo || {};
        },
        getNetworkType: function() {
            var t = this;
            return new Promise(function(e, n) {
                wx.getNetworkType({
                    success: function(n) {
                        t.networkType = n.networkType, "none" === n.networkType && (t.networkIsConnected = !1), 
                        e(n.networkType);
                    },
                    fail: n
                });
            });
        }
    }
};

exports.default = s;