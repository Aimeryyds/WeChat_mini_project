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
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), app = getApp(), index = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationBarTitleText: ""
        }, o.data = {
            cityInfo: {
                city_code: "010",
                city_name: "北京",
                default: "index"
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getPosition();
        }
    }, {
        key: "getPosition",
        value: function() {
            var e = this;
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    wx.setStorageSync("refuse", !0), e.getCity(t.longitude, t.latitude), app.XesAnalyticsMP.registerPage({
                        latitude: t.latitude,
                        longitude: t.longitude,
                        allowLocation: !0
                    }, "setLocation");
                },
                fail: function(t) {
                    wx.setStorageSync("refuse", !1), wx.setStorageSync("posCity", e.cityInfo);
                    var r = JSON.stringify(e.cityInfo);
                    wx.redirectTo({
                        url: "/pages/searchgrade/searchgrade?cityInfo=" + r
                    });
                }
            });
        }
    }, {
        key: "getCity",
        value: function(e, t) {
            var r = _path2.default.getcitybylocation, o = {
                location: e + "," + t
            };
            (0, _common.axios)({
                url: r,
                data: o
            }).then(function(e) {
                if (e) {
                    var t = e.data;
                    if (t && t.data && 0 === t.error_code) {
                        var r = t.data;
                        wx.setStorageSync("posCity", r), r.default = "index";
                        var o = JSON.stringify(r);
                        wx.redirectTo({
                            url: "/pages/searchgrade/searchgrade?cityInfo=" + o
                        });
                    }
                }
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(index, "pages/getCity/index"));