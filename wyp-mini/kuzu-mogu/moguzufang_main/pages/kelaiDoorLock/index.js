(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/kelaiDoorLock/index" ], {
    "0684": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("9f6c"), o = n.n(i);
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        t["default"] = o.a;
    },
    "525b": function(e, t, n) {},
    "5bef": function(e, t, n) {
        "use strict";
        var i = n("525b"), o = n.n(i);
        o.a;
    },
    "5d39": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("b152"), o = n("0684");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("a92f");
        var a = n("17cc"), s = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
        t["default"] = s.exports;
    },
    7118: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("view", [ e.loaded ? n("view", {
                staticClass: "kelai"
            }, [ e.isEmpty ? n("view", {
                staticClass: "empty"
            }, [ n("image", {
                attrs: {
                    src: "https://assets.mgzf.com/appimg/d641329b28fce9cf29e314db00dd7c77.png"
                }
            }), n("span", [ e._v("您还没有使用智能门锁") ]) ]) : n("view", {
                staticClass: "contain"
            }, [ n("view", {
                staticClass: "locationInfo",
                attrs: {
                    eventid: "2ba2ca72-0"
                },
                on: {
                    click: e.switchLeaseFn
                }
            }, [ n("view", {
                staticClass: "iconfont mgic-location"
            }), n("view", {
                staticClass: "locationTitle"
            }, [ e._v(e._s(e.activeLease.roomAddress)) ]), n("view", {
                staticClass: "iconfont mgic-angle-r"
            }) ]), e.activeLease.deviceList && e.activeLease.deviceList.length ? n("swiper", {
                staticClass: "myLocks",
                attrs: {
                    autoplay: !1,
                    current: e.swiperStyle.current,
                    eventid: "2ba2ca72-3"
                },
                on: {
                    change: e.handleSwiperChange
                }
            }, e._l(e.activeLease.deviceList, function(t, i) {
                return n("swiper-item", {
                    key: i,
                    attrs: {
                        mpcomid: "2ba2ca72-0-" + i
                    }
                }, [ n("view", {
                    staticClass: "ammeterStateComponent",
                    class: {
                        grayBg: 0 === t.lockItem.status || 10 === t.lockItem.status
                    }
                }, [ n("view", {
                    staticClass: "bg bg1",
                    staticStyle: {
                        "background-color": "rgba(96, 107, 154, .1)"
                    }
                }), n("view", {
                    staticClass: "bg bg2",
                    staticStyle: {
                        "background-color": "rgba(96, 107, 154, .2)"
                    }
                }), n("view", {
                    staticClass: "bg bg3",
                    staticStyle: {
                        "background-color": "rgba(96, 107, 154, .2)"
                    }
                }), n("view", {
                    staticClass: "bg bg4",
                    staticStyle: {
                        "background-color": "rgba(96, 107, 154, .3)"
                    }
                }), n("view", {
                    staticClass: "swiper-item myLockItemContainer",
                    class: {
                        active: t.lockItem.status
                    },
                    staticStyle: {
                        "box-shadow": "0 0 2rem rgba(96, 107, 154, .8)"
                    }
                }, [ n("view", {
                    staticClass: "myLockItem",
                    attrs: {
                        eventid: "2ba2ca72-1-" + i
                    },
                    on: {
                        click: function(n) {
                            e.deviceClick(t, i);
                        }
                    }
                }, [ 5 === t.lockItem.status && e.showCutDown ? n("view", {
                    staticClass: "status"
                }, [ e._v("( " + e._s(e.timeStep) + " S)") ]) : e._e(), n("view", {
                    staticClass: "statusTxt"
                }, [ e._v(e._s(e.mapLockStatus[t.lockItem.status])) ]), 0 !== t.lockItem.status ? n("view", {
                    staticClass: "rest",
                    class: {
                        warnColor: t.lockItem.battery < 20
                    }
                }, [ e._v("剩余电量 " + e._s(t.lockItem.battery) + " %") ]) : e._e() ]) ]) ]), n("view", {
                    staticClass: "time-validity text-center"
                }, [ e._v("授权有效期至" + e._s(t.lockItem.authValdEndTime)) ]), e.activeLease.isShowTempPassword ? n("image", {
                    staticClass: "btn",
                    attrs: {
                        src: "https://assets.mgzf.com/appimg/433b73256b7f514086140a79299d3942.png",
                        eventid: "2ba2ca72-2-" + i
                    },
                    on: {
                        click: function(n) {
                            e.getPwdBtn(t);
                        }
                    }
                }) : e._e(), n("view", {
                    staticClass: "text-center lock-name"
                }, [ e._v(e._s(t.lockItem.name)) ]) ]);
            })) : e._e(), e.activeLease.deviceList && e.activeLease.deviceList.length > 1 ? n("view", {
                staticClass: "indicator-dots"
            }, e._l(e.activeLease.deviceList, function(t, i) {
                return n("block", {
                    key: i
                }, [ n("view", {
                    staticClass: "dotItem",
                    class: {
                        active: e.swiperStyle.current == i
                    }
                }) ]);
            })) : e._e(), n("view", {
                staticClass: "use-note text-center"
            }, [ n("text", {
                attrs: {
                    eventid: "2ba2ca72-4"
                },
                on: {
                    click: e.gotoInfo
                }
            }, [ e._v("使用说明") ]) ]) ], 1) ]) : e._e(), e.showSwitchLeaseDialog ? n("view", {
                staticClass: "dialog-lease-list"
            }, [ n("view", {
                staticClass: "title"
            }, [ e._v("请选择房间") ]), e._l(e.leaseList, function(t, i) {
                return n("view", {
                    key: i,
                    staticClass: "ul"
                }, [ n("view", {
                    staticClass: "li",
                    class: {
                        actived: i === e.activeLease.activeIndex
                    },
                    attrs: {
                        eventid: "2ba2ca72-5-" + i
                    },
                    on: {
                        click: function(n) {
                            e.chooseLease(t, i);
                        }
                    }
                }, [ e._v(e._s(t.roomAddress)) ]) ]);
            }) ], 2) : e._e(), n("mgDialog", {
                attrs: {
                    visiable: e.dialogVisibled,
                    showCancel: !1,
                    buttons: e.dialogButtons,
                    eventid: "2ba2ca72-6",
                    mpcomid: "2ba2ca72-1"
                },
                on: {
                    cancel: function(t) {
                        e.dialogVisibled = !1;
                    },
                    confirm: e.confirmPwd
                }
            }, [ n("view", {
                slot: "title"
            }, [ e._v("临时密码") ]), n("view", {
                staticClass: "content",
                slot: "content"
            }, [ e.nopassword ? n("view", [ e._v("温馨提示：临时密码有效期为两个小时") ]) : e._e(), !e.nopassword && e.passwordItem.data ? n("view", [ n("view", [ e._v("临时密码为：" + e._s(e.passwordItem.data)) ]), n("view", [ e._v("有效期至 " + e._s(e.passwordItem.endTime)) ]), n("view", {
                staticClass: "tipContent"
            }, [ e._v("（密码信息已经复制，可直接粘贴）") ]) ]) : e._e() ]) ]) ], 1);
        }, o = [];
        n.d(t, "a", function() {
            return i;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    "86de": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = !0, o = function() {
            return new Promise(function(e, t) {
                wx.openBluetoothAdapter({
                    success: function(t) {
                        i && console.log("初始化成功", t), e(!0);
                    },
                    fail: function(e) {
                        t(new Error("初始化蓝牙失败，请确保您打开了手机蓝牙功能！"));
                    }
                });
            });
        }, c = function() {
            wx.startBluetoothDevicesDiscovery({
                interval: 200,
                success: function(e) {
                    i && console.log("开始搜索蓝牙设备");
                },
                fail: function(e) {},
                complete: function(e) {}
            });
        }, a = function() {
            wx.stopBluetoothDevicesDiscovery({
                success: function(e) {
                    i && console.log("停止搜索蓝牙设备");
                },
                fail: function(e) {},
                complete: function(e) {}
            });
        }, s = function() {
            return new Promise(function(e, t) {
                wx.getBluetoothDevices({
                    success: function(t) {
                        i && console.log("获取蓝牙设备");
                        var n = t.devices.filter(function(e) {
                            return /WeLock/.test(e.localName);
                        });
                        e(n);
                    },
                    fail: function(e) {
                        t(new Error("获取设备失败"));
                    },
                    complete: function(e) {}
                });
            });
        }, r = function(e) {
            return new Promise(function(t, n) {
                wx.createBLEConnection({
                    deviceId: e,
                    success: function(e) {
                        i && console.log("开始连接设备"), t(e);
                    },
                    fail: function(e) {
                        -1 === e.errCode ? t(!0) : n(e);
                    }
                });
            });
        }, u = function(e) {
            return new Promise(function(t, n) {
                wx.closeBLEConnection({
                    deviceId: e,
                    success: function(e) {
                        i && console.log("断开连接设备"), t(e);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }, d = function(e) {
            return new Promise(function(t, n) {
                wx.getBLEDeviceServices({
                    deviceId: e.deviceId,
                    success: function(e) {
                        var o;
                        console.log(e), e.services && e.services.length && (o = e.services.find(function(e) {
                            return "6e400001-b5a3-f393-e0a9-e50e24dcca9e" == e.uuid.toLowerCase();
                        })), o ? (i && console.log("获取serviceId：", o.uuid), t(o.uuid)) : n(new Error("取不到serviceId"));
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }, l = function(e) {
            return new Promise(function(t, n) {
                wx.getBLEDeviceCharacteristics({
                    deviceId: e.deviceId,
                    serviceId: e.serviceId,
                    success: function(e) {
                        var o, c;
                        e.characteristics.forEach(function(e) {
                            e.properties.notify && (o = e.uuid), e.properties.write && (c = e.uuid);
                        }), o && c ? (i && console.log("获取notifyId和writeId", {
                            notifyId: o,
                            writeId: c
                        }), t({
                            notifyId: o,
                            writeId: c
                        })) : n(new Error("取不到notifyId或者writeId"));
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }, f = function(e) {
            return new Promise(function(t, n) {
                wx.notifyBLECharacteristicValueChange({
                    deviceId: e.deviceId,
                    serviceId: e.serviceId,
                    characteristicId: e.notifyId,
                    state: !0,
                    success: function(e) {
                        i && console.log("注册监听成功"), t(!0);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }, m = function(e, t) {
            var n = e.deviceId, o = e.serviceId, c = e.writeId, a = new Uint8Array(t.match(/[\da-f]{2}/gi).map(function(e) {
                return parseInt(e, 16);
            }));
            return new Promise(function(e, s) {
                i && console.log("准备开始监听");
                var r = !1;
                wx.onBLECharacteristicValueChange(function(t) {
                    i && console.log("监听到特征值变化", t), r = !0, e(w(t.value));
                }), i && console.log("准备写入value:".concat(t)), wx.writeBLECharacteristicValue({
                    deviceId: n,
                    serviceId: o,
                    characteristicId: c,
                    value: a.buffer,
                    success: function(n) {
                        i && console.log("已写入value:".concat(t)), setTimeout(function() {
                            !r && e(!0);
                        }, 1e3);
                    },
                    fail: function(e) {
                        s(e);
                    }
                });
            });
        }, v = function(e) {
            var t = e.match(/[\da-f]{2}/gi);
            return i && console.log("获取锁信息", t), 30 == t[1] ? {
                randomFactor: parseInt(t[2], 16),
                battery: parseInt(t[3], 16),
                isSuccess: !0
            } : 31 == t[1] ? {
                randomFactor: parseInt(t[3], 16),
                battery: parseInt(t[4], 16),
                isSuccess: 1 == parseInt(t[2], 16)
            } : {
                connectErr: !0
            };
        }, w = function(e) {
            var t = Array.prototype.map.call(new Uint8Array(e), function(e) {
                return ("00" + e.toString(16)).slice(-2);
            });
            return t.join("");
        }, h = function(e) {
            return new Promise(function(t, n) {
                r(e.deviceId).then(function(t) {
                    return d(e);
                }).then(function(t) {
                    return e.serviceId = t, l(e);
                }).then(function(t) {
                    return e.writeId = t.writeId, e.notifyId = t.notifyId, f(e);
                }).then(function(n) {
                    t(e);
                }).catch(function(e) {
                    n(e);
                });
            });
        }, p = function(e) {
            return e.commandValue = "553000000000000000000000000000", g(e);
        }, g = function(e) {
            return new Promise(function(t, n) {
                r(e.deviceId).then(function(t) {
                    return m({
                        deviceId: e.deviceId,
                        serviceId: e.serviceId,
                        writeId: e.writeId
                    }, e.commandValue);
                }).then(function(i) {
                    if (!0 !== i) {
                        var o = v(i);
                        if (o.connectErr) return void n(new Error("开锁失败！请联系厂家"));
                        e.randomFactor = o.randomFactor, e.battery = o.battery, o.isSuccess ? t(e) : n(new Error("开锁失败！"));
                    } else t(e);
                }).catch(function(e) {
                    n(e);
                });
            });
        }, I = {
            openBluetoothAdapter: o,
            startBluetoothDevicesDiscovery: c,
            stopBluetoothDevicesDiscovery: a,
            getBluetoothDevices: s,
            initLock: h,
            getRandomFactor: p,
            sendCommandToLock: g,
            closeBLEConnection: u
        };
        t.default = I;
    },
    8762: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("7118"), o = n("b9ba");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("5bef");
        var a = n("17cc"), s = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
        t["default"] = s.exports;
    },
    "9f6c": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = o(n("cc8f"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var c = {
            mixins: [ i.default ],
            name: "mg-dialog",
            props: {
                visiable: {
                    type: Boolean,
                    default: !1
                },
                showCancel: {
                    type: Boolean,
                    default: !0
                },
                buttons: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {};
            },
            computed: {
                _buttons: function() {
                    var e = [ {
                        name: "取消",
                        command: "cancel"
                    } ];
                    return this.showCancel ? e.concat(this.buttons) : this.buttons;
                }
            },
            methods: {
                handleClick: function(e) {
                    "cancel" === e.command && (this.visiable = !1), this.$emit(e.command);
                }
            }
        };
        t.default = c;
    },
    a26a: function(e, t, n) {
        "use strict";
        n("6cdc");
        var i = c(n("9f5e")), o = c(n("8762"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, i.default)(o.default));
    },
    a92f: function(e, t, n) {
        "use strict";
        var i = n("bbca"), o = n.n(i);
        o.a;
    },
    b152: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "fade",
                    mpcomid: "a4a139fc-2"
                }
            }, [ e.visiable ? n("view", {
                staticClass: "mg-dialog"
            }, [ n("view", {
                staticClass: "mg-dialog-mask"
            }), n("view", {
                staticClass: "mg-dialog-container"
            }, [ n("view", {
                staticClass: "mg-dialog-title"
            }, [ e._t("title", null, {
                mpcomid: "a4a139fc-0"
            }) ], 2), n("view", {
                staticClass: "mg-dialog-content"
            }, [ e._t("content", null, {
                mpcomid: "a4a139fc-1"
            }) ], 2), n("view", {
                staticClass: "mg-dialog-footer"
            }, e._l(e._buttons, function(t, i) {
                return n("view", {
                    key: i,
                    staticClass: "mg-dialog-button",
                    attrs: {
                        "hover-class": "mg-dialog-button-hover",
                        eventid: "a4a139fc-0-" + i
                    },
                    on: {
                        click: function(n) {
                            e.handleClick(t);
                        }
                    }
                }, [ e._v(e._s(t.name)) ]);
            })) ]) ]) : e._e() ]);
        }, o = [];
        n.d(t, "a", function() {
            return i;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    b9ba: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("bfc5"), o = n.n(i);
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        t["default"] = o.a;
    },
    bbca: function(e, t, n) {},
    bfc5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n("353c")), o = r(n("30a4")), c = r(n("5d39")), a = r(n("86de")), s = n("f2de");
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t, n, i, o, c, a) {
            try {
                var s = e[c](a), r = s.value;
            } catch (u) {
                return void n(u);
            }
            s.done ? t(r) : Promise.resolve(r).then(i, o);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, o) {
                    var c = e.apply(t, n);
                    function a(e) {
                        u(c, i, o, a, s, "next", e);
                    }
                    function s(e) {
                        u(c, i, o, a, s, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), i.forEach(function(t) {
                    f(e, t, n[t]);
                });
            }
            return e;
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var m = {
            components: {
                mgDialog: c.default
            },
            computed: l({}, (0, s.mapState)({
                userInfo: function(e) {
                    return e.user.userInfo;
                }
            }), {
                isLogin: function() {
                    return !(!this.userInfo || !this.userInfo.renterId);
                }
            }),
            data: function() {
                return {
                    isEmpty: !0,
                    loaded: !1,
                    lockLoading: !1,
                    dialogVisibled: !1,
                    dialogButtons: [],
                    nopassword: !0,
                    getPwdStep1: !1,
                    getPwdStep2: !1,
                    activeHwKeyId: "",
                    passwordItem: {},
                    showSwitchLeaseDialog: !1,
                    swiperStyle: {
                        current: 0
                    },
                    mapLockStatus: {
                        0: "搜索中...",
                        1: "点击开锁",
                        2: "连接中...",
                        3: "同步中...",
                        4: "开锁中...",
                        5: "已开锁",
                        10: "开锁失败"
                    },
                    activeLease: {
                        roomAddress: "",
                        deviceList: [],
                        activeIndex: 0
                    },
                    leaseList: [ {
                        deviceList: [],
                        roomAddress: "11静安区-静安豪景苑17栋3单元1009"
                    } ],
                    copyClipboard: {
                        text: "",
                        startTime: "",
                        endTime: ""
                    },
                    timeStep: 10,
                    showCutDown: !1
                };
            },
            onLoad: function() {
                var e = d(i.default.mark(function e(t) {
                    var n, o, c, a, s, r;
                    return i.default.wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return n = t && t.code || "", t && t.q && (o = decodeURIComponent(t.q), c = /(\/app\/dl\/)|(h5\.mgzf\.com\/lock\?id)/, 
                            c.test(o) && (a = new RegExp(/app\/dl\/(\S*)/), s = new RegExp(/\?id=(\S*)/), a.test(o) && (n = o.match(a)[1]), 
                            s.test(o) && (n = o.match(s)[1]))), e.next = 4, this.checkLogin();

                          case 4:
                            if (r = e.sent, r) {
                                e.next = 8;
                                break;
                            }
                            return this.$mgRouter.redirectTo("/pages/login", {
                                redirectUrl: "/pages/kelaiDoorLock/index?code=".concat(n)
                            }), e.abrupt("return");

                          case 8:
                            wx.showLoading({
                                title: "加载中..."
                            }), this.getMyLocks(n);

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            }(),
            methods: {
                checkLogin: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e.isLogin ? t(!0) : setTimeout(function() {
                            e.isLogin ? t(!0) : t(!1);
                        }, 1e3);
                    });
                },
                initLocks: function() {
                    var e = d(i.default.mark(function e() {
                        var t, n, o, c = this;
                        return i.default.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, a.default.openBluetoothAdapter();

                              case 3:
                                return wx.onBluetoothDeviceFound(function(e) {
                                    c.filterFindedDevices(e.devices);
                                }), e.next = 6, a.default.getBluetoothDevices();

                              case 6:
                                return t = e.sent, this.filterFindedDevices(t), e.next = 10, a.default.stopBluetoothDevicesDiscovery();

                              case 10:
                                return e.next = 12, a.default.startBluetoothDevicesDiscovery();

                              case 12:
                                n = setInterval(function() {
                                    c.activeLease.deviceList.filter(function(e) {
                                        return 0 == e.lockItem.status;
                                    }).length || (clearInterval(n), n = null, clearTimeout(o), o = null, a.default.stopBluetoothDevicesDiscovery());
                                }, 500), o = setTimeout(function() {
                                    n && (clearInterval(n), n = null), a.default.stopBluetoothDevicesDiscovery();
                                }, 3e4), e.next = 20;
                                break;

                              case 16:
                                e.prev = 16, e.t0 = e["catch"](0), console.error(e.t0), wx.showModal({
                                    title: "温馨提示",
                                    content: e.t0.message || e.t0.errMsg || e.t0 || "蓝牙连接失败！",
                                    confirmText: "重试",
                                    cancelText: "取消",
                                    success: function(e) {
                                        e.confirm && c.initLocks();
                                    }
                                });

                              case 20:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 16 ] ]);
                    }));
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t;
                }(),
                filterFindedDevices: function(e) {
                    var t = this, n = e.filter(function(e) {
                        return /WeLock/.test(e.localName);
                    });
                    n.length && this.activeLease.deviceList.forEach(function(e, i) {
                        n.forEach(function(n) {
                            var o = e.bluetoothInfos.find(function(e) {
                                return e.deviceName == n.localName;
                            });
                            o && (t.activeLease.deviceList[i].lockItem = {
                                name: e.hwName,
                                localName: o.deviceName,
                                authValdEndTime: e.authValdEndTime,
                                battery: e.power || 100,
                                deviceId: n.deviceId,
                                hwKeyId: e.hwKeyId,
                                status: 1
                            });
                        });
                    });
                },
                deviceClick: function() {
                    var e = d(i.default.mark(function e(t, n) {
                        var o;
                        return i.default.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                if (!this.lockLoading) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                if (o = t.lockItem, console.log(o, n), !o.status) {
                                    e.next = 43;
                                    break;
                                }
                                return this.lockLoading = !0, e.prev = 6, this.activeLease.deviceList[n].lockItem.status = 2, 
                                e.next = 10, a.default.initLock(o);

                              case 10:
                                return o.status = 3, this.activeLease.deviceList[n].lockItem = o, e.next = 14, a.default.getRandomFactor(o);

                              case 14:
                                if (o.inited) {
                                    e.next = 21;
                                    break;
                                }
                                return e.next = 17, this.getCommandCode(o, "getSyncTimeCmd");

                              case 17:
                                return o.commandValue = e.sent, e.next = 20, a.default.sendCommandToLock(o);

                              case 20:
                                o.inited = !0;

                              case 21:
                                return o.status = 4, this.activeLease.deviceList[n].lockItem = o, e.next = 25, this.getCommandCode(o, "open");

                              case 25:
                                return o.commandValue = e.sent, e.next = 28, a.default.sendCommandToLock(o);

                              case 28:
                                a.default.closeBLEConnection(o.deviceId), console.log("开锁成功"), wx.showToast({
                                    icon: "none",
                                    duration: 6e3,
                                    title: "请在10秒内开门，超时自动关锁"
                                }), this.activeLease.deviceList[n].lockItem.status = 5, this.reportResult(o, 1), 
                                this.runStep(n), e.next = 43;
                                break;

                              case 36:
                                e.prev = 36, e.t0 = e["catch"](6), console.error(e.t0), this.activeLease.deviceList[n].lockItem.status = 10, 
                                this.lockLoading = !1, wx.showToast({
                                    icon: "none",
                                    title: e.t0.message || e.t0.errMsg || e.t0 || "开门失败，请稍后再试"
                                }), this.reportResult(o, 0);

                              case 43:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 6, 36 ] ]);
                    }));
                    function t(t, n) {
                        return e.apply(this, arguments);
                    }
                    return t;
                }(),
                reportResult: function(e, t) {
                    e.hwKeyId && e.soDoneCode && o.default.fetch("renterSale.openResult", {
                        hwKeyId: e.hwKeyId,
                        id: e.soDoneCode,
                        result: t
                    }).then(function(e) {
                        console.log(e);
                    });
                },
                runStep: function(e) {
                    var t = this, n = this.timeStep;
                    if (n <= 0) return this.activeLease.deviceList[e].lockItem.status = 1, this.showCutDown = !1, 
                    this.timeStep = 10, void (this.lockLoading = !1);
                    setTimeout(function() {
                        t.showCutDown = !0, t.timeStep = n - 1, t.runStep(e);
                    }, 1e3);
                },
                getMyLocks: function() {
                    var e = d(i.default.mark(function e(t) {
                        var n = this;
                        return i.default.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                o.default.fetch("renterSale.smrtGetRefRooms").then(function(e) {
                                    if ("10000" == e.code) if (e.content.flatRoomsDtos && e.content.flatRoomsDtos.length) {
                                        var i = {
                                            roomIndex: 0,
                                            itemIndex: 0
                                        };
                                        e.content.flatRoomsDtos.map(function(e, n) {
                                            return e.deviceList.map(function(e, o) {
                                                return e.lockItem = {
                                                    name: e.hwName,
                                                    localName: "",
                                                    authValdEndTime: e.authValdEndTime,
                                                    battery: e.power || 100,
                                                    deviceId: "",
                                                    hwKeyId: e.hwKeyId || 15,
                                                    status: 0
                                                }, t && e.deviceQR == t && (i.roomIndex = n, i.itemIndex = o), e;
                                            }), e;
                                        }), n.leaseList = e.content.flatRoomsDtos, n.activeLease = {
                                            roomAddress: e.content.flatRoomsDtos[i.roomIndex].roomAddress,
                                            deviceList: e.content.flatRoomsDtos[i.roomIndex].deviceList,
                                            isShowTempPassword: e.content.flatRoomsDtos[i.roomIndex].isShowTempPassword,
                                            activeIndex: i.roomIndex
                                        }, n.swiperStyle.current = i.itemIndex, n.isEmpty = !1, n.initLocks();
                                    } else n.isEmpty = !0;
                                    n.loaded = !0, wx.hideLoading();
                                }).catch(function(e) {
                                    console.log(e), wx.hideLoading(), wx.showModal({
                                        title: "温馨提示",
                                        content: e.message || "系统错误，请稍后再试",
                                        confirmText: "重试",
                                        cancelText: "取消",
                                        success: function(e) {
                                            e.confirm ? n.getMyLocks() : wx.navigateBack();
                                        }
                                    });
                                });

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                }(),
                getCommandCode: function(e, t) {
                    return new Promise(function(n, i) {
                        o.default.fetch("renterSale.".concat(t), {
                            hwKeyId: e.hwKeyId,
                            deviceBleName: e.localName,
                            devicePower: e.battery,
                            deviceRandomFactor: e.randomFactor
                        }).then(function(o) {
                            console.log(o), "10000" == o.code ? (e.soDoneCode = "open" === t ? o.content.soDoneCode : "", 
                            n(o.content.data)) : i(new Error(o.message));
                        }).catch(function(e) {
                            i(e);
                        });
                    });
                },
                switchLeaseFn: function() {
                    this.showSwitchLeaseDialog = !0;
                },
                chooseLease: function(e, t) {
                    this.activeLease.activeIndex != t ? (this.activeLease = {
                        roomAddress: e.roomAddress,
                        deviceList: e.deviceList,
                        isShowTempPassword: e.isShowTempPassword,
                        activeIndex: t
                    }, this.showSwitchLeaseDialog = !1, this.swiperStyle.current = 0, this.initLocks()) : this.showSwitchLeaseDialog = !1;
                },
                getPwdBtn: function(e) {
                    var t = this;
                    wx.showLoading({
                        title: "查询密码中..."
                    }), o.default.fetch("renterSale.getTempPwd", {
                        hwKeyId: e.hwKeyId
                    }).then(function(n) {
                        wx.hideLoading();
                        var i = n.content;
                        i.data ? (t.nopassword = !1, t.dialogButtons = [ {
                            name: "重新生成",
                            command: "confirm"
                        }, {
                            name: "知道了",
                            command: "cancel"
                        } ], t.activeHwKeyId = e.hwKeyId, t.passwordItem = i, t.dialogVisibled = !0, t.copyClipboard = {
                            text: i.data,
                            startTime: i.startingTime,
                            endTime: i.endTime
                        }, wx.setClipboardData({
                            data: "【 您好，您的密码是：".concat(t.copyClipboard.text, "\n        \n 生效时间：").concat(t.copyClipboard.startTime, "\n        \n 失效时间：").concat(t.copyClipboard.endTime, "\n        \n 类型：限时\n        \n 开锁时，先激活锁键盘，再输入密码，按开锁键结束。\n        \n 注：开锁键在键盘右下角，请勿将密码告诉给其他人。】")
                        })) : (t.nopassword = !0, t.dialogButtons = [ {
                            name: "取消",
                            command: "cancel"
                        }, {
                            name: "确认生成",
                            command: "confirm"
                        } ], t.activeHwKeyId = e.hwKeyId, t.dialogVisibled = !0);
                    }).catch(function(e) {
                        wx.hideLoading(), wx.showToast({
                            icon: "none",
                            title: e.message || "网络错误"
                        }), console.log(e);
                    });
                },
                confirmPwd: function() {
                    var e = d(i.default.mark(function e() {
                        var t;
                        return i.default.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "生成密码中..."
                                }), e.prev = 1, e.next = 4, this.getTemporaryPwd();

                              case 4:
                                t = e.sent, this.nopassword = !1, this.dialogButtons = [ {
                                    name: "重新生成",
                                    command: "confirm"
                                }, {
                                    name: "知道了",
                                    command: "cancel"
                                } ], this.passwordItem = t, this.copyClipboard = {
                                    text: t.data,
                                    startTime: t.startingTime,
                                    endTime: t.endTime
                                }, wx.setClipboardData({
                                    data: "【 您好，您的密码是：".concat(this.copyClipboard.text, "\n      \n 生效时间：").concat(this.copyClipboard.startTime, "\n      \n 失效时间：").concat(this.copyClipboard.endTime, "\n      \n 类型：限时\n      \n 开锁时，先激活锁键盘，再输入密码，按开锁键结束。\n      \n 注：开锁键在键盘右下角，请勿将密码告诉给其他人。】")
                                }), wx.hideLoading(), e.next = 17;
                                break;

                              case 13:
                                e.prev = 13, e.t0 = e["catch"](1), wx.hideLoading(), wx.showToast({
                                    icon: "none",
                                    title: e.t0.message || "网络错误"
                                });

                              case 17:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 1, 13 ] ]);
                    }));
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t;
                }(),
                getTemporaryPwd: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        o.default.fetch("renterSale.addTempPwd", {
                            hwKeyId: e.activeHwKeyId
                        }).then(function(e) {
                            t(e.content);
                        }).catch(function(e) {
                            n(e);
                        });
                    });
                },
                handleSwiperChange: function(e) {
                    var t = e.detail.current;
                    console.log(t), this.swiperStyle.current = t;
                },
                gotoInfo: function() {
                    this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        noVerify: !0,
                        url: "https://h5.mgzf.com/minisite/ad/bluetoothLock.html"
                    });
                }
            }
        };
        t.default = m;
    }
}, [ [ "a26a", "common/runtime", "common/vendor" ] ] ]);