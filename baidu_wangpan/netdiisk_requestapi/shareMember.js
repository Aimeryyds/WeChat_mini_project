Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getShareMember = exports.delShareMember = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = function() {
    wx.wetoast({
        content: "该共享已解散",
        duration: 2e3,
        success: function() {
            wx.reLaunch({
                url: "/pages/netdisk_index/index?currentTab=1"
            });
        }
    });
};

exports.delShareMember = function(r) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    if (!r) return Promise.reject("fid不存在");
    var i = n.length;
    return i <= 0 ? Promise.reject("不存在可被移除的成员") : (n = JSON.stringify(n), o = o ? 1 : 0, 
    wx.wetoast({
        content: "请稍候...",
        loading: !0,
        duration: !0
    }), (0, e.wxReq)("sharedir/member/batchdel", {
        fid: r,
        delete_uks: n,
        delete_files: o
    }, "POST").then(function(e) {
        var r = e.data, n = r.errno, o = r.data, s = (r.process_state, o.length), a = i === s ? "移除成功" : 0 === s ? "移除失败，请稍后再试" : "部分移除成功，请稍后再试";
        return wx.toasthide(), 0 === n ? (wx.wetoast({
            content: a,
            duration: 2e3
        }), e) : (18210 === n && t(), Promise.reject(e));
    }).catch(function(e) {
        return Promise.reject(e);
    }));
}, exports.getShareMember = function(r) {
    return r ? (0, e.wxReq)("sharedir/wx/gmembers", {
        group_id: r
    }, "GET").then(function(e) {
        var r = e.data, n = r.errno, o = r.data;
        return 0 === n ? o : (18210 === n ? t() : wx.wetoast({
            content: "共享成员数据获取失败",
            duration: 2e3
        }), Promise.reject(e));
    }).catch(function(e) {
        return Promise.reject(e);
    }) : Promise.reject("group_id不存在");
};