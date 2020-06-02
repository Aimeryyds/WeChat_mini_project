Component({
    properties: {},
    data: {
        flag: !0
    },
    methods: {
        show: function() {
            this.setData({
                flag: !1
            });
        },
        cancel: function() {
            this.setData({
                flag: !0
            });
        }
    }
});