(0, require("../common/component").VantComponent)({
    classes: [ "avatar-class", "title-class", "row-class" ],
    props: {
        row: {
            type: Number,
            value: 0,
            observer: function(a) {
                this.setData({
                    rowArray: Array.from({
                        length: a
                    })
                });
            }
        },
        title: Boolean,
        avatar: Boolean,
        loading: {
            type: Boolean,
            value: !0
        },
        animate: {
            type: Boolean,
            value: !0
        },
        avatarSize: {
            type: String,
            value: "32px"
        },
        avatarShape: {
            type: String,
            value: "round"
        },
        titleWidth: {
            type: String,
            value: "40%"
        },
        rowWidth: {
            type: null,
            value: "100%",
            observer: function(a) {
                this.setData({
                    isArray: a instanceof Array
                });
            }
        }
    },
    data: {
        isArray: !1,
        rowArray: []
    }
});