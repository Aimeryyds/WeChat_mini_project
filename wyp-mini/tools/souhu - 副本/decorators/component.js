var t = function() {
    var t = function(n, r) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, n) {
            t.__proto__ = n;
        } || function(t, n) {
            for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
        })(n, r);
    };
    return function(n, r) {
        function o() {
            this.constructor = n;
        }
        t(n, r), n.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, 
        new o());
    };
}();

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ComponentDecorator = function() {
    return function(t) {
        Component(new Proxy(new t.prototype.constructor(), {
            get: function(t, n) {
                return t[n];
            }
        }));
    };
}, exports.Observer = function(t) {
    return function(n, r, o) {
        var e = r;
        t && t.key && (e = t.key);
        var u = n[r];
        n.observers || (n.observers = {}), n.observers[e] = function(t) {
            u.call(this, t);
        }, delete n[r];
    };
}, exports.Prop = function(t) {
    return function(n, r) {
        n.__properties__ || (n.__properties__ = {}), n.__properties__[r] = t, n.properties = new Proxy(n.__properties__, {
            get: function(t, n) {
                return console.log(t), console.log(n), t[n];
            }
        }), n[r] = t ? t.value || "" : "";
    };
}, exports.Data = function() {
    return function(t, n) {
        var r;
        t.data || (t.data = {}), t.data = (r = {}, r[n] = t[n], r), console.log(t);
    };
};

var n = function(n) {
    function r() {
        return null !== n && n.apply(this, arguments) || this;
    }
    return t(r, n), r;
}(function() {
    return function() {};
}());

exports.OtherOption = n;

var r = function(n) {
    function r() {
        return null !== n && n.apply(this, arguments) || this;
    }
    return t(r, n), r;
}(n);

exports.ComponentInstanceMethod = r;

var o = function(n) {
    function r() {
        return null !== n && n.apply(this, arguments) || this;
    }
    return t(r, n), r;
}(r);

exports.ComponentCreation = o;