Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    properties: {
        textColor: {
            type: String,
            value: "#000"
        },
        activeTextColor: {
            type: String,
            value: "red"
        },
        segements: {
            type: Array,
            value: [],
            observer: "init"
        },
        filter: {
            type: Boolean,
            value: !0
        },
        filterActive: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    attached: function() {},
    ready: function() {
        this.init();
    },
    detached: function() {},
    methods: {
        init: function() {
            var e = this.data.segements;
            e.forEach(function(e) {
                if (e.options && e.options.length > 0) {
                    var t = e.options.find(function(e) {
                        return e.checked;
                    });
                    e.title = t ? t.title : "";
                }
            }), this.setData({
                segements: e
            });
        },
        onSwitch: function(e) {
            var t = e.currentTarget.dataset.index, n = this.data.segements, o = n.findIndex(function(e) {
                return e.checked;
            }), i = n[t];
            if (t == o) {
                if (i.sort && (i.order = "ascend" == i.order ? "descend" : "ascend", this.triggerEvent("switch", i)), 
                i.options) {
                    var s = this.selectComponent(".Options_Pop");
                    this.setData({
                        currentOptions: i.options
                    }), s && s.show();
                }
            } else n.forEach(function(e, t) {
                e.checked = !1, e.sort && (e.order = void 0);
            }), i.checked = !0, i.sort && (i.order = "ascend"), this.triggerEvent("switch", i);
            this.setData({
                segements: n
            });
        },
        onOptionChecked: function(e) {
            var t = this.data.segements, n = t.findIndex(function(e) {
                return e.checked;
            }), o = e.currentTarget.dataset.index;
            t[n].options.forEach(function(e, t) {
                e.checked = t == o;
            }), this.setData({
                segements: t
            });
        },
        showFilterPop: function(e) {
            var t = this.selectComponent(".Filter_Pop");
            t && t.show(), this.triggerEvent("onpopshow", {}, {
                composed: !0,
                bubbles: !0
            });
        },
        hideFilterPop: function(e) {
            var t = this.selectComponent(".Filter_Pop");
            t && t.hide(), this.triggerEvent("onpophide", {}, {
                composed: !0,
                bubbles: !0
            });
        }
    }
});