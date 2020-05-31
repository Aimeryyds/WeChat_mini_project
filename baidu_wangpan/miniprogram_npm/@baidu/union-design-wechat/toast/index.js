var t = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
        var a = arguments[n];
        for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
    }
    return t;
}, n = {
    visible: !1,
    content: "Hi, is toast!",
    icon: "",
    duration: 2e3,
    mask: !0,
    place: "center",
    offset: "40"
}, a = null;

Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    data: t({}, n),
    methods: {
        handleShow: function(n) {
            var e = this, i = n.duration, o = void 0 === i ? 2e3 : i, s = n.icon, l = void 0 === s ? "" : s;
            this.setData(t({}, n, {
                icon: l,
                duration: o,
                visible: !0
            })), a && clearTimeout(a), 0 !== o && (a = setTimeout(function() {
                e.handleHide(), a = null;
            }, o));
        },
        handleUpdate: function(t) {
            var n = t.content;
            this.setData({
                content: n
            });
        },
        closeToast: function() {
            "loading" !== this.data.icon && this.handleHide();
        },
        handleHide: function() {
            this.setData(t({}, n));
        }
    }
});