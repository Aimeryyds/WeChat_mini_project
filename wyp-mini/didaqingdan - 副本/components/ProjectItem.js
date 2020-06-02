(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/ProjectItem" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/ProjectItem.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n, s, a = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, o, r) {
                return o && e(t.prototype, o), r && e(t, r), t;
            };
        }(), i = o("./node_modules/@tarojs/taro-weapp/index.js"), c = (s = i) && s.__esModule ? s : {
            default: s
        }, p = o("./src/actions/syncActions.ts"), u = o("./node_modules/@tarojs/redux/index.js");
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var l = (n = r = function(e) {
            function t() {
                var e, o, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, s = Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                return o = r = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.$usedState = [ "anonymousState__temp", "item", "isGroupItem" ], r.customComponents = [], 
                m(r, o);
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
            }(t, c.default.Component), a(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, o, r) {
                        null === t && (t = Function.prototype);
                        var n = Object.getOwnPropertyDescriptor(t, o);
                        if (void 0 === n) {
                            var s = Object.getPrototypeOf(t);
                            return null === s ? void 0 : e(s, o, r);
                        }
                        if ("value" in n) return n.value;
                        var a = n.get;
                        return void 0 !== a ? a.call(r) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.$$refs = new c.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix;
                    var e = this.__props, t = e.item, o = e.isGroupItem, r = (0, u.useDispatch)(), n = [ "project-item", o ? "group-project-item" : "" ].join(" ");
                    return this.anonymousFunc0 = function() {
                        var e = t.id;
                        r((0, p.setCurrentProjectId)(e)), setTimeout(function() {
                            c.default.navigateBack();
                        }, 50);
                    }, Object.assign(this.__state, {
                        anonymousState__temp: n,
                        item: t
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            } ]), t;
        }(), r.$$events = [ "anonymousFunc0" ], r.$$componentPath = "components/ProjectItem", 
        n);
        l.options = {
            addGlobalClass: !0
        }, t.default = l, Component(o("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(l));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/ProjectItem.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        e.exports = o.p + "components/ProjectItem.wxml";
    },
    "./src/components/ProjectItem.tsx": function(e, t, o) {
        "use strict";
        o.r(t), o("./src/components/ProjectItem.tsx?taro&type=template&parse=COMPONENT&");
        var r = o("./src/components/ProjectItem.tsx?taro&type=script&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    },
    "./src/components/ProjectItem.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/ProjectItem.tsx?taro&type=script&parse=COMPONENT&"), n = o.n(r);
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/components/ProjectItem.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/ProjectItem.tsx?taro&type=template&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    }
}, [ [ "./src/components/ProjectItem.tsx", "runtime", "taro", "vendors", "common" ] ] ]);