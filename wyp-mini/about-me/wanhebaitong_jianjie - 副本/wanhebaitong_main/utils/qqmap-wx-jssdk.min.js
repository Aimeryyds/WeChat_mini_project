function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e;
    };
}(), o = {
    KEY_ERR: 311,
    KEY_ERR_MSG: "key格式错误",
    PARAM_ERR: 310,
    PARAM_ERR_MSG: "请求参数信息有误",
    SYSTEM_ERR: 600,
    SYSTEM_ERR_MSG: "系统错误",
    WX_ERR_CODE: 1e3,
    WX_OK_CODE: 200
}, i = {
    location2query: function(t) {
        if ("string" == typeof t) return t;
        for (var e = "", o = 0; o < t.length; o++) {
            var i = t[o];
            e && (e += ";"), i.location && (e = e + i.location.lat + "," + i.location.lng), 
            i.latitude && i.longitude && (e = e + i.latitude + "," + i.longitude);
        }
        return e;
    },
    getWXLocation: function(t, e, o) {
        wx.getLocation({
            type: "gcj02",
            success: t,
            fail: e,
            complete: o
        });
    },
    getLocationParam: function(t) {
        return "string" == typeof t && (t = 2 === t.split(",").length ? {
            latitude: t.split(",")[0],
            longitude: t.split(",")[1]
        } : {}), t;
    },
    polyfillParam: function(t) {
        t.success = t.success || function() {}, t.fail = t.fail || function() {}, t.complete = t.complete || function() {};
    },
    checkParamKeyEmpty: function(t, e) {
        if (!t[e]) {
            var i = this.buildErrorConfig(o.PARAM_ERR, o.PARAM_ERR_MSG + e + "参数格式有误");
            return t.fail(i), t.complete(i), !0;
        }
        return !1;
    },
    checkKeyword: function(t) {
        return !this.checkParamKeyEmpty(t, "keyword");
    },
    checkLocation: function(t) {
        var e = this.getLocationParam(t.location);
        if (!e || !e.latitude || !e.longitude) {
            var i = this.buildErrorConfig(o.PARAM_ERR, o.PARAM_ERR_MSG + " location参数格式有误");
            return t.fail(i), t.complete(i), !1;
        }
        return !0;
    },
    buildErrorConfig: function(t, e) {
        return {
            status: t,
            message: e
        };
    },
    buildWxRequestConfig: function(t, e) {
        var i = this;
        return e.header = {
            "content-type": "application/json"
        }, e.method = "GET", e.success = function(e) {
            var o = e.data;
            0 === o.status ? t.success(o) : t.fail(o);
        }, e.fail = function(e) {
            e.statusCode = o.WX_ERR_CODE, t.fail(i.buildErrorConfig(o.WX_ERR_CODE, result.errMsg));
        }, e.complete = function(e) {
            switch (+e.statusCode) {
              case o.WX_ERR_CODE:
                t.complete(i.buildErrorConfig(o.WX_ERR_CODE, e.errMsg));
                break;

              case o.WX_OK_CODE:
                var r = e.data;
                0 === r.status ? t.complete(r) : t.complete(i.buildErrorConfig(r.status, r.message));
                break;

              default:
                t.complete(i.buildErrorConfig(o.SYSTEM_ERR, o.SYSTEM_ERR_MSG));
            }
        }, e;
    },
    locationProcess: function(t, e, r, a) {
        var n = this;
        r = r || function(e) {
            e.statusCode = o.WX_ERR_CODE, t.fail(n.buildErrorConfig(o.WX_ERR_CODE, e.errMsg));
        }, a = a || function(e) {
            e.statusCode == o.WX_ERR_CODE && t.complete(n.buildErrorConfig(o.WX_ERR_CODE, e.errMsg));
        }, t.location ? n.checkLocation(t) && e(i.getLocationParam(t.location)) : n.getWXLocation(e, r, a);
    }
}, r = function() {
    function o(e) {
        if (t(this, o), !e.key) throw Error("key值不能为空");
        this.key = e.key;
    }
    return e(o, [ {
        key: "search",
        value: function(t) {
            if (t = t || {}, i.polyfillParam(t), i.checkKeyword(t)) {
                var e = {
                    keyword: t.keyword,
                    orderby: t.orderby || "_distance",
                    page_size: t.page_size || 10,
                    page_index: t.page_index || 1,
                    output: "json",
                    key: this.key
                };
                t.address_format && (e.address_format = t.address_format), t.filter && (e.filter = t.filter);
                var o = t.distance || "1000", r = t.auto_extend || 1;
                i.locationProcess(t, function(a) {
                    e.boundary = "nearby(" + a.latitude + "," + a.longitude + "," + o + "," + r + ")", 
                    wx.request(i.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/place/v1/search",
                        data: e
                    }));
                });
            }
        }
    }, {
        key: "getSuggestion",
        value: function(t) {
            if (t = t || {}, i.polyfillParam(t), i.checkKeyword(t)) {
                var e = {
                    keyword: t.keyword,
                    region: t.region || "全国",
                    region_fix: t.region_fix || 0,
                    policy: t.policy || 0,
                    output: "json",
                    key: this.key
                };
                wx.request(i.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/place/v1/suggestion",
                    data: e
                }));
            }
        }
    }, {
        key: "reverseGeocoder",
        value: function(t) {
            t = t || {}, i.polyfillParam(t);
            var e = {
                coord_type: t.coord_type || 5,
                get_poi: t.get_poi || 0,
                output: "json",
                key: this.key
            };
            t.poi_options && (e.poi_options = t.poi_options), i.locationProcess(t, function(o) {
                e.location = o.latitude + "," + o.longitude, wx.request(i.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: e
                }));
            });
        }
    }, {
        key: "geocoder",
        value: function(t) {
            if (t = t || {}, i.polyfillParam(t), !i.checkParamKeyEmpty(t, "address")) {
                var e = {
                    address: t.address,
                    output: "json",
                    key: this.key
                };
                wx.request(i.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: e
                }));
            }
        }
    }, {
        key: "getCityList",
        value: function(t) {
            t = t || {}, i.polyfillParam(t);
            var e = {
                output: "json",
                key: this.key
            };
            wx.request(i.buildWxRequestConfig(t, {
                url: "https://apis.map.qq.com/ws/district/v1/list",
                data: e
            }));
        }
    }, {
        key: "getDistrictByCityId",
        value: function(t) {
            if (t = t || {}, i.polyfillParam(t), !i.checkParamKeyEmpty(t, "id")) {
                var e = {
                    id: t.id || "",
                    output: "json",
                    key: this.key
                };
                wx.request(i.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/district/v1/getchildren",
                    data: e
                }));
            }
        }
    }, {
        key: "calculateDistance",
        value: function(t) {
            if (t = t || {}, i.polyfillParam(t), !i.checkParamKeyEmpty(t, "to")) {
                var e = {
                    mode: t.mode || "walking",
                    to: i.location2query(t.to),
                    output: "json",
                    key: this.key
                };
                t.from && (t.location = t.from), i.locationProcess(t, function(o) {
                    e.from = o.latitude + "," + o.longitude, wx.request(i.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/distance/v1/",
                        data: e
                    }));
                });
            }
        }
    } ]), o;
}();

module.exports = r;