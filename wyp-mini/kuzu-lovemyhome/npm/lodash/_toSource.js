module.exports = {};

var t = Function.prototype.toString;

module.exports = function(r) {
    if (null != r) {
        try {
            return t.call(r);
        } catch (t) {}
        try {
            return r + "";
        } catch (t) {}
    }
    return "";
};