(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "034f": function(e, a, n) {
        var t = n("b40d");
        n.n(t).a;
    },
    "0a6b": function(e, a, n) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("3a0b")), o = {
            onLaunch: function(e) {
                if (wx.canIUse("getUpdateManager")) {
                    var a = wx.getUpdateManager();
                    a.onCheckForUpdate(function(e) {
                        console.log("【更新检查】是否有新版本", e.hasUpdate);
                    }), a.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "酷租租房新版本已经准备好，是否重启应用？",
                            success: function(e) {
                                e.confirm && a.applyUpdate();
                            }
                        });
                    }), a.onUpdateFailed(function() {});
                }
            },
            onShow: function(e) {
                t.default.commit("SET_APP_OPTIONS", e);
            }
        };
        a.default = o;
    },
    "23be": function(e, a, n) {
        n.r(a);
        var t = n("0a6b"), o = n.n(t);
        for (var u in t) "default" !== u && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(u);
        a.default = o.a;
    },
    "3dfd": function(e, a, n) {
        n.r(a);
        var t = n("23be");
        for (var o in t) "default" !== o && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(o);
        n("034f");
        var u = n("2877"), i = Object(u.a)(t.default, void 0, void 0, !1, null, null, null);
        a.default = i.exports;
    },
    b40d: function(e, a, n) {},
    cd49: function(e, a, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0, n("6cdc"), n("921b");
            var o = t(n("66fd")), u = t(n("3dfd")), i = t(n("3a0b")), d = t(n("904f")), l = t(n("05094"));
            n("1be0"), n("961d");
            var f = n("9224");
            (0, l.default)("init", "938ba46a38d3819e", "wxa75222f64b56a907", {
                vue: o.default,
                version: f.version,
                followShare: !0
            }), o.default.config.productionTip = !1, o.default.prototype.$bus = new d.default(), 
            o.default.prototype.$store = i.default, o.default.component("popup-wrapper", function() {
                return n.e("components/PopupWrapper/PopupWrapper").then(n.bind(null, "a8a6"));
            }), e(new o.default(u.default)).$mount(), o.default.prototype.globalData = getApp().globalData, 
            o.default.prototype.globalData.gio = l.default;
            var r = {
                config: {
                    pages: [ "^pages/index/main", "pages/list/main", "pages/detail/main", "pages/search/main", "pages/webview/main", "pages/login/main", "pages/phoneLogin/main" ],
                    window: {
                        backgroundTextStyle: "light",
                        navigationBarBackgroundColor: "#fff",
                        navigationBarTitleText: "自如租房",
                        navigationBarTextStyle: "black"
                    },
                    permission: {
                        "scope.userLocation": {
                            desc: "您的位置数据将用于定位城市、推荐附近房源"
                        }
                    }
                }
            };
            a.default = r;
        }).call(this, n("543d").createApp);
    }
}, [ [ "cd49", "common/runtime", "common/vendor" ] ] ]);