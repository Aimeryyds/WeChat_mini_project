Component({
    behaviors: [],
    properties: {
        modules: {
            type: Array,
            value: []
        },
        serverTime: {
            type: Number
        }
    },
    data: {},
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {
        console.log("-------page----index----------", this.data.modules);
    },
    methods: {}
});