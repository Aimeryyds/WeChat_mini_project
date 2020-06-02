module.exports = {
    debounce: function(t, e) {
        var u, n = e || 300;
        return function() {
            clearTimeout(u);
            var e = this, o = arguments;
            u = setTimeout(function() {
                t.call(e, o);
            }, n);
        };
    }
};