function n(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}

var o = n(require("../../components/event")), t = n(require("../../components/circus/confirm/confirm")), a = require("../../components/bridge"), e = require("../../components/utils"), i = n(require("../../services/portal/login")), s = n(require("../../components/circus/toast/toast")), r = (n(require("../../components/sensors/sensors")), 
n(require("../../components/msgstore"))), l = n(require("../../services/portal/download")), u = getApp();

u.View(Object.assign({
    beacon: {
        name: "发现",
        canShare: !0,
        shareOptions: {
            title: "行情小程序"
        }
    },
    data: {
        showModal: !1,
        userInfo: {}
    },
    events: {
        login: {
            name: "登录",
            handler: function() {
                var n = this;
                if (1 == this.data.session.anonymous) return this.stopListening(r.default, "portal:login"), 
                this.listenToOnce(r.default, "portal:login", function(o) {
                    s.default.show(n, "登录成功");
                }), (0, a.navigateTo)({
                    url: "/pages/portal/login/login"
                });
                0 == this.data.session.anonymous && (0, e.setData)(this, "showModal", !0);
            }
        },
        goLogin: {
            name: "登录",
            handler: function() {
                var n = this;
                this.stopListening(r.default, "portal:login"), this.listenToOnce(r.default, "portal:login", function(o) {
                    s.default.show(n, "登录成功");
                }), (0, a.navigateTo)({
                    url: "/pages/portal/login/login"
                });
            }
        },
        intoFav: {
            name: "进入自选",
            handler: function() {
                console.log("fav-----in"), (0, a.reLaunch)({
                    url: "/pages/quote/favourite/favourite"
                });
            }
        },
        intoDownload: {
            name: "口令推广",
            handler: function(n) {
                var o = n.currentTarget.dataset, t = o.text, e = o.color, i = o.appid, s = o.apppath;
                i ? wx.navigateToMiniProgram({
                    appId: i,
                    path: s
                }) : (0, a.navigateTo)({
                    url: "/pages/portal/download/download?viewId=" + t + "&navColor=" + e
                });
            }
        },
        onGotUserInfo: {
            name: "获取用户信息",
            handler: function(n) {
                (0, e.setData)(this, "userInfo", n.detail.userInfo);
            }
        },
        goToWelfare: {
            name: "banner推广",
            handler: function() {
                var n = this.data.bannerInfo;
                wx.navigateToMiniProgram({
                    appId: n.appId,
                    path: n.appPath
                });
            }
        }
    },
    onLoad: function() {
        (0, a.setNavigationBarTitle)({
            title: this.beacon.name
        }), this.getChatinfo(), this.downloadInfo(), this.getPortalBanner();
    },
    onShow: function() {
        this.loadSession();
    },
    onUnload: function() {
        this.stopListening(r.default, "portal:login");
    },
    getChatinfo: function(n) {
        var o = this;
        (0, a.getUserInfo)(n).done(function(n) {
            (0, e.setData)(o, "userInfo", (0, e.getProp)(n, "userInfo"));
        });
    },
    downloadInfo: function() {
        var n = this;
        l.default.download({
            postion: "explorer"
        }).done(function(o) {
            (0, e.setData)(n, "downloadInfo", o.data.data);
        });
    },
    getPortalBanner: function() {
        var n = this;
        l.default.portalBanner().done(function(o) {
            (0, e.setData)(n, "bannerInfo", o.data.data[0]);
        });
    },
    loadUserInfo: function() {
        var n = this;
        i.default.info().done(function(o) {
            (0, e.setData)(n, "userInfo", (0, e.getProp)(o, "userInfo"));
        });
    },
    loadSession: function() {
        var n = this;
        u.session().done(function() {
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ((0, e.setData)(n, "session", o), n.data.session.portal) {
                var t = n.data.session.portal.mobile, a = t.substr(0, 3) + "****" + t.substr(7, 11);
                (0, e.setData)(n, "session.portal.mobile", a);
            }
        });
    }
}, o.default, t.default.events));