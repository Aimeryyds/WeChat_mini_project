var e = require("../../netdisk_utils/account.js");

getApp();

Component({
    properties: {
        innerText: {
            type: String,
            value: "default value"
        }
    },
    methods: {
        btnClick: function() {
            wx.getCurrentViewPage().pageName && wx.log.guide.dirNormal.send(), (0, e.bindNormalAccount)();
        }
    }
});