var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../utils/logger")), s = e(require("./wxMiniDraw.js"));

module.exports = {
    drawCanvas: function(e) {
        var t = {
            wrapperId: e.wrapperId,
            drawElementsClass: e.drawElementsClass,
            canvasId: e.canvasId,
            context: e.context
        }, i = 750 / wx.getSystemInfoSync().screenWidth;
        e.before && e.before(), (0, s.default)(t).then(function() {
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: e.width / i,
                    height: e.height / i,
                    destWidth: e.destWidth,
                    destHeight: e.destHeight,
                    canvasId: e.canvasId,
                    quality: 1,
                    success: function(t) {
                        e.success && e.success(t);
                    },
                    fail: function(t) {
                        e.fail && e.fail(t);
                    },
                    complete: function(t) {
                        e.complete && e.complete(t);
                    }
                }, e.context);
            }, 500);
        });
    },
    savePhotosAlbum: function(e) {
        setTimeout(function() {
            wx.saveImageToPhotosAlbum({
                filePath: e.imgUrl,
                success: function(s) {
                    e.success && e.success(), t.default.warn("存储相册成功:", e.imgUrl);
                },
                fail: function(s) {
                    e.fail && e.fail(), t.default.warn("存储相册失败:", e.imgUrl);
                }
            });
        }, 500);
    }
};