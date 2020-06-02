Page({
    data: {
        url: ""
    },
    onLoad: function(r) {
        var a = JSON.parse(r.options);
        a.hasOwnProperty("url") && (this.setData({
            url: a.url
        }), console.log(a.url));
    }
});