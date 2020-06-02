(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/Subtasklist" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Subtasklist.tsx?taro&type=script&parse=COMPONENT&": function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o, n = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var s = [], r = !0, o = !1, n = void 0;
                try {
                    for (var a, i = t[Symbol.iterator](); !(r = (a = i.next()).done) && (s.push(a.value), 
                    !e || s.length !== e); r = !0) ;
                } catch (t) {
                    o = !0, n = t;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (o) throw n;
                    }
                }
                return s;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, a = function() {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var r = e[s];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, s, r) {
                return s && t(e.prototype, s), r && t(e, r), e;
            };
        }(), i = s("./node_modules/tslib/tslib.es6.js"), u = s("./node_modules/@tarojs/taro-weapp/index.js"), l = b(u), p = b(s("./src/utils/overlimit.ts")), c = b(s("./src/utils/ObjectId.js")), d = s("./src/utils/util.js"), m = s("./node_modules/@tarojs/redux/index.js"), f = s("./src/utils/timeformat.js");
        function b(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function v(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        var y = (o = r = function(t) {
            function e() {
                var t, s, r;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
                for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                return s = r = v(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(n))), 
                r.$usedState = [ "loopArray94", "sublist", "items", "listenFocus", "user" ], r.subTaskFocus = function() {
                    r.props.listenFocus();
                }, r.subTaskToggle = function(t) {
                    var e = r.props.items.findIndex(function(e) {
                        return e.id === t;
                    }), s = r.props.items.slice();
                    s[e].status = 0 === s[e].status ? 1 : 0, s[e].completedTime = 1 === s[e].status ? (0, 
                    f.formatToServerDate)(new Date()) : null, r.props.onSaveSubTasks(s), r.setState({
                        items: s
                    });
                }, r.subTaskUpdate = function(t) {
                    var e = t.id, s = t.title, o = r.props.items.filter(function(t) {
                        return t.id === e;
                    })[0];
                    if (t && o.title !== s) {
                        var n = (0, d.clone)(r.props.items).map(function(t) {
                            return t.id === e && (t.title = s), t;
                        });
                        r.props.onSaveSubTasks(n), r.setState({
                            items: n
                        });
                    }
                }, r.subTaskDelete = function(t) {
                    for (var e = -1, s = (0, d.clone)(r.props.items), o = 0; o < s.length; o++) if (s[o].id === t) {
                        e = o;
                        break;
                    }
                    ~e && s.splice(e, 1), r.props.onSaveSubTasks(s), r.setState({
                        items: s
                    });
                }, r.addSubTask = function() {
                    if (p.default.isOverSubTaskNumber(r.props.items.length, r.props.user)) return l.default.showToast({
                        title: "子任务数量已达上限"
                    }), void setTimeout(l.default.hideToast, 2e3);
                    for (var t = {
                        id: (0, c.default)(),
                        status: 0,
                        title: ""
                    }, e = (0, d.clone)(r.props.items), s = -1, o = 0; o < e.length; o++) if (e[o].status > 0) {
                        s = o;
                        break;
                    }
                    -1 === s ? e.push(t) : 0 === s ? e.unshift(t) : e.splice(s, 0, t), e.forEach(function(t, e) {
                        t.sortOrder = e;
                    }), r.setState({
                        items: e
                    }), r.props.onSaveSubTasks(e);
                }, r.customComponents = [ "SubtaskItem" ], v(r, s);
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
            }(e, u.Component), a(e, [ {
                key: "_constructor",
                value: function(t) {
                    (function t(e, s, r) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, s);
                        if (void 0 === o) {
                            var n = Object.getPrototypeOf(e);
                            return null === n ? void 0 : t(n, s, r);
                        }
                        if ("value" in o) return o.value;
                        var a = o.get;
                        return void 0 !== a ? a.call(r) : void 0;
                    })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_constructor", this).call(this, t), 
                    this.state = {
                        items: []
                    }, this.$$refs = new l.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var t = this;
                    this.setState(function() {
                        return {
                            items: t.props.items
                        };
                    });
                }
            }, {
                key: "_createData",
                value: function() {
                    var t = this;
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, s = this.__state.items.slice();
                    s.forEach(function(t) {
                        return t.completedTime = (0, d.parseUTCString)(t.completedTime) && (0, d.parseUTCString)(t.completedTime).getTime();
                    }), s.sort(function(t, e) {
                        return t.status === e.status ? t.completedTime ? e.completedTime - t.completedTime : t.sortOrder - e.sortOrder : t.status - e.status;
                    });
                    var r = s.map(function(s, r) {
                        s = {
                            $original: (0, u.internal_get_original)(s)
                        };
                        var o = (0, u.genCompid)(e + "igzzzzzzzz" + r, !0), a = n(o, 2), i = a[0], l = a[1];
                        return u.propsManager.set({
                            item: s.$original,
                            onFocus: t.subTaskFocus,
                            onToggle: t.subTaskToggle,
                            onSave: t.subTaskUpdate,
                            onDelete: t.subTaskDelete
                        }, l, i), {
                            $compid__487: l,
                            $original: s.$original
                        };
                    });
                    return Object.assign(this.__state, {
                        loopArray94: r,
                        sublist: s
                    }), this.__state;
                }
            } ]), e;
        }(), r.$$events = [ "addSubTask" ], r.$$componentPath = "components/Subtasklist", 
        o);
        y.options = {
            addGlobalClass: !0
        }, (y = (0, i.__decorate)([ (0, m.connect)(function(t) {
            return {
                user: t.syncReducers.user
            };
        }) ], y)).defaultProps = {
            items: []
        }, e.default = y, Component(s("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(y));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Subtasklist.tsx?taro&type=template&parse=COMPONENT&": function(t, e, s) {
        t.exports = s.p + "components/Subtasklist.wxml";
    },
    "./src/components/Subtasklist.tsx": function(t, e, s) {
        "use strict";
        s.r(e), s("./src/components/Subtasklist.tsx?taro&type=template&parse=COMPONENT&");
        var r = s("./src/components/Subtasklist.tsx?taro&type=script&parse=COMPONENT&");
        for (var o in r) "default" !== o && function(t) {
            s.d(e, t, function() {
                return r[t];
            });
        }(o);
    },
    "./src/components/Subtasklist.tsx?taro&type=script&parse=COMPONENT&": function(t, e, s) {
        "use strict";
        s.r(e);
        var r = s("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Subtasklist.tsx?taro&type=script&parse=COMPONENT&"), o = s.n(r);
        for (var n in r) "default" !== n && function(t) {
            s.d(e, t, function() {
                return r[t];
            });
        }(n);
        e.default = o.a;
    },
    "./src/components/Subtasklist.tsx?taro&type=template&parse=COMPONENT&": function(t, e, s) {
        "use strict";
        s.r(e);
        var r = s("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Subtasklist.tsx?taro&type=template&parse=COMPONENT&");
        for (var o in r) "default" !== o && function(t) {
            s.d(e, t, function() {
                return r[t];
            });
        }(o);
    }
}, [ [ "./src/components/Subtasklist.tsx", "runtime", "taro", "vendors", "common" ] ] ]);