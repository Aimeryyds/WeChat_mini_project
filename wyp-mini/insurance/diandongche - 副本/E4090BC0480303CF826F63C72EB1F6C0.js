function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
        return void 0 === e ? "undefined" : o(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : o(e);
    })(e);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = require("236B77B5480303CF450D1FB2F9F0F6C0.js"), r = {
    top: !1,
    bottom: !1
}, i = function(o) {
    return "boolean" == typeof o ? Object.assign({}, r, {
        top: o,
        bottom: o
    }) : null !== o && "object" === t(o) ? Object.assign({}, r) : "string" == typeof o ? Object.assign({}, r, e({}, o, !0)) : r;
}, a = Behavior({
    properties: {
        safeArea: {
            type: [ Boolean, String, Object ],
            value: !1
        }
    },
    observers: {
        safeArea: function(e) {
            this.setData({
                safeAreaConfig: i(e)
            });
        }
    },
    definitionFilter: function(e) {
        var t = ((0, n.getSystemInfo)() || {}).statusBarHeight, o = (0, n.checkIPhoneX)();
        Object.assign(e.data = e.data || {}, {
            safeAreaConfig: r,
            statusBarHeight: t,
            isIPhoneX: o
        });
    }
});

exports.default = a;