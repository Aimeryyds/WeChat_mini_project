module.exports = function(s) {
    return new Promise(function(e, o) {
        wx.request({
            url: s,
            success: function(s) {
                console.log("@@ promise success ", s), e(s);
            }
        });
    });
};