var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t) {
    return new o(e, t);
};

var t = e(require("../../../@babel/runtime/helpers/classCallCheck")), n = e(require("../../../@babel/runtime/helpers/createClass")), o = function() {
    function e(n, o) {
        (0, t.default)(this, e), n = n || {}, this.url = o || "https://report.rudata.qq.com/1.gif", 
        this.option = Object.assign({}, n), this.getSystemInfo();
    }
    return (0, n.default)(e, [ {
        key: "send",
        value: function(e) {
            var t = this;
            wx.getNetworkType({
                success: function(n) {
                    t.option.net = n.networkType, t.doReport(e);
                },
                fail: function() {
                    t.doReport(e);
                }
            });
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            var e = this;
            this.option.model || wx.getSystemInfo({
                success: function(t) {
                    var n = {
                        model: t.model,
                        plat: t.platform,
                        brand: t.brand,
                        system: t.system,
                        version: t.version
                    };
                    e.option = Object.assign({}, e.option, n);
                },
                fail: function() {}
            });
        }
    }, {
        key: "doReport",
        value: function(e) {
            wx.request({
                url: this.url,
                method: "GET",
                data: Object.assign({}, this.option, e),
                success: function() {},
                fail: function() {}
            });
        }
    }, {
        key: "cstat",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.optype = e, this.send(t);
        }
    } ]), e;
}();