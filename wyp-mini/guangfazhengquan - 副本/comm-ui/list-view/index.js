var e = require("../../components/utils");

Component({
    relations: {
        LIST_ITEM_PATH: {
            type: "child",
            linked: function() {
                this._updateIsLastElement("../list-item/index");
            },
            linkChanged: function() {
                this._updateIsLastElement("../list-item/index");
            },
            unlinked: function() {
                this._updateIsLastElement("../list-item/index");
            }
        },
        CARD_PATH: {
            type: "child",
            linked: function() {
                this._updateIsLastElement("../card/index");
            },
            linkChanged: function() {
                this._updateIsLastElement("../card/index");
            },
            unlinked: function() {
                this._updateIsLastElement("../card/index");
            }
        }
    },
    data: {
        elementUpdateTimeout: 0,
        hasChildren: !1,
        page: 1
    },
    properties: {
        loading: Boolean,
        noMore: Boolean
    },
    methods: {
        _updateIsLastElement: function(e) {
            var t = this;
            if (!(this.data.elementUpdateTimeout > 0)) {
                var n = setTimeout(function() {
                    var n = t.getRelationNodes(e);
                    if (t.setData({
                        elementUpdateTimeout: 0,
                        hasChildren: n.length > 0
                    }), n.length > 0) {
                        var i = n.length - 1;
                        n.forEach(function(e, t) {
                            e.updateIsLastElement(t === i);
                        });
                    }
                });
                this.setData({
                    elementUpdateTimeout: n
                });
            }
        },
        onLoadMore: function(t) {
            var n = (0, e.getData)(this, "page");
            -1 == t ? n = 1 : 1 == t && n++, this.triggerEvent("loadmoredata", n), (0, e.setData)(this, "page", n);
        }
    }
});