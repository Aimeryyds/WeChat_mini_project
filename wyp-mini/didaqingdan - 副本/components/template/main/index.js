(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/template/main/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/main/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o, a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, o = !1, a = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, a = e;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = function() {
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
        }(), i = n("./node_modules/@tarojs/taro-weapp/index.js"), p = l(i), c = l(n("./src/components/template/main/index.module.scss"));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t) {
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
                return n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                r.$usedState = [ "$compid__37", "styles", "props" ], r.customComponents = [ "TaskList" ], 
                u(r, n);
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
            }(t, p.default.Component), s(t, [ {
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
                    this.$$refs = new p.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, i.genCompid)(e + "$compid__37"), n = a(t, 2), r = n[0], o = n[1], s = this.__props;
                    return i.propsManager.set({
                        tasks: s.tasks
                    }, o, r), Object.assign(this.__state, {
                        $compid__37: o,
                        styles: c.default,
                        props: s
                    }), this.__state;
                }
            } ]), t;
        }(), r.$$events = [], r.$$componentPath = "components/template/main/index", o);
        d.options = {
            addGlobalClass: !0
        }, t.default = d, Component(n("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(d));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/main/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, n) {
        e.exports = n.p + "components/template/main/index.wxml";
    },
    "./src/components/template/main/index.module.scss": function(e, t, n) {
        e.exports = {
            projectContainer: "index-module__projectContainer___gK5Wc",
            headerWrapper: "index-module__headerWrapper___3o8Yu",
            title: "index-module__title___3HHUp",
            img: "index-module__img___3pP97",
            desc: "index-module__desc___2Lf8y"
        };
    },
    "./src/components/template/main/index.tsx": function(e, t, n) {
        "use strict";
        n.r(t), n("./src/components/template/main/index.tsx?taro&type=template&parse=COMPONENT&");
        var r = n("./src/components/template/main/index.tsx?taro&type=script&parse=COMPONENT&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/components/template/main/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/main/index.tsx?taro&type=script&parse=COMPONENT&"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "./src/components/template/main/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/main/index.tsx?taro&type=template&parse=COMPONENT&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    }
}, [ [ "./src/components/template/main/index.tsx", "runtime", "taro", "vendors" ] ] ]);