function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = module.exports = {};

Object.defineProperty(r, "__esModule", {
    value: !0
}), r._createPage = r.PropTypes = r.Component = void 0;

var o = e(require("../babel-runtime/core-js/promise.js")), t = e(require("../babel-runtime/helpers/typeof.js")), n = e(require("../babel-runtime/core-js/object/keys.js")), a = e(require("./component.js")), s = e(require("./prop-types.js")), u = e(require("./create-page.js")), i = {
    clearStorage: 1,
    hideToast: 1,
    showNavigationBarLoading: 1,
    hideNavigationBarLoading: 1,
    drawCanvas: 1,
    canvasToTempFilePath: 1,
    hideKeyboard: 1
}, p = {
    wx: wx,
    get app() {
        return getApp();
    },
    get currentPages() {
        return getCurrentPages();
    }
};

Object.defineProperty(p, "Component", {
    get: function() {
        console.error("labrador 0.6版本之后废弃了 wx.Component，请使用 \"import wx, { Component, PropsTypes } from 'labrador'\" 代替 \"import wx from 'labrador'\"");
    }
}), Object.defineProperty(p, "PropsTypes", {
    get: function() {
        console.error("labrador 0.6版本之后废弃了 wx.PropsTypes，请使用 \"import wx, { Component, PropsTypes } from 'labrador'\" 代替 \"import wx from 'labrador'\"");
    }
}), (0, n.default)(wx).forEach(function(e) {
    i[e] || /^(on|create|stop|pause|close)/.test(e) || /\w+Sync$/.test(e) ? p[e] = function() {
        var r = wx[e].apply(wx, arguments);
        return r || (r = {}), r && "object" === (void 0 === r ? "undefined" : (0, t.default)(r)) && (r.then = function() {
            console.warn("wx." + e + " is not a async function, you should not use await ");
        }), r;
    } : p[e] = function(r) {
        return r = r || {}, new o.default(function(o, t) {
            r.success = o, r.fail = function(e) {
                t(e && e.errMsg ? new Error(e.errMsg) : e);
            }, wx[e](r);
        });
    };
}), r.default = p, r.Component = a.default, r.PropTypes = s.default, r._createPage = u.default;