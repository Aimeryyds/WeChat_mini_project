require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

Component({
    properties: {
        lineCount: {
            type: Number,
            value: 0
        },
        enableShowAll: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        collapse: !1,
        ready: !1
    },
    ready: function() {
        var e = this;
        wx.nextTick(function() {
            e.createSelectorQuery().select(".content-text").fields({
                size: !0,
                computedStyle: [ "lineHeight" ]
            }, function(t) {
                if (t) {
                    var n = parseInt(t.lineHeight.slice(0, -2)), i = t.height / n > e.data.lineCount;
                    e.setData({
                        collapse: i,
                        ready: !0
                    });
                }
            }).exec();
        });
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapShowAll: function() {
            this.setData({
                collapse: !1,
                lineCount: 0
            });
        }
    }
});