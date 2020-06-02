var t = require("../common/component"), e = function() {
    return new Promise(function(t) {
        return setTimeout(t, 20);
    });
};

(0, t.VantComponent)({
    classes: [ "title-class", "content-class" ],
    relation: {
        name: "collapse",
        type: "ancestor",
        current: "collapse-item"
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: !0
        },
        isLink: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        contentHeight: 0,
        expanded: !1,
        transition: !1
    },
    mounted: function() {
        var t = this;
        this.updateExpanded().then(e).then(function() {
            var e = {
                transition: !0
            };
            t.data.expanded && (e.contentHeight = "auto"), t.setData(e);
        });
    },
    methods: {
        updateExpanded: function() {
            if (!this.parent) return Promise.resolve();
            var t = this.parent.data, e = t.value, n = t.accordion, a = this.parent.children, i = void 0 === a ? [] : a, o = this.data.name, s = i.indexOf(this), r = null == o ? s : o, c = n ? e === r : (e || []).some(function(t) {
                return t === r;
            }), l = [];
            return c !== this.data.expanded && l.push(this.updateStyle(c)), l.push(this.set({
                index: s,
                expanded: c
            })), Promise.all(l);
        },
        updateStyle: function(t) {
            var n = this;
            return this.getRect(".van-collapse-item__content").then(function(t) {
                return t.height;
            }).then(function(a) {
                return t ? n.set({
                    contentHeight: a ? "".concat(a, "px") : "auto"
                }) : n.set({
                    contentHeight: "".concat(a, "px")
                }).then(e).then(function() {
                    return n.set({
                        contentHeight: 0
                    });
                });
            });
        },
        onClick: function() {
            if (!this.data.disabled) {
                var t = this.data, e = t.name, n = t.expanded, a = this.parent.children.indexOf(this), i = null == e ? a : e;
                this.parent.switch(i, !n);
            }
        },
        onTransitionEnd: function() {
            this.data.expanded && this.setData({
                contentHeight: "auto"
            });
        }
    }
});