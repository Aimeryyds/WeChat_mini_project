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
            var t = e.currentTarget.dataset.index, n = this.data.segements, o = t, i = n[t];
            if (i.checked = !0, i.sort && (i.order = "ascend"), i.options) {
                var s = this.selectComponent(".Options_Pop");
                this.setData({
                    currentOptions: i.options
                }), s && s.show();
            }
            i.sort && (i.order = "ascend" == i.order ? "descend" : "ascend"), this.triggerEvent("switch", i), 
            this.setData({
                segements: n,
                currentIndex: o
            });
        },
        onOptionChecked: function(e) {
            var t = this.data, n = t.segements, o = t.currentIndex, i = e.currentTarget.dataset.index;
            n[o].options.forEach(function(e, t) {
                e.checked = t == i;
            });
            var s = n[o].options.find(function(e) {
                return e.checked;
            });
            n[o].title = s ? s.title : "", this.setData({
                segements: n
            }), console.log("=========onOptionChecked=========", s), this.triggerEvent("optionchange", s);
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