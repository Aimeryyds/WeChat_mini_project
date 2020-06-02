(0, require("../common/component").VantComponent)({
    relation: {
        name: "sidebar-item",
        type: "descendant",
        current: "sidebar",
        linked: function() {
            this.setActive(this.data.activeKey);
        },
        unlinked: function() {
            this.setActive(this.data.activeKey);
        }
    },
    props: {
        activeKey: {
            type: Number,
            value: 0,
            observer: "setActive"
        }
    },
    beforeCreate: function() {
        this.currentActive = -1;
    },
    methods: {
        setActive: function(e) {
            var t = this.children, i = this.currentActive;
            if (!t.length) return Promise.resolve();
            this.currentActive = e;
            var r = [];
            return i !== e && t[i] && r.push(t[i].setActive(!1)), t[e] && r.push(t[e].setActive(!0)), 
            Promise.all(r);
        }
    }
});