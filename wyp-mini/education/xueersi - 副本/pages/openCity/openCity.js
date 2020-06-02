function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), app = getApp(), openCity = function(e) {
    function t() {
        var e, i, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, r = Array(a), c = 0; c < a; c++) r[c] = arguments[c];
        return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        n.config = {
            navigationBarTitleText: "选择孩子所在城市",
            backgroundTextStyle: "dark",
            backgroundColor: "#FFFFFF",
            navigationBarTextStyle: "black"
        }, n.data = {
            getHei: "",
            isHide: !1,
            locationCity: "北京",
            defaultURL: "",
            scrollInfo: {
                intoview: "",
                scrollY: !0
            },
            Citylist: {},
            Cityletter: []
        }, n.methods = {
            rollpos: function(e) {
                this.scrollInfo.intoview = e, wx.showToast({
                    title: e,
                    icon: "none",
                    duration: 800
                }), this.$apply();
            },
            getCityCode: function(e) {
                var t = wx.getStorageSync("weChatExpress");
                t ? (console.log("存储3", t), t.area_code = e.area_code, t.area_name = e.name, wx.setStorageSync("weChatExpress", t)) : wx.setStorageSync("weChatExpress", {
                    area_code: e.area_code,
                    area_name: e.name
                }), wx.navigateBack({
                    delta: 1
                }), app.XesAnalyticsMP.track("132-1185", {
                    citycode: e.area_code,
                    city_name: e.name
                });
            }
        }, o = i, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onShow",
        value: function() {
            var e = wx.getStorageSync("weChatExpress"), t = wx.getStorageSync("citylist"), i = e.area_name;
            for (var n in t) t[n].forEach(function(e, t) {
                e.name === i && (e.active = !0);
            });
            this.sendAnalytics();
        }
    }, {
        key: "sendAnalytics",
        value: function() {
            app.XesAnalyticsMP.view("132-1186");
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.isHideFunc(), this.getposCity(), this.getCitylist(), this.getViewHei(), wx.setStorageSync("entry", e.url);
        }
    }, {
        key: "getViewHei",
        value: function() {
            var e = this, t = null;
            wx.getSystemInfo({
                success: function(i) {
                    if (e.isHide) {
                        clearTimeout(t);
                        var n = wx.createSelectorQuery();
                        t = setTimeout(function() {
                            n.select("#scroll-views-top").boundingClientRect(), n.exec(function(t) {
                                e.getHei = i.windowHeight - t[0].height, e.$apply();
                            });
                        }, 300);
                    } else e.getHei = i.windowHeight, e.$apply();
                }
            });
        }
    }, {
        key: "citylistActive",
        value: function(e) {
            var t = wx.getStorageSync("weChatExpress"), i = t.area_name;
            e.forEach(function(e, t) {
                e.active = !1, e.name === i && (e.active = !0);
            });
        }
    }, {
        key: "isHideFunc",
        value: function() {
            var e = wx.getStorageSync("refuse"), t = wx.getStorageSync("posCity").real_locate;
            this.isHide = e && t;
        }
    }, {
        key: "getCitylist",
        value: function() {
            var e = this;
            e.Cityletter = [], e.Citylist = {};
            var t = _path2.default.citylist;
            (0, _common.axios)({
                url: t
            }).then(function(t) {
                var i = t.data;
                if (i && 0 === i.error_code) {
                    e.Citylist = i.data;
                    for (var n in e.Citylist) e.Cityletter.push(n), e.citylistActive(e.Citylist[n]);
                    e.$apply();
                } else wx.showToast({
                    title: i.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getposCity",
        value: function() {
            this.locationCity = wx.getStorageSync("posCity").city_name;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(openCity, "pages/openCity/openCity"));