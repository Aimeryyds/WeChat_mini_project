var t = getApp();

Component({
    properties: {
        chooseType: {
            type: String
        }
    },
    data: {
        contentHeight: 0
    },
    methods: {},
    ready: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(n) {
                e.setData({
                    contentHeight: t.globalData.navHeight + n.screenHeight / 10 - 5
                });
            },
            error: function() {},
            complete: function() {}
        });
    }
});