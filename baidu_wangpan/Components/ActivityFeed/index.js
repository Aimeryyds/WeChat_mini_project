var t = wx.ENV.staticPath;

Component({
    properties: {
        activities: {
            type: Array,
            value: []
        }
    },
    data: {
        closeIcon: t + "/feed-close.png"
    },
    methods: {
        handleActivityClick: function(t) {
            var e = t.currentTarget.dataset.activity;
            this.triggerEvent("activityClick", e);
        },
        handleClose: function() {
            this.triggerEvent("close");
        }
    }
});