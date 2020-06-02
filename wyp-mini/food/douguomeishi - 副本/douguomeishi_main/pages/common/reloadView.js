var t = require("../../utils/WxNotificationCenter.js");

Component({
    properties: {},
    data: {},
    methods: {
        reloadButtonPressed: function() {
            t.postNotificationName("reloadButtonPressedNotificationName");
        }
    }
});