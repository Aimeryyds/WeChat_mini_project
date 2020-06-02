var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
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
        data: {
            type: Object,
            observer: "init"
        }
    },
    ready: function() {
        this.init();
        var e = getApp().globalConfig;
        this.setData(t({}, e));
    },
    methods: {
        makeMiaoItem: function(t) {
            var e = t.currentTarget.dataset.miao;
            this.jump("/pages/products/show/show?id=" + e.goodsId);
        },
        handleEndCount: function() {
            var t = this.data.miaoItem;
            3 == t.seckillStatus ? (t.countTime = t.seOverTime, t.seckillStatus = 2) : 2 == t.seckillStatus && (t.countTime = 0, 
            t.seckillStatus = 4), this.setData({
                miaoItem: t
            });
        },
        init: function() {
            var e = this.data.data;
            3 == e.seckillStatus ? e.countTime = e.psOverTime : 2 == e.seckillStatus ? e.countTime = e.seOverTime : e.countTime = 0, 
            this.setData({
                miaoItem: t({}, e)
            });
        }
    }
});