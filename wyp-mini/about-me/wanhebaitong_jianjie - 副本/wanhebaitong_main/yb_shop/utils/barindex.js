function e(e) {
    return Math.round(wx.getSystemInfoSync().windowWidth * e / 750);
}

var t = require("./barcode");

module.exports = {
    barcode: function(n, o, r, c) {
        t.code128(wx.createCanvasContext(n), o, e(r), e(c));
    }
};