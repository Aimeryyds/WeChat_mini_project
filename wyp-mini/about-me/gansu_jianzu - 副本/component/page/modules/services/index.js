var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common.js"));

Component({
    behaviors: [ t.default ],
    properties: {
        module: {
            type: Object
        }
    },
    attached: function() {
        var t = getApp().globalConfig;
        this.setData(e({}, t));
    },
    methods: {
        handleServiceClick: function(e) {
            console.log("服务跳门店", e.currentTarget), this.jump("/pages/services/service_detail/index?shopId=" + e.currentTarget.dataset.storeid + "&serviceId=" + e.currentTarget.dataset.storedetail.id);
        }
    }
});