Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        percent: {
            type: [ Number, String ],
            value: 100
        },
        strokeWidth: {
            type: [ Number, String ],
            value: 16
        },
        activeLineColor: {
            type: Array,
            value: []
        },
        activeColor: {
            type: [ String, Array ],
            value: "#ffca49, #ffb262"
        },
        backgroundColor: {
            type: String,
            value: "#e5e5e5"
        },
        radius: {
            type: [ Number, String ],
            value: 15
        }
    },
    data: {},
    methods: {},
    attached: function() {
        var e = this.data.activeColor;
        ~e.indexOf(",") && this.setData({
            activeLineColor: e.split(",")
        });
    }
});