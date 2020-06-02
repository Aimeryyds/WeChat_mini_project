Component({
    externalClasses: [ "i-class" ],
    relations: {
        "../tab-bar-item/index": {
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
        fixed: {
            type: Boolean,
            value: false
        }
    },
    data: {
        list: []
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
            var items = this.getRelationNodes("../tab-bar-item/index");
            var len = items.length;
            if (len > 0) {
                var list = [];
                items.forEach(function(item) {
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                    list.push({
                        key: item.data.key
                    });
                });
                this.setData({
                    list: list
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent("change", {
                key: key
            });
        },
        handleClickItem: function handleClickItem(e) {
            var key = e.currentTarget.dataset.key;
            this.emitEvent(key);
        }
    }
});