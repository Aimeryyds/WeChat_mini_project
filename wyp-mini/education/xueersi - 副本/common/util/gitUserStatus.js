function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var u = t[a](o), s = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

function getLoginState() {
    return new Promise(function(e) {
        wx.checkSession({
            success: function() {
                function t() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, mergeState();

                          case 2:
                            r = t.sent, e(r);

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }(),
            fail: function() {
                function t() {
                    return r.apply(this, arguments);
                }
                var r = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, mergeState();

                          case 2:
                            r = t.sent, e(r);

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }()
        });
    });
}

function getLogin() {
    return new Promise(function(e) {
        wx.login({
            success: function(t) {
                if (t.code) return void e(t.code);
                wx.showToast({
                    title: "获取用户登录态失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reauthorization = exports.getLoginState = void 0;

var reauthorization = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = !0, e.next = 3, getLogin();

              case 3:
                return USER_STATE.code = e.sent, e.next = 6, getOpenid(t);

              case 6:
                return USER_STATE.openid = e.sent, e.abrupt("return", USER_STATE);

              case 8:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), mergeState = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = !1, e.next = 3, getLogin();

              case 3:
                return USER_STATE.code = e.sent, e.next = 6, getOpenid(t);

              case 6:
                return USER_STATE.openid = e.sent, e.next = 9, getComUsers();

              case 9:
                return USER_STATE.comUsers = e.sent, e.next = 12, getBaseInfo();

              case 12:
                return USER_STATE.baseInfo = e.sent, e.abrupt("return", USER_STATE);

              case 14:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), getOpenid = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var r, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = "", t) {
                    e.next = 5;
                    break;
                }
                if (!(r = wx.getStorageSync("openid") || "")) {
                    e.next = 5;
                    break;
                }
                return e.abrupt("return", r);

              case 5:
                return e.next = 7, (0, _common.axios)({
                    url: _path2.default.getOpenid,
                    data: {
                        jscode: USER_STATE.code
                    }
                });

              case 7:
                if (n = e.sent, a = n.data, 0 !== a.error_code) {
                    e.next = 13;
                    break;
                }
                return r = a.data.open_id, wx.setStorageSync("openid", r), e.abrupt("return", r);

              case 13:
                return wx.showToast({
                    title: "获取用户的openid失败",
                    icon: "none",
                    duration: 2e3
                }), e.abrupt("return", "");

              case 15:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), getComUsers = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, r, n, a, o;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = _path2.default.weChatExpress, r = {
                    open_id: USER_STATE.openid
                }, n = !1, e.next = 5, (0, _common.axios)({
                    url: t,
                    data: r,
                    method: "get"
                });

              case 5:
                if (a = e.sent, o = a.data, 0 !== o.error_code) {
                    e.next = 16;
                    break;
                }
                return n = 0 === o.data.state, o.data.area_name = null === o.data.area_name ? "" : o.data.area_name, 
                o.data.grade_name = null === o.data.grade_name ? "" : o.data.grade_name, wx.setStorageSync("user-token", o.data.token), 
                wx.setStorageSync("unid", o.data.union_id), wx.setStorageSync("isNewUser", n), wx.setStorageSync("weChatExpress", o.data), 
                e.abrupt("return", o.data);

              case 16:
                wx.showToast({
                    title: o.error_msg,
                    icon: "none",
                    duration: 2e3
                });

              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), getBaseInfo = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, r, n, a, o, u;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = _path2.default.baseinfo, r = USER_STATE.comUsers.token, n = [ 20113, 20114, 20115 ], 
                r) {
                    e.next = 5;
                    break;
                }
                return e.abrupt("return", null);

              case 5:
                return a = {
                    authorization: r
                }, e.next = 8, (0, _common.axios)({
                    url: t,
                    header: a
                });

              case 8:
                if (o = e.sent, u = o.data, 0 !== u.error_code) {
                    e.next = 13;
                    break;
                }
                return wx.setStorageSync("userInfoStatus", u.data), e.abrupt("return", u.data);

              case 13:
                return n.includes(u.error_code) && wx.showToast({
                    title: u.error_msg,
                    icon: "none",
                    duration: 1e3
                }), wx.showToast({
                    title: u.error_msg,
                    icon: "none",
                    duration: 2e3
                }), e.abrupt("return", null);

              case 16:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./common.js"), USER_STATE = {
    code: "",
    openid: "",
    userInfo: {},
    baseInfo: {},
    comUsers: {}
};

exports.getLoginState = getLoginState, exports.reauthorization = reauthorization;