(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/reminder/result" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/result.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }, a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), i = r("./node_modules/tslib/tslib.es6.js"), u = r("./node_modules/@tarojs/taro-weapp/index.js"), l = d(u), p = r("./node_modules/@tarojs/redux/index.js"), c = d(r("./src/pages/reminder/result.module.scss"));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var f = (s = n = function(e) {
            function t() {
                var e, r, n;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var s = arguments.length, o = Array(s), a = 0; a < s; a++) o[a] = arguments[a];
                return r = n = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
                n.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "styles", "type", "isFullScreenMode", "systemInfo" ], 
                n.customComponents = [], m(n, r);
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
            }(t, u.Component), a(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, r, n) {
                        null === t && (t = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(t, r);
                        if (void 0 === s) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, r, n);
                        }
                        if ("value" in s) return s.value;
                        var a = s.get;
                        return void 0 !== a ? a.call(n) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        type: "",
                        isFullScreenMode: !1
                    }, this.$$refs = new l.default.RefsArray();
                }
            }, {
                key: "className",
                value: function() {
                    switch (this.state.type) {
                      case "completed":
                        return "icon-graphic-completed";

                      case "postpone":
                      case "edit":
                        return "icon-graphic-postpone";

                      default:
                        return "";
                    }
                }
            }, {
                key: "text",
                value: function() {
                    switch (this.state.type) {
                      case "completed":
                        return "你已经成功完成了这个任务";

                      case "postpone":
                      case "edit":
                        return "你已经成功处理了这个提醒";

                      default:
                        return "";
                    }
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var e = this.$router.params.type;
                    "completed" === e || "postpone" === e || "edit" === e ? (this.setState(function(t) {
                        return o({}, t, {
                            type: e
                        });
                    }), this.handleCompatibility()) : l.default.redirectTo({
                        url: "/pages/index/index"
                    });
                }
            }, {
                key: "gotoHome",
                value: function() {
                    l.default.redirectTo({
                        url: "/pages/index/index"
                    });
                }
            }, {
                key: "handleCompatibility",
                value: function() {
                    this.props.systemInfo.model.indexOf("iPhone X") > -1 ? this.setState(function(e) {
                        return o({}, e, {
                            isFullScreenMode: !0
                        });
                    }) : this.setState(function(e) {
                        return o({}, e, {
                            isFullScreenMode: !1
                        });
                    });
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix;
                    var e = this.__state.type ? "icon " + c.default.icon + " " + this.className() : null, t = this.__state.type ? this.text() : null;
                    return Object.assign(this.__state, {
                        anonymousState__temp: e,
                        anonymousState__temp2: t,
                        styles: c.default
                    }), this.__state;
                }
            } ]), t;
        }(), n.$$events = [ "gotoHome" ], n.$$componentPath = "pages/reminder/result", s);
        f.options = {
            addGlobalClass: !0
        }, f = (0, i.__decorate)([ (0, p.connect)(function(e) {
            return {
                systemInfo: e.syncReducers.systemInfo
            };
        }) ], f), t.default = f, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(f, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/result.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        e.exports = r.p + "pages/reminder/result.wxml";
    },
    "./src/pages/reminder/result.module.scss": function(e, t, r) {
        e.exports = {
            container: "result-module__container___2ew1v",
            icon: "result-module__icon___1zlQv",
            text: "result-module__text___3mRCf",
            "btn-group": "result-module__btn-group___7xLOH",
            "full-screen": "result-module__full-screen___29_Wt",
            btn: "result-module__btn___2Ha5K",
            "btn-come-in-mini-program": "result-module__btn-come-in-mini-program___20eCw",
            "btn-close": "result-module__btn-close___1HrVy"
        };
    },
    "./src/pages/reminder/result.tsx": function(e, t, r) {
        "use strict";
        r.r(t), r("./src/pages/reminder/result.tsx?taro&type=template&parse=PAGE&");
        var n = r("./src/pages/reminder/result.tsx?taro&type=script&parse=PAGE&");
        for (var s in n) "default" !== s && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(s);
    },
    "./src/pages/reminder/result.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/result.tsx?taro&type=script&parse=PAGE&"), s = r.n(n);
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = s.a;
    },
    "./src/pages/reminder/result.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/result.tsx?taro&type=template&parse=PAGE&");
        for (var s in n) "default" !== s && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(s);
    }
}, [ [ "./src/pages/reminder/result.tsx", "runtime", "taro", "vendors" ] ] ]);