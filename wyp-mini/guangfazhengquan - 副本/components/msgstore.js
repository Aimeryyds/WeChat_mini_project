Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./utils"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./event")), n = (0, e.assign)({}, t.default);

setTimeout(function() {
    wx.onNetworkStatusChange(function(e) {
        var t = e.isConnected, r = e.networkType;
        n.fire("app:network", {
            networkType: t ? r : "none"
        });
    });
}, 100), exports.default = n;