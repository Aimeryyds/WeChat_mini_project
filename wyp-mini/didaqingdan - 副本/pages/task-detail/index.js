(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/task-detail/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/task-detail/index.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
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
        }, s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
        }, i = function() {
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
        }(), l = r("./node_modules/tslib/tslib.es6.js"), d = r("./node_modules/@tarojs/taro-weapp/index.js"), u = _(d), c = _(r("./src/store/index.ts")), p = _(r("./src/utils/mta_analysis.js")), f = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }(r("./src/getters/index.ts")), m = r("./src/actions/asyncActions.ts"), h = r("./node_modules/@tarojs/redux/index.js");
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function y(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var v = (n = o = function(e) {
            function t() {
                var e, r, o;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                return r = o = y(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                o.$usedState = [ "anonymousState__temp", "$compid__28", "$compid__29", "$compid__30", "model", "isDateTimeShow", "fetchTask", "isFullScreenMode" ], 
                o.showDateTime = function() {
                    o.setState(function(e) {
                        return s({}, e, {
                            isDateTimeShow: !0
                        });
                    });
                }, o.hideDateTime = function() {
                    o.setState(function(e) {
                        return s({}, e, {
                            isDateTimeShow: !1
                        });
                    });
                }, o.modelChange = function(e, t) {
                    o.setState(function(r) {
                        return {
                            model: t || f.taskById((0, c.default)().getState(), e)
                        };
                    });
                }, o.customComponents = [ "DetailNavbar", "DetailContainer", "DatetimePicker" ], 
                y(o, r);
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
            }(t, d.Component), i(t, [ {
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
                    this.state = {
                        model: {
                            status: 0,
                            kind: "TEXT",
                            priority: 0
                        },
                        isDateTimeShow: !1
                    }, this.$$refs = new u.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.setState(function(e) {
                        return {
                            model: {
                                status: 0,
                                kind: "TEXT",
                                priority: 0
                            },
                            isDateTimeShow: !1
                        };
                    });
                }
            }, {
                key: "componentDidShow",
                value: function() {
                    var e = this, t = this.$router.params.taskId, r = this.$router.params.projectId;
                    this.setState(function(e) {
                        return s({}, e, {
                            model: f.taskById((0, c.default)().getState(), t)
                        });
                    }), this.props.fetchTask({
                        projectId: r,
                        taskId: t
                    }).then(function(t) {
                        e.setState(function(e) {
                            return s({}, e, {
                                model: t
                            });
                        });
                    }), p.default.rptMain();
                }
            }, {
                key: "onPullDownRefresh",
                value: function() {
                    console.log("pull"), u.default.stopPullDownRefresh();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, d.genCompid)(e + "$compid__28"), r = a(t, 2), o = r[0], n = r[1], s = (0, 
                    d.genCompid)(e + "$compid__29"), i = a(s, 2), l = i[0], u = i[1], c = (0, d.genCompid)(e + "$compid__30"), p = a(c, 2), f = p[0], m = p[1];
                    console.log("task detail");
                    var h = [ "task-detail", this.__props.isFullScreenMode ? "full-screen" : "" ].join(" ");
                    return d.propsManager.set({
                        model: this.__state.model,
                        onModelChange: this.modelChange,
                        showDateTime: this.showDateTime
                    }, n, o), d.propsManager.set({
                        model: this.__state.model,
                        onModelChange: this.modelChange,
                        isDateTimeShow: this.__state.isDateTimeShow,
                        hideDateTime: this.hideDateTime
                    }, u, l), d.propsManager.set({
                        showDateTime: this.__state.isDateTimeShow,
                        model: this.__state.model,
                        onModelChange: this.modelChange,
                        onHide: this.hideDateTime,
                        isFormBtn: !0
                    }, m, f), Object.assign(this.__state, {
                        anonymousState__temp: h,
                        $compid__28: n,
                        $compid__29: u,
                        $compid__30: m
                    }), this.__state;
                }
            } ]), t;
        }(), o.$$events = [], o.$$componentPath = "pages/task-detail/index", n);
        v.options = {
            addGlobalClass: !0
        }, v = (0, l.__decorate)([ (0, h.connect)(function(e) {
            return {
                isFullScreenMode: e.syncReducers.globalData.isFullScreenMode
            };
        }, function(e) {
            return {
                fetchTask: function(t) {
                    return e((0, m.fetchTask)(t));
                }
            };
        }) ], v), t.default = v, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(v, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/task-detail/index.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        e.exports = r.p + "pages/task-detail/index.wxml";
    },
    "./src/pages/task-detail/index.tsx": function(e, t, r) {
        "use strict";
        r.r(t), r("./src/pages/task-detail/index.tsx?taro&type=template&parse=PAGE&");
        var o = r("./src/pages/task-detail/index.tsx?taro&type=script&parse=PAGE&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    },
    "./src/pages/task-detail/index.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/task-detail/index.tsx?taro&type=script&parse=PAGE&"), n = r.n(o);
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = n.a;
    },
    "./src/pages/task-detail/index.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/task-detail/index.tsx?taro&type=template&parse=PAGE&");
        for (var n in o) "default" !== n && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(n);
    }
}, [ [ "./src/pages/task-detail/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);