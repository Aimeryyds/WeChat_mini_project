var r = require("./lib/QRCode"), e = require("./lib/ErrorCorrectLevel"), o = function(o, t) {
    var u = new r((t = t || {}).typeNumber || -1, t.errorCorrectLevel || e.H);
    return u.addData(o), u.make(), u;
};

o.ErrorCorrectLevel = e, module.exports = o;