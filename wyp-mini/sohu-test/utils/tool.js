var e = getApp(), t = {
    isIphoneX: function() {
        var t = e.globalData.systemInfo.model;
        return /iphone x/i.test(t);
    }
};

module.exports = t;