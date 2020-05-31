var t = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
}, o = require("../../../netdisk_utils/common.js");

Component({
    data: {
        isShow: !1,
        bgSrc: "",
        color: "#f84242",
        title: "",
        content: "",
        bgColor: ""
    },
    methods: {
        show: function(o) {
            this.setData(t({}, o, {
                isShow: !0
            }));
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        _touch: function(t) {},
        formSubmit: function(t) {
            return (0, o.generateFormId)(t);
        }
    }
});