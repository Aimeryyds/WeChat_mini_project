function e(e) {
    void 0 === e && (e = 7);
    var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from(Array(e)).map(function(e) {
        return t[parseInt((Math.random() * t.length).toString())];
    }).join("");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../api/fetch");

exports.sendReport = function(e, r, n) {
    t.fetch({
        url: e,
        data: r,
        method: "POST"
    }).then(function(e) {
        n && n(e);
    });
}, exports.setSpmParams = function(e) {
    return e.forEach(function(e) {
        e.log_time = +new Date();
    }), e;
}, exports.generateRand = e, exports.generatePvid = function() {
    return new Date().getTime() + e(7);
}, exports.getAcodeE = function() {
    return new Date().getTime() + e(7);
};