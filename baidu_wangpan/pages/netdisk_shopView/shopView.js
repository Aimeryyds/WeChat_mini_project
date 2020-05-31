Page({
    data: {
        url: ""
    },
    onLoad: function(t) {
        var a = t.url;
        this.setData({
            url: decodeURIComponent(a)
        });
    }
});