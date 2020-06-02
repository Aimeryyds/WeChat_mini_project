var e = getApp(), t = require("qqmap-wx-jssdk.min.js");

module.exports = {
    getPoint: function(n) {
        return new Promise(function(o, i) {
            new t({
                key: e.globalData.tencentMapKey
            }).reverseGeocoder({
                location: {
                    latitude: n.lat,
                    longitude: n.lng
                },
                coord_type: 3,
                success: function(e) {
                    var t = e.result.location;
                    o(t);
                },
                fail: function(e) {
                    o(n);
                }
            });
        });
    }
};