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
}(), o = require("./Model.js"), a = new (require("./Request"))(!1), u = getApp(), s = require("../utils/util"), i = (s.getRandom, 
s.formatTimeMark), c = require("../utils/md5.js").md5convert16;

module.exports = function(s) {
    function i(n) {
        e(this, i);
        var r = t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, n));
        return r.name = "文章", r.data = {
            essays: []
        }, r.handlers = {
            openEssay: r.openEssay.bind(r)
        }, r;
    }
    return n(i, o), r(i, [ {
        key: "getEssays",
        value: function(e, t, n) {
            e.userAccount = u.globalData.userId, console.log("userid", e.userAccount);
            a.getData({
                cmdcode: "GET_DV_ARTICLES",
                params: e,
                success: function(e) {
                    var n = e.list.map(function(e) {
                        return l(e);
                    });
                    t(n);
                },
                error: n
            });
        }
    }, {
        key: "getLatestEssaysCount",
        value: function(e, t, n) {
            a.getData({
                cmdcode: "GET_DV_ARTICLE_UPDATED_COUNT",
                params: {
                    userAccount: u.globalData.userId,
                    lastTime: e
                },
                loadtype: !1,
                success: function(e) {
                    t(e.count);
                },
                error: n
            });
        }
    }, {
        key: "openEssay",
        value: function(e) {
            var t = e.currentTarget.dataset.title;
            t = t ? "&title=" + t : "", wx.navigateTo({
                url: "/pages/bigVipColumn/essay/essay?url=" + encodeURIComponent(e.currentTarget.dataset.essay) + t
            });
        }
    } ]), i;
}();

var l = function(e) {
    return e.timeMark = i(e.publishTime), e.processedSubject = p(e.subject), e.avatar = "https://www.windmoney.com.cn/mm/finance/img/headportrait/" + c(e.weixinAccount) + ".jpg", 
    e;
}, p = function(e) {
    return e;
};