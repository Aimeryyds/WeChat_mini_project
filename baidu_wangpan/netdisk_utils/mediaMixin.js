var o = require("./common.js");

module.exports = {
    pCode: function(e) {
        if (!e.saved) {
            var t = (0, o.getNaSurlStr)(e.surl, e.pwd);
            return wx.setClipboardData({
                data: t,
                success: function() {
                    wx.showToast({
                        title: "口令复制成功，打开百度网盘App查看",
                        icon: "none"
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "口令复制失败，请稍后重试",
                        icon: "none"
                    });
                }
            }), void wx.log.common.copySurl.send({
                from: e.isAudio ? "audio" : e.isVideo ? "video" : ""
            });
        }
        if (!e.userUk) return wx.log.common.appUseUkErr.send(), void wx.wetoast({
            content: "获取口令失败，请稍候再试"
        });
        (0, o.setCode)(e.appParameter, {
            success: function() {
                wx.showToast({
                    title: "口令已复制，请打开百度网盘App查看",
                    icon: "none"
                });
            }
        });
    }
};