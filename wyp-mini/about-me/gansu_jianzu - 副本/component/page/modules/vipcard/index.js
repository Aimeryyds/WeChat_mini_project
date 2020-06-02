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
        receivevip: function(e) {
            this.jump("/pages/cards/receive_card/index?id=" + e.currentTarget.dataset.id);
        }
    }
});