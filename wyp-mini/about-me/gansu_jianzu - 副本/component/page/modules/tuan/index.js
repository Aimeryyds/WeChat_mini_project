var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        module: {
            type: Object
        }
    },
    ready: function() {
        var e = getApp().globalConfig;
        this.setData(t({}, e));
    },
    methods: {
        makeTuan: function(t) {
            var e = t.currentTarget.dataset.tuan;
            this.jump("/pages/products/show/show?id=" + e.goodsId);
        }
    }
});