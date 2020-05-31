module.exports = {
    WeModal: function() {
        function t() {
            var t = getCurrentPages(), e = t[t.length - 1];
            return this.__page = e, this.__timeout = null, e.wemodal = this, this;
        }
        return t.prototype.show = function(t) {
            var e = this.__page;
            clearTimeout(this.__timeout), e.setData({
                __wemodal__: t,
                "__wemodal__.showModal": !0
            });
        }, t.prototype.hide = function() {
            this.__page.setData({
                "__wemodal__.showModal": !1
            });
        }, new t();
    }
};