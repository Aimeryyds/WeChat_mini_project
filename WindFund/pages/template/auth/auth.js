module.exports = {
    Auth: function() {
        function t() {
            var t = getCurrentPages(), _ = t[t.length - 1];
            return this.__page = _, this.__timeout = null, _.authmodal = this, _.__AuthModal__Submit = function(t) {
                console.log("auth submit");
            }, _.__AuthModal__Cancel = function(t) {
                console.log("auth submit");
            }, this;
        }
        return t.prototype.show = function(t) {
            var _ = this.__page;
            clearTimeout(this.__timeout), _.setData({
                __authmodal__: t,
                "__authmodal__.showModal": !0
            });
        }, t.prototype.hide = function() {
            this.__page.setData({
                "__authmodal__.showModal": !1
            });
        }, t.prototype.submit = function() {
            this.__page.__AuthModal__Submit();
        }, t.prototype.cancel = function() {
            this.__page.__AuthModal__cancel();
        }, new t();
    }
};