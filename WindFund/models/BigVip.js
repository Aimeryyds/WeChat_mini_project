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
}(), i = require("./Model"), o = require("../utils/util").formatTimeMark, c = require("../utils/md5.js").md5convert16, u = new (require("./Request"))(!1), a = "https://www.windmoney.com.cn/mm/finance/img/headportrait/";

module.exports = function(p) {
    function l(n) {
        e(this, l);
        var r = t(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, n));
        return r.app = getApp(), r.name = "大V", r.userAccount = r.getUserAccount(), r.userAccount || r.app.checkUserHasUinionId(!1, r.setUserAccount, [ r ]), 
        console.log("userid", r.userAccount), r.data = {
            bigVip: {},
            bigVips: [],
            markedVips: [],
            unmarkedVips: [],
            isMarked: !1,
            confirming: !1
        }, r.handlers = {
            visitBigVip: r.visitBigVip.bind(r),
            unmark: r.unmark.bind(r),
            shouldConfirmUnmark: r.shouldConfirmUnmark.bind(r),
            openVipEssay: r.openVipEssay.bind(r),
            buildVipCard: r.buildVipCard.bind(r)
        }, r;
    }
    return n(l, i), r(l, [ {
        key: "setUserAccount",
        value: function(e) {
            var t = e || this;
            t.userAccount = t.app.globalData.userId || wx.getStorageSync("userId");
        }
    }, {
        key: "getUserAccount",
        value: function() {
            return this.app.globalData.userId || wx.getStorageSync("userId");
        }
    }, {
        key: "getVips",
        value: function(e, t, n) {
            e.userAccount = this.userAccount;
            u.getData({
                cmdcode: "GET_DV_AUTHORS",
                params: e,
                success: function(e) {
                    var n = e.list.map(function(e) {
                        return e.processedSubject = s(e.subject, 21), e.avatar = a + c(e.weixinAccount) + ".jpg", 
                        e.timeMark = o(e.publishTime), e;
                    });
                    t(n);
                },
                error: n
            });
        }
    }, {
        key: "getVip",
        value: function(e, t, n) {
            e.userAccount = this.userAccount, u.getData({
                cmdcode: "GET_DV_AUTHOR_DETAIL",
                params: e,
                success: function(e) {
                    e.avatar = a + c(e.weixinAccount) + ".jpg", t(e);
                },
                error: n
            });
        }
    }, {
        key: "getEssaysOfVip",
        value: function(e, t, n) {
            e.userAccount = this.userAccount;
            u.getData({
                cmdcode: "GET_DV_AUTHOR_ARTICLES",
                params: e,
                success: function(e) {
                    var n = e.list.map(function(e) {
                        return e.processedSubject = s(e.subject, 29), e.timeMark = o(e.publishTime), e;
                    });
                    t(n);
                },
                error: n
            });
        }
    }, {
        key: "getFundComboDetails",
        value: function(e, t, n) {
            e.userAccount = this.userAccount, u.getData({
                cmdcode: "GET_DV_AUTHOR_FUND_DETAIL",
                params: e,
                success: t,
                error: n
            });
        }
    }, {
        key: "createQRCode",
        value: function(e, t, n) {
            var r = {
                path: "pages/bigVipColumn/bigVip/bigVip",
                width: 200,
                scene: e,
                autoColor: !1,
                lineColor: {
                    r: "0",
                    g: "0",
                    b: "0"
                },
                type: 2
            };
            getApp().getData("EMERGE_XCX_QR_CODE", r, function(e) {
                console.log("qrcode url :", e.filePath), t && t(e.filePath);
            }, n);
        }
    }, {
        key: "visitBigVip",
        value: function(e, t) {
            wx.navigateTo({
                url: "/pages/bigVipColumn/bigVip/bigVip?weixinAccount=" + e + "&fromPage=" + t
            });
        }
    }, {
        key: "unmark",
        value: function(e, t, n, r) {
            var i = r || this;
            i.userAccount || i.setUserAccount(), i.userAccount || i.app.checkUserHasUinionId(!0);
            var o = {
                userAccount: i.userAccount,
                weixinAccount: e.weixinAccount,
                actionType: 1
            }, c = Object.assign({}, e);
            u.getData({
                cmdcode: "UPDATE_DV_AUTHOR_FAVOUR",
                params: o,
                success: function(e) {
                    e ? (c.isFavour = 0, t && t(c)) : n && n();
                },
                error: n
            });
        }
    }, {
        key: "mark",
        value: function(e, t, n, r) {
            var i = r || this;
            i.userAccount || i.setUserAccount(), i.userAccount || i.app.checkUserHasUinionId(!0);
            var o = {
                userAccount: i.userAccount,
                weixinAccount: e.weixinAccount,
                actionType: 0
            }, c = Object.assign({}, e);
            u.getData({
                cmdcode: "UPDATE_DV_AUTHOR_FAVOUR",
                params: o,
                success: function(e) {
                    e ? (c.isFavour = 1, t && t(c)) : n && n();
                },
                error: n
            });
        }
    }, {
        key: "shouldConfirmUnmark",
        value: function(e) {
            this.setData({
                confirming: !0
            });
        }
    }, {
        key: "openVipEssay",
        value: function(e) {
            wx.navigateTo({
                url: e.currentTarget.dataset.url
            });
        }
    }, {
        key: "buildVipCard",
        value: function(e) {
            var t = this.getData().bigVip;
            t.avatar_png = a + "cy/" + c(t.weixinAccount) + ".png", console.log(t.avatar_png), 
            wx.navigateTo({
                url: "/pages/bigVipColumn/bigVipCard/bigVipCard?vip=" + encodeURIComponent(JSON.stringify(this.getData().bigVip))
            });
        }
    } ]), l;
}();

var s = function(e, t) {
    return e && e.length > t ? e.substring(0, t) + "..." : e;
};