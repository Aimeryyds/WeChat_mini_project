function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../components/http")), r = e(require("../../config"));

exports.default = {
    download: function(e) {
        return (0, t.default)({
            method: "get",
            url: "" + r.default.API_V2_HOST + r.default.API_V2_PREFIX + "explorer/download",
            data: e
        });
    },
    portalBanner: function() {
        return (0, t.default)({
            method: "get",
            url: "" + r.default.SER_URL + r.default.API_V2_PREFIX + "explorer/banner"
        });
    }
};