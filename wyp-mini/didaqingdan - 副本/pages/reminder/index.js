(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/reminder/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/index.tsx?taro&type=script&parse=PAGE&": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o, r = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var a = [], n = !0, o = !1, r = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (a.push(s.value), 
                    !t || a.length !== t); n = !0) ;
                } catch (e) {
                    o = !0, r = e;
                } finally {
                    try {
                        !n && i.return && i.return();
                    } finally {
                        if (o) throw r;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
        }, i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t;
            };
        }(), d = a("./node_modules/tslib/tslib.es6.js"), u = a("./node_modules/@tarojs/taro-weapp/index.js"), l = x(u), c = a("./node_modules/@tarojs/redux/index.js"), p = a("./src/actions/syncActions.ts"), f = a("./src/actions/asyncActions.ts"), m = a("./src/utils/timeformat.js"), _ = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t.default = e, t;
        }(a("./src/model/task.js")), h = a("./src/utils/task-util.js"), y = a("./src/utils/util.js"), g = x(a("./src/utils/dict.js")), k = x(a("./src/pages/reminder/index.module.scss"));
        function x(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        var j = (o = n = function(e) {
            function t() {
                var e, a, n;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, t);
                for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                return a = n = v(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
                n.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "$compid__32", "styles", "isReady", "errorCount", "projectId", "taskId", "etag", "task", "isDialogOpened", "isDialogDisplay", "isFullScreenMode", "isOverDue", "projectList", "login", "fetchProjectAndGroup", "fetchTask", "systemInfo", "toggleTask", "saveTask", "alarmForm" ], 
                n.handlePostponeClick = function(e, t) {
                    var a, o = (0, y.clone)(n.state.task), r = (0, m.prefMoment)();
                    if ("15m" === e) a = r.add(15, "m"); else if ("30m" === e) a = r.add(30, "m"); else if ("1h" === e) a = r.add(1, "h"); else if ("3h" === e) a = r.add(3, "h"); else if ("1d" === e) a = r.add(1, "d"); else {
                        if ("next_period" !== e) return void n.closeDialog();
                        a = (0, h.getNextDueDate)(o), o = _.updateRepeatCount(o);
                        var s = (0, m.prefMoment)(a).utc().format(g.default.format.atomTime), i = _.calDueDate(o, s);
                        o.startDate = s, o.dueDate = i, o.remindTime = s;
                    }
                    if ("next_period" !== e) {
                        var d = (0, m.prefMomentUTCAtom)(a);
                        o.remindTime = d;
                    }
                    l.default.showToast({
                        title: "提交中",
                        icon: "loading",
                        duration: 1e5
                    }), n.props.saveTask(o).then(function() {
                        l.default.hideToast(), t && n.props.alarmForm({
                            taskId: o.id,
                            formId: t
                        }), l.default.redirectTo({
                            url: "/pages/reminder/result?type=postpone"
                        });
                    }, function(e) {
                        l.default.hideToast(), console.log(e), l.default.showToast({
                            title: "出了一点小问题，请稍后再试",
                            icon: "none",
                            duration: 1500
                        });
                    });
                }, n.customComponents = [ "PostponeOptionsCard" ], v(n, a);
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
            }(t, u.Component), i(t, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(t, a, n) {
                        null === t && (t = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(t, a);
                        if (void 0 === o) {
                            var r = Object.getPrototypeOf(t);
                            return null === r ? void 0 : e(r, a, n);
                        }
                        if ("value" in o) return o.value;
                        var s = o.get;
                        return void 0 !== s ? s.call(n) : void 0;
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        isReady: !1,
                        errorCount: 0,
                        projectId: "",
                        taskId: "",
                        etag: "",
                        task: {},
                        isDialogOpened: !1,
                        isDialogDisplay: !1,
                        isFullScreenMode: !1,
                        isOverDue: !1
                    }, this.$$refs = new l.default.RefsArray();
                }
            }, {
                key: "projectName",
                value: function() {
                    var e = this;
                    if (this.state.projectId && this.state.projectId.match("inbox")) return "收集箱";
                    var t = (this.props.projectList || []).find(function(t) {
                        return t.id === e.state.projectId;
                    });
                    return t ? t.name : "";
                }
            }, {
                key: "isSubTaskMode",
                value: function() {
                    return this.state.task.items && this.state.task.items.length > 0;
                }
            }, {
                key: "taskPriority",
                value: function() {
                    if (!this.state.task.priority) return "hide";
                    switch (parseInt(this.state.task.priority)) {
                      case 5:
                        return "icon-high-priority";

                      case 3:
                        return "icon-medium-priority";

                      case 1:
                        return "icon-low-priority";

                      default:
                        return "hide";
                    }
                }
            }, {
                key: "taskStartDate",
                value: function() {
                    if (this.state.task.startDate) {
                        var e = this.state.task.isAllDay, t = (0, m.prefMomentFromUTC)(this.state.task.startDate), a = (0, 
                        m.prefMoment)();
                        return a.clone().startOf("day").isSame(t.clone().startOf("day")) ? e ? "今天" : t.format("今天, HH:mm") : a.clone().add(1, "day").startOf("day").isSame(t.clone().startOf("day")) ? e ? "明天" : t.format("明天，HH:mm") : a.clone().startOf("year").isSame(t.clone().startOf("year")) ? t.format(e ? "MM月DD日" : "MM月DD日, HH:mm") : t.format(e ? "YYYY年MM月DD日" : "YYYY年MM月DD日, HH:mm");
                    }
                    return "";
                }
            }, {
                key: "taskWillRepeat",
                value: function() {
                    return this.state.task && this.state.task.repeatFlag && _.willRepeat(this.state.task) || !1;
                }
            }, {
                key: "animationClass",
                value: function() {
                    var e = [];
                    return e.push(this.state.isDialogOpened ? k.default["dialog-opened"] : k.default["dialog-opening"]), 
                    e.push(this.state.isDialogDisplay ? k.default["dialog-display"] : k.default["dialog-none"]), 
                    e.join(" ");
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var e = this;
                    this.handleCompatibility(), this.setState(function(e) {
                        return s({}, e, {
                            errorCount: 0
                        });
                    });
                    var t = this.$router.params.projectId || "inbox1015828479", a = this.$router.params.taskId || "5eba1160baa0ee1e579aef03", n = this.$router.params.etag;
                    t && a || l.default.redirectTo({
                        url: "/pages/index/index"
                    }), this.setState(function(e) {
                        return s({}, e, {
                            projectId: t,
                            taskId: a,
                            etag: n
                        });
                    }), l.default.checkSession({
                        success: function() {
                            e.initData();
                        },
                        fail: function() {
                            console.log("login fail"), e.initLogin();
                        },
                        complete: function() {
                            e.props.setSessionChecked(!0);
                        }
                    });
                }
            }, {
                key: "componentDidShow",
                value: function() {
                    this.state.isReady && this.fetchTask();
                }
            }, {
                key: "initLogin",
                value: function() {
                    var e = this;
                    l.default.showToast({
                        title: "登录中",
                        icon: "loading",
                        duration: 1e5
                    }), this.props.login().then(function() {
                        e.setState(function(e) {
                            return s({}, e, {
                                errorCount: 0
                            });
                        }), l.default.hideToast(), e.initData();
                    }, function() {
                        if (l.default.hideToast(), e.state.errorCount > 3) {
                            var t = "/pages/reminder/index?projectId=" + e.state.projectId + "&taskId=" + e.state.taskId;
                            t = encodeURIComponent(t), l.default.redirectTo({
                                url: "/pages/login/index?hintType=reminder&origin=" + t
                            });
                        } else e.setState(function(e) {
                            return s({}, e, {
                                errorCount: e.errorCount + 1
                            });
                        }), e.initLogin();
                    });
                }
            }, {
                key: "initData",
                value: function() {
                    var e = this;
                    l.default.showToast({
                        title: "获取数据中",
                        icon: "loading",
                        duration: 1e5
                    }), this.props.fetchProjectAndGroup().then(function() {
                        e.setState(function(e) {
                            return s({}, e, {
                                errorCount: 0
                            });
                        }), l.default.hideToast(), e.fetchTask();
                    }, function() {
                        if (l.default.hideToast(), e.state.errorCount > 3) {
                            var t = "/pages/reminder/index?projectId=" + e.state.projectId + "&taskId=" + e.state.taskId;
                            t = encodeURIComponent(t), l.default.redirectTo({
                                url: "/pages/login/index?hintType=reminder&origin=" + t
                            });
                        } else e.setState(function(e) {
                            return s({}, e, {
                                errorCount: e.errorCount + 1
                            });
                        }), e.initData();
                    });
                }
            }, {
                key: "fetchTask",
                value: function() {
                    var e = this;
                    l.default.showToast({
                        title: "获取数据中",
                        icon: "loading",
                        duration: 1e5
                    }), this.props.fetchTask({
                        projectId: this.state.projectId,
                        taskId: this.state.taskId
                    }).then(function(t) {
                        return console.log("adadadad", t), e.setState({
                            errorCount: 0,
                            task: t,
                            isReady: !0
                        }, function() {
                            l.default.hideToast();
                            var t = e.state.task.remindTime, a = e.state.task.startDate;
                            2 !== e.state.task.status ? t && a && t !== a && _.hasSnoozeTime(e.state.task) ? l.default.redirectTo({
                                url: "/pages/reminder/result?type=postpone"
                            }) : e.state.task.repeatFlag && e.state.etag !== e.state.task.etag && l.default.redirectTo({
                                url: "/pages/reminder/result?type=edit"
                            }) : l.default.redirectTo({
                                url: "/pages/reminder/result?type=completed"
                            });
                        }), Promise.resolve();
                    }, function() {
                        l.default.hideToast(), e.state.errorCount > 3 ? l.default.showToast({
                            title: "获取数据失败，请稍后再试",
                            icon: "none",
                            duration: 3e3
                        }) : (e.setState(function(e) {
                            return {
                                errorCount: e.errorCount + 1
                            };
                        }), e.fetchTask());
                    });
                }
            }, {
                key: "openDialog",
                value: function() {
                    this.setState(function(e) {
                        return s({}, e, {
                            isDialogDisplay: !0,
                            isDialogOpened: !0
                        });
                    });
                }
            }, {
                key: "closeDialog",
                value: function() {
                    var e = this;
                    this.setState(function(e) {
                        return s({}, e, {
                            isDialogOpened: !1
                        });
                    }), setTimeout(function() {
                        e.setState(function(e) {
                            return s({}, e, {
                                isDialogDisplay: !1
                            });
                        });
                    }, 300);
                }
            }, {
                key: "handleCompatibility",
                value: function() {
                    this.props.systemInfo.model.indexOf("iPhone X") > -1 ? this.setState(function(e) {
                        return s({}, e, {
                            isFullScreenMode: !0
                        });
                    }) : this.setState(function(e) {
                        return s({}, e, {
                            isFullScreenMode: !1
                        });
                    });
                }
            }, {
                key: "markDone",
                value: function() {
                    l.default.showToast({
                        title: "提交中",
                        icon: "loading",
                        duration: 1e5
                    }), this.props.toggleTask(this.state.task.id).then(function() {
                        l.default.hideToast(), l.default.redirectTo({
                            url: "/pages/reminder/result?type=completed"
                        });
                    }, function(e) {
                        l.default.hideToast(), console.log(e), l.default.showToast({
                            title: "出了一点小问题，请稍后再试",
                            icon: "none",
                            duration: 1500
                        });
                    });
                }
            }, {
                key: "handleIsOverDue",
                value: function() {
                    var e, t, a = (0, m.prefMoment)().startOf("day");
                    if (console.log("task???", this.state.task.startDate), this.state.task.startDate) {
                        e = (0, m.prefMomentFromUTC)(this.state.task.startDate).startOf("day");
                        var n = _.getDueDate(this.state.task);
                        return n ? (t = (0, m.prefMomentFromUTC)((0, m.getRealDueDate)(n, this.state.task.isAllDay)).startOf("day"), 
                        a.isAfter(t)) : a.isAfter(e);
                    }
                    return !0;
                }
            }, {
                key: "_createData",
                value: function() {
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var e = this.$prefix, t = (0, u.genCompid)(e + "$compid__32"), a = r(t, 2), n = a[0], o = a[1], s = k.default["task-detail"] + " " + (this.handleIsOverDue() ? k.default["overdue-task"] : ""), i = "icon priority-icon " + k.default["priority-icon"] + " " + this.taskPriority(), d = this.taskStartDate(), l = this.projectName(), c = this.isSubTaskMode() ? this.__state.task.desc : this.__state.task.content, p = k.default.dialog + " " + this.animationClass(), f = this.taskWillRepeat(), m = this.taskWillRepeat(), _ = this.isSubTaskMode();
                    return u.propsManager.set({
                        onHandlePostponeClick: this.handlePostponeClick,
                        isRepeatTask: f
                    }, o, n), Object.assign(this.__state, {
                        anonymousState__temp: s,
                        anonymousState__temp2: i,
                        anonymousState__temp3: d,
                        anonymousState__temp4: l,
                        anonymousState__temp5: c,
                        anonymousState__temp6: p,
                        anonymousState__temp7: f,
                        anonymousState__temp8: m,
                        anonymousState__temp9: _,
                        $compid__32: o,
                        styles: k.default
                    }), this.__state;
                }
            } ]), t;
        }(), n.$$events = [ "markDone", "openDialog", "closeDialog" ], n.$$componentPath = "pages/reminder/index", 
        o);
        j.options = {
            addGlobalClass: !0
        }, j = (0, d.__decorate)([ (0, c.connect)(function(e) {
            return {
                projectList: e.syncReducers.projectList,
                systemInfo: e.syncReducers.systemInfo
            };
        }, function(e) {
            return {
                setSessionChecked: function(t) {
                    return e((0, p.setSessionChecked)(t));
                },
                login: function() {
                    return e((0, f.login)());
                },
                fetchProjectAndGroup: function() {
                    return e((0, f.fetchProjectAndGroup)());
                },
                fetchTask: function(t) {
                    return e((0, f.fetchTask)(t));
                },
                toggleTask: function(t) {
                    return e((0, f.toggleTask)(t));
                },
                saveTask: function(t) {
                    return e((0, f.saveTask)(t));
                },
                alarmForm: function(t) {
                    return e((0, f.alarmForm)(t));
                }
            };
        }) ], j), t.default = j, Component(a("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(j, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/index.tsx?taro&type=template&parse=PAGE&": function(e, t, a) {
        e.exports = a.p + "pages/reminder/index.wxml";
    },
    "./src/pages/reminder/index.module.scss": function(e, t, a) {
        e.exports = {
            container: "index-module__container___1Ybtf",
            "task-detail": "index-module__task-detail___FQ7-h",
            "btn-group": "index-module__btn-group___3g6a7",
            "full-screen": "index-module__full-screen___3q2zd",
            dialog: "index-module__dialog___tCnfQ",
            mask: "index-module__mask___tgebu",
            "dialog-display": "index-module__dialog-display___2dpDa",
            "dialog-opened": "index-module__dialog-opened___2GLJl",
            "dialog-content": "index-module__dialog-content___1SIBb",
            "dialog-none": "index-module__dialog-none___Y2_La",
            "dialog-opening": "index-module__dialog-opening___rXT4D",
            "detail-card": "index-module__detail-card___39aQQ",
            "detail-header": "index-module__detail-header___a51GS",
            "time-area": "index-module__time-area___2DkxQ",
            "overdue-task": "index-module__overdue-task___RS8E0",
            "project-name": "index-module__project-name___1ovXk",
            "icon-repeat-task": "index-module__icon-repeat-task___VVGBl",
            "repeat-margin-offset": "index-module__repeat-margin-offset___38d72",
            "priority-icon": "index-module__priority-icon___3c4J1",
            "detail-body": "index-module__detail-body___2-YPA",
            "task-title": "index-module__task-title___36q3e",
            "task-desc": "index-module__task-desc___38jrV",
            "sub-task-list": "index-module__sub-task-list___z-lg2",
            "sub-task-item": "index-module__sub-task-item___pzgC5",
            "func-btn": "index-module__func-btn___Nmxvt",
            "btn-icon": "index-module__btn-icon___2XPoj",
            "btn-text": "index-module__btn-text___2LCTo",
            "postpone-options-card": "index-module__postpone-options-card___vyIYy",
            "btn-cancel": "index-module__btn-cancel___X_otT"
        };
    },
    "./src/pages/reminder/index.tsx": function(e, t, a) {
        "use strict";
        a.r(t), a("./src/pages/reminder/index.tsx?taro&type=template&parse=PAGE&");
        var n = a("./src/pages/reminder/index.tsx?taro&type=script&parse=PAGE&");
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
    },
    "./src/pages/reminder/index.tsx?taro&type=script&parse=PAGE&": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/index.tsx?taro&type=script&parse=PAGE&"), o = a.n(n);
        for (var r in n) "default" !== r && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = o.a;
    },
    "./src/pages/reminder/index.tsx?taro&type=template&parse=PAGE&": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/reminder/index.tsx?taro&type=template&parse=PAGE&");
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
    }
}, [ [ "./src/pages/reminder/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);