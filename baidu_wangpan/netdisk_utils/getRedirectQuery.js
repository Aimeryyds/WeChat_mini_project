module.exports = {
    getQuery: function(e) {
        return Object.keys(e).reduce(function(t, r, u) {
            return t += (u ? "|" : "") + r + ":" + e[r];
        }, "");
    }
};