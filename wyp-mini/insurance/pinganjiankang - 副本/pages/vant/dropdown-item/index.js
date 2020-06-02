(0, require("../common/component").VantComponent)({
    field: !0,
    relation: {
        name: "dropdown-menu",
        type: "ancestor",
        current: "dropdown-item",
        linked: function() {
            this.updateDataFromParent();
        }
    },
    props: {
        value: {
            type: null,
            observer: "rerender"
        },
        title: {
            type: String,
            observer: "rerender"
        },
        disabled: Boolean,
        titleClass: {
            type: String,
            observer: "rerender"
        },
        options: {
            type: Array,
            value: [],
            observer: "rerender"
        },
        popupStyle: String
    },
    data: {
        transition: !0,
        showPopup: !1,
        showWrapper: !1,
        displayTitle: ""
    },
    methods: {
        rerender: function() {
            var e = this;
            wx.nextTick(function() {
                e.parent && e.parent.updateItemListData();
            });
        },
        updateDataFromParent: function() {
            if (this.parent) {
                var e = this.parent.data, t = e.overlay, r = e.duration, n = e.activeColor, o = e.closeOnClickOverlay, i = e.direction;
                this.setData({
                    overlay: t,
                    duration: r,
                    activeColor: n,
                    closeOnClickOverlay: o,
                    direction: i
                });
            }
        },
        onOpen: function() {
            this.$emit("open");
        },
        onOpened: function() {
            this.$emit("opened");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClosed: function() {
            this.$emit("closed"), this.setData({
                showWrapper: !1
            });
        },
        onOptionTap: function(e) {
            var t = e.currentTarget.dataset.option.value, r = this.data.value !== t;
            this.setData({
                showPopup: !1,
                value: t
            }), this.$emit("close"), this.rerender(), r && this.$emit("change", t);
        },
        toggle: function(e) {
            var t = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.data.showPopup;
            "boolean" != typeof e && (e = !n), e !== n && (this.setData({
                transition: !r.immediate,
                showPopup: e
            }), e ? this.parent.getChildWrapperStyle().then(function(e) {
                t.setData({
                    wrapperStyle: e,
                    showWrapper: !0
                }), t.rerender();
            }) : this.rerender());
        }
    }
});