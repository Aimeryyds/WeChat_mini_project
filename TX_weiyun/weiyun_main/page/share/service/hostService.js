function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
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

var n = function() {
    function e(e, t) {
        var r = [], n = !0, o = !1, i = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), 
            !t || r.length !== t); n = !0) ;
        } catch (e) {
            o = !0, i = e;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (o) throw i;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), o = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), i = require("../../../common/md.js"), a = require("../../../common/user.js"), u = require("../../../external/format.js").size, c = require("./baseService.js"), s = function(s) {
    function l(r) {
        return e(this, l), t(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, r));
    }
    return r(l, c), o(l, [ {
        key: "init",
        value: function() {
            var e = this;
            return Promise.all([ a.getWxUserInfo(), this.loadWyUserInfo() ]).then(function(t) {
                e.mutate(t);
            }).catch(function(e) {
                i.log("[share page]: fail, HostService.init"), i.log("more info: " + e.message), 
                i.write();
            });
        }
    }, {
        key: "mutate",
        value: function(e) {
            var t = n(e, 2), r = t[0], o = t[1], i = o.weiyun_vip_info || {}, a = i.https_weiyun_vip_img_url.replace(/\.png/, "M.png"), c = i.super_vip ? "svip" : i.weiyun_vip ? "vip" : "normal";
            this.Page.setData({
                host: {
                    uin: o.uin,
                    vipType: c,
                    nickName: r.nickName,
                    vipImgURL: a,
                    avatarURL: r.avatarUrl,
                    usedSpace: o.used_space,
                    usedSpaceText: u(o.used_space, 1),
                    totalSpace: o.total_space,
                    totalSpaceText: u(o.total_space, 1),
                    rootDirKey: o.root_dir_key,
                    mainDirKey: o.main_dir_key
                }
            });
        }
    } ]), l;
}();

module.exports = s;