function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
}, n = t(require("../network/api.js")), o = t(require("./es6-promise.min.js")), i = t(require("./notification")), u = t(require("./const.js")), a = {
    authLocation: function() {
        return new o.default(function(t, e) {
            wx.getSetting({
                success: function(n) {
                    console.log(n), n.authSetting["scope.userLocation"] ? t(!0) : wx.authorize({
                        scope: "scope.userLocation",
                        success: function(e) {
                            t(e);
                        },
                        fail: function() {
                            e("auth failed");
                        }
                    });
                },
                fail: function() {
                    e("open setting failed");
                }
            });
        });
    },
    queryLocation: function() {
        var t = {}, n = new o.default(function(t, e) {
            setTimeout(function() {
                e("timeout");
            }, 5e3);
        }), i = new o.default(function(n, o) {
            wx.getLocation({
                type: "wgs84",
                success: function(o) {
                    o.latitude, o.longitude;
                    t = e({}, t, o), n(t);
                },
                fail: function() {
                    console.log("---get location failed----"), o("get location failed");
                }
            });
        });
        return o.default.race([ n, i ]);
    },
    getLocation: function() {
        var t = {};
        return this.queryLocation().then(function(o) {
            return t = e({}, t, o), n.default.getUserLocation({
                latitude: t.latitude,
                longitude: t.longitude,
                type: 1
            });
        }).then(function(n) {
            return t = e({}, t, n.data), getApp().globalData.location = t, wx.setStorageSync("location", t), 
            i.default.post(u.default.action.LOCATION_CHANGED, t), o.default.resolve(n.data);
        });
    },
    getLocationInfo: function() {
        var t = {};
        return this.queryLocation().then(function(o) {
            return t = e({}, t, o), n.default.getUserLocationInfo({
                latitude: t.latitude,
                longitude: t.longitude,
                type: 1
            });
        }).then(function(n) {
            return t = e({}, t, n.data), o.default.resolve(n.data);
        });
    },
    ensureLocation: function(t) {
        var e = this;
        return t.isEnableLocation ? this.authLocation().then(function(t) {
            return e.getLocation();
        }).catch(function(t) {
            return o.default.reject(t);
        }) : o.default.resolve("no need location");
    }
};

exports.default = a;