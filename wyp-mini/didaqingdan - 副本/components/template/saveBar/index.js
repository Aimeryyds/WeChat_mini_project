(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/template/saveBar/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/saveBar/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, n, a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(o = (s = i.next()).done) && (r.push(s.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !o && i.return && i.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = function() {
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
        }(), i = r("./node_modules/@tarojs/taro-weapp/index.js"), u = f(i), c = r("./src/actions/syncActions.ts"), p = r("./src/actions/asyncActions.ts"), d = f(r("./src/utils/api.js")), l = r("./node_modules/@tarojs/redux/index.js");
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        r("./src/components/template/saveBar/index.scss");
        var v = (n = o = function(e) {
            function t() {
                var e, r, o;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                return r = o = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                o.$usedState = [ "$compid__38", "props", "saveText" ], o.customComponents = [ "AuthorizeButton" ], 
                m(o, r);
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
            }(t, u.default.Component), s(t, [ {
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
                    this.$$refs = new u.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, i.genCompid)(e + "$compid__38"), r = a(t, 2), o = r[0], n = r[1], s = this.__props, f = (0, 
                    i.useMemo)(function() {
                        return s.isAuth ? "保存到滴答清单" : "授权微信以保存";
                    }, [ s.isAuth ]), m = (0, l.useDispatch)();
                    function v(e) {
                        var t = s.templateId;
                        u.default.showToast({
                            title: "加载中",
                            icon: "loading",
                            duration: 1e5
                        }), d.default.post(d.default.APPLY_PROJECT_TEMPLATE.replace("{id}", t)).then(function(e) {
                            console.log("wwwwww", e);
                            var t = e.data;
                            t ? e.data.errorCode ? (s.throwError(e.data.errorCode), u.default.showToast({
                                title: "保存失败"
                            })) : m((0, p.fetchProjectAndGroup)()).then(function() {
                                m((0, c.setCurrentProjectId)(t.projectId)), u.default.redirectTo({
                                    url: "/pages/index/index?fromTemplate=true"
                                }), u.default.hideToast();
                            }).catch(function() {
                                m((0, c.setCurrentProjectId)(t.projectId)), u.default.redirectTo({
                                    url: "/pages/index/index?fromTemplate=false"
                                }), u.default.hideToast();
                            }) : u.default.showToast({
                                title: "保存失败"
                            });
                        }, function(e) {
                            console.log("error", e), e.data && e.data.errorCode ? u.default.showToast({
                                title: "保存失败"
                            }) : u.default.showToast({
                                title: "网络连接失效"
                            });
                        });
                    }
                    return this.anonymousFunc0 = v, !s.isAuth && i.propsManager.set({
                        className: "saveBtn auth",
                        buttonText: f,
                        authSuccess: v
                    }, n, o), Object.assign(this.__state, {
                        $compid__38: n,
                        props: s,
                        saveText: f
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            } ]), t;
        }(), o.$$events = [ "anonymousFunc0" ], o.$$componentPath = "components/template/saveBar/index", 
        n);
        v.defaultProps = {
            isAuth: !1,
            templateId: ""
        }, v.options = {
            addGlobalClass: !0
        }, t.default = v, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(v));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/saveBar/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, r) {
        e.exports = r.p + "components/template/saveBar/index.wxml";
    },
    "./src/components/template/saveBar/index.scss": function(e, t, r) {},
    "./src/components/template/saveBar/index.tsx": function(e, t, r) {
        "use strict";
        r.r(t), r("./src/components/template/saveBar/index.tsx?taro&type=template&parse=COMPONENT&");
        var o = r("./src/components/template/saveBar/index.tsx?taro&type=script&parse=COMPONENT&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    },
    "./src/components/template/saveBar/index.tsx?taro&type=script&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/saveBar/index.tsx?taro&type=script&parse=COMPONENT&"), n = r.n(o);
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = n.a;
    },
    "./src/components/template/saveBar/index.tsx?taro&type=template&parse=COMPONENT&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/template/saveBar/index.tsx?taro&type=template&parse=COMPONENT&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    }
}, [ [ "./src/components/template/saveBar/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);