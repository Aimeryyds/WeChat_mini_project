var t = require("../../netdisk_utils/activity");

Component({
    properties: {
        activity: {
            type: Object,
            value: {}
        },
        show: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        handleActivityClick: function() {
            this.triggerEvent("activityClick"), (0, t.navActivity)(this.data.activity);
        }
    }
});