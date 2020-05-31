function t(t) {
    this.mode = e.MODE_8BIT_BYTE, this.data = t;
}

var e = require("./mode");

t.prototype = {
    getLength: function(t) {
        return this.data.length;
    },
    write: function(t) {
        for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
    }
}, module.exports = t;