Component({
    externalClasses: [ "i-class" ],
    relations: {
        "../tab/index": {
            type: "child",
            linked: function linked() {
                this.changeCurrent();
            },
            linkChanged: function linkChanged() {
                this.changeCurrent();
            },
            unlinked: function unlinked() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: String,
            value: "",
            observer: "changeCurrent"
        },
        color: {
            type: String,
            value: ""
        },
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
            var items = this.getRelationNodes("../tab/index");
            var len = items.length;
            if (len > 0) {
                items.forEach(function(item) {
                    item.changeScroll(_this.data.scroll);
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent("change", {
                key: key
            });
        }
    }
});