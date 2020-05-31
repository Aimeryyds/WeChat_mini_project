Component({
    properties: {
        multiFileInfo: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        clickItem: function(t) {
            this.triggerEvent("clickitem", t);
        }
    }
});