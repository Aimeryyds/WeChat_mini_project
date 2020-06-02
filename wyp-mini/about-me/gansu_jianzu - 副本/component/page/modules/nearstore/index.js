var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common.js")), o = require("../../../../network/api.js");

Component({
    behaviors: [ t.default ],
    properties: {
        module: {
            type: Object
        },
        serverTime: {
            type: Number
        }
    },
    ready: function() {
        console.log("nearstore", this.data);
    },
    data: {},
    methods: {
        makestore: function(e) {
            var t = e.currentTarget.dataset.store;
            this.jump("/pages/shop/products/products?storeid=" + t.id);
        },
        makestoredetail: function(e) {
            var t = e.currentTarget.dataset, o = t.storedetail;
            t.store;
            this.jump("/pages/products/show/show?id=" + o.id);
        },
        handleServiceClick: function(e) {
            console.log("服务跳门店", e.currentTarget), this.jump("/pages/services/service_detail/index?shopId=" + e.currentTarget.dataset.storeid + "&serviceId=" + e.currentTarget.dataset.storedetail.id);
        },
        handleQuery: function(t) {
            var a = this, r = t.detail, s = r.sort, i = r.query, n = this.data.module;
            console.log(s, i, n), (0, o.queryStoreDatasource)(e({
                pageSize: 20,
                pageNo: 1,
                location: n.options.location,
                dataType: n.options.dataType,
                dsId: n.options.dsId
            }, i, {
                sort: s
            })).then(function(e) {
                n.data = e.data.data, a.setData({
                    module: n
                }), console.log(a.data.module, "this");
            }).catch(function(e) {
                console.log(e);
            });
        }
    }
});