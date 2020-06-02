var t = getApp(), o = require("../../utils/util");

require("../../utils/config.js").appColor;

Page({
    data: {
        image: "../../images/openLock/2.gif",
        machineNO: "",
        flag: !1,
        guideImage: "../../images/bluetooth_g_b.png",
        mainColor: "",
        textColor: "",
        progress_txt: "开锁中...",
        dotColor: "#fb9126",
        bluetoothState: "请手动打开手机蓝牙"
    },
    onLoad: function(o) {
        this.aminCount = 0, this.countTimer = null, this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor,
            machineNO: o.machineNO
        }), t.globalData.mobileOS.indexOf("iOS") > -1 && this.setData({
            guideImage: "../../images/bluetooth_g_a.png"
        }), this.lock = !1;
    },
    drawProgressbg: function() {
        var t = wx.createCanvasContext("canvasProgressbg", this);
        t.setLineWidth(4), t.setStrokeStyle("#20183b"), t.setLineCap("round"), t.beginPath(), 
        t.arc(130, 130, 120, 0, 2 * Math.PI, !1), t.stroke(), t.draw();
    },
    drawCircle: function(t) {
        var o = wx.createCanvasContext("canvasProgress", this), e = o.createLinearGradient(200, 100, 100, 200);
        e.addColorStop("0", "#2661DD"), e.addColorStop("0.5", "#40ED94"), e.addColorStop("1.0", "#5956CC"), 
        o.setLineWidth(10), o.setStrokeStyle(e), o.setLineCap("round"), o.beginPath(), o.arc(130, 130, 120, -Math.PI / 2, t * Math.PI - Math.PI / 2, !1), 
        o.stroke(), o.draw();
    },
    countInterval: function(t, o) {
        var e = this;
        return new Promise(function(a) {
            o || (o = 50), e.countTimer = setInterval(function() {
                e.aminCount <= t ? (e.drawCircle(e.aminCount / 50), e.aminCount++) : (clearInterval(e.countTimer), 
                a());
            }, o);
        });
    },
    onReady: function() {
        this.drawProgressbg(), this.openLock();
    },
    openLock: function() {
        var e = this, a = 0;
        t.checkToken(function(n) {
            var r = null;
            n.length > 0 && (r = setInterval(function() {
                if (!e.lock) {
                    if (e.lock = !0, a++, console.log(a), a > 9) return clearInterval(r), r = null, 
                    e.bluetoothOpenLock(), void (e.lock = !1);
                    e.countInterval(Math.floor(10 * a), 50).then(function() {
                        var i = t.globalData.baseUrl + "machine/getBorrowing.do", l = {
                            token: n
                        };
                        o.request(i, l, function(o) {
                            void 0 != o.data && 0 != o.data.length ? (console.log("开锁成功,耗时:" + a + "s"), clearInterval(r), 
                            r = null, e.countInterval(100, 10).then(function() {
                                t.bluetooth.end(), t.unlockAudio(), e.setData({
                                    dotColor: "#68dd32",
                                    progress_txt: "开锁成功"
                                }), setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }, 700), e.lock = !1;
                            })) : e.lock = !1;
                        }, function() {
                            e.lock = !1;
                        });
                    });
                }
            }, 1e3));
        });
    },
    retry: function() {
        this.setData({
            flag: !1
        }), this.bluetoothOpenLock();
    },
    bluetoothOpenLock: function() {
        var e = this;
        wx.openBluetoothAdapter({
            success: function(a) {
                e.setData({
                    progress_txt: "启用蓝牙开锁"
                }), t.checkToken(function(a) {
                    e.setData({
                        progress_txt: "蓝牙开锁中..."
                    }), a.length > 0 && t.operateBluetooth("open", t.globalData.machineNO, function(n) {
                        if (n) {
                            var r = t.globalData.baseUrl + "machine/borrowBike.do", i = {
                                userCode: t.globalData.machineNO,
                                token: a,
                                ble: !0,
                                orderSource: 3
                            };
                            o.request(r, i, function(o) {
                                o.ret && e.countInterval(100, 10).then(function() {
                                    t.unlockAudio(), e.setData({
                                        dotColor: "#68dd32",
                                        progress_txt: "蓝牙开锁成功"
                                    }), setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 700);
                                });
                            });
                        } else o.showModal_nocancel("蓝牙操作失败，请重试！", function() {
                            wx.navigateBack({
                                delta: 2
                            });
                        });
                    });
                });
            },
            fail: function(t) {
                console.log(t), "10001" != t.errCode && "10008" != t.errCode || e.setData({
                    flag: !0,
                    bluetoothState: "请手动打开手机蓝牙"
                });
            }
        });
    }
});