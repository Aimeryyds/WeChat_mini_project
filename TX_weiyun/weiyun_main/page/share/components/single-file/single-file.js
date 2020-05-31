Component({
    properties: {
        singleFile: {
            type: String,
            value: ""
        },
        singleFileInfo: {
            type: Object,
            value: {}
        },
        shareNickName: {
            type: String,
            value: ""
        },
        previewHeight: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        clickItem: function(e) {
            this.triggerEvent("clickitem", e);
        }
    }
});