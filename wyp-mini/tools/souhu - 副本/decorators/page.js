var t = function() {
    var t = function(o, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, o) {
            t.__proto__ = o;
        } || function(t, o) {
            for (var n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
        })(o, n);
    };
    return function(o, n) {
        function e() {
            this.constructor = o;
        }
        t(o, n), o.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, 
        new e());
    };
}();

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = require("./component");

exports.PageDecorator = function() {
    return function(t) {
        Page(new Proxy(new t.prototype.constructor(), {
            get: function(t, o) {
                return Reflect.get(t, o);
            }
        }));
    };
};

var n = function(o) {
    function n() {
        return null !== o && o.apply(this, arguments) || this;
    }
    return t(n, o), n.prototype.onLoad = function(t) {}, n.prototype.onShow = function() {}, 
    n.prototype.onReady = function() {}, n.prototype.onHide = function() {}, n.prototype.onUnload = function() {}, 
    n;
}(o.ComponentInstanceMethod);

exports.AbstractPage = n;