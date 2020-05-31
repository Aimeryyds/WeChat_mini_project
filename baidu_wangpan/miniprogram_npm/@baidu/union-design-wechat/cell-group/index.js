Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../cell/index": {
            type: "child",
            linked: function() {
                this._updateIsLastCell();
            },
            linkChanged: function() {
                this._updateIsLastCell();
            },
            unlinked: function() {
                this._updateIsLastCell();
            }
        }
    },
    methods: {
        _updateIsLastCell: function() {
            var t = this.getRelationNodes("../cell/index"), e = t.length;
            if (e > 0) {
                var l = e - 1;
                t.forEach(function(t, e) {
                    t.updateIsLastCell(e === l);
                });
            }
        }
    }
});