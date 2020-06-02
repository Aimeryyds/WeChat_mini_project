(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/TaskItem" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/TaskItem.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n, s = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var o = [], r = !0, n = !1, s = void 0;
                try {
                    for (var a, i = e[Symbol.iterator](); !(r = (a = i.next()).done) && (o.push(a.value), 
                    !t || o.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, s = e;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (n) throw s;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, a = function() {
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
        }(), i = o("./node_modules/@tarojs/taro-weapp/index.js"), u = d(i), c = o("./src/utils/timeformat.js"), m = o("./node_modules/@tarojs/redux/index.js"), p = o("./src/actions/asyncActions.ts"), l = d(o("./src/components/TaskItem.module.scss"));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function f(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var _ = (n = r = function(e) {
            function t() {
                var e, o, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, s = Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                return o = r = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.$usedState = [ "isMounted", "props", "styles", "toggleAnimating", "isOverdue", "previewDueDate" ], 
                r.customComponents = [], f(r, o);
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
            }(t, u.default.Component), a(t, [ {
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
                    this.$$refs = new u.default.RefsArray();
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix;
                    var e = this.__props, t = (0, i.useState)(!1), o = s(t, 2), r = o[0], n = o[1], a = (0, 
                    i.useState)(!1), d = s(a, 2), f = d[0], _ = d[1], y = (0, m.useDispatch)();
                    (0, i.useDidShow)(function() {
                        n(!0);
                    });
                    var v = (0, i.useMemo)(function() {
                        return k(e.item.startDate, e.item.isAllDay).isOverdue;
                    }, [ e.item.startDate, e.item.isAllDay ]), T = (0, i.useMemo)(function() {
                        return k(e.item.startDate, e.item.isAllDay).previewDueDate;
                    }, [ e.item.startDate, e.item.isAllDay ]);
                    function k(e, t) {
                        if (!e) return {
                            isOverdue: !1,
                            previewDueDate: ""
                        };
                        var o = !1, r = "", n = (0, c.prefMomentFromUTC)(e), s = (0, c.getDueDateLocalZoneDate)(e).diff((0, 
                        c.prefMoment)().startOf("day"), "days"), a = "";
                        return 0 === s ? r += t || null === t ? "今天" : n.format("HH:mm") : 1 === s ? r += "明天" : -1 === s ? r += "昨天" : (0, 
                        c.getDueDateLocalZoneDate)(e).year() === (0, c.prefMoment)().year() ? (a = "MMMDo", 
                        r += " " + n.format(a)) : (a = "LL", r += " " + n.format(a)), s < 0 && (o = !0), 
                        {
                            previewDueDate: r,
                            isOverdue: o
                        };
                    }
                    return this.anonymousFunc0 = function() {
                        var t = "/pages/task-detail/index?taskId=" + e.item.id + "&projectId=" + e.item.projectId;
                        u.default.navigateTo({
                            url: t
                        });
                    }, this.anonymousFunc1 = function(t) {
                        t.stopPropagation();
                        var o = e.item.id;
                        _(!0), setTimeout(function() {
                            y((0, p.toggleTask)(o)).then(function() {
                                setTimeout(function() {
                                    _(!1);
                                }, 100);
                            });
                        }, 100);
                    }, Object.assign(this.__state, {
                        isMounted: r,
                        props: e,
                        styles: l.default,
                        toggleAnimating: f,
                        isOverdue: v,
                        previewDueDate: T
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            }, {
                key: "anonymousFunc1",
                value: function(e) {
                    e.stopPropagation();
                }
            } ]), t;
        }(), r.$$events = [ "anonymousFunc0", "anonymousFunc1" ], r.$$componentPath = "components/TaskItem", 
        n);
        _.defaultProps = {
            item: {},
            isCompleted: !1
        }, _.options = {
            addGlobalClass: !0
        }, t.default = _, Component(o("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(_));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/TaskItem.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        e.exports = o.p + "components/TaskItem.wxml";
    },
    "./src/components/TaskItem.module.scss": function(e, t, o) {
        e.exports = {
            "task-item": "TaskItem-module__task-item___1JHm0",
            "task-unready": "TaskItem-module__task-unready___21-Tt",
            "task-item-hide": "TaskItem-module__task-item-hide___M4s3U",
            completed: "TaskItem-module__completed___1TWG4",
            icon: "TaskItem-module__icon___3-4nV",
            "task-title": "TaskItem-module__task-title___GkNNb",
            "preview-duedate": "TaskItem-module__preview-duedate___-ZNZB",
            "toggle-complete": "TaskItem-module__toggle-complete___1pjg0",
            overdue: "TaskItem-module__overdue___2qXiH"
        };
    },
    "./src/components/TaskItem.tsx": function(e, t, o) {
        "use strict";
        o.r(t), o("./src/components/TaskItem.tsx?taro&type=template&parse=COMPONENT&");
        var r = o("./src/components/TaskItem.tsx?taro&type=script&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    },
    "./src/components/TaskItem.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/TaskItem.tsx?taro&type=script&parse=COMPONENT&"), n = o.n(r);
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/components/TaskItem.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/TaskItem.tsx?taro&type=template&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    }
}, [ [ "./src/components/TaskItem.tsx", "runtime", "taro", "vendors", "common" ] ] ]);