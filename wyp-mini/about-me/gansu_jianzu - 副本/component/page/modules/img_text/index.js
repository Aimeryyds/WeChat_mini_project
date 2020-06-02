function t(t, o, e) {
    return o in t ? Object.defineProperty(t, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = e, t;
}

var o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common.js"));

Component({
    behaviors: [ o.default ],
    properties: {
        module: {
            type: Object,
            observer: function(t, o) {
                o && o.options && this.onchangeConent();
            }
        }
    },
    data: {
        showMore: !0
    },
    ready: function() {
        this.onchangeConent();
    },
    methods: {
        hiddenMore: function() {
            this.setData({
                showMore: !1
            });
        },
        showMore: function() {
            this.setData({
                showMore: !0
            });
        },
        onchangeConent: function() {
            ("type1" == this.data.module.options.showType || "type2" == this.data.module.options.showType) && this.data.module.options.content.length > 105 ? this.setData(t({}, "module.options.showContent", this.data.module.options.content.substring(0, 104) + "...")) : "type3" == this.data.module.options.showType && this.data.module.options.content.length > 140 && this.setData(t({}, "module.options.showContent", this.data.module.options.content.substring(0, 138) + "..."));
        }
    }
});