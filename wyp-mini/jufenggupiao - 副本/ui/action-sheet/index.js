Component({
    externalClasses: [ "i-class", "i-class-mask", "i-class-header" ],
    options: {
        multipleSlots: true
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        actions: {
            type: Array,
            value: []
        }
    },
    methods: {
        handleClickMask: function handleClickMask() {
            if (!this.data.maskClosable) return;
            this.handleClickCancel();
        },
        handleClickItem: function handleClickItem(_ref) {
            var _ref$currentTarget = _ref.currentTarget, currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;
            var dataset = currentTarget.dataset || {};
            var index = dataset.index;
            this.triggerEvent("click", {
                index: index
            });
        },
        handleClickCancel: function handleClickCancel() {
            this.triggerEvent("cancel");
        }
    }
});