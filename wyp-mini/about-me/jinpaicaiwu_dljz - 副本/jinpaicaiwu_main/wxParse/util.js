function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), u = e.getHours(), i = e.getMinutes(), a = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ u, i, a ].map(t).join(":");
    },
    formatTime2: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(t).join("-");
    },
    formatTime3: function(e) {
        return [ e.getFullYear(), e.getMonth() + 3, e.getDate() ].map(t).join("-");
    }
};