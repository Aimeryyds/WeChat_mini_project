function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = e(require("../config")), r = (e(require("./http")), e(require("./base64")), 
require("./utils")), t = {
    platform: a.default.PLATFORM,
    module: a.default.MODULE,
    page: "",
    pageName: "",
    event: "",
    element: "",
    channel: "",
    remark: "",
    shared: "",
    data: "",
    openid: ""
}, o = {
    dot: function(e) {
        try {
            (e = (0, r.assign)({}, t, e)).pageName = a.default.NAME + "-" + e.pageName, console.log("beacon::>>>" + JSON.stringify(e));
        } catch (e) {
            console.log(">>> beacon error");
        }
    }
};

exports.default = o;