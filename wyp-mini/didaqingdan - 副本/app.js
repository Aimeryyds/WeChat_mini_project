require("84A90D26BF49CDAFE2CF6521BB6E0896.js"), require("FECC4F64BF49CDAF98AA2763385E0896.js"), 
require("3EE33595BF49CDAF58855D922B8E0896.js"), require("297B42D7BF49CDAF4F1D2AD0A97E0896.js"), 
(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "app" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&": function(e, t, r) {
        "use strict";
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r("./node_modules/@tarojs/taro-weapp/index.js"), o = f(a), i = r("./node_modules/@tarojs/redux/index.js"), s = f(r("./src/utils/mta_analysis.js")), c = r("./src/utils/timeformat.js"), u = r("./src/actions/asyncActions.ts"), p = r("./src/actions/syncActions.ts"), d = f(r("./src/store/index.ts"));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        r("./src/app.scss");
        var l = (0, d.default)();
        (0, i.setStore)(l), i.ReduxContext.Provider && (i.ReduxContext.Provider({
            store: l
        }), i.ReduxContext.Provider({
            store: l
        }));
        var y = function() {
            function e() {
                !function(t) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this);
                var t = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t;
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
                return t.config = {
                    pages: [ "pages/index/index", "pages/login/index", "pages/task-detail/index", "pages/project-list/index", "pages/config/index", "pages/reminder/index", "pages/reminder/result", "pages/project-template/index", "pages/wechat-account/index", "pages/webview/index" ],
                    window: {
                        backgroundTextStyle: "dark",
                        navigationBarBackgroundColor: "#617fde",
                        navigationBarTitleText: "滴答清单",
                        navigationBarTextStyle: "white",
                        enablePullDownRefresh: !0
                    },
                    debug: !1
                }, t;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(e, a.Component), t = e, (r = [ {
                key: "componentWillMount",
                value: function() {
                    s.default.initLaunch(), (0, u.initSystemInfo)(l.dispatch);
                    try {
                        var e = o.default.getStorageSync("holidayData");
                        if (e) {
                            l.dispatch((0, p.setHolidayData)(e.data));
                            var t = (0, c.prefMoment)(e.fetchTime).startOf("day"), r = (0, c.prefMoment)().startOf("day");
                            t.isSame(r) || (0, u.fetchHolidayData)(l.dispatch);
                        } else (0, u.fetchHolidayData)(l.dispatch);
                    } catch (e) {
                        (0, u.fetchHolidayData)(l.dispatch);
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "componentDidShow",
                value: function() {}
            }, {
                key: "componentDidHide",
                value: function() {}
            }, {
                key: "componentDidCatchError",
                value: function(e) {
                    s.default.eventStat("error", {
                        message: e
                    });
                }
            }, {
                key: "_createData",
                value: function() {}
            } ]) && n(t.prototype, r), e;
            var t, r;
        }();
        t.default = y, App(r("./node_modules/@tarojs/taro-weapp/index.js").default.createApp(y)), 
        o.default.initPxTransform({
            designWidth: 750,
            deviceRatio: {
                640: 1.17,
                750: 1,
                828: .905
            }
        });
    },
    "./src/app.scss": function(e, t, r) {},
    "./src/app.tsx": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("./src/app.tsx?taro&type=script&parse=ENTRY&");
        for (var a in n) "default" !== a && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(a);
    },
    "./src/app.tsx?taro&type=script&parse=ENTRY&": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&"), a = r.n(n);
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    }
}, [ [ "./src/app.tsx", "runtime", "taro", "vendors", "common" ] ] ]);