Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../radio/index": {
            type: "child",
            linked: function() {
                this.changeCurrent();
            },
            linkChanged: function() {
                this.changeCurrent();
            },
            unlinked: function() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: String,
            value: "",
            observer: "changeCurrent"
        }
    },
    methods: {
        changeCurrent: function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.current, e = this.getRelationNodes("../radio/index");
            e.length > 0 && e.forEach(function(e) {
                e.changeCurrent(n === e.data.value);
            });
        },
        emitEvent: function(n) {
            this.triggerEvent("change", n);
        }
    }
});