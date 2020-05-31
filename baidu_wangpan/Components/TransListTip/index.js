Component({
    properties: {
        tip: {
            type: String,
            value: ""
        },
        btn: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        handleClose: function() {
            this.triggerEvent("close");
        }
    }
});