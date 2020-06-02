Page({
    data: {
        url: null
    },
    onLoad: function(t) {
        var a = t.url;
        a && a.indexOf("http:") > -1 && a.indexOf("https:") < 0 && (a = a.replace(/http:/g, "https:")), 
        this.setData({
            url: a
        });
    }
});