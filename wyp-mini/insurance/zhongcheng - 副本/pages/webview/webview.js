Page({
    onLoad: function(o) {
        console.log(o);
        var e = decodeURIComponent(o.url);
        console.log(e), this.setData({
            url: e
        });
    }
});