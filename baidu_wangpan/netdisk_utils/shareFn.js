function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.commonShareToOthers = exports.jumpToShareSnap = void 0;

var a = require("../netdiisk_requestapi/fileOper.js"), t = require("./errnoText.js"), r = exports.jumpToShareSnap = function(r, s) {
    var n, o = wx.getStorageSync("uk"), i = r.isOneImg || !1;
    if (r.path && r.path.includes("<share>")) wx.wetoast({
        content: "暂不能分享他人空间内的文件",
        duration: 3e3
    }); else {
        if (s.surl && ("audio" === s.from || "video" === s.from)) return wx.log.share.fromSharePageShare.send(), 
        void wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
            fid: r.fs_id,
            uk: o,
            surl: encodeURIComponent(s.surl),
            hasListData: !0,
            from: s.from,
            serverFilename: r.server_filename,
            path: encodeURIComponent(r.path),
            isOneImg: i,
            imagetype: s.imagetype || -1
        });
        var h = getApp();
        wx.log.share.singleShareClick.send();
        var p = s.from && "batch" === s.from ? JSON.stringify(s.path) : JSON.stringify([ r.path ]);
        r.isdir || !r.thumbs && 2 !== r.category || (h.globalData.preShareData.list = [], 
        h.globalData.preShareData.list.push(r), i = !0), a.fileOper.shareSet((n = {
            path_list: p,
            channel_list: JSON.stringify([]),
            schannel: 25,
            period: 0
        }, e(n, "schannel", 0), e(n, "is_card", 0), n)).then(function(e) {
            var a = e.data, t = a.errno, s = a.show_msg, n = void 0 === s ? "" : s, h = a.shorturl, p = a.imagetype, l = h;
            l = l.substring(l.indexOf("s/") + 2, l.length), t ? wx.wetoast({
                content: n || "分享失败文件包含违规内容",
                duration: 3e3
            }) : wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
                fid: r.fs_id || "",
                uk: o,
                surl: encodeURIComponent(l),
                hasListData: r.hasListData || !1,
                serverFilename: r.server_filename,
                path: encodeURIComponent(r.path),
                isOneImg: i,
                imagetype: p || -1
            });
        }, function(e) {
            var a = e.data, r = a.errno, s = a.show_msg, n = void 0 === s ? "" : s;
            wx.log.send({
                value: "文件分享按钮点击，提示无法共享的用户数和次数",
                type: "single_share_fail_" + r
            });
            var o = n || (0, t.shareErr)(r);
            wx.wetoast({
                content: o,
                duration: 3e3
            });
        }).catch(function(e) {
            console.warn(e);
        });
    }
};

exports.commonShareToOthers = function(e) {
    getApp().globalData.preShareData.list = e;
    var a = {
        hasListData: !0,
        server_filename: "“" + e[0].server_filename + "”等" + e.length + "个文件"
    }, t = {
        from: "batch",
        path: e.map(function(e) {
            return e.path;
        })
    };
    r(a, t);
};