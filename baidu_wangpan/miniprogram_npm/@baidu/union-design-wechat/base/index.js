function e(e) {
    var t = getCurrentPages(), n = t[t.length - 1].selectComponent(e);
    return n || (console.error("UnionDesign Error:", "未找到指定组件"), null);
}

function t() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.selector;
    e(void 0 === n ? "#u-toast" : n).handleShow(t);
}

function n(t) {
    var n = t.selector;
    e(void 0 === n ? "#u-message" : n).handleShow(t);
}

t.hide = function() {
    e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#u-toast").handleHide();
}, t.update = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.selector;
    e(void 0 === n ? "#u-toast" : n).handleUpdate(t);
}, n.hide = function() {
    e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#u-message").handleHide();
}, n.update = function(t) {
    var n = t.selector;
    e(void 0 === n ? "#u-message" : n).handleUpdate(t);
}, module.exports = {
    $toast: t,
    $Message: n
};