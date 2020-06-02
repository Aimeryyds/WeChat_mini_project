(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/login/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o, s = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, o = !1, s = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(r = (i = a.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, s = e;
                } finally {
                    try {
                        !r && a.return && a.return();
                    } finally {
                        if (o) throw s;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, i = function() {
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
        }(), a = n("./node_modules/tslib/tslib.es6.js"), u = n("./node_modules/@tarojs/redux/index.js"), p = n("./node_modules/@tarojs/taro-weapp/index.js"), c = f(p), l = n("./src/actions/syncActions.ts"), d = f(n("./src/pages/login/index.module.scss"));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var y = (o = r = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
                return n = r = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.$usedState = [ "anonymousState__temp", "$compid__36", "styles", "textInfo", "setOrigin", "setHintType", "hintType", "isFullScreenMode" ], 
                r.customComponents = [ "AuthorizeButton" ], m(r, n);
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
            }(t, p.Component), i(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === o) {
                            var s = Object.getPrototypeOf(t);
                            return null === s ? void 0 : e(s, n, r);
                        }
                        if ("value" in o) return o.value;
                        var i = o.get;
                        return void 0 !== i ? i.call(r) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        textInfo: {
                            titleText: "同步任务到云端",
                            introText: "登录账户，保护任务数据不怕丢，还能在10+个平台随时查看，试试吧",
                            buttonText: "登录"
                        }
                    }, this.$$refs = new c.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var e = this.$router.params.origin || "", t = this.$router.params.hintType || "";
                    "" !== e ? this.props.setOrigin(decodeURIComponent(e)) : this.props.setOrigin("/pages/index/index"), 
                    "" !== t ? this.props.setHintType(t) : this.props.setHintType("default");
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    switch (this.props.hintType) {
                      case "reminder":
                        this.setState(function() {
                            return {
                                textInfo: {
                                    titleText: "处理任务提醒",
                                    introText: "授权微信即可在小程序中处理任务提醒了。",
                                    buttonText: "微信授权"
                                }
                            };
                        });

                      default:
                        return;
                    }
                }
            }, {
                key: "authSuccess",
                value: function(e) {
                    c.default.redirectTo({
                        url: e
                    });
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, p.genCompid)(e + "$compid__36"), n = s(t, 2), r = n[0], o = n[1];
                    console.log("login");
                    var i = [ "authorize-page", this.__props.isFullScreenMode ? "full-screen" : "", d.default["authorize-page"] ].join(" ");
                    return p.propsManager.set({
                        buttonText: this.__state.textInfo.buttonText,
                        authSuccess: this.authSuccess
                    }, o, r), Object.assign(this.__state, {
                        anonymousState__temp: i,
                        $compid__36: o,
                        styles: d.default
                    }), this.__state;
                }
            } ]), t;
        }(), r.$$events = [], r.$$componentPath = "pages/login/index", o);
        y.options = {
            addGlobalClass: !0
        }, y = (0, a.__decorate)([ (0, u.connect)(function(e) {
            return {
                origin: e.syncReducers.origin,
                hintType: e.syncReducers.hintType,
                isFullScreenMode: e.syncReducers.globalData.isFullScreenMode
            };
        }, function(e) {
            return {
                setOrigin: function(t) {
                    return e((0, l.setOrigin)(t));
                },
                setHintType: function(t) {
                    return e((0, l.setHintType)(t));
                }
            };
        }) ], y), t.default = y, Component(n("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(y, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        e.exports = n.p + "pages/login/index.wxml";
    },
    "./src/pages/login/index.module.scss": function(e, t, n) {
        e.exports = {
            "authorize-page": "index-module__authorize-page___2iuPE",
            intro: "index-module__intro___2_eBD"
        };
    },
    "./src/pages/login/index.tsx": function(e, t, n) {
        "use strict";
        n.r(t), n("./src/pages/login/index.tsx?taro&type=template&parse=PAGE&");
        var r = n("./src/pages/login/index.tsx?taro&type=script&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/pages/login/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login/index.tsx?taro&type=script&parse=PAGE&"), o = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = o.a;
    },
    "./src/pages/login/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/login/index.tsx?taro&type=template&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    }
}, [ [ "./src/pages/login/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);