var e = require("./dataTransition.js"), n = require("../util.js");

module.exports = function() {
    var t = this, o = null, i = null, c = null, r = null, l = "FEF6", s = null, a = null, u = 10, f = "", g = 0, d = "", h = "", v = "", w = "", x = !1, p = !1, C = null, M = "", B = 0, I = null, m = 0, L = null, T = 1, y = [], E = [], S = "", D = "";
    this.start = function(e, n, c, l) {
        A(), i = e, M = c, C = l, t.log(n, o, "operate:", i), W(function() {
            n == o && r && i ? R() : (o = n, r = null, O());
        });
    }, this.end = function(e) {
        wx.hideLoading(), wx.hideToast(), I && clearTimeout(I), L && clearTimeout(L), wx.closeBLEConnection({
            deviceId: r,
            complete: function() {
                U(), Q(), t.log("结束蓝牙操作！"), e && e(), A();
            }
        });
    }, this.getMachineNO = function() {
        return o;
    }, this.getKey = function() {
        return M;
    }, this.getLog = function() {
        return y;
    }, this.getBatteryLockState = function() {
        return E[0];
    }, this.isOpenBatteryLock = function() {
        return 0 == E[0];
    }, this.getMotionState = function() {
        return E[6];
    }, this.isMotion = function() {
        return 1 == E[6];
    }, this.getBorrowState = function() {
        return E[7];
    }, this.isBorrowed = function() {
        return 0 == E[7];
    }, this.getMachinevoltage = function() {
        return D / 1e3;
    };
    var A = function() {
        i = null, c = null, l = "FEF6", s = null, a = null, u = 10, f = "", g = 0, d = "", 
        h = "", v = "", w = "", x = !1, p = !1, C = null, B = 0, I = null, m = 0, L = null, 
        y = [], T = 1;
    }, O = function() {
        r = null, F();
    }, F = function e() {
        wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: !1,
            services: [ "FEF6", "FEF5" ],
            success: function(e) {
                t.log("蓝牙搜索启用成功！"), t.log(e.errMsg), e.isDiscovering ? _() : t.log("没有开启定位服务", "isDiscovering = false");
            },
            fail: function(n) {
                n.errMsg.indexOf("not init") > -1 ? W(function() {
                    e();
                }) : (t.end(function() {
                    C && C(!1);
                }), t.log("startBluetoothDevicesDiscovery error:", n.errMsg));
            }
        });
    }, _ = function() {
        b(), wx.onBluetoothDeviceFound(function(n) {
            var l = n.devices[0];
            if (l && l.advertisData && 0 != l.advertisData.byteLength) {
                var s = e.encrypt(e.ab2hex(l.advertisData).slice(4, 13));
                t.log("搜索到的设备编号：" + s + "，目标：" + o), s == o && (Q(), clearInterval(c), c = null, 
                r = l.deviceId, t.log("deviceId:", r), "open" == i || "close" == i ? R() : C && C(!0));
            }
        });
    }, b = function() {
        var e = 0;
        c && (clearInterval(c), c = null), c = setInterval(function() {
            e > 14 ? (clearInterval(c), c = null, e = 0, wx.hideToast(), wx.hideLoading(), Q(), 
            wx.showModal({
                title: "温馨提示",
                content: "搜索设备失败,请尝试重新打开定位与蓝牙，是否重新搜索？",
                success: function(e) {
                    e.cancel ? t.end(function() {
                        C && C(!1);
                    }) : (wx.showToast({
                        title: "请稍候",
                        icon: "loading",
                        mask: !0,
                        duration: 1e6
                    }), F());
                }
            })) : (e++, console.log("搜索时间：", e));
        }, 1e3);
    }, R = function e() {
        r.length > 0 && wx.createBLEConnection({
            deviceId: r,
            timeout: 15e3,
            success: function(e) {
                t.log("createBLEConnection success:", e.errMsg), 0 == e.errCode && k();
            },
            fail: function(n) {
                t.log("createBLEConnection error:", n.errMsg), -1 != n.errCode && 1e4 != n.errCode ? 10006 != n.errCode && 10003 != n.errCode && 10012 != n.errCode || wx.showModal({
                    title: "温馨提示",
                    content: "连接失败，请尝试： (1)重新打开手机定位 (2)点击重试",
                    confirmText: "重试",
                    success: function(n) {
                        n.cancel ? t.end(function() {
                            C && C(!1);
                        }) : (t.log("正在重连..."), wx.closeBLEConnection({
                            deviceId: r,
                            complete: function() {
                                wx.closeBluetoothAdapter({
                                    success: function() {
                                        wx.openBluetoothAdapter({
                                            success: function() {
                                                t.log("重连之前，重启蓝牙适配器成功!"), T >= 2 ? F() : (T++, e());
                                            }
                                        });
                                    }
                                });
                            }
                        }));
                    }
                }) : n.errMsg.indexOf("not init") > -1 ? W(function() {
                    e();
                }) : t.end(function() {
                    C && C(!1);
                });
            },
            complete: function() {}
        });
    }, k = function() {
        T = 1, wx.getBLEDeviceServices({
            deviceId: r,
            success: function(e) {
                t.log("获取的所有服务值", e.errMsg), q(e.services);
            },
            fail: function(e) {
                t.log("getBLEDeviceServices error", e.errMsg), wx.showToast({
                    title: "service获取失败",
                    icon: "none"
                }), t.end(function() {
                    C && C(!1);
                });
            }
        });
    }, q = function(e) {
        e.forEach(function(e, o) {
            if (e.uuid.indexOf(l) > -1) return l = e.uuid, t.log("serviced", l), void wx.getBLEDeviceCharacteristics({
                deviceId: r,
                serviceId: l,
                success: function(e) {
                    t.log("特征值：", e.errMsg), e.characteristics.forEach(function(e) {
                        e.properties.write && (a = e.uuid), !e.properties.write && e.properties.notify && (s = e.uuid);
                    }), t.log("特征值读:", s, "特征值写:", a), N(function() {
                        V();
                    });
                },
                fail: function(e) {
                    t.log("读取特征值失败：" + e.errMsg), t.end(function() {
                        C && C(!1);
                    }), n.showModal_nocancel("读取特征值失败，请重试。");
                }
            });
        });
    }, V = function() {
        var n = M.toString().trim().toLowerCase(), o = e.getSequenceId(u);
        u++;
        var i = n.toString().replace(/\s+/g, ""), c = "02 00 01 " + e.getSecretKeyLength(i) + " " + n, r = e.header(c, 0, "00", o) + c.replace(/\s+/g, "");
        t.log("发送的连接数据：", r), K(r);
    };
    this.translateCtrl = function(n) {
        var o = n.toString().trim().toLowerCase(), i = e.getSequenceId(u);
        u++;
        var c = o.toString().replace(/\s+/g, ""), r = "02 00 01 " + e.getSecretKeyLength(c) + " " + o, l = e.header(r, 0, "00", i) + r.replace(/\s+/g, "");
        t.log("数据：", l);
    };
    var K = function(n) {
        if (f = n, Math.ceil(n.length / 40) > 1) for (var o = 0; o < n.length; o += 40) {
            var i = e.hexStringToArrayBuffer(n.slice(o, o + 40));
            t.log("分包发送的数据", n.slice(o, o + 40)), j(i);
        } else {
            var c = e.hexStringToArrayBuffer(n);
            j(c);
        }
    }, j = function o(i, c) {
        setTimeout(function() {
            wx.writeBLECharacteristicValue({
                deviceId: r,
                serviceId: l,
                characteristicId: a,
                value: i,
                success: function(e) {
                    t.log("发送信息成功", e.errMsg), c && c();
                },
                fail: function(c) {
                    t.log("writeBLECharacteristicValue error ", c.errMsg);
                    var r = c.errCode;
                    10006 == r || 1e4 == r ? R() : 10008 == r ? (t.log("重发数据", e.ab2hex(i)), o(i)) : (n.showModal_nocancel("数据发送失败，请重试。"), 
                    t.end(function() {
                        C && C(!1);
                    }));
                }
            });
        }, 200);
    }, N = function(o) {
        wx.notifyBLECharacteristicValueChange({
            state: !0,
            deviceId: r,
            serviceId: l,
            characteristicId: s,
            success: function() {
                -1 != m && (L = setTimeout(function() {
                    0 == m ? (t.log("未接收到回复信息！自动重发一次！"), m++, V()) : (wx.hideToast(), wx.hideLoading(), 
                    wx.showModal({
                        content: "未接收到回复信息！",
                        confirmText: "重试",
                        success: function(e) {
                            e.confirm ? (wx.showToast({
                                title: "请稍后",
                                icon: "loading",
                                mask: !0,
                                duration: 1e5
                            }), V()) : t.end(function() {
                                C && C(!1);
                            });
                        }
                    }));
                }, 5e3)), wx.onBLECharacteristicValueChange(function(o) {
                    clearTimeout(L), m = -1;
                    var i = e.ab2hex(o.value);
                    t.log("********notify收到的数据：", i), "aa10" == i.slice(0, 4) ? t.log("指令发送成功：") : "aa30" == i.slice(0, 4) ? (t.log("CRC校验失败"), 
                    n.showModal_nocancel("CRC校验失败,请重试。"), t.end(function() {
                        C && C(!1);
                    })) : "aa0" == i.slice(0, 3) && 0 == g ? (S = i.slice(2, 4), h = i.slice(6, 8), 
                    g = parseInt(i.slice(8, 12), 16), d = i.slice(4, 6), z(d), v = i.slice(12, 16), 
                    t.log("需要接收的字节长度", g), i.length > 16 && G(i.slice(16))) : g > 0 && G(i);
                }), o && o();
            },
            fail: function(e) {
                t.log("notifyBLECharacteristicValueChange", e.errMsg), n.showModal_nocancel("特征值监听开启失败，请重试。"), 
                t.end(function() {
                    C && C(!1);
                });
            }
        });
    }, z = function(e) {
        var n = parseInt(e, 16), t = parseInt(n).toString(2);
        if (t.length < 8) for (var o = 8 - t.length; o > 0; ) t = "0" + t, o--;
        var i = Array.prototype.slice.call(t);
        E = i, console.log(i);
    }, G = function(o) {
        if (t.log("拼接内容：", o), w += o, t.log("内容长度", w.length, "接收到的数据长度", g, "*2"), w.length == 2 * g) {
            var i = w;
            t.log("接收的数据长度字节：", i.length / 2);
            var c = e.addFlagBeforeArr(e.strAverage2Arr(i, 2));
            if (parseInt(e.getCRC16(c), 16) == parseInt(v, 16)) {
                t.log("CRC16校验成功");
                var r = e.hexStringToArrayBuffer("aa12" + d + h + "00000000");
                t.log("返回的确认数据" + e.ab2hex(r)), H(i, r);
            } else t.log("CRC16校验失败", e.getCRC16(c) + "_应为：" + v), n.showModal_nocancel("CRC16校验失败,请重试。"), 
            t.end(function() {
                C && C(!1);
            });
            g = 0, d = "", w = "", h = "", v = "";
        }
    }, H = function(e, o) {
        t.log("解析数据数据***************", e), e.indexOf("020101") > -1 ? x || (x = !0, t.log("连接成功"), 
        j(o, function() {
            P(i);
        }), J(e)) : e.indexOf("0300820100") > -1 ? (I && (clearTimeout(I), I = null), p || (p = !0, 
        j(o, function() {
            t.log("开锁成功，开始回调ctrl_cb"), t.end(function() {
                C && C(!0);
            });
        }))) : e.indexOf("0300810100") > -1 ? (I && (clearTimeout(I), I = null), p || (p = !0, 
        j(o, function() {
            t.log("上锁成功，开始回调ctrl_cb"), t.end(function() {
                C && C(!0);
            });
        }))) : e.indexOf("04008524") > -1 ? j(o, function() {
            t.log("心跳包");
        }) : e.indexOf("020100") > -1 ? (I && (clearTimeout(I), I = null), t.log("鉴权失败：", f), 
        n.showModal_nocancel("鉴权失败！"), t.end(function() {
            C && C(!1);
        })) : (I && (clearTimeout(I), I = null), t.end(function() {
            var n = "0300810102" === e ? "运动中不能上锁!" : "蓝牙操作失败，请重试!";
            t.log(n), wx.showToast({
                title: n,
                mask: !0,
                icon: "none",
                duration: 5e3
            }), C && C(!1);
        }));
    }, J = function(e) {
        if (e.indexOf("02010181") > -1) {
            var n = e.indexOf("020101") + 10, t = e.slice(n, n + 4), o = parseInt(t, 16);
            D = "02" == S ? 10 * o : o;
        }
    }, P = function o(c) {
        var r = e.getSequenceId(u);
        u++;
        var l = "";
        "open" === c ? l = "03 00 02 01 00" : "close" === c && (l = "03 00 01 01 01");
        var s = e.header(l, 0, "00", r) + l.replace(/\s+/g, "");
        t.log("发送" + c + "指令", s), K(s), I = setTimeout(function() {
            0 == B ? (t.log("设备未响应，自动重发"), B++, o(i)) : (t.log("设备未响应"), wx.hideLoading(), n.showModal("设备未响应，是否重新发送指令？", function() {
                t.log("手动重发ctrl"), wx.showLoading({
                    title: "开锁中"
                }), o(i);
            }, function() {
                t.end(function() {
                    C && C(!1);
                });
            }));
        }, 5e3);
    }, Q = function() {
        wx.stopBluetoothDevicesDiscovery({
            success: function(e) {
                t.log("停止搜寻附近的蓝牙外围设备");
            },
            fail: function(e) {
                t.log(e.errMsg);
            }
        });
    }, U = function() {
        wx.closeBluetoothAdapter({
            success: function(e) {
                t.log("关闭蓝牙适配器");
            },
            fail: function(e) {
                t.log(e.errMsg);
            }
        });
    }, W = function(e) {
        wx.openBluetoothAdapter({
            success: function(e) {},
            fail: function(e) {
                t.log("initBluetooth:", e.errMsg), wx.showToast({
                    title: "蓝牙初始化失败",
                    icon: "none"
                });
            },
            complete: function() {
                e && e();
            }
        });
    };
    this.log = function() {
        for (var e, t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
        var c = new Date();
        c = n.formatTime(c), (e = console).log.apply(e, [ c ].concat(o)), y.push(o.join(","));
    };
};