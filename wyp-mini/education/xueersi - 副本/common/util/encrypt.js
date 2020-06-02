function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _core = require("./../../npm/crypto-js/core.js"), _core2 = _interopRequireDefault(_core), _hmacSha = require("./../../npm/crypto-js/hmac-sha1.js"), _hmacSha2 = _interopRequireDefault(_hmacSha), encrypt = {}, headersList = [ "area", "gradeId", "devid", "v", "stu_id", "client_type", "timestamp", "accessid", "nonce", "algorithm", "version", "authorization" ], illegalType = [ "undefined", "object", "function" ], illegalValue = [ "", null, "undefined", void 0 ], isNotNull = function(e) {
    return !illegalValue.includes(e);
}, allowable = function(e) {
    return !illegalType.includes(void 0 === e ? "undefined" : _typeof(e));
}, ToJSON = function(e) {
    if ("string" != typeof e) return e;
    if ("object" === (void 0 === e ? "undefined" : _typeof(e))) return e;
    try {
        var t = JSON.parse(e);
        return t && "object" === (void 0 === t ? "undefined" : _typeof(t)) ? t : {};
    } catch (e) {
        return console.error("老铁，加密的错误信息： " + e), {};
    }
}, trim = function(e) {
    return "string" == typeof e ? e.trim() : e;
}, filterHeaders = function(e) {
    var t = {}, r = e.headers || e.header, n = Object.keys(r), o = 0, i = 0;
    for (o = 0, i = n.length; o < i; o++) headersList.includes(n[o]) && (t[n[o]] = r[n[o]]);
    return t;
}, getUrlParams = function(e) {
    if (!e.url) return {};
    var t = {}, r = e.url, n = 0, o = 0, i = null, u = null;
    if (isNotNull(r) && r.indexOf("?") > -1) for (i = r.substring(r.indexOf("?") + 1).split("&"), 
    n = 0, o = i.length; n < o; n++) u = i[n].indexOf("="), t[i[n].substring(0, u)] = i[n].substring(u + 1);
    return t;
}, filterData = function(e) {
    var t = {}, r = null, n = null, o = 0, i = 0, u = 0;
    if (e.headers && "application/x-www-form-urlencoded" === e.headers["Content-Type"]) for (n = decodeURIComponent(e.data).split("&"), 
    o = 0, i = n.length; o < i; o++) u = n[o].indexOf("="), t[n[o].substring(0, u)] = n[o].substring(u + 1); else r = e.data || e.formData, 
    t = ToJSON(r);
    return t;
}, sortObjects = function(e) {
    for (var t = "", r = Object.keys(e).sort(), n = 0; n < r.length; n += 1) allowable(e[r[n]]) && isNotNull(e[r[n]]) && (t += r[n] + "=" + trim(e[r[n]]) + "&");
    return t = t.replace(/(&$)/, ""), t = decodeURIComponent(t);
}, encryptObj = function(e) {
    if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return "";
    var t = filterData(e), r = filterHeaders(e), n = getUrlParams(e), o = e.params || {}, i = Object.assign({}, t, o, n, r);
    return sortObjects(i);
}, uuid = function() {
    for (var e = [], t = "0123456789abcdef", r = 0; r < 36; r++) e[r] = t.substr(Math.floor(16 * Math.random()), 1);
    return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "", 
    e.join("");
};

encrypt.nonce = function() {
    return new Date().getTime() + uuid();
}, encrypt.sign = function(e, t) {
    var r = encryptObj(e);
    return (0, _hmacSha2.default)(r, t).toString(_core2.default.enc.Hex).toUpperCase();
}, exports.default = encrypt;