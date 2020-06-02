(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o, s = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, o = !1, s = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(r = (i = a.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, s = e;
                } finally {
                    try {
                        !r && a.return && a.return();
                    } finally {
                        if (o) throw s;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, a = function() {
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
        }(), u = n("./node_modules/tslib/tslib.es6.js"), c = n("./node_modules/@tarojs/taro-weapp/index.js"), l = x(c), d = x(n("./src/utils/mta_analysis.js")), p = n("./node_modules/@tarojs/redux/index.js"), f = n("./src/actions/asyncActions.ts"), h = n("./src/actions/syncActions.ts"), g = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t;
        }(n("./src/getters/index.ts")), m = n("./src/constants/constants.ts");
        n("./src/pages/index/index.scss");
        var _ = x(n("./src/utils/api.js")), y = n("./src/utils/envJudge.js"), v = x(n("./src/static/Applet_sharing_h5@3x.png"));
        function x(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function b(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var j = (0, y.getEnvName)(), k = (o = r = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
                return n = r = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "loopArray23", "loopArray24", "env", "projectId", "isReady", "errorCount", "isFullScreenMode", "isSubscribe", "hideSubscribe", "token", "userAuthed", "fetchTaskList", "fetchProjectAndGroup", "sessionChecked", "setUser", "login", "taskList", "completedTaskList", "projectName" ], 
                r.config = {
                    navigationBarTitleText: "滴答清单",
                    enablePullDownRefresh: !0
                }, r.customComponents = [ "TaskItem", "QuickAdd" ], b(r, n);
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
            }(t, c.Component), a(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === o) {
                            var s = Object.getPrototypeOf(t);
                            return null === s ? void 0 : e(s, n, r);
                        }
                        if ("value" in o) return o.value;
                        var i = o.get;
                        return void 0 !== i ? i.call(r) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        projectId: "",
                        isReady: !1,
                        errorCount: 0,
                        isFullScreenMode: !1,
                        isSubscribe: !0,
                        hideSubscribe: !1
                    }, this.$$refs = new l.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.setState(function(e) {
                        return i({}, e, {
                            errorCount: 0
                        });
                    });
                    var e = this;
                    l.default.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e5
                    }), this.$router.params.hideSubscribe && this.setState({
                        hideSubscribe: !0
                    }), "1" === this.$router.params.relogin ? (l.default.showToast({
                        title: "重新登录中",
                        icon: "loading",
                        mask: !0,
                        duration: 1e5
                    }), e.login()) : l.default.checkSession({
                        success: function() {
                            e.initView();
                        },
                        fail: function() {
                            console.log("login fail"), e.login();
                        },
                        complete: function() {
                            e.props.setSessionChecked(!0);
                        }
                    });
                }
            }, {
                key: "subscribeCheck",
                value: function() {
                    var e = this;
                    _.default.get(_.default.IS_SUBSCRIBE_WECHATE_ACCOUNT).then(function(t) {
                        e.setState(function() {
                            return {
                                isSubscribe: t.data.subscribe || !1
                            };
                        });
                    }).catch(function(e) {
                        console.log("some thing error", e);
                    });
                }
            }, {
                key: "initView",
                value: function() {
                    if (this.props.token && this.props.projectId) {
                        this.setState(function(e) {
                            return i({}, e, {
                                isReady: !0
                            });
                        });
                        var e = g.getProjectListLength();
                        this.props.userAuthed || 0 !== e || l.default.showToast({
                            title: "加载数据中",
                            icon: "loading",
                            duration: 1e5
                        }), this.subscribeCheck(), this.props.fetchTaskList().then(function() {
                            l.default.hideToast();
                        }, function() {
                            l.default.hideToast(), l.default.showToast({
                                title: "加载数据失败，请尝试下拉刷新重新获取数据。",
                                icon: "none",
                                duration: 3e3
                            });
                        });
                    } else console.log("no token"), this.login();
                }
            }, {
                key: "fetchDataAndInitView",
                value: function() {
                    var e = this;
                    this.state.errorCount < 5 ? this.props.fetchProjectAndGroup().then(function() {
                        l.default.hideToast(), e.setState(function(e) {
                            return i({}, e, {
                                errCount: 0
                            });
                        }), e.initView();
                    }).catch(function() {
                        e.fetchDataAndInitView();
                    }) : (l.default.hideToast(), l.default.login());
                }
            }, {
                key: "componentDidShow",
                value: function() {
                    this.$router.params.fromTemplate && l.default.showToast({
                        title: "模版保存成功"
                    }), this.props.sessionChecked && this.initView(), d.default.rptMain();
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.props.userAuthed && _.default.get(_.default.GET_USER_STATUS).then(function(t) {
                        var n = t.data;
                        n.token = e.props.token, e.props.setUser(n);
                    }).catch(function(e) {
                        console.log("get status fail");
                    });
                }
            }, {
                key: "onShareAppMessage",
                value: function() {
                    return {
                        title: "这是个装在口袋里的助理",
                        path: "/pages/index/index",
                        imageUrl: v.default
                    };
                }
            }, {
                key: "openProjectList",
                value: function() {
                    l.default.navigateTo({
                        url: "/pages/project-list/index"
                    });
                }
            }, {
                key: "openConfig",
                value: function() {
                    l.default.navigateTo({
                        url: "/pages/config/index"
                    });
                }
            }, {
                key: "openLogin",
                value: function() {
                    var e = "/pages/index/index";
                    e = encodeURIComponent(e), l.default.redirectTo({
                        url: "/pages/login/index?origin=" + e
                    });
                }
            }, {
                key: "login",
                value: function() {
                    var e = this;
                    this.props.login().then(function(t) {
                        e.setState(function(e) {
                            return i({}, e, {
                                errorCount: 0
                            });
                        }), l.default.hideToast(), l.default.showToast({
                            title: "加载数据中",
                            icon: "loading",
                            duration: 1e5
                        }), e.fetchDataAndInitView();
                    }).catch(function(t) {
                        t.errorCode === m.NETWORK_ERROR.WECHAT_NOT_AUTHORIZED || t.errorCode === m.NETWORK_ERROR.WECHAT_PROFILE_NOT_EXISTS || e.state.errorCount >= 5 ? (l.default.hideToast(), 
                        e.openLogin()) : (e.setState(function(e) {
                            return i({}, e, {
                                errorCount: e.errorCount + 1
                            });
                        }), e.login());
                    });
                }
            }, {
                key: "onPullDownRefresh",
                value: function() {
                    var e = this;
                    this.props.userAuthed ? this.props.fetchTaskList().then(function() {
                        l.default.stopPullDownRefresh();
                    }).catch(function() {
                        console.log("fetch failed");
                    }) : l.default.stopPullDownRefresh(), this.props.userAuthed && _.default.get(_.default.GET_USER_STATUS).then(function(t) {
                        var n = t.data;
                        n.token = e.props.token, e.props.setUser(n);
                    }).catch(function(e) {
                        console.log("get status fail");
                    });
                }
            }, {
                key: "hideSubscribe",
                value: function(e) {
                    e.stopPropagation(), this.setState(function() {
                        return {
                            hideSubscribe: !0
                        };
                    });
                }
            }, {
                key: "jumpToSubscribe",
                value: function() {
                    l.default.navigateTo({
                        url: "/pages/wechat-account/index"
                    });
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix;
                    this.__props.taskList.slice().sort(function(e, t) {
                        return e.sortOrder - t.sortOrder;
                    });
                    var t = [ this.__state.isReady ? "" : "hide", this.__props.isFullScreenMode ? "full-screen" : "" ].join(" "), n = this.__props.projectName(this.__props.projectId), r = this.__props.taskList.map(function(t, n) {
                        t = {
                            $original: (0, c.internal_get_original)(t)
                        };
                        var r = (0, c.genCompid)(e + "bezzzzzzzz" + n, !0), o = s(r, 2), i = o[0], a = o[1];
                        return c.propsManager.set({
                            item: t.$original
                        }, a, i), {
                            $compid__24: a,
                            $original: t.$original
                        };
                    }), o = this.__props.completedTaskList.map(function(t, n) {
                        t = {
                            $original: (0, c.internal_get_original)(t)
                        };
                        var r = (0, c.genCompid)(e + "bfzzzzzzzz" + n, !0), o = s(r, 2), i = o[0], a = o[1];
                        return c.propsManager.set({
                            isCompleted: !0,
                            item: t.$original
                        }, a, i), {
                            $compid__25: a,
                            $original: t.$original
                        };
                    });
                    return Object.assign(this.__state, {
                        anonymousState__temp: t,
                        anonymousState__temp2: n,
                        loopArray23: r,
                        loopArray24: o,
                        env: j
                    }), this.__state;
                }
            } ]), t;
        }(), r.$$events = [ "openProjectList", "jumpToSubscribe", "hideSubscribe" ], r.$$componentPath = "pages/index/index", 
        o);
        k.options = {
            addGlobalClass: !0
        }, k = (0, u.__decorate)([ (0, p.connect)(function(e) {
            return {
                token: e.syncReducers.token,
                sessionChecked: e.syncReducers.sessionChecked,
                projectName: g.currentProjectName(e),
                projectId: e.syncReducers.currentProjectId,
                taskList: e.syncReducers.taskList.filter(function(e) {
                    return 0 === e.status;
                }),
                completedTaskList: e.syncReducers.taskList.filter(function(e) {
                    return e.status > 0;
                }),
                userAuthed: e.syncReducers.userAuthed || !1,
                isFullScreenMode: e.syncReducers.globalData.isFullScreenMode
            };
        }, function(e) {
            return {
                setSessionChecked: function(t) {
                    e((0, h.setSessionChecked)(t));
                },
                login: function() {
                    return e((0, f.login)());
                },
                fetchTaskList: function() {
                    return e((0, f.fetchTaskList)());
                },
                fetchProjectAndGroup: function() {
                    return e((0, f.fetchProjectAndGroup)());
                },
                setTaskList: function(t) {
                    return e((0, h.setTaskList)(t));
                },
                setUser: function(t) {
                    return e((0, h.setUser)(t));
                }
            };
        }) ], k), t.default = k, Component(n("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(k, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        e.exports = n.p + "pages/index/index.wxml";
    },
    "./src/pages/index/index.scss": function(e, t, n) {},
    "./src/pages/index/index.tsx": function(e, t, n) {
        "use strict";
        n.r(t), n("./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
        var r = n("./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&"), o = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = o.a;
    },
    "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
    },
    "./src/static/Applet_sharing_h5@3x.png": function(e, t, n) {
        e.exports = n.p + "static/Applet_sharing_h5@3x.png";
    }
}, [ [ "./src/pages/index/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);