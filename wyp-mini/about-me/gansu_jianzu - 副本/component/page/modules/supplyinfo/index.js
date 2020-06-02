var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        module: {
            type: Object
        }
    },
    methods: {
        handlesupply: function(e) {
            this.jump("/pages/gongqiu/supplyDetail/index?id=" + e.currentTarget.dataset.id);
        }
    }
});