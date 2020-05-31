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
}(), o = require("../../external/mta_analysis.js"), a = require("../md.js"), i = require("../user.js"), s = require("../request.js"), u = require("./base.js"), c = function(c) {
    function f(n) {
        return e(this, f), t(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, n));
    }
    return n(f, u), r(f, [ {
        key: "createSharePage",
        value: function(e) {
            function t(t) {
                wx.showToast({
                    title: "创建分享页...",
                    icon: "loading",
                    duration: 1e4,
                    mask: !0
                });
                var n = e.pdirKey || e.pdir_key, r = "dir" === e.type ? [ e.dirKey || e.dir_key ] : [], i = "dir" !== e.type ? [ e.file_id || e.fileId || e.id ] : [], u = e.filename || e.fileName || e.name;
                s.webapp({
                    cmd: "WeiyunShareAdd",
                    data: {
                        pdir_key: n,
                        dir_key: r,
                        file_id: i,
                        share_name: u,
                        share_type: 0,
                        share_nickname: t.nickName,
                        share_logo: t.avatarUrl
                    }
                }).then(function(e) {
                    if (wx.hideToast(), e && e.share_key && e.share_name) {
                        var t = "../share/index?share_key=" + encodeURIComponent(e.share_key) + "&share_name=" + encodeURIComponent(e.share_name) + "&from=disk";
                        a.log("[directory page]: navigate to share page: " + t), wx.navigateTo({
                            url: t,
                            success: function() {
                                o.Event.stat("fenxianggeibier", {
                                    jumptosharepage: "true"
                                });
                            }
                        });
                    } else wx.showToast({
                        title: "创建分享页失败，请稍候重试",
                        icon: "none",
                        duration: 3e3
                    });
                }, function() {
                    wx.hideToast(), wx.showToast({
                        title: "分享请求失败，请稍候重试",
                        icon: "none",
                        duration: 3e3
                    });
                }), o.Event.stat("share", {});
            }
            i.getWxUserInfo().then(function(e) {
                t(e);
            }, function() {
                t({});
            });
        }
    } ]), f;
}();

module.exports = c;