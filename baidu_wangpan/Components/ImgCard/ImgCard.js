var e = require("../../netdisk_utils/string.js");

(0, function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../List/itemBehavior.js")).default)({
    properties: {
        name: {
            type: String,
            value: ""
        },
        src: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: ""
        }
    },
    data: {
        showName: ""
    },
    ready: function() {
        var t = (0, e.setEllipsis)(this.properties.name, 15, "..");
        this.setData({
            showName: t
        });
    },
    methods: {}
});