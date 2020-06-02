function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js"));

e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js"));

(0, t.default)({
    relations: {
        "../swipe-action/index": {
            type: "descendant",
            observer: function() {
                this.debounce(this.updated);
            }
        }
    },
    methods: {
        updated: function() {
            var e = this.getRelationNodes("../swipe-action/index");
            0 < e.length && e.forEach(function(e, t) {
                e.updated(t);
            });
        },
        onCloseSwipe: function(e) {
            var t = this.getRelationNodes("../swipe-action/index");
            0 < t.length && t.forEach(function(t, n) {
                e !== n && t.onClose();
            });
        }
    }
});