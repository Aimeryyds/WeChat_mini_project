function t() {}

t.prototype.hub = {}, t.prototype.$on = function(t, o, u) {
    var e = this;
    e.hub[t] && e.hub[t][name] && u(e.hub[name].data);
}, t.prototype.$emit = function(t, o, u) {
    var e = this;
    e.hub[t] || (e.hub[t] = {}), e.hub[t][name] = {
        data: u
    };
}, module.exports = new t();