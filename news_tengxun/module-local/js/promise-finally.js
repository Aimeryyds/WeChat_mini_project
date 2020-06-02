Promise.prototype.finally = function(t) {
    var n = this.constructor;
    return this.then(function(r) {
        return n.resolve(t()).then(function() {
            return r;
        });
    }, function(r) {
        return n.resolve(t()).then(function() {
            throw r;
        });
    });
};