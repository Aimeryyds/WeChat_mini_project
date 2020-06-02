(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/AuthorizeButton" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/AuthorizeButton.tsx?taro&type=script&parse=COMPONENT&": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, r, s, a = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var o = [], n = !0, r = !1, s = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (o.push(a.value), 
                    !e || o.length !== e); n = !0) ;
                } catch (t) {
                    r = !0, s = t;
                } finally {
                    try {
                        !n && u.return && u.return();
                    } finally {
                        if (r) throw s;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, u = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            return function(e, o, n) {
                return o && t(e.prototype, o), n && t(e, n), e;
            };
        }(), i = o("./node_modules/@tarojs/taro-weapp/index.js"), c = (s = i) && s.__esModule ? s : {
            default: s
        }, p = o("./src/actions/asyncActions.ts"), l = o("./node_modules/@tarojs/redux/index.js");
        function d(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        var f = (r = n = function(t) {
            function e() {
                var t, o, n;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                return o = n = d(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(s))), 
                n.$usedState = [ "$compid__20", "className", "hasShadow", "buttonText" ], n.customComponents = [ "ShadowButton" ], 
                d(n, o);
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
            }(e, c.default.Component), u(e, [ {
                key: "_constructor",
                value: function(t) {
                    (function t(e, o, n) {
                        null === e && (e = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(e, o);
                        if (void 0 === r) {
                            var s = Object.getPrototypeOf(e);
                            return null === s ? void 0 : t(s, o, n);
                        }
                        if ("value" in r) return r.value;
                        var a = r.get;
                        return void 0 !== a ? a.call(n) : void 0;
                    })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_constructor", this).call(this, t), 
                    this.$$refs = new c.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var t = this.$prefix, e = (0, i.genCompid)(t + "$compid__20"), o = a(e, 2), n = o[0], r = o[1], s = this.__props, u = s.className, d = s.hasShadow, f = s.buttonText, m = s.prepareAuth, h = s.authSuccess, y = s.authFailed, _ = (0, 
                    l.useDispatch)(), v = (0, l.useSelector)(function(t) {
                        return t;
                    });
                    function b(t) {
                        var e = t.detail;
                        e.errMsg && "ok" === e.errMsg.split(":")[1] ? (Object.assign(e, m && m(t) || {}), 
                        c.default.showToast({
                            title: "登录中",
                            icon: "loading",
                            duration: 1e5
                        }), _((0, p.login)(e)).then(function(t) {
                            c.default.hideToast(), h(v.syncReducers.origin);
                        }, function(t) {
                            c.default.hideToast(), c.default.showToast({
                                title: "出现了一点小问题，请稍后再试",
                                icon: "none",
                                duration: 3e3
                            }), y && y(t);
                        })) : console.log("refuse auth");
                    }
                    return this.anonymousFunc0 = b, this.anonymousFunc1 = b, d && i.propsManager.set({
                        className: u,
                        openType: "getUserInfo",
                        buttonText: f,
                        background: "#1aad19",
                        onGetUserInfo: this.anonymousFunc1
                    }, r, n), Object.assign(this.__state, {
                        $compid__20: r,
                        className: u,
                        hasShadow: d,
                        buttonText: f
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(t) {}
            }, {
                key: "anonymousFunc1",
                value: function(t) {}
            } ]), e;
        }(), n.$$events = [ "anonymousFunc0" ], n.$$componentPath = "components/AuthorizeButton", 
        r);
        f.defaultProps = {
            hasShadow: !1,
            prepareAuth: function() {},
            authSuccess: function() {},
            authFailed: function() {}
        }, f.options = {
            addGlobalClass: !0
        }, e.default = f, Component(o("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(f));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/AuthorizeButton.tsx?taro&type=template&parse=COMPONENT&": function(t, e, o) {
        t.exports = o.p + "components/AuthorizeButton.wxml";
    },
    "./src/components/AuthorizeButton.tsx": function(t, e, o) {
        "use strict";
        o.r(e), o("./src/components/AuthorizeButton.tsx?taro&type=template&parse=COMPONENT&");
        var n = o("./src/components/AuthorizeButton.tsx?taro&type=script&parse=COMPONENT&");
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
    },
    "./src/components/AuthorizeButton.tsx?taro&type=script&parse=COMPONENT&": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/AuthorizeButton.tsx?taro&type=script&parse=COMPONENT&"), r = o.n(n);
        for (var s in n) "default" !== s && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = r.a;
    },
    "./src/components/AuthorizeButton.tsx?taro&type=template&parse=COMPONENT&": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/AuthorizeButton.tsx?taro&type=template&parse=COMPONENT&");
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
    }
}, [ [ "./src/components/AuthorizeButton.tsx", "runtime", "taro", "vendors", "common" ] ] ]);