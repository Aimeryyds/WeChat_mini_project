Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadImg = void 0;

var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
}, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils/const")), o = function(e, t) {
    var r = {
        url: void 0,
        method: "GET",
        qs: void 0,
        body: void 0,
        headers: void 0,
        type: "json",
        contentType: "application/json",
        crossOrigin: !0,
        credentials: void 0
    }, o = {};
    return t ? (o = t, e && (o.url = e)) : o = e, o = Object.assign({}, r, o);
}, a = function(e, r) {
    var o = "", a = e;
    if (r && "object" === (void 0 === r ? "undefined" : t(r))) {
        var n = !0, s = !1, u = void 0;
        try {
            for (var d, i = Object.keys(r)[Symbol.iterator](); !(n = (d = i.next()).done); n = !0) {
                var l = d.value;
                o += "&" + l + "=" + r[l];
            }
        } catch (e) {
            s = !0, u = e;
        } finally {
            try {
                !n && i.return && i.return();
            } finally {
                if (s) throw u;
            }
        }
        o.length > 0 && (e.split("?").length < 2 ? o = o.substring(1) : 0 === e.split("?")[1].length && (o = o.substring(1))), 
        a = -1 === e.indexOf("?") ? e + "?" + o : "" + e + o;
    }
    return a;
};

exports.default = function(e, t) {
    var r = o(e, t), n = r.method, s = r.body, u = r.headers, d = r.qs, i = r.type, l = r.contentType, c = r.url;
    d && (c = a(c, d));
    var f = u;
    return u && u["content-type"] || !l || (f = Object.assign({}, u, {
        "content-type": l
    })), new Promise(function(t, r) {
        wx.request({
            url: c,
            method: n,
            data: s,
            header: f,
            dataType: i,
            success: function(o) {
                o.statusCode < 200 || o.statusCode >= 300 || !o.data ? r({
                    error: -1,
                    errorMessage: "网络连接异常",
                    request: e,
                    data: o
                }) : 0 != o.data.status && r({
                    error: o.data.status,
                    errorMessage: 500 == o.data.status ? "网络连接错误" : o.data.error.msg,
                    data: o.data.error,
                    request: o.data.request,
                    serverTime: o.data.serverTime
                }), console.log(o.data), t(o.data);
            },
            fail: function(t) {
                r({
                    error: -1,
                    errorMessage: "网络连接异常",
                    data: t,
                    request: e
                });
            }
        });
    });
}, exports.uploadImg = function(t, o, a) {
    return new Promise(function(n, s) {
        wx.uploadFile({
            url: t,
            filePath: o,
            name: "file",
            formData: e({
                fileName: "/wechat/supply/${date:yyyy}/${date:MM}/${date:dd}/${uuid}.png",
                secureKey: r.default.debug ? r.default.devUploadSecretKey : r.default.proUploadSecretKey,
                operate: "save"
            }, a),
            success: function(e) {
                var r = JSON.parse(e.data);
                0 == r.status ? n(r) : s({
                    error: -1,
                    errorMessage: "图片上传失败",
                    data: r,
                    request: t
                });
            },
            fail: function(e) {
                console.log(e), s({
                    error: -1,
                    errorMessage: "网络连接异常",
                    data: e,
                    request: t
                });
            }
        });
    });
};