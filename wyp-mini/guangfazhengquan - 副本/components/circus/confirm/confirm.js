Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../../utils"), n = {
    events: {
        _on_confirm_cancel: function() {
            n.hide(this), n.cancel.call(this);
        },
        _on_confirm_ok: function() {
            n.hide(this), n.confirm.call(this);
        }
    },
    show: function(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = t.msg, c = t.cancel, e = void 0 === c ? function() {} : c, s = t.confirm, r = void 0 === s ? function() {} : s;
        this.cancel = e, this.confirm = r, (0, i.setData)(n, "_confirm.show", !0), (0, i.setData)(n, "_confirm.msg", o);
    },
    hide: function(n) {
        (0, i.setData)(n, "_confirm.show", !1);
    }
};

exports.default = n;