function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var a = e(require("./npm/babel-runtime/regenerator/index.js")), n = e(require("./npm/babel-runtime/core-js/json/stringify.js")), r = e(require("./npm/babel-runtime/helpers/asyncToGenerator.js")), o = e(require("./npm/babel-runtime/helpers/classCallCheck.js")), i = e(require("./npm/babel-runtime/helpers/createClass.js")), u = e(require("./npm/labrador/index.js")), s = require("./const.js"), c = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("./utils/util.js")), l = null, p = {
    default: {
        name: "default",
        host: "https://www.huwaijijie.com/",
        wx_appid: "wxce3073e1b2e85860",
        url_wxapp: "https://www.huwaijijie.com/wxapp/",
        url_api: "https://www.huwaijijie.com/api/user/",
        url_img: "https://www.huwaijijie.com/wxapp/img/",
        homepage: "https://www.huwaijijie.com/"
    },
    test: {
        name: "test",
        host: "https://huyue-tech.com/",
        wx_appid: "wxce3073e1b2e85860",
        url_wxapp: "https://huyue-tech.com/wxapp/",
        url_api: "https://huyue-tech.com/api/user/",
        url_img: "https://huyue-tech.com/wxapp/img/",
        homepage: "https://huyue-tech.com/"
    }
}, h = function() {
    function e() {
        return (0, o.default)(this, e), l || (l = this, this.initData()), l;
    }
    return (0, i.default)(e, [ {
        key: "initData",
        value: function(e) {
            var t = null;
            if (!e) {
                var a = this.getKV("env");
                a && (t = p[a]);
            }
            this.conf = e || t || p.default, this.setKV("env", this.conf.name), this.SDK = {
                request: !0,
                getLocation: !0,
                chooseLocation: !0,
                openLocation: !0,
                showLoading: !0,
                hideLoading: !0,
                showToast: !0,
                hideToast: !0,
                showModal: !0,
                showActionSheet: !0,
                getSystemInfo: !0,
                getSystemInfoSync: !0,
                makePhoneCall: !0,
                setNavigationBarTitle: !0,
                navigateTo: !0,
                redirectTo: !0,
                switchTab: !0,
                navigateBack: !0,
                reLaunch: !0,
                pageScrollTo: !0
            }, this.API = s.API, this.API_VERSION = s.API_VERSION, this.DefaultCacheTime = s.DefaultCacheTime, 
            this.locInfo = {
                city: "北京",
                cityid: 1,
                pois: {
                    x: 116.39147,
                    y: 39.90555,
                    longitude: 116.39147,
                    latitude: 39.90555,
                    errMsg: "",
                    updateTime: ""
                },
                scope: 0,
                needUpdateLocation: !1
            }, this.indextab = {
                currentTab: 0
            }, this.loadUserLocInfo();
        }
    }, {
        key: "getLocation",
        value: function() {
            var e = (0, r.default)(a.default.mark(function e() {
                var t, r, o;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, u.default.getLocation({
                            type: "wgs84"
                        }).catch(function(e) {});

                      case 2:
                        if (t = e.sent, r = JSON.parse((0, n.default)(this.locInfo)), void 0 === t) {
                            e.next = 13;
                            break;
                        }
                        return r.scope = 1, r.pois = t, e.next = 9, u.default.request({
                            url: "https://api.map.baidu.com/geocoder/v2/?ak=7QXAbcDTNi47dXAf1rqUMjyGLyRFwBdk&location=" + t.latitude + "," + t.longitude + "&output=json&pois=1",
                            data: {},
                            header: {
                                "Content-Type": "application/json"
                            }
                        });

                      case 9:
                        o = e.sent, r.city = o.data.result.addressComponent.city, e.next = 14;
                        break;

                      case 13:
                        r.scope = -1;

                      case 14:
                        return r.pois.updateTime = new Date().toString(), e.abrupt("return", r);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "loadUserLocInfo",
        value: function() {
            var e = this.getKV("userLocInfo");
            e && (this.locInfo = JSON.parse(e));
        }
    }, {
        key: "saveUserLocInfo",
        value: function() {
            var e = this.locInfo;
            this.setKV("userLocInfo", (0, n.default)(e));
        }
    }, {
        key: "_apiCall",
        value: function() {
            var e = (0, r.default)(a.default.mark(function e(t, n, r) {
                var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "POST";
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, u.default.request({
                            url: (t || s.URL) + n,
                            data: r,
                            header: {
                                "content-type": "application/json"
                            },
                            method: i
                        });

                      case 2:
                        if (200 != (o = e.sent).statusCode || !o.data) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", o.data);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t, a, n) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "setCache",
        value: function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 864e5, r = {
                timestamp: c.getTimeStamp() + a,
                val: t
            };
            return console.log("更新缓存：" + e + " timestamp:" + r.timestamp), console.log("setCache.stringify:"), 
            console.log(r), this.setKV(e, (0, n.default)(r));
        }
    }, {
        key: "getCache",
        value: function() {
            var e = (0, r.default)(a.default.mark(function e(t, n) {
                var r, o;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return (r = this.getKV(t)) && (r = JSON.parse(r), o = c.getTimeStamp(), !n && o > r.timestamp ? (console.log("缓存超期:" + t + " tnow:" + o + " > " + r.timestamp), 
                        r = null) : (console.log("缓存命中：" + t), r = r.val)), e.abrupt("return", r);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t, a) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "setKV",
        value: function(e, t) {
            null == t ? u.default.wx.removeStorageSync(e) : u.default.wx.setStorageSync(e, t);
        }
    }, {
        key: "getKV",
        value: function(e) {
            try {
                return u.default.wx.getStorageSync(e);
            } catch (e) {
                return console.log("getKV has exception:"), console.log(e), null;
            }
        }
    }, {
        key: "hasKV",
        value: function(e) {
            return u.default.wx.getStorageInfoSync(e).keys.indexOf(e) >= 0;
        }
    } ]), e;
}();

l = new h(), t.default = l;