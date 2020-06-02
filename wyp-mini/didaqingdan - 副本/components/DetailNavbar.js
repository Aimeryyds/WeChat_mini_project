(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "components/DetailNavbar" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/DetailNavbar.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
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
        }(), i = o("./node_modules/tslib/tslib.es6.js"), p = o("./node_modules/@tarojs/taro-weapp/index.js"), l = (s = p) && s.__esModule ? s : {
            default: s
        }, c = o("./src/utils/timeformat.js"), u = o("./src/actions/asyncActions.ts"), d = o("./node_modules/@tarojs/redux/index.js");
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var f = (n = r = function(e) {
            function t() {
                var e, o, r;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var n = arguments.length, s = Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                return o = r = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "model", "toggleTask", "deleteTask", "showDateTime", "__fn_onClick" ], 
                r.customComponents = [], m(r, o);
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
            }(t, p.Component), a(t, [ {
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
                    this.$$refs = new l.default.RefsArray();
                }
            }, {
                key: "toggleComplete",
                value: function() {
                    var e = this, t = this.props.model.id;
                    this.props.toggleTask(t).then(function() {
                        e.props.onModelChange(t);
                    });
                }
            }, {
                key: "showMoreAction",
                value: function(e) {
                    var t = this;
                    l.default.showActionSheet({
                        itemList: [ "删除" ],
                        success: function(e) {
                            0 === e.tapIndex && t.deleteTask();
                        },
                        fail: function(e) {
                            console.log(e.errMsg);
                        }
                    });
                }
            }, {
                key: "deleteTask",
                value: function() {
                    var e = [ {
                        taskId: this.props.model.id,
                        projectId: this.props.model.projectId
                    } ];
                    this.props.deleteTask(e);
                }
            }, {
                key: "dueDatePreview",
                value: function() {
                    return this.props.model.dueDate ? (0, c.turnToDateTimeFormat)(this.props.model) : "设置日期";
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2], this.$prefix, console.log("navbar");
                    var e = 0 === this.__props.model.status ? [ "icon", "icon-left", this.__props.model.kind ? "icon-checkbox-" + this.__props.model.priority : "icon-checklist-" + this.__props.model.priority ].join(" ") : null, t = [ "task-duedate", "设置日期" === this.dueDatePreview() ? "" : "active" ].join(" "), o = this.dueDatePreview();
                    return Object.assign(this.__state, {
                        anonymousState__temp: e,
                        anonymousState__temp2: t,
                        anonymousState__temp3: o
                    }), this.__state;
                }
            }, {
                key: "funPrivatebazzz",
                value: function() {
                    return this.props.showDateTime.apply(void 0, Array.prototype.slice.call(arguments, 1));
                }
            } ]), t;
        }(), r.$$events = [ "toggleComplete", "funPrivatebazzz", "showMoreAction" ], r.$$componentPath = "components/DetailNavbar", 
        n);
        f.options = {
            addGlobalClass: !0
        }, (f = (0, i.__decorate)([ (0, d.connect)(function(e) {
            return {};
        }, function(e) {
            return {
                deleteTask: function(t) {
                    return e((0, u.deleteTask)(t));
                },
                toggleTask: function(t) {
                    return e((0, u.toggleTask)(t));
                }
            };
        }) ], f)).defaultProps = {
            model: {
                status: 0,
                kind: "Text",
                priority: 0
            }
        }, t.default = f, Component(o("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(f));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/DetailNavbar.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        e.exports = o.p + "components/DetailNavbar.wxml";
    },
    "./src/components/DetailNavbar.tsx": function(e, t, o) {
        "use strict";
        o.r(t), o("./src/components/DetailNavbar.tsx?taro&type=template&parse=COMPONENT&");
        var r = o("./src/components/DetailNavbar.tsx?taro&type=script&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    },
    "./src/components/DetailNavbar.tsx?taro&type=script&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/DetailNavbar.tsx?taro&type=script&parse=COMPONENT&"), n = o.n(r);
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = n.a;
    },
    "./src/components/DetailNavbar.tsx?taro&type=template&parse=COMPONENT&": function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/DetailNavbar.tsx?taro&type=template&parse=COMPONENT&");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
    }
}, [ [ "./src/components/DetailNavbar.tsx", "runtime", "taro", "vendors", "common" ] ] ]);