Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./config");

exports.default = Component({
    behaviors: [],
    properties: {
        text: {
            type: String,
            value: ""
        },
        isEnd: {
            type: Boolean,
            value: !1
        },
        icon: {
            type: String
        }
    },
    data: {
        type: e.TYPES[Math.floor(Math.random() * e.TYPES.length)],
        iconStatus: e.IconType.HIDDEN,
        iconType: e.IconType
    },
    attached: function() {
        var t = e.IconType.HIDDEN, o = this.data.icon;
        o && (t = e.IconType.SHOW_DEFAULT), /\.(jpg|gif|jpeg|png)+$/.test(o) && (t = e.IconType.SHOW_CONFIG), 
        this.setData({
            iconStatus: t
        });
    },
    methods: {}
});