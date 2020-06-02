var e = require("../../@babel/runtime/helpers/interopRequireWildcard"), t = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generatePosterAndDownload = function(e, t, a, n) {
    if (!wx.canIUse("canvasContext.measureText")) return void setTimeout(function() {
        wx.showModal({
            title: "提示",
            content: c
        });
    }, 1e3);
    wx.showLoading({
        title: "正在生成海报"
    });
    var o = [];
    d = r.extend({}, i.posterDefaultInfo), t.avatarUrl && (d.avatarUrl = t.avatarUrl);
    t.nickName && (d.nickName = t.nickName);
    a.id && (d.id = a.id);
    a.headImgUrl && (d.headImgUrl = a.headImgUrl);
    a.title && (d.title = a.title);
    a.time && (d.time = a.time);
    a.address && (d.address = a.address);
    d.headImgUrl = d.headImgUrl.replace("http:", "https:"), d.qrcodeUrl = function(e, t) {
        var a = i.api.getQRCodeUrl;
        return a = "".concat(a, "?id=").concat(e, "&from=0&type=").concat(t, "&width=300");
    }(a.id, n);
    var o = [];
    new RegExp(i.posterDefaultInfo.avatarUrl).test(d.avatarUrl) || m("avatarUrl", o);
    new RegExp(i.posterDefaultInfo.headImgUrl).test(d.headImgUrl) || m("headImgUrl", o);
    m("qrcodeUrl", o), o.length ? Promise.all(o).then(function(t) {
        v(e, d, n);
    }) : v(e, d, n);
}, exports.downloadFile = f;

var a = t(require("../../@babel/runtime/helpers/toConsumableArray")), i = e(require("./const")), r = e(require("./util")), n = require("./promisify"), o = (getApp().global, 
(0, n.promisify)(wx.getSetting)), l = (0, n.promisify)(wx.downloadFile), s = (0, 
n.promisify)(wx.authorize), u = {
    saveFail: "存储相册失败",
    saveSucc: "已保存相册，快去分享吧",
    savaAuthFail: "保存失败，请开启保存权限"
}, c = "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。", d = {};

function f(e) {
    return new Promise(function(t, a) {
        l({
            url: e
        }).then(function(e) {
            t(e);
        }, function(e) {
            a(e);
        });
    });
}

function h(e, t) {
    setTimeout(function() {
        wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(e) {
                t.setData({
                    shareCurTitleTips: u.saveSucc
                });
            },
            fail: function(e) {
                t.setData({
                    shareCurTitleTips: u.saveFail
                });
            }
        });
    }, 500);
}

function m(e, t) {
    var a = d[e];
    if (a) {
        var i = f(a).then(function(t) {
            return t.tempFilePath && (d[e] = t.tempFilePath), t;
        }, function(e) {
            return wx.hideLoading(), wx.showToast({
                title: "图片下载失败",
                icon: "none",
                duration: 2e3
            }), e;
        });
        t.push(i);
    }
}

function p() {
    var e = wx.getSystemInfoSync().windowWidth, t = 1;
    return 375 !== e && (t = 375 / e), t;
}

function v(e, t, a) {
    var r = "shareImageCanvas", n = wx.createCanvasContext(r, e), o = p();
    a === i.posterType.activity ? function(e, t, a, i, r, n) {
        w(e, t, a, i, r, n);
    }(o, n, t, a, r, e) : w(o, n, t, a, r, e);
}

function w(e, t, r, n, l, d) {
    t.setFillStyle("#fff"), t.setStrokeStyle("#fff"), t.fillRect(0, 0, 680 / e, 751 / e), 
    t.drawImage(r.headImgUrl, 0, 0, 680 / e, 382 / e), t.drawImage(r.avatarUrl, 176 / e, 608 / e, 46 / e, 46 / e), 
    t.drawImage(r.logoUrl, 499 / e, 20 / e, 164 / e, 44 / e), r.qrcodeUrl && t.drawImage(r.qrcodeUrl, 44 / e, 603 / e, 104 / e, 104 / e), 
    n === i.posterType.video && t.drawImage(r.videoIconUrl, 285 / e, 136 / e, 110 / e, 100 / e);
    var f = 600 / e, m = 40 / e, p = 415 / e;
    g(t, r.title, 40 / e, "top", "#222", m, p, 2, f), t.setFillStyle("#fff"), t.setStrokeStyle("#e1e1e1"), 
    t.strokeRect(m, 566 / e, f, .5 / e), r.avatarMask && t.drawImage(r.avatarMask, 176 / e, 608 / e, 46 / e, 46 / e);
    var v = 26 / e, w = r.nickName;
    g(t, w = w.length > 8 ? (0, a.default)(w).splice(0, 8).join("") + "..." : w, v, "top", "#222", 235 / e, 613 / e, 1);
    var x = t.measureText(w).width;
    g(t, "正在参与这个活动", v, "top", "#777", 235 / e + x, 613 / e), g(t, "识别小程序，进入", v, "top", "#777", 176 / e, 661 / e);
    var T = t.measureText("识别小程序，进入").width;
    g(t, "腾讯新闻", v, "top", "#2883e9", 176 / e + T, 661 / e);
    var I = t.measureText("识别小程序，进入腾讯新闻").width;
    g(t, "查看活动", v, "top", "#777", 176 / e + I, 661 / e), t.draw(!1, function() {
        setTimeout(function() {
            !function(e, t, a, i, r, n) {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: e,
                    height: t,
                    destWidth: a,
                    destHeight: i,
                    canvasId: r,
                    quality: 1,
                    success: function(e) {
                        n.setData({
                            shareImagePath: e.tempFilePath
                        }), function(e, t) {
                            wx.canIUse("getSetting") ? o().then(function(a) {
                                a.authSetting["scope.writePhotosAlbum"] ? h(e, t) : s({
                                    scope: "scope.writePhotosAlbum"
                                }).then(function(a) {
                                    h(e, t);
                                }, function(e) {
                                    t.setData({
                                        shareCurTitleTips: u.savaAuthFail
                                    });
                                });
                            }) : ("function" == typeof callback && callback(), setTimeout(function() {
                                wx.showModal({
                                    title: "提示",
                                    content: c
                                });
                            }, 500));
                        }(e.tempFilePath, n), wx.hideLoading();
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "获取海报失败",
                            icon: "none",
                            duration: 2e3
                        }), wx.hideLoading();
                    }
                }, n);
            }(680 / e, 750 / e, 680, 750, l, d);
        }, 500);
    });
}

function g(e, t, a, i, r, n, o, l, s) {
    var u = p(), c = n, d = o, f = 1;
    if (1 === l) return e.setFontSize(a), e.setTextBaseline(i), e.setFillStyle(r), void e.fillText(t, c, d);
    for (var h = 0, m = t.length; h < m; ++h) {
        var v = t[h];
        e.setFontSize(a), e.setTextBaseline(i), e.setFillStyle(r);
        var w = e.measureText(v).width;
        if (c > s && (d += 40 / u + 20, c = n, f += 1), c + w > s && f === l) {
            e.fillText("...", c, d);
            break;
        }
        e.fillText(v, c, d), c += w;
    }
}