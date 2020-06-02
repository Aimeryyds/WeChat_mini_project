Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../common/utils"), t = {
    type: "text",
    mask: !1,
    message: "",
    show: !0,
    zIndex: 1e3,
    duration: 2e3,
    position: "middle",
    forbidClick: !1,
    loadingType: "circular",
    selector: "#van-toast"
}, n = [], s = Object.assign({}, t);

function o(t) {
    return (0, e.isObj)(t) ? t : {
        message: t
    };
}

function i(e) {
    var t, i = Object.assign(Object.assign({}, s), o(e)), r = (i.context || (t = getCurrentPages())[t.length - 1]).selectComponent(i.selector);
    if (r) return delete i.context, delete i.selector, r.clear = function() {
        r.setData({
            show: !1
        }), i.onClose && i.onClose();
    }, n.push(r), r.setData(i), clearTimeout(r.timer), i.duration > 0 && (r.timer = setTimeout(function() {
        r.clear(), n = n.filter(function(e) {
            return e !== r;
        });
    }, i.duration)), r;
    console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确");
}

var r = function(e) {
    return function(t) {
        return i(Object.assign({
            type: e
        }, o(t)));
    };
};

i.loading = r("loading"), i.success = r("success"), i.fail = r("fail"), i.clear = function() {
    n.forEach(function(e) {
        e.clear();
    }), n = [];
}, i.setDefaultOptions = function(e) {
    Object.assign(s, e);
}, i.resetDefaultOptions = function() {
    s = Object.assign({}, t);
};

var a = i;

exports.default = a;