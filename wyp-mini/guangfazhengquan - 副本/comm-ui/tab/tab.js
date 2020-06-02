Component({
    externalClasses: [ "active-tab-class" ],
    properties: {
        scroll: {
            type: Boolean,
            value: !1
        },
        fixed: {
            type: Boolean,
            value: !1
        },
        height: {
            type: Number,
            value: 0
        },
        list: {
            type: Array,
            value: []
        },
        selectedId: {
            type: [ String, Number ],
            value: ""
        }
    },
    data: {
        scrollLeft: 0
    },
    methods: {
        _handleScroll: function(e) {
            var t = this, l = wx.createSelectorQuery().in(this);
            l.select("#item-" + e).boundingClientRect(), l.select("#scroll-view").boundingClientRect(), 
            l.select("#scroll-view").scrollOffset(), l.exec(function(e) {
                t.setData({
                    scrollLeft: e[2].scrollLeft + e[0].left + e[0].width / 2 - e[1].width / 2
                });
            });
        },
        _handleTabChange: function(e) {
            var t = e.currentTarget.dataset, l = t.itemId, a = {
                gid: t.itemId,
                name: t.itemName
            };
            this.data.scroll && this._handleScroll(l), this.setData({
                selectedId: l
            }), this.triggerEvent("tabchange", a);
        }
    }
});