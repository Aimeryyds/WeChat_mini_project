var e = 0;

module.exports = {
    requestAnimationFrame: function(t) {
        var n = new Date().getTime(), a = Math.max(0, 16.7 - (n - e));
        return e = n + a, setTimeout(function() {
            t(n + a, e);
        }, a);
    },
    cancelAnimationFrame: function(e) {
        clearTimeout(e);
    }
};