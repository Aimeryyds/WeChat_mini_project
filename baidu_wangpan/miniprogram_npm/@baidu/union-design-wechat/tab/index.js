Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../tabs/index": {
            type: "parent"
        }
    },
    properties: {
        key: {
            type: String,
            value: ""
        },
        title: {
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
        currentColor: "",
        scroll: !1
    },
    methods: {
        changeCurrent: function(t) {
            this.setData({
                current: t
            });
        },
        changeCurrentColor: function(t) {
            this.setData({
                currentColor: t
            });
        },
        changeScroll: function(t) {
            this.setData({
                scroll: t
            });
        },
        handleClickItem: function() {
            this.getRelationNodes("../tabs/index")[0].emitEvent(this.data.key);
        }
    }
});