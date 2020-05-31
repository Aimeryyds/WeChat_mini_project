Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../tab/index": {
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
        },
        color: {
            type: String,
            value: ""
        },
        scroll: {
            type: Boolean,
            value: !1
        },
        fixed: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        changeCurrent: function() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.current, t = this.getRelationNodes("../tab/index");
            t.length > 0 && t.forEach(function(t) {
                t.changeScroll(e.data.scroll), t.changeCurrent(t.data.key === n), t.changeCurrentColor(e.data.color);
            });
        },
        emitEvent: function(e) {
            this.triggerEvent("change", {
                key: e
            });
        }
    }
});