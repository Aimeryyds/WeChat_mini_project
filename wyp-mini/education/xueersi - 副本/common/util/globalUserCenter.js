function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function r(o, u) {
                try {
                    var i = n[o](u), a = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
            }
            return r("next");
        });
    };
}

function getOpenid() {
    return new Promise(function(e, n) {
        var t = wx.getStorageSync("openid");
        if (t) return e(t);
        t = "todo get", e(t);
    });
}

function getUnionId() {}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var getUserInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, getOpenid();

              case 2:
                return n = e.sent, e.abrupt("return", new Promise(function(e, t) {
                    (0, _common.axios)({
                        url: _path2.default.newAPIIIII,
                        data: {
                            openid: n
                        }
                    }).then(function(n) {
                        var t = n.data;
                        e(t);
                    }, function(e) {
                        t(e);
                    });
                }));

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./common.js");

exports.default = {
    getUserInfo: getUserInfo,
    getOpenid: getOpenid,
    getUnionId: getUnionId
};