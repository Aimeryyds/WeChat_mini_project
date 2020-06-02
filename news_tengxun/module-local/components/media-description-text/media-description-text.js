Component({
    properties: {
        text: {
            type: String,
            value: ""
        },
        lineheight: {
            type: Number,
            value: 28
        }
    },
    data: {},
    created: function() {},
    attached: function() {},
    methods: {},
    ready: function(e) {
        var t = this, n = t.data.lineheight;
        wx.createSelectorQuery().in(this).select(".content-text").boundingClientRect(function(e) {
            e && e.height && t.triggerEvent("toggletitle", {
                moreOneLine: (e.height + 1) / n
            });
        }).exec();
    }
});