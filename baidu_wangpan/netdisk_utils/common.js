function e(e) {
    var t = this, o = e.res, n = e.quota, a = e.total, i = e.used, r = getApp(), s = o.size, c = o.duration.toFixed(2), u = o.tempFilePath.split(".").pop();
    if (wx.log.send({
        type: "wx_add_video_" + this.pageType,
        value: "上传视频",
        size: s,
        formats: u,
        duration: c + "s"
    }), s > n) try {
        var p = (0, d.getTipByQuota)({
            size: s,
            total: a,
            used: i
        });
        if (!p) throw "exceed";
        this.showGuideMemberModal(), this.setData({
            guideMemberTip: Object.assign({}, p, {
                trigger: "uploadVideo"
            })
        });
    } catch (e) {
        wx.wetoast({
            content: "上传失败，请清理网盘空间后再试",
            duration: 3e3
        });
    } else r.globalData.uploadList.push(o.tempFilePath), this.localUpload().then(function() {
        t.setData({
            uploadData: {}
        }), t.getFileList();
    });
}

function t() {
    return new Promise(function(e, t) {
        wx.getStorageSync("affirm") || !1 ? e() : (wx.setStorageSync("affirm", !0), wx.showDialog({
            content: "因能力限制，请选择10分钟或500M以内的视频哦（视频会被压缩）",
            showCancel: !1,
            confirmText: "知道了",
            confirm: function() {
                e();
            }
        }));
    });
}

function o() {
    return t().then(function() {
        return new Promise(function(e, t) {
            wx.chooseVideo({
                sourceType: [ "album" ],
                compressed: !1,
                maxDuration: 60,
                camera: "back",
                success: function(o) {
                    o.duration.toFixed(2) > 600 && (wx.wetoast({
                        content: "上传失败，仅可上传10分钟内的视频",
                        duration: 3e3
                    }), t()), o.size > 524288e3 && (wx.wetoast({
                        content: "上传失败，仅可上传500M以内的视频",
                        duration: 3e3
                    }), t()), e(o);
                },
                fail: function(e) {
                    t(e);
                }
            });
        });
    });
}

function n() {
    if (0 !== (getApp().globalData.userCenterInfo || {}).memberType) return !0;
    wx.log.normal.addVideoRejecct.send(), wx.showDialog({
        title: "提示",
        content: "技术升级中，暂不支持上传视频",
        confirmText: "我知道了",
        showCancel: !1,
        confirm: function() {}
    });
}

function a() {
    return new Promise(function(e, t) {
        r(wx.getSystemInfoSync().SDKVersion, "2.5.0") < 0 && (wx.showDialog({
            content: "当前微信版本过低，暂无法上传微信文件，请升级到最新版后再试",
            confirmText: "知道了",
            showCancel: !1
        }), t()), e();
    });
}

function i() {
    return a().then(function() {
        return new Promise(function(e, t) {
            wx.chooseMessageFile({
                count: 10,
                type: "all",
                success: function(t) {
                    e(t);
                },
                fail: function(e) {
                    t(e);
                }
            });
        });
    });
}

function r(e, t) {
    e = e.split("."), t = t.split(".");
    for (var o = Math.max(e.length, t.length); e.length < o; ) e.push("0");
    for (;t.length < o; ) t.push("0");
    for (var n = 0; n < o; n++) {
        var a = parseInt(e[n], 10), i = parseInt(t[n], 10);
        if (a > i) return 1;
        if (a < i) return -1;
    }
    return 0;
}

function s(e) {
    var t = getApp().globalData.systemInfo, o = {
        type: "wx_storage_sync_error",
        value: "获取本地缓存错误",
        systemInfo: t = JSON.stringify(t)
    };
    e && (o.storageKey = e), (0, f.reportAction)(o);
}

var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, u = require("./wxRequestApi.js"), p = require("../netdiisk_requestapi/getUserCenterInfo.js"), l = require("../netdiisk_requestapi/setPcode.js"), f = require("../netdiisk_requestapi/reportAction.js"), d = require("./guideMemberMixin"), g = require("./calculate"), m = function() {
    return "ios" === (getApp().globalData.systemInfo || {}).platform;
};

module.exports = {
    generateFormId: function(e) {
        var t = getApp();
        t.globalData.formIdList ? t.globalData.formIdList.push(e.detail.formId) : t.globalData.formIdList = [ e.detail.formId ];
    },
    uploadFormId: function() {
        return (0, u.wxReq)("api/wechat/collect", {
            formids: getApp().globalData.formIdList.join(",")
        }, "POST").then(function() {
            getApp().globalData.formIdList = [];
        });
    },
    reportSceneAction: function(e) {
        e && e.scene && (1001 == e.scene ? wx.log.common.discover1001.send() : 1007 == e.scene ? wx.log.common.singleChat1007.send() : 1008 == e.scene ? wx.log.common.groupChat1008.send() : 1011 == e.scene ? wx.log.common.scanCode1011.send() : 1012 == e.scene ? wx.log.common.pressImgCode1012.send() : 1013 == e.scene ? wx.log.common.albumCode1013.send() : 1014 == e.scene ? wx.log.common.tmplmsg1014.send() : 1044 == e.scene ? wx.log.common.withshareTicket1044.send() : 1089 == e.scene ? wx.log.common.wechatmain1089.send() : 1036 == e.scene ? wx.log.common.sharepage1036.send() : wx.log.send({
            value: "openScene" + e.scene,
            type: "打开场景值为" + e.scene
        }));
    },
    DETAIL_SHARE: !1,
    checkType: function(e) {
        var t = {
            audio: /(.*)\.(mp3|aac|wav|wma|amr|asf|asx|aac\+|eaac\+|mp2|ogg|aif|mpega|m4a|3gpp|ac3|ape|flac|m2a|ram)$/i,
            word: /(.*)\.(doc|docx|dot|dotx|rtf|ots|odm|odt)$/i,
            excel: /(.*)\.(xls|xlsx|xlt|xltx|ots|ods|csv)$/i,
            single: /(.*)\.(txt|pdf|apk|exe|psd|torrent|mmap|mm|xmind|numbers|pages|link|vsd)$/i,
            ppt: /(.*)\.(ppt|pptx|ppst|potx|pps|pot)$/i,
            html: /(.*)\.(html|htm|xhtml|xml)$/i,
            css: /(.*)\.(css|less|sass)$/i,
            js: /(.*)\.(js|ts|jsx|tsx)$/i,
            font: /(.*)\.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/i,
            compress: /(.*)\.(zip|rar|7z|gz|tgz|tar)$/i,
            cad: /(.*)\.(dwg|dxf|dwt|dwl|dwl2)$/i,
            image: /(.*)\.(jpg|jpeg|png|png8|png24|gif|svg|bmp)$/i,
            video: /(.*)\.(mp4|flv|swf|fla|avi|flv|mpg|rm|mov|mkv|rmvb)$/i
        };
        for (var o in t) if (t[o].test(e)) {
            var n = e.split(".");
            return "single" == o ? n[n.length - 1] : o;
        }
        return "other";
    },
    uploadVideo: e,
    putVideo: function() {
        var t = this;
        n() && p.userCenter.getUserQuota().then(function(n) {
            var a = n.data, i = a.total, r = a.used, s = i - r;
            o().then(function(o) {
                e.call(t, {
                    res: o,
                    quota: s,
                    total: i,
                    used: r
                });
            }).catch(function(e) {
                console.warn(e);
            });
        }).catch(function() {
            wx.wetoast({
                content: "获取网盘容量失败，请稍后重试",
                duration: 3e3
            });
        });
    },
    putMessageFile: function() {
        var e = this;
        wx.log.file.uploadWxFile.send();
        var t = getApp();
        i().then(function(o) {
            var n = o.tempFiles.map(function(e) {
                return e.path;
            });
            t.globalData.uploadList = n, t.globalData.uploadListSize = o.tempFiles.map(function(e) {
                return e.size;
            }).reduce(function(e, t) {
                return e + t;
            }), e.localUpload().then(function() {
                e.setData({
                    uploadData: {}
                }), e.getFileList();
            });
        }).catch(function(e) {
            console.warn(e);
        });
    },
    setCode: function(e, t) {
        if ("" === e || "string" != typeof e) throw new Error("schema should not undefined, must be string");
        wx.log.common.setCode.send(), (0, l.setPcode)(e).then(function(e) {
            var o = e.data, n = o.errno, a = o.data;
            if (!n) {
                var i = {
                    data: a.msg
                };
                "object" === (void 0 === t ? "undefined" : c(t)) && Object.assign(i, t), wx.setClipboardData(i);
            }
        });
    },
    storageError: s,
    getUk: function() {
        var e = wx.getStorageSync("uk");
        return e || (s("uk"), e = getApp().globalData.uk || 0), e;
    },
    setUk: function(e) {
        wx.setStorageSync("uk", e), getApp().processUk();
    },
    getNaSurlStr: function(e, t) {
        return "链接: https://pan.baidu.com/s/" + e + " " + (t ? "提取码: " + t + " " : "") + "复制这段内容后打开百度网盘手机App，操作更方便哦";
    },
    openAppErr: function(e) {
        var t = getApp().globalData.systemInfo, o = {
            type: "wx_open_app_error",
            value: "打开App失败",
            systemInfo: t = JSON.stringify(t)
        };
        Object.assign(o, e), wx.log.send(o), wx.logBp.send(o), wx.wxMonitor.openApp.send();
    },
    openAppReport: function() {
        var e = {
            value: "唤起端点击",
            type: "wx_launch_" + wx.getCurrentViewPage().pageType
        };
        wx.log.send(e), wx.logBp.send(e);
    },
    getMemberUrl: function(e) {
        var t = e.from, o = void 0 === t ? "" : t, n = e.category, a = void 0 === n ? "svip" : n, i = e.type, r = void 0 === i ? "vip" : i, s = e.backurl, c = void 0 === s ? "" : s;
        return "/pay/pages/cashierDesk/index?from=" + o + "&category=" + a + "&type=" + r + "&backurl=" + encodeURIComponent(c);
    },
    isAndroid: function() {
        return "android" === (getApp().globalData.systemInfo || {}).platform;
    },
    isIos: m,
    isSupportAudio: function(e) {
        return e.toLowerCase().indexOf(".mp3") > -1 || !m() && e.indexOf(".wma") > -1;
    },
    getMessageFile: i,
    getVideo: o,
    checkNetwork: function() {
        return new Promise(function(e, t) {
            wx.getNetworkType({
                success: function(o) {
                    "none" === o.networkType ? t(o) : e(o);
                },
                fail: function(t) {
                    e(t);
                }
            });
        });
    },
    isShowSavedTip: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = (0, 
        g.formatTime)(new Date()).substring(0, 10), o = wx.getStorageSync("showSavedTipDate");
        if (!e) return t !== o;
        try {
            e && wx.setStorageSync("showSavedTipDate", t);
        } catch (e) {
            console.log("showSavedTipDate", e);
        }
    },
    checkPutVideoPri: n,
    canPageCustomNav: function() {
        return +getApp().globalData.systemInfo.version[0] >= 7;
    }
};