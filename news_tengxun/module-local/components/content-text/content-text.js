getApp();

var t = getApp().global;

Component({
    properties: {
        text: {
            type: String,
            value: ""
        },
        lineheight: {
            type: Number,
            value: 25
        }
    },
    data: {},
    methods: {},
    ready: function(e) {
        var i = this;
        t.comPostInfo && t.comPostInfo.pixelRatio && t.comPostInfo.pixelRatio;
        var o = i.data.lineheight;
        wx.createSelectorQuery().in(this).select(".content-text").boundingClientRect(function(t) {
            t && t.height && i.triggerEvent("toggletitle", {
                linecount: (t.height + 1) / o
            });
        }).exec();
    }
});