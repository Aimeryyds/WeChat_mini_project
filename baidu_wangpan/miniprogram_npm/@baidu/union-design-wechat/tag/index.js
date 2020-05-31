Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        name: {
            type: String,
            value: ""
        },
        checkable: {
            type: Boolean,
            value: !1
        },
        checked: {
            type: Boolean,
            value: !0
        },
        color: {
            type: String,
            value: "default"
        },
        type: {
            type: String,
            value: "dot"
        }
    },
    methods: {
        tapTag: function() {
            var e = this.data;
            if (e.checkable) {
                var a = !e.checked;
                this.triggerEvent("change", {
                    name: e.name || "",
                    checked: a
                });
            }
        }
    }
});