Component({
    properties: {},
    data: {
        background: "#fe6464",
        statusBarHeight: ""
    },
    ready: function() {
        var t = wx.getSystemInfoSync();
        wx.getMenuButtonBoundingClientRect();
        this.setData({
            statusBarHeight: t.statusBarHeight
        });
    },
    methods: {}
});