(0, require("../common/component").VantComponent)({
    relation: {
        name: "index-bar",
        type: "ancestor",
        current: "index-anchor"
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: !1,
        wrapperStyle: "",
        anchorStyle: ""
    },
    methods: {
        scrollIntoView: function(t) {
            var n = this;
            this.getBoundingClientRect().then(function(e) {
                wx.pageScrollTo({
                    duration: 0,
                    scrollTop: t + e.top - n.parent.data.stickyOffsetTop
                });
            });
        },
        getBoundingClientRect: function() {
            return this.getRect(".van-index-anchor-wrapper");
        }
    }
});