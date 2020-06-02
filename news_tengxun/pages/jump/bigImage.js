Component({
    properties: {
        hasRead: Boolean,
        isExclusive: Boolean,
        title: String,
        intro: String,
        imageSrc: String,
        imageCount: Number,
        isVideo: Boolean,
        playCount: Number,
        durationStr: String,
        vid: String,
        _uid: String,
        smallScreen: Boolean
    },
    data: {},
    attached: function() {},
    methods: {
        none: function() {},
        tapVideo: function() {
            this.triggerEvent("tapVideo");
        }
    }
});