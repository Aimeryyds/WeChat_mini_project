var e = require("../../netdisk_utils/common");

getApp();

Component({
    properties: {
        appParameter: {
            type: String,
            value: ""
        }
    },
    methods: {
        launchSuccess: function() {},
        launchCal: function() {
            this.triggerEvent("launchCal"), (0, e.openAppReport)();
        },
        launchErr: function(n) {
            wx.navigateTo({
                url: "/pages/netdisk_launchApp/launchApp"
            }), (0, e.openAppErr)(n.detail);
        }
    }
});