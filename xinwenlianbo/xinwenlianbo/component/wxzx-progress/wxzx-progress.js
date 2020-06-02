Component({
    properties: {
        percent: {
            type: [ Number, String ],
            value: 50
        },
        width: {
            type: [ Number, String ],
            value: 700
        },
        strokeWidth: {
            type: [ Number, String ],
            value: 10
        },
        activeColor: {
            type: [ String, Array ],
            value: "#949494"
        },
        backgroundColor: {
            type: String,
            value: "#e5e5e5"
        },
        radius: {
            type: [ Number, String ],
            value: 5
        },
        orientation: {
            type: [ Number, String ],
            value: "landscape"
        },
        portraitOrientation: {
            type: [ Number, String ],
            value: "bottom"
        }
    },
    attached: function() {
        var t = this.data.activeColor;
        ~t.indexOf(",") && this.setData({
            activeLineColor: t.split(",")
        });
    }
});