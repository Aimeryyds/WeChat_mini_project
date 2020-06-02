module.exports = {
    shareToWx: function(o, t, n, e) {
        return console.log("我进入分享方法啦"), {
            title: e,
            path: o + "&id=" + t + "&type=" + n,
            success: function(o) {
                console.log("path=");
            },
            fail: function(o) {
                console.log("path=失败" + path);
            }
        };
    },
    backhome: function(o) {
        o.backhome = function() {
            wx.switchTab({
                url: "../index/index"
            });
        };
    }
};