Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../tabbar/index": {
            type: "parent"
        }
    },
    properties: {
        icon: {
            type: String,
            value: ""
        },
        currentIcon: {
            type: String,
            value: ""
        },
        img: {
            type: String,
            value: ""
        },
        currentImg: {
            type: String,
            value: ""
        },
        key: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        fontSize: {
            type: Number,
            value: 24
        },
        color: {
            type: String,
            value: ""
        },
        dot: {
            type: Boolean,
            value: !1
        },
        count: {
            type: Number,
            value: 0
        }
    },
    data: {
        current: !1,
        currentColor: ""
    },
    methods: {
        changeCurrent: function(e) {
            this.setData({
                current: e
            });
        },
        changeCurrentColor: function(e) {
            this.setData({
                currentColor: e
            });
        }
    }
});