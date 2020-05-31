var t = require("../../../netdisk_utils/common");

Component({
    properties: {
        title: {
            type: String
        },
        content: {
            type: String
        },
        cancelText: {
            type: String
        },
        openApp: {
            type: Boolean,
            value: !1
        },
        appParameter: {
            type: String
        },
        confirmText: {
            type: String
        }
    },
    ready: function() {
        this.popup = this.selectComponent("#popup");
    },
    methods: {
        show: function() {
            this.popup.show();
        },
        hide: function() {
            this.popup.hide();
        },
        handleCancel: function() {
            this.hide();
        },
        lauchError: function(e) {
            this.hide(), this.triggerEvent("lauchError"), wx.navigateTo({
                url: "/pages/netdisk_launchApp/launchApp"
            }), (0, t.openAppErr)(e.detail);
        },
        launchCal: function() {
            this.hide(), (0, t.openAppReport)();
        },
        lauchSuccess: function() {
            this.triggerEvent("lauchSuccess");
        },
        handleConfirm: function() {
            this.hide(), this.triggerEvent("confirm");
        }
    }
});