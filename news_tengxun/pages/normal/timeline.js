Component({
    properties: {
        title: String,
        desc: String,
        image: String,
        timeList: Array
    },
    data: {
        fold: !0
    },
    methods: {
        tapUnFold: function() {
            this.setData({
                fold: !1
            });
        },
        tapFold: function() {
            this.setData({
                fold: !0
            });
        }
    }
});