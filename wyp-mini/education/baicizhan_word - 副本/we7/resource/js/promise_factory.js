Object.defineProperty(exports, "__esModule", {
    value: !0
});

var PromiseFactory = function(t) {
    return new Promise(function(e, r) {
        t && t(e, r);
    });
};

exports.default = PromiseFactory;