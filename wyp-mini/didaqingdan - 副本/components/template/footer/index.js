(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/template/footer/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/footer/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r, s = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        }(), a = p(o("./node_modules/@tarojs/taro-weapp/index.js")), i = p(o("./src/components/template/footer/index.module.scss"));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var c = (r = n = function(e) {
            function t() {
                var e, o, n;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                return o = n = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                n.$usedState = [ "styles" ], n.customComponents = [], u(n, o);
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
            }(t, a.default.Component), s(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, o, n) {
                        null === t && (t = Function.prototype);
                        var r = Object.getOwnPropertyDescriptor(t, o);
                        if (void 0 === r) {
                            var s = Object.getPrototypeOf(t);
                            return null === s ? void 0 : e(s, o, n);
                        }
                        if ("value" in r) return r.value;
                        var a = r.get;
                        return void 0 !== a ? a.call(n) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.$$refs = new a.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    return this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix, this.__props, this.anonymousFunc0 = function(e) {
                        a.default.navigateTo({
                            url: "/pages/webview/index?link=" + encodeURIComponent("https://dida365.com/about/miniApp/features")
                        });
                    }, Object.assign(this.__state, {
                        styles: i.default
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            } ]), t;
        }(), n.$$events = [ "anonymousFunc0" ], n.$$componentPath = "components/template/footer/index", 
        r);
        c.options = {
            addGlobalClass: !0
        }, t.default = c, Component(o("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(c));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/footer/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        e.exports = o.p + "components/template/footer/index.wxml";
    },
    "./src/components/template/footer/index.module.scss": function(e, t, o) {
        e.exports = {
            footerContainer: "index-module__footerContainer___6gIRx",
            "full-screen": "index-module__full-screen___3hG4q",
            logo: "index-module__logo___DKhJ6",
            icon: "index-module__icon___3pyMF",
            desc: "index-module__desc___3ubr6",
            infoBtn: "index-module__infoBtn___2bwnY"
        };
    },
    "./src/components/template/footer/index.tsx": function(e, t, o) {
        "use strict";
        o.r(t), o("./src/components/template/footer/index.tsx?taro&type=template&parse=COMPONENT&");
        var n = o("./src/components/template/footer/index.tsx?taro&type=script&parse=COMPONENT&");
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
    },
    "./src/components/template/footer/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/footer/index.tsx?taro&type=script&parse=COMPONENT&"), r = o.n(n);
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        t.default = r.a;
    },
    "./src/components/template/footer/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/footer/index.tsx?taro&type=template&parse=COMPONENT&");
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
    }
}, [ [ "./src/components/template/footer/index.tsx", "runtime", "taro", "vendors" ] ] ]);