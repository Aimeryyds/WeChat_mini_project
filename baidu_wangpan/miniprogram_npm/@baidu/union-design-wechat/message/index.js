var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }
    return t;
}, e = {
    type: "default",
    content: "",
    height: 60,
    duration: 3e3,
    visible: !1,
    always: !1,
    offset: 0,
    place: "top",
    icon: "",
    iconImage: "",
    showClose: !1,
    background: ""
};

Component({
    data: t({}, e),
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    methods: {
        handleShow: function(e) {
            var i = this, o = e.type, n = void 0 === o ? "default" : o, a = e.duration, s = void 0 === a ? 3e3 : a, l = e.always, c = void 0 !== l && l, d = e.content, r = e.offset, h = void 0 === r ? 0 : r, u = e.place, v = void 0 === u ? "top" : u, f = e.icon, p = void 0 === f ? "" : f, m = e.showClose, g = void 0 !== m && m;
            this.setData(t({}, e, {
                type: n,
                duration: s,
                always: c,
                visible: !0,
                offset: h,
                place: v,
                icon: p,
                showClose: g
            })), this.timer && clearTimeout(this.timer), c || (this.timer = setTimeout(function() {
                i.handleHide(d), i.timer = null;
            }, s));
        },
        handleUpdate: function(e) {
            var i = this, o = e.content, n = e.duration, a = e.icon, s = void 0 === a ? "" : a, l = e.iconImage, c = void 0 === l ? "" : l;
            this.setData(t({}, e, {
                icon: s,
                iconImage: c
            })), n && (this.timer = setTimeout(function() {
                i.handleHide(o), i.timer = null;
            }, n));
        },
        handleHide: function() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.setData(t({}, e, {
                content: i
            }));
        },
        handleTap: function(t) {
            this.triggerEvent("click");
        },
        handleClose: function(t) {
            this.triggerEvent("close");
        }
    }
});