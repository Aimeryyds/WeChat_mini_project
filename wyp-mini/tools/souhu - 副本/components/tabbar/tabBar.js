Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../api/sh");

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        titleColor: {
            type: String,
            value: "#000000"
        }
    },
    lifetimes: {
        ready: function() {
            this.calculateRect();
        }
    },
    data: {
        paddingTop: 20,
        statusBarHeight: 44
    },
    methods: {
        calculateRect: function() {
            var e = t.sh.getMenuButtonBoundingClientRect(), i = e.top - (44 - e.height) / 2;
            this.setData({
                statusBarHeight: 44,
                paddingTop: i
            });
        }
    }
});