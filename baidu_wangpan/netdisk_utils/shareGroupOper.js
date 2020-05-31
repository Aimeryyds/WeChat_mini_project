Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shareGroupOper = void 0;

var e = require("../netdiisk_requestapi/weixinGroup.js"), t = (require("../netdiisk_requestapi/decodeEncryptedData.js"), 
require("../netdiisk_requestapi/fileOper.js")), r = getApp(), n = /[\\\/:*?'<>\|]+/gi, a = /(?:[\xA9\xAE\u2122\u23E9-\u23EF\u23F3\u23F8-\u23FA\u24C2\u25B6\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF])+/g;

exports.shareGroupOper = {
    defaultNewDir: function(e) {
        return "/[" + e.replace(a, " ").replace(n, "") + "] 创建的共享";
    },
    createNewDir: function(e) {
        return wx.wetoast({
            content: "加载中",
            duration: 2e3,
            loading: !0
        }), t.fileOper.createShareDir(e);
    },
    renameFileName: function(e, r) {
        return t.fileOper.asyncRenameDir(e, r).then(function() {
            wx.wetoast({
                content: "文件夹重命名成功",
                duration: 3e3
            });
        }).catch(function(e) {
            return wx.wetoast({
                content: "文件夹重命名失败",
                duration: 3e3
            }), Promise.reject(e);
        });
    },
    dirSendWeixinCard: function(t) {
        return new Promise(function(r, n) {
            0 == +t.isShare ? e.weixinGroup.v2createShareDir(t.fid).then(function(e) {
                wx.toasthide();
                var t = "";
                0 == +e.data.errno ? r(e) : 18222 == +e.data.errno ? (t = "含有违规内容，无法共享他人", e.data.show_msg && (t = e.data.show_msg), 
                wx.wetoast({
                    content: t,
                    duration: 3e3
                }), n(e)) : 18221 == +e.data.errno ? (t = "含有敏感词，无法共享他人", e.data.show_msg && (t = e.data.show_msg), 
                wx.wetoast({
                    content: t,
                    duration: 3e3
                }), n(e)) : 18203 == +e.data.errno ? (t = "共享目录数已达上限", e.data.show_msg && (t = e.data.show_msg), 
                wx.wetoast({
                    content: t,
                    duration: 3e3
                }), n(e)) : n(e);
            }) : (wx.toasthide(), r());
        });
    },
    createGroupSendWeixinCard: function(e) {
        e.fid;
        var n = e.defaultText, a = e.inputText;
        wx.wetoast({
            content: "加载中",
            loading: !0,
            duration: !0
        }), wx.log.share.createShareChangename.send();
        var u = "/" + n;
        return t.fileOper.asyncRenameDir(u, a).then(function(e) {
            var t = e.data, n = t.list && t.list.length > 0 && t.list[0].to, a = r.globalData.shareDirData.currentDirData.dirMeta;
            n && (a.server_filename = n.substr(1)) && (a.path = n);
        }).then(function(e) {
            return e;
        }).catch(function() {
            wx.wetoast({
                content: "文件夹重命名失败",
                duration: 3e3
            });
        });
    },
    createGroupCancel: function(e) {
        return t.fileOper.asyncDeleteFiles(e).then(function(e) {
            return wx.wetoast({
                content: "创建已被取消",
                duration: 1500
            }), e;
        }).catch(function(e) {});
    }
};