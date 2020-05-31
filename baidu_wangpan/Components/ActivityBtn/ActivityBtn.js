var t = require("../../netdisk_utils/activity");

Component({
    externalClasses: [ "activity-class" ],
    properties: {
        activity: {
            type: Object,
            value: {}
        },
        show: {
            type: Boolean,
            value: !0
        },
        bottom: {
            type: String,
            value: "180rpx"
        },
        top: {
            type: String,
            value: "auto"
        },
        showCancel: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        innerShow: !0
    },
    methods: {
        actClick: function() {
            this.triggerEvent("iconClick"), (0, t.navActivity)(this.data.activity);
        },
        actCancel: function() {
            this.setData({
                innerShow: !1
            }), this.triggerEvent("iconCancel");
        }
    }
});