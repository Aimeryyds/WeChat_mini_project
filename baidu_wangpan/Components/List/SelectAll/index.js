Component({
    properties: {
        isSelectedAll: {
            type: Number,
            optionalTypes: [ Boolean ],
            value: 0
        },
        count: {
            type: Number,
            value: 0
        }
    },
    methods: {
        selectedAll: function() {
            this.triggerEvent("selectAll");
        },
        goback: function() {
            this.triggerEvent("goback");
        }
    }
});