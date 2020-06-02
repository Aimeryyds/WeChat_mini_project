module.exports = {
    px2rpx: function(r, t) {
        return r * (750 / t);
    },
    rpx2px: function(r, t) {
        return r / 750 * t;
    }
};