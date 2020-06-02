Page({
    data: {},
    inputType: function(t) {
        this.setData({
            typeCont: t.detail.value,
            classNum: 1
        });
    },
    formSubmit: function(t) {
        var a = this;
        wx.setStorage({
            key: "typeCont",
            data: {
                typeCont: a.data.typeCont,
                classNum: a.data.classNum
            }
        }), wx.navigateBack({
            delta: 2
        });
    }
});