var e = require("../../utils/util");

module.exports = {
    dateParse: function(t) {
        if (e.isOptStrNull(t)) return NaN;
        try {
            var t = parseInt(t.replace(/[^0-9]/gi, "")), r = new Date().getFullYear();
            return new Date(r + "-01-01").getTime() > t ? new Date(t).toJSON().slice(0, 10) : new Date(t).toJSON().slice(5, 10);
        } catch (e) {
            return NaN;
        }
    }
};