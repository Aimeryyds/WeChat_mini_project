var e = require("../../../../external/mta_analysis.js");

Component({
    properties: {
        host: {
            type: Object,
            value: {}
        },
        guest: {
            type: Object,
            value: {}
        },
        hidden: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        personBoxVisibility: !1
    },
    methods: {
        showPersonBox: function() {
            this.setData({
                personBoxVisibility: !0
            });
        },
        clickLogo: function() {
            e.Event.stat("fenxiangheaderlogo", {});
        },
        hidePersonBox: function() {
            this.setData({
                personBoxVisibility: !1
            });
        }
    }
});