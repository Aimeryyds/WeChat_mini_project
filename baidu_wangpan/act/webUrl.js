Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getQueryString = exports.getUrlParams = void 0;

var e = require("../netdiisk_requestapi/loginSync.js"), r = function(e) {
    var r = "main";
    return -1 !== e.indexOf("addresslist") && (r = "addresslist"), -1 !== e.indexOf("myprize") && (r = "myprize"), 
    r;
}, n = function(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = "pagetype=" + r(e) + "&sign=" + n + "&";
    if (e) {
        var i = (e = e.replace(/#[^#]*$/, "")).indexOf("?");
        -1 !== i && (t += e.substr(i + 1));
    }
    return t;
};

exports.getUrlParams = function(r) {
    return r.indexOf("upload") > -1 && r.indexOf("addresslist") < 1 ? new Promise(function(e) {
        e(n(r));
    }) : (0, e.loginSync)().then(function(e) {
        var t = e.data, i = 0 === t.errno && t.data ? t.data.sign : "";
        return n(r, i);
    }, function() {
        return n(r);
    });
}, exports.getQueryString = function(e, r) {
    var n = new RegExp("(^|&)" + r + "=([^&]*)(&|$)", "i"), t = e.substr(1).match(n);
    return null != t ? unescape(t[2]) : null;
};