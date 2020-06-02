Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../api/sh");

Component({
    properties: {
        currentIndex: {
            type: Number,
            value: 0
        },
        list: {
            type: Array,
            value: []
        }
    },
    lifetimes: {
        ready: function() {
            this.calcPosition();
        }
    },
    data: {
        windowWidth: t.sh.getSystemInfoSync().windowWidth,
        currentLeft: 0,
        posArr: []
    },
    methods: {
        clickMenu: function(t) {
            this.setData({
                currentLeft: this.data.posArr[t.currentTarget.dataset.index]
            }), this.triggerEvent("handleClick", {
                current: t.currentTarget.dataset.index
            });
        },
        calcPosition: function() {
            var e = this, r = [];
            this.properties.list.forEach(function(i, n) {
                t.sh.createSelectorQuery().in(e).select("#menu-" + n).boundingClientRect(function(t) {
                    r[n] = t.left - e.data.windowWidth / 2 + 30, n == e.data.list.length - 1 && (e.data.posArr = r);
                }).exec();
            });
        }
    }
});