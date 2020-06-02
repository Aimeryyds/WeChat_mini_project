function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

function getUserInitInfo() {
    return new Promise(function(e, t) {
        var r = wx.getStorageSync("openid");
        if (r) {
            var n = _path2.default.getinfo, o = {
                open_id: r
            };
            if (!(0, _global.isHaveObjectValue)(o)) return;
            (0, _common.axios)({
                url: n,
                data: o
            }).then(function(t) {
                var r = t.data;
                r && r.data && 0 === r.error_code ? (wx.setStorageSync("isNewUser", r.data.is_new), 
                wx.setStorageSync("user-token", r.data.token), wx.setStorageSync("unid", r.data.union_id), 
                e(r.data)) : (e(!1), wx.showToast({
                    title: r.error_msg,
                    icon: "none",
                    duration: 2e3
                }));
            });
        }
    });
}

function getUserInfo() {
    return new Promise(function(e, t) {
        var r = _path2.default.baseinfo, n = {
            authorization: wx.getStorageSync("user-token")
        };
        (0, _global.isHaveObjectValue)(n) && (0, _common.axios)({
            url: r,
            header: n
        }).then(function(t) {
            var r = t.data, n = [ 20113, 20114, 20115 ];
            r && 0 === r.error_code ? (wx.getStorageSync("userInfoStatus") || wx.setStorageSync("userInfoStatus", r.data), 
            e(r.data)) : r && n.indexOf(r.error_code) > -1 ? (e(!1), wx.removeStorageSync("user-token"), 
            wx.removeStorageSync("userInfoStatus")) : (e(!1), wx.showToast({
                title: r.error_msg,
                icon: "none",
                duration: 1e3
            }));
        });
    });
}

function initStatus() {
    var e = this;
    return new Promise(function() {
        var t = _asyncToGenerator(regeneratorRuntime.mark(function t(r, n) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return console.log("初始化取值"), e.next = 3, (0, _gitUserStatus.getLoginState)();

                  case 3:
                    return e.next = 5, getUserInitInfo();

                  case 5:
                    if (o = e.sent, !o.token) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 9, getUserInfo();

                  case 9:
                    r(o);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, t, e);
        }));
        return function(e, r) {
            return t.apply(this, arguments);
        };
    }());
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _gitUserStatus = require("./gitUserStatus.js"), _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path), _global = require("./global.js"), _common = require("./common.js");

exports.default = initStatus;