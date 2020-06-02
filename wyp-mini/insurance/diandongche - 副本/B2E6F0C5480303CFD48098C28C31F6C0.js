function e(e) {
    for (var n = 1; n < arguments.length; n++) if (n % 2) {
        var i = null != arguments[n] ? arguments[n] : {}, r = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
        }))), r.forEach(function(n) {
            t(e, n, i[n]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[n]));
    return e;
}

function t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, i.key, i);
    }
}

function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    return new l(e);
};

var l = function() {
    function i() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        n(this, i), this.fields = e;
    }
    return r(i, [ {
        key: "setFields",
        value: function(e) {
            Object.assign(this.fields, e);
        }
    }, {
        key: "updateFields",
        value: function(e) {
            this.fields = e;
        }
    }, {
        key: "clearField",
        value: function(e) {
            delete this.fields[e];
        }
    }, {
        key: "getValueFromFields",
        value: function(e, t) {
            var n = t[e];
            return n && "value" in n ? n.value : n.initialValue;
        }
    }, {
        key: "getAllFieldsName",
        value: function() {
            var e = this.fields;
            return e ? Object.keys(e) : [];
        }
    }, {
        key: "getField",
        value: function(t) {
            return e({}, this.fields[t], {
                name: t
            });
        }
    }, {
        key: "getFieldValuePropValue",
        value: function(e) {
            var n = e.name, i = e.valuePropName, r = this.getField(n);
            return t({}, i, "value" in r ? r.value : r.initialValue);
        }
    }, {
        key: "getFieldValue",
        value: function(e) {
            return this.getValueFromFields(e, this.fields);
        }
    }, {
        key: "getFieldsValue",
        value: function(e) {
            var t = this;
            return (e || this.getAllFieldsName()).reduce(function(e, n) {
                return e[n] = t.getFieldValue(n), e;
            }, {});
        }
    }, {
        key: "resetFields",
        value: function(e) {
            var t = this.fields;
            return (e || this.getAllFieldsName()).reduce(function(e, n) {
                var i = t[n];
                return i && (e[n] = i.initialValue), e;
            }, {});
        }
    } ]), i;
}();