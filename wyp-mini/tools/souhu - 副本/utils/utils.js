function t(t) {
    return "" + (/^\/\//.test(t) ? "https:" : "") + t;
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../api/sh");

exports.isObject = function(t) {
    var r = void 0 === t ? "undefined" : e(t);
    return null != t && ("object" == r || "function" == r);
}, exports.throttle = function(t, e) {
    var r = -1;
    return function() {
        var n = this;
        clearTimeout(r);
        var o = arguments;
        r = setTimeout(function() {
            t.apply(n, o);
        }, e);
    };
}, exports.getPvId = function() {
    return new Date().getTime() + function(t) {
        void 0 === t && (t = 7);
        var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return Array.from(Array(t)).map(function(t) {
            return e[parseInt((Math.random() * e.length).toString())];
        }).join("");
    }(7);
}, exports.myQuery = function(t) {
    return r.sh.createSelectorQuery().selectAll(t);
};

var n = [ "5b0988e595225.cdn.sohucs.com", "29e5534ea20a8.cdn.sohucs.com", "img.mp.itc.cn", "img.mp.sohu.com" ], o = n.length, u = function(t) {
    return !!t && (t.split("//")[1] && ("images" === t.split("//")[1].split("/")[1] || "upload" === t.split("//")[1].split("/")[1]));
};

exports.cutPicUrl = function(t, e, r, c) {
    if (void 0 === c && (c = "c_lfill"), !t) return "";
    for (var i = t, s = c + ",w_" + (e || 226) + ",h_" + (r || 150) + ",g_face", a = 0; a < o; a++) u(i) && (i = i.replace(n[a], n[a] + "/" + s));
    return /^\/\//.test(i) ? "https:" + i : i;
}, exports.getPageType = function(t) {
    var e;
    switch (t) {
      case "home":
        e = "1001";
        break;

      case "content":
        e = "1003";
        break;

      case "vd-land":
        e = "1004";
        break;

      case "404":
        e = "1005";
        break;

      default:
        e = "";
    }
    return e;
}, exports.URLPrefix = t, exports.imageUrlsArray = function(e) {
    for (var r, n = /<img.*?src="(.+?)".+?>/g, o = []; null != (r = n.exec(e)); ) {
        var u = r[1];
        u && o.push(t(u));
    }
    return o;
};