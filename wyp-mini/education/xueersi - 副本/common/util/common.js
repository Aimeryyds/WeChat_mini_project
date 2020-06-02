function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, o) {
                try {
                    var u = r[a](o), i = u.value;
                } catch (e) {
                    return void t(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
        });
    };
}

function getUtoken(e) {
    if (e) {
        var r = _path2.default.replaceToken, t = {
            authorization: e
        };
        return new Promise(function(e, n) {
            axios({
                url: r,
                header: t
            }).then(function(r) {
                var t = r.data;
                if (t && 0 === t.error_code) {
                    var n = t.data.utoken;
                    e(n);
                } else e("");
            }).catch(function(e) {
                console.log("报错" + e), n(e);
            });
        });
    }
}

function InterceptionSetValue(e) {
    var r = (e.data, e.headers), t = checkCompareTimer(r);
    _wepy2.default.$instance.globalData.RecordTimers = t || "";
}

function checkCompareTimer(e) {
    if (!e.timestamp) return "";
    var r = parseInt(e.timestamp), t = +new Date(), n = r - t;
    return r === t ? r : t + n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.axios = exports.getUtoken = void 0;

var axios = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
        var t, n = r.url, a = void 0 === n ? "" : n, o = r.data, u = void 0 === o ? {} : o, i = r.method, c = void 0 === i ? "post" : i, s = r.header;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, extend(a, u, c, s);

              case 2:
                return t = e.sent, e.abrupt("return", t);

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), extend = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r, t, n, a) {
        var o, u, i, c = this;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = null, u = {}, i = [ 20113, 20112, 20115, 12003, 12004 ], o = new Promise(function(e, o) {
                    _wepy2.default.request({
                        url: r,
                        data: t,
                        method: n,
                        header: a
                    }).then(function() {
                        var t = _asyncToGenerator(regeneratorRuntime.mark(function t(n) {
                            var a, o;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    a = n.data || {}, o = n.header || {}, InterceptionSetValue({
                                        data: a.data,
                                        url: r,
                                        headers: o,
                                        error_code: a.error_code
                                    }), i.indexOf(a.error_code), _wepy2.default.$instance.globalData.errorAxios = [], 
                                    e(n);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, c);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()).catch(function(e) {
                        console.error("报错信息：" + e), o(e);
                    });
                }).catch(function(e) {
                    return console.error("请求接口错误：" + e), u = {
                        data: {
                            error_code: 999999
                        }
                    };
                }), e.abrupt("return", o);

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(r, t, n, a) {
        return e.apply(this, arguments);
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path);

exports.getUtoken = getUtoken, exports.axios = axios;