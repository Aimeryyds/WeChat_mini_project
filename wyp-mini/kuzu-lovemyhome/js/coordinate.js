function t(t, a) {
    return a < 72.004 || a > 137.8347 || t < .8293 || t > 55.8271;
}

function a(a, n) {
    var e = .006693421622965943, r = 6378245, o = 3.141592653589793;
    if (t(a, n)) a, n; else {
        var s = i(n - 105, a - 35), h = u(n - 105, a - 35), M = a / 180 * o, d = Math.sin(M);
        d = 1 - e * d * d;
        var l = Math.sqrt(d);
        a += s = 180 * s / (r * (1 - e) / (d * l) * o), n += h = 180 * h / (r / l * Math.cos(M) * o);
    }
    return {
        latitude: a,
        longitude: n
    };
}

function n(t, a, n) {
    return t.latitude >= Math.min(a.latitude, n.latitude) && t.latitude <= Math.max(a.latitude, n.latitude) && t.longitude >= Math.min(a.longitude, n.longitude) && t.longitude <= Math.max(a.longitude, n.longitude);
}

function i(t, a) {
    var n = 3.141592653589793, i = 2 * t - 100 + 3 * a + .2 * a * a + .1 * t * a + .2 * Math.sqrt(Math.abs(t));
    return i += 2 * (20 * Math.sin(6 * t * n) + 20 * Math.sin(2 * t * n)) / 3, i += 2 * (20 * Math.sin(a * n) + 40 * Math.sin(a / 3 * n)) / 3, 
    i += 2 * (160 * Math.sin(a / 12 * n) + 320 * Math.sin(a * n / 30)) / 3;
}

function u(t, a) {
    var n = 3.141592653589793, i = 300 + t + 2 * a + .1 * t * t + .1 * t * a + .1 * Math.sqrt(Math.abs(t));
    return i += 2 * (20 * Math.sin(6 * t * n) + 20 * Math.sin(2 * t * n)) / 3, i += 2 * (20 * Math.sin(t * n) + 40 * Math.sin(t / 3 * n)) / 3, 
    i += 2 * (150 * Math.sin(t / 12 * n) + 300 * Math.sin(t / 30 * n)) / 3;
}

module.exports = {
    isLocationOutOfChina: t,
    transformFromWGSToGCJ: a,
    transformFromGCJToBaidu: function(t, a) {
        var n = 52.35987755982988, i = Math.sqrt(a * a + t * t) + 2e-5 * Math.sin(t * n), u = Math.atan2(t, a) + 3e-6 * Math.cos(a * n);
        return {
            latitude: i * Math.sin(u) + .006,
            longitude: i * Math.cos(u) + .0065
        };
    },
    transformFromBaiduToGCJ: function(t, a) {
        var n = 52.35987755982988, i = a - .0065, u = t - .006, e = Math.sqrt(i * i + u * u) - 2e-5 * Math.sin(u * n), r = Math.atan2(u, i) - 3e-6 * Math.cos(i * n);
        return {
            latitude: e * Math.sin(r),
            longitude: e * Math.cos(r)
        };
    },
    transformFromGCJToWGS: function(t, i) {
        for (var u = t - .5, e = t + .5, r = i - .5, o = i + .5, s = 1, h = 30; ;) {
            var M = a(u, r), d = a(u, o), l = a(e, r), f = a((u + e) / 2, (r + o) / 2);
            if (s = Math.abs(f.latitude - t) + Math.abs(f.longitude - i), h-- <= 0 || s <= 1e-5) return {
                latitude: (u + e) / 2,
                longitude: (r + o) / 2
            };
            n({
                latitude: t,
                longitude: i
            }, M, f) ? (e = (u + e) / 2, o = (r + o) / 2) : n({
                latitude: t,
                longitude: i
            }, d, f) ? (e = (u + e) / 2, r = (r + o) / 2) : n({
                latitude: t,
                longitude: i
            }, l, f) ? (u = (u + e) / 2, o = (r + o) / 2) : (u = (u + e) / 2, r = (r + o) / 2);
        }
    }
};