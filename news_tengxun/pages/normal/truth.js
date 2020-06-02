Component({
    properties: {
        content: Array
    },
    data: {
        fold: !0
    },
    methods: {
        tapContent: function() {
            this.setData({
                fold: !this.data.fold
            });
        }
    }
});