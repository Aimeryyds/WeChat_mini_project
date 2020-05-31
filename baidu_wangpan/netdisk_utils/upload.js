function e(e, t) {
    var o = new Date(), a = /\.[^.]+$/.exec(e);
    return !!a && encodeURIComponent(o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate() + " " + o.getHours() + o.getMinutes() + o.getSeconds() + " " + (t + 1) + a);
}

function t(e, t, o, a) {
    var r = wx.getStorageSync("userInfo").bduss, s = wx.getStorageSync("PANWX"), i = n + "rest/2.0/pcs/file?method=upload&dir=" + encodeURIComponent(t) + "&filename=" + o + "&app_id=250528";
    return a && (i += "&upload_sign=" + a), new Promise(function(t) {
        wx.uploadFile({
            url: i,
            filePath: e,
            header: {
                Cookie: "BDUSS=" + r + ";PANWX=" + s + ";",
                Host: "inner.pcs.bae.baidu.com"
            },
            name: "file",
            success: function(e) {
                t(e), 200 === e.statusCode ? wx.log.common.uploadSuccess.send() : wx.log.common.uploadFail.send();
            },
            fail: function(e) {
                t(e), wx.log.common.uploadFail.send();
            }
        });
    });
}

var o = require("../netdiisk_requestapi/getUploadSign.js"), a = require("./guideMemberMixin"), n = wx.ENV.pcsHost, r = getApp(), s = function(e) {
    var t = e;
    try {
        t = JSON.stringify(t);
    } catch (e) {
        console.warn(e);
    }
    wx.logBp.common.uploadFail.send({
        msg: t
    }), wx.wxMonitor.upload.send();
}, i = function(e) {
    return e.some(function(e) {
        var t = !1;
        try {
            31112 === JSON.parse(e.data).error_code && (t = !0);
        } catch (e) {
            console.error(e);
        }
        return t;
    });
}, u = function(e) {
    var t = e.length, o = e.filter(function(e) {
        return e && 200 === e.statusCode;
    }).length, n = t - o, u = !1;
    0 === o && (u = i(e));
    var l = void 0;
    if (u) {
        var c = r.globalData.userCenterInfo || {}, d = c && c.quotaSize || {};
        u = !!(l = (l = (0, a.getTipByQuota)({
            size: r.globalData.uploadListSize,
            total: d.total,
            used: d.used
        })) && Object.assign({}, l, {
            trigger: "uploadLocal"
        }));
    }
    return (0 !== o || 0 === o && u) && (r.globalData.uploadList = [], r.globalData.uploadListSize = 0), 
    n > 0 && s(e), {
        successCount: o,
        failureCount: n,
        hasExceedQuota: u,
        guideMemberTip: l
    };
}, l = function(e) {
    var t = e.resList, o = [], a = [];
    return e.uploadList.forEach(function(e, n) {
        var r = t[n];
        if (r && 200 === r.statusCode) {
            var s = JSON.parse(r.data);
            o.push({
                filePath: e,
                fs_id: s.fs_id
            });
        } else a.push(e);
    }), {
        successList: o,
        failList: a,
        resList: t
    };
};

module.exports = {
    uploadLocalFiles: function(o) {
        return Promise.all(r.globalData.uploadList.map(function(a, n) {
            var r = e(a, n);
            return r ? t(a, o, r) : Promise.resolve(null);
        })).then(u);
    },
    uploadLocalFilesToShareDir: function(a) {
        return Promise.all(r.globalData.uploadList.map(function(n, r) {
            var s = e(n, r);
            return s ? (0, o.getUploadSign)(a, s).then(function(e) {
                var o = e.data, r = o.errno, i = o.uploadsign;
                return 0 != +r ? Promise.resolve(null) : t(n, a, s, i);
            }) : Promise.resolve(null);
        })).then(u);
    },
    transAssistantUpload: function(o) {
        var a = o.uploadPath, n = o.uploadList;
        return Promise.all(n.map(function(o, n) {
            var r = e(o, n);
            return r ? t(o, a, r) : Promise.resolve(null);
        })).then(function(e) {
            return l({
                resList: e,
                uploadList: n
            });
        });
    },
    checkHasExceed: i
};