Component({
    properties: {
        item: {
            type: Object,
            value: null
        },
        pageName: {
            type: String,
            value: ""
        }
    },
    data: {
        moreThreeLine: !1
    },
    methods: {
        toggletitle: function(e) {
            var t = e.detail.moreOneLine;
            this.setData({
                moreThreeLine: t > 2
            });
        },
        tapEven: function(e) {
            this.triggerEvent("tapEven");
        },
        noInterestTap: function(e) {
            this.triggerEvent("noInterestTap");
        },
        formSubmit: function(e) {}
    }
});