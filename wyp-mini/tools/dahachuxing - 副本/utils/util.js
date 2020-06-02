function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function t(e, t, a) {
    wx.showModal({
        title: "温馨提示",
        content: e,
        showCancel: !0,
        success: function(e) {
            e.confirm ? t && t() : a && a();
        }
    });
}

function a(e, t) {
    wx.showModal({
        title: "温馨提示",
        content: e,
        showCancel: !1,
        success: function(e) {
            e.confirm && t && t();
        }
    });
}

function o(e) {
    wx.showModal({
        title: "温馨提示",
        content: e,
        showCancel: !1,
        success: function(e) {
            e.confirm;
        }
    });
}

function n(e, t) {
    var a = parseFloat(e), o = parseFloat(t), n = parseInt(e.replace(a + ".", "")), i = parseInt(t.replace(o + ".", ""));
    return a > o || !(a < o) && n > i;
}

Array.prototype.clone = function() {
    return this.slice(0);
};

var i = [ 53, 65, 50, 66, 51, 67, 54, 68, 57, 69, 56, 70, 55, 52, 49, 48 ];

module.exports = {
    getDistance: function(e, t, a, o) {
        var n = t * Math.PI / 180;
        return Math.sqrt(Math.pow(111.12 * (t - o), 2) + Math.pow((e - a) * Math.cos(n) * 111.12, 2));
    },
    showToast: function() {
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            mask: !0,
            duration: 1500
        });
    },
    formatTime: function(t) {
        var a = t.getFullYear(), o = t.getMonth() + 1, n = t.getDate(), i = t.getHours(), r = t.getMinutes(), c = t.getSeconds();
        t.getMilliseconds();
        return [ a, o, n ].map(e).join("-") + " " + [ i, r, c ].map(e).join(":");
    },
    formatTime_curret: function(e) {
        var t = "";
        return e < 1 ? t = 60 * e + "秒" : e < 60 ? t = e.toFixed(0) + "分钟" : e > 60 && e < 1440 && (t = Math.floor(e / 60) + "小时" + (e % 60).toFixed(0) + "分钟"), 
        t;
    },
    timeDifference: function(e, t) {
        var a = new Date(e.replace(/-/g, "/")).getTime(), o = new Date(t.replace(/-/g, "/")).getTime(), n = 0;
        return n = o >= a ? (n = Math.ceil((o - a) / 6e4)) > 60 ? parseFloat(n / 60).toFixed(1) + "h" : n.toFixed(0) + "分钟" : "0分钟";
    },
    request: function(e, o, n, i) {
        var r = this;
        wx.request({
            url: e,
            data: o,
            header: {
                orderSource: "3"
            },
            success: function(e) {
                if ("200" == e.statusCode) if (e.data.ret) n && n(e.data); else if ("-3004" == e.data.code || "-3008" == e.data.code || "-3050" == e.data.code || "-10001" == e.data.code) n && n(e.data); else if (wx.hideToast(), 
                "请先登录" == e.data.msg) wx.setStorageSync("token", ""), wx.redirectTo({
                    url: "../../pages/map/map"
                }); else if ("-3006" == e.data.code) console.log("不存在借出记录"), n && n(e.data); else if ("-3040" == e.data.code) t("为了给您提供更好的服务，请先进行学生认证", function() {
                    wx.navigateTo({
                        url: "../../pages/studentAuth/studentAuth"
                    });
                }); else if ("-3044" == e.data.code) t("学生认证审核失败，请重新审核!", function() {
                    wx.navigateTo({
                        url: "../../pages/studentAuth/studentAuth"
                    });
                }); else if ("-3024" == e.data.code) t("根据最新法规，请先实名认证", function() {
                    wx.navigateTo({
                        url: "../../pages/authentication/authentication"
                    });
                }); else if ("-3002" == e.data.code) t("诚信用车，请先提交押金", function() {
                    wx.navigateTo({
                        url: "../../pages/deposit/deposit?money=" + e.data.data + "&machineNO=" + o.machineNO
                    });
                }); else if ("-3048" == e.data.code) t("请先购买免押套餐", function() {
                    wx.navigateTo({
                        url: "../../pages/ridePackage/ridePackage?type=1"
                    });
                }); else if ("-3049" == e.data.code) {
                    var i = (Number(e.data.data) / 100).toFixed(2);
                    wx.showModal({
                        title: "温馨提示",
                        content: "请先充值" + i + "元再骑行",
                        confirmText: "前往",
                        cancelText: "拒绝",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "../recharge/recharge?money=" + i
                            });
                        }
                    });
                } else if ("-3055" == e.data.code) {
                    var c = (Number(e.data.data) / 100).toFixed(2);
                    wx.showModal({
                        title: "温馨提示",
                        content: "骑行需确保账户内存在一定金额，请充值满" + c + "元后骑行",
                        confirmText: "前往",
                        cancelText: "拒绝",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "../recharge/recharge"
                            });
                        }
                    });
                } else if ("-30005" == e.data.code) a("车辆不存在,请扫描其他车辆", function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }); else if ("-3028" == e.data.code) a("故障车，请扫描其它车辆", function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }); else if ("-3001" == e.data.code) a("该车正在被骑行", function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }); else if ("-3014" == e.data.code) t("提交的押金不足借此车，请补足押金再借", function() {
                    wx.navigateTo({
                        url: "../../pages/deposit/deposit?money=" + e.data.data + "&machineNO=" + o.machineNO
                    });
                }); else if ("-3039" == e.data.code) {
                    var s = (Number(e.data.data) / 100).toFixed(2);
                    t("请先支付上次骑行费用：" + s + "元", function() {
                        wx.navigateTo({
                            url: "../recharge/recharge?debt=" + s
                        });
                    });
                } else "运营区域外禁止借车" == e.data.msg ? t(e.data.msg, function() {
                    try {
                        wx.navigateBack({
                            delta: 1
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }) : t(e.data.msg); else "500" == e.statusCode || "504" == e.statusCode ? (wx.hideToast(), 
                r.showModal_nocancel("服务器错误，请联系客服！")) : "404" == e.statusCode ? (wx.hideToast(), 
                r.showModal_nocancel("未找到该请求连接！")) : "400" == e.statusCode && (wx.hideToast(), wx.showToast({
                    title: "请求参数错误，请联系客服！",
                    icon: "none"
                }));
            },
            fail: function(t) {
                console.log(e + "_:失败:" + t.errMsg), i && i();
            },
            complete: function(e) {}
        });
    },
    tip: o,
    showModal_nocancel: a,
    showModal: t,
    showLoadingTrue: function(e) {
        wx.showLoading({
            title: e,
            mask: !0
        });
    },
    isTimeUndefined: function(e) {
        return void 0 === e ? "" : e;
    },
    hexStringToArrayBuffer: function(e) {
        return new Uint8Array(e.match(/[\da-f]{2}/gi).map(function(e) {
            return parseInt(e, 16);
        })).buffer;
    },
    encrypt: function(e) {
        var t = "";
        if (e = e.toUpperCase()) {
            var a = e.length;
            if (!(a > 16)) {
                for (var o = 0; o < a; o++) for (var n = 0; n < 16; n++) e.charAt(o).charCodeAt() == i[n] && (t += String.fromCharCode(42 + n));
                return t;
            }
        }
    },
    ab2hex: function(e) {
        return Array.prototype.map.call(new Uint8Array(e), function(e) {
            return ("00" + e.toString(16)).slice(-2);
        }).join("");
    },
    judgeVersion: function(e) {
        var t = wx.getSystemInfoSync();
        "android" == t.platform && n("6.5.7", t.version) ? o("当前微信版本过低，请更新至最新版本") : "ios" == t.platform && n("6.5.6", t.version) ? o("当前微信版本过低，请更新至最新版本") : e && e();
    },
    strAverage2Arr: function(e, t) {
        for (var a = [], o = 0; o < e.length; o += t) a.push(e.slice(o, o + 2));
        return a;
    },
    addFlagBeforeArr: function(e) {
        return Array.prototype.map.call(e, function(e) {
            return "0x" + e;
        });
    },
    hideLoading: function() {
        wx.hideLoading(), console.log("隐藏Loading");
    },
    log: function(e, t, a, o, n) {
        var i = {
            machineNO: e,
            mobileBrand: t,
            mobileOS: a,
            remark: o
        };
        wx.getStorageSync("token") && (i.token = wx.getStorageSync("token")), wx.request({
            url: "https://client.uqbike.cn/appOperaLog/add.do",
            data: i,
            success: function(e) {
                "200" == e.statusCode && (e.data.ret ? (console.log("log一下", o), n && n()) : console.log(e.data.msg));
            },
            fail: function(e) {
                wx.showModal(e);
            },
            complete: function(e) {}
        });
    }
};