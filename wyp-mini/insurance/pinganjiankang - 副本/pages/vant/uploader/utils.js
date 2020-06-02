var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isImageFile = function(e) {
    if (e.type) return 0 === e.type.indexOf("image");
    if (e.path) return i(e.path);
    if (e.url) return i(e.url);
    return !1;
}, exports.isVideo = function(e, t) {
    return "video" === t;
}, exports.chooseFile = function(e) {
    var t = e.accept, r = e.multiple, i = e.capture, n = e.compressed, o = e.maxDuration, s = e.sizeType, u = e.camera, c = e.maxCount;
    switch (t) {
      case "image":
        return new Promise(function(e, t) {
            wx.chooseImage({
                count: r ? Math.min(c, 9) : 1,
                sourceType: i,
                sizeType: s,
                success: e,
                fail: t
            });
        });

      case "media":
        return new Promise(function(e, t) {
            wx.chooseMedia({
                count: r ? Math.min(c, 9) : 1,
                sourceType: i,
                maxDuration: o,
                sizeType: s,
                camera: u,
                success: e,
                fail: t
            });
        });

      case "video":
        return new Promise(function(e, t) {
            wx.chooseVideo({
                sourceType: i,
                compressed: n,
                maxDuration: o,
                camera: u,
                success: e,
                fail: t
            });
        });

      default:
        return new Promise(function(e, t) {
            wx.chooseMessageFile({
                count: r ? c : 1,
                type: "file",
                success: e,
                fail: t
            });
        });
    }
}, exports.isFunction = n, exports.isObject = o, exports.isPromise = function(e) {
    return o(e) && n(e.then) && n(e.catch);
};

var t = e(require("../../../@babel/runtime/helpers/typeof")), r = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

function i(e) {
    return r.test(e);
}

function n(e) {
    return "function" == typeof e;
}

function o(e) {
    return null !== e && "object" === (0, t.default)(e);
}