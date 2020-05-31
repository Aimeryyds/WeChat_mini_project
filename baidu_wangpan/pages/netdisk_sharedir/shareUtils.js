Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, r) {
    var a = r.from, o = r.mod, i = r.uk, t = r.fid, s = r.surl, d = getApp();
    if ("sharelist" === a || "filelist" === a || "createGroupShare" === a) {
        var m = d.globalData.shareDirData.currentDirData, n = m.isRoot, u = m.publicMeta, h = m.dirMeta, l = h.server_filename;
        return "createGroupShare" === a && wx.setStorageSync(l, !0), void e.setData({
            sharedirData: {
                isRoot: n,
                dirMeta: h,
                memberNum: u.memberNum,
                avator: u.avator,
                uname: u.uname,
                fileName: l,
                updateTime: h.server_mtime,
                path: h.path
            }
        });
    }
    return "creategroup" === a || "sharetoweixingroup" === a ? (a && "sharetoweixingroup" === a && (wx.log.snapshoot.joinShareFromSnapshoot.send(), 
    o && wx.log.snapshoot["joinShareFromSnapshoot" + o].send()), void e.joinSharedir({
        uk: i,
        fid: t
    })) : "sharecommonaddmember" === a || "sharedircommonaddmember" === a || "setsharecommonaddmember" === a || "sharedirmenu" === a ? (e.joinSharedir({
        uk: i,
        fid: t
    }), void wx.log.share.joinNormalShareSuccess.send()) : "tmplmsg" === a ? (e.getDirDetail({
        uk: i,
        fid: t
    }), void wx.log.share.joinSharefromTmplmsg.send()) : s ? (wx.log.share.joinSurlShare.send(), 
    void e.handleSurl(s)) : void wx.redirectTo({
        url: "/pages/netdisk_index/index"
    });
};