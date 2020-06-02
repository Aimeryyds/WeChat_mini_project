var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
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
    attached: function() {
        var e = getApp().globalConfig;
        this.setData(t({}, e));
    },
    methods: {
        makegoods: function(t) {
            var e = t.currentTarget.dataset.storedetail;
            e.description = "", console.log(e, "good"), this.jump("/pages/products/show/show?id=" + e.id);
        }
    }
});