Component({
    properties: {},
    data: {
        rightmenu: !1
    },
    methods: {
        rightmenutap: function() {
            if (this.data.rightmenu) {
                console.log("rightmenu is true");
                var t = {}, e = {};
                this.triggerEvent("tobuildcard", t, e);
            } else {
                this.setData({
                    rightmenu: !0
                });
                var i = this;
                setTimeout(function() {
                    i.setData({
                        rightmenu: !1
                    });
                }, 3e3);
            }
        }
    }
});