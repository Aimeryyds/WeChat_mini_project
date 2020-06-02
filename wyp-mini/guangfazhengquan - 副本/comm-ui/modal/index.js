function e(e) {
    var t = e.selector, o = e.pageCtx;
    if (!o) {
        var n = getCurrentPages();
        o = n[n.length - 1];
    }
    return o.selectComponent(t);
}

function t() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return n({
        buttons: []
    }, r, e);
}

function o(o, r) {
    var s = t(o), c = e({
        selector: s.selector,
        pageCtx: r
    });
    if (!c) return console.error("无法找到对应的dialog组件，请于页面中注册并在 wxml 中声明 dialog 自定义组件"), 
    Promise.reject({
        type: "component error"
    });
    var u = s.buttons, l = void 0 === u ? [] : u, a = !1;
    if (0 === l.length) {
        if (s.showConfirmButton && l.push({
            type: "confirm",
            text: s.confirmButtonText,
            color: s.confirmButtonColor
        }), s.showCancelButton) {
            var i = {
                type: "cancel",
                text: s.cancelButtonText,
                color: s.cancelButtonColor
            };
            s.buttonsShowVertical ? l.push(i) : l.unshift(i);
        }
    } else a = !0;
    return new Promise(function(e, t) {
        c.setData(n({}, s, {
            buttons: l,
            showCustomBtns: a,
            key: "" + new Date().getTime(),
            show: !0,
            promiseFunc: {
                resolve: e,
                reject: t
            },
            openTypePromiseFunc: null
        }));
    });
}

var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
}, r = require("./data");

o.close = function(o, n) {
    var r = e({
        selector: t(o).selector,
        pageCtx: n
    });
    r && r.setData({
        show: !1,
        promiseFunc: null,
        openTypePromiseFunc: null
    });
}, module.exports = o;