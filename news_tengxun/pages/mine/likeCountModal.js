Component({
    properties: {
        show: Boolean,
        nickName: String,
        likeCount: String
    },
    data: {},
    methods: {
        tapClose: function() {
            this.setData({
                show: !1
            });
        },
        none: function() {}
    }
});