function n() {
    var n = this.getRelationNodes("../btn/index");
    if (n.length > 0) {
        var t = n.length - 1;
        n.forEach(function(n, i) {
            n.switchLastButtonStatus(i === t);
        });
    }
}

Component({
    relations: {
        "../btn/index": {
            type: "child",
            linked: function() {
                n.call(this);
            },
            linkChange: function() {
                n.call(this);
            },
            unlinked: function() {
                n.call(this);
            }
        }
    }
});