(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/template/errorPage/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/errorPage/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, n, a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t;
            };
        }(), s = r("./node_modules/@tarojs/taro-weapp/index.js"), i = c(s), p = c(r("./src/components/template/errorPage/index.module.scss"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var l = (n = o = function(e) {
            function t() {
                var e, r, o;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                return r = o = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                o.$usedState = [ "styles", "errorHint", "__fn_onClick" ], o.customComponents = [], 
                u(o, r);
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
            }(t, i.default.Component), a(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, r, o) {
                        null === t && (t = Function.prototype);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        if (void 0 === n) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, r, o);
                        }
                        if ("value" in n) return n.value;
                        var s = n.get;
                        return void 0 !== s ? s.call(o) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.$$refs = new i.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix;
                    var e = this.__props, t = (0, s.useMemo)(function() {
                        switch (e.error) {
                          case "not_exited":
                            return "抱歉，找不到这个模版";

                          case "server_error":
                          default:
                            return "抱歉，网络似乎有点问题";
                        }
                    }, [ e.error ]);
                    return Object.assign(this.__state, {
                        styles: p.default,
                        errorHint: t
                    }), this.__state;
                }
            }, {
                key: "funPrivatebizzz",
                value: function() {
                    return this.props.onFetchData.apply(void 0, Array.prototype.slice.call(arguments, 1));
                }
            } ]), t;
        }(), o.$$events = [ "funPrivatebizzz" ], o.$$componentPath = "components/template/errorPage/index", 
        n);
        l.options = {
            addGlobalClass: !0
        }, t.default = l, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(l));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/errorPage/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, r) {
        e.exports = r.p + "components/template/errorPage/index.wxml";
    },
    "./src/components/template/errorPage/index.module.scss": function(e, t, r) {
        e.exports = {
            errorContainer: "index-module__errorContainer___H-awG",
            errorImage: "index-module__errorImage___JGkCj",
            icon: "index-module__icon___fDC88",
            errorHint: "index-module__errorHint___c6k-2",
            reTryBtn: "index-module__reTryBtn___2tIjD"
        };
    },
    "./src/components/template/errorPage/index.tsx": function(e, t, r) {
        "use strict";
        r.r(t), r("./src/components/template/errorPage/index.tsx?taro&type=template&parse=COMPONENT&");
        var o = r("./src/components/template/errorPage/index.tsx?taro&type=script&parse=COMPONENT&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    },
    "./src/components/template/errorPage/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/errorPage/index.tsx?taro&type=script&parse=COMPONENT&"), n = r.n(o);
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = n.a;
    },
    "./src/components/template/errorPage/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/errorPage/index.tsx?taro&type=template&parse=COMPONENT&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    }
}, [ [ "./src/components/template/errorPage/index.tsx", "runtime", "taro", "vendors" ] ] ]);