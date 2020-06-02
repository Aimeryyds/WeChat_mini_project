Page({
    data: {
        markers: [ {
            iconPath: "/static/images/position_icon.png",
            id: 0,
            latitude: 34.62845,
            longitude: 112.42821,
            width: 50,
            height: 50
        } ]
    },
    onLoad: function(t) {
        this.setData({
            "markers[0].iconPath": t.pic,
            "markers[0].latitude": t.lat,
            "markers[0].longitude": t.lng,
            name: t.name,
            lat: t.lat,
            lng: t.lng
        });
    }
});