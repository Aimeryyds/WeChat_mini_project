Page({
    data: {
        polyline: [ {
            points: [ {
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.32452,
                latitude: 23.21229
            } ],
            color: "#FF0000DD",
            width: 2,
            dottedLine: !0
        } ]
    },
    regionchange: function(t) {
        console.log(t.type);
    },
    markertap: function(t) {
        console.log(t.markerId);
    },
    controltap: function(t) {
        console.log(t.controlId);
    },
    onLoad: function() {
        var t = this;
        wx.request({
            url: "https://miniprogram.zretc.com/api/campus.json",
            success: function(o) {
                t.setData({
                    markers: o.data.markers,
                    list: o.data.list
                });
            }
        });
    }
});