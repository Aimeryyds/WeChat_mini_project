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
    }
});