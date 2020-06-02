Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./spm/util.js"), t = require("../api/sh"), i = require("./../api/fetch"), r = require("./../api/getUserId"), s = t.sh.getSystemInfoSync(), a = "";

r.default(function(e) {
    exports.systemData.userId = e;
}, i.fetch), exports.systemData = {
    device_brand: s.brand || "",
    device_model: s.model || "",
    device_res: s.screenWidth + "*" + s.screenHeight,
    app_version: s.version || "",
    os_version: s.system || "",
    os_type: s.platform || "",
    device_type: "phone",
    SUV: a || (a = +new Date() + e.generateRand()),
    userId: ""
}, exports.deviceSize = {
    windowWidth: s.windowWidth || 0,
    windowHeight: s.windowHeight || 0,
    navigationBarHeight: s.navigationBarHeight || 0,
    statusBarHeight: s.statusBarHeight || 0,
    pixelRatio: s.pixelRatio || 0
};