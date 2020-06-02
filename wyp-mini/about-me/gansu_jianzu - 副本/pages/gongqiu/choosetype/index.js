Page({
    bindPublish: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a
        });
    }
});