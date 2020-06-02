getApp();

module.exports = {
    convertBigNumber: function(e) {
        var t = (e / 1e4).toFixed(1);
        return t > 0 ? t + "万" : e;
    }
};