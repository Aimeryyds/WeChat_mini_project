Component({
    properties: {
        route: String
    },
    data: {},
    ready: function() {
        var e = this;
        this.observer = this.createIntersectionObserver(), this.observer.relativeToViewport().observe(".fix-dot", function() {
            e.observer.disconnect(), e.setData({
                hideFixDot: !0
            });
        });
    },
    methods: {}
});