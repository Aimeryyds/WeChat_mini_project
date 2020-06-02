function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function t(a, o) {
                try {
                    var u = r[a](o), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(i);
            }
            return t("next");
        });
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.newAxios = void 0;

var newAxios = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        var n, t = r.url, a = void 0 === t ? "" : t, o = r.data, u = void 0 === o ? {} : o, i = r.method, s = void 0 === i ? "post" : i, c = r.header, p = void 0 === c ? {} : c;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return p.accessid = accessid, p.accesskey = accesskey, p.authorization = wx.getStorageSync("user-token") || "", 
                e.next = 5, extend(a, u, s, p);

              case 5:
                return n = e.sent, e.abrupt("return", n);

              case 7:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), extend = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, n, t, a) {
        var o, u, i, s = this;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = null, u = {}, i = [ 12112, 12113, 12114, 12115 ], o = new Promise(function(e, o) {
                    _wepy2.default.request({
                        url: r,
                        data: n,
                        method: t,
                        header: a
                    }).then(function() {
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function r(n) {
                            var t;
                            return regeneratorRuntime.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (n) {
                                        r.next = 2;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 2:
                                    if (t = n.data || {}, -1 === i.indexOf(t.status)) {
                                        r.next = 6;
                                        break;
                                    }
                                    return wx.reLaunch({
                                        url: "/pages/loginRelevant/inputphone"
                                    }), r.abrupt("return");

                                  case 6:
                                    _wepy2.default.$instance.globalData.errorAxios = [], e(t);

                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, s);
                        }));
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    }()).catch(function(e) {
                        console.error("报错信息：" + e), o(e);
                    });
                }).catch(function(e) {
                    return console.error("请求接口错误：" + e), u = {
                        data: {
                            status: 999999
                        }
                    };
                }), e.abrupt("return", o);

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, n, t, a) {
        return e.apply(this, arguments);
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), ENV = "mini", accessid = "mini" === ENV || "pre" === ENV ? "4b2592b38c9e47eda7393718300d464a" : "123456", accesskey = "mini" === ENV || "pre" === ENV ? "1c417efac9b24630a04124d882d73ef1" : "123456";

exports.newAxios = newAxios;