function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var o = null != arguments[t] ? arguments[t] : {}, n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
        }))), n.forEach(function(t) {
            r(e, t, o[t]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
    return e;
}

function r(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function o(e) {
    return i(e) || a(e) || n();
}

function n() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function a(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function i(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var s = e(require("9D794594480303CFFB1F2D937031F6C0.js")), u = e(require("03256F32480303CF6543073505B1F6C0.js")), l = e(require("E4090BC0480303CF826F63C72EB1F6C0.js")), c = e(require("D6C19F46480303CFB0A7F7411AC1F6C0.js")), f = e(require("3FC616F3480303CF59A07EF4EC61F6C0.js")), d = e(require("8C75AE41480303CFEA13C646A321F6C0.js")), p = wx.getSystemInfoSync(), b = p.platform, h = p.SDKVersion;

"devtools" === b && (0, d.default)(h, "2.6.6") < 0 && wx && wx.showModal && wx.showModal({
    title: "提示",
    content: "当前基础库版本（".concat(h, "）过低，无法使用 Wux Weapp 组件库，请更新基础库版本 >=").concat("2.6.6", " 后重试。")
});

exports.default = function(e) {
    var r = 0 < arguments.length && void 0 !== e ? e : {};
    return r.externalClasses = [ "wux-class", "wux-hover-class" ].concat(o(r.externalClasses = r.externalClasses || [])), 
    r.behaviors = [ u.default, c.default ].concat(o(r.behaviors = r.behaviors || []), [ s.default ]), 
    r.useSafeArea && (r.behaviors = [].concat(o(r.behaviors), [ l.default ]), delete r.useSafeArea), 
    r.useFunc && (r.behaviors = [].concat(o(r.behaviors), [ f.default ]), delete r.useFunc), 
    r.useField && (r.behaviors = [].concat(o(r.behaviors), [ "wx://form-field" ]), delete r.useField), 
    r.useExport && (r.behaviors = [].concat(o(r.behaviors), [ "wx://component-export" ]), 
    r.methods = t({
        export: function() {
            return this;
        }
    }, r.methods), delete r.useExport), r.options = t({
        multipleSlots: !0,
        addGlobalClass: !0
    }, r.options), Component(r);
};