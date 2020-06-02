Component({
    properties: {
        store: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        makePhone: function(t) {
            console.log(t.target.dataset), this.triggerEvent("handlephone", {
                data: t.target.dataset.phone
            });
        }
    }
});