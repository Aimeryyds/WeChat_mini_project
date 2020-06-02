(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/wechat-account/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/wechat-account/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o, a = function() {
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
        }(), s = u(n("./node_modules/@tarojs/taro-weapp/index.js")), i = u(n("./src/pages/wechat-account/index.module.scss")), c = u(n("./src/static/attention_remind_h5@3x.png"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function p(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var d = (o = r = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                return n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                r.$usedState = [ "styles", "img" ], r.customComponents = [], p(r, n);
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
            }(t, s.default.Component), a(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === o) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in o) return o.value;
                        var s = o.get;
                        return void 0 !== s ? s.call(r) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.$$refs = new s.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    return this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix, this.anonymousFunc0 = function() {
                        s.default.setClipboardData({
                            data: "didalist",
                            fail: function() {
                                s.default.showToast({
                                    title: "复制失败",
                                    duration: 1500
                                });
                            },
                            success: function(e) {
                                setTimeout(function() {
                                    s.default.redirectTo({
                                        url: "/pages/index/index?hideSubscribe=true"
                                    });
                                }, 1e3);
                            }
                        });
                    }, Object.assign(this.__state, {
                        styles: i.default,
                        img: c.default
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            } ]), t;
        }(), r.$$events = [ "anonymousFunc0" ], r.$$componentPath = "pages/wechat-account/index", 
        o);
        t.default = d, Component(n("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(d, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/wechat-account/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        e.exports = n.p + "pages/wechat-account/index.wxml";
    },
    "./src/pages/wechat-account/index.module.scss": function(e, t, n) {
        e.exports = {
            container: "index-module__container___1kMJz",
            imgWrapper: "index-module__imgWrapper___18u7A",
            text: "index-module__text___3c5gY",
            button: "index-module__button___2O77I"
        };
    },
    "./src/pages/wechat-account/index.tsx": function(e, t, n) {
        "use strict";
        n.r(t), n("./src/pages/wechat-account/index.tsx?taro&type=template&parse=PAGE&");
        var r = n("./src/pages/wechat-account/index.tsx?taro&type=script&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/pages/wechat-account/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/wechat-account/index.tsx?taro&type=script&parse=PAGE&"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "./src/pages/wechat-account/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/wechat-account/index.tsx?taro&type=template&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/static/attention_remind_h5@3x.png": function(e, t, n) {
        e.exports = n.p + "static/attention_remind_h5@3x.png";
    }
}, [ [ "./src/pages/wechat-account/index.tsx", "runtime", "taro", "vendors" ] ] ]);