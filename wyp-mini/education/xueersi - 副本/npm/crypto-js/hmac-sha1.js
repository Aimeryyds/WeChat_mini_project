!function(e, r, o) {
    "object" == typeof exports ? module.exports = exports = r(require("./core.js"), require("./sha1.js"), require("./hmac.js")) : "function" == typeof define && define.amd ? define([ "./core", "./sha1", "./hmac" ], r) : r(e.CryptoJS);
}(this, function(e) {
    return e.HmacSHA1;
});