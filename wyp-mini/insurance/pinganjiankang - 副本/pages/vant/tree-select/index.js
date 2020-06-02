(0, require("../common/component").VantComponent)({
    classes: [ "main-item-class", "content-item-class", "main-active-class", "content-active-class", "main-disabled-class", "content-disabled-class" ],
    props: {
        items: {
            type: Array,
            observer: "updateSubItems"
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: "updateSubItems"
        },
        height: {
            type: [ Number, String ],
            value: 300
        },
        max: {
            type: Number,
            value: 1 / 0
        }
    },
    data: {
        subItems: []
    },
    methods: {
        onSelectItem: function(t) {
            var e = t.currentTarget.dataset.item, a = Array.isArray(this.data.activeId), i = a && this.data.activeId.length >= this.data.max, s = a ? this.data.activeId.indexOf(e.id) > -1 : this.data.activeId === e.id;
            e.disabled || i && !s || this.$emit("click-item", e);
        },
        onClickNav: function(t) {
            var e = t.detail;
            this.data.items[e].disabled || this.$emit("click-nav", {
                index: e
            });
        },
        updateSubItems: function() {
            var t = this.data, e = (t.items[t.mainActiveIndex] || {}).children, a = void 0 === e ? [] : e;
            return this.set({
                subItems: a
            });
        }
    }
});