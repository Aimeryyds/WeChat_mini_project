Component({
    properties: {
        list: {
            type: Array,
            value: []
        },
        tabName: {
            type: String,
            value: "我的"
        },
        index: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        show: function() {
            var t = this.selectComponent("#home_gift_popup");
            t && t.show();
        },
        hide: function() {
            var t = this.selectComponent("#home_gift_popup");
            t && t.hide();
            var e = this.data, i = e.index, n = this;
            i + 1 < e.list.length && (this.setData({
                index: i + 1
            }), this.triggerEvent("updateindex", {
                index: i + 1
            }, {}), setTimeout(function() {
                n.show();
            }, 500));
        }
    }
});