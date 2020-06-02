function e(e) {
    wx.showToast({
        title: e,
        icon: "none",
        duration: 2e3
    });
}

function n(e, n) {
    var t = wx.getStorageSync("token");
    return n.token = t, console.info("【" + e + "】【请求参数】"), console.info(n), new Promise(function(t, o) {
        wx.request({
            url: e,
            data: n,
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            success: function(e) {
                console.info(e);
                try {
                    "1" == e.data.code && util.GetToken();
                } catch (e) {}
                "服务器异常" == e.data ? (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "网络错误或服务器繁忙!"
                })) : t(e.data);
            },
            fail: function(e) {
                wx.hideLoading(), console.log(e), o(e), wx.showModal({
                    title: "提示",
                    content: "网络错误或服务器繁忙!"
                });
            }
        });
    });
}

var t = getApp(), o = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), t = e.getMonth() + 1, a = e.getDate(), i = e.getHours(), c = e.getMinutes(), r = e.getSeconds();
        return [ n, t, a ].map(o).join("/") + " " + [ i, c, r ].map(o).join(":");
    },
    formatDate: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(o).join("-");
    },
    Requests: function(n, t) {
        return new Promise(function(o, a) {
            wx.request({
                url: n,
                data: t,
                method: "get",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                success: function(n) {
                    "1" == n.data.code && -1 != n.data.msg.msg.indexOf("ACCESS_TOKEN") && (wx.redirectTo({
                        url: "/pages/login/login"
                    }), e("登录信息过时, 请重新登录")), "服务器异常" == n.data ? (wx.hideLoading(), wx.showModal({
                        title: "提示",
                        content: "网络错误或服务器繁忙!"
                    })) : o(n.data);
                },
                fail: function(e) {
                    console.log(e), a(e), wx.hideLoading(), wx.showModal({
                        title: "提示",
                        content: "网络错误或服务器繁忙!"
                    });
                }
            });
        });
    },
    Requests_json: n,
    GetToken: function() {
        var e = !1, o = t.globalData.secret;
        return n(t.globalData.insuranceUrl + "/token?", o).then(function(n) {
            if ("0" == n.code) {
                var t = n.data.access_token;
                console.info("获取到token：" + t), wx.setStorageSync("token", t), e = !0;
            } else console.info("获取token异常");
        }), e;
    },
    AlertMsg: e,
    AlertSuccess: function(e) {
        wx.showToast({
            title: e,
            icon: "success",
            duration: 2e3
        });
    },
    AlertError: function(e) {
        wx.showToast({
            title: e,
            icon: "/images/error.png",
            duration: 2e3
        });
    },
    GoWebview: function(e) {
        wx.navigateTo({
            url: "/pages/webview/webview?url=" + encodeURIComponent(e)
        });
    },
    DeviceInit: function() {
        return new Promise(function(e, n) {
            wx.getSystemInfo({
                success: function(n) {
                    e(n);
                },
                fail: function(e) {
                    n("获取失败");
                }
            });
        });
    },
    GetUserToken: function() {
        return new Promise(function(e, n) {
            var t = wx.getStorageSync("userToken");
            null != t && "" != t || wx.redirectTo({
                url: "../login/login"
            });
        });
    },
    CheckBirthday: function(e) {
        var n = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江 ",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北 ",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏 ",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外 "
        }, t = !0, o = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        if (e && e.match(o)) if (n[e.substr(0, 2)]) {
            if (18 == e.length) {
                e = e.split("");
                for (var a = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ], i = [ 1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2 ], c = 0, r = 0; r < 17; r++) c += e[r] * a[r];
                i[c % 11] != e[17] && (t = !1);
            }
        } else t = !1; else t = !1;
        return t;
    },
    GetTokenCallBack: function(e) {
        var o = t.globalData.secret;
        n(t.globalData.insuranceUrl + "/token?", o).then(function(n) {
            if ("0" == n.code) {
                var t = n.data.access_token;
                console.info("获取到token：" + t), wx.setStorageSync("token", t), e();
            } else console.info("获取token异常");
        });
    },
    DownloadPdf: function(e, n) {
        var e = e, n = n;
        console.log(e), console.log(n), wx.getSavedFileList({
            success: function(e) {
                e.fileList.forEach(function(e, n) {
                    wx.removeSavedFile({
                        filePath: e.filePath
                    });
                });
            }
        }), wx.downloadFile({
            url: e,
            header: {
                "Content-Type": "application/pdf;charset=utf-8"
            },
            filePath: wx.env.USER_DATA_PATH + "/" + n + ".pdf",
            success: function(e) {
                var n = e.filePath;
                wx.openDocument({
                    filePath: n,
                    fileType: "pdf",
                    success: function(e) {
                        console.log("打开文档成功");
                    }
                });
            },
            fail: function(e) {
                console.log("下载失败：", e);
            }
        });
    },
    GetUserInfoCallBack: function(e) {
        var o = {
            userState: "0"
        }, a = wx.getStorageSync("token"), i = wx.getStorageSync("userToken");
        null != a && "" != a && null != i && "" != i || wx.redirectTo({
            url: "/pages/login/login"
        });
        var c = {
            token: a,
            userToken: i
        };
        n(t.globalData.authenticationUrl + "/authentication/userInfo", c).then(function(n) {
            if ("0" == n.code) {
                var t = JSON.parse(n.data.userInfo);
                o = {
                    userState: t.state
                };
            } else console.info("获取用户信息异常");
            e(o);
        });
    }
};