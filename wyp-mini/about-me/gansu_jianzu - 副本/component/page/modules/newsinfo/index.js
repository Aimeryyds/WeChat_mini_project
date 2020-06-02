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
        handlenews: function(e) {
            this.jump("/pages/sources/newsinfo/newsinfodetail?id=" + e.currentTarget.dataset.id);
        }
    }
});