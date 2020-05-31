Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shareGroupOper = void 0;

var e = require("../netdiisk_requestapi/weixinGroup.js"), t = require("../netdiisk_requestapi/decodeEncryptedData.js"), a = require("../netdiisk_requestapi/fileOper.js"), n = /[\\\/\:\*\?'<>\|]+/gi, o = /(?:[\xA9\xAE\u2122\u23E9-\u23EF\u23F3\u23F8-\u23FA\u24C2\u25B6\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF])+/g, r = function(t, a, n, o) {
    e.weixinGroup.queryIsBind(n).then(function(e) {
        0 == +e.data.errno ? 0 == +e.data.is_bind ? "createGroup" === o ? u(t, a, n) : "shareToWeixinGroup" === o && (wx.log.normal.normalBtnShareToCreate.send(), 
        i(t, a, n)) : "createGroup" === o ? (s(t, a, n), wx.log.share.createShareJoinSuccess.send()) : "shareToWeixinGroup" === o && (d(t, a, e.data.path, n), 
        wx.log.normal.normalBtnShareToCopy.send()) : (wx.toasthide(), wx.wetoast({
            content: "查询群共享出错",
            duration: 3e3
        }));
    });
}, u = function(t, r, u) {
    var i = "/[" + r.data.userWxInfo.nickName.replace(o, " ").replace(n, "") + "] 创建的群共享";
    a.fileOper.createDir(i).then(function(t) {
        var a = t.data.fs_id;
        return i = t.data.path, e.weixinGroup.createShareDir(u, a);
    }, function() {
        wx.toasthide(), wx.wetoast({
            content: "创建文件夹出错",
            duration: 3e3
        });
    }).then(function(e) {
        if (wx.toasthide(), 0 == +e.data.errno) r.dialog.show({
            errorText: null,
            value: i.substr(1),
            defaultText: i.substr(1),
            inputText: null,
            selectionEnd: i.length - 1,
            className: null,
            titleClassName: null,
            title: "设置共享名称",
            placeholder: "请输入共享的名称",
            showExampleText: !0,
            exampleText: "举例：学习资料、新西兰之旅、家有萌宝等"
        }); else {
            var t = "创建群共享失败";
            e.data.show_msg && (t = e.data.show_msg), wx.wetoast({
                content: t,
                duration: 3e3
            });
        }
    });
}, i = function(t, a, n) {
    var o = a.modalDialog.getFileMeta(), r = o.fs_id, u = function(e) {
        wx.toasthide();
        var t = "";
        0 == +e.data.errno ? (t = "共享给微信群成功", e.data.show_msg && (t = e.data.show_msg), 
        wx.wetoast({
            content: t,
            duration: 3e3
        })) : 18402 == +e.data.errno ? (t = "该文件已绑定微信群", e.data.show_msg && (t = e.data.show_msg), 
        wx.wetoast({
            content: t,
            duration: 3e3
        })) : (t = "共享给微信群失败", e.data.show_msg && (t = e.data.show_msg), wx.wetoast({
            content: t,
            duration: 3e3
        }));
    };
    o.share ? e.weixinGroup.bindShareDir(n, r).then(u) : e.weixinGroup.createShareDir(n, r).then(u);
}, s = function(t, a, n) {
    e.weixinGroup.joinShareDir(n).then(function(e) {
        wx.toasthide(), 0 == +e.data.errno ? wx.wetoast({
            content: "加入已有群共享成功",
            duration: 3e3
        }) : 18215 == +e.data.errno ? wx.wetoast({
            content: "已经加入该群共享",
            duration: 3e3
        }) : wx.wetoast({
            content: "加入群共享失败",
            duration: 3e3
        });
    });
}, d = function(t, n, o, r) {
    e.weixinGroup.joinShareDir(r).then(function(e) {
        return 0 == +e.data.errno || 18215 == +e.data.errno ? a.fileOper.copyDir(n.modalDialog.getFileMeta().path, o) : Promise.reject(1);
    }).then(function() {
        wx.wetoast({
            content: "共享成功",
            duration: 3e3
        });
    }, function(e) {
        1 === e ? wx.wetoast({
            content: "加入群共享失败",
            duration: 3e3
        }) : wx.wetoast({
            content: "共享失败",
            duration: 3e3
        });
    });
};

exports.shareGroupOper = {
    bindWeixinGroupByShareTicket: function(e, a, n) {
        n.shareTickets && (wx.wetoast({
            content: "创建中...",
            loading: !0,
            duration: 2e3
        }), wx.getShareInfo({
            shareTicket: n.shareTickets[0],
            success: function(n) {
                var o = n.iv, u = n.encryptedData;
                (0, t.decodeEncryptedData)(o, u).then(function(t) {
                    if (0 == +t.data.errno) {
                        var n = t.data.data.openGId;
                        r(e, a, n, "createGroup");
                    } else wx.wetoast({
                        content: "获取微信群信息出错",
                        duration: 3e3
                    });
                });
            }
        }));
    }
};