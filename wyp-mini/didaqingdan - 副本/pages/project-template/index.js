(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/project-template/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-template/index.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, s, a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var r = [], o = !0, s = !1, a = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(o = (n = i.next()).done) && (r.push(n.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    s = !0, a = e;
                } finally {
                    try {
                        !o && i.return && i.return();
                    } finally {
                        if (s) throw a;
                    }
                }
                return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function() {
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
        }(), i = r("./node_modules/tslib/tslib.es6.js"), c = r("./node_modules/@tarojs/taro-weapp/index.js"), p = m(c), u = r("./node_modules/@tarojs/redux/index.js"), l = m(r("./src/utils/api.js")), d = m(r("./src/pages/project-template/index.module.scss")), f = r("./src/actions/syncActions.ts");
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
            }
            return Array.from(e);
        }
        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var g = [ "not_exited", "server_error", "project_template_not_exist" ], y = (s = o = function(e) {
            function t() {
                var e, r, o;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var s = arguments.length, a = Array(s), n = 0; n < s; n++) a[n] = arguments[n];
                return r = o = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
                o.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "$compid__488", "$compid__489", "$compid__490", "styles", "fetching", "error", "title", "cover", "desc", "tasks", "isAuth", "templateId", "errorCount", "userInfo", "isFullScreenMode", "userAuthed" ], 
                o.fetchTemplateData = function() {
                    var e = o.state.templateId;
                    console.log("templateId", e), "undefined" !== e && e ? (o.setState({
                        fetching: !0
                    }), p.default.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e5
                    }), console.log("fetch"), l.default.get(l.default.PUBLIC_GET_PROJECT_TEMPLATE.replace("{id}", e)).then(function(e) {
                        var t = e.data;
                        if (console.log("templateServerData", t), t) try {
                            var r = t.name, s = t.desc, a = t.bgUrl, n = t.metaData.tasks;
                            o.setState({
                                title: r || "",
                                desc: s || "",
                                cover: a || ""
                            }), n && o.setState({
                                tasks: [].concat(_(n)) || []
                            }), p.default.hideToast();
                        } catch (e) {
                            p.default.hideToast(), o.setState({
                                error: "not_exited"
                            }), p.default.showToast({
                                title: "网络连接失效"
                            });
                        } else o.setState({
                            error: "not_exited"
                        });
                        o.setState({
                            fetching: !1
                        });
                    }, function(e) {
                        console.log("fail", e), e.data && e.data.errorCode ? ("project_template_not_exist" === e.data.errorCode && o.setState(function() {
                            return {
                                error: "not_exited"
                            };
                        }), p.default.hideToast()) : (o.setState({
                            error: "server_error"
                        }), p.default.showToast({
                            title: "网络连接失效"
                        })), o.setState({
                            fetching: !1
                        });
                    })) : (o.setState({
                        error: "not_exited",
                        fetching: !1
                    }), p.default.hideToast());
                }, o.throwError = function() {
                    o.setState({
                        error: "not_exited"
                    });
                }, o.customComponents = [ "ErrorPage", "MainContainer", "TemplateFooter", "SaveBar" ], 
                h(o, r);
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
            }(t, c.Component), n(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, r, o) {
                        null === t && (t = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(t, r);
                        if (void 0 === s) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, r, o);
                        }
                        if ("value" in s) return s.value;
                        var n = s.get;
                        return void 0 !== n ? n.call(o) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        fetching: !0,
                        error: "",
                        title: "",
                        cover: "",
                        desc: "",
                        tasks: [],
                        isAuth: !1,
                        templateId: "undefined",
                        errorCount: 0,
                        userInfo: {}
                    }, this.$$refs = new p.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var e = this;
                    this.login(), p.default.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e5
                    });
                    var t = p.default.getLaunchOptionsSync(), r = this.$router.params.id || this.$router.params.scene || t.scene;
                    this.setState({
                        templateId: r
                    }), l.default.get(l.default.IS_SUBSCRIBE_WECHATE_ACCOUNT).then(function(t) {
                        console.log(t), e.setState(function() {
                            return {
                                userInfo: t.data || {}
                            };
                        });
                    }).catch(function(e) {
                        console.log("some thing error", e);
                    });
                }
            }, {
                key: "login",
                value: function() {
                    var e = this, t = this;
                    p.default.login({
                        success: function(e) {
                            var r = e.code;
                            l.default.sign_in(r, "", "", "").then(function(e) {
                                e.data.errorCode ? t.props.setUserAuthed(!1) : (t.props.setUserAuthed(!0), t.props.setUser(e.data)), 
                                t.fetchTemplateData();
                            }, function(e) {
                                t.props.setUserAuthed(!1), t.fetchTemplateData();
                            });
                        },
                        fail: function() {
                            t.props.setUserAuthed(!1);
                        }
                    }).catch(function() {
                        e.fetchTemplateData();
                    });
                }
            }, {
                key: "isRenderErrorPage",
                value: function() {
                    return g.includes(this.state.error);
                }
            }, {
                key: "onShareAppMessage",
                value: function() {
                    var e = this.state.templateId, t = e ? "?templateId=" + e : "";
                    return {
                        title: (this.state.userInfo.nickName || "") + "分享了「" + this.state.title.slice(0, -2) + "」清单模板给你",
                        imageUrl: this.state.cover,
                        path: "/pages/project-template/index?id=" + t
                    };
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, c.genCompid)(e + "$compid__488"), r = a(t, 2), o = r[0], s = r[1], n = (0, 
                    c.genCompid)(e + "$compid__489"), i = a(n, 2), p = i[0], u = i[1], l = (0, c.genCompid)(e + "$compid__490"), f = a(l, 2), m = f[0], _ = f[1];
                    console.log("tasks", this.__state.tasks), console.log("error?", this.isRenderErrorPage());
                    var h = this.isRenderErrorPage(), g = !this.__state.fetching && !this.isRenderErrorPage();
                    return h && c.propsManager.set({
                        error: this.__state.error,
                        onFetchData: this.fetchTemplateData
                    }, s, o), g && c.propsManager.set({
                        title: this.__state.title,
                        cover: this.__state.cover,
                        desc: this.__state.desc,
                        tasks: this.__state.tasks,
                        error: this.__state.error
                    }, u, p), g && c.propsManager.set({
                        isAuth: this.__props.userAuthed,
                        templateId: this.__state.templateId,
                        throwError: this.throwError
                    }, _, m), Object.assign(this.__state, {
                        anonymousState__temp: h,
                        anonymousState__temp2: g,
                        $compid__488: s,
                        $compid__489: u,
                        $compid__490: _,
                        styles: d.default
                    }), this.__state;
                }
            } ]), t;
        }(), o.$$events = [], o.$$componentPath = "pages/project-template/index", s);
        y.options = {
            addGlobalClass: !0
        }, y = (0, i.__decorate)([ (0, u.connect)(function(e) {
            return {
                userAuthed: e.syncReducers.userAuthed,
                isFullScreenMode: e.syncReducers.globalData.isFullScreenMode
            };
        }, function(e) {
            return {
                setUserAuthed: function(t) {
                    return e((0, f.setUserAuthed)(t));
                },
                setUser: function(t) {
                    return e((0, f.setUser)(t));
                }
            };
        }) ], y), t.default = y, Component(r("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(y, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-template/index.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        e.exports = r.p + "pages/project-template/index.wxml";
    },
    "./src/pages/project-template/index.module.scss": function(e, t, r) {
        e.exports = {
            templateContainer: "index-module__templateContainer___3FjLI"
        };
    },
    "./src/pages/project-template/index.tsx": function(e, t, r) {
        "use strict";
        r.r(t), r("./src/pages/project-template/index.tsx?taro&type=template&parse=PAGE&");
        var o = r("./src/pages/project-template/index.tsx?taro&type=script&parse=PAGE&");
        for (var s in o) "default" !== s && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(s);
    },
    "./src/pages/project-template/index.tsx?taro&type=script&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-template/index.tsx?taro&type=script&parse=PAGE&"), s = r.n(o);
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = s.a;
    },
    "./src/pages/project-template/index.tsx?taro&type=template&parse=PAGE&": function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/project-template/index.tsx?taro&type=template&parse=PAGE&");
        for (var s in o) "default" !== s && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(s);
    }
}, [ [ "./src/pages/project-template/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);