getApp();

Page({
    data: {
        option: {}
    },
    onLoad: function(o) {
        console.log(o), this.setData({
            option: o
        });
    }
});