function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var n = require("../../../components/utils"), o = require("../../../components/bridge"), t = e(require("../../../services/portal/login")), i = (e(require("../../../components/deferred")), 
e(require("../../../components/event"))), s = getApp();

s.View(Object.assign({
    beacon: {
        name: "对标指数"
    },
    data: {},
    events: {
        goBack: {
            name: "返回",
            handler: function(e) {
                (0, o.navigateBack)();
            }
        }
    },
    onLoad: function(e) {
        (0, o.setNavigationBarTitle)({
            title: this.beacon.name
        }), this.loadUserInfo();
    },
    onShow: function() {
        this.loadSession();
    },
    onUnload: function() {},
    loadUserInfo: function() {
        var e = this;
        t.default.info().done(function(o) {
            (0, n.setData)(e, "userInfo", (0, n.getProp)(o, "userInfo"));
        });
    },
    loadSession: function() {
        var e = this;
        s.session().done(function() {
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, n.setData)(e, "session", o);
        }).fail(function() {
            toast.show(e, "出错啦");
        });
    }
}, i.default));