var e, t = getApp(), n = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ], o = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];

function r(t) {
    return 18 == t.length && !!function(t) {
        var r = 0;
        "x" == t[17].toLowerCase() && (t[17] = 10);
        for (var u = 0; u < 17; u++) r += n[u] * t[u];
        return e = r % 11, t[17] == o[e];
    }(t.split(""));
}

function u(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function a(e) {
    e ? (wx.setStorageSync("webviewUrl", e), setTimeout(function() {
        wx.navigateTo({
            url: "../../webview/index/index"
        });
    }, 250)) : wx.showToast({
        title: "打开失败，请稍候再试",
        duration: 1500
    });
}

function s(e) {
    wx.showToast({
        title: "文件加载中...",
        icon: "loading",
        duration: 1e4
    }), wx.downloadFile({
        url: e,
        success: function(e) {
            var t = e.tempFilePath;
            wx.hideToast(), wx.openDocument({
                filePath: t,
                success: function(e) {},
                fail: function(e) {
                    wx.showToast({
                        title: "打开失败，请稍候再试",
                        duration: 1500
                    });
                }
            });
        },
        fail: function(e) {
            wx.showToast({
                title: "下载失败,请稍候再试",
                duration: 1500
            });
        }
    });
}

module.exports = {
    formatTime: function(e) {
        var t = (e = new Date(e)).getFullYear(), n = e.getMonth() + 1, o = e.getDate();
        return e.getHours(), e.getMinutes(), e.getSeconds(), [ t, n, o ].map(u).join("-");
    },
    getBirthDateFromIdCard: function(e) {
        return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14);
    },
    maleOrFeByIdCard: function(e) {
        return 15 == (e = e.replace(/(^\s*)|(\s*$)/g, "")).length ? e.substring(14, 15) % 2 == 0 ? "F" : "M" : 18 == e.length ? e.substring(14, 17) % 2 == 0 ? "F" : "M" : null;
    },
    dateAdd: function(e, t) {
        return new Date(e + 864e5 * t);
    },
    isLegalName: function(e) {
        return /^([\u4e00-\u9fa5·]{1,20}|[a-zA-Z .\s]{1,20}){2,20}$/.test(e);
    },
    isLegalId: function(e) {
        return r(e);
    },
    isEmpty: function(e) {
        return null == e || "" == e;
    },
    isLegalMobile: function(e) {
        return /^1\d{10}$/i.test(e);
    },
    isLegalIdTypeAndIdNo: function(e, t) {
        switch (e) {
          case "1":
            return r(t);

          case "3":
            return /^.*字第(\d{6,8})$/.test(t);

          case "6":
            return /^.[A-Za-z0-9()（）]{3,32}$/.test(t);

          default:
            return /^.[A-Za-z0-9]{3,32}$/.test(t);
        }
    },
    isLegalMail: function(e) {
        return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(e);
    },
    DateAdd: function(e, t, n) {
        switch (e) {
          case "y ":
            return n.setFullYear(n.getFullYear() + t), n;

          case "q ":
            return n.setMonth(n.getMonth() + 3 * t), n;

          case "m ":
            return n.setMonth(n.getMonth() + t), n;

          case "w ":
            return n.setDate(n.getDate() + 7 * t), n;

          case "d ":
            return n.setDate(n.getDate() + t), n;

          case "h ":
            return n.setHours(n.getHours() + t), n;

          case "m ":
            return n.setMinutes(n.getMinutes() + t), n;

          case "s ":
            return n.setSeconds(n.getSeconds() + t), n;

          default:
            return n.setDate(d.getDate() + t), n;
        }
    },
    getStaticPage: s,
    sendMess: function(e, t) {
        wx.request({
            url: e + "/ehis-hl/ajax/sendOTP.action",
            data: {
                smscc: "ehiswxonly",
                phone: t
            },
            method: "GET",
            success: function(e) {},
            fail: function() {},
            complete: function() {}
        });
    },
    getChannelKey: function(e, t, n) {
        wx.cloud.callFunction({
            name: "aeskey",
            data: {
                fromChannel: e,
                env: t
            }
        }).then(function(e) {
            n(e.result);
        });
    },
    getNodesInfo: function(e, t) {
        wx.createSelectorQuery().selectAll(t).boundingClientRect(function(t) {
            e.setData({
                tops: t
            });
        }).exec();
    },
    isSixNumber: function(e) {
        return /^\d{6}$/.test(e);
    },
    openWebview: a,
    getProductImg: function(e, n, o) {
        return new Promise(function(r, u) {
            wx.request({
                url: t.globalData.wm1Url + "/miniapp/getProductImg.do",
                data: {
                    planCode: e,
                    channel: n,
                    type: o
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    console.log(e), r(e);
                },
                fail: function() {
                    u({
                        msg: "系统有误，请稍后再试"
                    });
                },
                complete: function() {}
            });
        });
    },
    jumpImgUrl: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1", t = arguments.length > 1 ? arguments[1] : void 0;
        if (t) switch (e) {
          case "1":
            s(t);
            break;

          case "2":
            console.log(t), wx.navigateTo({
                url: t
            });
            break;

          case "3":
            a(t);
            break;

          default:
            s(t);
        }
    }
};