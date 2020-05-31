function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var r = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), o = require("./baseService.js"), a = function(a) {
    function i(n) {
        return e(this, i), t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, n));
    }
    return n(i, o), r(i, [ {
        key: "init",
        value: function() {
            var e = this;
            return this.loadShareInfo({}).then(function(t) {
                return t.share_nick_name && e.setValueByKey("shareNickName", t.share_nick_name), 
                e.Page.data.urlTransferSingle ? {
                    type: "urlTransferSingle",
                    shareInfo: Object.assign(e.Page.data.urlTransferSingle, {
                        is_share_owner: t.is_share_owner
                    })
                } : t.need_pwd ? {
                    type: "encrypt",
                    shareInfo: t
                } : 0 === t.total_dir_count && t.total_file_count + t.total_note_count === 1 ? {
                    type: "single",
                    shareInfo: t
                } : {
                    type: "multi",
                    shareInfo: t
                };
            });
        }
    } ]), i;
}();

module.exports = a;