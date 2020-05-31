var e = wx.ENV.staticPath;

Component({
    properties: {
        index: {
            type: Number,
            value: 0
        },
        range: {
            type: Array
        },
        label: {
            type: String,
            value: ""
        },
        unit: {
            type: String,
            value: ""
        }
    },
    externalClasses: [ "label-class" ],
    data: {
        arrowUpIcon: e + "/arrow-up.png",
        arrowDownIcon: e + "/arrow-down.png"
    },
    attached: function() {},
    methods: {
        pickerChange: function(e) {
            var a = e.detail.value;
            this.triggerEvent("change", {
                value: a
            });
        }
    }
});