var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default ],
    properties: {},
    data: {
        layoutstyle: ""
    },
    attached: function() {
        var t = getApp(), e = this.data.param.height;
        Number.isFinite(e) && (e = t.px2rpx(e)), this.setData({
            layoutstyle: "height:" + e
        });
    },
    methods: {}
});