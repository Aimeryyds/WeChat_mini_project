(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ "pages/config/index" ], {
    "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/config/index.tsx?taro&type=script&parse=PAGE&": function(e, a, l) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t, i, n = function(e, a) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, a) {
                var l = [], t = !0, i = !1, n = void 0;
                try {
                    for (var u, r = e[Symbol.iterator](); !(t = (u = r.next()).done) && (l.push(u.value), 
                    !a || l.length !== a); t = !0) ;
                } catch (e) {
                    i = !0, n = e;
                } finally {
                    try {
                        !t && r.return && r.return();
                    } finally {
                        if (i) throw n;
                    }
                }
                return l;
            }(e, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, u = function() {
            function e(e, a) {
                for (var l = 0; l < a.length; l++) {
                    var t = a[l];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(e, t.key, t);
                }
            }
            return function(a, l, t) {
                return l && e(a.prototype, l), t && e(a, t), a;
            };
        }(), r = l("./node_modules/tslib/tslib.es6.js"), o = l("./node_modules/@tarojs/taro-weapp/index.js"), s = d(o), c = l("./src/actions/syncActions.ts"), v = l("./node_modules/@tarojs/redux/index.js"), T = d(l("./src/utils/api.js")), b = d(l("./src/utils/configs.js"));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function M(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != typeof a && "function" != typeof a ? e : a;
        }
        l("./src/pages/config/index.scss");
        var f = (i = t = function(e) {
            function a() {
                var e, l, t;
                !function(e, a) {
                    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                }(this, a);
                for (var i = arguments.length, n = Array(i), u = 0; u < i; u++) n[u] = arguments[u];
                return l = t = M(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(n))), 
                t.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "$compid__31", "defaultDueDateArray", "defaultPriorityArray", "defaultTimezoneArray", "defaultTimezoneValueArray", "defaultDueDateIndex", "defaultPriorityIndex", "defaultTimezoneIndex", "showTimezonePicker", "nlpenabled", "remind", "taskCreatedTip", "dateKeptInText", "isReady", "configRefresh" ], 
                t.bindTimezoneChange = function(e) {
                    t.setState(function() {
                        return {
                            defaultTimezoneIndex: e[0],
                            showTimezonePicker: !1
                        };
                    }), t.saveSettings();
                }, t.setShowTimezonePicker = function(e) {
                    t.setState(function() {
                        return {
                            showTimezonePicker: e
                        };
                    });
                }, t.customComponents = [ "TimezonePicker" ], M(t, l);
            }
            return function(e, a) {
                if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
            }(a, o.Component), u(a, [ {
                key: "_constructor",
                value: function(e) {
                    (function e(a, l, t) {
                        null === a && (a = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(a, l);
                        if (void 0 === i) {
                            var n = Object.getPrototypeOf(a);
                            return null === n ? void 0 : e(n, l, t);
                        }
                        if ("value" in i) return i.value;
                        var u = i.get;
                        return void 0 !== u ? u.call(t) : void 0;
                    })(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "_constructor", this).call(this, e), 
                    this.state = {
                        defaultDueDateArray: [ "无", "今天", "明天", "后天", "下周" ],
                        defaultPriorityArray: [ "无优先级", "低优先级", "中优先级", "高优先级" ],
                        defaultTimezoneArray: b.default.timezone.map(function(e) {
                            return e.label;
                        }),
                        defaultTimezoneValueArray: b.default.timezone.map(function(e) {
                            return e.value;
                        }),
                        defaultDueDateIndex: 0,
                        defaultPriorityIndex: 0,
                        defaultTimezoneIndex: 199,
                        showTimezonePicker: !1,
                        nlpenabled: !0,
                        remind: !0,
                        taskCreatedTip: !0,
                        dateKeptInText: !0,
                        isReady: !1
                    }, this.$$refs = new s.default.RefsArray();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    s.default.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e5,
                        mask: !0
                    });
                    var e = this;
                    s.default.checkSession({
                        success: function() {
                            console.log("login"), e.fetchSettings();
                        },
                        fail: function() {
                            console.log("login fail"), s.default.hideToast();
                            var e = "/pages/config/index";
                            e = encodeURIComponent(e), s.default.redirectTo({
                                url: "/pages/login/index?origin=" + e
                            });
                        },
                        complete: function() {
                            e.props.setSessionChecked(!0);
                        }
                    });
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.setState(function() {
                        return {
                            isReady: !0
                        };
                    });
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.configRefresh !== this.props.configRefresh && (s.default.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e5,
                        mask: !0
                    }), this.fetchSettings());
                }
            }, {
                key: "fetchSettings",
                value: function() {
                    var e = this;
                    T.default.get(T.default.WECHAT_PREFERENCE).then(function(a) {
                        var l = a.data;
                        try {
                            e.mergeDataFromServer(l);
                        } catch (e) {
                            console.log(e);
                        }
                        s.default.hideToast();
                    }, function(e) {
                        console.log(e), s.default.showToast({
                            title: "网络连接失效"
                        });
                    });
                }
            }, {
                key: "saveSettings",
                value: function() {
                    var e = this.getFormattedConfigData();
                    T.default.put(T.default.WECHAT_PREFERENCE, e).then(function(e) {
                        console.log("done");
                    }, function(e) {
                        console.log(e), s.default.showToast({
                            title: "网络连接失效"
                        });
                    });
                }
            }, {
                key: "mergeDataFromServer",
                value: function(e) {
                    var a = 0, l = 0, t = !0, i = !0, n = !0, u = !0, r = 199;
                    if (null !== e.defaultDueDate && void 0 !== e.defaultDueDate && (a = 7 === parseInt(e.defaultDueDate) ? 4 : parseInt(e.defaultDueDate)), 
                    null !== e.defaultPriority && void 0 !== e.defaultDueDate) switch (parseInt(e.defaultPriority)) {
                      case 0:
                        l = 0;
                        break;

                      case 1:
                        l = 1;
                        break;

                      case 3:
                        l = 2;
                        break;

                      case 5:
                        l = 3;
                        break;

                      default:
                        l = 0;
                    }
                    if (null !== e.nlpenabled && void 0 !== e.defaultDueDate && (t = e.nlpenabled), 
                    null !== e.remind && void 0 !== e.remind && (i = e.remind), null !== e.dateKeptInText && void 0 !== e.defaultDueDate && (u = e.dateKeptInText), 
                    null !== e.taskCreatedTip && void 0 !== e.taskCreatedTip && (n = e.taskCreatedTip), 
                    null !== e.timeZone && void 0 !== e.defaultDueDate) {
                        var o = this.state.defaultTimezoneValueArray.indexOf(e.timeZone);
                        r = -1 === o ? 199 : o;
                    }
                    this.setState(function() {
                        return {
                            defaultDueDateIndex: a,
                            defaultPriorityIndex: l,
                            nlpenabled: t,
                            remind: i,
                            taskCreatedTip: n,
                            dateKeptInText: u,
                            defaultTimezoneIndex: r
                        };
                    });
                }
            }, {
                key: "getFormattedConfigData",
                value: function() {
                    var e = {};
                    return e.defaultDueDate = 4 === parseInt(this.state.defaultDueDateIndex) ? 7 : parseInt(this.state.defaultDueDateIndex), 
                    e.defaultPriority = this.getFormattedPriority(parseInt(this.state.defaultPriorityIndex)), 
                    e.nlpenabled = this.state.nlpenabled, e.dateKeptInText = this.state.dateKeptInText, 
                    e.remind = this.state.remind, e.taskCreatedTip = this.state.taskCreatedTip, e.timeZone = this.state.defaultTimezoneValueArray[this.state.defaultTimezoneIndex], 
                    e;
                }
            }, {
                key: "getFormattedPriority",
                value: function(e) {
                    return 0 === e || 1 === e ? e : 2 === e ? 3 : 3 === e ? 5 : void 0;
                }
            }, {
                key: "bindNlpEnabledChange",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            nlpenabled: a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "bindReminderChange",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            remind: a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "bindTaskCreatedTipChange",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            taskCreatedTip: a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "bindDateKeptInText",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            dateKeptInText: !a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "bindDefaultDueDateChange",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            defaultDueDateIndex: a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "bindDefaultPriorityChange",
                value: function(e) {
                    var a = e.target.value;
                    this.setState(function() {
                        return {
                            defaultPriorityIndex: a
                        };
                    }), this.saveSettings();
                }
            }, {
                key: "_createData",
                value: function() {
                    var e = this;
                    this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                    arguments[2];
                    var a = this.$prefix, l = (0, o.genCompid)(a + "$compid__31"), t = n(l, 2), i = t[0], u = t[1];
                    this.anonymousFunc0 = function() {
                        return e.setShowTimezonePicker(!0);
                    };
                    var r = this.__state.defaultTimezoneArray[this.__state.defaultTimezoneIndex], s = function() {
                        return e.setShowTimezonePicker(!1);
                    };
                    return o.propsManager.set({
                        showTimezonePicker: this.__state.showTimezonePicker,
                        defaultTimezoneArray: this.__state.defaultTimezoneArray,
                        defaultTimezoneIndex: this.__state.defaultTimezoneIndex,
                        hideTimezonePicker: s,
                        bindTimezoneChange: this.bindTimezoneChange
                    }, u, i), Object.assign(this.__state, {
                        anonymousState__temp: r,
                        anonymousState__temp2: s,
                        $compid__31: u
                    }), this.__state;
                }
            }, {
                key: "anonymousFunc0",
                value: function(e) {}
            } ]), a;
        }(), t.$$events = [ "bindNlpEnabledChange", "bindDateKeptInText", "bindReminderChange", "anonymousFunc0" ], 
        t.$$componentPath = "pages/config/index", i);
        f.options = {
            addGlobalClass: !0
        }, f = (0, r.__decorate)([ (0, v.connect)(function(e) {
            return {
                configRefresh: e.syncReducers.configRefresh
            };
        }, function(e) {
            return {
                setSessionChecked: function(a) {
                    return e((0, c.setSessionChecked)(a));
                }
            };
        }) ], f), a.default = f, Component(l("./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(f, !0));
    },
    "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/config/index.tsx?taro&type=template&parse=PAGE&": function(e, a, l) {
        e.exports = l.p + "pages/config/index.wxml";
    },
    "./src/pages/config/index.scss": function(e, a, l) {},
    "./src/pages/config/index.tsx": function(e, a, l) {
        "use strict";
        l.r(a), l("./src/pages/config/index.tsx?taro&type=template&parse=PAGE&");
        var t = l("./src/pages/config/index.tsx?taro&type=script&parse=PAGE&");
        for (var i in t) "default" !== i && function(e) {
            l.d(a, e, function() {
                return t[e];
            });
        }(i);
    },
    "./src/pages/config/index.tsx?taro&type=script&parse=PAGE&": function(e, a, l) {
        "use strict";
        l.r(a);
        var t = l("./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/config/index.tsx?taro&type=script&parse=PAGE&"), i = l.n(t);
        for (var n in t) "default" !== n && function(e) {
            l.d(a, e, function() {
                return t[e];
            });
        }(n);
        a.default = i.a;
    },
    "./src/pages/config/index.tsx?taro&type=template&parse=PAGE&": function(e, a, l) {
        "use strict";
        l.r(a);
        var t = l("./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/dida/Developer/wxapp/hybird-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/config/index.tsx?taro&type=template&parse=PAGE&");
        for (var i in t) "default" !== i && function(e) {
            l.d(a, e, function() {
                return t[e];
            });
        }(i);
    },
    "./src/utils/configs.js": function(e, a, l) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            timezone: [ {
                label: "(GMT-11:00) 帕果帕果",
                value: "Pacific/Pago_Pago"
            }, {
                label: "(GMT-11:00) 纽埃",
                value: "Pacific/Niue"
            }, {
                label: "(GMT-10:00) 塔希提岛",
                value: "Pacific/Tahiti"
            }, {
                label: "(GMT-10:00) 夏威夷时间",
                value: "Pacific/Honolulu"
            }, {
                label: "(GMT-10:00) 拉罗汤加岛",
                value: "Pacific/Rarotonga"
            }, {
                label: "(GMT-09:30) 马克萨斯",
                value: "Pacific/Marquesas"
            }, {
                label: "(GMT-09:00) 甘比尔群岛",
                value: "Pacific/Gambier"
            }, {
                label: "(GMT-09:00) 阿拉斯加时间",
                value: "America/Anchorage"
            }, {
                label: "(GMT-08:00) 太平洋时间",
                value: "America/Los_Angeles"
            }, {
                label: "(GMT-08:00) 太平洋时间 - 怀特霍斯",
                value: "America/Whitehorse"
            }, {
                label: "(GMT-08:00) 太平洋时间 - 提华纳",
                value: "America/Tijuana"
            }, {
                label: "(GMT-08:00) 太平洋时间 - 温哥华",
                value: "America/Vancouver"
            }, {
                label: "(GMT-08:00) 皮特凯恩",
                value: "Pacific/Pitcairn"
            }, {
                label: "(GMT-07:00) 山区地时间",
                value: "America/Denver"
            }, {
                label: "(GMT-07:00) 山地区时间 - 埃德蒙顿",
                value: "America/Edmonton"
            }, {
                label: "(GMT-07:00) 山地区时间 - 埃莫西约",
                value: "America/Hermosillo"
            }, {
                label: "(GMT-07:00) 山地区时间 - 奇瓦瓦、马萨特兰",
                value: "America/Mazatlan"
            }, {
                label: "(GMT-07:00) 山地区时间 - 耶洛奈夫",
                value: "America/Yellowknife"
            }, {
                label: "(GMT-07:00) 山地区时间 - 道生克里克",
                value: "America/Dawson_Creek"
            }, {
                label: "(GMT-07:00) 山地时间 - 亚利桑那州",
                value: "America/Phoenix"
            }, {
                label: "(GMT-06:00) 中央标准时间 - 温尼伯湖",
                value: "America/Winnipeg"
            }, {
                label: "(GMT-06:00) 中央标准时间 - 里贾纳",
                value: "America/Regina"
            }, {
                label: "(GMT-06:00) 中央标准部时间 - 墨西哥城",
                value: "America/Mexico_City"
            }, {
                label: "(GMT-06:00) 中部央标准时间",
                value: "America/Chicago"
            }, {
                label: "(GMT-06:00) 中部时间 - 特古西加尔巴",
                value: "America/Tegucigalpa"
            }, {
                label: "(GMT-06:00) 伯利兹",
                value: "America/Belize"
            }, {
                label: "(GMT-06:00) 加拉帕哥斯群岛",
                value: "Pacific/Galapagos"
            }, {
                label: "(GMT-06:00) 危地马拉",
                value: "America/Guatemala"
            }, {
                label: "(GMT-06:00) 哥斯达黎加",
                value: "America/Costa_Rica"
            }, {
                label: "(GMT-06:00) 萨尔瓦多",
                value: "America/El_Salvador"
            }, {
                label: "(GMT-06:00) 马那瓜",
                value: "America/Managua"
            }, {
                label: "(GMT-05:00) 东部时间",
                value: "America/New_York"
            }, {
                label: "(GMT-05:00) 东部时间 - 伊魁特",
                value: "America/Iqaluit"
            }, {
                label: "(GMT-05:00) 东部时间 - 多伦多",
                value: "America/Toronto"
            }, {
                label: "(GMT-05:00) 利马",
                value: "America/Lima"
            }, {
                label: "(GMT-05:00) 哈瓦那",
                value: "America/Havana"
            }, {
                label: "(GMT-05:00) 复活节岛",
                value: "Pacific/Easter"
            }, {
                label: "(GMT-05:00) 太子港",
                value: "America/Port-au-Prince"
            }, {
                label: "(GMT-05:00) 巴拿马",
                value: "America/Panama"
            }, {
                label: "(GMT-05:00) 拿骚",
                value: "America/Nassau"
            }, {
                label: "(GMT-05:00) 波哥大",
                value: "America/Bogota"
            }, {
                label: "(GMT-05:00) 牙买加",
                value: "America/Jamaica"
            }, {
                label: "(GMT-05:00) 瓜亚基尔",
                value: "America/Guayaquil"
            }, {
                label: "(GMT-05:00) 美属坎昆",
                value: "America/Cancun"
            }, {
                label: "(GMT-05:00) 里奥布郎库",
                value: "America/Rio_Branco"
            }, {
                label: "(GMT-04:00) 加拉加斯",
                value: "America/Caracas"
            }, {
                label: "(GMT-04:00) 博阿维斯塔",
                value: "America/Boa_Vista"
            }, {
                label: "(GMT-04:00) 图勒",
                value: "America/Thule"
            }, {
                label: "(GMT-04:00) 圣多明戈",
                value: "America/Santo_Domingo"
            }, {
                label: "(GMT-04:00) 圭亚那",
                value: "America/Guyana"
            }, {
                label: "(GMT-04:00) 大特克斯岛",
                value: "America/Grand_Turk"
            }, {
                label: "(GMT-04:00) 大西洋时间 - 哈利法克斯",
                value: "America/Halifax"
            }, {
                label: "(GMT-04:00) 巴巴多斯",
                value: "America/Barbados"
            }, {
                label: "(GMT-04:00) 库拉索岛",
                value: "America/Curacao"
            }, {
                label: "(GMT-04:00) 拉巴斯",
                value: "America/La_Paz"
            }, {
                label: "(GMT-04:00) 波多黎各",
                value: "America/Puerto_Rico"
            }, {
                label: "(GMT-04:00) 百慕大",
                value: "Atlantic/Bermuda"
            }, {
                label: "(GMT-04:00) 西班牙港",
                value: "America/Port_of_Spain"
            }, {
                label: "(GMT-04:00) 韦柳港",
                value: "America/Porto_Velho"
            }, {
                label: "(GMT-04:00) 马提尼克",
                value: "America/Martinique"
            }, {
                label: "(GMT-04:00) 马瑙斯",
                value: "America/Manaus"
            }, {
                label: "(GMT-03:30) 纽芬兰时间 - 圣路易斯",
                value: "America/St_Johns"
            }, {
                label: "(GMT-03:00) 亚松森",
                value: "America/Asuncion"
            }, {
                label: "(GMT-03:00) 卡宴",
                value: "America/Cayenne"
            }, {
                label: "(GMT-03:00) 史丹利",
                value: "Atlantic/Stanley"
            }, {
                label: "(GMT-03:00) 圣地亚哥",
                value: "America/Santiago"
            }, {
                label: "(GMT-03:00) 大坎普市",
                value: "America/Campo_Grande"
            }, {
                label: "(GMT-03:00) 密克隆岛",
                value: "America/Miquelon"
            }, {
                label: "(GMT-03:00) 布宜诺斯艾利斯",
                value: "America/Argentina/Buenos_Aires"
            }, {
                label: "(GMT-03:00) 帕拉马里博",
                value: "America/Paramaribo"
            }, {
                label: "(GMT-03:00) 帕默",
                value: "Antarctica/Palmer"
            }, {
                label: "(GMT-03:00) 库亚巴",
                value: "America/Cuiaba"
            }, {
                label: "(GMT-03:00) 戈特霍布",
                value: "America/Godthab"
            }, {
                label: "(GMT-03:00) 福塔雷萨",
                value: "America/Fortaleza"
            }, {
                label: "(GMT-03:00) 累西腓",
                value: "America/Recife"
            }, {
                label: "(GMT-03:00) 萨尔瓦多",
                value: "America/Bahia"
            }, {
                label: "(GMT-03:00) 蒙得维的亚",
                value: "America/Montevideo"
            }, {
                label: "(GMT-03:00) 蓬塔阿雷纳斯",
                value: "America/Punta_Arenas"
            }, {
                label: "(GMT-03:00) 贝伦",
                value: "America/Belem"
            }, {
                label: "(GMT-03:00) 路德",
                value: "Antarctica/Rothera"
            }, {
                label: "(GMT-03:00) 阿拉瓜伊纳",
                value: "America/Araguaina"
            }, {
                label: "(GMT-03:00) 马塞约",
                value: "America/Maceio"
            }, {
                label: "(GMT-02:00) 南乔治亚",
                value: "Atlantic/South_Georgia"
            }, {
                label: "(GMT-02:00) 圣保罗",
                value: "America/Sao_Paulo"
            }, {
                label: "(GMT-02:00) 诺罗尼亚",
                value: "America/Noronha"
            }, {
                label: "(GMT-01:00) 亚述尔群岛",
                value: "Atlantic/Azores"
            }, {
                label: "(GMT-01:00) 佛得角",
                value: "Atlantic/Cape_Verde"
            }, {
                label: "(GMT-01:00) 斯科列斯比桑德",
                value: "America/Scoresbysund"
            }, {
                label: "(GMT+00:00) GMT（无夏令时）",
                value: "Etc/GMT"
            }, {
                label: "(GMT+00:00) 丹麦港",
                value: "America/Danmarkshavn"
            }, {
                label: "(GMT+00:00) 伦敦",
                value: "Europe/London"
            }, {
                label: "(GMT+00:00) 加那利群岛",
                value: "Atlantic/Canary"
            }, {
                label: "(GMT+00:00) 卡萨布兰卡",
                value: "Africa/Casablanca"
            }, {
                label: "(GMT+00:00) 比绍",
                value: "Africa/Bissau"
            }, {
                label: "(GMT+00:00) 法罗群岛",
                value: "Atlantic/Faroe"
            }, {
                label: "(GMT+00:00) 蒙罗维亚",
                value: "Africa/Monrovia"
            }, {
                label: "(GMT+00:00) 都柏林",
                value: "Europe/Dublin"
            }, {
                label: "(GMT+00:00) 里斯本",
                value: "Europe/Lisbon"
            }, {
                label: "(GMT+00:00) 阿克拉",
                value: "Africa/Accra"
            }, {
                label: "(GMT+00:00) 阿尤恩",
                value: "Africa/El_Aaiun"
            }, {
                label: "(GMT+00:00) 阿比让",
                value: "Africa/Abidjan"
            }, {
                label: "(GMT+00:00) 雷克雅末克",
                value: "Atlantic/Reykjavik"
            }, {
                label: "UTC",
                value: "UTC"
            }, {
                label: "(GMT+01:00) 中欧时间 - 布拉格",
                value: "Europe/Prague"
            }, {
                label: "(GMT+01:00) 中欧时间 - 贝尔格莱德",
                value: "Europe/Belgrade"
            }, {
                label: "(GMT+01:00) 休达",
                value: "Africa/Ceuta"
            }, {
                label: "(GMT+01:00) 华沙",
                value: "Europe/Warsaw"
            }, {
                label: "(GMT+01:00) 卢森堡",
                value: "Europe/Luxembourg"
            }, {
                label: "(GMT+01:00) 哥本哈根",
                value: "Europe/Copenhagen"
            }, {
                label: "(GMT+01:00) 圣多美",
                value: "Africa/Sao_Tome"
            }, {
                label: "(GMT+01:00) 地拉那",
                value: "Europe/Tirane"
            }, {
                label: "(GMT+01:00) 奥斯陆",
                value: "Europe/Oslo"
            }, {
                label: "(GMT+01:00) 安道尔",
                value: "Europe/Andorra"
            }, {
                label: "(GMT+01:00) 巴黎",
                value: "Europe/Paris"
            }, {
                label: "(GMT+01:00) 布达佩斯",
                value: "Europe/Budapest"
            }, {
                label: "(GMT+01:00) 布鲁塞尔",
                value: "Europe/Brussels"
            }, {
                label: "(GMT+01:00) 恩贾梅纳",
                value: "Africa/Ndjamena"
            }, {
                label: "(GMT+01:00) 拉各斯",
                value: "Africa/Lagos"
            }, {
                label: "(GMT+01:00) 摩纳哥",
                value: "Europe/Monaco"
            }, {
                label: "(GMT+01:00) 斯德哥尔摩",
                value: "Europe/Stockholm"
            }, {
                label: "(GMT+01:00) 柏林",
                value: "Europe/Berlin"
            }, {
                label: "(GMT+01:00) 直布罗陀",
                value: "Europe/Gibraltar"
            }, {
                label: "(GMT+01:00) 突尼斯",
                value: "Africa/Tunis"
            }, {
                label: "(GMT+01:00) 维也纳",
                value: "Europe/Vienna"
            }, {
                label: "(GMT+01:00) 罗马",
                value: "Europe/Rome"
            }, {
                label: "(GMT+01:00) 苏黎世",
                value: "Europe/Zurich"
            }, {
                label: "(GMT+01:00) 阿姆斯特丹",
                value: "Europe/Amsterdam"
            }, {
                label: "(GMT+01:00) 阿尔及尔",
                value: "Africa/Algiers"
            }, {
                label: "(GMT+01:00) 马德里",
                value: "Europe/Madrid"
            }, {
                label: "(GMT+01:00) 马耳他",
                value: "Europe/Malta"
            }, {
                label: "(GMT+02:00) 加沙",
                value: "Asia/Gaza"
            }, {
                label: "(GMT+02:00) 哈土穆",
                value: "Africa/Khartoum"
            }, {
                label: "(GMT+02:00) 基希讷乌",
                value: "Europe/Chisinau"
            }, {
                label: "(GMT+02:00) 基辅",
                value: "Europe/Kiev"
            }, {
                label: "(GMT+02:00) 塔林",
                value: "Europe/Tallinn"
            }, {
                label: "(GMT+02:00) 大马士革",
                value: "Asia/Damascus"
            }, {
                label: "(GMT+02:00) 安曼",
                value: "Asia/Amman"
            }, {
                label: "(GMT+02:00) 尼科西亚",
                value: "Asia/Nicosia"
            }, {
                label: "(GMT+02:00) 布加勒斯特",
                value: "Europe/Bucharest"
            }, {
                label: "(GMT+02:00) 开罗",
                value: "Africa/Cairo"
            }, {
                label: "(GMT+02:00) 温得和克",
                value: "Africa/Windhoek"
            }, {
                label: "(GMT+02:00) 的黎波里",
                value: "Africa/Tripoli"
            }, {
                label: "(GMT+02:00) 索非亚",
                value: "Europe/Sofia"
            }, {
                label: "(GMT+02:00) 约翰内斯堡",
                value: "Africa/Johannesburg"
            }, {
                label: "(GMT+02:00) 维尔纽斯",
                value: "Europe/Vilnius"
            }, {
                label: "(GMT+02:00) 耶路撒冷",
                value: "Asia/Jerusalem"
            }, {
                label: "(GMT+02:00) 莫斯科-01 - 加里宁格勒",
                value: "Europe/Kaliningrad"
            }, {
                label: "(GMT+02:00) 贝鲁特",
                value: "Asia/Beirut"
            }, {
                label: "(GMT+02:00) 赫尔辛基",
                value: "Europe/Helsinki"
            }, {
                label: "(GMT+02:00) 里加",
                value: "Europe/Riga"
            }, {
                label: "(GMT+02:00) 雅典",
                value: "Europe/Athens"
            }, {
                label: "(GMT+02:00) 马普托",
                value: "Africa/Maputo"
            }, {
                label: "(GMT+03:00) 伊斯坦布尔",
                value: "Europe/Istanbul"
            }, {
                label: "(GMT+03:00) 利雅得",
                value: "Asia/Riyadh"
            }, {
                label: "(GMT+03:00) 卡塔尔",
                value: "Asia/Qatar"
            }, {
                label: "(GMT+03:00) 奈洛比",
                value: "Africa/Nairobi"
            }, {
                label: "(GMT+03:00) 巴格达",
                value: "Asia/Baghdad"
            }, {
                label: "(GMT+03:00) 明斯克",
                value: "Europe/Minsk"
            }, {
                label: "(GMT+03:00) 昭和",
                value: "Antarctica/Syowa"
            }, {
                label: "(GMT+03:00) 莫斯科+00 - 莫斯科",
                value: "Europe/Moscow"
            }, {
                label: "(GMT+03:30) 德黑兰",
                value: "Asia/Tehran"
            }, {
                label: "(GMT+04:00) 巴库",
                value: "Asia/Baku"
            }, {
                label: "(GMT+04:00) 毛里求斯",
                value: "Indian/Mauritius"
            }, {
                label: "(GMT+04:00) 留尼旺岛",
                value: "Indian/Reunion"
            }, {
                label: "(GMT+04:00) 第比利斯",
                value: "Asia/Tbilisi"
            }, {
                label: "(GMT+04:00) 耶烈万",
                value: "Asia/Yerevan"
            }, {
                label: "(GMT+04:00) 莫斯科+01 - 萨马拉",
                value: "Europe/Samara"
            }, {
                label: "(GMT+04:00) 迪拜",
                value: "Asia/Dubai"
            }, {
                label: "(GMT+04:00) 马埃",
                value: "Indian/Mahe"
            }, {
                label: "(GMT+04:30) 喀布尔",
                value: "Asia/Kabul"
            }, {
                label: "(GMT+05:00) 凯尔盖朗群岛",
                value: "Indian/Kerguelen"
            }, {
                label: "(GMT+05:00) 卡拉奇",
                value: "Asia/Karachi"
            }, {
                label: "(GMT+05:00) 塔什干",
                value: "Asia/Tashkent"
            }, {
                label: "(GMT+05:00) 杜尚别",
                value: "Asia/Dushanbe"
            }, {
                label: "(GMT+05:00) 莫斯科+02 - 叶卡捷琳堡",
                value: "Asia/Yekaterinburg"
            }, {
                label: "(GMT+05:00) 莫森",
                value: "Antarctica/Mawson"
            }, {
                label: "(GMT+05:00) 阿什哈巴德",
                value: "Asia/Ashgabat"
            }, {
                label: "(GMT+05:00) 阿克套",
                value: "Asia/Aqtau"
            }, {
                label: "(GMT+05:00) 阿克托别",
                value: "Asia/Aqtobe"
            }, {
                label: "(GMT+05:00) 马尔代夫",
                value: "Indian/Maldives"
            }, {
                label: "(GMT+05:30) 印度标准时间",
                value: "Asia/Calcutta"
            }, {
                label: "(GMT+05:30) 科伦坡",
                value: "Asia/Colombo"
            }, {
                label: "(GMT+05:45) 加德满都",
                value: "Asia/Katmandu"
            }, {
                label: "(GMT+06:00) 廷布",
                value: "Asia/Thimphu"
            }, {
                label: "(GMT+06:00) 查戈斯",
                value: "Indian/Chagos"
            }, {
                label: "(GMT+06:00) 比什凯克",
                value: "Asia/Bishkek"
            }, {
                label: "(GMT+06:00) 沃斯托克",
                value: "Antarctica/Vostok"
            }, {
                label: "(GMT+06:00) 莫斯科+03 - 鄂木斯克",
                value: "Asia/Omsk"
            }, {
                label: "(GMT+06:00) 达卡",
                value: "Asia/Dhaka"
            }, {
                label: "(GMT+06:00) 阿拉木图",
                value: "Asia/Almaty"
            }, {
                label: "(GMT+06:30) 仰光",
                value: "Asia/Yangon"
            }, {
                label: "(GMT+06:30) 可可群岛",
                value: "Indian/Cocos"
            }, {
                label: "(GMT+07:00) 圣诞岛",
                value: "Indian/Christmas"
            }, {
                label: "(GMT+07:00) 戴维斯",
                value: "Antarctica/Davis"
            }, {
                label: "(GMT+07:00) 曼谷",
                value: "Asia/Bangkok"
            }, {
                label: "(GMT+07:00) 河内",
                value: "Asia/Saigon"
            }, {
                label: "(GMT+07:00) 科布多",
                value: "Asia/Hovd"
            }, {
                label: "(GMT+07:00) 莫斯科+04 - 拉斯诺亚尔斯克",
                value: "Asia/Krasnoyarsk"
            }, {
                label: "(GMT+07:00) 雅加达",
                value: "Asia/Jakarta"
            }, {
                label: "(GMT+08:00) 中国时间 - 北京",
                value: "Asia/Shanghai"
            }, {
                label: "(GMT+08:00) 乌兰巴托",
                value: "Asia/Ulaanbaatar"
            }, {
                label: "(GMT+08:00) 乔巴山",
                value: "Asia/Choibalsan"
            }, {
                label: "(GMT+08:00) 台北",
                value: "Asia/Taipei"
            }, {
                label: "(GMT+08:00) 吉隆坡",
                value: "Asia/Kuala_Lumpur"
            }, {
                label: "(GMT+08:00) 文莱",
                value: "Asia/Brunei"
            }, {
                label: "(GMT+08:00) 新加坡",
                value: "Asia/Singapore"
            }, {
                label: "(GMT+08:00) 澳门",
                value: "Asia/Macau"
            }, {
                label: "(GMT+08:00) 莫斯科+05 - 伊尔库次克",
                value: "Asia/Irkutsk"
            }, {
                label: "(GMT+08:00) 西部时间 - 佩思",
                value: "Australia/Perth"
            }, {
                label: "(GMT+08:00) 香港",
                value: "Asia/Hong_Kong"
            }, {
                label: "(GMT+08:00) 马卡萨",
                value: "Asia/Makassar"
            }, {
                label: "(GMT+08:00) 马尼拉",
                value: "Asia/Manila"
            }, {
                label: "(GMT+08:30) 平壤",
                value: "Asia/Pyongyang"
            }, {
                label: "(GMT+09:00) 东京",
                value: "Asia/Tokyo"
            }, {
                label: "(GMT+09:00) 帕劳",
                value: "Pacific/Palau"
            }, {
                label: "(GMT+09:00) 帝力",
                value: "Asia/Dili"
            }, {
                label: "(GMT+09:00) 查亚普拉",
                value: "Asia/Jayapura"
            }, {
                label: "(GMT+09:00) 莫斯科+06 - 雅库茨克",
                value: "Asia/Yakutsk"
            }, {
                label: "(GMT+09:00) 首尔",
                value: "Asia/Seoul"
            }, {
                label: "(GMT+09:30) 中部央标准时间 - 达尔文",
                value: "Australia/Darwin"
            }, {
                label: "(GMT+10:00) 东部时间 - 布里斯班",
                value: "Australia/Brisbane"
            }, {
                label: "(GMT+10:00) 关岛",
                value: "Pacific/Guam"
            }, {
                label: "(GMT+10:00) 特鲁克",
                value: "Pacific/Chuuk"
            }, {
                label: "(GMT+10:00) 莫尔兹比港",
                value: "Pacific/Port_Moresby"
            }, {
                label: "(GMT+10:00) 莫斯科+07 - 海参崴",
                value: "Asia/Vladivostok"
            }, {
                label: "(GMT+10:00) 迪蒙迪维尔",
                value: "Antarctica/DumontDUrville"
            }, {
                label: "(GMT+10:30) 中部央标准时间 - 阿德莱德",
                value: "Australia/Adelaide"
            }, {
                label: "(GMT+11:00) 东部时间 - 墨尔本、悉尼",
                value: "Australia/Sydney"
            }, {
                label: "(GMT+11:00) 东部时间 - 霍巴特",
                value: "Australia/Hobart"
            }, {
                label: "(GMT+11:00) 凯西",
                value: "Antarctica/Casey"
            }, {
                label: "(GMT+11:00) 努美阿",
                value: "Pacific/Noumea"
            }, {
                label: "(GMT+11:00) 埃法特岛",
                value: "Pacific/Efate"
            }, {
                label: "(GMT+11:00) 波纳佩岛",
                value: "Pacific/Pohnpei"
            }, {
                label: "(GMT+11:00) 瓜达康纳尔岛",
                value: "Pacific/Guadalcanal"
            }, {
                label: "(GMT+11:00) 科斯瑞",
                value: "Pacific/Kosrae"
            }, {
                label: "(GMT+11:00) 莫斯科+08 - 马加丹",
                value: "Asia/Magadan"
            }, {
                label: "(GMT+11:00) 诺福克",
                value: "Pacific/Norfolk"
            }, {
                label: "(GMT+12:00) 塔拉瓦岛",
                value: "Pacific/Tarawa"
            }, {
                label: "(GMT+12:00) 夸贾林岛",
                value: "Pacific/Kwajalein"
            }, {
                label: "(GMT+12:00) 威克岛",
                value: "Pacific/Wake"
            }, {
                label: "(GMT+12:00) 富纳富提",
                value: "Pacific/Funafuti"
            }, {
                label: "(GMT+12:00) 斐济",
                value: "Pacific/Fiji"
            }, {
                label: "(GMT+12:00) 瑙鲁",
                value: "Pacific/Nauru"
            }, {
                label: "(GMT+12:00) 瓦利斯",
                value: "Pacific/Wallis"
            }, {
                label: "(GMT+12:00) 莫斯科+09 - 彼得罗巴甫洛夫斯克-堪察加",
                value: "Asia/Kamchatka"
            }, {
                label: "(GMT+12:00) 马朱罗",
                value: "Pacific/Majuro"
            }, {
                label: "(GMT+13:00) 东加塔布",
                value: "Pacific/Tongatapu"
            }, {
                label: "(GMT+13:00) 奥克兰",
                value: "Pacific/Auckland"
            }, {
                label: "(GMT+13:00) 恩德贝里",
                value: "Pacific/Enderbury"
            }, {
                label: "(GMT+13:00) 法考福",
                value: "Pacific/Fakaofo"
            }, {
                label: "(GMT+14:00) 圣诞岛",
                value: "Pacific/Kiritimati"
            }, {
                label: "(GMT+14:00) 阿皮亚",
                value: "Pacific/Apia"
            } ]
        };
    }
}, [ [ "./src/pages/config/index.tsx", "runtime", "taro", "vendors", "common" ] ] ]);