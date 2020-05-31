(0, function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../itemBehavior.js")).default)({
    properties: {
        filter: {
            type: String
        },
        sharePage: {
            type: Boolean,
            value: !1
        },
        shareUrlInfo: {
            type: Object
        }
    },
    data: {
        error: !1
    },
    methods: {
        error: function() {
            this.data.isThumb && this.setData({
                error: !0
            });
        }
    }
});