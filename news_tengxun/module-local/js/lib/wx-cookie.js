var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../../@babel/runtime/helpers/classCallCheck")), r = e(require("../../../@babel/runtime/helpers/createClass")), i = "WX_APP_COOKIE_", a = function() {
    function e(r) {
        (0, t.default)(this, e), this._namespace = i, this._getStorage = wx.getStorageSync, 
        this._setStorage = wx.setStorageSync, this._getStorageInfo = wx.getStorageInfoSync, 
        this._removeStorage = wx.removeStorageSync;
        var a = Object.assign({}, {
            expires: 864e5,
            path: ""
        }, r);
        this._opt = a, this._namespace += a.path + "$$";
    }
    return (0, r.default)(e, [ {
        key: "set",
        value: function(e, t) {
            if ("string" != typeof e) throw "[set cookie]: key is not a string";
            if ("" === e.trim()) throw "[set cookie]: key cannot be a empty string";
            if ("$" === e.trim()[0]) throw "[set cookie]: the first letter of ".concat(e, ' must not begin with "$"');
            var r = Date.now(), i = this._getPrivateKey(e);
            this._setStorage(i, {
                _expires: r + this._opt.expires,
                _data: t
            });
        }
    }, {
        key: "get",
        value: function(e) {
            if (void 0 === e) return this._getAll();
            var t = this._getPrivateKey(e);
            return this._get(t);
        }
    }, {
        key: "getExpired",
        value: function(e) {
            var t = this._getPrivateKey(e);
            if (t) return this._get(t, !0);
        }
    }, {
        key: "remove",
        value: function(e) {
            if (void 0 !== e && "" !== e.trim()) {
                var t = this._getPrivateKey(e);
                try {
                    this._removeStorage(t);
                } catch (e) {
                    throw e;
                }
            }
        }
    }, {
        key: "clear",
        value: function() {
            var e = this, t = this._getStorageInfo().filter(function(t) {
                return e._isPrivateKey(t);
            });
            t.length && t.forEach(function(t) {
                return e._removeStorage(t);
            });
        }
    }, {
        key: "_getAll",
        value: function() {
            var e = this, t = this._getStorageInfo().filter(function(t) {
                return e._isPrivateKey(t);
            });
            return t.length ? t.map(function(t) {
                var r = e._get(t), i = {}, a = e._getKey(t);
                return !!r && (i[a] = r, i);
            }).filter(function(e) {
                return !!e;
            }) : null;
        }
    }, {
        key: "_get",
        value: function(e, t) {
            var r = this._getStorage(e), i = Date.now();
            return r ? t ? i - r._expires > 0 ? r._data : void 0 : i - r._expires < 0 ? r._data : void 0 : r;
        }
    }, {
        key: "_getKey",
        value: function(e) {
            return e.replace(this._namespace, "");
        }
    }, {
        key: "_getPrivateKey",
        value: function(e) {
            return this._namespace + e;
        }
    }, {
        key: "_isPrivateKey",
        value: function(e) {
            return 0 === e.indexOf(this._namespace);
        }
    } ]), e;
}();

exports.default = a;