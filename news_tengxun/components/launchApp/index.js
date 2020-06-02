var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), r = e(require("../../utils/mlodash")), a = e(require("../../utils/logger")), i = require("../../services/report"), n = require("../../services/beacon");

function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, a);
    }
    return r;
}

Component({
    externalClasses: [ "ex-class", "ex-hover-class" ],
    properties: {
        disableLaunch: {
            type: Boolean,
            observer: function(e) {
                e && this.setData({
                    openType: ""
                });
            }
        },
        appParameter: String,
        reportParams: Object,
        successOpType: String,
        failOpType: String,
        fromPage: String,
        articleId: String,
        atype: String,
        vid: String
    },
    data: {
        openType: "launchApp"
    },
    attached: function() {},
    detached: function() {},
    ready: function() {},
    methods: {
        onTap: function(e) {
            if (!this.data.disableLaunch) {
                a.default.info("打开APP:", this.data.appParameter);
                var s = this.genOptions(), p = getCurrentPages(), c = r.default.get(p, "[".concat(p.length - 1, "].__route__"));
                n.beacon.send(n.BEACON_EVENT.launch_app, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? o(Object(a), !0).forEach(function(r) {
                            (0, t.default)(e, r, a[r]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                        });
                    }
                    return e;
                }({
                    appParameter: encodeURIComponent(this.data.appParameter),
                    pagePath: c
                }, s)), (0, i.report)(s);
            }
        },
        onError: function(e) {
            this.data.disableLaunch || (a.default.error("打开APP失败:", e), wx.showToast({
                title: "请下载最新版腾讯新闻APP",
                icon: "none"
            }), this.data.reportParams.failOpType && (0, i.report)(this.genOptions("error")));
        },
        genOptions: function(e) {
            var t = {
                opType: "error" === e ? this.data.failOpType || this.data.reportParams.failOpType : this.data.successOpType || this.data.reportParams.successOpType,
                fromPage: this.data.fromPage || this.data.reportParams.fromPage
            };
            return this.data.articleId && (t.articleId = this.data.articleId), this.data.atype && (t.articleType = this.data.atype), 
            this.data.vid && (t.vid = this.data.vid), t;
        }
    }
});