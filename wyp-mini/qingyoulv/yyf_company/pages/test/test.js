var order = [ "red", "yellow", "blue", "green", "red" ];

Page({
    data: {
        toView: "red",
        scrollTop: 100
    },
    upper: function(o) {
        console.log(o);
    },
    lower: function(o) {
        console.log(o);
    },
    scroll: function(o) {
        console.log(o);
    },
    tap: function(o) {
        for (var e = 0; e < order.length; ++e) if (order[e] === this.data.toView) {
            this.setData({
                toView: order[e + 1]
            });
            break;
        }
    },
    tapMove: function(o) {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        });
    }
});