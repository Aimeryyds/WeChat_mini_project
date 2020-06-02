(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/project-list/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-list/index.tsx?taro&type=script&parse=PAGE&": function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, i = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var r = [], n = !0, o = !1, i = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), 
                    !e || r.length !== e); n = !0) ;
                } catch (t) {
                    o = !0, i = t;
                } finally {
                    try {
                        !n && a.return && a.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return r;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            return function(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e;
            };
        }(), a = r("./node_modules/tslib/tslib.es6.js"), p = r("./node_modules/@tarojs/taro-weapp/index.js"), c = m(p), u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e;
        }(r("./src/getters/index.ts")), l = m(r("./src/utils/mta_analysis.js")), d = r("./src/actions/asyncActions.ts"), f = r("./node_modules/@tarojs/redux/index.js");
        function m(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function j(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        var y = (o = n = function(t) {
            function e() {
                var t, r, n;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
                for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                return r = n = j(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
                n.$usedState = [ "loopArray25", "mainList", "fetchProjectAndGroup" ], n.customComponents = [ "GroupItem", "ProjectItem" ], 
                j(n, r);
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
            }(e, p.Component), s(e, [ {
                key: "_constructor",
                value: function(t) {
                    (function t(e, r, n) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, r);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, r, n);
                        }
                        if ("value" in o) return o.value;
                        var s = o.get;
                        return void 0 !== s ? s.call(n) : void 0;
                    })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_constructor", this).call(this, t), 
                    this.state = {
                        mainList: u.mainList()
                    }, this.$$refs = new c.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var t = this;
                    this.props.fetchProjectAndGroup().then(function(e) {
                        t.setState(function() {
                            return {
                                mainList: u.mainList()
                            };
                        });
                    });
                }
            }, {
                key: "componentDidShow",
                value: function() {
                    l.default.rptMain();
                }
            }, {
                key: "onPullDownRefresh",
                value: function() {
                    this.props.fetchProjectAndGroup().then(function() {
                        c.default.stopPullDownRefresh();
                    }).catch(function() {
                        console.log("fetch project failed");
                    });
                }
            }, {
                key: "mainList",
                value: function() {
                    return u.mainList();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var t = this.$prefix, e = this.__state.mainList.map(function(e, r) {
                        e = {
                            $original: (0, p.internal_get_original)(e)
                        };
                        var n = (0, p.genCompid)(t + "bgzzzzzzzz" + r, !0), o = i(n, 2), s = o[0], a = o[1];
                        e.$original.isGroup && p.propsManager.set({
                            item: e.$original
                        }, a, s);
                        var c = (0, p.genCompid)(t + "bhzzzzzzzz" + r, !0), u = i(c, 2), l = u[0], d = u[1];
                        return !e.$original.isGroup && p.propsManager.set({
                            isGroupItem: !1,
                            item: e.$original
                        }, d, l), {
                            $compid__26: a,
                            $compid__27: d,
                            $original: e.$original
                        };
                    });
                    return Object.assign(this.__state, {
                        loopArray25: e
                    }), this.__state;
                }
            } ]), e;
        }(), n.$$events = [], n.$$componentPath = "pages/project-list/index", o);
        y = (0, a.__decorate)([ (0, f.connect)(function(t) {
            return {};
        }, function(t) {
            return {
                fetchProjectAndGroup: function() {
                    return t((0, d.fetchProjectAndGroup)());
                }
            };
        }) ], y), e.default = y, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(y, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-list/index.tsx?taro&type=template&parse=PAGE&": function(t, e, r) {
        t.exports = r.p + "pages/project-list/index.wxml";
    },
    "./src/pages/project-list/index.tsx": function(t, e, r) {
        "use strict";
        r.r(e), r("./src/pages/project-list/index.tsx?taro&type=template&parse=PAGE&");
        var n = r("./src/pages/project-list/index.tsx?taro&type=script&parse=PAGE&");
        for (var o in n) "default" !== o && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(o);
    },
    "./src/pages/project-list/index.tsx?taro&type=script&parse=PAGE&": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-list/index.tsx?taro&type=script&parse=PAGE&"), o = r.n(n);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "./src/pages/project-list/index.tsx?taro&type=template&parse=PAGE&": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-list/index.tsx?taro&type=template&parse=PAGE&");
        for (var o in n) "default" !== o && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(o);
    }
}, [ [ "./src/pages/project-list/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);