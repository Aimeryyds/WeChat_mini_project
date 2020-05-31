var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, t = require("../../../netdisk_utils/common.js");

Component({
    properties: {
        rulesinfo: {
            type: Object,
            value: {}
        }
    },
    methods: {
        showDetail: function() {
            this.rule = this.selectComponent("#rule");
            var t = this.data.rulesinfo && this.data.rulesinfo.modal;
            t.bgSrc = t.bgsrc, t.content = t.contentmp, delete t.bgsrc, delete t.contentmp, 
            t && this.rule.show(e({}, t)), wx.log.send("activity", "activeRulesClick");
        },
        formSubmit: function(e) {
            return (0, t.generateFormId)(e);
        }
    }
});