Component({
    externalClasses: [ "u-class", "u-class-mask" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        visible: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        showOk: {
            type: Boolean,
            value: !0
        },
        showCancel: {
            type: Boolean,
            value: !0
        },
        okText: {
            type: String,
            value: "确定"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        actions: {
            type: Array,
            value: []
        },
        actionMode: {
            type: String,
            value: "horizontal"
        }
    },
    methods: {
        handleClickItem: function(e) {
            var t = e.currentTarget, a = ((void 0 === t ? {} : t).dataset || {}).index;
            this.triggerEvent("click", {
                index: a
            });
        },
        handleClickOk: function() {
            this.triggerEvent("ok");
        },
        handleClickCancel: function() {
            this.triggerEvent("cancel");
        }
    }
});