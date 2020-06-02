var t = require("../../utils/hdweapp.js"), e = require("../../utils/paramConfig.js").ParamConfig, o = require("../../utils/request.js"), a = o.RequestGet, i = o.RequestPost, n = void 0;

Component({
    properties: {
        statusBar: {
            type: Object
        },
        hideMiniAppToast: {
            type: Boolean,
            observer: function(t, e) {
                t != e && this.setData({
                    addMiniAppToast: !1
                });
            }
        }
    },
    data: {
        addMiniAppToast: !1,
        informToast: !1,
        informTips: "是否开启已关注主播开播通知？",
        informInfo: [ {
            value: "不开启",
            type: "off"
        }, {
            value: "开启",
            type: "on"
        } ]
    },
    methods: {
        hideToast: function() {
            this.setData({
                addMiniAppToast: !1
            });
        },
        resetInfo: function() {
            var t = [ {
                value: "不开启",
                type: "off"
            }, {
                value: "开启",
                type: "on"
            } ];
            this.setData({
                addMiniAppToast: !1,
                informToast: !1,
                informTips: "是否开启已关注主播开播通知？",
                informInfo: t
            });
        },
        informBtn: function(t) {
            switch (t.currentTarget.dataset.type) {
              case "off":
                this.roadcastNotice(0), this.HDEvent("0004");
                break;

              case "on":
                this.roadcastNotice(1), this.HDEvent("0003");
                break;

              default:
                this.resetInfo();
            }
            this.resetInfo();
        },
        HDEvent: function(e) {
            t.event({
                id: "10501",
                label: e
            });
        },
        roadcastNotice: function(t) {
            var o = wx.getStorageSync("udbInfo"), a = wx.getStorageSync("HDSDK_openid");
            wx.setStorageSync("informToast", {
                hasShow: !0,
                timer: Date.now()
            });
            var n = "yyuid=" + o.yyuid + "&userName=" + o.username + "&udbOar=" + o.udb_oar + "&openId=" + a, s = e.MINIAPP_YY_HOST + "/mini/notify/broadcast-notice-all/" + e.MINIAPP_APPID + "/" + t + "?" + n;
            i(s).then(function(e) {
                wx.getLogManager(1).log("开启或关闭开播通知成功, type:", t, " and code is:", e.code);
            });
        },
        checkToast: function() {
            var t = wx.getStorageSync("addMinApp"), e = wx.getStorageSync("informToast"), o = wx.getStorageSync("udbInfo");
            (!e.hasShow || e.timer < 1552389733549) && o && o.udb_oar ? this.checkFollowList() : !t.hasShow || t.timer < 1552389733549 ? this.showAddMinApp() : this.setData({
                informToast: !1,
                addMiniAppToast: !1
            });
        },
        showAddMinApp: function() {
            this.setData({
                addMiniAppToast: !0,
                informToast: !1
            }), wx.setStorageSync("addMinApp", {
                hasShow: !0,
                timer: Date.now()
            }), this.HDEvent("0002");
        },
        checkFollowList: function() {
            var t = this, o = wx.getStorageSync("udbInfo"), i = wx.getStorageSync("HDSDK_openid"), s = e.WECHAT_YY_HOST + "/nav/subscribe/list", r = {
                openId: i,
                udb_oar: o.udb_oar,
                yyuid: o.yyuid,
                page: 1,
                username: o.username,
                pageCount: 1
            };
            a(s, r).then(function(e) {
                var o = wx.getStorageSync("addMinApp");
                n && clearTimeout(n), 0 == e.code && e.data.length > 0 ? (n = setTimeout(function() {
                    t.setData({
                        informToast: !0,
                        addMiniAppToast: !1
                    });
                }, 1e3), t.HDEvent("0001")) : (!o.hasShow || o.timer < 1552389733549) && t.showAddMinApp();
            });
        }
    },
    pageLifetimes: {
        show: function() {
            this.checkToast();
        },
        hide: function() {}
    },
    ready: function() {
        this.checkToast();
    }
});