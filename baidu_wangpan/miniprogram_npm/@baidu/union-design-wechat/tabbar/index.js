Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../tabbar-item/index": {
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
        fixed: {
            type: Boolean,
            value: !1
        },
        paddingBottom: {
            type: String,
            value: 0
        }
    },
    data: {
        list: []
    },
    methods: {
        changeCurrent: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.current, n = this.getRelationNodes("../tabbar-item/index"), a = [];
            n.length && (n.forEach(function(n) {
                n.changeCurrent(n.data.key === e), n.changeCurrentColor(t.data.color), a.push(n.data.key);
            }), this.setData({
                list: a
            }));
        },
        hancleItemClick: function(t) {
            var e = t.currentTarget.dataset.key;
            this.triggerEvent("change", {
                key: e
            });
        }
    }
});